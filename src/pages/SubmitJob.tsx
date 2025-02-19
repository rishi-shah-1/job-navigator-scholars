
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const SubmitJob = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Job Posted Successfully",
        description: "Your job posting has been submitted for review.",
      });
    }, 1000);
  };

  return (
    <div className="page-container">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">Submit a Job Posting</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Job Title</label>
              <Input required placeholder="e.g. Software Developer Intern" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Company Name</label>
              <Input required placeholder="Your company name" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Location</label>
              <Input required placeholder="e.g. Remote, New York, NY" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Job Type</label>
              <Input required placeholder="e.g. Full-time, Part-time, Internship" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Job Description</label>
              <Textarea
                required
                placeholder="Describe the role, responsibilities, and requirements..."
                className="min-h-[200px]"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-sage-500 hover:bg-sage-600"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit Job Posting"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SubmitJob;
