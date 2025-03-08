
import PageHeader from "@/components/home/PageHeader";
import SearchBar from "@/components/home/SearchBar";
import GuidanceTeamCard from "@/components/home/GuidanceTeamCard";
import FeaturesGrid from "@/components/home/FeaturesGrid";
import FAQSection from "@/components/home/FAQSection";

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)]">
      <div className="bg-gradient-to-b from-navy/10 to-transparent">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          {/* Header and Search */}
          <PageHeader />
          <SearchBar />

          {/* Two-column layout with image on left and content on right */}
          <div className="flex flex-col md:flex-row gap-8 mb-16">
            {/* Left column - Guidance Team Image */}
            <div className="md:w-1/3">
              <GuidanceTeamCard />
            </div>
            
            {/* Right column - Feature grid */}
            <FeaturesGrid />
          </div>

          {/* FAQ Section at the bottom */}
          <FAQSection />
        </div>
      </div>
    </div>
  );
};

export default Home;
