import React, { createContext, useContext, useEffect, useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export const LANGUAGES = {
  en: { name: 'English' },
  es: { name: 'Español' },
  hi: { name: 'हिन्दी' },
  gu: { name: 'ગુજરાતી' },
  de: { name: 'Deutsch' },
  fr: { name: 'Français' }
} as const;

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
  },
  hi: {
    "Search for jobs, internships, or scholarships...": "नौकरियों, इंटर्नशिप या छात्रवृत्ति की खोज करें...",
    "SWMHS Career Center": "SWMHS करियर केंद्र",
    "Discover exclusive job opportunities": "छात्रों के लिए विशेष नौकरी के अवसर खोजें",
    "Employer Profiles": "नियोक्ता प्रोफाइल",
    "Resume Builder": "रिज्यूमे बिल्डर",
    "Opportunities": "अवसर",
    "Live Support": "लाइव सहायता",
    "Interactive Map": "इंटरैक्टिव मैप",
    "Smart Matching": "स्मार्ट मैचिंग",
    "Instant Alerts": "तत्काल सूचनाएं",
    "Application Tracker": "आवेदन ट्रैकर",
    "Online Courses": "ऑनलाइन कोर्स",
    "Guidance Events": "मार्गदर्शन कार्यक्रम",
    "Browse trusted employers": "विश्वसनीय नियोक्ताओं को देखें",
    "Create professional resumes": "पेशेवर रिज्यूमे बनाएं",
    "Access jobs and internships": "नौकरियां और इंटर्नशिप देखें",
    "Get help": "सहायता प्राप्त करें",
    "Find opportunities": "अवसर खोजें",
    "Get personalized recommendations": "व्यक्तिगत सिफारिशें प्राप्त करें",
    "Never miss opportunities": "कोई अवसर न छूटे",
    "Track applications": "आवेदनों को ट्रैक करें",
    "Access free courses": "मुफ्त कोर्स का लाभ उठाएं",
    "Register for workshops": "कार्यशालाओं के लिए पंजीकरण करें",
    "Frequently Asked Questions": "अक्सर पूछे जाने वाले प्रश्न",
    "Submit Job": "नौकरी जमा करें",
    "School Map": "स्कूल का नक्शा",
    "Job Listings": "नौकरी सूची",
    "Courses": "पाठ्यक्रम",
    "Events": "कार्यक्रम",
    "Reviews": "समीक्षाएं",
    "Permits": "परमिट",
    "Insights": "अंतर्दृष्टि",
    "Search": "खोजें"
  },
  gu: {
    "Search for jobs, internships, or scholarships...": "નોકરીઓ, ઇન્ટર્નશિપ અથવા સ્કોલરશિપ માટે શોધો...",
    "SWMHS Career Center": "SWMHS કારકિર્દી કેન્દ્ર",
    "Discover exclusive job opportunities": "વિદ્યાર્થીઓ માટે ખાસ નોકરીની તકો શોધો",
    "Employer Profiles": "નિયોક્તા પ્રોફાઇલ",
    "Resume Builder": "રેઝ્યુમે બિલ્ડર",
    "Opportunities": "તકો",
    "Live Support": "લાઇવ સપોર્ટ",
    "Interactive Map": "ઇન્ટરેક્ટિવ નકશો",
    "Smart Matching": "સ્માર્ટ મેચિંગ",
    "Instant Alerts": "તાત્કાલિક અલર્ટ્સ",
    "Application Tracker": "એપ્લિકેશન ટ્રેકર",
    "Online Courses": "ઓનલાઇન કોર્સ",
    "Guidance Events": "માર્ગદર્શન કાર્યક્રમો",
    "Browse trusted employers": "વિશ્વસનીય નિયોક્તાઓ જુઓ",
    "Create professional resumes": "વ્યાવસાયિક રેઝ્યુમે બનાવો",
    "Access jobs and internships": "નોકરીઓ અને ઇન્ટર્નશિપ જુઓ",
    "Get help": "મદદ મેળવો",
    "Find opportunities": "તકો શોધો",
    "Get personalized recommendations": "વ્યક્તિગત ભલામણો મેળવો",
    "Never miss opportunities": "તકો ન ચૂકો",
    "Track applications": "એપ્લિકેશન્સ ટ્રૅક કરો",
    "Access free courses": "મફત કોર્સ મેળવો",
    "Register for workshops": "વર્કશોપ માટે નોંધણી કરો",
    "Frequently Asked Questions": "વારંવાર પૂછાતા પ્રશ્નો",
    "Submit Job": "નોકરી સબમિટ કરો",
    "School Map": "શાળાનો નકશો",
    "Job Listings": "નોકરીની યાદી",
    "Courses": "અભ્યાસક્રમો",
    "Events": "કાર્યક્રમો",
    "Reviews": "સમીક્ષાઓ",
    "Permits": "પરમિટ્સ",
    "Insights": "અંતર્દૃષ્ટિ",
    "Search": "શોધો"
  },
  de: {
    "Search for jobs, internships, or scholarships...": "Suche nach Jobs, Praktika oder Stipendien...",
    "SWMHS Career Center": "SWMHS Karrierezentrum",
    "Discover exclusive job opportunities": "Entdecke exklusive Jobmöglichkeiten für Schüler",
    "Employer Profiles": "Arbeitgeberprofile",
    "Resume Builder": "Lebenslauf-Generator",
    "Opportunities": "Möglichkeiten",
    "Live Support": "Live-Support",
    "Interactive Map": "Interaktive Karte",
    "Smart Matching": "Intelligentes Matching",
    "Instant Alerts": "Sofortige Benachrichtigungen",
    "Application Tracker": "Bewerbungsverfolger",
    "Online Courses": "Online-Kurse",
    "Guidance Events": "Beratungsveranstaltungen",
    "Browse trusted employers": "Vertrauenswürdige Arbeitgeber durchsuchen",
    "Create professional resumes": "Professionelle Lebensläufe erstellen",
    "Access jobs and internships": "Zugang zu Jobs und Praktika",
    "Get help": "Hilfe erhalten",
    "Find opportunities": "Chancen finden",
    "Get personalized recommendations": "Personalisierte Empfehlungen erhalten",
    "Never miss opportunities": "Keine Chancen verpassen",
    "Track applications": "Bewerbungen verfolgen",
    "Access free courses": "Zugang zu kostenlosen Kursen",
    "Register for workshops": "Für Workshops anmelden",
    "Frequently Asked Questions": "Häufig gestellte Fragen",
    "Submit Job": "Job einreichen",
    "School Map": "Schulkarte",
    "Job Listings": "Stellenangebote",
    "Courses": "Kurse",
    "Events": "Veranstaltungen",
    "Reviews": "Bewertungen",
    "Permits": "Genehmigungen",
    "Insights": "Einblicke",
    "Search": "Suchen"
  },
  fr: {
    "Search for jobs, internships, or scholarships...": "Rechercher des emplois, stages ou bourses...",
    "SWMHS Career Center": "Centre de Carrière SWMHS",
    "Discover exclusive job opportunities": "Découvrez des opportunités d'emploi exclusives pour les étudiants",
    "Employer Profiles": "Profils d'Employeurs",
    "Resume Builder": "Créateur de CV",
    "Opportunities": "Opportunités",
    "Live Support": "Support en Direct",
    "Interactive Map": "Carte Interactive",
    "Smart Matching": "Correspondance Intelligente",
    "Instant Alerts": "Alertes Instantanées",
    "Application Tracker": "Suivi des Candidatures",
    "Online Courses": "Cours en Ligne",
    "Guidance Events": "Événements d'Orientation",
    "Browse trusted employers": "Parcourir les employeurs de confiance",
    "Create professional resumes": "Créer des CV professionnels",
    "Access jobs and internships": "Accéder aux emplois et stages",
    "Get help": "Obtenir de l'aide",
    "Find opportunities": "Trouver des opportunités",
    "Get personalized recommendations": "Obtenir des recommandations personnalisées",
    "Never miss opportunities": "Ne manquez aucune opportunité",
    "Track applications": "Suivre les candidatures",
    "Access free courses": "Accéder aux cours gratuits",
    "Register for workshops": "S'inscrire aux ateliers",
    "Frequently Asked Questions": "Questions Fréquentes",
    "Submit Job": "Soumettre une Offre",
    "School Map": "Plan de l'École",
    "Job Listings": "Offres d'Emploi",
    "Courses": "Cours",
    "Events": "Événements",
    "Reviews": "Avis",
    "Permits": "Permis",
    "Insights": "Analyses",
    "Search": "Rechercher"
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
      description: `Language set to ${LANGUAGES[lang].name}`,
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
