
import { Button } from "@/components/ui/button";

interface NoJobsFoundProps {
  onClear: () => void;
}

const NoJobsFound = ({ onClear }: NoJobsFoundProps) => {
  return (
    <div className="text-center py-12 bg-gray-50 rounded-lg">
      <p className="text-gray-600">No jobs found matching your criteria</p>
      <Button
        variant="link"
        onClick={onClear}
        className="mt-2"
      >
        Clear filters
      </Button>
    </div>
  );
};

export default NoJobsFound;
