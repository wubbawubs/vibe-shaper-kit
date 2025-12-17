import { MarketingLayout } from "@/components/marketing/MarketingLayout";
import { HeroSection } from "@/components/marketing/home/HeroSection";
import { ProblemSection } from "@/components/marketing/home/ProblemSection";
import { RealizationSection } from "@/components/marketing/home/RealizationSection";
import { WhatIsSection } from "@/components/marketing/home/WhatIsSection";
import { WhoItsForSection } from "@/components/marketing/home/WhoItsForSection";
import { ComparisonSection } from "@/components/marketing/home/ComparisonSection";
import { PricingPreviewSection } from "@/components/marketing/home/PricingPreviewSection";
import { SocialProofSection } from "@/components/marketing/home/SocialProofSection";
import { FinalCTASection } from "@/components/marketing/home/FinalCTASection";

const Home = () => {
  return (
    <MarketingLayout>
      <HeroSection />
      <ProblemSection />
      <RealizationSection />
      <WhatIsSection />
      <WhoItsForSection />
      <ComparisonSection />
      <PricingPreviewSection />
      <SocialProofSection />
      <FinalCTASection />
    </MarketingLayout>
  );
};

export default Home;
