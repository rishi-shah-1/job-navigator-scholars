
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const courses = [
  {
    platform: "Coursera",
    description: "Access free courses through your school account",
    link: "https://www.coursera.org/campus/high-school",
    categories: ["Technology", "Business", "Science", "Arts"]
  },
  {
    platform: "LinkedIn Learning",
    description: "Professional development and software training",
    link: "https://www.linkedin.com/learning",
    categories: ["Professional Skills", "Software", "Business"]
  },
  {
    platform: "Udemy",
    description: "Career-focused online courses",
    link: "https://www.udemy.com",
    categories: ["Programming", "Design", "Marketing"]
  }
];

const OnlineCourses = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-[#003087] mb-6">Online Courses & Certifications</h1>
      <p className="text-gray-600 mb-8">
        Access free or discounted courses through our educational partnerships. Use your school email to register.
      </p>

      <div className="grid gap-6">
        {courses.map((course, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{course.platform}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Available Categories:</h4>
                <div className="flex flex-wrap gap-2">
                  {course.categories.map((category, idx) => (
                    <span 
                      key={idx}
                      className="bg-[#003087]/10 text-[#003087] px-3 py-1 rounded-full text-sm"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={course.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#003087] hover:underline gap-2"
              >
                Access Platform <ExternalLink className="h-4 w-4" />
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default OnlineCourses;
