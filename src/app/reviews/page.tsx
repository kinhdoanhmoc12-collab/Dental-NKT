"use client";

import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import {
  Scan,
  CircuitBoard,
  ShieldCheck,
  Microscope,
  Gem,
  Factory,
  Award,
  Globe,
  Zap,
  Heart,
  CheckCircle2,
} from "lucide-react";

/* ────────────────────────────────────────────────────────────────────────
   DATA
   ──────────────────────────────────────────────────────────────────────── */

const equipment = [
  {
    icon: Scan,
    nameVN: "Máy quét 3D Exocad",
    nameEN: "Exocad 3D Scanner",
    descVN:
      "Quét hàm kỹ thuật số chính xác đến 7 micron, tạo mô hình 3D chi tiết giúp thiết kế nụ cười và lên kế hoạch điều trị chính xác tuyệt đối.",
    descEN:
      "Digital impression scanning with 7-micron accuracy, creating detailed 3D models for precise smile design and treatment planning.",
    origin: "Germany",
  },
  {
    icon: CircuitBoard,
    nameVN: "Hệ thống CAD/CAM",
    nameEN: "CAD/CAM Milling System",
    descVN:
      "Phay răng sứ tự động bằng công nghệ CAD/CAM, đảm bảo phục hình chính xác khít sát, thẩm mỹ tự nhiên trong thời gian ngắn nhất.",
    descEN:
      "Automated ceramic milling with CAD/CAM technology, ensuring precise-fit restorations with natural aesthetics in minimal time.",
    origin: "Germany",
  },
  {
    icon: Microscope,
    nameVN: "Máy X-quang CBCT 3D",
    nameEN: "3D CBCT X-Ray",
    descVN:
      "Chụp cắt lớp 3D toàn hàm, hiển thị xương hàm, dây thần kinh và xoang hàm giúp đặt Implant an toàn và chính xác tối đa.",
    descEN:
      "Full-jaw 3D cone beam CT scan, visualizing bone structure, nerves, and sinuses for maximally safe and precise implant placement.",
    origin: "Japan",
  },
  {
    icon: Zap,
    nameVN: "Laser Diode nha khoa",
    nameEN: "Dental Diode Laser",
    descVN:
      "Laser công suất cao cho phẫu thuật mô mềm không chảy máu, giảm đau, kháng khuẩn và rút ngắn thời gian lành thương đáng kể.",
    descEN:
      "High-power laser for bloodless soft tissue surgery, reducing pain, sterilizing bacteria, and significantly accelerating healing.",
    origin: "USA",
  },
  {
    icon: ShieldCheck,
    nameVN: "Hệ thống khử trùng Autoclave",
    nameEN: "Class B Autoclave Sterilization",
    descVN:
      "Hệ thống tiệt trùng Class B tiêu chuẩn châu Âu, đảm bảo mọi dụng cụ đạt vô trùng 100% trước mỗi ca điều trị.",
    descEN:
      "European-standard Class B sterilization system, ensuring 100% sterile instruments before every treatment procedure.",
    origin: "Italy",
  },
  {
    icon: Heart,
    nameVN: "Ghế nha khoa cao cấp",
    nameEN: "Premium Dental Chairs",
    descVN:
      "Ghế điều trị thế hệ mới tích hợp đèn LED, hệ thống hút chân không và cảm biến tự động, mang lại trải nghiệm thoải mái nhất cho bệnh nhân.",
    descEN:
      "Next-generation treatment chairs with integrated LED lighting, vacuum system, and auto sensors for maximum patient comfort.",
    origin: "Germany",
  },
];

