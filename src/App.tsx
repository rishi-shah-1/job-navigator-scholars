
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SocialShare from "./components/SocialShare";
import Home from "./pages/Home";
import JobListings from "./pages/JobListings";
import SubmitJob from "./pages/SubmitJob";
import AdminDashboard from "./pages/AdminDashboard";
import JobDetail from "./pages/JobDetail";
import SchoolMap from "./pages/SchoolMap";
import NotFound from "./pages/NotFound";
import ResumeBuilder from "./pages/ResumeBuilder";
import ApplicationTracker from "./pages/ApplicationTracker";
import EmployerProfiles from "./pages/EmployerProfiles";
import EmployerReviews from "./pages/EmployerReviews";
import Support from "./pages/Support";
import JobRecommendations from "./pages/JobRecommendations";
import OnlineCourses from "./pages/OnlineCourses";
import GuidanceEvents from "./pages/GuidanceEvents";
import CareerInsights from "./pages/CareerInsights";
import WorkPermits from "./pages/WorkPermits";
import Alerts from "./pages/Alerts";
import Sources from "./pages/Sources";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <BrowserRouter>
          <div className="min-h-screen bg-gray-50 flex flex-col">
            <Toaster />
            <Sonner />
            <Navbar />
            <SocialShare />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/map" element={<SchoolMap />} />
                <Route path="/jobs" element={<JobListings />} />
                <Route path="/jobs/:id" element={<JobDetail />} />
                <Route path="/submit" element={<SubmitJob />} />
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/resume-builder" element={<ResumeBuilder />} />
                <Route path="/applications" element={<ApplicationTracker />} />
                <Route path="/employers" element={<EmployerProfiles />} />
                <Route path="/reviews" element={<EmployerReviews />} />
                <Route path="/support" element={<Support />} />
                <Route path="/recommendations" element={<JobRecommendations />} />
                <Route path="/courses" element={<OnlineCourses />} />
                <Route path="/events" element={<GuidanceEvents />} />
                <Route path="/insights" element={<CareerInsights />} />
                <Route path="/permits" element={<WorkPermits />} />
                <Route path="/alerts" element={<Alerts />} />
                <Route path="/sources" element={<Sources />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
