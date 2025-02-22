
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
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
import Support from "./pages/Support";
import JobRecommendations from "./pages/JobRecommendations";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <div className="min-h-screen bg-gray-50">
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Navbar />
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
            <Route path="/support" element={<Support />} />
            <Route path="/recommendations" element={<JobRecommendations />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
