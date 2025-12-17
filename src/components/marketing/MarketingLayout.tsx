import { ReactNode } from "react";
import { MainNav } from "./MainNav";
import { Footer } from "./Footer";

interface MarketingLayoutProps {
  children: ReactNode;
}

export function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNav />
      <main className="flex-1 pt-16 md:pt-18">
        {children}
      </main>
      <Footer />
    </div>
  );
}
