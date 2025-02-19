
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin } from "lucide-react";

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
        <Link to={`/jobs/${job.id}`}>
          <Button variant="outline">View Details</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default JobCard;
