import HeroSection from "@/components/home/HeroSection";
import CertificationsSection from "@/components/home/CertificationsSection";
import GlobalPresenceSection from "@/components/home/GlobalPresenceSection";
import SustainabilitySection from "@/components/home/SustainabilitySection";
import QualitySection from "@/components/home/QualitySection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CertificationsSection />
      <GlobalPresenceSection />
      <SustainabilitySection />
      <QualitySection />
    </main>
  );
}

