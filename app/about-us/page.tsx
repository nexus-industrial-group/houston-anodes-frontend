export const metadata = {
  title: "About Us",
};
import React from "react";
import Image from "next/image";
import Header from "../../components/Header";
import HistoryBgCarousel from "../../components/about/HistoryBgCarousel";
import CertificationsSection from "@/components/home/CertificationsSection";
import TestimonialsCarousel from "@/components/about/TestimonialsCarousel";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen font-sans text-gray-800 bg-white">
      <Header />

      {/* Hero Section - Gallery Style */}
      <header className="relative flex items-center justify-center h-screen overflow-hidden bg-gray-100">
        {/* Main Image */}
        <div className="absolute inset-0">
          <video
            src="/videos/au.webm"
            autoPlay
            loop
            muted
            className="absolute inset-0 w-full h-full object-cover"
          ></video>
        </div>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 mx-auto mt-12 max-w-5xl px-6 text-center">
          <h1 className="text-2xl font-extrabold uppercase leading-tight tracking-tight text-white drop-shadow-lg sm:text-3xl md:text-4xl lg:text-5xl">
            <span className="block text-balance">
              A Legacy of Manufacturing High Quality Sacrificial Anodes
            </span>
            <span className="mt-3 block text-balance">
              Protecting Offshore &amp; Onshore Assets Worldwide for Over 50
              Years
            </span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-pretty text-base leading-relaxed text-white/85 drop-shadow-md md:text-lg">
            Founded in 1977, Houston Anodes has been at the forefront of
            cathodic protection technology for nearly five decades.
          </p>
        </div>
      </header>

      {/* Scrolling Carousel Section - Laboratory Gallery */}
      <section className="py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold tracking-widest text-gray-900 uppercase mb-4 text-center">
            Our Quality Control
          </h2>
          <p className="text-center text-text-secondary mb-12 max-w-2xl mx-auto">
            State-of-the-art equipment and quality control laboratories
          </p>

          <div className="pb-6">
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-transform duration-300 hover:-translate-y-1">
                <h3 className="text-lg font-extrabold uppercase tracking-widest text-electric-blue text-center">
                  Raw Material Control
                </h3>
                <p className="mt-4 text-base leading-relaxed text-text-secondary text-justify">
                  All incoming materials are thoroughly inspected and tested
                  upon arrival to ensure full compliance with specifications
                  before being approved for production use.
                </p>
                <ul className="mt-8 space-y-3">
                  <li className="flex items-center gap-3 text-base text-gray-800">
                    <svg
                      className="h-5 w-5 flex-shrink-0 text-electric-blue"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Incoming materials are inspected and tested upon arrival
                  </li>
                  <li className="flex items-center gap-3 text-base text-gray-800">
                    <svg
                      className="h-5 w-5 flex-shrink-0 text-electric-blue"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Ensure compliance with required specifications
                  </li>
                  <li className="flex items-center gap-3 text-base text-gray-800">
                    <svg
                      className="h-5 w-5 flex-shrink-0 text-electric-blue"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Approved before release to production
                  </li>
                </ul>
              </div>

              <div className="flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-transform duration-300 hover:-translate-y-1">
                <h3 className="text-lg font-extrabold uppercase tracking-widest text-electric-blue text-center">
                  Per-Heat Chemical Analysis
                </h3>
                <p className="mt-4 text-base leading-relaxed text-text-secondary text-justify">
                  Detailed chemical analysis is conducted on every heat to
                  guarantee material composition accuracy, consistency, and
                  adherence to strict quality standards.
                </p>
                <ul className="mt-8 space-y-3">
                  <li className="flex items-center gap-3 text-base text-gray-800">
                    <svg
                      className="h-5 w-5 flex-shrink-0 text-electric-blue"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Chemical analysis performed on every heat
                  </li>
                  <li className="flex items-center gap-3 text-base text-gray-800">
                    <svg
                      className="h-5 w-5 flex-shrink-0 text-electric-blue"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Confirm material composition accuracy
                  </li>
                  <li className="flex items-center gap-3 text-base text-gray-800">
                    <svg
                      className="h-5 w-5 flex-shrink-0 text-electric-blue"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Maintain consistency across batches
                  </li>
                </ul>
              </div>

              <div className="flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-transform duration-300 hover:-translate-y-1">
                <h3 className="text-lg font-extrabold uppercase tracking-widest text-electric-blue text-center">
                  Standards Compliance (NACE TM-0190)
                </h3>
                <p className="mt-4 text-base leading-relaxed text-text-secondary text-justify">
                  Electrochemical testing is performed in accordance with NACE
                  TM-0190 to evaluate corrosion resistance and ensure
                  reliability in demanding environments.
                </p>
                <ul className="mt-8 space-y-3">
                  <li className="flex items-center gap-3 text-base text-gray-800">
                    <svg
                      className="h-5 w-5 flex-shrink-0 text-electric-blue"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Electrochemical testing per NACE TM-0190
                  </li>
                  <li className="flex items-center gap-3 text-base text-gray-800">
                    <svg
                      className="h-5 w-5 flex-shrink-0 text-electric-blue"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Evaluate corrosion resistance
                  </li>
                  <li className="flex items-center gap-3 text-base text-gray-800">
                    <svg
                      className="h-5 w-5 flex-shrink-0 text-electric-blue"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Ensure performance in demanding environments
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Technology - Barrier Technology Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid items-stretch gap-12 md:grid-cols-2 lg:gap-16">
            {/* Anode close-up */}
            <div className="pointer-events-none relative hidden min-h-[420px] w-full overflow-hidden rounded-xl md:block">
              <Image
                src="/images/services/g1.webp"
                alt="Houston Anode"
                fill
                sizes="(min-width: 1024px) 50vw, 45vw"
                className="object-cover"
              />
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-electric-blue mb-4">
                Our Technology
              </p>
              <h2 className="text-3xl font-extrabold uppercase leading-tight tracking-tight text-navy md:text-4xl lg:text-5xl mb-6">
                Barrier Technology
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Houston Anodes manufactures sacrificial anodes that protect
                critical energy infrastructure from corrosion. We make aluminum,
                zinc, and magnesium anodes for offshore platforms, subsea
                pipelines, wind turbines, and marine vessels.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                We manufacture with electromagnetic induction furnaces—not gas
                combustion. This is not a feature. It&apos;s a structural
                advantage.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-electric-blue/10">
                    <svg
                      className="h-4 w-4 text-electric-blue"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-700">
                    Superior electrochemical performance
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-electric-blue/10">
                    <svg
                      className="h-4 w-4 text-electric-blue"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-700">
                    Extended operational lifespan
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-electric-blue/10">
                    <svg
                      className="h-4 w-4 text-electric-blue"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-700">
                    Cost-effective protection solutions
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile-only centered image */}
        <div className="md:hidden flex justify-center pb-10 px-6">
          <Image
            src="/images/about-us/platforms.png"
            alt="Houston Anode"
            width={320}
            height={320}
            className="w-full max-w-sm h-auto rounded-xl"
          />
        </div>
      </section>

      {/* Manufacturing excellence section */}
      <section className="relative overflow-hidden py-20 px-6 md:px-12 flex items-center justify-center bg-gradient-to-br from-navy to-navy-light">
        <div className="relative z-10 w-full max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold uppercase leading-tight tracking-tight text-white md:text-4xl mb-6">
            Manufacturing Excellence
          </h2>
          <p className="text-white/90 leading-relaxed mb-4">
            Our state-of-the-art manufacturing facilities utilize advanced
            induction furnace technology to produce high-purity anodes with
            precise chemical compositions.
          </p>
          <p className="text-white/90 leading-relaxed">
            Every step of our production process is carefully monitored and
            controlled to ensure consistent quality and performance, meeting the
            most stringent industry standards.
          </p>
        </div>
      </section>

      {/* Testimonials Section - Carousel */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-br from-navy to-navy-light text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold tracking-widest uppercase mb-16 text-center">
            What Our Clients Say
          </h2>
          <TestimonialsCarousel />
        </div>
      </section>

      <CertificationsSection />
      <section className="py-20 px-6 bg-gray-900 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase tracking-wide">
            Engineered Protection for Critical Infrastructure
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Contact our team to discuss your cathodic protection requirements
            and receive expert guidance.
          </p>
          <a
            href="/contact-us"
            className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg font-bold uppercase tracking-wide hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
