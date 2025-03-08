
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Briefcase, 
  BookOpen, 
  Calendar,
  Building2,
  FileText,
  TrendingUp,
  ArrowLeft,
  Menu,
  X
} from "lucide-react";
import { LanguageSelector } from "./LanguageSelector";
import { useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = [
    { path: "/map", icon: MapPin, label: "School Map" },
    { path: "/jobs", icon: Briefcase, label: "Job Listings" },
    { path: "/courses", icon: BookOpen, label: "Courses" },
    { path: "/events", icon: Calendar, label: "Events" },
    { path: "/reviews", icon: Building2, label: "Reviews" },
    { path: "/permits", icon: FileText, label: "Permits" },
    { path: "/insights", icon: TrendingUp, label: "Insights" },
  ];

  return (
    <nav className="border-b bg-navy/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            {!isHomePage && (
              <Link to="/" className="text-white hover:text-gray-200 mr-4">
                <ArrowLeft className="h-5 w-5" />
              </Link>
            )}
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/ee616333-99af-4324-87dd-05fd448763f4.png" 
                alt="SWMHS Logo" 
                className="h-10 w-10 bg-white rounded-full p-1"
              />
              <div className="text-white">
                <span className="text-xl font-semibold block leading-tight">SWMHS</span>
                <span className="text-xs">Career Center</span>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map(({ path, icon: Icon, label }) => (
              <Link 
                key={path}
                to={path} 
                className="text-white hover:text-gray-200 flex items-center gap-2"
              >
                <Icon className="h-4 w-4" />
                {t(label)}
              </Link>
            ))}
            <LanguageSelector />
            <Link to="/submit">
              <Button variant="outline" className="bg-white text-navy hover:bg-gray-100">
                {t("Submit Job")}
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <LanguageSelector />
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 ml-3 rounded-md text-white hover:text-gray-200 focus:outline-none"
              aria-expanded="false"
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-navy/95 border-t border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1 max-h-[calc(100vh-4rem)] overflow-y-auto">
            {navLinks.map(({ path, icon: Icon, label }) => (
              <Link
                key={path}
                to={path}
                className="text-white hover:bg-navy-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium flex items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Icon className="h-5 w-5 mr-3" />
                {t(label)}
              </Link>
            ))}
            <div className="pt-2 pb-1">
              <Link 
                to="/submit"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Button variant="outline" className="w-full bg-white text-navy hover:bg-gray-100">
                  {t("Submit Job")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
