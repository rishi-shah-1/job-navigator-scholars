import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  GraduationCap,
  Building2, 
  ClipboardCheck, 
  BookOpen,
  MessageSquare,
  MapPin,
  Bell,
  Brain,
  ListTodo,
  Calendar,
  HelpCircle,
  Trophy,
  BookOpenCheck 
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { t } = useLanguage();

  const features = [
    {
      icon: <Building2 className="h-8 w-8 text-[#003087]" />,
      title: "Employer Profiles",
      description: "Browse trusted employers",
      link: "/employers"
    },
    {
      icon: <ClipboardCheck className="h-8 w-8 text-[#003087]" />,
      title: "Resume Builder",
      description: "Create professional resumes",
      link: "/resume-builder"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-[#003087]" />,
      title: "Opportunities",
      description: "Access jobs and internships",
      link: "/jobs"
    },
    {
      icon: <Trophy className="h-8 w-8 text-[#003087]" />,
      title: "Success Stories",
      description: "Read graduate testimonials",
      link: "/success-stories"
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-[#003087]" />,
      title: "Live Support",
      description: "Get help",
      link: "/support"
    },
    {
      icon: <MapPin className="h-8 w-8 text-[#003087]" />,
      title: "Interactive Map",
      description: "Find opportunities",
      link: "/map"
    },
    {
      icon: <Brain className="h-8 w-8 text-[#003087]" />,
      title: "Smart Matching",
      description: "Get personalized recommendations",
      link: "/recommendations"
    },
    {
      icon: <Bell className="h-8 w-8 text-[#003087]" />,
      title: "Instant Alerts",
      description: "Never miss opportunities",
      link: "/alerts"
    },
    {
      icon: <ListTodo className="h-8 w-8 text-[#003087]" />,
      title: "Application Tracker",
      description: "Track applications",
      link: "/applications"
    },
    {
      icon: <Calendar className="h-8 w-8 text-[#003087]" />,
      title: "Guidance Events",
      description: "Register for workshops",
      link: "/events"
    },
    {
      icon: <BookOpenCheck className="h-8 w-8 text-[#003087]" />,
      title: "Online Courses",
      description: "Access certifications & training",
      link: "/courses"
    }
  ];

  const faqs = [
    {
      question: "How do I get a work permit?",
      answer: "Visit the guidance office to pick up a work permit application. You'll need parent/guardian consent, a job offer, and proof of age. The process typically takes 3 business days."
    },
    {
      question: "What jobs can I work at 16?",
      answer: "At 16, you can work in retail, food service, offices, and other non-hazardous environments. There are restrictions on hours and certain tasks. Check the Work Permits page for details."
    },
    {
      question: "How many hours can I work during school?",
      answer: "Students 16-17 years old can work up to 8 hours per day, maximum 40 hours per week. During school days, you cannot work during school hours or past 7 PM."
    },
    {
      question: "Do I need to maintain certain grades to work?",
      answer: "Yes, you must maintain satisfactory academic performance. Your work permit can be revoked if your grades drop significantly."
    }
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)]">
      <div className="bg-gradient-to-b from-[#003087]/10 to-transparent">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <GraduationCap className="h-12 w-12 text-[#003087] mr-4 animate-bounce" />
              <h1 className="text-4xl sm:text-5xl font-bold text-[#003087]">
                {t("SWMHS Career Center")}
              </h1>
            </div>
            <p className="text-lg text-gray-600 mb-8">
              {t("Discover exclusive job opportunities")}
            </p>
            
            <div className="max-w-xl mx-auto flex gap-4 mb-12">
              <Input
                type="text"
                placeholder={t("Search for jobs, internships, or scholarships...")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-12"
              />
              <Link to={`/jobs?search=${searchQuery}`}>
                <Button className="h-12 px-6 bg-[#003087] hover:bg-[#002065]">
                  <Search className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left mb-16">
            {features.map((feature, index) => (
              <Link to={feature.link} key={index}>
                <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow h-full transform hover:scale-105 duration-200">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{t(feature.title)}</h3>
                  <p className="text-gray-600 text-sm">{t(feature.description)}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center gap-2 mb-6">
              <HelpCircle className="h-6 w-6 text-[#003087]" />
              <h2 className="text-2xl font-bold text-[#003087]">{t("Frequently Asked Questions")}</h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {t(faq.question)}
                  </AccordionTrigger>
                  <AccordionContent>
                    {t(faq.answer)}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
