"use client";

import React, { useState } from "react";
import Link from "next/link";
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
  Award,
  Sparkles,
  FileText,
  Heart
} from "lucide-react";

export default function AllOn6Page() {
  const { lang, t } = useLanguage();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const isVN = lang === "VN";

  React.useEffect(() => {
    document.title = isVN 
      ? "All-on-6 — Phục hồi toàn hàm cố định với 6 trụ Implant | DentalNKT"
      : "All-on-6 — Full-Arch Fixed Restorations with 6 Implants | DentalNKT";
  }, [isVN]);

  // FAQ Items
  const faqItems = [
    {
      q: isVN 
        ? "Tôi nên chọn All-on-4 hay All-on-6?" 
        : "Should I choose All-on-4 or All-on-6?",
      a: isVN 
        ? "Quyết định dựa hoàn toàn vào phim chụp CBCT 3D — thể tích xương, mật độ xương và lực nhai thực tế của bạn. Không có phương án nào mặc định tốt hơn; bác sĩ chuyên khoa sẽ phân tích phim và đưa ra chỉ định y khoa phù hợp nhất cho bạn."
        : "The decision depends entirely on your 3D CBCT scan – assessing bone volume, density, and your bite force. Neither option is universally 'better'; our implant board will recommend the clinically optimal path after evaluating your diagnostics."
    },
    {
      q: isVN 
        ? "All-on-6 có đắt hơn All-on-4 nhiều không?" 
        : "Is All-on-6 significantly more expensive than All-on-4?",
      a: isVN 
        ? "Có đắt hơn tương đối, do chi phí của 2 trụ Implant bổ sung, khớp nối abutment đi kèm và thời gian phẫu thuật/theo dõi lâm sàng dài hơn. Mức chênh lệch cụ thể sẽ được nêu rõ trong bảng kế hoạch điều trị bằng văn bản."
        : "Yes, All-on-6 carries a higher cost due to the two additional implant fixtures, multi-unit abutments, and extended surgical/monitoring times. The exact cost difference will be clearly broken down in your written quotation."
    },
    {
      q: isVN 
        ? "Nếu một trong 6 trụ gặp vấn đề, các trụ còn lại có bị ảnh hưởng không?" 
        : "If one of the 6 implants fails, do the others lose warranty?",
      a: isVN 
        ? "Về mặt chính sách bảo hành, mỗi trụ được tính độc lập — vấn đề ở 1 trụ không tự động làm mất hiệu lực bảo hành của 5 trụ còn lại. Về mặt lâm sàng, bác sĩ sẽ đánh giá xem có cần cấy trụ thay thế hay điều chỉnh cấu trúc hàm phục hình hay không."
        : "Under our warranty policy, each implant fixture is covered independently – a complication with one post does not affect the warranty validity of the other five. Clinically, our surgeons will evaluate if a replacement post is required or if the bridge structure needs modifications."
    },
    {
      q: isVN 
        ? "All-on-6 có cần thời gian điều trị lâu hơn All-on-4 không?" 
        : "Does All-on-6 require a longer treatment duration?",
      a: isVN 
        ? "Chuyến đi 1 (phẫu thuật cắm trụ) thường dài hơn All-on-4 khoảng 1-2 ngày để đảm bảo thời gian đặt thêm trụ và theo dõi vết thương kỹ hơn trước khi bay. Thời gian chờ tích hợp xương ở chuyến 2 vẫn dao động từ 3 đến 6 tháng giống như All-on-4."
        : "Trip 1 (surgery) usually requires 1-2 additional days compared to All-on-4 to accommodate the placement of the extra fixtures and clinical monitoring before your flight. The healing/osseointegration period between Trip 1 and Trip 2 remains the same (3 to 6 months)."
    },
    {
      q: isVN 
        ? "All-on-6 có được bảo hành khi tôi đã về Úc không?" 
        : "Is my All-on-6 warranty valid after I return to Australia?",
      a: isVN 
        ? "Có, toàn bộ quy trình All-on-6 được áp dụng chính sách Bảo hành Toàn cầu của DentalNKT với thời hạn 10 năm cho trụ implant. Mọi điều khoản xử lý biến chứng từ xa và hỗ trợ vé máy bay khứ hồi (nếu do lỗi lâm sàng của chúng tôi) đều có hiệu lực đầy đủ."
        : "Yes, the All-on-6 procedure is backed by DentalNKT's Global Warranty Policy, featuring a 10-year warranty on implant fixtures. All remote clinical support terms and return flight coverages (if due to clinical error) remain fully active."
    }
  ];

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
              <span>{isVN ? "PHỤC HỒI TOÀN HÀM CAO CẤP" : "PREMIUM FULL-ARCH RECONSTRUCTION"}</span>
            </span>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-white leading-tight">
              {isVN 
                ? "All-on-6 — Phục Hồi Toàn Hàm Cố Định Với 6 Trụ Implant" 
                : "All-on-6 — Full-Arch Fixed Restorations with 6 Implants"}
            </h1>
            
            <p className="text-sm sm:text-base text-slate-200 font-normal leading-relaxed">
              {isVN 
                ? "Giải pháp phục hình toàn bộ răng bị mất hoặc lung lay nặng bằng cách cấy ghép 6 trụ implant. Tăng diện tích nâng đỡ, phân bổ tải trọng nhai tối ưu cho cung hàm rộng mà không cần ghép xương diện rộng."
                : "A high-stability clinical restoration placing 6 implants to optimize chewing load distribution. Recommended for larger arches or softer bone densities, bypassing extensive bone grafting."}
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-slate-700/80 w-full">
              <div>
                <span className="text-xs text-slate-300 block font-medium">
                  {isVN ? "Trọn gói từ:" : "All-inclusive from:"}
                </span>
                <span className="text-2xl sm:text-3xl font-extrabold text-teal-brand">
                  {isVN ? "175.000.000 VNĐ / hàm" : "$9,500 AUD / arch"}
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

      {/* 1. What is All-on-6 */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-7 space-y-6">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-gold-brand" />
            <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-dark-brand">
              {isVN ? "1. All-on-6 là gì, và khi nào cần 6 trụ thay vì 4?" : "1. What is All-on-6, and When is it Indicated Over All-on-4?"}
            </h2>
          </div>
          <div className="space-y-4 text-sm sm:text-base text-slate-800 leading-relaxed font-normal">
            <p>
              {isVN
                ? "All-on-6 là kỹ thuật phục hồi toàn bộ một hàm răng đã mất bằng 6 trụ Implant, thay vì 4 trụ như All-on-4. Việc thêm 2 trụ giúp phân bổ lực nhai đều hơn trên toàn cung hàm, tăng độ ổn định cho hàm phục hình và giảm tải trọng lực dồn lên từng điểm riêng lẻ."
                : "All-on-6 is a full-arch restoration technique that replaces an entire arch of missing teeth using 6 implants, instead of 4 implants like All-on-4. The addition of two extra implant posts ensures uniform chewing force distribution, improves mechanical stability, and reduces the stress placed on individual fixtures."}
            </p>
            <p>
              {isVN
                ? "All-on-6 không phải là một phiên bản nâng cấp mặc định thay thế cho All-on-4. Đây là một chỉ định y khoa riêng biệt dựa trên mật độ xương thực tế và lực nhai của bạn — không phải cứ cấy nhiều trụ hơn là tốt hơn hoặc an toàn hơn. Bác sĩ sẽ đặt các trụ ở các vị trí chiến lược để tận dụng tối đa vùng xương tự nhiên còn chắc khỏe."
                : "All-on-6 is not a mandatory upgrade to All-on-4. It is a distinct clinical indication tailored to your jawbone density and bite force – inserting more implants does not automatically mean safety or success. Our surgeons arrange the 6 posts strategically to anchor onto your natural dense bone."}
            </p>
          </div>
        </div>

        <div className="md:col-span-5 bg-teal-brand-light/30 border border-teal-brand-light p-8 rounded-3xl space-y-4">
          <h3 className="text-base font-bold text-dark-brand">
            {isVN ? "Ưu điểm vượt trội của All-on-6" : "Key Benefits of All-on-6"}
          </h3>
          <ul className="space-y-3.5">
            {[
              isVN ? "Phân bổ lực nhai đều hơn trên cung hàm rộng" : "Distributes bite forces evenly across larger jaw arches",
              isVN ? "Cố định bắt vít chắc chắn, chịu lực tối đa" : "Rigid screw-retained fixation with high load tolerance",
              isVN ? "Khôi phục nụ cười trẻ trung và cơ mặt tự nhiên" : "Restores natural smile support and facial fullness",
              isVN ? "Lắp hàm tạm ăn nhẹ trong vòng 24 giờ sau phẫu thuật" : "Immediate load temporary bridge fitted within 24 hours",
              isVN ? "Vệ sinh dễ dàng bằng tăm nước chuyên dụng" : "Straightforward hygiene using dental water flossers"
            ].map((benefit, idx) => (
              <li key={idx} className="flex gap-2 items-start text-xs sm:text-sm text-slate-800">
                <Check className="w-4.5 h-4.5 text-teal-brand shrink-0 mt-0.5" />
                <span className="font-semibold">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 2. Importance of CT/CBCT */}
      <section className="bg-slate-50 border border-slate-100 rounded-3xl p-8 sm:p-10 space-y-6">
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0" />
          <h2 className="text-xl sm:text-2xl font-serif font-extrabold text-dark-brand">
            {isVN 
              ? "2. CBCT quyết định bạn cần 4 hay 6 trụ" 
              : "2. 3D CBCT Determines the Need for 4 or 6 Implants"}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-sm sm:text-base text-slate-700 font-normal leading-relaxed">
          <div className="md:col-span-7 space-y-4">
            <p>
              {isVN
                ? "Quyết định lựa chọn All-on-4 hay All-on-6 hoàn toàn dựa trên kết quả khảo sát cấu trúc xương hàm qua phim Cone Beam CT (CBCT) 3D, không phụ thuộc vào ý muốn chủ quan hay ngân sách. Phim CBCT cho biết:"
                : "The selection between All-on-4 and All-on-6 is strictly based on diagnostic data from a 3D Cone Beam CT (CBCT) scan, rather than patient preference or budget. The CBCT scan evaluates:"}
            </p>
            <ul className="space-y-3">
              {[
                isVN ? "Thể tích và mật độ xương tại từng vị trí đặt trụ dự kiến." : "Bone volume and structural density at each planned implant site.",
                isVN ? "Lực nhai dự kiến (thường lớn hơn ở nam giới, người trẻ, người có thói quen nghiến răng)." : "Anticipated bite forces (typically higher in younger males or patients with bruxism).",
                isVN ? "Kích thước cung hàm thực tế (cung hàm lớn cần nhiều điểm nâng đỡ để tránh võng hàm)." : "Overall jaw size (larger arches require wider support spans to prevent prosthetic flexion).",
                isVN ? "Mức độ tiêu xương và cơ hội tránh phẫu thuật ghép xương phức tạp bằng cách tăng số trụ." : "Resorption patterns and the viability of avoiding bone grafts by utilizing alternative sites."
              ].map((item, idx) => (
                <li key={idx} className="flex gap-2 items-start text-xs sm:text-sm text-slate-800">
                  <Check className="w-4.5 h-4.5 text-teal-brand shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-5 bg-amber-50/20 border border-amber-200 rounded-2xl p-6 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-800 flex items-center gap-1.5">
              <Info className="w-4 h-4" />
              {isVN ? "LƯU Ý QUAN TRỌNG TẠI DENTALNKT" : "DENTALNKT PROTOCOL"}
            </h4>
            <p className="text-xs text-slate-700 leading-relaxed font-normal">
              {isVN
                ? "DentalNKT không tư vấn số lượng trụ trước khi khảo sát phim CBCT 3D và không áp dụng quan điểm '6 trụ luôn tốt hơn 4 trụ'. Nhiều ca All-on-4 tiêu chuẩn hoàn toàn đủ vững chắc, việc tăng trụ không cần thiết chỉ làm tăng can thiệp phẫu thuật và chi phí của bạn."
                : "We do not recommend the number of implants prior to evaluating a 3D CBCT scan. We do not support the idea that '6 implants are always better than 4'. If an All-on-4 is clinically sufficient, adding extra posts only increases surgical invasiveness and cost without added benefit."}
            </p>
          </div>
        </div>
      </section>

      {/* 3. Candidates */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-dark-brand">
            {isVN ? "3. Bạn có phù hợp với All-on-6 không?" : "3. Am I a Good Candidate for All-on-6?"}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-emerald-50/20 border border-emerald-200 p-6 sm:p-8 rounded-3xl space-y-4">
            <h3 className="text-base font-bold text-emerald-700 flex items-center gap-2">
              <Check className="w-5 h-5" />
              {isVN ? "Chỉ định phù hợp nhất" : "Who is this suitable for?"}
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-800 font-medium">
              {[
                isVN ? "Mất toàn bộ răng một hàm, xương còn đủ nhưng phân bố không tập trung tại 4 điểm của All-on-4." : "Complete tooth loss on one or both arches, with bone available outside the 4 strategic sites.",
                isVN ? "Bệnh nhân có lực nhai rất mạnh, hoặc có thói quen ăn nhai thức ăn cứng." : "Patients with high chewing loads or active lifestyles.",
                isVN ? "Cung xương hàm rộng lớn, cần thêm nâng đỡ cơ học ở vùng trung gian." : "Larger dental arches requiring intermediate mechanical support.",
                isVN ? "Mật độ xương ở mức trung bình yếu, cần chia sẻ lực tải lên nhiều trụ." : "Moderate bone density where distributing the load over more posts improves safety."
              ].map((item, idx) => (
                <li key={idx} className="flex gap-2 items-start">
                  <Check className="w-4.5 h-4.5 text-emerald-700 shrink-0 mt-0.5" />
                  <span className="font-normal">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-amber-50/20 border border-amber-200 p-6 sm:p-8 rounded-3xl space-y-4">
            <h3 className="text-base font-bold text-amber-800 flex items-center gap-2">
              <Info className="w-5 h-5" />
              {isVN ? "Các trường hợp cần thận trọng" : "Who needs close assessment?"}
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-800 font-medium">
              {[
                isVN ? "Xương tiêu cực kỳ nghiêm trọng ở toàn bộ cung hàm (cần phác đồ ghép xương hoặc cấy gò má)." : "Severe bone resorption across the entire arch (may require bone grafts or Zygomatic implants).",
                isVN ? "Tiểu đường nặng chưa kiểm soát ổn định, loãng xương, hoặc xạ trị vùng đầu cổ." : "Uncontrolled diabetes, active osteoporosis, or recent head/neck radiation.",
                isVN ? "Hút thuốc lá nặng (khuyến cáo bắt buộc ngưng hút ít nhất 2 tuần trước và sau mổ)." : "Heavy smoking habits (must quit 2 weeks before and after surgery).",
                isVN ? "Nghiến răng nặng chưa kiểm soát (bắt buộc đeo máng chống nghiến ban đêm sau điều trị)." : "Severe bruxism (requires a night guard to protect final restorations)."
              ].map((item, idx) => (
                <li key={idx} className="flex gap-2 items-start">
                  <Info className="w-4.5 h-4.5 text-amber-700 shrink-0 mt-0.5" />
                  <span className="font-normal">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4. Comparison Table */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-dark-brand text-center">
          {isVN ? "4. So sánh All-on-6 với các phương án khác" : "4. All-on-6 Comparison Index"}
        </h2>
        <div className="border border-slate-200 rounded-3xl overflow-hidden bg-white shadow-sm overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-[#0b1e2c] text-white font-serif text-xs uppercase tracking-wider">
                <th className="p-4 border-b border-slate-800">{isVN ? "Tiêu chí" : "Criteria"}</th>
                <th className="p-4 border-b border-slate-800">All-on-6</th>
                <th className="p-4 border-b border-slate-800">All-on-4</th>
                <th className="p-4 border-b border-slate-800">{isVN ? "Implant đơn lẻ" : "Single Implants"}</th>
                <th className="p-4 border-b border-slate-800">{isVN ? "Hàm giả tháo lắp" : "Removable Dentures"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {[
                {
                  label: isVN ? "Số trụ/hàm" : "Implants per arch",
                  a6: "6",
                  a4: "4",
                  single: isVN ? "1 trụ / 1 răng mất (10-12 trụ)" : "1 post per lost tooth (10-12)",
                  denture: isVN ? "Không cần trụ" : "None"
                },
                {
                  label: isVN ? "Phân bổ lực nhai" : "Bite force distribution",
                  a6: isVN ? "Đều hơn, nhiều điểm chịu lực" : "More uniform, more support points",
                  a4: isVN ? "Tập trung tại 4 vị trí chiến lược" : "Concentrated at 4 strategic sites",
                  single: isVN ? "Tải lực theo vị trí từng răng" : "Localized to each tooth position",
                  denture: isVN ? "Không đều, tì lên nướu" : "Unbalanced, rests on soft tissues"
                },
                {
                  label: isVN ? "Yêu cầu ghép xương" : "Bone grafting requirement",
                  a6: isVN ? "Ít cần nhờ đặt góc nghiêng và nhiều trụ" : "Rarely required due to more placement options",
                  a4: isVN ? "Thường không cần" : "Usually not required",
                  single: isVN ? "Rất cao (tùy vị trí tiêu xương)" : "High if bone is resorbed",
                  denture: isVN ? "Không" : "None"
                },
                {
                  label: isVN ? "Phù hợp nhất khi" : "Ideal scenario",
                  a6: isVN ? "Xương phân bố rải rác, lực nhai mạnh, hàm lớn" : "Distributed bone, high bite load, large arch",
                  a4: isVN ? "Xương đủ tốt tại 4 vị trí chiến lược" : "Good bone at the 4 targeted sites",
                  single: isVN ? "Mất vài răng rời rạc" : "Single or multiple missing teeth",
                  denture: isVN ? "Kinh phí hạn chế, ngại phẫu thuật" : "Tight budget, surgery avoiders"
                },
                {
                  label: isVN ? "Mức độ can thiệp" : "Surgical invasiveness",
                  a6: isVN ? "Cao hơn All-on-4 (cấy thêm 2 trụ)" : "Higher than All-on-4 (2 more posts)",
                  a4: isVN ? "Thấp hơn All-on-6" : "Lower than All-on-6",
                  single: isVN ? "Cao nhất nếu cấy nhiều răng rời" : "Highest if placing individual fixtures",
                  denture: isVN ? "Không phẫu thuật" : "Non-surgical"
                },
                {
                  label: isVN ? "Dạng phục hình" : "Fixation type",
                  a6: isVN ? "Cố định bắt vít" : "Fixed (Screw-retained)",
                  a4: isVN ? "Cố định bắt vít" : "Fixed (Screw-retained)",
                  single: isVN ? "Cố định gắn xi măng/bắt vít" : "Fixed (Cement/Screw-retained)",
                  denture: isVN ? "Tháo lắp hàng ngày" : "Removable"
                }
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-slate-800 bg-slate-50/50">{row.label}</td>
                  <td className="p-4 font-semibold text-teal-brand">{row.a6}</td>
                  <td className="p-4">{row.a4}</td>
                  <td className="p-4">{row.single}</td>
                  <td className="p-4">{row.denture}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-[11px] sm:text-xs text-slate-700 font-semibold italic">
          {isVN 
            ? "* Khuyến nghị lâm sàng: Chỉ định cấy 4 hay 6 trụ hoàn toàn dựa trên phim chụp CBCT 3D và tính toán chịu lực cơ học, không phải cứ số lượng nhiều hơn là tốt hơn."
            : "* Clinical Note: The decision to place 4 or 6 implants is a clinical diagnosis based on bone density and load calculations, not a package preference."}
        </p>
      </section>

      {/* 5. Risks */}
      <section className="bg-amber-50/15 border border-amber-200 rounded-3xl p-8 sm:p-10 space-y-6">
        <div className="flex items-center gap-2.5 text-amber-800">
          <AlertTriangle className="w-6 h-6 shrink-0" />
          <h2 className="text-xl sm:text-2xl font-serif font-extrabold">
            {isVN ? "5. Rủi ro y khoa cần biết trước khi phẫu thuật" : "5. Risks & Complications to Know Before Surgery"}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm sm:text-base text-slate-800 leading-relaxed font-normal">
          <ul className="space-y-3.5">
            {[
              isVN ? "Vì cấy 6 trụ thay vì 4, thời gian phẫu thuật dài hơn và mức độ sưng nề hậu phẫu có thể nhiều hơn." : "Due to placing 6 implants instead of 4, surgical time is longer and postoperative swelling may be slightly increased.",
              isVN ? "Tỷ lệ tích hợp xương cao (~98%) nhưng vẫn có tỷ lệ nhỏ bị đào thải trụ riêng lẻ do cơ địa hoặc nhiễm trùng." : "Osseointegration rate is high (~98%) but minor risks of individual implant rejection exist due to biology or infection.",
              isVN ? "Hàm tạm lắp trong chuyến 1 chỉ có vai trò ăn nhai thức ăn mềm nhẹ — tuyệt đối không nhai đồ cứng sớm." : "The immediate load temporary bridge is structural but delicate – strictly no hard chewing is allowed during healing."
            ].map((risk, idx) => (
              <li key={idx} className="flex gap-2.5 items-start">
                <Info className="w-4.5 h-4.5 text-amber-700 shrink-0 mt-0.5" />
                <span>{risk}</span>
              </li>
            ))}
          </ul>
          <ul className="space-y-3.5">
            {[
              isVN ? "Việc vệ sinh quanh 6 trụ implant phức tạp hơn All-on-4, đòi hỏi kỹ năng vệ sinh kỹ lưỡng để tránh viêm." : "Maintaining oral hygiene around 6 implants is more demanding than All-on-4, requiring careful flossing to prevent peri-implantitis.",
              isVN ? "Tải lực hàm tạm phụ thuộc vào độ bám chắc chắn của trụ đo được trực tiếp trong ca phẫu thuật." : "Immediate loading capability depends entirely on primary implant stability measured intra-operatively during surgery.",
              isVN ? "Khung sườn chịu lực và răng sứ phục hình có tuổi thọ cơ học nhất định, cần tái khám kiểm tra định kỳ." : "Prosthetic frameworks and crown materials experience natural wear over time and require periodic maintenance."
            ].map((risk, idx) => (
              <li key={idx} className="flex gap-2.5 items-start">
                <Info className="w-4.5 h-4.5 text-amber-700 shrink-0 mt-0.5" />
                <span>{risk}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 6. Timeline */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-dark-brand text-center">
          {isVN ? "6. Lịch trình điều trị — Cần tối thiểu 2 chuyến đi" : "6. Step-by-Step Treatment Timeline — 2 Trips Required"}
        </h2>
        <div className="border border-slate-200 rounded-3xl overflow-hidden bg-white shadow-sm overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-[#0b1e2c] text-white font-serif text-xs uppercase tracking-wider">
                <th className="p-4 border-b border-slate-800">{isVN ? "Giai đoạn" : "Treatment Stage"}</th>
                <th className="p-4 border-b border-slate-800">{isVN ? "Nội dung thực hiện" : "Clinical Procedure"}</th>
                <th className="p-4 border-b border-slate-800">{isVN ? "Thời gian lưu trú" : "Recommended Stay"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {[
                {
                  stage: isVN ? "Chuyến 1 (Phẫu thuật đặt trụ)" : "Trip 1 (Implant Placement)",
                  desc: isVN 
                    ? "Khám lâm sàng, chụp CBCT 3D, lấy dấu ảo, nhổ răng hư tổn, phẫu thuật cắm 6 trụ implant, gắn hàm tạm nhựa cố định (nếu đủ vững ổn), cắt chỉ và theo dõi kiểm tra vết thương kỹ trước khi bay."
                    : "Clinical exam, 3D CBCT scan, extraction of failing teeth, implant surgery for 6 fixtures, immediate load of acrylic temporary bridge (if stable), suture removal and clinical follow-ups.",
                  stay: isVN ? "8 – 12 ngày tại Hà Nội" : "8 – 12 Days in Hanoi"
                },
                {
                  stage: isVN ? "Thời gian chờ tích hợp" : "Osseointegration Period",
                  desc: isVN 
                    ? "Trụ implant tích hợp sinh học với xương hàm trong thời gian bạn sinh hoạt tại Úc. Bệnh nhân ăn uống nhẹ nhàng bình thường với hàm răng tạm."
                    : "Implants biologically integrate with the jawbone while you are at home in Australia. Patient functions normally with temporary teeth (soft-diet focus).",
                  stay: isVN ? "3 – 6 tháng (ở Úc)" : "3 – 6 Months (in Australia)"
                },
                {
                  stage: isVN ? "Chuyến 2 (Lắp hàm vĩnh viễn)" : "Trip 2 (Final Restoration)",
                  desc: isVN 
                    ? "Chụp phim kiểm tra tích hợp của cả 6 trụ, lấy dấu cao tần kỹ thuật số, thử sườn kim loại/titanium chịu lực, thiết kế răng sứ, gắn cầu răng sứ cố định bắt vít chính thức, bàn giao thẻ bảo hành."
                    : "X-ray integration check for all 6 implants, digital impressions, structural framework try-in, custom porcelain teeth setup, final screw-retained bridge delivery, warranty cards handover.",
                  stay: isVN ? "5 – 7 ngày tại Hà Nội" : "5 – 7 Days in Hanoi"
                }
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-slate-800 bg-slate-50/50">{row.stage}</td>
                  <td className="p-4 leading-relaxed font-normal">{row.desc}</td>
                  <td className="p-4 font-semibold text-teal-brand">{row.stay}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 flex gap-3 items-start">
          <Info className="w-5 h-5 text-teal-brand shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
            {isVN 
              ? "Lưu ý đặt vé máy bay: Chuyến 1 của All-on-6 cần tối thiểu 8-12 ngày lưu trú. Quý khách nên để dư ít nhất 2-3 ngày đệm sau ngày phẫu thuật đặt trụ và gắn hàm trước khi bay để bác sĩ theo dõi vết thương, đảm bảo an toàn tuyệt đối."
              : "Flight Booking Tip: Trip 1 for All-on-6 requires a stay of 8-12 days. We recommend booking flights with a 2 to 3-day buffer window after the surgery and temporary fitting. This allows final evaluations before flying."}
          </p>
        </div>
      </section>

      {/* 7. What You Receive */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-slate-50 border border-slate-100 p-6 sm:p-8 rounded-3xl space-y-4">
          <h3 className="text-base font-bold text-dark-brand flex items-center gap-2">
            <Award className="w-5 h-5 text-teal-brand" />
            {isVN ? "7. Hồ sơ bàn giao sau Chuyến 1" : "7. Documentation Handed Over after Trip 1"}
          </h3>
          <ul className="space-y-3 text-xs sm:text-sm text-slate-700 font-normal">
            <li className="flex gap-2 items-start">
              <Check className="w-4.5 h-4.5 text-teal-brand shrink-0 mt-0.5" />
              <span>{isVN ? "Hộ chiếu cấy ghép Implant (Implant Passport) ghi rõ tên hãng, số lô (lot number) của cả 6 trụ." : "Implant Passport specifying brands, models, and batch/lot numbers for all 6 fixtures."}</span>
            </li>
            <li className="flex gap-2 items-start">
              <Check className="w-4.5 h-4.5 text-teal-brand shrink-0 mt-0.5" />
              <span>{isVN ? "Phim chụp kiểm tra vị trí trụ implant sau phẫu thuật cấy ghép." : "Post-surgical X-ray film showing correct placement alignment."}</span>
            </li>
            <li className="flex gap-2 items-start">
              <Check className="w-4.5 h-4.5 text-teal-brand shrink-0 mt-0.5" />
              <span>{isVN ? "Sổ hướng dẫn chế độ chăm sóc và số liên hệ khẩn cấp của điều phối viên 24/7." : "Home-care guide booklet and 24/7 direct patient coordinator hotline."}</span>
            </li>
          </ul>
        </div>

        <div className="bg-slate-50 border border-slate-100 p-6 sm:p-8 rounded-3xl space-y-4">
          <h3 className="text-base font-bold text-dark-brand flex items-center gap-2">
            <Shield className="w-5 h-5 text-teal-brand" />
            {isVN ? "Hồ sơ bàn giao sau Chuyến 2" : "Documentation Handed Over after Trip 2"}
          </h3>
          <ul className="space-y-3 text-xs sm:text-sm text-slate-700 font-normal">
            <li className="flex gap-2 items-start">
              <Check className="w-4.5 h-4.5 text-teal-brand shrink-0 mt-0.5" />
              <span>{isVN ? "Thẻ bảo hành chính thức cho cả 6 trụ implant và cầu răng vĩnh viễn." : "Official Warranty Certificate for both 6 implants and prosthesis structure."}</span>
            </li>
            <li className="flex gap-2 items-start">
              <Check className="w-4.5 h-4.5 text-teal-brand shrink-0 mt-0.5" />
              <span>{isVN ? "Chứng nhận vật liệu sản xuất cầu răng từ phòng Labo." : "Lab certification for materials used in framework and porcelain teeth."}</span>
            </li>
            <li className="flex gap-2 items-start">
              <Check className="w-4.5 h-4.5 text-teal-brand shrink-0 mt-0.5" />
              <span>{isVN ? "Hồ sơ bệnh án điện tử chi tiết, sử dụng mã danh mục thủ thuật chuẩn ADA." : "Detailed electronic medical record using ADA standard procedure codes."}</span>
            </li>
          </ul>
        </div>
      </section>

      {/* 8. Care in Australia */}
      <section className="bg-slate-50 border border-slate-100 rounded-3xl p-8 sm:p-10 space-y-6">
        <h2 className="text-xl sm:text-2xl font-serif font-extrabold text-dark-brand">
          {isVN ? "8. Chăm sóc tại Úc trong thời gian chờ lành thương" : "8. Post-Op Care Guidelines in Australia"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm sm:text-base text-slate-700 font-normal leading-relaxed">
          <ul className="space-y-3.5">
            <li className="flex gap-3 items-start">
              <span className="p-1 bg-teal-brand-light text-teal-brand rounded-md font-bold text-xs shrink-0">1</span>
              <span>{isVN ? "Ăn thức ăn mềm, cắt nhỏ trong 3-6 tháng đầu tiên để tránh áp lực nhai quá lớn lên hàm tạm." : "Eat soft, cut-up foods for the first 3-6 months. Avoid directly biting into hard food to prevent temporary bridge fractures."}</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="p-1 bg-teal-brand-light text-teal-brand rounded-md font-bold text-xs shrink-0">2</span>
              <span>{isVN ? "Ngưng hút thuốc lá hoàn toàn — chất nicotine ảnh hưởng trực tiếp đến sự tích hợp xương của cả 6 trụ." : "Quit smoking completely – nicotine constricts blood vessels, slows healing, and is the leading cause of early implant failures."}</span>
            </li>
          </ul>
          <ul className="space-y-3.5">
            <li className="flex gap-3 items-start">
              <span className="p-1 bg-teal-brand-light text-teal-brand rounded-md font-bold text-xs shrink-0">3</span>
              <span>{isVN ? "Vệ sinh răng miệng kỹ lưỡng, đặc biệt là các khe kẽ nướu giữa 6 trụ implant và hàm tạm." : "Maintain strict hygiene with soft-bristled brushes, water flossers on low pressure, and warm saline rinses after meals."}</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="p-1 bg-teal-brand-light text-teal-brand rounded-md font-bold text-xs shrink-0">4</span>
              <span>{isVN ? "Khuyên khích bạn tái khám định kỳ tại nha sĩ ở Úc sau 6-8 tuần đầu tiên từ chuyến đi 1." : "We recommend visiting your local Australian dentist for a routine progress check after 6-8 weeks."}</span>
            </li>
          </ul>
        </div>
      </section>

      {/* 9. Pricing */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-dark-brand text-center">
          {isVN ? "9. Chi phí cấy ghép All-on-6 trọn gói tại DentalNKT" : "9. Comprehensive All-on-6 Fee Schedule"}
        </h2>
        <div className="border border-slate-200 rounded-3xl overflow-hidden bg-white shadow-sm overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-[#0b1e2c] text-white font-serif text-xs uppercase tracking-wider">
                <th className="p-4 border-b border-slate-800">{isVN ? "Hạng mục điều trị" : "Treatment Package"}</th>
                <th className="p-4 border-b border-slate-800 text-right">{isVN ? "Đơn giá (USD)" : "Price (USD)"}</th>
                <th className="p-4 border-b border-slate-800 text-right">{isVN ? "Quy đổi (AUD)" : "Price (AUD)"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {[
                {
                  item: isVN 
                    ? "Trọn gói All-on-6 — 6 trụ Hiossen (Mỹ) + hàm tạm + cầu răng sứ phục hình chính thức" 
                    : "All-on-6 Package — 6 HIOSSEN (USA) implants + temporary + final ceramic bridge",
                  usd: "$6,666 USD",
                  aud: "$9,500 AUD"
                },
                {
                  item: isVN 
                    ? "Trọn gói All-on-6 — 6 trụ Nobel Biocare / Straumann + hàm tạm + cầu răng phục hình chính thức" 
                    : "All-on-6 Package — 6 Nobel Biocare / Straumann implants + temporary + final ceramic bridge",
                  usd: "$14,539 USD",
                  aud: "$20,716 AUD"
                },
                {
                  item: isVN 
                    ? "Nâng cấp hàm phục hình chính thức lên khung Titan/Zirconia cao cấp" 
                    : "Prosthetic Upgrade — high-end milled Titanium / Zirconia framework",
                  usd: "$1,370 USD",
                  aud: "$1,950 AUD"
                },
                {
                  item: isVN 
                    ? "Ghép xương ổ răng bổ sung (nếu xương quá mỏng, tính trên mỗi đơn vị)" 
                    : "Supplemental Bone Grafting (if bone volume is thin, per unit)",
                  usd: "$274 USD",
                  aud: "$390 AUD"
                },
                {
                  item: isVN 
                    ? "Cấy ghép Implant xương gò má (chỉ định cho ca tiêu xương đặc biệt nặng, tính trên mỗi trụ)" 
                    : "Zygomatic Implant placement (indicated for extreme bone loss, per fixture)",
                  usd: "$3,425 USD",
                  aud: "$4,880 AUD"
                }
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-medium text-slate-800">{row.item}</td>
                  <td className="p-4 text-right font-semibold text-slate-800">{row.usd}</td>
                  <td className="p-4 text-right font-extrabold text-teal-brand">{row.aud}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs sm:text-sm text-slate-700 font-semibold italic">
          {isVN 
            ? "* Giá trọn gói đã bao gồm: Khám lâm sàng, chụp CBCT 3D kỹ thuật số, phẫu thuật đặt trụ, hàm tạm trong ngày, hàm phục hình vĩnh viễn chính thức và tái khám kiểm tra trong suốt quá trình. Tỷ giá quy đổi cố định: 1 AUD = 18.441 VNĐ, 1 USD = 26.280 VNĐ."
            : "* Package rates include: Clinical consultations, 3D CBCT diagnostics, surgery fees, immediate temporary bridge, final permanent bridge, and all post-op follow-ups. Currency converted at the fixed rates: 1 AUD = 18,441 VND, 1 USD = 26,280 VND."}
        </p>
      </section>

      {/* 10. Clinical Accountability */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-7 space-y-6">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-teal-brand" />
            <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-dark-brand">
              {isVN ? "10. Ai thực hiện All-on-6 cho bạn?" : "10. Who Will Perform Your Surgery?"}
            </h2>
          </div>
          <div className="space-y-4 text-sm sm:text-base text-slate-800 leading-relaxed font-normal">
            <p>
              {isVN
                ? "All-on-6 là kỹ thuật phẫu thuật cấy ghép toàn hàm phức tạp hơn All-on-4, đòi hỏi bác sĩ có kỹ năng tay nghề vững vàng cùng hệ thống vô trùng hiện đại nhất. Tại DentalNKT, ca phẫu thuật All-on-6 của bạn được thực hiện trực tiếp bởi Dr. Nguyễn Huy Hoàng — Giám đốc chuyên môn khoa Implant của phòng khám."
                : "All-on-6 is an advanced full-arch implant procedure requiring exceptional clinical skills and experience. At DentalNKT, your All-on-6 surgery is directly performed by Dr. Nguyen Huy Hoang — our Clinical Director of Implantology."}
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
              <li className="flex gap-2 items-center">
                <Check className="w-4 h-4 text-teal-brand shrink-0" />
                <span>{isVN ? "Bác sĩ tốt nghiệp chính quy Đại học Y Hà Nội năm 2011." : "Graduated from Hanoi Medical University in 2011."}</span>
              </li>
              <li className="flex gap-2 items-center">
                <Check className="w-4 h-4 text-teal-brand shrink-0" />
                <span>{isVN ? "Tu nghiệp chuyên sâu tại Đại học Cologne (Đức) chuyên ngành Chỉnh nha & Implant." : "Advanced training at Cologne University (Germany) specializing in Implantology."}</span>
              </li>
              <li className="flex gap-2 items-center">
                <Check className="w-4 h-4 text-teal-brand shrink-0" />
                <span>{isVN ? "Đã thực hiện thành công hơn 15.000 ca cấy ghép implant, bao gồm các ca toàn hàm phức tạp." : "Over 15,000+ successful implant placements, including complex full-arch reconstructions."}</span>
              </li>
              <li className="flex gap-2 items-center">
                <Check className="w-4 h-4 text-teal-brand shrink-0" />
                <span>{isVN ? "Phòng phẫu thuật đạt tiêu chuẩn vô trùng tuyệt đối, kiểm soát nhiễm khuẩn nghiêm ngặt." : "Operating theater fully certified for absolute sterile control by the Ministry of Health."}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="md:col-span-5 bg-teal-brand-light/30 border border-teal-brand-light p-8 rounded-3xl space-y-4">
          <h3 className="text-base font-bold text-dark-brand">
            {isVN ? "Phương thức thanh toán" : "Flexible Payment Structure"}
          </h3>
          <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal">
            {isVN
              ? "Chúng tôi chấp nhận thanh toán linh hoạt bằng cả tiền mặt, chuyển khoản hoặc quẹt thẻ tín dụng quốc tế (VISA/Mastercard) bằng tiền VNĐ hoặc AUD. Chi phí được chia làm 2 đợt thanh toán tương ứng với 2 chuyến đi điều trị của quý khách (Đợt 1: 70% khi cấy trụ; Đợt 2: 30% khi lắp hàm chính thức)."
              : "We support multiple payment methods including cash, bank transfers, and international credit cards (VISA/Mastercard) in either VND or AUD. Fees are split across your 2 treatment trips (Stage 1: 70% paid during Trip 1 surgery; Stage 2: 30% paid during Trip 2 final bridge delivery)."}
          </p>
        </div>
      </section>

      {/* 11. Warranty */}
      <section className="bg-slate-50 border border-slate-100 rounded-3xl p-8 sm:p-10 space-y-6">
        <h2 className="text-xl sm:text-2xl font-serif font-extrabold text-dark-brand text-center">
          {isVN ? "11. Chính sách bảo hành rõ ràng, minh bạch" : "11. Verifiable Warranty Policy"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-slate-150 p-6 rounded-2xl space-y-2">
            <span className="text-xs text-slate-600 font-bold block uppercase tracking-wider">{isVN ? "Trụ Implant (6 trụ)" : "Implant Fixtures (6 posts)"}</span>
            <strong className="text-xl sm:text-2xl font-bold text-teal-brand block">10 {isVN ? "Năm" : "Years"}</strong>
            <p className="text-xs text-slate-700 font-normal leading-relaxed">
              {isVN ? "Bảo hành kết cấu cơ học, thay thế trụ mới miễn phí nếu có lỗi từ nhà sản xuất. Mỗi trụ được bảo hành riêng biệt." : "Covers structural integrity. Lifetime or 10-year free replacement for post damage. Each fixture is covered independently."}
            </p>
          </div>
          <div className="bg-white border border-slate-150 p-6 rounded-2xl space-y-2">
            <span className="text-xs text-slate-600 font-bold block uppercase tracking-wider">{isVN ? "Khung sườn hàm phục hình" : "Structural Framework"}</span>
            <strong className="text-xl sm:text-2xl font-bold text-teal-brand block">7 {isVN ? "Năm" : "Years"}</strong>
            <p className="text-xs text-slate-700 font-normal leading-relaxed">
              {isVN ? "Bảo hành gãy, nứt khung sườn titanium hoặc zirconia nâng đỡ răng." : "Covers cracks or fractures of the internal titanium or zirconia bar support."}
            </p>
          </div>
          <div className="bg-white border border-slate-150 p-6 rounded-2xl space-y-2">
            <span className="text-xs text-slate-600 font-bold block uppercase tracking-wider">{isVN ? "Lớp phủ răng ngoài" : "Outer Dental Crowns/Acrylic"}</span>
            <strong className="text-xl sm:text-2xl font-bold text-teal-brand block">5 {isVN ? "Năm" : "Years"}</strong>
            <p className="text-xs text-slate-700 font-normal leading-relaxed">
              {isVN ? "Bảo hành bong tróc, sứt mẻ sứ hoặc nhựa phủ ngoài khung sườn nâng đỡ." : "Covers debonding, chipping, or fracturing of porcelain crown veneers."}
            </p>
          </div>
        </div>
        <div className="bg-teal-brand/10 border border-teal-brand/20 rounded-2xl p-6 flex gap-3 items-start">
          <Shield className="w-5 h-5 text-teal-brand shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
            {isVN
              ? "Điều khoản cam kết: DentalNKT áp dụng quy trình xử lý chuyên nghiệp bảo vệ khách hàng. Trong trường hợp xảy ra rủi ro y khoa thuộc trách nhiệm của phòng khám khi bạn đã về Úc, chúng tôi sẽ chịu trách nhiệm khắc phục miễn phí và hỗ trợ lên tới 100% chi phí vé máy bay khứ hồi cho bạn quay lại Việt Nam."
              : "Clinical backup promise: In the rare event of a clinical complication or failure originating from our surgical execution after your return to Australia, DentalNKT will resolve the issue free of charge and provide up to 100% reimbursement for your return flights back to Hanoi."}
          </p>
        </div>
      </section>

      {/* 12. FAQ Section */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-dark-brand text-center">
          {isVN ? "12. Câu hỏi thường gặp về All-on-6" : "12. All-on-6 Frequently Asked Questions"}
        </h2>
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqItems.map((item, idx) => (
            <div key={idx} className="border border-slate-150 rounded-2xl overflow-hidden bg-white">
              <button
                onClick={() => toggleFaq(idx)}
                id={`faq-btn-${idx}`}
                aria-expanded={activeFaq === idx}
                aria-controls={`faq-panel-${idx}`}
                className="w-full px-6 py-4 text-left font-serif font-bold text-sm sm:text-base text-dark-brand hover:text-teal-brand transition-colors flex justify-between items-center bg-slate-50/50 cursor-pointer border-none outline-none"
              >
                <span>{item.q}</span>
                {activeFaq === idx ? (
                  <ChevronUp className="w-4 h-4 text-teal-brand shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-teal-brand shrink-0" />
                )}
              </button>
              {activeFaq === idx && (
                <div 
                  id={`faq-panel-${idx}`}
                  role="region"
                  aria-labelledby={`faq-btn-${idx}`}
                  className="px-6 py-4 border-t border-slate-150 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal bg-white"
                >
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 13. Call To Action Footer */}
      <section className="bg-gradient-to-br from-[#0b1e2c] via-[#0f2a3f] to-[#0b1e2c] text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-teal-brand/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-teal-brand/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-2xl mx-auto space-y-4">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold">
            {isVN ? "Phục hồi răng vững chắc — Tiết kiệm tới 70% chi phí" : "Restore Your Smile – Save Up to 70% in Hanoi"}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
            {isVN 
              ? "Hãy gửi cho chúng tôi phim chụp X-quang hoặc CBCT 3D gần nhất của bạn. Hội đồng bác sĩ chuyên khoa DentalNKT sẽ tư vấn chẩn đoán và gửi kế hoạch điều trị chi tiết kèm báo giá bằng AUD trong vòng 24–48 giờ."
              : "Submit your latest dental X-ray or 3D CBCT scan. Our Clinical Implant Board will review your diagnostic data and deliver a written treatment plan and AUD cost quotation within 24 to 48 hours."}
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4 items-center">
            <Link 
              href="/contact" 
              className="bg-teal-brand hover:bg-teal-700 text-white font-bold px-8 py-3.5 rounded-full text-xs sm:text-sm transition-all shadow-lg hover:scale-105"
            >
              {isVN ? "Đăng Ký Tư Vấn Nụ Cười" : "Book Free Smile Assessment"}
            </Link>
            <a 
              href="https://wa.me/84963333844" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border border-slate-600 hover:border-teal-brand text-slate-200 hover:text-white px-6 py-3.5 rounded-full text-xs sm:text-sm transition-all font-semibold inline-flex items-center justify-center bg-white/10 hover:bg-white/20"
            >
              WhatsApp Chat
            </a>
            <Link 
              href="/warranty" 
              className="text-slate-300 hover:text-white px-4 py-3.5 text-xs sm:text-sm transition-all flex items-center gap-1.5 font-medium underline"
            >
              {isVN ? "Xem Chính sách Bảo hành" : "Read Warranty Terms"}
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
