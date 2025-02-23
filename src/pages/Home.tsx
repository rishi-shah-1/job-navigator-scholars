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
  Presentation,
  Phone,
  Mail,
  User
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const features = [
    {
      icon: <Building2 className="h-8 w-8 text-[#003087]" />,
      title: "Employer Profiles",
      description: "Browse trusted employers with ratings and reviews from your peers",
      link: "/employers"
    },
    {
      icon: <ClipboardCheck className="h-8 w-8 text-[#003087]" />,
      title: "Resume Builder",
      description: "Create professional resumes with our guided builder",
      link: "/resume-builder"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-[#003087]" />,
      title: "Opportunities",
      description: "Access jobs, internships, and scholarships in one place",
      link: "/jobs"
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-[#003087]" />,
      title: "Live Support",
      description: "Get help from our guidance team when you need it",
      link: "/support"
    },
    {
      icon: <MapPin className="h-8 w-8 text-[#003087]" />,
      title: "Interactive Map",
      description: "Find opportunities near Sayreville",
      link: "/map"
    },
    {
      icon: <Brain className="h-8 w-8 text-[#003087]" />,
      title: "Smart Matching",
      description: "Get personalized job recommendations",
      link: "/recommendations"
    },
    {
      icon: <Bell className="h-8 w-8 text-[#003087]" />,
      title: "Instant Alerts",
      description: "Never miss new opportunities",
      link: "/alerts"
    },
    {
      icon: <ListTodo className="h-8 w-8 text-[#003087]" />,
      title: "Application Tracker",
      description: "Track all your applications in one place",
      link: "/applications"
    },
    {
      icon: <Presentation className="h-8 w-8 text-[#003087]" />,
      title: "Online Courses",
      description: "Access free courses and certifications from top platforms",
      link: "/courses"
    },
    {
      icon: <Calendar className="h-8 w-8 text-[#003087]" />,
      title: "Guidance Events",
      description: "Register for workshops and career development events",
      link: "/events"
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
              <GraduationCap className="h-12 w-12 text-[#003087] mr-4" />
              <h1 className="text-4xl sm:text-5xl font-bold text-[#003087]">
                SWMHS Career Center
              </h1>
            </div>
            <p className="text-lg text-gray-600 mb-8">
              Discover exclusive job opportunities curated for Sayreville War Memorial High School students by your guidance department.
            </p>
            
            <div className="max-w-xl mx-auto flex gap-4 mb-12">
              <Input
                type="text"
                placeholder="Search for jobs, internships, or scholarships..."
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
                <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow h-full">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center gap-2 mb-6">
              <HelpCircle className="h-6 w-6 text-[#003087]" />
              <h2 className="text-2xl font-bold text-[#003087]">Frequently Asked Questions</h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    {faq.answer}
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
