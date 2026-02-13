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
import { AuthProvider } from "@/contexts/AuthContext";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import { CookieConsent } from "@/components/CookieConsent";
import { SidebarProvider } from "@/contexts/SidebarContext";

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
import Light from "./pages/Light";
import BrandGuide from "./pages/BrandGuide";
import EmailTemplates from "./pages/EmailTemplates";
import PitchDeck from "./pages/PitchDeck";
import SEOLandingPage from "./pages/seo/SEOLandingPage";
import SEOAudit from "./pages/SEOAudit";

// Auth pages
import Auth from "./pages/Auth";

// Dashboard pages
import Dashboard from "./pages/Dashboard";
import Vacatures from "./pages/Vacatures";
import VacancyDetail from "./pages/VacancyDetail";
import Kandidaten from "./pages/Kandidaten";
import Pipeline from "./pages/Pipeline";
import Rapportages from "./pages/Rapportages";
import Instellingen from "./pages/Instellingen";

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
        <AuthProvider>
          <SidebarProvider>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              <CookieConsent />
              <BrowserRouter>
                <ScrollToTop />
                <Routes>
                  {/* Auth routes */}
                  <Route path="/auth" element={<Auth />} />

                  {/* Protected Dashboard Routes */}
                  <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                  <Route path="/vacatures" element={<ProtectedRoute><Vacatures /></ProtectedRoute>} />
                  <Route path="/vacatures/:id" element={<ProtectedRoute><VacancyDetail /></ProtectedRoute>} />
                  <Route path="/kandidaten" element={<ProtectedRoute><Kandidaten /></ProtectedRoute>} />
                  <Route path="/pipeline" element={<ProtectedRoute><Pipeline /></ProtectedRoute>} />
                  <Route path="/rapportages" element={<ProtectedRoute><Rapportages /></ProtectedRoute>} />
                  <Route path="/instellingen" element={<ProtectedRoute><Instellingen /></ProtectedRoute>} />

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
                    <Route path="light" element={<Light />} />
                    <Route path="pitch-deck" element={<PitchDeck />} />
                    {/* SEO Landing Pages */}
                    <Route path=":seoSlug" element={<SEOLandingPage />} />
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
                    <Route path="/light" element={<Light />} />
                    <Route path="/pitch-deck" element={<PitchDeck />} />
                    {/* SEO Landing Pages (EN default) */}
                    <Route path="/:seoSlug" element={<SEOLandingPage />} />
                  </Route>
                  
                  {/* Utility Routes */}
                  <Route path="/brand-guide" element={<BrandGuide />} />
                  <Route path="/email-templates" element={<EmailTemplates />} />
                  <Route path="/seo-audit" element={<SEOAudit />} />
                  
                  {/* Fallback */}
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </BrowserRouter>
            </TooltipProvider>
          </SidebarProvider>
        </AuthProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </HelmetProvider>
);

export default App;