const materials = [
  {
    icon: Gem,
    nameVN: "Sứ Zirconia (Đức)",
    nameEN: "Zirconia Ceramic (Germany)",
    descVN:
      "Sứ nguyên khối Zirconia siêu bền, chống mài mòn, màu sắc tự nhiên như răng thật. Thương hiệu hàng đầu từ Đức, đạt chuẩn CE & FDA.",
    descEN:
      "Ultra-durable monolithic Zirconia ceramic, wear-resistant with natural tooth-like color. Top German brand, CE & FDA certified.",
    badge: "CE & FDA",
  },
  {
    icon: Gem,
    nameVN: "Sứ E.max (Thụy Sĩ)",
    nameEN: "E.max Ceramic (Switzerland)",
    descVN:
      "Sứ ép thủy tinh Lithium Disilicate từ Ivoclar Vivadent — trong suốt, thẩm mỹ vượt trội, lý tưởng cho Veneers và Crowns vùng thẩm mỹ.",
    descEN:
      "Lithium Disilicate glass ceramic by Ivoclar Vivadent — translucent, aesthetically superior, ideal for Veneers and anterior Crowns.",
    badge: "Ivoclar",
  },
  {
    icon: Factory,
    nameVN: "Implant Straumann (Thụy Sĩ)",
    nameEN: "Straumann Implants (Switzerland)",
    descVN:
      "Thương hiệu Implant số 1 thế giới với bề mặt SLActive® giúp tích hợp xương nhanh gấp đôi, tỷ lệ thành công trên 98.8%.",
    descEN:
      "World's #1 implant brand with SLActive® surface for 2x faster osseointegration, achieving 98.8%+ success rate.",
    badge: "#1 Global",
  },
  {
    icon: Factory,
    nameVN: "Implant Nobel Biocare (Thụy Điển)",
    nameEN: "Nobel Biocare Implants (Sweden)",
    descVN:
      "Hệ thống Implant tiên phong với công nghệ TiUnite™, thiết kế sinh học tối ưu cho các ca All-on-4 và phục hình toàn hàm.",
    descEN:
      "Pioneering implant system with TiUnite™ technology, biologically optimized design for All-on-4 and full-arch restorations.",
    badge: "All-on-4",
  },
  {
    icon: Globe,
    nameVN: "Composite Nano (Nhật Bản)",
    nameEN: "Nano Composite (Japan)",
    descVN:
      "Composite thẩm mỹ công nghệ nano từ Tokuyama, độ bóng và bền màu vượt trội, dùng cho trám và chỉnh sửa thẩm mỹ.",
    descEN:
      "Aesthetic nano-technology composite by Tokuyama, superior gloss and color stability for fillings and cosmetic corrections.",
    badge: "Nano",
  },
  {
    icon: ShieldCheck,
    nameVN: "Vật liệu gây tê & thuốc",
    nameEN: "Anesthetics & Medications",
    descVN:
      "Thuốc tê và dược phẩm nhập khẩu chính hãng từ Pháp & Đức, đảm bảo an toàn tuyệt đối và hiệu quả giảm đau tối ưu.",
    descEN:
      "Genuine imported anesthetics and pharmaceuticals from France & Germany, ensuring absolute safety and optimal pain management.",
    badge: "Imported",
  },
];

const certifications = [
  {
    titleVN: "Tiêu chuẩn quốc tế",
    titleEN: "International Standards",
    descVN: "Quy trình điều trị đạt chuẩn ISO 9001 & tiêu chuẩn y tế châu Âu",
    descEN: "Treatment procedures meeting ISO 9001 & European medical standards",
  },
  {
    titleVN: "Vật liệu chính hãng 100%",
    titleEN: "100% Genuine Materials",
    descVN: "Cam kết sử dụng vật liệu nhập khẩu chính hãng, có tem chống hàng giả",
    descEN: "Commitment to genuine imported materials with anti-counterfeit labels",
  },
  {
    titleVN: "Bảo hành dài hạn",
    titleEN: "Long-term Warranty",
    descVN: "Bảo hành lên đến 15 năm cho Implant và 10 năm cho răng sứ",
    descEN: "Warranty up to 15 years for Implants and 10 years for porcelain",
  },
];

/* ────────────────────────────────────────────────────────────────────────
   PAGE COMPONENT
   ──────────────────────────────────────────────────────────────────────── */
