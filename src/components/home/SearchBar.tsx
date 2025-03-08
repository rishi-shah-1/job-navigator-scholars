
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { t } = useLanguage();

  return (
    <div className="max-w-xl mx-auto flex gap-4 mb-12">
      <Input
        type="text"
        placeholder={t("Search for jobs, internships, or scholarships...")}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="h-12"
      />
      <Link to={`/jobs?search=${searchQuery}`}>
        <Button className="h-12 px-6 bg-navy hover:bg-navy-800">
          <Search className="h-5 w-5" />
        </Button>
      </Link>
    </div>
  );
};

export default SearchBar;
