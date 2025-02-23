
import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import JobCard from "@/components/jobs/JobCard";
import { Brain, Sparkles, ListFilter } from "lucide-react";
import { mockJobs } from "@/data/mockJobs";

interface JobPreferences {
  interests: string[];
  location: string;
  jobType: string;
  maxDistance: number;
}

const JobRecommendations = () => {
  const [interests] = useState([
    "Technology",
    "Healthcare",
    "Business",
    "Education",
    "Creative Arts"
  ]);

  const [preferences, setPreferences] = useState<JobPreferences>({
    interests: [],
    location: "Sayreville, NJ",
    jobType: "all",
    maxDistance: 25
  });

  // Enhanced recommendation logic
  const recommendedJobs = mockJobs.filter(job => {
    // Always prioritize NJ jobs
    if (!job.location.includes("NJ")) return false;

    // Match by interests
    const matchesInterests = preferences.interests.length === 0 || 
      preferences.interests.some(interest => 
        job.title.toLowerCase().includes(interest.toLowerCase()) ||
        job.company.toLowerCase().includes(interest.toLowerCase()) ||
        job.description.toLowerCase().includes(interest.toLowerCase())
      );

    // Match by job type
    const matchesType = preferences.jobType === 'all' || 
      job.type.toLowerCase() === preferences.jobType.toLowerCase();

    return matchesInterests && matchesType;
  }).sort((a, b) => {
    // Prioritize newer postings
    const aAge = parseInt(a.posted);
    const bAge = parseInt(b.posted);
    return aAge - bAge;
  }).slice(0, 5);

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
              <ListFilter className="h-5 w-5" />
              Customize Your Preferences
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">Your Interests</h3>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <Button
                    key={interest}
                    variant={preferences.interests.includes(interest) ? "default" : "outline"}
                    onClick={() => {
                      setPreferences(prev => ({
                        ...prev,
                        interests: prev.interests.includes(interest)
                          ? prev.interests.filter(i => i !== interest)
                          : [...prev.interests, interest]
                      }));
                    }}
                    className="bg-[#003087]"
                  >
                    {interest}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Job Type</h3>
              <div className="flex gap-2">
                {["all", "Internship", "Part-time", "Scholarship"].map((type) => (
                  <Button
                    key={type}
                    variant={preferences.jobType === type ? "default" : "outline"}
                    onClick={() => setPreferences(prev => ({ ...prev, jobType: type }))}
                    className="bg-[#003087]"
                  >
                    {type}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Location</h3>
              <Input
                value={preferences.location}
                onChange={(e) => setPreferences(prev => ({ 
                  ...prev, 
                  location: e.target.value 
                }))}
                placeholder="Enter your location"
              />
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-[#003087]" />
            Recommended Opportunities
          </h2>
          
          {preferences.interests.length === 0 ? (
            <p className="text-gray-600 text-center py-8">
              Select your interests above to get personalized job recommendations
            </p>
          ) : recommendedJobs.length > 0 ? (
            recommendedJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))
          ) : (
            <p className="text-gray-600 text-center py-8">
              No matches found. Try adjusting your preferences.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobRecommendations;
