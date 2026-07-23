"use client";

import React, { useEffect, useState } from "react";
import { Users, Search, Filter, Eye, ChevronRight, FileText, CheckCircle, RefreshCw, X } from "lucide-react";
import { apiFetch } from "../../../lib/api";
import { LeadItem } from "../../../types/crm";

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState<LeadItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedLead, setSelectedLead] = useState<LeadItem | null>(null);
  const [updating, setUpdating] = useState(false);
  
  // Multi-currency calculator in drawer
  const [currency, setCurrency] = useState<"AUD" | "USD" | "VND">("AUD");
  const [itemCount, setItemCount] = useState(1);

  // Price list mapping (approximate base prices in AUD)
  const treatmentPrices: Record<string, number> = {
    veneers: 450,       // per unit AUD
    implants: 1200,     // per implant AUD
    allon4: 9500,       // per arch AUD
    allon6: 12500,      // per arch AUD
    crowns: 400,        // per unit AUD
    bridges: 1100,      // per bridge AUD
    "smile-makeover": 8000,
    "full-reconstruction": 15000,
    whitening: 250,
    "root-canal": 150,
    invisalign: 4500,
    dentures: 600
  };

  // Currency conversion rates (1 AUD = 0.65 USD = 16,500 VND)
  const conversionRates = {
    AUD: 1.0,
    USD: 0.66,
    VND: 16500
  };

  useEffect(() => {
    loadLeads();
  }, [statusFilter]);

  async function loadLeads() {
    setLoading(true);
    try {
      const url = statusFilter === "all" ? "/leads?limit=100" : `/leads?limit=100&status=${statusFilter}`;
      const res = await apiFetch(url);
      if (res.success) {
        setLeads(res.data || []);
      }
    } catch (err) {
      console.error("Failed to load leads", err);
    } finally {
      setLoading(false);
    }
  }

  const handleUpdateStatus = async (id: string, newStatus: string) => {
    setUpdating(true);
    try {
      const res = await apiFetch(`/leads/${id}`, {
        method: "PUT",
        body: JSON.stringify({ status: newStatus }),
      });
      if (res.success) {
        // Update local list
        setLeads((prev) =>
          prev.map((l) => (l.id === id ? { ...l, status: newStatus } : l))
        );
        if (selectedLead && selectedLead.id === id) {
          setSelectedLead((prev) => prev ? { ...prev, status: newStatus } : null);
        }
      }
    } catch (err) {
      console.error(err);
      alert("Cập nhật trạng thái thất bại.");
    } finally {
      setUpdating(false);
    }
  };

  const getPriceEstimate = (treatment: string) => {
    const baseAud = treatmentPrices[treatment.toLowerCase()] || 0;
    if (baseAud === 0) return "N/A";
    
    const count = ["veneers", "implants", "crowns", "bridges"].includes(treatment.toLowerCase()) ? itemCount : 1;
    const audVal = baseAud * count;
    
    if (currency === "AUD") {
      return `$${audVal.toLocaleString()} AUD`;
    } else if (currency === "USD") {
      return `$${Math.round(audVal * conversionRates.USD).toLocaleString()} USD`;
    } else {
      return `${Math.round(audVal * conversionRates.VND).toLocaleString("vi-VN")} VND`;
    }
  };

  const filteredLeads = leads.filter((lead) => {
    const term = search.toLowerCase();
    return (
      lead.name.toLowerCase().includes(term) ||
      lead.treatment_interest.toLowerCase().includes(term) ||
      lead.email.toLowerCase().includes(term) ||
      lead.phone.toLowerCase().includes(term)
    );
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="font-serif text-3xl font-extrabold text-[#0b1e2c]">Quản lý Leads</h1>
        <p className="text-sm text-slate-500 font-light">Quản lý và chăm sóc khách hàng đăng ký tư vấn trực tuyến.</p>
      </div>

      {/* Filters and Search */}
      <div className="bg-white border border-slate-100 p-4 rounded-2xl shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-80">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
            <Search className="w-4 h-4" />
          </span>
          <input
            type="text"
            placeholder="Tìm kiếm Lead theo tên, SĐT, dịch vụ..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 focus:outline-none focus:border-teal-brand rounded-xl text-xs transition-colors"
          />
        </div>

        <div className="flex gap-2 items-center w-full md:w-auto">
          <Filter className="w-4 h-4 text-slate-400 shrink-0" />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-slate-50 border border-slate-200 focus:outline-none focus:border-teal-brand rounded-xl py-2.5 px-4 text-xs cursor-pointer transition-colors"
          >
            <option value="all">Tất cả Trạng thái</option>
            <option value="NEW">Mới (NEW)</option>
            <option value="CONTACTED">Đã liên hệ (CONTACTED)</option>
            <option value="CONVERTED">Đã chốt (CONVERTED)</option>
          </select>
          <button
            onClick={loadLeads}
            className="p-2.5 bg-slate-50 border border-slate-200 hover:bg-slate-100 rounded-xl text-slate-500 shrink-0 cursor-pointer"
            title="Tải lại danh sách"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Grid listing */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Table/List Panel */}
        <div className={`${selectedLead ? "lg:col-span-8" : "lg:col-span-12"} bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden transition-all duration-300`}>
          {loading ? (
            <div className="py-20 flex justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-brand"></div>
            </div>
          ) : filteredLeads.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 text-[10px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100">
                    <th className="py-4 px-6">Họ tên / Quốc gia</th>
                    <th className="py-4 px-6">Dịch vụ quan tâm</th>
                    <th className="py-4 px-6">Thời gian đăng ký</th>
                    <th className="py-4 px-6">Trạng thái</th>
                    <th className="py-4 px-6 text-right">Hành động</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700 text-xs">
                  {filteredLeads.map((lead) => (
                    <tr
                      key={lead.id}
                      onClick={() => setSelectedLead(lead)}
                      className={`hover:bg-slate-50/80 transition-colors cursor-pointer ${
                        selectedLead && selectedLead.id === lead.id ? "bg-slate-50" : ""
                      }`}
                    >
                      <td className="py-4 px-6 space-y-0.5">
                        <div className="font-bold text-slate-800 text-sm">{lead.name}</div>
                        <div className="text-slate-400 text-[10px] font-light">
                          {lead.country} • {lead.phone}
                        </div>
                      </td>
                      <td className="py-4 px-6 font-medium text-slate-700">
                        {lead.treatment_interest}
                      </td>
                      <td className="py-4 px-6 text-slate-500 font-light">
                        {lead.created_at || lead.createdAt ? new Date(lead.created_at || lead.createdAt!).toLocaleString("vi-VN") : "N/A"}
                      </td>
                      <td className="py-4 px-6">
                        <span className={`text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-md ${
                          lead.status === "CONVERTED"
                            ? "bg-emerald-100 text-emerald-600"
                            : lead.status === "CONTACTED"
                            ? "bg-amber-100 text-amber-600"
                            : "bg-sky-100 text-sky-600"
                        }`}>
                          {lead.status}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-right" onClick={(e) => e.stopPropagation()}>
                        <button
                          onClick={() => setSelectedLead(lead)}
                          className="p-2 bg-slate-100 text-slate-600 hover:bg-teal-brand hover:text-white rounded-lg transition-colors cursor-pointer"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="py-16 text-center text-slate-400 font-light text-sm">
              Không tìm thấy khách hàng nào khớp với tìm kiếm.
            </div>
          )}
        </div>

        {/* Lead Detail Panel (Right Sidebar) */}
        {selectedLead && (
          <div className="lg:col-span-4 space-y-6 transition-all duration-300">
            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm space-y-6 relative">
              <button
                onClick={() => setSelectedLead(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-1">
                <span className="text-[10px] font-bold text-teal-brand uppercase tracking-wider block">Chi tiết Lead</span>
                <h3 className="font-serif text-xl font-bold text-[#0b1e2c]">{selectedLead.name}</h3>
                <p className="text-xs text-slate-400">Đăng ký ngày: {selectedLead.created_at || selectedLead.createdAt ? new Date(selectedLead.created_at || selectedLead.createdAt!).toLocaleString("vi-VN") : "N/A"}</p>
              </div>

              {/* Info fields */}
              <div className="space-y-4 text-xs border-t border-b border-slate-100 py-4">
                <div className="grid grid-cols-2 gap-2">
                  <span className="text-slate-400 font-medium">SĐT WhatsApp:</span>
                  <div className="text-right">
                    <a
                      href={`https://wa.me/${selectedLead.phone.replace(/[^0-9]/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-teal-brand hover:underline"
                    >
                      {selectedLead.phone}
                    </a>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <span className="text-slate-400 font-medium">Email:</span>
                  <span className="font-medium text-slate-700 text-right break-all">{selectedLead.email}</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <span className="text-slate-400 font-medium">Quốc gia:</span>
                  <span className="font-medium text-slate-800 text-right">{selectedLead.country}</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <span className="text-slate-400 font-medium">Quan tâm điều trị:</span>
                  <span className="font-bold text-teal-brand text-right">{selectedLead.treatment_interest}</span>
                </div>
                {selectedLead.message && (
                  <div className="space-y-1 pt-2">
                    <span className="text-slate-400 font-medium block">Lời nhắn của khách:</span>
                    <p className="bg-slate-50 border border-slate-100 p-3 rounded-xl text-slate-600 font-light leading-relaxed">
                      {selectedLead.message}
                    </p>
                  </div>
                )}
                {selectedLead.x_ray_file_url && (
                  <div className="space-y-1 pt-2">
                    <span className="text-slate-400 font-medium block">Phim chụp X-Quang:</span>
                    <a
                      href={selectedLead.x_ray_file_url.startsWith("http") ? selectedLead.x_ray_file_url : `http://localhost:3000${selectedLead.x_ray_file_url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-teal-brand hover:underline font-bold"
                    >
                      <FileText className="w-4 h-4" />
                      <span>Xem ảnh X-Quang chụp răng</span>
                    </a>
                  </div>
                )}
              </div>

              {/* Status Update Control */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Cập nhật trạng thái</span>
                <div className="flex gap-2">
                  <select
                    value={selectedLead.status}
                    onChange={(e) => handleUpdateStatus(selectedLead.id, e.target.value)}
                    disabled={updating}
                    className="flex-1 bg-slate-50 border border-slate-200 focus:outline-none focus:border-teal-brand rounded-xl py-2.5 px-4 text-xs cursor-pointer font-bold text-slate-700"
                  >
                    <option value="NEW">MỚI (NEW)</option>
                    <option value="CONTACTED">ĐÃ LIÊN HỆ (CONTACTED)</option>
                    <option value="CONVERTED">ĐÃ CHỐT (CONVERTED)</option>
                  </select>
                </div>
              </div>

              {/* Pricing Estimator tool */}
              <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl space-y-4">
                <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                  <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wide">Ước tính Báo giá nhanh</h4>
                  <select
                    value={currency}
                    onChange={(e: any) => setCurrency(e.target.value)}
                    className="bg-white border border-slate-200 rounded-lg p-1 text-[10px] cursor-pointer"
                  >
                    <option value="AUD">AUD</option>
                    <option value="USD">USD</option>
                    <option value="VND">VND</option>
                  </select>
                </div>

                {["veneers", "implants", "crowns", "bridges"].includes(selectedLead.treatment_interest.toLowerCase()) && (
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500">Số lượng răng:</span>
                    <input
                      type="number"
                      min={1}
                      max={32}
                      value={itemCount}
                      onChange={(e) => setItemCount(parseInt(e.target.value, 10) || 1)}
                      className="w-16 p-1 border border-slate-200 rounded text-center"
                    />
                  </div>
                )}

                <div className="flex justify-between items-center text-xs font-bold text-slate-700">
                  <span>Tổng tiền ước tính:</span>
                  <span className="text-teal-brand text-sm">{getPriceEstimate(selectedLead.treatment_interest)}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
