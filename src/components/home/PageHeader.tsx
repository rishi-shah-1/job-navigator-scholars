
import { GraduationCap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const PageHeader = () => {
  const { t } = useLanguage();
  
  return (
    <div className="text-center max-w-3xl mx-auto">
      <div className="flex items-center justify-center mb-6">
        <GraduationCap className="h-12 w-12 text-navy mr-4 animate-bounce" />
        <h1 className="text-4xl sm:text-5xl font-bold text-navy">
          {t("SWMHS Career Center")}
        </h1>
      </div>
      <p className="text-lg text-gray-600 mb-8">
        {t("Discover exclusive job opportunities")}
      </p>
    </div>
  );
};

export default PageHeader;
