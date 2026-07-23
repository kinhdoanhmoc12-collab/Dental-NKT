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

export default function TeethWhiteningClient() {
  const { lang, t } = useLanguage();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [selectedShade, setSelectedShade] = useState<string>("A1");

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const isVN = lang === "VN";

  React.useEffect(() => {
    document.title = isVN 
      ? "Tẩy trắng răng (Teeth Whitening) — Lời khuyên trung thực | DentalNKT"
      : "Professional Teeth Whitening — Honest Advice | DentalNKT";
  }, [isVN]);

  // FAQ Items
  const faqItems = [
    {
      q: isVN 
        ? "Có đáng bay sang Việt Nam chỉ để tẩy trắng răng không?" 
        : "Is it worth flying to Vietnam just for teeth whitening?",
      a: isVN 
        ? "Hiếm khi đáng. Chi phí cho một lần tẩy trắng răng tại phòng khám ở Úc dao động từ $500–$1,500 AUD, trong khi tại DentalNKT là $160 AUD. Dù có sự chênh lệch lớn, nhưng nếu bạn cộng thêm chi phí vé máy bay khứ hồi và tiền khách sạn, tổng số tiền bạn bỏ ra sẽ vượt quá chi phí làm tại Úc. Tẩy trắng chỉ thực sự tối ưu chi phí khi bạn kết hợp cùng dán sứ Veneer, bọc mão sứ hoặc cấy ghép implant trong cùng một chuyến đi."
        : "Rarely. While in-chair whitening in Australia costs between $500 and $1,500 AUD, DentalNKT charges only $160 AUD. However, when you add return flights and hotel stays, the travel overhead outweighs the savings. Whitening is highly cost-effective only when integrated as a preparatory step for veneers, crowns, or dental implants during the same trip."
    },
    {
      q: isVN 
        ? "Tẩy trắng răng có làm trắng được mặt dán sứ Veneer hay mão sứ không?" 
        : "Does teeth whitening work on porcelain veneers or dental crowns?",
      a: isVN 
        ? "Không. Hoạt chất làm trắng (Hydrogen Peroxide) chỉ tác động hóa học lên các phân tử hữu cơ trong men răng và ngà răng tự nhiên, hoàn toàn không có tác dụng trên sứ, Zirconia hay vật liệu Composite hàn răng. Nếu bạn có ý định làm Veneer/mão sứ kết hợp tẩy trắng, bác sĩ sẽ thực hiện tẩy trắng răng thật trước để xác định tông màu sáng nhất của cung hàm, sau đó mới chế tác sứ thật khớp với màu răng mới."
        : "No. Bleaching agents only react with organic structures within natural enamel and dentin. They have no chemical effect on ceramic, Zirconia, or composite bonding materials. If you plan to combine veneers/crowns with whitening, the whitening must be performed first to establish the baseline shade before matching the custom ceramic restorations."
    },
    {
      q: isVN 
        ? "Kết quả tẩy trắng răng giữ được bao lâu?" 
        : "How long do teeth whitening results last?",
      a: isVN 
        ? "Kết quả thường duy trì từ 6 đến 24 tháng, tùy thuộc vào cơ địa men răng và thói quen ăn uống của bạn. Các chất kích thích màu như cà phê, trà đặc, rượu vang đỏ, nghệ và hút thuốc lá sẽ nhanh chóng làm xỉn màu men răng trở lại. Để duy trì kết quả lâu dài, bạn có thể kết hợp máng ngậm ngậm thuốc tại nhà định kỳ 6 tháng một lần."
        : "Whitening results typically last between 6 and 24 months, depending on your enamel type and lifestyle habits. Regular consumption of coffee, black tea, red wine, curry, or smoking will accelerate re-staining. To maintain brightness, we recommend using custom take-home touch-up trays once every 6 months."
    },
    {
      q: isVN 
        ? "Tẩy trắng răng tại nha khoa có đau hay ê buốt không?" 
        : "Is the whitening procedure painful or does it cause sensitivity?",
      a: isVN 
        ? "Cảm giác ê buốt nhẹ, tạm thời là phản ứng sinh lý bình thường do hoạt chất làm mở các ống ngà răng để đẩy chất màu ra ngoài. Cơn ê buốt thường tự hết trong vòng 24–48 giờ. Tại DentalNKT, chúng tôi bôi gel cách ly bảo vệ nướu chuyên dụng và sử dụng hoạt chất chứa thành phần khoáng Flour tự nhiên giúp bù khoáng men răng lập tức, giảm thiểu tối đa sự nhạy cảm."
        : "Mild, temporary tooth sensitivity is a common physiological reaction as the bleach opens dentin tubules to release stains. It usually resolves within 24-48 hours. At DentalNKT, we apply protective barrier gels over your gums and use whitening solutions enriched with fluoride to instantly remineralize enamel, minimizing post-op discomfort."
    },
    {
      q: isVN 
        ? "Nếu răng tôi bị nhiễm màu kháng sinh Tetracycline nặng thì tẩy trắng có hiệu quả không?" 
        : "Will whitening work on severe Tetracycline or Fluorosis stains?",
      a: isVN 
        ? "Tẩy trắng răng thường không đem lại hiệu quả rõ rệt cho răng bị ố màu do nhiễm kháng sinh Tetracycline từ sâu bên trong ngà răng, hoặc nhiễm Fluor nặng tạo các đốm phấn trắng đục. Những trường hợp này cần các giải pháp che phủ cơ học như dán sứ Veneer IPS E.max hoặc bọc mão sứ để mang lại nụ cười trắng đều lâu dài."
        : "Bleaching typically has very limited effectiveness on deep intrinsic stains caused by childhood Tetracycline usage or severe Fluorosis. For these cases, mechanical coverings like ultra-thin E.max veneers or crowns are the clinically indicated solutions to achieve a bright, uniform smile."
    },
    {
      q: isVN 
        ? "Ai không nên thực hiện tẩy trắng răng (Chống chỉ định)?" 
        : "Who should avoid teeth whitening (Contraindications)?",
      a: isVN 
        ? "Tẩy trắng răng chống chỉ định tuyệt đối hoặc tạm thời cho các trường hợp: 1. Phụ nữ mang thai hoặc đang cho con bú (hoạt chất tẩy có thể ảnh hưởng đến bé). 2. Trẻ em dưới 16 tuổi (tủy răng chưa hoàn thiện dễ bị kích ứng). 3. Bệnh nhân đang bị viêm quanh răng (nha chu), viêm nướu nặng hoặc có các răng sâu lớn chưa được hàn kín (sẽ gây buốt tủy cấp tính). Bác sĩ DentalNKT sẽ thăm khám và điều trị triệt để các bệnh lý răng miệng này trước khi tiến hành tẩy trắng."
        : "Teeth whitening is contraindicated or deferred for: 1. Pregnant or breastfeeding women (bleaching agents may affect the infant). 2. Children under 16 (as their pulp chambers are still developing and sensitive). 3. Patients with active periodontal disease, severe gingivitis, or deep untreated cavities (as the gel can leak into the tooth core and cause acute pulp pain). Our team will treat these underlying conditions before any whitening occurs."
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
              <span>{isVN ? "TẨY TRẮNG RĂNG CHUYÊN NGHIỆP" : "PROFESSIONAL TEETH BLEACHING SYSTEM"}</span>
            </span>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-white leading-tight">
              {isVN 
                ? "Tẩy Trắng Răng — Lời Khuyên Trung Thực Trước Khi Đặt Vé" 
                : "Teeth Whitening — Honest Advice Before You Book Flights"}
            </h1>
            
            <p className="text-sm sm:text-base text-slate-200 font-normal leading-relaxed">
              {isVN 
                ? "DentalNKT cung cấp giải pháp tẩy trắng răng công nghệ Laser Flash thế hệ mới an toàn cho men răng. Tuy nhiên, chúng tôi khuyên bạn cân nhắc kỹ: chỉ nên thực hiện khi kết hợp cùng Veneer hoặc mão sứ để tối ưu hóa chi phí hành trình."
                : "DentalNKT utilizes advanced light-activated bleaching technologies that are safe for your natural enamel. However, we advise: only combine whitening with major treatments like veneers or crowns to make your travel worth the trip."}
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-slate-700/80 w-full">
              <div>
                <span className="text-xs text-slate-300 block font-medium">
                  {isVN ? "Đơn giá tẩy trắng trọn gói từ:" : "Laser Whitening Price Starts at:"}
                </span>
                <span className="text-xl sm:text-2xl font-extrabold text-teal-brand">
                  {isVN ? "3.000.000 VNĐ / Cả 2 Hàm" : "$160 AUD / Both Arches"}
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

      {/* 1. What is Teeth Whitening */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-7 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-dark-brand">
            {isVN ? "1. Tẩy trắng răng là gì?" : "1. What is Teeth Whitening?"}
          </h2>
          <div className="space-y-4 text-sm sm:text-base text-slate-800 leading-relaxed font-normal">
            <p>
              {isVN
                ? "Tẩy trắng răng chuyên nghiệp tại phòng khám sử dụng gel chứa hoạt chất Hydrogen Peroxide nồng độ cao được kiểm soát chặt chẽ bởi bác sĩ, kết hợp với ánh sáng Laser kích hoạt. Quá trình này phóng thích các gốc tự do đi sâu vào men răng và ngà răng để bẻ gãy các liên kết chuỗi protein gây ố màu (do thức ăn, tuổi tác, thuốc lá), mang lại tông màu trắng sáng tự nhiên mà không làm mài mòn hay thay đổi cấu trúc răng thật."
                : "Professional in-office whitening applies medical-grade hydrogen peroxide gel directly onto your teeth. When activated by specialized cool blue laser light under dentist supervision, it releases free radicals that penetrate enamel to dissolve dark organic stain molecules. This non-invasive chemical process restores your natural shade without structural enamel grinding."}
            </p>
            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5 flex gap-3 items-start">
              <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p className="text-xs sm:text-sm text-slate-800 font-semibold leading-relaxed">
                  {isVN
                    ? "DentalNKT khuyên bạn chân thành: Nếu bạn CHỈ muốn tẩy trắng răng thuần túy mà không kèm theo bất cứ điều trị nào khác, chi phí đi lại (vé máy bay, khách sạn) từ Úc sang Việt Nam sẽ lớn hơn nhiều số tiền bạn tiết kiệm được. Dịch vụ này chỉ thực sự tối ưu khi được thực hiện kết hợp cùng dán sứ Veneer hoặc Smile Makeover chính trong chuyến đi."
                    : "Honest Travel Advice: If you are flying to Vietnam SOLELY to whiten your teeth, travel expenses (flights, hotel) will easily exceed your savings compared to local Australian rates. Whitening is only financially logical when added as a side procedure during a major veneer, crown, or reconstruction trip."}
                </p>
                <p className="text-xs text-slate-700 leading-relaxed font-semibold italic">
                  {isVN
                    ? "* Gợi ý thay thế: Nếu bạn vẫn muốn trải nghiệm dịch vụ tại DentalNKT, hãy cân nhắc kết hợp tẩy trắng răng với việc cạo vôi răng chuyên sâu, hàn trám răng composite thẩm mỹ hoặc khám tổng quát sức khỏe răng miệng để chuyến đi ngắn ngày trở nên thực sự ý nghĩa."
                    : "* Alternative touch-up: If you still wish to experience treatment at DentalNKT, we recommend combining whitening with a professional clean and scale, aesthetic composite fillings, or a general checkup to maximize your travel value."}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-5 bg-teal-brand-light/30 border border-teal-brand-light p-8 rounded-3xl space-y-4">
          <h3 className="text-base font-bold text-dark-brand">
            {isVN ? "Lưu ý quan trọng của dịch vụ" : "Key Things to Know"}
          </h3>
          <ul className="space-y-3.5">
            {[
              isVN ? "Tẩy trắng răng không mài răng, bảo tồn 100% men răng thật" : "Non-invasive procedure, zero enamel reduction guaranteed",
              isVN ? "Chỉ tẩy trắng răng tự nhiên, không tác động lên răng sứ" : "Only alters natural enamel, has no effect on artificial crowns/veneers",
              isVN ? "Phù hợp để làm nền trước khi chọn tông màu sứ Veneer" : "Perfect to establish a bright baseline shade before veneers placement",
              isVN ? "Hiệu quả tức thì chỉ sau 45–90 phút tại phòng khám" : "Immediate results achieved within 45 to 90 minutes in-chair",
              isVN ? "Khuyên dùng làm dịch vụ đi kèm điều trị lớn để tiết kiệm" : "Best booked alongside larger restorations to save travel costs"
            ].map((benefit, idx) => (
              <li key={idx} className="flex gap-2 items-start text-xs sm:text-sm text-slate-800">
                <Check className="w-4.5 h-4.5 text-teal-brand shrink-0 mt-0.5" />
                <span className="font-semibold">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Interactive Dental Shade Guide */}
      <section className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-serif font-extrabold text-dark-brand text-center">
          {isVN ? "Ước lượng Tông màu Răng mục tiêu của bạn" : "Estimate Your Target Teeth Shade"}
        </h2>
        <p className="text-xs sm:text-sm text-slate-755 font-semibold leading-relaxed text-center max-w-2xl mx-auto">
          {isVN 
            ? "Màu sắc răng được đo lường theo bảng so màu Vita quốc tế. Nhấp vào các tông màu dưới đây để xem khả năng đáp ứng thực tế của phương pháp tẩy trắng răng và chọn giải pháp phù hợp."
            : "Teeth brightness is standardly measured using the Vita Shade Guide. Click the shades below to see the realistic whitening potential and choose the best clinical approach."}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            {
              id: "A3.5",
              name: isVN ? "A3.5 - Tông Sẫm" : "A3.5 - Dark Shade",
              colorBg: "bg-[#e8d5b7]",
              description: isVN ? "Màu răng ố vàng sẫm màu phổ biến ở người uống nhiều trà, cà phê hoặc hút lá lâu năm." : "Common dark yellow shade for regular coffee, tea drinkers, or smokers.",
              limit: isVN ? "Khả năng tẩy trắng: Rất tốt. Có thể nâng lên A2 hoặc A1 sau 1 liệu trình." : "Whitening Potential: Excellent. Easily lifts to A2 or A1 after one in-office session."
            },
            {
              id: "A2",
              name: isVN ? "A2 - Tông Trung Bình" : "A2 - Natural Average",
              colorBg: "bg-[#f1e3cc]",
              description: isVN ? "Tông màu tự nhiên trung bình của hầu hết người trưởng thành có men răng khỏe." : "The baseline natural tooth shade for most healthy adult arches.",
              limit: isVN ? "Khả năng tẩy trắng: Tốt. Nâng lên màu A1 sáng đẹp tự nhiên." : "Whitening Potential: Good. Brightens to a clean, healthy A1 shade."
            },
            {
              id: "A1",
              name: isVN ? "A1 - Tông Sáng Bóng" : "A1 - Brightest Natural",
              colorBg: "bg-[#fbf5e6]",
              description: isVN ? "Mức độ trắng sáng tự nhiên cao nhất mà răng thật có thể đạt được." : "The highest level of aesthetic brightness achievable for natural human enamel.",
              limit: isVN ? "Khả năng tẩy trắng: Tối đa. Đây là đích đến hoàn hảo của tẩy trắng răng Laser." : "Whitening Potential: Peak. The ideal target shade for professional laser whitening."
            },
            {
              id: "B1",
              name: isVN ? "B1 - Siêu Sáng (Hollywood)" : "B1 - Ultra Bright (Hollywood)",
              colorBg: "bg-[#ffffff] border border-slate-350",
              description: isVN ? "Tông màu trắng tinh khiết như phím đàn, thường thấy ở các diễn viên điện ảnh." : "Celebrity white shade. Highly reflective, opaque porcelain look.",
              limit: isVN ? "Khả năng tẩy trắng: Không thể đạt được bằng gel tẩy thông thường. Đòi hỏi làm dán sứ Veneer E.max để phủ màu." : "Whitening Potential: Impossible via chemical bleaching. Requires E.max Veneers to cover natural tooth structure."
            }
          ].map((shade) => (
            <button
              key={shade.id}
              onClick={() => setSelectedShade(shade.id)}
              className={`p-5 rounded-2xl border text-left transition-all relative flex flex-col justify-between h-52 cursor-pointer border-none outline-none ${
                selectedShade === shade.id 
                  ? "border-teal-brand ring-2 ring-teal-brand/20 bg-white shadow-md transform -translate-y-1" 
                  : "border-slate-200 bg-slate-50/50 hover:bg-slate-50"
              }`}
            >
              <div className="space-y-3 w-full">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-800">{shade.id}</span>
                  <div className={`w-6 h-6 rounded-full ${shade.colorBg} shadow-inner`} />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-dark-brand">{shade.name}</h4>
                  <p className="text-[11px] text-slate-700 font-semibold leading-relaxed mt-1">{shade.description}</p>
                </div>
              </div>
              <div className={`text-[10px] font-bold mt-2 ${selectedShade === shade.id ? "text-teal-brand" : "text-slate-500"}`}>
                {selectedShade === shade.id ? (isVN ? "✓ Đang chọn xem" : "✓ Active selection") : (isVN ? "Nhấp để xem" : "Click to view info")}
              </div>
            </button>
          ))}
        </div>

        {/* Selected Shade Details Box */}
        {selectedShade && (
          <div className="bg-teal-brand-light/30 border border-teal-brand-light/50 rounded-2xl p-6 max-w-4xl mx-auto flex gap-4 items-start shadow-sm transition-all duration-300 animate-fadeIn">
            <Info className="w-5 h-5 text-teal-brand shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="text-xs sm:text-sm font-bold text-dark-brand">
                {isVN ? `Phân tích lâm sàng cho Tông màu ${selectedShade}:` : `Clinical Insight for Shade ${selectedShade}:`}
              </h4>
              <p className="text-xs sm:text-sm text-slate-800 font-semibold leading-relaxed">
                {[
                  { id: "A3.5", text: isVN 
                    ? "Đối với răng thuộc nhóm A3.5 trở xuống, tẩy trắng răng bằng công nghệ Laser tại DentalNKT là một chỉ định cực kỳ thích hợp. Hoạt chất thuốc Đức nồng độ cao sẽ phản ứng rất mạnh với phân tử màu tích tụ lâu năm, mang lại hiệu quả rõ rệt nhất. Bạn sẽ cảm nhận răng trắng lên rõ rệt chỉ sau 45-60 phút."
                    : "For teeth at shade A3.5 or darker, in-office laser whitening is highly effective. The concentrated German gel reacts powerfully with long-accumulated organic pigments, providing the most dramatic change. Teeth will look visibly brighter in a single 45-60 min appointment."
                  },
                  { id: "A2", text: isVN
                    ? "Nếu răng bạn đã ở tông trung bình A2, tẩy trắng răng vẫn mang lại hiệu quả nâng tông rất tốt. Răng sẽ sáng bóng lên mức tối đa A1 của răng thật. Đây cũng là bước đệm lý tưởng nếu bạn chuẩn bị làm các phục hình Veneer bán phần để đảm bảo tính đồng đều màu sắc toàn hàm."
                    : "For natural teeth at shade A2, whitening yields great results, boosting the enamel to the brightest natural shade A1. This is also an ideal prep step if you plan partial veneers, ensuring the adjacent natural teeth match the new restorations."
                  },
                  { id: "A1", text: isVN
                    ? "Tông màu A1 là giới hạn sáng tự nhiên của men răng thật. Nếu răng bạn đã ở mức A1 và bạn muốn sáng hơn nữa để có nụ cười nổi bật rực rỡ, tẩy trắng hóa học sẽ không còn hiệu quả rõ rệt. Cách duy nhất để đạt được tông màu siêu sáng này là dán sứ Veneer thẩm mỹ để tạo lớp phủ sứ bên ngoài."
                    : "Shade A1 is the natural threshold of human enamel brightness. If your teeth are already A1 and you desire an even brighter, Hollywood-style smile, chemical bleaching won't make a visible difference. The only clinical solution is cosmetic veneers."
                  },
                  { id: "B1", text: isVN
                    ? "Tông màu B1 hoặc các tông sứ tẩy Bleach siêu sáng không thể đạt được bằng phương pháp tẩy răng tự nhiên do giới hạn sinh học của ngà răng. Nếu đây là tông màu đích của bạn, chúng tôi khuyến nghị bạn thực hiện dán mặt sứ Veneer E.max hoặc bọc mão sứ toàn phần tại DentalNKT."
                    : "Shade B1 or ultra-bright Bleached shades cannot be achieved biologically on natural teeth via standard bleaching gels. If this is your target smile, we recommend choosing E.max Veneers or crowns at DentalNKT for full cosmetic coverage."
                  }
                ].find(item => item.id === selectedShade)?.text}
              </p>
            </div>
          </div>
        )}
      </section>

      {/* 2. When to fly - Scenario Table */}
      <section className="bg-slate-50 border border-slate-100 rounded-3xl p-8 sm:p-10 space-y-6">
        <h2 className="text-xl sm:text-2xl font-serif font-extrabold text-dark-brand text-center">
          {isVN ? "2. Khi nào nên và không nên bay riêng chỉ để tẩy trắng răng?" : "2. Whitening Travel Economics: When Is It Worth It?"}
        </h2>
        <div className="border border-slate-200 rounded-3xl overflow-hidden bg-white shadow-sm overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-[#0b1e2c] text-white font-serif text-xs uppercase tracking-wider">
                <th className="p-4 border-b border-slate-800">{isVN ? "Tình huống điều trị" : "Your Dental Situation"}</th>
                <th className="p-4 border-b border-slate-800 text-center">{isVN ? "Đánh giá hiệu quả kinh tế" : "Travel Worthiness"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-800 font-medium">
              {[
                {
                  situation: isVN ? "Chỉ bay sang để tẩy trắng răng tự nhiên, không điều trị gì khác" : "Whitening only, no other dental treatments required",
                  evaluation: isVN ? "❌ KHÔNG NÊN — Chi phí di chuyển & khách sạn sẽ cao hơn phần chênh lệch giá làm tại Úc." : "❌ NOT WORTH IT — Flights and hotel costs will easily wipe out the savings from local Australian fees."
                },
                {
                  situation: isVN ? "Tẩy trắng kết hợp dán sứ Veneer / Smile Makeover (từ 10 răng trở lên)" : "Whitening combined with E.max Veneers / Smile Makeovers (10+ units)",
                  evaluation: isVN ? "✅ RẤT ĐÁNG — Bắt buộc phải tẩy trắng làm tông nền trước khi chọn màu Veneer, không tốn thêm tiền đi lại." : "✅ HIGHLY RECOMMENDED — Necessary to elevate baseline teeth shade before veneer selection. Fits inside the same travel window."
                },
                {
                  situation: isVN ? "Tẩy trắng kết hợp bọc mão răng sứ ở vùng răng cửa thẩm mỹ" : "Whitening combined with cosmetic crowns on anterior front teeth",
                  evaluation: isVN ? "✅ ĐÁNG — Giúp răng thật xung quanh sáng lên để màu mão sứ khớp với tông màu sáng đẹp nhất." : "✅ RECOMMENDED — Whitens adjacent natural teeth to match the bright shade of the new cosmetic restorations."
                },
                {
                  situation: isVN ? "Tẩy trắng kết hợp làm implant đơn lẻ cho răng hàm phía trong" : "Whitening combined with a single posterior molar implant",
                  evaluation: isVN ? "⚠️ TÙY TRƯỜNG HỢP — Có ích nếu bạn muốn cải thiện tông màu chung, chênh lệch màu răng hàm ít quan trọng." : "⚠️ OPTIONAL — Helpful if you desire overall smile brightness. Shade matching is less critical in the posterior molar zone."
                },
                {
                  situation: isVN ? "Tẩy trắng kết hợp hàn trám răng thẩm mỹ Veneer Composite" : "Whitening combined with localized cosmetic Composite Bonding",
                  evaluation: isVN ? "✅ NÊN LÀM — Tẩy trắng trước giúp bác sĩ có tông màu sáng hơn để đắp vật liệu Composite trùng khít." : "✅ RECOMMENDED — Whitening first establishes a brighter tooth background, allowing composite resin matching."
                }
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-slate-800 bg-slate-50/50">{row.situation}</td>
                  <td className="p-4 leading-relaxed font-semibold text-slate-800">{row.evaluation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 3. What Whitening CANNOT Do */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center bg-amber-50/15 border border-amber-100 p-8 sm:p-10 rounded-3xl">
        <div className="md:col-span-8 space-y-4">
          <div className="flex items-center gap-2 text-amber-800">
            <AlertTriangle className="w-6 h-6 shrink-0" />
            <h3 className="font-serif text-xl sm:text-2xl font-bold">
              {isVN ? "3. Những gì Tẩy trắng răng KHÔNG làm được" : "3. What Teeth Whitening CANNOT Do"}
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">
            {isVN
              ? "Tẩy trắng răng không phải là phép màu cho mọi trường hợp ố màu răng. Để tránh kỳ vọng sai thực tế, bạn cần lưu ý những giới hạn lâm sàng sau:"
              : "Bleaching is not a cure-all for all tooth discolorations. To establish realistic expectations, note the following clinical limits:"}
          </p>
          <ul className="space-y-3.5 text-xs sm:text-sm text-slate-800 font-medium">
            <li className="flex gap-2.5 items-start">
              <Check className="w-4.5 h-4.5 text-amber-700 shrink-0 mt-0.5" />
              <span>{isVN ? "Không xử lý được ố màu do kháng sinh Tetracycline nặng hoặc nhiễm Fluor sâu trong ngà răng." : "Does not resolve deep intrinsic stains from Tetracycline usage or severe Fluorosis bands."}</span>
            </li>
            <li className="flex gap-2.5 items-start">
              <Check className="w-4.5 h-4.5 text-amber-700 shrink-0 mt-0.5" />
              <span>{isVN ? "Không có tác dụng làm trắng lên răng sứ, mão răng sứ Zirconia hoặc các vết trám răng bằng Composite." : "Has zero chemical effect on existing porcelain crowns, veneers, or composite restorations."}</span>
            </li>
            <li className="flex gap-2.5 items-start">
              <Check className="w-4.5 h-4.5 text-amber-700 shrink-0 mt-0.5" />
              <span>{isVN ? "Không cải thiện được cấu trúc răng bị nứt vỡ, mòn men răng nặng lộ ngà hay thiểu sản men răng." : "Cannot repair structural issues like tooth wear, micro-cracks, or thin enamel anomalies."}</span>
            </li>
            <li className="flex gap-2.5 items-start">
              <Check className="w-4.5 h-4.5 text-amber-700 shrink-0 mt-0.5" />
              <span>{isVN ? "Kết quả không phải vĩnh viễn, răng sẽ ngả màu tự nhiên theo thời gian phụ thuộc vào ăn uống." : "Results are temporary; natural teeth will slowly re-stain based on dietary and smoking habits."}</span>
            </li>
          </ul>
        </div>
        <div className="md:col-span-4 bg-white border border-amber-100 p-6 rounded-2xl flex flex-col justify-center items-center text-center space-y-2">
          <AlertTriangle className="w-8 h-8 text-amber-600" />
          <h4 className="text-xs sm:text-sm font-bold text-[#0b1e2c]">
            {isVN ? "Chẩn đoán trước khi làm" : "Pre-diagnosis Needed"}
          </h4>
          <p className="text-xs text-slate-700 font-semibold leading-relaxed">
            {isVN ? "DentalNKT sẽ tư vấn làm răng sứ thẩm mỹ nếu răng bạn thuộc nhóm tẩy trắng không hiệu quả." : "DentalNKT will suggest veneers or crowns if whitening is clinically ineffective for your diagnosis."}
          </p>
        </div>
      </section>

      {/* 4. Whitening Methods */}
      <section className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-serif font-extrabold text-dark-brand text-center">
          {isVN ? "4. Các phương pháp tẩy trắng tại DentalNKT" : "4. Bleaching Methodologies at DentalNKT"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-50 border border-slate-100 p-6 sm:p-8 rounded-3xl space-y-4">
            <h3 className="font-serif text-lg font-bold text-dark-brand border-b border-slate-200 pb-2">
              {isVN ? "Tẩy trắng tại phòng khám (In-Office)" : "In-Office Laser Whitening"}
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">
              {isVN
                ? "Sử dụng gel chứa Hydrogen Peroxide nồng độ cao (25% - 35%) được kích hoạt dưới bước sóng ánh sáng Laser xanh Flash chuyên nghiệp. Quá trình bẻ gãy chất màu diễn ra nhanh chóng, cho kết quả nâng tone răng rõ rệt ngay lập tức chỉ sau 45–90 phút tại phòng khám."
                : "Uses premium hydrogen peroxide bleaching gels (25%-35% concentration) activated by focused cool blue laser light. This accelerates color degradation, delivering visible shade improvements instantly within a single 45-90 minutes chair session."}
            </p>
          </div>
          <div className="bg-slate-50 border border-slate-100 p-6 sm:p-8 rounded-3xl space-y-4">
            <h3 className="font-serif text-lg font-bold text-dark-brand border-b border-slate-200 pb-2">
              {isVN ? "Máng tẩy tại nhà (Take-Home Tray)" : "Custom Take-Home Trays"}
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">
              {isVN
                ? "Bác sĩ tiến hành lấy dấu răng để đúc cặp máng silicon dẻo ôm khít khịt cung răng của bạn. Bạn sử dụng gel tẩy trắng nồng độ thấp (10% - 20%) tra vào khay ngậm hàng đêm tại nhà trong vài ngày, rất thích hợp để duy trì độ trắng sáng lâu dài."
                : "We take dental impressions to fabricate custom-molded silicon trays that sit flush against your teeth. You apply milder carbamide peroxide gels into the trays at home overnight for a few days, ideal for touch-ups and shade maintenance."}
            </p>
          </div>
        </div>
      </section>

      {/* 5. Process & Aftercare */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div className="space-y-6">
          <h3 className="font-serif text-xl font-bold text-dark-brand">
            {isVN ? "5. Quy trình & Thời gian điều trị" : "5. Treatment Protocols & Timeline"}
          </h3>
          <ul className="space-y-4 text-xs sm:text-sm text-slate-700 font-normal">
            <li className="flex gap-2.5 items-start">
              <Check className="w-4.5 h-4.5 text-teal-brand shrink-0 mt-0.5" />
              <span>{isVN ? "Thực hiện hoàn tất chỉ trong 1 buổi hẹn duy nhất (45-90 phút), không cần quay lại phòng khám." : "Completed in a single appointment (45-90 minutes), no follow-up visits required."}</span>
            </li>
            <li className="flex gap-2.5 items-start">
              <Check className="w-4.5 h-4.5 text-teal-brand shrink-0 mt-0.5" />
              <span>{isVN ? "Khi kết hợp làm Veneer: Tẩy trắng thực hiện ở buổi đầu để làm nền màu trước khi chọn tone răng sứ." : "For veneer cases, bleaching is performed at Day 1 to establish the bright background before shade selection."}</span>
            </li>
            <li className="flex gap-2.5 items-start">
              <Check className="w-4.5 h-4.5 text-teal-brand shrink-0 mt-0.5" />
              <span>{isVN ? "Cung cấp khay ngậm tại nhà trong ngày hoặc ngày hôm sau sau khi lấy dấu dấu răng." : "Custom take-home trays are molded and delivered to you within 24 hours of impression scans."}</span>
            </li>
          </ul>
        </div>

        <div className="space-y-6 bg-slate-50 border border-slate-100 p-6 sm:p-8 rounded-3xl">
          <h3 className="font-serif text-xl font-bold text-dark-brand">
            {isVN ? "Cảm giác sau khi làm & Cách chăm sóc" : "Post-Treatment Care & Sensitivity"}
          </h3>
          <ul className="space-y-4 text-xs sm:text-sm text-slate-700 font-normal">
            <li className="flex gap-2.5 items-start">
              <Check className="w-4.5 h-4.5 text-teal-brand shrink-0 mt-0.5" />
              <span>{isVN ? "Ê buốt nhẹ tạm thời là bình thường, sẽ biến mất hoàn toàn sau 24-48 giờ tiếp theo." : "Mild temporary sensitivity is normal and will fully resolve within 24-48 hours."}</span>
            </li>
            <li className="flex gap-2.5 items-start">
              <Check className="w-4.5 h-4.5 text-teal-brand shrink-0 mt-0.5" />
              <span>{isVN ? "Kiêng thực phẩm sẫm màu (cà phê, nghệ, rượu đỏ, coca) trong 48 giờ đầu để tránh bám màu." : "Avoid dark foods and staining agents (coffee, tea, red wine, curry) during the first 48 hours."}</span>
            </li>
            <li className="flex gap-2.5 items-start">
              <Check className="w-4.5 h-4.5 text-teal-brand shrink-0 mt-0.5" />
              <span>{isVN ? "Không bắt buộc tái khám tại Úc. Nếu ê buốt quá 72 giờ, bạn nên hỏi nha sĩ địa phương." : "No mandatory Australian dentist follow-up is needed. Consult a dentist if sensitivity persists past 72 hours."}</span>
            </li>
          </ul>
        </div>
      </section>

      {/* 6. Pricing Table */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-dark-brand text-center">
          {isVN ? "6. Chi phí tẩy trắng răng tham khảo" : "6. Teeth Whitening Price Index"}
        </h2>
        <div className="border border-slate-200 rounded-3xl overflow-hidden bg-white shadow-sm overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-[#0b1e2c] text-white font-serif text-xs uppercase tracking-wider">
                <th className="p-4 border-b border-slate-800">{isVN ? "Phương pháp / Dịch vụ" : "Whitening Method Option"}</th>
                <th className="p-4 border-b border-slate-800 text-right">{isVN ? "Đơn giá (VNĐ)" : "Price (VND)"}</th>
                <th className="p-4 border-b border-slate-800 text-right">{isVN ? "Đơn giá (USD)" : "Price (USD)"}</th>
                <th className="p-4 border-b border-slate-800 text-right">{isVN ? "Đơn giá (AUD, Tham khảo)" : "Price (AUD, Ref)"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-800 font-medium">
              {[
                {
                  method: isVN ? "Tẩy trắng răng Laser Whitening tại phòng khám — Cả 2 Hàm" : "In-Office Laser Teeth Whitening — Both Arches",
                  vnd: "3.000.000 VNĐ",
                  usd: "$114 USD",
                  aud: "$160 AUD"
                },
                {
                  method: isVN ? "Tẩy trắng răng tại nhà 2 ống thuốc" : "At-Home Teeth Whitening Kit (2 Gels)",
                  vnd: "2.400.000 VNĐ",
                  usd: "$91 USD",
                  aud: "$130 AUD"
                },
                {
                  method: isVN ? "Máng tẩy trắng không bao gồm thuốc (1 cặp)" : "Whitening Trays (Excluding Gel, 1 Pair)",
                  vnd: "1.200.000 VNĐ",
                  usd: "$46 USD",
                  aud: "$65 AUD"
                }
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-medium text-slate-800 bg-slate-50/50">{row.method}</td>
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
            ? "* Chú thích: Đơn giá tẩy trắng răng tại DentalNKT đã bao gồm chi phí khám lâm sàng ban đầu, chụp X-quang tại chỗ và tư vấn chi tiết từ bác sĩ. Tỷ giá quy đổi cố định: 1 AUD = 18.441 VNĐ, 1 USD = 26.280 VNĐ."
            : "* Price Note: Whitening prices include complimentary initial exam, panoramic X-rays, and clinical consultation. Currency converted at the fixed rates: 1 AUD = 18,441 VND, 1 USD = 26,280 VND."}
        </p>
      </section>

      {/* 7. Warranty */}
      <section className="bg-slate-50 border border-slate-100 rounded-3xl p-8 sm:p-10 space-y-4">
        <h2 className="text-xl sm:text-2xl font-serif font-extrabold text-dark-brand">
          {isVN ? "7. Chính sách bảo hành tẩy trắng răng" : "7. Teeth Whitening Warranty Exclusions"}
        </h2>
        <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">
          {isVN
            ? "Tẩy trắng răng là dịch vụ thẩm mỹ không có yếu tố vật liệu cơ học cố định, kết quả thẩm mỹ và thời gian bền màu hoàn toàn phụ thuộc vào tính chất men ngà răng tự nhiên của mỗi người cũng như thói quen sinh hoạt ăn uống hậu điều trị. Do đó, dịch vụ tẩy trắng răng KHÔNG thuộc diện áp dụng chính sách bảo hành kỹ thuật của phòng khám."
            : "Teeth whitening is a biological cosmetic procedure that does not involve structural restoration components. The final shade outcome and color retention are highly dependent on individual enamel genetics and post-treatment dietary habits. Therefore, teeth bleaching is excluded from our technical warranty policies."}
        </p>
        <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">
          {isVN
            ? "Tuy nhiên, đối với các trường hợp khách hàng kết hợp tẩy trắng răng với dán mặt sứ Veneer hoặc bọc mão răng sứ, các phần phục hình sứ vĩnh viễn đó vẫn được áp dụng chính sách bảo hành từ 7 đến 10 năm theo đúng quy chế chung của DentalNKT."
            : "However, if you combine teeth whitening with permanent veneers or crowns, those ceramic restorations are fully covered by our standard 7 to 10 years warranty policies."}
        </p>
      </section>

      {/* 8. FAQ Section */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-dark-brand text-center">
          {isVN ? "8. Câu hỏi thường gặp về Tẩy trắng răng" : "8. Frequently Asked Questions"}
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

      {/* 9. Call To Action Footer */}
      <section className="bg-gradient-to-br from-[#0b1e2c] via-[#0f2a3f] to-[#0b1e2c] text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-teal-brand/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-teal-brand/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-2xl mx-auto space-y-4">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold">
            {isVN ? "Tẩy trắng răng kết hợp — Tối ưu hóa nụ cười rạng rỡ" : "Enhance Your Whitening With Veneers & Crowns"}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
            {isVN 
              ? "Bạn đang tìm hiểu dịch vụ dán sứ Veneer hay Smile Makeover tại DentalNKT? Hãy gửi hình ảnh tình trạng răng miệng hiện tại để bác sĩ tư vấn kết hợp tẩy trắng răng nền miễn phí trong phác đồ điều trị của bạn."
              : "Considering E.max Veneers or a Smile Makeover? Send us photos of your current smile to see how teeth whitening can be integrated into your plan."}
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
              href="/services/veneers" 
              className="text-slate-300 hover:text-white px-4 py-3.5 text-xs sm:text-sm transition-all flex items-center gap-1.5 font-medium"
            >
              {isVN ? "Xem trang dán sứ Veneer" : "View Veneers Page"}
            </Link>
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
