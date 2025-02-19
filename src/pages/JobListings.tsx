
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Briefcase } from "lucide-react";

const mockJobs = [
  {
    id: 1,
    title: "Software Developer Intern",
    company: "Tech Corp",
    location: "Remote",
    type: "Internship",
    posted: "2 days ago",
  },
  // Add more mock jobs as needed
];

const JobListings = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="page-container">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Browse Opportunities</h1>
        <div className="flex gap-4 max-w-xl">
          <Input
            type="text"
            placeholder="Search jobs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-12"
          />
          <Button className="h-12 px-6 bg-sage-500 hover:bg-sage-600">
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="grid gap-6">
        {mockJobs.map((job) => (
          <Card key={job.id} className="card-hover">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                  <div className="flex items-center text-gray-600">
                    <Briefcase className="h-4 w-4 mr-2" />
                    {job.company}
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
        ))}
      </div>
    </div>
  );
};

export default JobListings;
