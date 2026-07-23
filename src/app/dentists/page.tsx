"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";
import { Award, Sparkles, X, ChevronRight, ChevronLeft } from "lucide-react";

export default function DentistsPage() {
  const { lang, t } = useLanguage();
  const [activeCertImage, setActiveCertImage] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const doctors = [
    {
      id: "d1",
      slug: "dr-nguyen-thi-thuy-hang",
      nameVN: "Dr. Nguyễn Thị Thúy Hằng",
      nameEN: "Dr. Nguyen Thi Thuy Hang",
      roleVN: "Trưởng khoa Thẩm mỹ Nụ cười & Phẫu thuật Trong miệng",
      roleEN: "Cosmetic Smile Lead & Oral Surgery Specialist",
      descVN: "Tốt nghiệp ĐH Y Hà Nội 2018. Chuyên môn cao về Implant, nhổ răng khôn, điều trị tụt lợi, cười lộ nướu, các ca viêm quanh răng nặng. Ứng dụng kỹ thuật số từ 2020.",
      descEN: "Extensive expertise in Implants, wisdom teeth, gum recession, gummy smile & severe periodontitis. Digital dentistry pioneer since 2020.",
      image: "/dr_emily.png"
    },
    {
      id: "d2",
      slug: "dr-nguyen-huy-hoang",
      nameVN: "Dr. Nguyễn Huy Hoàng",
      nameEN: "Dr. Nguyen Huy Hoang",
      roleVN: "Trưởng khoa Cấy ghép Implant & Chỉnh nha",
      roleEN: "Head of Implantology & Orthodontics",
      descVN: "Đào tạo Chỉnh nha tại Đại học Cologne - Đức. Chuyên môn cao về Chỉnh nha, Implant, Răng thẩm mỹ & Khớp thái dương hàm. Phẫu thuật nụ cười với Operation Smile.",
      descEN: "Orthodontics training at Cologne University – Germany. Specialist in Orthodontics, Implants & TMJ Disorders. Operation Smile volunteer surgeon.",
      image: "/dr_phong.png"
    },
    {
      id: "d3",
      slug: "dr-pham-xuan-dang",
      nameVN: "Dr. Phạm Xuân Đáng",
      nameEN: "Dr. Pham Xuan Dang",
      roleVN: "Chuyên gia Chỉnh nha & Nội nha",
      roleEN: "Orthodontic & Endodontic Specialist",
      descVN: "Đào tạo Chỉnh nha tại Đại học Y Hà Nội. Chuyên môn cao về chỉnh nha người lớn, chỉnh nha sớm trẻ em, điều trị nội nha vi phẫu & tiểu phẫu.",
      descEN: "Orthodontic post-graduate training at Hanoi Medical University. Expert in adult orthodontics, early pediatric alignment & microscopic endodontics.",
      image: "/dr_hung.png"
    },
    {
      id: "d4",
      slug: "dr-le-thi-nhat-minh",
      nameVN: "Dr. Lê Thị Nhật Minh",
      nameEN: "Dr. Le Thi Nhat Minh",
      roleVN: "Chuyên gia Chỉnh nha & Niềng răng Thẩm mỹ",
      roleEN: "Orthodontic & Aesthetic Braces Specialist",
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
      roleEN: "Pediatric Orthodontics & Invisalign Specialist",
      descVN: "Tốt nghiệp Đại học Y Hà Nội năm 2020. Bác sĩ chuyên sâu về chỉnh nha trẻ em, chỉnh nha người lớn, hệ thống Invisalign, nha khoa tổng quát & hàn thẩm mỹ.",
      descEN: "Graduated Hanoi Medical University 2020. Specialist in pediatric orthodontics, adult Invisalign aligners, general care & aesthetic restorations.",
      image: "/dr_hoai.png"
    }
  ];

  const maxStartIndex = Math.max(0, doctors.length - 3);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev >= maxStartIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev <= 0 ? maxStartIndex : prev - 1));
  };

  const visibleDoctors = doctors.slice(currentSlide, currentSlide + 3);

  return (
    <div className="py-12 space-y-16">
      
      {/* ========================================================
          CLINICAL DIRECTOR BOARD SECTION (CAROUSEL 3 AT A TIME)
          ======================================================== */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <span className="text-xs font-bold tracking-widest text-teal-brand uppercase block">
              {lang === "VN" ? "ĐỘI NGŨ BÁC SĨ CHUYÊN KHOA" : "OUR MEDICAL BOARD"}
            </span>
            <h1 className="text-3xl sm:text-4xl text-[#0b1e2c] font-serif font-extrabold">
              {t.docTitle}
            </h1>
            <div className="w-16 h-1 bg-teal-brand rounded mx-auto" />
            <p className="text-sm text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">
              {t.docDesc}
            </p>
          </div>

          {/* Cards Carousel Container with Flank Navigation Buttons */}
          <div className="relative px-6 sm:px-12 md:px-14">
            
            {/* Left Flank Navigation Button */}
            <button
              onClick={handlePrev}
              aria-label="Previous Doctors"
              className="absolute left-0 sm:left-1 top-1/2 -translate-y-1/2 z-20 w-9 h-9 flex items-center justify-center bg-white hover:bg-[#0b1e2c] text-[#0b1e2c] hover:text-white rounded-full border border-slate-200 shadow-md transition-all cursor-pointer hover:scale-105"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Cards Carousel (Shows exactly 3 Doctors) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 transition-all duration-500">
              {visibleDoctors.map((doc) => (
                <Link 
                  key={doc.id}
                  href={`/dentists/${doc.slug}`} 
                  className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-premium hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                >
                  <div>
                    <div className="relative h-[320px] w-full bg-slate-100 overflow-hidden">
                      <Image 
                        src={doc.image} 
                        alt={lang === "VN" ? doc.nameVN : doc.nameEN} 
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-w-7xl) 33vw, 100vw"
                      />
                    </div>
                    <div className="p-6 space-y-3">
                      <span className="text-[10px] font-bold text-teal-brand uppercase tracking-wider block">
                        {lang === "VN" ? doc.roleVN : doc.roleEN}
                      </span>
                      <h2 className="font-serif text-lg font-bold text-[#0b1e2c] group-hover:text-teal-brand transition-colors">
                        {lang === "VN" ? doc.nameVN : doc.nameEN}
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-light line-clamp-4">
                        {lang === "VN" ? doc.descVN : doc.descEN}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-slate-100 mt-2 flex items-center justify-between text-xs font-bold text-teal-brand group-hover:translate-x-1 transition-transform">
                    <span>{lang === "VN" ? "Xem hồ sơ chi tiết bác sĩ" : "View Doctor Profile"}</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </Link>
              ))}
            </div>

            {/* Right Flank Navigation Button */}
            <button
              onClick={handleNext}
              aria-label="Next Doctors"
              className="absolute right-0 sm:right-1 top-1/2 -translate-y-1/2 z-20 w-9 h-9 flex items-center justify-center bg-[#0b1e2c] hover:bg-teal-brand text-white hover:text-[#0b1e2c] rounded-full shadow-md transition-all cursor-pointer hover:scale-105"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

          </div>

        </div>
      </section>

      {/* ========================================================
          DOCTOR CERTIFICATIONS & ACCREDITATIONS SECTION
          ======================================================== */}
      <section className="py-16 md:py-20 bg-slate-200/50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl text-[#0b1e2c] font-serif font-extrabold">
              {t.certTitle}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">
              {t.certDesc}
            </p>
          </div>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Cert 1 */}
            <div className="bg-white border border-slate-100 rounded-xl overflow-hidden flex flex-col justify-between hover:border-teal-brand/20 transition-all hover:shadow-sm group">
              <div className="space-y-4">
                {/* Certificate image thumbnail */}
                <div 
                  onClick={() => setActiveCertImage("/cert_loma_linda.png")}
                  className="relative h-[160px] w-full bg-slate-200 overflow-hidden cursor-zoom-in border-b border-slate-100/60"
                >
                  <Image 
                    src="/cert_loma_linda.png" 
                    alt="Loma Linda University Postgraduate Implantology Diploma" 
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-w-7xl) 25vw, 100vw"
                  />
                  {/* Hover scan overlay */}
                  <div className="absolute inset-0 bg-[#0b1e2c]/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                    <span className="text-white text-[10px] font-bold bg-[#0b1e2c]/85 py-1.5 px-3.5 rounded-full flex items-center gap-1 shadow-md">
                      <Sparkles className="w-3.5 h-3.5 text-gold-brand" /> {lang === "VN" ? "Xem bản gốc" : "View original"}
                    </span>
                  </div>
                </div>

                <div className="px-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="bg-teal-brand-light p-2 rounded-lg text-teal-brand text-xs font-bold">
                      USA
                    </div>
                    <Award className="w-5 h-5 text-gold-brand" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-slate-800 leading-snug">{t.cert1Title}</h3>
                    <p className="text-[11px] text-slate-400 font-semibold">{t.cert1Body}</p>
                  </div>
                  <p className="text-xs text-slate-500 font-light leading-relaxed">{t.cert1Detail}</p>
                </div>
              </div>
              <div className="mx-6 mb-6 mt-4 pt-3 border-t border-slate-100/60 flex items-center justify-between text-[10px]">
                <span className="text-slate-400">{lang === "VN" ? "Bác sĩ:" : "Clinician:"}</span>
                <span className="font-semibold text-slate-700">{t.cert1Doc}</span>
              </div>
            </div>

            {/* Cert 2 */}
            <div className="bg-white border border-slate-100 rounded-xl overflow-hidden flex flex-col justify-between hover:border-teal-brand/20 transition-all hover:shadow-sm group">
              <div className="space-y-4">
                {/* Certificate image thumbnail */}
                <div 
                  onClick={() => setActiveCertImage("/cert_iti.png")}
                  className="relative h-[160px] w-full bg-slate-200 overflow-hidden cursor-zoom-in border-b border-slate-100/60"
                >
                  <Image 
                    src="/cert_iti.png" 
                    alt="ITI Fellowship Certificate" 
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-w-7xl) 25vw, 100vw"
                  />
                  {/* Hover scan overlay */}
                  <div className="absolute inset-0 bg-[#0b1e2c]/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                    <span className="text-white text-[10px] font-bold bg-[#0b1e2c]/85 py-1.5 px-3.5 rounded-full flex items-center gap-1 shadow-md">
                      <Sparkles className="w-3.5 h-3.5 text-gold-brand" /> {lang === "VN" ? "Xem bản gốc" : "View original"}
                    </span>
                  </div>
                </div>

                <div className="px-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="bg-teal-brand-light p-2 rounded-lg text-teal-brand text-xs font-bold">
                      SUI
                    </div>
                    <Award className="w-5 h-5 text-gold-brand" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-slate-800 leading-snug">{t.cert2Title}</h3>
                    <p className="text-[11px] text-slate-400 font-semibold">{t.cert2Body}</p>
                  </div>
                  <p className="text-xs text-slate-500 font-light leading-relaxed">{t.cert2Detail}</p>
                </div>
              </div>
              <div className="mx-6 mb-6 mt-4 pt-3 border-t border-slate-100/60 flex items-center justify-between text-[10px]">
                <span className="text-slate-400">{lang === "VN" ? "Bác sĩ:" : "Clinician:"}</span>
                <span className="font-semibold text-slate-700">{t.cert2Doc}</span>
              </div>
            </div>

            {/* Cert 3 */}
            <div className="bg-white border border-slate-100 rounded-xl overflow-hidden flex flex-col justify-between hover:border-teal-brand/20 transition-all hover:shadow-sm group">
              <div className="space-y-4">
                {/* Certificate image thumbnail */}
                <div 
                  onClick={() => setActiveCertImage("/cert_nobel.png")}
                  className="relative h-[160px] w-full bg-slate-200 overflow-hidden cursor-zoom-in border-b border-slate-100/60"
                >
                  <Image 
                    src="/cert_nobel.png" 
                    alt="Nobel Biocare Speaker Trainer Certificate" 
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-w-7xl) 25vw, 100vw"
                  />
                  {/* Hover scan overlay */}
                  <div className="absolute inset-0 bg-[#0b1e2c]/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                    <span className="text-white text-[10px] font-bold bg-[#0b1e2c]/85 py-1.5 px-3.5 rounded-full flex items-center gap-1 shadow-md">
                      <Sparkles className="w-3.5 h-3.5 text-gold-brand" /> {lang === "VN" ? "Xem bản gốc" : "View original"}
                    </span>
                  </div>
                </div>

                <div className="px-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="bg-teal-brand-light p-2 rounded-lg text-teal-brand text-xs font-bold">
                      SWE
                    </div>
                    <Award className="w-5 h-5 text-gold-brand" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-slate-800 leading-snug">{t.cert3Title}</h3>
                    <p className="text-[11px] text-slate-400 font-semibold">{t.cert3Body}</p>
                  </div>
                  <p className="text-xs text-slate-500 font-light leading-relaxed">{t.cert3Detail}</p>
                </div>
              </div>
              <div className="mx-6 mb-6 mt-4 pt-3 border-t border-slate-100/60 flex items-center justify-between text-[10px]">
                <span className="text-slate-400">{lang === "VN" ? "Bác sĩ:" : "Clinician:"}</span>
                <span className="font-semibold text-slate-700">{t.cert3Doc}</span>
              </div>
            </div>

            {/* Cert 4 */}
            <div className="bg-white border border-slate-100 rounded-xl overflow-hidden flex flex-col justify-between hover:border-teal-brand/20 transition-all hover:shadow-sm group">
              <div className="space-y-4">
                {/* Certificate image thumbnail */}
                <div 
                  onClick={() => setActiveCertImage("/cert_escd.png")}
                  className="relative h-[160px] w-full bg-slate-200 overflow-hidden cursor-zoom-in border-b border-slate-100/60"
                >
                  <Image 
                    src="/cert_escd.png" 
                    alt="ESCD Membership Certificate" 
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-w-7xl) 25vw, 100vw"
                  />
                  {/* Hover scan overlay */}
                  <div className="absolute inset-0 bg-[#0b1e2c]/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                    <span className="text-white text-[10px] font-bold bg-[#0b1e2c]/85 py-1.5 px-3.5 rounded-full flex items-center gap-1 shadow-md">
                      <Sparkles className="w-3.5 h-3.5 text-gold-brand" /> {lang === "VN" ? "Xem bản gốc" : "View original"}
                    </span>
                  </div>
                </div>

                <div className="px-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="bg-teal-brand-light p-2 rounded-lg text-teal-brand text-xs font-bold">
                      EU
                    </div>
                    <Award className="w-5 h-5 text-gold-brand" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-slate-800 leading-snug">{t.cert4Title}</h3>
                    <p className="text-[11px] text-slate-400 font-semibold">{t.cert4Body}</p>
                  </div>
                  <p className="text-xs text-slate-500 font-light leading-relaxed">{t.cert4Detail}</p>
                </div>
              </div>
              <div className="mx-6 mb-6 mt-4 pt-3 border-t border-slate-100/60 flex items-center justify-between text-[10px]">
                <span className="text-slate-400">{lang === "VN" ? "Bác sĩ:" : "Clinician:"}</span>
                <span className="font-semibold text-slate-700">{t.cert4Doc}</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          CERTIFICATE LIGHTBOX MODAL
          ======================================================== */}
      {activeCertImage && (
        <div 
          className="fixed inset-0 z-[100] bg-[#0b1e2c]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-10 animate-fade-in"
          onClick={() => setActiveCertImage(null)}
        >
          <div className="absolute top-6 right-6 text-white cursor-pointer p-2 hover:bg-white/10 rounded-full transition-colors">
            <X className="w-8 h-8" />
          </div>
          <div 
            className="relative max-w-4xl max-h-[85vh] w-full aspect-[4/3] bg-[#0b1e2c]/50 rounded-2xl overflow-hidden shadow-2xl border border-slate-800"
            onClick={(e) => e.stopPropagation()}
          >
            <Image 
              src={activeCertImage} 
              alt="Verifiable Clinical Certificate Scan" 
              fill
              className="object-contain p-4"
              sizes="(max-w-7xl) 80vw, 100vw"
            />
          </div>
        </div>
      )}

    </div>
  );
}
