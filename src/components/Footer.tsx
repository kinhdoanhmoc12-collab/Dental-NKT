"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { Sparkles, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const { lang, t } = useLanguage();

  return (
    <footer className="bg-[#0b1e2c] text-slate-300 py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-900 w-full mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
        
        {/* Col 1: Brand Info */}
        <div className="space-y-4 md:col-span-3">
          <div className="flex items-center gap-2 text-white">
            <Sparkles className="w-6 h-6 text-teal-brand" />
            <span className="font-serif text-2xl sm:text-3xl font-extrabold tracking-tight">DentalNTK</span>
          </div>
          <p className="text-sm leading-relaxed text-slate-300 font-light">
            {t.footDesc}
          </p>
        </div>

        {/* Col 2: Services */}
        <div className="space-y-4 md:col-span-3">
          <h4 className="font-serif text-base font-bold text-white uppercase tracking-wider">{t.footTitleTreatments}</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/services/implants" className="hover:text-teal-brand transition-colors">{lang === "VN" ? "Cấy ghép răng Implant" : "Dental Implants"}</Link></li>
            <li><Link href="/services/allon4" className="hover:text-teal-brand transition-colors">{lang === "VN" ? "Hàm All-on-4" : "All-on-4 Arch"}</Link></li>
            <li><Link href="/services/allon6" className="hover:text-teal-brand transition-colors">{lang === "VN" ? "Hàm All-on-6" : "All-on-6 Arch"}</Link></li>
            <li><Link href="/services/crowns" className="hover:text-teal-brand transition-colors">{lang === "VN" ? "Mão răng sứ (Crowns)" : "Dental Crowns"}</Link></li>
            <li><Link href="/services/bridges" className="hover:text-teal-brand transition-colors">{lang === "VN" ? "Cầu răng sứ (Bridges)" : "Dental Bridges"}</Link></li>
            <li><Link href="/services/full-mouth-reconstruction" className="hover:text-teal-brand transition-colors">{lang === "VN" ? "Phục hồi toàn hàm" : "Full Mouth Reconstruction"}</Link></li>
            <li><Link href="/services/veneers" className="hover:text-teal-brand transition-colors">{lang === "VN" ? "Mặt dán sứ Veneers" : "Porcelain Veneers"}</Link></li>
            <li><Link href="/services/smile-makeover" className="hover:text-teal-brand transition-colors">{lang === "VN" ? "Thiết kế nụ cười (Smile Makeover)" : "Smile Makeover"}</Link></li>
            <li><Link href="/services/teeth-whitening" className="hover:text-teal-brand transition-colors">{lang === "VN" ? "Tẩy trắng răng" : "Teeth Whitening"}</Link></li>
            <li><Link href="/services/invisalign" className="hover:text-teal-brand transition-colors">{lang === "VN" ? "Niềng răng Invisalign" : "Invisalign Aligners"}</Link></li>
            <li><Link href="/services/root-canal" className="hover:text-teal-brand transition-colors">{lang === "VN" ? "Điều trị tủy (Root Canal)" : "Root Canal Treatment"}</Link></li>
            <li><Link href="/services/dentures" className="hover:text-teal-brand transition-colors">{lang === "VN" ? "Hàm giả tháo lắp" : "Removable Dentures"}</Link></li>
          </ul>
        </div>

        {/* Col 3: Travel Concierge */}
        <div className="space-y-4 md:col-span-3">
          <h4 className="font-serif text-base font-bold text-white uppercase tracking-wider">{t.footTitleTourism}</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/cost" className="hover:text-teal-brand transition-colors">{lang === "VN" ? "Đưa đón sân bay miễn phí" : "Free Airport Pickup"}</Link></li>
            <li><Link href="/cost" className="hover:text-teal-brand transition-colors">{lang === "VN" ? "Liên kết khách sạn Boutique" : "Partner Boutique Hotels"}</Link></li>
            <li><Link href="/cost" className="hover:text-teal-brand transition-colors">{lang === "VN" ? "Hướng dẫn visa & đi lại" : "Visa & Travel Guide"}</Link></li>
            <li><Link href="/blog" className="hover:text-teal-brand transition-colors">{lang === "VN" ? "Cẩm nang du lịch nha khoa" : "Dental Tourism Blog"}</Link></li>
            <li><Link href="/reviews" className="hover:text-teal-brand transition-colors">{lang === "VN" ? "Nhật ký câu chuyện bệnh nhân" : "Patient Success Stories"}</Link></li>
          </ul>
        </div>

        {/* Col 4: Contacts & Badges */}
        <div className="space-y-4 md:col-span-3">
          <h4 className="font-serif text-base font-bold text-white uppercase tracking-wider">{t.footTitleTouch}</h4>
          <ul className="space-y-3 text-sm">
            <li className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-teal-brand shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block text-sm mb-0.5">
                    {lang === "VN" ? "Cơ sở 1 (Thanh Xuân):" : "Branch 1 (Thanh Xuan):"}
                  </span>
                  <span className="leading-relaxed text-sm text-slate-300 block">
                    {lang === "VN"
                      ? "Số 38 Ngụy Như Kon Tum, Phường Nhân Chính, Quận Thanh Xuân, TP.Hà Nội"
                      : "38 Nguy Nhu Kon Tum, Nhan Chinh Ward, Thanh Xuan District, Hanoi"}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2 pt-2.5 border-t border-slate-800">
                <MapPin className="w-4 h-4 text-teal-brand shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block text-sm mb-0.5">
                    {lang === "VN" ? "Cơ sở 2 (Smart City):" : "Branch 2 (Smart City):"}
                  </span>
                  <span className="leading-relaxed text-sm text-slate-300 block">
                    {lang === "VN" ? "Parking Zone 4, Vinhome Smart City, Hà Nội" : "Parking Zone 4, Vinhome Smart City, Hanoi"}
                  </span>
                </div>
              </div>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="w-5 h-5 text-teal-brand shrink-0" />
              <a 
                href="https://wa.me/84963333844" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-teal-brand transition-colors font-mono font-bold"
              >
                WhatsApp: +84 963 333 844
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-5 h-5 text-teal-brand shrink-0" />
              <a href="mailto:cskh.nhakhoatre@gmail.com" className="hover:text-teal-brand transition-colors font-mono">cskh.nhakhoatre@gmail.com</a>
            </li>
          </ul>

          {/* Visual safety standards badges */}
          <div className="pt-4 flex items-center gap-3 border-t border-slate-800">
            <div className="border border-slate-700 px-2.5 py-1 rounded bg-slate-900/80 text-xs font-bold tracking-widest text-slate-300 uppercase">
              ISO 9001
            </div>
            <div className="border border-slate-700 px-2.5 py-1 rounded bg-slate-900/80 text-xs font-bold tracking-widest text-slate-300 uppercase">
              FDA Approved
            </div>
            <div className="border border-slate-700 px-2.5 py-1 rounded bg-slate-900/80 text-xs font-bold tracking-widest text-slate-300 uppercase">
              Global Warranty
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Bar: Copyright & Policies */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
        <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider text-center sm:text-left">
          {t.footCopyright}
        </p>
        <div className="flex flex-wrap justify-center sm:justify-end gap-5 text-slate-300">
          <Link href="/warranty" className="hover:text-teal-brand transition-colors font-bold text-teal-brand text-base">
            {lang === "VN" ? "Chính sách bảo hành" : "Warranty Policy"}
          </Link>
          <span className="text-slate-700">|</span>
          <Link href="/privacy" className="hover:text-teal-brand transition-colors">
            {lang === "VN" ? "Chính sách bảo mật" : "Privacy Policy"}
          </Link>
          <span className="text-slate-700">|</span>
          <Link href="/terms" className="hover:text-teal-brand transition-colors">
            {lang === "VN" ? "Điều khoản sử dụng" : "Terms of Service"}
          </Link>
        </div>
      </div>
    </footer>
  );
}
