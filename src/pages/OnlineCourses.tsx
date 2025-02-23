
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const courses = [
  {
    platform: "LinkedIn Learning",
    description: "Professional development and software training with verified certificates",
    link: "https://www.linkedin.com/learning",
    categories: ["Technology", "Business", "Creative"]
  },
  {
    platform: "Coursera",
    description: "Professional certificates and courses from top universities",
    link: "https://www.coursera.org/professional-certificates",
    categories: ["Data Science", "Business", "Computer Science"]
  },
  {
    platform: "Google Career Certificates",
    description: "Professional certificates in high-growth fields",
    link: "https://grow.google/certificates",
    categories: ["IT Support", "Data Analytics", "UX Design"]
  },
  {
    platform: "Microsoft Learn",
    description: "Official Microsoft certification paths and training",
    link: "https://learn.microsoft.com/certifications",
    categories: ["Azure", "Microsoft 365", "Security"]
  },
  {
    platform: "AWS Training",
    description: "Amazon Web Services certification training",
    link: "https://aws.amazon.com/training",
    categories: ["Cloud Computing", "DevOps", "Security"]
  },
  {
    platform: "Udacity",
    description: "In-depth nanodegree programs in emerging technologies",
    link: "https://www.udacity.com",
    categories: ["AI", "Data Science", "Programming"]
  },
  {
    platform: "edX",
    description: "University-level courses and professional certificate programs",
    link: "https://www.edx.org/professional-certificate",
    categories: ["Computer Science", "Business", "Engineering"]
  },
  {
    platform: "Codecademy",
    description: "Interactive coding courses and skill paths",
    link: "https://www.codecademy.com/pro",
    categories: ["Web Development", "Data Science", "Computer Science"]
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
