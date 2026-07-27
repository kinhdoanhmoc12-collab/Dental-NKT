"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
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
  Loader2,
} from "lucide-react";

/* ────────────────────────────────────────────────────────────────────────
   CASE DATA — Anh chỉ cần thay đổi danh sách này + bỏ file vào public/scans/
   ──────────────────────────────────────────────────────────────────────── */
const cases = [
  {
    id: 1,
    file: "/scans/case-1.html",
    avatar: "/images/cases/case_veneers.jpg",
    nameVN: "Case 1 — Răng sứ thẩm mỹ",
    nameEN: "Case 1 — Aesthetic Veneers",
    descVN:
      "Thiết kế nụ cười thẩm mỹ với 16 răng sứ E.max cao cấp, phục hình hoàn hảo về màu sắc và hình dáng tự nhiên.",
    descEN:
      "Aesthetic smile makeover with 16 premium E.max porcelain veneers, perfectly restoring natural translucency and shape.",
    tagVN: "Răng sứ thẩm mỹ",
    tagEN: "Aesthetic Porcelain",
    color: "from-teal-400 to-cyan-500",
  },
  {
    id: 2,
    file: "/scans/case-2.html",
    avatar: "/images/cases/case_implant.jpg",
    nameVN: "Case 2 — Phục hình toàn hàm",
    nameEN: "Case 2 — Full Arch Restoration",
    descVN:
      "Phục hình toàn diện hàm răng bị mất và suy yếu bằng hàm lai kim loại Titan và cầu răng sứ cao cấp.",
    descEN:
      "Comprehensive full-arch rehabilitation for missing and failing dentition using Titanium-acrylic hybrid bridge.",
    tagVN: "Phục hình toàn hàm",
    tagEN: "Full Arch",
    color: "from-blue-400 to-indigo-500",
  },
  {
    id: 3,
    file: "/scans/case-3.html",
    avatar: "/scans/case-3-avatar.jpg",
    nameVN: "Case 3 — Smile Makeover",
    nameEN: "Case 3 — Full Smile Makeover",
    descVN:
      "Thiết kế lại toàn bộ nụ cười kết hợp điều chỉnh nướu và bọc răng sứ thẩm mỹ, mang lại nụ cười rạng rỡ tự tin.",
    descEN:
      "Complete smile redesign combining aesthetic crown lengthening and premium porcelain restorations.",
    tagVN: "Smile Makeover",
    tagEN: "Smile Makeover",
    color: "from-purple-400 to-pink-500",
  },
];

/* ────────────────────────────────────────────────────────────────────────
   PAGE COMPONENT
   ──────────────────────────────────────────────────────────────────────── */
