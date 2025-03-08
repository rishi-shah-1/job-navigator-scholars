
import FeatureCard from "./FeatureCard";
import { 
  Building2, 
  ClipboardCheck, 
  BookOpen,
  MessageSquare,
  MapPin,
  Bell,
  Brain,
  ListTodo,
  Calendar,
  Trophy,
  BookOpenCheck 
} from "lucide-react";

const features = [
  {
    icon: <Building2 className="h-8 w-8 text-navy" />,
    title: "Employer Profiles",
    description: "Browse trusted employers",
    link: "/employers"
  },
  {
    icon: <ClipboardCheck className="h-8 w-8 text-navy" />,
    title: "Resume Builder",
    description: "Create professional resumes",
    link: "/resume-builder"
  },
  {
    icon: <BookOpen className="h-8 w-8 text-navy" />,
    title: "Opportunities",
    description: "Access jobs and internships",
    link: "/jobs"
  },
  {
    icon: <Trophy className="h-8 w-8 text-navy" />,
    title: "Success Stories",
    description: "Read graduate testimonials",
    link: "/success-stories"
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-navy" />,
    title: "Live Support",
    description: "Get help",
    link: "/support"
  },
  {
    icon: <MapPin className="h-8 w-8 text-navy" />,
    title: "Interactive Map",
    description: "Find opportunities",
    link: "/map"
  },
  {
    icon: <Brain className="h-8 w-8 text-navy" />,
    title: "Smart Matching",
    description: "Get personalized recommendations",
    link: "/recommendations"
  },
  {
    icon: <Bell className="h-8 w-8 text-navy" />,
    title: "Instant Alerts",
    description: "Never miss opportunities",
    link: "/alerts"
  },
  {
    icon: <ListTodo className="h-8 w-8 text-navy" />,
    title: "Application Tracker",
    description: "Track applications",
    link: "/applications"
  },
  {
    icon: <Calendar className="h-8 w-8 text-navy" />,
    title: "Guidance Events",
    description: "Register for workshops",
    link: "/events"
  },
  {
    icon: <BookOpenCheck className="h-8 w-8 text-navy" />,
    title: "Online Courses",
    description: "Access certifications & training",
    link: "/courses"
  }
];

const FeaturesGrid = () => {
  return (
    <>
      {/* Main features grid (first 9 features) */}
      <div className="md:w-2/3">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 h-full">
          {features.slice(0, 9).map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              link={feature.link}
            />
          ))}
        </div>
      </div>
      
      {/* Bottom row for remaining features */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
        {features.slice(9).map((feature, index) => (
          <FeatureCard 
            key={index + 9}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            link={feature.link}
            displayStyle="horizontal"
          />
        ))}
      </div>
    </>
  );
};

export default FeaturesGrid;
export { features };
