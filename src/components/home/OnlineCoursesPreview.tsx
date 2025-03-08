
import { BookOpenCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const OnlineCoursesPreview = () => {
  const { t } = useLanguage();
  
  // Preview just a few course platforms
  const previewCourses = [
    {
      name: "LinkedIn Learning",
      category: "Professional Skills"
    },
    {
      name: "Google Career Certificates", 
      category: "Technical Skills"
    },
    {
      name: "Microsoft Learn",
      category: "Computer Science"
    }
  ];

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-navy">{t("Online Courses")}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 mb-4">
          {previewCourses.map((course, index) => (
            <div key={index} className="flex items-center gap-3">
              <BookOpenCheck className="h-5 w-5 text-navy flex-shrink-0" />
              <div>
                <p className="font-medium">{t(course.name)}</p>
                <p className="text-sm text-gray-500">{t(course.category)}</p>
              </div>
            </div>
          ))}
        </div>
        <Link to="/courses">
          <Button className="w-full mt-2 bg-navy hover:bg-navy-800 text-white">
            {t("Explore All Courses")}
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default OnlineCoursesPreview;
