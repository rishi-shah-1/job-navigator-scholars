
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Code, Package, Palette, FileCode, Layout, Shield, Cog, Globe, BookOpen, BarChart, Briefcase, FileText } from "lucide-react";

const Sources = () => {
  const technologies = [
    {
      category: "Core Technologies",
      icon: <Code />,
      items: [
        { name: "React 18", description: "Component-based JavaScript library for building interactive UIs efficiently", version: "18.3.1" },
        { name: "TypeScript", description: "Typed superset of JavaScript that improves error detection and code maintainability", version: "Latest" },
        { name: "Vite", description: "Fast build tool with instant dev server and optimized production builds", version: "Latest" }
      ]
    },
    {
      category: "UI Framework",
      icon: <Layout />,
      items: [
        { name: "Tailwind CSS", description: "Utility-first CSS framework for rapid and consistent styling", version: "Latest" },
        { name: "Shadcn/ui", description: "Customizable React UI component library using Radix UI and Tailwind CSS", version: "Latest" },
        { name: "Lucide Icons", description: "Beautiful & consistent icons", version: "0.462.0" }
      ]
    },
    {
      category: "Data Management",
      icon: <Cog />,
      items: [
        { name: "TanStack Query", description: "Powerful data synchronization", version: "5.56.2" },
        { name: "React Hook Form", description: "Form validation and handling", version: "7.53.0" },
        { name: "Zod", description: "TypeScript-first schema validation", version: "3.23.8" }
      ]
    },
    {
      category: "Routing & Navigation",
      icon: <Globe />,
      items: [
        { name: "React Router", description: "Client-side routing", version: "6.26.2" },
        { name: "React Navigation Menu", description: "Accessible navigation", version: "1.2.0" }
      ]
    },
    {
      category: "UI Components",
      icon: <Package />,
      items: [
        { name: "Dialog", description: "Modal dialogs and popovers", version: "1.1.2" },
        { name: "Dropdown Menu", description: "Context menus", version: "2.1.1" },
        { name: "Toast", description: "Notifications system", version: "1.2.1" },
        { name: "Select", description: "Stylized select inputs", version: "2.1.1" }
      ]
    },
    {
      category: "Developer Experience",
      icon: <Shield />,
      items: [
        { name: "ESLint", description: "Code quality and consistency", version: "Latest" },
        { name: "Next Themes", description: "Theme management", version: "0.3.0" },
        { name: "Class Variance Authority", description: "Component variant management", version: "0.7.1" },
        { name: "VS Code & GitHub", description: "Development environment and version control platform", version: "Latest" }
      ]
    }
  ];

  const starFeatures = [
    {
      category: "Search & Apply with Ease",
      icon: <Briefcase />,
      items: [
        { 
          name: "U.S. Department of Labor", 
          description: "Job Search Best Practices - Provides guidance on effective job searching and application strategies", 
          source: "https://www.dol.gov/general/jobs" 
        },
        { 
          name: "National Association of Colleges and Employers (NACE)", 
          description: "Digital Job Platforms - Discusses the impact of technology on job applications and recruitment", 
          source: "https://www.naceweb.org/" 
        },
      ]
    },
    {
      category: "Track Your Progress",
      icon: <BarChart />,
      items: [
        { 
          name: "Harvard Business Review", 
          description: "The Power of Tracking Job Applications - Explains how tracking applications improves job-seeker organization and success rates", 
          source: "https://hbr.org/" 
        },
        { 
          name: "Glassdoor", 
          description: "Job Application Tracking & Insights - Highlights the importance of tracking applications to increase interview rates", 
          source: "https://www.glassdoor.com/blog/job-tracker/" 
        },
      ]
    },
    {
      category: "AI-Powered Job Matching",
      icon: <Code />,
      items: [
        { 
          name: "MIT Sloan Review", 
          description: "AI in Hiring and Job Matching - Discusses AI's role in enhancing recruitment efficiency and candidate-job alignment", 
          source: "https://sloanreview.mit.edu/" 
        },
        { 
          name: "LinkedIn Economic Graph", 
          description: "AI-Driven Career Recommendations - Explains how AI-powered matching helps job seekers find better opportunities", 
          source: "https://economicgraph.linkedin.com/" 
        },
      ]
    },
    {
      category: "Resume & Cover Letter Builder",
      icon: <FileText />,
      items: [
        { 
          name: "Indeed", 
          description: "Resume Optimization & AI-Based Resume Tools - Covers best practices for resume building and ATS optimization", 
          source: "https://www.indeed.com/career-advice/resumes-cover-letters" 
        },
        { 
          name: "Pew Research Center", 
          description: "The Changing Nature of Job Applications - Analyzes how AI-generated resumes improve applicant success rates", 
          source: "https://www.pewresearch.org/" 
        },
      ]
    },
    {
      category: "Employer Submission Portal & Admin Panel",
      icon: <Shield />,
      items: [
        { 
          name: "Society for Human Resource Management (SHRM)", 
          description: "Job Posting Best Practices - Outlines best practices for employers submitting job listings", 
          source: "https://www.shrm.org/" 
        },
      ]
    },
    {
      category: "Interactive Map & Employer Ratings",
      icon: <Globe />,
      items: [
        { 
          name: "U.S. Bureau of Labor Statistics", 
          description: "Geographic Job Trends & Employer Ratings - Supports the importance of job mapping and employer reviews for informed decision-making", 
          source: "https://www.bls.gov/" 
        },
      ]
    },
  ];

  const features = [
    "Responsive Design",
    "Internationalization (i18n)",
    "Form Validation",
    "Real-time Updates",
    "Local Storage Integration",
    "Accessible Components",
    "Theme Support",
    "Toast Notifications",
    "Route Protection",
    "Error Boundaries"
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#003087] mb-4">Technologies & Features</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          This career center platform leverages modern web technologies and best practices
          to provide a robust, accessible, and user-friendly experience.
        </p>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold text-[#003087] mb-6">Technology Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {technologies.map((tech, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-[#003087]">{tech.icon}</span>
                  {tech.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {tech.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="border-b pb-4 last:border-0 last:pb-0">
                      <div className="font-semibold text-[#003087]">{item.name}</div>
                      <div className="text-sm text-gray-600">{item.description}</div>
                      <div className="text-xs text-gray-500 mt-1">Version: {item.version}</div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold text-[#003087] mb-6">S.T.A.R. Features & Core Functionalities</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {starFeatures.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-[#003087]">{feature.icon}</span>
                  {feature.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {feature.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="border-b pb-4 last:border-0 last:pb-0">
                      <div className="font-semibold text-[#003087]">{item.name}</div>
                      <div className="text-sm text-gray-600">{item.description}</div>
                      <a 
                        href={item.source} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xs text-blue-600 hover:underline mt-1 inline-block"
                      >
                        Source: {item.source}
                      </a>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileCode className="h-5 w-5 text-[#003087]" />
            Additional Features
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-gray-700">
                <span className="w-2 h-2 bg-[#003087] rounded-full"></span>
                {feature}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Sources;
