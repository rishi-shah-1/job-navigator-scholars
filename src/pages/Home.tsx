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
  Presentation,
  Phone,
  Mail,
  User
} from "lucide-react";

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

  const schoolInfo = {
    name: "Sayreville War Memorial High School",
    address: "820 Washington Rd, Parlin, NJ 08859",
    principal: "Richard Gluchowski",
    founded: "1939",
    colors: "Blue, Grey",
    phone: "(732) 525-5252",
    district: "Sayreville Borough School District"
  };

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
              <Link to={feature.link} key={index}>
                <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow h-full">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 bg-[#003087] text-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">School Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
              <div className="space-y-2">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  <p>Principal: {schoolInfo.principal}</p>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  <p>{schoolInfo.address}</p>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <p>Phone: {schoolInfo.phone}</p>
                </div>
              </div>
              <div className="space-y-2">
                <p>Founded: {schoolInfo.founded}</p>
                <p>Colors: {schoolInfo.colors}</p>
                <p>District: {schoolInfo.district}</p>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-white/20">
              <h3 className="text-xl font-semibold mb-2">Need Assistance?</h3>
              <p className="mb-2">Contact our guidance department for personalized support</p>
              <p className="text-lg font-semibold flex items-center justify-center gap-2">
                <Phone className="h-5 w-5" />
                {schoolInfo.phone}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
