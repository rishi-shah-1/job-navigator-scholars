
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, Clock, Send } from "lucide-react";
import { mockJobs } from "@/data/mockJobs";
import { useToast } from "@/hooks/use-toast";

const JobDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  
  const job = mockJobs.find(j => j.id === Number(id));

  if (!job) {
    return <div className="page-container">Job not found</div>;
  }

  const handleApply = () => {
    // In a real app, this would submit to an API
    toast({
      title: "Application Submitted!",
      description: `Your application for ${job.title} at ${job.company} has been submitted successfully.`,
      duration: 5000,
    });
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

            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <h2 className="text-xl font-semibold mb-2">Compensation</h2>
              <p className="text-gray-600">{job.salary}</p>
            </div>
          </div>

          <div className="mt-8">
            <Button 
              className="w-full bg-[#003087] hover:bg-[#002065]"
              onClick={handleApply}
            >
              <Send className="h-4 w-4 mr-2" />
              Apply Now
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default JobDetail;
