import Header from "@/components/Header";
import HeroSection from "@/components/home/HeroSection";
import ProductHighlightSection from "@/components/home/ProductHighlightSection";
import WhatWeDo from "@/components/home/WhatWeDo";
import CertificationsSection from "@/components/home/CertificationsSection";
import GlobalPresenceSection from "@/components/home/GlobalPresenceSection";
import SustainabilitySection from "@/components/home/SustainabilitySection";
import QualitySection from "@/components/home/QualitySection";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <ProductHighlightSection />
      <WhatWeDo />
      <CertificationsSection />
      <GlobalPresenceSection />
      <SustainabilitySection />
      <QualitySection />
    </main>
  );
}

