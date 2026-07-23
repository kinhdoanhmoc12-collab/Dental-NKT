"use client";

import React, { useEffect, useState } from "react";
import { Users, Calendar, Award, AlertCircle, Plus, Clock, TrendingUp } from "lucide-react";
import Link from "next/link";
import { apiFetch } from "../../../lib/api";
import { WarrantyClaim, LeadItem } from "../../../types/crm";

export default function AdminDashboardPage() {
  const [leadsCount, setLeadsCount] = useState({ total: 0, new: 0, contacted: 0, converted: 0 });
  const [warrantyClaims, setWarrantyClaims] = useState<WarrantyClaim[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const token = localStorage.getItem("crm_token");
        const [leadsRes, warrantyRes] = await Promise.all([
          apiFetch("/leads?limit=100"),
          fetch("/api/warranty", {
            headers: token ? { Authorization: `Bearer ${token}` } : {}
          }).then(res => res.json()),
        ]);

        if (leadsRes.success) {
          const data = leadsRes.data || [];
          const counts = {
            total: data.length,
            new: data.filter((l: LeadItem) => l.status === "NEW").length,
            contacted: data.filter((l: LeadItem) => l.status === "CONTACTED").length,
            converted: data.filter((l: LeadItem) => l.status === "CONVERTED").length,
          };
          setLeadsCount(counts);
        }

        if (warrantyRes.success) {
          setWarrantyClaims(warrantyRes.data || []);
        }
      } catch (err) {
        console.error("Failed to load dashboard data", err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-brand"></div>
      </div>
    );
  }

  // Get recent 5 warranty claims
  const recentClaims = warrantyClaims.slice(0, 5);

  return (
    <div className="space-y-8">
      {/* Page Title */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="font-serif text-3xl font-extrabold text-[#0b1e2c]">CRM Dashboard</h1>
          <p className="text-sm text-slate-500 font-light">Chào mừng trở lại! Dưới đây là tóm tắt hoạt động phòng khám hôm nay.</p>
        </div>
      </div>

      {/* KPI Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* KPI 1 */}
        <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm flex items-center gap-5 hover:shadow-md transition-all">
          <div className="p-3.5 bg-teal-brand-light text-teal-brand rounded-xl shrink-0">
            <Users className="w-6 h-6" />
          </div>
          <div className="space-y-0.5">
            <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Tổng số Leads</p>
            <h3 className="text-2xl font-extrabold text-[#0b1e2c]">{leadsCount.total}</h3>
          </div>
        </div>

        {/* KPI 2 */}
        <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm flex items-center gap-5 hover:shadow-md transition-all">
          <div className="p-3.5 bg-sky-100 text-sky-600 rounded-xl shrink-0">
            <TrendingUp className="w-6 h-6" />
          </div>
          <div className="space-y-0.5">
            <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Leads Mới (Cần tư vấn)</p>
            <h3 className="text-2xl font-extrabold text-[#0b1e2c]">{leadsCount.new}</h3>
          </div>
        </div>

        {/* KPI 3 */}
        <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm flex items-center gap-5 hover:shadow-md transition-all">
          <div className="p-3.5 bg-amber-100 text-amber-600 rounded-xl shrink-0">
            <Clock className="w-6 h-6" />
          </div>
          <div className="space-y-0.5">
            <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Đã liên hệ</p>
            <h3 className="text-2xl font-extrabold text-[#0b1e2c]">{leadsCount.contacted}</h3>
          </div>
        </div>

        {/* KPI 4 */}
        <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm flex items-center gap-5 hover:shadow-md transition-all">
          <div className="p-3.5 bg-emerald-100 text-emerald-600 rounded-xl shrink-0">
            <Award className="w-6 h-6" />
          </div>
          <div className="space-y-0.5">
            <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Đã chuyển đổi</p>
            <h3 className="text-2xl font-extrabold text-[#0b1e2c]">{leadsCount.converted}</h3>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Recent Warranty Claims */}
        <div className="lg:col-span-7 bg-white border border-slate-100 rounded-2xl p-6 shadow-sm space-y-6">
          <div className="flex justify-between items-center pb-4 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-teal-brand" />
              <h3 className="text-lg font-serif font-bold text-[#0b1e2c]">Yêu cầu bảo hành mới nhận</h3>
            </div>
            <Link href="/admin/warranty" className="text-xs text-teal-brand hover:underline font-bold">
              Xem tất cả
            </Link>
          </div>

          <div className="space-y-4">
            {recentClaims.length > 0 ? (
              recentClaims.map((claim: WarrantyClaim) => (
                <div key={claim.id} className="flex justify-between items-center p-4 bg-slate-50 border border-slate-100 rounded-xl hover:bg-white hover:shadow-sm transition-all">
                  <div className="space-y-1">
                    <h4 className="font-bold text-slate-800 text-sm">
                      {claim.full_name}
                    </h4>
                    <p className="text-xs text-slate-400">
                      Mã: {claim.serial || "Không có serial"} • Ngày: {new Date(claim.createdAt).toLocaleDateString("vi-VN")}
                    </p>
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-md shrink-0 ${
                    claim.status === "RESOLVED"
                      ? "bg-emerald-100 text-emerald-600"
                      : claim.status === "REJECTED"
                      ? "bg-rose-100 text-rose-600"
                      : "bg-amber-100 text-amber-600"
                  }`}>
                    {claim.status === "RESOLVED" ? "Đã duyệt" : claim.status === "REJECTED" ? "Từ chối" : "Chờ xử lý"}
                  </span>
                </div>
              ))
            ) : (
              <div className="text-center py-10 text-slate-400 text-xs font-light">
                Không có yêu cầu bảo hành nào mới nhận.
              </div>
            )}
          </div>
        </div>

        {/* Right Side: CRM Conversion Funnel & Quick Actions */}
        <div className="lg:col-span-5 space-y-6">
          {/* Quick Actions */}
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm space-y-4">
            <h3 className="text-lg font-serif font-bold text-[#0b1e2c] border-b border-slate-100 pb-3">Thao tác nhanh</h3>
            <div className="grid grid-cols-1 gap-3">
              <Link
                href="/admin/leads"
                className="flex items-center gap-2 justify-center bg-teal-brand hover:bg-teal-brand-hover text-white py-3 px-4 rounded-xl text-xs font-bold transition-all shadow-sm"
              >
                <Plus className="w-4 h-4" />
                <span>Xem & Duyệt Leads mới</span>
              </Link>
              <Link
                href="/admin/blog"
                className="flex items-center gap-2 justify-center bg-[#0b1e2c] hover:bg-[#112a3d] text-white py-3 px-4 rounded-xl text-xs font-bold transition-all shadow-sm"
              >
                <Plus className="w-4 h-4" />
                <span>Viết cẩm nang Blog mới</span>
              </Link>
            </div>
          </div>

          {/* Quick Note Card */}
          <div className="bg-gradient-to-br from-[#0b1e2c] to-[#112a3d] text-white rounded-2xl p-6 shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-teal-brand/10 rounded-full blur-xl pointer-events-none" />
            <h4 className="font-serif font-bold text-sm mb-2">Lời nhắc CRM Nha Khoa</h4>
            <p className="text-xs text-slate-300 font-light leading-relaxed">
              Múi giờ của khách hàng từ Úc (AEST) nhanh hơn Việt Nam 3 tiếng. Hãy chú ý phản hồi nhanh chóng các yêu cầu tư vấn (Leads) và bảo hành của họ trước giờ sinh hoạt của khách để tăng tỷ lệ chốt thành công.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
