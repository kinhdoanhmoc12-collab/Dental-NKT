"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";
import { Star, MessageSquare, Quote, Heart, Sparkles } from "lucide-react";

export default function ReviewsPage() {
  const { lang, t } = useLanguage();
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [reviewsList, setReviewsList] = useState<any[]>([]);

  // THAY MÃ ID VIDEO YOUTUBE CỦA ANH VÀO ĐÂY (Ví dụ link là https://www.youtube.com/watch?v=dQw4w9WgXcQ thì ID là dQw4w9WgXcQ)
  const YOUTUBE_VIDEO_ID = "ZnTi3T4oFtE";

  const staticReviews = [
    {
      name: "Sarah Jenkins",
      from: lang === "VN" ? "Melbourne, Úc" : "Melbourne, Australia",
      treatment: lang === "VN" ? "Cấy ghép All-on-4" : "All-on-4 Implants",
      text: t.review1Text,
      rating: 5
    },
    {
      name: "David Mitchell",
      from: lang === "VN" ? "Sydney, Úc" : "Sydney, Australia",
      treatment: lang === "VN" ? "16 Răng sứ E.max" : "16 E.max Veneers",
      text: t.review2Text,
      rating: 5
    },
    {
      name: "Mark Thompson",
      from: lang === "VN" ? "Auckland, New Zealand" : "Auckland, New Zealand",
      treatment: lang === "VN" ? "Cấy ghép Implant" : "Dental Implants",
      text: t.review3Text,
      rating: 5
    }
  ];

  useEffect(() => {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/v1";
    fetch(`${baseUrl}/reviews`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data && data.data.length > 0) {
          const mapped = data.data.map((item: any) => ({
            name: item.patient_name,
            from: lang === "VN" ? "Khách quốc tế" : "International Patient",
            treatment: lang === "VN" ? "Nha khoa Thẩm mỹ" : "Cosmetic Dentistry",
            text: item.content,
            rating: item.rating
          }));
          setReviewsList(mapped);
        } else {
          setReviewsList(staticReviews);
        }
      })
      .catch((err) => {
        console.error("Error fetching reviews:", err);
        setReviewsList(staticReviews);
      });
  }, [lang]);

  return (
    <div className="relative min-h-screen bg-white">
      {/* Decorative Radial Background Blobs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-40 right-1/4 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* ========================================================
          HERO & FEATURED VIDEO
          ======================================================== */}
      <section className="py-16 md:py-24 border-b border-slate-100 bg-gradient-to-b from-slate-50/80 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Rich Context and Title */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 bg-teal-brand/10 text-teal-brand px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                <Star className="w-3.5 h-3.5 fill-current" />
                <span>{lang === "VN" ? "Câu chuyện thành công" : "Patient Success Stories"}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl text-[#0b1e2c] font-serif font-extrabold leading-tight">
                {t.reviewTitle}
              </h1>
              <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
                {t.reviewDesc}
              </p>

              {/* Trust Indicators List */}
              <ul className="space-y-3.5 pt-2 text-slate-700 text-xs sm:text-sm font-medium">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                    ✓
                  </div>
                  <span>{lang === "VN" ? "Hơn 1.200 bệnh nhân Úc & New Zealand tin tưởng" : "1,200+ Australia & NZ patients treated"}</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                    ✓
                  </div>
                  <span>{lang === "VN" ? "Dịch vụ đưa đón sân bay & khách sạn trọn gói" : "Full-service concierge, transfers & hotel booking"}</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                    ✓
                  </div>
                  <span>{lang === "VN" ? "Đánh giá 5.0 Sao tuyệt đối trên Google Reviews" : "Averaging 5.0 Star verified Google Rating"}</span>
                </li>
              </ul>

              <div className="pt-4">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-2 bg-teal-brand hover:bg-teal-brand-hover text-white px-7 py-3 rounded-full font-bold text-sm shadow-md hover:shadow-lg transition-all"
                >
                  {lang === "VN" ? "Đặt lịch tư vấn miễn phí" : "Schedule Free Assessment"}
                </Link>
              </div>
            </div>

            {/* Right Column: Featured Video Player */}
            <div className="lg:col-span-7 w-full">
              <div className="relative w-full aspect-video bg-[#0b1e2c] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/60 ring-1 ring-slate-100/80 group">
                {!isPlaying ? (
                  <div 
                    onClick={() => setIsPlaying(true)}
                    className="absolute inset-0 w-full h-full cursor-pointer flex items-center justify-center"
                  >
                    {/* Poster Overlay */}
                    <div className="absolute inset-0 w-full h-full bg-slate-900/30 z-10 transition-colors group-hover:bg-slate-900/15" />
                    <img 
                      src="/video_poster.jpg" 
                      alt="Featured patient video journey" 
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                    />
                    
                    {/* Glowing Pulse Play Button */}
                    <div className="relative z-20 w-20 h-20 bg-teal-brand text-white rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 fill-current ml-1" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                      {/* Ripple animation rings */}
                      <div className="absolute -inset-4 bg-teal-brand/30 rounded-full animate-ping -z-10" />
                    </div>
                  </div>
                ) : (
                  <iframe 
                    className="w-full h-full relative z-10"
                    src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1`}
                    title="Patient Review Video" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          WRITTEN TESTIMONIALS GRID
          ======================================================== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl text-[#0b1e2c] font-serif font-extrabold">
              {lang === "VN" ? "Ý kiến đánh giá từ bệnh nhân" : "Patient Letters & Feedback"}
            </h2>
            <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed">
              {lang === "VN" 
                ? "Dưới đây là một số chia sẻ chi tiết được gửi trực tiếp bởi các khách hàng quốc tế sau khi hoàn thành quy trình điều trị:"
                : "Read the handwritten or documented letters and testimonials sent by our international patients."}
            </p>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviewsList.map((rev, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-8 border border-slate-200 shadow-premium hover:shadow-premium-hover transition-luxury flex flex-col justify-between relative group"
              >
                <div className="space-y-6">
                  {/* Decorative Quote Icon */}
                  <Quote className="w-10 h-10 text-teal-brand/10 absolute top-6 right-6" />

                  {/* Stars Rating */}
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < (rev.rating || 5) ? 'fill-gold-brand text-gold-brand' : 'text-slate-200'}`} />
                    ))}
                  </div>

                  <p className="text-sm sm:text-base text-slate-800 font-semibold leading-relaxed relative z-10 not-italic">
                    "{rev.text}"
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-slate-200 flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-sm font-bold text-teal-brand uppercase tracking-wider">
                    {rev.name.slice(0, 2)}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-extrabold text-slate-900 leading-none">{rev.name}</h4>
                    <p className="text-xs text-slate-700 font-medium">
                      {rev.from} • <span className="text-teal-brand font-extrabold">{rev.treatment}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Review Platform Badges */}
          <div className="pt-8 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center max-w-4xl mx-auto">
            <div className="space-y-1">
              <div className="flex justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-gold-brand text-gold-brand" />
                ))}
              </div>
              <p className="text-xs font-bold text-slate-800">5.0 Star Google Rating</p>
              <p className="text-[10px] text-slate-400 font-light">Based on verified international reviews</p>
            </div>
            
            <div className="space-y-1">
              <div className="flex justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#12b76a] text-[#12b76a]" />
                ))}
              </div>
              <p className="text-xs font-bold text-slate-800">100% Patient Satisfaction</p>
              <p className="text-[10px] text-slate-400 font-light">Follow-up surveys for international cases</p>
            </div>

            <div className="space-y-1">
              <div className="flex justify-center gap-1 text-teal-brand font-bold text-sm">
                <Heart className="w-4 h-4 fill-teal-brand" /> VIP Care
              </div>
              <p className="text-xs font-bold text-slate-800">Elite Concierge Hosting</p>
              <p className="text-[10px] text-slate-400 font-light">Assisting patients from AU & NZ since 2016</p>
            </div>
          </div>

          <div className="text-center pt-4">
            <Link 
              href="/services/smile-makeover" 
              className="inline-flex items-center gap-2 bg-[#0b1e2c] hover:bg-teal-brand text-white px-8 py-3.5 font-semibold text-sm rounded-full transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Sparkles className="w-4 h-4 text-teal-brand" />
              <span>{lang === "VN" ? "Thiết Kế Nụ Cười Mơ Ước Của Bạn" : "Design Your Dream Smile"}</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
