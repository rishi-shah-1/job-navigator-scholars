
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useToast } from '@/hooks/use-toast';

// Expanded translations
const translations = {
  en: {
    "Search for jobs, internships, or scholarships...": "Search for jobs, internships, or scholarships...",
    "SWMHS Career Center": "SWMHS Career Center",
    "Discover exclusive job opportunities": "Discover exclusive job opportunities curated for Sayreville War Memorial High School students",
    "Employer Profiles": "Employer Profiles",
    "Resume Builder": "Resume Builder",
    "Opportunities": "Opportunities",
    "Live Support": "Live Support",
    "Interactive Map": "Interactive Map",
    "Smart Matching": "Smart Matching",
    "Instant Alerts": "Instant Alerts",
    "Application Tracker": "Application Tracker",
    "Online Courses": "Online Courses",
    "Guidance Events": "Guidance Events",
    "Browse trusted employers": "Browse trusted employers with ratings and reviews",
    "Create professional resumes": "Create professional resumes with our guided builder",
    "Access jobs and internships": "Access jobs, internships, and scholarships in one place",
    "Get help": "Get help from our guidance team when you need it",
    "Find opportunities": "Find opportunities near Sayreville",
    "Get personalized recommendations": "Get personalized job recommendations",
    "Never miss opportunities": "Never miss new opportunities",
    "Track applications": "Track all your applications in one place",
    "Access free courses": "Access free courses and certifications",
    "Register for workshops": "Register for workshops and career events",
    "Frequently Asked Questions": "Frequently Asked Questions",
    "Submit Job": "Submit Job",
    "School Map": "School Map",
    "Job Listings": "Job Listings",
    "Courses": "Courses",
    "Events": "Events",
    "Reviews": "Reviews",
    "Permits": "Permits",
    "Insights": "Insights",
    "Search": "Search"
  },
  es: {
    "Search for jobs, internships, or scholarships...": "Buscar trabajos, prácticas o becas...",
    "SWMHS Career Center": "Centro de Carreras SWMHS",
    "Discover exclusive job opportunities": "Descubre oportunidades laborales exclusivas para estudiantes",
    "Employer Profiles": "Perfiles de Empleadores",
    "Resume Builder": "Creador de Currículum",
    "Opportunities": "Oportunidades",
    "Live Support": "Soporte en Vivo",
    "Interactive Map": "Mapa Interactivo",
    "Smart Matching": "Coincidencia Inteligente",
    "Instant Alerts": "Alertas Instantáneas",
    "Application Tracker": "Seguimiento de Solicitudes",
    "Online Courses": "Cursos en Línea",
    "Guidance Events": "Eventos de Orientación",
    "Browse trusted employers": "Explora empleadores confiables con calificaciones",
    "Create professional resumes": "Crea currículums profesionales con nuestra guía",
    "Access jobs and internships": "Accede a trabajos, prácticas y becas",
    "Get help": "Obtén ayuda de nuestro equipo de orientación",
    "Find opportunities": "Encuentra oportunidades cerca de Sayreville",
    "Get personalized recommendations": "Obtén recomendaciones personalizadas",
    "Never miss opportunities": "Nunca pierdas nuevas oportunidades",
    "Track applications": "Rastrea todas tus solicitudes",
    "Access free courses": "Accede a cursos y certificaciones gratuitas",
    "Register for workshops": "Regístrate para talleres y eventos",
    "Frequently Asked Questions": "Preguntas Frecuentes",
    "Submit Job": "Publicar Trabajo",
    "School Map": "Mapa Escolar",
    "Job Listings": "Listado de Trabajos",
    "Courses": "Cursos",
    "Events": "Eventos",
    "Reviews": "Reseñas",
    "Permits": "Permisos",
    "Insights": "Información",
    "Search": "Buscar"
  }
};

export type LanguageCode = keyof typeof translations;

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
    return (saved && translations[saved]) ? saved : 'en';
  });

  const setLanguage = (lang: LanguageCode) => {
    setLanguageState(lang);
    localStorage.setItem('preferred-language', lang);
    toast({
      title: "Language Changed",
      description: `Language set to ${lang === 'en' ? 'English' : 'Español'}`,
      duration: 3000,
    });
  };

  const t = (key: string): string => {
    return translations[language]?.[key] || key;
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
