"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";
import { 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  FileText, 
  Phone, 
  Sparkles,
  Clock,
  AlertTriangle,
  Send,
  Plane,
  FileCheck,
  Stethoscope,
  Scale,
  Mail,
  HelpCircle,
  AlertCircle
} from "lucide-react";

export default function WarrantyPage() {
  const { lang } = useLanguage();

  const [claimForm, setClaimForm] = useState({
    name: "",
    phone: "",
    email: "",
    serial: "",
    description: ""
  });
  const [claimSubmitted, setClaimSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleClaimSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      const response = await fetch("/api/warranty", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          full_name: claimForm.name,
          phone: claimForm.phone,
          email: claimForm.email,
          serial: claimForm.serial,
          description: claimForm.description,
        }),
      });

      const resData = await response.json();
      if (response.ok && resData.success) {
        setClaimSubmitted(true);
        // Reset form
        setClaimForm({
          name: "",
          phone: "",
          email: "",
          serial: "",
          description: ""
        });
      } else {
        setError(resData.error || "Gửi yêu cầu bảo hành thất bại.");
      }
    } catch (err) {
      console.error(err);
      setError("Không thể gửi yêu cầu bảo hành. Vui lòng thử lại sau.");
    } finally {
      setSubmitting(false);
    }
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "DentalNTK - Nha Khoa Trẻ Hanoi",
    "url": "https://dentalntk.com/warranty",
    "logo": "https://dentalntk.com/logo.png",
    "description": "Official 11-section Dental Warranty Policy for Australian patients. Up to 10-year warranty on Emax Veneers & Implants with 100% round-trip flight ticket coverage.",
    "telephone": "+84963333844",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "38 Nguỵ Như Kon Tum",
      "addressLocality": "Thanh Xuân",
      "addressRegion": "Hà Nội",
      "addressCountry": "VN"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Dental Warranty Guarantee",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Emax Porcelain Veneer Warranty (7-10 Years)"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Hiossen & Straumann Implant Warranty (10 Years)"
          }
        }
      ]
    }
  };

  return (
    <div className="py-10 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Schema.org Structured Data for Google SEO Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* ========================================================
          HERO BANNER: WARRANTY GUARANTEE
          ======================================================== */}
      <section className="bg-gradient-to-br from-[#0b1e2c] via-[#112a3d] to-[#0b1e2c] text-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-brand/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
        
        <div className="relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 bg-teal-brand/20 text-teal-brand border border-teal-brand/30 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>{lang === "VN" ? "CHÍNH SÁCH BẢO HÀNH CHÍNH THỨC" : "OFFICIAL WARRANTY POLICY"}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold leading-tight text-white">
            {lang === "VN"
              ? "Chính Sách Bảo Hành DentalNTK"
              : "DentalNTK Official Warranty Policy"}
          </h1>
          
          <p className="text-lg sm:text-xl font-medium text-teal-brand">
            {lang === "VN"
              ? "Cam kết đồng hành cùng khách hàng Úc, kể cả khi bạn đã về nước"
              : "Committed to supporting Australian patients, even after returning home"}
          </p>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
            {lang === "VN"
              ? "DentalNTK hiểu rằng khi bạn bay về Úc, khoảng cách địa lý không có nghĩa là trách nhiệm của chúng tôi kết thúc. Chính sách này quy định rõ: ai chịu trách nhiệm, xử lý trong bao lâu, khi nào được hỗ trợ toàn bộ chi phí quay lại Việt Nam, và điều gì sẽ không được bảo hành — để bạn không phải đoán khi có vấn đề phát sinh."
              : "DentalNTK understands that when you fly back to Australia, geographical distance does not mean our responsibility ends. This policy clearly defines responsibilities, turnaround times, flight coverage eligibility back to Vietnam, and non-covered exclusions."}
          </p>

          <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15 text-xs sm:text-sm text-slate-200 flex items-start gap-3">
            <FileText className="w-5 h-5 text-teal-brand shrink-0 mt-0.5" />
            <span className="leading-relaxed">
              {lang === "VN"
                ? "Văn bản chính thức, ràng buộc pháp lý cho từng ca cụ thể là Hồ sơ bàn giao điều trị (Treatment Handover Pack) bạn nhận khi hoàn tất điều trị tại phòng khám. Trang này là bản tóm tắt để bạn hiểu trước khi quyết định điều trị."
                : "The official legally binding document for each case is your Treatment Handover Pack provided upon treatment completion. This page serves as a clear policy overview."}
            </span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-6 border-t border-slate-700/80">
            <div className="space-y-1">
              <strong className="text-2xl sm:text-3xl lg:text-4xl font-serif font-extrabold text-teal-brand block">10 {lang === "VN" ? "Năm" : "Years"}</strong>
              <span className="text-xs sm:text-sm text-slate-300 block font-medium">{lang === "VN" ? "Bảo hành Trụ Implant" : "Implant Fixture"}</span>
            </div>
            <div className="space-y-1">
              <strong className="text-2xl sm:text-3xl lg:text-4xl font-serif font-extrabold text-teal-brand block">7 {lang === "VN" ? "Năm" : "Years"}</strong>
              <span className="text-xs sm:text-sm text-slate-300 block font-medium">{lang === "VN" ? "Bảo hành Veneer Emax" : "Emax Veneers"}</span>
            </div>
            <div className="space-y-1">
              <strong className="text-2xl sm:text-3xl lg:text-4xl font-serif font-extrabold text-teal-brand block">100%</strong>
              <span className="text-xs sm:text-sm text-slate-300 block font-medium">{lang === "VN" ? "Hỗ trợ vé bay bảo hành" : "Flight Ticket Support"}</span>
            </div>
            <div className="space-y-1">
              <strong className="text-2xl sm:text-3xl lg:text-4xl font-serif font-extrabold text-teal-brand block">12h</strong>
              <span className="text-xs sm:text-sm text-slate-300 block font-medium">{lang === "VN" ? "Phản hồi từ xa tại Úc" : "SLA Australia Response"}</span>
            </div>
          </div>
        </div>
      </section>



      {/* ========================================================
          SECTION 1: CONDITIONS FOR WARRANTY ELIGIBILITY
          ======================================================== */}
      <section className="bg-slate-50 p-6 sm:p-10 rounded-3xl border border-slate-200/80 space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-[#0b1e2c]">
            {lang === "VN" ? "1. Điều Kiện Để Bảo Hành Có Hiệu Lực" : "1. Conditions for Warranty Eligibility"}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium">
            {lang === "VN" ? "Bảo hành áp dụng khi khách hàng đáp ứng đủ cả 4 điều kiện sau:" : "Warranty coverage applies when patients fulfill all 4 conditions:"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex items-start gap-4">
            <span className="w-9 h-9 rounded-full bg-teal-brand/20 text-[#0b1e2c] font-bold text-base flex items-center justify-center shrink-0">1</span>
            <div className="space-y-1.5 text-base sm:text-lg text-slate-700">
              <strong className="block text-[#0b1e2c] font-bold text-lg">{lang === "VN" ? "Hoàn tất liệu trình" : "Complete Treatment Plan"}</strong>
              <p className="leading-relaxed">{lang === "VN" ? "Hoàn tất toàn bộ liệu trình theo đúng kế hoạch điều trị đã ký, không tự ý dừng giữa chừng." : "Complete the full treatment plan as signed without premature self-discontinuation."}</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex items-start gap-4">
            <span className="w-9 h-9 rounded-full bg-teal-brand/20 text-[#0b1e2c] font-bold text-base flex items-center justify-center shrink-0">2</span>
            <div className="space-y-1.5 text-base sm:text-lg text-slate-700">
              <strong className="block text-[#0b1e2c] font-bold text-lg">{lang === "VN" ? "Thanh toán đầy đủ" : "Full Payment Completed"}</strong>
              <p className="leading-relaxed">{lang === "VN" ? "Đã thanh toán đầy đủ chi phí điều trị theo hợp đồng dịch vụ." : "Full settlement of treatment costs as agreed in the service contract."}</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex items-start gap-4">
            <span className="w-9 h-9 rounded-full bg-teal-brand/20 text-[#0b1e2c] font-bold text-base flex items-center justify-center shrink-0">3</span>
            <div className="space-y-1.5 text-base sm:text-lg text-slate-700">
              <strong className="block text-[#0b1e2c] font-bold text-lg">{lang === "VN" ? "Tuân thủ lịch tái khám" : "Follow Maintenance Schedule"}</strong>
              <p className="leading-relaxed">{lang === "VN" ? "Tuân thủ lịch tái khám định kỳ và hướng dẫn chăm sóc sau điều trị do DentalNTK cung cấp." : "Adhere to routine follow-up schedules and post-op care guidance from DentalNTK."}</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex items-start gap-4">
            <span className="w-9 h-9 rounded-full bg-teal-brand/20 text-[#0b1e2c] font-bold text-base flex items-center justify-center shrink-0">4</span>
            <div className="space-y-1.5 text-base sm:text-lg text-slate-700">
              <strong className="block text-[#0b1e2c] font-bold text-lg">{lang === "VN" ? "Báo cáo sự cố đúng thời hạn" : "Timely Incident Reporting"}</strong>
              <p className="leading-relaxed">{lang === "VN" ? "Báo cáo sự cố trong thời hạn quy định tại Mục 4, kèm hồ sơ hợp lệ." : "Report any incident within the timeframe specified in Section 4 with valid documentation."}</p>
            </div>
          </div>
        </div>

        <div className="p-5 bg-amber-50 border border-amber-200 rounded-2xl text-base sm:text-lg text-amber-900 flex items-center gap-3.5">
          <AlertCircle className="w-6 h-6 text-amber-600 shrink-0" />
          <span className="leading-relaxed font-medium">{lang === "VN" ? "Thiếu 1 trong 4 điều kiện trên, DentalNTK có quyền từ chối yêu cầu bảo hành hoặc xem xét theo từng trường hợp cụ thể." : "Missing any of the 4 conditions, DentalNTK reserves the right to decline or review warranty eligibility case-by-case."}</span>
        </div>
      </section>

      {/* ==========================================================
          SECTION 2: WARRANTY PERIOD TABLE BY TREATMENT GROUP
          ========================================================== */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-[#0b1e2c]">
            {lang === "VN" ? "2. Thời Hạn Bảo Hành Theo Danh Mục Điều Trị" : "2. Warranty Duration by Treatment Category"}
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            {lang === "VN" ? "Thời hạn tính từ ngày hoàn tất điều trị (ngày gắn phục hình cuối cùng), không phải ngày bắt đầu liệu trình." : "Warranty periods start from the final restoration placement date, not the initial appointment."}
          </p>
        </div>

        <div className="overflow-x-auto bg-white rounded-3xl border border-slate-200/80 shadow-sm">
          <table className="w-full text-left border-collapse text-sm sm:text-base">
            <thead>
              <tr className="bg-[#0b1e2c] text-white">
                <th className="p-4.5 sm:p-5 font-bold uppercase text-xs sm:text-sm tracking-wider">{lang === "VN" ? "Nhóm điều trị" : "Treatment Category"}</th>
                <th className="p-4.5 sm:p-5 font-bold uppercase text-xs sm:text-sm tracking-wider w-40 sm:w-48">{lang === "VN" ? "Thời hạn" : "Warranty Period"}</th>
                <th className="p-4.5 sm:p-5 font-bold uppercase text-xs sm:text-sm tracking-wider">{lang === "VN" ? "Ghi chú bắt buộc" : "Mandatory Notes"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr className="hover:bg-slate-50">
                <td className="p-4 font-bold text-[#0b1e2c]">
                  {lang === "VN" ? "Trám răng thẩm mỹ (Composite)" : "Cosmetic Composite Filling"}
                </td>
                <td className="p-4 font-bold text-teal-brand">
                  {lang === "VN" ? "6 tháng" : "6 Months"}
                </td>
                <td className="p-4 text-slate-500">
                  {lang === "VN" ? "Vật liệu có độ bền thấp hơn sứ, dễ đổi màu/mòn theo thời gian" : "Material has lower durability than ceramic; subject to wear/staining over time"}
                </td>
              </tr>
              <tr className="hover:bg-slate-50 bg-teal-brand/5">
                <td className="p-4 font-bold text-[#0b1e2c]">
                  {lang === "VN" ? "Veneer sứ Emax / sứ ép cao cấp" : "Emax Porcelain Veneers / Pressed Ceramic"}
                </td>
                <td className="p-4 font-bold text-teal-brand">
                  {lang === "VN" ? "7 năm" : "7 Years"}
                </td>
                <td className="p-4 text-slate-500">
                  {lang === "VN" ? "Áp dụng cho dòng sứ ép (Emax Press và tương đương)" : "Applies to Ivoclar Vivadent Emax Press or equivalent premium ceramic"}
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="p-4 font-bold text-[#0b1e2c]">
                  {lang === "VN" ? "Veneer / Mão sứ Zirconia" : "Zirconia Veneers & Porcelain Crowns"}
                </td>
                <td className="p-4 font-bold text-teal-brand">
                  {lang === "VN" ? "5 năm" : "5 Years"}
                </td>
                <td className="p-4 text-slate-500">
                  {lang === "VN" ? "Đảm bảo thẩm mỹ và chịu lực cao, bảo hành nứt vỡ sứ tự nhiên" : "High aesthetic translucency, covers natural porcelain chipping or fracture"}
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="p-4 font-bold text-[#0b1e2c]">
                  {lang === "VN" ? "Mão sứ kim loại (Titan / Kim loại thường)" : "PFM / Titanium Porcelain Crowns"}
                </td>
                <td className="p-4 font-bold text-teal-brand">
                  {lang === "VN" ? "5 năm" : "5 Years"}
                </td>
                <td className="p-4 text-slate-500">
                  {lang === "VN" ? "Bảo hành bong tróc lớp sứ phủ ngoài và nứt vỡ khung sườn" : "Covers outer porcelain layer delamination and framework fracture"}
                </td>
              </tr>
              <tr className="hover:bg-slate-50 bg-teal-brand/5">
                <td className="p-4 font-bold text-[#0b1e2c]">
                  {lang === "VN" ? "Mão sứ cao cấp (Lava, Lava Plus)" : "Premium Lava & Lava Plus Crowns"}
                </td>
                <td className="p-4 font-bold text-teal-brand">
                  {lang === "VN" ? "10 năm" : "10 Years"}
                </td>
                <td className="p-4 text-slate-500">
                  {lang === "VN" ? "Dòng vật liệu cao cấp, độ bền cao hơn Zirconia thông thường" : "Premium material with superior fracture resistance over standard Zirconia"}
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="p-4 font-bold text-[#0b1e2c]">
                  {lang === "VN" ? "Cầu răng sứ" : "Porcelain Dental Bridges"}
                </td>
                <td className="p-4 font-bold text-teal-brand">
                  {lang === "VN" ? "5 năm" : "5 Years"}
                </td>
                <td className="p-4 text-slate-500">
                  {lang === "VN" ? "Theo vật liệu tương ứng sử dụng cho cầu răng" : "Subject to the specific material grade selected for the bridge"}
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="p-4 font-bold text-[#0b1e2c]">
                  {lang === "VN" ? "Điều trị tủy" : "Root Canal Therapy (Endodontics)"}
                </td>
                <td className="p-4 font-bold text-teal-brand">
                  {lang === "VN" ? "1 năm" : "1 Year"}
                </td>
                <td className="p-4 text-amber-700 font-medium">
                  {lang === "VN" ? "Bắt buộc bọc sứ bảo vệ trong vòng 3 tháng sau điều trị tủy nếu có chỉ định" : "Mandatory crown placement within 3 months post-root canal if clinically indicated"}
                </td>
              </tr>
              <tr className="hover:bg-slate-50 bg-teal-brand/5">
                <td className="p-4 font-bold text-[#0b1e2c]">
                  {lang === "VN" ? "Trụ Implant (Hiossen / Straumann)" : "Dental Implant Fixture (Hiossen US / Straumann Swiss)"}
                </td>
                <td className="p-4 font-bold text-teal-brand">
                  {lang === "VN" ? "10 năm" : "10 Years"}
                </td>
                <td className="p-4 text-slate-500">
                  {lang === "VN" ? "Không có thương hiệu implant nào bảo hành trọn đời — xem Mục 3" : "No implant brand carries lifetime warranty — see Section 3"}
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="p-4 font-bold text-[#0b1e2c]">
                  {lang === "VN" ? "Mão / Phục hình trên Implant" : "Implant Abutment & Crown Restoration"}
                </td>
                <td className="p-4 font-bold text-teal-brand">
                  {lang === "VN" ? "5 năm" : "5 Years"}
                </td>
                <td className="p-4 text-slate-500">
                  {lang === "VN" ? "Riêng biệt với bảo hành trụ, không cộng dồn thời hạn" : "Independent from fixture warranty; non-cumulative"}
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="p-4 font-bold text-[#0b1e2c]">
                  {lang === "VN" ? "Chỉnh nha (Mắc cài / Invisalign)" : "Orthodontic Treatment (Braces / Invisalign)"}
                </td>
                <td className="p-4 font-bold text-teal-brand">
                  {lang === "VN" ? "2 năm sau tháo niềng" : "2 Years Post-Debonding"}
                </td>
                <td className="p-4 text-slate-500">
                  {lang === "VN" ? "Bắt buộc đeo hàm duy trì đúng lịch chỉ định" : "Mandatory retainer wear as prescribed by lead orthodontist"}
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="p-4 font-bold text-[#0b1e2c]">
                  {lang === "VN" ? "Tẩy trắng răng" : "Professional Teeth Whitening"}
                </td>
                <td className="p-4 font-bold text-slate-400">
                  {lang === "VN" ? "Không bảo hành" : "No Warranty"}
                </td>
                <td className="p-4 text-slate-500">
                  {lang === "VN" ? "Kết quả phụ thuộc cơ địa và chế độ ăn uống sau tẩy trắng" : "Shade longevity depends on diet, smoking & individual tooth structure"}
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="p-4 font-bold text-[#0b1e2c]">
                  {lang === "VN" ? "Nhổ răng / Tiểu phẫu" : "Tooth Extraction / Oral Surgery"}
                </td>
                <td className="p-4 font-bold text-teal-brand">
                  {lang === "VN" ? "30 ngày" : "30 Days"}
                </td>
                <td className="p-4 text-slate-500">
                  {lang === "VN" ? "Chỉ áp dụng cho biến chứng liên quan trực tiếp thủ thuật" : "Applies strictly to immediate post-procedural complications"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ==========================================================
          SECTION 3: IMPLANT SPECIAL WARRANTY PROVISIONS
          ========================================================== */}
      <section className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200/80 shadow-sm space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#0b1e2c]">
            {lang === "VN" ? "3. Điều Khoản Đặc Thù Cho Cấy Ghép Implant" : "3. Special Provisions for Dental Implants"}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {lang === "VN"
              ? "Implant liên quan đến phẫu thuật, quá trình lành xương, vệ sinh, lực nhai và bệnh nền — nên không thể áp một con số bảo hành chung cho mọi trường hợp."
              : "Implants involve bone healing, hygiene, bite forces, and systemic factors — requiring transparent specific terms."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm sm:text-base">
          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
            <strong className="text-[#0b1e2c] block font-bold">
              {lang === "VN" ? "1. Bảo hành trụ & mão riêng biệt" : "1. Separate Fixture & Crown Coverage"}
            </strong>
            <p className="text-slate-600 leading-relaxed">
              {lang === "VN"
                ? "Bảo hành trụ implant (10 năm) và bảo hành mão/phục hình trên implant (5 năm) là hai điều khoản tách biệt, có thời hạn khác nhau, không cộng dồn."
                : "Implant fixture warranty (10 years) and implant crown/abutment warranty (5 years) are distinct terms with independent durations."}
            </p>
          </div>
          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
            <strong className="text-[#0b1e2c] block font-bold">
              {lang === "VN" ? "2. Phục hình toàn hàm (All-on-4/6/X)" : "2. Full Arch Restoration (All-on-4/6/X)"}
            </strong>
            <p className="text-slate-600 leading-relaxed">
              {lang === "VN"
                ? "Thời hạn bảo hành khung sườn và phục hình toàn hàm được xác nhận riêng theo từng ca trong Hồ sơ bàn giao — không suy diễn từ bảng chung ở Mục 2."
                : "Framework and full-arch prosthetic warranties are specified individually in your Treatment Handover Pack."}
            </p>
          </div>
          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
            <strong className="text-[#0b1e2c] block font-bold">
              {lang === "VN" ? "3. Minh bạch về 'Bảo hành trọn đời'" : "3. Transparency on 'Lifetime Warranty' Claims"}
            </strong>
            <p className="text-slate-600 leading-relaxed">
              {lang === "VN"
                ? "DentalNTK không cam kết 'bảo hành trọn đời' cho bất kỳ hệ thống implant nào, kể cả các thương hiệu cao cấp."
                : "DentalNTK does not promise misleading 'lifetime warranties' on any implant system, including premium brands."}
            </p>
          </div>
          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
            <strong className="text-[#0b1e2c] block font-bold">
              {lang === "VN" ? "4. Yêu cầu tái khám định kỳ" : "4. Mandatory Maintenance Checkups"}
            </strong>
            <p className="text-slate-600 leading-relaxed">
              {lang === "VN"
                ? "Bảo hành trụ implant chỉ có hiệu lực khi khách hàng tái khám định kỳ 6–12 tháng/lần kể từ ngày cấy ghép."
                : "Implant fixture coverage remains valid provided routine maintenance checks occur every 6–12 months."}
            </p>
          </div>
        </div>
      </section>

      {/* ==========================================================
          SECTION 4: 3-STEP CLAIM PROCESS FROM AUSTRALIA
          ========================================================== */}
      <section className="bg-slate-50 p-6 sm:p-10 rounded-3xl border border-slate-200/80 space-y-8">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#0b1e2c]">
            {lang === "VN" ? "4. Quy Trình Xử Lý Khi Bạn Phát Hiện Vấn Đề Sau Khi Về Úc" : "4. Claim Procedure After Returning to Australia"}
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            {lang === "VN"
              ? "DentalNTK tập trung hỗ trợ qua hai hướng: tư vấn từ xa và mời khách quay lại Việt Nam khi cần điều trị trực tiếp."
              : "DentalNTK provides dual-channel support: remote tele-consultation and return travel assistance when direct care is required."}
          </p>
        </div>

        {/* 3 Step Walkthrough */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3 relative">
            <span className="w-8 h-8 rounded-full bg-[#0b1e2c] text-white font-bold text-sm flex items-center justify-center">1</span>
            <h3 className="font-bold text-[#0b1e2c] text-base">
              {lang === "VN" ? "Bước 1 — Báo cáo trong 7 ngày" : "Step 1 — Report Within 7 Days"}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {lang === "VN"
                ? "Trong vòng 7 ngày kể từ khi phát hiện vấn đề, liên hệ Chăm sóc khách hàng quốc tế DentalNTK, gửi kèm: Họ tên, ngày điều trị, ảnh chụp rõ nét, mô tả triệu chứng & ghi chú nha sĩ Úc (nếu có)."
                : "Within 7 days of noticing an issue, contact DentalNTK Expat Care with your name, treatment date, clear photos, symptoms & Australian dentist notes (if any)."}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3 relative">
            <span className="w-8 h-8 rounded-full bg-[#0b1e2c] text-white font-bold text-sm flex items-center justify-center">2</span>
            <h3 className="font-bold text-[#0b1e2c] text-base">
              {lang === "VN" ? "Bước 2 — Đánh giá trong 12h" : "Step 2 — Evaluation Within 12h"}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {lang === "VN"
                ? "Đội ngũ bác sĩ DentalNTK phản hồi và đánh giá sơ bộ hồ sơ chuyên môn trong vòng 12 giờ làm việc."
                : "Our clinical team reviews your file and provides an initial clinical evaluation within 12 business hours."}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3 relative">
            <span className="w-8 h-8 rounded-full bg-[#0b1e2c] text-white font-bold text-sm flex items-center justify-center">3</span>
            <h3 className="font-bold text-[#0b1e2c] text-base">
              {lang === "VN" ? "Bước 3 — Hướng giải quyết" : "Step 3 — Actionable Solution"}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {lang === "VN"
                ? "DentalNTK đưa ra 1 trong 3 hướng: Hướng dẫn chăm sóc tại nhà; Đề nghị khám nha sĩ Úc ổn định tạm thời; hoặc Mời quay lại Việt Nam bảo hành (kèm hỗ trợ vé máy bay)."
                : "DentalNTK recommends: Home care protocol; Local Aussie dentist stabilization; or Return flight warranty trip to Vietnam."}
            </p>
          </div>
        </div>

        {/* Required Documents Checklist */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 space-y-4">
          <h4 className="font-bold text-[#0b1e2c] text-base flex items-center gap-2">
            <FileCheck className="w-5 h-5 text-teal-brand" />
            <span>{lang === "VN" ? "Hồ sơ bắt buộc khi yêu cầu bảo hành:" : "Mandatory Supporting Documents:"}</span>
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
            <li className="flex items-center gap-2">• {lang === "VN" ? "Hóa đơn / biên lai thanh toán gốc" : "Original payment receipt / invoice"}</li>
            <li className="flex items-center gap-2">• {lang === "VN" ? "Phiếu điều trị, kế hoạch điều trị đã ký" : "Signed Treatment Handover Pack"}</li>
            <li className="flex items-center gap-2">• {lang === "VN" ? "Phim X-quang trước / sau điều trị" : "Pre & post-treatment X-rays"}</li>
            <li className="flex items-center gap-2">• {lang === "VN" ? "Ảnh / video hiện trạng vấn đề" : "Clear photos/videos of affected area"}</li>
            <li className="flex items-center gap-2 sm:col-span-2">• {lang === "VN" ? "Báo cáo khám của nha sĩ tại Úc (nếu đã khám trước khi liên hệ)" : "Australian dentist clinical report (if examined locally)"}</li>
          </ul>
        </div>
      </section>

      {/* ==========================================================
          SECTION 5: ROUND-TRIP FLIGHT TICKET SUPPORT TO VIETNAM
          ========================================================== */}
      <section className="bg-gradient-to-br from-[#0b1e2c] to-[#16364d] text-white p-8 sm:p-12 rounded-3xl shadow-xl space-y-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-teal-brand/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-white flex items-center gap-3">
            <Plane className="w-7 h-7 text-teal-brand shrink-0" />
            <span>{lang === "VN" ? "5. Hỗ Trợ Chi Phí Chuyến Bay Quay Lại Việt Nam" : "5. Round-Trip Flight Ticket Support Back to Vietnam"}</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-200 font-light leading-relaxed">
            {lang === "VN" ? (
              <>DentalNTK <strong className="text-teal-brand font-bold">hỗ trợ toàn bộ chi phí vé máy bay khứ hồi</strong> cho khách hàng quay lại Việt Nam điều trị bảo hành, khi đáp ứng đủ các điều kiện sau:</>
            ) : (
              <>DentalNTK <strong className="text-teal-brand font-bold">covers 100% of round-trip economy airfare</strong> for patients returning to Vietnam for warranty treatment, upon fulfilling the following conditions:</>
            )}
          </p>

          {/* 2-Column Grid Layout for 4 Conditions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 bg-white/10 p-4 rounded-2xl border border-white/10 backdrop-blur-sm">
              <CheckCircle2 className="w-5 h-5 text-teal-brand shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                {lang === "VN"
                  ? "Sự cố được xác định là do lỗi vật liệu hoặc kỹ thuật thuộc trách nhiệm của DentalNTK (không thuộc các trường hợp loại trừ tại Mục 7)."
                  : "Issue is verified as material or technical fault attributable to DentalNTK (excluding Section 7 exclusions)."}
              </span>
            </div>
            <div className="flex items-start gap-3 bg-white/10 p-4 rounded-2xl border border-white/10 backdrop-blur-sm">
              <CheckCircle2 className="w-5 h-5 text-teal-brand shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                {lang === "VN"
                  ? "Khách hàng đã tuân thủ đầy đủ lịch tái khám và hướng dẫn chăm sóc sau điều trị."
                  : "Patient has adhered to routine maintenance schedules and post-op care guidance."}
              </span>
            </div>
            <div className="flex items-start gap-3 bg-white/10 p-4 rounded-2xl border border-white/10 backdrop-blur-sm">
              <CheckCircle2 className="w-5 h-5 text-teal-brand shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                {lang === "VN"
                  ? "Đã báo cáo sự cố đúng thời hạn (Mục 4) và chưa để phòng khám khác can thiệp/sửa chữa vào phục hình liên quan (trừ trường hợp cấp cứu — Mục 6)."
                  : "Timely report submitted (Section 4) with no unauthorized third-party dentist intervention (except emergency Section 6)."}
              </span>
            </div>
            <div className="flex items-start gap-3 bg-white/10 p-4 rounded-2xl border border-white/10 backdrop-blur-sm">
              <CheckCircle2 className="w-5 h-5 text-teal-brand shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                {lang === "VN"
                  ? "DentalNTK đã xác nhận bằng văn bản (email) việc phê duyệt chuyến bay bảo hành trước khi khách hàng đặt vé."
                  : "DentalNTK has issued prior written approval (via official email) before airfare booking."}
              </span>
            </div>
          </div>

          {/* Warning Callout Card */}
          <div className="p-5 bg-amber-500/20 border border-amber-500/30 rounded-2xl text-xs sm:text-sm text-amber-200 space-y-1">
            <strong className="block text-amber-300 font-bold text-sm">
              {lang === "VN" ? "⚠️ Lưu ý quan trọng:" : "⚠️ Important Notice:"}
            </strong>
            <p className="leading-relaxed">
              {lang === "VN"
                ? "Khách hàng không nên tự đặt vé máy bay trước khi nhận được xác nhận phê duyệt bằng văn bản từ DentalNTK. Chi phí tự phát sinh trước khi có xác nhận sẽ không được hoàn lại."
                : "Please do not self-book flights prior to receiving written approval from DentalNTK. Unapproved flight expenses cannot be reimbursed."}
            </p>
          </div>

          {/* Scope of Support */}
          <div className="pt-4 border-t border-slate-700/80 text-xs sm:text-sm text-slate-300 space-y-2">
            <strong className="text-white block font-bold text-sm">
              {lang === "VN" ? "Phạm vi hỗ trợ:" : "Scope of Flight Support:"}
            </strong>
            <ul className="space-y-1.5 list-disc pl-4 text-slate-200">
              <li>{lang === "VN" ? "Vé máy bay khứ hồi hạng phổ thông (economy), tính từ sân bay quốc tế gần nơi cư trú tại Úc đến Việt Nam." : "Round-trip economy airfare from nearest Australian international airport to Vietnam."}</li>
              <li>{lang === "VN" ? "Chi phí điều trị bảo hành tại Việt Nam: miễn phí 100% nếu lỗi thuộc trách nhiệm DentalNTK." : "Clinical warranty repair in Vietnam: 100% free of charge for covered technical faults."}</li>
              <li>{lang === "VN" ? "Chi phí ăn ở, đi lại nội địa tại Việt Nam: không bao gồm trong chính sách này, trừ khi có thỏa thuận riêng bằng văn bản." : "Local hotel & domestic travel expenses: excluded unless specifically agreed in writing."}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ==========================================================
          SECTION 6: EMERGENCY SITUATIONS IN AUSTRALIA
          ========================================================== */}
      <section className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200/80 shadow-sm space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#0b1e2c]">
            {lang === "VN" ? "6. Trường Hợp Cấp Cứu Tại Úc" : "6. Emergency Situations in Australia"}
          </h2>
        </div>

        <div className="p-5 bg-rose-50 border border-rose-200 rounded-2xl space-y-3 text-sm sm:text-base text-slate-700">
          <div className="flex items-center gap-3 text-rose-700 font-bold text-base sm:text-lg">
            <Stethoscope className="w-6 h-6 text-rose-600" />
            <span>{lang === "VN" ? "Xử lý tình huống khẩn cấp tại Úc:" : "Emergency Protocol in Australia:"}</span>
          </div>
          <p className="leading-relaxed">
            {lang === "VN" ? (
              <>Nếu bạn gặp: <strong className="text-rose-800 font-bold">sưng mặt, sốt, chảy máu không kiểm soát, khó thở, nhiễm trùng lan rộng, hoặc đau dữ dội</strong> — hãy đến cơ sở y tế / nha khoa gần nhất tại Úc ngay lập tức, gọi <strong className="text-rose-800 font-mono text-base font-bold">000</strong> nếu nguy hiểm tính mạng. Không cần chờ xác nhận từ DentalNTK trong tình huống cấp cứu.</>
            ) : (
              <>If experiencing: <strong className="text-rose-800 font-bold">facial swelling, fever, uncontrolled bleeding, difficulty breathing, spreading infection, or severe pain</strong> — seek immediate local Australian medical/dental care or call <strong className="text-rose-800 font-mono text-base font-bold">000</strong> if life-threatening. Prior approval from DentalNTK is NOT required during emergency stabilization.</>
            )}
          </p>
          <p className="leading-relaxed">
            {lang === "VN"
              ? "Sau khi đã ổn định, gửi hồ sơ điều trị cấp cứu (hóa đơn, chẩn đoán) về DentalNTK để được xem xét bảo hành / hoàn trả chi phí nếu nguyên nhân thuộc trách nhiệm bảo hành."
              : "Once stabilized, forward emergency treatment receipts and clinical diagnoses to DentalNTK for warranty review and reimbursement consideration."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm sm:text-base">
          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 space-y-1.5">
            <strong className="text-[#0b1e2c] block font-bold">
              {lang === "VN" ? "Phân biệt quan trọng:" : "Important Distinction:"}
            </strong>
            <p className="text-slate-600 leading-relaxed">
              {lang === "VN"
                ? "Ổn định cấp cứu tạm thời (chụp X-quang, mài cạnh sắc, kê thuốc, cố định tạm) khác với sửa chữa/thay thế vĩnh viễn. Thay thế vĩnh viễn cần trao đổi trước với DentalNTK để tránh ảnh hưởng hiệu lực bảo hành."
                : "Emergency stabilization (X-rays, smoothing sharp edges, antibiotics, temporary splinting) is distinct from permanent prosthetic replacement. Permanent alterations require prior consultation."}
            </p>
          </div>
          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 space-y-1.5">
            <strong className="text-[#0b1e2c] block font-bold">
              {lang === "VN" ? "Khuyến nghị bảo hiểm du lịch:" : "Travel Insurance Recommendation:"}
            </strong>
            <p className="text-slate-600 leading-relaxed">
              {lang === "VN"
                ? "DentalNTK khuyến nghị khách hàng mua bảo hiểm du lịch có bao gồm hạng mục biến chứng nha khoa trước khi về nước để bảo vệ tối đa quyền lợi."
                : "DentalNTK strongly advises purchasing travel insurance covering dental emergencies before travelling to Vietnam."}
            </p>
          </div>
        </div>
      </section>

      {/* ==========================================================
          SECTION 7: WARRANTY EXCLUSIONS (KHÔNG ĐƯỢC BẢO HÀNH)
          ========================================================== */}
      <section className="bg-slate-50 p-6 sm:p-10 rounded-3xl border border-slate-200/80 space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#0b1e2c]">
            {lang === "VN" ? "7. Các Trường Hợp KHÔNG Được Bảo Hành" : "7. Warranty Exclusions & Non-Covered Items"}
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            {lang === "VN"
              ? "Bảo hành sẽ từ chối hoặc không có hiệu lực đối với các trường hợp sau:"
              : "Warranty coverage is nullified or declined under the following circumstances:"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm sm:text-base text-slate-700">
          <div className="p-4 bg-white rounded-xl border border-slate-200/80 flex items-start gap-2.5">
            <span className="text-rose-500 font-bold text-base">•</span>
            <span className="leading-relaxed">{lang === "VN" ? "Chấn thương, va đập, tai nạn, cắn vật cứng (đá, xương, hạt cứng...)." : "Physical trauma, accident impact, or biting hard objects (ice, bone, hard shells)."}</span>
          </div>
          <div className="p-4 bg-white rounded-xl border border-slate-200/80 flex items-start gap-2.5">
            <span className="text-rose-500 font-bold text-base">•</span>
            <span className="leading-relaxed">{lang === "VN" ? "Nghiến / siết răng khi không đeo máng bảo vệ theo chỉ định." : "Bruxism / night grinding without wearing prescribed protective nightguards."}</span>
          </div>
          <div className="p-4 bg-white rounded-xl border border-slate-200/80 flex items-start gap-2.5">
            <span className="text-rose-500 font-bold text-base">•</span>
            <span className="leading-relaxed">{lang === "VN" ? "Vệ sinh răng miệng kém, viêm nha chu không điều trị." : "Poor oral hygiene, unmanaged periodontitis, or neglected plaque buildup."}</span>
          </div>
          <div className="p-4 bg-white rounded-xl border border-slate-200/80 flex items-start gap-2.5">
            <span className="text-rose-500 font-bold text-base">•</span>
            <span className="leading-relaxed">{lang === "VN" ? "Hút thuốc hoặc bệnh lý nền phát sinh / ảnh hưởng sau điều trị mà không được khai báo trước." : "Heavy smoking or undisclosed systemic conditions affecting healing post-treatment."}</span>
          </div>
          <div className="p-4 bg-white rounded-xl border border-slate-200/80 flex items-start gap-2.5">
            <span className="text-rose-500 font-bold text-base">•</span>
            <span className="leading-relaxed">{lang === "VN" ? "Hết thời hạn bảo hành quy định tại Mục 2–3." : "Expiration of the warranty duration specified in Sections 2 & 3."}</span>
          </div>
          <div className="p-4 bg-white rounded-xl border border-slate-200/80 flex items-start gap-2.5">
            <span className="text-rose-500 font-bold text-base">•</span>
            <span className="leading-relaxed">{lang === "VN" ? "Sai lệch khớp cắn do điều trị nha khoa khác thực hiện sau đó." : "Bite misalignment caused by subsequent dental work at other clinics."}</span>
          </div>
          <div className="p-4 bg-white rounded-xl border border-slate-200/80 flex items-start gap-2.5 md:col-span-2">
            <span className="text-rose-500 font-bold text-base">•</span>
            <span className="leading-relaxed">{lang === "VN" ? "Phục hình đã bị điều chỉnh, mài, tháo, thay thế bởi phòng khám khác mà không có xác nhận trước của DentalNTK (trừ cấp cứu theo Mục 6)." : "Restorations adjusted, altered, or replaced by another clinic without prior authorization (except Section 6 emergency)."}</span>
          </div>
          <div className="p-4 bg-white rounded-xl border border-slate-200/80 flex items-start gap-2.5">
            <span className="text-rose-500 font-bold text-base">•</span>
            <span className="leading-relaxed">{lang === "VN" ? "Không tuân thủ lịch tái khám / bảo trì định kỳ." : "Failure to attend mandatory routine maintenance checkups every 6-12 months."}</span>
          </div>
          <div className="p-4 bg-white rounded-xl border border-slate-200/80 flex items-start gap-2.5">
            <span className="text-rose-500 font-bold text-base">•</span>
            <span className="leading-relaxed">{lang === "VN" ? "Bỏ dở liệu trình hoặc chưa thanh toán đầy đủ." : "Unfinished treatment plans or outstanding financial balances."}</span>
          </div>
          <div className="p-4 bg-white rounded-xl border border-slate-200/80 flex items-start gap-2.5 md:col-span-2">
            <span className="text-rose-500 font-bold text-base">•</span>
            <span className="leading-relaxed">{lang === "VN" ? "Yếu tố lão hóa tự nhiên, mòn răng sinh lý theo thời gian." : "Natural physiological aging, bone resorption, or normal enamel wear over time."}</span>
          </div>
        </div>
      </section>

      {/* ==========================================================
          SECTIONS 8, 9, 10: RESPONSIBILITIES, LIABILITY & DISPUTE
          ========================================================== */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Section 8 */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
          <h3 className="font-serif font-extrabold text-[#0b1e2c] text-lg">
            {lang === "VN" ? "8. Trách Nhiệm Của Khách Hàng" : "8. Patient Responsibilities"}
          </h3>
          <ul className="space-y-2.5 text-sm text-slate-700 leading-relaxed">
            <li>• {lang === "VN" ? "Tái khám định kỳ theo lịch chỉ định (trực tiếp tại Việt Nam hoặc gửi kết quả từ Úc)." : "Attend scheduled maintenance checks (in Vietnam or send Australian records)."}</li>
            <li>• {lang === "VN" ? "Lưu giữ hóa đơn, hồ sơ điều trị, phim X-quang bản gốc." : "Retain original treatment contracts, receipts, and pre/post X-rays."}</li>
            <li>• {lang === "VN" ? "Báo cáo sự cố trong vòng 7 ngày kể từ khi phát hiện." : "Report any complication within 7 days of occurrence."}</li>
            <li>• {lang === "VN" ? "Không tự ý điều trị/sửa chữa ở nơi khác trước khi có xác nhận." : "Refrain from unauthorized third-party dental alterations."}</li>
            <li>• {lang === "VN" ? "Mang theo hồ sơ điều trị đầy đủ khi khám tại Úc." : "Bring complete medical records when seeing Australian practitioners."}</li>
          </ul>
        </div>

        {/* Section 9 */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
          <h3 className="font-serif font-extrabold text-[#0b1e2c] text-lg">
            {lang === "VN" ? "9. Giới Hạn Trách Nhiệm" : "9. Limitation of Liability"}
          </h3>
          <ul className="space-y-2.5 text-sm text-slate-700 leading-relaxed">
            <li>• {lang === "VN" ? "Bảo hành chỉ áp dụng cho kết quả kỹ thuật điều trị, không bao gồm biến chứng do bệnh lý nền không khai báo trước." : "Warranty applies strictly to technical work quality, excluding unstated medical conditions."}</li>
            <li>• {lang === "VN" ? "Không chịu trách nhiệm chi phí gián tiếp (nghỉ việc, chi phí ngoài phạm vi được duyệt) trừ khi có thỏa thuận riêng bằng văn bản." : "DentalNTK is not liable for indirect costs (lost wages, unapproved lodging) unless agreed in writing."}</li>
            <li>• {lang === "VN" ? "Mọi phê duyệt hỗ trợ phải có xác nhận bằng văn bản từ DentalNTK." : "All warranty coverage decisions require written approval from DentalNTK management."}</li>
          </ul>
        </div>

        {/* Section 10 */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
          <h3 className="font-serif font-extrabold text-[#0b1e2c] text-lg">
            {lang === "VN" ? "10. Giải Quyết Tranh Chấp" : "10. Dispute Resolution"}
          </h3>
          <ul className="space-y-2.5 text-sm text-slate-700 leading-relaxed">
            <li>• {lang === "VN" ? "Ưu tiên thương lượng, hòa giải trong vòng 30 ngày kể từ ngày khiếu nại." : "Good-faith negotiation and mediation within 30 days of claim lodging."}</li>
            <li>• {lang === "VN" ? "Nếu không đạt thỏa thuận, tranh chấp giải quyết theo pháp luật Việt Nam / trọng tài quốc tế." : "Unresolved disputes fall under applicable laws & international arbitration standards."}</li>
            <li>• {lang === "VN" ? "Khách hàng Úc nên tìm hiểu thêm quyền lợi theo Australian Consumer Law nếu dịch vụ chào bán trực tiếp tại Úc." : "Australian patients retain rights under Australian Consumer Law where applicable."}</li>
          </ul>
        </div>

      </section>

      {/* ==========================================================
          SECTION 11: WARRANTY SUPPORT CONTACT & SLA
          ========================================================== */}
      <section className="bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-200/80 space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#0b1e2c]">
            {lang === "VN" ? "11. Liên Hệ Hỗ Trợ Bảo Hành (Khi Đã Về Úc)" : "11. International Warranty Support (After Returning to Australia)"}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs sm:text-sm">
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 space-y-1">
            <Mail className="w-5 h-5 text-teal-brand mb-2" />
            <strong className="block text-[#0b1e2c]">
              {lang === "VN" ? "Email Hỗ Trợ Quốc Tế" : "International Support Email"}
            </strong>
            <a href="mailto:cskh.nhakhoatre@gmail.com" className="text-teal-brand hover:underline font-mono">cskh.nhakhoatre@gmail.com</a>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 space-y-1">
            <Phone className="w-5 h-5 text-teal-brand mb-2" />
            <strong className="block text-[#0b1e2c]">Hotline / WhatsApp</strong>
            <a href="tel:+84963333844" className="text-teal-brand hover:underline font-mono font-bold">+84 963 333 844</a>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 space-y-1">
            <Clock className="w-5 h-5 text-teal-brand mb-2" />
            <strong className="block text-[#0b1e2c]">
              {lang === "VN" ? "Khung Giờ Hỗ Trợ (AEST/AEDT)" : "Support Hours (AEST/AEDT)"}
            </strong>
            <span className="text-slate-600">
              {lang === "VN" ? "8:00 – 17:00, Thứ Hai – Thứ Bảy" : "8:00 AM – 5:00 PM (Mon – Sat)"}
            </span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 space-y-1">
            <ShieldCheck className="w-5 h-5 text-teal-brand mb-2" />
            <strong className="block text-[#0b1e2c]">
              {lang === "VN" ? "Cam Kết Phản Hồi" : "Response SLA"}
            </strong>
            <span className="text-emerald-600 font-bold">
              {lang === "VN" ? "Trong vòng 12 giờ làm việc" : "Within 12 business hours"}
            </span>
          </div>
        </div>

        <p className="text-xs text-slate-400 italic leading-relaxed pt-4 border-t border-slate-200">
          {lang === "VN"
            ? "*Chính sách này áp dụng từ ngày công bố trên website và có thể được cập nhật theo thời gian. Phiên bản mới nhất luôn được đăng tại trang Bảo hành của DentalNTK. Với khách hàng đã điều trị trước thời điểm cập nhật, điều khoản trong Hồ sơ bàn giao điều trị tại thời điểm điều trị của khách hàng đó vẫn có giá trị ưu tiên áp dụng."
            : "*This policy is effective upon publication. The latest version is always maintained at DentalNTK's official site. For patients treated prior to policy updates, terms stated in their original Treatment Handover Pack prevail."}
        </p>
      </section>

      {/* ========================================================
          WARRANTY CLAIM REGISTRATION FORM
          ======================================================== */}
      <section className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/80 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5 space-y-4">
          <span className="text-xs font-bold tracking-widest text-teal-brand uppercase">
            {lang === "VN" ? "GỬI YÊU CẦU BẢO HÀNH" : "SUBMIT WARRANTY CLAIM"}
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#0b1e2c]">
            {lang === "VN" ? "Cần Hỗ Trợ Bảo Hành Hoặc Kiểm Tra?" : "Need Warranty Support or Repairs?"}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
            {lang === "VN"
              ? "Điền thông tin vào form dưới đây. Đội ngũ bác sĩ và chuyên viên chăm sóc bệnh nhân Việt kiều sẽ liên hệ phản hồi lại bạn trong vòng 12 giờ làm việc."
              : "Fill out the form below. Our clinical team and expat care specialists will contact you within 12 business hours."}
          </p>

          <div className="pt-4 space-y-3 border-t border-slate-100 text-xs sm:text-sm text-slate-700">
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-teal-brand" />
              <a 
                href="https://wa.me/84963333844" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-bold hover:text-teal-brand transition-colors font-mono"
              >
                WhatsApp 24/7: +84 963 333 844
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-teal-brand" />
              <span>{lang === "VN" ? "Phản hồi hồ sơ trong 12 giờ làm việc" : "Response within 12 business hours"}</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          {claimSubmitted ? (
            <div className="bg-emerald-50 border border-emerald-200 p-8 rounded-2xl text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h3 className="text-lg font-bold text-slate-800">
                {lang === "VN" ? "Đã Gửi Yêu Cầu Bảo Hành Thành Công!" : "Warranty Claim Submitted Successfully!"}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                {lang === "VN"
                  ? "Cảm ơn bạn. Chuyên viên chăm sóc khách hàng sẽ xem xét mã bảo hành và gọi điện hỗ trợ bạn ngay lập tức."
                  : "Thank you. Our patient care team will review your warranty serial and contact you immediately."}
              </p>
              <button 
                onClick={() => setClaimSubmitted(false)}
                className="mt-4 bg-teal-brand text-[#0b1e2c] px-6 py-2 rounded-full font-bold text-xs"
              >
                {lang === "VN" ? "Gửi yêu cầu khác" : "Submit Another Request"}
              </button>
            </div>
          ) : (
            <form onSubmit={handleClaimSubmit} className="space-y-4">
              {error && (
                <div className="bg-rose-50 border border-rose-200 text-rose-600 px-4 py-3 rounded-xl text-xs font-semibold">
                  {error}
                </div>
              )}
              <fieldset disabled={submitting} className="space-y-4 border-none p-0 m-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">{lang === "VN" ? "Họ và tên *" : "Full Name *"}</label>
                  <input 
                    type="text" 
                    required 
                    value={claimForm.name}
                    onChange={(e) => setClaimForm({ ...claimForm, name: e.target.value })}
                    placeholder={lang === "VN" ? "Ví dụ: Nguyễn Văn A" : "e.g. John Smith"}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs focus:bg-white focus:border-teal-brand focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">{lang === "VN" ? "Số điện thoại / WhatsApp *" : "Phone / WhatsApp *"}</label>
                  <input 
                    type="tel" 
                    required 
                    value={claimForm.phone}
                    onChange={(e) => setClaimForm({ ...claimForm, phone: e.target.value })}
                    placeholder="+84 9xx xxx xxx"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs focus:bg-white focus:border-teal-brand focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">{lang === "VN" ? "Email nhận phản hồi" : "Email Address"}</label>
                  <input 
                    type="email" 
                    value={claimForm.email}
                    onChange={(e) => setClaimForm({ ...claimForm, email: e.target.value })}
                    placeholder="email@example.com"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs focus:bg-white focus:border-teal-brand focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">{lang === "VN" ? "Mã Thẻ Bảo Hành (Serial)" : "Warranty Serial Code"}</label>
                  <input 
                    type="text" 
                    value={claimForm.serial}
                    onChange={(e) => setClaimForm({ ...claimForm, serial: e.target.value })}
                    placeholder="EMAX-xxxxx / NTK-xxxxx"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-mono focus:bg-white focus:border-teal-brand focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">{lang === "VN" ? "Mô tả tình trạng răng cần bảo hành *" : "Description of Issue *"}</label>
                <textarea 
                  rows={3} 
                  required 
                  value={claimForm.description}
                  onChange={(e) => setClaimForm({ ...claimForm, description: e.target.value })}
                  placeholder={lang === "VN" ? "Mô tả chi tiết tình trạng mẻ sứ, cộm răng hoặc thời gian mỏi khớp..." : "Describe the chipping, discomfort, or symptoms..."}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs focus:bg-white focus:border-teal-brand focus:outline-none"
                />
              </div>

                <button 
                  type="submit"
                  className="w-full bg-teal-brand hover:bg-teal-brand-hover text-[#0b1e2c] font-bold py-3.5 px-6 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 text-xs sm:text-sm cursor-pointer"
                >
                  {submitting ? (
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-slate-900"></div>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>{lang === "VN" ? "Gửi Yêu Cầu Hỗ Trợ Bảo Hành" : "Submit Warranty Claim Form"}</span>
                    </>
                  )}
                </button>
              </fieldset>
            </form>
          )}
        </div>
      </section>

    </div>
  );
}
