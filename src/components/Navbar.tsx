
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Briefcase } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Briefcase className="h-6 w-6 text-sage-600" />
            <span className="text-xl font-semibold text-gray-900">JobBoard</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link to="/jobs" className="nav-link">Browse Jobs</Link>
            <Link to="/submit">
              <Button variant="default" className="bg-sage-500 hover:bg-sage-600">
                Post a Job
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
