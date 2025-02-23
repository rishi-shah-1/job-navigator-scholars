
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Code, Package, Palette, FileCode, Layout, Shield, Cog, Globe } from "lucide-react";

const Sources = () => {
  const technologies = [
    {
      category: "Core Technologies",
      icon: <Code />,
      items: [
        { name: "React 18", description: "Modern UI library with concurrent rendering", version: "18.3.1" },
        { name: "TypeScript", description: "Static typing for JavaScript", version: "Latest" },
        { name: "Vite", description: "Next-gen frontend build tool", version: "Latest" }
      ]
    },
    {
      category: "UI Framework",
      icon: <Layout />,
      items: [
        { name: "Tailwind CSS", description: "Utility-first CSS framework", version: "Latest" },
        { name: "Shadcn/ui", description: "Radix UI + Tailwind components", version: "Latest" },
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
        { name: "Class Variance Authority", description: "Component variant management", version: "0.7.1" }
      ]
    }
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

      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileCode className="h-5 w-5 text-[#003087]" />
            Key Features
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
