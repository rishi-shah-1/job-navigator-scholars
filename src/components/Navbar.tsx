
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { School, MapPin, Briefcase } from "lucide-react";
import { LanguageSelector } from "./LanguageSelector";

const Navbar = () => {
  return (
    <nav className="border-b bg-[#003087]/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <School className="h-8 w-8 text-white" />
            <div className="text-white">
              <span className="text-xl font-semibold block leading-tight">SWMHS</span>
              <span className="text-xs">Career Center</span>
            </div>
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link to="/map" className="text-white hover:text-gray-200 flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              School Map
            </Link>
            <Link to="/jobs" className="text-white hover:text-gray-200 flex items-center gap-2">
              <Briefcase className="h-4 w-4" />
              Job Listings
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
