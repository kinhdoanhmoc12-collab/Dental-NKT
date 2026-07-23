"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "../../../context/LanguageContext";
import { 
  ArrowLeft, 
  Check, 
  AlertTriangle, 
  Info, 
  ChevronDown, 
  ChevronUp, 
  Sparkles,
  ArrowRight,
  Smartphone
} from "lucide-react";

export default function DenturesClient() {
  const { lang } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const isVN = lang === "VN";

  React.useEffect(() => {
    document.title = isVN 
      ? "Hàm giả tháo lắp & Hàm phủ Implant | DentalNKT"
      : "Removable Dentures & Overdentures | DentalNKT";

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", isVN 
        ? "Hàm giả tháo lắp và hàm phủ trên Implant tại DentalNKT. Giải pháp phục hình răng mất bán phần hoặc toàn phần tiết kiệm chi phí, không phẫu thuật."
        : "Removable dentures and implant-supported overdentures at DentalNKT. Cost-effective, non-invasive solutions to restore missing teeth."
      );
    }
  }, [isVN]);

  // FAQ Items
  const faqItems = [
    {
      q: isVN 
        ? "Hàm giả tháo lắp hay Implant, tôi nên chọn cái nào?" 
        : "Should I choose removable dentures or dental implants?",
      a: isVN 
        ? "Nếu bạn đủ điều kiện sức khỏe và tài chính, Implant luôn là ưu tiên vì độ ổn định cao và ngăn chặn tiêu xương hàm. Hàm giả tháo lắp phù hợp hơn khi bạn có chống chỉ định y khoa với cấy ghép xương/implant, muốn hạn chế phẫu thuật xâm lấn, hoặc cần tối ưu hóa ngân sách."
        : "If you meet the clinical and financial requirements, implants are highly recommended due to stability and bone preservation. Removable dentures are preferred if you have medical contraindications to surgery, wish to avoid invasive procedures, or want to optimize your budget."
    },
    {
      q: isVN 
        ? "Hàm giả tháo lắp có bị lỏng lẻo khi ăn nhai không?" 
        : "Do removable dentures slip or shift while eating?",
      a: isVN 
        ? "Hàm giả tháo lắp truyền thống tựa trên nướu có thể xê dịch nhẹ khi ăn nhai thức ăn dai hoặc cứng. Để giải quyết triệt để vấn đề này, bạn nên tham khảo phương án Hàm phủ trên Implant (Overdenture) sử dụng 2-4 trụ neo giữ giúp hàm cực kỳ ổn định mà chi phí vẫn rất tiết kiệm."
        : "Traditional tissue-supported dentures may shift slightly when chewing tough or hard foods. To eliminate this issue, consider an implant-supported overdenture (secured by 2-4 implants), which provides excellent stability at a fraction of the cost of a full-arch fixed bridge."
    },
    {
      q: isVN 
        ? "Tôi có thể làm hàm giả trong cùng chuyến đi nhổ răng không?" 
        : "Can I get my dentures fitted on the same day as extractions?",
      a: isVN 
        ? "Có, đây gọi là Hàm giả tức thì. Bác sĩ sẽ lấy dấu răng trước khi nhổ, chế tác hàm giả tại labo, và gắn ngay lập tức sau khi nhổ răng để bạn không phải trải qua giai đoạn trống răng. Lưu ý hàm tức thì cần đệm lót lại sau 3-6 tháng do xương nướu co rút tự nhiên."
        : "Yes, this is known as an Immediate Denture. We take impressions before extractions, custom-craft the denture, and fit it immediately after the teeth are removed so you never have to go without teeth. Note that immediate dentures require relining after 3-6 months as the bone and gums shrink during healing."
    },
    {
      q: isVN 
        ? "Hàm phủ trên Implant khác gì với All-on-4?" 
        : "How does an implant-supported overdenture differ from All-on-4?",
      a: isVN 
        ? "Hàm phủ trên Implant (Overdenture) là hàm tháo lắp tựa trên 2-4 trụ Implant, bạn có thể tự tháo ra để vệ sinh. All-on-4 là hàm phục hình răng sứ cố định bắt vít trên 4 trụ Implant trở lên, chỉ có bác sĩ mới tháo được và có độ ổn định tuyệt đối giống răng thật."
        : "An overdenture is a removable plate that snaps onto 2-4 implants, allowing you to take it out for cleaning. All-on-4 is a fully fixed, screw-retained prosthetic bridge on 4 or more implants that only a dentist can remove, providing maximum chewing power and feeling exactly like natural teeth."
    },
    {
      q: isVN 
        ? "Hàm giả cũ của tôi có thể mang qua DentalNKT để đệm lót lại không?" 
        : "Can I bring my existing dentures to DentalNKT for relining?",
      a: isVN 
        ? "Có. DentalNKT nhận đệm lót lại (Reline) hoặc sửa chữa các hàm giả cũ của bạn để khít sát hơn với tình trạng nướu hiện tại, giúp cải thiện cảm giác lỏng lẻo và đau nhức khi ăn nhai."
        : "Yes. DentalNKT can perform relining or repairs on your existing dentures to restore their snug fit against your current gum shape, reducing slipping and sore spots during function."
    }
  ];

  return (
    <div className="pt-6 pb-12 space-y-16 max-w-5xl mx-auto px-4 sm:px-6">
      
      {/* Top Header & Hero Container */}
      <div className="space-y-6">
        {/* Back Button */}
        <div>
          <Link 
            href="/services" 
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-[#0b1e2c] transition-colors"
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
              <span>{isVN ? "PHỤC HÌNH RĂNG THÁO LẮP" : "REMOVABLE DENTAL PROSTHETICS"}</span>
            </span>
            
            <h1 className="text-3xl sm:text-4xl font-serif font-extrabold text-white leading-tight">
              {isVN 
                ? "Hàm Giả Tháo Lắp — Giải Pháp Kinh Tế Khi Implant Chưa Phù Hợp" 
                : "Removable Dentures — Cost-Effective Teeth Replacement Options"}
            </h1>
            
            <p className="text-sm text-slate-300 font-light leading-relaxed">
              {isVN 
                ? "Hàm giả tháo lắp là phục hình thay thế răng đã mất có thể tháo lắp để vệ sinh tại nhà. DentalNKT nói thẳng ngay từ đầu: hàm giả thông thường không ngăn tiêu xương và không tốt bằng Implant. Tuy nhiên, với trường hợp chống chỉ định phẫu thuật cấy ghép xương, vượt ngân sách hoặc theo mong muốn cá nhân, hàm giả được làm đúng kỹ thuật vẫn mang lại thẩm mỹ và ăn nhai tốt với chi phí cực kỳ tiết kiệm."
                : "Removable dentures replace missing teeth with a custom removable plate. At DentalNKT, we believe in honesty: traditional dentures do not prevent bone loss and cannot match the stability of implants. However, for patients who cannot undergo implant surgeries due to medical or budget reasons, a well-engineered denture still restores functional chewing and smile aesthetics economically."}
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-slate-700/80 w-full">
              <div>
                <span className="text-xs text-slate-400 block font-medium">
                  {isVN ? "Chi phí điều trị trọn gói từ" : "Denture Packages Start at"}
                </span>
                <span className="text-2xl font-extrabold text-teal-brand">
                  {isVN ? "$105 USD / hàm" : "$150 AUD / arch"}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Link 
                  href="/contact" 
                  className="bg-teal-brand hover:bg-teal-700 text-white font-bold px-7 py-3.5 rounded-full text-xs sm:text-sm transition-all shadow-lg hover:scale-105 whitespace-nowrap text-center"
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

      {/* 1. Decision Table */}
      <section className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-serif font-extrabold text-[#0b1e2c] text-center">
          {isVN ? "1. Hàm giả tháo lắp hay Implant — Bảng quyết định" : "1. Removable Dentures vs. Implants Decision Matrix"}
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed text-center max-w-2xl mx-auto">
          {isVN 
            ? "Mục tiêu của DentalNKT là giúp bạn có thông tin trung thực để lựa chọn giải pháp phù hợp nhất với tình trạng lâm sàng và ngân sách cá nhân:"
            : "We provide clear clinical facts to help you weigh options based on your health profile and financial goals:"}
        </p>

        <div className="border border-slate-200 rounded-3xl overflow-hidden bg-white shadow-sm overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[750px]">
            <thead>
              <tr className="bg-[#0b1e2c] text-white font-serif text-xs uppercase tracking-wider">
                <th className="p-4 border-b border-slate-800 w-[20%]">{isVN ? "Tiêu chí so sánh" : "Comparison Criteria"}</th>
                <th className="p-4 border-b border-slate-800 w-[40%]">{isVN ? "Hàm giả tháo lắp thông thường" : "Conventional Removable Denture"}</th>
                <th className="p-4 border-b border-slate-800 w-[40%]">{isVN ? "Cấy ghép Implant / All-on-4" : "Dental Implants / All-on-4"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700 font-normal">
              {[
                {
                  criteria: isVN ? "Mức đầu tư ban đầu" : "Initial Cost",
                  denture: isVN ? "Thấp hơn nhiều, tiết kiệm ngân sách ngắn hạn" : "Very low, highly budget-friendly short-term",
                  implant: isVN ? "Cao hơn, nhưng bền vững trọn đời" : "Higher upfront investment, lifetime value"
                },
                {
                  criteria: isVN ? "Độ ổn định khi ăn nhai" : "Stability & Chewing Power",
                  denture: isVN ? "Có thể xê dịch nhẹ khi nhai đồ cứng/dai" : "May shift slightly with tough or hard foods",
                  implant: isVN ? "Cố định tuyệt đối như răng thật tự nhiên" : "Fully fixed, maximum chewing function restored"
                },
                {
                  criteria: isVN ? "Khả năng bảo tồn xương hàm" : "Bone Preservation",
                  denture: isVN ? "Không (xương hàm tiêu dần tự nhiên theo thời gian)" : "No (jawbone naturally resorbs over time)",
                  implant: isVN ? "Có (trụ implant kích thích duy trì mật độ xương)" : "Yes (implants stimulate and maintain bone density)"
                },
                {
                  criteria: isVN ? "Yêu cầu phẫu thuật" : "Surgical Requirement",
                  denture: isVN ? "Không phẫu thuật (trừ phi cần nhổ răng hỏng trước)" : "No surgery (unless extractions are needed first)",
                  implant: isVN ? "Có phẫu thuật đặt trụ dưới gây tê" : "Yes, minor surgical placement under local anesthesia"
                },
                {
                  criteria: isVN ? "Độ bền & Tuổi thọ" : "Lifespan",
                  denture: isVN ? "5 – 10 năm (cần đệm lót hoặc làm mới khi xương tiêu)" : "5 – 10 years (requires relining as bone shifts)",
                  implant: isVN ? "15 – 25+ năm hoặc trọn đời nếu chăm sóc tốt" : "15 – 25+ years to lifetime with proper maintenance"
                }
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-slate-800 bg-slate-50/50">{row.criteria}</td>
                  <td className="p-4">{row.denture}</td>
                  <td className="p-4 font-medium text-[#0b1e2c]">{row.implant}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 2. Overdenture Section */}
      <section className="bg-slate-50 border border-slate-100 p-6 sm:p-10 rounded-3xl space-y-6">
        <div className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-serif font-extrabold text-[#0b1e2c]">
            {isVN ? "2. Giải pháp trung gian: Hàm phủ trên Implant (Overdenture)" : "2. The Smart Middle-Ground: Implant-Supported Overdenture"}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
            {isVN 
              ? "Hàm phủ trên Implant là giải pháp lai kết hợp giữa hàm giả tháo lắp và cấy ghép Implant. Bác sĩ đặt từ 2 đến 4 trụ Implant làm điểm neo giữ vững chắc, sau đó lắp hàm giả tháo lắp có khớp cài (snap-on) lên trên. Bạn vẫn có thể tháo ra để vệ sinh dễ dàng, nhưng hàm sẽ đứng vững tuyệt đối khi nhai, hoàn toàn loại bỏ cảm giác lỏng lẻo khó chịu."
              : "An overdenture combines removable prosthetics with implant technology. By placing 2 to 4 implants as anchoring points, a customized denture snaps securely onto them. You can still easily remove it at night to brush, but it will never slip, click, or shift while chewing, solving the biggest drawback of traditional plates."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          {[
            {
              title: isVN ? "Hàm giả tháo lắp thông thường" : "Conventional Removable Denture",
              cost: isVN ? "Thấp nhất" : "Lowest Investment",
              desc: isVN ? "Tựa hoàn toàn lên nướu, có thể xê dịch nhẹ khi nhai đồ cứng." : "Rests entirely on gum tissue; may slide or shift under chewing pressure."
            },
            {
              title: isVN ? "Hàm phủ trên 2 Implant" : "Overdenture on 2 Implants",
              cost: isVN ? "Trung bình" : "Moderate Investment",
              desc: isVN ? "Cố định bằng 2 khóa cài, cải thiện 70% lực nhai, tháo lắp vệ sinh được." : "Secured by 2 locator attachments; restores 70% chewing force; removable."
            },
            {
              title: isVN ? "Hàm phủ trên 4 Implant" : "Overdenture on 4 Implants",
              cost: isVN ? "Trung bình - Cao" : "Moderate-High Investment",
              desc: isVN ? "Cố định bằng 4 khóa cài chắc chắn hơn, phân phối lực nhai tốt hơn." : "Secured by 4 locator units; maximum stabilization and better load distribution."
            }
          ].map((card, idx) => (
            <div key={idx} className="bg-white border border-slate-150 p-6 rounded-2xl space-y-3 shadow-sm flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-teal-brand/10 text-teal-brand uppercase tracking-wider inline-block">
                  {card.cost}
                </span>
                <h4 className="text-sm font-bold text-[#0b1e2c]">{card.title}</h4>
                <p className="text-xs text-slate-600 font-normal leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Materials & Immediate Dentures */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-4 bg-slate-50/50 border border-slate-100 p-6 sm:p-8 rounded-3xl">
          <h3 className="font-serif text-lg font-bold text-[#0b1e2c]">
            {isVN ? "Phân loại Vật liệu nền hàm" : "Prosthetic Material Options"}
          </h3>
          <ul className="space-y-4">
            <li className="flex gap-3 items-start">
              <Check className="w-5 h-5 text-teal-brand shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-slate-800">{isVN ? "Nhựa cứng (Acrylic) tiêu chuẩn" : "Standard Hard Acrylic"}</h4>
                <p className="text-xs text-slate-600 font-normal leading-relaxed">
                  {isVN 
                    ? "Vật liệu truyền thống bền bỉ, dễ dàng đệm lót lại khi xương hàm thay đổi, chịu tải ăn nhai ổn định." 
                    : "Traditional acrylic base. Rigid, durable, and very easy to adjust or reline as gums shrink over time."}
                </p>
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <Check className="w-5 h-5 text-teal-brand shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-slate-800">{isVN ? "Nhựa mềm dẻo (Valplast/Flexible)" : "Valplast Flexible Resin"}</h4>
                <p className="text-xs text-slate-600 font-normal leading-relaxed">
                  {isVN 
                    ? "Nhẹ hơn, ôm sát nướu tự nhiên. Với hàm bán phần không cần móc kim loại lộ ra ngoài gây mất thẩm mỹ." 
                    : "Metal-free partials. Snug, biocompatible fit, and high aesthetics without unsightly metal clasps."}
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="space-y-4 bg-slate-50/50 border border-slate-100 p-6 sm:p-8 rounded-3xl">
          <h3 className="font-serif text-lg font-bold text-[#0b1e2c]">
            {isVN ? "Hàm giả tức thì (Immediate Denture) — Có răng ngay" : "Immediate Denture — Teeth on the Same Day"}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
            {isVN
              ? "Nếu bạn cần nhổ răng cũ bị hỏng trước khi lắp hàm giả, DentalNKT có thể chế tác hàm giả trước dựa trên dấu hàm cũ của bạn. Vào ngày nhổ răng, hàm giả sẽ được gắn ngay lập tức lên vết nhổ. Bạn ra về với cung răng đầy đủ, không phải trải qua giai đoạn trống răng gây ngại ngùng."
              : "If you need teeth extracted before receiving your dentures, we can custom-build your prosthetic plate beforehand. On the day of your extractions, the immediate denture is fitted right over the sockets. You walk out with a complete smile and never have to go toothless in public."}
          </p>
          <div className="bg-amber-50 border border-amber-100 p-4 rounded-xl flex gap-2 items-start text-xs text-amber-900 font-medium">
            <AlertTriangle className="w-4.5 h-4.5 text-amber-600 shrink-0 mt-0.5" />
            <p>
              {isVN 
                ? "Lưu ý: Nướu và xương sẽ lành thương và co rút lại sau 3-6 tháng, làm hàm giả tức thì bị lỏng dần. Bạn cần quay lại phòng khám hoặc nhờ nha sĩ tại Úc thực hiện Đệm hàm (Reline) để hàm khít sát trở lại."
                : "Note: Gums and bone naturally shrink after extractions. The immediate denture will loosen over 3-6 months. You must undergo a standard Denture Relining to restore a tight, stable fit."}
            </p>
          </div>
        </div>
      </section>

      {/* 4. Treatment Timeline */}
      <section className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-serif font-extrabold text-[#0b1e2c] text-center">
          {isVN ? "3. Lịch trình điều trị tháo lắp tại Việt Nam" : "3. Dental Travel Stay & Treatment Timeline"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="border border-slate-200 rounded-3xl p-6 sm:p-8 bg-white shadow-sm space-y-4">
            <h3 className="text-sm font-bold text-[#0b1e2c] uppercase tracking-wider border-b border-slate-100 pb-2">
              {isVN ? "Hàm giả tiêu chuẩn (không nhổ răng)" : "Standard Removable Denture"}
            </h3>
            <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2.5">
                <span className="text-teal-brand font-bold shrink-0 whitespace-nowrap">Day 1:</span>
                <span>{isVN ? "Thăm khám tổng quát, lấy dấu hàm sơ bộ." : "Clinical exam, digital scans, and initial impressions."}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-teal-brand font-bold shrink-0 whitespace-nowrap">Day 2:</span>
                <span>{isVN ? "Lấy dấu hàm chi tiết bằng khay cá nhân, ghi dấu khớp cắn chuẩn xác." : "Detailed secondary impressions and bite registration."}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-teal-brand font-bold shrink-0 whitespace-nowrap">Day 3–5:</span>
                <span>{isVN ? "Thử khuôn hàm sáp chứa răng giả để tinh chỉnh thẩm mỹ trước khi ép nhựa." : "Wax-up trial fitting to verify tooth placement and aesthetics."}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-teal-brand font-bold shrink-0 whitespace-nowrap">Day 6–8:</span>
                <span>{isVN ? "Labo tiến hành ép nhựa hoàn thiện hàm giả tháo lắp." : "Lab fabrication: polymerizing and polishing your custom plate."}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-teal-brand font-bold shrink-0 whitespace-nowrap">Day 9–10:</span>
                <span>{isVN ? "Lắp hàm giả lên miệng bệnh nhân, điều chỉnh các điểm cộm vướng." : "Final denture delivery, bite balancing, and home-care orientation."}</span>
              </li>
            </ul>
          </div>

          <div className="border border-slate-200 rounded-3xl p-6 sm:p-8 bg-white shadow-sm space-y-4">
            <h3 className="text-sm font-bold text-[#0b1e2c] uppercase tracking-wider border-b border-slate-100 pb-2">
              {isVN ? "Hàm giả tức thì (Nhổ răng + lắp răng cùng ngày)" : "Immediate Denture (Extractions & Fitting)"}
            </h3>
            <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2.5">
                <span className="text-teal-brand font-bold shrink-0 whitespace-nowrap">Day 1-2:</span>
                <span>{isVN ? "Thăm khám lâm sàng và lấy dấu hàm khi răng cũ vẫn còn trên cung hàm." : "Comprehensive checkups and dental impressions before extractions."}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-teal-brand font-bold shrink-0 whitespace-nowrap">Day 3:</span>
                <span>{isVN ? "Nhổ bỏ các răng hỏng định trước, gắn ngay hàm giả tức thì lên vết nhổ." : "Controlled tooth extractions, followed by immediate denture insertion."}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-teal-brand font-bold shrink-0 whitespace-nowrap">Day 4-10:</span>
                <span>{isVN ? "Tái khám kiểm tra vết thương, mài chỉnh điểm cộm sưng nướu." : "Post-op follow-ups, minor denture adjustments, and gum health monitoring."}</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* 5. Risks & Care Instructions */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <h3 className="font-serif text-xl font-bold text-[#0b1e2c]">
            {isVN ? "Rủi ro & Những hạn chế cần biết trước" : "Clinical Risks & Denture Limitations"}
          </h3>
          <ul className="space-y-4">
            <li className="flex gap-3 items-start">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-slate-800">{isVN ? "Giai đoạn thích nghi khó khăn" : "Initial Adjustment Phase"}</h4>
                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                  {isVN 
                    ? "Cảm giác cộm miệng, tăng tiết nước bọt, và phát âm chưa chuẩn trong 1-2 tuần đầu là bình thường, sẽ cải thiện khi cơ miệng quen dần." 
                    : "Feeling a foreign object, temporary saliva increase, and slight speech changes are normal for 1-2 weeks as muscles adapt."}
                </p>
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-slate-800">{isVN ? "Hàm giả không ngăn tiêu xương" : "Does Not Prevent Bone Resorption"}</h4>
                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                  {isVN 
                    ? "Hàm giả chỉ tựa trên nướu, không kích thích xương hàm bên dưới như implant. Nướu và xương sẽ tiếp tục tiêu đi tự nhiên theo thời gian." 
                    : "Unlike implants, dentures do not stimulate the jawbone. Gums will continue to shrink over time, making relining necessary."}
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="space-y-6 bg-slate-50 border border-slate-100 p-6 sm:p-8 rounded-3xl">
          <h3 className="font-serif text-xl font-bold text-[#0b1e2c]">
            {isVN ? "Hướng dẫn chăm sóc hàm giả tháo lắp" : "How to Clean & Care for Your Denture"}
          </h3>
          <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700">
            <li className="flex items-start gap-2">
              <span className="text-teal-brand font-bold">•</span>
              <span>{isVN ? "Tháo ra vệ sinh sạch sẽ sau các bữa ăn lớn và chải kỹ 1 lần mỗi ngày bằng bàn chải mềm." : "Rinse your denture after meals and brush it once daily using a soft-bristle brush."}</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal-brand font-bold">•</span>
              <span>{isVN ? "Ngâm hàm trong dung dịch vệ sinh chuyên dụng hoặc nước sạch qua đêm, không để hàm khô hoàn toàn gây biến dạng nhựa." : "Soak it in clean water or denture solution overnight; letting it dry completely can warp the shape."}</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal-brand font-bold">•</span>
              <span>{isVN ? "Không dùng nước sôi hoặc nước quá nóng để ngâm/rửa hàm giả vì sẽ làm biến dạng nền hàm nhựa." : "Never use boiling or very hot water, as high temperatures will melt or warp the acrylic base."}</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal-brand font-bold">•</span>
              <span>{isVN ? "Nên tháo hàm khi ngủ để các mô nướu và niêm mạc miệng được nghỉ ngơi thoải mái." : "Remove your denture while sleeping to let gum tissues rest and prevent infections."}</span>
            </li>
          </ul>
        </div>
      </section>

      {/* 6. Pricing Section */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#0b1e2c] text-center">
          {isVN ? "4. Chi phí dịch vụ Hàm giả tháo lắp tại DentalNKT" : "4. Custom Removable Dentures Price Guide"}
        </h2>
        <div className="border border-slate-200 rounded-3xl overflow-hidden bg-white shadow-sm overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-[#0b1e2c] text-white font-serif text-xs uppercase tracking-wider">
                <th className="p-4 border-b border-slate-800">{isVN ? "Loại hàm giả phục hình tháo lắp" : "Removable Denture & Framework Options"}</th>
                <th className="p-4 border-b border-slate-800 text-right">{isVN ? "Đơn giá (USD)" : "Price (USD)"}</th>
                <th className="p-4 border-b border-slate-800 text-right">{isVN ? "Đơn giá (AUD)" : "Price (AUD)"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-800 font-medium">
              {[
                {
                  name: isVN ? "Hàm toàn phần — nhựa cứng (Acrylic)" : "Standard Hard Acrylic Full Denture",
                  usd: "$151 USD",
                  aud: "$215 AUD"
                },
                {
                  name: isVN ? "Hàm toàn phần — nhựa mềm dẻo (Valplast/Flexible)" : "Flexible Valplast Full Denture",
                  usd: "$242 USD",
                  aud: "$345 AUD"
                },
                {
                  name: isVN ? "Hàm bán phần — nhựa cứng có móc kim loại" : "Standard Hard Acrylic Partial Denture (with Clasps)",
                  usd: "$105 USD",
                  aud: "$150 AUD"
                },
                {
                  name: isVN ? "Hàm bán phần — nhựa mềm dẻo" : "Flexible Valplast Partial Denture",
                  usd: "$151 USD",
                  aud: "$215 AUD"
                },
                {
                  name: isVN ? "Hàm giả tức thì (Immediate Denture)" : "Immediate Denture (Same-Day Fitting)",
                  usd: "$151 USD",
                  aud: "$215 AUD"
                },
                {
                  name: isVN ? "Hàm phủ trên 2 Implant (Trọn gói trụ + thanh Titan + hàm cứng)" : "Overdenture on 2 Implants (Combo Package)",
                  usd: "$2,891 USD",
                  aud: "$4,115 AUD"
                },
                {
                  name: isVN ? "Hàm phủ trên 4 Implant (Trọn gói trụ + thanh Titan + hàm cứng)" : "Overdenture on 4 Implants (Combo Package)",
                  usd: "$4,261 USD",
                  aud: "$6,065 AUD"
                }
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-slate-800 bg-slate-50/50">{row.name}</td>
                  <td className="p-4 text-right font-semibold text-slate-800 whitespace-nowrap">{row.usd}</td>
                  <td className="p-4 text-right font-extrabold text-teal-brand whitespace-nowrap">{row.aud}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-slate-50 p-5 rounded-2xl flex gap-2.5 items-start">
          <Info className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" />
          <div className="text-xs text-slate-600 font-semibold leading-relaxed space-y-1">
            <p>{isVN ? "* Chi phí bao gồm: Khám lâm sàng, lấy dấu răng cá nhân, thử hàm sáp sườn hàm, chế tác labo, và 1 lần chỉnh sửa điểm cộm sau khi gắn." : "* Inclusions: Clinical assessments, personal tray impressions, wax model setups, lab fabrications, and first postoperative adjustment visit."}</p>
            <p>{isVN ? "* Chi phí chưa bao gồm: Nhổ bỏ các răng cũ lung lay hỏng (tính phí riêng), đệm lót lại hàm sau này, vé máy bay và chi phí lưu trú." : "* Exclusions: Extractions of failed/brittle teeth, future denture relining, flight tickets, and hotel accommodation."}</p>
          </div>
        </div>
      </section>

      {/* 8. Payment methods & Warranty info */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-slate-50/50 border border-slate-100 p-6 sm:p-8 rounded-3xl space-y-4">
          <h3 className="font-serif text-lg font-bold text-[#0b1e2c] border-b border-slate-200 pb-2">
            {isVN ? "Chính sách Bảo hành" : "Prosthetic Warranty Policy"}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
            {isVN
              ? "Bảo hành 1 năm đối với lỗi kỹ thuật chế tác từ labo hoặc lỗi vật liệu ban đầu của hàm giả tháo lắp. Đối với hàm phủ trên Implant, phần trụ Implant được bảo hành 10 năm theo hãng và phần hàm giả tháo lắp trên trụ được bảo hành 5 năm. Lưu ý việc đệm lót lại hàm do xương nướu thay đổi tự nhiên sau nhổ răng không nằm trong phạm vi bảo hành miễn phí."
              : "Standard removable dentures are covered by a 1-year warranty against structural defects. For implant-supported overdentures, the titanium fixtures are covered by a 10-year manufacturer warranty, and the acrylic overdenture plate is covered for 5 years. Routine relinings due to natural bone resorption are excluded."}
          </p>
        </div>
        <div className="bg-slate-50/50 border border-slate-100 p-6 sm:p-8 rounded-3xl space-y-4">
          <h3 className="font-serif text-lg font-bold text-[#0b1e2c] border-b border-slate-200 pb-2">
            {isVN ? "Phương thức Thanh toán" : "Payment Options"}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
            {isVN
              ? "Chúng tôi chấp nhận linh hoạt thanh toán bằng USD hoặc AUD thông qua hình thức tiền mặt, chuyển khoản ngân hàng hoặc thẻ tín dụng quốc tế. Khách hàng có thể đặt cọc một phần khi lấy dấu hàm và thanh toán phần còn lại khi lắp hàm hoàn thiện."
              : "We accept payments in USD or AUD via Cash, Bank Transfer, or international credit card. Flexibly structured plans are available: you pay a setup deposit during scans/impressions, and settle the remaining balance upon final delivery."}
          </p>
        </div>
      </section>

      {/* 9. FAQ Section */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#0b1e2c] text-center">
          {isVN ? "5. Câu hỏi thường gặp về Hàm giả tháo lắp" : "5. Frequently Asked Questions"}
        </h2>
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqItems.map((item, idx) => (
            <div 
              key={idx} 
              className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all"
            >
              <button
                id={`faq-btn-${idx}`}
                onClick={() => toggleFaq(idx)}
                className="w-full flex items-center justify-between p-5 text-left font-serif font-bold text-slate-800 hover:text-teal-brand transition-colors focus:outline-none"
                aria-expanded={openFaq === idx}
                aria-controls={`faq-panel-${idx}`}
              >
                <span className="text-sm sm:text-base">{item.q}</span>
                {openFaq === idx ? (
                  <ChevronUp className="w-5 h-5 text-teal-brand shrink-0 ml-4" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 shrink-0 ml-4" />
                )}
              </button>
              
              <div
                id={`faq-panel-${idx}`}
                role="region"
                aria-labelledby={`faq-btn-${idx}`}
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openFaq === idx ? "max-h-[300px] border-t border-slate-100" : "max-h-0"
                }`}
              >
                <div className="p-5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal bg-slate-50/50">
                  {item.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10. Call to Action */}
      <section className="bg-gradient-to-br from-[#0b1e2c] via-[#0f2a3f] to-[#0b1e2c] text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden text-center">
        <div className="absolute top-0 left-0 w-80 h-80 bg-teal-brand/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-white">
            {isVN ? "Bắt đầu Phục hình Nụ cười của bạn" : "Initiate Your Smile Rehabilitation"}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
            {isVN 
              ? "Bạn muốn biết tình trạng răng của mình phù hợp với Hàm giả tháo lắp, Hàm phủ Implant hay cấy ghép Implant toàn hàm? Gửi ảnh chụp hoặc phim X-quang để bác sĩ DentalNKT đánh giá lâm sàng sơ bộ và gửi báo giá chi tiết miễn phí trong 24–48 giờ."
              : "Want to know if standard dentures, overdentures, or full-arch implants are right for you? Send close-up photos or X-rays for a free clinical assessment and detailed quotation within 24-48 hours."}
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link 
              href="/contact" 
              className="bg-teal-brand hover:bg-teal-brand-hover text-[#0b1e2c] font-bold px-8 py-3.5 rounded-full text-xs sm:text-sm transition-all shadow-lg hover:scale-105 inline-flex items-center gap-1.5"
            >
              <span>{isVN ? "Đặt Lịch Tư Vấn Miễn Phí" : "Get Free Consultation"}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a 
              href="https://wa.me/84963333844" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-7 py-3.5 rounded-full text-xs sm:text-sm transition-all inline-flex items-center gap-2 whitespace-nowrap"
            >
              <Smartphone className="w-4 h-4 text-teal-brand" />
              <span>WhatsApp (+84 963 333 844)</span>
            </a>
            <Link 
              href="/services/implants" 
              className="text-slate-300 hover:text-white px-4 py-3.5 text-xs sm:text-sm transition-all flex items-center gap-1.5 font-medium"
            >
              {isVN ? "Xem trang cấy ghép Implant" : "View Implant Service Page"}
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqItems.map((item) => ({
              "@type": "Question",
              "name": item.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.a
              }
            }))
          })
        }}
      />

    </div>
  );
}