export default function Scan3DPage() {
  const { lang } = useLanguage();
  const isVN = lang === "VN";
  const [activeCase, setActiveCase] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);
  const [blobUrl, setBlobUrl] = useState<string | null>(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const [iframeReady, setIframeReady] = useState(false);
  const [downloadedMB, setDownloadedMB] = useState(0);
  const [totalMB, setTotalMB] = useState(0);
  const abortRef = useRef<AbortController | null>(null);

  const downloadFile = useCallback(async (url: string) => {
    setIsDownloading(true);
    setProgress(0);
    setBlobUrl(null);
    setIframeReady(false);
    setDownloadedMB(0);
    setTotalMB(0);

    const controller = new AbortController();
    abortRef.current = controller;

    try {
      const response = await fetch(url, { signal: controller.signal });
      
      // Nếu file không tồn tại (trả về 404 hoặc bị redirect về trang chủ)
      const contentType = response.headers.get("content-type");
      if (!response.ok || (contentType && !contentType.includes("text/html")) || response.redirected) {
        throw new Error("File not found or invalid format");
      }

      const contentLength = response.headers.get("content-length");
      const total = contentLength ? parseInt(contentLength, 10) : 0;
      setTotalMB(+(total / 1024 / 1024).toFixed(1));

      const reader = response.body?.getReader();
      if (!reader) return;

      const chunks: Uint8Array[] = [];
      let received = 0;

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        chunks.push(value);
        received += value.length;
        setDownloadedMB(+(received / 1024 / 1024).toFixed(1));
        if (total > 0) {
          setProgress(Math.round((received / total) * 100));
        }
      }

      const text = new TextDecoder().decode(chunks[0]?.slice(0, 500));
      if (text.includes("<!DOCTYPE html>") && (text.includes("Dental NTK") || text.includes("DentalNTK"))) {
        // Đây là trang web chính bị load nhầm do 404
        throw new Error("404 page loaded instead of 3D file");
      }

      const blob = new Blob(chunks as unknown as BlobPart[], { type: "text/html" });
      const url2 = URL.createObjectURL(blob);
      setBlobUrl(url2);
      setProgress(100);
    } catch (e) {
      if ((e as Error).name !== "AbortError") {
        console.error("Download error:", e);
        // Set một Blob báo lỗi thay vì load trang 404
        const errorHtml = `
          <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;font-family:sans-serif;color:#64748b;background:#0f172a;text-align:center;padding:20px;">
            <svg style="width:64px;height:64px;color:#f43f5e;margin-bottom:16px;" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
            </svg>
            <h3 style="color:#f8fafc;margin:0 0 8px 0;font-size:18px;">Mô hình 3D chưa sẵn sàng</h3>
            <p style="margin:0;font-size:14px;max-width:320px;line-height:1.5;">Bác sĩ đang xử lý và tải lên mô hình 3D cho ca điều trị này. Vui lòng thử lại sau.</p>
          </div>
        `;
        const errorBlob = new Blob([errorHtml], { type: "text/html" });
        setBlobUrl(URL.createObjectURL(errorBlob));
      }
    } finally {
      setIsDownloading(false);
    }
  }, []);

  const openViewer = (id: number) => {
    setActiveCase(id);
    const c = cases.find((c) => c.id === id);
    if (c) downloadFile(c.file);
  };

  const closeViewer = () => {
    if (abortRef.current) abortRef.current.abort();
    if (blobUrl) URL.revokeObjectURL(blobUrl);
    setActiveCase(null);
    setBlobUrl(null);
    setProgress(0);
    setIsDownloading(false);
    setIframeReady(false);
  };

  // Cleanup blob URL on unmount
  useEffect(() => {
    return () => {
      if (blobUrl) URL.revokeObjectURL(blobUrl);
    };
  }, [blobUrl]);

  const activeCaseData = cases.find((c) => c.id === activeCase);

  return (
    <>
      {/* ── SLIM HERO BANNER ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0b1e2c] via-[#0f2a3d] to-[#0b1e2c] text-white">
        {/* Decorative */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full bg-teal-brand/10 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-[300px] h-[300px] rounded-full bg-cyan-500/8 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-10 lg:py-14">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Left: title + description */}
            <div className="text-center lg:text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-4">
                <Box className="w-3.5 h-3.5 text-teal-brand" />
                <span className="text-xs font-medium text-teal-brand/90">
                  {isVN ? "Thiết kế nụ cười 3D Exocad" : "Exocad Smile Design"}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
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
              <p className="mt-3 text-base text-slate-300 leading-relaxed max-w-lg">
                {isVN
                  ? "Xem trước kết quả điều trị qua mô hình 3D tương tác — xoay, phóng to và khám phá từng chi tiết."
                  : "Preview treatment results with interactive 3D models — rotate, zoom, and explore every detail."}
              </p>
            </div>

            {/* Right: quick tips */}
            <div className="flex flex-row lg:flex-col gap-3">
              {[
                { icon: Move, textVN: "Kéo để xoay", textEN: "Drag to rotate" },
                { icon: ZoomIn, textVN: "Scroll để zoom", textEN: "Scroll to zoom" },
                { icon: Eye, textVN: "Bật/tắt lớp", textEN: "Toggle layers" },
              ].map((t, i) => (
                <div key={i} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10">
                  <t.icon className="w-4 h-4 text-teal-brand shrink-0" />
                  <span className="text-xs text-slate-300 whitespace-nowrap">{isVN ? t.textVN : t.textEN}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CASES GALLERY ── */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-brand/10 mb-2">
                <Sparkles className="w-3 h-3 text-teal-brand" />
                <span className="text-xs font-semibold text-teal-brand uppercase tracking-wider">
                  {isVN ? "Ca điều trị thực tế" : "Real Treatment Cases"}
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#0b1e2c]">
                {isVN ? "Các ca điều trị tiêu biểu" : "Featured Treatment Cases"}
              </h2>
            </div>
            <p className="hidden md:block text-sm text-slate-500 max-w-xs text-right">
              {isVN
                ? "Click vào từng case để xem mô hình 3D chi tiết"
                : "Click each case to view detailed 3D models"}
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cases.map((c, index) => (
              <button
                key={c.id}
                onClick={() => openViewer(c.id)}
                className="group relative flex flex-col text-left bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-teal-brand/30 transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(0,175,199,0.15)] cursor-pointer"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: "fadeIn 0.5s ease-out forwards",
                  opacity: 0,
                }}
              >
                {/* Avatar image header */}
                 <div
                  className="relative w-full h-48 bg-[#0b1e2c] overflow-hidden shrink-0"
                >
                  <Image
                    src={c.avatar}
                    alt={isVN ? c.nameVN : c.nameEN}
                    fill
                    className="object-cover w-full h-full scale-[1.01] group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Gradient overlay at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/30 to-transparent" />

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
                  <span className="inline-block text-xs font-semibold text-teal-brand bg-teal-brand/10 px-2.5 py-1 rounded-full mb-2">
                    {isVN ? c.tagVN : c.tagEN}
                  </span>

                  <h3 className="font-bold text-[#0b1e2c] text-lg leading-snug group-hover:text-teal-brand transition-colors">
                    {isVN ? c.nameVN : c.nameEN}
                  </h3>

                  <p className="mt-1.5 text-sm text-slate-500 leading-relaxed line-clamp-2">
                    {isVN ? c.descVN : c.descEN}
                  </p>

                  {/* CTA */}
                  <div className="mt-3 flex items-center gap-1.5 text-sm font-semibold text-teal-brand group-hover:gap-3 transition-all">
                    <span>{isVN ? "Xem mô hình 3D" : "View 3D Model"}</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </button>
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
            {/* Loading overlay */}
            {!iframeReady && (
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4">
                <Loader2 className="w-12 h-12 text-teal-brand animate-spin" />
                <p className="text-white font-semibold text-lg">
                  {isVN ? "Đang tải mô hình 3D..." : "Loading 3D model..."}
                </p>
                <p className="text-slate-400 text-sm max-w-xs text-center leading-relaxed">
                  {isVN
                    ? "Mô hình 3D chất lượng cao cần khoảng 30 giây để hiển thị chi tiết nhất cho bạn ✨"
                    : "High-quality 3D models need about 30 seconds to render the finest details for you ✨"}
                </p>
              </div>
            )}

            {blobUrl && (
              <iframe
                src={blobUrl}
                className={`absolute inset-0 w-full h-full border-0 transition-opacity duration-500 ${iframeReady ? 'opacity-100' : 'opacity-0'}`}
                title={isVN ? activeCaseData.nameVN : activeCaseData.nameEN}
                allow="fullscreen"
                sandbox="allow-scripts allow-same-origin"
                onLoad={() => setIframeReady(true)}
              />
            )}
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
