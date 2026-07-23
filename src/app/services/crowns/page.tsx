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

export default function CrownsPage() {
  const { lang, t } = useLanguage();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const isVN = lang === "VN";

  React.useEffect(() => {
    document.title = isVN 
      ? "Mão răng sứ (Crowns) — Phục hồi răng hư hại toàn diện | DentalNKT"
      : "Dental Crowns — Comprehensive Tooth Restoration | DentalNKT";
  }, [isVN]);

  // FAQ Items
  const faqItems = [
    {
      q: isVN 
        ? "Mão sứ và Veneer khác nhau thế nào, tôi nên chọn loại nào?" 
        : "What is the difference between a crown and a veneer, and which should I choose?",
      a: isVN 
        ? "Mão sứ bao bọc toàn bộ chu vi răng, phù hợp cho răng đã yếu, nứt vỡ lớn hoặc đã điều trị tủy để bảo vệ răng tối đa. Veneer chỉ là lớp sứ mỏng dán mặt ngoài răng, phù hợp răng còn khỏe chỉ cần cải thiện thẩm mỹ về màu sắc, hình dáng."
        : "A crown covers the entire tooth structure to protect teeth that are weakened, fractured, or root-canal treated. A veneer is a thin porcelain shell bonded only to the front surface, ideal for healthy teeth requiring aesthetic improvements in color or alignment."
    },
    {
      q: isVN 
        ? "Sau khi điều trị tủy có cần bọc mão sứ ngay không?" 
        : "Do I need a dental crown immediately after a root canal?",
      a: isVN 
        ? "Rất nên làm. Răng sau khi điều trị tủy không còn nguồn nuôi dưỡng sẽ trở nên giòn và cực kỳ dễ gãy vỡ dưới lực nhai. Bọc mão sứ giúp bảo vệ phần chân răng thật còn lại, kéo dài tuổi thọ ăn nhai của răng."
        : "Highly recommended. A root-canal treated tooth becomes brittle over time as it loses its natural blood supply. A crown protects the remaining tooth structure from fractures, ensuring long-term chewing function."
    },
    {
      q: isVN 
        ? "Làm nhiều mão sứ cùng lúc có mất nhiều thời gian hơn không?" 
        : "Does getting multiple crowns take longer?",
      a: isVN 
        ? "Không đáng kể. Hệ thống Labo DentalNKT thiết kế và chế tác đồng thời tất cả các mão sứ trong cùng một đợt. Dù bạn làm 1 răng hay nhiều răng, tổng thời gian lưu trú tại Việt Nam vẫn dao động từ 5 đến 8 ngày."
        : "Not significantly. Our dental lab designs and mills multiple crowns simultaneously. Whether you require 1 crown or a full arch, the recommended stay in Vietnam remains 5 to 8 days."
    },
    {
      q: isVN 
        ? "Mão sứ Emax hay Zirconia đẹp hơn cho răng cửa?" 
        : "Is Emax or Zirconia better for front teeth?",
      a: isVN 
        ? "Sứ Emax thường được ưu tiên cho răng cửa nhờ độ trong mờ tự nhiên tựa men răng thật. Zirconia có độ cứng cao hơn, màu đục hơn, phù hợp cho răng tiền hàm và răng hàm chịu lực nhai lớn."
        : "Emax glass-ceramics are preferred for front teeth due to their exceptional light-translucency and natural match. Zirconia is stronger but more opaque, making it ideal for premolars and molars that bear heavy chewing loads."
    },
    {
      q: isVN 
        ? "Mão sứ có được bảo hành khi tôi đã về Úc không?" 
        : "Is my crown warranty valid after I return to Australia?",
      a: isVN 
        ? "Có, toàn bộ răng sứ tại DentalNKT được áp dụng chính sách Bảo hành Toàn cầu với thời hạn từ 5 đến 10 năm tùy vật liệu. Nếu xảy ra lỗi vật liệu hoặc kỹ thuật phẫu thuật của phòng khám, chúng tôi hỗ trợ vé máy bay để bạn quay lại khắc phục."
        : "Yes, all dental crowns at DentalNKT are backed by our Global Warranty Policy spanning 5 to 10 years depending on the material. If a failure arises due to lab fabrication or clinical errors, we cover return flights to Hanoi for revision."
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
              <span>{isVN ? "PHỤC HỒI RĂNG THẨM MỸ" : "RESTORATIVE DENTISTRY"}</span>
            </span>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-white leading-tight">
              {isVN 
                ? "Mão Răng Sứ (Crowns) — Phục Hồi Răng Hư Hại Toàn Diện" 
                : "Dental Crowns — Comprehensive Tooth Restoration"}
            </h1>
            
            <p className="text-sm sm:text-base text-slate-200 font-normal leading-relaxed">
              {isVN 
                ? "Giải pháp bọc bảo vệ răng bị vỡ lớn, sâu nặng hoặc đã điều trị tủy. Khôi phục hoàn hảo hình dáng, màu sắc tự nhiên và lực ăn nhai chịu tải tốt trọn đời."
                : "A custom-fitted ceramic cap that fully covers a damaged, decayed, or root-canal treated tooth. Restores natural aesthetics, structure, and complete chewing power."}
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-slate-700/80 w-full">
              <div>
                <span className="text-xs text-slate-300 block font-medium">
                  {isVN ? "Đơn giá mỗi răng từ:" : "Price per crown from:"}
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

      {/* 1. What is a Crown */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-7 space-y-6">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-gold-brand" />
            <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-dark-brand">
              {isVN ? "1. Mão răng sứ là gì?" : "1. What is a Dental Crown?"}
            </h2>
          </div>
          <div className="space-y-4 text-sm sm:text-base text-slate-800 leading-relaxed font-normal">
            <p>
              {isVN
                ? "Mão răng sứ (Crown) là phục hình bọc kín toàn bộ phần thân răng còn lại, sau khi bác sĩ mài bớt một lớp mô răng bên ngoài để tạo khoảng trống vừa đủ cho lớp chụp sứ. Khác với mặt dán sứ Veneer chỉ bao phủ mặt trước, mão sứ bao quanh toàn bộ chu vi răng — bao gồm mặt ngoài, mặt trong và mặt nhai."
                : "A dental crown is a custom-fitted cap that covers a damaged, decayed, or root-canal treated tooth, restoring its natural anatomy, strength, and function."}
            </p>
            <p>
              {isVN
                ? "Mão sứ vừa khôi phục hoàn hảo chức năng ăn nhai chịu lực lớn, vừa bảo vệ mô răng thật còn lại tránh gãy vỡ sâu hơn. Đây là lý do mão răng sứ là chỉ định y khoa tối ưu cho răng hàm chịu lực lớn hoặc răng trước đã yếu đi sau khi điều trị tủy răng."
                : "It serves to reconstruct chewing dynamics while protecting the underlying natural tooth from further decay or fracture. This structural support is why dental crowns, rather than veneers, are indicated for load-bearing molars and teeth with root canals."}
            </p>
          </div>
        </div>

        <div className="md:col-span-5 bg-teal-brand-light/30 border border-teal-brand-light p-8 rounded-3xl space-y-4">
          <h3 className="text-base font-bold text-dark-brand">
            {isVN ? "Ưu điểm của Mão răng sứ" : "Key Benefits of Dental Crowns"}
          </h3>
          <ul className="space-y-3.5">
            {[
              isVN ? "Bảo vệ toàn diện răng đã điều trị tủy hoặc nứt vỡ" : "Comprehensive protection for root-canal or cracked teeth",
              isVN ? "Độ cứng và khả năng chịu lực nhai vượt trội" : "Superior mechanical strength for heavy load chewing",
              isVN ? "Màu sắc trong tự nhiên tựa men răng thật" : "Natural shade-matching to blend with surrounding teeth",
              isVN ? "Độ bền lâu dài từ 5 đến 15 năm tùy vật liệu" : "Long lifespan from 5 to 15 years depending on material",
              isVN ? "Ngăn chặn vi khuẩn xâm nhập vào tủy răng" : "Prevents bacterial infiltration into the tooth pulp"
            ].map((benefit, idx) => (
              <li key={idx} className="flex gap-2 items-start text-xs sm:text-sm text-slate-800">
                <Check className="w-4.5 h-4.5 text-teal-brand shrink-0 mt-0.5" />
                <span className="font-semibold">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 2. When to choose Crowns over Veneers */}
      <section className="bg-slate-50 border border-slate-100 rounded-3xl p-8 sm:p-10 space-y-6">
        <h2 className="text-xl sm:text-2xl font-serif font-extrabold text-dark-brand text-center">
          {isVN ? "2. Khi nào cần Mão sứ thay vì dán Veneer?" : "2. When Do You Need a Crown Instead of a Veneer?"}
        </h2>
        <div className="border border-slate-200 rounded-3xl overflow-hidden bg-white shadow-sm overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-[#0b1e2c] text-white font-serif text-xs uppercase tracking-wider">
                <th className="p-4 border-b border-slate-800">{isVN ? "Tình trạng răng" : "Clinical Indication"}</th>
                <th className="p-4 border-b border-slate-800 text-center">{isVN ? "Mão sứ (Crown)" : "Dental Crown"}</th>
                <th className="p-4 border-b border-slate-800 text-center">{isVN ? "Dán sứ Veneer" : "Porcelain Veneer"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {[
                {
                  condition: isVN ? "Răng hàm hoặc răng cửa đã điều trị tủy" : "Root-canal treated teeth (molars or anterior)",
                  crown: isVN ? "Có (Khuyên dùng để tránh giòn gãy)" : "Yes (Highly recommended to prevent fractures)",
                  veneer: isVN ? "Không phù hợp" : "Not suitable"
                },
                {
                  condition: isVN ? "Răng nứt, vỡ lớn, mất trên 50% cấu trúc răng" : "Cracked or fractured teeth with >50% structure lost",
                  crown: isVN ? "Có (Tái tạo hình thể hoàn hảo)" : "Yes (Restores anatomy perfectly)",
                  veneer: isVN ? "Không phù hợp" : "Not suitable"
                },
                {
                  condition: isVN ? "Miếng trám cũ quá lớn, không còn đủ mô răng nâng đỡ" : "Large failing composite fillings with thin remaining walls",
                  crown: isVN ? "Có (Cố định gia cố lực)" : "Yes (Reinforces tooth structure)",
                  veneer: isVN ? "Không phù hợp" : "Not suitable"
                },
                {
                  condition: isVN ? "Răng chỉ lệch màu hoặc hình dáng nhẹ, tủy răng khỏe" : "Healthy, vital teeth with minor discoloration/gaps",
                  crown: isVN ? "Không nên (Tránh mài mô răng lành)" : "No (Avoid shaving healthy structure)",
                  veneer: isVN ? "Có (Lựa chọn tối ưu nhất)" : "Yes (The most optimal choice)"
                },
                {
                  condition: isVN ? "Bảo vệ toàn diện núm răng chịu lực nhai" : "Full coverage protecting load-bearing cusps",
                  crown: isVN ? "Có" : "Yes",
                  veneer: isVN ? "Không phù hợp" : "Not suitable"
                }
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-medium text-slate-800 bg-slate-50/50">{row.condition}</td>
                  <td className="p-4 text-center font-bold text-teal-brand">{row.crown}</td>
                  <td className="p-4 text-center text-slate-500">{row.veneer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 3. Material Options */}
      <section className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-serif font-extrabold text-dark-brand text-center">
          {isVN ? "3. Các loại vật liệu Mão sứ tại DentalNKT" : "3. Dental Crown Materials at DentalNKT"}
        </h2>
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
                  material: isVN ? "Sứ trên khung Titan" : "Porcelain Fused to Titanium",
                  features: isVN ? "Chịu lực tốt, chi phí tiết kiệm tối đa, thẩm mỹ cơ bản." : "Strong load tolerance, cost-effective, basic aesthetics.",
                  bestFor: isVN ? "Răng hàm chịu lực nhai phía trong." : "Posterior molars prioritizing budget.",
                  warranty: "5 " + (isVN ? "Năm" : "Years")
                },
                {
                  material: isVN ? "Zirconia tiêu chuẩn" : "Solid Zirconia Standard",
                  features: isVN ? "Khung xương Zirconia cứng chắc, màu đục sáng." : "High flexural strength, opaque white shade.",
                  bestFor: isVN ? "Răng hàm chịu lực nhai lớn." : "Load-bearing posterior molars.",
                  warranty: "5 " + (isVN ? "Năm" : "Years")
                },
                {
                  material: isVN ? "Zirconia cường lực cao" : "High-Translucent Zirconia",
                  features: isVN ? "Độ cứng vượt trội, độ trong cải thiện tự nhiên." : "Enhanced translucency, balance of durability and shade.",
                  bestFor: isVN ? "Răng tiền hàm, răng hàm chịu lực lớn." : "Premolars and chewing posterior molars.",
                  warranty: "5 – 7 " + (isVN ? "Năm" : "Years")
                },
                {
                  material: isVN ? "Glass-Ceramic Emax" : "IPS E.max Glass-Ceramic",
                  features: isVN ? "Độ trong mờ xuất sắc tựa men răng thật, thẩm mỹ tối đa." : "Exceptional translucency, mirror-matching natural tooth enamel.",
                  bestFor: isVN ? "Răng cửa và răng trước cần thẩm mỹ cao." : "Anterior front teeth requiring premium aesthetics.",
                  warranty: "7 " + (isVN ? "Năm" : "Years")
                },
                {
                  material: isVN ? "Sứ cao cấp (Lava / Ceramill)" : "Premium Ceramic (Lava/Ceramill)",
                  features: isVN ? "Liên kết thẩm mỹ của Emax với độ bền Zirconia cao hơn." : "Combines Emax aesthetics with superior framework durability.",
                  bestFor: isVN ? "Phù hợp cho cả răng trước và răng sau." : "Both anterior and posterior dental restorations.",
                  warranty: "10 " + (isVN ? "Năm" : "Years")
                },
                {
                  material: isVN ? "Sứ cao cấp thế hệ mới" : "Ultra-Premium Next-Gen Ceramic",
                  features: isVN ? "Độ chuyển màu mượt mà, đồng đều màu sắc tuyệt đối." : "Multilayer gradient shading for uniform smile lines.",
                  bestFor: isVN ? "Phục hình nhiều răng cửa liền kề thẩm mỹ." : "Multi-unit smile reconstructions demanding perfection.",
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
      </section>

      {/* 4. Treatment Timeline */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-dark-brand text-center">
          {isVN ? "4. Quy trình thực hiện Mão sứ tại DentalNKT" : "4. Custom Crown Fabrication & Fitting Process"}
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
                    ? "Thăm khám lâm sàng, chụp phim kiểm tra chân răng và tủy răng. Chọn màu sứ phù hợp và ký chốt kế hoạch điều trị bằng văn bản."
                    : "Clinical consultation, diagnostic X-rays to check root health. Shade selection and signing of the written treatment plan."
                },
                {
                  day: isVN ? "Ngày 2" : "Day 2",
                  desc: isVN 
                    ? "Tiến hành mài tạo cùi răng, lấy dấu mẫu hàm (quét kỹ thuật số 3D) gửi về Labo và gắn răng tạm bảo vệ."
                    : "Tooth preparation (shaping/trimming), digital 3D intraoral scanning, temporary crown placement to protect prepped tooth."
                },
                {
                  day: isVN ? "Ngày 3 – 5" : "Day 3 – 5",
                  desc: isVN 
                    ? "Labo nội bộ tiến hành thiết kế CAD/CAM và chế tác tay thủ công mão răng sứ chất lượng cao (3-4 ngày làm việc)."
                    : "In-house lab custom-crafts and bakes your crowns using high-precision CAD/CAM technology."
                },
                {
                  day: isVN ? "Ngày 6 – 7" : "Day 6 – 7",
                  desc: isVN 
                    ? "Thử mão sứ trên miệng, kiểm tra độ khít sát viền nướu, màu sắc thẩm mỹ và khớp cắn. Tiến hành gắn cố định."
                    : "Try-in session, check marginal integrity, color match, bite alignment, and final bonding."
                },
                {
                  day: isVN ? "Ngày 7 – 8" : "Day 7 – 8",
                  desc: isVN 
                    ? "Kiểm tra khớp cắn lần cuối, chụp phim X-quang kiểm tra, chụp ảnh lưu hồ sơ và bàn giao hướng dẫn bảo hành."
                    : "Final bite calibrations, post-bonding X-ray, documentation handover, and global warranty activation."
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
              ? "Thời gian lưu trú tham khảo: 5 – 8 ngày tại Hà Nội. Cho dù quý khách làm 1 mão răng hay bọc sứ nhiều răng cùng lúc, tổng thời gian lưu trú vẫn không thay đổi đáng kể do Labo chế tác đồng loạt."
              : "Recommended stay: 5 – 8 days in Hanoi. Whether you require a single crown or a full set of teeth, the timeline remains virtually identical as our lab processes all fabrications concurrently."}
          </p>
        </div>
      </section>

      {/* 5. Risks */}
      <section className="bg-amber-50/15 border border-amber-100 rounded-3xl p-8 sm:p-10 space-y-6">
        <div className="flex items-center gap-2.5 text-amber-800">
          <AlertTriangle className="w-6 h-6 shrink-0" />
          <h2 className="text-xl sm:text-2xl font-serif font-extrabold">
            {isVN ? "5. Rủi ro y khoa và điều cần biết trước khi bọc răng sứ" : "5. Risks & Complications to Know Before Deciding"}
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              vn: "Cảm giác ê buốt tạm thời sau khi mài răng là bình thường, đặc biệt với các răng chưa chữa tủy.",
              en: "Mild temporary sensitivity to cold or hot items is normal after preparation, resolving within a few days."
            },
            {
              vn: "Phẫu thuật mài răng để bọc mão sứ là can thiệp xâm lấn không thể phục hồi cấu trúc men răng gốc.",
              en: "Preparing teeth for crowns requires removing a thin layer of enamel, which is a non-reversible procedure."
            },
            {
              vn: "Mão sứ vẫn có nguy cơ nứt, vỡ hoặc sứt mẻ nếu phải chịu lực cắn vật cứng đột ngột không đúng cách.",
              en: "Porcelain materials are durable but can chip or fracture under excessive forces like biting objects."
            },
            {
              vn: "Mão sứ không phải là vĩnh viễn trọn đời, lớp sứ sẽ hao mòn tự nhiên và cần bảo trì/thay thế sau 10-15 năm.",
              en: "Dental restorations do not last forever; expect natural wear and potential replacement after 10-15 years."
            },
            {
              vn: "Có nguy cơ kích ứng hoặc viêm nướu quanh viền cổ mão sứ nếu kỹ thuật mài không sát khít hoặc vệ sinh kém.",
              en: "Risk of localized gum inflammation if marginal sealing is compromised or oral hygiene is neglected."
            },
            {
              vn: "Một số răng sau khi mài có thể bị viêm tủy muộn, yêu cầu phải mở mão sứ để điều trị tủy bổ sung.",
              en: "Under rare circumstances, prepped teeth may develop pulp inflammation, requiring delayed root canal therapy."
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

      {/* 6. Post-Op Care */}
      <section className="bg-slate-50 border border-slate-100 rounded-3xl p-8 sm:p-10 space-y-6">
        <h2 className="text-xl sm:text-2xl font-serif font-extrabold text-dark-brand">
          {isVN ? "6. Hướng dẫn chăm sóc sau khi gắn Mão sứ" : "6. Post-Op Care & Maintenance Guidelines"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              titleVN: "Vệ sinh răng miệng chu đáo",
              titleEN: "Strict Oral Hygiene",
              vn: "Chải răng ít nhất 2 lần/ngày bằng bàn chải lông mềm và sử dụng tăm nước áp lực nhẹ, kết hợp chỉ nha khoa quanh viền mão.",
              en: "Brush twice daily using a soft-bristled brush, clean around margins with floss, and use low-pressure water flossers."
            },
            {
              titleVN: "Hạn chế nhai vật cứng",
              titleEN: "Avoid Excessive Mechanical Forces",
              vn: "Hạn chế nhai vật cứng hoặc dai (đá lạnh, kẹo cứng, xương) đặc biệt với răng đã lấy tủy để tránh nứt gãy chân răng.",
              en: "Do not chew ice, hard candies, or shells. Protect root-canal treated teeth which are naturally more brittle."
            },
            {
              titleVN: "Bảo vệ răng khi nghiến",
              titleEN: "Bruxism Protection",
              vn: "Đeo máng bảo vệ răng ban đêm theo chỉ định nếu bạn có thói quen nghiến răng vô thức khi ngủ để bảo vệ lớp sứ.",
              en: "Mandatory night guard usage during sleep if you suffer from bruxism to protect ceramic restorations."
            },
            {
              titleVN: "Tái khám định kỳ",
              titleEN: "Regular Dental Cleanings",
              vn: "Thăm khám định kỳ mỗi 6 tháng để kiểm tra độ khít sát viền nướu, khớp cắn và làm sạch mảng bám chuyên nghiệp.",
              en: "Schedule routine checkups every 6 months to evaluate marginal sealing and complete professional cleaning."
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
      </section>

      {/* 7. Detailed Pricing */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-dark-brand text-center">
          {isVN ? "7. Chi phí bọc mão răng sứ chi tiết" : "7. Official Dental Crown Pricing"}
        </h2>
        <div className="border border-slate-200 rounded-3xl overflow-hidden bg-white shadow-sm overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-[#0b1e2c] text-white font-serif text-xs uppercase tracking-wider">
                <th className="p-4 border-b border-slate-800">{isVN ? "Vật liệu mão sứ" : "Material Specification"}</th>
                <th className="p-4 border-b border-slate-800 text-right">{isVN ? "Đơn giá/Răng (USD)" : "Price per Tooth (USD)"}</th>
                <th className="p-4 border-b border-slate-800 text-right">{isVN ? "Quy đổi (AUD)" : "Price per Tooth (AUD)"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {[
                {
                  item: isVN ? "Chụp sứ kim loại Titan (Phục hình răng hàm chịu lực)" : "Porcelain Fused to Titanium Crown",
                  usd: "$91 USD",
                  aud: "$130 AUD"
                },
                {
                  item: isVN ? "Chụp sứ Zirconia tiêu chuẩn (Độ bền chịu lực ổn định)" : "Solid Zirconia Standard Crown",
                  usd: "$183 USD",
                  aud: "$260 AUD"
                },
                {
                  item: isVN ? "Chụp sứ Ceramil Zirconia cường lực cao (Bảo hành 7 năm)" : "High-Translucent Zirconia Ceramil Crown",
                  usd: "$274 USD",
                  aud: "$390 AUD"
                },
                {
                  item: isVN ? "Chụp sứ IPS E.max glass-ceramic thẩm mỹ (Bảo hành 10 năm)" : "IPS E.max Aesthetic Glass-Ceramic Crown",
                  usd: "$411 USD",
                  aud: "$585 AUD"
                },
                {
                  item: isVN ? "Chụp sứ cao cấp Lava Plus / Multilayer (Bảo hành 10 năm)" : "3M Lava Plus Premium Multilayer Crown",
                  usd: "$548 USD",
                  aud: "$780 AUD"
                },
                {
                  item: isVN ? "Chụp sứ cao cấp thế hệ mới (Màu sắc trong tự nhiên tối đa)" : "Ultra-Premium Next-Gen Porcelain Crown",
                  usd: "$638 USD",
                  aud: "$910 AUD"
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
            ? "* Đơn giá trọn gói đã bao gồm: Khám lâm sàng, chụp phim kiểm tra cùi răng, mài răng tạo cùi, răng tạm trong suốt quá trình và gắn cố định hoàn thiện. Chi phí chưa bao gồm phí điều trị tủy răng hoặc điều trị viêm nha chu trước khi bọc răng sứ (nếu phát sinh). Tỷ giá quy đổi cố định: 1 AUD = 18.441 VNĐ, 1 USD = 26.280 VNĐ."
            : "* Fees include: Clinical exams, diagnostic X-rays, prep work, temporary crowns during lab times, and final cementation. Excludes: active root canal treatments or periodontal cleaning prior to crown prep (if needed). Fixed conversion rates: 1 AUD = 18,441 VND, 1 USD = 26,280 VND."}
        </p>
        

      </section>

      {/* 8. Clinician Profile */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-7 space-y-6">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-teal-brand" />
            <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-dark-brand">
              {isVN ? "8. Ai phụ trách điều trị răng sứ cho bạn?" : "8. Who Will Perform Your Treatment?"}
            </h2>
          </div>
          <div className="space-y-4 text-sm sm:text-base text-slate-800 leading-relaxed font-normal">
            <p>
              {isVN
                ? "Phục hình răng sứ yêu cầu kỹ thuật mài răng chính xác để hạn chế mài mô răng lành và đảm bảo mão sứ khít sát. Tại DentalNKT, ca bọc răng sứ của bạn được trực tiếp lập kế hoạch và điều trị bởi đội ngũ bác sĩ chuyên khoa dẫn đầu bởi Dr. Nguyễn Huy Hoàng — Trưởng khoa Cấy ghép Implant & Chỉnh nha của phòng khám."
                : "Aesthetic dental restorations require high precision to minimize healthy enamel loss and prevent micro-gaps. At DentalNKT, your crown prep and fitting are handled 1-on-1 by our clinical director, Dr. Nguyen Huy Hoang."}
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
              ? "Chúng tôi hỗ trợ thanh toán linh hoạt bằng cả tiền mặt, chuyển khoản ngân hàng hoặc quẹt thẻ tín dụng quốc tế (VISA/Mastercard). Chi phí điều trị răng sứ được thanh toán thành hai đợt (Đợt 1: Đặt cọc 70% sau khi mài răng lấy mẫu cùi; Đợt 2: Thanh toán 30% còn lại sau khi gắn cố định mão răng sứ hoàn thiện)."
              : "We accept multiple payment methods including cash, bank transfers, and international credit cards (VISA/Mastercard). Fees are split into two stages (Stage 1: 70% paid after crown prep and digital impressions; Stage 2: 30% paid after final bonding and calibration check)."}
          </p>
        </div>
      </section>

      {/* 9. Warranty Policy */}
      <section className="bg-slate-50 border border-slate-100 rounded-3xl p-8 sm:p-10 space-y-6">
        <h2 className="text-xl sm:text-2xl font-serif font-extrabold text-dark-brand text-center">
          {isVN ? "9. Chính sách bảo hành mão răng sứ tại DentalNKT" : "9. Verifiable Crown Warranty Policy"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-slate-150 p-6 rounded-2xl space-y-2">
            <span className="text-xs text-slate-600 font-bold block uppercase tracking-wider">{isVN ? "Sứ Titan & Zirconia thường" : "Titanium & Standard Zirconia"}</span>
            <strong className="text-xl sm:text-2xl font-bold text-teal-brand block">5 {isVN ? "Năm" : "Years"}</strong>
            <p className="text-xs text-slate-700 font-normal leading-relaxed">
              {isVN ? "Bảo hành gãy, nứt lớp sứ bên ngoài hoặc bung xi măng gắn kết." : "Covers mechanical fractures, porcelain chipping, or debonding."}
            </p>
          </div>
          <div className="bg-white border border-slate-150 p-6 rounded-2xl space-y-2">
            <span className="text-xs text-slate-600 font-bold block uppercase tracking-wider">{isVN ? "Zirconia cao cấp & Emax" : "Premium Zirconia & IPS E.max"}</span>
            <strong className="text-xl sm:text-2xl font-bold text-teal-brand block">7 {isVN ? "Năm" : "Years"}</strong>
            <p className="text-xs text-slate-700 font-normal leading-relaxed">
              {isVN ? "Bảo hành gãy, sứt mẻ trong điều kiện ăn nhai thức ăn thường ngày." : "Covers structural integrity during normal chewing functions."}
            </p>
          </div>
          <div className="bg-white border border-slate-150 p-6 rounded-2xl space-y-2">
            <span className="text-xs text-slate-600 font-bold block uppercase tracking-wider">{isVN ? "Sứ Lava & Lava Plus cao cấp" : "Premium Lava & Lava Plus"}</span>
            <strong className="text-xl sm:text-2xl font-bold text-teal-brand block">10 {isVN ? "Năm" : "Years"}</strong>
            <p className="text-xs text-slate-700 font-normal leading-relaxed">
              {isVN ? "Bảo hành toàn diện cho cả cấu trúc lõi sứ chịu lực và màu sắc thẩm mỹ." : "Comprehensive warranty covering both structure and shade stability."}
            </p>
          </div>
        </div>
        <div className="bg-teal-brand/10 border border-teal-brand/20 rounded-2xl p-6 flex gap-3 items-start">
          <Shield className="w-5 h-5 text-teal-brand shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
            {isVN
              ? "Điều khoản cam kết từ xa: Trong trường hợp xảy ra rủi ro sứt mẻ hoặc bong tróc mão sứ thuộc lỗi kỹ thuật của phòng khám sau khi bạn đã trở về Úc, DentalNKT cam kết thực hiện làm lại miễn phí mão sứ mới và hỗ trợ toàn bộ chi phí vé máy bay khứ hồi cho bạn quay lại Việt Nam để xử lý."
              : "Remote backup guarantee: If a mechanical complication or porcelain fracture occurs due to lab or clinical errors after your return to Australia, DentalNKT will fabricate a new crown free of charge and fully cover your return flights back to Hanoi."}
          </p>
        </div>
      </section>

      {/* 10. FAQ Section */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-dark-brand text-center">
          {isVN ? "11. Câu hỏi thường gặp về Mão răng sứ" : "10. Frequently Asked Questions"}
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
            {isVN ? "Phục hình răng sứ bền vững — Tiết kiệm tới 70% chi phí" : "Restore Your Smile – Save Up to 70% in Hanoi"}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
            {isVN 
              ? "Hãy gửi cho chúng tôi ảnh răng chụp cận cảnh khuôn miệng hoặc phim X-quang gần nhất của bạn. Đội ngũ bác sĩ DentalNKT sẽ tư vấn lập kế hoạch và báo giá miễn phí trong vòng 24–48 giờ."
              : "Submit your dental photos or latest X-rays. Our clinical board will review your case and deliver a personalized treatment proposal and cost quotation within 24 to 48 hours."}
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
