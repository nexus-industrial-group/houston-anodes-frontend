import Header from "@/components/Header";
import HeroSection from "@/components/home/HeroSection";
import ProductHighlightSection from "@/components/home/ProductHighlightSection";
import WhatWeDo from "@/components/home/WhatWeDo";
import CertificationsStandards from "@/components/home/CertificationsStandards";
import GlobalPresenceSection from "@/components/home/GlobalPresenceSection";
import SustainabilitySection from "@/components/home/SustainabilitySection";
import SuccessStoriesSection from "@/components/home/SuccessStoriesSection";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <ProductHighlightSection />
      <WhatWeDo />
      <CertificationsStandards />
      <GlobalPresenceSection />
      <SustainabilitySection />
      <SuccessStoriesSection />
    </main>
  );
}

