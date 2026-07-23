"use client";

import React, { useEffect, useState } from "react";
import { Clock, Check, X, RefreshCw, Trash2, Mail, Phone, Key, FileText, CheckCircle2, XCircle } from "lucide-react";
import { WarrantyClaim } from "../../../types/crm";

export default function AdminWarrantyPage() {
  const [claims, setClaims] = useState<WarrantyClaim[]>([]);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<string>("ALL");

  useEffect(() => {
    loadClaims();
  }, []);

  const getAuthToken = () => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('crm_token');
    }
    return null;
  };

  const localFetch = async (path: string, options: RequestInit = {}) => {
    const token = getAuthToken();
    const headers = {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    };
    const response = await fetch(path, { ...options, headers });
    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }
    return response.json();
  };

  async function loadClaims() {
    setLoading(true);
    try {
      const res = await localFetch("/api/warranty");
      if (res.success) {
        setClaims(res.data || []);
      }
    } catch (err) {
      console.error("Failed to load warranty claims", err);
    } finally {
      setLoading(false);
    }
  }

  const handleUpdateStatus = async (id: string, newStatus: "PENDING" | "RESOLVED" | "REJECTED") => {
    setUpdatingId(id);
    try {
      const res = await localFetch("/api/warranty", {
        method: "PUT",
        body: JSON.stringify({ id, status: newStatus }),
      });
      if (res.success) {
        setClaims((prev) =>
          prev.map((c) => (c.id === id ? { ...c, status: newStatus } : c))
        );
      }
    } catch (err) {
      console.error(err);
      alert("Cập nhật trạng thái thất bại.");
    } finally {
      setUpdatingId(null);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Bạn có chắc chắn muốn xóa yêu cầu bảo hành này không?")) return;

    setUpdatingId(id);
    try {
      const res = await localFetch(`/api/warranty?id=${id}`, {
        method: "DELETE",
      });
      if (res.success) {
        setClaims((prev) => prev.filter((c) => c.id !== id));
      }
    } catch (err) {
      console.error(err);
      alert("Xóa yêu cầu thất bại.");
    } finally {
      setUpdatingId(null);
    }
  };

  const filteredClaims = statusFilter === "ALL" 
    ? claims 
    : claims.filter((claim) => claim.status === statusFilter);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="border-b border-slate-100 pb-4">
        <h1 className="font-serif text-3xl font-extrabold text-[#0b1e2c]">Quản lý Bảo hành (Warranty Claims)</h1>
        <p className="text-sm text-slate-500 font-light">Danh sách khách hàng gửi yêu cầu hỗ trợ hoặc bảo hành răng sứ & implant.</p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 pb-2">
        <button
          onClick={() => setStatusFilter("ALL")}
          className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            statusFilter === "ALL"
              ? "bg-[#0b1e2c] text-white shadow-sm"
              : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
          }`}
        >
          Tất cả ({claims.length})
        </button>
        <button
          onClick={() => setStatusFilter("PENDING")}
          className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            statusFilter === "PENDING"
              ? "bg-amber-500 text-white shadow-sm"
              : "bg-white border border-slate-200 text-amber-600 hover:bg-amber-50"
          }`}
        >
          Chờ xử lý ({claims.filter((c) => c.status === "PENDING").length})
        </button>
        <button
          onClick={() => setStatusFilter("RESOLVED")}
          className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            statusFilter === "RESOLVED"
              ? "bg-emerald-500 text-white shadow-sm"
              : "bg-white border border-slate-200 text-emerald-600 hover:bg-emerald-50"
          }`}
        >
          Đã giải quyết ({claims.filter((c) => c.status === "RESOLVED").length})
        </button>
        <button
          onClick={() => setStatusFilter("REJECTED")}
          className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            statusFilter === "REJECTED"
              ? "bg-rose-500 text-white shadow-sm"
              : "bg-white border border-slate-200 text-rose-600 hover:bg-rose-50"
          }`}
        >
          Đã từ chối ({claims.filter((c) => c.status === "REJECTED").length})
        </button>
      </div>

      {/* Grid List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {loading ? (
          <div className="col-span-full py-20 flex justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-brand"></div>
          </div>
        ) : filteredClaims.length > 0 ? (
          filteredClaims.map((claim) => (
            <div
              key={claim.id}
              className={`bg-white rounded-2xl p-6 border transition-all flex flex-col justify-between relative shadow-sm hover:shadow-md ${
                claim.status === "RESOLVED"
                  ? "border-emerald-100 bg-emerald-50/10"
                  : claim.status === "REJECTED"
                  ? "border-rose-100 bg-rose-50/10"
                  : "border-slate-200"
              }`}
            >
              <div className="space-y-4">
                {/* Header: Name and date */}
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <h4 className="font-extrabold text-slate-900 text-lg">{claim.full_name}</h4>
                    <p className="text-xs text-slate-600 font-medium">
                      Ngày gửi: {new Date(claim.createdAt).toLocaleString("vi-VN")}
                    </p>
                  </div>
                  
                  {/* Status Badge */}
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                    claim.status === "RESOLVED"
                      ? "bg-emerald-50 text-emerald-700"
                      : claim.status === "REJECTED"
                      ? "bg-rose-50 text-rose-700"
                      : "bg-amber-50 text-amber-700"
                  }`}>
                    {claim.status === "RESOLVED" ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Đã giải quyết</span>
                      </>
                    ) : claim.status === "REJECTED" ? (
                      <>
                        <XCircle className="w-3.5 h-3.5" />
                        <span>Đã từ chối</span>
                      </>
                    ) : (
                      <>
                        <Clock className="w-3.5 h-3.5" />
                        <span>Chờ xử lý</span>
                      </>
                    )}
                  </span>
                </div>

                {/* Contact Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-800 bg-slate-50/80 p-4 rounded-xl border border-slate-200">
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-teal-brand shrink-0" />
                    <span className="font-semibold">{claim.phone}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-teal-brand shrink-0" />
                    <span className="truncate font-semibold">{claim.email || "Không có email"}</span>
                  </div>
                  {claim.serial && (
                    <div className="flex items-center gap-2.5 sm:col-span-2 border-t border-slate-200/60 pt-2.5 mt-0.5">
                      <Key className="w-4 h-4 text-teal-brand shrink-0" />
                      <span className="font-mono bg-white px-2.5 py-1 rounded-lg border border-slate-300 text-xs font-bold text-slate-800">{claim.serial}</span>
                    </div>
                  )}
                </div>

                {/* Description */}
                <div className="space-y-1">
                  <span className="text-xs font-extrabold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-slate-500" />
                    Mô tả sự cố
                  </span>
                  <p className="text-sm text-slate-900 font-normal leading-relaxed bg-slate-50 border border-slate-200/80 p-4 rounded-xl whitespace-pre-line">
                    {claim.description}
                  </p>
                </div>
              </div>

              {/* Action bar */}
              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-end">
                <div className="flex gap-2">
                  {claim.status !== "RESOLVED" && (
                    <button
                      disabled={updatingId === claim.id}
                      onClick={() => handleUpdateStatus(claim.id, "RESOLVED")}
                      className="flex items-center justify-center p-2 bg-emerald-50 hover:bg-emerald-600 hover:text-white text-emerald-600 rounded-lg transition-all cursor-pointer"
                      title="Đánh dấu đã giải quyết"
                    >
                      <Check className="w-4 h-4" />
                    </button>
                  )}
                  {claim.status !== "REJECTED" && (
                    <button
                      disabled={updatingId === claim.id}
                      onClick={() => handleUpdateStatus(claim.id, "REJECTED")}
                      className="flex items-center justify-center p-2 bg-amber-50 hover:bg-amber-600 hover:text-white text-amber-600 rounded-lg transition-all cursor-pointer"
                      title="Đánh dấu từ chối"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                  {claim.status !== "PENDING" && (
                    <button
                      disabled={updatingId === claim.id}
                      onClick={() => handleUpdateStatus(claim.id, "PENDING")}
                      className="flex items-center justify-center p-2 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-lg transition-all cursor-pointer"
                      title="Đưa về hàng chờ"
                    >
                      <Clock className="w-4 h-4" />
                    </button>
                  )}
                  <button
                    disabled={updatingId === claim.id}
                    onClick={() => handleDelete(claim.id)}
                    className="p-2 bg-rose-50 hover:bg-rose-600 hover:text-white text-rose-600 rounded-lg transition-all cursor-pointer"
                    title="Xóa yêu cầu"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full py-16 text-center text-slate-400 font-light text-sm bg-white border border-slate-100 rounded-2xl">
            Không có yêu cầu bảo hành nào {statusFilter !== "ALL" ? `ở trạng thái ${statusFilter === "PENDING" ? "Chờ xử lý" : statusFilter === "RESOLVED" ? "Đã giải quyết" : "Đã từ chối"}` : "trong hệ thống"}.
          </div>
        )}
      </div>
    </div>
  );
}
