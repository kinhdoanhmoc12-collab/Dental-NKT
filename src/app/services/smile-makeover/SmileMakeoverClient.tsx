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

export default function SmileMakeoverClient() {
  const { lang, t } = useLanguage();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const isVN = lang === "VN";

  React.useEffect(() => {
    document.title = isVN 
      ? "Thiết kế nụ cười (Smile Makeover) — Giải pháp thẩm mỹ toàn diện | DentalNKT"
      : "Smile Makeover — Comprehensive Esthetic Smile Design | DentalNKT";
  }, [isVN]);

  // FAQ Items
  const faqItems = [
    {
      q: isVN 
        ? "Smile Makeover khác gì so với làm Veneer đơn thuần?" 
        : "How does a Smile Makeover differ from standard Veneers?",
      a: isVN 
        ? "Veneer chỉ tập trung vào việc dán một lớp sứ mỏng lên mặt ngoài răng cửa để cải thiện hình dáng và màu sắc. Trong khi đó, Smile Makeover là một kế hoạch điều trị tổng thể kết hợp nhiều kỹ thuật (Veneer, mão sứ, tẩy trắng, chỉnh nha Invisalign, cắt lợi) nhằm tái tạo sự hài hòa của cả nụ cười dựa trên tỷ lệ khuôn mặt, nướu và khớp cắn của từng người."
        : "A veneer treatment simply bonds thin porcelain shells to front teeth to enhance shape and shade. In contrast, a Smile Makeover is a comprehensive therapeutic plan combining multiple techniques (veneers, crowns, whitening, Invisalign, laser gum contouring) to rebuild harmony based on your facial profile, gum lines, and bite alignment."
    },
    {
      q: isVN 
        ? "Tôi cần lưu trú tại Việt Nam bao lâu?" 
        : "How long do I need to stay in Vietnam?",
      a: isVN 
        ? "Thời gian lưu trú tối thiểu được khuyến nghị cho kế hoạch Smile Makeover là 10 ngày (hoàn thành trong 1 chuyến đi). Quy trình thiết kế nụ cười đòi hỏi các bước chụp ảnh studio, đắp mẫu thử sáp (Wax-up), thử nghiệm răng tạm làm bản lái thử trước khi gắn răng sứ vĩnh viễn nên không thể rút gọn xuống 3 ngày."
        : "The minimum recommended stay for a comprehensive Smile Makeover is 10 days (completed in one trip). The smile design process requires detailed studio analysis, wax-up models, and temporary trials to ensure full aesthetic and functional satisfaction before permanent bonding."
    },
    {
      q: isVN 
        ? "Tôi có được xem trước kết quả trước khi mài răng thật không?" 
        : "Can I preview my new smile before any preparation of my natural teeth?",
      a: isVN 
        ? "Có. Đây là bước bắt buộc trong quy trình của DentalNKT. Sau khi chụp ảnh phân tích, chúng tôi sẽ chế tác mẫu thử sáp (Wax-up) và đắp trực tiếp lên răng thật của bạn (chưa mài răng). Bạn sẽ thấy được hình thể, chiều dài răng dự kiến và có thể điều chỉnh theo mong muốn trước khi bác sĩ tiến hành sửa soạn răng."
        : "Yes. This is a mandatory stage in our protocol. After photographic analysis, we fabricate a diagnostic wax-up model that is placed over your natural teeth (before prep work). This allows you to evaluate the proposed anatomy and length, making modifications before any enamel is shaped."
    },
    {
      q: isVN 
        ? "Nếu tôi không hài lòng với kết quả sau khi lắp răng tạm thì sao?" 
        : "What if I am not satisfied with the mock-up or temporary teeth?",
      a: isVN 
        ? "Giai đoạn đeo răng tạm kéo dài 1-3 ngày chính là lúc bạn lái thử nụ cười mới. Mọi yêu cầu thay đổi về hình dáng, độ dài, màu sắc răng đều sẽ được điều chỉnh trực tiếp trên răng tạm và cập nhật vào thiết kế gửi Labo. Sau khi răng sứ cuối cùng đã được gắn cố định bằng xi măng vĩnh viễn, bạn sẽ không thể thay đổi thiết kế trừ khi làm lại toàn bộ ca điều trị."
        : "The 1-3 days temporary stage is your trial period. Any modifications regarding tooth length, width, or shade must be made during this time. Once the final porcelain restorations are permanently bonded, the design cannot be changed without repeating the entire treatment from scratch."
    },
    {
      q: isVN 
        ? "Nụ cười mới của tôi có bị trắng quá hay trông mất tự nhiên không?" 
        : "Will my new smile look artificially white or unnatural?",
      a: isVN 
        ? "Không. Triết lý thẩm mỹ tại DentalNKT là hướng đến vẻ đẹp tự nhiên, tương thích sinh học cao. Bác sĩ sẽ tư vấn tông màu sứ (từ màu siêu trắng thẩm mỹ OM1/OM2 đến các tông màu tự nhiên A1/B1) phù hợp nhất với nước da, lòng trắng mắt và độ tuổi của bạn. Bạn luôn là người đưa ra lựa chọn tông màu cuối cùng."
        : "No. Our design philosophy focuses on natural, biomimetic harmony. We evaluate skin tone, sclera color, and age to recommend the most suitable shade (ranging from Hollywood bleach OM1/OM2 to natural white A1/B1). You maintain full control over the final shade selection."
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
              <span>{isVN ? "THIẾT KẾ NỤ CƯỜI TOÀN DIỆN" : "COMPREHENSIVE SMILE DESIGN EXPERIENCE"}</span>
            </span>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-white leading-tight">
              {isVN 
                ? "Thiết Kế Nụ Cười (Smile Makeover) — Giải Pháp Tổng Thể" 
                : "Smile Makeover — Custom Esthetic Design"}
            </h1>
            
            <p className="text-sm sm:text-base text-slate-200 font-normal leading-relaxed">
              {isVN 
                ? "Không chỉ là một kỹ thuật đơn lẻ, Smile Makeover là kế hoạch điều trị đồng bộ kết hợp Veneer, mão sứ, chỉnh lợi thẩm mỹ và tẩy trắng chuyên sâu để kiến tạo nụ cười rạng rỡ, hài hòa tuyệt đối với đường nét khuôn mặt của bạn."
                : "More than a single treatment, a Smile Makeover is a unified esthetic therapy integrating veneers, crowns, gum lifting, and whitening to engineer a radiant smile in absolute balance with your natural facial geometry."}
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-slate-700/80 w-full">
              <div>
                <span className="text-xs text-slate-300 block font-medium">
                  {isVN ? "Phác đồ thiết kế nụ cười:" : "Smile Design Treatment Plan:"}
                </span>
                <span className="text-xl sm:text-2xl font-extrabold text-teal-brand">
                  {isVN ? "Thiết lập cá nhân hóa từng mục" : "Customized itemized proposal"}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center bg-teal-brand hover:bg-teal-700 text-white font-bold px-7 py-3.5 rounded-full text-xs sm:text-sm transition-all shadow-lg hover:scale-105 whitespace-nowrap"
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

      {/* 1. What is a Smile Makeover */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-7 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-dark-brand">
            {isVN ? "1. Smile Makeover là gì?" : "1. What is a Smile Makeover?"}
          </h2>
          <div className="space-y-4 text-sm sm:text-base text-slate-800 leading-relaxed font-normal">
            <p>
              {isVN
                ? "Thiết kế nụ cười (Smile Makeover) không đơn giản là mài răng dán sứ. Đây là một kế hoạch điều trị tổng thể kết hợp linh hoạt nhiều giải pháp nha khoa thẩm mỹ và phục hình (như dán sứ Veneer Emax, bọc mão sứ Zirconia, tẩy trắng Laser, phẫu thuật chỉnh hình nướu hở lợi, hoặc niềng răng trong suốt Invisalign) nhằm giải quyết triệt để các khuyết điểm về màu sắc, hình thể, trục răng và sự cân đối của nướu."
                : "A Smile Makeover is not merely about prepping teeth for ceramic coverings. It is a comprehensive, multidisciplinary treatment plan combining various aesthetic therapies (such as E.max veneers, Zirconia crowns, laser whitening, crown lengthening/gum contouring, and Invisalign aligners) to resolve misalignment, color disharmony, shape irregularities, and gum line asymmetry."}
            </p>
            <p>
              {isVN
                ? "Điểm cốt lõi làm nên thành công của một ca Smile Makeover tại DentalNKT là quy trình chụp ảnh studio phân tích khuôn mặt, đắp mẫu thử sáp (Wax-up) xem trước kết quả trực quan trên miệng trước khi có bất kỳ can thiệp mài răng thật nào. Chúng tôi cam kết bảo tồn tối đa cấu trúc răng thật và tích hợp sinh học lành mạnh với mô nướu."
                : "The foundation of a successful Smile Makeover at DentalNKT lies in our cosmetic design protocols: high-definition facial photography, 3D digital planning, and physical try-in mockups (wax-ups) placed on your teeth before any clinical preparation begins. We guarantee minimal enamel reduction and healthy integration with surrounding tissues."}
            </p>
          </div>
        </div>

        <div className="md:col-span-5 bg-teal-brand-light/30 border border-teal-brand-light p-8 rounded-3xl space-y-4">
          <h3 className="text-base font-bold text-dark-brand">
            {isVN ? "Yếu tố cốt lõi của Smile Makeover" : "Smile Makeover Core Principles"}
          </h3>
          <ul className="space-y-3.5">
            {[
              isVN ? "Thiết kế cá nhân hóa theo cấu trúc cơ mặt riêng biệt" : "Fully customized around your unique facial symmetry",
              isVN ? "Không áp dụng một khuôn mẫu răng nhân tạo đại trà" : "Avoids generic, unnatural artificial teeth templates",
              isVN ? "Xem trước kết quả bằng mẫu thử sáp trước khi làm" : "Preview proposed anatomy with wax-up mock-ups",
              isVN ? "Thời gian đeo thử răng tạm để cảm nhận chức năng" : "Includes temporary testing phase for bite and feel",
              isVN ? "Yêu cầu tối thiểu 10 ngày lưu trú để đạt chất lượng tốt nhất" : "Requires a minimum of 10 days stay for clinical excellence"
            ].map((benefit, idx) => (
              <li key={idx} className="flex gap-2 items-start text-xs sm:text-sm text-slate-800">
                <Check className="w-4.5 h-4.5 text-teal-brand shrink-0 mt-0.5" />
                <span className="font-semibold">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 2. Components in a Smile Makeover */}
      <section className="bg-slate-50 border border-slate-100 rounded-3xl p-8 sm:p-10 space-y-6">
        <h2 className="text-xl sm:text-2xl font-serif font-extrabold text-dark-brand text-center">
          {isVN ? "2. Những thành phần có thể có trong kế hoạch Smile Makeover" : "2. Makeover Modules: Flexible Treatment Components"}
        </h2>
        <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed text-center max-w-2xl mx-auto">
          {isVN 
            ? "Mỗi ca điều trị đều được cá nhân hóa hoàn toàn. Chúng tôi chỉ đưa vào kế hoạch những hạng mục lâm sàng thực sự cần thiết cho tình trạng của bạn, cam kết không gộp chung mập mờ."
            : "No two makeovers are alike. We construct your plan dynamically. Our clinical team only includes procedures necessary to resolve your diagnosis, itemizing each cost separately."}
        </p>
        <div className="border border-slate-200 rounded-3xl overflow-hidden bg-white shadow-sm overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-[#0b1e2c] text-white font-serif text-xs uppercase tracking-wider">
                <th className="p-4 border-b border-slate-800">{isVN ? "Hạng mục lâm sàng" : "Treatment Component"}</th>
                <th className="p-4 border-b border-slate-800">{isVN ? "Mục đích điều trị cụ thể" : "Clinical Indication"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {[
                {
                  item: isVN ? "Mặt dán sứ Veneer Emax" : "IPS E.max Porcelain Veneers",
                  indication: isVN ? "Dán mặt ngoài răng cửa còn tủy khỏe để sửa đổi màu sắc, đóng khe thưa, sửa hình dáng răng sứt mẻ." : "Optimal for anterior front teeth with vital pulp to restore shade, close diastemas, and correct micro-fractures."
                },
                {
                  item: isVN ? "Mão răng sứ (Crown)" : "Porcelain Crowns (Zirconia/Emax)",
                  indication: isVN ? "Áp dụng cho răng bị vỡ lớn, răng hàm chịu lực lớn hoặc răng đã lấy tủy cần bọc chụp bảo vệ chống giòn gãy." : "Indicated for heavily decayed teeth, posterior load-bearing molars, or root-canal treated structures."
                },
                {
                  item: isVN ? "Tẩy trắng răng Laser" : "In-Office Laser Teeth Whitening",
                  indication: isVN ? "Tẩy trắng tông nền của toàn bộ cung hàm trước khi dán sứ Veneer, giúp nụ cười đồng đều màu sắc." : "Establishes a bright baseline shade for natural teeth before matching custom veneer shells."
                },
                {
                  item: isVN ? "Chỉnh hình nướu (Gum Contouring)" : "Esthetic Gum Contouring / Gingivectomy",
                  indication: isVN ? "Phẫu thuật hoặc chiếu tia laser tạo hình đường viền nướu đều đặn, giải quyết triệt để cười hở lợi." : "Corrects uneven gum margins or high smile lines (gummy smile) using surgical/laser technology."
                },
                {
                  item: isVN ? "Đắp mẫu thử sáp (Wax-up)" : "Diagnostic Wax-up & Mock-up",
                  indication: isVN ? "Mẫu đắp thử bằng sáp cứng lên răng thật chưa mài, giúp bạn quan sát và cảm nhận chiều dài răng dự kiến." : "Temporary wax modeling on un-prepped structures to visualize tooth length, volume, and silhouette."
                },
                {
                  item: isVN ? "Niềng răng trong suốt Invisalign" : "Invisalign US Clear Aligners",
                  indication: isVN ? "Cân chỉnh răng khấp khểnh nhẹ về đúng cung hàm trước khi làm sứ thẩm mỹ, tránh mài nhiều mô răng." : "Pre-treatment alignment of crowded teeth to optimize seating paths, avoiding aggressive prep work."
                },
                {
                  item: isVN ? "Cấy ghép trụ Implant" : "Single Dental Implants",
                  indication: isVN ? "Cấy ghép chân răng nhân tạo nếu nụ cười có khoảng trống mất răng cần khôi phục lại răng mất cố định." : "Restores gaps in the aesthetic zone caused by prior extractions, avoiding preparation of support teeth."
                }
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-slate-800 bg-slate-50/50">{row.item}</td>
                  <td className="p-4 leading-relaxed font-normal">{row.indication}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 3. Detailed Process - Why we cannot do it in 3 days */}
      <section className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-serif font-extrabold text-dark-brand text-center">
          {isVN ? "3. Quy trình thiết kế nụ cười tại DentalNKT — Vì sao không thể làm nhanh trong 3 ngày" : "3. DentalNKT Smile Design Protocols: Why It Takes 10 Days"}
        </h2>
        <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed text-center max-w-2xl mx-auto">
          {isVN 
            ? "Làm răng sứ thẩm mỹ vội vã trong 3 ngày thường dẫn đến việc mài răng quá đà, phạm vào tủy răng hoặc viêm nướu mãn tính do phục hình chế tác ẩu. Quy trình chuẩn mực của chúng tôi tuân thủ các bước kiểm duyệt lâm sàng:"
            : "Rushing a makeover in 3 days often leads to over-preparation, pulpal devitalization, or chronic gum inflammation due to ill-fitting margins. Our systematic protocol respects biological healing and design verification:"}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          {[
            {
              step: isVN ? "Bước 01: Chụp ảnh phân tích chuyên sâu" : "Step 01: Multi-Angle Facial Photography",
              desc: isVN
                ? "Chụp ảnh cận cảnh răng và quay video chuyển động môi khi cười, nói, phân tích cơ mặt tại studio của phòng khám để xác định trục răng hài hòa nhất với gương mặt bạn."
                : "We capture high-definition photographs and video recordings of speech and smile movements to analyze alignment axes in sync with your structural facial features."
            },
            {
              step: isVN ? "Bước 02: Lựa chọn tông màu cá nhân hóa" : "Step 02: Customized Shade Mapping",
              desc: isVN
                ? "Bác sĩ tư vấn chọn tông màu sứ tự nhiên dựa trên lòng trắng mắt, màu da cổ và độ tuổi, không mặc định chọn tông màu trắng sáng nhân tạo mất thẩm mỹ."
                : "Our clinicians help select your custom shade based on skin undertones, age, and eye color, avoiding monochromatic opaque block look unless requested."
            },
            {
              step: isVN ? "Bước 03: Thiết lập mẫu thử sáp (Wax-up)" : "Step 03: Diagnostic Wax-Up Try-In",
              desc: isVN
                ? "Đắp bản mẫu thử sáp cứng trực tiếp lên răng thật của bạn. Bạn được nhìn thấy, sờ và cảm nhận hình dáng răng tương lai trên miệng trước khi có bất kỳ men răng nào bị mài."
                : "A physical diagnostic mock-up is placed directly onto your teeth before any preparation, letting you feel and approve the proposed tooth length and volume."
            },
            {
              step: isVN ? "Bước 04: Mài răng tối thiểu & gắn răng tạm" : "Step 04: Conservative Prep & Temporary Trial",
              desc: isVN
                ? "Mài sửa soạn men răng siêu nhẹ dưới 0.3mm (hoặc không mài tùy chỉ định) dưới kính phóng đại nha khoa, sau đó lắp răng tạm làm bản 'lái thử' ăn nhai và giao tiếp."
                : "Minimal-prep enamel shaping (under 0.3mm or prep-less when indicated) under high magnification, followed by temporary crowns acting as functional trials."
            },
            {
              step: isVN ? "Bước 05: Kiểm tra và duyệt thiết kế cuối" : "Step 05: Design Verification & Lab Approval",
              desc: isVN
                ? "Bạn đeo răng tạm 1-3 ngày để tự đánh giá tại khách sạn. Mọi phản hồi chỉnh sửa về phom răng, kẽ cắn sẽ được cập nhật chính xác trước khi gửi Labo chế tác sứ thật."
                : "Test drive your temporary smile for 1-3 days. Any feedback on speech, phonetics, or bite comfort is updated in the digital file before final laboratory milling."
            },
            {
              step: isVN ? "Bước 06: Gắn phục hình sứ cố định vĩnh viễn" : "Step 06: Permanent Bonding & Shade Check",
              desc: isVN
                ? "Thử răng sứ vĩnh viễn với gel thử màu chuyên dụng dưới ánh sáng tự nhiên. Sau khi bạn hoàn toàn ưng ý, bác sĩ tiến hành gắn kết vĩnh viễn bằng xi măng resin cao cấp."
                : "Restorations are evaluated on-site under natural light using try-in pastes. Once approved, they are bonded using dual-cure resin cements."
            }
          ].map((row, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-100 p-6 rounded-2xl space-y-2">
              <h4 className="text-xs sm:text-sm font-bold text-dark-brand flex items-center gap-2">
                <span className="w-5.5 h-5.5 flex items-center justify-center bg-teal-brand text-white rounded-full text-xs font-bold shrink-0">
                  {idx + 1}
                </span>
                <span>{row.step}</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed pl-7">
                {row.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Contraindications - Who should treat in AU first */}
      <section className="bg-amber-50/15 border border-amber-100 rounded-3xl p-8 sm:p-10 space-y-6">
        <div className="text-amber-800">
          <h2 className="text-xl sm:text-2xl font-serif font-extrabold">
            {isVN ? "4. Ai nên khám/điều trị tại Úc trước khi làm Smile Makeover" : "4. Clinical Screening: Who Should Treat in Australia First"}
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed max-w-3xl">
          {isVN 
            ? "Khác với các phòng khám quảng cáo bất chấp, DentalNKT luôn ưu tiên an toàn sinh học của bệnh nhân. Nếu bạn nằm trong các trường hợp sau, hãy tiến hành khám và điều trị ổn định tại Úc trước khi bắt chuyến bay sang Việt Nam:"
            : "Unlike advertising clinics, DentalNKT places biological safety above sales. If you present with any of the following clinical conditions, we advise undergoing stabilization in Australia before booking travel:"}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              titleVN: "Viêm nha chu hoạt động",
              titleEN: "Active Periodontitis",
              descVN: "Mô nướu đang viêm chảy máu, tiêu xương chân răng. Dán veneer lên nướu viêm chắc chắn dẫn đến thất bại, viêm lợi nặng thêm.",
              descEN: "Active bleeding and bone loss. Bonding restorations to inflamed gum tissues leads to failure and chronic tissue decay."
            },
            {
              titleVN: "Nghiến răng nặng chưa kiểm soát",
              titleEN: "Severe Nocturnal Bruxism",
              descVN: "Lực nghiến răng ban đêm cực lớn dễ làm nứt vỡ, mẻ lớp sứ Veneer. Bắt buộc phải điều trị máng bảo vệ chống nghiến trước.",
              descEN: "Excessive sleep grinding forces can easily fracture or chip ceramic shells. Protective night guards are mandatory post-treatment."
            },
            {
              titleVN: "Bệnh nhân đang mang thai",
              titleEN: "Pregnancy",
              descVN: "Các thủ thuật thẩm mỹ tự chọn không cấp thiết nên hoãn lại để đảm bảo an toàn tuyệt đối cho sức khỏe của thai nhi.",
              descEN: "Elective cosmetic dental procedures are not recommended and should be postponed until postpartum to ensure fetal safety."
            },
            {
              titleVN: "Đau khớp thái dương hàm (TMJ)",
              titleEN: "Active TMJ Disorders",
              descVN: "Cơn đau khớp cắn cấp tính chưa ổn định. Thay đổi hình thể răng đột ngột có thể làm trầm trọng thêm tình trạng đau mỏi khớp.",
              descEN: "Unstable jaw pain. Rapid alteration of dental anatomy can worsen joint strain if not carefully diagnosed first."
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white border border-amber-100 rounded-2xl p-5 space-y-2.5">
              <h4 className="text-xs sm:text-sm font-bold text-[#0b1e2c] border-b border-amber-100 pb-2">
                {isVN ? item.titleVN : item.titleEN}
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">
                {isVN ? item.descVN : item.descEN}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Sample Stay Itinerary */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-dark-brand text-center">
          {isVN ? "5. Lịch trình mẫu cho khách làm Smile Makeover" : "5. Recommended Smile Makeover Stay Itinerary"}
        </h2>
        <div className="border border-slate-200 rounded-3xl overflow-hidden bg-white shadow-sm overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-[#0b1e2c] text-white font-serif text-xs uppercase tracking-wider">
                <th className="p-4 border-b border-slate-800">{isVN ? "Ngày" : "Timeline"}</th>
                <th className="p-4 border-b border-slate-800">{isVN ? "Nội dung thực hiện" : "Clinical & Laboratory Steps"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {[
                {
                  day: isVN ? "Ngày 1" : "Day 1",
                  desc: isVN 
                    ? "Chụp ảnh phân tích nụ cười tại studio, quét scan 3D mẫu hàm, lựa chọn tông màu răng sứ, làm mẫu thử sáp (Wax-up) trên răng thật chưa mài."
                    : "Studio photography, 3D intraoral scans, color shade mapping, and physical try-in mockup (wax-up) over un-prepped teeth."
                },
                {
                  day: isVN ? "Ngày 2" : "Day 2",
                  desc: isVN 
                    ? "Thực hiện tẩy trắng răng Laser Whitening (nếu có trong kế hoạch) để nâng tông màu nền nụ cười tự nhiên."
                    : "Laser teeth whitening (if in plan) to brighten baseline natural teeth to coordinate with new porcelain shells."
                },
                {
                  day: isVN ? "Ngày 3" : "Day 3",
                  desc: isVN 
                    ? "Tiến hành mài sửa soạn men răng tối thiểu dưới 0.3mm, lấy dấu cùi răng kỹ thuật số, gắn răng tạm thẩm mỹ."
                    : "Enamel reduction preparation (under 0.3mm), digital impression scan of preparations, fitting aesthetic temporary veneers."
                },
                {
                  day: isVN ? "Ngày 4 – 8" : "Day 4 – 8",
                  desc: isVN 
                    ? "Bệnh nhân đeo răng tạm ăn nhai trải nghiệm thực tế. Labo nội bộ thiết kế CAD/CAM và đắp sứ thủ công tinh tế."
                    : "Patient wears temporary veneers for real-life feedback. In-house lab designs and bakes custom porcelain restorations."
                },
                {
                  day: isVN ? "Ngày 9" : "Day 9",
                  desc: isVN 
                    ? "Thử răng sứ thật trên miệng, kiểm tra màu sắc dưới ánh sáng tự nhiên cùng sự hài lòng của bệnh nhân."
                    : "Try-in session, evaluating restoration margins, fit, and color aesthetics under natural outdoor sunlight."
                },
                {
                  day: isVN ? "Ngày 10" : "Day 10",
                  desc: isVN 
                    ? "Tiến hành gắn cố định vĩnh viễn bằng xi măng Resin, tinh chỉnh khớp cắn khớp hàm tối ưu."
                    : "Final resin cement bonding, occlusal calibration, and polishing."
                },
                {
                  day: isVN ? "Ngày 11 – 14" : "Day 11 – 14",
                  desc: isVN 
                    ? "Thời gian dự phòng: Tái khám kiểm tra khớp cắn sau ăn nhai thực tế, chụp hình hồ sơ hoàn thành và bàn giao hướng dẫn bảo hành."
                    : "Buffer period: Follow-up check of bite adjustment, final clinical photography portfolio, and warranty package handover."
                }
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-slate-800 bg-slate-50/50">{row.day}</td>
                  <td className="p-4 leading-relaxed font-normal">{row.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 6. Preview and Edit */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center bg-slate-50 border border-slate-100 p-8 sm:p-10 rounded-3xl">
        <div className="md:col-span-8 space-y-4">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-dark-brand">
            {isVN ? "Quyền duyệt và chỉnh sửa nụ cười trước khi gắn vĩnh viễn" : "Your Absolute Control: Smile Approval Stage"}
          </h3>
          <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">
            {isVN
              ? "Tại DentalNKT, quyền quyết định nụ cười thuộc về bạn. Giai đoạn đeo răng tạm (Ngày 4–8) chính là cơ hội duy nhất để bạn cảm nhận, soi gương trò chuyện và ăn uống thực tế. Mọi mong muốn thay đổi về độ dài răng, độ vuông góc của cạnh cắn, hoặc điều chỉnh sắc độ màu sứ đều sẽ được bác sĩ sửa đổi trực tiếp trên mẫu tạm để gửi Labo cập nhật mẫu sứ vĩnh viễn."
              : "At DentalNKT, you maintain final authority over your smile design. The temporary veneer trial phase (Days 4–8) is your opportunity to check speech, bite, and aesthetics. Any changes to tooth length, edge roundedness, or porcelain brightness are directly modified on the temporary structures and updated before final lab baking."}
          </p>
          <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">
            {isVN
              ? "Sau khi răng sứ đã gắn keo xi măng vĩnh viễn, mọi thay đổi thiết kế đều không thể thực hiện và bắt buộc phải mài bỏ lớp sứ cũ để làm lại từ đầu. Vì vậy, bước răng tạm là cơ hội vàng để bạn thoải mái trao đổi thẳng thắn với bác sĩ."
              : "Once the restorations are cemented permanently, alterations are impossible without grinding off the custom shells and starting anew. This makes the temporary trial your critical feedback window."}
          </p>
        </div>
        <div className="md:col-span-4 bg-teal-brand/10 border border-teal-brand/20 p-6 rounded-2xl flex flex-col justify-center items-center text-center space-y-2">
          <Shield className="w-8 h-8 text-teal-brand" />
          <h4 className="text-xs sm:text-sm font-bold text-[#0b1e2c]">
            {isVN ? "Bảo lãnh nụ cười" : "Esthetic Guarantee"}
          </h4>
          <p className="text-xs text-slate-600 font-medium">
            {isVN ? "Không gắn răng sứ vĩnh viễn khi bệnh nhân chưa hoàn toàn đồng ý." : "We never cement restorations permanently until you sign off on design satisfaction."}
          </p>
        </div>
      </section>

      {/* 7. Detailed Pricing */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-dark-brand text-center">
          {isVN ? "7. Chi phí thiết kế nụ cười tham khảo" : "7. Itemized Smile Makeover Price Index"}
        </h2>
        <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed text-center max-w-2xl mx-auto">
          {isVN 
            ? "Chúng tôi không đưa ra mức giá trọn gói chung chung để giấu chi phí. Mọi dịch vụ cấu thành kế hoạch Smile Makeover của bạn đều được liệt kê chi tiết từng dòng rõ ràng:"
            : "We do not package costs into a single opaque lump sum. Every clinical module in your Smile Makeover plan is itemized transparently:"}
        </p>
        
        <div className="border border-slate-200 rounded-3xl overflow-hidden bg-white shadow-sm overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-[#0b1e2c] text-white font-serif text-xs uppercase tracking-wider">
                <th className="p-4 border-b border-slate-800">{isVN ? "Hạng mục / Dịch vụ" : "Clinical Procedure Item"}</th>
                <th className="p-4 border-b border-slate-800 text-right">{isVN ? "Đơn giá (VNĐ)" : "Price (VND)"}</th>
                <th className="p-4 border-b border-slate-800 text-right">{isVN ? "Đơn giá (USD)" : "Price (USD)"}</th>
                <th className="p-4 border-b border-slate-800 text-right">{isVN ? "Đơn giá (AUD, Tham khảo)" : "Price (AUD, Ref)"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {[
                {
                  item: isVN ? "Mặt dán sứ Veneer IPS E.max (mỗi răng)" : "IPS E.max Porcelain Veneer (per tooth)",
                  vnd: "12.000.000 VNĐ",
                  usd: "$456 USD",
                  aud: "$650 AUD"
                },
                {
                  item: isVN ? "Mão răng sứ IPS E.max (mỗi răng, nếu cần)" : "IPS E.max Porcelain Crown (per tooth)",
                  vnd: "10.800.000 VNĐ",
                  usd: "$411 USD",
                  aud: "$585 AUD"
                },
                {
                  item: isVN ? "Tẩy trắng răng Laser Whitening chuyên sâu (trọn gói)" : "In-Office Laser Teeth Whitening (German Gel)",
                  vnd: "3.000.000 VNĐ",
                  usd: "$114 USD",
                  aud: "$160 AUD"
                },
                {
                  item: isVN ? "Chỉnh hình nướu laser — không phẫu thuật (mỗi răng)" : "Laser Gum Contouring (Non-Surgical, per tooth)",
                  vnd: "900.000 VNĐ",
                  usd: "$34 USD",
                  aud: "$49 AUD"
                },
                {
                  item: isVN ? "Chỉnh hình nướu — phẫu thuật làm dài thân (mỗi răng)" : "Periodontal Crown Lengthening Surgery (per tooth)",
                  vnd: "1.800.000 VNĐ",
                  usd: "$68 USD",
                  aud: "$98 AUD"
                },
                {
                  item: isVN ? "Mẫu đắp thử sáp cứng phục hình (mỗi răng)" : "Diagnostic Wax-up Mock-up (per tooth)",
                  vnd: "500.000 VNĐ",
                  usd: "$20 USD",
                  aud: "$30 AUD"
                },
                {
                  item: isVN ? "Niềng răng trong suốt Invisalign (nếu cần chỉnh nhẹ trước)" : "Invisalign Clear Aligners (If pre-alignment required)",
                  vnd: "Từ 72.000.000 VNĐ",
                  usd: "Từ $2,740 USD",
                  aud: "Từ $3,905 AUD"
                }
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-medium text-slate-800">{row.item}</td>
                  <td className="p-4 text-right font-semibold text-slate-800">{row.vnd}</td>
                  <td className="p-4 text-right font-semibold text-slate-800">{row.usd}</td>
                  <td className="p-4 text-right font-extrabold text-teal-brand">{row.aud}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs sm:text-sm text-slate-700 font-semibold italic">
          {isVN 
            ? "* Minh họa tính chi phí: Nếu kế hoạch của bạn gồm 10 răng dán sứ Veneer Emax + tẩy trắng + đắp sáp thử, tổng giá trị báo giá chi tiết sẽ là: (10 x 12.000.000 VNĐ) + 3.000.000 VNĐ + (10 x 500.000 VNĐ) = 128.000.000 VNĐ (~$6.930 AUD). Không phát sinh phụ phí ẩn. Tỷ giá quy đổi cố định: 1 AUD = 18.441 VNĐ, 1 USD = 26.280 VNĐ."
            : "* Illustrative example: A proposal for 10 E.max veneers + laser whitening + 10 wax-up mock-ups totals: (10 x $650 AUD) + $160 AUD + (10 x $30 AUD) = $6,960 AUD. No hidden fees. Fixed conversion rates: 1 AUD = 18,441 VND, 1 USD = 26,280 VND."}
        </p>

        {/* Australian Health Insurance Info */}
        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 flex gap-3 items-start mt-4">
          <Info className="w-5 h-5 text-teal-brand shrink-0 mt-0.5" />
          <div className="space-y-1 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
            <h4 className="font-bold text-dark-brand">
              {isVN ? "Lưu ý về Bảo hiểm y tế tư nhân tại Úc" : "A Note on Australian Private Health Funds"}
            </h4>
            <p>
              {isVN
                ? "Các dịch vụ mang tính thẩm mỹ tự chọn thuần túy như dán sứ Veneer, tẩy trắng hoặc phẫu thuật cắt lợi thẩm mỹ thường nằm ngoài danh mục chi trả của hầu hết các gói bảo hiểm extras tại Úc. Riêng đối với mão sứ bọc bảo vệ răng đã lấy tủy, bảo hiểm có thể hỗ trợ một phần. Quý khách vui lòng lưu ý DentalNKT không có liên kết trực tiếp và không xử lý hồ sơ thanh toán bảo hiểm."
                : "Aesthetic elective procedures such as veneers, bleaching, and laser gum lifting are typically excluded from private extras dental covers in Australia. Reconstructive crowns on root-canal treated teeth may qualify for partial rebate. DentalNKT does not maintain affiliate links or process insurance billing."}
            </p>
          </div>
        </div>
      </section>

      {/* 8. Clinician Profile */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-7 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-dark-brand">
            {isVN ? "8. Ai thực hiện Smile Makeover cho bạn?" : "8. Who Will Perform Your Smile Makeover?"}
          </h2>
          <div className="space-y-4 text-sm sm:text-base text-slate-800 leading-relaxed font-normal">
            <p>
              {isVN
                ? "Thiết kế nụ cười Smile Makeover đòi hỏi bác sĩ có khiếu thẩm mỹ cao kết hợp kiến thức khớp cắn học vững chắc để phục hình không bị cộm khớp, dắt thức ăn hay nứt mẻ. Tại DentalNKT, ca điều trị của bạn được trực tiếp đảm nhiệm bởi Dr. Nguyễn Huy Hoàng — Bác sĩ tốt nghiệp chính quy Đại học Y Hà Nội năm 2011, chuyên gia phục hình thẩm mỹ răng sứ và cấy ghép Implant."
                : "Smile makeover planning requires both clinical artistry and a deep grasp of occlusion dynamics to avoid masticatory joint strain or mechanical ceramic failure. At DentalNKT, your treatment is managed 1-on-1 by our director, Dr. Nguyen Huy Hoang, specializing in dental aesthetics and implantology."}
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
              <li className="flex gap-2 items-center">
                <Check className="w-4 h-4 text-teal-brand shrink-0" />
                <span>{isVN ? "Số chứng chỉ hành nghề CCHN: 009235/BYT-CCHN (Đã xác minh / Verified)." : "Practicing License No: 009235/BYT-CCHN (Verified)."}</span>
              </li>
              <li className="flex gap-2 items-center">
                <Check className="w-4 h-4 text-teal-brand shrink-0" />
                <span>{isVN ? "Hơn 15 năm kinh nghiệm lâm sàng về phục hình thẩm mỹ và khớp cắn học." : "Over 15+ years of clinical experience in cosmetic restorations and occlusal therapies."}</span>
              </li>
              <li className="flex gap-2 items-center">
                <Check className="w-4 h-4 text-teal-brand shrink-0" />
                <span>{isVN ? "Labo chế tác nội bộ sử dụng phôi sứ E.max chính hãng (Ivoclar Vivadent - Thụy Sĩ) và Ceramill (Áo)." : "In-house dental laboratory utilizing authentic E.max (Ivoclar - Switzerland) and Ceramill (Austria) blanks."}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="md:col-span-5 bg-teal-brand-light/30 border border-teal-brand-light p-8 rounded-3xl space-y-4">
          <h3 className="text-base font-bold text-dark-brand">
            {isVN ? "Phương thức thanh toán" : "Payment & Deposit Structure"}
          </h3>
          <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal">
            {isVN
              ? "Chúng tôi hỗ trợ thanh toán linh hoạt bằng tiền mặt, chuyển khoản hoặc quẹt thẻ tín dụng quốc tế (VISA/Mastercard). Tổng chi phí điều trị được chia thành hai đợt (Đợt 1: Đặt cọc 70% sau khi mài răng và lấy dấu mẫu hàm; Đợt 2: Thanh toán 30% còn lại sau khi bạn hoàn toàn đồng ý gắn cố định vĩnh viễn răng sứ trên cung hàm)."
              : "We accept cash, bank transfers, and international credit cards (VISA/Mastercard). Fees are split into two stages (Stage 1: 70% paid after enamel prep and digital scans; Stage 2: 30% paid after you approve final smile aesthetics and before permanent cementation)."}
          </p>
        </div>
      </section>

      {/* 9. Warranty Policy */}
      <section className="bg-slate-50 border border-slate-100 rounded-3xl p-8 sm:p-10 space-y-6">
        <h2 className="text-xl sm:text-2xl font-serif font-extrabold text-dark-brand text-center">
          {isVN ? "9. Chính sách bảo hành Smile Makeover" : "9. Comprehensive Esthetic Warranty"}
        </h2>
        <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">
          {isVN
            ? "Vì Smile Makeover kết hợp nhiều hạng mục, mỗi răng dán sứ hoặc mão sứ trong kế hoạch của bạn sẽ có thời hạn bảo hành riêng biệt theo loại vật liệu sứ tương ứng (Veneer Emax bảo hành 10 năm, răng sứ Zirconia bảo hành 7 năm). Hồ sơ bệnh án bàn giao cuối cùng sẽ ghi chi tiết thời hạn bảo hành cho từng răng."
            : "Since a smile makeover integrates different clinical modules, each veneer or crown carries its own warranty based on materials selected (E.max veneers carry a 10-year warranty, while Zirconia crowns have a 7-year warranty). Your final case folder lists coverage per restoration."}
        </p>
        <div className="bg-amber-50/20 border border-amber-200 rounded-2xl p-6 flex gap-3 items-start">
          <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
            {isVN
              ? "Lưu ý loại trừ: Các dịch vụ như tẩy trắng răng chuyên sâu (phụ thuộc vào cơ địa và men răng tự nhiên của mỗi người) và chỉnh hình lợi thẩm mỹ (dịch vụ phẫu thuật tạo hình mô) không nằm trong chính sách bảo hành kỹ thuật."
              : "Warranty Exclusions: Procedures such as teeth bleaching (shade retention varies by enamel type) and cosmetic laser gingival contouring (soft tissue reshaping) are not covered by mechanical component warranties."}
          </p>
        </div>
      </section>

      {/* 10. FAQ Section */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-dark-brand text-center">
          {isVN ? "10. Câu hỏi thường gặp về Smile Makeover" : "10. Frequently Asked Questions"}
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
            {isVN ? "Kiến tạo nụ cười hoàn mỹ — Trải nghiệm đẳng cấp quốc tế" : "Design Your Dream Smile in Hanoi – Save Up to 70%"}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
            {isVN 
              ? "Hãy gửi cho chúng tôi 3 tấm ảnh chụp khuôn mặt góc nghiêng, ảnh cười thoải mái và ảnh chụp cận răng của bạn. Dr. Nguyễn Huy Hoàng sẽ tiến hành phân tích sơ bộ và gửi đề xuất kế hoạch điều trị chi tiết miễn phí trong vòng 24–48 giờ."
              : "Send us 3 photos: your profile, a full smile photo, and a close-up of your teeth. Our esthetic board, directed by Dr. Nguyen Huy Hoang, will analyze your smile and send a customized proposal within 24 to 48 hours."}
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link 
              href="/contact" 
              className="bg-teal-brand hover:bg-teal-brand-hover text-[#0b1e2c] font-bold px-8 py-3.5 rounded-full text-xs sm:text-sm transition-all shadow-lg hover:scale-105"
            >
              {isVN ? "Đăng Ký Tư Vấn Nụ Cười" : "Book Free Smile Assessment"}
            </Link>
            <a
              href="https://wa.me/84963333844"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-7 py-3.5 rounded-full text-xs sm:text-sm transition-all inline-flex items-center gap-2"
            >
              <span>WhatsApp (+84 963 333 844)</span>
            </a>
            <Link 
              href="/warranty" 
              className="text-slate-300 hover:text-white px-4 py-3.5 text-xs sm:text-sm transition-all flex items-center gap-1.5 font-medium"
            >
              {isVN ? "Xem Chính sách Bảo hành" : "Read Warranty Terms"}
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
