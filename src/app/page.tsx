"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import {
  Phone,
  Star,
  Check,
  Award,
  Shield,
  Upload,
  Calendar,
  Sparkles,
  ArrowRight,
  Stethoscope,
  X,
  FileText,
  ChevronDown,
  ChevronUp,
  ChevronRight,
  ChevronLeft
} from "lucide-react";

export default function HomePage() {
  const { lang, t } = useLanguage();
  const [homeDocSlide, setHomeDocSlide] = useState(0);

  // LEAD FORM STATE
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "AU",
    need: "",
    message: ""
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  // SAVINGS ESTIMATOR STATE
  const [selectedTreatment, setSelectedTreatment] = useState("veneers");
  const [quantity, setQuantity] = useState(10);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("country", formData.country);
    data.append("treatment_interest", formData.need);
    data.append("message", formData.message);

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        body: data
      });
      if (res.ok) {
        setFormSubmitted(true);
      } else {
        alert("Có lỗi xảy ra khi gửi thông tin. Vui lòng thử lại.");
      }
    } catch (err) {
      console.error(err);
      alert("Lỗi kết nối máy chủ.");
    }
  };



  // Helper calculations for live Savings Estimator
  const getNumericPrice = (str: string): number => {
    if (!str) return 0;
    const cleanStr = str.replace(/[^0-9]/g, '');
    return parseInt(cleanStr, 10) || 0;
  };

  const formatCurrency = (val: number): string => {
    if (lang === "VN") {
      return `${val.toLocaleString('vi-VN')} VND`;
    }
    const symbol = lang === "AU" ? "AUD" : lang === "NZ" ? "NZD" : "USD";
    return `$${val.toLocaleString('en-US')} ${symbol}`;
  };

  const getEstimates = () => {
    let unitClinic = 0;
    let unitHome = 0;
    let label = lang === "VN" ? "Số lượng răng" : "Number of Teeth";
    let min = 1;
    let max = 24;

    if (selectedTreatment === "veneers") {
      unitClinic = getNumericPrice(t.compT2Rola);
      unitHome = getNumericPrice(t.compT2Aus);
    } else if (selectedTreatment === "implants") {
      unitClinic = getNumericPrice(t.compT1Rola);
      unitHome = getNumericPrice(t.compT1Aus);
    } else if (selectedTreatment === "all-on-4") {
      unitClinic = getNumericPrice(t.compT3Rola);
      unitHome = getNumericPrice(t.compT3Aus);
      label = lang === "VN" ? "Số hàm phục hình" : "Number of Arches";
      min = 1;
      max = 2;
    } else if (selectedTreatment === "package") {
      unitClinic = getNumericPrice(t.compT2Rola) * 10 + 200; // Veneers package approx
      unitHome = getNumericPrice(t.compT2Aus) * 10 + 1000;
      label = lang === "VN" ? "Số lượng gói" : "Number of Packages";
      min = 1;
      max = 2;
    }

    // Force clamp quantity within limits when switching treatments
    const clampedQty = Math.max(min, Math.min(quantity, max));

    const totalClinic = unitClinic * clampedQty;
    const totalHome = unitHome * clampedQty;
    const netSavings = totalHome - totalClinic;

    return {
      totalClinic,
      totalHome,
      netSavings,
      label,
      min,
      max,
      clampedQty
    };
  };

  const est = getEstimates();

  // Sync quantity slider bounds when treatment changes
  const handleTreatmentChange = (val: string) => {
    setSelectedTreatment(val);
    if (val === "all-on-4" || val === "package") {
      setQuantity(1);
    } else {
      setQuantity(10);
    }
  };

  const faqItems = [
    {
      q: lang === "VN" ? "Chi phí dán sứ veneer tại Nha khoa DentalNTK cho bệnh nhân Úc là bao nhiêu?" : "How much do porcelain veneers cost at DentalNTK Clinic for Australian patients?",
      a: lang === "VN"
        ? "Mặt dán sứ Emax Zico tại Nha khoa DentalNTK có giá AUD $650 (12.000.000 VNĐ) mỗi răng. Một bộ veneer 10 răng tiêu chuẩn có giá khoảng AUD $6,512 (120.000.000 VNĐ), so với mức AUD $1,500-$2,500 mỗi răng tại các phòng khám tư nhân ở Úc - giúp tiết kiệm 60-75%. Tất cả giá veneer đã bao gồm bảo hành chất liệu 10 năm và tài liệu lô sản xuất chính hãng Ivoclar Vivadent."
        : "A single Emax Zico veneer at DentalNTK Clinic costs AUD $650 (12,000,000 VND) per tooth. A standard 10-tooth veneer set costs approximately AUD $6,512 (120,000,000 VND), compared to AUD $1,500-$2,500 per tooth at Australian private practices - a saving of 60-75%. All veneer prices include a 10-year material warranty and certified Ivoclar Vivadent batch documentation."
    },
    {
      q: lang === "VN" ? "Chi phí cấy ghép implant ở Việt Nam so với Úc thế nào?" : "How much does a dental implant cost in Vietnam compared to Australia?",
      a: lang === "VN"
        ? "Một ca implant Hiossen Mỹ đơn lẻ tại DentalNTK - bao gồm trụ implant và mão răng sứ Everes - có giá AUD $1,368 (25.200.000 VNĐ). Trụ Straumann Thụy Sỹ có giá AUD $3,582 (66.000.000 VNĐ). Tại các phòng khám tư nhân ở Úc, chi phí tương đương thường từ AUD $5,000-$8,000, giúp tiết kiệm 55-73%. Tất cả các thương hiệu đều được sản xuất quốc tế và đi kèm tài liệu số sê-ri chính thức."
        : "A single Hiossen US implant at DentalNTK - fixture and Everes crown combined - costs AUD $1,368 (25,200,000 VND). A premium Swiss Straumann implant costs AUD $3,582 (66,000,000 VND). At Australian private practices, the equivalent typically costs AUD $5,000-$8,000, a saving of 55-73%. All brands are internationally manufactured and supplied with official serial number documentation."
    },
    {
      q: lang === "VN" ? "Chi phí phục hình toàn hàm tại Nha khoa DentalNTK cho bệnh nhân Úc là bao nhiêu?" : "What is the full-arch restoration cost at DentalNTK Clinic for Australian patients?",
      a: lang === "VN"
        ? "Điều trị phục hình toàn hàm (Thanh 3 Titan + 4 Implant Hiossen) tại Nha khoa DentalNTK có giá AUD $7,425 (136.800.000 VNĐ) mỗi hàm. Phục hình toàn hàm tương đương tại Úc thường có giá AUD $20,000-$35,000 mỗi hàm. Giá của DentalNTK đã bao gồm trọn gói phẫu thuật, trụ implant, thanh Titan và mão phục hình sau cùng. Điều trị hai hàm (toàn miệng) có giá AUD $14,850 (273.600.000 VNĐ)."
        : "Full-arch restoration (Titanium 3-Bar + 4 Hiossen Implants) at DentalNTK Clinic costs AUD $7,425 (136,800,000 VND) per arch. Australian equivalent full-arch treatments typically cost AUD $20,000-$35,000 per arch. DentalNTK prices include surgeries, implant fixtures, titanium bar, and final crowns. Two-arch (full mouth) treatment costs AUD $14,850 (273,600,000 VND)."
    },
    {
      q: lang === "VN" ? "Điều trị nha khoa tại Việt Nam có an toàn không?" : "Is it safe to have dental treatment in Vietnam?",
      a: lang === "VN"
        ? "Nha khoa DentalNTK đã điều trị cho hơn 18,000 bệnh nhân từ 26 quốc gia kể từ năm 2017. Phòng khám sử dụng các vật liệu implant và phục hình được chứng nhận quốc tế - Straumann, Nobel Biocare, Ivoclar Emax, Osstem - giống hệt với các dòng thương hiệu được sử dụng tại các phòng khám tư nhân được cấp phép của Úc. Chẩn đoán nội bộ bao gồm chụp X-quang toàn cảnh OPG, quét xương 3D CBCT và quét dấu răng kỹ thuật số iTero. Đội ngũ cấy ghép implant được dẫn dắt bởi Giám đốc chuyên môn, người đã được đào tạo chuyên sâu tại Loma Linda ở Hoa Kỳ."
        : "DentalNTK Clinic has treated 18,000+ patients from 26 countries since 2017. The clinic uses internationally certified implant and prosthetic materials - Straumann, Nobel Biocare, Ivoclar Emax, Osstem - identical to the brand range used in registered Australian private practices. In-house diagnostics include OPG panoramic X-ray, CBCT 3D bone scanning, and iTero digital impressions. The implantology team is led by our Chief Clinical Director, who trained at Loma Linda University in the United States."
    },
    {
      q: lang === "VN" ? "Điều trị nha khoa tại Việt Nam so với Thái Lan hay Bali cho bệnh nhân Úc thế nào?" : "How does Vietnam dental treatment compare to Thailand or Bali for Australian patients?",
      a: lang === "VN"
        ? "Thái Lan (Bangkok, Phuket) và Bali là những điểm đến du lịch nha khoa được tìm kiếm nhiều nhất đối với bệnh nhân Úc. Thời gian bay trực tiếp là tương đương (6-9 giờ từ bờ đông Úc). Ưu thế của Việt Nam đối với bệnh nhân Úc tập trung vào quy mô lâm sàng, danh sách thương hiệu implant được công bố rõ ràng (đi kèm tài liệu lô chất liệu) và hồ sơ bệnh án tiền du lịch bằng văn bản. Điểm đến phù hợp tùy thuộc vào trường hợp cụ thể, ngân sách và mức độ mong muốn tự xác minh thông tin lâm sàng của bạn."
        : "Thailand (Bangkok, Phuket) and Bali are the most-searched dental tourism destinations for Australian patients. Direct flight times are similar (6-9 hours from east coast AU). Vietnam's advantages for Australian patients centre on clinical scale, published implant brand list (with material batch documentation), and the written pre-travel case file. The right destination depends on your specific case, budget, and willingness to verify clinical credentials independently."
    },
    {
      q: lang === "VN" ? "Một chuyến đi làm răng tại Việt Nam mất bao lâu cho bệnh nhân Úc?" : "How long does a dental trip to Vietnam take for Australian patients?",
      a: lang === "VN"
        ? "Thời gian điều trị phụ thuộc vào thủ thuật. Dán sứ Emax (10 răng) thường cần 5-7 ngày điều trị. Cấy ghép một implant đơn lẻ cần 3-5 ngày. Phục hình toàn hàm All-on-4 cần tối thiểu 7-10 ngày cho giai đoạn phẫu thuật cấy ghép. Các chuyến bay trực tiếp từ Sydney hoặc Melbourne đến Việt Nam mất khoảng 8-9 giờ. Từ Perth là khoảng 7 giờ. Báo cáo chi phí AUD miễn phí của bạn sẽ bao gồm ước tính thời gian chuyến đi được cá nhân hóa dựa trên sơ đồ răng cụ thể của bạn."
        : "Treatment duration depends on the procedure. Emax veneers (10 units) typically require 5-7 treatment days. A single dental implant placement requires 3-5 days. All-on-4 full-arch restorations require a minimum of 7-10 days for the placement phase. Direct flights from Sydney or Melbourne to Vietnam take approximately 8-9 hours. Perth is approximately 7 hours. Your free AUD quote includes a personalised trip-length estimate based on your specific tooth chart."
    },
    {
      q: lang === "VN" ? "Nha khoa DentalNTK cung cấp những chính sách bảo hành gì cho bệnh nhân Úc?" : "What warranty does DentalNTK Clinic offer to Australian patients?",
      a: lang === "VN"
        ? "Bảo hành Toàn cầu của DentalNTK cung cấp một quy trình được văn bản hóa rõ ràng cho bệnh nhân Úc. Mặt dán sứ Emax Zico được bảo hành chất liệu 10 năm. Mão sứ Lava và Lava Plus được bảo hành 10 năm. Thân răng của hệ thống implant Nobel Biocare và Straumann được bảo hành 10 năm; implant Hiossen và Osstem được bảo hành 10 năm. Bảo hành bao gồm đánh giá lâm sàng từ xa qua ảnh chụp gửi bảo mật, điều trị khắc phục được phê duyệt và hỗ trợ chi phí vé máy bay khứ hồi khi chuyến thăm bảo hành được xác nhận. Không có thương hiệu nào bảo hành trọn đời - các phòng khám quảng cáo điều này cần được cân nhắc kỹ."
        : "DentalNTK's Global Warranty provides a written, documented process for Australian patients. Emax Zico veneers carry a 10-year material warranty. Lava and Lava Plus crowns carry a 10-year warranty. Nobel Biocare and Straumann implant system crowns are warranted for 10 years; Hiossen and Osstem implants for 10 years. The warranty covers remote clinical review via secure photo submission, approved remedial treatment, and return-flight travel support when a warranty visit is confirmed. No brand carries a lifetime warranty - any clinic claiming this should be avoided."
    },
    {
      q: lang === "VN" ? "Nha khoa DentalNTK sử dụng những vật liệu gì cho mặt sứ và cấy ghép implant?" : "What materials does DentalNTK Clinic use for veneers and implants?",
      a: lang === "VN"
        ? "Đối với veneer và mão răng sứ: Ivoclar Vivadent Emax Press (sứ lithium disilicate), Lava Plus zirconia và sứ VITA. Đối với implant: Straumann SLActive (Thụy Sĩ), Nobel Biocare TiUltra (Mỹ/Thụy Điển), Osstem (Hàn Quốc) và Neodent (Brazil). Tất cả các vật liệu đều được cung cấp thẻ lô của nhà sản xuất, đăng ký số sê-ri và tài liệu bảo hành chính thức - cùng tiêu chuẩn truy xuất nguồn gốc như các phòng khám tư nhân được cấp phép của Úc."
        : "For veneers and crowns: Ivoclar Vivadent Emax Press (lithium disilicate), Lava Plus zirconia, and VITA ceramic. For implants: Straumann SLActive (Switzerland), Nobel Biocare TiUltra (US/Sweden), Osstem (South Korea), and Neodent (Brazil). All materials are supplied with manufacturer batch cards, serial number registration, and official warranty documentation - the same traceability standard as registered Australian private practices."
    },
    {
      q: lang === "VN" ? "Tôi có thể nhận phác đồ điều trị trước khi đặt vé máy bay sang Việt Nam không?" : "Can I get a treatment plan before booking flights to Vietnam?",
      a: lang === "VN"
        ? "Có. Quy trình Chẩn đoán Tiền hành trình của DentalNTK hỗ trợ lập phác đồ tư vấn và báo giá AUD bằng văn bản rõ ràng trước khi đặt bất kỳ chuyến bay nào. Báo giá ghi rõ từng răng, thương hiệu vật liệu dự kiến, bác sĩ điều trị, thời gian điều trị và các điều khoản bảo hành. Hồ sơ bệnh án này được cấp trước khi bạn có bất kỳ cam kết tài chính nào."
        : "Yes. DentalNTK's Pre-Travel Diagnostic Protocol provides a written AUD quote itemising each tooth, planned material brands, treating clinicians, treatment duration, and warranty terms before booking any flights. This case file is issued before any financial commitment."
    },
    {
      q: lang === "VN" ? "Quỹ bảo hiểm y tế tư nhân của Úc có chi trả cho việc điều trị tại Việt Nam không?" : "Will my Australian private health fund cover dental in Vietnam?",
      a: lang === "VN"
        ? "Hầu hết các quỹ bảo hiểm y tế tư nhân của Úc (như Bupa, Medibank, HCF) và hệ thống Medicare đều KHÔNG chi trả cho các dịch vụ nha khoa thẩm mỹ và điều trị tại nước ngoài. Chi phí niêm yết tại Nha khoa DentalNTK đã được tối ưu hóa trực tiếp cho bệnh nhân tự chi trả (giúp tiết kiệm từ 60–75% so với giá tại Úc), mang lại lợi ích tài chính tối đa mà không cần phụ thuộc vào chính sách bảo hiểm."
        : "Most Australian private health funds and Medicare do NOT cover elective or cosmetic dental treatments performed overseas. DentalNTK's published rates are already directly optimized for self-paying patients (saving 60–75% compared to Australian private clinic rates), delivering maximum value without reliance on insurance rebates."
    }
  ];

  return (
    <div className="w-full">

      {/* ========================================================
          SECTION 1: HERO (With Pre-Travel Case File Layout)
          ======================================================== */}
      <section className="relative bg-gradient-to-br from-[#0b1e2c] via-[#0f2a3f] to-[#0b1e2c] text-white py-10 lg:py-14 pb-16 lg:pb-20 overflow-hidden">
        
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-brand/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-teal-brand/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Hero Copy (7 cols) */}
          <div className="lg:col-span-7 space-y-4 lg:space-y-5 text-center lg:text-left">
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              <span className="bg-teal-brand/20 border border-teal-brand-light/30 text-teal-brand-light text-xs font-bold py-1.5 px-4 rounded-full uppercase tracking-wider">
                {t.heroBadge}
              </span>
              <span className="bg-gold-brand/20 border border-gold-brand/30 text-gold-brand text-xs font-bold py-1.5 px-4 rounded-full uppercase tracking-wider flex items-center gap-1">
                <Star className="w-3 h-3 fill-gold-brand" /> {t.heroBadge3}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold tracking-tight leading-tight">
              {lang === "VN" ? "Tiết kiệm 60–80% chi phí làm răng Veneer & Implant tại Hà Nội" : "Save 60–80% on Veneers & Implants in Vietnam — Using Certified Protocols"}
            </h1>
            
            <p className="text-sm sm:text-base lg:text-lg text-slate-200 font-normal max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {lang === "VN"
                ? "Nhận hồ sơ phác đồ điều trị răng chi tiết bằng tiền tệ VND / AUD rõ ràng trước khi đặt vé máy bay. Mọi báo giá đều bao gồm tên bác sĩ điều trị, nhãn hiệu vật liệu chính hãng và bảo hành lên tới 10 năm."
                : "Australian patients receive a written tooth-by-tooth AUD treatment plan before booking flights. Every quote includes named clinicians, certified brand documentation, and a global warranty — not a price on arrival."}
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2 pb-1">
              <a 
                href="#homepage-inquiry" 
                className="bg-teal-brand hover:bg-teal-brand-hover text-[#0b1e2c] px-8 py-3.5 font-extrabold text-sm rounded-full transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0 text-center flex items-center justify-center gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>{lang === "VN" ? "Nhận báo giá văn bản miễn phí" : "Get Free Written Quote"}</span>
              </a>
              <Link 
                href="/cost" 
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-3.5 font-bold text-sm rounded-full transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{lang === "VN" ? "Xem bảng giá chi tiết" : "See AUD Price Index"}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="pt-5 mt-2 flex flex-col sm:flex-row sm:flex-wrap items-center lg:justify-start justify-center gap-x-10 gap-y-3 border-t border-white/10 text-xs text-slate-200">
              <div className="flex items-center justify-center lg:justify-start gap-2.5">
                <Check className="w-4 h-4 text-teal-brand shrink-0" />
                <span className="font-medium whitespace-nowrap">{t.heroBadge1} (Straumann / Nobel Biocare)</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2.5">
                <Check className="w-4 h-4 text-teal-brand shrink-0" />
                <span className="font-medium whitespace-nowrap">{t.heroBadge2} (Ivoclar E.max)</span>
              </div>
            </div>
          </div>

          {/* Hero Image (5 cols) */}
          <div className="lg:col-span-5 relative w-full h-[320px] sm:h-[400px] lg:h-[420px] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <Image 
              src="/hero_dentist.png" 
              alt="DentalNTK Boutique Clinic" 
              fill 
              className="object-cover" 
              sizes="(max-w-7xl) 40vw, 100vw"
              priority
            />
          </div>

        </div>
      </section>

      {/* ========================================================
          SECTION 2: PROOF STATS STRIP
          ======================================================== */}
      <section className="bg-gradient-to-br from-[#0b1e2c] via-[#0f2a3f] to-[#0b1e2c] border-t border-b border-slate-800 py-8 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
            <div className="space-y-1.5 py-3 md:py-1">
              <strong className="text-2xl sm:text-3xl font-serif font-black text-white block tracking-tight">18,000+</strong>
              <span className="text-xs text-slate-300 font-bold uppercase tracking-wider block leading-tight">{lang === "VN" ? "Bệnh nhân từ 2017" : "Patients treated since 2017"}</span>
            </div>
            <div className="space-y-1.5 py-3 md:py-1 md:pl-2">
              <strong className="text-2xl sm:text-3xl font-serif font-black text-white block tracking-tight">26</strong>
              <span className="text-xs text-slate-300 font-bold uppercase tracking-wider block leading-tight">{lang === "VN" ? "Quốc tịch đại diện" : "Countries represented"}</span>
            </div>
            <div className="space-y-1.5 py-3 md:py-1 md:pl-2">
              <strong className="text-2xl sm:text-3xl font-serif font-black text-white block tracking-tight">
                {lang === "VN" ? "9.000+" : "9,000+"}
              </strong>
              <span className="text-xs text-slate-300 font-bold uppercase tracking-wider block leading-tight">{lang === "VN" ? "Ca cấy ghép Implant" : "Implants placed by leads"}</span>
            </div>
            <div className="space-y-1.5 py-3 md:py-1 md:pl-2">
              <strong className="text-2xl sm:text-3xl font-serif font-black text-white block tracking-tight">2</strong>
              <span className="text-xs text-slate-300 font-bold uppercase tracking-wider block leading-tight">{lang === "VN" ? "Chi nhánh đăng ký" : "Registered branches"}</span>
            </div>
            <div className="space-y-1.5 py-3 md:py-1 col-span-2 md:col-span-1 md:pl-2">
              <strong className="text-2xl sm:text-3xl font-serif font-black text-teal-brand block tracking-tight">
                {lang === "VN" ? "12.000.000đ" : "$650 AUD"}
              </strong>
              <span className="text-xs text-slate-300 font-bold uppercase tracking-wider block leading-tight">{lang === "VN" ? "Mỗi răng sứ Emax" : "Per Emax veneer - fixed rate"}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 3: DENTAL SERVICES AND PRICE INDEX
          ======================================================== */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#0b1e2c] font-serif font-extrabold">
              World-Class Dental Restorations
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              We specialize in surgical implants and aesthetic design under German medical standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <div className="p-3 bg-teal-brand-light text-teal-brand rounded-lg w-12 h-12 flex items-center justify-center">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#0b1e2c]">{t.treat1Title}</h3>
                <p className="text-sm text-slate-500 font-normal leading-relaxed line-clamp-3">{t.treat1Desc}</p>
              </div>
              <Link href="/services/implants" className="text-sm font-bold text-teal-brand hover:text-teal-brand-hover inline-flex items-center gap-1 mt-6">
                <span>Learn details</span> <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <div className="p-3 bg-teal-brand-light text-teal-brand rounded-lg w-12 h-12 flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#0b1e2c]">{t.treat2Title}</h3>
                <p className="text-sm text-slate-500 font-normal leading-relaxed line-clamp-3">{t.treat2Desc}</p>
              </div>
              <Link href="/services/veneers" className="text-sm font-bold text-teal-brand hover:text-teal-brand-hover inline-flex items-center gap-1 mt-6">
                <span>Learn details</span> <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <div className="p-3 bg-teal-brand-light text-teal-brand rounded-lg w-12 h-12 flex items-center justify-center">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#0b1e2c]">{t.treat3Title}</h3>
                <p className="text-sm text-slate-500 font-normal leading-relaxed line-clamp-3">{t.treat3Desc}</p>
              </div>
              <Link href="/services/allon4" className="text-sm font-bold text-teal-brand hover:text-teal-brand-hover inline-flex items-center gap-1 mt-6">
                <span>Learn details</span> <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================
          SECTION 4: INTERACTIVE SAVINGS ESTIMATOR
          ======================================================== */}
      <section id="savings-estimator" className="pt-12 pb-4 bg-white scroll-mt-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl border border-slate-100 shadow-premium p-6 sm:p-10 space-y-8">
            
            <div className="text-center max-w-2xl mx-auto space-y-2">
              
              <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#0b1e2c]">{lang === "VN" ? "So sánh Chi phí điều trị Úc vs Việt Nam" : "Australia vs Vietnam Dental Cost Comparison"}</h2>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                {lang === "VN"
                  ? "So sánh giá của DentalNTK Hà Nội với chi phí nha khoa tư nhân trung bình tại Úc/Mỹ. Chọn dịch vụ và điều chỉnh số lượng để xem mức tiết kiệm dự kiến."
                  : "Compare DentalNTK Hanoi's prices against average Australian private dentistry costs. Select a treatment and adjust the quantity to see your estimated saving."}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-4">
              {/* Inputs */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="treatment-selector" className="text-xs font-bold text-slate-700 uppercase tracking-wider">{lang === "VN" ? "1. Chọn loại điều trị" : "1. Select Treatment"}</label>
                  <select 
                    id="treatment-selector"
                    value={selectedTreatment} 
                    onChange={(e) => handleTreatmentChange(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 focus:border-teal-brand focus:bg-white focus:outline-none rounded-xl py-3 px-4 text-sm cursor-pointer"
                  >
                    <option value="veneers">{lang === "VN" ? "Mặt dán sứ Veneer (Emax Zico)" : "Porcelain Veneers (Emax Zico)"}</option>
                    <option value="implants">{lang === "VN" ? "Cấy ghép Implant đơn lẻ (Trụ Hiossen Mỹ + Phục hình Everes)" : "Single Dental Implant (HIOSSEN US + Everes Crown)"}</option>
                    <option value="all-on-4">{lang === "VN" ? "Phục hình toàn hàm (Thanh 3 Titan + 4 Implant Hiossen)" : "Full Arch Restoration (Titanium 3-Bar + 4 Implants)"}</option>
                    <option value="package">{lang === "VN" ? "Gói thẩm mỹ 10 răng sứ Emax Zico & tẩy trắng" : "10 Emax Zico Veneers & Whitening Package"}</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm font-bold text-[#0b1e2c] uppercase tracking-wider">
                    <span>{est.label}</span>
                    <span className="bg-teal-brand-light text-teal-brand py-1 px-3.5 rounded-full text-sm font-extrabold">{est.clampedQty}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <input 
                      type="range" 
                      min={est.min} 
                      max={est.max} 
                      value={est.clampedQty}
                      onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
                      className="w-full accent-teal-brand cursor-pointer h-1.5 bg-slate-100 rounded-lg appearance-none"
                    />
                  </div>
                </div>
              </div>

              {/* Outputs & Graph */}
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 space-y-6">
                <div className="space-y-4">
                  {/* Local price bar */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs sm:text-sm font-bold text-[#0b1e2c]">
                      <span>{lang === "VN" ? "Chi phí tại Úc/Mỹ (Trung bình)" : "Average Australian Private Practice"}</span>
                      <span className="text-slate-800">{formatCurrency(est.totalHome)}</span>
                    </div>
                    <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-slate-400 h-full rounded-full transition-all duration-500" style={{ width: "100%" }} />
                    </div>
                  </div>

                  {/* Clinic price bar */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs sm:text-sm font-bold text-[#0b1e2c]">
                      <span>{lang === "VN" ? "Chi phí tại DentalNTK Hà Nội" : "DentalNTK Clinic, Hanoi"}</span>
                      <span className="text-teal-brand font-extrabold">{formatCurrency(est.totalClinic)}</span>
                    </div>
                    <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-teal-brand h-full rounded-full transition-all duration-500" style={{ width: `${(est.totalClinic / est.totalHome) * 100}%` }} />
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-slate-100 p-4 rounded-xl text-center space-y-1 shadow-sm">
                  <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block">{lang === "VN" ? "Mức Tiết Kiệm Dự Kiến (Tạm Tính)" : "Estimated Net Saving"}</span>
                  <strong className="text-2xl font-serif font-black text-emerald-600 block">{formatCurrency(est.netSavings)}</strong>
                </div>

                <div className="text-center pt-2">
                  <a 
                    href={`#homepage-inquiry`}
                    className="inline-flex w-full items-center justify-center gap-2 bg-[#0b1e2c] hover:bg-teal-brand text-white px-6 py-3 font-semibold text-sm rounded-xl transition-all text-center"
                  >
                    <span>{lang === "VN" ? "Nhận Báo Giá Văn Bản Cho Dịch Vụ Này" : "Get Written Quote for This Treatment"}</span>
                  </a>
                </div>

                <p className="text-[10px] text-slate-400 font-light text-center leading-relaxed mt-2">
                  {lang === "VN"
                    ? "* Lưu ý: Con số trên là mức ước tính trung bình cho mục đích tham khảo. Chi phí thực tế sẽ được bác sĩ xác định dựa trên kết quả chụp phim X-quang răng và phác đồ điều trị cụ thể của bạn."
                    : "* Note: The calculation above is an average estimate for reference only. The actual cost will be determined by the specialist based on your dental X-ray and personalized treatment plan."}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 5: PRE-TRAVEL DIAGNOSTIC PROTOCOL
          ======================================================== */}
      <section className="pt-4 pb-16 md:pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Visual side */}
            <div className="relative h-[300px] sm:h-[450px] w-full rounded-2xl overflow-hidden shadow-lg border border-slate-100">
              <Image 
                src="/anhso1.jpg" 
                alt="Clinic diagnostics lounge" 
                fill 
                className="object-cover" 
                sizes="(max-w-7xl) 50vw, 100vw"
              />
            </div>

            {/* Text Copy */}
            <div className="space-y-6">
              <div className="space-y-2">
                
                <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#0b1e2c] font-serif font-extrabold leading-tight">
                  {lang === "VN" ? "Nhận phác đồ điều trị răng chi tiết trước khi đặt vé" : "Receive your treatment plan before booking flights."}
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                {lang === "VN"
                  ? "DentalNTK kết nối và phối hợp lập phác đồ tư vấn cho bệnh nhân từ Úc/Mỹ. Hội đồng bác sĩ chuyên khoa implant và thẩm mỹ sẽ đánh giá kỹ lưỡng kế hoạch điều trị trước khi bạn di chuyển."
                  : "DentalNTK coordinates personalized treatment planning for patients from Australia. Complex implant and full-mouth reconstruction cases are assessed by our specialist board before you commit to travel. You receive a documented case file — not an estimated price range."}
              </p>

              <div className="space-y-5 pt-4 border-t border-slate-100">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-teal-brand-light text-teal-brand rounded-full flex items-center justify-center font-bold text-sm shrink-0">01</div>
                  <div className="space-y-1">
                    <h3 className="text-sm sm:text-base font-bold text-[#0b1e2c]">{lang === "VN" ? "Sơ đồ chi tiết từng chiếc răng" : "Tooth-by-Tooth Clinical Scope"}</h3>
                    <p className="text-xs sm:text-sm text-slate-550 leading-relaxed font-normal">{lang === "VN" ? "Phác thảo rõ mục tiêu điều trị, số lượng răng veneer/implant và tùy chọn thẩm mỹ." : "A complete tooth chart detailing treatment goals, conditions, and cosmetic shade options."}</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-teal-brand-light text-teal-brand rounded-full flex items-center justify-center font-bold text-sm shrink-0">02</div>
                  <div className="space-y-1">
                    <h3 className="text-sm sm:text-base font-bold text-[#0b1e2c]">{lang === "VN" ? "Khảo sát và Đánh giá mật độ xương" : "Bone and Grafting Risk Check"}</h3>
                    <p className="text-xs sm:text-sm text-slate-550 leading-relaxed font-normal">{lang === "VN" ? "Khảo sát tình trạng xương hàm và đánh giá nguy cơ ghép xoang nâng xương." : "Bone height check and sinus proximity check — completed during consultation."}</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-teal-brand-light text-teal-brand rounded-full flex items-center justify-center font-bold text-sm shrink-0">03</div>
                  <div className="space-y-1">
                    <h3 className="text-sm sm:text-base font-bold text-[#0b1e2c]">{lang === "VN" ? "Cam kết báo giá trọn gói bằng văn bản" : "Itemised Financial Statement"}</h3>
                    <p className="text-xs sm:text-sm text-slate-550 leading-relaxed font-normal">{lang === "VN" ? "Văn bản báo giá minh bạch theo đúng loại tiền tệ của bạn, cam kết không phát sinh phụ phí." : "Written pricing per tooth, selected material brand, warranty terms, and travel itinerary."}</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 6: CLINICAL COMPARISON (vs. Turkey Teeth)
          ======================================================== */}
      <section className="py-16 md:py-20 bg-slate-200/70 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#0b1e2c] font-serif font-extrabold">
              {lang === "VN" ? "Nha khoa Thẩm mỹ Chuẩn y khoa vs Gói làm răng 'Turkey Teeth'" : "Vietnam Dental Treatment vs 'Turkey Teeth' Packages"}
            </h2>
            <p className="text-sm sm:text-base text-slate-655 font-normal leading-relaxed">
              {lang === "VN"
                ? "Làm răng là thủ thuật y tế can thiệp lâu dài, không phải chuyến du lịch trọn gói giá rẻ. Tìm hiểu sự khác biệt cốt lõi giữa quy trình chuẩn của DentalNTK và các dịch vụ giá rẻ phổ biến:"
                : "Dental tourism is a clinical procedure, not a package holiday. This comparison explains why DentalNTK's protocols differ structurally from the low-cost package clinics."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Card: Turkey Teeth practices */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/60 shadow-sm space-y-6">
              <div className="flex items-center gap-2 text-rose-600">
                <div className="w-2.5 h-2.5 bg-rose-600 rounded-full shrink-0" />
                <h3 className="font-serif text-base font-bold">{lang === "VN" ? "Gói làm răng giá rẻ 'Turkey Teeth'" : "Common Low-Cost Clinic Packages"}</h3>
              </div>
              
              <div className="space-y-4 text-sm font-normal">
                <div className="space-y-1">
                  <h4 className="font-bold text-[#0b1e2c] text-sm sm:text-base">{lang === "VN" ? "Mài cụt răng thành cọc nhọn" : "Aggressive Tooth Reduction to Pegs"}</h4>
                  <p className="text-slate-655 leading-relaxed">{lang === "VN" ? "Mài mòn 60-70% men răng thật thành cọc nhỏ để bọc mão chụp sứ, dễ gây viêm tủy răng vĩnh viễn." : "Healthy enamel is ground to 1–2mm stubs to fit crowns over veneers, causing nerve damage and root canal dependency."}</p>
                </div>

                <div className="space-y-1">
                  <h4 className="font-bold text-[#0b1e2c] text-sm sm:text-base">{lang === "VN" ? "Ép tiến độ điều trị trong 3-5 ngày" : "Rushed 3-to-5 Day Full-Set Turnaround"}</h4>
                  <p className="text-slate-655 leading-relaxed">{lang === "VN" ? "Không có thời gian cho mô nướu lành thương, dẫn đến hở kẽ răng, viêm lợi và rơi mặt dán sứ sớm." : "Inadequate time for gum healing, shade assessment, or trial smile reviews — leading to early ceramic failure."}</p>
                </div>

                <div className="space-y-1">
                  <h4 className="font-bold text-[#0b1e2c] text-sm sm:text-base">{lang === "VN" ? "Vật liệu sứ trôi nổi không nhãn mác" : "Undisclosed Generic Materials"}</h4>
                  <p className="text-slate-655 leading-relaxed">{lang === "VN" ? "Sử dụng phôi sứ gia công không có mã vạch (serial numbers) truy xuất nguồn gốc, gây cản trở khi điều trị tại nước sở tại." : "Unbranded ceramics used without batch numbers, making warranty claims and remedial work in Australia impossible."}</p>
                </div>
              </div>
            </div>

            {/* Right Card: DentalNTK Clinical Standards */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-teal-brand/30 shadow-md space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-teal-brand text-[#0b1e2c] text-xs font-bold py-1 px-4 uppercase tracking-widest rounded-bl-xl">Standard</div>
              <div className="flex items-center gap-2 text-teal-brand">
                <div className="w-2.5 h-2.5 bg-teal-brand rounded-full shrink-0" />
                <h3 className="font-serif text-base font-bold">{lang === "VN" ? "Tiêu chuẩn y khoa DentalNTK" : "DentalNTK Clinical Standards"}</h3>
              </div>

              <div className="space-y-4 text-sm font-normal">
                <div className="space-y-1">
                  <h4 className="font-bold text-[#0b1e2c] text-sm sm:text-base">{lang === "VN" ? "Bảo tồn men răng tối đa (prep-less)" : "Ultra-Conservative Enamel Prep"}</h4>
                  <p className="text-slate-655 leading-relaxed">{lang === "VN" ? "Mài nhẹ bề mặt men răng (dưới 0.3mm) hoặc không mài răng đối với mặt dán sứ cao cấp, bảo tồn tủy răng tối đa." : "Minimal prep (under 0.3mm enamel touch) or no-prep Emax veneers, preserving maximum natural structure."}</p>
                </div>

                <div className="space-y-1">
                  <h4 className="font-bold text-[#0b1e2c] text-sm sm:text-base">{lang === "VN" ? "Lộ trình lâm sàng 7-10 ngày" : "Paced 7–10 Day Clinical Workflow"}</h4>
                  <p className="text-slate-655 leading-relaxed">{lang === "VN" ? "Có thời gian lành thương mô nướu, lấy dấu hàm quét kỹ thuật số iTero, và thử răng lắp tạm điều chỉnh khớp cắn." : "Allows adequate gum healing, digital impressions, master ceramist shade reviews, and trial smile fittings."}</p>
                </div>

                <div className="space-y-1">
                  <h4 className="font-bold text-[#0b1e2c] text-sm sm:text-base">{lang === "VN" ? "100% phôi sứ và trụ implant chính hãng" : "Certified Global Brand Materials Only"}</h4>
                  <p className="text-slate-655 leading-relaxed">{lang === "VN" ? "Cung cấp thẻ bảo hành chính hãng, mã vạch (serial numbers) truy xuất nguồn gốc cho Emax Press, Straumann, Nobel." : "Official serial numbers, manufacturer batch certification stickers, and warranty registrations provided."}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================
          SECTION 7: DOCTORS BOARD PREVIEW (CAROUSEL 3 AT A TIME)
          ======================================================== */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold tracking-widest text-teal-brand uppercase block">
              {lang === "VN" ? "ĐỘI NGŨ BÁC SĨ CHUYÊN KHOA" : "OUR MEDICAL BOARD"}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#0b1e2c] font-serif font-extrabold">
              {lang === "VN" ? "Hội Đồng Bác Sĩ Chuyên Khoa Giàu Kinh Nghiệm" : "Meet Our Board-Certified Dental Experts"}
            </h2>
            <p className="text-sm sm:text-base text-slate-500 font-normal leading-relaxed">
              {lang === "VN"
                ? "Đội ngũ bác sĩ được đào tạo chính quy chuyên khoa Răng Hàm Mặt Đại học Y Hà Nội và các trường đại học hàng đầu thế giới."
                : "Our board leads hold credentials from elite Western institutions and bring over 15+ years of clinical implantology and veneer restoration expertise."}
            </p>
            <div className="pt-2">
              <Link 
                href="/dentists" 
                className="inline-flex items-center gap-1.5 bg-[#0b1e2c] hover:bg-teal-brand text-white px-6 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer shadow-sm"
              >
                <span>{lang === "VN" ? "Xem tất cả Bác sĩ" : "Meet All Doctors"}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Cards Carousel Container with Flank Navigation Buttons */}
          <div className="relative px-6 sm:px-12 md:px-14">
            
            {/* Left Flank Navigation Button */}
            <button
              onClick={() => setHomeDocSlide((prev) => (prev <= 0 ? 2 : prev - 1))}
              aria-label="Previous Doctors"
              className="absolute left-0 sm:left-1 top-1/2 -translate-y-1/2 z-20 w-9 h-9 flex items-center justify-center bg-white hover:bg-[#0b1e2c] text-[#0b1e2c] hover:text-white rounded-full border border-slate-200 shadow-md transition-all cursor-pointer hover:scale-105"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 transition-all duration-500">
              {[
                {
                  id: "d1",
                  slug: "dr-nguyen-thi-thuy-hang",
                  nameVN: "Dr. Nguyễn Thị Thúy Hằng",
                  nameEN: "Dr. Nguyen Thi Thuy Hang",
                  roleVN: "Trưởng khoa Thẩm mỹ Nụ cười & Phẫu thuật Trong miệng",
                  roleEN: "Cosmetic Smile Lead",
                  descVN: "Tốt nghiệp ĐH Y Hà Nội 2018. Chuyên môn cao về Implant, nhổ răng khôn, điều trị tụt lợi, cười lộ nướu, các ca viêm quanh răng nặng.",
                  descEN: "Extensive expertise in Implants, wisdom tooth extraction, gum recession, gummy smile correction & severe periodontitis.",
                  image: "/dr_emily.png"
                },
                {
                  id: "d2",
                  slug: "dr-nguyen-huy-hoang",
                  nameVN: "Dr. Nguyễn Huy Hoàng",
                  nameEN: "Dr. Nguyen Huy Hoang",
                  roleVN: "Trưởng khoa Cấy ghép Implant & Chỉnh nha",
                  roleEN: "Head of Implantology",
                  descVN: "Đào tạo Chỉnh nha tại Đại học Cologne - Đức. Chuyên môn cao về Chỉnh nha, Implant, Răng thẩm mỹ & Khớp thái dương hàm.",
                  descEN: "Orthodontic training at Cologne University – Germany. Specialist in Orthodontics, Implants, Aesthetic Dentistry & TMJ Disorders.",
                  image: "/dr_phong.png"
                },
                {
                  id: "d3",
                  slug: "dr-pham-xuan-dang",
                  nameVN: "Dr. Phạm Xuân Đáng",
                  nameEN: "Dr. Pham Xuan Dang",
                  roleVN: "Chuyên gia Chỉnh nha & Nội nha",
                  roleEN: "Lead Implant Surgeon",
                  descVN: "Đào tạo Chỉnh nha tại Đại học Y Hà Nội. Chuyên môn cao về chỉnh nha người lớn, chỉnh nha sớm trẻ em, nội nha vi phẫu & tiểu phẫu.",
                  descEN: "Orthodontic training at Hanoi Medical University. Specialist in adult orthodontics, early pediatric orthodontics & endodontics.",
                  image: "/dr_hung.png"
                },
                {
                  id: "d4",
                  slug: "dr-le-thi-nhat-minh",
                  nameVN: "Dr. Lê Thị Nhật Minh",
                  nameEN: "Dr. Le Thi Nhat Minh",
                  roleVN: "Chuyên gia Chỉnh nha & Niềng răng Thẩm mỹ",
                  roleEN: "Orthodontic Specialist",
                  descVN: "Bác sĩ được đào tạo chuyên sâu về chỉnh nha tại Đại học Y Hà Nội. Chuyên môn cao về chỉnh nha mắc cài, khay trong suốt Invisalign & niềng răng trẻ em.",
                  descEN: "Specialized postgraduate orthodontic training at Hanoi Medical University. Expert in aesthetic braces, Invisalign aligners & pediatric orthodontics.",
                  image: "/dr_minh.png"
                },
                {
                  id: "d5",
                  slug: "dr-nguyen-thu-hoai",
                  nameVN: "Dr. Nguyễn Thu Hoài",
                  nameEN: "Dr. Nguyen Thu Hoai",
                  roleVN: "Chuyên gia Chỉnh nha Trẻ em & Invisalign",
                  roleEN: "Pediatric Orthodontic Specialist",
                  descVN: "Tốt nghiệp Đại học Y Hà Nội năm 2020. Bác sĩ chuyên sâu về chỉnh nha trẻ em, chỉnh nha người lớn, hệ thống Invisalign, nha khoa tổng quát & hàn thẩm mỹ.",
                  descEN: "Graduated Hanoi Medical University 2020. Specialist in pediatric orthodontics, adult Invisalign aligners, general care & aesthetic restorations.",
                  image: "/dr_hoai.png"
                }
              ]
                .slice(homeDocSlide, homeDocSlide + 3)
                .map((doc) => (
                  <Link key={doc.id} href={`/dentists/${doc.slug}`} className="bg-white rounded-xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group cursor-pointer">
                    <div>
                      <div className="relative h-[280px] w-full bg-slate-100 overflow-hidden">
                        <Image src={doc.image} alt={lang === "VN" ? doc.nameVN : doc.nameEN} fill className="object-cover object-top group-hover:scale-105 transition-transform duration-500" sizes="(max-w-7xl) 33vw, 100vw" />
                      </div>
                      <div className="p-5 space-y-2">
                        <span className="text-xs font-bold text-teal-brand uppercase tracking-wider block">{lang === "VN" ? doc.roleVN : doc.roleEN}</span>
                        <h3 className="font-serif text-base font-bold text-[#0b1e2c] group-hover:text-teal-brand transition-colors">{lang === "VN" ? doc.nameVN : doc.nameEN}</h3>
                        <p className="text-sm text-slate-600 leading-relaxed font-normal line-clamp-3">{lang === "VN" ? doc.descVN : doc.descEN}</p>
                      </div>
                    </div>
                    <div className="px-5 pb-5 pt-0 flex items-center justify-between text-xs font-bold text-teal-brand group-hover:translate-x-1 transition-transform">
                      <span>{lang === "VN" ? "Xem hồ sơ bác sĩ" : "View Profile"}</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </Link>
                ))}
            </div>

            {/* Right Flank Navigation Button */}
            <button
              onClick={() => setHomeDocSlide((prev) => (prev >= 2 ? 0 : prev + 1))}
              aria-label="Next Doctors"
              className="absolute right-0 sm:right-1 top-1/2 -translate-y-1/2 z-20 w-9 h-9 flex items-center justify-center bg-[#0b1e2c] hover:bg-teal-brand text-white hover:text-[#0b1e2c] rounded-full shadow-md transition-all cursor-pointer hover:scale-105"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

          </div>

        </div>
      </section>

      {/* ========================================================
          SECTION 8: CLINICAL CERTIFICATIONS & ACCREDITATIONS
          ======================================================== */}
      <section className="py-12 bg-slate-50 border-t border-b border-slate-200/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            
            <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#0b1e2c]">
              {lang === "VN" ? "Minh bạch chứng chỉ y khoa quốc tế" : "Verified International Accreditations"}
            </h2>
            <p className="text-xs sm:text-sm text-slate-550 font-normal leading-relaxed">
              {lang === "VN" 
                ? "Mọi bằng cấp chuyên môn, chứng chỉ đào tạo chuyên sâu và thẻ thành viên hiệp hội của đội ngũ bác sĩ đều được công khai để bệnh nhân dễ dàng kiểm chứng:"
                : "All specialist training degrees and international board memberships are fully documented and verified for your peace of mind:"}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Cert 1: Loma Linda */}
            <div 
              onClick={() => setSelectedCert("/cert_loma_linda.png")}
              className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm hover:shadow-md transition-all cursor-pointer group text-center space-y-4"
            >
              <div className="relative w-full h-56 bg-slate-100 rounded-xl overflow-hidden border border-slate-100 flex items-center justify-center p-2">
                <Image 
                  src="/cert_loma_linda.png" 
                  alt="Loma Linda University Training Certificate" 
                  fill 
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-[#0b1e2c] text-sm group-hover:text-teal-brand transition-colors">
                  {lang === "VN" ? "Chứng chỉ cấy ghép Implant - Đại học Loma Linda (Hoa Kỳ)" : "Implantology Certificate - Loma Linda University (USA)"}
                </h3>
                <p className="text-xs text-slate-500 font-light">
                  {lang === "VN" 
                    ? "Chứng nhận hoàn thành chương trình đào tạo cấy ghép Implant nâng cao của Giám đốc chuyên môn." 
                    : "Official completion of advanced clinical implantology training curriculum by our clinical director."}
                </p>
              </div>
            </div>

            {/* Cert 2: ITI Member */}
            <div 
              onClick={() => setSelectedCert("/cert_iti.png")}
              className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm hover:shadow-md transition-all cursor-pointer group text-center space-y-4"
            >
              <div className="relative w-full h-56 bg-slate-100 rounded-xl overflow-hidden border border-slate-100 flex items-center justify-center p-2">
                <Image 
                  src="/cert_iti.png" 
                  alt="ITI Member Certificate" 
                  fill 
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-[#0b1e2c] text-sm group-hover:text-teal-brand transition-colors">
                  {lang === "VN" ? "Chứng nhận Thành viên Hiệp hội Implant Quốc tế (ITI)" : "ITI (International Team for Implantology) Active Member"}
                </h3>
                <p className="text-xs text-slate-500 font-light">
                  {lang === "VN"
                    ? "Chứng nhận thành viên hoạt động chính thức của tổ chức Implant học hàng đầu thế giới."
                    : "Official active membership credential from the world's most prestigious implantology board."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 9: REAL AUSTRALIAN PATIENT CASES
          ======================================================== */}
      <section className="py-16 md:py-20 bg-slate-200/50 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#0b1e2c] font-serif font-extrabold">
              {lang === "VN" ? "Hồ sơ ca lâm sàng thực tế của bệnh nhân Úc" : "Real Australian Patient Cases — Details & Savings"}
            </h2>
            <p className="text-sm sm:text-base text-slate-500 font-light leading-relaxed">
              {lang === "VN"
                ? "Dưới đây là một số hồ sơ lâm sàng được lưu trữ thực tế, bao gồm thời gian điều trị, bác sĩ lâm sàng và mức giá quy đổi chi tiết:"
                : "The following cases represent documented Australian patient treatments at DentalNTK Clinic, including clinical parameters and itemised final cost."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Case 1 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/50 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center text-xs font-bold">
                  <span className="text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-wider">{lang === "VN" ? "Đã xác thực" : "Verified Case"}</span>
                  <span className="text-slate-500 font-mono">ID: Sarah T.</span>
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-serif text-base font-bold text-[#0b1e2c]">{lang === "VN" ? "Bệnh nhân Sydney • Mặt dán sứ Veneer" : "Sydney Patient · Emax Veneers"}</h3>
                  <p className="text-xs sm:text-sm text-slate-555 leading-relaxed font-normal">{lang === "VN" ? "Tình trạng: Răng xỉn màu trung bình, răng xô lệch nhẹ cung thẩm mỹ. Điều trị thẩm mỹ không phẫu thuật." : "Diagnosis: Moderate discolouration, minor crowding in the aesthetic zone. Non-surgical cosmetic case."}</p>
                </div>
                <ul className="divide-y divide-slate-100 text-xs sm:text-sm space-y-1.5 pt-2">
                  <li className="flex justify-between py-1.5"><span className="text-slate-500">{lang === "VN" ? "Chỉ định" : "Treatment"}</span><strong className="text-slate-800">16 Emax Zico Veneers</strong></li>
                  <li className="flex justify-between py-1.5"><span className="text-slate-550">{lang === "VN" ? "Thời gian" : "Duration"}</span><strong className="text-slate-800">8 Days (2 Visits)</strong></li>
                  <li className="flex justify-between py-1.5"><span className="text-slate-550">{lang === "VN" ? "Bác sĩ lâm sàng" : "Clinical Lead"}</span><strong className="text-slate-800">Dr. Nguyen Thi Thuy Hang</strong></li>
                  <li className="flex justify-between py-1.5"><span className="text-slate-550">{lang === "VN" ? "Tổng chi phí" : "Total Cost"}</span><strong className="text-teal-brand font-bold">{lang === "VN" ? "192.000.000đ" : "$10,400 AUD"}</strong></li>
                  <li className="flex justify-between py-1.5"><span className="text-slate-555">{lang === "VN" ? "Giá tương đương tại Úc" : "Australian Equivalent"}</span><strong className="text-rose-600 line-through font-normal">{lang === "VN" ? "545.000.000đ" : "~$29,600 AUD"}</strong></li>
                </ul>
              </div>
              <Link href="/contact" className="text-center w-full block py-2.5 bg-slate-50 border border-slate-200/60 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-100 transition-colors">
                {lang === "VN" ? "Yêu cầu phác đồ tương tự" : "Request Similar Case Assessment"}
              </Link>
            </div>

            {/* Case 2 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/50 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center text-xs font-bold">
                  <span className="text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-wider">{lang === "VN" ? "Đã xác thực" : "Verified Case"}</span>
                  <span className="text-slate-500 font-mono">ID: David M.</span>
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-serif text-base font-bold text-[#0b1e2c]">{lang === "VN" ? "Bệnh nhân Melbourne • Cấy Implant All-on-4" : "Melbourne Patient · All-on-4"}</h3>
                  <p className="text-xs sm:text-sm text-slate-555 leading-relaxed font-normal">{lang === "VN" ? "Tình trạng: Cầu răng hàm trên cũ hỏng hóc nặng, tiêu xương ổ răng phức tạp. Cần phẫu thuật All-on-4." : "Diagnosis: Failing upper bridges, periodontal bone deterioration. Required full-arch fixed reconstruction."}</p>
                </div>
                <ul className="divide-y divide-slate-100 text-xs sm:text-sm space-y-1.5 pt-2">
                  <li className="flex justify-between py-1.5"><span className="text-slate-500">{lang === "VN" ? "Chỉ định" : "Treatment"}</span><strong className="text-slate-800">Upper All-on-4 Nobel Biocare</strong></li>
                  <li className="flex justify-between py-1.5"><span className="text-slate-550">{lang === "VN" ? "Thời gian" : "Duration"}</span><strong className="text-slate-800">10 Days (Phase 1 Placement)</strong></li>
                  <li className="flex justify-between py-1.5"><span className="text-slate-550">{lang === "VN" ? "Bác sĩ lâm sàng" : "Clinical Lead"}</span><strong className="text-slate-800">Dr. Nguyen Huy Hoang</strong></li>
                  <li className="flex justify-between py-1.5"><span className="text-slate-550">{lang === "VN" ? "Tổng chi phí" : "Total Cost"}</span><strong className="text-teal-brand font-bold">{lang === "VN" ? "160.000.000đ" : "$8,675 AUD"}</strong></li>
                  <li className="flex justify-between py-1.5"><span className="text-slate-555">{lang === "VN" ? "Giá tương đương tại Úc" : "Australian Equivalent"}</span><strong className="text-rose-600 line-through font-normal">{lang === "VN" ? "645.000.000đ" : "~$35,000 AUD"}</strong></li>
                </ul>
              </div>
              <Link href="/contact" className="text-center w-full block py-2.5 bg-slate-50 border border-slate-200/60 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-100 transition-colors">
                {lang === "VN" ? "Yêu cầu phác đồ tương tự" : "Request Similar Case Assessment"}
              </Link>
            </div>

            {/* Case 3 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/50 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center text-xs font-bold">
                  <span className="text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-wider">{lang === "VN" ? "Đã xác thực" : "Verified Case"}</span>
                  <span className="text-slate-500 font-mono">ID: Helen R.</span>
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-serif text-base font-bold text-[#0b1e2c]">{lang === "VN" ? "Bệnh nhân Brisbane • Implant Đơn Lẻ" : "Brisbane Patient · Single Implant"}</h3>
                  <p className="text-xs sm:text-sm text-slate-555 leading-relaxed font-normal">{lang === "VN" ? "Tình trạng: Mất răng cối lớn hàm dưới, nướu co lại nhẹ. Xương hàm đủ điều kiện đặt trụ thẳng không ghép." : "Diagnosis: Missing single lower molar following extraction. Bone height sufficient without grafting."}</p>
                </div>
                <ul className="divide-y divide-slate-100 text-xs sm:text-sm space-y-1.5 pt-2">
                  <li className="flex justify-between py-1.5"><span className="text-slate-500">{lang === "VN" ? "Chỉ định" : "Treatment"}</span><strong className="text-slate-800">Straumann® SLActive + Crown</strong></li>
                  <li className="flex justify-between py-1.5"><span className="text-slate-550">{lang === "VN" ? "Thời gian" : "Duration"}</span><strong className="text-slate-800">5 Days</strong></li>
                  <li className="flex justify-between py-1.5"><span className="text-slate-550">{lang === "VN" ? "Bác sĩ lâm sàng" : "Clinical Lead"}</span><strong className="text-slate-800">Dr. Pham Xuan Dang</strong></li>
                  <li className="flex justify-between py-1.5"><span className="text-slate-550">{lang === "VN" ? "Tổng chi phí" : "Total Cost"}</span><strong className="text-teal-brand font-bold">{lang === "VN" ? "75.600.000đ" : "$4,100 AUD"}</strong></li>
                  <li className="flex justify-between py-1.5"><span className="text-slate-555">{lang === "VN" ? "Giá tương đương tại Úc" : "Australian Equivalent"}</span><strong className="text-rose-600 line-through font-normal">{lang === "VN" ? "129.000.000đ" : "~$7,000 AUD"}</strong></li>
                </ul>
              </div>
              <Link href="/contact" className="text-center w-full block py-2.5 bg-slate-50 border border-slate-200/60 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-100 transition-colors">
                {lang === "VN" ? "Yêu cầu phác đồ tương tự" : "Request Similar Case Assessment"}
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================
          SECTION 10: COST COMPARISON & FINANCIAL TRANSPARENCY
          ======================================================== */}
      <section className="py-16 md:py-20 bg-slate-200/70 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side text */}
            <div className="lg:col-span-5 space-y-6">
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-extrabold text-[#0b1e2c]">
                {t.compTitle}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                {t.compDesc}
              </p>
              <div className="bg-white border border-slate-100 p-5 rounded-2xl space-y-3 shadow-sm">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-teal-brand shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-700 font-normal">{t.compBullet1}</p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-teal-brand shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-700 font-normal">{t.compBullet2}</p>
                </div>
              </div>
            </div>
            
            {/* Right side table */}
            <div className="lg:col-span-7">
              <div className="border border-slate-100 rounded-2xl overflow-hidden shadow-premium bg-white">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-[#0b1e2c] text-white font-serif uppercase tracking-wider text-[11px] sm:text-xs">
                      <th className="p-4 sm:p-5 font-bold text-slate-200">{t.compTableHead1}</th>
                      <th className="p-4 sm:p-5 text-center font-bold text-slate-200">{t.compTableHead2}</th>
                      <th className="p-4 sm:p-5 text-center font-bold text-slate-200">{t.compTableHead3}</th>
                      <th className="p-4 sm:p-5 text-center font-bold text-slate-200">{t.compTableHead4}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    <tr className="hover:bg-slate-50/50 transition-colors">
                      <td className="p-4 sm:p-5 font-bold text-slate-800 text-xs sm:text-sm">
                        {t.compT1Name} 
                        <span className="text-[11px] font-semibold text-slate-500 block mt-0.5">{t.compT1Sub}</span>
                      </td>
                      <td className="p-4 sm:p-5 text-center font-semibold text-slate-600 text-xs sm:text-sm">{t.compT1Aus}</td>
                      <td className="p-4 sm:p-5 text-center font-extrabold text-teal-brand text-xs sm:text-sm">{t.compT1Rola}</td>
                      <td className="p-4 sm:p-5 text-center font-extrabold text-[#0b1e2c] text-xs sm:text-sm">{t.compT1Save}</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 transition-colors">
                      <td className="p-4 sm:p-5 font-bold text-slate-800 text-xs sm:text-sm">
                        {t.compT2Name} 
                        <span className="text-[11px] font-semibold text-slate-500 block mt-0.5">{t.compT2Sub}</span>
                      </td>
                      <td className="p-4 sm:p-5 text-center font-semibold text-slate-600 text-xs sm:text-sm">{t.compT2Aus}</td>
                      <td className="p-4 sm:p-5 text-center font-extrabold text-teal-brand text-xs sm:text-sm">{t.compT2Rola}</td>
                      <td className="p-4 sm:p-5 text-center font-extrabold text-[#0b1e2c] text-xs sm:text-sm">{t.compT2Save}</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 transition-colors">
                      <td className="p-4 sm:p-5 font-bold text-slate-800 text-xs sm:text-sm">
                        {t.compT3Name} 
                        <span className="text-[11px] font-semibold text-slate-500 block mt-0.5">{t.compT3Sub}</span>
                      </td>
                      <td className="p-4 sm:p-5 text-center font-semibold text-slate-600 text-xs sm:text-sm">{t.compT3Aus}</td>
                      <td className="p-4 sm:p-5 text-center font-extrabold text-teal-brand text-xs sm:text-sm">{t.compT3Rola}</td>
                      <td className="p-4 sm:p-5 text-center font-extrabold text-[#0b1e2c] text-xs sm:text-sm">{t.compT3Save}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-650 mt-3 text-center font-semibold italic">{t.compTableNote}</p>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 11: HOMEPAGE FORM INQUIRY
          ======================================================== */}
      <section id="homepage-inquiry" className="py-16 md:py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Column: Interactive Google Map only (Expanded) */}
            <div className="space-y-4 lg:sticky lg:top-24">
              {/* Interactive Google Map Widget */}
              <div className="space-y-4">
                {/* Tab Switcher */}
                {/* Map display box (Taller h-[550px] to match form card) */}
                <div className="w-full h-[550px] rounded-2xl overflow-hidden border border-slate-200 shadow-inner bg-slate-50 relative">
                  <iframe
                    src="https://maps.google.com/maps?q=Nha%20Khoa%20Tr%E1%BA%BB%2038%20Nguy%20Nhu%20Kon%20Tum,%20Nhan%20Chinh,%20Thanh%20Xuan,%20Hanoi&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Nha Khoa Trẻ - 38 Ngụy Như Kon Tum"
                  />
                </div>
              </div>

            </div>

            {/* Right Column: Form inquiry wrapper */}
            <div className="bg-[#0b1e2c] text-white rounded-3xl p-6 sm:p-12 shadow-2xl relative overflow-hidden w-full">
              <div className="absolute top-0 right-0 w-96 h-96 bg-teal-brand/5 rounded-full blur-3xl" />
              
              {formSubmitted ? (
                <div className="text-center py-10 space-y-6 max-w-md mx-auto relative z-10">
                  <div className="w-16 h-16 bg-teal-brand/20 text-teal-brand-light rounded-full flex items-center justify-center mx-auto shadow-sm border border-teal-brand-light/30">
                    <Check className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl font-bold">{t.formSuccessTitle}</h3>
                    <p className="text-xs text-slate-300 font-light leading-relaxed">
                      {t.formSuccessDesc.replace("{name}", formData.name).replace("{email}", formData.email)}
                    </p>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-4 rounded-xl text-left text-xs text-slate-300 space-y-2">
                    <p className="font-bold text-white">{t.formSuccessNoteTitle}</p>
                    <p>{t.formSuccessNote1}</p>
                    <p>{t.formSuccessNote2}</p>
                  </div>
                  <button onClick={() => setFormSubmitted(false)} className="text-xs text-teal-brand hover:text-teal-brand-hover font-bold underline">
                    {t.formSuccessAnother}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6 relative z-10">
                  <div className="text-center max-w-xl mx-auto space-y-2">
                    
                    <h2 className="text-2xl sm:text-3xl font-serif font-extrabold">{t.formTitle}</h2>
                    <p className="text-xs text-slate-300 font-light">{t.formDesc}</p>
                  </div>
   
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="home-name" className="text-xs font-bold text-slate-300 uppercase tracking-wider">{t.formLabelName}</label>
                      <input 
                        type="text" 
                        id="home-name" 
                        name="name" 
                        required 
                        value={formData.name} 
                        onChange={handleInputChange} 
                        placeholder={t.formPlaceholderName}
                        className="w-full bg-white/5 border border-white/10 focus:border-teal-brand focus:bg-white/10 focus:outline-none rounded-xl py-3 px-4 text-sm" 
                      />
                    </div>
   
                    <div className="space-y-1.5">
                      <label htmlFor="home-email" className="text-xs font-bold text-slate-300 uppercase tracking-wider">{t.formLabelEmail}</label>
                      <input 
                        type="email" 
                        id="home-email" 
                        name="email" 
                        required 
                        value={formData.email} 
                        onChange={handleInputChange} 
                        placeholder={t.formPlaceholderEmail}
                        className="w-full bg-white/5 border border-white/10 focus:border-teal-brand focus:bg-white/10 focus:outline-none rounded-xl py-3 px-4 text-sm" 
                      />
                    </div>
   
                    <div className="space-y-1.5">
                      <label htmlFor="home-phone" className="text-xs font-bold text-slate-300 uppercase tracking-wider">{lang === "VN" ? "Số điện thoại WhatsApp" : "WhatsApp Phone Number"}</label>
                      <input 
                        type="text" 
                        id="home-phone" 
                        name="phone" 
                        required 
                        value={formData.phone} 
                        onChange={handleInputChange} 
                        placeholder="+84 963 333 844"
                        className="w-full bg-white/5 border border-white/10 focus:border-teal-brand focus:bg-white/10 focus:outline-none rounded-xl py-3 px-4 text-sm" 
                      />
                    </div>
   
                    <div className="space-y-1.5">
                      <label htmlFor="home-need" className="text-xs font-bold text-slate-300 uppercase tracking-wider">{t.formLabelNeed}</label>
                      <select 
                        id="home-need" 
                        name="need" 
                        required 
                        value={formData.need} 
                        onChange={handleInputChange}
                        className="w-full bg-white/5 border border-white/10 focus:border-teal-brand focus:bg-white/10 focus:outline-none rounded-xl py-3 px-4 text-sm cursor-pointer"
                      >
                        <option value="" className="bg-[#0b1e2c]">{lang === "VN" ? "-- Chọn nhu cầu --" : "-- Select Need --"}</option>
                        <option value="veneers" className="bg-[#0b1e2c]">{lang === "VN" ? "Mặt dán sứ Veneers" : "Porcelain Veneers"}</option>
                        <option value="implants" className="bg-[#0b1e2c]">{lang === "VN" ? "Cấy ghép răng Implant" : "Dental Implants"}</option>
                        <option value="allon4" className="bg-[#0b1e2c]">{lang === "VN" ? "Hàm All-on-4" : "All-on-4 Arch"}</option>
                        <option value="allon6" className="bg-[#0b1e2c]">{lang === "VN" ? "Hàm All-on-6" : "All-on-6 Arch"}</option>
                        <option value="crowns" className="bg-[#0b1e2c]">{lang === "VN" ? "Mão răng sứ (Crowns)" : "Dental Crowns"}</option>
                        <option value="bridges" className="bg-[#0b1e2c]">{lang === "VN" ? "Cầu răng sứ (Bridges)" : "Dental Bridges"}</option>
                        <option value="smile-makeover" className="bg-[#0b1e2c]">{lang === "VN" ? "Thiết kế nụ cười (Smile Makeover)" : "Smile Makeover"}</option>
                        <option value="full-reconstruction" className="bg-[#0b1e2c]">{lang === "VN" ? "Phục hồi toàn hàm" : "Full Mouth Reconstruction"}</option>
                        <option value="whitening" className="bg-[#0b1e2c]">{lang === "VN" ? "Tẩy trắng răng" : "Teeth Whitening"}</option>
                        <option value="root-canal" className="bg-[#0b1e2c]">{lang === "VN" ? "Điều trị tủy (Root Canal)" : "Root Canal Treatment"}</option>
                        <option value="invisalign" className="bg-[#0b1e2c]">{lang === "VN" ? "Niềng răng Invisalign" : "Invisalign Aligners"}</option>
                        <option value="dentures" className="bg-[#0b1e2c]">{lang === "VN" ? "Hàm giả tháo lắp" : "Removable Dentures"}</option>
                      </select>
                    </div>
                  </div>

   
                  <div className="space-y-1.5">
                    <label htmlFor="home-message" className="text-xs font-bold text-slate-300 uppercase tracking-wider">{t.formLabelDetails}</label>
                    <textarea 
                      id="home-message" 
                      name="message" 
                      value={formData.message} 
                      onChange={handleInputChange} 
                      rows={3} 
                      placeholder={t.formPlaceholderDetails} 
                      className="w-full bg-white/5 border border-white/10 focus:border-teal-brand focus:bg-white/10 focus:outline-none rounded-xl py-3 px-4 text-sm resize-none" 
                    />
                  </div>
   
                  <button type="submit" className="w-full bg-teal-brand hover:bg-teal-brand-hover text-[#0b1e2c] py-4 px-6 rounded-xl text-base font-bold shadow-md transform hover:-translate-y-0.5 active:translate-y-0 text-center cursor-pointer">
                    {t.formCta}
                  </button>
   
                  <p className="text-xs text-center text-slate-400 max-w-sm mx-auto leading-relaxed">{t.formBottomNote}</p>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 12: FREQUENTLY ASKED QUESTIONS (FAQ)
          ======================================================== */}
      <section className="py-16 md:py-20 bg-slate-200/50 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#0b1e2c] font-serif font-extrabold">
              {lang === "VN" ? "Frequently asked questions" : "Frequently asked questions"}
            </h2>
            <p className="text-sm sm:text-base text-slate-500 font-normal">
              {lang === "VN"
                ? "Tất cả những gì bạn cần biết trước khi bắt đầu hành trình kiến tạo nụ cười tại DentalNTK."
                : "Everything you need to know about planning, warranties, and travel arrangements with DentalNTK."}
            </p>
          </div>

          <div className="space-y-4 w-full">
            {faqItems.map((faq, index) => (
              <div key={index} className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm transition-all duration-200">
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full flex justify-between items-center p-5 text-left font-bold text-slate-800 hover:text-teal-brand transition-colors text-sm sm:text-base cursor-pointer"
                >
                  <span>{faq.q}</span>
                  {activeFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-teal-brand shrink-0 ml-2" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0 ml-2" />
                  )}
                </button>
                {activeFaq === index && (
                  <div className="px-5 pb-5 pt-1 border-t border-slate-100 text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialist Credentials Modal Overlay */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 transition-all" 
          onClick={() => setSelectedCert(null)}
        >
          <div 
            className="relative max-w-2xl w-full bg-white rounded-3xl p-6 shadow-2xl overflow-hidden border border-slate-100 flex flex-col items-center justify-center" 
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 p-2 rounded-full transition-colors cursor-pointer"
              title="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="relative w-full h-[400px] sm:h-[480px] mt-4">
              <Image 
                src={selectedCert} 
                alt="Dental Specialist Credentials Certificate" 
                fill 
                className="object-contain" 
                sizes="(max-w-2xl) 100vw, 80vw"
                priority
              />
            </div>
            <p className="text-center text-xs text-slate-500 font-light mt-4">
              {lang === "VN" ? "✓ Bằng cấp y khoa chính hãng được phê duyệt từ trường đại học đối tác." : "✓ Verified and certified clinical credentials from partner medical universities."}
            </p>
          </div>
        </div>
      )}

      {/* Mobile Sticky Floating CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-100 px-4 py-3 md:hidden shadow-[0_-4px_12px_rgba(0,0,0,0.05)] flex gap-3">
        <a 
          href="tel:+84963333844" 
          className="flex-1 bg-slate-100 hover:bg-slate-200 text-[#0b1e2c] py-3 rounded-xl text-xs font-bold text-center flex items-center justify-center gap-1.5 transition-all active:scale-95 cursor-pointer"
        >
          <Phone className="w-4 h-4 text-teal-brand" />
          <span>{lang === "VN" ? "Gọi Hotline" : "Call Hotline"}</span>
        </a>
        <a 
          href="#homepage-inquiry" 
          className="flex-1 bg-teal-brand hover:bg-teal-brand-hover text-[#0b1e2c] py-3 rounded-xl text-xs font-bold text-center flex items-center justify-center gap-1.5 transition-all active:scale-95 cursor-pointer shadow-md shadow-teal-brand/10"
        >
          <Calendar className="w-4 h-4" />
          <span>{lang === "VN" ? "Đăng ký khám" : "Book Consultant"}</span>
        </a>
      </div>

    </div>
  );
}
