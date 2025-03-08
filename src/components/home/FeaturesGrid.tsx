
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
  Trophy
} from "lucide-react";

// Reduced feature set for the main grid (showing 9 features)
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
  }
];

const FeaturesGrid = () => {
  return (
    <>
      {features.map((feature, index) => (
        <FeatureCard 
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
          link={feature.link}
        />
      ))}
    </>
  );
};

export default FeaturesGrid;
export { features };
