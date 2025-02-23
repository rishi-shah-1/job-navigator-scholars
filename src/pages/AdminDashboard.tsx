
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const mockPendingJobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Tech Solutions Inc",
    submitted: "1 day ago",
    status: "pending",
  },
  // Add more mock jobs as needed
];

const AdminDashboard = () => {
  const { toast } = useToast();
  const [pendingJobs, setPendingJobs] = useState(mockPendingJobs);

  const handleApprove = (id: number) => {
    setPendingJobs(pendingJobs.filter(job => job.id !== id));
    toast({
      title: "Job Approved",
      description: "The job posting has been approved and published.",
    });
  };

  const handleReject = (id: number) => {
    setPendingJobs(pendingJobs.filter(job => job.id !== id));
    toast({
      title: "Job Rejected",
      description: "The job posting has been rejected.",
    });
  };

  return (
    <div className="page-container">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Admin Dashboard</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {pendingJobs.map((job) => (
              <div
                key={job.id}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div>
                  <h3 className="font-medium">{job.title}</h3>
                  <p className="text-sm text-gray-600">{job.company}</p>
                  <p className="text-sm text-gray-500">Submitted {job.submitted}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    onClick={() => handleApprove(job.id)}
                    variant="outline"
                    className="text-green-600 hover:text-green-700"
                  >
                    <Check className="h-4 w-4" />
                  </Button>
                  <Button
                    onClick={() => handleReject(job.id)}
                    variant="outline"
                    className="text-red-600 hover:text-red-700"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
            
            {pendingJobs.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                No pending job postings to review
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;
