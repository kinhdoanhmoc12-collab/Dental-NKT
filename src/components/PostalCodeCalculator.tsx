"use client";

import React, { useState } from "react";
import { Search, MapPin, Calculator, Calendar, DollarSign, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";

interface SuburbData {
  suburb: string;
  postcode: string;
  state: string;
  implant: number;
  veneer: number;
  allon4: number;
}

const AUSTRALIAN_LOCATIONS: SuburbData[] = [
  // Sydney & Suburbs
  { suburb: "Sydney CBD", postcode: "2000", state: "NSW", implant: 5500, veneer: 1800, allon4: 28000 },
  { suburb: "Parramatta", postcode: "2150", state: "NSW", implant: 5100, veneer: 1500, allon4: 26000 },
  { suburb: "Penrith", postcode: "2750", state: "NSW", implant: 4800, veneer: 1400, allon4: 24500 },
  { suburb: "Bondi", postcode: "2026", state: "NSW", implant: 5800, veneer: 2000, allon4: 29000 },
  { suburb: "Chatswood", postcode: "2067", state: "NSW", implant: 5600, veneer: 1900, allon4: 28500 },
  { suburb: "Liverpool", postcode: "2170", state: "NSW", implant: 4700, veneer: 1400, allon4: 24000 },
  { suburb: "Newcastle", postcode: "2300", state: "NSW", implant: 4500, veneer: 1400, allon4: 23000 },
  
  // Melbourne & Suburbs
  { suburb: "Melbourne CBD", postcode: "3000", state: "VIC", implant: 5400, veneer: 1750, allon4: 27500 },
  { suburb: "Werribee", postcode: "3030", state: "VIC", implant: 4600, veneer: 1350, allon4: 24000 },
  { suburb: "Dandenong", postcode: "3175", state: "VIC", implant: 4550, veneer: 1300, allon4: 23800 },
  { suburb: "Geelong", postcode: "3220", state: "VIC", implant: 4400, veneer: 1300, allon4: 23500 },
  { suburb: "Richmond", postcode: "3121", state: "VIC", implant: 5200, veneer: 1600, allon4: 26500 },
  
  // Other capitals & cities
  { suburb: "Brisbane", postcode: "4000", state: "QLD", implant: 4800, veneer: 1450, allon4: 25000 },
  { suburb: "Perth", postcode: "6000", state: "WA", implant: 4700, veneer: 1400, allon4: 24800 },
  { suburb: "Adelaide", postcode: "5000", state: "SA", implant: 4500, veneer: 1350, allon4: 23500 },
  { suburb: "Canberra", postcode: "2600", state: "ACT", implant: 5300, veneer: 1800, allon4: 27000 },
  { suburb: "Gold Coast", postcode: "4217", state: "QLD", implant: 5000, veneer: 1600, allon4: 25500 }
];

// NKT flat prices in AUD
const NKT_PRICES = {
  implant: 1200,
  veneer: 650,
  allon4: 7425
};

export default function PostalCodeCalculator({ lang }: { lang: string }) {
  const [query, setQuery] = useState("");
  const [selectedLoc, setSelectedLoc] = useState<SuburbData | null>(null);
  const [selectedProcedure, setSelectedProcedure] = useState<"implant" | "veneer" | "allon4">("implant");
  
  // Lead form states
  const [leadName, setLeadName] = useState("");
  const [leadContact, setLeadContact] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSearch = () => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) return;

    // Search by postcode or suburb name
    const match = AUSTRALIAN_LOCATIONS.find(
      loc => loc.postcode === trimmed || loc.suburb.toLowerCase().includes(trimmed)
    );

    if (match) {
      setSelectedLoc(match);
      setFormSubmitted(false);
    } else {
      // Default fallback fallback if not found
      const defaultState = trimmed.match(/^\d+$/) ? "VIC" : "NSW";
      setSelectedLoc({
        suburb: query,
        postcode: trimmed.match(/^\d+$/) ? trimmed : "General",
        state: defaultState,
        implant: 5000,
        veneer: 1500,
        allon4: 25500
      });
      setFormSubmitted(false);
    }
  };

  const handleSubmitLead = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadContact) return;
    setSubmitting(true);

    try {
      const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/v1";
      const payload = {
        name: leadName || "Australian Dental Traveler",
        email: leadContact.includes("@") ? leadContact : "",
        phone: !leadContact.includes("@") ? leadContact : "",
        message: `Calculated savings for ${selectedProcedure} from Suburb/Postcode: ${selectedLoc?.suburb} (${selectedLoc?.postcode}). Wanted to consult on saving AUD.`
      };

      const res = await fetch(`${baseUrl}/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      
      if (res.ok) {
        setFormSubmitted(true);
      }
    } catch (err) {
      console.error("Lead submission error:", err);
    } finally {
      setSubmitting(false);
    }
  };

  const auCost = selectedLoc ? selectedLoc[selectedProcedure] : 5000;
  const nktCost = NKT_PRICES[selectedProcedure];
  const savings = auCost - nktCost;
  const savingsPercent = Math.round((savings / auCost) * 100);

  const procedureLabels = {
    implant: { en: "Single Dental Implant", vn: "Trồng răng Implant đơn lẻ" },
    veneer: { en: "Porcelain Veneer", vn: "Mặt dán sứ Veneer" },
    allon4: { en: "All-on-4 Dental Implants", vn: "Cấy ghép Implant All-on-4" }
  };

  return (
    <div className="bg-gradient-to-br from-[#0b1e2c] via-[#112a3d] to-[#0b1e2c] text-white p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-2xl space-y-6 max-w-4xl mx-auto">
      
      {/* Header */}
      <div className="space-y-2 text-center md:text-left">
        <div className="inline-flex items-center gap-2 bg-teal-brand/20 text-teal-brand border border-teal-brand/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
          <Calculator className="w-3.5 h-3.5" />
          <span>{lang === "VN" ? "Bộ Tính Giá Theo Vùng Địa Lý" : "Regional Price Savings Calculator"}</span>
        </div>
        <h3 className="font-serif text-xl sm:text-2xl font-extrabold">
          {lang === "VN" 
            ? "Kiểm Tra Mức Tiết Kiệm Tại Ngoại Ô Của Bạn" 
            : "Compare Your Suburb's Local Fees vs Hanoi Packages"}
        </h3>
        <p className="text-xs sm:text-sm text-slate-300">
          {lang === "VN"
            ? "Nhập mã bưu chính hoặc tên ngoại ô (Suburb) tại Úc để xem bảng đối chiếu chi phí thực tế."
            : "Type your Australian suburb name or postcode (e.g. Parramatta, Werribee, 2026) to see dynamic savings."}
        </p>
      </div>

      {/* Input controls */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
        
        {/* Suburb Search */}
        <div className="md:col-span-6 relative">
          <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-teal-brand" />
          <input
            type="text"
            placeholder={lang === "VN" ? "Nhập Suburb hoặc Postcode Úc..." : "Enter Suburb or Postcode..."}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            className="w-full pl-10 pr-24 py-3 bg-white/5 border border-slate-700/80 rounded-xl text-sm focus:outline-none focus:border-teal-brand text-white placeholder-slate-400 font-medium"
          />
          <button
            onClick={handleSearch}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-teal-brand hover:bg-teal-brand-dark text-[#0b1e2c] px-4 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer"
          >
            {lang === "VN" ? "Kiểm tra" : "Search"}
          </button>
        </div>

        {/* Procedure Selector */}
        <div className="md:col-span-6 flex gap-2">
          {(["implant", "veneer", "allon4"] as const).map((proc) => (
            <button
              key={proc}
              onClick={() => setSelectedProcedure(proc)}
              className={`flex-1 py-3 px-2 rounded-xl text-[11px] sm:text-xs font-bold uppercase tracking-wider border transition-all cursor-pointer ${
                selectedProcedure === proc
                  ? "bg-teal-brand border-teal-brand text-[#0b1e2c] shadow-md shadow-teal-brand/10"
                  : "bg-white/5 border-slate-700/80 text-slate-300 hover:text-white"
              }`}
            >
              {proc === "implant" ? "Implant" : proc === "veneer" ? "Veneer" : "All-on-4"}
            </button>
          ))}
        </div>

      </div>

      {/* Comparison Display */}
      {selectedLoc ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-white/5 p-5 sm:p-6 rounded-2xl border border-white/10 items-center">
          
          {/* Numbers comparison */}
          <div className="lg:col-span-7 space-y-4">
            <h4 className="font-serif text-base sm:text-lg font-bold flex items-center gap-2 border-b border-white/15 pb-2.5">
              <span className="text-teal-brand">{selectedLoc.suburb} ({selectedLoc.state} {selectedLoc.postcode})</span>
              <span className="text-slate-400 text-xs font-sans font-normal">➔ {procedureLabels[selectedProcedure][lang === "VN" ? "vn" : "en"]}</span>
            </h4>

            <div className="grid grid-cols-2 gap-4 text-center">
              {/* Local Cost */}
              <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest block mb-1">
                  {lang === "VN" ? "Giá Tại Ngoại Ô Úc" : "Local Suburb Fee"}
                </span>
                <span className="text-xl sm:text-2xl font-serif font-extrabold text-rose-400">
                  ${auCost.toLocaleString()} AUD
                </span>
              </div>

              {/* NKT Price */}
              <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest block mb-1">
                  {lang === "VN" ? "Giá Trọn Gói Dental NKT" : "Dental NKT Package"}
                </span>
                <span className="text-xl sm:text-2xl font-serif font-extrabold text-teal-400">
                  ${nktCost.toLocaleString()} AUD
                </span>
              </div>
            </div>

            {/* Savings Callout */}
            <div className="bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-xl flex items-center justify-between gap-3 text-emerald-400">
              <div className="space-y-0.5">
                <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-500/80 block">
                  {lang === "VN" ? "Mức Tiết Kiệm Thực Tế" : "Net Travel Savings"}
                </span>
                <span className="text-lg sm:text-xl font-serif font-extrabold">
                  Save ${savings.toLocaleString()} AUD
                </span>
              </div>
              <span className="bg-emerald-500 text-[#0b1e2c] font-black text-sm px-3 py-1.5 rounded-lg">
                -{savingsPercent}%
              </span>
            </div>
          </div>

          {/* Lead Capture Form */}
          <div className="lg:col-span-5 bg-slate-950/40 p-4 sm:p-5 rounded-xl border border-white/5 space-y-4">
            {formSubmitted ? (
              <div className="text-center py-6 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-teal-brand mx-auto animate-bounce" />
                <h5 className="font-bold text-sm text-white">
                  {lang === "VN" ? "Gửi thông tin thành công!" : "Quote Requested Successfully!"}
                </h5>
                <p className="text-[11px] text-slate-400">
                  {lang === "VN" 
                    ? "Bác sĩ trưởng khoa sẽ phân tích và phản hồi qua email/WhatsApp sớm nhất." 
                    : "Our clinical head doctor will review and email you a custom itemized AUD quote shortly."}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitLead} className="space-y-3">
                <h5 className="text-xs font-bold text-slate-300 uppercase tracking-wide border-b border-white/5 pb-2 text-center lg:text-left">
                  {lang === "VN" ? "Nhận Báo Giá Trọn Gói Chi Tiết" : "Request Written AUD Quote"}
                </h5>
                <div className="space-y-2">
                  <input
                    type="text"
                    required
                    placeholder={lang === "VN" ? "Tên của bạn..." : "Your Name..."}
                    value={leadName}
                    onChange={(e) => setLeadName(e.target.value)}
                    className="w-full bg-white/5 border border-slate-800 rounded-lg py-2 px-3 text-xs focus:outline-none focus:border-teal-brand text-white"
                  />
                  <input
                    type="text"
                    required
                    placeholder={lang === "VN" ? "Email hoặc số WhatsApp..." : "Email or WhatsApp number..."}
                    value={leadContact}
                    onChange={(e) => setLeadContact(e.target.value)}
                    className="w-full bg-white/5 border border-slate-800 rounded-lg py-2 px-3 text-xs focus:outline-none focus:border-teal-brand text-white"
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-teal-brand hover:bg-teal-brand-dark text-[#0b1e2c] py-2 px-4 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
                >
                  {submitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>{lang === "VN" ? "Tư vấn & Nhận báo giá" : "Get Detailed Estimate"}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      ) : (
        /* Empty/placeholder state */
        <div className="border border-dashed border-slate-700/60 p-10 text-center rounded-2xl bg-slate-900/10">
          <Calculator className="w-8 h-8 text-slate-600 mx-auto mb-2" />
          <p className="text-xs text-slate-400 font-medium">
            {lang === "VN"
              ? "Hãy nhập Suburb hoặc mã bưu chính Úc của bạn ở trên để tính toán mức chênh lệch chi phí."
              : "Search your suburb above to check dental cost indexes in your area vs Vietnam."}
          </p>
        </div>
      )}

    </div>
  );
}
