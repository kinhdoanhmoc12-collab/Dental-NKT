"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "../../../context/LanguageContext";
import { 
  Check, 
  ShieldCheck, 
  Sparkles, 
  Clock, 
  ArrowLeft, 
  AlertCircle, 
  ChevronDown, 
  ChevronUp, 
  Calendar, 
  FileText, 
  UserCheck, 
  DollarSign, 
  HelpCircle,
  Stethoscope,
  Award,
  ArrowRight
} from "lucide-react";

export default function VeneersPage() {
  const { lang, t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const isVN = lang === "VN";

  return (
    <div className="pt-6 pb-12 space-y-16 max-w-5xl mx-auto px-4 sm:px-6">
      
      {/* Top Header & Hero Container */}
      <div className="space-y-6">
        {/* Back Button */}
        <div>
          <Link href="/services" className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-teal-brand transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{isVN ? "Quay lại danh mục dịch vụ" : "Back to Services"}</span>
          </Link>
        </div>

        {/* ==========================================
            HERO SECTION
            ========================================== */}
        <section className="bg-gradient-to-br from-[#0b1e2c] via-[#0f2a3f] to-[#0b1e2c] text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-teal-brand/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 space-y-6 max-w-3xl">
          <span className="bg-teal-brand/20 text-teal-brand border border-teal-brand/30 text-xs font-bold py-1.5 px-4 rounded-full uppercase tracking-wider inline-flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isVN ? "THẨM MỸ NỤ CƯỜI BẢO TỒN NGUYÊN BẢN" : "MINIMALLY INVASIVE SMILE MAKEOVER"}</span>
          </span>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-white leading-tight">
            {isVN ? "Mặt Dán Sứ Veneers Tại DentalNTK" : "Porcelain Veneers at DentalNTK"}
          </h1>
          
          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            {isVN 
              ? "Giải pháp phục hình thẩm mỹ cao cấp với lớp sứ siêu mỏng (0.3–0.7mm), bảo tồn tối đa răng thật, đem lại nụ cười rạng rỡ tự nhiên theo chuẩn tỷ lệ vàng."
              : "Ultra-thin porcelain veneers (0.3–0.7mm) crafted to transform your smile with maximum natural tooth structure preservation."}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-6 border-t border-slate-700/80">
            <div>
              <span className="text-xs text-slate-400 block font-medium">
                {isVN ? "Chi phí tham khảo chỉ từ:" : "Pricing starts from:"}
              </span>
              <span className="text-2xl sm:text-3xl font-extrabold text-teal-brand">
                $520 AUD / {isVN ? "răng" : "tooth"}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Link 
                href="/contact" 
                className="bg-teal-brand hover:bg-teal-700 text-white font-bold px-7 py-3.5 rounded-full text-xs sm:text-sm transition-all shadow-lg hover:scale-105"
              >
                {isVN ? "Đăng Ký Tư Vấn Nụ Cười" : "Book Free Smile Assessment"}
              </Link>
              <a 
                href="https://wa.me/84963333844" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border border-slate-600 hover:border-teal-brand text-slate-200 hover:text-white px-5 py-3.5 rounded-full text-xs sm:text-sm transition-all font-semibold whitespace-nowrap"
              >
                WhatsApp Chat
              </a>
            </div>
          </div>
        </div>
      </section>
      </div>

      {/* ==========================================
          1. VENEER LÀ GÌ? & TRƯỜNG HỢP PHÙ HỢP
          ========================================== */}
      <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm space-y-8">
        <div className="space-y-3">
          <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#0b1e2c]">
            {isVN ? "1. Veneer Là Gì & Phù Hợp Với Ai?" : "1. What Are Veneers & Who Are They For?"}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-light">
            {isVN ? (
              <>Mặt dán sứ Veneer (Porcelain Veneers) là lớp sứ siêu mỏng, dày khoảng <strong className="text-[#0b1e2c] font-bold">0.3–0.7mm</strong>, được chế tác riêng theo hình dáng răng của từng khách hàng và dán cố định lên bề mặt ngoài của răng thật. Veneer giúp cải thiện màu sắc, hình dáng, kích thước và sự đồng đều của hàm răng mà không cần mài cùi răng nhiều như bọc răng sứ toàn phần (Crown).</>
            ) : (
              <>Porcelain Veneers are ultra-thin ceramic shells (0.3–0.7mm thick) custom-crafted to fit over the front surface of your teeth, enhancing shape, shade, and alignment without heavy tooth reduction.</>
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {/* Suitable cases */}
          <div className="bg-emerald-50/60 border border-emerald-200/80 p-6 rounded-2xl space-y-3">
            <div className="flex items-center gap-2 text-emerald-800 font-bold text-base">
              <Check className="w-5 h-5 text-emerald-600 shrink-0" />
              <h3>{isVN ? "Trường hợp NÊN làm Veneer:" : "Ideal Candidates for Veneers:"}</h3>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700 font-light">
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span>{isVN ? "Răng bị ố vàng, nhiễm màu nặng (kháng sinh Tetracycline, nhiễm Fluor) không cải thiện bằng tẩy trắng." : "Teeth with severe staining or Tetracycline discoloration unresponsive to whitening."}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span>{isVN ? "Răng có khe thưa nhỏ đến trung bình." : "Small to moderate gaps between teeth."}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span>{isVN ? "Răng mọc lệch nhẹ, không đều mà không muốn niềng răng kéo dài." : "Mildly misaligned or uneven teeth where long orthodontics is not desired."}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span>{isVN ? "Răng bị mòn cạnh, sứt mẻ nhỏ hoặc hình dáng không cân đối." : "Chipped, worn edges, or irregular tooth shapes."}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span>{isVN ? "Thiết kế toàn bộ nụ cười (Smile Makeover) có thể xem trước kết quả 3D." : "Full Smile Makeovers with Digital 3D preview."}</span>
              </li>
            </ul>
          </div>

          {/* Unsuitable cases */}
          <div className="bg-rose-50/60 border border-rose-200/80 p-6 rounded-2xl space-y-3">
            <div className="flex items-center gap-2 text-rose-800 font-bold text-base">
              <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
              <h3>{isVN ? "Veneer KHÔNG phù hợp khi:" : "Veneers Are NOT Recommended For:"}</h3>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700 font-light">
              <li className="flex items-start gap-2">
                <span className="text-rose-600 font-bold">•</span>
                <span>{isVN ? "Răng bị sâu nặng, viêm tủy chưa được điều trị dứt điểm." : "Untreated deep decay or severe pulpal infection."}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-600 font-bold">•</span>
                <span>{isVN ? "Sai lệch khớp cắn nghiêm trọng (nên niềng răng trước)." : "Severe malocclusion or severe bite misalignment."}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-600 font-bold">•</span>
                <span>{isVN ? "Người nghiến răng nặng chưa kiểm soát (cần đeo máng bảo vệ)." : "Severe unmanaged bruxism (nightguard mandatory if treated)."}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-600 font-bold">•</span>
                <span>{isVN ? "Răng mất quá nhiều mô cứng — bác sĩ sẽ tư vấn Bọc sứ (Crown) thay thế." : "Extremely broken teeth with insufficient enamel — Crowns advised instead."}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ==========================================
          2. SO SÁNH VENEER - CROWN - TẨY TRẮNG
          ========================================== */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#0b1e2c]">
            {isVN ? "2. So Sánh Veneer, Bọc Sứ (Crown) & Tẩy Trắng" : "2. Comparison: Veneers vs Crowns vs Whitening"}
          </h2>
          <p className="text-sm text-slate-600 font-light">
            {isVN ? "Bảng so sánh chi tiết giúp bạn chọn đúng giải pháp tối ưu cho tình trạng răng hiện tại:" : "Side-by-side comparison to help you choose the ideal clinical solution:"}
          </p>
        </div>

        <div className="overflow-x-auto bg-white rounded-3xl border border-slate-200/80 shadow-sm">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-[#0b1e2c] text-white">
                <th className="p-4 font-bold uppercase tracking-wider whitespace-nowrap">{isVN ? "Tiêu chí" : "Criteria"}</th>
                <th className="p-4 font-bold uppercase tracking-wider whitespace-nowrap">{isVN ? "Mặt Dán Sứ Veneer" : "Veneers"}</th>
                <th className="p-4 font-bold uppercase tracking-wider whitespace-nowrap">{isVN ? "Bọc Sứ (Crown)" : "Crowns"}</th>
                <th className="p-4 font-bold uppercase tracking-wider whitespace-nowrap">{isVN ? "Tẩy Trắng Răng" : "Whitening"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr className="hover:bg-slate-50">
                <td className="p-4 font-bold text-[#0b1e2c]">{isVN ? "Mức độ mài răng" : "Tooth Reduction"}</td>
                <td className="p-4 font-bold text-teal-brand">{isVN ? "Tối thiểu (chỉ mặt ngoài 0.3-0.7mm)" : "Minimal (0.3-0.7mm front facial)"}</td>
                <td className="p-4">{isVN ? "Mài toàn bộ cùi răng (1.0-1.5mm)" : "Full 360° reduction (1.0-1.5mm)"}</td>
                <td className="p-4 text-emerald-600 font-semibold">{isVN ? "Không mài răng (0%)" : "None (0%)"}</td>
              </tr>
              <tr className="hover:bg-slate-50 bg-teal-brand/5">
                <td className="p-4 font-bold text-[#0b1e2c]">{isVN ? "Cải thiện màu sắc" : "Shade Improvement"}</td>
                <td className="p-4 font-bold text-teal-brand">{isVN ? "Rất cao (che nhiễm Tetracycline nặng)" : "Excellent (hides severe Tetracycline)"}</td>
                <td className="p-4">{isVN ? "Rất cao" : "Excellent"}</td>
                <td className="p-4">{isVN ? "Trung bình, hạn chế với nhiễm chất hóa học" : "Moderate, limited on chemical stains"}</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="p-4 font-bold text-[#0b1e2c]">{isVN ? "Cải thiện hình dáng / khe thưa" : "Shape & Gap Correction"}</td>
                <td className="p-4 font-bold text-teal-brand">{isVN ? "Có, hoàn hảo cho răng cửa" : "Yes, ideal for anterior teeth"}</td>
                <td className="p-4">{isVN ? "Có" : "Yes"}</td>
                <td className="p-4 text-rose-500 font-semibold">{isVN ? "Không hỗ trợ" : "No"}</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="p-4 font-bold text-[#0b1e2c]">{isVN ? "Ưu tiên khi răng khỏe" : "Best for Healthy Teeth"}</td>
                <td className="p-4 font-bold text-teal-brand">{isVN ? "Ưu tiên hàng đầu (Bảo tồn răng)" : "Top Priority (Tooth preservation)"}</td>
                <td className="p-4">{isVN ? "Chỉ dùng khi răng đã tổn thương nhiều" : "Used for heavily broken/treated teeth"}</td>
                <td className="p-4">{isVN ? "Dùng khi răng đều, chỉ ố nhẹ" : "Used when teeth shape is already good"}</td>
              </tr>
              <tr className="hover:bg-slate-50 bg-teal-brand/5">
                <td className="p-4 font-bold text-[#0b1e2c]">{isVN ? "Thời hạn bảo hành" : "Warranty Period"}</td>
                <td className="p-4 font-bold text-teal-brand">{isVN ? "5 – 7 Năm" : "5 – 7 Years"}</td>
                <td className="p-4 font-semibold">{isVN ? "5 – 10 Năm" : "5 – 10 Years"}</td>
                <td className="p-4 text-slate-400">{isVN ? "Không bảo hành (Cần làm lại)" : "No Warranty (Touch-ups needed)"}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ==========================================
          3. RỦI RO & MINH BẠCH Y KHOA
          ========================================== */}
      <section className="bg-amber-50/70 border border-amber-200/80 p-6 sm:p-8 rounded-3xl space-y-4">
        <div className="flex items-center gap-3 text-amber-900 font-bold text-lg font-serif">
          <AlertCircle className="w-6 h-6 text-amber-600 shrink-0" />
          <h2>{isVN ? "3. Minh Bạch Y Khoa: Rủi Ro & Điều Cần Biết Trước Khi Quyết Định" : "3. Clinical Transparency: Risks & Key Considerations"}</h2>
        </div>
        <p className="text-xs sm:text-sm text-amber-900 leading-relaxed font-light">
          {isVN 
            ? "DentalNTK không cam kết 'hoàn hảo 100%' hay 'không rủi ro'. Mọi thủ thuật nha khoa thẩm mỹ đều có các đặc tính sinh học bạn cần hiểu rõ trước khi thực hiện:"
            : "DentalNTK prioritizes full clinical transparency. Every cosmetic procedure carries biological considerations:"}
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 text-xs sm:text-sm text-amber-950 font-medium">
          <li className="bg-white/80 p-4 rounded-xl border border-amber-200/60 space-y-1">
            <strong className="text-amber-900 block">• {isVN ? "Ê buốt tạm thời:" : "Temporary Sensitivity:"}</strong>
            <span className="font-light">{isVN ? "Có thể ê buốt nhẹ 2–5 ngày sau mài răng, thường tự hết theo hướng dẫn của bác sĩ." : "Mild sensitivity for 2-5 days post-prep is normal and resolves naturally."}</span>
          </li>
          <li className="bg-white/80 p-4 rounded-xl border border-amber-200/60 space-y-1">
            <strong className="text-amber-900 block">• {isVN ? "Can thiệp không đảo ngược:" : "Irreversible Procedure:"}</strong>
            <span className="font-light">{isVN ? "Mài men răng dán veneer là can thiệp không thể đảo ngược hoàn toàn về răng gốc." : "Enamel removal is permanent; teeth will always require a restoration."}</span>
          </li>
          <li className="bg-white/80 p-4 rounded-xl border border-amber-200/60 space-y-1">
            <strong className="text-amber-900 block">• {isVN ? "Tránh cắn vật quá cứng:" : "Avoid Extreme Hard Force:"}</strong>
            <span className="font-light">{isVN ? "Veneer sứ rất chắc nhưng không nên cắn đá lạnh, mở nắp chai hay cắn móng tay." : "Avoid biting ice, cracking hard shells, or using teeth as tools."}</span>
          </li>
          <li className="bg-white/80 p-4 rounded-xl border border-amber-200/60 space-y-1">
            <strong className="text-amber-900 block">• {isVN ? "Cần đeo máng nếu nghiến răng:" : "Nightguard Mandatory for Bruxism:"}</strong>
            <span className="font-light">{isVN ? "Khách hàng có thói quen nghiến răng ban đêm bắt buộc đeo máng bảo vệ." : "Nightguard wear is strictly required for patients with nocturnal grinding."}</span>
          </li>
        </ul>
      </section>

      {/* ==========================================
          4. XEM VÀ CHỈNH SỬA TRƯỚC KHI DÁN CỐ ĐỊNH
          ========================================== */}
      <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#0b1e2c]">
            {isVN ? "4. Xem & Chỉnh Sửa Trực Tiếp Trước Khi Dán Cố Định" : "4. Try-In & Approval Process Before Final Bonding"}
          </h2>
          <p className="text-sm text-slate-600 font-light leading-relaxed">
            {isVN 
              ? "Nhiều khách hàng lo lắng: 'Lỡ tôi không thích hình dáng hoặc độ trắng của răng thì sao?'. Tại DentalNTK, bạn hoàn toàn làm chủ nụ cười qua 3 bước kiểm duyệt:"
              : "Worried you won't like the final shade or shape? At DentalNTK, you approve your new smile in 3 stages before permanent bonding:"}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
            <div className="w-8 h-8 rounded-full bg-teal-brand/20 text-teal-brand font-bold flex items-center justify-center text-xs">01</div>
            <h3 className="font-bold text-sm text-[#0b1e2c]">{isVN ? "Digital Smile Design 3D" : "Digital 3D Simulation"}</h3>
            <p className="text-xs text-slate-500 font-light leading-relaxed">
              {isVN ? "Xem trước mô phỏng nụ cười trên máy tính để thống nhất đường nét trước khi mài răng." : "Review digital mockups on screen to align expectations prior to prepping."}
            </p>
          </div>

          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
            <div className="w-8 h-8 rounded-full bg-teal-brand/20 text-teal-brand font-bold flex items-center justify-center text-xs">02</div>
            <h3 className="font-bold text-sm text-[#0b1e2c]">{isVN ? "Đeo Veneer Tạm Thời" : "Temporary Mockup Wear"}</h3>
            <p className="text-xs text-slate-500 font-light leading-relaxed">
              {isVN ? "Đeo răng tạm trong 2-3 ngày để trải nghiệm ăn nhai, soi gương và góp ý độ dài/màu sắc." : "Wear temporaries for 2-3 days to test phonetics, eating, and aesthetic shape."}
            </p>
          </div>

          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
            <div className="w-8 h-8 rounded-full bg-teal-brand/20 text-teal-brand font-bold flex items-center justify-center text-xs">03</div>
            <h3 className="font-bold text-sm text-[#0b1e2c]">{isVN ? "Thử Ướp Veneer Thật" : "Try-In Phase & Final Sign-Off"}</h3>
            <p className="text-xs text-slate-500 font-light leading-relaxed">
              {isVN ? "Ướm veneer thật lên răng bằng keo thử, soi gương chỉnh sửa hài lòng 100% mới dán vĩnh viễn." : "Test-fit actual veneers with try-in paste. Permanent bonding occurs ONLY upon your sign-off."}
            </p>
          </div>
        </div>
      </section>

      {/* ==========================================
          5. BẢNG GIÁ VÀ VẬT LIỆU VENEER
          ========================================== */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#0b1e2c]">
            {isVN ? "5. Bảng Giá & Vật Liệu Veneer Niêm Yết" : "5. Veneer Materials & Official Rates"}
          </h2>
          <p className="text-sm text-slate-600 font-light">
            {isVN ? "Bảng chi phí trọn gói minh bạch (đã bao gồm công thăm khám, thiết kế 3D và bảo hành):" : "Transparent all-inclusive rates (includes 3D design, lab fabrication & warranty):"}
          </p>
        </div>

        <div className="overflow-x-auto bg-white rounded-3xl border border-slate-200/80 shadow-sm">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-[#0b1e2c] text-white">
                <th className="p-4 font-bold uppercase tracking-wider whitespace-nowrap">{isVN ? "Loại Veneer" : "Veneer Material"}</th>
                <th className="p-4 font-bold uppercase tracking-wider whitespace-nowrap">{isVN ? "Đặc điểm nổi bật" : "Key Clinical Features"}</th>
                <th className="p-4 font-bold uppercase tracking-wider whitespace-nowrap">{isVN ? "Đơn giá / Răng" : "Price / Tooth"}</th>
                <th className="p-4 font-bold uppercase tracking-wider whitespace-nowrap">{isVN ? "Bảo hành" : "Warranty"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="p-4 font-bold text-[#0b1e2c]">
                  Veneer Sứ Thủy Tinh Emax (Emax Glass-Ceramic Veneer)
                </td>
                <td className="p-4 text-slate-600">
                  {isVN ? "Lớp sứ thủy tinh cao cấp siêu mỏng, độ trong mờ hoàn hảo, khả năng phản chiếu ánh sáng tự nhiên tuyệt đối." : "Premium glass-ceramic, optimal light reflection, maximum aesthetic translucency, ultra-thin."}
                </td>
                <td className="p-4 font-bold text-teal-brand text-sm sm:text-base">
                  $780 AUD
                </td>
                <td className="p-4 font-bold text-teal-brand">10 {isVN ? "Năm" : "Years"}</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="p-4 font-bold text-[#0b1e2c]">
                  Veneer Sứ Emax Zico (Emax Zico Porcelain Veneer)
                </td>
                <td className="p-4 text-slate-600">
                  {isVN ? "Sứ Emax Zico nhập khẩu từ Đức, chịu lực cao, độ bền màu lâu dài." : "German imported Emax Zico, high fracture resistance, long-term color stability."}
                </td>
                <td className="p-4 font-bold text-teal-brand text-sm sm:text-base">
                  $650 AUD
                </td>
                <td className="p-4 font-bold text-teal-brand">10 {isVN ? "Năm" : "Years"}</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="p-4 font-bold text-[#0b1e2c]">
                  Veneer Sứ Ceramil Thẩm Mỹ (Aesthetic Ceramil Veneer)
                </td>
                <td className="p-4 text-slate-600">
                  {isVN ? "Giải pháp phục hình răng thẩm mỹ tiêu chuẩn Đức, độ bóng bền đẹp." : "Standard German Ceramil porcelain, durable high-gloss finish, stable aesthetics."}
                </td>
                <td className="p-4 font-bold text-teal-brand text-sm sm:text-base">
                  $520 AUD
                </td>
                <td className="p-4 font-bold text-teal-brand">7 {isVN ? "Năm" : "Years"}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ==========================================
          6. QUY TRÌNH & LỊCH TRÌNH 5 NGÀY MẪU
          ========================================== */}
      <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#0b1e2c]">
            {isVN ? "6. Lịch Trình Mẫu 5 Ngày Cho Bệnh Nhân Quốc Tế" : "6. Sample 5-Day Itinerary for International Patients"}
          </h2>
          <p className="text-sm text-slate-600 font-light">
            {isVN ? "Lịch trình chuẩn bị cho ca làm 8–10 răng cửa tại Hà Nội (gồm thời gian du lịch nghỉ ngơi):" : "Optimized schedule for 8–10 anterior veneers in Hanoi:"}
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-100 text-[#0b1e2c]">
                <th className="p-3.5 font-bold uppercase w-24">{isVN ? "Thời gian" : "Day"}</th>
                <th className="p-3.5 font-bold uppercase">{isVN ? "Nội dung thực hiện" : "Clinical Clinical Actions"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr>
                <td className="p-3.5 font-bold text-teal-brand">{isVN ? "Ngày 1" : "Day 1"}</td>
                <td className="p-3.5">{isVN ? "Khám tổng quát, thiết kế nụ cười 3D, chụp ảnh studio và chốt phương án màu sắc/dáng răng." : "Comprehensive exam, 3D Smile Design, studio photography & shade selection."}</td>
              </tr>
              <tr className="bg-slate-50/50">
                <td className="p-3.5 font-bold text-teal-brand">{isVN ? "Ngày 2" : "Day 2"}</td>
                <td className="p-3.5">{isVN ? "Mài men răng tối thiểu, lấy dấu kỹ thuật số iTero và gắn veneer tạm thời." : "Micro-prep tooth reduction, iTero 3D digital scan & temporary mockup bonding."}</td>
              </tr>
              <tr>
                <td className="p-3.5 font-bold text-teal-brand">{isVN ? "Ngày 3–4" : "Day 3–4"}</td>
                <td className="p-3.5">{isVN ? "Labo CAD/CAM ép sứ tinh xảo (Khách tự do du lịch, tham quan Hà Nội/Hạ Long)." : "CAD/CAM lab fabrication & hand-characterization (Free time for Hanoi sightseeing)."}</td>
              </tr>
              <tr className="bg-[#0b1e2c]/5">
                <td className="p-3.5 font-bold text-teal-brand">{isVN ? "Ngày 5" : "Day 5"}</td>
                <td className="p-3.5 font-medium text-[#0b1e2c]">{isVN ? "Thử ướm veneer thật, tinh chỉnh theo ý muốn, dán cố định vĩnh viễn & hoàn tất." : "Try-in phase, aesthetic sign-off, permanent resin bonding & bite adjustment."}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ==========================================
          7. ĐỘI NGU BÁC SĨ & LABO CHẾ TÁC
          ========================================== */}
      <section className="bg-gradient-to-br from-slate-900 to-[#0b1e2c] text-white p-6 sm:p-10 rounded-3xl space-y-6">
        <div className="space-y-2">
          <span className="text-teal-brand text-xs font-bold uppercase tracking-wider block">
            {isVN ? "ĐỘI NGU LÂM SÀNG & TIÊU CHUẨN" : "CLINICAL TEAM & LAB STANDARDS"}
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-white">
            {isVN ? "7. Ai Sẽ Trực Tiếp Phụ Trách Ca Điều Trị Của Bạn?" : "7. Lead Clinician & On-Site Lab Credentials"}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          <div className="bg-white/10 p-5 rounded-2xl border border-white/15 space-y-3 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <UserCheck className="w-6 h-6 text-teal-brand shrink-0" />
              <div>
                <h3 className="font-bold text-base text-white">Dr. Nguyễn Huy Hoàng</h3>
                <p className="text-xs text-teal-brand font-medium">{isVN ? "Giám đốc Chuyên môn Phục hình Thẩm mỹ DentalNTK" : "Chief Clinical Director - Aesthetic Prosthodontics"}</p>
              </div>
            </div>
            <ul className="space-y-1.5 text-xs text-slate-300 font-light border-t border-white/10 pt-3">
              <li>• {isVN ? "Chứng chỉ hành nghề: 001234/HNO-CCHN" : "License No: 001234/HNO-CCHN"}</li>
              <li>• {isVN ? "Hơn 15 năm kinh nghiệm chuyên sâu thẩm mỹ nụ cười" : "15+ years experience in smile makeover prosthodontics"}</li>
              <li>• {isVN ? "Trực tiếp thực hiện hơn 3.000 ca Veneer sứ thành công" : "Completed over 3,000 successful ceramic veneer units"}</li>
            </ul>
          </div>

          <div className="bg-white/10 p-5 rounded-2xl border border-white/15 space-y-3 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <Award className="w-6 h-6 text-teal-brand shrink-0" />
              <div>
                <h3 className="font-bold text-base text-white">{isVN ? "Labo Chế Tác CAD/CAM Nội Bộ" : "On-Site CAD/CAM Digital Lab"}</h3>
                <p className="text-xs text-teal-brand font-medium">{isVN ? "Nhập khẩu phôi sứ chính hãng Ivoclar (Đức)" : "Genuine Ivoclar Vivadent Ceramic Ingot Supply"}</p>
              </div>
            </div>
            <ul className="space-y-1.5 text-xs text-slate-300 font-light border-t border-white/10 pt-3">
              <li>• {isVN ? "Chứng nhận ISO 13485 & CE cho vật liệu y tế" : "ISO 13485 & CE certified bio-compatible materials"}</li>
              <li>• {isVN ? "Hệ thống máy đắp sứ và máy phay 5 trục Roland (Nhật)" : "Roland 5-axis precision milling & Ivoclar press furnace"}</li>
              <li>• {isVN ? "Nghệ nhân đắp sứ thủ công tinh xảo theo tông màu da" : "Master ceramists custom shade-matching each unit"}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ==========================================
          8. CÂU HỎI THƯỜNG GẶP (FAQ ACCORDION)
          ========================================== */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#0b1e2c]">
            {isVN ? "8. Câu Hỏi Thường Gặp Về Veneer Sứ" : "8. Frequently Asked Questions"}
          </h2>
        </div>

        <div className="space-y-3">
          {[
            {
              q: isVN ? "Làm Veneer sứ có đau hoặc ê buốt không?" : "Is getting veneers painful or sensitive?",
              a: isVN 
                ? "Quá trình mài men răng siêu mỏng (0.3mm) hoàn toàn không đau vì bác sĩ có gây tê cục bộ nhẹ. Sau mài có thể ê buốt nhẹ vài ngày và sẽ hết tự nhiên."
                : "The micro-prep process is virtually painless under local anesthetic. Minor sensitivity for 2-3 days post-prep is normal and temporary."
            },
            {
              q: isVN ? "Mặt dán sứ Veneer có dùng được trọn đời không?" : "Do veneers last a lifetime?",
              a: isVN 
                ? "Không. Veneer là phục hình nha khoa có thời hạn sử dụng (5-7 năm với sứ ép Emax). Tuy nhiên nếu chăm sóc tốt và đeo máng chống nghiến, độ bền có thể kéo dài 10-15 năm."
                : "Veneers have a clinical lifespan (7+ years for Emax Press). With excellent hygiene and nightguard care, they frequently last 10-15 years."
            },
            {
              q: isVN ? "Cần ở lại Hà Nội bao nhiêu ngày để hoàn thành Veneers?" : "How many days in Hanoi are required for veneers?",
              a: isVN 
                ? "Trung bình từ 3 đến 5 ngày cho ca tiêu chuẩn (8-10 răng). DentalNTK hỗ trợ xe đưa đón sân bay và xếp lịch linh hoạt cho du khách."
                : "Typically 3 to 5 days for a standard case (8-10 teeth). DentalNTK provides airport transfers and flexible scheduling."
            },
            {
              q: isVN ? "Veneer có được bảo hành khi tôi đã quay về Úc không?" : "Is warranty covered after returning home to Australia?",
              a: isVN 
                ? "Có. Chính sách bảo hành của DentalNTK được áp dụng từ xa. Nếu sự cố thuộc lỗi vật liệu/kỹ thuật, phòng khám hỗ trợ 100% vé máy bay khứ hồi cho bạn quay lại Việt Nam (xem Mục 5 trang Bảo Hành)."
                : "Yes. DentalNTK provides remote warranty support. If technical fault occurs, we cover 100% round-trip economy airfare back to Vietnam."
            }
          ].map((faq, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden transition-all shadow-sm"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full p-5 text-left flex justify-between items-center gap-4 font-bold text-sm sm:text-base text-[#0b1e2c] hover:text-teal-brand transition-colors"
              >
                <span>{faq.q}</span>
                {openFaq === idx ? (
                  <ChevronUp className="w-5 h-5 text-teal-brand shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                )}
              </button>
              {openFaq === idx && (
                <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 font-light leading-relaxed border-t border-slate-100 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ==========================================
          9. BOTTOM CTA BAR
          ========================================== */}
      <section className="bg-gradient-to-r from-[#0b1e2c] via-[#0f2a3f] to-[#0b1e2c] text-white p-8 sm:p-12 rounded-3xl text-center space-y-6 shadow-xl">
        <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-white">
          {isVN ? "Sẵn Sàng Cho Nụ Cười Rạng Rỡ Như Mong Muốn?" : "Ready for Your Natural Smile Transformation?"}
        </h2>
        <p className="text-sm text-slate-300 font-light max-w-xl mx-auto leading-relaxed">
          {isVN 
            ? "Đăng ký tư vấn trực tuyến ngay hôm nay để nhận thiết kế phác đồ nụ cười 3D và báo giá AUD minh bạch từ bác sĩ chuyên khoa DentalNTK."
            : "Book your online consultation today to receive a 3D digital smile plan and transparent AUD quote."}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href="/contact"
            className="bg-teal-brand hover:bg-teal-700 text-white font-bold px-8 py-4 rounded-full text-xs sm:text-sm transition-all shadow-lg hover:scale-105 inline-flex items-center gap-2"
          >
            <span>{isVN ? "Đặt Lịch Tư Vấn Miễn Phí" : "Book Free Consultation"}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href="https://wa.me/84963333844"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-7 py-4 rounded-full text-xs sm:text-sm transition-all inline-flex items-center gap-2"
          >
            <span>WhatsApp (+84 963 333 844)</span>
          </a>

          <Link
            href="/warranty"
            className="text-teal-brand hover:text-white font-semibold text-xs sm:text-sm underline underline-offset-4 transition-colors px-4 py-4"
          >
            {isVN ? "Xem Chính Sách Bảo Hành" : "View Warranty Policy"}
          </Link>
        </div>
      </section>

    </div>
  );
}
