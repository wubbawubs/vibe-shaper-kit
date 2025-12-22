import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import onerootedLogo from "@/assets/onerooted-logo.png";

const navLinks = [
  { label: "Product", href: "/product" },
  { label: "Use Cases", href: "/use-cases" },
  { label: "Partners", href: "/partners" },
  { label: "Pricing", href: "/pricing" },
  { label: "Why OneRooted", href: "/why-onerooted" },
  { label: "Team", href: "/team" },
];

export function MainNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-xl border-b border-border/50" />
      
      <nav className="container relative flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img src={onerootedLogo} alt="OneRooted" className="h-8 w-auto" />
          <span className="font-semibold text-foreground tracking-tight hidden sm:inline">
            OneRooted
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`relative px-4 py-2 text-sm transition-colors duration-200 rounded-lg ${
                isActive(link.href)
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
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

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Button asChild size="sm" className="h-10 px-5 bg-primary hover:bg-primary/90">
            <Link to="/demo" className="flex items-center gap-2">
              Request demo
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
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-3 px-4 rounded-lg text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? "text-foreground bg-muted"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3">
                <Button asChild className="w-full h-11 bg-primary hover:bg-primary/90">
                  <Link to="/demo" onClick={() => setMobileMenuOpen(false)}>
                    Request demo
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
