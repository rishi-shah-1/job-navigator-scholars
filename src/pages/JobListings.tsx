
import JobCard from "@/components/jobs/JobCard";
import JobFilters from "@/components/jobs/JobFilters";
import NoJobsFound from "@/components/jobs/NoJobsFound";
import { useJobFilters } from "@/hooks/useJobFilters";
import { mockJobs } from "@/data/mockJobs";

const JobListings = () => {
  const {
    searchQuery,
    selectedType,
    selectedLocation,
    jobTypes,
    locations,
    filteredJobs,
    setSearchQuery,
    setSelectedType,
    setSelectedLocation,
    clearFilters
  } = useJobFilters(mockJobs);

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
