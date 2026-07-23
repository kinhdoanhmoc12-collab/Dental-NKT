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

export default function AllOn4Page() {
  const { lang, t } = useLanguage();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const isVN = lang === "VN";

  React.useEffect(() => {
    document.title = isVN 
      ? "All-on-4 — Phục hồi toàn hàm cố định chỉ với 4 trụ Implant | DentalNKT"
      : "All-on-4 — Full-Arch Fixed Restorations with Just 4 Implants | DentalNKT";
  }, [isVN]);

  // FAQ Items
  const faqItems = [
    {
      q: isVN 
        ? "Vì sao chỉ cần 4 trụ mà không phải nhiều hơn?" 
        : "Why are only 4 implants needed instead of more?",
      a: isVN 
        ? "Nhờ cách đặt 2 trụ sau nghiêng góc 30-45 độ, kỹ thuật All-on-4 tận dụng tối đa vùng xương chắc chắn phía trước và dọc thành xương hàm mà không cần ghép xương trong đa số trường hợp. Số trụ nhiều hơn (như All-on-6) chỉ cần thiết khi phim CT cho thấy cần phân bổ lực nhai rộng hơn hoặc mật độ xương quá yếu."
        : "By tilting the two rear implants at a 30 to 45-degree angle, the All-on-4 technique utilizes the dense bone at the front of the jaw and avoids vital structures without requiring bone grafts in most cases. More implants (like All-on-6) are only necessary if your 3D CT scan reveals exceptionally low bone density or requires wider force distribution."
    },
    {
      q: isVN 
        ? "Nếu xương của tôi tiêu nhiều thì sao?" 
        : "What if I have severe bone loss?",
      a: isVN 
        ? "Phim chụp CBCT 3D sẽ cho biết trước chính xác thể tích xương của bạn. Tùy thuộc vào mức độ tiêu xương, bác sĩ có thể đề xuất ghép xương trước khi cấy, chuyển sang All-on-6, hoặc trong trường hợp tiêu xương rất nặng — thực hiện Implant xương gò má (Zygomatic Implant) để cấy trụ vào xương gò má thay vì xương ổ răng."
        : "A 3D CBCT scan will reveal your exact bone volume. Depending on the severity of the resorption, our surgeons may recommend minor bone grafting, upgrading to All-on-6, or in cases of extreme bone loss, performing Zygomatic Implants, which anchor longer implants into the cheekbone instead of the jawbone."
    },
    {
      q: isVN 
        ? "Tôi có chắc chắn có răng ngay trong ngày phẫu thuật không?" 
        : "Am I guaranteed to get temporary teeth on the day of surgery?",
      a: isVN 
        ? "Không thể hứa trước 100%. Quyết định gắn hàm tạm trong ngày phụ thuộc hoàn toàn vào độ vững ổn sơ khởi (độ bám chặt của trụ implant vào xương) đo được trực tiếp trong ca mổ. Nếu xương quá yếu, bác sĩ sẽ hoãn gắn hàm tạm vài ngày để đảm bảo an toàn cho sự tích hợp xương."
        : "It cannot be guaranteed 100% beforehand. The placement of an immediate temporary bridge depends entirely on the primary stability (torque value) of the implants measured during surgery. If the bone is too soft, the surgeon will delay loading the temporary teeth for a few days to protect the implants from premature micro-movements."
    },
    {
      q: isVN 
        ? "Tổng thời gian điều trị từ đầu đến khi hoàn thành là bao lâu?" 
        : "What is the total treatment timeline from start to finish?",
      a: isVN 
        ? "Tổng thời gian thường dao động từ 6 đến 9 tháng. Phần lớn thời gian này là giai đoạn lành xương và tích hợp sinh học tại Úc/nhà của bạn. Bạn chỉ cần thực hiện 2 chuyến đi đến Việt Nam: Chuyến 1 (7-10 ngày) để đặt trụ và gắn hàm tạm; Chuyến 2 (5-7 ngày) sau 3-6 tháng để lắp hàm sứ vĩnh viễn chính thức."
        : "The entire process takes approximately 6 to 9 months, most of which is the healing and osseointegration period spent in Australia. You only need to make 2 trips to Vietnam: Trip 1 (7-10 days) for implant placement and temporary teeth, and Trip 2 (5-7 days) about 3-6 months later for final restoration fitting."
    },
    {
      q: isVN 
        ? "All-on-4 có được bảo hành khi tôi đã về Úc không?" 
        : "Is my All-on-4 warranty valid after I return to Australia?",
      a: isVN 
        ? "Có, toàn bộ gói All-on-4 được bảo hành chính thức theo chính sách của DentalNKT. Trụ implant được bảo hành 10 năm. Nếu phát sinh sự cố do lỗi kỹ thuật của phòng khám, chúng tôi hỗ trợ chi phí xử lý và lên tới 100% vé máy bay khứ hồi để bạn quay lại khắc phục."
        : "Yes, the entire All-on-4 treatment is covered under DentalNKT's Global Warranty Policy. Implants carry a 10-year warranty. If a mechanical or biological complication arises due to clinic responsibility, we cover treatment and up to 100% of return flights back to Hanoi for revision."
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
              <span>{isVN ? "PHỤC HỒI TOÀN HÀM" : "FULL-ARCH RECONSTRUCTION"}</span>
            </span>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-white leading-tight">
              {isVN 
                ? "All-on-4 — Phục Hồi Toàn Hàm Cố Định Chỉ Với 4 Trụ Implant" 
                : "All-on-4 — Full-Arch Fixed Restorations with Just 4 Implants"}
            </h1>
            
            <p className="text-sm sm:text-base text-slate-200 font-normal leading-relaxed">
              {isVN 
                ? "Giải pháp phục hồi toàn bộ răng một hàm bị mất hoặc lung lay nặng bằng 4 trụ implant bố trí chiến lược. Phục hồi 99% chức năng ăn nhai tự nhiên mà không cần ghép xương phức tạp."
                : "A revolutionary clinical technique restoring a full arch of missing or failing teeth with just 4 strategically positioned implants. Reclaims 99% of chew force without complex bone grafting."}
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-slate-700/80 w-full">
              <div>
                <span className="text-xs text-slate-300 block font-medium">
                  {isVN ? "Trọn gói từ:" : "All-inclusive from:"}
                </span>
                <span className="text-2xl sm:text-3xl font-extrabold text-teal-brand">
                  {isVN ? "136.900.000 VNĐ / hàm" : "$7,425 AUD / arch"}
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

      {/* 1. What is All-on-4 */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-7 space-y-6">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-gold-brand" />
            <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-dark-brand">
              {isVN ? "1. All-on-4 là gì, và vì sao chỉ cần 4 trụ?" : "1. What is All-on-4, and Why Only 4 Implants?"}
            </h2>
          </div>
          <div className="space-y-4 text-sm sm:text-base text-slate-800 leading-relaxed font-normal">
            <p>
              {isVN
                ? "All-on-4 là kỹ thuật phục hồi toàn bộ một hàm răng đã mất bằng cách cấy 4 trụ Implant tại các vị trí chiến lược: 2 trụ phía trước đặt thẳng đứng tại vùng xương dày nhất, và 2 trụ phía sau đặt nghiêng một góc khoảng 30–45 độ. Góc nghiêng này giúp né các cấu trúc nhạy cảm như xoang hàm ở hàm trên và dây thần kinh ở hàm dưới."
                : "All-on-4 is a full-arch restoration technique that replaces an entire arch of missing teeth using just 4 strategically placed implants: 2 straight implants in the front and 2 tilted implants at the back (angled at 30 to 45 degrees). This specialized angulation bypasses anatomical structures like the sinus cavity (upper jaw) and the alveolar nerve (lower jaw)."}
            </p>
            <p>
              {isVN
                ? "Nhờ cách đặt nghiêng thông minh này, nhiều trường hợp tiêu xương ở mức trung bình vẫn có thể thực hiện All-on-4 mà không cần phẫu thuật ghép xương đau đớn và tốn kém. Bác sĩ sẽ gắn một cầu răng cố định nguyên khối bắt vít vững chắc lên 4 trụ, giúp ăn nhai bền vững mà không bị lỏng lẻo như hàm tháo lắp."
                : "By utilizing this tilted layout, patients with moderate bone resorption can avoid traumatic and expensive bone grafts. A full-arch fixed prosthesis is securely screwed onto these 4 posts, offering stable chewing power and eliminating the discomfort and slippage of traditional removable dentures."}
            </p>
          </div>
        </div>
        <div className="md:col-span-5 bg-teal-brand-light/30 border border-teal-brand-light p-8 rounded-3xl space-y-4">
          <h3 className="text-base font-bold text-dark-brand">
            {isVN ? "Ưu điểm vượt trội của All-on-4" : "Key Benefits of All-on-4"}
          </h3>
          <ul className="space-y-3.5">
            {[
              isVN ? "Hạn chế tối đa ghép xương nâng xoang phức tạp" : "Avoids complex bone grafting & sinus lifts in most cases",
              isVN ? "Cố định bắt vít chắc chắn, không lo rơi hay lỏng lẻo" : "Screw-retained fixed bridge – no slipping or moving",
              isVN ? "Khôi phục nụ cười trẻ trung và nâng đỡ cơ mặt bị hóp" : "Restores natural smile aesthetics and supports saggy cheeks",
              isVN ? "Lắp răng tạm ăn nhai nhẹ trong vòng 24 giờ sau mổ" : "Immediate load temporary bridge fitted within 24 hours",
              isVN ? "Vệ sinh dễ dàng bằng chỉ nha khoa và tăm nước chuyên dụng" : "Easy maintenance with dental floss & water flossers"
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
              ? "2. Yếu tố quyết định tính khả thi của All-on-4: Phim chụp CT/CBCT 3D" 
              : "2. The Ultimate Deciding Factor: 3D CT/CBCT Diagnostic Scan"}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-sm sm:text-base text-slate-700 font-normal leading-relaxed">
          <div className="md:col-span-7 space-y-4">
            <p>
              {isVN
                ? "All-on-4 không phải là kỹ thuật muốn làm là làm được ngay — nó phụ thuộc hoàn toàn vào cấu trúc xương hàm thực tế của bạn. Phim chụp cắt lớp vi tính 3D Cone Beam CT (CBCT) là công cụ duy nhất giúp bác sĩ phân tích chính xác:"
                : "All-on-4 feasibility is strictly governed by your clinical jawbone volume and density. A 3D Cone Beam CT (CBCT) scan is the only diagnostic tool that allows our clinical board to evaluate:"}
            </p>
            <ul className="space-y-3">
              {[
                isVN ? "Thể tích xương tại 4 vị trí đặt trụ chiến lược." : "Bone volume and thickness at the 4 strategic implant sites.",
                isVN ? "Vị trí đáy xoang hàm (hàm trên) để định vị góc nghiêng an toàn." : "The exact boundary of the sinus cavities (upper jaw) to adjust rear angulation.",
                isVN ? "Đường đi của dây thần kinh răng dưới (hàm dưới) để tránh tổn thương gây tê bì môi." : "The location of the inferior alveolar nerve (lower jaw) to avoid numbness.",
                isVN ? "Mức độ tiêu xương — nếu tiêu xương cực kỳ nghiêm trọng, bác sĩ sẽ đề xuất phương án ghép xương nâng xoang, All-on-6 hoặc cấy trụ xương gò má (Zygomatic Implant)." : "The level of resorption – in cases of extreme loss, alternative treatments like bone grafts, All-on-6, or Zygomatic Implants will be indicated."
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
                ? "Chúng tôi yêu cầu phim CBCT 3D đối với 100% ca phẫu thuật All-on-4 để lập kế hoạch điều trị bằng máng hướng dẫn ảo trên máy tính. Không chẩn đoán hay báo giá cam kết chỉ dựa trên ảnh chụp răng thông thường nhằm tránh rủi ro phát sinh hoặc thất bại lâm sàng."
                : "We enforce a strict 3D CBCT requirement for 100% of All-on-4 surgeries to design accurate virtual guides. We do not provide firm treatment quotes based on simple panoramic X-rays or photos to eliminate surprises or clinical failures."}
            </p>
          </div>
        </div>
      </section>

      {/* 3. Candidates */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-dark-brand">
            {isVN ? "3. Bạn có phù hợp với All-on-4 không?" : "3. Am I a Good Candidate for All-on-4?"}
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
                isVN ? "Mất toàn bộ răng một hàm hoặc cả hai hàm." : "Complete tooth loss on one or both arches.",
                isVN ? "Răng còn lại bị lung lay nặng do nha chu, bắt buộc phải nhổ bỏ." : "Remaining teeth are severely loose from periodontitis and require extraction.",
                isVN ? "Đang sử dụng hàm giả tháo lắp nhưng lỏng lẻo, đau buốt khi ăn nhai." : "Currently wearing unstable removable dentures that cause sore spots.",
                isVN ? "Thể tích xương hàm còn đủ tại 4 vị trí cấy ghép chiến lược." : "Adequate bone volume at the 4 targeted implant sites."
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
                isVN ? "Tiêu xương nghiêm trọng ở cả 4 vị trí (cần ghép xương hoặc cấy gò má)." : "Extreme bone loss at all sites (requires bone grafting or Zygomatic implants).",
                isVN ? "Tiểu đường nặng chưa kiểm soát, loãng xương, hoặc xạ trị vùng đầu mặt." : "Uncontrolled diabetes, active osteoporosis, or recent head/neck radiation.",
                isVN ? "Hút thuốc lá nhiều (khuyến cáo ngưng hút 2 tuần trước và sau phẫu thuật)." : "Heavy smoking habits (must quit 2 weeks before and after surgery).",
                isVN ? "Nghiến răng nặng chưa kiểm soát (cần đeo máng bảo vệ sau khi gắn răng)." : "Severe bruxism (requires a night guard to prevent prosthetic fracture)."
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
          {isVN ? "4. So sánh All-on-4 với các phương án khác" : "4. All-on-4 Comparison Index"}
        </h2>
        <div className="border border-slate-200 rounded-3xl overflow-hidden bg-white shadow-sm overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-[#0b1e2c] text-white font-serif text-xs uppercase tracking-wider">
                <th className="p-4 border-b border-slate-800">{isVN ? "Tiêu chí" : "Criteria"}</th>
                <th className="p-4 border-b border-slate-800">All-on-4</th>
                <th className="p-4 border-b border-slate-800">All-on-6</th>
                <th className="p-4 border-b border-slate-800">{isVN ? "Implant đơn lẻ" : "Single Implants"}</th>
                <th className="p-4 border-b border-slate-800">{isVN ? "Hàm giả tháo lắp" : "Removable Dentures"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {[
                {
                  label: isVN ? "Số trụ/hàm" : "Implants per arch",
                  a4: "4",
                  a6: "6",
                  single: isVN ? "1 trụ/1 răng mất (10-12 trụ)" : "1 post per lost tooth (10-12)",
                  denture: isVN ? "Không cần trụ" : "None"
                },
                {
                  label: isVN ? "Yêu cầu ghép xương" : "Bone grafting requirement",
                  a4: isVN ? "Thường không cần" : "Usually not required",
                  a6: isVN ? "Ít cần nhờ đặt góc nghiêng" : "Rarely required due to spacing",
                  single: isVN ? "Rất cao (tùy vị trí tiêu xương)" : "High if bone is resorbed",
                  denture: isVN ? "Không cần phẫu thuật" : "None"
                },
                {
                  label: isVN ? "Phù hợp nhất khi" : "Ideal scenario",
                  a4: isVN ? "Tiêu xương trung bình, xương đủ 4 vị trí" : "Average resorption, good bone at 4 sites",
                  a6: isVN ? "Xương yếu hơn, hàm rộng, nhai mạnh" : "Slightly softer bone, wider arch",
                  single: isVN ? "Mất vài răng rời rạc" : "Single or multiple missing teeth",
                  denture: isVN ? "Kinh phí thấp, ngại phẫu thuật" : "Tight budget, surgery avoiders"
                },
                {
                  label: isVN ? "Dạng phục hình" : "Fixation type",
                  a4: isVN ? "Cố định bắt vít" : "Fixed (Screw-retained)",
                  a6: isVN ? "Cố định bắt vít" : "Fixed (Screw-retained)",
                  single: isVN ? "Cố định gắn xi măng/bắt vít" : "Fixed (Cement/Screw-retained)",
                  denture: isVN ? "Tháo lắp hàng ngày" : "Removable"
                },
                {
                  label: isVN ? "Có răng tạm trong ngày" : "Teeth in a day (Temporary)",
                  a4: isVN ? "Có (tùy thuộc vào độ vững ổn sơ khởi)" : "Yes (subject to primary stability)",
                  a6: isVN ? "Có (tùy thuộc vào độ vững ổn sơ khởi)" : "Yes (subject to primary stability)",
                  single: isVN ? "Không (chờ tích hợp xương)" : "No (requires osseointegration)",
                  denture: isVN ? "Có" : "Yes"
                }
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-slate-800 bg-slate-50/50">{row.label}</td>
                  <td className="p-4 font-semibold text-teal-brand">{row.a4}</td>
                  <td className="p-4">{row.a6}</td>
                  <td className="p-4">{row.single}</td>
                  <td className="p-4">{row.denture}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-[11px] sm:text-xs text-slate-700 font-semibold italic">
          {isVN 
            ? "* Lưu ý quan trọng: Quyết định cấy 4 hay 6 trụ là chỉ định y khoa dựa trên phim chụp CBCT thực tế, không phải số lượng nhiều hơn là luôn tốt hơn. Nhiều nha khoa đề xuất All-on-6 chỉ để tăng chi phí điều trị."
            : "* Clinical Note: The decision to place 4 or 6 implants is a clinical diagnosis based on bone density and load calculations, not a package preference. Avoid clinics pushing All-on-6 simply to increase invoice values."}
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
              isVN ? "Tỷ lệ tích hợp xương cao (98%) nhưng không tuyệt đối — vẫn có rủi ro đào thải trụ do cơ địa hoặc nhiễm trùng." : "Osseointegration rate is high (~98%) but not absolute – minor risks of implant rejection exist due to biology or infection.",
              isVN ? "Hiện tượng sưng nề, đau nhức và bầm tím quanh cằm/má là bình thường và kéo dài từ 5-10 ngày." : "Post-operative swelling, mild pain, and minor bruising around the cheeks/chin are normal and resolve in 5-10 days.",
              isVN ? "Hàm tạm lắp trong ngày mổ chỉ có vai trò thẩm mỹ và ăn mềm nhẹ — tuyệt đối không ăn đồ cứng ngay." : "The immediate load temporary bridge is cosmetic and structural – strictly no hard chewing is allowed during healing."
            ].map((risk, idx) => (
              <li key={idx} className="flex gap-2.5 items-start">
                <Info className="w-4.5 h-4.5 text-amber-700 shrink-0 mt-0.5" />
                <span>{risk}</span>
              </li>
            ))}
          </ul>
          <ul className="space-y-3.5">
            {[
              isVN ? "Không phải trường hợp nào cũng đủ điều kiện gắn răng tạm trong ngày (bác sĩ quyết định dựa trên lực vặn trụ)." : "Immediate loading is not guaranteed – it is decided intra-operatively based on the insertion torque value.",
              isVN ? "Nguy cơ viêm quanh implant nếu khách hàng lười vệ sinh răng miệng hoặc bỏ tái khám định kỳ." : "Peri-implantitis risk increases dramatically if oral hygiene is poor or annual check-ups are missed.",
              isVN ? "Hàm phục hình vĩnh viễn (sứ/nhựa acrylic) có hao mòn tự nhiên và tuổi thọ riêng, cần bảo trì định kỳ." : "Final restorations (ceramics/acrylics) experience mechanical wear and tear and require periodic maintenance."
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
                    ? "Khám lâm sàng, chụp CBCT 3D, lấy dấu ảo, nhổ răng lung lay, phẫu thuật cắm 4 trụ implant, gắn hàm tạm nhựa cố định (nếu đủ ổn định), cắt chỉ và kiểm tra vết mổ trước khi bay."
                    : "Clinical exam, 3D CBCT scan, computer surgical planning, extraction of failing teeth, implant surgery, immediate placement of acrylic temporary bridge (if stable), suture removal & check-up.",
                  stay: isVN ? "7 – 10 ngày tại Hà Nội" : "7 – 10 Days in Hanoi"
                },
                {
                  stage: isVN ? "Thời gian chờ tích hợp" : "Osseointegration Period",
                  desc: isVN 
                    ? "Trụ implant tích hợp sinh học bền vững với xương hàm tại Úc. Bệnh nhân ăn uống bình thường với hàm răng tạm (tránh thức ăn quá cứng)."
                    : "Implants biologically integrate with the jawbone while you are at home in Australia. Patient functions normally with temporary teeth (soft-diet focus).",
                  stay: isVN ? "3 – 6 tháng (ở Úc)" : "3 – 6 Months (in Australia)"
                },
                {
                  stage: isVN ? "Chuyến 2 (Lắp hàm vĩnh viễn)" : "Trip 2 (Final Restoration)",
                  desc: isVN 
                    ? "Chụp X-quang kiểm tra tích hợp xương, lấy dấu cao tần kỹ thuật số, thử sườn kim loại/titanium, thiết kế răng sứ thẩm mỹ, lắp cầu răng sứ vĩnh viễn bắt vít chính thức, bàn giao thẻ bảo hành."
                    : "X-ray integration check, digital high-definition scans, structural framework try-in, custom porcelain teeth setup, final screw-retained bridge delivery, warranty cards handover.",
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
              ? "Lưu ý đặt vé máy bay: Quý khách nên để dư ít nhất 2 ngày đệm sau ngày phẫu thuật ở Chuyến 1 và sau ngày lắp hàm ở Chuyến 2 trước khi bay về để bác sĩ kiểm tra vết thương, đảm bảo an toàn tối đa."
              : "Flight Booking Tip: We recommend booking your return flights with a 2-day buffer window after the surgery date (Trip 1) and delivery date (Trip 2). This allows final clinical calibrations and check-ups before your flight."}
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
              <span>{isVN ? "Hộ chiếu cấy ghép Implant (Implant Passport) ghi rõ tên hãng, số lô (lot number) của từng trụ cấy." : "Implant Passport specifying brands, models, and batch/lot numbers for all 4 fixtures."}</span>
            </li>
            <li className="flex gap-2 items-start">
              <Check className="w-4.5 h-4.5 text-teal-brand shrink-0 mt-0.5" />
              <span>{isVN ? "Phim chụp phim kiểm tra vị trí trụ implant sau phẫu thuật." : "Post-surgical X-ray film showing correct placement alignment."}</span>
            </li>
            <li className="flex gap-2 items-start">
              <Check className="w-4.5 h-4.5 text-teal-brand shrink-0 mt-0.5" />
              <span>{isVN ? "Sổ hướng dẫn chế độ chăm sóc răng và số liên hệ khẩn cấp của điều phối viên 24/7." : "Home-care guide booklet and 24/7 direct patient coordinator hotline."}</span>
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
              <span>{isVN ? "Thẻ bảo hành chính thức cho trụ implant và răng sứ vĩnh viễn." : "Official Warranty Certificate for both implants and prosthesis structure."}</span>
            </li>
            <li className="flex gap-2 items-start">
              <Check className="w-4.5 h-4.5 text-teal-brand shrink-0 mt-0.5" />
              <span>{isVN ? "Chứng nhận vật liệu sản xuất cầu răng chính thức từ phòng Labo." : "Lab certification for materials used in framework and porcelain teeth."}</span>
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
              <span>{isVN ? "Ăn thức ăn mềm, được cắt nhỏ trong 3-6 tháng đầu tiên để tránh gãy hàm tạm hoặc làm lung lay trụ implant." : "Eat soft, cut-up foods for the first 3-6 months. Avoid directly biting into hard food to prevent temporary bridge fractures."}</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="p-1 bg-teal-brand-light text-teal-brand rounded-md font-bold text-xs shrink-0">2</span>
              <span>{isVN ? "Ngưng hút thuốc lá hoàn toàn — khói thuốc làm co mạch máu, giảm dòng máu nuôi dưỡng và tăng nguy cơ đào thải trụ implant." : "Quit smoking completely – nicotine constricts blood vessels, slows healing, and is the leading cause of early implant failures."}</span>
            </li>
          </ul>
          <ul className="space-y-3.5">
            <li className="flex gap-3 items-start">
              <span className="p-1 bg-teal-brand-light text-teal-brand rounded-md font-bold text-xs shrink-0">3</span>
              <span>{isVN ? "Vệ sinh răng miệng nhẹ nhàng bằng bàn chải lông mềm và súc miệng bằng nước muối sinh lý ấm sau mỗi bữa ăn." : "Maintain strict hygiene with soft-bristled brushes, water flossers on low pressure, and warm saline rinses after meals."}</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="p-1 bg-teal-brand-light text-teal-brand rounded-md font-bold text-xs shrink-0">4</span>
              <span>{isVN ? "Nếu xảy ra bất kỳ bất thường nào (sưng đau tăng dần, hàm tạm lỏng lẻo...), liên hệ ngay điều phối viên của chúng tôi để được bác sĩ hội chẩn từ xa." : "In case of concerns (progressive pain, fever, or loose temporary bridge), contact your DentalNTK coordinator for a remote consultation."}</span>
            </li>
          </ul>
        </div>
      </section>

      {/* 9. Pricing */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-dark-brand text-center">
          {isVN ? "9. Chi phí cấy ghép All-on-4 trọn gói tại DentalNKT" : "9. Comprehensive All-on-4 Fee Schedule"}
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
                    ? "Trọn gói All-on-4 — 4 trụ Hiossen (Mỹ) + hàm tạm + cầu răng sứ phục hình chính thức" 
                    : "All-on-4 Package — 4 HIOSSEN (USA) implants + temporary + final ceramic bridge",
                  usd: "$5,210 USD",
                  aud: "$7,425 AUD"
                },
                {
                  item: isVN 
                    ? "Trọn gói All-on-4 — 4 trụ Nobel Biocare / Straumann + hàm tạm + cầu răng phục hình chính thức" 
                    : "All-on-4 Package — 4 Nobel Biocare / Straumann implants + temporary + final ceramic bridge",
                  usd: "$9,514 USD",
                  aud: "$13,556 AUD"
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
              {isVN ? "10. Ai thực hiện All-on-4 cho bạn?" : "10. Who Will Perform Your Surgery?"}
            </h2>
          </div>
          <div className="space-y-4 text-sm sm:text-base text-slate-800 leading-relaxed font-normal">
            <p>
              {isVN
                ? "All-on-4 là phẫu thuật phức tạp bậc nhất trong nha khoa, đòi hỏi bác sĩ thực hiện phải có tay nghề chuyên sâu và kinh nghiệm lâm sàng dày dặn. Tại DentalNKT, ca phẫu thuật All-on-4 của bạn được trực tiếp đảm nhiệm bởi Dr. Nguyễn Huy Hoàng — Giám đốc chuyên môn khoa Implant của phòng khám."
                : "All-on-4 is a highly complex surgical procedure requiring specialized qualifications. At DentalNKT, your full-arch surgery is directly performed by Dr. Nguyen Huy Hoang — our Clinical Director of Implantology."}
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
            <span className="text-xs text-slate-600 font-bold block uppercase tracking-wider">{isVN ? "Trụ Implant (4 trụ)" : "Implant Fixtures (4 posts)"}</span>
            <strong className="text-xl sm:text-2xl font-bold text-teal-brand block">10 {isVN ? "Năm" : "Years"}</strong>
            <p className="text-xs text-slate-700 font-normal leading-relaxed">
              {isVN ? "Bảo hành kết cấu cơ học, thay thế trụ mới miễn phí nếu có lỗi từ nhà sản xuất." : "Covers structural integrity. Lifetime or 10-year free replacement for post damage."}
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
          {isVN ? "12. Câu hỏi thường gặp về All-on-4" : "12. All-on-4 Frequently Asked Questions"}
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
