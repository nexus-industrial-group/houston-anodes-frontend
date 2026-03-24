import React from 'react';
import Image from 'next/image';
import Header from '../../components/Header';
import HistoryBgCarousel from '../../components/about/HistoryBgCarousel';

export default function AboutUsPage() {
  return (
    <div className="min-h-screen font-sans text-gray-800 bg-white">
      <Header />

      {/* Hero Section - Gallery Style */}
      <header className="relative flex items-center justify-center h-screen overflow-hidden bg-gray-100">
        {/* Main Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/about-us/about-us.webp"
            alt="About Houston Anodes"
            fill
            className="object-cover"
            priority
          />
        </div>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 max-w-4xl px-6 mx-auto text-center mt-12">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl drop-shadow-lg leading-tight">
            A Legacy of Purity.
            <br />A Future of Protection.
          </h1>
          <p className="mt-6 text-lg text-white/90 drop-shadow-md max-w-2xl mx-auto">
            Founded in 1977, Houston Anodes has been at the forefront of
            cathodic protection technology for nearly five decades.
          </p>
        </div>
      </header>

      {/* Our Technology - Barrier Technology Section */}
      <section className="relative overflow-hidden bg-white">

        {/* Anode close-up — massive background piece, bleeds behind everything */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-180 -translate-y-1/2 flex items-center justify-center w-[900px] rotate-[-15deg]">
          <Image
            src="/images/about-us/anode.webp"
            alt="Houston Anode"
            width={0}
            height={0}
            sizes="1100px"
            className="h-auto w-full"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
          <div className="ml-auto max-w-lg py-20 lg:py-28">
            <p className="text-sm font-semibold uppercase tracking-widest text-electric-blue mb-4">
              Our Technology
            </p>
            <h2 className="text-3xl font-extrabold uppercase leading-tight tracking-tight text-navy md:text-4xl lg:text-5xl mb-6">
              Barrier Technology
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Houston Anodes manufactures sacrificial anodes that protect critical energy infrastructure from corrosion. We make aluminum, zinc, and magnesium anodes for offshore platforms, subsea pipelines, wind turbines, and marine vessels.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              We manufacture with electromagnetic induction furnaces—not gas combustion. This is not a feature. It&apos;s a structural advantage.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-electric-blue/10">
                  <svg className="h-4 w-4 text-electric-blue" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-gray-700">Superior electrochemical performance</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-electric-blue/10">
                  <svg className="h-4 w-4 text-electric-blue" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-gray-700">Extended operational lifespan</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-electric-blue/10">
                  <svg className="h-4 w-4 text-electric-blue" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-gray-700">Cost-effective protection solutions</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* History Timeline Section */}
      <section className="relative overflow-hidden py-20 px-6 md:px-12 bg-gray-50">
        <HistoryBgCarousel />
        <div className="relative z-10 max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold tracking-widest text-electric-blue uppercase mb-4 text-center">
            Our History
          </h2>
          <p className="text-center text-text-secondary mb-16 max-w-2xl mx-auto">
            Nearly five decades of innovation, quality, and global expansion
          </p>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 transform -translate-x-1/2"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-20 md:gap-y-16">
              {/* 1977 - Founded (Left) */}
              <div className="relative md:text-right">
                <div className="md:pr-12">
                  <div className="flex items-center md:justify-end mb-2">
                    <div className="w-3 h-3 bg-electric-blue rounded-full mr-3 md:mr-0 md:ml-3 md:order-2"></div>
                    <span className="text-xl font-bold text-gray-900">
                      1977 - Founded
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Established Aluminum & Zinc Anode Manufacturing in Houston,
                    Texas
                  </p>
                </div>
              </div>

              {/* 1980 - Global Reach (Right) */}
              <div className="relative">
                <div className="md:pl-12">
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 bg-electric-blue rounded-full mr-3"></div>
                    <span className="text-xl font-bold text-gray-900">
                      1980 - Industry Growth
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Expanded operations focusing on aluminum industry
                    advancements
                  </p>
                </div>
              </div>

              {/* 1986 - Quality & Innovation (Left) */}
              <div className="relative md:text-right">
                <div className="md:pr-12">
                  <div className="flex items-center md:justify-end mb-2">
                    <div className="w-3 h-3 bg-electric-blue rounded-full mr-3 md:mr-0 md:ml-3 md:order-2"></div>
                    <span className="text-xl font-bold text-gray-900">
                      1986 - Quality & Innovation
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Pioneered quality innovation and corrosion protection
                    technology
                  </p>
                </div>
              </div>

              {/* 1995 - Technology (Right) */}
              <div className="relative">
                <div className="md:pl-12">
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 bg-electric-blue rounded-full mr-3"></div>
                    <span className="text-xl font-bold text-gray-900">
                      1995 - ISO Certification
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Achieved ISO 9001 certification for quality management
                    systems
                  </p>
                </div>
              </div>

              {/* 2022 - Global Reach (Left) */}
              <div className="relative md:text-right">
                <div className="md:pr-12">
                  <div className="flex items-center md:justify-end mb-2">
                    <div className="w-3 h-3 bg-electric-blue rounded-full mr-3 md:mr-0 md:ml-3 md:order-2"></div>
                    <span className="text-xl font-bold text-gray-900">
                      2022 - Global Reach
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Expanded international presence with 1000+ projects
                    worldwide
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing excellence section */}
      <section className="relative overflow-hidden py-20 px-6 md:px-12 min-h-[500px] flex items-center">
        <Image
          src="/images/about-us/man_exc.webp"
          alt="Manufacturing Excellence"
          fill
          className="object-cover"
        />
        <div className="relative z-10 ml-auto mr-12 max-w-lg text-right">
          <h2 className="text-3xl font-extrabold uppercase leading-tight tracking-tight text-white md:text-4xl mb-6">
            Manufacturing Excellence
          </h2>
          <p className="text-white/90 leading-relaxed mb-4">
            Our state-of-the-art manufacturing facilities utilize advanced induction furnace technology to produce high-purity anodes with precise chemical compositions.
          </p>
          <p className="text-white/90 leading-relaxed">
            Every step of our production process is carefully monitored and controlled to ensure consistent quality and performance, meeting the most stringent industry standards.
          </p>
        </div>
      </section>

      {/* Testimonials Section - Quotes */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-br from-navy to-navy-light text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold tracking-widest uppercase mb-16 text-center">
            What Our Clients Say
          </h2>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Quote 1 */}
            <div className="group h-72 [perspective:1000px]">
              <div className="relative h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front */}
                <div className="absolute inset-0 [backface-visibility:hidden] bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 bg-electric-blue/20 rounded-full flex items-center justify-center mb-4">
                    <span className="text-electric-blue font-bold text-xl">JM</span>
                  </div>
                  <p className="font-bold text-lg">John Mitchell</p>
                  <p className="text-sm text-white/70 mt-1">Engineering Director, Maritime Solutions Corp</p>
                </div>
                {/* Back */}
                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 flex flex-col justify-center">
                  <svg className="w-10 h-10 text-electric-blue mb-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                  <p className="text-base leading-relaxed italic">
                    &ldquo;Houston Anodes has been our trusted partner for over 15 years. Their commitment to quality and technical expertise is unmatched in the industry.&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* Quote 2 */}
            <div className="group h-72 [perspective:1000px]">
              <div className="relative h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front */}
                <div className="absolute inset-0 [backface-visibility:hidden] bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 bg-electric-blue/20 rounded-full flex items-center justify-center mb-4">
                    <span className="text-electric-blue font-bold text-xl">SR</span>
                  </div>
                  <p className="font-bold text-lg">Sarah Rodriguez</p>
                  <p className="text-sm text-white/70 mt-1">VP Operations, Global Energy Partners</p>
                </div>
                {/* Back */}
                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 flex flex-col justify-center">
                  <svg className="w-10 h-10 text-electric-blue mb-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                  <p className="text-base leading-relaxed italic">
                    &ldquo;The performance and reliability of Houston Anodes products have significantly reduced our maintenance costs and extended the life of our offshore structures.&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* Quote 3 */}
            <div className="group h-72 [perspective:1000px]">
              <div className="relative h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front */}
                <div className="absolute inset-0 [backface-visibility:hidden] bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 bg-electric-blue/20 rounded-full flex items-center justify-center mb-4">
                    <span className="text-electric-blue font-bold text-xl">DK</span>
                  </div>
                  <p className="font-bold text-lg">David Kim</p>
                  <p className="text-sm text-white/70 mt-1">Lead Engineer, Infrastructure Solutions Inc</p>
                </div>
                {/* Back */}
                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 flex flex-col justify-center">
                  <svg className="w-10 h-10 text-electric-blue mb-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                  <p className="text-base leading-relaxed italic">
                    &ldquo;Houston Anodes delivers consistent quality and exceptional customer service. They understand our technical requirements and always exceed expectations.&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* Quote 4 */}
            <div className="group h-72 [perspective:1000px]">
              <div className="relative h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front */}
                <div className="absolute inset-0 [backface-visibility:hidden] bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 bg-electric-blue/20 rounded-full flex items-center justify-center mb-4">
                    <span className="text-electric-blue font-bold text-xl">MT</span>
                  </div>
                  <p className="font-bold text-lg">Maria Torres</p>
                  <p className="text-sm text-white/70 mt-1">Project Manager, Pacific Marine Systems</p>
                </div>
                {/* Back */}
                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 flex flex-col justify-center">
                  <svg className="w-10 h-10 text-electric-blue mb-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                  <p className="text-base leading-relaxed italic">
                    &ldquo;We&apos;ve used Houston Anodes across multiple international projects. Their global reach and local expertise make them an invaluable partner.&rdquo;
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

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
                  All incoming materials are thoroughly inspected and tested upon arrival to ensure full compliance with specifications before being approved for production use.
                </p>
                <ul className="mt-8 space-y-3">
                  <li className="flex items-center gap-3 text-base text-gray-800">
                    <svg className="h-5 w-5 flex-shrink-0 text-electric-blue" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                    </svg>
                    Incoming materials are inspected and tested upon arrival
                  </li>
                  <li className="flex items-center gap-3 text-base text-gray-800">
                    <svg className="h-5 w-5 flex-shrink-0 text-electric-blue" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                    </svg>
                    Ensures compliance with required specifications
                  </li>
                  <li className="flex items-center gap-3 text-base text-gray-800">
                    <svg className="h-5 w-5 flex-shrink-0 text-electric-blue" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
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
                  Detailed chemical analysis is conducted on every heat to guarantee material composition accuracy, consistency, and adherence to strict quality standards.
                </p>
                <ul className="mt-8 space-y-3">
                  <li className="flex items-center gap-3 text-base text-gray-800">
                    <svg className="h-5 w-5 flex-shrink-0 text-electric-blue" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                    </svg>
                    Chemical analysis performed on every heat
                  </li>
                  <li className="flex items-center gap-3 text-base text-gray-800">
                    <svg className="h-5 w-5 flex-shrink-0 text-electric-blue" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                    </svg>
                    Confirms material composition accuracy
                  </li>
                  <li className="flex items-center gap-3 text-base text-gray-800">
                    <svg className="h-5 w-5 flex-shrink-0 text-electric-blue" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                    </svg>
                    Maintains consistency across batches
                  </li>
                </ul>
              </div>

              <div className="flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-transform duration-300 hover:-translate-y-1">
                <h3 className="text-lg font-extrabold uppercase tracking-widest text-electric-blue text-center">
                  Standards Compliance (NACE TM-0190)
                </h3>
                <p className="mt-4 text-base leading-relaxed text-text-secondary text-justify">
                  Electrochemical testing is performed in accordance with NACE TM-0190 to evaluate corrosion resistance and ensure reliability in demanding environments.
                </p>
                <ul className="mt-8 space-y-3">
                  <li className="flex items-center gap-3 text-base text-gray-800">
                    <svg className="h-5 w-5 flex-shrink-0 text-electric-blue" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                    </svg>
                    Electrochemical testing per NACE TM-0190
                  </li>
                  <li className="flex items-center gap-3 text-base text-gray-800">
                    <svg className="h-5 w-5 flex-shrink-0 text-electric-blue" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                    </svg>
                    Evaluates corrosion resistance
                  </li>
                  <li className="flex items-center gap-3 text-base text-gray-800">
                    <svg className="h-5 w-5 flex-shrink-0 text-electric-blue" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                    </svg>
                    Ensures performance in demanding environments
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gray-900 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase tracking-wide">
            Partner With Houston Anodes
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Join industry leaders worldwide who trust Houston Anodes for
            superior corrosion protection solutions.
          </p>
          <a
            href="/contact-us"
            className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg font-bold uppercase tracking-wide hover:bg-gray-100 transition-colors"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
}
