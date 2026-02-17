import { MarketingLayout } from "@/components/marketing/MarketingLayout";
import { HeroSection } from "@/components/marketing/home/HeroSection";
import { ProblemSection } from "@/components/marketing/home/ProblemSection";
import { WhatIsSection } from "@/components/marketing/home/WhatIsSection";
import { WhoItsForSection } from "@/components/marketing/home/WhoItsForSection";
import { ComparisonSection } from "@/components/marketing/home/ComparisonSection";
import { PricingPreviewSection } from "@/components/marketing/home/PricingPreviewSection";
// import { SocialProofSection } from "@/components/marketing/home/SocialProofSection"; // Hidden until we have real testimonials
import { FAQSection } from "@/components/marketing/home/FAQSection";
import { FinalCTASection } from "@/components/marketing/home/FinalCTASection";
import { DemoCTAPopup } from "@/components/marketing/DemoCTAPopup";
import { SEO } from "@/components/SEO";

const Home = () => {
  return (
    <MarketingLayout>
      <SEO 
        title="The Hiring OS for Teams That Take Hiring Seriously"
        description="Replace scattered recruitment tools with one intelligent system. OneRooted ranks candidates, streamlines workflows, and drives better hiring decisions."
        url="https://onerooted.nl"
      />
      <HeroSection />
      <ProblemSection />
      <WhatIsSection />
      <WhoItsForSection />
      <ComparisonSection />
      <PricingPreviewSection />
      {/* <SocialProofSection /> */}
      <FAQSection />
      <FinalCTASection />
      <DemoCTAPopup />
    </MarketingLayout>
  );
};

export default Home;
