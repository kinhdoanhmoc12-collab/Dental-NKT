"use client";

import React, { useEffect, useState } from "react";
import { Calendar, Search, RefreshCw, Clock, Check, X, ShieldAlert } from "lucide-react";
import { apiFetch } from "../../../lib/api";

export default function AdminAppointmentsPage() {
  const [appointments, setAppointments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  useEffect(() => {
    loadAppointments();
  }, []);

  async function loadAppointments() {
    setLoading(true);
    try {
      const res = await apiFetch("/appointments");
      if (res.success) {
        setAppointments(res.data || []);
      }
    } catch (err) {
      console.error("Failed to load appointments", err);
    } finally {
      setLoading(false);
    }
  }

  const handleUpdateStatus = async (id: number, newStatus: string) => {
    setUpdatingId(String(id));
    try {
      const res = await apiFetch(`/appointments/${id}`, {
        method: "PUT",
        body: JSON.stringify({ status: newStatus }),
      });
      if (res.success) {
        setAppointments((prev) =>
          prev.map((a) => (a.id === id ? { ...a, status: newStatus } : a))
        );
      }
    } catch (err) {
      console.error(err);
      alert("Cập nhật trạng thái lịch hẹn thất bại.");
    } finally {
      setUpdatingId(null);
    }
  };

  // Convert UTC date to Sydney/Melbourne time for display
  const formatAustralianTime = (dateStr: string) => {
    try {
      const date = new Date(dateStr);
      // Format to AEST (Australia/Sydney)
      return date.toLocaleString("en-AU", {
        timeZone: "Australia/Sydney",
        dateStyle: "medium",
        timeStyle: "short",
      }) + " (Sydney)";
    } catch {
      return "N/A";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-serif text-3xl font-extrabold text-[#0b1e2c]">Quản lý Lịch hẹn</h1>
          <p className="text-sm text-slate-500 font-light">Theo dõi lịch hẹn khám răng của khách hàng trong và ngoài nước.</p>
        </div>
        <button
          onClick={loadAppointments}
          className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 hover:bg-slate-50 rounded-xl text-xs font-bold text-slate-600 shadow-sm cursor-pointer"
        >
          <RefreshCw className="w-4 h-4" />
          <span>Tải lại</span>
        </button>
      </div>

      {/* Grid listing */}
      <div className="bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden">
        {loading ? (
          <div className="py-20 flex justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-brand"></div>
          </div>
        ) : appointments.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 text-[10px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100">
                  <th className="py-4 px-6">Tên Khách Hàng</th>
                  <th className="py-4 px-6">Giờ Việt Nam (ICT)</th>
                  <th className="py-4 px-6">Giờ Úc (AEST - Sydney)</th>
                  <th className="py-4 px-6">Ghi Chú</th>
                  <th className="py-4 px-6">Trạng thái</th>
                  <th className="py-4 px-6 text-right">Duyệt nhanh</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700 text-xs">
                {appointments.map((apt) => (
                  <tr key={apt.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-6 space-y-0.5">
                      <div className="font-bold text-slate-800 text-sm">
                        {apt.patient ? apt.patient.full_name : "Khách hàng quốc tế"}
                      </div>
                      <div className="text-slate-400 text-[10px] font-light">
                        Mã KH: {apt.patient ? apt.patient.code : "N/A"}
                      </div>
                    </td>
                    <td className="py-4 px-6 font-medium">
                      {new Date(apt.start_time).toLocaleString("vi-VN")}
                    </td>
                    <td className="py-4 px-6 text-slate-500 font-light">
                      {formatAustralianTime(apt.start_time)}
                    </td>
                    <td className="py-4 px-6 text-slate-500 max-w-xs truncate" title={apt.notes}>
                      {apt.notes || "---"}
                    </td>
                    <td className="py-4 px-6">
                      <span className={`text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-md ${
                        apt.status === "COMPLETED"
                          ? "bg-blue-100 text-blue-600"
                          : apt.status === "CONFIRMED"
                          ? "bg-emerald-100 text-emerald-600"
                          : apt.status === "CANCELLED"
                          ? "bg-rose-100 text-rose-600"
                          : "bg-amber-100 text-amber-600"
                      }`}>
                        {apt.status === "CONFIRMED" ? "Đã xác nhận" : apt.status === "COMPLETED" ? "Đã khám" : apt.status === "CANCELLED" ? "Đã hủy" : "Chờ duyệt"}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right" onClick={(e) => e.stopPropagation()}>
                      <div className="flex gap-2 justify-end">
                        {apt.status !== "CONFIRMED" && apt.status !== "COMPLETED" && (
                          <button
                            onClick={() => handleUpdateStatus(apt.id, "CONFIRMED")}
                            disabled={updatingId === String(apt.id)}
                            className="p-1.5 bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white rounded-lg transition-colors cursor-pointer"
                            title="Xác nhận lịch hẹn"
                          >
                            <Check className="w-4 h-4" />
                          </button>
                        )}
                        {apt.status !== "CANCELLED" && (
                          <button
                            onClick={() => handleUpdateStatus(apt.id, "CANCELLED")}
                            disabled={updatingId === String(apt.id)}
                            className="p-1.5 bg-rose-50 text-rose-600 hover:bg-rose-600 hover:text-white rounded-lg transition-colors cursor-pointer"
                            title="Hủy lịch hẹn"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="py-16 text-center text-slate-400 font-light text-sm">
            Hiện tại không có lịch hẹn khám nào được tìm thấy.
          </div>
        )}
      </div>
    </div>
  );
}
