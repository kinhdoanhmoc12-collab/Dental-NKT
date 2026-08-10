"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useLanguage } from "../../../context/LanguageContext";
import { 
  Award, 
  CheckCircle2, 
  Sparkles, 
  Calendar, 
  Star, 
  GraduationCap, 
  ShieldCheck, 
  ArrowLeft,
  Phone,
  Briefcase,
  Globe2,
  Stethoscope,
  Activity,
  Smile,
  ShieldAlert,
  Layers,
  Sparkle
} from "lucide-react";

import { DOCTORS_DATA } from "../../../data/doctors";


export default function DoctorDetailPage() {
  const { lang } = useLanguage();
  const params = useParams();
  const rawId = Array.isArray(params.id) ? params.id[0] : params.id;
  const doctorKey = rawId?.toLowerCase() || "d1";

  // Match doctor key by ID or slug
  const doctor = Object.values(DOCTORS_DATA).find(
    (doc) => doc.id === doctorKey || doc.slugs.includes(doctorKey)
  ) || DOCTORS_DATA.d1;

  const name = lang === "VN" ? doctor.nameVN : doctor.nameEN;
  const tagline = lang === "VN" ? doctor.taglineVN : doctor.taglineEN;
  const role = lang === "VN" ? doctor.roleVN : doctor.roleEN;
  const badge = lang === "VN" ? doctor.badgeVN : doctor.badgeEN;
  const bios = lang === "VN" ? doctor.bioVN : doctor.bioEN;
  const educations = lang === "VN" ? doctor.educationVN : doctor.educationEN;
  const workHistory = lang === "VN" ? doctor.workHistoryVN : doctor.workHistoryEN;
  const associations = lang === "VN" ? doctor.associationsVN : doctor.associationsEN;
  const specialties = lang === "VN" ? doctor.specialtiesVN : doctor.specialtiesEN;
  const certifications = lang === "VN" ? doctor.certificationsVN : doctor.certificationsEN;
  const cases = lang === "VN" ? doctor.casesVN : doctor.casesEN;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": name,
    "jobTitle": role,
    "description": tagline,
    "image": `https://nhakhoatre.vn${doctor.image}`,
    "worksFor": {
      "@type": "DentalClinic",
      "name": "Dental NKT",
      "url": "https://nhakhoatre.vn"
    },
    "alumniOf": educations.map(edu => ({
      "@type": "EducationalOrganization",
      "name": edu
    })),
    "knowsAbout": specialties.map(spec => spec.title)
  };

  return (
    <div className="py-10 space-y-16 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      
      {/* Schema.org Structured Data for Google E-E-A-T SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Back button link */}
      <div>
        <Link 
          href="/dentists" 
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-500 hover:text-teal-brand transition-colors bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{lang === "VN" ? "Quay lại danh sách Bác sĩ" : "Back to All Dentists"}</span>
        </Link>
      </div>

      {/* ========================================================
          HERO SECTION: DOCTOR PORTRAIT & QUICK INFO
          ======================================================== */}
      <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Left: High-res Portrait with Badges */}
        <div className="lg:col-span-5 relative">
          <div className="relative h-[380px] sm:h-[450px] w-full rounded-2xl overflow-hidden bg-slate-100 shadow-md border border-slate-100">
            <Image 
              src={doctor.image} 
              alt={name} 
              fill 
              className="object-cover object-top" 
              priority
              sizes="(max-w-7xl) 40vw, 100vw"
            />
          </div>
        </div>

        {/* Right: Info & Bio Summary */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold tracking-widest text-teal-brand uppercase block">
              {role}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-[#0b1e2c]">
              {name}
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed italic">
              &ldquo;{tagline}&rdquo;
            </p>
          </div>

          {/* Quick Highlights / Stats Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
            {doctor.experienceYears ? (
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-1">
                <span className="text-xs text-slate-400 font-medium block">{lang === "VN" ? "Kinh nghiệm" : "Experience"}</span>
                <strong className="text-xl sm:text-2xl font-serif font-extrabold text-[#0b1e2c]">{doctor.experienceYears}+ {lang === "VN" ? "Năm" : "Years"}</strong>
              </div>
            ) : (
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-1">
                <span className="text-xs text-slate-400 font-medium block">{lang === "VN" ? "Học vấn chính" : "Education"}</span>
                <strong className="text-sm sm:text-base font-serif font-extrabold text-[#0b1e2c] block truncate">{lang === "VN" ? "Đại học Y Hà Nội" : "Hanoi Medical Univ"}</strong>
              </div>
            )}

            {doctor.patientsTreated ? (
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-1">
                <span className="text-xs text-slate-400 font-medium block">{lang === "VN" ? "Bệnh nhân điều trị" : "Patients Treated"}</span>
                <strong className="text-xl sm:text-2xl font-serif font-extrabold text-teal-brand">
                  {lang === "VN" ? doctor.patientsTreated : doctor.patientsTreated.replace("Ca", "Cases")}
                </strong>
              </div>
            ) : (
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-1">
                <span className="text-xs text-slate-400 font-medium block">{lang === "VN" ? "Chuyên khoa" : "Specialty"}</span>
                <strong className="text-sm sm:text-base font-serif font-extrabold text-teal-brand block">{role}</strong>
              </div>
            )}

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-1 col-span-2 sm:col-span-1">
              <span className="text-xs text-slate-400 font-medium block">{lang === "VN" ? "Đánh giá" : "Rating"}</span>
              <div className="flex items-center gap-1">
                <strong className="text-xl sm:text-2xl font-serif font-extrabold text-[#0b1e2c]">5.0</strong>
                <div className="flex text-amber-400">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
              </div>
            </div>
          </div>

          {/* Bio bullet points */}
          <div className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal border-t border-slate-100 pt-4">
            <h3 className="font-bold text-[#0b1e2c] text-sm mb-2">{lang === "VN" ? "Giới thiệu chung:" : "General Overview:"}</h3>
            {bios.map((paragraph, idx) => (
              <div key={idx} className="flex items-start gap-2.5">
                <span className="text-teal-brand text-base leading-none">•</span>
                <span>{paragraph}</span>
              </div>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-wrap gap-4 items-center">
            <Link 
              href="/contact" 
              className="bg-teal-brand hover:bg-teal-brand-hover text-[#0b1e2c] px-6 py-3.5 font-bold text-xs sm:text-sm rounded-full transition-all shadow-md inline-flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>{lang === "VN" ? "Đặt lịch khám trực tiếp" : "Book Consultation"}</span>
            </Link>
            <a 
              href="https://wa.me/84963333844" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-5 py-3.5 font-bold text-xs sm:text-sm rounded-full transition-all inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-teal-brand" />
              <span>+84 963 333 844</span>
            </a>
          </div>

        </div>
      </section>

      {/* ========================================================
          SECTION 2: EDUCATION, WORK HISTORY & ASSOCIATIONS
          ======================================================== */}
      {(educations.length > 0 || (workHistory && workHistory.length > 0) || (associations && associations.length > 0)) && (
        <section className={`grid grid-cols-1 ${(!workHistory || workHistory.length === 0) && (!associations || associations.length === 0) ? "lg:grid-cols-1" : "lg:grid-cols-2"} gap-8 items-start`}>
          
          {/* Left Column: Academic Training (Quá trình đào tạo) */}
          {educations.length > 0 && (
            <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200/80 space-y-6 shadow-sm">
              <div className="flex items-center gap-3 border-b border-slate-200/80 pb-4">
                <div className="p-3 bg-white text-teal-brand rounded-xl shadow-sm">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-extrabold text-[#0b1e2c]">
                    {lang === "VN" ? "Quá trình đào tạo" : "Academic & Clinical Education"}
                  </h3>
                  <p className="text-xs text-slate-400 font-medium">
                    {lang === "VN" ? "Bằng cấp & Chứng chỉ chuyên khoa" : "Medical degrees & postgraduate courses"}
                  </p>
                </div>
              </div>

              <ul className="space-y-3">
                {educations.map((edu, idx) => (
                  <li key={idx} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-100 shadow-sm hover:border-teal-brand/20 transition-all">
                    <ShieldCheck className="w-5 h-5 text-teal-brand shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed">{edu}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Right Column: Work Experience & Associations */}
          {((workHistory && workHistory.length > 0) || (associations && associations.length > 0)) && (
            <div className="space-y-8">
              
              {/* Work Experience (Quá trình công tác) */}
              {workHistory && workHistory.length > 0 && (
                <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200/80 space-y-6 shadow-sm">
                  <div className="flex items-center gap-3 border-b border-slate-200/80 pb-4">
                    <div className="p-3 bg-white text-teal-brand rounded-xl shadow-sm">
                      <Briefcase className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-serif font-extrabold text-[#0b1e2c]">
                        {lang === "VN" ? "Quá trình công tác" : "Clinical Practice History"}
                      </h3>
                      <p className="text-xs text-slate-400 font-medium">
                        {lang === "VN" ? "Kinh nghiệm phẫu thuật & vị trí làm việc" : "Clinical milestones & surgical roles"}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-3.5">
                    {workHistory.map((work, idx) => (
                      <li key={idx} className="flex items-start gap-3.5 bg-white p-4 rounded-xl border border-slate-100 shadow-sm hover:border-teal-brand/20 transition-all">
                        <div className="p-1.5 bg-teal-brand-light text-teal-brand rounded-lg shrink-0 mt-0.5">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed">{work}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Professional Associations (Hội khoa học, tổ chức) */}
              {associations && associations.length > 0 && (
                <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200/80 space-y-5 shadow-sm">
                  <div className="flex items-center gap-3 border-b border-slate-200/80 pb-4">
                    <div className="p-3 bg-white text-teal-brand rounded-xl shadow-sm">
                      <Globe2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-serif font-extrabold text-[#0b1e2c]">
                        {lang === "VN" ? "Tham gia các Hội khoa học, tổ chức" : "Professional Associations & Activities"}
                      </h3>
                      <p className="text-xs text-slate-400 font-medium">
                        {lang === "VN" ? "Thành viên tổ chức quốc tế & mổ nhân đạo" : "Global memberships & volunteer missions"}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {associations.map((assoc, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-800 font-semibold bg-white p-4 rounded-xl border border-slate-100 shadow-sm hover:border-teal-brand/20 transition-all">
                        <CheckCircle2 className="w-5 h-5 text-teal-brand shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{assoc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            </div>
          )}

        </section>
      )}

      {/* ========================================================
          SECTION 3: CLINICAL SPECIALTIES & EXPERTISE (BALANCED GRID)
          ======================================================== */}
      <section className="space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-bold tracking-widest text-teal-brand uppercase">
            {lang === "VN" ? "LĨNH VỰC CHUYÊN MÔN CHÍNH" : "CLINICAL SPECIALTIES"}
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#0b1e2c]">
            {lang === "VN" ? `Chuyên môn & Thế mạnh điều trị của ${name}` : `Clinical Expertise & Focus Areas`}
          </h2>
        </div>

        <div className={`grid grid-cols-1 ${specialties.length % 2 === 0 ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'} gap-6`}>
          {specialties.map((spec, idx) => (
            <div 
              key={idx} 
              className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-teal-brand/40 transition-all space-y-3 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 bg-teal-brand-light text-teal-brand rounded-xl group-hover:bg-teal-brand group-hover:text-[#0b1e2c] transition-colors">
                    {idx % 4 === 0 ? <Stethoscope className="w-5 h-5" /> : idx % 4 === 1 ? <Sparkles className="w-5 h-5" /> : idx % 4 === 2 ? <Activity className="w-5 h-5" /> : <Layers className="w-5 h-5" />}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-teal-brand bg-teal-brand/10 px-3 py-1 rounded-full">
                    {spec.badge}
                  </span>
                </div>
                <h4 className="text-base font-serif font-bold text-[#0b1e2c] leading-snug group-hover:text-teal-brand transition-colors">
                  {spec.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed">
                  {spec.desc}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-brand" />
                <span>{lang === "VN" ? "Tiêu chuẩn kiểm soát nhiễm khuẩn quốc tế" : "International Sterilization Standard"}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          SECTION 4: INTERNATIONAL ACCREDITATIONS & CERTIFICATES
          ======================================================== */}
      {certifications && certifications.length > 0 && (
        <section className="space-y-6 bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm">
          <div className="flex flex-col items-center justify-center text-center border-b border-slate-200/80 pb-6 space-y-2 max-w-2xl mx-auto">
            <div className="p-3.5 bg-white text-teal-brand rounded-2xl shadow-sm border border-slate-100">
              <Award className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-serif font-extrabold text-[#0b1e2c]">
                {lang === "VN" ? "Chứng chỉ Quốc tế & Đào tạo Nâng cao" : "International Accreditations"}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 font-medium mt-1">
                {lang === "VN" ? "Chứng nhận tay nghề lâm sàng & giảng viên quốc tế" : "Certified clinical & speaker accreditations"}
              </p>
            </div>
          </div>

          <div className={`grid grid-cols-1 ${certifications.length === 2 ? 'md:grid-cols-2' : certifications.length === 4 ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-3'} gap-6`}>
            {certifications.map((cert, idx) => (
              <div 
                key={idx} 
                className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-teal-brand/40 transition-all flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-teal-brand bg-teal-brand-light px-3 py-1 rounded-full border border-teal-brand/10">
                      {lang === "VN" ? "Chứng chỉ Đã xác thực" : "Verified Accreditation"}
                    </span>
                    <Sparkles className="w-4 h-4 text-amber-500 shrink-0 group-hover:rotate-12 transition-transform" />
                  </div>
                  <h4 className="text-base font-serif font-bold text-[#0b1e2c] group-hover:text-teal-brand transition-colors leading-snug">
                    {cert.title}
                  </h4>
                  <p className="text-xs font-bold text-teal-brand">{cert.org}</p>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">{cert.detail}</p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-medium">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-teal-brand" />
                    {lang === "VN" ? "Chứng nhận Quốc tế" : "International Standard"}
                  </span>
                  <span className="text-teal-brand font-bold">100% Verified</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ========================================================
          SECTION 5: FEATURED CASE STUDIES LED BY THIS DOCTOR
          ======================================================== */}
      {cases && cases.length > 0 && (
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold tracking-widest text-teal-brand uppercase">
              {lang === "VN" ? "CA LÂM SÀNG TIÊU BIỂU" : "FEATURED CASE STUDIES"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#0b1e2c]">
              {lang === "VN" ? `Kết quả điều trị thực tế của ${name}` : `Clinical Case Results by ${name}`}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cases.map((cs, idx) => (
              <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm space-y-4 hover:shadow-md transition-all">
                <div className="space-y-1 border-b border-slate-100 pb-3">
                  <span className="text-[10px] font-bold text-teal-brand uppercase tracking-wider block">
                    {lang === "VN" ? `Ca lâm sàng #${idx + 1}` : `Case Study #${idx + 1}`}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-[#0b1e2c]">{cs.title}</h3>
                  <p className="text-xs text-slate-500 font-light leading-relaxed">{cs.desc}</p>
                </div>

                <ul className="space-y-2 text-xs sm:text-sm">
                  <li className="flex justify-between py-1.5 border-b border-slate-50">
                    <span className="text-slate-400">{lang === "VN" ? "Thời gian điều trị" : "Treatment Duration"}</span>
                    <strong className="text-slate-800">{cs.duration}</strong>
                  </li>
                  <li className="flex justify-between py-1.5">
                    <span className="text-slate-400">{lang === "VN" ? "Kết quả đạt được" : "Outcome"}</span>
                    <strong className="text-teal-brand font-bold text-right max-w-[220px]">{cs.result}</strong>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ========================================================
          SECTION 6: APPOINTMENT / CONSULTATION BOOKING CARD
          ======================================================== */}
      <section className="bg-[#0b1e2c] text-white p-5 sm:p-8 md:p-12 rounded-3xl shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-8 space-y-4">
          <span className="text-xs font-bold tracking-widest text-teal-brand uppercase">
            {lang === "VN" ? "ĐẶT LỊCH KHÁM TRỰC TIẾP" : "DIRECT CLINICAL CONSULTATION"}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-extrabold leading-tight">
            {lang === "VN" 
              ? `Nhận phác đồ điều trị trực tiếp từ ${name}` 
              : `Get a direct treatment plan from ${name}`}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 font-normal max-w-2xl leading-relaxed">
            {lang === "VN"
              ? "Đăng ký tư vấn trực tiếp với bác sĩ. Đội ngũ chuyên khoa sẽ lập kế hoạch điều trị chi tiết bằng văn bản kèm báo giá AUD hoàn toàn miễn phí."
              : "Request a consultation. Dr. " + name + " and our team will issue a comprehensive written AUD treatment plan 100% free of charge."}
          </p>
        </div>

        <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4">
          <Link
            href="/contact"
            className="w-full text-center bg-teal-brand hover:bg-teal-brand-hover text-[#0b1e2c] py-4 px-6 font-bold text-sm rounded-full transition-all shadow-md block cursor-pointer"
          >
            {lang === "VN" ? "Đăng ký tư vấn miễn phí" : "Request Free Treatment Plan"}
          </Link>
          <Link
            href="/dental-costs"
            className="w-full text-center bg-slate-800 hover:bg-slate-700 text-[#0b1e2c] py-4 px-6 font-bold text-sm rounded-full transition-all border border-slate-700 block cursor-pointer text-white"
          >
            {lang === "VN" ? "Xem bảng giá chi tiết" : "View Full Price List"}
          </Link>
        </div>
      </section>

    </div>
  );
}
