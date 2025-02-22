
import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import JobCard from "@/components/jobs/JobCard";
import { Brain, Sparkles } from "lucide-react";
import { mockJobs } from "@/data/mockJobs";

const JobRecommendations = () => {
  const [interests] = useState([
    "Technology",
    "Healthcare",
    "Business",
    "Education",
    "Creative Arts"
  ]);

  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  // Simple recommendation logic based on selected interests
  const recommendedJobs = mockJobs.filter(job => 
    selectedInterests.some(interest => 
      job.title.toLowerCase().includes(interest.toLowerCase()) ||
      job.company.toLowerCase().includes(interest.toLowerCase())
    )
  ).slice(0, 5);

  return (
    <div className="page-container py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <Brain className="h-6 w-6 text-[#003087]" />
          <h1 className="text-3xl font-bold text-[#003087]">Smart Job Matching</h1>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5" />
              Select Your Interests
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {interests.map((interest) => (
                <Button
                  key={interest}
                  variant={selectedInterests.includes(interest) ? "default" : "outline"}
                  onClick={() => {
                    setSelectedInterests(prev =>
                      prev.includes(interest)
                        ? prev.filter(i => i !== interest)
                        : [...prev, interest]
                    );
                  }}
                  className="bg-[#003087]"
                >
                  {interest}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-[#003087]" />
            Recommended Opportunities
          </h2>
          
          {selectedInterests.length === 0 ? (
            <p className="text-gray-600 text-center py-8">
              Select your interests above to get personalized job recommendations
            </p>
          ) : recommendedJobs.length > 0 ? (
            recommendedJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))
          ) : (
            <p className="text-gray-600 text-center py-8">
              No matches found. Try selecting different interests.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobRecommendations;
