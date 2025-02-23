
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Code, Package, Palette, FileCode } from "lucide-react";

const Sources = () => {
  const technologies = [
    {
      category: "Frontend Framework",
      items: [
        { name: "React", description: "A JavaScript library for building user interfaces", version: "18.3.1" },
        { name: "TypeScript", description: "Typed JavaScript at any scale", version: "Latest" },
        { name: "Vite", description: "Next Generation Frontend Tooling", version: "Latest" }
      ]
    },
    {
      category: "UI Components",
      items: [
        { name: "Shadcn/ui", description: "Beautifully designed components", version: "Latest" },
        { name: "Lucide Icons", description: "Beautiful & consistent icons", version: "0.462.0" },
        { name: "Tailwind CSS", description: "A utility-first CSS framework", version: "Latest" }
      ]
    },
    {
      category: "State Management & Routing",
      items: [
        { name: "React Router", description: "Declarative routing for React", version: "6.26.2" },
        { name: "React Query", description: "Powerful asynchronous state management", version: "5.56.2" }
      ]
    },
    {
      category: "User Experience",
      items: [
        { name: "Sonner", description: "Toast notifications", version: "1.5.0" },
        { name: "React Hook Form", description: "Form state management", version: "7.53.0" },
        { name: "date-fns", description: "Modern JavaScript date utility library", version: "3.6.0" }
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#003087] mb-4">Technologies & Sources</h1>
        <p className="text-gray-600">
          This career center platform is built with modern web technologies, focusing on performance,
          accessibility, and user experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {technologies.map((tech, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {index === 0 ? <Code className="h-5 w-5" /> :
                 index === 1 ? <Package className="h-5 w-5" /> :
                 index === 2 ? <FileCode className="h-5 w-5" /> :
                 <Palette className="h-5 w-5" />}
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
  );
};

export default Sources;
