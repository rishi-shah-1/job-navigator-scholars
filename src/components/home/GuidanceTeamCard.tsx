
import { useLanguage } from "@/contexts/LanguageContext";

const GuidanceTeamCard = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-white p-6 rounded-lg shadow-md h-full">
      <h2 className="text-2xl font-bold text-navy mb-4">{t("Meet Our Career Guidance Team")}</h2>
      <p className="text-gray-600 mb-4">{t("Our dedicated staff is here to help you navigate your career journey")}</p>
      <img 
        src="/lovable-uploads/42758139-779e-49b7-9ab2-97867de5232c.png" 
        alt="SWMHS Career Guidance Team" 
        className="rounded-lg w-full shadow-lg"
      />
    </div>
  );
};

export default GuidanceTeamCard;
