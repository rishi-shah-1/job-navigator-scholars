
import { useState, useMemo } from "react";

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  posted: string;
  description: string;
  requirements: string[];
}

interface UseJobFiltersResult {
  searchQuery: string;
  selectedType: string | null;
  selectedLocation: string | null;
  jobTypes: string[];
  locations: string[];
  filteredJobs: Job[];
  setSearchQuery: (query: string) => void;
  setSelectedType: (type: string | null) => void;
  setSelectedLocation: (location: string | null) => void;
  clearFilters: () => void;
}

export const useJobFilters = (jobs: Job[]): UseJobFiltersResult => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  const jobTypes = useMemo(() => 
    Array.from(new Set(jobs.map(job => job.type))).sort(),
    [jobs]
  );

  const locations = useMemo(() => 
    Array.from(new Set(jobs.map(job => job.location))).sort(),
    [jobs]
  );

  const filteredJobs = useMemo(() => {
    return jobs.filter(job => {
      const searchTerms = searchQuery.toLowerCase().split(' ');
      
      const matchesSearch = searchTerms.every(term =>
        job.title.toLowerCase().includes(term) ||
        job.company.toLowerCase().includes(term) ||
        job.description.toLowerCase().includes(term) ||
        job.requirements.some(req => req.toLowerCase().includes(term))
      );
      
      const matchesType = !selectedType || job.type === selectedType;
      const matchesLocation = !selectedLocation || job.location === selectedLocation;

      return matchesSearch && matchesType && matchesLocation;
    });
  }, [jobs, searchQuery, selectedType, selectedLocation]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedType(null);
    setSelectedLocation(null);
  };

  return {
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
  };
};
