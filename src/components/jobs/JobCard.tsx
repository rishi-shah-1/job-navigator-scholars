
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, Bell } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface JobCardProps {
  job: {
    id: number;
    title: string;
    company: string;
    location: string;
    type: string;
    posted: string;
  };
}

const JobCard = ({ job }: JobCardProps) => {
  const { toast } = useToast();

  const handleNotify = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    // In a real app, this would connect to a notification API
    localStorage.setItem(`job-alert-${job.id}`, 'true');
    
    toast({
      title: "Alert Set Successfully!",
      description: `You will be notified of updates for "${job.title}" at ${job.company}. Check your email for confirmation.`,
      duration: 5000,
    });
  };

  const isAlertSet = localStorage.getItem(`job-alert-${job.id}`) === 'true';

  return (
    <Card className="card-hover transition-all duration-200">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
            <div className="flex items-center gap-4 text-gray-600">
              <div className="flex items-center">
                <Briefcase className="h-4 w-4 mr-2" />
                {job.company}
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                {job.location}
              </div>
            </div>
          </div>
          <Badge variant="secondary" className="bg-sage-100 text-sage-700">
            {job.type}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{job.location}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <span className="text-sm text-gray-500">Posted {job.posted}</span>
        <div className="flex gap-2">
          <Button 
            variant={isAlertSet ? "default" : "outline"}
            size="icon"
            onClick={handleNotify}
            className={isAlertSet ? "bg-green-500 hover:bg-green-600" : ""}
          >
            <Bell className="h-4 w-4" />
          </Button>
          <Link to={`/jobs/${job.id}`}>
            <Button variant="outline">View Details</Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default JobCard;
