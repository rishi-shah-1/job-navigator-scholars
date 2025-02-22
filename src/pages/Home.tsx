
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
  ListTodo
} from "lucide-react";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const features = [
    {
      icon: <Building2 className="h-8 w-8 text-[#003087]" />,
      title: "Employer Profiles",
      description: "Browse trusted employers with ratings and reviews from your peers"
    },
    {
      icon: <ClipboardCheck className="h-8 w-8 text-[#003087]" />,
      title: "Resume Builder",
      description: "Create professional resumes with our guided builder"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-[#003087]" />,
      title: "Opportunities",
      description: "Access jobs, internships, and scholarships in one place"
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-[#003087]" />,
      title: "Live Support",
      description: "Get help from our guidance team when you need it"
    },
    {
      icon: <MapPin className="h-8 w-8 text-[#003087]" />,
      title: "Interactive Map",
      description: "Find opportunities near Sayreville"
    },
    {
      icon: <Brain className="h-8 w-8 text-[#003087]" />,
      title: "Smart Matching",
      description: "Get personalized job recommendations"
    },
    {
      icon: <Bell className="h-8 w-8 text-[#003087]" />,
      title: "Instant Alerts",
      description: "Never miss new opportunities"
    },
    {
      icon: <ListTodo className="h-8 w-8 text-[#003087]" />,
      title: "Application Tracker",
      description: "Track all your applications in one place"
    }
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)]">
      <div className="bg-gradient-to-b from-[#003087]/10 to-white py-20">
        <div className="page-container text-center">
          <div className="flex items-center justify-center mb-6">
            <GraduationCap className="h-12 w-12 text-[#003087] mr-4" />
            <h1 className="text-4xl sm:text-5xl font-bold text-[#003087]">
              SWMHS Career Center
            </h1>
          </div>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-[#003087] text-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Need Assistance?</h2>
            <p className="mb-4">Contact our guidance department for personalized support</p>
            <p className="text-lg font-semibold">📞 (551) 344-3313</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
