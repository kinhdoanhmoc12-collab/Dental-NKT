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
      image: "/images/dentists/bacsihang.jpg"
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
      image: "/images/dentists/bacsihoang.jpg"
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
      image: "/images/dentists/bacsidang.jpg"
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
      image: "/images/dentists/bacsiminh.jpg"
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
      image: "/images/dentists/bacsihoai.jpg"
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
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden space-y-10">
          
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

    </div>
  );
}
