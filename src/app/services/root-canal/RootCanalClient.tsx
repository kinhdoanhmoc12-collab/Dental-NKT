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
  ChevronDown, 
  ChevronUp, 
  Sparkles,
  ArrowRight,
  Smartphone
} from "lucide-react";

export default function RootCanalClient() {
  const { lang } = useLanguage();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const isVN = lang === "VN";

  React.useEffect(() => {
    document.title = isVN 
      ? "Điều trị tủy răng (Root Canal) — Cứu răng thật | DentalNKT"
      : "Root Canal Therapy — Saving Your Tooth | DentalNKT";

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", isVN 
        ? "Dịch vụ điều trị tủy răng chuyên sâu dưới kính hiển vi tại DentalNKT giúp loại bỏ ổ nhiễm trùng triệt để và bảo tồn tối đa cấu trúc răng thật tự nhiên."
        : "Advanced microscopic root canal therapy at DentalNKT targets dental infections to relieve pain and preserve your natural tooth structure."
      );
    }
  }, [isVN]);

  // FAQ Items
  const faqItems = [
    {
      q: isVN 
        ? "Điều trị tủy răng có đau không?" 
        : "Does root canal treatment hurt?",
      a: isVN 
        ? "Thủ thuật được thực hiện với thuốc gây tê tại chỗ hiệu quả cao nên bạn sẽ không cảm thấy đau trong suốt quá trình bác sĩ thao tác. Sau khi hết thuốc tê, cảm giác ê buốt nhẹ đến trung bình trong vòng 48–72 giờ đầu là phản ứng sinh lý hoàn toàn bình thường và có thể dễ dàng kiểm soát bằng thuốc giảm đau thông thường do bác sĩ kê đơn."
        : "The procedure is performed under highly effective local anesthesia, so you will feel no pain during treatment. After the anesthetic wears off, mild to moderate sensitivity for 48-72 hours is a normal physiological response and is easily managed with standard over-the-counter pain relievers."
    },
    {
      q: isVN 
        ? "Tôi có bắt buộc phải bọc mão răng sứ sau khi chữa tủy không?" 
        : "Do I absolutely need a crown after a root canal?",
      a: isVN 
        ? "Đối với răng hàm và răng tiền hàm (chịu lực nhai chính), việc bọc mão sứ gần như là bắt buộc. Răng đã lấy tủy không còn nguồn nuôi dưỡng sẽ trở nên giòn, mất nước và rất dễ nứt vỡ dọc chân răng dưới lực nhai mạnh. Răng cửa đôi khi có thể không cần bọc mão nếu phần mô răng thật còn lại đủ dày và chắc chắn, chỉ cần hàn trám composite thẩm mỹ."
        : "For molars and premolars (which bear the brunt of chewing forces), a crown is highly recommended. A root-filled tooth becomes brittle and dry, making it prone to vertical fractures under heavy loads. Front teeth may occasionally be restored with composite bonding instead of a crown if sufficient healthy structure remains."
    },
    {
      q: isVN 
        ? "Điều trị tủy và bọc mão răng sứ có làm được trong cùng một chuyến đi không?" 
        : "Can I get a root canal and a crown in the same trip?",
      a: isVN 
        ? "Có. Đây là phác đồ điều trị tiêu chuẩn tại DentalNKT cho khách hàng nước ngoài. Quy trình gồm: Ngày 1-2 điều trị tủy răng triệt để, Ngày 3 mài răng và lấy dấu cùi răng, Ngày 4-7 labo chế tác mão sứ chính xác và Ngày 7-8 tiến hành gắn mão sứ vĩnh viễn, chỉnh khớp cắn hoàn thiện. Thời gian lưu trú tối thiểu khuyến nghị là từ 7 đến 8 ngày."
        : "Yes. This is the standard protocol at DentalNKT for international dental travelers. The timeline involves: Day 1-2 root canal cleaning, Day 3 post placement & crown prep scans, Day 4-7 custom crown laboratory fabrication, and Day 7-8 final crown cementation & bite tuning. We recommend a minimum stay of 7 to 8 days."
    },
    {
      q: isVN 
        ? "Tôi đang bị đau nhức răng dữ dội, có nên đặt vé bay ngay sang Việt Nam không?" 
        : "I am in severe pain. Should I book a flight to Vietnam immediately?",
      a: isVN 
        ? "Không nên. Nếu bạn đang có ổ áp xe sưng mủ, sốt hoặc sưng má mặt, tuyệt đối không được bay ngay. Sự thay đổi áp suất trong cabin máy bay khi cất cánh sẽ làm tăng áp lực tủy nhiễm trùng, gây ra cơn đau buốt cấp tính dữ dội cực kỳ nguy hiểm. Bạn hãy đến nha sĩ địa phương tại Úc trước để kê đơn kháng sinh kiểm soát ổ viêm cấp, rạch dẫn lưu nếu cần và đặt thuốc dịu tủy tạm thời, sau đó mới lên lịch bay."
        : "No. If you have active swelling, an abscess, or a fever, do not fly immediately. Cabin pressure fluctuations during flight can severely aggravate acute pulp pressure, causing agonizing pain and risk of infection spread. See a local dentist in Australia first for emergency drainage, antibiotic control, and temporary dressing before booking your travel."
    },
    {
      q: isVN 
        ? "Nếu sau khi khám răng không thể cứu được bằng cách chữa tủy thì sao?" 
        : "What happens if my tooth cannot be saved by a root canal?",
      a: isVN 
        ? "Bác sĩ sẽ chẩn đoán chính xác bằng phim chụp X-quang và phim CT Cone Beam 3D ngay buổi khám đầu tiên. Nếu chân răng nứt sâu dưới nướu hoặc tiêu xương chân răng quá nặng (trên 50%), việc chữa tủy sẽ không còn hiệu quả. Bác sĩ sẽ tư vấn nhổ bỏ và đề xuất giải pháp thay thế như cấy ghép implant tức thì để khôi phục chân răng, tránh tiêu xương hàm."
        : "Our doctors will diagnose the tooth using digital X-rays and 3D CT scans on Day 1. If there is a deep vertical root fracture below the bone line or bone loss exceeds 50%, a root canal cannot save the tooth. In such cases, we will recommend extraction and suggest a dental implant placement to restore function and prevent bone resorption."
    },
    {
      q: isVN 
        ? "Điều trị tủy răng tại DentalNKT có được bảo hành khi tôi đã về nước không?" 
        : "Is the root canal treatment under warranty once I return home?",
      a: isVN 
        ? "Có. DentalNKT áp dụng chính sách bảo hành kỹ thuật 1 năm cho kết quả điều trị tủy. Điều kiện bắt buộc là răng điều trị tủy phải được bọc mão sứ bảo vệ trong vòng 3 tháng kể từ ngày chữa tủy. Chính sách bảo hành sẽ bị từ chối nếu răng bị nứt vỡ do không bọc mão bảo vệ theo đúng khuyến nghị của bác sĩ hoặc có sự can thiệp từ phòng khám khác."
        : "Yes, we offer a 1-year technical warranty on our root canal treatments. However, this warranty is strictly conditional upon placing a protective crown over the treated tooth within 3 months post-treatment. If the tooth splits due to chewing forces because a crown was not placed as advised, the warranty will not apply."
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
              <span>{isVN ? "ĐIỀU TRỊ TỦY DƯỚI KÍNH HIỂN VI" : "MICROSCOPIC ENDODONTIC THERAPY"}</span>
            </span>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-white leading-tight">
              {isVN 
                ? "Điều Trị Tủy — Cứu Răng Thật Thay Vì Nhổ Bỏ" 
                : "Root Canal Therapy — Save Your Tooth Instead of Extraction"}
            </h1>
            
            <p className="text-sm sm:text-base text-slate-200 font-normal leading-relaxed">
              {isVN 
                ? "Điều trị tủy (chữa tủy răng) là thủ thuật loại bỏ mô tủy bị viêm nhiễm hoặc hoại tử sâu bên trong răng, sau đó làm sạch, tạo hình và hàn kín để chấm dứt cơn đau buốt. Mục tiêu điều trị là khống chế ổ viêm nhiễm và bảo tồn tối đa cấu trúc răng thật tự nhiên."
                : "Root canal therapy removes inflamed, infected, or necrotic pulp tissue from deep inside the root canals to relieve severe pain. The clinical objective is to eliminate the source of infection and preserve the natural tooth structure."}
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-slate-700/80 w-full">
              <div>
                <span className="text-xs text-slate-300 block font-medium">
                  {isVN ? "Chi phí chữa tủy trọn gói từ:" : "Root Canal Prices Start at:"}
                </span>
                <span className="text-xl sm:text-2xl font-extrabold text-teal-brand">
                  {isVN ? "$68 USD / răng" : "$98 AUD / tooth"}
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

      {/* 1. Should I Save or Extract - Comparative Section */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#0b1e2c]">
          {isVN ? "1. Nên giữ răng (điều trị tủy) hay nhổ bỏ?" : "1. Save the Tooth (Root Canal) or Extract?"}
        </h2>
        <p className="text-sm sm:text-base text-slate-700 font-light leading-relaxed">
          {isVN 
            ? "Giữ răng thật luôn là ưu tiên hàng đầu trong nha khoa hiện đại vì không có răng giả nào thay thế hoàn hảo được cảm giác ăn nhai tự nhiên. Bảng dưới đây mô tả logic bác sĩ sẽ áp dụng để đánh giá tình trạng răng của bạn:"
            : "Preserving your natural teeth is always the gold standard in modern dentistry. No prosthetic can replicate the exact bite sensation and bone stimulation of natural tooth structure. Here is how our clinical team assesses your options:"}
        </p>

        <div className="border border-slate-200 rounded-3xl overflow-hidden bg-white shadow-sm overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-[#0b1e2c] text-white font-serif text-xs uppercase tracking-wider">
                <th className="p-4 border-b border-slate-800 w-[55%]">{isVN ? "Tình trạng răng miệng thực tế" : "Clinical Teeth Condition"}</th>
                <th className="p-4 border-b border-slate-800 text-center">{isVN ? "Khuyến nghị điều trị" : "Clinical Indication Recommendation"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-800 font-medium">
              {[
                {
                  condVN: "Răng còn đủ mô cứng (thân răng) để bọc mão sứ bảo vệ sau điều trị tủy.",
                  condEN: "Tooth possesses sufficient healthy enamel and dentin to support a post-treatment crown.",
                  recVN: "✅ NÊN GIỮ — Tiến hành chữa tủy triệt để và bọc mão bảo vệ.",
                  recEN: "✅ KEEP TOOTH — Perform root canal therapy followed by a protective crown placement."
                },
                {
                  condVN: "Răng bị nứt vỡ sâu xuống dưới đường viền nướu hoặc gãy đôi chân răng.",
                  condEN: "Fracture lines extend vertically deep below the gum line or split the root structure.",
                  recVN: "❌ NÊN NHỔ — Điều trị tủy không thể giúp răng đứng vững lâu dài trên cung hàm.",
                  recEN: "❌ EXTRACT TOOTH — Root canal treatment cannot guarantee structural long-term survival."
                },
                {
                  condVN: "Chân răng bị viêm nhiễm tiêu xương hàm nghiêm trọng (tiêu xương trên 50%).",
                  condEN: "Severe periodontal bone loss (exceeding 50% height) around the tooth root structure.",
                  recVN: "⚠️ CÂN NHẮC KỸ — Cần chẩn đoán lâm sàng chuyên sâu, tỷ lệ phải nhổ khá cao.",
                  recEN: "⚠️ CAUTION — Requires close examination; prognosis is guarded and extraction is likely."
                },
                {
                  condVN: "Răng hàm bị mất hoặc bị hư hại nặng, trong khi các răng lân cận còn rất khỏe mạnh.",
                  condEN: "First or second load-bearing molar is damaged, while adjacent teeth remain healthy.",
                  recVN: "✅ NÊN GIỮ — Mất răng hàm sẽ gây xô lệch cả cung răng và làm quá tải lực nhai răng bên cạnh.",
                  recEN: "✅ KEEP TOOTH — Molar loss leads to adjacent teeth shifting and chewing load imbalances."
                },
                {
                  condVN: "Răng khôn (răng số 8) bị viêm tủy sâu.",
                  condEN: "Third molar (wisdom tooth) with irreversible pulpitis or decay.",
                  recVN: "❌ NÊN NHỔ — Răng khôn không có chức năng ăn nhai chính và cực kỳ khó vệ sinh chữa tủy.",
                  recEN: "❌ EXTRACT TOOTH — Wisdom teeth are non-functional and highly difficult to clean and treat."
                }
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 bg-slate-50/50 text-slate-800 font-bold">{isVN ? row.condVN : row.condEN}</td>
                  <td className="p-4 text-slate-800 font-semibold">{isVN ? row.recVN : row.recEN}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 2. Pre-flight Alert Warning callout */}
      <section className="bg-amber-50 border border-amber-100 p-6 sm:p-10 rounded-3xl flex flex-col md:flex-row gap-6 items-start">
        <div className="bg-amber-100 p-3 rounded-2xl text-amber-700 shrink-0">
          <AlertTriangle className="w-8 h-8" />
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-serif font-extrabold text-amber-900">
            {isVN ? "Cảnh báo trước khi bay: Kiểm soát cơn đau cấp tính ở Úc trước" : "Pre-Flight Warning: Manage Acute Pain in Australia First"}
          </h3>
          <div className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed space-y-2">
            <p>
              {isVN
                ? "Lời khuyên quan trọng nhất: Tuyệt đối không bay khi đang có áp xe sưng mủ lớn hoặc viêm tủy cấp tính chưa được can thiệp y tế. Sự thay đổi áp suất khí quyển đột ngột trong khoang cabin máy bay khi cất cánh sẽ làm tăng áp suất tủy răng bị nghẹt, gây ra cơn đau buốt cấp tính dữ dội cực kỳ đau đớn cho bạn trên suốt chuyến bay."
                : "Crucial Advice: Do not board a flight with an untreated dental abscess, severe active swelling, or acute pulpitis. Atmospheric pressure changes in the aircraft cabin during ascent can severely aggravate trapped gas and pulp pressure, causing excruciating, unmanageable pain mid-flight."}
            </p>
            <p>
              {isVN
                ? "If you are experiencing severe throbbing pain or facial swelling, visit a local dentist in Australia first to: 1. Prescribe antibiotics to contain the active infection; 2. Perform minor emergency drainage; 3. Place a temporary sedative dressing. Once the acute inflammation is controlled, it is safe to fly to Vietnam for the comprehensive treatment."
                : "Nếu bạn đang bị sưng nhức mặt dữ dội, hãy đến ngay nha sĩ tại địa phương (Úc) trước khi bay để: 1. Kê kháng sinh khống chế ổ nhiễm trùng cấp; 2. Rạch dẫn lưu mủ để giảm sưng áp lực; 3. Đặt thuốc giảm đau tủy tạm thời. Khi giai đoạn sưng viêm cấp đã ổn định, bạn mới nên bay sang Việt Nam để thực hiện quy trình chữa tủy chính thức."}
            </p>
            <p className="text-amber-800 font-bold italic">
              {isVN 
                ? "* Lưu ý lịch trình: Nếu răng bạn có dấu hiệu nhiễm trùng nặng, hãy dự phòng thêm 2–3 ngày trong kế hoạch chuyến đi (ví dụ thay vì 7 ngày hãy lên lịch trình từ 9-10 ngày) để bác sĩ có thời gian theo dõi sát tình trạng phục hồi xương chân răng."
                : "* Schedule Tip: If you suspect an active infection, add 2-3 contingency days to your itinerary (e.g. scheduling a 9-10 day stay instead of 7 days) to allow safe window tracking before cementing permanent crowns."}
            </p>
          </div>
        </div>
      </section>

      {/* 3. Single-Trip Treatment Timeline */}
      <section className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-serif font-extrabold text-[#0b1e2c] text-center">
          {isVN ? "2. Quy trình & Lộ trình điều trị chữa tủy + bọc mão" : "2. Root Canal + Crown Single-Trip Treatment Timeline"}
        </h2>
        <p className="text-xs sm:text-sm text-slate-700 font-semibold leading-relaxed text-center max-w-2xl mx-auto">
          {isVN 
            ? "Để tối ưu chi phí đi lại, DentalNKT thiết kế phác đồ chữa tủy triệt để kết hợp bọc mão sứ răng hàm trong cùng một chuyến đi với lịch trình cụ thể như sau:"
            : "To maximize your travel efficiency, our clinical board plans root canal cleaning and crown restoration within a single-trip window:"}
        </p>

        <div className="border border-slate-200 rounded-3xl overflow-hidden bg-white shadow-sm overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-[#0b1e2c] text-white font-serif text-xs uppercase tracking-wider">
                <th className="p-4 border-b border-slate-800 w-[20%]">{isVN ? "Thời gian" : "Timeline"}</th>
                <th className="p-4 border-b border-slate-800">{isVN ? "Nội dung điều trị chi tiết" : "Clinical Steps & Procedures"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-800 font-semibold">
              {[
                {
                  day: isVN ? "Ngày 1" : "Day 1",
                  stepVN: "Thăm khám lâm sàng, chụp phim X-quang tại chỗ và quét CT Cone Beam 3D để xác nhận chẩn đoán cấu trúc tủy chân răng.",
                  stepEN: "Comprehensive exam, diagnostic X-rays, and 3D CT scans to confirm root canal count and bone density status."
                },
                {
                  day: isVN ? "Ngày 2" : "Day 2",
                  stepVN: "Mở tủy, loại bỏ hoàn toàn tủy viêm, làm sạch cơ học và bơm rửa hóa học các ống tủy (khoảng 1 - 2 giờ tùy độ phức tạp của răng).",
                  stepEN: "Pulp chamber opening, mechanical canal shaping, chemical disinfection, and placement of antibacterial dressing (1-2 hours)."
                },
                {
                  day: isVN ? "Ngày 3" : "Day 3",
                  stepVN: "Hàn kín ống tủy bằng côn Gutta Percha nóng chảy. Đặt chốt sợi thạch anh gia cố (fiber post) và mài lấy dấu cùi răng bằng máy quét 3D.",
                  stepEN: "Canal obturation with warm gutta-percha. Fiber post reinforcement if needed, tooth prep, and digital impression scanning."
                },
                {
                  day: isVN ? "Ngày 4 – 7" : "Day 4 – 7",
                  stepVN: "Hệ thống Labo tại xưởng chế tác mão sứ CAD/CAM (3–4 ngày làm việc). Bệnh nhân đeo răng tạm để ăn nhai nhẹ và đi du lịch.",
                  stepEN: "Laboratory fabrication of your custom porcelain crown (3-4 business days). Temporary crown is placed for basic chewing."
                },
                {
                  day: isVN ? "Ngày 7 – 8" : "Day 7 – 8",
                  stepVN: "Thử mão răng sứ, điều chỉnh khớp cắn và tiến hành gắn cố định vĩnh viễn bằng xi măng nha khoa chuyên dụng.",
                  stepEN: "Porcelain crown try-in, micro-bite alignment checks, and permanent cementation. Treatment finalized."
                }
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 bg-slate-50/50 text-slate-800 font-extrabold flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-teal-brand" />
                    <span>{row.day}</span>
                  </td>
                  <td className="p-4 leading-relaxed text-slate-800 font-medium">{isVN ? row.stepVN : row.stepEN}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="text-center">
          <span className="inline-flex items-center gap-2 bg-teal-brand-light/35 border border-teal-brand-light text-slate-800 font-bold py-2 px-6 rounded-full text-xs sm:text-sm">
            <Clock className="w-4 h-4 text-teal-brand" />
            <span>{isVN ? "Thời gian lưu trú tối thiểu khuyến nghị: 7–8 ngày / 1 răng." : "Recommended stay duration for 1 tooth: 7–8 days."}</span>
          </span>
        </div>
      </section>

      {/* 4. Risks & Aftercare */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <h3 className="font-serif text-xl font-bold text-[#0b1e2c]">
            {isVN ? "3. Rủi ro & Những điều cần lưu ý" : "3. Risks & Clinical Considerations"}
          </h3>
          <ul className="space-y-4">
            <li className="flex gap-3 items-start">
              <Check className="w-5 h-5 text-teal-brand shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-slate-800">{isVN ? "Ê buốt nhẹ tạm thời" : "Post-op Soreness"}</h4>
                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                  {isVN 
                    ? "Cảm giác hơi ê tức chân răng trong 2-3 ngày đầu là bình thường do phản ứng bù khoáng của mô quanh răng." 
                    : "Mild discomfort for 48-72 hours is common as periapical tissues heal; manageable with standard pain relief."}
                </p>
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <Check className="w-5 h-5 text-teal-brand shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-slate-800">{isVN ? "Răng giòn, dễ vỡ dọc nếu không bọc mão" : "High Risk of Untreated Fractures"}</h4>
                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                  {isVN
                    ? "Răng mất tủy mất đi sự đàn hồi tự nhiên. Ăn nhai đồ cứng mà không có mão bảo vệ có thể làm vỡ chân răng không thể phục hồi."
                    : "A root-filled tooth becomes dehydrated and brittle. Chewing hard foods without a crown can cause catastrophic root splits."}
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="space-y-6 bg-slate-50 border border-slate-100 p-6 sm:p-8 rounded-3xl">
          <h3 className="font-serif text-xl font-bold text-[#0b1e2c]">
            {isVN ? "Giới hạn lâm sàng của chữa tủy" : "Clinical Limitations"}
          </h3>
          <ul className="space-y-3">
            <li className="flex gap-2.5 items-start text-xs text-slate-600 font-semibold">
              <AlertTriangle className="w-4.5 h-4.5 text-amber-600 shrink-0 mt-0.5" />
              <span>{isVN ? "Không đạt kết quả tuyệt đối 100% nếu hệ thống ống tủy bị xơ hóa hoặc cong bất thường." : "Cannot guarantee 100% success if root canals are calcified, severely curved, or inaccessible."}</span>
            </li>
            <li className="flex gap-2.5 items-start text-xs text-slate-600 font-semibold">
              <AlertTriangle className="w-4.5 h-4.5 text-amber-600 shrink-0 mt-0.5" />
              <span>{isVN ? "Răng chữa tủy ở vùng răng thẩm mỹ trước có thể đổi màu xỉn tối dần theo thời gian." : "Root-filled teeth in front aesthetic zones may slowly darken, requiring internal bleaching or crowns."}</span>
            </li>
            <li className="flex gap-2.5 items-start text-xs text-slate-600 font-semibold">
              <AlertTriangle className="w-4.5 h-4.5 text-amber-600 shrink-0 mt-0.5" />
              <span>{isVN ? "Viêm tủy quanh chóp mãn tính có thể tái phát sau nhiều năm, cần phẫu thuật cắt chóp răng." : "Chronic periapical lesions may flare up years later, necessitating endodontic retreatment or apicoectomy."}</span>
            </li>
          </ul>
        </div>
      </section>

      {/* 5. Pricing Section */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#0b1e2c] text-center">
          {isVN ? "4. Chi phí điều trị tủy răng tại DentalNKT" : "4. Root Canal & Restoration Price Guide"}
        </h2>
        <div className="border border-slate-200 rounded-3xl overflow-hidden bg-white shadow-sm overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-[#0b1e2c] text-white font-serif text-xs uppercase tracking-wider">
                <th className="p-4 border-b border-slate-800">{isVN ? "Vị trí răng / Gói điều trị phục hồi" : "Tooth Position / Combined Restoration Package"}</th>
                <th className="p-4 border-b border-slate-800 text-center">{isVN ? "Số ống tủy" : "Canals Count"}</th>
                <th className="p-4 border-b border-slate-800 text-right">{isVN ? "Đơn giá (USD)" : "Price (USD)"}</th>
                <th className="p-4 border-b border-slate-800 text-right">{isVN ? "Đơn giá (AUD)" : "Price (AUD)"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-800 font-medium">
              {[
                {
                  name: isVN ? "Điều trị tủy răng cửa / răng nanh" : "Anterior / Canine Root Canal Treatment",
                  canals: "1",
                  usd: "$68 – $91 USD",
                  aud: "$98 – $130 AUD"
                },
                {
                  name: isVN ? "Điều trị tủy răng hàm nhỏ (răng tiền hàm)" : "Premolar Root Canal Treatment",
                  canals: "1 – 2",
                  usd: "$82 – $137 USD",
                  aud: "$117 – $195 AUD"
                },
                {
                  name: isVN ? "Điều trị tủy răng hàm lớn (mức 1 – mức 2)" : "Molar Root Canal Treatment (Level 1-2)",
                  canals: "3 – 4",
                  usd: "$114 – $160 USD",
                  aud: "$160 – $228 AUD"
                },
                {
                  name: isVN ? "Combo: Chữa tủy răng hàm lớn + Mão sứ Ceramil (Khuyến nghị)" : "Combo: Molar Root Canal + Ceramil Crown (Recommended)",
                  canals: "3 – 4",
                  usd: "$388 USD",
                  aud: "$553 AUD"
                },
                {
                  name: isVN ? "Combo trọn gói: 3 răng hàm chữa tủy + 3 mão sứ Ceramil" : "Combo Package: 3 Molar Root Canals + 3 Ceramil Crowns",
                  canals: "9 – 12",
                  usd: "$1,164 USD",
                  aud: "$1,659 AUD"
                }
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-slate-800 bg-slate-50/50">{row.name}</td>
                  <td className="p-4 text-center font-semibold text-slate-800">{row.canals}</td>
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
            <p>{isVN ? "* Chi phí bao gồm: Khám lâm sàng, chụp phim X-quang kỹ thuật số, thuốc kê đơn điều trị tủy." : "* Inclusions: Clinical exams, diagnostic digital X-rays, local anesthesia, and prescription medicine."}</p>
            <p>{isVN ? "* Chi phí chưa bao gồm: Mão sứ bảo vệ sau điều trị tủy (nếu mua riêng), chốt sợi thạch anh phục hồi thân răng." : "* Exclusions: Protective crowns (unless booked as a combo package) and custom fiber reinforcement posts."}</p>
          </div>
        </div>
      </section>

      {/* 6. Doctor profile */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
        <div className="md:col-span-8 space-y-4">
          <span className="bg-teal-brand/10 text-teal-brand text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            {isVN ? "BÁC SĨ PHỤ TRÁCH CHUYÊN MÔN" : "LEAD CLINICAL ENDODONTIST"}
          </span>
          <h3 className="font-serif text-2xl font-extrabold text-[#0b1e2c]">
            Dr. Nguyễn Huy Hoàng
          </h3>
          <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
            {isVN
              ? "Bác sĩ Nguyễn Huy Hoàng tốt nghiệp chính quy Đại học Y Hà Nội năm 2011, là Trưởng khoa Cấy ghép Implant & Phục hình tại DentalNKT với hơn 15 năm kinh nghiệm lâm sàng. Bác sĩ Hoàng chuyên sâu về các kỹ thuật nội nha vi phẫu phức tạp dưới sự hỗ trợ của kính hiển vi nha khoa phẫu thuật giúp bảo tồn tối đa ngà răng lành cho bệnh nhân."
              : "Dr. Nguyen Huy Hoang graduated from Hanoi Medical University in 2011 and serves as the Head of Implantology & Oral Rehabilitation at DentalNKT with over 15 years of clinical experience. He specializes in advanced microscopic endodontics, utilizing high-precision surgical microscopes to preserve healthy tooth tissue."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <span className="text-xs text-slate-600 font-bold">
              {isVN ? "Số chứng chỉ hành nghề:" : "Practicing License No:"} <code className="text-teal-brand font-mono font-bold bg-teal-brand/5 px-2.5 py-1 rounded">009235/BYT-CCHN</code> (Đã xác minh / Verified)
            </span>
          </div>
        </div>
        <div className="md:col-span-4 bg-teal-brand-light/30 border border-teal-brand-light p-6 rounded-2xl space-y-2 text-center flex flex-col items-center justify-center">
          <Stethoscope className="w-8 h-8 text-teal-brand" />
          <h4 className="text-xs font-bold text-[#0b1e2c]">{isVN ? "Tiêu chuẩn vô trùng Bộ Y Tế" : "Sterile Clinical Standard"}</h4>
          <p className="text-xs text-slate-600 font-semibold leading-relaxed">
            {isVN ? "Phòng phẫu thuật nội nha luôn đạt kiểm soát nhiễm khuẩn vô trùng nghiêm ngặt." : "All endodontic treatments are conducted in sterile, class-B autoclave environments."}
          </p>
        </div>
      </section>

      {/* 7. Payment methods & Warranty info */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-slate-50/50 border border-slate-100 p-6 sm:p-8 rounded-3xl space-y-4">
          <h3 className="font-serif text-lg font-bold text-[#0b1e2c] border-b border-slate-200 pb-2">
            {isVN ? "Chính sách Bảo hành kỹ thuật" : "Technical Warranty Policy"}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
            {isVN
              ? "Kết quả điều trị tủy tại DentalNKT được bảo hành kỹ thuật trong thời hạn 1 năm. Điều kiện bắt buộc là răng chữa tủy phải được bọc mão sứ bảo vệ trong vòng 3 tháng. Nếu khách hàng không bọc mão theo đúng thời hạn chỉ định và răng bị nứt vỡ dọc dưới nướu do lực nhai mạnh, trường hợp này sẽ không được hưởng chính sách bảo hành."
              : "Root canal treatments are backed by a 1-year technical warranty. For this warranty to remain active, a protective crown must be cemented over the treated tooth within 3 months. If the tooth splits due to chewing loads because a crown was not placed as advised, it is excluded from our warranty policy."}
          </p>
        </div>
        <div className="bg-slate-50/50 border border-slate-100 p-6 sm:p-8 rounded-3xl space-y-4">
          <h3 className="font-serif text-lg font-bold text-[#0b1e2c] border-b border-slate-200 pb-2">
            {isVN ? "Phương thức Thanh toán" : "Payment Options"}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
            {isVN
              ? "Chúng tôi chấp nhận linh hoạt thanh toán bằng USD hoặc AUD thông qua tiền mặt, chuyển khoản ngân hàng hoặc thẻ tín dụng quốc tế. Hóa đơn chi tiết tách riêng từng mã dịch vụ sẽ được cung cấp đầy đủ sau khi hoàn tất điều trị."
              : "We accept payments in USD or AUD via Cash, Bank Transfer, or Credit Card. A detailed itemized invoice will be provided upon completion of your treatment."}
          </p>
        </div>
      </section>

      {/* 8. FAQ Section */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#0b1e2c] text-center">
          {isVN ? "5. Câu hỏi thường gặp về Điều trị tủy" : "5. Frequently Asked Questions"}
        </h2>
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqItems.map((item, idx) => (
            <div key={idx} className="border border-slate-150 rounded-2xl overflow-hidden bg-white">
              <button
                onClick={() => toggleFaq(idx)}
                id={`faq-btn-${idx}`}
                aria-expanded={activeFaq === idx}
                aria-controls={`faq-panel-${idx}`}
                className="w-full px-6 py-4 text-left font-serif font-bold text-sm sm:text-base text-[#0b1e2c] hover:text-teal-brand transition-colors flex justify-between items-center bg-slate-50/50 cursor-pointer border-none outline-none"
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

      {/* 9. Call To Action Footer */}
      <section className="bg-gradient-to-br from-[#0b1e2c] via-[#0f2a3f] to-[#0b1e2c] text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-teal-brand/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-teal-brand/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-2xl mx-auto space-y-4">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold">
            {isVN ? "Điều trị tủy bảo tồn — Khôi phục chức năng ăn nhai" : "Conservative Root Canal Treatment – Restore Chewing Function"}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
            {isVN 
              ? "Bạn có phim chụp X-quang hoặc đang có triệu chứng đau nhức răng cấp tính? Gửi ngay thông tin để bác sĩ chuyên khoa DentalNKT tư vấn lâm sàng từ xa và báo giá điều trị chi tiết miễn phí cho bạn."
              : "Have a dental X-ray or experiencing active tooth pain? Send us details to get a free remote diagnostic analysis and transparent treatment quote within 24-48 hours."}
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link 
              href="/contact" 
              className="bg-teal-brand hover:bg-teal-brand-hover text-[#0b1e2c] font-bold px-8 py-3.5 rounded-full text-xs sm:text-sm transition-all shadow-lg hover:scale-105 inline-flex items-center gap-1.5"
            >
              <span>{isVN ? "Đăng Ký Tư Vấn Miễn Phí" : "Get Free Consultation"}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a 
              href="https://wa.me/84963333844" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-7 py-3.5 rounded-full text-xs sm:text-sm transition-all inline-flex items-center gap-2"
            >
              <Smartphone className="w-4 h-4 text-teal-brand" />
              <span>WhatsApp (+84 963 333 844)</span>
            </a>
            <Link 
              href="/services/crowns" 
              className="text-slate-300 hover:text-white px-4 py-3.5 text-xs sm:text-sm transition-all flex items-center gap-1.5 font-medium"
            >
              {isVN ? "Xem trang Mão răng sứ" : "View Dental Crowns Page"}
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
