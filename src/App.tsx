import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import HomePage from "./pages/HomePage";
import WhyChooseUs from "./pages/WhyChooseUs";
import AnimalWelfarePro from "./pages/AnimalWelfarePro";
import AnimalWelfareStudents from "./pages/AnimalWelfareStudents";
import AnimalWelfareLovers from "./pages/AnimalWelfareLovers";
import RiskAnalysisPage from "./pages/RiskAnalysisPage";
import DisabilitiesPro from "./pages/DisabilitiesPro";
import DisabilitiesStudents from "./pages/DisabilitiesStudents";
import GoodHeartedSoul from "./pages/GoodHeartedSoul";
import WhatsIncluded from "./pages/WhatsIncluded";
import SampleItineraries from "./pages/SampleItineraries";
import SafetyPage from "./pages/SafetyPage";
import FounderPage from "./pages/FounderPage";
import VisaPage from "./pages/VisaPage";
import VaccinationsPage from "./pages/VaccinationsPage";
import SafeguardingPage from "./pages/SafeguardingPage";
import CodeOfConductPage from "./pages/CodeOfConductPage";
import ApplyPage from "./pages/ApplyPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import GalleryPage from "./pages/GalleryPage";
import WhereYoullGivePage from "./pages/WhereYoullGivePage";
import EducationInitiativesPage from "./pages/EducationInitiativesPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/why-choose-us" element={<WhyChooseUs />} />
            <Route path="/animal-welfare/professionals" element={<AnimalWelfarePro />} />
            <Route path="/animal-welfare/students" element={<AnimalWelfareStudents />} />
            <Route path="/animal-welfare/animal-lovers" element={<AnimalWelfareLovers />} />
            <Route path="/animal-welfare/risk-analysis" element={<RiskAnalysisPage />} />
            <Route path="/disabilities/professionals" element={<DisabilitiesPro />} />
            <Route path="/disabilities/students" element={<DisabilitiesStudents />} />
            <Route path="/good-hearted-soul" element={<GoodHeartedSoul />} />
            
            <Route path="/sample-itineraries" element={<SampleItineraries />} />
            <Route path="/safety" element={<SafetyPage />} />
            <Route path="/founder" element={<FounderPage />} />
            <Route path="/visa" element={<VisaPage />} />
            <Route path="/vaccinations" element={<VaccinationsPage />} />
            <Route path="/safeguarding" element={<SafeguardingPage />} />
            <Route path="/code-of-conduct" element={<CodeOfConductPage />} />
            <Route path="/apply" element={<ApplyPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/where-youll-give" element={<WhereYoullGivePage />} />
            <Route path="/education-initiatives" element={<EducationInitiativesPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
