"use client";

import { useEffect } from "react";
import Link from "next/link";
import { RefreshCw, Home, AlertTriangle } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log exception for error tracking & analytics
    console.error("System Exception Captured:", error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-xl w-full text-center space-y-8 bg-white p-8 sm:p-12 rounded-3xl border border-rose-200/80 shadow-2xl relative overflow-hidden">
        <div className="w-16 h-16 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center mx-auto">
          <AlertTriangle className="w-8 h-8" />
        </div>

        <div className="space-y-3">
          <h1 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#0b1e2c]">
            Đã Xảy Ra Lỗi Hệ Thống / System Error
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-light">
            Ứng dụng gặp sự cố không mong muốn. Đội ngũ kỹ thuật đã nhận được thông báo để xử lý.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto bg-[#0b1e2c] text-white hover:bg-teal-brand hover:text-[#0b1e2c] px-6 py-3 rounded-full font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Thử Lại Ngay / Retry</span>
          </button>
          <Link
            href="/"
            className="w-full sm:w-auto bg-slate-100 hover:bg-slate-200 text-slate-800 px-6 py-3 rounded-full font-bold text-sm transition-all flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Về Trang Chủ</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
