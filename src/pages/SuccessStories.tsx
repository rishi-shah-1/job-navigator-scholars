
import { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Star, 
  Briefcase, 
  GraduationCap,
  Building2, 
  Stethoscope,
  Code,
  Lightbulb,
  Bank,
  Wrench,
  ChefHat
} from "lucide-react";

interface Story {
  id: number;
  name: string;
  graduationYear: number;
  company: string;
  position: string;
  industry: string;
  testimony: string;
  salary?: string;
}

const successStories: Story[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    graduationYear: 2023,
    company: "Tech Solutions NJ",
    position: "Software Developer Intern",
    industry: "Technology",
    testimony: "Starting as an intern during senior year, I'm now a full-time junior developer. SWMHS's coding club and career center guidance made this possible.",
    salary: "$75,000/year"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    graduationYear: 2022,
    company: "Saint Peter's Hospital",
    position: "Healthcare Assistant",
    industry: "Healthcare",
    testimony: "The healthcare pathway program at SWMHS gave me direct exposure to medical professionals. Now I'm working while pursuing nursing school.",
    salary: "$45,000/year"
  },
  {
    id: 3,
    name: "Emily Chen",
    graduationYear: 2023,
    company: "First Bank of Sayreville",
    position: "Junior Financial Analyst",
    industry: "Finance",
    testimony: "My internship through the school's partnership with local banks turned into a full-time position. The real-world experience was invaluable.",
    salary: "$55,000/year"
  },
  {
    id: 4,
    name: "James Wilson",
    graduationYear: 2022,
    company: "Sayreville Auto Tech",
    position: "Certified Mechanic",
    industry: "Trades",
    testimony: "The vocational program connected me with local auto shops. Started part-time in senior year, now I'm certified and loving my career.",
    salary: "$52,000/year"
  },
  {
    id: 5,
    name: "Sofia Martinez",
    graduationYear: 2023,
    company: "Creative Digital NJ",
    position: "Digital Marketing Specialist",
    industry: "Marketing",
    testimony: "School projects led to a summer internship, which became a full-time role. The practical experience in the school's marketing club was crucial.",
    salary: "$48,000/year"
  },
  {
    id: 6,
    name: "David Park",
    graduationYear: 2022,
    company: "Garden State Culinary",
    position: "Sous Chef",
    industry: "Culinary",
    testimony: "From school cafeteria helper to professional kitchen. The culinary program's connections with local restaurants opened many doors.",
    salary: "$45,000/year"
  },
  {
    id: 7,
    name: "Rachel Thompson",
    graduationYear: 2023,
    company: "BioAdvance Labs",
    position: "Research Assistant",
    industry: "Science",
    testimony: "The advanced biology program and summer research opportunity led to this amazing position. Now working while pursuing my biology degree.",
    salary: "$42,000/year"
  },
  {
    id: 8,
    name: "Marcus Brown",
    graduationYear: 2022,
    company: "BuildRight Construction",
    position: "Apprentice Electrician",
    industry: "Trades",
    testimony: "The trades program connected me with local unions. Started apprenticeship right after graduation, now on track for full certification.",
    salary: "$40,000/year"
  },
  {
    id: 9,
    name: "Lisa Kumar",
    graduationYear: 2023,
    company: "EdTech Innovations",
    position: "Junior Web Developer",
    industry: "Technology",
    testimony: "School hackathons and coding projects helped build my portfolio. Landed this position through the school's tech industry network.",
    salary: "$65,000/year"
  },
  {
    id: 10,
    name: "Kevin O'Brien",
    graduationYear: 2022,
    company: "Middlesex Medical Center",
    position: "Patient Care Technician",
    industry: "Healthcare",
    testimony: "Healthcare club and volunteer program at school led to certification and employment. Now advancing in healthcare while studying.",
    salary: "$38,000/year"
  },
  {
    id: 11,
    name: "Amanda Lee",
    graduationYear: 2023,
    company: "Green Energy Solutions",
    position: "Solar Installation Technician",
    industry: "Trades",
    testimony: "The sustainable technology program introduced me to renewable energy careers. Started training during senior year.",
    salary: "$45,000/year"
  },
  {
    id: 12,
    name: "Carlos Rivera",
    graduationYear: 2022,
    company: "Local Marketing Group",
    position: "Content Creator",
    industry: "Marketing",
    testimony: "School newspaper and social media team experience directly translated to my current role. Love creating content for local businesses.",
    salary: "$42,000/year"
  },
  {
    id: 13,
    name: "Natalie Wong",
    graduationYear: 2023,
    company: "Investment Solutions NJ",
    position: "Junior Account Manager",
    industry: "Finance",
    testimony: "Business club and internship program helped me discover my passion for finance. Now working while pursuing further certification.",
    salary: "$50,000/year"
  },
  {
    id: 14,
    name: "Tyler Johnson",
    graduationYear: 2022,
    company: "Artisan Builders",
    position: "Carpentry Apprentice",
    industry: "Trades",
    testimony: "Woodworking class and construction program provided hands-on experience. Connected with employer through school's trade fair.",
    salary: "$38,000/year"
  },
  {
    id: 15,
    name: "Maria Garcia",
    graduationYear: 2023,
    company: "Fresh Eats Catering",
    position: "Catering Coordinator",
    industry: "Culinary",
    testimony: "School events planning and culinary program experience combined perfectly for this role. Started part-time during senior year.",
    salary: "$40,000/year"
  },
  {
    id: 16,
    name: "John Smith",
    graduationYear: 2022,
    company: "DataTech Solutions",
    position: "IT Support Specialist",
    industry: "Technology",
    testimony: "School tech support internship program led directly to this position. The hands-on experience was invaluable.",
    salary: "$48,000/year"
  },
  {
    id: 17,
    name: "Ashley Taylor",
    graduationYear: 2023,
    company: "Community Health Center",
    position: "Medical Assistant",
    industry: "Healthcare",
    testimony: "Healthcare pathway and certification program prepared me perfectly. Working while pursuing advanced certification.",
    salary: "$40,000/year"
  },
  {
    id: 18,
    name: "William Chang",
    graduationYear: 2022,
    company: "Innovative Solutions",
    position: "Quality Assurance Tester",
    industry: "Technology",
    testimony: "Gaming club and programming courses sparked my interest in software testing. Found this opportunity through school's tech fair.",
    salary: "$52,000/year"
  },
  {
    id: 19,
    name: "Isabella Romano",
    graduationYear: 2023,
    company: "Garden State Bank",
    position: "Customer Service Representative",
    industry: "Finance",
    testimony: "Business leadership program and part-time work experience helped me land this position. Great start in banking.",
    salary: "$38,000/year"
  },
  {
    id: 20,
    name: "Aiden Patel",
    graduationYear: 2022,
    company: "Digital Media Productions",
    position: "Video Editor",
    industry: "Marketing",
    testimony: "School TV studio experience and media club projects built my portfolio. Connected with employer through school's career fair.",
    salary: "$45,000/year"
  }
];

