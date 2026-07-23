"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";
import { Stethoscope, Sparkles, Check, Shield, Award } from "lucide-react";

export default function ServicesPage() {
  const { lang, t } = useLanguage();

  const treatments = [
    {
      icon: <Stethoscope className="w-7 h-7" />,
      title: t.treat1Title,
      sub: t.treat1Sub,
      desc: t.treat1Desc,
      price: t.compT1Rola,
      specs: [t.treat1Spec1, t.treat1Spec2, t.treat1Spec3]
    },
    {
      icon: <Sparkles className="w-7 h-7" />,
      title: t.treat2Title,
      sub: t.treat2Sub,
      desc: t.treat2Desc,
      price: t.compT2Rola,
      specs: [t.treat2Spec1, t.treat2Spec2, t.treat2Spec3]
    },
    {
      icon: <Shield className="w-7 h-7" />,
      title: t.treat3Title,
      sub: t.treat3Sub,
      desc: t.treat3Desc,
      price: t.compT3Rola,
      specs: [t.treat3Spec1, t.treat3Spec2, t.treat3Spec3]
    }
  ];

  return (
    <div className="py-12 space-y-16">
      
      {/* ========================================================
          SERVICES DETAILS
          ======================================================== */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h1 className="text-3xl sm:text-4xl text-[#0b1e2c] font-serif font-extrabold">
              {t.treatTitle}
            </h1>
            <div className="w-16 h-1 bg-teal-brand rounded mx-auto" />
            <p className="text-sm text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">
              {t.treatDesc}
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {treatments.map((treat, idx) => (
              <div 
                key={idx}
                id={idx === 0 ? "implants" : idx === 1 ? "veneers" : "allon4"}
                className="bg-white rounded-2xl p-8 border border-slate-100 shadow-premium hover:shadow-premium-hover transition-luxury flex flex-col justify-between group scroll-mt-28"
              >
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <div className="p-3.5 bg-teal-brand-light text-teal-brand rounded-xl">
                      {treat.icon}
                    </div>
                    <span className="text-xs font-bold tracking-wider text-slate-400 uppercase">
                      {treat.sub}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-serif text-xl font-bold text-[#0b1e2c] group-hover:text-teal-brand transition-colors">
                      {treat.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-light leading-relaxed">
                      {treat.desc}
                    </p>
                  </div>

                  <ul className="space-y-2.5 pt-2 border-t border-slate-50">
                    {treat.specs.map((spec, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-2.5 text-xs text-slate-600">
                        <Check className="w-4 h-4 text-teal-brand shrink-0 mt-0.5" />
                        <span className="font-light">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-5 border-t border-slate-100/60 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider block">{lang === "VN" ? "Giá từ" : "Starts at"}</span>
                    <span className="text-lg font-extrabold text-[#0b1e2c]">{treat.price}</span>
                  </div>
                  <Link 
                    href={idx === 0 ? "/services/implants" : idx === 1 ? "/services/veneers" : "/services/allon4"} 
                    className="bg-[#0b1e2c] hover:bg-teal-brand text-white hover:text-white px-5 py-2.5 rounded-lg text-xs font-bold transition-all"
                  >
                    {lang === "VN" ? "Xem chi tiết" : "Read More"}
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================
          SAFETY & MATERIALS STANDARDS
          ======================================================== */}
      <section className="py-16 bg-slate-200/50 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            
            <div className="space-y-3 bg-white p-6 rounded-xl border border-slate-100/80 shadow-sm">
              <div className="w-10 h-10 bg-teal-brand-light text-teal-brand rounded-lg flex items-center justify-center mx-auto md:mx-0">
                <Shield className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-base font-bold text-[#0b1e2c]">ISO 9001:2015 Clinic</h4>
              <p className="text-xs text-slate-500 font-light leading-relaxed">
                Our clinic operates under international ISO quality management protocols, ensuring strict medical sterilization, data security, and service standards.
              </p>
            </div>

            <div className="space-y-3 bg-white p-6 rounded-xl border border-slate-100/80 shadow-sm">
              <div className="w-10 h-10 bg-teal-brand-light text-teal-brand rounded-lg flex items-center justify-center mx-auto md:mx-0">
                <Check className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-base font-bold text-[#0b1e2c]">100% FDA-Approved</h4>
              <p className="text-xs text-slate-500 font-light leading-relaxed">
                We import genuine dental supplies (Nobel Biocare, Straumann, E.max porcelain) which are fully FDA-cleared and come with verifiable serial codes.
              </p>
            </div>

            <div className="space-y-3 bg-white p-6 rounded-xl border border-slate-100/80 shadow-sm">
              <div className="w-10 h-10 bg-teal-brand-light text-teal-brand rounded-lg flex items-center justify-center mx-auto md:mx-0">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-base font-bold text-[#0b1e2c]">Global Warranty Coverage</h4>
              <p className="text-xs text-slate-500 font-light leading-relaxed">
                Enjoy peace of mind with our extended warranty plan. If corrective care is required, we coordinates with our partner practices globally.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
