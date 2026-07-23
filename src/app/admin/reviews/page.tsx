"use client";

import React, { useEffect, useState } from "react";
import { Star, Check, X, ShieldCheck, RefreshCw, Trash2, Plus, Clock, AlertCircle } from "lucide-react";
import { apiFetch } from "../../../lib/api";
import { ReviewItem } from "../../../types/crm";

export default function AdminReviewsPage() {
  const [reviews, setReviews] = useState<ReviewItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  // Add review form state
  const [showAddModal, setShowAddModal] = useState(false);
  const [newPatientName, setNewPatientName] = useState("");
  const [newRating, setNewRating] = useState(5);
  const [newContent, setNewContent] = useState("");
  const [publishImmediately, setPublishImmediately] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    loadReviews();
  }, []);

  async function loadReviews() {
    setLoading(true);
    try {
      const res = await apiFetch("/reviews/admin");
      if (res.success) {
        setReviews(res.data || []);
      }
    } catch (err) {
      console.error("Failed to load admin reviews", err);
    } finally {
      setLoading(false);
    }
  }

  const handleTogglePublish = async (id: string, currentStatus: boolean) => {
    setUpdatingId(id);
    try {
      const res = await apiFetch(`/reviews/${id}/publish`, {
        method: "PUT",
        body: JSON.stringify({ is_published: !currentStatus }),
      });
      if (res.success) {
        setReviews((prev) =>
          prev.map((r) => (r.id === id ? { ...r, is_published: !currentStatus } : r))
        );
      }
    } catch (err) {
      console.error(err);
      alert("Cập nhật trạng thái review thất bại.");
    } finally {
      setUpdatingId(null);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Bạn có chắc chắn muốn xóa đánh giá này không?")) return;

    setUpdatingId(id);
    try {
      const res = await apiFetch(`/reviews/${id}`, {
        method: "DELETE",
      });
      if (res.success) {
        setReviews((prev) => prev.filter((r) => r.id !== id));
      }
    } catch (err) {
      console.error(err);
      alert("Xóa đánh giá thất bại.");
    } finally {
      setUpdatingId(null);
    }
  };

  const handleAddReview = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPatientName.trim() || !newContent.trim()) {
      alert("Vui lòng điền đầy đủ tên khách hàng và nội dung đánh giá.");
      return;
    }
    setSubmitting(true);
    try {
      const res = await apiFetch("/reviews", {
        method: "POST",
        body: JSON.stringify({
          patient_name: newPatientName,
          rating: newRating,
          content: newContent,
        }),
      });

      if (res.success) {
        const createdReview = res.data;
        
        if (publishImmediately && createdReview && createdReview.id) {
          await apiFetch(`/reviews/${createdReview.id}/publish`, {
            method: "PUT",
            body: JSON.stringify({ is_published: true }),
          });
        }
        
        setNewPatientName("");
        setNewRating(5);
        setNewContent("");
        setPublishImmediately(true);
        setShowAddModal(false);
        loadReviews();
      }
    } catch (err: any) {
      console.error(err);
      alert(err.message || "Thêm đánh giá thất bại.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center border-b border-slate-100 pb-4">
        <div>
          <h1 className="font-serif text-3xl font-extrabold text-[#0b1e2c]">Kiểm duyệt Đánh giá (Reviews)</h1>
          <p className="text-sm text-slate-500 font-light">Kiểm duyệt các phản hồi và đánh giá từ khách hàng trước khi xuất bản lên website.</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center gap-2 px-4 py-2.5 bg-[#0b1e2c] hover:bg-teal-brand text-white rounded-xl text-xs font-bold shadow-sm hover:shadow-md cursor-pointer transition-all"
          >
            <Plus className="w-4 h-4" />
            <span>Thêm đánh giá</span>
          </button>
        </div>
      </div>

      {/* Grid List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          <div className="col-span-full py-20 flex justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-brand"></div>
          </div>
        ) : reviews.length > 0 ? (
          reviews.map((rev) => (
            <div
              key={rev.id}
              className={`bg-white rounded-2xl p-6 border transition-all flex flex-col justify-between relative shadow-sm hover:shadow-md ${
                rev.is_published ? "border-emerald-100" : "border-slate-200"
              }`}
            >
              <div className="space-y-4">
                {/* Header: Name and rating */}
                <div className="flex justify-between items-start">
                  <div className="space-y-0.5">
                    <h4 className="font-extrabold text-slate-900 text-base">{rev.patient_name}</h4>
                    <p className="text-xs text-slate-600 font-medium">
                      Ngày gửi: {rev.created_at || rev.createdAt ? new Date(rev.created_at || rev.createdAt!).toLocaleDateString("vi-VN") : "N/A"}
                    </p>
                  </div>
                  {/* Rating stars */}
                  <div className="flex gap-0.5 shrink-0">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < rev.rating ? "fill-gold-brand text-gold-brand" : "text-slate-200"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <p className="text-sm text-slate-900 font-normal leading-relaxed bg-slate-50 border border-slate-200 p-4 rounded-xl">
                  "{rev.content}"
                </p>
              </div>

              {/* Action bar */}
              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between">
                <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                  rev.is_published 
                    ? "bg-emerald-50 text-emerald-700" 
                    : "bg-amber-50 text-amber-700"
                }`}>
                  {rev.is_published ? (
                    <>
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Đã xuất bản</span>
                    </>
                  ) : (
                    <>
                      <Clock className="w-3.5 h-3.5" />
                      <span>Chờ duyệt</span>
                    </>
                  )}
                </span>

                <div className="flex gap-2">
                  <button
                    disabled={updatingId === rev.id}
                    onClick={() => handleTogglePublish(rev.id, rev.is_published)}
                    className={`flex items-center justify-center p-2 rounded-lg transition-all cursor-pointer ${
                      rev.is_published
                        ? "bg-slate-100 hover:bg-slate-200 text-slate-600"
                        : "bg-emerald-50 hover:bg-emerald-600 hover:text-white text-emerald-600"
                    }`}
                    title={rev.is_published ? "Ẩn bài viết" : "Duyệt xuất bản"}
                  >
                    {rev.is_published ? <X className="w-4 h-4" /> : <Check className="w-4 h-4" />}
                  </button>
                  <button
                    disabled={updatingId === rev.id}
                    onClick={() => handleDelete(rev.id)}
                    className="p-2 bg-rose-50 hover:bg-rose-600 hover:text-white text-rose-600 rounded-lg transition-all cursor-pointer"
                    title="Xóa đánh giá"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full py-16 text-center text-slate-400 font-light text-sm bg-white border border-slate-100 rounded-2xl">
            Không có đánh giá nào được gửi tới phòng khám.
          </div>
        )}
      </div>

      {/* Add Review Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 animate-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center border-b border-slate-100 pb-4 mb-6">
              <h2 className="font-serif text-2xl font-extrabold text-[#0b1e2c]">Thêm Đánh giá Mới</h2>
              <button 
                onClick={() => setShowAddModal(false)}
                className="p-1 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-lg transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddReview} className="space-y-5">
              {/* Tên khách hàng */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Tên Khách Hàng
                </label>
                <input
                  type="text"
                  required
                  value={newPatientName}
                  onChange={(e) => setNewPatientName(e.target.value)}
                  placeholder="Ví dụ: Anh Tuấn, Chị Lan..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-brand/20 focus:border-teal-brand text-sm transition-all"
                />
              </div>

              {/* Đánh giá sao */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                  Số Sao Đánh Giá
                </label>
                <div className="flex gap-1.5 pt-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setNewRating(star)}
                      className="transition-transform active:scale-95"
                    >
                      <Star
                        className={`w-8 h-8 ${
                          star <= newRating
                            ? "fill-gold-brand text-gold-brand"
                            : "text-slate-200 hover:text-gold-brand/40"
                        } transition-colors cursor-pointer`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Nội dung đánh giá */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Nội Dung Đánh Giá
                </label>
                <textarea
                  required
                  rows={4}
                  value={newContent}
                  onChange={(e) => setNewContent(e.target.value)}
                  placeholder="Nhập ý kiến phản hồi của khách hàng tại đây..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-brand/20 focus:border-teal-brand text-sm transition-all resize-none"
                />
              </div>

              {/* Xuất bản ngay */}
              <div className="flex items-center gap-3 pt-2">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={publishImmediately}
                    onChange={(e) => setPublishImmediately(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-brand"></div>
                </label>
                <span className="text-xs font-semibold text-slate-600">
                  Xuất bản công khai lên trang chủ ngay lập tức
                </span>
              </div>

              {/* Action buttons */}
              <div className="flex justify-end gap-3 border-t border-slate-100 pt-5 mt-6">
                <button
                  type="button"
                  disabled={submitting}
                  onClick={() => setShowAddModal(false)}
                  className="px-5 py-2.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-600 rounded-xl text-xs font-bold transition-all cursor-pointer"
                >
                  Hủy bỏ
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-5 py-2.5 bg-[#0b1e2c] hover:bg-teal-brand text-white rounded-xl text-xs font-bold transition-all shadow-sm hover:shadow-md cursor-pointer flex items-center gap-2"
                >
                  {submitting ? (
                    <div className="animate-spin rounded-full h-3.5 w-3.5 border-b-2 border-white"></div>
                  ) : (
                    <span>Thêm đánh giá</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
