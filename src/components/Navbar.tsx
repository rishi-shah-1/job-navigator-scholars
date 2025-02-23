
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
  ArrowLeft
} from "lucide-react";
import { LanguageSelector } from "./LanguageSelector";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <nav className="border-b bg-[#003087]/95 backdrop-blur-sm sticky top-0 z-50">
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
          
          <div className="hidden lg:flex items-center space-x-6">
            <Link to="/map" className="text-white hover:text-gray-200 flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              School Map
            </Link>
            <Link to="/jobs" className="text-white hover:text-gray-200 flex items-center gap-2">
              <Briefcase className="h-4 w-4" />
              Job Listings
            </Link>
            <Link to="/courses" className="text-white hover:text-gray-200 flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Courses
            </Link>
            <Link to="/events" className="text-white hover:text-gray-200 flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Events
            </Link>
            <Link to="/reviews" className="text-white hover:text-gray-200 flex items-center gap-2">
              <Building2 className="h-4 w-4" />
              Reviews
            </Link>
            <Link to="/permits" className="text-white hover:text-gray-200 flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Permits
            </Link>
            <Link to="/insights" className="text-white hover:text-gray-200 flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Insights
            </Link>
            <LanguageSelector />
            <Link to="/submit">
              <Button variant="outline" className="bg-white text-[#003087] hover:bg-gray-100">
                Submit Job
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
