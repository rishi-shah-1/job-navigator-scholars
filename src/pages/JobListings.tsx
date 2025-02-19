import { useState, useMemo } from "react";
import JobCard from "@/components/jobs/JobCard";
import JobFilters from "@/components/jobs/JobFilters";
import NoJobsFound from "@/components/jobs/NoJobsFound";

const mockJobs = [
  {
    id: 1,
    title: "Software Developer Intern",
    company: "Tech Corp",
    location: "Remote",
    type: "Internship",
    posted: "2 days ago",
  },
  {
    id: 2,
    title: "Marketing Assistant",
    company: "Brand Solutions",
    location: "New York, NY",
    type: "Part-time",
    posted: "1 day ago",
  },
  {
    id: 3,
    title: "Data Science Intern",
    company: "Analytics Pro",
    location: "Boston, MA",
    type: "Internship",
    posted: "3 days ago",
  },
  {
    id: 4,
    title: "Graphic Design Assistant",
    company: "Creative Studio",
    location: "Remote",
    type: "Part-time",
    posted: "4 days ago",
  },
  {
    id: 5,
    title: "Research Assistant",
    company: "University Lab",
    location: "Chicago, IL",
    type: "Part-time",
    posted: "1 week ago",
  },
  {
    id: 6,
    title: "Business Development Intern",
    company: "Growth Ventures",
    location: "San Francisco, CA",
    type: "Internship",
    posted: "2 days ago",
  },
  {
    id: 7,
    title: "Content Writer",
    company: "Digital Media Co",
    location: "Remote",
    type: "Freelance",
    posted: "5 days ago",
  },
  {
    id: 8,
    title: "IT Support Intern",
    company: "Tech Solutions",
    location: "Austin, TX",
    type: "Internship",
    posted: "1 week ago",
  },
  {
    id: 9,
    title: "Social Media Coordinator",
    company: "Social Buzz",
    location: "Los Angeles, CA",
    type: "Part-time",
    posted: "3 days ago",
  },
  {
    id: 10,
    title: "HR Assistant",
    company: "People First",
    location: "Seattle, WA",
    type: "Part-time",
    posted: "6 days ago",
  },
  {
    id: 11,
    title: "Financial Analyst Intern",
    company: "Investment Group",
    location: "New York, NY",
    type: "Internship",
    posted: "4 days ago",
  },
  {
    id: 12,
    title: "Web Designer",
    company: "Creative Digital",
    location: "Remote",
    type: "Freelance",
    posted: "1 week ago",
  },
  {
    id: 13,
    title: "Customer Service Representative",
    company: "Support Solutions",
    location: "Miami, FL",
    type: "Part-time",
    posted: "2 days ago",
  },
  {
    id: 14,
    title: "Product Management Intern",
    company: "Tech Innovations",
    location: "San Jose, CA",
    type: "Internship",
    posted: "3 days ago",
  },
  {
    id: 15,
    title: "Video Editor",
    company: "Media Productions",
    location: "Remote",
    type: "Freelance",
    posted: "5 days ago",
  },
  {
    id: 16,
    title: "Accounting Assistant",
    company: "Financial Services",
    location: "Chicago, IL",
    type: "Part-time",
    posted: "1 week ago",
  },
  {
    id: 17,
    title: "UX Research Intern",
    company: "Design Think",
    location: "Seattle, WA",
    type: "Internship",
    posted: "4 days ago",
  },
  {
    id: 18,
    title: "Sales Development Rep",
    company: "Sales Pro",
    location: "Denver, CO",
    type: "Part-time",
    posted: "3 days ago",
  },
  {
    id: 19,
    title: "Mobile App Developer",
    company: "App Works",
    location: "Remote",
    type: "Internship",
    posted: "2 days ago",
  },
  {
    id: 20,
    title: "Event Planning Assistant",
    company: "Event Masters",
    location: "Las Vegas, NV",
    type: "Part-time",
    posted: "6 days ago",
  },
  {
    id: 21,
    title: "Data Analytics Intern",
    company: "Data Insights",
    location: "Boston, MA",
    type: "Internship",
    posted: "1 week ago",
  },
  {
    id: 22,
    title: "Content Marketing Specialist",
    company: "Digital Content Co",
    location: "Remote",
    type: "Part-time",
    posted: "4 days ago",
  },
  {
    id: 23,
    title: "Laboratory Assistant",
    company: "Research Labs",
    location: "Philadelphia, PA",
    type: "Part-time",
    posted: "3 days ago",
  },
  {
    id: 24,
    title: "Software QA Intern",
    company: "Quality Tech",
    location: "Portland, OR",
    type: "Internship",
    posted: "5 days ago",
  },
  {
    id: 25,
    title: "Digital Marketing Assistant",
    company: "Marketing Pro",
    location: "Remote",
    type: "Part-time",
    posted: "2 days ago",
  },
  {
    id: 26,
    title: "Business Analyst Intern",
    company: "Consulting Group",
    location: "Washington, DC",
    type: "Internship",
    posted: "1 week ago",
  },
  {
    id: 27,
    title: "Graphic Designer",
    company: "Design Studio",
    location: "Remote",
    type: "Freelance",
    posted: "3 days ago",
  },
  {
    id: 28,
    title: "Operations Assistant",
    company: "Logistics Pro",
    location: "Houston, TX",
    type: "Part-time",
    posted: "4 days ago",
  },
  {
    id: 29,
    title: "Front-end Developer Intern",
    company: "Web Solutions",
    location: "Atlanta, GA",
    type: "Internship",
    posted: "6 days ago",
  },
  {
    id: 30,
    title: "Social Media Manager",
    company: "Digital Agency",
    location: "Remote",
    type: "Part-time",
    posted: "2 days ago",
  },
  {
    id: 31,
    title: "Market Research Assistant",
    company: "Research Co",
    location: "Chicago, IL",
    type: "Part-time",
    posted: "5 days ago",
  },
  {
    id: 32,
    title: "UI Designer Intern",
    company: "Design Works",
    location: "San Francisco, CA",
    type: "Internship",
    posted: "3 days ago",
  },
  {
    id: 33,
    title: "Technical Writer",
    company: "Tech Docs",
    location: "Remote",
    type: "Freelance",
    posted: "1 week ago",
  },
  {
    id: 34,
    title: "Customer Success Intern",
    company: "Service Pro",
    location: "Austin, TX",
    type: "Internship",
    posted: "4 days ago",
  },
  {
    id: 35,
    title: "Project Coordinator",
    company: "Project Solutions",
    location: "Seattle, WA",
    type: "Part-time",
    posted: "2 days ago",
  },
  {
    id: 36,
    title: "Backend Developer Intern",
    company: "Server Tech",
    location: "Boston, MA",
    type: "Internship",
    posted: "6 days ago",
  },
  {
    id: 37,
    title: "Content Creator",
    company: "Media House",
    location: "Remote",
    type: "Freelance",
    posted: "3 days ago",
  },
  {
    id: 38,
    title: "Finance Assistant",
    company: "Finance Pro",
    location: "New York, NY",
    type: "Part-time",
    posted: "5 days ago",
  },
  {
    id: 39,
    title: "DevOps Intern",
    company: "Cloud Tech",
    location: "Remote",
    type: "Internship",
    posted: "1 week ago",
  },
  {
    id: 40,
    title: "Marketing Coordinator",
    company: "Brand Co",
    location: "Los Angeles, CA",
    type: "Part-time",
    posted: "4 days ago",
  },
  {
    id: 41,
    title: "Research Intern",
    company: "Science Lab",
    location: "San Diego, CA",
    type: "Internship",
    posted: "2 days ago",
  },
  {
    id: 42,
    title: "Motion Designer",
    company: "Animation Studio",
    location: "Remote",
    type: "Freelance",
    posted: "6 days ago",
  },
  {
    id: 43,
    title: "Sales Assistant",
    company: "Sales Force",
    location: "Miami, FL",
    type: "Part-time",
    posted: "3 days ago",
  },
  {
    id: 44,
    title: "Data Engineering Intern",
    company: "Data Tech",
    location: "Seattle, WA",
    type: "Internship",
    posted: "5 days ago",
  },
  {
    id: 45,
    title: "Digital Designer",
    company: "Creative Lab",
    location: "Remote",
    type: "Freelance",
    posted: "1 week ago",
  },
  {
    id: 46,
    title: "HR Coordinator",
    company: "HR Solutions",
    location: "Chicago, IL",
    type: "Part-time",
    posted: "4 days ago",
  },
  {
    id: 47,
    title: "Cloud Engineering Intern",
    company: "Cloud Solutions",
    location: "Austin, TX",
    type: "Internship",
    posted: "2 days ago",
  },
  {
    id: 48,
    title: "Content Strategist",
    company: "Content Pro",
    location: "Remote",
    type: "Part-time",
    posted: "6 days ago",
  },
  {
    id: 49,
    title: "Mobile Developer Intern",
    company: "App Studio",
    location: "San Jose, CA",
    type: "Internship",
    posted: "3 days ago",
  },
  {
    id: 50,
    title: "Product Designer",
    company: "Design Lab",
    location: "Remote",
    type: "Freelance",
    posted: "5 days ago",
  },
  {
    id: 51,
    title: "Analytics Coordinator",
    company: "Data Pro",
    location: "Boston, MA",
    type: "Part-time",
    posted: "1 week ago",
  }
];

