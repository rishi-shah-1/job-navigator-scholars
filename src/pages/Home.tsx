
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import PhotoCarousel from "@/components/PhotoCarousel";

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <PhotoCarousel />
        
        <div className="mt-12 text-center">
          <h1 className="text-4xl font-bold text-[#003087] mb-4">
            Welcome to SWMHS Career Center
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Discover opportunities that shape your future
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="/jobs">
              <Button className="w-full h-24 text-lg" variant="outline">
                Browse Job Listings
              </Button>
            </Link>
            <Link to="/resume-builder">
              <Button className="w-full h-24 text-lg" variant="outline">
                Build Your Resume
              </Button>
            </Link>
            <Link to="/employers">
              <Button className="w-full h-24 text-lg" variant="outline">
                View Employer Profiles
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
