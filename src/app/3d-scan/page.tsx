"use client";

import React, { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import {
  RotateCcw,
  ZoomIn,
  Move,
  X,
  Eye,
  Sparkles,
  ChevronRight,
  Box,
} from "lucide-react";

/* ────────────────────────────────────────────────────────────────────────
   CASE DATA — Anh chỉ cần thay đổi danh sách này + bỏ file vào public/scans/
   ──────────────────────────────────────────────────────────────────────── */
const cases = [
  {
    id: 1,
    file: "/scans/case-1.html",
    nameVN: "Case 1 — Dán sứ Veneer 16 răng",
    nameEN: "Case 1 — 16 Porcelain Veneers",
    descVN:
      "Thiết kế nụ cười hoàn hảo với 16 mặt dán sứ siêu mỏng E.max, cải thiện màu sắc và hình dáng răng.",
    descEN:
      "Perfect smile design with 16 ultra-thin E.max porcelain veneers, enhancing color and tooth shape.",
    tagVN: "Veneer E.max",
    tagEN: "E.max Veneers",
    color: "from-teal-400 to-cyan-500",
  },
  {
    id: 2,
    file: "/scans/case-2.html",
    nameVN: "Case 2 — Cấy ghép Implant & Phục hình sứ",
    nameEN: "Case 2 — Dental Implant & Porcelain Restoration",
    descVN:
      "Phục hồi răng mất bằng trụ Implant Straumann kết hợp mão sứ Zirconia, phục hình thẩm mỹ tự nhiên.",
    descEN:
      "Restoring missing teeth with Straumann Implants combined with Zirconia crowns for natural aesthetics.",
    tagVN: "Implant",
    tagEN: "Implant",
    color: "from-blue-400 to-indigo-500",
  },
  {
    id: 3,
    file: "/scans/case-3.html",
    nameVN: "Case 3 — Smile Makeover toàn diện",
    nameEN: "Case 3 — Full Smile Makeover",
    descVN:
      "Thiết kế lại toàn bộ nụ cười kết hợp chỉnh nha, tẩy trắng và dán sứ Veneer, mang lại diện mạo hoàn toàn mới.",
    descEN:
      "Complete smile redesign combining orthodontics, whitening and Veneers for a brand-new look.",
    tagVN: "Smile Makeover",
    tagEN: "Smile Makeover",
    color: "from-purple-400 to-pink-500",
  },
  {
    id: 4,
    file: "/scans/case-4.html",
    nameVN: "Case 4 — All-on-4 phục hình toàn hàm",
    nameEN: "Case 4 — All-on-4 Full Arch Restoration",
    descVN:
      "Phục hình toàn bộ hàm trên bằng kỹ thuật All-on-4, chỉ cần 4 trụ Implant cho một hàm răng hoàn chỉnh.",
    descEN:
      "Full upper arch restoration with All-on-4 technique — just 4 implants for a complete set of teeth.",
    tagVN: "All-on-4",
    tagEN: "All-on-4",
    color: "from-amber-400 to-orange-500",
  },
  {
    id: 5,
    file: "/scans/case-5.html",
    nameVN: "Case 5 — Mão sứ Zirconia 12 răng",
    nameEN: "Case 5 — 12 Zirconia Crowns",
    descVN:
      "Phục hình thẩm mỹ 12 răng bằng mão sứ Zirconia cao cấp, bền đẹp tự nhiên và tương thích sinh học.",
    descEN:
      "Aesthetic restoration of 12 teeth with premium Zirconia crowns — durable, natural, and biocompatible.",
    tagVN: "Mão sứ Zirconia",
    tagEN: "Zirconia Crowns",
    color: "from-emerald-400 to-teal-500",
  },
];

/* ────────────────────────────────────────────────────────────────────────
   PAGE COMPONENT
   ──────────────────────────────────────────────────────────────────────── */
export default function Scan3DPage() {
  const { lang } = useLanguage();
  const isVN = lang === "VN";
  const [activeCase, setActiveCase] = useState<number | null>(null);

  const openViewer = (id: number) => setActiveCase(id);
  const closeViewer = () => setActiveCase(null);

  const activeCaseData = cases.find((c) => c.id === activeCase);

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0b1e2c] via-[#0f2a3d] to-[#0b1e2c] text-white">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-teal-brand/10 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-cyan-500/8 blur-3xl" />
          {/* 3D grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-6">
              <Box className="w-4 h-4 text-teal-brand" />
              <span className="text-sm font-medium text-teal-brand/90">
                {isVN
                  ? "Công nghệ Exocad Smile Design"
                  : "Exocad Smile Design Technology"}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              {isVN ? (
                <>
                  Trải nghiệm{" "}
                  <span className="bg-gradient-to-r from-teal-brand to-cyan-400 bg-clip-text text-transparent">
                    Smile Design 3D
                  </span>
                </>
              ) : (
                <>
                  Experience{" "}
                  <span className="bg-gradient-to-r from-teal-brand to-cyan-400 bg-clip-text text-transparent">
                    3D Smile Design
                  </span>
                </>
              )}
            </h1>

            <p className="mt-5 text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
              {isVN
                ? "Xem trước kết quả điều trị qua mô hình 3D tương tác. Xoay, phóng to và khám phá từng chi tiết trên hàm răng đã được thiết kế bởi đội ngũ bác sĩ Nha Khoa Trẻ."
                : "Preview treatment results with interactive 3D models. Rotate, zoom, and explore every detail of smile designs crafted by our expert dental team."}
            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
              {[
                {
                  icon: RotateCcw,
                  textVN: "Xoay 360°",
                  textEN: "360° Rotation",
                },
                {
                  icon: ZoomIn,
                  textVN: "Phóng to chi tiết",
                  textEN: "Zoom In Details",
                },
                {
                  icon: Eye,
                  textVN: "Nhiều góc nhìn",
                  textEN: "Multiple Views",
                },
              ].map((feat, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
                >
                  <feat.icon className="w-4 h-4 text-teal-brand" />
                  <span className="text-sm font-medium text-slate-200">
                    {isVN ? feat.textVN : feat.textEN}
                  </span>
                </div>
              ))}
            </div>

            {/* Scroll prompt */}
            <div className="mt-12 flex flex-col items-center gap-2 animate-bounce">
              <span className="text-xs text-slate-400 uppercase tracking-widest">
                {isVN ? "Khám phá bên dưới" : "Explore below"}
              </span>
              <ChevronRight className="w-5 h-5 text-teal-brand rotate-90" />
            </div>
          </div>
        </div>
      </section>

      {/* ── CASES GALLERY ── */}
      <section className="relative bg-gradient-to-b from-slate-50 to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-brand/10 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-teal-brand" />
              <span className="text-xs font-semibold text-teal-brand uppercase tracking-wider">
                {isVN ? "Ca điều trị thực tế" : "Real Treatment Cases"}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0b1e2c]">
              {isVN
                ? "Các ca điều trị tiêu biểu"
                : "Featured Treatment Cases"}
            </h2>
            <p className="mt-3 text-slate-500 max-w-xl mx-auto">
              {isVN
                ? "Click vào từng case để xem mô hình 3D chi tiết — xoay, phóng to, bật tắt các lớp tuỳ ý."
                : "Click on each case to view detailed 3D models — rotate, zoom, and toggle layers freely."}
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {cases.map((c, index) => (
              <button
                key={c.id}
                onClick={() => openViewer(c.id)}
                className="group relative text-left bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-teal-brand/30 transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(0,175,199,0.15)] cursor-pointer"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: "fadeIn 0.5s ease-out forwards",
                  opacity: 0,
                }}
              >
                {/* Gradient header */}
                <div
                  className={`relative h-44 bg-gradient-to-br ${c.color} flex items-center justify-center overflow-hidden`}
                >
                  {/* 3D icon */}
                  <div className="relative z-10 flex flex-col items-center gap-3">
                    <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-500">
                      <Box className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-xs font-semibold text-white/80 uppercase tracking-wider">
                      3D Scan
                    </span>
                  </div>

                  {/* Decorative circles */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-white/10" />
                  <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-white/10" />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-3 group-hover:translate-y-0">
                      <div className="flex items-center gap-2 px-5 py-2.5 bg-white rounded-full text-sm font-semibold text-[#0b1e2c] shadow-lg">
                        <Eye className="w-4 h-4" />
                        {isVN ? "Xem 3D" : "View 3D"}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-5">
                  {/* Tag */}
                  <span className="inline-block text-xs font-semibold text-teal-brand bg-teal-brand/10 px-2.5 py-1 rounded-full mb-3">
                    {isVN ? c.tagVN : c.tagEN}
                  </span>

                  <h3 className="font-bold text-[#0b1e2c] text-lg leading-snug group-hover:text-teal-brand transition-colors">
                    {isVN ? c.nameVN : c.nameEN}
                  </h3>

                  <p className="mt-2 text-sm text-slate-500 leading-relaxed line-clamp-2">
                    {isVN ? c.descVN : c.descEN}
                  </p>

                  {/* CTA */}
                  <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-teal-brand group-hover:gap-3 transition-all">
                    <span>{isVN ? "Xem mô hình 3D" : "View 3D Model"}</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="bg-white py-16 lg:py-20 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-center text-[#0b1e2c] mb-10">
            {isVN ? "Hướng dẫn sử dụng" : "How to Interact"}
          </h2>

          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                icon: Move,
                titleVN: "Kéo để xoay",
                titleEN: "Drag to Rotate",
                descVN:
                  "Giữ chuột trái và kéo để xoay mô hình 3D theo mọi hướng.",
                descEN:
                  "Hold left mouse button and drag to rotate the 3D model in any direction.",
              },
              {
                icon: ZoomIn,
                titleVN: "Scroll để zoom",
                titleEN: "Scroll to Zoom",
                descVN:
                  "Cuộn chuột lên/xuống để phóng to hoặc thu nhỏ mô hình.",
                descEN:
                  "Scroll up/down to zoom in or out of the model.",
              },
              {
                icon: Eye,
                titleVN: "Bật/tắt lớp hiển thị",
                titleEN: "Toggle Layers",
                descVN:
                  "Sử dụng bảng điều khiển bên trái để ẩn/hiện các lớp: hàm, mô giải phẫu, ảnh mặt...",
                descEN:
                  "Use the left panel to show/hide layers: jaw scans, anatomic shapes, face scan...",
              },
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-brand/10 to-cyan-500/10 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-6 h-6 text-teal-brand" />
                </div>
                <h3 className="font-bold text-[#0b1e2c] mb-2">
                  {isVN ? step.titleVN : step.titleEN}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {isVN ? step.descVN : step.descEN}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FULLSCREEN 3D VIEWER MODAL ── */}
      {activeCaseData && (
        <div
          className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex flex-col"
          style={{ animation: "fadeIn 0.25s ease-out forwards" }}
        >
          {/* Top bar */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-[#0b1e2c]/95 backdrop-blur border-b border-white/10">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-8 h-8 rounded-lg bg-teal-brand/20 flex items-center justify-center shrink-0">
                <Box className="w-4 h-4 text-teal-brand" />
              </div>
              <div className="min-w-0">
                <h3 className="text-white font-semibold text-sm sm:text-base truncate">
                  {isVN ? activeCaseData.nameVN : activeCaseData.nameEN}
                </h3>
                <p className="text-slate-400 text-xs hidden sm:block">
                  {isVN
                    ? "Kéo để xoay • Scroll để zoom • Bảng bên trái để bật/tắt lớp"
                    : "Drag to rotate • Scroll to zoom • Left panel to toggle layers"}
                </p>
              </div>
            </div>
            <button
              onClick={closeViewer}
              className="w-9 h-9 rounded-xl bg-white/10 hover:bg-rose-500/80 flex items-center justify-center transition-colors cursor-pointer shrink-0 ml-3"
              aria-label="Close"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Iframe container */}
          <div className="flex-1 relative bg-[#1a1a2e]">
            <iframe
              src={activeCaseData.file}
              className="absolute inset-0 w-full h-full border-0"
              title={isVN ? activeCaseData.nameVN : activeCaseData.nameEN}
              allow="fullscreen"
              sandbox="allow-scripts allow-same-origin"
            />
          </div>

          {/* Mobile hint bar */}
          <div className="sm:hidden px-4 py-2.5 bg-[#0b1e2c]/95 backdrop-blur border-t border-white/10">
            <p className="text-center text-xs text-slate-400">
              {isVN
                ? "👆 Kéo để xoay • Chạm 2 ngón để zoom"
                : "👆 Drag to rotate • Pinch to zoom"}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
