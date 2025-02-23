
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Lock, Check, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const mockPendingJobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Tech Solutions Inc",
    submitted: "1 day ago",
    status: "pending",
  },
  {
    id: 2,
    title: "Healthcare Assistant",
    company: "Saint Peter's Hospital",
    submitted: "2 days ago",
    status: "pending",
  },
  {
    id: 3,
    title: "Marketing Intern",
    company: "Local Business Group",
    submitted: "3 days ago",
    status: "pending",
  }
];

const ADMIN_PASSWORD = "SWMHS2024"; // Simple password for demonstration

const AdminDashboard = () => {
  const { toast } = useToast();
  const [pendingJobs, setPendingJobs] = useState(mockPendingJobs);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setError("");
      toast({
        title: "Login Successful",
        description: "Welcome to the admin dashboard",
      });
    } else {
      setError("Incorrect password");
      toast({
        title: "Login Failed",
        description: "Please check your password and try again",
        variant: "destructive",
      });
    }
  };

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

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="h-5 w-5" />
              SWMHS Admin Login
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Input
                  type="password"
                  placeholder="Enter admin password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleLogin()}
                />
                {error && <p className="text-sm text-red-500 mt-2">{error}</p>}
              </div>
              <Button
                className="w-full bg-[#003087] hover:bg-[#002060]"
                onClick={handleLogin}
              >
                Login to Admin Panel
              </Button>
              <p className="text-sm text-gray-500 text-center mt-4">
                This area is restricted to SWMHS administrators only.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="page-container">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-2xl">Admin Dashboard</CardTitle>
          <Button 
            variant="outline" 
            onClick={() => setIsAuthenticated(false)}
            className="text-gray-600"
          >
            Logout
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {pendingJobs.map((job) => (
              <div
                key={job.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:shadow-md transition-shadow"
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
