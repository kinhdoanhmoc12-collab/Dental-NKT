"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";
import { FileText, ArrowLeft } from "lucide-react";

export default function TermsPage() {
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
          <FileText className="w-5 h-5" />
        </div>
        <h1 className="text-2xl sm:text-3.5xl font-serif font-extrabold text-[#0b1e2c] leading-tight">
          {lang === "VN" ? "Điều Khoản Sử Dụng Dịch Vụ" : "Terms of Service"}
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 font-light max-w-2xl">
          {lang === "VN"
            ? "Các quy định pháp lý và thỏa thuận điều trị lâm sàng giữa bệnh nhân quốc tế và hệ thống phòng khám DentalNTK."
            : "Legal regulations and clinical treatment agreements between international patients and the DentalNTK clinic network."}
        </p>
      </header>

      {/* Content */}
      <div className="mt-6 space-y-6 text-sm sm:text-base text-slate-800 font-normal leading-relaxed">
        
        {/* Section 1 */}
        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-[#0b1e2c] flex items-center gap-2">
            <span className="w-1.5 h-6 bg-teal-brand rounded-full inline-block" />
            {lang === "VN" ? "1. Phạm vi chẩn đoán từ xa" : "1. Scope of Remote Assessment"}
          </h2>
          <p>
            {lang === "VN"
              ? "Báo giá và phác đồ điều trị ban đầu được lập dựa trên hình ảnh phim chụp X-quang và thông tin do bệnh nhân cung cấp từ xa. Đây là phác đồ sơ bộ. Phác đồ điều trị chính thức, có giá trị pháp lý và lâm sàng cuối cùng sẽ được bác sĩ chuyên khoa quyết định sau khi thăm khám trực tiếp tại ghế nha của DentalNTK Hà Nội."
              : "Provisional quotes and initial treatment plans are structured based on patient-provided dental X-rays and remote history. These are preliminary. The final, legally binding and clinical treatment plan will be finalized by our specialists during your in-person clinical examination at DentalNTK in Hanoi."}
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-[#0b1e2c] flex items-center gap-2">
            <span className="w-1.5 h-6 bg-teal-brand rounded-full inline-block" />
            {lang === "VN" ? "2. Thanh toán và Đặt cọc" : "2. Payments & Deposits"}
          </h2>
          <p>
            {lang === "VN"
              ? "Chi phí điều trị được thanh toán trực tiếp tại phòng khám bằng tiền mặt (VND) hoặc thẻ tín dụng quốc tế. Đối với các ca phẫu thuật lớn cần chuẩn bị vật liệu chuyên biệt nhập khẩu (như cấy ghép All-on-4/All-on-6), bệnh nhân có thể được yêu cầu đặt cọc trước một khoản phí nhỏ để giữ lịch hẹn phẫu thuật."
              : "Treatment fees are settled directly at the clinic via cash (VND) or international credit card. For extensive surgical cases requiring imported components (such as All-on-4 or All-on-6 implant restorations), patients may be requested to secure a minor reservation deposit prior to booking their clinical slot."}
          </p>
        </section>

        {/* Section 3 */}
        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-[#0b1e2c] flex items-center gap-2">
            <span className="w-1.5 h-6 bg-teal-brand rounded-full inline-block" />
            {lang === "VN" ? "3. Chính sách hủy lịch và Đổi lịch" : "3. Cancellation & Rescheduling"}
          </h2>
          <p>
            {lang === "VN"
              ? "Bệnh nhân có nhu cầu hủy hoặc dời lịch hẹn phẫu thuật vui lòng thông báo cho bộ phận CSKH của chúng tôi tối thiểu 72 giờ trước giờ hẹn. Việc này giúp chúng tôi sắp xếp lại ekip phẫu thuật và tối ưu lịch làm việc của các bác sĩ chuyên khoa."
              : "Patients wishing to cancel or postpone scheduled surgical appointments must notify our international care team at least 72 hours in advance. This permits the clinic to optimize surgical schedules and coordinate specialist shifts."}
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-[#0b1e2c] flex items-center gap-2">
            <span className="w-1.5 h-6 bg-teal-brand rounded-full inline-block" />
            {lang === "VN" ? "4. Trách nhiệm y tế ngoài nước" : "4. Medical Travel Disclaimer"}
          </h2>
          <p>
            {lang === "VN"
              ? "DentalNTK cung cấp dịch vụ hỗ trợ đưa đón sân bay và đặt phòng lưu trú tại Hà Nội. Tuy nhiên, chúng tôi không chịu trách nhiệm pháp lý đối với bất kỳ sự cố phát sinh nào ngoài tầm kiểm soát của phòng khám liên quan đến vận chuyển hàng không, hoạt động lưu trú bên ngoài phòng khám hoặc bảo hiểm du lịch cá nhân của bệnh nhân."
              : "DentalNTK provides logistical support including airport transfers and boutique lodging reservations in Hanoi. However, the clinic accepts no legal liability for external travel delays, airline disruptions, or personal travel insurance disputes outside the bounds of our clinical premises."}
          </p>
        </section>

        {/* Section 5 */}
        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-[#0b1e2c] flex items-center gap-2">
            <span className="w-1.5 h-6 bg-teal-brand rounded-full inline-block" />
            {lang === "VN" ? "5. Cam kết chất lượng lâm sàng" : "5. Clinical Quality Guarantee"}
          </h2>
          <p>
            {lang === "VN"
              ? "Hệ thống phòng khám DentalNTK hoạt động tuân thủ hoàn toàn luật y tế và được cấp phép bởi Bộ Y tế Việt Nam. Chúng tôi cam kết sử dụng vật liệu nhập khẩu chính hãng 100% kèm thẻ truy xuất nguồn gốc số sê-ri quốc tế cho mọi ca cấy ghép và phục hình thẩm mỹ răng miệng."
              : "DentalNTK operates in strict compliance with medical standards authorized by the Ministry of Health of Vietnam. We guarantee the use of 100% authentic, certified dental components featuring global serial numbers for all implant and veneer procedures."}
          </p>
        </section>

      </div>
    </div>
  );
}
