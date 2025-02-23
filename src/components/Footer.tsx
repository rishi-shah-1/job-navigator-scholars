
import { Link } from "react-router-dom";
import { Lock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#003087] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">SWMHS Career Center</h3>
            <p className="text-sm">
              Supporting student success through career opportunities and guidance.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/jobs" className="text-sm hover:underline">Job Listings</Link></li>
              <li><Link to="/employers" className="text-sm hover:underline">Employer Profiles</Link></li>
              <li><Link to="/events" className="text-sm hover:underline">Guidance Events</Link></li>
              <li><Link to="/support" className="text-sm hover:underline">Support</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-sm">
              820 Washington Road<br />
              Parlin, NJ 08859<br />
              (732) 525-5200
            </p>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-blue-400 flex justify-between items-center">
          <p className="text-sm">© 2024 SWMHS Career Center. All rights reserved.</p>
          <Link 
            to="/admin" 
            className="text-sm hover:underline flex items-center gap-1 opacity-75 hover:opacity-100"
          >
            <Lock className="h-4 w-4" />
            Admin Login
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
