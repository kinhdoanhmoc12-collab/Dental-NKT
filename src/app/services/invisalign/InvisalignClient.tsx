"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "../../../context/LanguageContext";
import { 
  ArrowLeft, 
  Info, 
  ChevronDown, 
  ChevronUp, 
  Sparkles,
  ArrowRight,
  Smartphone
} from "lucide-react";

export default function InvisalignClient() {
  const { lang } = useLanguage();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const isVN = lang === "VN";

  React.useEffect(() => {
    document.title = isVN 
      ? "Niềng răng Invisalign (Khay trong suốt) | DentalNKT"
      : "Invisalign Clear Aligners | DentalNKT";

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", isVN 
        ? "Niềng răng Invisalign phối hợp từ xa tại DentalNKT giúp bệnh nhân tiết kiệm thời gian. Khởi động tại Việt Nam và tiếp tục tự điều chỉnh tại nhà ở Úc."
        : "Invisalign remote orthodontic coordination at DentalNKT allows patients to initiate treatment in Vietnam and seamlessly continue at home in Australia."
      );
    }
  }, [isVN]);

  // FAQ Items
  const faqItems = [
    {
      q: isVN 
        ? "Niềng răng Invisalign tại Việt Nam có khác gì so với làm tại Úc không?" 
        : "Is Invisalign treatment in Vietnam different from Australia?",
      a: isVN 
        ? "Không có sự không giống nhau về mặt công nghệ. Invisalign là hệ thống chỉnh nha độc quyền toàn cầu của Align Technology (Mỹ). Dù bạn thực hiện ở đâu, khay niềng đều được sản xuất từ cùng một vật liệu nhựa sinh học SmartTrack và được lập kế hoạch di chuyển răng trên cùng một phần mềm 3D ClinCheck. Kết quả điều trị phụ thuộc hoàn toàn vào chuyên môn lập kế hoạch của bác sĩ chỉnh nha phụ trách, không phụ thuộc vào quốc gia thực hiện."
        : "Technically, there is no difference. Invisalign is a proprietary global system owned by Align Technology (USA). All aligners are fabricated using the same medical-grade SmartTrack material and designed via the same ClinCheck software regardless of country. The success of your treatment depends entirely on the clinical planning of your treating orthodontist, not where the office is located."
    },
    {
      q: isVN 
        ? "Tôi cần phải quay lại Việt Nam bao nhiêu lần trong suốt quá trình niềng răng?" 
        : "How many times do I need to return to Vietnam?",
      a: isVN 
        ? "Tùy thuộc vào độ phức tạp của ca chỉnh nha. Đối với nhiều ca lệch lạc nhẹ hoặc trung bình, bạn chỉ cần thực hiện 1 chuyến đi khởi động ban đầu (từ 2-4 ngày) để scan hàm và nhận những bộ khay đầu tiên. Các chuỗi khay tiếp theo sẽ được gửi qua bưu điện quốc tế đến Úc. Tuy nhiên, nếu răng dịch chuyển lệch hướng so với ClinCheck ban đầu (đòi hỏi phải quét hàm tinh chỉnh), bạn sẽ cần thêm 1 chuyến quay lại ngắn ngày."
        : "This depends on case complexity. For many mild to moderate cases, only 1 initial trip (2-4 days) is required to scan your arches and receive your first batch of aligners. Subsequent trays are shipped internationally to your address in Australia. If teeth do not track perfectly to the initial plan and require refinement scans, one short return trip might be necessary."
    },
    {
      q: isVN 
        ? "Nếu tôi không gửi ảnh theo dõi tiến độ răng đúng lịch thì sao?" 
        : "What happens if I fail to send progress photos on schedule?",
      a: isVN 
        ? "Việc gửi ảnh răng định kỳ là điều kiện tiên quyết để bác sĩ giám sát từ xa. Nếu bạn không gửi ảnh đúng hẹn, bác sĩ sẽ không thể phát hiện kịp thời các hiện tượng răng chạy lệch hướng so với khay niềng (off-track). Điều này có thể dẫn đến việc răng không dịch chuyển đúng đích, kéo dài tổng thời gian điều trị và làm giảm hiệu quả của chính sách hỗ trợ từ xa."
        : "Sending progress photos regularly is vital for remote clinical monitoring. Without these updates, our clinical team cannot detect tracking deviations early. This can cause teeth to shift incorrectly, extend your overall treatment duration, and compromise our ability to provide effective remote support."
    },
    {
      q: isVN 
        ? "Niềng răng Invisalign có tiết kiệm được nhiều chi phí so với làm tại Úc không?" 
        : "Does Invisalign offer significant savings compared to Australia?",
      a: isVN 
        ? "Mức tiết kiệm chi phí của Invisalign thường thấp hơn đáng kể so với các dịch vụ thẩm mỹ răng sứ (Veneer) hay cấy ghép răng (Implant). Lý do là vì hãng Invisalign áp dụng phí bản quyền phần mềm và phí chế tác khay cố định toàn cầu cho mọi phòng khám. Invisalign sẽ tối ưu chi phí nhất nếu bạn kết hợp chỉnh nha trong cùng một chuyến đi điều trị các dịch vụ nha khoa khác tại DentalNKT."
        : "The percentage savings for Invisalign are generally lower than for porcelain veneers or dental implants. This is due to fixed global licensing and manufacturing costs charged by Align Technology to all dental providers. Invisalign is most cost-effective when combined with other major dental procedures during your trip to DentalNKT."
    },
    {
      q: isVN 
        ? "Sau khi kết thúc quá trình niềng răng, tôi có phải đeo hàm duy trì suốt đời không?" 
        : "Do I need to wear a retainer forever after finishing?",
      a: isVN 
        ? "Có. Đây là quy luật sinh lý bắt buộc sau mọi ca chỉnh nha để tránh hiện tượng răng chạy lại vị trí cũ. Trong những tháng đầu tiên, bạn cần đeo hàm duy trì (Retainer) toàn thời gian (khoảng 20-22 tiếng/ngày). Sau đó, bác sĩ sẽ chỉ định giảm dần tần suất xuống chỉ đeo vào ban đêm khi ngủ để bảo tồn khớp cắn ổn định lâu dài."
        : "Yes. Retainers are medically necessary after any orthodontic treatment to prevent relapse. During the initial months, you must wear your retainer full-time (20-22 hours/day). Over time, our team will advise you to gradually reduce wear to only nighttime use during sleep to preserve your final alignment."
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
              <span>{isVN ? "CHỈNH NHA KHAY TRONG SUỐT" : "INVISIBLE ORTHODONTIC SYSTEMS"}</span>
            </span>
            
            <h1 className="text-3xl sm:text-4xl font-serif font-extrabold text-white leading-tight">
              {isVN 
                ? "Niềng Răng Invisalign — Khởi Động Tại Việt Nam, Tiếp Tục Tại Nhà" 
                : "Invisalign Aligners — Initiate in Vietnam, Continue at Home"}
            </h1>
            
            <p className="text-sm text-slate-300 font-light leading-relaxed">
              {isVN 
                ? "Invisalign là hệ thống khay niềng trong suốt thiết kế riêng bằng phần mềm Clincheck 3D. Đây là dịch vụ duy nhất tại DentalNKT mà phần lớn thời gian điều trị diễn ra khi bạn đã trở về nước. Bạn chỉ cần có mặt tại Việt Nam ở giai đoạn khởi động (scan hàm, duyệt phác đồ, nhận khay ban đầu), sau đó tự đeo khay và gửi ảnh theo dõi tiến trình tại nhà ở Úc."
                : "Invisalign utilizes custom 3D-engineered clear aligners. It is the only treatment at DentalNKT where the majority of active therapy takes place after you return home. You only visit our clinic for the initial setups (digital scanning, ClinCheck review, attachment placements), and manage subsequent tray changes at home in Australia."}
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-slate-700/80 w-full">
              <div>
                <span className="text-xs text-slate-400 block font-medium">
                  {isVN ? "Chi phí điều trị trọn gói từ" : "Full Invisalign Package Starts at"}
                </span>
                <span className="text-2xl font-extrabold text-teal-brand">
                  {isVN ? "$2,740 USD / trọn gói" : "$3,905 AUD / package"}
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

      {/* 1. Suitability Assessment */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#0b1e2c]">
          {isVN ? "1. Bạn có phù hợp với niềng răng Invisalign?" : "1. Are You a Candidate for Invisalign?"}
        </h2>
        <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
          {isVN 
            ? "Mức độ dịch chuyển răng bằng khay niềng phụ thuộc lớn vào tình trạng xương hàm và răng của từng cá nhân. Dưới đây là bảng đánh giá tính phù hợp lâm sàng sơ bộ:"
            : "The efficiency of clear aligners depends on your specific dental and skeletal anatomy. Here is an initial suitability framework:"}
        </p>

        <div className="border border-slate-200 rounded-3xl overflow-hidden bg-white shadow-sm overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-[#0b1e2c] text-white font-serif text-xs uppercase tracking-wider">
                <th className="p-4 border-b border-slate-800 w-[50%]">{isVN ? "Tình trạng răng miệng thực tế" : "Orthodontic Condition"}</th>
                <th className="p-4 border-b border-slate-800 text-center">{isVN ? "Mức độ phù hợp với Invisalign" : "Invisalign Suitability"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-800 font-medium">
              {[
                {
                  condVN: "Răng thưa kẽ, chen chúc hoặc lệch lạc ở mức độ nhẹ.",
                  condEN: "Mild spacing, mild crowding, or minor rotations.",
                  recVN: "✅ RẤT PHÙ HỢP — Thời gian điều trị nhanh chóng.",
                  recEN: "✅ HIGHLY SUITABLE — Short treatment durations."
                },
                {
                  condVN: "Răng khấp khểnh, chen chúc ở mức độ trung bình.",
                  condEN: "Moderate crowding or uneven alignment.",
                  recVN: "✅ PHÙ HỢP — Áp dụng gói điều trị Invisalign Lite hoặc Moderate.",
                  recEN: "✅ SUITABLE — Indicated for Invisalign Lite or Moderate packages."
                },
                {
                  condVN: "Sai lệch khớp cắn nặng (hô móm xương hàm, cắn sâu, cắn hở nghiêm trọng).",
                  condEN: "Severe skeletal malocclusion (pronounced overbite, underbite, or open bite).",
                  recVN: "⚠️ CẦN ĐÁNH GIÁ RIÊNG — Có thể phải kết hợp niềng mắc cài kim loại hoặc phẫu thuật.",
                  recEN: "⚠️ CAUTION — Often requires hybrid ceramic/metal braces or orthognathic surgery."
                },
                {
                  condVN: "Răng bị xoay trục lệch nghiêm trọng (xoay góc lớn hơn 45 độ).",
                  condEN: "Severely rotated teeth (rotation angles exceeding 45 degrees).",
                  recVN: "❌ HẠN CHẾ — Khay nhựa khó ôm chắc để xoay trục răng nặng; khuyên dùng mắc cài truyền thống.",
                  recEN: "❌ LIMITED SUITABILITY — Aligners struggle to grip rotated teeth; traditional braces preferred."
                },
                {
                  condVN: "Có răng mất và dự định cấy ghép Implant.",
                  condEN: "Missing teeth requiring dental implant placements.",
                  recVN: "⚠️ CẦN LẬP KẾ HOẠCH ĐỒNG THỜI — Chỉnh răng đều trước để tạo đủ khoảng trống trống nhận Implant sau.",
                  recEN: "⚠️ CO-PLANNING REQUIRED — Align teeth first to create adequate restorative space before implants."
                },
                {
                  condVN: "Trẻ em dưới 12 tuổi (chưa thay hết răng sữa).",
                  condEN: "Pediatric patients under 12 (with active mixed dentition).",
                  recVN: "❌ KHÔNG PHÙ HỢP — Cần đánh giá chuyên biệt theo phác đồ chỉnh xương sớm (Invisalign First).",
                  recEN: "❌ NOT ELIGIBLE — Requires pediatric evaluation under early intervention protocols (Invisalign First)."
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
        <p className="text-xs text-slate-500 italic mt-2">
          {isVN 
            ? "* Khách hàng nên gửi trước ảnh chụp răng cận cảnh từ ba hướng (chụp thẳng, chụp nghiêng bên trái/phải khi cắn chặt răng) để bác sĩ DentalNKT đánh giá sơ bộ trước khi đặt vé bay."
            : "* Bệnh nhân are advised to send dental photos from three angles (front, left profile, right profile in occlusion) for remote screening before booking travel."}
        </p>
      </section>

      {/* 2. Honest Savings Note */}
      <section className="bg-slate-50 border border-slate-100 p-6 sm:p-10 rounded-3xl flex flex-col md:flex-row gap-6 items-start">
        <div className="space-y-4">
          <h3 className="text-lg font-serif font-extrabold text-[#0b1e2c]">
            {isVN ? "Thông tin khách quan: Mức tiết kiệm của Invisalign thấp hơn Veneer hay Implant" : "Objective Note: Aligner Savings are Lower Than Veneers or Implants"}
          </h3>
          <div className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed space-y-2">
            <p>
              {isVN
                ? "DentalNKT muốn cung cấp thông tin trung thực ngay từ đầu: Vì Invisalign là hệ thống độc quyền toàn cầu có chi phí sản xuất khay phôi nhựa và phí bản quyền ClinCheck cố định từ hãng Align Technology (Mỹ), chênh lệch giá niềng Invisalign giữa Việt Nam và Úc sẽ không nhiều như các dịch vụ Veneer hay Implant vốn phụ thuộc nhiều vào nhân công chế tác tại labo nội địa."
                : "DentalNKT believes in transparency: Because Invisalign is a proprietary system with fixed manufacturing overheads and licensing fees charged directly by Align Technology (USA) globally, the pricing differential between Vietnam and Australia is narrower than for custom lab-made restorations like veneers or implants."}
            </p>
            <p>
              {isVN
                ? "Invisalign sẽ tối ưu nhất khi: 1. Kết hợp cùng kế hoạch phục hình Smile Makeover toàn diện (niềng răng đều trước, dán mặt sứ Veneer Emax sau để hạn chế mài răng tối đa); 2. Bạn đã có lịch trình sang Việt Nam công tác, du lịch và tiện thể khởi động niềng răng trong cùng chuyến đi."
                : "Invisalign is highly practical when: 1. Combined with a comprehensive Smile Makeover (aligning teeth first to minimize veneer prep requirements later); 2. You have plans to visit Vietnam for leisure or other dental procedures and want to initiate aligners during the same stay."}
            </p>
            <p className="text-[#0b1e2c] font-bold italic">
              {isVN 
                ? "* Lưu ý: Nếu bạn bay chỉ duy nhất vì mục đích niềng răng Invisalign, hãy cân nhắc chi phí đi lại và ăn ở vì mức tiết kiệm có thể không bù đắp được các khoản phát sinh này."
                : "* Note: If you plan to travel solely for Invisalign, evaluate travel and lodging expenses carefully, as the net savings may not offset these travel costs."}
            </p>
          </div>
        </div>
      </section>

      {/* 3. Step-by-Step Remote Coordination */}
      <section className="space-y-8">
        <h2 className="text-xl sm:text-2xl font-serif font-extrabold text-[#0b1e2c] text-center">
          {isVN ? "2. Quy trình phối hợp điều trị từ xa" : "2. Remote Aligner Coordination Protocol"}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {[
            {
              step: "1",
              title: isVN ? "Tư vấn từ xa" : "Remote Screening",
              desc: isVN ? "Gửi ảnh răng và hồ sơ bệnh án. Nhận phân tích sơ bộ và báo giá chi tiết bằng văn bản trước khi đặt vé." : "Send photos and dental history. Receive a written preliminary analysis and quote before booking."
            },
            {
              step: "2",
              title: isVN ? "Khởi động (2-4 ngày)" : "Initiation (2-4 Days)",
              desc: isVN ? "Đến phòng khám quét hàm iTero 5D, duyệt ClinCheck 3D, gắn hạt Attachment và nhận chuỗi khay đầu tiên." : "In-office iTero 5D scan, ClinCheck 3D planning approval, attachment placement, and receiving first aligner sets."
            },
            {
              step: "3",
              title: isVN ? "Tự đeo khay tại Úc" : "Wear at Home",
              desc: isVN ? "Đeo khay tối thiểu 22 giờ mỗi ngày, tự đổi khay mới sau mỗi 1-2 tuần theo phác đồ chỉ định." : "Wear aligners at least 22 hours per day, changing to next tray sets every 1-2 weeks as scheduled."
            },
            {
              step: "4",
              title: isVN ? "Gửi khay bưu điện" : "Tray Shipments",
              desc: isVN ? "Theo dõi tiến trình qua ảnh gửi định kỳ. Nhận các đợt khay tiếp theo được đóng gói gửi sang Úc." : "Track movement via periodic progress photos. Receive subsequent aligner batches shipped to Australia."
            },
            {
              step: "5",
              title: isVN ? "Đeo hàm duy trì" : "Retention Stage",
              desc: isVN ? "Sau khi hoàn tất di chuyển răng, đeo hàm duy trì (Retainer) để giữ khớp cắn ổn định lâu dài." : "After alignment completion, wear retainers to stabilize periodontal tissues and prevent relapse."
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-100 p-6 rounded-2xl relative space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="w-8 h-8 rounded-full bg-teal-brand text-white font-bold flex items-center justify-center text-xs">
                  {item.step}
                </span>
                <h4 className="text-sm font-bold text-[#0b1e2c]">{item.title}</h4>
                <p className="text-xs text-slate-600 font-normal leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Troubleshooting in Australia */}
      <section className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-serif font-extrabold text-[#0b1e2c]">
          {isVN ? "3. Xử lý sự cố phát sinh khi bạn ở Úc" : "3. Troubleshooting Aligner Issues While in Australia"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 border border-slate-150 rounded-2xl space-y-3 bg-white">
            <h4 className="text-xs font-bold text-[#0b1e2c] uppercase tracking-wider">{isVN ? "Sai lệch nhỏ (Răng chạy chậm)" : "Minor Tracking Issues"}</h4>
            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
              {isVN
                ? "Nếu răng chạy hơi lệch so với ClinCheck, bác sĩ sẽ gửi khay bổ sung (Refinement aligners) từ Việt Nam sang mà không cần bạn phải bay về khám."
                : "If teeth deviate slightly from the digital plan, we can generate refinement trays and ship them directly to Australia without a return trip."}
            </p>
          </div>
          <div className="p-6 border border-slate-150 rounded-2xl space-y-3 bg-white">
            <h4 className="text-xs font-bold text-[#0b1e2c] uppercase tracking-wider">{isVN ? "Sai lệch lớn (Cần quét hàm lại)" : "Major Tracking Issues"}</h4>
            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
              {isVN
                ? "Trường hợp răng di chuyển lệch hướng hoàn toàn, bạn cần sắp xếp chuyến bay ngắn sang Việt Nam để scan hàm lại hoặc thực hiện scan tại phòng khám đối tác gửi dữ liệu số về."
                : "If teeth tracking fails significantly, you will need a short return trip to rescan your arches, or secure a digital scan file from a local clinic."}
            </p>
          </div>
          <div className="p-6 border border-slate-150 rounded-2xl space-y-3 bg-white">
            <h4 className="text-xs font-bold text-[#0b1e2c] uppercase tracking-wider">{isVN ? "Mất hoặc vỡ khay niềng" : "Lost or Damaged Aligners"}</h4>
            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
              {isVN
                ? "Liên hệ ngay với DentalNKT. Trong thời gian chờ khay mới in và gửi sang, bạn hãy đeo lại bộ khay liền kề trước đó để giữ vị trí răng không bị chạy ngược."
                : "Contact us immediately. While your replacement tray is printed and shipped, wear your previous set to hold teeth positions."}
            </p>
          </div>
        </div>
      </section>

      {/* 5. Pricing Table */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#0b1e2c] text-center">
          {isVN ? "4. Chi phí niềng răng Invisalign trọn gói" : "4. Aligner Packages & Pricing Guide"}
        </h2>
        <div className="border border-slate-200 rounded-3xl overflow-hidden bg-white shadow-sm overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-[#0b1e2c] text-white font-serif text-xs uppercase tracking-wider">
                <th className="p-4 border-b border-slate-800">{isVN ? "Gói niềng răng Invisalign" : "Invisalign Aligner Package Option"}</th>
                <th className="p-4 border-b border-slate-800">{isVN ? "Phạm vi áp dụng lâm sàng" : "Clinical Application Scope"}</th>
                <th className="p-4 border-b border-slate-800 text-right">{isVN ? "Đơn giá (USD)" : "Price (USD)"}</th>
                <th className="p-4 border-b border-slate-800 text-right">{isVN ? "Đơn giá (AUD)" : "Price (AUD)"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-800 font-medium">
              {[
                {
                  name: isVN ? "Invisalign Cơ bản (Essential) — 1 Hàm" : "Invisalign Essential — 1 Arch",
                  scope: isVN ? "Lệch lạc nhẹ, răng thưa hoặc chen chúc nhẹ ở 1 hàm" : "Minor crowding or spacing on a single arch",
                  usd: "$1,370 USD",
                  aud: "$1,950 AUD"
                },
                {
                  name: isVN ? "Invisalign Cơ bản (Essential) — 2 Hàm" : "Invisalign Essential — Both Arches",
                  scope: isVN ? "Lệch lạc nhẹ, thưa răng nhẹ ở cả hai hàm" : "Minor orthodontic misalignment on both arches",
                  usd: "$2,740 USD",
                  aud: "$3,905 AUD"
                },
                {
                  name: isVN ? "Invisalign Trung bình (Moderate) — 1 Hàm" : "Invisalign Moderate — 1 Arch",
                  scope: isVN ? "Chen chúc răng hoặc xoay trục răng mức độ vừa ở 1 hàm" : "Moderate crowding or rotations on a single arch",
                  usd: "$2,055 USD",
                  aud: "$2,930 AUD"
                },
                {
                  name: isVN ? "Invisalign Trung bình (Moderate) — 2 Hàm" : "Invisalign Moderate — Both Arches",
                  scope: isVN ? "Lệch lạc và chen chúc khớp cắn vừa ở cả hai hàm" : "Moderate misalignment on both arches",
                  usd: "$4,110 USD",
                  aud: "$5,860 AUD"
                },
                {
                  name: isVN ? "Invisalign Toàn diện (Comprehensive)" : "Invisalign Comprehensive",
                  scope: isVN ? "Chen chúc nặng, lệch khớp cắn mức độ phức tạp" : "Severe crowding, complex bite discrepancies",
                  usd: "$4,795 USD",
                  aud: "$6,835 AUD"
                },
                {
                  name: isVN ? "Invisalign Toàn diện Kéo dài (Tối đa 5 năm)" : "Invisalign Comprehensive Extended (5-Yr)",
                  scope: isVN ? "Lệch lạc phức tạp đòi hỏi tinh chỉnh nhiều lần trong 5 năm" : "Complex bite corrections requiring refine runs up to 5 years",
                  usd: "$5,480 USD",
                  aud: "$7,810 AUD"
                }
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-slate-800 bg-slate-50/50">{row.name}</td>
                  <td className="p-4 text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">{row.scope}</td>
                  <td className="p-4 text-right font-semibold text-slate-800 whitespace-nowrap">{row.usd}</td>
                  <td className="p-4 text-right font-extrabold text-teal-brand whitespace-nowrap">{row.aud}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="bg-slate-50 p-5 rounded-2xl flex gap-2.5 items-start">
          <Info className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
          <div className="text-xs text-slate-600 font-semibold leading-relaxed space-y-1">
            <p>{isVN ? "* Chi phí đã bao gồm: Quét hàm 3D bằng máy quét iTero, thiết kế ClinCheck từ hãng, toàn bộ số bộ khay niềng theo gói điều trị, hàm duy trì tháo lắp sau niềng và phí gửi khay tiêu chuẩn." : "* Inclusions: iTero digital scans, custom ClinCheck setups, all aligner sets in the package, post-treatment retainers, and standard mailing packages."}</p>
            <p>{isVN ? "* Chi phí chưa bao gồm: Thuế phí vận chuyển phát sinh ngoài kế hoạch ban đầu, chi phí chụp scan hàm lại tại nước ngoài nếu có lệch lạc lớn, chi phí đi lại và lưu trú." : "* Exclusions: Surcharges for express/custom shipping, remote third-party scans, travel and accommodation expenses."}</p>
          </div>
        </div>
      </section>

      {/* 7. Payment methods & Warranty info */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-slate-50/50 border border-slate-100 p-6 sm:p-8 rounded-3xl space-y-4">
          <h3 className="font-serif text-lg font-bold text-[#0b1e2c] border-b border-slate-200 pb-2">
            {isVN ? "Chính sách Bảo hành" : "Orthodontic Warranty Terms"}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
            {isVN
              ? "DentalNKT áp dụng bảo hành khớp cắn ổn định 2 năm sau khi hoàn tất di chuyển răng Invisalign. Điều kiện bảo hành bắt buộc là khách hàng phải đeo hàm duy trì (Retainer) đúng theo chỉ dẫn lịch trình của bác sĩ chỉnh nha. Việc không tuân thủ đeo hàm duy trì làm răng bị xô lệch ngược lại sẽ không nằm trong phạm vi được bảo hành."
              : "Invisalign outcomes are covered by a 2-year warranty after completion of active aligner therapy. To maintain this warranty, you must wear your retainers exactly as prescribed by our orthodontic team. Relapses occurring due to failure to wear retainers are excluded from coverage."}
          </p>
        </div>
        <div className="bg-slate-50/50 border border-slate-150 p-6 sm:p-8 rounded-3xl space-y-4">
          <h3 className="font-serif text-lg font-bold text-[#0b1e2c] border-b border-slate-200 pb-2">
            {isVN ? "Phương thức Thanh toán theo đợt" : "Flexible Instalment Methods"}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
            {isVN
              ? "Để tạo điều kiện thuận lợi, chúng tôi chấp nhận thanh toán bằng USD hoặc AUD bằng tiền mặt, chuyển khoản ngân hàng hoặc thẻ tín dụng quốc tế. Khách hàng có thể đóng phí theo đợt (Đặt cọc một phần khi khởi động scan hàm lên ClinCheck, đóng nốt phần còn lại khi nhận trọn bộ chuỗi khay niềng)."
              : "For your financial convenience, we accept payments in USD or AUD via Cash, Bank Transfer, or Credit Cards. Installment pathways are open: you pay an initial setup deposit during scans and ClinCheck planning, and settle the remaining balance upon final aligner tray batch delivery."}
          </p>
        </div>
      </section>

      {/* 8. FAQ Section */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#0b1e2c] text-center">
          {isVN ? "5. Câu hỏi thường gặp về niềng răng Invisalign" : "5. Frequently Asked Questions"}
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
            {isVN ? "Khởi động nụ cười mới — Niềng răng nhẹ nhàng từ xa" : "Start Your Alignment Journey – Remote Aligner System"}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
            {isVN 
              ? "Bạn muốn biết Invisalign có phù hợp với răng của mình hay không? Gửi ảnh chụp răng cận cảnh để bác sĩ chuyên khoa chỉnh nha DentalNKT tiến hành phân tích khớp cắn sơ bộ và tư vấn miễn phí."
              : "Want to know if Invisalign fits your clinical profile? Send close-up photos of your teeth for a preliminary clinical bite analysis and free remote consultation."}
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
              href="/services/smile-makeover" 
              className="text-slate-300 hover:text-white px-4 py-3.5 text-xs sm:text-sm transition-all flex items-center gap-1.5 font-medium"
            >
              {isVN ? "Xem trang Smile Makeover" : "View Smile Makeover Page"}
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
