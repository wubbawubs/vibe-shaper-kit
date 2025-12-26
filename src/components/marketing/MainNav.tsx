import { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { Menu, X, ArrowRight, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import onerootedLogo from "@/assets/onerooted-logo.png";
import { useLanguageFromUrl, getLocalizedPath } from "@/i18n/useLanguage";
import { supportedLanguages, languageNames, type Language } from "@/i18n/config";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function MainNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { lang } = useParams<{ lang: string }>();
  const { t } = useTranslation();
  const { currentLanguage, changeLanguage } = useLanguageFromUrl();

  const navLinks = [
    { labelKey: "nav.product", href: "/product" },
    // { labelKey: "nav.useCases", href: "/use-cases" }, // Hidden until we have real use cases
    { labelKey: "nav.partners", href: "/partners" },
    { labelKey: "nav.pricing", href: "/pricing" },
    { labelKey: "nav.whyOneRooted", href: "/why-onerooted" },
    { labelKey: "nav.team", href: "/team" },
  ];

  const getLocalizedHref = (href: string) => {
    return lang ? getLocalizedPath(href, lang as Language) : href;
  };

  const isActive = (href: string) => {
    const localizedHref = getLocalizedHref(href);
    return location.pathname === localizedHref || location.pathname === href;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-xl border-b border-border/50" />
      
      <nav className="container relative flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to={getLocalizedHref("/")} className="flex items-center gap-3 group">
          <img src={onerootedLogo} alt="One Rooted" className="h-8 w-auto" />
          <span className="font-semibold text-foreground tracking-tight hidden sm:inline">
            One Rooted
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={getLocalizedHref(link.href)}
              className={`relative px-4 py-2 text-sm transition-colors duration-200 rounded-lg ${
                isActive(link.href)
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t(link.labelKey)}
              {isActive(link.href) && (
                <motion.div
                  layoutId="nav-active"
                  className="absolute inset-0 bg-muted/50 rounded-lg -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Desktop CTA + Language Switcher */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Language Switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="h-10 px-3 gap-2">
                <Globe className="h-4 w-4" />
                <span className="uppercase text-xs font-medium">{currentLanguage}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {supportedLanguages.map((langCode) => (
                <DropdownMenuItem
                  key={langCode}
                  onClick={() => changeLanguage(langCode)}
                  className={currentLanguage === langCode ? "bg-muted" : ""}
                >
                  {languageNames[langCode]}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button asChild size="sm" className="h-10 px-5 bg-primary hover:bg-primary/90">
            <Link to={getLocalizedHref("/demo")} className="flex items-center gap-2">
              {t("nav.requestDemo")}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-foreground rounded-lg hover:bg-muted transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-16 left-0 right-0 bg-background border-b border-border shadow-lg z-50"
          >
            <div className="container py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={getLocalizedHref(link.href)}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-3 px-4 rounded-lg text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? "text-foreground bg-muted"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  {t(link.labelKey)}
                </Link>
              ))}
              
              {/* Mobile Language Switcher */}
              <div className="flex gap-2 py-3 px-4">
                {supportedLanguages.map((langCode) => (
                  <Button
                    key={langCode}
                    variant={currentLanguage === langCode ? "default" : "outline"}
                    size="sm"
                    onClick={() => {
                      changeLanguage(langCode);
                      setMobileMenuOpen(false);
                    }}
                    className="flex-1"
                  >
                    {languageNames[langCode]}
                  </Button>
                ))}
              </div>

              <div className="pt-3">
                <Button asChild className="w-full h-11 bg-primary hover:bg-primary/90">
                  <Link to={getLocalizedHref("/demo")} onClick={() => setMobileMenuOpen(false)}>
                    {t("nav.requestDemo")}
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
