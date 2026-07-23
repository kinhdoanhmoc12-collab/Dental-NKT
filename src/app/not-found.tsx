"use client";

import Link from "next/link";
import { ArrowLeft, Home, Search, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-xl w-full text-center space-y-8 bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/80 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-teal-brand/10 rounded-full blur-2xl pointer-events-none" />
        
        <div className="space-y-3 relative z-10">
          <span className="text-6xl sm:text-7xl font-serif font-extrabold text-[#0b1e2c] tracking-tight block">
            404
          </span>
          <div className="inline-flex items-center gap-2 bg-teal-brand/10 text-[#0b1e2c] border border-teal-brand/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-teal-brand" />
            <span>Trang Không Tồn Tại / Page Not Found</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-serif font-bold text-[#0b1e2c]">
            Đường dẫn bạn truy cập không chính xác hoặc đã được di chuyển.
          </h1>
          <p className="text-sm text-slate-500 leading-relaxed font-light">
            The page you are looking for might have been removed, renamed, or is temporarily unavailable.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
          <Link
            href="/"
            className="w-full sm:w-auto bg-[#0b1e2c] text-white hover:bg-teal-brand hover:text-[#0b1e2c] px-6 py-3 rounded-full font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-md"
          >
            <Home className="w-4 h-4" />
            <span>Về Trang Chủ</span>
          </Link>
          <Link
            href="/warranty"
            className="w-full sm:w-auto bg-slate-100 hover:bg-slate-200 text-slate-800 px-6 py-3 rounded-full font-bold text-sm transition-all flex items-center justify-center gap-2"
          >
            <Search className="w-4 h-4" />
            <span>Xem Chính Sách Bảo Hành</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
