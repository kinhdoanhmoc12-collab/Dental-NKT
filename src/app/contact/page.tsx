"use client";

import React, { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { Upload, Sparkles, Check, Mail } from "lucide-react";

export default function ContactPage() {
  const { lang, t } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "AU",
    need: "",
    message: ""
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const needParam = params.get("need");
      if (needParam) {
        setFormData((prev) => ({
          ...prev,
          need: needParam
        }));
      }
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
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
        alert(lang === "VN" ? "Có lỗi xảy ra khi gửi thông tin. Vui lòng thử lại." : "An error occurred while submitting. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert(lang === "VN" ? "Lỗi kết nối máy chủ." : "Server connection error.");
    }
  };

  return (
    <div className="py-12 space-y-16">
      
      {/* ========================================================
          CONTACT & FORM SECTION
          ======================================================== */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Trust and details (Left Column) */}
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-bold tracking-widest text-teal-brand uppercase">{t.formSub}</span>
                <h1 className="text-3xl sm:text-4xl text-[#0b1e2c] font-serif font-extrabold leading-tight">
                  {t.formTitle}
                </h1>
                <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed">
                  {t.formDesc}
                </p>
              </div>

              {/* Trust Items */}
              <div className="space-y-5">
                
                {/* Trust Item 1 */}
                <div className="flex gap-4 p-4 rounded-xl border border-slate-100/80 bg-slate-50/50 hover:bg-white hover:shadow-sm transition-all">
                  <div className="p-2.5 bg-teal-brand-light text-teal-brand rounded-lg shrink-0 h-10 w-10 flex items-center justify-center">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wide">{t.formTrust1Title}</h4>
                    <p className="text-[11px] text-slate-400 font-light leading-relaxed">{t.formTrust1Desc}</p>
                  </div>
                </div>

                {/* Trust Item 2 */}
                <div className="flex gap-4 p-4 rounded-xl border border-slate-100/80 bg-slate-50/50 hover:bg-white hover:shadow-sm transition-all">
                  <div className="p-2.5 bg-teal-brand-light text-teal-brand rounded-lg shrink-0 h-10 w-10 flex items-center justify-center">
                    <Check className="w-5 h-5" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wide">{t.formTrust2Title}</h4>
                    <p className="text-[11px] text-slate-400 font-light leading-relaxed">{t.formTrust2Desc}</p>
                  </div>
                </div>

                {/* Trust Item 3 */}
                <div className="flex gap-4 p-4 rounded-xl border border-slate-100/80 bg-slate-50/50 hover:bg-white hover:shadow-sm transition-all">
                  <div className="p-2.5 bg-teal-brand-light text-teal-brand rounded-lg shrink-0 h-10 w-10 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wide">{t.formTrust3Title}</h4>
                    <p className="text-[11px] text-slate-400 font-light leading-relaxed">{t.formTrust3Desc}</p>
                  </div>
                </div>

              </div>




            </div>

            {/* Interactive Form Card (Right Column) */}
            <div>
              <div className="bg-white rounded-2xl border border-slate-100 shadow-premium p-6 sm:p-10">
                {formSubmitted ? (
                  /* Success State */
                  <div className="text-center py-10 space-y-6 max-w-md mx-auto">
                    <div className="w-16 h-16 bg-teal-brand-light text-teal-brand rounded-full flex items-center justify-center mx-auto shadow-sm">
                      <Check className="w-8 h-8" />
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="font-serif text-2xl font-bold text-[#0b1e2c]">
                        {t.formSuccessTitle}
                      </h3>
                      <p className="text-xs text-slate-500 font-light leading-relaxed">
                        {t.formSuccessDesc
                          .replace("{name}", formData.name)
                          .replace("{email}", formData.email)}
                      </p>
                    </div>

                    <div className="bg-slate-50 border border-slate-100 p-4 rounded-xl text-left text-xs text-slate-500 max-w-md mx-auto space-y-2">
                      <p className="font-bold text-slate-700">{t.formSuccessNoteTitle}</p>
                      <p>{t.formSuccessNote1}</p>
                      <p>{t.formSuccessNote2}</p>
                    </div>

                    <button 
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({ name: "", email: "", phone: "", country: "AU", need: "", message: "" });
                      }}
                      className="text-xs text-teal-brand hover:text-teal-brand-hover font-bold underline transition-colors"
                    >
                      {t.formSuccessAnother}
                    </button>
                  </div>
                ) : (
                  /* Main Interactive Form */
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    
                    <div className="space-y-2 text-center sm:text-left">
                      <h3 className="font-serif text-2xl font-bold text-[#0b1e2c]">
                        {t.formCardTitle}
                      </h3>
                      <p className="text-xs text-slate-400">{t.formCardSub}</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div className="space-y-1.5">
                        <label htmlFor="name" className="text-xs font-bold text-slate-700 uppercase tracking-wider">{t.formLabelName}</label>
                        <input 
                          type="text" 
                          id="name"
                          name="name" 
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder={t.formPlaceholderName}
                          className="w-full bg-slate-50 border border-slate-200 focus:border-teal-brand focus:bg-white focus:outline-none rounded-xl py-3 px-4 text-sm transition-colors"
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-1.5">
                        <label htmlFor="email" className="text-xs font-bold text-slate-700 uppercase tracking-wider">{t.formLabelEmail}</label>
                        <input 
                          type="email" 
                          id="email"
                          name="email" 
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder={t.formPlaceholderEmail}
                          className="w-full bg-slate-50 border border-slate-200 focus:border-teal-brand focus:bg-white focus:outline-none rounded-xl py-3 px-4 text-sm transition-colors"
                        />
                      </div>

                      {/* Phone */}
                      <div className="space-y-1.5">
                        <label htmlFor="phone" className="text-xs font-bold text-slate-700 uppercase tracking-wider">{lang === "VN" ? "Số điện thoại WhatsApp *" : "WhatsApp Phone Number *"}</label>
                        <input 
                          type="tel" 
                          id="phone"
                          name="phone" 
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder={lang === "VN" ? "Ví dụ: 0987 654 321" : "e.g. +61 412 345 678"}
                          className="w-full bg-slate-50 border border-slate-200 focus:border-teal-brand focus:bg-white focus:outline-none rounded-xl py-3 px-4 text-sm transition-colors"
                        />
                      </div>

                      {/* Country */}
                      <div className="space-y-1.5">
                        <label htmlFor="country" className="text-xs font-bold text-slate-700 uppercase tracking-wider">{t.formLabelCountry}</label>
                        <select 
                          id="country"
                          name="country"
                          required
                          value={formData.country}
                          onChange={handleInputChange}
                          className="w-full bg-slate-50 border border-slate-200 focus:border-teal-brand focus:bg-white focus:outline-none rounded-xl py-3 px-4 text-sm transition-colors cursor-pointer"
                        >
                          <option value="AU">Australia (AUD)</option>
                          <option value="NZ">New Zealand (NZD)</option>
                          <option value="US">United States (USD)</option>
                          <option value="VN">Việt Nam (VND)</option>
                        </select>
                      </div>

                      {/* Needs Selector */}
                      <div className="space-y-1.5">
                        <label htmlFor="need" className="text-xs font-bold text-slate-700 uppercase tracking-wider">{t.formLabelNeed}</label>
                        <select 
                          id="need"
                          name="need"
                          required
                          value={formData.need}
                          onChange={handleInputChange}
                          className="w-full bg-slate-50 border border-slate-200 focus:border-teal-brand focus:bg-white focus:outline-none rounded-xl py-3 px-4 text-sm transition-colors cursor-pointer"
                        >
                          <option value="">{lang === "VN" ? "-- Chọn nhu cầu --" : "-- Select Need --"}</option>
                          <option value="veneers">{lang === "VN" ? "Mặt dán sứ Veneers" : "Porcelain Veneers"}</option>
                          <option value="implants">{lang === "VN" ? "Cấy ghép răng Implant" : "Dental Implants"}</option>
                          <option value="allon4">{lang === "VN" ? "Hàm All-on-4" : "All-on-4 Arch"}</option>
                          <option value="allon6">{lang === "VN" ? "Hàm All-on-6" : "All-on-6 Arch"}</option>
                          <option value="crowns">{lang === "VN" ? "Mão răng sứ (Crowns)" : "Dental Crowns"}</option>
                          <option value="bridges">{lang === "VN" ? "Cầu răng sứ (Bridges)" : "Dental Bridges"}</option>
                          <option value="smile-makeover">{lang === "VN" ? "Thiết kế nụ cười (Smile Makeover)" : "Smile Makeover"}</option>
                          <option value="full-reconstruction">{lang === "VN" ? "Phục hồi toàn hàm" : "Full Mouth Reconstruction"}</option>
                          <option value="whitening">{lang === "VN" ? "Tẩy trắng răng" : "Teeth Whitening"}</option>
                          <option value="root-canal">{lang === "VN" ? "Điều trị tủy (Root Canal)" : "Root Canal Treatment"}</option>
                          <option value="invisalign">{lang === "VN" ? "Niềng răng Invisalign" : "Invisalign Aligners"}</option>
                          <option value="dentures">{lang === "VN" ? "Hàm giả tháo lắp" : "Removable Dentures"}</option>
                        </select>
                      </div>
                    </div>



                    {/* Additional Details */}
                    <div className="space-y-1.5">
                      <label htmlFor="message" className="text-xs font-bold text-slate-700 uppercase tracking-wider">{t.formLabelDetails}</label>
                      <textarea 
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={3}
                        placeholder={t.formPlaceholderDetails}
                        className="w-full bg-slate-50 border border-slate-200 focus:border-teal-brand focus:bg-white focus:outline-none rounded-xl py-3 px-4 text-sm transition-colors resize-none"
                      />
                    </div>

                    {/* Submit CTA */}
                    <button 
                      type="submit" 
                      className="w-full bg-teal-brand hover:bg-teal-brand-hover text-white py-4 px-6 rounded-xl text-base font-bold shadow-md transition-luxury hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0 text-center cursor-pointer font-sans"
                    >
                      {t.formCta}
                    </button>

                    <p className="text-[10px] text-center text-slate-400 max-w-sm mx-auto leading-relaxed">
                      {t.formBottomNote}
                    </p>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
