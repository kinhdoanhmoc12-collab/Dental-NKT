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

export default function BridgesClient() {
  const { lang, t } = useLanguage();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const isVN = lang === "VN";

  React.useEffect(() => {
    document.title = isVN 
      ? "Cầu răng sứ (Bridges) — Phục hồi răng mất không cần phẫu thuật | DentalNKT"
      : "Dental Bridges — Non-Surgical Teeth Restoration | DentalNKT";
  }, [isVN]);

  // FAQ Items
  const faqItems = [
    {
      q: isVN 
        ? "Cầu răng sứ và Implant, cái nào tốt hơn?" 
        : "Dental Bridge vs. Implant: which is better?",
      a: isVN 
        ? "Không có câu trả lời chung cho tất cả. Implant giúp bảo tồn răng thật khỏe mạnh vì không phải mài răng bên cạnh, đồng thời ngăn tiêu xương hàm, nhưng cần 2 chuyến đi và chi phí cao hơn. Cầu răng sứ hoàn thành nhanh hơn trong 1 chuyến đi duy nhất với chi phí tiết kiệm hơn, nhưng buộc phải mài nhỏ 2 răng bên cạnh để làm trụ nâng đỡ. DentalNKT luôn ưu tiên khuyên dùng Implant nếu răng bên cạnh còn khỏe mạnh."
        : "There is no single answer. An implant preserves neighboring healthy teeth by avoiding preparation and prevents bone resorption, but requires two trips and higher initial investment. A dental bridge is completed quickly in a single trip at a lower cost, but requires trimming adjacent teeth to serve as support pillars. We recommend implants if adjacent teeth are vital and healthy."
    },
    {
      q: isVN 
        ? "Cầu răng sứ dùng được bao lâu?" 
        : "How long does a dental bridge last?",
      a: isVN 
        ? "Nếu được vệ sinh và chăm sóc đúng cách, cầu răng sứ thường có tuổi thọ từ 10 đến 15 năm. Điểm yếu lớn nhất theo thời gian thường là viền xi măng liên kết giữa mão răng trụ với cùi răng thật bị hở gây sâu răng bên dưới, hoặc nứt gãy răng giả nhịp giữa khi chịu lực nhai lớn."
        : "With proper hygiene and routine maintenance, a dental bridge usually lasts 10 to 15 years. Over time, the primary vulnerability is the cement seal between the crowns and anchor teeth, which can compromise the structure if decay develops underneath, or masticatory stress fracturing the bridge."
    },
    {
      q: isVN 
        ? "Tôi có thể hoàn thành cầu răng sứ trong 1 chuyến đi không?" 
        : "Can I complete my dental bridge in a single trip?",
      a: isVN 
        ? "Có. Đây là lợi thế lớn nhất của cầu răng sứ so với cấy ghép Implant. Quy trình chế tác cầu răng sứ tại DentalNKT chỉ mất khoảng 7 đến 10 ngày để hoàn thiện cùi răng, tiện sứ CAD/CAM và gắn cố định vĩnh viễn trong 1 chuyến đi duy nhất."
        : "Yes. This is the biggest advantage of a dental bridge compared to implants. The entire custom bridge process at DentalNKT requires only 7 to 10 days of stay, completing the tooth preparation, lab milling, and final cementation in one single trip."
    },
    {
      q: isVN 
        ? "Nếu 1 trong 2 răng trụ bị hỏng sau này thì sao?" 
        : "What happens if one of the anchor teeth gets damaged later?",
      a: isVN 
        ? "Đây là một điểm yếu của giải pháp này. Do cầu răng sứ được thiết kế liền khối nâng đỡ lẫn nhau, nếu một răng trụ bị hỏng (viêm tủy, gãy chân răng, tiêu xương nướu), toàn bộ cầu răng thường sẽ phải tháo bỏ hoàn toàn để xử lý tủy/chân răng rồi mới chế tác cầu mới rộng hơn hoặc cấy trụ Implant thay thế."
        : "This is a disadvantage of the bridge design. Because the structure is single-unit, if one anchor tooth fails (due to pulp decay, fracture, or gum disease), the entire bridge must be removed to treat the compromised root. You would then require a longer bridge or implants."
    },
    {
      q: isVN 
        ? "Cầu răng sứ có được bảo hành khi tôi đã về Úc không?" 
        : "Is my dental bridge warranty valid after I return to Australia?",
      a: isVN 
        ? "Có, toàn bộ cầu răng sứ tại DentalNKT được áp dụng chính sách Bảo hành Toàn cầu với thời hạn từ 5 đến 10 năm tùy thuộc vào loại vật liệu sứ bạn chọn. Mọi điều khoản về xử lý bảo hành từ xa và hỗ trợ vé máy bay khứ hồi (nếu do lỗi kỹ thuật của phòng khám) đều có hiệu lực đầy đủ."
        : "Yes, all dental bridges at DentalNKT are covered by our Global Warranty Policy spanning 5 to 10 years depending on the material selected. All remote clinical correction terms and return flight supports (if due to clinical/lab error) remain fully active."
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
              <span>{isVN ? "PHỤC HỒI RĂNG MẤT KHÔNG CẦN PHẪU THUẬT" : "NON-SURGICAL TOOTH RESTORATION"}</span>
            </span>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-white leading-tight">
              {isVN 
                ? "Cầu Răng Sứ (Bridges) — Phục Hồi Răng Mất Không Cần Phẫu Thuật" 
                : "Dental Bridges — Non-Surgical Teeth Restoration"}
            </h1>
            
            <p className="text-sm sm:text-base text-slate-200 font-normal leading-relaxed">
              {isVN 
                ? "Giải pháp phục hình cố định thay thế răng mất nhanh chóng trong 1 chuyến đi. Không phẫu thuật cắm trụ, không cần chờ xương tích hợp bằng cách tận dụng các răng thật bên cạnh làm bệ đỡ vững chắc."
                : "A fixed restorative solution replacing missing teeth quickly in a single trip. Bypasses surgical implant placement and healing times by utilizing adjacent natural teeth as structural supports."}
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-slate-700/80 w-full">
              <div>
                <span className="text-xs text-slate-300 block font-medium">
                  {isVN ? "Đơn giá mỗi đơn vị (unit) từ:" : "Price per unit from:"}
                </span>
                <span className="text-2xl sm:text-3xl font-extrabold text-teal-brand">
                  {isVN ? "2.400.000 VNĐ" : "$130 AUD"}
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

      {/* 1. What is a Bridge */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-7 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-dark-brand">
            {isVN ? "1. Cầu răng sứ là gì?" : "1. What is a Dental Bridge?"}
          </h2>
          <div className="space-y-4 text-sm sm:text-base text-slate-800 leading-relaxed font-normal">
            <p>
              {isVN
                ? "Cầu răng sứ (Bridge) là phục hình cố định thay thế một hoặc vài răng đã mất liên kề nhau. Bác sĩ thực hiện bằng cách mài bớt lớp men bên ngoài của 2 răng thật bên cạnh khoảng trống mất răng để làm trụ đỡ vững chắc. Sau đó, một dải răng sứ liền khối gồm 2 mão sứ chụp lên răng trụ và răng giả (Pontic) lơ lửng ở giữa được gắn chặt cố định."
                : "A dental bridge is a fixed prosthesis that replaces one or more missing adjacent teeth. Our clinical team prepares the adjacent natural teeth on both sides of the gap to act as support pillars. A multi-unit ceramic structure, consisting of anchor crowns and suspended prosthetic teeth (pontics), is then permanently cemented."}
            </p>
            <p>
              {isVN
                ? "Ưu thế lớn nhất của cầu răng sứ so với cấy ghép Implant là không cần can thiệp phẫu thuật cắm trụ vào xương hàm, từ đó loại bỏ hoàn toàn thời gian chờ lành thương 3-6 tháng. Tuy nhiên, việc mài đi mô răng thật khỏe mạnh bên cạnh là điều bắt buộc phải đánh đổi."
                : "The primary clinical benefit of a bridge over implants is the lack of surgical intervention, avoiding the typical 3-6 months osseointegration window. However, this mechanical advantage requires shaping and removing a layer of healthy enamel from the adjacent support teeth."}
            </p>
          </div>
        </div>

        <div className="md:col-span-5 bg-teal-brand-light/30 border border-teal-brand-light p-8 rounded-3xl space-y-4">
          <h3 className="text-base font-bold text-dark-brand">
            {isVN ? "Đặc điểm cơ bản của Cầu răng sứ" : "Key Characteristics of Dental Bridges"}
          </h3>
          <ul className="space-y-3.5">
            {[
              isVN ? "Phục hồi răng mất nhanh chóng, chỉ cần 1 chuyến đi" : "Rapid teeth replacement completed in just 1 trip",
              isVN ? "Không cần phẫu thuật xâm lấn xương hàm" : "Bypasses invasive surgical bone procedures",
              isVN ? "Khôi phục chức năng nhai ổn định" : "Restores balanced chewing and speech dynamics",
              isVN ? "Đánh đổi bằng việc phải mài nhỏ 2 răng thật khỏe" : "Requires preparation of 2 healthy adjacent teeth",
              isVN ? "Không ngăn được tình trạng tiêu xương nướu tại vị trí mất răng" : "Does not prevent bone resorption at the missing tooth site"
            ].map((benefit, idx) => (
              <li key={idx} className="flex gap-2 items-start text-xs sm:text-sm text-slate-800">
                <Check className="w-4.5 h-4.5 text-teal-brand shrink-0 mt-0.5" />
                <span className="font-semibold">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 2. Bridge vs Implant */}
      <section className="bg-slate-50 border border-slate-100 rounded-3xl p-8 sm:p-10 space-y-6">
        <h2 className="text-xl sm:text-2xl font-serif font-extrabold text-dark-brand text-center">
          {isVN ? "2. Cầu răng sứ hay Implant — Quyết định dựa trên yếu tố nào?" : "2. Dental Bridge vs. Implant: How to Choose?"}
        </h2>
        <div className="border border-slate-200 rounded-3xl overflow-hidden bg-white shadow-sm overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-[#0b1e2c] text-white font-serif text-xs uppercase tracking-wider">
                <th className="p-4 border-b border-slate-800">{isVN ? "Yếu tố so sánh" : "Decision Criteria"}</th>
                <th className="p-4 border-b border-slate-800 text-center">{isVN ? "Nên chọn Cầu răng sứ" : "Leaning Toward Dental Bridge"}</th>
                <th className="p-4 border-b border-slate-800 text-center">{isVN ? "Nên chọn cấy ghép Implant" : "Leaning Toward Dental Implant"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {[
                {
                  criteria: isVN ? "Tình trạng 2 răng bên cạnh" : "Status of the adjacent teeth",
                  bridge: isVN ? "Đã từng bọc mão sứ hoặc bị hư hỏng cùi cần bọc lại" : "Already crowned or decay/fillings present",
                  implant: isVN ? "Còn nguyên vẹn, khỏe mạnh, chưa từng can thiệp mài" : "Virgin teeth, completely healthy"
                },
                {
                  criteria: isVN ? "Thời gian bạn có thể ở Việt Nam" : "Available stay duration in Vietnam",
                  bridge: isVN ? "Cần nhanh chóng, chỉ đi được 1 chuyến duy nhất" : "Requires fast results in a single short trip",
                  implant: isVN ? "Có thể sắp xếp 2 chuyến đi cách nhau 3-6 tháng" : "Can organize two trips separated by several months"
                },
                {
                  criteria: isVN ? "Ngân sách tài chính ban đầu" : "Initial financial budget",
                  bridge: isVN ? "Ưu tiên chi phí thấp hơn trong ngắn hạn" : "Prefer lower initial costs in the short term",
                  implant: isVN ? "Sẵn sàng đầu tư lâu dài để bảo tồn răng thật" : "Ready for higher investment to preserve bone & teeth"
                },
                {
                  criteria: isVN ? "Tình trạng xương hàm tại chỗ mất răng" : "Jawbone density at the missing site",
                  bridge: isVN ? "Không ảnh hưởng nhiều đến cấu trúc xương hàm" : "Bone volume is not a limiting factor",
                  implant: isVN ? "Cần xương tốt, hoặc chấp nhận ghép xương nâng xoang" : "Sufficient bone volume or open to bone grafts"
                },
                {
                  criteria: isVN ? "Thói quen nghiến răng nặng khi ngủ" : "Severe nocturnal bruxism",
                  bridge: isVN ? "Lực nhai dồn lên răng trụ, cần máng bảo vệ" : "Stress focused on anchor teeth; night guard mandatory",
                  implant: isVN ? "Cả hai đều có rủi ro, bắt buộc đeo máng chống nghiến" : "Risk of screw loosening; night guard mandatory"
                }
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-medium text-slate-800 bg-slate-50/50">{row.criteria}</td>
                  <td className="p-4 text-center font-semibold text-teal-brand">{row.bridge}</td>
                  <td className="p-4 text-center text-slate-600">{row.implant}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-amber-50/20 border border-amber-200 rounded-2xl p-6 flex gap-3 items-start">
          <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
            <strong className="text-dark-brand block mb-1">{isVN ? "NGUYÊN TẮC TƯ VẤN TẠI DENTALNKT:" : "DENTALNKT CLINICAL PROTOCOL:"}</strong>
            <p>
              {isVN
                ? "Nếu 2 răng bên cạnh khoảng trống mất răng hoàn toàn khỏe mạnh, bác sĩ của chúng tôi luôn ưu tiên tư vấn phương án Implant để không phải mài nhỏ mô răng thật không cần thiết. Cầu răng sứ chỉ được chỉ định khi 2 răng kế cận đã có mão sứ cũ hoặc hư tổn nặng, hoặc khi bệnh nhân không thể thu xếp chuyến đi thứ 2."
                : "If the adjacent teeth are healthy and intact, our clinical team always recommends implants to avoid irreversible reduction of natural tooth structure. Bridges are suggested when adjacent teeth already have existing crowns, large restoration fillings, or when a second trip is impossible."}
            </p>
          </div>
        </div>
      </section>

      {/* 3. Material Options & Unit calculation */}
      <section className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-serif font-extrabold text-dark-brand text-center">
          {isVN ? "3. Các loại vật liệu và cách tính giá cầu răng theo đơn vị (Unit)" : "3. Material Options & Unit Calculations"}
        </h2>
        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 mb-6">
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
            {isVN 
              ? "Cầu răng sứ được tính giá dựa trên số đơn vị (unit) cấu thành cầu răng: mỗi mão chụp lên răng trụ và mỗi răng giả lơ lửng ở giữa đều tính là 1 đơn vị. Ví dụ: cầu 3 đơn vị (thay thế 1 răng mất) = 2 mão răng trụ + 1 răng giả ở giữa."
              : "Dental bridges are priced per unit (crown): each anchor crown on the support teeth and each floating replacement tooth (pontic) counts as one unit. For example: a 3-unit bridge replacing one missing tooth consists of 2 anchor crowns and 1 pontic."}
          </p>
        </div>
        
        <div className="border border-slate-200 rounded-3xl overflow-hidden bg-white shadow-sm overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-[#0b1e2c] text-white font-serif text-xs uppercase tracking-wider">
                <th className="p-4 border-b border-slate-800">{isVN ? "Vật liệu" : "Material Group"}</th>
                <th className="p-4 border-b border-slate-800">{isVN ? "Đặc điểm nổi bật" : "Key Features"}</th>
                <th className="p-4 border-b border-slate-800">{isVN ? "Phù hợp nhất cho" : "Best Suited For"}</th>
                <th className="p-4 border-b border-slate-800 text-center">{isVN ? "Bảo hành" : "Warranty"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {[
                {
                  material: isVN ? "Sứ Zirconia (Đức)" : "Germany Solid Zirconia",
                  features: isVN ? "Chịu lực nhai rất tốt, độ cứng cao, giá thành hợp lý." : "Excellent mechanical strength, high fracture resistance, cost-effective.",
                  bestFor: isVN ? "Cầu răng hàm phía trong yêu cầu chịu tải ăn nhai lớn." : "Posterior molar bridges where masticatory forces are concentrated.",
                  warranty: "5 " + (isVN ? "Năm" : "Years")
                },
                {
                  material: isVN ? "Sứ IPS E.max (Thụy Sĩ)" : "IPS E.max Glass-Ceramic",
                  features: isVN ? "Độ trong mờ tự nhiên tựa men răng thật, tính thẩm mỹ tối đa." : "Outstanding light-translucency matching natural tooth enamel.",
                  bestFor: isVN ? "Cầu răng cửa và răng tiền hàm phía ngoài cần thẩm mỹ." : "Anterior front bridges requiring premium aesthetic integration.",
                  warranty: "7 " + (isVN ? "Năm" : "Years")
                },
                {
                  material: isVN ? "Sứ cao cấp (Lava / Ceramill)" : "Premium Ceramic (Lava/Ceramill)",
                  features: isVN ? "Khung sườn chịu lực siêu bền kết hợp lớp phủ thẩm mỹ cao." : "Combines high-density structured cores with beautiful shading overlay.",
                  bestFor: isVN ? "Cầu răng sau hoặc ca phục hình đòi hỏi cả độ bền lẫn thẩm mỹ." : "High-demand cases requiring both durability and lifelike aesthetics.",
                  warranty: "10 " + (isVN ? "Năm" : "Years")
                }
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-slate-800 bg-slate-50/50">{row.material}</td>
                  <td className="p-4 leading-relaxed">{row.features}</td>
                  <td className="p-4">{row.bestFor}</td>
                  <td className="p-4 text-center font-semibold text-teal-brand">{row.warranty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-[11px] sm:text-xs text-slate-700 font-semibold italic">
          {isVN 
            ? "* Khuyến cáo cơ học: Đối với cầu răng nhịp dài (thay thế từ 3 răng mất liền kề trở lên), nhịp cầu quá dài dễ gây quá tải và nứt gãy răng trụ. Trường hợp này bác sĩ khuyên dùng cấy ghép nhiều trụ Implant hỗ trợ."
            : "* Mechanical Note: For long-span bridges (replacing 3 or more adjacent missing teeth), the span width can overload the anchors. We recommend implant-supported restorations instead."}
        </p>
      </section>

      {/* 4. Treatment Timeline */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-dark-brand text-center">
          {isVN ? "4. Quy trình thực hiện Cầu răng sứ tại DentalNKT" : "4. Custom Bridge Fabrication & Fitting Process"}
        </h2>
        <div className="border border-slate-200 rounded-3xl overflow-hidden bg-white shadow-sm overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-[#0b1e2c] text-white font-serif text-xs uppercase tracking-wider">
                <th className="p-4 border-b border-slate-800">{isVN ? "Thời gian" : "Timeline"}</th>
                <th className="p-4 border-b border-slate-800">{isVN ? "Các bước thực hiện lâm sàng" : "Clinical Procedures"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {[
                {
                  day: isVN ? "Ngày 1" : "Day 1",
                  desc: isVN 
                    ? "Thăm khám lâm sàng, chụp X-quang chẩn đoán, đánh giá sức khỏe răng trụ. Tư vấn phương án Cầu răng sứ hay Implant, chốt kế hoạch bằng văn bản."
                    : "Clinical consultation, diagnostic X-rays, evaluation of anchor teeth vitality. Discussion on bridge vs. implant and signing written treatment plan."
                },
                {
                  day: isVN ? "Ngày 2" : "Day 2",
                  desc: isVN 
                    ? "Tiến hành mài mỏng 2 răng trụ làm bệ đỡ, lấy dấu mẫu hàm kỹ thuật số 3D và gắn cầu răng tạm bảo vệ."
                    : "Tooth preparation (shaping/trimming) of anchors, digital 3D intraoral scanning, temporary bridge placement."
                },
                {
                  day: isVN ? "Ngày 3 – 6" : "Day 3 – 6",
                  desc: isVN 
                    ? "Hệ thống Labo thiết kế CAD/CAM và chế tác dải cầu răng sứ liền khối (3 đến 5 ngày làm việc tùy vật liệu)."
                    : "In-house dental lab designs and mills the multi-unit bridge framework using CAD/CAM technology."
                },
                {
                  day: isVN ? "Ngày 7" : "Day 7",
                  desc: isVN 
                    ? "Thử sườn cầu răng trên miệng, kiểm tra độ khít sát viền nướu răng trụ, màu sắc răng và điều chỉnh sơ khởi."
                    : "Try-in session, check marginal adaptation, color match, and minor calibrations."
                },
                {
                  day: isVN ? "Ngày 8 – 9" : "Day 8 – 9",
                  desc: isVN 
                    ? "Tiến hành gắn cố định vĩnh viễn bằng xi măng nha khoa, chỉnh khớp cắn tối ưu, bàn giao hướng dẫn bảo hành."
                    : "Final cementation bonding, bite calibration, post-op instructions, and global warranty handover."
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
        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 flex gap-3 items-start">
          <Info className="w-5 h-5 text-teal-brand shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
            {isVN 
              ? "Thời gian lưu trú khuyến nghị: 7 – 10 ngày tại Hà Nội. Hoàn thành toàn bộ quy trình chỉ trong 1 chuyến đi duy nhất, rất thuận tiện cho khách hàng du lịch nha khoa từ Úc."
              : "Recommended stay: 7 – 10 days in Hanoi. The entire process is finished in one single trip, making it highly efficient for overseas patients."}
          </p>
        </div>
      </section>

      {/* 5. Risks */}
      <section className="bg-amber-50/15 border border-amber-100 rounded-3xl p-8 sm:p-10 space-y-6">
          <div className="text-amber-800">
            <h2 className="text-xl sm:text-2xl font-serif font-extrabold">
              {isVN ? "5. Rủi ro y khoa và điều cần biết trước khi quyết định" : "5. Risks & Complications to Know Before Deciding"}
            </h2>
          </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              vn: "Bắt buộc phải mài nhỏ cùi răng của 2 răng thật bên cạnh — can thiệp mài răng là vĩnh viễn không thể đảo ngược.",
              en: "Adjacent healthy teeth must be permanently shaped and trimmed – an irreversible biological reduction."
            },
            {
              vn: "Lực nhai toàn bộ dồn lên răng trụ: nếu 1 răng trụ bị hỏng (sâu răng, viêm tủy), toàn bộ cầu răng sẽ phải tháo bỏ làm lại.",
              en: "Masticatory load is concentrated on anchor teeth; if one anchor develops decay/pulpitis, the entire bridge must be replaced."
            },
            {
              vn: "Khó vệ sinh ở vùng nướu dưới răng giả (Pontic) lơ lửng, dễ tích tụ mảng bám gây hôi miệng hoặc viêm nướu tại chỗ.",
              en: "The gap underneath the suspended prosthetic tooth (pontic) is hard to clean, increasing plaque buildup and gingivitis risk."
            },
            {
              vn: "Xương hàm tại vị trí mất răng tiếp tục tiêu biến tự nhiên theo thời gian do không có chân răng kích thích lực nhai.",
              en: "Bone resorption continues at the missing tooth site as there is no implant post to stimulate the underlying jawbone."
            },
            {
              vn: "Tuổi thọ cơ học giới hạn (10-15 năm), lớp xi măng gắn kết có thể bị rã dần theo thời gian dẫn đến rò rỉ vi khuẩn.",
              en: "Lifespan is limited (10-15 years); dental cement can slowly disintegrate, leading to marginal micro-leakage."
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

      {/* 6. Bridge Hygiene Guidelines */}
      <section className="bg-slate-50 border border-slate-100 rounded-3xl p-8 sm:p-10 space-y-6">
        <h2 className="text-xl sm:text-2xl font-serif font-extrabold text-dark-brand">
          {isVN ? "6. Hướng dẫn cách vệ sinh Cầu răng sứ đúng cách" : "6. Post-Op Hygiene & Maintenance Guidelines"}
        </h2>
        <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">
          {isVN 
            ? "Khe hở nhỏ dưới răng giả (Pontic) là nơi lý tưởng để mảng bám thức ăn giắt lại. Đánh răng thông thường không thể len lỏi vào khu vực này. DentalNKT khuyên dùng 3 công cụ sau hàng ngày:"
            : "The gap beneath the replacement tooth (pontic) is a magnet for food particles. Standard toothbrushes cannot reach this space. We recommend using three essential hygiene tools daily:"}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              titleVN: "Chỉ nha khoa chuyên dụng (Superfloss)",
              titleEN: "Specialized Bridge Floss",
              vn: "Có đầu nhựa cứng để luồn qua khe dưới cầu răng, phần thân bông xốp giúp làm sạch nhẹ nhàng bề mặt tiếp xúc nướu.",
              en: "Features a stiffened plastic end to thread under the bridge and a spongy midsection to clean the gum-facing surface."
            },
            {
              titleVN: "Bàn chải kẽ răng (Interdental Brush)",
              titleEN: "Interdental Brush",
              vn: "Đầu lông bàn chải siêu nhỏ giúp dễ dàng len lỏi, cạo sạch mảng bám thức ăn ở cổ răng trụ và dưới nướu cầu răng.",
              en: "Tiny bristled brush head designed to sweep away food debris at the margins of anchor teeth."
            },
            {
              titleVN: "Máy tăm nước (Water Flosser)",
              titleEN: "Dental Water Flosser",
              vn: "Sử dụng tia nước áp lực nhẹ giúp thổi bay mảng bám quanh viền nướu, cực kỳ hữu dụng nếu bạn khó dùng chỉ nha khoa.",
              en: "Uses a targeted water jet to flush out trapped debris around margins; highly recommended if manual flossing is difficult."
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white border border-slate-150 p-6 rounded-2xl space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 flex items-center justify-center bg-teal-brand-light text-teal-brand rounded-full font-bold text-xs shrink-0">
                  {idx + 1}
                </span>
                <h4 className="text-xs sm:text-sm font-bold text-dark-brand">
                  {isVN ? item.titleVN : item.titleEN}
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed pl-8">
                {isVN ? item.vn : item.en}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-teal-brand/10 border border-teal-brand/20 rounded-2xl p-6 flex gap-3 items-start mt-4">
          <Info className="w-5 h-5 text-teal-brand shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
            <strong className="text-dark-brand block mb-1">{isVN ? "LƯU Ý KHI TÁI KHÁM ĐỊNH KỲ TẠI ÚC:" : "ADVICE FOR YOUR AUSTRALIAN DENTIST:"}</strong>
            <p>
              {isVN
                ? "Khi đi cạo vôi răng định kỳ tại Úc, hãy báo trước với nha sĩ: 'Tôi có cầu răng sứ — vui lòng sử dụng dụng cụ cạo vôi tay (hand scaler) ở vùng nướu dưới răng giả, tránh dùng đầu máy siêu âm gõ trực tiếp lên bề mặt sứ gây nứt mẻ'."
                : "During routine scaling appointments in Australia, inform your hygienist: 'I have a porcelain bridge — please use hand scalers around the margins and pontics, and avoid direct application of ultrasonic scaler tips on the ceramic surface to prevent micro-fractures.'"}
            </p>
          </div>
        </div>
      </section>

      {/* 7. Detailed Pricing */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-dark-brand text-center">
          {isVN ? "7. Chi phí bọc cầu răng sứ tham khảo" : "7. Comprehensive Dental Bridge Pricing"}
        </h2>
        <div className="border border-slate-200 rounded-3xl overflow-hidden bg-white shadow-sm overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-[#0b1e2c] text-white font-serif text-xs uppercase tracking-wider">
                <th className="p-4 border-b border-slate-800">{isVN ? "Chất liệu răng sứ" : "Material Specification"}</th>
                <th className="p-4 border-b border-slate-800 text-right">{isVN ? "Đơn giá/Đơn vị (USD)" : "Price per Unit (USD)"}</th>
                <th className="p-4 border-b border-slate-800 text-right">{isVN ? "Đơn giá/Đơn vị (AUD)" : "Price per Unit (AUD)"}</th>
                <th className="p-4 border-b border-slate-800 text-right">{isVN ? "Cầu 3 đơn vị tiêu chuẩn (AUD)" : "Standard 3-Unit Bridge (AUD)"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {[
                {
                  item: isVN ? "Chụp sứ Zirconia DDBio chịu lực (Đức)" : "Germany Solid Zirconia Core Crown",
                  usd: "$274 USD",
                  aud: "$390 AUD",
                  bridge3: "$1,170 AUD"
                },
                {
                  item: isVN ? "Chụp sứ IPS E.max glass-ceramic thẩm mỹ (Thụy Sĩ)" : "IPS E.max Aesthetic Glass-Ceramic Crown",
                  usd: "$411 USD",
                  aud: "$585 AUD",
                  bridge3: "$1,755 AUD"
                },
                {
                  item: isVN ? "Chụp sứ cao cấp Lava Plus / Multilayer (Mỹ)" : "3M Lava Plus Premium Multilayer Crown",
                  usd: "$548 USD",
                  aud: "$780 AUD",
                  bridge3: "$2,340 AUD"
                }
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-medium text-slate-800">{row.item}</td>
                  <td className="p-4 text-right font-semibold text-slate-800">{row.usd}</td>
                  <td className="p-4 text-right font-semibold text-slate-800">{row.aud}</td>
                  <td className="p-4 text-right font-extrabold text-teal-brand">{row.bridge3}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs sm:text-sm text-slate-700 font-semibold italic">
          {isVN 
            ? "* Đơn giá trọn gói đã bao gồm: Khám lâm sàng, chụp phim kiểm tra cùi răng, mài răng tạo cùi, răng tạm trong suốt quá trình và gắn cố định hoàn thiện. Chi phí chưa bao gồm phí điều trị tủy răng hoặc điều trị viêm nha chu trước khi bọc răng sứ (nếu phát sinh). Tỷ giá quy đổi cố định: 1 AUD = 18.441 VNĐ, 1 USD = 26.280 VNĐ."
            : "* Fees include: Clinical exams, diagnostic X-rays, prep work, temporary crowns during lab times, and final cementation. Excludes: active root canal treatments or periodontal cleaning prior to bridge prep (if needed). Fixed conversion rates: 1 AUD = 18,441 VND, 1 USD = 26,280 VND."}
        </p>


      </section>

      {/* 8. Clinician Profile */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-7 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-dark-brand">
            {isVN ? "8. Ai phụ trách điều trị cầu răng cho bạn?" : "8. Who Will Perform Your Treatment?"}
          </h2>
          <div className="space-y-4 text-sm sm:text-base text-slate-800 leading-relaxed font-normal">
            <p>
              {isVN
                ? "Quy trình mài răng làm trụ nâng đỡ cầu răng đòi hỏi kỹ thuật cao để không phạm vào tủy răng thật và đảm bảo độ khít sát tuyệt đối viền cổ răng tránh tích tụ thức ăn. Tại DentalNKT, ca phục hình cầu răng sứ của bạn được trực tiếp lập phác đồ và điều trị bởi đội ngũ bác sĩ chuyên khoa dẫn đầu bởi Dr. Nguyễn Huy Hoàng — Trưởng khoa Cấy ghép Implant & Chỉnh nha của phòng khám."
                : "Developing support anchors requires clinical precision to avoid vital pulpal exposure and ensure seamless margin fit. At DentalNKT, your bridge preparation and cementation are managed 1-on-1 by our clinical director, Dr. Nguyen Huy Hoang."}
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
                <span>{isVN ? "Đào tạo và tu nghiệp chuyên sâu về Chỉnh nha & Implant tại Đại học Cologne (Đức)." : "Advanced training at Cologne University (Germany) specializing in Implantology."}</span>
              </li>
              <li className="flex gap-2 items-center">
                <Check className="w-4 h-4 text-teal-brand shrink-0" />
                <span>{isVN ? "Thực hiện thành công trên 15.000 ca cấy ghép và phục hình thẩm mỹ phức tạp." : "Over 15,000+ successful implant and cosmetic restorations completed."}</span>
              </li>
              <li className="flex gap-2 items-center">
                <Check className="w-4 h-4 text-teal-brand shrink-0" />
                <span>{isVN ? "Hệ thống Labo nội bộ sử dụng phôi sứ chính hãng từ: Ceramill (Amann Girrbach - Áo), IPS E.max (Ivoclar Vivadent - Thụy Sĩ), Lava Plus (3M - Mỹ)." : "In-house laboratory utilizing authentic premium ceramic blocks: Ceramill (Amann Girrbach - Austria), IPS E.max (Ivoclar Vivadent - Switzerland), Lava Plus (3M - USA)."}</span>
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
              ? "Chúng tôi hỗ trợ thanh toán linh hoạt bằng cả tiền mặt, chuyển khoản ngân hàng hoặc quẹt thẻ tín dụng quốc tế (VISA/Mastercard). Chi phí điều trị răng sứ được thanh toán thành hai đợt (Đợt 1: Đặt cọc 70% sau khi mài răng lấy mẫu cùi; Đợt 2: Thanh toán 30% còn lại sau khi gắn cố định mẫu cầu răng sứ hoàn thiện)."
              : "We accept multiple payment methods including cash, bank transfers, and international credit cards (VISA/Mastercard). Fees are split into two stages (Stage 1: 70% paid after teeth preparation and digital impressions; Stage 2: 30% paid after final bonding and calibration check)."}
          </p>
        </div>
      </section>

      {/* 9. Warranty Policy */}
      <section className="bg-slate-50 border border-slate-100 rounded-3xl p-8 sm:p-10 space-y-6">
        <h2 className="text-xl sm:text-2xl font-serif font-extrabold text-dark-brand text-center">
          {isVN ? "9. Chính sách bảo hành cầu răng sứ tại DentalNKT" : "9. Verifiable Bridge Warranty Policy"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-slate-150 p-6 rounded-2xl space-y-2">
            <span className="text-xs text-slate-600 font-bold block uppercase tracking-wider">{isVN ? "Sứ Zirconia (Đức)" : "Zirconia (Germany)"}</span>
            <strong className="text-xl sm:text-2xl font-bold text-teal-brand block">5 {isVN ? "Năm" : "Years"}</strong>
            <p className="text-xs text-slate-700 font-normal leading-relaxed">
              {isVN ? "Bảo hành nứt gãy sườn sứ hoặc bong rã xi măng gắn kết." : "Covers mechanical fractures, porcelain chipping, or cement debonding."}
            </p>
          </div>
          <div className="bg-white border border-slate-150 p-6 rounded-2xl space-y-2">
            <span className="text-xs text-slate-600 font-bold block uppercase tracking-wider">{isVN ? "Sứ IPS E.max (Thụy Sĩ)" : "IPS E.max (Switzerland)"}</span>
            <strong className="text-xl sm:text-2xl font-bold text-teal-brand block">7 {isVN ? "Năm" : "Years"}</strong>
            <p className="text-xs text-slate-700 font-normal leading-relaxed">
              {isVN ? "Bảo hành sứt mẻ sứ trong điều kiện ăn nhai thức ăn sinh hoạt thường ngày." : "Covers structural integrity during normal chewing functions."}
            </p>
          </div>
          <div className="bg-white border border-slate-150 p-6 rounded-2xl space-y-2">
            <span className="text-xs text-slate-600 font-bold block uppercase tracking-wider">{isVN ? "Sứ cao cấp Lava / Ceramill" : "Premium Lava/Ceramill"}</span>
            <strong className="text-xl sm:text-2xl font-bold text-teal-brand block">10 {isVN ? "Năm" : "Years"}</strong>
            <p className="text-xs text-slate-700 font-normal leading-relaxed">
              {isVN ? "Bảo hành toàn diện cho cả kết cấu chịu lực và tính ổn định màu sắc thẩm mỹ." : "Comprehensive warranty covering both structure and shade stability."}
            </p>
          </div>
        </div>
        <div className="bg-teal-brand/10 border border-teal-brand/20 rounded-2xl p-6 flex gap-3 items-start">
          <Shield className="w-5 h-5 text-teal-brand shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
            {isVN
              ? "Điều khoản cam kết từ xa: Trong trường hợp xảy ra rủi ro sứt mẻ hoặc lỏng cầu sứ thuộc lỗi kỹ thuật của phòng khám sau khi bạn đã trở về Úc, DentalNKT cam kết thực hiện chế tác lại miễn phí cầu sứ mới và hỗ trợ toàn bộ chi phí vé máy bay khứ hồi cho bạn quay lại Việt Nam để xử lý."
              : "Remote backup guarantee: If a mechanical complication or bridge failure occurs due to lab or clinical errors after your return to Australia, DentalNKT will fabricate a new bridge free of charge and fully cover your return flights back to Hanoi."}
          </p>
        </div>
      </section>

      {/* 10. FAQ Section */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-dark-brand text-center">
          {isVN ? "10. Câu hỏi thường gặp về Cầu răng sứ" : "10. Frequently Asked Questions"}
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
            {isVN ? "Phục hồi răng mất cố định nhanh chóng — Tiết kiệm chi phí" : "Restore Your Smile in a Single Trip – Save Up to 70%"}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
            {isVN 
              ? "Hãy gửi cho chúng tôi ảnh chụp răng cận cảnh vị trí răng mất hoặc phim X-quang gần nhất của bạn. Bác sĩ chuyên khoa DentalNKT sẽ tư vấn lập phác đồ và báo giá cụ thể miễn phí trong vòng 24–48 giờ."
              : "Submit your dental photos or latest X-rays showing the gap. Our clinical board will review your case and deliver a personalized treatment proposal and cost quotation within 24 to 48 hours."}
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
