"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";
import { Search, Calendar, Clock, ArrowRight, BookOpen, Compass, ShieldCheck, Heart, Sparkles } from "lucide-react";

export interface BlogPost {
  slug: string;
  category: "guide" | "implants" | "veneers" | "warranty";
  date: string;
  readTime: string;
  titleEN: string;
  titleVN: string;
  excerptEN: string;
  excerptVN: string;
  icon: React.ElementType;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "hanoi-dental-tourism-guide",
    category: "guide",
    date: "2026-07-15",
    readTime: "8 min",
    titleEN: "Hanoi Dental Tourism Guide: How to Plan Your 2026 Trip",
    titleVN: "Cẩm nang du lịch nha khoa Hà Nội: Kế hoạch chi tiết từ A-Z năm 2026",
    excerptEN: "Planning flight routing, medical visas, accommodation near Vinhome Smart City, and typical recovery times for international patients.",
    excerptVN: "Hướng dẫn chi tiết từ việc săn vé máy bay, xin visa y tế, đặt phòng nghỉ gần Vinhome Smart City, và thời gian phục hồi tiêu chuẩn cho khách nước ngoài.",
    icon: Compass
  },
  {
    slug: "implants-vietnam-vs-australia",
    category: "implants",
    date: "2026-07-02",
    readTime: "10 min",
    titleEN: "Dental Implants in Vietnam vs Australia: Price & Quality Analysis",
    titleVN: "Cấy ghép Implant tại Việt Nam và Úc: So sánh chi tiết về chi phí & chất lượng",
    excerptEN: "A comprehensive comparison of Nobel Biocare/Straumann protocols, showing how patients save over 65% while maintaining international safety standards.",
    excerptVN: "So sánh chi tiết về quy trình cấy ghép trụ Nobel Biocare/Straumann tiêu chuẩn quốc tế, giúp tiết kiệm hơn 65% chi phí mà vẫn đảm bảo an toàn tuyệt đối.",
    icon: Heart
  },
  {
    slug: "minimal-prep-veneers",
    category: "veneers",
    date: "2026-06-25",
    readTime: "6 min",
    titleEN: "Minimal Prep Veneers: Preserving Your Natural Tooth Enamel",
    titleVN: "Mặt dán sứ Veneer mài tối thiểu: Giải pháp bảo tồn men răng tự nhiên tối đa",
    excerptEN: "Understanding the difference between aggressive crown reductions and premium ultra-thin Emax veneers (0.3mm prep) for long-term health.",
    excerptVN: "Phân biệt sự khác nhau giữa bọc răng sứ mài nhiều răng và dán sứ Veneer Emax siêu mỏng (mài dưới 0.3mm) giúp bảo vệ tối đa sức khỏe răng gốc.",
    icon: BookOpen
  },
  {
    slug: "smilecare-global-warranty",
    category: "warranty",
    date: "2026-06-12",
    readTime: "5 min",
    titleEN: "Understanding the SmileCare Global Warranty: Safe Travels",
    titleVN: "Tìm hiểu chi tiết về chính sách Bảo hành Toàn cầu SmileCare",
    excerptEN: "How remote clinical assessments work, what is covered under our 7-to-10 year manufacturer warranty, and how to verify batch serial numbers.",
    excerptVN: "Quy trình đánh giá lâm sàng từ xa, quyền lợi được hưởng trong gói bảo hành chính hãng 7-10 năm và cách kiểm tra thẻ truy xuất nguồn gốc vật liệu.",
    icon: ShieldCheck
  }
];

