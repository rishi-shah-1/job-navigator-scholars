
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

interface JobFiltersProps {
  searchQuery: string;
  selectedType: string | null;
  selectedLocation: string | null;
  jobTypes: string[];
  locations: string[];
  onSearchChange: (value: string) => void;
  onTypeChange: (value: string | null) => void;
  onLocationChange: (value: string | null) => void;
}

const JobFilters = ({
  searchQuery,
  selectedType,
  selectedLocation,
  jobTypes,
  locations,
  onSearchChange,
  onTypeChange,
  onLocationChange,
}: JobFiltersProps) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border mb-6">
      <div className="flex gap-4 max-w-xl mb-4">
        <Input
          type="text"
          placeholder="Search jobs..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="h-12"
        />
        <Button className="h-12 px-6 bg-sage-500 hover:bg-sage-600">
          <Search className="h-5 w-5" />
        </Button>
      </div>
      
      <div className="flex flex-wrap gap-4">
        <select
          className="rounded-md border border-input bg-background px-3 h-10"
          onChange={(e) => onTypeChange(e.target.value || null)}
          value={selectedType || ""}
        >
          <option value="">All Types</option>
          {jobTypes.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
        
        <select
          className="rounded-md border border-input bg-background px-3 h-10"
          onChange={(e) => onLocationChange(e.target.value || null)}
          value={selectedLocation || ""}
        >
          <option value="">All Locations</option>
          {locations.map(location => (
            <option key={location} value={location}>{location}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default JobFilters;
