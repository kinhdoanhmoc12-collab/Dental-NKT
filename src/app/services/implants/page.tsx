"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "../../../context/LanguageContext";
import { 
  Check, 
  X, 
  Shield, 
  Stethoscope, 
  Calendar, 
  ArrowLeft, 
  AlertTriangle, 
  Info, 
  Clock, 
  Plane, 
  DollarSign, 
  User, 
  ChevronDown, 
  ChevronUp, 
  Heart, 
  Award,
  Sparkles,
  Smartphone
} from "lucide-react";

export default function ImplantsPage() {
  const { lang } = useLanguage();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const isVN = lang === "VN";

  return (
    <div className="pt-6 pb-12 space-y-20 max-w-5xl mx-auto px-4 sm:px-6">
      
      {/* Top Header & Hero Container */}
      <div className="space-y-6">
        {/* Back Button */}
        <div>
          <Link 
            href="/services" 
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-teal-brand transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{isVN ? "Quay lại danh mục dịch vụ" : "Back to Services"}</span>
          </Link>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0b1e2c] via-[#0f2a3f] to-[#0b1e2c] text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-teal-brand/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 space-y-6 max-w-3xl">
          <span className="bg-teal-brand/20 text-teal-brand border border-teal-brand/30 text-xs font-bold py-1.5 px-4 rounded-full uppercase tracking-wider inline-flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isVN ? "CẤY GHÉP IMPLANT KỸ THUẬT SỐ" : "DIGITAL IMPLANTOLOGY"}</span>
          </span>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-white leading-tight [text-shadow:none]">
            {isVN ? "Cấy Ghép Răng Implant tại DentalNKT" : "Dental Implants at DentalNKT"}
          </h1>
          
          <p className="text-sm sm:text-base text-slate-200 font-normal leading-relaxed">
            {isVN 
              ? "Giải pháp phục hồi răng đã mất tối ưu nhất hiện nay — đặt trụ sinh học thay thế chân răng thật, phục hồi 99% lực ăn nhai tự nhiên, ngăn tiêu xương hàm mà không xâm lấn hay mài răng kế cận."
              : "The gold standard for tooth replacement. A biocompatible titanium post replaces your natural tooth root, restoring 99% of chew force, preventing bone loss, and leaving adjacent teeth untouched."}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-6 border-t border-slate-700/80">
            <div>
              <span className="text-xs text-slate-300 block font-medium">
                {isVN ? "Chi phí tham khảo chỉ từ:" : "Pricing starts from:"}
              </span>
              <span className="text-2xl sm:text-3xl font-extrabold text-teal-brand">
                {isVN ? "18.000.000 VNĐ / trụ" : "$975 AUD / post"}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Link 
                href="/contact" 
                className="bg-teal-brand hover:bg-teal-700 text-white font-bold px-7 py-3.5 rounded-full text-xs sm:text-sm transition-all shadow-lg hover:scale-105 whitespace-nowrap"
              >
                {isVN ? "Đăng Ký Tư Vấn Nụ Cười" : "Book Free Smile Assessment"}
              </Link>
              <a 
                href="https://wa.me/84963333844" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border border-slate-600 hover:border-teal-brand text-slate-200 hover:text-white px-5 py-3.5 rounded-full text-xs sm:text-sm transition-all font-semibold inline-flex items-center justify-center bg-transparent whitespace-nowrap"
              >
                WhatsApp Chat
              </a>
            </div>
          </div>
        </div>
      </section>
      </div>

      {/* 1. What is Implant */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-7 space-y-6">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-gold-brand" />
            <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-dark-brand">
              {isVN ? "1. Implant là gì?" : "1. What is a Dental Implant?"}
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-normal">
            {isVN
              ? "Cấy ghép Implant (Dental Implant) là giải pháp phục hồi răng đã mất bằng cách đặt một trụ titan (hoặc vật liệu tương thích sinh học) vào xương hàm, đóng vai trò như chân răng thật. Sau khi trụ tích hợp ổn định với xương, bác sĩ gắn khớp nối (Abutment) và mão răng sứ lên trên để phục hồi hình dáng, chức năng ăn nhai như răng thật."
              : "A dental implant is a high-tech replacement for a missing tooth root. A medical-grade titanium screw is surgically anchored into the jawbone, acting as a structural anchor. Once integrated, a custom-milled abutment and a porcelain crown are secured on top, matching your natural teeth perfectly."}
          </p>
          <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-normal">
            {isVN
              ? "Đây là giải pháp phục hồi răng mất được đánh giá cao nhất hiện nay vì không xâm lấn răng kế cận (khác với cầu răng sứ phải mài răng bên cạnh), và giúp ngăn tiêu xương hàm — vấn đề thường gặp khi mất răng lâu ngày không phục hồi."
              : "Implantology is widely regarded as the best restoration method because it prevents jawbone resorption (a common consequence of missing teeth) and eliminates the need to grind down surrounding healthy teeth."}
          </p>
        </div>
        <div className="md:col-span-5 bg-teal-brand-light/30 border border-teal-brand-light p-8 rounded-3xl space-y-4">
          <h3 className="text-base font-bold text-dark-brand">
            {isVN ? "Lợi ích vượt trội tại DentalNKT" : "Key Benefits at DentalNKT"}
          </h3>
          <ul className="space-y-3.5">
            {[
              isVN ? "Phục hồi 99% thẩm mỹ & lực nhai như răng thật" : "Restores 99% of original chewing power & aesthetics",
              isVN ? "Trụ tương thích sinh học cao, tích hợp xương nhanh" : "Highly biocompatible posts, rapid osseointegration",
              isVN ? "Bảo tồn tối đa răng thật xung quanh" : "Preserves adjacent natural teeth structure entirely",
              isVN ? "Ngăn ngừa tình trạng tiêu xương hàm hiệu quả" : "Stops progressive jawbone resorption",
              isVN ? "Độ bền lâu dài lên tới trọn đời nếu chăm sóc tốt" : "Can last a lifetime with proper oral hygiene"
            ].map((benefit, idx) => (
              <li key={idx} className="flex gap-2 items-start text-xs sm:text-sm text-slate-800">
                <Check className="w-4.5 h-4.5 text-teal-brand shrink-0 mt-0.5" />
                <span className="font-semibold">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 2. Candidates & Warnings */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-dark-brand">
            {isVN ? "2. Trường hợp Chỉ định & Thận trọng" : "2. Suitability & Clinical Guidelines"}
          </h2>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
            {isVN ? "Thông tin y học hỗ trợ bạn chuẩn bị tốt nhất trước khi gặp bác sĩ" : "Medical guidelines to help you prepare before your diagnostic scans"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Indications */}
          <div className="bg-emerald-50/20 border border-emerald-200 p-6 sm:p-8 rounded-3xl space-y-5">
            <div className="flex items-center gap-2.5 text-emerald-700">
              <div className="p-2 bg-emerald-100/50 rounded-xl">
                <Stethoscope className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold">{isVN ? "Đối tượng Phù hợp nhất" : "Ideal Candidates"}</h3>
            </div>
            <ul className="space-y-3">
              {[
                isVN ? "Mất một răng, nhiều răng, hoặc mất toàn bộ răng trên một/cả hai hàm;" : "Missing a single tooth, multiple teeth, or full arch tooth loss;",
                isVN ? "Xương hàm còn đủ thể tích đặt trụ, hoặc có thể ghép xương bổ sung;" : "Sufficient bone volume or open to minor bone grafting procedures;",
                isVN ? "Sức khỏe tổng quát ổn định, không có chống chỉ định phẫu thuật;" : "Stable overall health with no clinical surgery contraindications;",
                isVN ? "Muốn phục hồi ăn nhai chắc chắn, lâu dài thay vì hàm giả tháo lắp;" : "Desiring a secure, long-term solution rather than loose dentures;",
                isVN ? "Không muốn mài các răng thật bên cạnh để làm cầu răng sứ." : "Seeking to preserve neighboring teeth without any structural grinding."
              ].map((item, idx) => (
                <li key={idx} className="flex gap-2.5 items-start text-xs sm:text-sm text-slate-800 font-medium">
                  <Check className="w-4.5 h-4.5 text-emerald-700 shrink-0 mt-0.5" />
                  <span className="font-normal">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contraindications */}
          <div className="bg-amber-50/20 border border-amber-200 p-6 sm:p-8 rounded-3xl space-y-5">
            <div className="flex items-center gap-2.5 text-amber-800">
              <div className="p-2 bg-amber-100/50 rounded-xl">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold">{isVN ? "Các trường hợp Cần thận trọng" : "Precautions & Considerations"}</h3>
            </div>
            <ul className="space-y-3">
              {[
                isVN ? "Tiểu đường không kiểm soát, loãng xương nặng, hoặc đang xạ trị vùng đầu mặt;" : "Uncontrolled diabetes, severe osteoporosis, or head/neck radiation therapy;",
                isVN ? "Hút thuốc lá nhiều (khuyến nghị ngưng 2 tuần trước & sau cấy ghép);" : "Heavy smoking (quitting 2 weeks before and after surgery is advised);",
                isVN ? "Tiêu xương hàm nhiều, cần ghép xương/nâng xoang trước khi cấy ghép;" : "Severe jawbone loss requiring grafting/sinus lifts, extending treatment time;",
                isVN ? "Phụ nữ đang mang thai (thường hoãn thực hiện đến sau khi sinh);" : "Pregnancy (recommended to postpone dental surgery until post-delivery);",
                isVN ? "Thói quen nghiến răng nặng (cần làm máng bảo vệ để tránh quá tải lực implant)." : "Severe bruxism (requires a night guard to protect the implant against biting force)."
              ].map((item, idx) => (
                <li key={idx} className="flex gap-2.5 items-start text-xs sm:text-sm text-slate-800 font-medium">
                  <Info className="w-4.5 h-4.5 text-amber-700 shrink-0 mt-0.5" />
                  <span className="font-normal">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs sm:text-sm text-amber-900 font-semibold pt-1.5 border-t border-amber-200">
              {isVN 
                ? "* Bác sĩ sẽ đánh giá cụ thể qua phim CT/CBCT trước khi xác nhận bạn đủ điều kiện cấy ghép." 
                : "* A comprehensive diagnostic check using CT/CBCT scans is required to confirm surgery eligibility."}
            </p>
          </div>
        </div>
      </section>

      {/* 3. Method Comparison */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-dark-brand">
            {isVN ? "3. So Sánh Phương Pháp Phục Hình Răng" : "3. Implant vs. Bridges vs. Dentures"}
          </h2>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
            {isVN ? "Tìm hiểu lý do tại sao Implant là lựa chọn tối ưu dài hạn" : "Understand the key differences to make an informed medical decision"}
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-premium">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="p-4 sm:p-5 text-xs sm:text-sm font-bold text-dark-brand">{isVN ? "Tiêu chí so sánh" : "Features"}</th>
                  <th className="p-4 sm:p-5 text-xs sm:text-sm font-bold text-teal-brand bg-teal-brand-light/20">{isVN ? "Cấy ghép Implant" : "Dental Implant"}</th>
                  <th className="p-4 sm:p-5 text-xs sm:text-sm font-bold text-dark-brand">{isVN ? "Cầu răng sứ" : "Dental Bridge"}</th>
                  <th className="p-4 sm:p-5 text-xs sm:text-sm font-bold text-dark-brand">{isVN ? "Hàm giả tháo lắp" : "Removable Dentures"}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                <tr>
                  <td className="p-4 font-bold text-slate-900">{isVN ? "Ảnh hưởng răng kế cận" : "Impact on neighbor teeth"}</td>
                  <td className="p-4 bg-teal-brand-light/10 font-semibold text-slate-800">{isVN ? "Không, bảo tồn nguyên vẹn răng bên" : "None, neighbor teeth left completely intact"}</td>
                  <td className="p-4 text-slate-700 font-medium">{isVN ? "Bắt buộc mài răng thật bên cạnh làm trụ" : "Must grind down healthy adjacent teeth"}</td>
                  <td className="p-4 text-slate-700 font-medium">{isVN ? "Không mài, nhưng móc tì lên nướu & răng" : "Clips and base plates put pressure on gums"}</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-900">{isVN ? "Ngăn ngừa tiêu xương hàm" : "Prevents bone resorption"}</td>
                  <td className="p-4 bg-teal-brand-light/10 font-bold text-emerald-700">{isVN ? "Có hiệu quả (kích thích xương phát triển)" : "Yes (stimulates and preserves bone)"}</td>
                  <td className="p-4 text-rose-700 font-semibold">{isVN ? "Không ngăn được" : "No, bone continues to shrink"}</td>
                  <td className="p-4 text-rose-700 font-semibold">{isVN ? "Không ngăn được (gây tiêu xương nhanh hơn)" : "No, can accelerate bone loss"}</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-900">{isVN ? "Cảm giác & Lực ăn nhai" : "Chewing comfort & force"}</td>
                  <td className="p-4 bg-teal-brand-light/10 font-semibold text-slate-800">{isVN ? "Gần giống răng thật nhất (99%)" : "Like natural teeth (99% force)"}</td>
                  <td className="p-4 text-slate-700 font-medium">{isVN ? "Tốt (khoảng 70% lực nhai răng thật)" : "Good (approx 70% chew force)"}</td>
                  <td className="p-4 text-slate-700 font-medium">{isVN ? "Kém, lỏng lẻo, dễ bị tuột rơi" : "Poor, unstable, prone to slipping"}</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-900">{isVN ? "Thời gian điều trị" : "Treatment timeframe"}</td>
                  <td className="p-4 bg-teal-brand-light/10 text-slate-800 font-medium">{isVN ? "2 - 6 tháng (chờ tích hợp xương)" : "2 - 6 months (bone integration phase)"}</td>
                  <td className="p-4 text-slate-700 font-medium">{isVN ? "1 - 2 tuần" : "1 - 2 weeks"}</td>
                  <td className="p-4 text-slate-700 font-medium">{isVN ? "Nhanh nhất (chỉ vài ngày)" : "Fastest (few days)"}</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-900">{isVN ? "Độ bền tham khảo" : "Average Lifespan"}</td>
                  <td className="p-4 bg-teal-brand-light/10 text-slate-800 font-semibold">{isVN ? "Trụ từ 10 năm đến TRỌN ĐỜI; Mão sứ ~5 năm" : "Fixture: 10 years to LIFETIME; Crown: ~5 years"}</td>
                  <td className="p-4 text-slate-700 font-medium">{isVN ? "5 năm (cần thay thế định kỳ)" : "5 years (requires eventual replacement)"}</td>
                  <td className="p-4 text-slate-700 font-medium">{isVN ? "3 - 5 năm (cần đệm hàm do tiêu nướu)" : "3 - 5 years (requires adjustments)"}</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-900">{isVN ? "Tính xâm lấn lâm sàng" : "Clinical Invasiveness"}</td>
                  <td className="p-4 bg-teal-brand-light/10 text-slate-800 font-medium">{isVN ? "Cần phẫu thuật nhỏ đặt trụ" : "Requires minor surgical placement"}</td>
                  <td className="p-4 text-slate-700 font-medium">{isVN ? "Không phẫu thuật nhưng mài cấu trúc răng" : "Non-surgical but destroys tooth enamel"}</td>
                  <td className="p-4 text-slate-700 font-medium">{isVN ? "Hoàn toàn không xâm lấn" : "Completely non-invasive"}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-slate-50 p-4 border-t border-slate-200 text-xs sm:text-sm text-slate-800 font-semibold">
            {isVN 
              ? "Với các trường hợp mất răng toàn hàm, bác sĩ sẽ tư vấn giải pháp All-on-4 / All-on-6 để tiết kiệm chi phí và số lượng trụ cần cấy." 
              : "For full arch cases, we recommend All-on-4/6 systems which utilize fewer implants to securely support a complete bridge."}
          </div>
        </div>
      </section>

      {/* 4. Pricing Section */}
      <section className="space-y-8 bg-slate-50/50 border border-slate-200 p-8 sm:p-12 rounded-3xl">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-dark-brand">
            {isVN ? "4. Bảng Giá Cấy Ghép Implant Chi Tiết" : "4. Detailed Implant Price List"}
          </h2>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
            {isVN ? "Bảng giá dịch vụ áp dụng chính thức từ 01/07/2026 - Cam kết không phát sinh" : "Official pricing effective from July 1, 2026. No hidden fees, no surprises."}
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm min-w-[600px]">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 font-bold text-dark-brand">
                  <th className="p-4">{isVN ? "Hạng mục điều trị" : "Treatment Item"}</th>
                  <th className="p-4 text-center">{isVN ? "Đơn vị" : "Unit"}</th>
                  <th className="p-4 text-right">{isVN ? "Đơn giá (USD)" : "Price (USD)"}</th>
                  <th className="p-4 text-right">{isVN ? "Quy đổi (AUD)" : "Price (AUD)"}</th>
                </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-800 font-normal text-xs sm:text-sm">
                <tr className="font-semibold text-dark-brand bg-slate-50/40">
                  <td className="p-4" colSpan={4}>{isVN ? "1. Trụ Implant (Đã bao gồm máng hướng dẫn)" : "1. Implant Fixture (Includes guide template)"}</td>
                </tr>
                <tr>
                  <td className="p-4 pl-6">{isVN ? "Trụ HIOSSEN Mỹ (USA)" : "HIOSSEN Implant Post (USA)"}</td>
                  <td className="p-4 text-center">{isVN ? "1 trụ" : "1 post"}</td>
                  <td className="p-4 text-right font-semibold text-slate-900">$685 USD</td>
                  <td className="p-4 text-right font-semibold text-teal-brand">$975 AUD</td>
                </tr>
                <tr>
                  <td className="p-4 pl-6">{isVN ? "Trụ SIC Đức (Germany)" : "SIC Implant Post (Germany)"}</td>
                  <td className="p-4 text-center">{isVN ? "1 trụ" : "1 post"}</td>
                  <td className="p-4 text-right font-semibold text-slate-900">$1,141 USD</td>
                  <td className="p-4 text-right font-semibold text-teal-brand">$1,630 AUD</td>
                </tr>
                <tr>
                  <td className="p-4 pl-6">{isVN ? "Trụ STRAUMANN Thụy Sỹ (Switzerland)" : "STRAUMANN Implant Post (Switzerland)"}</td>
                  <td className="p-4 text-center">{isVN ? "1 trụ" : "1 post"}</td>
                  <td className="p-4 text-right font-semibold text-slate-900">$2,510 USD</td>
                  <td className="p-4 text-right font-semibold text-teal-brand">$3,580 AUD</td>
                </tr>

                <tr className="font-semibold text-dark-brand bg-slate-50/40">
                  <td className="p-4" colSpan={4}>{isVN ? "2. Mão răng sứ trên Implant" : "2. Prosthetic Crowns (on Implant)"}</td>
                </tr>
                <tr>
                  <td className="p-4 pl-6">{isVN ? "Phục hình trên Implant sứ Everes" : "Everes Ceramic Crown (on Implant)"}</td>
                  <td className="p-4 text-center">{isVN ? "1 răng" : "1 crown"}</td>
                  <td className="p-4 text-right font-semibold text-slate-900">$274 USD</td>
                  <td className="p-4 text-right font-semibold text-teal-brand">$390 AUD</td>
                </tr>
                <tr>
                  <td className="p-4 pl-6">{isVN ? "Phục hình trên Implant sứ Ceramil" : "Ceramil Ceramic Crown (on Implant)"}</td>
                  <td className="p-4 text-center">{isVN ? "1 răng" : "1 crown"}</td>
                  <td className="p-4 text-right font-semibold text-slate-900">$365 USD</td>
                  <td className="p-4 text-right font-semibold text-teal-brand">$520 AUD</td>
                </tr>
                <tr>
                  <td className="p-4 pl-6">{isVN ? "Phục hình trên Implant sứ Emax" : "Emax Ceramic Crown (on Implant)"}</td>
                  <td className="p-4 text-center">{isVN ? "1 răng" : "1 crown"}</td>
                  <td className="p-4 text-right font-semibold text-slate-900">$456 USD</td>
                  <td className="p-4 text-right font-semibold text-teal-brand">$650 AUD</td>
                </tr>

                <tr className="font-semibold text-dark-brand bg-slate-50/40">
                  <td className="p-4" colSpan={4}>{isVN ? "3. Các thủ thuật & Vật liệu bổ trợ" : "3. Additional Surgical Procedures"}</td>
                </tr>
                <tr>
                  <td className="p-4 pl-6">{isVN ? "Thanh 3 kim loại Titan" : "Titanium Bar (3 units)"}</td>
                  <td className="p-4 text-center">{isVN ? "1 hàm" : "1 arch"}</td>
                  <td className="p-4 text-right font-semibold text-slate-900">$1,370 USD</td>
                  <td className="p-4 text-right font-semibold text-teal-brand">$1,950 AUD</td>
                </tr>
                <tr>
                  <td className="p-4 pl-6">{isVN ? "Khớp kết nối Ball (Ball Abutment)" : "Ball Abutment"}</td>
                  <td className="p-4 text-center">{isVN ? "1 cái" : "1 unit"}</td>
                  <td className="p-4 text-right font-semibold text-slate-900">$228 USD</td>
                  <td className="p-4 text-right font-semibold text-teal-brand">$325 AUD</td>
                </tr>
                <tr>
                  <td className="p-4 pl-6">{isVN ? "Ghép xương cho Implant (Bone Grafting)" : "Bone Grafting (for Implant)"}</td>
                  <td className="p-4 text-center">{isVN ? "1 đơn vị" : "1 unit"}</td>
                  <td className="p-4 text-right font-semibold text-slate-900">$274 USD</td>
                  <td className="p-4 text-right font-semibold text-teal-brand">$390 AUD</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="text-xs sm:text-sm text-slate-600 font-semibold italic space-y-1">
          <p>
            {isVN
              ? "Tỷ giá quy đổi tham chiếu: 1 USD = 26.280 VNĐ."
              : "Reference exchange rate: 1 USD = 26,280 VND."}
          </p>
          <p>
            {isVN
              ? "Tỷ giá quy đổi tham chiếu: 1 AUD = 18.441 VNĐ. Giá thanh toán cuối cùng sẽ dựa trên tỷ giá thực tế ngày giao dịch."
              : "Reference exchange rate: 1 AUD = 18,441 VND. Final payment based on exchange rates at transaction date."}
          </p>
        </div>

        {/* Inclusions / Exclusions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          <div className="space-y-3 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h4 className="text-xs sm:text-sm font-bold text-dark-brand flex items-center gap-2">
              <Check className="w-4.5 h-4.5 text-teal-brand" />
              <span>{isVN ? "Chi phí đã bao gồm:" : "What's Included in the Quote:"}</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700 font-medium list-disc list-inside">
              <li>{isVN ? "Khám tổng quát, tư vấn & chụp phim CT/CBCT 3D ban đầu" : "Initial diagnostics: Consultation, exam & 3D CT/CBCT scan"}</li>
              <li>{isVN ? "Phẫu thuật đặt trụ implant & máng hướng dẫn máy tính" : "Computer-guided implant placement surgery"}</li>
              <li>{isVN ? "Thuốc giảm đau, kháng sinh sau phẫu thuật theo phác đồ" : "Surgical medications package (antibiotics & anti-inflammatories)"}</li>
              <li>{isVN ? "Khớp nối (Abutment) chính hãng đi kèm" : "Genuine titanium abutments"}</li>
              <li>{isVN ? "Mọi dịch vụ tái khám kiểm tra trong 2 đợt điều trị" : "All check-ups and sutures removal during your visits"}</li>
            </ul>
          </div>

          <div className="space-y-3 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h4 className="text-xs sm:text-sm font-bold text-dark-brand flex items-center gap-2">
              <X className="w-4.5 h-4.5 text-rose-500" />
              <span>{isVN ? "Chi phí chưa bao gồm:" : "What's Excluded:"}</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700 font-medium list-disc list-inside">
              <li>{isVN ? "Ghép xương bổ sung hoặc nâng xoang (chỉ khi phim CT chỉ định)" : "Bone grafting or sinus lift (only if bone density is insufficient)"}</li>
              <li>{isVN ? "Máng bảo vệ răng chống nghiến ban đêm (nếu có chỉ định)" : "Custom anti-bruxism night guard (if diagnosed)"}</li>
              <li>{isVN ? "Vé máy bay khứ hồi và chi phí lưu trú tại Hà Nội" : "Return flight tickets and accommodation bookings"}</li>
              <li>{isVN ? "Điều trị các bệnh nha chu nền trước khi phẫu thuật đặt trụ" : "Deep scaling or periodontitis treatment prior to implant surgery"}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. Surgeon Profile */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-dark-brand">
            {isVN ? "5. Ai Sẽ Thực Hiện Phẫu Thuật Cho Bạn?" : "5. Meet Your Implant Surgeon"}
          </h2>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
            {isVN ? "Phẫu thuật ngoại khoa cần được thực hiện bởi chuyên gia tay nghề cao" : "Implantology is surgical; your case is handled 1-on-1 by our Chief Surgeon"}
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-premium flex flex-col md:flex-row gap-8 items-center">
          <div className="w-48 h-48 bg-slate-50 rounded-2xl shrink-0 overflow-hidden relative border border-slate-200">
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-teal-brand-light text-teal-brand p-4 text-center">
              <User className="w-12 h-12 mb-2" />
              <span className="text-xs font-bold font-serif leading-tight">Dr. Nguyễn Huy Hoàng</span>
              <span className="text-[9px] font-sans opacity-80">{isVN ? "Giám đốc Lâm sàng" : "Clinical CCO"}</span>
            </div>
          </div>
          <div className="space-y-4 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="bg-teal-brand-light text-teal-brand text-[9px] font-bold py-1 px-3 rounded-full uppercase tracking-wider">
                {isVN ? "Trưởng khoa Cấy ghép Implant" : "Chief of Implantology"}
              </span>
              <span className="bg-slate-100 text-slate-700 text-[9px] font-bold py-1 px-3 rounded-full uppercase tracking-wider">
                {isVN ? "15+ Năm Kinh Nghiệm" : "15+ Years Experience"}
              </span>
            </div>
            <h3 className="text-xl font-serif font-extrabold text-dark-brand">
              {isVN ? "Bác sĩ Nguyễn Huy Hoàng" : "Dr. Nguyen Huy Hoang"}
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
              {isVN
                ? "Tốt nghiệp Đại học Y Hà Nội năm 2011, đào tạo chỉnh nha và cấy ghép nâng cao tại Đại học Cologne (Đức). Là thành viên tích cực của Hiệp hội Implant Việt Nam, Bác sĩ Hoàng đã cấy ghép thành công trên 15.000 ca lâm sàng. Đặc biệt, Bác sĩ Hoàng là bác sĩ phẫu thuật tình nguyện của tổ chức Operation Smile (Phẫu thuật nụ cười) thực hiện gần 1.000 ca phẫu thuật khe hở môi nhân đạo."
                : "Graduated from Hanoi Medical University in 2011, followed by advanced postgraduate clinical training at Cologne University (Germany). Dr. Hoang is a registered member of the Vietnam Implantology Association with over 15,000 implants placed. He also volunteers for Operation Smile, operating on nearly 1,000 cleft lip cases."}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm font-semibold text-slate-800 border-t border-slate-150 pt-4">
              <div>
                <span className="font-bold text-dark-brand">{isVN ? "Số chứng chỉ hành nghề:" : "Practicing License No:"}</span>
                <span className="ml-1 text-slate-700">009235/BYT-CCHN (Đã xác minh / Verified)</span>
              </div>
              <div>
                <span className="font-bold text-dark-brand">{isVN ? "Vô trùng phòng mổ:" : "Operating Theater Sterility:"}</span>
                <span className="ml-1 text-slate-500">{isVN ? "Tiêu chuẩn Autoclave Class B" : "Class B Autoclave Standards"}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Procedure Timeline & Tour Schedule */}
      <section className="space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-dark-brand">
            {isVN ? "6. Quy Trình & Lịch Trình Cho Khách Du Lịch" : "6. Procedure & Dental Tourism Timeline"}
          </h2>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
            {isVN ? "Implant là quy trình sinh học kéo dài, cần tối thiểu 2 chuyến đi để tích hợp xương" : "Implantology requires organic bone integration; treatments must be split into 2 separate visits"}
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden">
            <span className="absolute -top-4 -right-4 text-7xl font-serif font-bold text-slate-50 select-none pointer-events-none">1</span>
            <div className="space-y-3 relative z-10">
              <span className="text-teal-brand font-bold text-xs uppercase tracking-wider block">{isVN ? "Đợt 1: Khám & Đặt Trụ" : "Visit 1: Anchor Placement"}</span>
              <h3 className="font-bold text-sm text-dark-brand">{isVN ? "Chuyến đi 1 (4 - 7 ngày)" : "Trip 1 (4 - 7 days)"}</h3>
              <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                {isVN
                  ? "Khám lâm sàng, chụp CT 3D chẩn đoán mật độ xương. Phẫu thuật đặt trụ Implant (30-60 phút) dưới gây tê cục bộ, lắp răng tạm ăn nhai nhẹ và khâu đóng vết thương."
                  : "3D CT bone diagnostic scan. Pain-free computer-guided placement of titanium post (30-60 mins) under local anesthesia. Suture and temporary tooth attachment."}
              </p>
            </div>
          </div>

          <div className="bg-slate-50/50 p-6 rounded-2xl border border-slate-100 relative overflow-hidden">
            <span className="absolute -top-4 -right-4 text-7xl font-serif font-bold text-slate-100/50 select-none pointer-events-none">2</span>
            <div className="space-y-3 relative z-10">
              <span className="text-slate-400 font-bold text-xs uppercase tracking-wider block">{isVN ? "Giai đoạn ở nước nhà" : "Osseointegration at Home"}</span>
              <h3 className="font-bold text-sm text-dark-brand">{isVN ? "Tích hợp xương (2 - 6 tháng)" : "Healing Phase (2 - 6 months)"}</h3>
              <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                {isVN
                  ? "Trở về Úc sinh hoạt và làm việc bình thường. Xương hàm tự nhiên sẽ tích hợp sinh học chắc chắn xung quanh trụ titan. Theo dõi tiến trình từ xa với điều phối viên y khoa."
                  : "Fly back home and resume daily routines. The titanium fixture will organically fuse with your jawbone. Remote patient support checks in monthly."}
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden">
            <span className="absolute -top-4 -right-4 text-7xl font-serif font-bold text-slate-50 select-none pointer-events-none">3</span>
            <div className="space-y-3 relative z-10">
              <span className="text-teal-brand font-bold text-xs uppercase tracking-wider block">{isVN ? "Đợt 2: Phục Hình Hoàn Tất" : "Visit 2: Final Crown"}</span>
              <h3 className="font-bold text-sm text-dark-brand">{isVN ? "Chuyến đi 2 (3 - 5 ngày)" : "Trip 2 (3 - 5 days)"}</h3>
              <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                {isVN
                  ? "Chụp X-quang kiểm tra độ tích hợp trụ. Gắn khớp nối Abutment, lấy dấu răng và chế tác mão răng sứ CAD/CAM. Gắn mão sứ cố định vĩnh viễn và căn chỉnh khớp cắn."
                  : "Diagnostic X-ray to confirm bone fusion. Attachment of custom Abutment, digital impression scan. Fabrication and bonding of final porcelain crown."}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-teal-brand/5 border border-teal-brand-light p-5 rounded-2xl flex gap-3 items-start">
          <Info className="w-5 h-5 text-teal-brand shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-teal-brand-hover font-semibold leading-relaxed">
            {isVN
              ? "Lưu ý: Ca cấy ghép phức tạp cần nâng xoang hoặc ghép xương ổ lớn có thể kéo dài thời gian lành thương hoặc cần đợt điều trị bổ trợ theo chỉ định lâm sàng."
              : "Please note: Complex scenarios requiring extensive sinus lift or block bone grafts may involve extended healing times or an extra diagnostic visit."}
          </p>
        </div>
      </section>

      {/* 7. Post-Op Care */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-dark-brand">
            {isVN ? "7. Chăm Sóc Sau Phẫu Thuật Implant" : "7. Post-Op Care & Maintenance"}
          </h2>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
            {isVN ? "Tuân thủ chăm sóc quyết định 50% sự thành công và tuổi thọ của Implant" : "Patient post-op compliance determines 50% of the long-term success of the surgery"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm space-y-4">
            <h3 className="text-sm font-bold text-dark-brand flex items-center gap-2 text-teal-brand">
              <Clock className="w-5 h-5" />
              <span>{isVN ? "Giai đoạn đầu (Tuần đầu tiên)" : "Acute Recovery (Week 1)"}</span>
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 font-medium">
              <li className="flex gap-2 items-start">
                <Check className="w-4 h-4 text-teal-brand shrink-0 mt-0.5" />
                <span>{isVN ? "Chườm lạnh bên ngoài má trong 24-48 giờ đầu để giảm sưng bầm nhẹ." : "Apply cold compresses on the cheek for 24-48 hours to minimize swelling."}</span>
              </li>
              <li className="flex gap-2 items-start">
                <Check className="w-4 h-4 text-teal-brand shrink-0 mt-0.5" />
                <span>{isVN ? "Ăn cháo, súp mềm, nguội. Tránh nhai trực tiếp vào vùng vết thương." : "Eat soft, cold/lukewarm liquid foods. Avoid chewing near the surgical site."}</span>
              </li>
              <li className="flex gap-2 items-start">
                <Check className="w-4 h-4 text-teal-brand shrink-0 mt-0.5" />
                <span>{isVN ? "Uống đầy đủ thuốc giảm đau, kháng sinh đúng liều bác sĩ kê đơn." : "Strictly complete the prescribed course of pain relief and antibiotics."}</span>
              </li>
              <li className="flex gap-2 items-start">
                <Check className="w-4 h-4 text-teal-brand shrink-0 mt-0.5" />
                <span>{isVN ? "Không súc miệng mạnh, khạc nhổ hay chạm tay/lưỡi vào vết phẫu thuật." : "Do not spit aggressively, rinse vigorously, or touch the sutures."}</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm space-y-4">
            <h3 className="text-sm font-bold text-dark-brand flex items-center gap-2 text-teal-brand">
              <Heart className="w-5 h-5" />
              <span>{isVN ? "Duy trì lâu dài (Vĩnh viễn)" : "Long-Term Oral Hygiene"}</span>
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 font-medium">
              <li className="flex gap-2 items-start">
                <Check className="w-4 h-4 text-teal-brand shrink-0 mt-0.5" />
                <span>{isVN ? "Vệ sinh răng miệng kỹ: dùng bàn chải lông mềm, kết hợp chỉ nha khoa và tăm nước." : "Clean daily using a soft-bristled brush, dental floss, or a water flosser."}</span>
              </li>
              <li className="flex gap-2 items-start">
                <Check className="w-4 h-4 text-teal-brand shrink-0 mt-0.5" />
                <span>{isVN ? "Tuyệt đối không hút thuốc lá — đây là nguyên nhân gây đào thải implant hàng đầu." : "Strict smoking cessation — tobacco smoke blocks healing and causes failure."}</span>
              </li>
              <li className="flex gap-2 items-start">
                <Check className="w-4 h-4 text-teal-brand shrink-0 mt-0.5" />
                <span>{isVN ? "Đeo máng chống nghiến răng ban đêm bắt buộc nếu bác sĩ chẩn đoán nghiến răng." : "Always wear a night guard if diagnosed with severe nocturnal grinding."}</span>
              </li>
              <li className="flex gap-2 items-start">
                <Check className="w-4 h-4 text-teal-brand shrink-0 mt-0.5" />
                <span>{isVN ? "Tái khám kiểm tra định kỳ 6-12 tháng, chụp phim kiểm tra độ ổn định của xương hàm." : "Visit a dentist every 6-12 months with diagnostic X-rays to check bone level."}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 8. Warranty & International Support */}
      <section className="space-y-8 bg-slate-50/50 border border-slate-200 p-8 sm:p-12 rounded-3xl">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-dark-brand">
            {isVN ? "8. Chính Sách Bảo Hành & Hỗ Trợ Quốc Tế" : "8. Global Warranty & Support Policy"}
          </h2>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
            {isVN ? "Đồng hành và bảo vệ quyền lợi của bạn ngay cả khi đã quay về Úc" : "Continuous clinical backing and coverage once you return home to Australia"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Warranty Terms */}
          <div className="space-y-4 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-sm font-bold text-dark-brand">{isVN ? "Thời hạn bảo hành" : "Warranty Period"}</h3>
            <div className="divide-y divide-slate-100 text-xs sm:text-sm">
              <div className="py-2.5 flex justify-between">
                <span className="text-slate-600 font-semibold">{isVN ? "Trụ Implant (Sinh học)" : "Implant Post (Titanium)"}</span>
                <span className="font-bold text-teal-brand">{isVN ? "10 Năm" : "10 Years"}</span>
              </div>
              <div className="py-2.5 flex justify-between">
                <span className="text-slate-600 font-semibold">{isVN ? "Mão sứ trên Implant" : "Ceramic Crown (on Implant)"}</span>
                <span className="font-bold text-teal-brand">{isVN ? "5 Năm (Tính riêng biệt)" : "5 Years (Crown Only)"}</span>
              </div>
            </div>
            <p className="text-xs text-slate-500 font-medium leading-relaxed">
              {isVN
                ? "* Bảo hành có hiệu lực khi khách hàng vệ sinh răng miệng tốt, đeo máng chống nghiến (nếu chỉ định), không lạm dụng hút thuốc lá và tái khám đúng kỳ."
                : "* Valid under strict compliance: proper cleaning habits, wearing a night guard (if diagnosed), smoking cessation, and routine 6-12 month checks."}
            </p>
          </div>

          {/* International Support */}
          <div className="space-y-4 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-sm font-bold text-rose-750 flex items-center gap-1.5">
              <Plane className="w-4.5 h-4.5" />
              <span>{isVN ? "Hỗ trợ khi về Úc" : "Support In Australia"}</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
              {isVN
                ? "Nếu bạn gặp bất kỳ vấn đề gì về răng cấy ghép (sưng đỏ, lung lay, đau nhẹ), hãy liên hệ ngay với phòng khám trong vòng 7 ngày kèm ảnh chụp/mô tả. Bác sĩ sẽ phản hồi chẩn đoán từ xa trong 48 giờ."
                : "If you experience complications (pain, mobility, severe swelling) in Australia, notify us within 7 days. Our dental team will review and reply within 48 business hours."}
            </p>
            <p className="text-xs sm:text-sm text-rose-900 font-bold bg-rose-50 p-4 rounded-xl leading-relaxed">
              {isVN
                ? "Cam kết đặc biệt: Nếu sự cố được xác định thuộc lỗi kỹ thuật hoặc lỗi vật liệu do phòng khám, DentalNKT sẽ HỖ TRỢ 100% CHI PHÍ VÉ MÁY BAY KHỨ HỒI quay lại Việt Nam để điều trị khắc phục."
                : "Flight Coverage: In the rare event of a clinical or material failure under our responsibility, DentalNKT will fully cover your return flight ticket to Hanoi for corrective treatment."}
            </p>
          </div>
        </div>
      </section>

      {/* 9. FAQ Section */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-dark-brand">
            {isVN ? "9. Câu Hỏi Thường Gặp" : "9. Frequently Asked Questions"}
          </h2>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
            {isVN ? "Giải đáp thắc mắc phổ biến về dịch vụ cấy ghép Implant" : "Get expert answers to common queries regarding dental implants"}
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {[
            {
              qVN: "Cấy ghép răng Implant có đau không?",
              qAU: "Does getting a dental implant hurt?",
              aVN: "Phẫu thuật được thực hiện hoàn toàn dưới gây tê cục bộ tại chỗ, vì vậy bạn sẽ không cảm thấy bất cứ cơn đau nào trong quá trình phẫu thuật. Sau khi thuốc tê hết tác dụng, bạn có thể cảm thấy ê ẩm hoặc sưng nhẹ trong 3-5 ngày đầu. Tình trạng này dễ dàng được kiểm soát hoàn toàn bằng thuốc giảm đau và kháng viêm do bác sĩ kê toa.",
              aAU: "The surgical procedure is performed entirely under local anesthesia, so you will feel no pain during the surgery. After the anesthesia wears off, mild soreness and swelling may occur for 3-5 days. This is highly manageable using the medication package prescribed by our clinical team."
            },
            {
              qVN: "Tôi có thể hoàn thiện Implant trong một chuyến đi duy nhất không?",
              qAU: "Can I complete my dental implant in a single trip?",
              aVN: "Không thể đối với quy trình cấy ghép tiêu chuẩn. Do xương hàm cần thời gian sinh học từ 2-6 tháng để tích hợp tự nhiên xung quanh trụ titan trước khi chịu lực nhai vĩnh viễn. Trong một số ít trường hợp xương tốt, có thể cấy implant chịu lực tức thì (Immediate Loading) để hoàn thành trong 1 chuyến, tuy nhiên cần bác sĩ chỉ định trực tiếp qua phim chụp CT 3D.",
              aAU: "No, a standard dental implant cannot be finished in a single visit. Biologically, the jawbone requires 2-6 months to fuse with the titanium post before it can support a final crown. Under rare circumstances with exceptional bone density, 'Immediate Loading' may be possible in one trip, subject to strict clinical approval via a 3D CT scan."
            },
            {
              qVN: "Nếu xương hàm của tôi quá mỏng hoặc thiếu thể tích thì phải làm sao?",
              qAU: "What happens if my jawbone is too thin or weak?",
              aVN: "Tình trạng thiếu xương sẽ được phát hiện và chẩn đoán chính xác tuyệt đối qua phim chụp CT/CBCT 3D ban đầu. Bác sĩ sẽ lập kế hoạch ghép xương hoặc nâng xoang phù hợp cùng lúc cấy trụ hoặc trước đó. Toàn bộ lộ trình và chi phí bổ trợ này sẽ được thông báo rõ ràng trước khi phẫu thuật, cam kết không phát sinh bất kỳ chi phí ẩn nào.",
              aAU: "Insufficient bone volume will be clearly identified on your initial 3D CT scan. Dr. Hoang will recommend a bone graft or sinus lift, which can often be performed simultaneously with implant placement or as a separate step. All procedures and costs are agreed upon upfront, guaranteeing zero hidden charges."
            },
            {
              qVN: "Quyền lợi bảo hành của tôi có hiệu lực khi tôi đã về nước Úc không?",
              qAU: "Is my warranty valid after I return to Australia?",
              aVN: "Có, chính sách bảo hành 10 năm cho trụ và 5 năm cho mão răng tại DentalNKT là bảo hành quốc tế. Nếu có biến cố thuộc phạm vi trách nhiệm kỹ thuật/vật liệu của nha khoa, chúng tôi sẽ hỗ trợ toàn bộ chi phí vé máy bay khứ hồi để bạn quay lại Việt Nam khắc phục.",
              aAU: "Yes, our warranty (10 years for implant posts, 5 years for crowns) is fully valid internationally. In case of issues caused by clinical or material failure under our responsibility, we will cover your return flight ticket back to Hanoi for corrective treatment."
            },
            {
              qVN: "Tôi có cần khám bác sĩ nha khoa tại Úc trong thời gian chờ cấy mão không?",
              qAU: "Do I need to see a dentist in Australia during the healing period?",
              aVN: "Không bắt buộc. Bạn chỉ cần thực hiện chăm sóc răng miệng đúng cách tại nhà. Tuy nhiên, nếu bạn muốn chụp phim kiểm tra hoặc theo dõi tại Úc, DentalNKT sẽ cung cấp toàn bộ hồ sơ bệnh án kỹ thuật số bằng Tiếng Anh để nha sĩ tại Úc dễ dàng phối hợp theo dõi.",
              aAU: "It is not mandatory; you only need to follow our home care instructions. However, we will provide a complete digital medical dossier in English, allowing you to easily consult any local dentist in Australia for routine monitoring if desired."
            }
          ].map((faq, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-slate-150 shadow-sm overflow-hidden transition-luxury">
              <button 
                onClick={() => toggleFaq(idx)}
                className="w-full text-left p-5 flex justify-between items-center hover:bg-slate-50/50 transition-colors text-xs sm:text-sm font-bold text-dark-brand"
              >
                <span>
                  {isVN ? faq.qVN : faq.qAU}
                </span>
                {activeFaq === idx ? (
                  <ChevronUp className="w-4 h-4 text-teal-brand shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                )}
              </button>
              {activeFaq === idx && (
                <div className="p-5 pt-0 border-t border-slate-55 text-xs sm:text-sm text-slate-700 font-medium leading-relaxed bg-slate-50/20">
                  {isVN ? faq.aVN : faq.aAU}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Booking and Contact Call-to-action */}
      <section className="bg-dark-brand text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 relative overflow-hidden shadow-premium">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-brand/10 to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-2xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-4xl font-serif font-extrabold leading-tight">
            {isVN ? "Khôi Phục Nụ Cười Của Bạn Ngay Hôm Nhé" : "Ready to Restore Your Smile?"}
          </h2>
          <p className="text-sm sm:text-base text-slate-200 font-normal leading-relaxed">
            {isVN
              ? "Hãy gửi tình trạng răng miệng hoặc phim chụp X-quang/CT gần nhất của bạn qua Zalo/WhatsApp/Email. Đội ngũ bác sĩ chuyên khoa DentalNKT sẽ tư vấn chẩn đoán và lập phác đồ chi tiết hoàn toàn miễn phí trong vòng 24 - 48 giờ."
              : "Upload your dental photos or recent X-rays/CT scans. Our Clinical Board will perform a digital simulation, drafting a step-by-step treatment plan and exact cost estimate within 24-48 hours. Completely free of charge."}
          </p>

          <div className="flex flex-wrap gap-4 justify-center pt-2">
            <Link 
              href="/contact" 
              className="bg-teal-brand hover:bg-teal-brand-hover text-white px-8 py-3.5 font-bold text-xs rounded-full transition-luxury shadow-md"
            >
              {isVN ? "Đặt Lịch Tư Vấn Miễn Phí" : "Book Free Consultation"}
            </Link>
            <a 
              href="https://wa.me/84963333844" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3.5 font-bold text-xs rounded-full transition-luxury flex items-center gap-2"
            >
              <Smartphone className="w-4 h-4 text-teal-brand" />
              <span>{isVN ? "Gửi Phim qua WhatsApp" : "Send Scans via WhatsApp"}</span>
            </a>
            <Link 
              href="/warranty" 
              className="bg-transparent hover:text-teal-brand text-slate-300 px-6 py-3.5 font-bold text-xs rounded-full transition-colors underline"
            >
              {isVN ? "Xem Chính Sách Bảo Hành" : "View Warranty Policy"}
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
