
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export const LANGUAGES = {
  en: { code: 'en', name: 'English' },
  es: { code: 'es', name: 'Español' },
  hi: { code: 'hi', name: 'हिन्दी' },
  mr: { code: 'mr', name: 'मराठी' },
  de: { code: 'de', name: 'Deutsch' },
  fr: { code: 'fr', name: 'Français' },
  gu: { code: 'gu', name: 'ગુજરાતી' },
  it: { code: 'it', name: 'Italiano' }
};

export type LanguageCode = keyof typeof LANGUAGES;

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { toast } = useToast();
  const [language, setLanguageState] = useState<LanguageCode>(() => {
    const saved = localStorage.getItem('preferred-language') as LanguageCode;
    if (saved && LANGUAGES[saved]) return saved;
    
    const browserLang = navigator.language.split('-')[0] as LanguageCode;
    return LANGUAGES[browserLang] ? browserLang : 'en';
  });

  const setLanguage = (lang: LanguageCode) => {
    setLanguageState(lang);
    localStorage.setItem('preferred-language', lang);
    toast({
      title: "Language Changed",
      description: `Language set to ${LANGUAGES[lang].name}`,
      duration: 3000,
    });
  };

  // Simple translation function (expand this with a proper i18n system)
  const t = (key: string): string => {
    // This is a placeholder. In a real app, you'd have proper translations
    return key;
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
