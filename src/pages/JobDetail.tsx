
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, Clock } from "lucide-react";

const JobDetail = () => {
  const { id } = useParams();

  // Mock job data
  const job = {
    title: "Software Developer Intern",
    company: "Tech Corp",
    location: "Remote",
    type: "Internship",
    posted: "2 days ago",
    description: "We are seeking a talented Software Developer Intern to join our team...",
    requirements: [
      "Currently enrolled in Computer Science or related field",
      "Strong programming skills in JavaScript/TypeScript",
      "Experience with React is a plus",
    ],
  };

  return (
    <div className="page-container">
      <Card className="max-w-4xl mx-auto">
        <CardContent className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{job.title}</h1>
              <div className="flex items-center gap-4 text-gray-600">
                <div className="flex items-center">
                  <Briefcase className="h-4 w-4 mr-2" />
                  {job.company}
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  {job.location}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  {job.posted}
                </div>
              </div>
            </div>
            <Badge variant="secondary" className="bg-sage-100 text-sage-700">
              {job.type}
            </Badge>
          </div>

          <div className="prose max-w-none">
            <h2 className="text-xl font-semibold mb-4">Description</h2>
            <p className="text-gray-600 mb-6">{job.description}</p>

            <h2 className="text-xl font-semibold mb-4">Requirements</h2>
            <ul className="list-disc list-inside text-gray-600 mb-6">
              {job.requirements.map((req, index) => (
                <li key={index} className="mb-2">{req}</li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <Button className="w-full bg-sage-500 hover:bg-sage-600">
              Apply Now
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default JobDetail;