const industries = [
  { name: "All", icon: Star },
  { name: "Technology", icon: Code },
  { name: "Healthcare", icon: Stethoscope },
  { name: "Finance", icon: Bank },
  { name: "Marketing", icon: Lightbulb },
  { name: "Trades", icon: Wrench },
  { name: "Culinary", icon: ChefHat }
];

const SuccessStories = () => {
  const [selectedIndustry, setSelectedIndustry] = useState("All");

  const filteredStories = selectedIndustry === "All" 
    ? successStories 
    : successStories.filter(story => story.industry === selectedIndustry);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <GraduationCap className="h-10 w-10 text-[#003087]" />
          <h1 className="text-4xl font-bold text-[#003087]">Success Stories</h1>
        </div>
        <p className="text-lg text-gray-600">
          Discover how SWMHS graduates launched their careers through our programs
        </p>
      </div>

      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {industries.map((industry) => {
          const Icon = industry.icon;
          return (
            <Button
              key={industry.name}
              variant={selectedIndustry === industry.name ? "default" : "outline"}
              className={`gap-2 ${
                selectedIndustry === industry.name 
                  ? "bg-[#003087]" 
                  : "hover:bg-[#003087] hover:text-white"
              }`}
              onClick={() => setSelectedIndustry(industry.name)}
            >
              <Icon className="h-4 w-4" />
              {industry.name}
            </Button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStories.map((story) => (
          <Card key={story.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-semibold">
                  {story.name}
                </CardTitle>
                <span className="text-sm text-gray-500">
                  Class of {story.graduationYear}
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <div className="flex items-center gap-2 text-[#003087] mb-2">
                  <Building2 className="h-4 w-4" />
                  <span className="font-medium">{story.company}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <Briefcase className="h-4 w-4" />
                  <span>{story.position}</span>
                </div>
                {story.salary && (
                  <div className="text-green-600 text-sm font-medium">
                    Starting salary: {story.salary}
                  </div>
                )}
              </div>
              <p className="text-gray-600 text-sm">{story.testimony}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SuccessStories;
