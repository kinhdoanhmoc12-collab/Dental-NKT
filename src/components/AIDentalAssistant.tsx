"use client";

import React, { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Send, Bot, Sparkles } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface ChatMessage {
  sender: "bot" | "user";
  text: string;
  timestamp: string;
}

export default function AIDentalAssistant() {
  const { lang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<"concern" | "teeth" | "calculation" | "form" | "done">("concern");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [showOptions, setShowOptions] = useState(true);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [selectedConcern, setSelectedConcern] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Localization strings
  const strings = {
    VN: {
      botName: "Trợ Lý Nha Khoa AI",
      welcome: "Xin chào! Tôi là Trợ Lý AI của Nha Khoa Trẻ. Tôi có thể giúp gì cho bạn hôm nay?",
      concernPrompt: "Bạn đang quan tâm đến dịch vụ nào sau đây?",
      restoration: "Trồng răng Implant / Cầu răng",
      veneers: "Thẩm mỹ răng sứ Veneers",
      crooked: "Niềng răng Invisalign",
      general: "Khám & Điều trị tổng quát",
      selectQty: "Vui lòng chọn số lượng răng bạn cần điều trị:",
      single: "Mất 1 răng",
      multiple: "Mất nhiều răng",
      allon4: "Mất toàn hàm (All-on-4)",
      calcTitle: "Dự toán chi phí & Tiết kiệm của bạn:",
      savingsResult: (concern: string, qty: string) => {
        if (concern === "implant") {
          if (qty === "allon4") {
            return "Tại Úc: ~$35,000 AUD/hàm. Tại Dental NTK: $8,675 AUD (160.000.000đ). Bạn tiết kiệm được hơn $26,000 AUD (~480 triệu VNĐ) cho mỗi hàm!";
          }
          return "Tại Úc: ~$5,000 AUD/răng. Tại Dental NTK: chỉ từ $1,368 AUD (25.200.000đ). Bạn tiết kiệm đến 70% chi phí điều trị!";
        }
        return "Tại Úc: ~$2,000 AUD/răng. Tại Dental NTK: chỉ từ $650 AUD (12.000.000đ). Tiết kiệm hơn 65% với chất lượng chuẩn châu Âu!";
      },
      nextStep: "Bạn có muốn gửi thông tin để bác sĩ lập phác đồ điều trị miễn phí không?",
      btnYes: "Đăng ký nhận phác đồ miễn phí",
      btnRestart: "Hỏi câu khác",
      formTitle: "Nhập thông tin nhận phác đồ:",
      placeholderName: "Họ và tên của bạn",
      placeholderEmail: "Địa chỉ Email",
      placeholderPhone: "Số điện thoại liên hệ",
      btnSubmit: "Gửi yêu cầu ngay",
      thankYou: "Cảm ơn bạn! Thông tin đã được gửi tới bác sĩ phụ trách. Chúng tôi sẽ liên hệ lại với bạn sớm nhất qua Email/WhatsApp.",
    },
    AU: {
      botName: "AI Dental Assistant",
      welcome: "Hello! I am Dental NTK's AI Assistant. How can I help you with your smile today?",
      concernPrompt: "Please select the treatment you are interested in:",
      restoration: "Dental Implants / Bridges",
      veneers: "Cosmetic Veneers",
      crooked: "Invisalign Alignment",
      general: "Checkup & General Dental",
      selectQty: "Please select the scale of your treatment:",
      single: "Single tooth",
      multiple: "Multiple teeth",
      allon4: "Full Arch (All-on-4)",
      calcTitle: "Your Live Savings Estimation:",
      savingsResult: (concern: string, qty: string) => {
        if (concern === "implant") {
          if (qty === "allon4") {
            return "In Australia: ~$35,000 AUD/arch. At Dental NTK: only $8,675 AUD. You save over $26,000 AUD per arch!";
          }
          return "In Australia: ~$5,000 AUD/tooth. At Dental NTK: from $1,368 AUD. You save up to 70% on premium implants!";
        }
        return "In Australia: ~$2,000 AUD/tooth. At Dental NTK: from $650 AUD. You save over 65% with official global warranties!";
      },
      nextStep: "Would you like our chief dentist to create a free pre-travel treatment plan for you?",
      btnYes: "Yes, request free treatment plan",
      btnRestart: "Start over",
      formTitle: "Fill in details to receive plan:",
      placeholderName: "Your full name",
      placeholderEmail: "Your email address",
      placeholderPhone: "Your phone number (with country code)",
      btnSubmit: "Submit request",
      thankYou: "Thank you! Your inquiry has been forwarded to our lead clinician. We will contact you via Email/WhatsApp shortly.",
    }
  };

  const currentStrings = lang === "VN" ? strings.VN : strings.AU;

  useEffect(() => {
    // Initialize first bot message
    if (messages.length === 0) {
      setMessages([
        {
          sender: "bot",
          text: currentStrings.welcome,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    }
  }, [lang]);

  useEffect(() => {
    // Auto-scroll to bottom of chat
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const addMessage = (sender: "bot" | "user", text: string) => {
    setMessages(prev => [
      ...prev,
      {
        sender,
        text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  };

  const handleConcernSelect = (concern: "implant" | "veneers" | "invisalign" | "general", label: string) => {
    addMessage("user", label);
    setSelectedConcern(concern);
    setShowOptions(false);

    setTimeout(() => {
      if (concern === "implant") {
        addMessage("bot", currentStrings.selectQty);
        setStep("teeth");
        setShowOptions(true);
      } else {
        const result = currentStrings.savingsResult(concern, "single");
        addMessage("bot", `${currentStrings.calcTitle}\n\n${result}\n\n${currentStrings.nextStep}`);
        setStep("calculation");
        setShowOptions(true);
      }
    }, 600);
  };

  const handleTeethSelect = (qty: "single" | "multiple" | "allon4", label: string) => {
    addMessage("user", label);
    setShowOptions(false);

    setTimeout(() => {
      const result = currentStrings.savingsResult("implant", qty);
      addMessage("bot", `${currentStrings.calcTitle}\n\n${result}\n\n${currentStrings.nextStep}`);
      setStep("calculation");
      setShowOptions(true);
    }, 600);
  };

  const handleProceedToForm = () => {
    addMessage("user", currentStrings.btnYes);
    setShowOptions(false);

    setTimeout(() => {
      addMessage("bot", currentStrings.formTitle);
      setStep("form");
    }, 600);
  };

  const handleRestart = () => {
    addMessage("user", currentStrings.btnRestart);
    setShowOptions(false);
    
    setTimeout(() => {
      setStep("concern");
      setMessages([
        {
          sender: "bot",
          text: currentStrings.welcome,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
      setShowOptions(true);
    }, 600);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;

    addMessage("user", `${formData.name} - ${formData.email}`);
    setStep("done");

    // Send data to leads API
    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("country", lang === "VN" ? "Vietnam" : "Australia");
    data.append("treatment_interest", selectedConcern);
    data.append("message", "Sent via Interactive AI Intake Assistant");

    try {
      await fetch("/api/leads", {
        method: "POST",
        body: data
      });
    } catch (err) {
      console.error("AI Intake lead submission failed", err);
    }

    setTimeout(() => {
      addMessage("bot", currentStrings.thankYou);
    }, 600);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Floating Chat Window */}
      {isOpen && (
        <div className="w-[340px] sm:w-[380px] h-[500px] bg-white rounded-3xl shadow-2xl border border-slate-200/80 flex flex-col overflow-hidden mb-4 animate-fade-in text-slate-800">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#0b1e2c] to-[#0f2a3f] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-teal-brand flex items-center justify-center text-[#0b1e2c]">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold tracking-wide flex items-center gap-1">
                  {currentStrings.botName}
                  <Sparkles className="w-3.5 h-3.5 text-gold-brand animate-pulse" />
                </h4>
                <span className="text-[10px] text-teal-brand-light flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Online - Clinical Intake
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.map((m, index) => (
              <div
                key={index}
                className={`flex gap-2 max-w-[85%] ${
                  m.sender === "user" ? "ml-auto flex-row-reverse" : ""
                }`}
              >
                {m.sender === "bot" && (
                  <div className="w-6 h-6 rounded-full bg-[#0b1e2c] flex items-center justify-center text-white text-[10px] shrink-0">
                    AI
                  </div>
                )}
                <div
                  className={`p-3 rounded-2xl text-xs leading-relaxed whitespace-pre-line ${
                    m.sender === "user"
                      ? "bg-teal-brand text-[#0b1e2c] font-semibold rounded-tr-none"
                      : "bg-white text-slate-800 border border-slate-200/60 shadow-sm rounded-tl-none"
                  }`}
                >
                  {m.text}
                  <span className="block text-[8px] text-slate-400 mt-1 text-right">
                    {m.timestamp}
                  </span>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Interactive Options / Form Area */}
          <div className="p-4 bg-white border-t border-slate-100 flex flex-col gap-2">
            {showOptions && step === "concern" && (
              <div className="flex flex-col gap-1.5">
                <button
                  type="button"
                  onClick={() => handleConcernSelect("implant", currentStrings.restoration)}
                  className="w-full text-left py-2 px-3 bg-slate-50 hover:bg-teal-brand-light border border-slate-200/50 hover:border-teal-brand/40 text-xs font-semibold rounded-xl text-slate-700 hover:text-[#0b1e2c] transition-all cursor-pointer"
                >
                  🎯 {currentStrings.restoration}
                </button>
                <button
                  type="button"
                  onClick={() => handleConcernSelect("veneers", currentStrings.veneers)}
                  className="w-full text-left py-2 px-3 bg-slate-50 hover:bg-teal-brand-light border border-slate-200/50 hover:border-teal-brand/40 text-xs font-semibold rounded-xl text-slate-700 hover:text-[#0b1e2c] transition-all cursor-pointer"
                >
                  💎 {currentStrings.veneers}
                </button>
                <button
                  type="button"
                  onClick={() => handleConcernSelect("invisalign", currentStrings.crooked)}
                  className="w-full text-left py-2 px-3 bg-slate-50 hover:bg-teal-brand-light border border-slate-200/50 hover:border-teal-brand/40 text-xs font-semibold rounded-xl text-slate-700 hover:text-[#0b1e2c] transition-all cursor-pointer"
                >
                  🦷 {currentStrings.crooked}
                </button>
                <button
                  type="button"
                  onClick={() => handleConcernSelect("general", currentStrings.general)}
                  className="w-full text-left py-2 px-3 bg-slate-50 hover:bg-teal-brand-light border border-slate-200/50 hover:border-teal-brand/40 text-xs font-semibold rounded-xl text-slate-700 hover:text-[#0b1e2c] transition-all cursor-pointer"
                >
                  🏥 {currentStrings.general}
                </button>
              </div>
            )}

            {showOptions && step === "teeth" && (
              <div className="flex flex-col gap-1.5">
                <button
                  type="button"
                  onClick={() => handleTeethSelect("single", currentStrings.single)}
                  className="w-full text-left py-2 px-3 bg-slate-50 hover:bg-teal-brand-light border border-slate-200/50 hover:border-teal-brand/40 text-xs font-semibold rounded-xl text-slate-700 hover:text-[#0b1e2c] transition-all cursor-pointer"
                >
                  🦷 {currentStrings.single}
                </button>
                <button
                  type="button"
                  onClick={() => handleTeethSelect("multiple", currentStrings.multiple)}
                  className="w-full text-left py-2 px-3 bg-slate-50 hover:bg-teal-brand-light border border-slate-200/50 hover:border-teal-brand/40 text-xs font-semibold rounded-xl text-slate-700 hover:text-[#0b1e2c] transition-all cursor-pointer"
                >
                  🦷🦷 {currentStrings.multiple}
                </button>
                <button
                  type="button"
                  onClick={() => handleTeethSelect("allon4", currentStrings.allon4)}
                  className="w-full text-left py-2 px-3 bg-slate-50 hover:bg-teal-brand-light border border-slate-200/50 hover:border-teal-brand/40 text-xs font-semibold rounded-xl text-slate-700 hover:text-[#0b1e2c] transition-all cursor-pointer"
                >
                  ✨ {currentStrings.allon4}
                </button>
              </div>
            )}

            {showOptions && step === "calculation" && (
              <div className="flex flex-col gap-1.5">
                <button
                  type="button"
                  onClick={handleProceedToForm}
                  className="w-full text-center py-2.5 px-3 bg-[#0b1e2c] text-white hover:bg-teal-brand hover:text-[#0b1e2c] text-xs font-bold rounded-xl transition-all cursor-pointer shadow-md"
                >
                  📝 {currentStrings.btnYes}
                </button>
                <button
                  type="button"
                  onClick={handleRestart}
                  className="w-full text-center py-2 px-3 bg-slate-50 hover:bg-slate-100 border border-slate-200/50 text-xs font-semibold rounded-xl text-slate-500 hover:text-slate-800 transition-all cursor-pointer"
                >
                  🔄 {currentStrings.btnRestart}
                </button>
              </div>
            )}

            {step === "form" && (
              <form onSubmit={handleFormSubmit} className="flex flex-col gap-2">
                <input
                  type="text"
                  required
                  placeholder={currentStrings.placeholderName}
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-teal-brand focus:ring-1 focus:ring-teal-brand text-slate-800 bg-white"
                />
                <input
                  type="email"
                  required
                  placeholder={currentStrings.placeholderEmail}
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-teal-brand focus:ring-1 focus:ring-teal-brand text-slate-800 bg-white"
                />
                <input
                  type="tel"
                  required
                  placeholder={currentStrings.placeholderPhone}
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-teal-brand focus:ring-1 focus:ring-teal-brand text-slate-800 bg-white"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 bg-teal-brand hover:bg-teal-brand-hover text-[#0b1e2c] text-xs font-bold rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  {currentStrings.btnSubmit}
                </button>
              </form>
            )}

            {step === "done" && (
              <button
                type="button"
                onClick={handleRestart}
                className="w-full text-center py-2.5 px-3 bg-slate-50 hover:bg-slate-100 border border-slate-200/50 text-xs font-bold rounded-xl text-slate-700 transition-all cursor-pointer"
              >
                🔄 {currentStrings.btnRestart}
              </button>
            )}
          </div>
        </div>
      )}

      {/* Floating Chat Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-gradient-to-r from-teal-brand to-[#0093a8] text-[#0b1e2c] hover:text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 cursor-pointer border border-white/20 relative group"
        aria-label="Toggle AI Dental Assistant"
      >
        <MessageSquare className="w-6 h-6" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white flex items-center justify-center">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
        </span>
        
        {/* Tooltip */}
        <span className="absolute right-16 bg-[#0b1e2c] text-white text-[10px] font-bold py-1 px-3 rounded-lg whitespace-nowrap shadow-md border border-slate-700/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          {lang === "VN" ? "Trợ lý AI Nha khoa" : "Dental AI Assistant"}
        </span>
      </button>
    </div>
  );
}
