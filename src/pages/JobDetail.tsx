
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Briefcase, MapPin, Clock, Send, FileText, Building2 } from "lucide-react";
import { mockJobs } from "@/data/mockJobs";
import { useToast } from "@/hooks/use-toast";

const JobDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [isApplying, setIsApplying] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    coverLetter: "",
    resume: null as File | null
  });
  
  const job = mockJobs.find(j => j.id === Number(id));

  if (!job) {
    return <div className="page-container">Job not found</div>;
  }

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to an API
    toast({
      title: "Application Submitted Successfully!",
      description: `Your application for ${job.title} at ${job.company} has been submitted. You'll receive a confirmation email shortly.`,
      duration: 5000,
    });
    setIsApplying(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({
        ...prev,
        resume: e.target.files![0]
      }));
    }
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

          {!isApplying ? (
            <div className="mt-8">
              <Button 
                className="w-full bg-[#003087] hover:bg-[#002065]"
                onClick={() => setIsApplying(true)}
              >
                <Send className="h-4 w-4 mr-2" />
                Apply Now
              </Button>
            </div>
          ) : (
            <form onSubmit={handleApply} className="mt-8 space-y-4">
              <h3 className="text-xl font-semibold mb-4">Submit Your Application</h3>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Full Name</label>
                <Input
                  required
                  value={formData.name}
                  onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input
                  required
                  type="email"
                  value={formData.email}
                  onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Phone</label>
                <Input
                  required
                  type="tel"
                  value={formData.phone}
                  onChange={e => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Cover Letter</label>
                <Textarea
                  placeholder="Why are you interested in this position?"
                  value={formData.coverLetter}
                  onChange={e => setFormData(prev => ({ ...prev, coverLetter: e.target.value }))}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Resume</label>
                <Input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                />
                <p className="text-xs text-gray-500">Accepted formats: PDF, DOC, DOCX</p>
              </div>

              <div className="flex gap-2">
                <Button
                  type="submit"
                  className="flex-1 bg-[#003087] hover:bg-[#002065]"
                >
                  Submit Application
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsApplying(false)}
                >
                  Cancel
                </Button>
              </div>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default JobDetail;
