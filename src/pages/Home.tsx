
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-[calc(100vh-4rem)]">
      <div className="bg-gradient-to-b from-sage-50 to-white py-20">
        <div className="page-container text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Find Your Perfect Career Path
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover exclusive job opportunities curated for students by your school's guidance department.
          </p>
          
          <div className="max-w-xl mx-auto flex gap-4">
            <Input
              type="text"
              placeholder="Search for jobs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-12"
            />
            <Link to={`/jobs?search=${searchQuery}`}>
              <Button className="h-12 px-6 bg-sage-500 hover:bg-sage-600">
                <Search className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="page-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Featured job cards would go here */}
        </div>
      </div>
    </div>
  );
};

export default Home;
