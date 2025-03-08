
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  displayStyle?: "grid" | "horizontal";
}

const FeatureCard = ({ icon, title, description, link, displayStyle = "grid" }: FeatureCardProps) => {
  const { t } = useLanguage();

  if (displayStyle === "horizontal") {
    return (
      <Link to={link}>
        <div className="bg-white p-4 rounded-lg shadow-sm border hover:shadow-md transition-shadow h-full transform hover:scale-105 duration-200">
          <div className="flex items-center">
            <div className="mr-3">{icon}</div>
            <div>
              <h3 className="text-base font-semibold">{t(title)}</h3>
              <p className="text-gray-600 text-sm">{t(description)}</p>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link to={link}>
      <div className="bg-white p-4 rounded-lg shadow-sm border hover:shadow-md transition-shadow h-full transform hover:scale-105 duration-200">
        <div className="mb-2">{icon}</div>
        <h3 className="text-base font-semibold mb-1">{t(title)}</h3>
        <p className="text-gray-600 text-xs">{t(description)}</p>
      </div>
    </Link>
  );
};

export default FeatureCard;
