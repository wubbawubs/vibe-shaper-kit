import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { HelmetProvider } from "react-helmet-async";
import { ScrollToTop } from "@/components/ScrollToTop";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { supportedLanguages, defaultLanguage, type Language } from "@/i18n/config";

// i18n
import "@/i18n/config";

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

// Language wrapper component that syncs URL lang param with i18n
function LanguageWrapper() {
  const { lang } = useParams<{ lang: string }>();
  const { i18n } = useTranslation();

  useEffect(() => {
    const targetLang = lang && supportedLanguages.includes(lang as Language) 
      ? lang 
      : defaultLanguage;
    
    if (i18n.language !== targetLang) {
      i18n.changeLanguage(targetLang);
    }
  }, [lang, i18n]);

  return <Outlet />;
}

// Default language wrapper for non-prefixed routes
function DefaultLanguageWrapper() {
  const { i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language !== defaultLanguage) {
      i18n.changeLanguage(defaultLanguage);
    }
  }, [i18n]);

  return <Outlet />;
}

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
              {/* Language-prefixed Marketing Routes */}
              <Route path="/:lang" element={<LanguageWrapper />}>
                <Route index element={<Home />} />
                <Route path="product" element={<Product />} />
                <Route path="use-cases" element={<UseCases />} />
                <Route path="partners" element={<Partners />} />
                <Route path="pricing" element={<Pricing />} />
                <Route path="why-onerooted" element={<WhyOneRooted />} />
                <Route path="team" element={<Team />} />
                <Route path="demo" element={<Demo />} />
                <Route path="privacy" element={<Privacy />} />
                <Route path="terms" element={<Terms />} />
              </Route>

              {/* Non-prefixed routes (default to English) */}
              <Route element={<DefaultLanguageWrapper />}>
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
              </Route>
              
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