export default function BlogIndex() {
  const { lang } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [posts, setPosts] = useState<BlogPost[]>(blogPosts);

  useEffect(() => {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/v1";
    fetch(`${baseUrl}/blog`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data && data.data.length > 0) {
          const mappedPosts = data.data.map((item: any) => ({
            slug: item.slug,
            category: item.category,
            date: item.date,
            readTime: item.readTime,
            titleEN: item.titleEN,
            titleVN: item.titleVN,
            excerptEN: item.excerptEN,
            excerptVN: item.excerptVN,
            icon: BookOpen
          }));
          setPosts(mappedPosts);
        }
      })
      .catch((err) => console.error("Error loading dynamic blog posts:", err));
  }, []);

  const categories = [
    { id: "all", labelEN: "All Articles", labelVN: "Tất cả bài viết" },
    { id: "guide", labelEN: "Travel Guide", labelVN: "Hướng dẫn du lịch" },
    { id: "implants", labelEN: "Dental Implants", labelVN: "Cấy ghép Implant" },
    { id: "veneers", labelEN: "Veneers & Aesthetics", labelVN: "Thẩm mỹ Răng sứ" },
    { id: "warranty", labelEN: "Warranty & Safety", labelVN: "Bảo hành & An toàn" }
  ];

  const filteredPosts = posts.filter((post) => {
    const title = lang === "VN" ? post.titleVN : post.titleEN;
    const excerpt = lang === "VN" ? post.excerptVN : post.excerptEN;
    const matchesSearch = 
      title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="py-12 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Blog Hero Section */}
      <section className="bg-gradient-to-br from-[#0b1e2c] via-[#112a3d] to-[#0b1e2c] rounded-3xl border border-slate-800/80 p-8 sm:p-12 lg:p-14 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-brand/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 bg-teal-brand/20 text-teal-brand border border-teal-brand/30 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <Compass className="w-4 h-4" />
              <span>{lang === "VN" ? "CẨM NANG DU LỊCH NHA KHOA" : "DENTAL TOURISM KNOWLEDGE HUB"}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-white leading-tight">
              {lang === "VN" ? "Kiến Thức & Cẩm Nang Du Lịch Nha Khoa" : "Dental Tourism Guide & Clinical Resources"}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              {lang === "VN"
                ? "Cung cấp các thông tin chuyên sâu, bài viết hướng dẫn lâm sàng và cẩm nang hành trình để bạn chuẩn bị chu đáo nhất cho chuyến đi làm răng tại Hà Nội."
                : "Read our comprehensive clinical insights, preparation checklists, and travel guides designed to make your dental journey in Hanoi seamless and worry-free."}
            </p>
          </div>

          {/* Right Column: Glassmorphic Highlights Card */}
          <div className="lg:col-span-5 bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/15 space-y-4 shadow-xl">
            <h3 className="text-lg font-serif font-bold text-white flex items-center gap-2 border-b border-white/10 pb-3">
              <Sparkles className="w-5 h-5 text-teal-brand" />
              <span>{lang === "VN" ? "Đồng Hành Cùng Khách Hàng Úc" : "Accompanying Australian Patients"}</span>
            </h3>

            <div className="space-y-3.5 text-sm text-slate-200">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-teal-brand/20 text-teal-brand flex items-center justify-center shrink-0 font-bold">✓</div>
                <span>{lang === "VN" ? "Hơn 5.000+ bệnh nhân Úc & Việt kiều thực hiện thành công" : "Over 5,000+ successful Australian & expat smile transformations"}</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-teal-brand/20 text-teal-brand flex items-center justify-center shrink-0 font-bold">✓</div>
                <span>{lang === "VN" ? "Hỗ trợ 100% đưa đón sân bay & khách sạn đối tác" : "100% free airport pickup & boutique hotel assistance"}</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-teal-brand/20 text-teal-brand flex items-center justify-center shrink-0 font-bold">✓</div>
                <span>{lang === "VN" ? "Cam kết bảo hành chính hãng 7–10 năm toàn cầu" : "Authentic 7–10 year global manufacturer warranty"}</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="flex flex-col md:flex-row gap-4 items-center justify-between border-b border-slate-100 pb-8">
        
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 items-center w-full md:w-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 text-xs font-bold rounded-full border transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? "bg-[#0b1e2c] border-[#0b1e2c] text-white"
                  : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
              }`}
            >
              {lang === "VN" ? cat.labelVN : cat.labelEN}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="w-4 h-4 text-slate-400" />
          </span>
          <input
            type="text"
            placeholder={lang === "VN" ? "Tìm kiếm bài viết..." : "Search articles..."}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 text-xs text-slate-800 bg-white border border-slate-200 rounded-full focus:outline-none focus:border-teal-brand transition-colors"
          />
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => {
            const PostIcon = post.icon;
            const title = lang === "VN" ? post.titleVN : post.titleEN;
            const excerpt = lang === "VN" ? post.excerptVN : post.excerptEN;
            const categoryLabel = categories.find((c) => c.id === post.category)?.[lang === "VN" ? "labelVN" : "labelEN"];

            return (
              <Link href={`/blog/${post.slug}`} key={post.slug} className="block group">
                <article className="bg-white border border-slate-100 shadow-premium p-6 sm:p-8 rounded-3xl hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 relative overflow-hidden h-full">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-full -z-10 group-hover:bg-teal-brand/5 transition-colors" />
                  <div className="space-y-4">
                    
                    {/* Card Header Info */}
                    <div className="flex items-center gap-4 text-xs text-slate-400">
                      <span className="bg-teal-brand-light text-teal-brand font-bold py-1 px-2.5 rounded-lg text-[10px] uppercase">
                        {categoryLabel}
                      </span>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{post.date}</span>
                      </div>
                    </div>

                    {/* Title & Excerpt */}
                    <div className="space-y-2">
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-[#0b1e2c] group-hover:text-teal-brand transition-colors">
                        {title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed">
                        {excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Read More Link */}
                  <div className="pt-4 border-t border-slate-50 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[#0b1e2c] font-bold text-xs">
                      <div className="p-2 bg-slate-100 rounded-lg group-hover:bg-teal-brand group-hover:text-white transition-colors">
                        <PostIcon className="w-4 h-4" />
                      </div>
                      <span className="group-hover:underline">{lang === "VN" ? "Đọc toàn bộ bài viết" : "Read Full Article"}</span>
                    </div>
                    <div className="text-teal-brand group-hover:translate-x-1.5 transition-transform">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </article>
              </Link>
            );
          })
        ) : (
          <div className="col-span-full text-center py-16 bg-slate-50 rounded-3xl border border-slate-100 space-y-2">
            <p className="text-sm text-slate-500 font-light">
              {lang === "VN" ? "Không tìm thấy bài viết nào phù hợp." : "No articles found matching your criteria."}
            </p>
          </div>
        )}
      </section>

    </div>
  );
}
