"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";
import { Search, Calendar, Clock, ArrowRight, BookOpen, Compass, ShieldCheck, Heart, Sparkles } from "lucide-react";

import { blogPosts, BlogPost } from "../../data/blogPosts";


export default function BlogIndex() {
  const { lang } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [posts, setPosts] = useState<BlogPost[]>(blogPosts);

  const [currentPage, setCurrentPage] = useState(1);
  const POSTS_PER_PAGE = 4;

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

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery]);

  const categories = [
    { id: "all", labelEN: "All Articles", labelVN: "Tất cả bài viết" },
    { id: "guide", labelEN: "Travel Guide", labelVN: "Hướng dẫn du lịch" },
    { id: "handbook", labelEN: "Dental Handbook", labelVN: "Cẩm nang nha khoa" },
    { id: "warranty", labelEN: "Warranty & Safety", labelVN: "Bảo hành & An toàn" }
  ];

  const filteredPosts = posts.filter((post) => {
    // 1. Hide private posts
    const [_, statusVal = "public"] = (post.readTime || "5 min").split("|");
    if (statusVal === "private") return false;

    // 2. Hide scheduled posts
    const postDate = post.date;
    const isScheduled = postDate ? new Date(postDate.endsWith("Z") ? postDate : postDate + "Z").getTime() > new Date().getTime() : false;
    if (isScheduled) return false;

    // 3. Search and Category filters
    const title = lang === "VN" ? post.titleVN : post.titleEN;
    const excerpt = lang === "VN" ? post.excerptVN : post.excerptEN;
    const matchesSearch = 
      title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Pagination calculations
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  return (
    <div className="py-12 space-y-16 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      
      {/* Blog Hero Section */}
      <section className="bg-gradient-to-br from-[#0b1e2c] via-[#112a3d] to-[#0b1e2c] rounded-3xl border border-slate-800/80 p-5 sm:p-8 md:p-12 lg:p-14 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-brand/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 bg-teal-brand/20 text-teal-brand border border-teal-brand/30 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <Compass className="w-4 h-4" />
              <span>{lang === "VN" ? "CẨM NANG NHA KHOA" : "DENTAL HANDBOOK"}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-white leading-tight">
              {lang === "VN" ? "Kiến Thức & Cẩm Nang Nha Khoa" : "Dental Handbook & Clinical Resources"}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              {lang === "VN"
                ? "Cung cấp các thông tin chuyên sâu, bài viết hướng dẫn lâm sàng và cẩm nang hành trình để bạn chuẩn bị chu đáo nhất cho chuyến đi làm răng tại Hà Nội."
                : "Read our comprehensive clinical insights, preparation checklists, and handbooks designed to make your dental journey in Hanoi seamless and worry-free."}
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
      <section className="space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {paginatedPosts.length > 0 ? (
            paginatedPosts.map((post) => {
              const PostIcon = post.icon;
              const title = lang === "VN" ? post.titleVN : post.titleEN;
              const excerpt = lang === "VN" ? post.excerptVN : post.excerptEN;
              const categoryLabel = categories.find((c) => c.id === post.category)?.[lang === "VN" ? "labelVN" : "labelEN"];

              return (
                <Link href={`/dental-handbook/${post.slug}`} key={post.slug} className="block group">
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
                          <span>{post.date ? post.date.split("T")[0].split("-").reverse().join("/") : ""}</span>
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
        </div>

        {/* Premium Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 pt-8 border-t border-slate-100">
            <button
              onClick={() => {
                setCurrentPage((p) => Math.max(1, p - 1));
                window.scrollTo({ top: 300, behavior: 'smooth' });
              }}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 bg-white hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all cursor-pointer"
            >
              {lang === "VN" ? "Trước" : "Previous"}
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
              <button
                key={pageNum}
                onClick={() => {
                  setCurrentPage(pageNum);
                  window.scrollTo({ top: 300, behavior: 'smooth' });
                }}
                className={`w-10 h-10 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                  currentPage === pageNum
                    ? "bg-[#0b1e2c] border-[#0b1e2c] text-white shadow-md shadow-slate-900/10"
                    : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                }`}
              >
                {pageNum}
              </button>
            ))}

            <button
              onClick={() => {
                setCurrentPage((p) => Math.min(totalPages, p + 1));
                window.scrollTo({ top: 300, behavior: 'smooth' });
              }}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 bg-white hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all cursor-pointer"
            >
              {lang === "VN" ? "Sau" : "Next"}
            </button>
          </div>
        )}
      </section>

    </div>
  );
}
