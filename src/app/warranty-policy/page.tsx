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
  AlertCircle,
  ThumbsUp,
  XCircle,
  RefreshCw,
  Calendar
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
    "name": "Dental NTK Hanoi",
    "url": "https://nhakhoatre.vn/warranty-policy",
    "logo": "https://nhakhoatre.vn/logo.png",
    "description": "Official 11-section Dental Warranty Policy for Australian patients. Up to 10-year warranty on Emax Veneers & Implants benchmarked against 20+ leading clinics in Southeast Asia.",
    "telephone": "+84963333844",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "38 Ngụy Như Kon Tum",
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
            "name": "Porcelain Veneer Warranty (5 Years)"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Straumann & Nobel Biocare Implant Warranty (Lifetime)"
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
          HERO BANNER: THE TRÊ PROMISE
          ======================================================== */}
      <section className="bg-gradient-to-br from-[#0b1e2c] via-[#112a3d] to-[#0b1e2c] text-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-brand/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
        
        <div className="relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 bg-teal-brand/20 text-teal-brand border border-teal-brand/30 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>THE DENTAL NTK PROMISE</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold leading-tight text-white">
            {lang === "VN"
              ? "Chính Sách Bảo Hành Quốc Tế Dental NTK"
              : "Dental NTK International Warranty Policy"}
          </h1>
          
          <p className="text-base sm:text-lg lg:text-xl font-medium text-teal-brand">
            {lang === "VN"
              ? "Được đối sánh và tối ưu hóa vượt trội so với 20+ phòng khám du lịch nha khoa hàng đầu Đông Nam Á"
              : "Benchmarked against 20+ leading dental tourism clinics across Thailand, Vietnam, Malaysia, Indonesia and the Philippines"}
          </p>

          <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
            {lang === "VN" ? (
              <>
                💡 <strong>Lưu ý pháp lý:</strong> Dental NTK là thương hiệu đại diện quốc tế chính thức của{" "}
                <a href="https://nhakhoatre.com" target="_blank" rel="noopener noreferrer" className="text-teal-brand font-semibold hover:underline">
                  Phòng khám Nha Khoa Trẻ (nhakhoatre.com)
                </a>.
              </>
            ) : (
              <>
                💡 <strong>Legal Notice:</strong> Dental NTK is the registered international division of{" "}
                <a href="https://nhakhoatre.com" target="_blank" rel="noopener noreferrer" className="text-teal-brand font-semibold hover:underline">
                  Nha Khoa Tre Clinic (nhakhoatre.com)
                </a>.
              </>
            )}
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-6 border-t border-slate-700/80">
            <div className="space-y-1">
              <strong className="text-2xl sm:text-3xl lg:text-4xl font-serif font-extrabold text-teal-brand block">Lifetime</strong>
              <span className="text-xs sm:text-sm text-slate-300 block font-medium">
                {lang === "VN" ? "Trụ Straumann / Nobel" : "Straumann / Nobel Fixtures"}
              </span>
            </div>
            <div className="space-y-1">
              <strong className="text-2xl sm:text-3xl lg:text-4xl font-serif font-extrabold text-teal-brand block">5 {lang === "VN" ? "Năm" : "Years"}</strong>
              <span className="text-xs sm:text-sm text-slate-300 block font-medium">
                {lang === "VN" ? "Bảo hành Veneer sứ" : "Porcelain Veneers"}
              </span>
            </div>
            <div className="space-y-1">
              <strong className="text-2xl sm:text-3xl lg:text-4xl font-serif font-extrabold text-teal-brand block">Remote</strong>
              <span className="text-xs sm:text-sm text-slate-300 block font-medium">
                {lang === "VN" ? "Tái khám từ xa tiện lợi" : "No Forced Return Checkups"}
              </span>
            </div>
            <div className="space-y-1">
              <strong className="text-2xl sm:text-3xl lg:text-4xl font-serif font-extrabold text-teal-brand block">Local</strong>
              <span className="text-xs sm:text-sm text-slate-300 block font-medium">
                {lang === "VN" ? "Hỗ trợ sửa chữa tại Úc" : "Home Country Support"}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 1: WHY THIS POLICY IS DIFFERENT
          ======================================================== */}
      <section className="bg-slate-50 p-6 sm:p-10 rounded-3xl border border-slate-200/80 space-y-4">
        <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#0b1e2c]">
          {lang === "VN" ? "1. Tại Sao Chính Sách Này Khác Biệt" : "1. Why This Policy Is Different"}
        </h2>
        <div className="text-sm sm:text-base text-slate-800 leading-relaxed space-y-4 font-normal">
          <p>
            {lang === "VN" ? (
              "Chúng tôi đã xem xét các điều khoản bảo hành được công bố của hơn 20 phòng khám du lịch nha khoa hàng đầu trên khắp Đông Nam Á trước khi viết chính sách này. Hầu hết mọi phòng khám trong khu vực đều đưa ra một số loại bảo hành — nhưng ba vấn đề lớn lặp đi lặp lại nhiều lần: thời gian bảo hành nghe có vẻ hào phóng nhưng lại ẩn chứa các điều kiện mơ hồ, danh sách loại trừ ẩn trong phần chữ nhỏ hoặc hoàn toàn không được công bố, và không có kế hoạch thực tế nào cho những bệnh nhân thực sự không thể bay trở lại Việt Nam. Chính sách này được xây dựng để lấp đầy cả ba khoảng trống đó. Mọi thời hạn dưới đây đều là thời hạn chúng tôi thực sự cam kết thực hiện, mọi trường hợp loại trừ đều được nêu rõ ràng ngay từ đầu, và chúng tôi có phương án hỗ trợ bạn ngay cả khi bạn không thể quay lại Việt Nam."
            ) : (
              "We reviewed the published warranty terms of more than twenty leading dental tourism clinics across Southeast Asia before writing this policy. Almost every clinic in the region offers a warranty of some kind — but three problems show up again and again: warranty periods that sound generous but hide vague conditions, exclusion lists buried in fine print or not published at all, and no real plan for patients who genuinely cannot fly back to Asia. This policy is built to close all three gaps. Every period below is one we can actually stand behind, every exclusion is stated up front, and Section 8 gives you an option even if you can never return to Vietnam."
            )}
          </p>
        </div>
      </section>

      {/* ==========================================================
          SECTION 2: COVERAGE SUMMARY
          ========================================================== */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#0b1e2c]">
            {lang === "VN" ? "2. Tóm Tắt Phạm Vi Bảo Hành" : "2. Coverage Summary — All Treatment Categories"}
          </h2>
          <p className="text-sm sm:text-base text-slate-800 font-normal">
            {lang === "VN" 
              ? "Thời hạn bảo hành bắt đầu tính từ ngày hoàn tất điều trị (ngày gắn phục hình cuối cùng, lắp khay duy trì, v.v.), không tính từ ngày bắt đầu phẫu thuật."
              : "Warranty periods begin on the date treatment is completed (final crown seated, final retainer fitted, etc.), not the date of first surgery."}
          </p>
        </div>

        <div className="overflow-x-auto bg-white rounded-3xl border border-slate-200/80 shadow-sm">
          <table className="w-full text-left border-collapse text-sm sm:text-base">
            <thead>
              <tr className="bg-[#0b1e2c] text-white">
                <th className="p-4.5 sm:p-5 font-bold uppercase tracking-wider">{lang === "VN" ? "Nhóm điều trị" : "Treatment Category"}</th>
                <th className="p-4.5 sm:p-5 font-bold uppercase tracking-wider w-40 sm:w-56">{lang === "VN" ? "Thời hạn" : "Warranty Period"}</th>
                <th className="p-4.5 sm:p-5 font-bold uppercase tracking-wider">{lang === "VN" ? "Phạm vi" : "Scope"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-850">
              <tr className="hover:bg-slate-50">
                <td className="p-4 font-bold text-[#0b1e2c]">{lang === "VN" ? "Cấy ghép Implant — Trụ" : "Dental Implants — fixture"}</td>
                <td className="p-4 font-bold text-teal-brand">{lang === "VN" ? "10 năm (Trọn đời với Straumann / Nobel)" : "10 years (Lifetime on Straumann / Nobel Biocare)"}</td>
                <td className="p-4 text-slate-850">{lang === "VN" ? "Miễn phí thay thế trụ implant bị hỏng" : "Free replacement of the implant post itself"}</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="p-4 font-bold text-[#0b1e2c]">{lang === "VN" ? "Mão / Phục hình trên Implant" : "Implant Crown / Restoration"}</td>
                <td className="p-4 font-bold text-teal-brand">7 {lang === "VN" ? "năm" : "years"}</td>
                <td className="p-4 text-slate-850">{lang === "VN" ? "Mão sứ hoặc Zirconia lắp trên Implant" : "Porcelain or zirconia crown fitted on implant"}</td>
              </tr>
              <tr className="hover:bg-slate-50 bg-teal-brand/5">
                <td className="p-4 font-bold text-[#0b1e2c]">{lang === "VN" ? "Phục hình toàn hàm All-on-4 / All-on-6" : "All-on-4 / All-on-6 Full Arch"}</td>
                <td className="p-4 font-bold text-teal-brand">{lang === "VN" ? "10 năm (Trụ) / 5 năm (Hàm phục hình)" : "10 years (fixtures) / 5 years (prosthesis)"}</td>
                <td className="p-4 text-slate-850">{lang === "VN" ? "Thời hạn riêng cho khung sườn và phục hình răng" : "Framework and prosthetic teeth separate terms"}</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="p-4 font-bold text-[#0b1e2c]">{lang === "VN" ? "Mặt dán sứ Veneer" : "Porcelain Veneers"}</td>
                <td className="p-4 font-bold text-teal-brand">5 {lang === "VN" ? "năm" : "years"}</td>
                <td className="p-4 text-slate-850">{lang === "VN" ? "Bong tróc, mẻ sứ trong điều kiện sử dụng bình thường" : "Debonding/chipping under normal use"}</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="p-4 font-bold text-[#0b1e2c]">{lang === "VN" ? "Mão & Cầu răng sứ (E.max/Zirconia)" : "Crowns & Bridges (E.max/Zirconia)"}</td>
                <td className="p-4 font-bold text-teal-brand">7 {lang === "VN" ? "năm" : "years"}</td>
                <td className="p-4 text-slate-850">{lang === "VN" ? "Nứt vỡ, sứt mẻ do lỗi vật liệu hoặc kỹ thuật chế tác" : "Fracture/debonding from defect"}</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="p-4 font-bold text-[#0b1e2c]">{lang === "VN" ? "Điều trị nội nha (Tủy răng)" : "Root Canal Treatment"}</td>
                <td className="p-4 font-bold text-teal-brand">2 {lang === "VN" ? "năm" : "years"}</td>
                <td className="p-4 text-slate-850">{lang === "VN" ? "Điều trị lại nếu nhiễm trùng tái phát" : "Re-treatment if infection recurs"}</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="p-4 font-bold text-[#0b1e2c]">{lang === "VN" ? "Trám răng Composite" : "Composite Fillings"}</td>
                <td className="p-4 font-bold text-teal-brand">2 {lang === "VN" ? "năm" : "years"}</td>
                <td className="p-4 text-slate-850">{lang === "VN" ? "Trám lại nếu miếng trám bị nứt hoặc rơi ra ngoài" : "Replacement if filling fractures/falls out"}</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="p-4 font-bold text-[#0b1e2c]">{lang === "VN" ? "Hàm giả tháo lắp" : "Removable Dentures"}</td>
                <td className="p-4 font-bold text-teal-brand">2 {lang === "VN" ? "năm" : "years"}</td>
                <td className="p-4 text-slate-850">{lang === "VN" ? "Lỗi cấu trúc từ nhà sản xuất, không bảo hành hao mòn" : "Structural defect, not normal wear"}</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="p-4 font-bold text-[#0b1e2c]">{lang === "VN" ? "Chỉnh nha (Niềng răng / Invisalign)" : "Orthodontics (Braces/Invisalign)"}</td>
                <td className="p-4 font-bold text-teal-brand">{lang === "VN" ? "12 tháng sau tháo niềng + hỗ trợ khay duy trì trọn đời" : "12 months post-treatment + lifetime retainer support"}</td>
                <td className="p-4 text-slate-850">{lang === "VN" ? "Chỉ bảo hành tái phát khi đeo khay duy trì đúng hướng dẫn" : "Relapse only if retainer worn as directed"}</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="p-4 font-bold text-[#0b1e2c]">{lang === "VN" ? "Tẩy trắng răng" : "Teeth Whitening"}</td>
                <td className="p-4 font-bold text-slate-400">{lang === "VN" ? "Không bảo hành cấu trúc" : "No structural warranty"}</td>
                <td className="p-4 text-slate-850">{lang === "VN" ? "Hỗ trợ tư vấn màu sắc trong 30 ngày. Kết quả phụ thuộc chế độ ăn uống" : "30-day shade consultation. Result depends on diet/lifestyle"}</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="p-4 font-bold text-[#0b1e2c]">{lang === "VN" ? "Điều trị nướu / Nhổ răng khôn" : "Gum Treatment / Wisdom Tooth"}</td>
                <td className="p-4 font-bold text-teal-brand">{lang === "VN" ? "Đánh giá biến chứng trong 90 ngày" : "90-day complication review"}</td>
                <td className="p-4 text-slate-850">{lang === "VN" ? "Thủ thuật thực hiện một lần, theo dõi các biến chứng" : "One-time procedures, reviewed for complications only"}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ==========================================================
          SECTION 3: WHAT IS COVERED
          ========================================================== */}
      <section className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
        <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#0b1e2c] flex items-center gap-3">
          <ThumbsUp className="w-7 h-7 text-teal-brand shrink-0" />
          <span>{lang === "VN" ? "3. Những Gì Được Bảo Hành" : "3. What Is Covered"}</span>
        </h2>
        <ul className="space-y-3 text-sm sm:text-base text-slate-850 leading-relaxed list-disc pl-5 font-normal">
          <li>
            {lang === "VN"
              ? "Trụ Implant bị đào thải hoặc mất tích hợp xương do lỗi sản xuất hoặc kỹ thuật phẫu thuật."
              : "Failure of an implant fixture to integrate, or loss of a placed implant, due to a manufacturing or surgical defect."}
          </li>
          <li>
            {lang === "VN"
              ? "Mão răng, cầu răng, hoặc veneer bị nứt, mẻ, bong gắn kết do lỗi vật liệu hoặc kỹ thuật của phòng lab — không phải do tai nạn hoặc tác động ngoại lực mạnh."
              : "Fracture, chipping, or debonding of a crown, bridge, or veneer caused by a material defect or workmanship error — not by accident or force."}
          </li>
          <li>
            {lang === "VN"
              ? "Nhiễm trùng tái phát tại răng đã được chúng tôi điều trị nội nha (tủy răng)."
              : "Recurrence of infection at a tooth we root-canal treated."}
          </li>
          <li>
            {lang === "VN"
              ? "Lỗi hỏng hóc cấu trúc nền hàm giả hoặc móc cài trong điều kiện sử dụng nhai bình thường."
              : "Structural failure of a denture base or clasp under normal use."}
          </li>
          <li>
            {lang === "VN"
              ? "Tái phát chỉnh nha trong vòng 12 tháng sau tháo niềng, với điều kiện khay duy trì được đeo đúng như hướng dẫn lâm sàng."
              : "Orthodontic relapse within 12 months, provided the retainer was worn as instructed."}
          </li>
          <li>
            {lang === "VN"
              ? "Chi trả 100% chi phí điều trị lại cần thiết về mặt y khoa — bao gồm thời gian của bác sĩ chuyên gia và công việc phòng Lab, không chỉ miễn phí vật liệu."
              : "The full cost of clinically necessary re-treatment — specialist time and laboratory work, not materials alone."}
          </li>
          <li>
            {lang === "VN"
              ? "Miễn phí tư vấn từ xa không giới hạn (qua ảnh/cuộc gọi video) cho bất kỳ lo ngại nào về bảo hành trong suốt thời hạn bảo hành."
              : "Unlimited free remote consultations (photo/video review) for any warranty concern, for the life of the warranty."}
          </li>
        </ul>
      </section>

      {/* ==========================================================
          SECTION 4: WHAT IS NOT COVERED
          ========================================================== */}
      <section className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
        <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#0b1e2c] flex items-center gap-3">
          <XCircle className="w-7 h-7 text-rose-500 shrink-0" />
          <span>{lang === "VN" ? "4. Những Gì KHÔNG Được Bảo Hành" : "4. What Is Not Covered"}</span>
        </h2>
        <p className="text-sm sm:text-base text-slate-850 italic">
          {lang === "VN"
            ? "Các trường hợp loại trừ tiêu chuẩn trong ngành nha khoa quốc tế — áp dụng tại Dental NTK:"
            : "Standard exclusions across the industry — and at Dental NTK:"}
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm sm:text-base text-slate-850 leading-relaxed font-normal">
          <li className="flex items-start gap-2">
            <span className="text-rose-500 font-bold">•</span>
            <span>{lang === "VN" ? "Hỏng hóc do chấn thương, tai nạn, va đập mạnh hoặc dùng răng làm công cụ (mở nắp chai, nhai đá, nhai đồ quá cứng)." : "Damage from trauma, accidents, or using teeth as tools (opening bottles, chewing ice)"}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-rose-500 font-bold">•</span>
            <span>{lang === "VN" ? "Thất bại điều trị do các bệnh lý nền không được khai báo từ đầu (tiểu đường không kiểm soát, dùng thuốc loãng xương bisphosphonate, bệnh tự miễn, xạ trị vùng đầu/cổ trước đó)." : "Failure linked to an undisclosed medical condition (uncontrolled diabetes, osteoporosis on bisphosphonates, autoimmune disease, prior head/neck radiotherapy)"}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-rose-500 font-bold">•</span>
            <span>{lang === "VN" ? "Tổn thương do tật nghiến răng (Bruxism) ban đêm mà không đeo máng chống nghiến được bác sĩ khuyến nghị." : "Bruxism damage where a recommended night guard was not worn"}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-rose-500 font-bold">•</span>
            <span>{lang === "VN" ? "Biến chứng do vệ sinh răng miệng kém hoặc bỏ lỡ các buổi hẹn kiểm tra tái khám định kỳ theo khuyến cáo." : "Complications from poor oral hygiene or missed recommended reviews"}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-rose-500 font-bold">•</span>
            <span>{lang === "VN" ? "Bất kỳ phần răng/phục hình nào đã bị can thiệp, mài chỉnh hoặc điều trị bởi nha sĩ khác trước khi liên hệ với chúng tôi." : "Any work altered or treated by another dentist before you contact us"}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-rose-500 font-bold">•</span>
            <span>{lang === "VN" ? "Hao mòn tự nhiên, thay đổi màu sắc nhẹ theo thời gian, hoặc thay đổi sở thích thẩm mỹ cá nhân sau khi đã đồng ý gắn răng." : "Normal wear, minor shade change over time, or a change of cosmetic preference"}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-rose-500 font-bold">•</span>
            <span>{lang === "VN" ? "Các chi phí đi lại, đặt khách sạn, ăn uống, hoặc ngày nghỉ làm để thực hiện chuyến đi bảo hành tại Việt Nam." : "Travel, accommodation, meals, or time off work related to a warranty visit"}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-rose-500 font-bold">•</span>
            <span>{lang === "VN" ? "Biến chứng cấy ghép Implant liên quan đến việc tiếp tục hút thuốc lá sau khi đã được bác sĩ cảnh báo rủi ro đào thải." : "Implant complications linked to continued smoking after being advised of the risk"}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-rose-500 font-bold">•</span>
            <span>{lang === "VN" ? "Mão răng, cầu răng hoặc hàm giả tạm thời (phục hình tạm thời để chờ gắn phục hình chính thức không được bảo hành)." : "Temporary crowns, bridges, or dentures (interim restorations are not warrantied)"}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-rose-500 font-bold">•</span>
            <span>{lang === "VN" ? "Vật liệu ghép xương hoặc nâng xoang cần thiết cho lần cấy implant lại thứ hai (lần implant đầu tiên được miễn phí nhưng vật liệu ghép xương bổ sung sẽ được tính riêng)." : "Bone grafting or sinus lift materials required for a second implant attempt, where the first attempt is covered but additional materials are not"}</span>
          </li>
        </ul>
      </section>

      {/* ==========================================================
          SECTION 5: RIGHTS & RESPONSIBILITIES
          ========================================================== */}
      <section className="bg-slate-50 p-6 sm:p-10 rounded-3xl border border-slate-200/80 space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#0b1e2c]">
            {lang === "VN" ? "5. Quyền Lợi & Trách Nhiệm Rõ Ràng" : "5. Rights & Responsibilities — Clearly Divided"}
          </h2>
          <p className="text-sm sm:text-base text-slate-800 font-normal">
            {lang === "VN"
              ? "Bảo hành chỉ bền vững khi cả hai bên hiểu rõ nghĩa vụ của mình. Mọi cam kết của chúng tôi và nghĩa vụ của bạn đều được quy định minh bạch."
              : "A warranty only works if both sides know exactly what they owe each other. This is the core of what makes our policy different."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Dental NTK Responsibilities */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-sm space-y-4">
            <h3 className="font-bold text-teal-brand text-lg flex items-center gap-2">
              <ShieldCheck className="w-5 h-5" />
              <span>DENTAL NTK — {lang === "VN" ? "Trách nhiệm của chúng tôi" : "Our Responsibilities"}</span>
            </h3>
            <ul className="space-y-3 text-sm sm:text-base text-slate-900 leading-relaxed font-normal">
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 font-bold">✓</span>
                <span>{lang === "VN" ? "Cung cấp chứng nhận bảo hành bằng văn bản bằng tiếng Anh trước khi bạn hoàn tất điều trị rời phòng khám." : "Provide a written, signed warranty certificate in English before you leave the clinic"}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 font-bold">✓</span>
                <span>{lang === "VN" ? "Chỉ sử dụng vật liệu chính hãng, nguồn gốc rõ ràng (Straumann, Nobel Biocare, Ivoclar E.max...) có thẻ check code." : "Use only branded, traceable materials (Straumann, Nobel Biocare, Ivoclar E.max or equivalent) unless otherwise agreed in writing"}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 font-bold">✓</span>
                <span>{lang === "VN" ? "Chi trả 100% chi phí điều trị lại cho lỗi kỹ thuật được bảo hành (bao gồm thời gian bác sĩ, lab, vật liệu thay thế)." : "Cover the full cost of clinically necessary re-treatment for covered failures — specialist time, lab work, and replacement materials"}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 font-bold">✓</span>
                <span>{lang === "VN" ? "Phản hồi và tiếp nhận yêu cầu bảo hành nhanh chóng trong vòng 2 ngày làm việc." : "Respond to any warranty enquiry within 2 business days"}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 font-bold">✓</span>
                <span>{lang === "VN" ? "Hỗ trợ đánh giá kỹ thuật từ xa qua hình ảnh/video trước khi yêu cầu bạn phải đặt vé bay sang Việt Nam." : "Offer free remote review (photos/video call) before requiring a return trip"}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 font-bold">✓</span>
                <span>{lang === "VN" ? "Hợp tác hỗ trợ với phòng khám nha khoa tại Úc của bạn nếu việc đi lại của bạn thực sự không khả thi (Xem Mục 8)." : "Coordinate with a local dentist in your home country if return travel is genuinely not feasible, and reimburse pre-approved reasonable repair costs"}</span>
              </li>
            </ul>
          </div>

          {/* Patient Responsibilities */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-sm space-y-4">
            <h3 className="font-bold text-[#0b1e2c] text-lg flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#0b1e2c]" />
              <span>{lang === "VN" ? "BỆNH NHÂN — Trách nhiệm của bạn" : "Patient — Your Responsibilities"}</span>
            </h3>
            <ul className="space-y-3 text-sm sm:text-base text-slate-900 leading-relaxed font-normal">
              <li className="flex items-start gap-2">
                <span className="text-amber-500 font-bold">✓</span>
                <span>{lang === "VN" ? "Khai báo thành thật, đầy đủ lịch sử bệnh lý và các loại thuốc đang sử dụng trước khi bắt đầu điều trị." : "Disclose full medical history and medications accurately before treatment begins"}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 font-bold">✓</span>
                <span>{lang === "VN" ? "Tuân thủ nghiêm ngặt các hướng dẫn chăm sóc sau phẫu thuật và vệ sinh răng miệng bằng văn bản." : "Follow all written aftercare and hygiene instructions"}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 font-bold">✓</span>
                <span>{lang === "VN" ? "Tham gia tái khám kiểm tra định kỳ đầy đủ — có thể chọn tái khám từ xa hàng năm (Xem Mục 7)." : "Attend recommended reviews — in person or via the remote check-in option"}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 font-bold">✓</span>
                <span>{lang === "VN" ? "Đeo máng chống nghiến hoặc khay duy trì đều đặn theo đúng chỉ định của bác sĩ." : "Wear a night guard or retainer if recommended"}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 font-bold">✓</span>
                <span>{lang === "VN" ? "Tuyệt đối không hút thuốc lá trong thời gian tích hợp xương sau cấy ghép Implant (tối thiểu 3 tháng)." : "Avoid smoking during the healing period following implant surgery (minimum 3 months)"}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 font-bold">✓</span>
                <span>{lang === "VN" ? "Báo cáo sự cố răng miệng trong vòng 14 ngày kể từ khi phát hiện, kèm theo hình ảnh rõ nét gửi phòng khám." : "Report any issue within 14 days of noticing it, with photos and a description"}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ==========================================================
          SECTION 6: HOW TO MAKE A CLAIM
          ========================================================== */}
      <section className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200/80 shadow-sm space-y-6">
        <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#0b1e2c]">
          {lang === "VN" ? "6. Cách Thức Yêu Cầu Bảo Hành" : "6. How to Make a Claim"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-sm sm:text-base text-slate-850 leading-relaxed">
          <div className="md:col-span-1 bg-slate-50 p-4 rounded-xl border border-slate-100 flex flex-col items-center text-center space-y-2">
            <span className="w-8 h-8 rounded-full bg-[#0b1e2c] text-white font-bold flex items-center justify-center">1</span>
            <strong className="text-[#0b1e2c] block">{lang === "VN" ? "Báo cáo" : "Report"}</strong>
            <p className="text-[11px] text-slate-850">{lang === "VN" ? "Gửi thông tin trong vòng 14 ngày qua Email/WhatsApp" : "Notify us within 14 days with photos and details"}</p>
          </div>
          <div className="md:col-span-1 bg-slate-50 p-4 rounded-xl border border-slate-100 flex flex-col items-center text-center space-y-2">
            <span className="w-8 h-8 rounded-full bg-[#0b1e2c] text-white font-bold flex items-center justify-center">2</span>
            <strong className="text-[#0b1e2c] block">{lang === "VN" ? "Đánh giá" : "Evaluate"}</strong>
            <p className="text-[11px] text-slate-850">{lang === "VN" ? "Bác sĩ phản hồi trong vòng 2 ngày làm việc" : "Clinical review and response within 2 business days"}</p>
          </div>
          <div className="md:col-span-1 bg-slate-50 p-4 rounded-xl border border-slate-100 flex flex-col items-center text-center space-y-2">
            <span className="w-8 h-8 rounded-full bg-[#0b1e2c] text-white font-bold flex items-center justify-center">3</span>
            <strong className="text-[#0b1e2c] block">{lang === "VN" ? "Xác nhận" : "Confirm"}</strong>
            <p className="text-[11px] text-slate-850">{lang === "VN" ? "Nhận xác nhận phương án bằng văn bản trước khi bay" : "Written approval of repair scope before travel"}</p>
          </div>
          <div className="md:col-span-2 bg-teal-brand/5 p-4 rounded-xl border border-teal-brand/10 flex flex-col justify-center space-y-1">
            <strong className="text-[#0b1e2c] block font-bold">{lang === "VN" ? "Lưu ý quan trọng:" : "Important note:"}</strong>
            <p className="text-[11px] text-slate-800 font-normal">
              {lang === "VN" 
                ? "Mọi sửa chữa theo chính sách sẽ hoàn toàn miễn phí. Riêng các trường hợp cần ghép thêm xương hoặc nâng xoang lần thứ hai (nếu trước đó thất bại) sẽ tính phí vật liệu ghép xương thực tế phát sinh."
                : "Approved repairs are at no cost. Additional bone grafting or sinus lift materials required for a second attempt are billed separately."}
            </p>
          </div>
        </div>
      </section>

      {/* ==========================================================
          SECTION 7: ANNUAL REVIEWS
          ========================================================== */}
      <section className="bg-slate-50 p-6 sm:p-10 rounded-3xl border border-slate-200/80 space-y-4">
        <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#0b1e2c] flex items-center gap-3">
          <Calendar className="w-7 h-7 text-teal-brand shrink-0" />
          <span>{lang === "VN" ? "7. Tái Khám Định Kỳ — Không Bắt Buộc Bay Về Việt Nam" : "7. Annual Reviews — Without the Forced Return Trip"}</span>
        </h2>
        <div className="text-sm sm:text-base text-slate-800 leading-relaxed font-normal">
          <p>
            {lang === "VN" ? (
              "Nhiều phòng khám nha khoa nước ngoài thường ngầm yêu cầu bệnh nhân phải bay quay lại trực tiếp mỗi năm để giữ hiệu lực bảo hành — đây là một cái bẫy chi phí rất lớn với bệnh nhân sống tại Úc. Dental NTK không áp đặt điều khoản này. Việc tái khám định kỳ hàng năm của bạn hoàn toàn có thể thực hiện từ xa: Bạn chỉ cần gửi ảnh chụp răng, hoặc một đoạn video ngắn quay rõ nướu và khớp cắn qua WhatsApp/Email cho chúng tôi. Bác sĩ sẽ đánh giá từ xa và thông báo nếu có vấn đề thực sự cần can thiệp trực tiếp. Bạn chỉ cần bay sang khi có yêu cầu lâm sàng thực tế, hoàn toàn không có việc bắt buộc quay lại định kỳ mỗi năm một cách máy móc."
            ) : (
              "Many overseas clinics quietly require an annual in-person visit to keep a warranty valid — an expensive trap for patients who live far away. We do not. Your annual review can be done remotely: send updated photos, or a short video of your bite and gums, through WhatsApp or email. We will tell you if something needs an in-person look. An in-person visit is only required when we can see a genuine reason for one, not as a default."
            )}
          </p>
        </div>
      </section>

      {/* ==========================================================
          SECTION 8: SUPPORT FOR PATIENTS WHO CANNOT RETURN TO VIETNAM
          ========================================================== */}
      <section className="bg-gradient-to-br from-[#0b1e2c] to-[#16364d] text-white p-8 sm:p-12 rounded-3xl shadow-xl space-y-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-teal-brand/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-white flex items-center gap-3">
            <Plane className="w-7 h-7 text-teal-brand shrink-0" />
            <span>{lang === "VN" ? "8. Hỗ Trợ Cho Bệnh Nhân Không Thể Quay Lại Việt Nam" : "8. Support for Patients Who Cannot Return to Vietnam"}</span>
          </h2>

          <div className="text-sm sm:text-base text-slate-200 leading-relaxed space-y-4 font-normal">
            <p>
              {lang === "VN" ? (
                "Đây là khoảng trống lớn nhất mà chúng tôi tìm thấy ở hơn 20 phòng khám được khảo sát — hầu như không có nơi nào có kế hoạch cho bệnh nhân thực sự không thể bay quay lại. Chúng tôi có:"
              ) : (
                "This is the single biggest gap we found across the 20+ clinics we reviewed — almost none of them plan for a patient who simply cannot fly back. We do."
              )}
            </p>
            <ul className="space-y-3 list-disc pl-5">
              <li>
                {lang === "VN"
                  ? "Trong trường hợp yêu cầu bảo hành được chấp thuận nhưng việc quay lại Việt Nam là hoàn toàn không khả thi, chúng tôi sẽ phối hợp với một nha sĩ có trình độ phù hợp tại nước sở tại của bạn để đánh giá và thực hiện sửa chữa nếu cần thiết."
                  : "Where a claim is approved but travel is genuinely not feasible, we will coordinate with a suitably qualified dentist in your home country to assess and, where appropriate, carry out the repair."}
              </li>
              <li>
                {lang === "VN"
                  ? "Chúng tôi sẽ hoàn trả chi phí sửa chữa hợp lý đã được phê duyệt trước — tối đa bằng giá trị của đợt điều trị ban đầu — khi nhận được hóa đơn và hồ sơ lâm sàng."
                  : "We will reimburse reasonable, pre-approved repair costs — up to the value of the original treatment — on receipt of invoices and clinical records."}
              </li>
              <li>
                {lang === "VN"
                  ? "Việc này được đánh giá theo từng trường hợp cụ thể và không thay thế cho việc điều trị tại phòng khám của chúng tôi (vốn là con đường nhanh nhất và trực tiếp nhất để giải quyết vấn đề)."
                  : "This is assessed case by case and does not replace treatment at our clinic, which remains the fastest and most direct path to resolution."}
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ==========================================================
          SECTION 9 & 10: DISPUTE & TRAVEL INSURANCE
          ========================================================== */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Section 9: Dispute Resolution */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
          <h3 className="font-serif font-extrabold text-[#0b1e2c] text-lg flex items-center gap-2">
            <Scale className="w-5 h-5 text-teal-brand" />
            <span>{lang === "VN" ? "9. Giải Quyết Tranh Chấp" : "9. If We Disagree — Dispute Resolution"}</span>
          </h3>
          <p className="text-sm sm:text-base text-slate-900 leading-relaxed font-normal">
            {lang === "VN" ? (
              "Nếu bạn tin rằng yêu cầu bảo hành bị từ chối không công bằng, bạn có thể gửi yêu cầu bằng văn bản lên Giám đốc lâm sàng của chúng tôi trong vòng 14 ngày để xem xét lại. Nếu bất đồng vẫn không được giải quyết, hai bên đồng ý thương lượng hòa giải trước khi thực hiện bất kỳ hành động nào khác, thông qua một bên hòa giải độc lập được cả hai thống nhất. Chính sách này được điều chỉnh bởi luật pháp Việt Nam, không giới hạn bất kỳ quyền lợi bảo vệ người tiêu dùng nào được áp dụng cho bạn theo Luật Người tiêu dùng Úc (Australian Consumer Law)."
            ) : (
              "If you believe a claim has been unfairly declined, you may request a written second opinion from our Clinical Director within 14 days. If the disagreement remains unresolved, both parties agree to attempt mediation before any other action, through a mutually agreed independent mediator. This policy is governed by the laws of Vietnam, without limiting any consumer protections that may separately apply to you under Australian law."
            )}
          </p>
        </div>

        {/* Section 10: Travel Insurance */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
          <h3 className="font-serif font-extrabold text-[#0b1e2c] text-lg flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-500" />
            <span>{lang === "VN" ? "10. Bảo Hiểm Du Lịch" : "10. Travel Insurance — Please Read"}</span>
          </h3>
          <p className="text-sm sm:text-base text-slate-900 leading-relaxed font-normal">
            {lang === "VN" ? (
              "Bảo hành này chi trả hoàn toàn cho chất lượng điều trị nha khoa của bạn tại Dental NTK. Tuy nhiên, nó không thay thế cho bảo hiểm du lịch. Bảo hiểm du lịch giúp bạn chi trả cho các trường hợp cấp cứu y tế thực sự, cứu hộ y tế, mất hành lý hoặc gián đoạn chuyến bay — chứ không phải việc điều trị nha khoa theo kế hoạch. Chúng tôi cực kỳ khuyến nghị bạn mua bảo hiểm du lịch phù hợp trước khi khởi hành từ Úc."
            ) : (
              "This warranty covers the quality of your dental treatment. It is not a substitute for travel insurance, which covers genuine emergencies, medical evacuation, and trip disruption — not planned dental work. We strongly recommend arranging appropriate travel insurance before you depart."
            )}
          </p>
        </div>
      </section>

      {/* ==========================================================
          SECTION 11: INTERNATIONAL SUPPORT CONTACT
          ========================================================== */}
      <section className="bg-slate-50 p-6 sm:p-10 rounded-3xl border border-slate-200/80 space-y-6">
        <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#0b1e2c]">
          {lang === "VN" ? "11. Thông Tin Liên Hệ & Cam Kết SLA" : "11. Contact — International Patient Support"}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs sm:text-sm">
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 space-y-1">
            <Mail className="w-5 h-5 text-teal-brand mb-2" />
            <strong className="block text-[#0b1e2c]">
              {lang === "VN" ? "Email Hỗ Trợ Bảo Hành" : "International Support Email"}
            </strong>
            <a href="mailto:cskh.nhakhoatre@gmail.com" className="text-teal-brand hover:underline font-mono">cskh.nhakhoatre@gmail.com</a>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 space-y-1">
            <Phone className="w-5 h-5 text-teal-brand mb-2" />
            <strong className="block text-[#0b1e2c]">WhatsApp / Phone</strong>
            <a href="https://wa.me/84963333844" target="_blank" rel="noopener noreferrer" className="text-teal-brand hover:underline font-mono font-bold">+84 963 333 844</a>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 space-y-1">
            <Clock className="w-5 h-5 text-teal-brand mb-2" />
            <strong className="block text-[#0b1e2c]">
              {lang === "VN" ? "Cam Kết Phản Hồi" : "Response SLA"}
            </strong>
            <span className="text-slate-800">
              {lang === "VN" ? "Trong vòng 2 ngày làm việc" : "Within 2 business days"}
            </span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 space-y-1">
            <ShieldCheck className="w-5 h-5 text-teal-brand mb-2" />
            <strong className="block text-[#0b1e2c]">
              {lang === "VN" ? "Văn Bản Pháp Lý" : "Governing Policy"}
            </strong>
            <span className="text-slate-800">
              {lang === "VN" ? "Hồ sơ bàn giao khi hoàn tất" : "Treatment Handover Pack"}
            </span>
          </div>
        </div>

        <p className="text-xs text-slate-400 italic leading-relaxed pt-4 border-t border-slate-200">
          {lang === "VN"
            ? "*Tài liệu này là bản tóm tắt thông tin chính sách bảo hành dành cho bệnh nhân. Điều khoản chi tiết ràng buộc pháp lý sẽ được ghi rõ trong Giấy chứng nhận bảo hành và Kế hoạch điều trị cá nhân cấp cho bạn khi hoàn thành ca điều trị. Các số liệu đối sánh phản ánh thông tin công khai của các phòng khám nha khoa tại Đông Nam Á tính đến năm 2026."
            : "*This document is a policy summary provided for patient information and does not constitute a legal contract. Full terms are confirmed in your individual Treatment Plan and Warranty Certificate issued at the completion of treatment. Benchmarking referenced reflects publicly published terms as of 2026."}
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
          <p className="text-sm sm:text-base text-slate-850 leading-relaxed font-normal">
            {lang === "VN"
              ? "Điền thông tin vào form dưới đây. Đội ngũ bác sĩ và chuyên viên chăm sóc bệnh nhân Việt kiều sẽ liên hệ phản hồi lại bạn trong vòng 2 ngày làm việc."
              : "Fill out the form below. Our clinical team and expat care specialists will contact you within 2 business days."}
          </p>

          <div className="pt-4 space-y-3 border-t border-slate-100 text-sm sm:text-base text-slate-850">
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
              <span>{lang === "VN" ? "Phản hồi hồ sơ trong 2 ngày làm việc" : "Response within 2 business days"}</span>
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
              <p className="text-sm sm:text-base text-slate-900">
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
                    <label className="block text-xs font-bold text-slate-850 mb-1">{lang === "VN" ? "Họ và tên *" : "Full Name *"}</label>
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
                    <label className="block text-xs font-bold text-slate-850 mb-1">{lang === "VN" ? "Số điện thoại / WhatsApp *" : "Phone / WhatsApp *"}</label>
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
                    <label className="block text-xs font-bold text-slate-850 mb-1">{lang === "VN" ? "Email nhận phản hồi" : "Email Address"}</label>
                    <input 
                      type="email" 
                      value={claimForm.email}
                      onChange={(e) => setClaimForm({ ...claimForm, email: e.target.value })}
                      placeholder="email@example.com"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs focus:bg-white focus:border-teal-brand focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-850 mb-1">{lang === "VN" ? "Mã Thẻ Bảo Hành (Serial)" : "Warranty Serial Code"}</label>
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
                  <label className="block text-xs font-bold text-slate-850 mb-1">{lang === "VN" ? "Mô tả tình trạng răng cần bảo hành *" : "Description of Issue *"}</label>
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
