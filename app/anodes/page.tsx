import React from 'react';
import Image from 'next/image';
import { Layers, Shield, Zap, Droplet, Ship, Factory } from 'lucide-react';
import Header from '../../components/Header';

export default function AnodesPage() {
  return (
    <div className="min-h-screen font-sans text-gray-800 bg-white">
      <Header />

      {/* Hero Section - Based on attached image */}
      <header className="relative flex items-center justify-center h-screen overflow-hidden bg-gradient-to-b from-gray-100 to-gray-200">
        <div className="relative z-10 max-w-7xl px-6 mx-auto text-center mt-16">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl lg:text-6xl mb-3">
            PREMIUM SACRIFICIAL ANODES
          </h1>
          
          {/* Divider */}
          <div className="flex justify-center mb-6">
            <div className="h-0.5 bg-gray-400 w-4/5 rounded-full" aria-hidden="true"></div>
          </div>
          
          <p className="mt-4 mb-16 font-bold tracking-tight text-2xl md:text-3xl text-gray-700 uppercase">
            Engineered for Superior Protection
          </p>

          {/* Two Anode Types - Inspired by attached image */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {/* Aluminum */}
            <div>
              <div className="relative w-full h-[420px]">
                <Image
                  src="/images/about-us/anode.webp"
                  alt="Aluminum Anode"
                  fill
                  className="object-contain rotate-[-20deg]"
                />
              </div>

              {/* Floating shadow */}
              <div className="ml-[25%] w-2/3 h-4 bg-black/40 rounded-[50%] blur-md -mt-4 rotate-[-35deg]" />

              <div className="pt-6 text-center">
                <h3 className="text-3xl font-bold text-gray-900 mb-4 uppercase tracking-wide">
                  Aluminum
                </h3>
                <a 
                  href="#aluminum-details" 
                  className="inline-flex items-center text-gray-700 font-semibold hover:text-gray-900 transition-colors group"
                >
                  Learn More 
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>

            {/* Zinc */}
            <div>
              <div className="relative w-full h-[420px]">
                <Image
                  src="/images/anodes/zinc.webp"
                  alt="Zinc Anode"
                  fill
                  className="object-contain rotate-[-20deg]"
                />
              </div>

              {/* Floating shadow */}
              <div className="ml-[35%] w-2/3 h-4 bg-black/40 rounded-[50%] blur-md -mt-4 rotate-[-35deg]" />
              
              <div className="pt-6 text-center">
                <h3 className="text-3xl font-bold text-gray-900 mb-4 uppercase tracking-wide">
                  Zinc
                </h3>
                <a 
                  href="#zinc-details" 
                  className="inline-flex items-center text-gray-700 font-semibold hover:text-gray-900 transition-colors group"
                >
                  Learn More 
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* Anode Types Detail Section */}
      <section id="aluminum-details" className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold tracking-widest text-gray-900 uppercase mb-12 text-center">
            Anode Materials & Applications
          </h2>
          
          <div className="space-y-16">
            {/* Aluminum */}
            <div className="flex flex-col lg:flex-row gap-8 items-stretch">
              <div className="lg:w-1/2">
                <div className="relative h-full min-h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/images/anodes/pall.webp"
                    alt="Aluminum Anode"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="lg:w-1/2 space-y-4">
                <h3 className="text-3xl font-bold text-gray-900 uppercase">Aluminum Anodes</h3>
                <p className="text-gray-600 leading-relaxed">
                  High-efficiency aluminum alloy anodes provide exceptional current output and long service life. 
                  Ideal for offshore platforms, marine vessels, and brackish water applications.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <Shield className="mr-2 mt-1 text-gray-700" size={20} />
                    <span>Superior protection in seawater environments</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="mr-2 mt-1 text-gray-700" size={20} />
                    <span>Highest electrochemical efficiency</span>
                  </li>
                  <li className="flex items-start">
                    <Layers className="mr-2 mt-1 text-gray-700" size={20} />
                    <span>Lightweight and easy to install</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Zinc */}
            <div id="zinc-details" className="flex flex-col lg:flex-row-reverse gap-8 items-center">
              <div className="lg:w-1/2">
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/images/anodes/pallet.webp"
                    alt="Zinc Anode"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="lg:w-1/2 space-y-4">
                <h3 className="text-3xl font-bold text-gray-900 uppercase">Zinc Anodes</h3>
                <p className="text-gray-600 leading-relaxed">
                  Premium zinc anodes manufactured to the highest industry standards. Perfect for marine vessels, 
                  heat exchangers, and underwater structures in saltwater.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <Ship className="mr-2 mt-1 text-gray-700" size={20} />
                    <span>Proven reliability in marine applications</span>
                  </li>
                  <li className="flex items-start">
                    <Droplet className="mr-2 mt-1 text-gray-700" size={20} />
                    <span>Excellent performance in seawater</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="mr-2 mt-1 text-gray-700" size={20} />
                    <span>Cost-effective corrosion protection</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-bold tracking-widest text-electric-blue uppercase mb-12">
            Industry Applications
          </h2>

          {/* 3-column layout: cards | image | cards */}
          <div className="flex flex-col lg:flex-row items-center gap-6">

            {/* Left column — 3 cards */}
            <div className="flex flex-col gap-6 flex-1">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-left">
                <Ship size={40} strokeWidth={1.5} className="mb-4 text-gray-700" />
                <h3 className="text-base font-bold text-gray-900 mb-2 uppercase">Marine & Offshore</h3>
                <p className="text-sm text-gray-600">
                  Ships, oil platforms, port facilities, and offshore structures requiring robust corrosion protection.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-left">
                <Layers size={40} strokeWidth={1.5} className="mb-4 text-gray-700" />
                <h3 className="text-base font-bold text-gray-900 mb-2 uppercase">Pipelines</h3>
                <p className="text-sm text-gray-600">
                  Underground and subsea pipelines transporting oil, gas, and water across long distances.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-left">
                <Factory size={40} strokeWidth={1.5} className="mb-4 text-gray-700" />
                <h3 className="text-base font-bold text-gray-900 mb-2 uppercase">Storage Tanks</h3>
                <p className="text-sm text-gray-600">
                  Water storage tanks, industrial vessels, and containment systems requiring internal protection.
                </p>
              </div>
            </div>

            {/* Center — image as tall as the 3 cards */}
            <div className="relative flex-shrink-0 w-full lg:w-80 self-stretch rounded-2xl overflow-hidden">
              <Image
                src="/images/anodes/maqueta.webp"
                alt="Industry Applications"
                fill
                className="object-cover object-center"
              />
            </div>

            {/* Right column — 3 cards */}
            <div className="flex flex-col gap-6 flex-1">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-left">
                <Droplet size={40} strokeWidth={1.5} className="mb-4 text-gray-700" />
                <h3 className="text-base font-bold text-gray-900 mb-2 uppercase">Water Infrastructure</h3>
                <p className="text-sm text-gray-600">
                  Municipal water systems, cooling towers, and heat exchangers in various industries.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-left">
                <Zap size={40} strokeWidth={1.5} className="mb-4 text-gray-700" />
                <h3 className="text-base font-bold text-gray-900 mb-2 uppercase">Power Generation</h3>
                <p className="text-sm text-gray-600">
                  Power plants, cooling systems, and electrical infrastructure requiring corrosion management.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-left">
                <Shield size={40} strokeWidth={1.5} className="mb-4 text-gray-700" />
                <h3 className="text-base font-bold text-gray-900 mb-2 uppercase">Industrial Facilities</h3>
                <p className="text-sm text-gray-600">
                  Chemical plants, refineries, and manufacturing facilities with critical infrastructure.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Technical Excellence - Similar to "The Houston Commitment" */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-xl font-bold tracking-widest text-gray-500 uppercase mb-16">
            The Houston Advantage
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 uppercase">
            
            {/* Top Left */}
            <div className="pb-12 border-b-2 border-gray-200 md:border-r-2 md:pr-8 flex items-center justify-center md:justify-end text-center md:text-right">
              PRECISE<br/> COMPOSITION
            </div>
            
            {/* Top Right */}
            <div className="py-12 md:py-0 md:pb-12 border-b-2 border-gray-200 md:pl-8 flex items-center justify-center md:justify-start text-center md:text-left">
              MAXIMUM<br/> EFFICIENCY
            </div>
            
            {/* Bottom Left */}
            <div className="py-12 md:pt-12 md:pb-0 md:border-r-2 border-gray-200 md:pr-8 flex items-center justify-center md:justify-end text-center md:text-right">
              CERTIFIED<br/> QUALITY
            </div>
            
            {/* Bottom Right */}
            <div className="pt-12 md:pl-8 flex items-center justify-center md:justify-start text-center md:text-left border-t-2 md:border-t-0 border-gray-200 md:border-none">
              PROVEN<br/> PERFORMANCE
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
