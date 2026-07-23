"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { dictionary } from "../constants/dictionary";

export type Language = "AU" | "VN";

interface LanguageContextProps {
  lang: Language;
  setLang: (lang: Language) => void;
  t: typeof dictionary.AU;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>("AU");

  useEffect(() => {
    const savedLang = localStorage.getItem("dental_lang_v2");
    if (savedLang === "AU" || savedLang === "VN") {
      setLang(savedLang as Language);
    }
  }, []);

  const handleSetLang = (newLang: Language) => {
    setLang(newLang);
    try {
      localStorage.setItem("dental_lang_v2", newLang);
    } catch (e) {
      console.warn("localStorage not available", e);
    }
  };

  // Safe fallback to AU keys if any key is missing (though they should be fully translated)
  const t = dictionary[lang] || dictionary.AU;

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
