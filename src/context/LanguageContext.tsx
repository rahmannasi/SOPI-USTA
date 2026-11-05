import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '../types';
import { translations } from '../translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.tr;
  isRtl: boolean;
  dir: 'rtl' | 'ltr';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('sopi_lang') as Language;
      if (saved === 'tr' || saved === 'fa' || saved === 'en') {
        return saved;
      }
    }
    return 'tr';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('sopi_lang', lang);
    }
  };

  const isRtl = language === 'fa';
  const dir: 'rtl' | 'ltr' = isRtl ? 'rtl' : 'ltr';

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
      document.documentElement.dir = dir;
      if (isRtl) {
        document.body.classList.add('font-vazir');
      } else {
        document.body.classList.remove('font-vazir');
      }
    }
  }, [language, dir, isRtl]);

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language],
    isRtl,
    dir
  };

  return (
    <LanguageContext.Provider value={value}>
      <div dir={dir} className={isRtl ? 'font-vazir' : ''}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
