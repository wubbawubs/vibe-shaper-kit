import { Link } from "react-router-dom";
import onerootedLogo from "@/assets/onerooted-logo.png";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src={onerootedLogo} alt="OneRooted" className="h-8 w-auto brightness-0 invert" />
              <span className="font-medium">OneRooted</span>
            </Link>
            <p className="text-sm text-background/70">
              The Hiring OS for teams that take hiring seriously.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-medium mb-4 text-sm">Product</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li><Link to="/product" className="hover:text-background transition-colors">How it works</Link></li>
              <li><Link to="/use-cases" className="hover:text-background transition-colors">Use cases</Link></li>
              <li><Link to="/pricing" className="hover:text-background transition-colors">Pricing</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-medium mb-4 text-sm">Company</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li><Link to="/why-onerooted" className="hover:text-background transition-colors">Why OneRooted</Link></li>
              <li><Link to="/partners" className="hover:text-background transition-colors">Partners</Link></li>
              <li><Link to="/demo" className="hover:text-background transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-medium mb-4 text-sm">Legal</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li><Link to="/privacy" className="hover:text-background transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-background transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/60">
            © {new Date().getFullYear()} OneRooted. All rights reserved.
          </p>
          <p className="text-sm text-background/60">
            Part of the One-Time Group
          </p>
        </div>
      </div>
    </footer>
  );
}