export default function EquipmentPage() {
  const { lang } = useLanguage();
  const isVN = lang === "VN";

  return (
    <div className="relative min-h-screen bg-white">
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0b1e2c] via-[#0f2a3d] to-[#0b1e2c] text-white">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full bg-teal-brand/10 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-[300px] h-[300px] rounded-full bg-cyan-500/8 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-12 lg:py-16">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-5">
              <Award className="w-3.5 h-3.5 text-teal-brand" />
              <span className="text-xs font-medium text-teal-brand/90">
                {isVN ? "Chuẩn quốc tế" : "International Standards"}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
              {isVN ? (
                <>
                  Thiết bị{" "}
                  <span className="bg-gradient-to-r from-teal-brand to-cyan-400 bg-clip-text text-transparent">
                    máy móc & vật liệu
                  </span>
                </>
              ) : (
                <>
                  Equipment{" "}
                  <span className="bg-gradient-to-r from-teal-brand to-cyan-400 bg-clip-text text-transparent">
                    & Materials
                  </span>
                </>
              )}
            </h1>
            <p className="mt-4 text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              {isVN
                ? "Nha Khoa Trẻ đầu tư hệ thống thiết bị hiện đại và sử dụng vật liệu nhập khẩu chính hãng từ các thương hiệu hàng đầu thế giới — vì nụ cười của bạn xứng đáng được chăm sóc bằng những điều tốt nhất."
                : "Nha Khoa Trẻ invests in state-of-the-art equipment and genuine imported materials from world-leading brands — because your smile deserves nothing but the best."}
            </p>
          </div>
        </div>
      </section>

      {/* ── EQUIPMENT SECTION ── */}
      <section className="py-12 lg:py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-teal-brand/10 flex items-center justify-center">
              <CircuitBoard className="w-5 h-5 text-teal-brand" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#0b1e2c]">
                {isVN ? "Thiết bị & Máy móc" : "Equipment & Technology"}
              </h2>
              <p className="text-sm text-slate-500">
                {isVN ? "Công nghệ tiên tiến nhập khẩu từ Đức, Nhật, Mỹ" : "Advanced technology imported from Germany, Japan, USA"}
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {equipment.map((item, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl p-6 border border-slate-100 hover:border-teal-brand/20 transition-all duration-300 hover:shadow-[0_8px_30px_-10px_rgba(0,175,199,0.12)]"
                style={{
                  animationDelay: `${i * 80}ms`,
                  animation: "fadeIn 0.5s ease-out forwards",
                  opacity: 0,
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-brand/10 to-cyan-500/10 flex items-center justify-center shrink-0 group-hover:from-teal-brand/20 group-hover:to-cyan-500/20 transition-colors">
                    <item.icon className="w-6 h-6 text-teal-brand" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5">
                      <h3 className="font-bold text-[#0b1e2c] text-base leading-snug">
                        {isVN ? item.nameVN : item.nameEN}
                      </h3>
                    </div>
                    <span className="inline-block text-[10px] font-bold text-white bg-slate-700 px-2 py-0.5 rounded-full mb-2">
                      {item.origin}
                    </span>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {isVN ? item.descVN : item.descEN}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MATERIALS SECTION ── */}
      <section className="py-12 lg:py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center">
              <Gem className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#0b1e2c]">
                {isVN ? "Vật liệu nha khoa" : "Dental Materials"}
              </h2>
              <p className="text-sm text-slate-500">
                {isVN ? "100% chính hãng từ Thụy Sĩ, Đức, Nhật Bản" : "100% genuine from Switzerland, Germany, Japan"}
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {materials.map((item, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl p-6 border border-slate-100 hover:border-amber-200 transition-all duration-300 hover:shadow-[0_8px_30px_-10px_rgba(217,119,6,0.1)]"
                style={{
                  animationDelay: `${i * 80}ms`,
                  animation: "fadeIn 0.5s ease-out forwards",
                  opacity: 0,
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center shrink-0 group-hover:from-amber-100 group-hover:to-orange-100 transition-colors">
                    <item.icon className="w-6 h-6 text-amber-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5">
                      <h3 className="font-bold text-[#0b1e2c] text-base leading-snug">
                        {isVN ? item.nameVN : item.nameEN}
                      </h3>
                    </div>
                    <span className="inline-block text-[10px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full mb-2">
                      {item.badge}
                    </span>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {isVN ? item.descVN : item.descEN}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ── */}
      <section className="py-10 lg:py-12 bg-gradient-to-b from-slate-50 to-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid sm:grid-cols-3 gap-5">
            {certifications.map((cert, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-white rounded-xl p-5 border border-slate-100"
              >
                <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-[#0b1e2c] text-sm mb-1">
                    {isVN ? cert.titleVN : cert.titleEN}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {isVN ? cert.descVN : cert.descEN}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* fadeIn keyframes */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
