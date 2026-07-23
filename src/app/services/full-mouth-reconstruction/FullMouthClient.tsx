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

export default function FullMouthClient() {
  const { lang, t } = useLanguage();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const isVN = lang === "VN";

  React.useEffect(() => {
    document.title = isVN 
      ? "Phục hồi toàn hàm (Full Mouth Reconstruction) | DentalNKT"
      : "Full Mouth Reconstruction & Rehabilitation | DentalNKT";
  }, [isVN]);

  // FAQ Items
  const faqItems = [
    {
      q: isVN 
        ? "Phục hồi toàn hàm khác gì All-on-4/All-on-6?" 
        : "How is a Full Mouth Reconstruction different from All-on-4/6?",
      a: isVN 
        ? "All-on-4/6 là giải pháp phục hình cụ thể cho trường hợp bệnh nhân mất hoàn toàn răng trên một hoặc cả hai hàm bằng cách cấy 4 hoặc 6 trụ implant để nâng đỡ dải răng giả. Phục hồi toàn hàm là khái niệm rộng hơn, kết hợp linh hoạt nhiều kỹ thuật (implant từng phần, bọc mão sứ, dán veneer răng cửa, chữa tủy, nâng khớp cắn) và không nhất thiết phải nhổ bỏ toàn bộ răng cũ."
        : "All-on-4/6 is a specific implant technique designed for completely edentulous arches where all teeth are missing. A Full Mouth Reconstruction is a broader clinical concept: it integrates multiple therapies (partial implants, crowns, veneers, root canals, bite elevation) tailored to patients who still have salvageable teeth and require comprehensive bite correction."
    },
    {
      q: isVN 
        ? "Cần bao nhiêu chuyến đi đến Việt Nam để hoàn tất?" 
        : "How many trips to Vietnam are required?",
      a: isVN 
        ? "Thông thường quy trình đòi hỏi 2 chuyến đi độc lập. Chuyến 1 (14–21 ngày) tập trung phẫu thuật cấy ghép implant, nhổ răng sâu hỏng, ghép xương và lắp phục hình tạm. Chuyến 2 (7–10 ngày, cách chuyến 1 từ 3–6 tháng) dùng để lắp răng sứ vĩnh viễn sau khi xương hàm đã tích hợp ổn định với trụ implant."
        : "Generally, two separate trips are required. Trip 1 (14-21 days) covers extractions, bone grafts, implant placements, and temporary prosthesis. Trip 2 (7-10 days, scheduled 3-6 months later) is for testing, calibration, and fitting of the final permanent crowns, veneers, and bridges after osseointegration."
    },
    {
      q: isVN 
        ? "Điều trị toàn hàm phức tạp ở nước ngoài như vậy có an toàn không?" 
        : "Is it safe to undergo such a complex reconstruction overseas?",
      a: isVN 
        ? "Hoàn toàn an toàn nếu được thực hiện theo đúng quy trình khoa học. Tại DentalNKT, mọi ca phục hồi toàn hàm đều bắt đầu bằng chụp phim CT Cone Beam cắt lớp 3D để khảo sát xương hàm, lập kế hoạch bằng văn bản gửi khách hàng duyệt trước khi đặt vé, và được điều trị trực tiếp bởi bác sĩ chuyên khoa dẫn đầu có chứng chỉ hành nghề CCHN rõ ràng."
        : "Yes, provided the clinic adheres to strict diagnostic and clinical standards. At DentalNKT, every reconstruction begins with 3D CBCT scans to evaluate bone volume. We send a comprehensive written treatment proposal for your approval before you book flights, and all procedures are performed by certified specialists."
    },
    {
      q: isVN 
        ? "Nếu tôi gặp sự cố với phục hình tạm giữa 2 chuyến đi thì sao?" 
        : "What happens if I experience issues with my temporary teeth between trips?",
      a: isVN 
        ? "Phục hình tạm được thiết kế bền vững cho thời gian chờ 3-6 tháng. Nếu răng tạm bị lỏng hoặc cấn nhẹ sau khi bạn đã về Úc, chúng tôi sẽ hướng dẫn bạn chụp ảnh gửi điều phối viên và có thể phối hợp chỉ dẫn từ xa để một nha sĩ địa phương tại Úc mài chỉnh nhẹ cho bạn với chi phí tối thiểu."
        : "Temporary restorations are engineered to last 3-6 months. If a temporary crown loosens or feels slightly high after your return to Australia, our international coordinator will guide you on how to capture photos and coordinate remote instructions for a local Australian dentist to calibrate it."
    },
    {
      q: isVN 
        ? "Tôi nên bắt đầu quy trình từ bước nào?" 
        : "How do I begin the reconstruction process?",
      a: isVN 
        ? "Bước đầu tiên là gửi phim chụp Panorama (OPG) hoặc tệp phim chụp cắt lớp CT Cone Beam gần nhất của bạn qua WhatsApp/Email cho chúng tôi. Đội ngũ bác sĩ của DentalNKT sẽ tiến hành hội chẩn miễn phí, phác thảo các phương án điều trị theo giai đoạn kèm báo giá chi tiết từng mục trong vòng 24-48 giờ."
        : "The first step is sending your latest panoramic X-ray (OPG) or 3D CBCT scan files to us via WhatsApp or Email. Our clinical board will perform a complimentary evaluation and deliver a phased treatment plan alongside an itemized cost estimate within 24 to 48 hours."
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
              <span>{isVN ? "TÁI THIẾT LẬP TOÀN DIỆN KHỚP CẮN & RĂNG" : "COMPLETE ORAL REHABILITATION & RECONSTRUCTION"}</span>
            </span>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-white leading-tight">
              {isVN 
                ? "Phục Hồi Toàn Hàm (Full Mouth Reconstruction) — Khi Cần Tái Thiết Lập Cả Hàm Răng" 
                : "Full Mouth Reconstruction — Complete Dental Rehabilitation"}
            </h1>
            
            <p className="text-sm sm:text-base text-slate-200 font-normal leading-relaxed">
              {isVN 
                ? "Kế hoạch điều trị đa giai đoạn kết hợp phẫu thuật đặt trụ Implant, bọc mão răng sứ, nâng khớp cắn sinh học nhằm phục hồi ăn nhai bền vững cho những ca răng miệng phức tạp hoặc sập khớp cắn lâu năm."
                : "A multi-stage clinical plan combining implant placements, crowns, and neuromuscular bite rehabilitation to restore complete chewing functions for complex dental breakdowns or collapsed occlusion."}
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-slate-700/80 w-full">
              <div>
                <span className="text-xs text-slate-300 block font-medium">
                  {isVN ? "Phác đồ phục hồi toàn hàm:" : "Full Mouth Reconstruction Plan:"}
                </span>
                <span className="text-xl sm:text-2xl font-extrabold text-teal-brand">
                  {isVN ? "Thiết lập phác đồ cá nhân hóa" : "Personalized phased proposal"}
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

      {/* 1. What is a Full Mouth Reconstruction */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-7 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-dark-brand">
            {isVN ? "1. Phục hồi toàn hàm là gì?" : "1. What is a Full Mouth Reconstruction?"}
          </h2>
          <div className="space-y-4 text-sm sm:text-base text-slate-800 leading-relaxed font-normal">
            <p>
              {isVN
                ? "Phục hồi toàn hàm không phải là một kỹ thuật nha khoa đơn lẻ, mà là một kế hoạch điều trị đa giai đoạn, phối hợp nhiều chuyên khoa sâu dành cho những trường hợp răng miệng phức tạp hoặc bị tàn phá nặng nề. Không chỉ xử lý 1-2 răng rời rạc, giải pháp này can thiệp đồng thời lên toàn bộ cung răng của cả hai hàm để tái lập khớp cắn lành mạnh, khôi phục khả năng ăn nhai vững ổn và cải thiện thẩm mỹ khuôn mặt."
                : "A Full Mouth Reconstruction is not a single dental procedure. It is a comprehensive, multi-phase clinical framework that coordinates root canal therapies, periodontics, surgical implant placements, and crown restorations. Instead of treating isolated teeth, this approach rehabilitates both arches simultaneously to restore neuromuscular bite function, speech dynamics, and facial aesthetic balance."}
            </p>
            <p>
              {isVN
                ? "Một kế hoạch phục hồi toàn hàm chuẩn y khoa có thể kết hợp: đặt trụ Implant cho các vùng răng đã mất, bọc mão sứ bảo vệ cho răng sâu vỡ nặng, dán sứ Veneer cho răng cửa, ghép xương nâng xoang do tiêu xương lâu năm, và quan trọng nhất là tái lập khớp cắn (Bite rehabilitation) nếu chiều cao khớp cắn bị sập xệ."
                : "A standard clinical plan may integrate: dental implants for missing sites, porcelain crowns to reinforce damaged structures, veneers for anterior aesthetics, bone grafting/sinus lifts due to long-term bone resorption, and most importantly, bite rehabilitation to elevate vertical dimensions if the bite has collapsed."}
            </p>
          </div>
        </div>

        <div className="md:col-span-5 bg-teal-brand-light/30 border border-teal-brand-light p-8 rounded-3xl space-y-4">
          <h3 className="text-base font-bold text-dark-brand">
            {isVN ? "Đặc trưng của Phục hồi toàn hàm" : "Key Features of Reconstruction"}
          </h3>
          <ul className="space-y-3.5">
            {[
              isVN ? "Phối hợp đồng thời nhiều kỹ thuật chuyên khoa sâu" : "Coordinates implantology, prosthodontics, and endodontics",
              isVN ? "Tập trung tái thiết lập khớp cắn sinh học vững chắc" : "Focuses on rebuilding stable neuromuscular occlusion",
              isVN ? "Bảo tồn tối đa các răng thật còn khả năng giữ lại" : "Preserves and strengthens remaining healthy natural teeth",
              isVN ? "Quy trình chia giai đoạn khoa học để đảm bảo an toàn" : "Executed in logical, biological healing phases",
              isVN ? "Yêu cầu 2 chuyến đi đến Việt Nam (cách nhau 3-6 tháng)" : "Requires two trips to Hanoi spaced 3 to 6 months apart"
            ].map((benefit, idx) => (
              <li key={idx} className="flex gap-2 items-start text-xs sm:text-sm text-slate-800">
                <Check className="w-4.5 h-4.5 text-teal-brand shrink-0 mt-0.5" />
                <span className="font-semibold">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 2. Components in a Full Mouth Plan */}
      <section className="bg-slate-50 border border-slate-100 rounded-3xl p-8 sm:p-10 space-y-6">
        <h2 className="text-xl sm:text-2xl font-serif font-extrabold text-dark-brand text-center">
          {isVN ? "2. Các thành phần có thể có trong kế hoạch Phục hồi toàn hàm" : "2. Potential Components in a Full Mouth Plan"}
        </h2>
        <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed text-center max-w-2xl mx-auto">
          {isVN 
            ? "Không phải mọi bệnh nhân đều cần tất cả các dịch vụ dưới đây. Bác sĩ DentalNKT sẽ thiết lập phác đồ dựa trên phim X-quang 3D thực tế của bạn, cam kết chỉ chỉ định những hạng mục thực sự cần thiết."
            : "Not all procedures listed below are required for every patient. We construct your plan based on your 3D CBCT scan, itemizing only the elements essential to restore your oral health."}
        </p>
        <div className="border border-slate-200 rounded-3xl overflow-hidden bg-white shadow-sm overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-[#0b1e2c] text-white font-serif text-xs uppercase tracking-wider">
                <th className="p-4 border-b border-slate-800">{isVN ? "Thành phần kỹ thuật" : "Procedure Module"}</th>
                <th className="p-4 border-b border-slate-800">{isVN ? "Khi nào cần áp dụng" : "Clinical Application"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {[
                {
                  item: isVN ? "Cấy ghép Implant (Đơn lẻ / Toàn hàm)" : "Dental Implants (Single or Arch)",
                  desc: isVN ? "Khôi phục chân răng vĩnh viễn cố định tại các vị trí mất răng." : "Restores stable root anchors at missing tooth sites."
                },
                {
                  item: isVN ? "Ghép xương tự thân / xương nhân tạo" : "Bone Grafting Procedures",
                  desc: isVN ? "Bổ sung thể tích xương hàm bị tiêu biến để giữ trụ implant vững chắc." : "Rebuilds jawbone volume to ensure structural implant stability."
                },
                {
                  item: isVN ? "Nâng xoang hàm (Sinus Lift)" : "Sinus Lift Surgery",
                  desc: isVN ? "Nâng màng xoang hàm trên tại vùng răng hàm trước khi cấy implant." : "Elevates the sinus floor to gain bone depth for upper molar implants."
                },
                {
                  item: isVN ? "Nhổ răng sâu hỏng nặng" : "Surgical Extractions",
                  desc: isVN ? "Loại bỏ các chân răng đã lung lay nặng, viêm nhiễm không thể giữ lại." : "Removes non-restorable, infected roots prior to implant placement."
                },
                {
                  item: isVN ? "Mão răng sứ (Crown)" : "Porcelain Crowns (Zirconia/Emax)",
                  desc: isVN ? "Bọc bảo vệ các răng bị sứt mẻ lớn, mòn men răng nặng hoặc đã lấy tủy." : "Protects heavily decayed, severely worn, or root-canal treated teeth."
                },
                {
                  item: isVN ? "Mặt dán sứ Veneer Emax" : "Aesthetic Veneers",
                  desc: isVN ? "Cải thiện thẩm mỹ nụ cười vùng răng cửa nếu răng thật còn đủ mô nâng đỡ." : "Enhances smile aesthetics for anterior teeth with sufficient enamel."
                },
                {
                  item: isVN ? "Điều trị nội nha (Tủy răng)" : "Root Canal Therapies",
                  desc: isVN ? "Chữa tủy triệt để các răng sâu viêm tủy trước khi bọc mão sứ." : "Clears infection from pulpal chambers before crown cementation."
                },
                {
                  item: isVN ? "Tái lập khớp cắn (Bite Rehabilitation)" : "Bite & Occlusal Rehabilitation",
                  desc: isVN ? "Cân chỉnh, nâng cao chiều cao khớp cắn tự nhiên bị sụp đổ do mất răng lâu năm." : "Elevates vertical dimensions to correct collapsed jaws from tooth loss."
                },
                {
                  item: isVN ? "Chỉnh hình lợi bằng Laser" : "Laser Gum Contouring",
                  desc: isVN ? "Cắt viền nướu đều đặn giữa các răng để tạo đường cười cân đối." : "Evens out gum lines across the arch to restore smile symmetry."
                },
                {
                  item: isVN ? "Phục hình tạm thời (Răng tạm)" : "Provisional Restorations (Temporaries)",
                  desc: isVN ? "Lắp cầu tạm hoặc hàm tạm để ăn nhai trong suốt 3-6 tháng chờ xương tích hợp." : "Provides temporary bridges or dentures during the 3-6 months healing phase."
                }
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-slate-800 bg-slate-50/50">{row.item}</td>
                  <td className="p-4 leading-relaxed font-normal">{row.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 3. Why phase it - No shortcuts */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-7 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-dark-brand">
            {isVN ? "3. Vì sao cần chia giai đoạn — Không thể 'làm gộp' trong 1 lần?" : "3. Why Phasing is Mandatory: No Clinical Shortcuts"}
          </h2>
          <div className="space-y-4 text-sm sm:text-base text-slate-800 leading-relaxed font-normal">
            <p>
              {isVN
                ? "Cố gắng nén toàn bộ quá trình phục hồi phức tạp vào một chuyến đi ngắn ngày là một sai lầm lâm sàng nghiêm trọng. Răng tạm chỉ được thiết kế để chịu lực ăn nhai tối thiểu. Nếu gắn phục hình sứ vĩnh viễn lên implant trước khi xương hàm tích hợp hoàn toàn (thời gian tích hợp sinh học là 3-6 tháng), lực nhai đè nặng sẽ làm rung lắc trụ implant, dẫn đến đào thải trụ và hỏng toàn bộ ca phẫu thuật."
                : "Attempting to compress a complete mouth reconstruction into a single short trip introduces severe clinical risks. Temporary restorations are only designed to bear minimal masticatory loads. Bonding heavy permanent ceramic bridges onto implant posts before complete osseointegration (which biologically requires 3 to 6 months of undisturbed healing) will transmit micro-movements, causing implant failure."}
            </p>
            <p>
              {isVN
                ? "DentalNKT áp dụng quy trình chuẩn mực gồm 5 giai đoạn: (1) Khảo sát khớp cắn và lập hồ sơ 3D; (2) Phẫu thuật nhổ răng, ghép xương và đặt trụ implant; (3) Lắp phục hình tạm chờ tích hợp xương; (4) Chế tác và lắp phục hình vĩnh viễn ở chuyến đi 2; (5) Tái khám định kỳ bảo trì khớp nhai."
                : "DentalNKT adheres to a strict 5-stage protocol: (1) Occlusal evaluation and 3D planning; (2) Surgical extractions, bone grafting, and implant placement; (3) Provisional placement during healing; (4) Permanent prosthetic fabrication and fitting in Trip 2; (5) Regular annual follow-up maintenance."}
            </p>
          </div>
        </div>

        <div className="md:col-span-5 bg-teal-brand-light/30 border border-teal-brand-light p-8 rounded-3xl space-y-4">
          <h3 className="text-base font-bold text-dark-brand">
            {isVN ? "Năm giai đoạn Phục hồi toàn hàm" : "The 5 Clinical Stages"}
          </h3>
          <ol className="space-y-3.5">
            {[
              isVN ? "Giai đoạn 1: Đánh giá toàn diện & Chụp CBCT 3D" : "Stage 1: Complete 3D CBCT Diagnosis & Modeling",
              isVN ? "Giai đoạn 2: Phẫu thuật đặt Implant & Ghép xương" : "Stage 2: Surgical Extractions, Grafting & Implants",
              isVN ? "Giai đoạn 3: Phục hình tạm thời ăn nhai chờ xương lành" : "Stage 3: Temporary Prosthesis & Bone Osseointegration",
              isVN ? "Giai đoạn 4: Lắp răng sứ vĩnh viễn CAD/CAM ở chuyến đi 2" : "Stage 4: Permanent Porcelain Placement (Trip 2)",
              isVN ? "Giai đoạn 5: Tái khám định kỳ bảo trì khớp nhai tại Úc" : "Stage 5: Annual Bite & Hygiene Checkups in Australia"
            ].map((stage, idx) => (
              <li key={idx} className="flex gap-2.5 items-start text-xs sm:text-sm text-slate-800">
                <span className="w-5.5 h-5.5 flex items-center justify-center bg-teal-brand text-white rounded-full text-xs font-bold shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span className="font-semibold">{stage}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 4. 2-Trip Sample Itinerary */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-dark-brand text-center">
          {isVN ? "4. Lịch trình 2 chuyến đi cho ca Phục hồi toàn hàm" : "4. Two-Trip Reconstruction Itinerary"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Trip 1 */}
          <div className="border border-slate-200 rounded-3xl p-6 sm:p-8 bg-white shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-teal-brand font-bold border-b border-slate-100 pb-3">
              <Plane className="w-5 h-5 shrink-0" />
              <h3 className="font-serif text-lg text-dark-brand">{isVN ? "Chuyến đi 1 (Lưu trú 14–21 ngày)" : "Trip 1 (14–21 Days Stay)"}</h3>
            </div>
            <div className="space-y-3.5">
              {[
                { day: isVN ? "Ngày 1–2" : "Days 1–2", desc: isVN ? "Chụp phim CBCT chẩn đoán khớp cắn, chốt kế hoạch bằng văn bản." : "CBCT diagnostic scans, jaw modeling, and approval of itemized plan." },
                { day: isVN ? "Ngày 3–5" : "Days 3–5", desc: isVN ? "Tiến hành nhổ răng sâu hỏng nặng và thực hiện ghép xương ổ răng (nếu cần)." : "Extractions of non-restorable teeth and alveolar bone grafting (if indicated)." },
                { day: isVN ? "Ngày 5–7" : "Days 5–7", desc: isVN ? "Phẫu thuật cấy ghép các trụ Implant vào xương hàm (phẫu thuật cắm trụ)." : "Surgical placement of the titanium implant posts into the jawbone." },
                { day: isVN ? "Ngày 8–14" : "Days 8–14", desc: isVN ? "Cắt chỉ phẫu thuật, kiểm tra vết thương, chế tác và lắp phục hình tạm ăn nhai." : "Suture removal, checkup, and fabrication/fitting of temporary bridge." },
                { day: isVN ? "Ngày cuối" : "Final Days", desc: isVN ? "Sửa soạn mài cùi răng cho các răng thật cần bọc mão sứ, lấy dấu và lắp răng tạm." : "Preparation of teeth requiring crowns, impression scan, and temporaries fitting." }
              ].map((row, idx) => (
                <div key={idx} className="flex gap-3 text-xs sm:text-sm font-normal">
                  <span className="font-bold text-[#0b1e2c] shrink-0 whitespace-nowrap">{row.day}:</span>
                  <span className="text-slate-700">{row.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Trip 2 */}
          <div className="border border-slate-200 rounded-3xl p-6 sm:p-8 bg-white shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-teal-brand font-bold border-b border-slate-100 pb-3">
              <Plane className="w-5 h-5 shrink-0" />
              <h3 className="font-serif text-lg text-dark-brand">{isVN ? "Chuyến đi 2 (Lưu trú 7–10 ngày, cách chuyến 1 khoảng 3–6 tháng)" : "Trip 2 (7–10 Days Stay, 3–6 Months Later)"}</h3>
            </div>
            <ul className="space-y-4 text-xs sm:text-sm text-slate-700 font-normal">
              <li className="flex gap-2.5 items-start">
                <Check className="w-4.5 h-4.5 text-teal-brand shrink-0 mt-0.5" />
                <span>{isVN ? "Chụp phim CBCT kiểm tra mật độ tích hợp xương quanh trụ implant thành công." : "Follow-up 3D CBCT scan to verify complete osseointegration around implants."}</span>
              </li>
              <li className="flex gap-2.5 items-start">
                <Check className="w-4.5 h-4.5 text-teal-brand shrink-0 mt-0.5" />
                <span>{isVN ? "Tiến hành lấy dấu và chế tác, lắp mão sứ, cầu răng và dán Veneer vĩnh viễn." : "Intraoral scanning and custom fabrication of final crowns, bridges, and veneers."}</span>
              </li>
              <li className="flex gap-2.5 items-start">
                <Check className="w-4.5 h-4.5 text-teal-brand shrink-0 mt-0.5" />
                <span>{isVN ? "Tinh chỉnh khớp cắn tuyệt đối, cân đối tương quan nhai hai hàm ổn định." : "Bite calibration check to ensure balanced forces across both arches."}</span>
              </li>
              <li className="flex gap-2.5 items-start">
                <Check className="w-4.5 h-4.5 text-teal-brand shrink-0 mt-0.5" />
                <span>{isVN ? "Chụp ảnh lưu hồ sơ thẩm mỹ, bàn giao thẻ bảo hành chính hãng và thông tin Implant Passport." : "Final aesthetics portfolio photos, warranty package, and Implant Passport handover."}</span>
              </li>
            </ul>
          </div>

        </div>
        <div className="bg-amber-50/20 border border-amber-200 rounded-2xl p-6 flex gap-3 items-start">
          <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
            {isVN
              ? "* Lưu ý trường hợp đặc biệt: Đối với các ca tiêu xương hàm quá nặng buộc phải phẫu thuật ghép xương/nâng xoang trước, có thể phát sinh thêm 1 chuyến đi trung gian. Số chuyến đi cần thiết sẽ được bác sĩ DentalNKT làm rõ ngay trong phác đồ bằng văn bản đầu tiên gửi bạn trước khi đặt lịch."
              : "* Surgical Note: For cases presenting with extreme bone loss requiring preparatory sinus lifts or block grafts, an intermediate trip might be indicated. The exact number of visits will be clarified in your initial written proposal before you schedule your travel."}
          </p>
        </div>
      </section>

      {/* 5. Complications & Issue handling */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-slate-50 border border-slate-100 p-8 sm:p-10 rounded-3xl">
        <div className="space-y-4">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-dark-brand">
            {isVN ? "Xử lý phát sinh sự cố trong thời gian chờ ở Úc" : "Handling Complications Between Trips"}
          </h3>
          <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">
            {isVN
              ? "Phục hình răng tạm thời được chế tác đủ độ bền và thẩm mỹ để bạn ăn nhai sinh hoạt bình thường trong 3-6 tháng chờ xương tích hợp. Nếu phát sinh sự cố như răng tạm bị lỏng, bong sút xi măng hoặc cấn nhẹ cản trở nhai khi bạn đã về nước Úc:"
              : "Temporary restorations are engineered to maintain basic chewing function and aesthetics during the 3-6 months integration period. If a temporary restoration becomes loose, debonds, or feels slightly high after your return to Australia:"}
          </p>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
            <li className="flex gap-2 items-center">
              <Check className="w-4 h-4 text-teal-brand shrink-0" />
              <span>{isVN ? "Liên hệ ngay với điều phối viên của DentalNKT để được hướng dẫn từ xa." : "Contact your DentalNKT coordinator immediately for step-by-step guidance."}</span>
            </li>
            <li className="flex gap-2 items-center">
              <Check className="w-4 h-4 text-teal-brand shrink-0" />
              <span>{isVN ? "Phối hợp với nha sĩ địa phương tại Úc để mài chỉnh nhẹ dưới sự chỉ dẫn của chúng tôi." : "We can coordinate instructions for a local dentist in Australia to perform minor adjustments."}</span>
            </li>
            <li className="flex gap-2 items-center">
              <Check className="w-4 h-4 text-teal-brand shrink-0" />
              <span>{isVN ? "Trường hợp sưng đau nghiêm trọng quanh vùng cắm implant, tham khảo quy trình bảo hành." : "For severe swelling/pain near implant sites, refer to our emergency warranty protocols."}</span>
            </li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-dark-brand">
            {isVN ? "Phác đồ theo dõi định kỳ tại Úc sau khi hoàn thành" : "Post-Treatment Maintenance Schedule in Australia"}
          </h3>
          <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">
            {isVN
              ? "Sau khi hoàn thành lắp răng sứ vĩnh viễn ở Chuyến đi 2, để đảm bảo tuổi thọ răng trọn đời, DentalNKT khuyến nghị lịch trình kiểm tra khớp cắn tại Úc:"
              : "To guarantee the longevity of your final restorations, we advise maintaining a routine checkup and cleaning schedule in Australia:"}
          </p>
          <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-dark-brand text-white uppercase text-[11px] sm:text-xs tracking-wider font-bold">
                  <th className="p-3">{isVN ? "Thời điểm" : "Timeline"}</th>
                  <th className="p-3">{isVN ? "Nội dung theo dõi chuyên sâu" : "Maintenance Action"}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-800 font-medium">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-3.5 font-bold text-dark-brand bg-slate-50/50 whitespace-nowrap">{isVN ? "3 Tháng" : "3 Months"}</td>
                  <td className="p-3.5 text-slate-800 leading-relaxed">{isVN ? "Khám tổng quát nha sĩ Úc: kiểm tra khớp cắn, đánh giá vệ sinh." : "General exam by local dentist: evaluate occlusal load, check hygiene."}</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-3.5 font-bold text-dark-brand bg-slate-50/50 whitespace-nowrap">{isVN ? "6 Tháng" : "6 Months"}</td>
                  <td className="p-3.5 text-slate-800 leading-relaxed">{isVN ? "Vệ sinh cạo vôi răng chuyên sâu quanh implant tại Úc." : "Professional scaling and cleaning around implant margins by hygienist."}</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-3.5 font-bold text-dark-brand bg-slate-50/50 whitespace-nowrap">{isVN ? "Hàng năm" : "Annually"}</td>
                  <td className="p-3.5 text-slate-800 leading-relaxed">{isVN ? "Chụp X-quang kiểm tra implant, đánh giá khớp và máng chống nghiến." : "Periapical X-rays of implants, evaluate bite wear, check night guard."}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[11px] sm:text-xs text-slate-700 font-semibold italic">
            {isVN 
              ? "* Lưu ý: Hãy luôn mang theo thẻ Implant Passport và thông tin vật liệu được DentalNKT cung cấp đến mọi buổi khám tại Úc để nha sĩ địa phương nắm rõ thông số."
              : "* Note: Bring your Implant Passport and material records to all local checkups so your Australian dentist has the exact component specifications."}
          </p>
        </div>
      </section>

      {/* 6. Risks */}
      <section className="bg-amber-50/15 border border-amber-100 rounded-3xl p-8 sm:p-10 space-y-6">
        <div className="text-amber-800">
          <h2 className="text-xl sm:text-2xl font-serif font-extrabold">
            {isVN ? "6. Rủi ro y khoa và điều cần biết trước khi quyết định" : "6. Risks & Complications to Know Before Deciding"}
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              vn: "Đây là điều trị phức tạp kết hợp nhiều thủ thuật. Tỷ lệ thành công chung phụ thuộc vào việc thực hiện đúng trình tự giai đoạn lành thương.",
              en: "This is a complex multi-specialty rehabilitation. Overall success rates depend heavily on respecting biology and healing phases."
            },
            {
              vn: "Không có đường tắt: Rút ngắn thời gian giữa các chuyến đi hoặc gắn răng sứ vĩnh viễn quá sớm làm tăng nguy cơ đào thải implant.",
              en: "No shortcuts: Compressing treatment timelines or loaded final restorations too early increases the risk of implant failure."
            },
            {
              vn: "Thời gian thích nghi khớp cắn mới: Nếu chiều cao cắn khớp được nâng lên đáng kể, bạn sẽ cần vài tuần để cơ hàm làm quen với cảm giác nhai.",
              en: "Bite adaptation period: If the vertical dimension of your bite is elevated significantly, it requires several weeks to adapt."
            },
            {
              vn: "Chi phí có thể thay đổi trong quá trình phẫu thuật thực tế (ví dụ phát hiện thiếu xương nhiều hơn dự báo trên phim CT ban đầu).",
              en: "Clinical variance: Bone volume seen in surgery may require more grafting than estimated from initial OPG/CT scans."
            },
            {
              vn: "Cần cam kết tuân thủ toàn bộ lịch trình và quy trình vệ sinh. Việc bỏ giai đoạn hoặc tự ý chỉnh sửa răng sẽ làm mất hiệu lực bảo hành.",
              en: "Strict compliance required: Skipping checkups or adjusting restorations elsewhere without approval voids your warranty."
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white border border-amber-100 rounded-2xl p-5 space-y-2.5">
              <div className="flex items-center gap-2 text-amber-600">
                <Info className="w-4 h-4 shrink-0" />
                <span className="text-xs font-bold uppercase tracking-wider">{isVN ? `Rủi ro 0${idx + 1}` : `Risk 0${idx + 1}`}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">
                {isVN ? item.vn : item.en}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Detailed Pricing */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-dark-brand text-center">
          {isVN ? "7. Chi phí phục hồi toàn hàm tham khảo" : "7. Full Mouth Reconstruction Price Index"}
        </h2>
        <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed text-center max-w-2xl mx-auto">
          {isVN 
            ? "Mỗi ca phục hồi toàn hàm đều có tính chất khác biệt rất lớn. Bảng dưới đây mô tả kịch bản chi phí mẫu dựa trên các tổ hợp dịch vụ phổ biến để bạn tham khảo cấu trúc báo giá:"
            : "Reconstruction cases vary significantly. The table below represents sample treatment scenarios based on common clinical combinations to illustrate the cost structure:"}
        </p>
        
        <div className="border border-slate-200 rounded-3xl overflow-hidden bg-white shadow-sm overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-[#0b1e2c] text-white font-serif text-xs uppercase tracking-wider">
                <th className="p-4 border-b border-slate-800">{isVN ? "Kịch bản điều trị mẫu" : "Sample Treatment Scenario"}</th>
                <th className="p-4 border-b border-slate-800 text-right">{isVN ? "Tổng chi phí (USD)" : "Total Cost (USD)"}</th>
                <th className="p-4 border-b border-slate-800 text-right">{isVN ? "Tổng chi phí (AUD, Tham khảo)" : "Total Cost (AUD, Ref)"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {[
                {
                  scenario: isVN ? "Combo 4 Implant + 12 mão răng sứ (Phục hồi 1 hàm)" : "Combo 4 Implants + 12 Porcelain Crowns (Single Arch)",
                  usd: isVN ? "Từ $7,128 USD" : "From $7,128 USD",
                  aud: isVN ? "Từ $10,150 AUD" : "From $10,150 AUD"
                },
                {
                  scenario: isVN ? "Combo All-on-4 một hàm + 8 mão sứ hàm còn lại" : "Combo All-on-4 (Arch 1) + 8 Porcelain Crowns (Arch 2)",
                  usd: isVN ? "Từ $7,397 USD" : "From $7,397 USD",
                  aud: isVN ? "Từ $10,545 AUD" : "From $10,545 AUD"
                },
                {
                  scenario: isVN ? "Phục hình All-on-4 trọn gói cho cả hai hàm" : "Double Arch All-on-4 Restorations Package",
                  usd: isVN ? "Từ $10,410 USD" : "From $10,410 USD",
                  aud: isVN ? "Từ $14,850 AUD" : "From $14,850 AUD"
                },
                {
                  scenario: isVN ? "Tổ hợp 8 Implant + 8 mão sứ + 6 mặt dán sứ Veneer" : "Combo 8 Implants + 8 Crowns + 6 Porcelain Veneers",
                  usd: isVN ? "Từ $12,608 USD" : "From $12,608 USD",
                  aud: isVN ? "Từ $17,964 AUD" : "From $17,964 AUD"
                }
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-medium text-slate-800 bg-slate-50/50">{row.scenario}</td>
                  <td className="p-4 text-right font-semibold text-slate-800">{row.usd}</td>
                  <td className="p-4 text-right font-extrabold text-teal-brand">{row.aud}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs sm:text-sm text-slate-700 font-semibold italic">
          {isVN 
            ? "* Chú thích: Đơn giá thực tế sẽ phụ thuộc vào việc lựa chọn thương hiệu trụ implant (Hiossen/Straumann), dòng phôi sứ (Ceramil/Lava) và có phát sinh ghép xương nâng xoang hay không. Tỷ giá quy đổi cố định: 1 AUD = 18.441 VNĐ, 1 USD = 26.280 VNĐ."
            : "* Price Note: Final fees depend on implant brands (Hiossen/Straumann), porcelain crown material selection (Ceramil/Lava), and surgical bone volume requirements. Fixed conversion rates: 1 AUD = 18,441 VND, 1 USD = 26,280 VND."}
        </p>


      </section>

      {/* 8. Clinician Profile */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-7 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-dark-brand">
            {isVN ? "8. Ai phụ trách ca phục hồi toàn hàm của bạn?" : "8. Who Will Perform Your Treatment?"}
          </h2>
          <div className="space-y-4 text-sm sm:text-base text-slate-800 leading-relaxed font-normal">
            <p>
              {isVN
                ? "Phục hồi toàn hàm là kỹ thuật phức tạp nhất trong nha khoa, đòi hỏi bác sĩ có tay nghề phẫu thuật và khớp cắn học xuất sắc. Ca điều trị của bạn tại DentalNKT sẽ được trực tiếp hội chẩn và thực hiện bởi đội ngũ bác sĩ chuyên khoa dẫn đầu bởi Dr. Nguyễn Huy Hoàng — Trưởng khoa Cấy ghép Implant & Chỉnh nha của phòng khám."
                : "Full mouth reconstruction is the most challenging discipline in dentistry, demanding exceptional surgical competence and training in gnathological occlusion. At DentalNKT, your case is directed and executed 1-on-1 by our chief clinician, Dr. Nguyen Huy Hoang."}
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
              <li className="flex gap-2 items-center">
                <Check className="w-4 h-4 text-teal-brand shrink-0" />
                <span>{isVN ? "Bác sĩ tốt nghiệp chính quy Đại học Y Hà Nội năm 2011." : "Graduated from Hanoi Medical University in 2011."}</span>
              </li>
              <li className="flex gap-2 items-center">
                <Check className="w-4 h-4 text-teal-brand shrink-0" />
                <span>{isVN ? "Số chứng chỉ hành nghề: 009235/BYT-CCHN (Đã xác minh / Verified)." : "Practicing License No: 009235/BYT-CCHN (Verified)."}</span>
              </li>
              <li className="flex gap-2 items-center">
                <Check className="w-4 h-4 text-teal-brand shrink-0" />
                <span>{isVN ? "Đào tạo chuyên sâu về cấy ghép Implant & phục hình khớp cắn tại Đại học Cologne (Đức)." : "Advanced postgraduate training in implant dentistry and occlusion at Cologne University (Germany)."}</span>
              </li>
              <li className="flex gap-2 items-center">
                <Check className="w-4 h-4 text-teal-brand shrink-0" />
                <span>{isVN ? "Thực hiện thành công trên 15.000 ca phục hình thẩm mỹ răng sứ và cấy ghép Implant." : "Over 15,000+ successful implant and full-arch rehabilitation surgeries completed."}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="md:col-span-5 bg-teal-brand-light/30 border border-teal-brand-light p-8 rounded-3xl space-y-4">
          <h3 className="text-base font-bold text-dark-brand">
            {isVN ? "Phương thức & Tiến độ thanh toán" : "Flexible Phased Payments"}
          </h3>
          <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal">
            {isVN
              ? "Chúng tôi nhận thanh toán bằng cả VNĐ hoặc AUD (tiền mặt, chuyển khoản ngân hàng hoặc quẹt thẻ tín dụng quốc tế). Chi phí được đóng theo tiến độ từng chuyến đi để giảm bớt gánh nặng tài chính: (Chuyến 1: Thanh toán 70% tổng chi phí sau khi hoàn thành phẫu thuật cấy ghép implant và lắp răng tạm; Chuyến 2: Thanh toán 30% còn lại sau khi gắn răng sứ vĩnh viễn hoàn thiện)."
              : "We accept cash, bank transfers, and credit cards (VISA/Mastercard) in VND or AUD. To ease your financial planning, fees are split between your trips: (Trip 1: 70% of total fees paid after surgical implant placement and temporaries fitting; Trip 2: 30% balance paid after final permanent restorations are fitted and bite check)."}
          </p>
        </div>
      </section>

      {/* 9. Warranty Policy */}
      <section className="bg-slate-50 border border-slate-100 rounded-3xl p-8 sm:p-10 space-y-6">
        <h2 className="text-xl sm:text-2xl font-serif font-extrabold text-dark-brand text-center">
          {isVN ? "9. Chính sách bảo hành phục hồi toàn hàm" : "9. Verifiable Global Warranty Policy"}
        </h2>
        <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">
          {isVN
            ? "Do kế hoạch phục hồi toàn hàm kết hợp nhiều giải pháp, mỗi thành phần (trụ implant, mão răng sứ, mặt dán sứ) sẽ có thời hạn bảo hành riêng biệt theo loại vật liệu tương ứng (ví dụ: khớp cắm implant được bảo hành trọn đời cho trụ, răng sứ vĩnh viễn bảo hành từ 7 đến 10 năm). Thư bảo hành bàn giao sau chuyến đi 2 sẽ liệt kê chi tiết từng điều khoản."
            : "Because your rehabilitation integrates different elements, each component carries its own warranty matching the specific material specs (e.g., implant fixtures carry lifetime warranties, while porcelain crowns are covered for 7 to 10 years). Your final case folder details specific warranties per restoration."}
        </p>
        <div className="bg-teal-brand/10 border border-teal-brand/20 rounded-2xl p-6 flex gap-3 items-start">
          <Shield className="w-5 h-5 text-teal-brand shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
            {isVN
              ? "Cam kết bảo hành từ xa: Nếu phát sinh sự cố nứt mẻ sứ vĩnh viễn do lỗi kỹ thuật của phòng khám sau khi bạn đã về nước, DentalNKT cam kết thực hiện phục chế lại hoàn toàn miễn phí và hỗ trợ 100% chi phí vé máy bay khứ hồi cho bạn quay lại Việt Nam để khắc phục."
              : "Remote warranty coverage: If a mechanical complication or material failure occurs due to clinical/lab errors after you return to Australia, DentalNKT will replace the restorations free of charge and fully cover your return flights back to Hanoi."}
          </p>
        </div>
      </section>

      {/* 10. FAQ Section */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-dark-brand text-center">
          {isVN ? "10. Câu hỏi thường gặp về Phục hồi toàn hàm" : "10. Frequently Asked Questions"}
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

      {/* 11. Call To Action Footer */}
      <section className="bg-gradient-to-br from-[#0b1e2c] via-[#0f2a3f] to-[#0b1e2c] text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-teal-brand/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-teal-brand/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-2xl mx-auto space-y-4">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold">
            {isVN ? "Tái lập ăn nhai vững ổn — Trả lại nụ cười rạng rỡ" : "Rebuild Your Smile & Bite in Hanoi – Save Up to 70%"}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
            {isVN 
              ? "Hãy gửi cho chúng tôi phim Panorama (OPG) hoặc phim chụp cắt lớp CT Cone Beam gần nhất của bạn. Đội ngũ bác sĩ của DentalNKT sẽ tiến hành hội chẩn và gửi phác đồ phục hồi chi tiết kèm báo giá cụ thể miễn phí trong vòng 24–48 giờ."
              : "Upload your panoramic X-ray (OPG) or 3D CBCT scans. Our clinical board will review your structural conditions and deliver a phased treatment proposal and cost estimate within 24 to 48 hours."}
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4 items-center">
            <Link 
              href="/contact" 
              className="bg-teal-brand hover:bg-teal-700 text-[#0b1e2c] font-bold px-8 py-3.5 rounded-full text-xs sm:text-sm transition-all shadow-lg hover:scale-105"
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
