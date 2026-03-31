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
            <section className="py-20 px-6 bg-gray-900 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase tracking-wide">
                  Safeguard Your Infrastructure Today
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Contact our team to discuss your cathodic protection requirements and receive expert guidance.
          </p>
          <a 
            href="/contact-us" 
            className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg font-bold uppercase tracking-wide hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </main>
  );
}

