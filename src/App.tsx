import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { HelmetProvider } from "react-helmet-async";
import { ScrollToTop } from "@/components/ScrollToTop";

// Marketing pages
import Home from "./pages/Home";
import Product from "./pages/Product";
import UseCases from "./pages/UseCases";
import Partners from "./pages/Partners";
import Pricing from "./pages/Pricing";
import WhyOneRooted from "./pages/WhyOneRooted";
import Team from "./pages/Team";
import Demo from "./pages/Demo";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import BrandGuide from "./pages/BrandGuide";
import EmailTemplates from "./pages/EmailTemplates";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              {/* Marketing Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/product" element={<Product />} />
              <Route path="/use-cases" element={<UseCases />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/why-onerooted" element={<WhyOneRooted />} />
              <Route path="/team" element={<Team />} />
              <Route path="/demo" element={<Demo />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              
              {/* Utility Routes */}
              <Route path="/brand-guide" element={<BrandGuide />} />
              <Route path="/email-templates" element={<EmailTemplates />} />
              
              {/* Fallback */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </HelmetProvider>
);

export default App;
