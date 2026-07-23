/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "../context/LanguageContext";
import {
  Phone,
  Mail,
  MapPin,
  Calendar,
  Sparkles,
  ChevronDown,
  Menu,
  X
} from "lucide-react";

export default function Header() {
  const { lang, setLang, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const handleLinkClick = (href: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === href) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const selectLanguage = (newLang: "AU" | "VN") => {
    setLang(newLang);
    setActiveDropdown(null);
  };

  const currentFlag = lang === "AU" ? "https://flagcdn.com/h40/au.png" : "https://flagcdn.com/h40/vn.png";

  const navLinks = [
    { name: t.navHome, href: "/" },
    { name: lang === "VN" ? "Điều trị" : "Treatments", href: "/services" },
    { name: t.navCost, href: "/cost" },
    { name: lang === "VN" ? "Cẩm nang" : "Blog", href: "/blog" },
    { name: lang === "VN" ? "Đánh giá" : "Reviews", href: "/reviews" },
    { name: lang === "VN" ? "Chính sách bảo hành" : "Warranty Policy", href: "/warranty" }
  ];

  return (
    <header className="sticky top-0 z-50 w-full shadow-md transition-all">
      {/* ========================================================
          TOPBAR
          ======================================================== */}
      <div className="bg-[#0b1e2c] text-slate-300 py-2.5 px-4 sm:px-6 lg:px-8 border-b border-slate-800 text-xs transition-luxury">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 sm:gap-6">
            <a href="tel:+84963333844" className="flex items-center gap-1.5 hover:text-teal-brand transition-colors">
              <Phone className="w-3.5 h-3.5 text-teal-brand" />
              <span>+84 963 333 844</span>
            </a>
            <span className="hidden sm:inline text-slate-700">|</span>
            <a href="mailto:cskh.nhakhoatre@gmail.com" className="flex items-center gap-1.5 hover:text-teal-brand transition-colors">
              <Mail className="w-3.5 h-3.5 text-teal-brand" />
              <span>cskh.nhakhoatre@gmail.com</span>
            </a>
            <span className="hidden sm:inline text-slate-700">|</span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-teal-brand" />
              <span>{lang === "VN" ? "38 Ngụy Như Kon Tum, Thanh Xuân, Hà Nội" : "38 Nguy Nhu Kon Tum, Thanh Xuan, Hanoi"}</span>
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-slate-400 hidden lg:inline">{t.topbarSupport}</span>
            <div className="flex items-center gap-3">
              {/* Facebook */}
              <a 
                href="https://www.facebook.com/nhakhoatrehanoi/?locale=vi_VN" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-teal-brand transition-colors" 
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" className="hover:text-teal-brand transition-colors" aria-label="Instagram">
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="hover:text-teal-brand transition-colors" aria-label="LinkedIn">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          NAVBAR / HEADER
          ======================================================== */}
      <div className="bg-white/95 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-20 pr-4 sm:pr-6 lg:pr-8">
          
          {/* Logo Slanted Accent */}
          <div className="h-full flex items-center">
            <Link 
              href="/" 
              onClick={(e) => handleLinkClick("/", e)}
              className="h-full flex items-center"
            >
              <div className="bg-teal-brand text-white h-20 px-8 lg:px-12 flex items-center relative [clip-path:polygon(0_0,100%_0,82%_100%,0_100%)] select-none">
                <div className="flex items-center gap-2 pr-6">
                  <Sparkles className="w-6 h-6 text-white animate-pulse" />
                  <span className="font-serif text-3xl font-extrabold tracking-tight">DentalNTK</span>
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              if (link.href === "/services") {
                const isServicesActive = pathname.startsWith("/services");
                return (
                  <div 
                    key={link.href}
                    className="relative group py-2"
                    onMouseEnter={() => setActiveDropdown("services")}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className={`font-medium text-sm transition-colors flex items-center gap-1 cursor-pointer bg-transparent border-none outline-none ${
                        isServicesActive
                          ? "text-teal-brand font-bold"
                          : "text-[#0b1e2c] hover:text-teal-brand"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                    </button>
                    
                    {/* Hover Dropdown Panel */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 bg-white shadow-xl border border-slate-100 rounded-2xl py-3 w-64 mt-1 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 z-50 before:content-[''] before:absolute before:-top-4 before:left-0 before:right-0 before:h-4">
                      <Link 
                        href="/services/veneers" 
                        className="block px-5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-teal-brand"
                        onClick={(e) => {
                          setActiveDropdown(null);
                          handleLinkClick("/services/veneers", e);
                        }}
                      >
                        {lang === "VN" ? "Mặt dán sứ Veneers" : "Veneers"}
                      </Link>
                      <Link 
                        href="/services/implants" 
                        className="block px-5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-teal-brand"
                        onClick={(e) => {
                          setActiveDropdown(null);
                          handleLinkClick("/services/implants", e);
                        }}
                      >
                        {lang === "VN" ? "Cấy ghép răng Implant" : "Dental Implants"}
                      </Link>
                      <Link 
                        href="/services/allon4" 
                        className="block px-5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-teal-brand"
                        onClick={(e) => {
                          setActiveDropdown(null);
                          handleLinkClick("/services/allon4", e);
                        }}
                      >
                        {lang === "VN" ? "Hàm All-on-4" : "All-on-4"}
                      </Link>
                      <Link 
                        href="/services/allon6" 
                        className="block px-5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-teal-brand"
                        onClick={(e) => {
                          setActiveDropdown(null);
                          handleLinkClick("/services/allon6", e);
                        }}
                      >
                        {lang === "VN" ? "Hàm All-on-6" : "All-on-6"}
                      </Link>
                      <Link 
                        href="/services/crowns" 
                        className="block px-5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-teal-brand"
                        onClick={(e) => {
                          setActiveDropdown(null);
                          handleLinkClick("/services/crowns", e);
                        }}
                      >
                        {lang === "VN" ? "Mão răng sứ (Crowns)" : "Crowns"}
                      </Link>
                      <Link 
                        href="/services/bridges" 
                        className="block px-5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-teal-brand"
                        onClick={(e) => {
                          setActiveDropdown(null);
                          handleLinkClick("/services/bridges", e);
                        }}
                      >
                        {lang === "VN" ? "Cầu răng sứ (Bridges)" : "Bridges"}
                      </Link>
                      <Link 
                        href="/services/smile-makeover" 
                        className="block px-5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-teal-brand"
                        onClick={(e) => {
                          setActiveDropdown(null);
                          handleLinkClick("/services/smile-makeover", e);
                        }}
                      >
                        {lang === "VN" ? "Thiết kế nụ cười (Smile Makeover)" : "Smile Makeover"}
                      </Link>
                      <Link 
                        href="/services/full-mouth-reconstruction" 
                        className="block px-5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-teal-brand"
                        onClick={(e) => {
                          setActiveDropdown(null);
                          handleLinkClick("/services/full-mouth-reconstruction", e);
                        }}
                      >
                        {lang === "VN" ? "Phục hồi toàn hàm" : "Full Mouth Reconstruction"}
                      </Link>
                      <Link 
                        href="/services/teeth-whitening" 
                        className="block px-5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-teal-brand"
                        onClick={(e) => {
                          setActiveDropdown(null);
                          handleLinkClick("/services/teeth-whitening", e);
                        }}
                      >
                        {lang === "VN" ? "Tẩy trắng răng" : "Teeth Whitening"}
                      </Link>
                      <Link 
                        href="/services/root-canal" 
                        className="block px-5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-teal-brand"
                        onClick={(e) => {
                          setActiveDropdown(null);
                          handleLinkClick("/services/root-canal", e);
                        }}
                      >
                        {lang === "VN" ? "Điều trị tủy (Root Canal)" : "Root Canal"}
                      </Link>
                      <Link 
                        href="/services/invisalign" 
                        className="block px-5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-teal-brand"
                        onClick={(e) => {
                          setActiveDropdown(null);
                          handleLinkClick("/services/invisalign", e);
                        }}
                      >
                        {lang === "VN" ? "Niềng răng Invisalign" : "Invisalign"}
                      </Link>
                      <Link 
                        href="/services/dentures" 
                        className="block px-5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-teal-brand"
                        onClick={(e) => {
                          setActiveDropdown(null);
                          handleLinkClick("/services/dentures", e);
                        }}
                      >
                        {lang === "VN" ? "Hàm giả tháo lắp" : "Dentures"}
                      </Link>
                    </div>
                  </div>
                );
              }

              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(link.href, e)}
                  className={`font-medium text-sm transition-colors py-2 ${
                    isActive 
                      ? "text-teal-brand font-bold" 
                      : "text-[#0b1e2c] hover:text-teal-brand"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            {/* Language Dropdown Selector (Desktop) */}
            <div className="relative">
              <button 
                onClick={() => toggleDropdown("lang")} 
                className="flex items-center justify-center hover:scale-105 active:scale-95 transition-all select-none cursor-pointer p-1"
                title="Select Country / Language"
              >
                <img src={currentFlag} alt={lang} className="w-8 h-5.5 object-cover rounded shadow-sm border border-slate-200/60" />
              </button>
              {activeDropdown === "lang" && (
                <div className="absolute top-full right-0 bg-white shadow-lg border border-slate-100 rounded-xl py-1.5 w-44 mt-2 z-50">
                  <button 
                    onClick={() => selectLanguage("AU")} 
                    className="w-full text-left px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-teal-brand flex items-center gap-2 cursor-pointer"
                  >
                    <img src="https://flagcdn.com/h40/au.png" alt="Australia" className="w-6 h-4 object-cover rounded-sm" /> Australia (AUD)
                  </button>
                  <button 
                    onClick={() => selectLanguage("VN")} 
                    className="w-full text-left px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-teal-brand flex items-center gap-2 cursor-pointer"
                  >
                    <img src="https://flagcdn.com/h40/vn.png" alt="Vietnam" className="w-6 h-4 object-cover rounded-sm" /> Việt Nam (VND)
                  </button>
                </div>
              )}
            </div>
          </nav>

          {/* Action CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link 
              href="/contact" 
              className="hidden sm:inline-flex items-center gap-2 bg-teal-brand hover:bg-teal-brand-hover text-white px-6 py-3 font-semibold text-sm rounded-full transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Calendar className="w-4 h-4" />
              <span>{t.navBook}</span>
            </Link>
            
            {/* Hamburger menu for mobile */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="lg:hidden p-2 text-[#0b1e2c] hover:text-teal-brand focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 px-6 py-6 space-y-4 animate-fade-in absolute w-full left-0 top-full shadow-xl z-50">
            {navLinks.map((link) => {
              if (link.href === "/services") {
                const isServicesActive = pathname.startsWith("/services");
                const isServicesOpen = activeDropdown === "mobile-services";
                return (
                  <div key={link.href} className="border-b border-slate-50">
                    <button
                      onClick={() => toggleDropdown("mobile-services")}
                      className={`w-full flex items-center justify-between font-semibold py-2 text-left cursor-pointer bg-transparent border-none outline-none ${
                        isServicesActive ? "text-teal-brand font-bold" : "text-[#0b1e2c]"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`} />
                    </button>
                    
                    {isServicesOpen && (
                      <div className="pl-4 pb-2 pt-1 space-y-2 text-sm bg-slate-50/50 rounded-lg mt-1">
                        <Link
                          href="/services/veneers"
                          onClick={(e) => { 
                            setIsMobileMenuOpen(false); 
                            setActiveDropdown(null); 
                            handleLinkClick("/services/veneers", e);
                          }}
                          className="block py-1.5 text-xs text-slate-600 hover:text-teal-brand font-semibold"
                        >
                          {lang === "VN" ? "• Mặt dán sứ Veneers" : "• Veneers"}
                        </Link>
                        <Link
                          href="/services/implants"
                          onClick={(e) => { 
                            setIsMobileMenuOpen(false); 
                            setActiveDropdown(null); 
                            handleLinkClick("/services/implants", e);
                          }}
                          className="block py-1.5 text-xs text-slate-600 hover:text-teal-brand font-semibold"
                        >
                          {lang === "VN" ? "• Cấy ghép răng Implant" : "• Dental Implants"}
                        </Link>
                        <Link
                          href="/services/allon4"
                          onClick={(e) => { 
                            setIsMobileMenuOpen(false); 
                            setActiveDropdown(null); 
                            handleLinkClick("/services/allon4", e);
                          }}
                          className="block py-1.5 text-xs text-slate-600 hover:text-teal-brand font-semibold"
                        >
                          {lang === "VN" ? "• Hàm All-on-4" : "• All-on-4"}
                        </Link>
                        <Link
                          href="/services/allon6"
                          onClick={(e) => { 
                            setIsMobileMenuOpen(false); 
                            setActiveDropdown(null); 
                            handleLinkClick("/services/allon6", e);
                          }}
                          className="block py-1.5 text-xs text-slate-600 hover:text-teal-brand font-semibold"
                        >
                          {lang === "VN" ? "• Hàm All-on-6" : "• All-on-6"}
                        </Link>
                        <Link
                          href="/services/crowns"
                          onClick={(e) => { 
                            setIsMobileMenuOpen(false); 
                            setActiveDropdown(null); 
                            handleLinkClick("/services/crowns", e);
                          }}
                          className="block py-1.5 text-xs text-slate-600 hover:text-teal-brand font-semibold"
                        >
                          {lang === "VN" ? "• Mão răng sứ (Crowns)" : "• Crowns"}
                        </Link>
                        <Link
                          href="/services/bridges"
                          onClick={(e) => { 
                            setIsMobileMenuOpen(false); 
                            setActiveDropdown(null); 
                            handleLinkClick("/services/bridges", e);
                          }}
                          className="block py-1.5 text-xs text-slate-600 hover:text-teal-brand font-semibold"
                        >
                          {lang === "VN" ? "• Cầu răng sứ (Bridges)" : "• Bridges"}
                        </Link>
                        <Link
                          href="/services/smile-makeover"
                          onClick={(e) => { 
                            setIsMobileMenuOpen(false); 
                            setActiveDropdown(null); 
                            handleLinkClick("/services/smile-makeover", e);
                          }}
                          className="block py-1.5 text-xs text-slate-600 hover:text-teal-brand font-semibold"
                        >
                          {lang === "VN" ? "• Thiết kế nụ cười (Smile Makeover)" : "• Smile Makeover"}
                        </Link>
                        <Link
                          href="/services/full-mouth-reconstruction"
                          onClick={(e) => { 
                            setIsMobileMenuOpen(false); 
                            setActiveDropdown(null); 
                            handleLinkClick("/services/full-mouth-reconstruction", e);
                          }}
                          className="block py-1.5 text-xs text-slate-600 hover:text-teal-brand font-semibold"
                        >
                          {lang === "VN" ? "• Phục hồi toàn hàm" : "• Full Mouth Reconstruction"}
                        </Link>
                        <Link
                          href="/services/teeth-whitening"
                          onClick={(e) => { 
                            setIsMobileMenuOpen(false); 
                            setActiveDropdown(null); 
                            handleLinkClick("/services/teeth-whitening", e);
                          }}
                          className="block py-1.5 text-xs text-slate-600 hover:text-teal-brand font-semibold"
                        >
                          {lang === "VN" ? "• Tẩy trắng răng" : "• Teeth Whitening"}
                        </Link>
                        <Link
                          href="/services/root-canal"
                          onClick={(e) => { 
                            setIsMobileMenuOpen(false); 
                            setActiveDropdown(null); 
                            handleLinkClick("/services/root-canal", e);
                          }}
                          className="block py-1.5 text-xs text-slate-600 hover:text-teal-brand font-semibold"
                        >
                          {lang === "VN" ? "• Điều trị tủy (Root Canal)" : "• Root Canal"}
                        </Link>
                        <Link
                          href="/services/invisalign"
                          onClick={(e) => { 
                            setIsMobileMenuOpen(false); 
                            setActiveDropdown(null); 
                            handleLinkClick("/services/invisalign", e);
                          }}
                          className="block py-1.5 text-xs text-slate-600 hover:text-teal-brand font-semibold"
                        >
                          {lang === "VN" ? "• Niềng răng Invisalign" : "• Invisalign"}
                        </Link>
                        <Link
                          href="/services/dentures"
                          onClick={(e) => { 
                            setIsMobileMenuOpen(false); 
                            setActiveDropdown(null); 
                            handleLinkClick("/services/dentures", e);
                          }}
                          className="block py-1.5 text-xs text-slate-600 hover:text-teal-brand font-semibold"
                        >
                          {lang === "VN" ? "• Hàm giả tháo lắp" : "• Dentures"}
                        </Link>
                      </div>
                    )}
                  </div>
                );
              }

              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    setIsMobileMenuOpen(false);
                    handleLinkClick(link.href, e);
                  }}
                  className={`block font-semibold py-2 border-b border-slate-50 ${
                    isActive 
                      ? "text-teal-brand font-bold" 
                      : "text-[#0b1e2c] hover:text-teal-brand"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            {/* Mobile Flag Language Selector */}
            <div className="py-2 border-b border-slate-50">
              <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Region / Language</span>
              <div className="grid grid-cols-2 gap-2">
                <button 
                  onClick={() => { selectLanguage("AU"); setIsMobileMenuOpen(false); }}
                  className={`flex items-center justify-center gap-2 p-3.5 border rounded-xl text-xs font-bold transition-all ${
                    lang === "AU" 
                      ? "border-teal-brand bg-teal-brand/5 text-teal-brand font-extrabold" 
                      : "border-slate-200 text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  <img src="https://flagcdn.com/h40/au.png" alt="Australia" className="w-6 h-4 object-cover rounded-sm" />
                  AU (AUD)
                </button>
                <button 
                  onClick={() => { selectLanguage("VN"); setIsMobileMenuOpen(false); }}
                  className={`flex items-center justify-center gap-2 p-3.5 border rounded-xl text-xs font-bold transition-all ${
                    lang === "VN" 
                      ? "border-teal-brand bg-teal-brand/5 text-teal-brand font-extrabold" 
                      : "border-slate-200 text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  <img src="https://flagcdn.com/h40/vn.png" alt="Vietnam" className="w-6 h-4 object-cover rounded-sm" />
                  VN (VND)
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
