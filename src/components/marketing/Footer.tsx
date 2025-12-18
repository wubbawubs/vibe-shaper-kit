import { Link } from "react-router-dom";
import onerootedLogo from "@/assets/onerooted-logo.png";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-20">
      <div className="container">
        <div className="grid md:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src={onerootedLogo} alt="OneRooted" className="h-8 w-auto brightness-0 invert" />
              <span className="font-semibold text-lg">OneRooted</span>
            </Link>
            <p className="text-background/60 max-w-sm leading-relaxed">
              The Hiring OS for teams that take hiring seriously. Replace fragmented tools with one intelligent system.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-medium mb-5 text-sm uppercase tracking-wider text-background/80">Product</h4>
            <ul className="space-y-4 text-sm text-background/60">
              <li><Link to="/product" className="hover:text-background transition-colors">How it works</Link></li>
              <li><Link to="/use-cases" className="hover:text-background transition-colors">Use cases</Link></li>
              <li><Link to="/pricing" className="hover:text-background transition-colors">Pricing</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-medium mb-5 text-sm uppercase tracking-wider text-background/80">Company</h4>
            <ul className="space-y-4 text-sm text-background/60">
              <li><Link to="/why-onerooted" className="hover:text-background transition-colors">Why OneRooted</Link></li>
              <li><Link to="/team" className="hover:text-background transition-colors">Team</Link></li>
              <li><Link to="/partners" className="hover:text-background transition-colors">Partners</Link></li>
              <li><Link to="/demo" className="hover:text-background transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-medium mb-5 text-sm uppercase tracking-wider text-background/80">Legal</h4>
            <ul className="space-y-4 text-sm text-background/60">
              <li><Link to="/privacy" className="hover:text-background transition-colors">Privacy</Link></li>
              <li><Link to="/terms" className="hover:text-background transition-colors">Terms</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/40">
            © {new Date().getFullYear()} OneRooted. All rights reserved.
          </p>
          <p className="text-sm text-background/40">
            Part of the One-Time Group
          </p>
        </div>
      </div>
    </footer>
  );
}
