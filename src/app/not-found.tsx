import React from "react";
import Link from "next/link";
import { Home, Calendar, Stethoscope } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#fcfcfc] px-4 py-16">
      <div className="max-w-md w-full text-center space-y-8 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl relative overflow-hidden">
        
        {/* Top brand accent stripe */}
        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-teal-brand via-slate-800 to-teal-brand" />
        
        <div className="space-y-3">
          <div className="w-16 h-16 bg-teal-brand/10 text-teal-brand rounded-2xl flex items-center justify-center mx-auto mb-4 animate-pulse">
            <span className="text-3xl font-bold font-serif">404</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#0b1e2c]">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
        </div>

        <div className="border-t border-slate-100 pt-6 space-y-3">
          <Link
            href="/"
            className="w-full flex items-center justify-center gap-2 bg-[#0b1e2c] hover:bg-slate-800 text-white py-3.5 px-6 font-bold text-xs rounded-full transition-all shadow-md cursor-pointer"
          >
            <Home className="w-4 h-4 text-teal-brand" />
            <span>Go Back Home</span>
          </Link>
          
          <div className="grid grid-cols-2 gap-3">
            <Link
              href="/services"
              className="flex items-center justify-center gap-1.5 bg-slate-50 hover:bg-slate-100 text-[#0b1e2c] border border-slate-200 py-3.5 px-4 font-bold text-xs rounded-full transition-all cursor-pointer"
            >
              <Stethoscope className="w-3.5 h-3.5 text-teal-brand" />
              <span>Services</span>
            </Link>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-1.5 bg-slate-50 hover:bg-slate-100 text-[#0b1e2c] border border-slate-200 py-3.5 px-4 font-bold text-xs rounded-full transition-all cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-teal-brand" />
              <span>Book Appointment</span>
            </Link>
          </div>
        </div>

        <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
          Dental NKT — World-class Dental Care
        </p>
      </div>
    </div>
  );
}