const JobListings = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  // Get unique job types and locations for filters
  const jobTypes = useMemo(() => 
    Array.from(new Set(mockJobs.map(job => job.type))),
    []
  );

  const locations = useMemo(() => 
    Array.from(new Set(mockJobs.map(job => job.location))),
    []
  );

  // Filter jobs based on search query and filters
  const filteredJobs = useMemo(() => {
    return mockJobs.filter(job => {
      const matchesSearch = 
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesType = !selectedType || job.type === selectedType;
      const matchesLocation = !selectedLocation || job.location === selectedLocation;

      return matchesSearch && matchesType && matchesLocation;
    });
  }, [searchQuery, selectedType, selectedLocation]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedType(null);
    setSelectedLocation(null);
  };

  return (
    <div className="page-container">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Browse Opportunities</h1>
        
        <JobFilters
          searchQuery={searchQuery}
          selectedType={selectedType}
          selectedLocation={selectedLocation}
          jobTypes={jobTypes}
          locations={locations}
          onSearchChange={setSearchQuery}
          onTypeChange={setSelectedType}
          onLocationChange={setSelectedLocation}
        />

        <p className="text-gray-600 mb-4">
          Showing {filteredJobs.length} opportunities
        </p>
      </div>

      <div className="grid gap-6">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))
        ) : (
          <NoJobsFound onClear={clearFilters} />
        )}
      </div>
    </div>
  );
};

export default JobListings;
