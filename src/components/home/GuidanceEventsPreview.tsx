
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const GuidanceEventsPreview = () => {
  const { t } = useLanguage();
  
  // Preview just the first two events
  const previewEvents = [
    {
      title: "College Application Workshop",
      date: "March 15, 2024"
    },
    {
      title: "Career Exploration Day",
      date: "March 22, 2024"
    }
  ];

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-navy">{t("Guidance Events")}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 mb-4">
          {previewEvents.map((event, index) => (
            <div key={index} className="flex items-center gap-3">
              <Calendar className="h-5 w-5 text-navy flex-shrink-0" />
              <div>
                <p className="font-medium">{t(event.title)}</p>
                <p className="text-sm text-gray-500">{event.date}</p>
              </div>
            </div>
          ))}
        </div>
        <Link to="/events">
          <Button className="w-full mt-2 bg-navy hover:bg-navy-800 text-white">
            {t("View All Events")}
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default GuidanceEventsPreview;
