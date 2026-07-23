"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";
import { Lock, ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
  const { lang } = useLanguage();

  return (
    <div className="pt-6 pb-12 max-w-4xl mx-auto px-4 sm:px-6">
      {/* Back Button */}
      <div className="mb-4">
        <Link href="/" className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-teal-brand transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>{lang === "VN" ? "Quay lại Trang chủ" : "Back to Home"}</span>
        </Link>
      </div>

      {/* Header */}
      <header className="space-y-3 border-b border-slate-100 pb-4 text-center sm:text-left">
        <div className="inline-flex p-2 bg-teal-brand-light text-teal-brand rounded-xl">
          <Lock className="w-5 h-5" />
        </div>
        <h1 className="text-2xl sm:text-3.5xl font-serif font-extrabold text-[#0b1e2c] leading-tight">
          {lang === "VN" ? "Chính Sách Bảo Mật Thông Tin" : "Privacy Policy & Data Protection"}
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 font-light max-w-2xl">
          {lang === "VN"
            ? "Cam kết bảo vệ dữ liệu hồ sơ lâm sàng và thông tin cá nhân của bệnh nhân quốc tế theo tiêu chuẩn y khoa và quy định bảo mật nghiêm ngặt."
            : "Committed to safeguarding patient clinical records and personal data in compliance with international medical standards and strict data protocols."}
        </p>
      </header>

      {/* Content */}
      <div className="mt-6 space-y-6 text-sm sm:text-base text-slate-800 font-normal leading-relaxed">
        
        {/* Section 1 */}
        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-[#0b1e2c] flex items-center gap-2">
            <span className="w-1.5 h-6 bg-teal-brand rounded-full inline-block" />
            {lang === "VN" ? "1. Thông tin chúng tôi thu thập" : "1. Personal Information We Collect"}
          </h2>
          <p>
            {lang === "VN"
              ? "Để phục vụ chuẩn đoán và lập phác đồ điều trị từ xa, chúng tôi thu thập các thông tin bao gồm: Họ tên, Ngày sinh, Số điện thoại (WhatsApp/Viber), Email, Địa chỉ thường trú và hình ảnh phim chụp X-quang răng miệng (OPG/CT Cone Beam) do bệnh nhân cung cấp."
              : "To facilitate remote clinical diagnostics and treatment planning, we collect: Full name, Date of birth, Contact phone number (WhatsApp/Viber), Email address, Residential address, and dental radiographic images (OPG/CT Cone Beam scans) uploaded by patients."}
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-[#0b1e2c] flex items-center gap-2">
            <span className="w-1.5 h-6 bg-teal-brand rounded-full inline-block" />
            {lang === "VN" ? "2. Mã hóa và Bảo mật dữ liệu" : "2. Encryption & Data Security"}
          </h2>
          <p>
            {lang === "VN"
              ? "Toàn bộ thông tin cá nhân, đặc biệt là số điện thoại và thông tin sức khỏe nhạy cảm, đều được mã hóa bằng thuật toán mã hóa AES-256 trước khi lưu trữ vào cơ sở dữ liệu. Chúng tôi sử dụng giao thức HTTPS bảo mật và thiết lập tường lửa nhiều lớp bảo vệ máy chủ ngăn ngừa mọi hành vi truy cập trái phép."
              : "All personal information, especially contact details and sensitive health records, is encrypted using the industry-standard AES-256 algorithm before database storage. We implement secure HTTPS data transmission protocols and maintain multi-layered server firewalls to prevent unauthorized system access."}
          </p>
        </section>

        {/* Section 3 */}
        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-[#0b1e2c] flex items-center gap-2">
            <span className="w-1.5 h-6 bg-teal-brand rounded-full inline-block" />
            {lang === "VN" ? "3. Sử dụng thông tin lâm sàng" : "3. Usage of Clinical Information"}
          </h2>
          <p>
            {lang === "VN"
              ? "Hồ sơ sức khỏe của bạn chỉ được chia sẻ nội bộ giữa hội đồng bác sĩ chuyên khoa phụ trách điều trị trực tiếp tại phòng khám DentalNTK. Chúng tôi cam kết không bán, không trao đổi hay cung cấp thông tin y tế của bạn cho bất kỳ đơn vị quảng cáo hoặc bên thứ ba nào khác."
              : "Your health records are shared strictly within our clinical board of certified dentists directly responsible for your treatment plan at DentalNTK. We guarantee that your medical files will never be leased, sold, or shared with third-party advertisers or unauthorized marketing firms."}
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-[#0b1e2c] flex items-center gap-2">
            <span className="w-1.5 h-6 bg-teal-brand rounded-full inline-block" />
            {lang === "VN" ? "4. Quyền của bệnh nhân" : "4. Patient Rights & Access"}
          </h2>
          <p>
            {lang === "VN"
              ? "Bệnh nhân có toàn quyền yêu cầu truy cập, sửa đổi, cập nhật hoặc xóa bỏ hoàn toàn hồ sơ cá nhân và lịch sử điều trị trên hệ thống của chúng tôi bất kỳ lúc nào bằng cách gửi văn bản yêu cầu chính thức qua email chăm sóc khách hàng."
              : "Patients reserve the absolute right to request access to, edit, update, or completely purge their personal records and clinical history from our systems at any time by contacting our patient care department via official email."}
          </p>
        </section>

        {/* Section 5 */}
        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-[#0b1e2c] flex items-center gap-2">
            <span className="w-1.5 h-6 bg-teal-brand rounded-full inline-block" />
            {lang === "VN" ? "5. Liên hệ Hỗ trợ" : "5. Privacy Inquiries"}
          </h2>
          <p>
            {lang === "VN"
              ? "Nếu có bất kỳ thắc mắc nào liên quan đến quyền bảo mật hoặc cách xử lý dữ liệu y tế của bạn tại Việt Nam, vui lòng liên hệ Bộ phận Bảo vệ Dữ liệu qua email: cskh.nhakhoatre@gmail.com."
              : "For any questions or concerns regarding your privacy rights or how your medical data is handled in Vietnam, please reach out to our Data Protection Officer at: cskh.nhakhoatre@gmail.com."}
          </p>
        </section>

      </div>
    </div>
  );
}
