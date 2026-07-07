import React from "react";
import Image from "next/image";
import { Layers, Shield, Zap, Droplet, Ship, Factory } from "lucide-react";
import Header from "../../components/Header";
import CatalogCTA from "../../components/CatalogCTA";

export const metadata = {
  title: "Anodes",
};

export default function AnodesPage() {
  return (
    <div className="min-h-screen font-sans text-gray-800 bg-white">
      <Header />

      {/* Hero Section */}
      <header className="h-[100dvh] overflow-hidden relative flex flex-col">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" style={{ backgroundImage: 'url(/images/services/g15.webp)' }} />
        <div className="absolute inset-0 bg-black/50 z-10" />

        <div className="relative z-20">
          {/* Title strip — compact on mobile, spacious on desktop */}
        <div className="shrink-0 text-center pt-20 md:pt-28 px-4 pb-2 md:pb-4">
          <h1 className="text-2xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl mb-2 md:mb-3">
            PREMIUM SACRIFICIAL ANODES
          </h1>
          <div className="flex justify-center mb-2 md:mb-4">
            <div className="h-0.5 bg-gray-400 w-4/5 rounded-full" aria-hidden="true" />
          </div>
          <p className="font-bold tracking-tight text-sm md:text-3xl text-electric-blue uppercase">
            Engineered for Superior Protection
          </p>
        </div>

        {/* Products — stacked 50/50 on mobile, side-by-side on desktop */}
        <div className="flex-1 h-full min-h-0 flex flex-col md:flex-row md:max-w-7xl md:mx-auto md:w-full md:px-6 md:gap-8 md:pb-8">

          {/* Aluminum */}
          <div className="flex-1 min-h-0 flex flex-col items-center justify-center border-b border-gray-300 md:border-0">
            <div className="shrink-0 text-center py-3 md:pt-4 md:pb-2">
              <h3 className="text-xl md:text-5xl font-bold text-white mb-1 md:mb-4 uppercase tracking-wide">
                Aluminum
              </h3>
              <a
                href="#aluminum-details"
                className="inline-flex items-center text-white/80 font-semibold hover:text-electric-blue transition-colors group text-sm md:text-base"
              >
                Learn More
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>

          {/* Zinc */}
          <div className="flex-1 min-h-0 flex flex-col items-center justify-center">
            
            <div className="shrink-0 text-center py-3 md:pt-4 md:pb-2">
              <h3 className="text-xl md:text-5xl font-bold text-white mb-1 md:mb-4 uppercase tracking-wide">
                Zinc
              </h3>
              <a
                href="#zinc-details"
                className="inline-flex items-center text-white/80 font-semibold hover:text-electric-blue transition-colors group text-sm md:text-base"
              >
                Learn More
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </header>

      {/* Our Anodes — Overview Section */}
      <section className="relative bg-navy py-24 px-6 md:px-16 overflow-hidden">
        {/* Background glow */}
        <div className="pointer-events-none absolute left-1/3 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/15 blur-[120px]" />

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          {/* Left — copy */}
          <div className="flex-1 space-y-6">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-blue">
              Our Anodes
            </p>
            <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
              <span className="text-white">Aluminum &amp; Zinc.</span>
              <br />
              <span className="text-primary-blue">Any Shape.</span>
              <br />
              <span className="text-primary-blue">Any Specification.</span>
            </h2>
            <p className="text-text-on-dark text-base leading-relaxed max-w-md">
              Houston Anodes manufactures sacrificial anodes in aluminum and
              zinc alloys across six product families — from offshore platforms
              to vessel interiors. Every anode is custom-engineered, tested, and
              shipped with full traceability documentation.
            </p>
            <div className="flex gap-3 pt-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white">
                <span className="w-2 h-2 rounded-full bg-primary-blue" />
                Aluminum Alloy
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white">
                <span className="w-2 h-2 rounded-full bg-electric-orange" />
                Zinc Alloy
              </span>
            </div>
          </div>

          {/* Right — stat cards */}
          <div className="flex-1 grid grid-cols-2 gap-4 w-full max-w-md">
            {[
              { value: "5", unit: "lbs", label: "MINIMUM\nANODE WEIGHT" },
              { value: "2,100", unit: "lbs", label: "MAXIMUM\nANODE WEIGHT" },
              { value: "6", unit: "", label: "PRODUCT\nFAMILIES" },
              { value: "∞", unit: "", label: "CUSTOM SIZES\nON REQUEST" },
            ].map(({ value, unit, label }) => (
              <div
                key={label}
                className="rounded-2xl border border-white/10 bg-navy-light p-6 flex flex-col gap-2"
              >
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black text-white">
                    {value}
                  </span>
                  {unit && (
                    <span className="text-lg font-semibold text-white/70">
                      {unit}
                    </span>
                  )}
                </div>
                <p className="text-xs font-bold tracking-widest text-white/40 whitespace-pre-line uppercase">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Anode Materials & Applications — 2-column detail cards */}
      <section
        id="aluminum-details"
        className="py-20 px-6 md:px-12 bg-gray-100"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            {/* ── ALUMINUM ALLOY ANODES ── */}
            <div className="rounded-2xl overflow-hidden shadow-lg bg-white flex flex-col">
              {/* Header */}
              <div className="bg-navy px-8 py-7">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent/70 mb-2">
                  Material Type 01
                </p>
                <h3 className="text-3xl font-extrabold text-white">
                  Aluminum Alloy Anodes
                </h3>
              </div>

              {/* Description */}
              <div className="px-8 py-6 border-b border-gray-100">
                <p className="text-sm text-gray-600 leading-relaxed">
                  Cast in low-iron, high-purity aluminum alloys with traces of
                  indium, zinc, and silicon. Delivers a current output capacity
                  over three times that of zinc — making it the preferred choice
                  for offshore and deepwater applications.
                </p>
              </div>

              {/* Photo */}
              <div className="relative w-full h-56 bg-gray-50 flex flex-col items-center justify-center">
                <Image
                  src="/products/heater-treater-no-bg.webp"
                  alt="Aluminum Anode"
                  fill
                  className="object-contain p-6"
                />
                <p className="absolute bottom-3 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  Aluminum Anode Photo
                </p>
              </div>

              {/* Alloy Types */}
              <div className="px-8 py-6 border-t border-gray-100 space-y-3">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary-blue">
                  Alloy Types Available
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Type Galvalum III", "Type Galvalum III DCW"].map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center gap-1.5 rounded-full border border-navy/20 bg-navy/5 px-3 py-1 text-xs font-semibold text-navy"
                    >
                      ✓ {t}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-gray-500 leading-relaxed pt-1">
                  Primary aluminum at 99.9% purity. Traces of indium (99.9%
                  pure), zinc, and silicon. Never melted from scrap or recycled
                  anodic material.
                </p>
              </div>

              {/* Chemical Composition Note */}
              <div className="px-8 pb-6 space-y-2 border-t border-gray-100 pt-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary-blue">
                  Chemical Composition Note
                </p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Exact chemical composition specified at time of order and
                  verified against Material Test Reports (MTRs) before
                  production release. Chemical analysis performed on every heat
                  using Bruker–Quantron Magellan Q8 spectrometer.
                </p>
              </div>

              {/* Chemical Composition Table */}
              <div className="px-8 py-6 border-t border-gray-100 space-y-3">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary-blue">
                  Chemical Composition (% by weight)
                </p>
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-2 font-bold uppercase tracking-wider text-gray-500">
                        Element
                      </th>
                      <th className="text-right py-2 font-bold uppercase tracking-wider text-gray-500">
                        Galvalum III
                      </th>
                      <th className="text-right py-2 font-bold uppercase tracking-wider text-gray-500">
                        Galvalum III DCW
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      ["Iron (Fe)", "0.09 max", "0.06 max"],
                      ["Silicon (Si)", "0.08 – 0.12", "0.08 – 0.12"],
                      ["Copper (Cu)", "0.006 max", "0.003 max"],
                      ["Zinc (Zn)", "2.0 – 6.0", "4.75 – 5.25"],
                      ["Indium (In)", "0.01 – 0.02", "0.016 – 0.025"],
                      ["Cadmium (Cd)", "0.002 max", "0.002 max"],
                      ["Others (each)", "0.02 max", "0.02 max"],
                    ].map(([el, t1, t2]) => (
                      <tr key={el}>
                        <td className="py-2 text-gray-600">{el}</td>
                        <td className="py-2 text-right text-gray-700 font-medium tabular-nums">
                          {t1}
                        </td>
                        <td className="py-2 text-right text-gray-700 font-medium tabular-nums">
                          {t2}
                        </td>
                      </tr>
                    ))}
                    <tr className="bg-gray-50">
                      <td className="py-2 font-semibold text-gray-700">
                        Aluminum (Al)
                      </td>
                      <td className="py-2 text-right font-bold text-gray-900">
                        Remainder
                      </td>
                      <td className="py-2 text-right font-bold text-gray-900">
                        Remainder
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Electrochemical Properties */}
              <div className="px-8 py-6 border-t border-gray-100 space-y-3">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary-blue">
                  Electrochemical Properties
                </p>
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-2 font-bold uppercase tracking-wider text-gray-500">
                        Property
                      </th>
                      <th className="text-right py-2 font-bold uppercase tracking-wider text-gray-500">
                        Galvalum III
                      </th>
                      <th className="text-right py-2 font-bold uppercase tracking-wider text-gray-500">
                        Galvalum III DCW
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      [
                        "Open Circuit Potential",
                        "(-) 1.15 V vs Cu/CuS04 sw.",
                        "(-) 1.15 V vs Cu/CuS04 sw.",
                      ],
                      [
                        "Closed Circuit Potential",
                        "(-) 1.05 V vs Ag/AgCl sw,",
                        "(-) 1.05 V vs Ag/AgCl sw,",
                      ],
                      [
                        "Seawater Capacity @25C",
                        "1150 A-Hr/lb. (2530 A-Hr/Kg.)",
                        "1150 A-Hr/lb. (2530 A-Hr/Kg.)",
                      ],
                      [
                        "Seawater Capacity @5C",
                        "Variable",
                        "1150 A-Hr/lb (2530 A-hr/Kg.)",
                      ],
                      [
                        "Seabed Mud Capacity",
                        "950 A-Hr/lb. (2090 A-hr/Kg.)",
                        "950 A-Hr/lb. (2090 A-hr/Kg.)",
                      ],
                      [
                        "Seabed Mud Capacity @ 5C",
                        "Variable",
                        "950 A-Hr/lb. (2090 A-hr/Kg.)",
                      ],
                    ].map(([el, t1, t2]) => (
                      <tr key={el}>
                        <td className="py-2 lg:max-w-24 text-gray-500">{el}</td>
                        <td className="py-2 text-right text-gray-700 font-medium tabular-nums">
                          {t1}
                        </td>
                        <td className="py-2 text-right text-gray-700 font-medium tabular-nums">
                          {t2}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Typical Applications */}
              <div className="px-8 pb-6 space-y-3 border-t border-gray-100 pt-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary-blue">
                  Typical Applications
                </p>
                <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs text-gray-600">
                  {[
                    ["Offshore platforms & jackets", "Subsea pipelines"],
                    ["Deepwater Gulf of Mexico", "Wind farm foundations"],
                    ["Bracelet anodes", "Pier & piling systems"],
                    ["Vessel & tank interiors", "Harbor structures"],
                  ].map(([a, b], i) => (
                    <React.Fragment key={i}>
                      <span className="flex items-start gap-1.5">
                        <span className="mt-0.5 text-navy">•</span>
                        {a}
                      </span>
                      <span className="flex items-start gap-1.5">
                        <span className="mt-0.5 text-navy">•</span>
                        {b}
                      </span>
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Standards Compliance */}
              <div className="px-8 pb-8 space-y-3 border-t border-gray-100 pt-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary-blue">
                  Standards Compliance
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "NACE SP–0387",
                    "DNV RP B401",
                    "ISO 15589–2",
                    "NORSOK M–503",
                  ].map((s) => (
                    <span
                      key={s}
                      className="inline-flex items-center gap-1 rounded border border-gray-200 px-2.5 py-1 text-xs font-medium text-gray-700"
                    >
                      ✓ {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* ── ZINC ALLOY ANODES ── */}
            <div
              id="zinc-details"
              className="rounded-2xl overflow-hidden shadow-lg bg-white flex flex-col"
            >
              {/* Header */}
              <div className="bg-primary-blue px-8 py-7">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/60 mb-2">
                  Material Type 02
                </p>
                <h3 className="text-3xl font-extrabold text-white">
                  Zinc Alloy Anodes
                </h3>
              </div>

              {/* Description */}
              <div className="px-8 py-6 border-b border-gray-100">
                <p className="text-sm text-gray-600 leading-relaxed">
                  Special High Grade Zinc at 99.99% purity. Preferred for deep,
                  cold water and saline mud applications where temperature does
                  not exceed 50°C (120°F). Operates at 95% nominal efficiency in
                  seawater.
                </p>
              </div>

              {/* Photo */}
              <div className="relative w-full h-56 bg-gray-50 flex flex-col items-center justify-center">
                <Image
                  src="/products/platform-no-bg.webp"
                  alt="Zinc Anode"
                  fill
                  className="object-contain p-6"
                />
                <p className="absolute bottom-3 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  Zinc Anode Photo
                </p>
              </div>

              {/* Chemical Composition Table */}
              <div className="px-8 py-6 border-t border-gray-100 space-y-3">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary-blue">
                  Chemical Composition — MIL-A-18001-K (%)
                </p>
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-2 font-bold uppercase tracking-wider text-gray-500">
                        Element
                      </th>
                      <th className="text-right py-2 font-bold uppercase tracking-wider text-gray-500">
                        Specification
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      ["Iron (Fe)", "0.005 max"],
                      ["Lead (Pb)", "0.006 max"],
                      ["Copper (Cu)", "0.005 max"],
                      ["Cadmium (Cd)", "0.025 – 0.07"],
                      ["Aluminum (Al)", "0.1 – 0.5"],
                      ["Others (each)", "0.10 max"],
                    ].map(([el, spec]) => (
                      <tr key={el}>
                        <td className="py-2 text-gray-600">{el}</td>
                        <td className="py-2 text-right text-gray-700 font-medium">
                          {spec}
                        </td>
                      </tr>
                    ))}
                    <tr className="bg-gray-50">
                      <td className="py-2 font-semibold text-gray-700">
                        Zinc (Zn)
                      </td>
                      <td className="py-2 text-right font-bold text-gray-900">
                        Remainder
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Electrochemical Properties */}
              <div className="px-8 pb-6 space-y-3 border-t border-gray-100 pt-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary-blue">
                  Electrochemical Properties
                </p>
                <div className="space-y-2 text-xs">
                  {[
                    ["Open Circuit Potential", "−1.05 V (Ag/AgCl)"],
                    ["Nominal Current Capacity", "780 amp-hr/kg"],
                    ["Galvanic Efficiency (seawater)", "95% nominal"],
                  ].map(([prop, val]) => (
                    <div
                      key={prop}
                      className="flex justify-between border-b border-gray-100 pb-2"
                    >
                      <span className="text-gray-500">{prop}</span>
                      <span className="font-semibold text-gray-800">{val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Typical Applications */}
              <div className="px-8 pb-8 space-y-3 border-t border-gray-100 pt-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary-blue">
                  Typical Applications
                </p>
                <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs text-gray-600">
                  {[
                    ["Ship hulls", "Ballast tanks"],
                    ["Sea chests", "Engine rooms"],
                    ["Pipelines", "Piers & docks"],
                    ["Buoys", "Saline mud environments"],
                  ].map(([a, b], i) => (
                    <React.Fragment key={i}>
                      <span className="flex items-start gap-1.5">
                        <span className="mt-0.5 text-primary-blue">•</span>
                        {a}
                      </span>
                      <span className="flex items-start gap-1.5">
                        <span className="mt-0.5 text-primary-blue">•</span>
                        {b}
                      </span>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            {/* ── TITANIUM ALLOY ANODES ── */}
            <div className="lg:col-span-2 rounded-2xl overflow-hidden shadow-lg bg-white flex flex-col">
              {/* Header */}
              <div className="bg-charcoal px-8 py-7">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/60 mb-2">
                  Material Type 03
                </p>
                <h3 className="text-3xl font-extrabold text-white">
                  Titanium Alloy Anodes
                </h3>
              </div>

              {/* Description */}
              <div className="px-8 py-6 border-b border-gray-100">
                <p className="text-sm text-gray-600 leading-relaxed">
                  Titanium-based sacrificial anodes engineered for aggressive,
                  high-temperature, and low-conductivity service. The controlled
                  titanium content stabilizes the alloy microstructure for
                  consistent activation and long-term protection in demanding
                  offshore and saline environments.
                </p>
              </div>

              {/* Photo */}
              <div className="relative w-full h-56 bg-gray-50 flex flex-col items-center justify-center">
                <Image
                  src="/products/platform-no-bg.webp"
                  alt="Titanium Anode"
                  fill
                  className="object-contain p-6"
                />
                <p className="absolute bottom-3 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  Titanium Anode Photo
                </p>
              </div>


              {/* Simple Anode Chemistry Table */}
              <div className="px-8 py-6 border-t border-gray-100 space-y-3">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary-blue">
                  Anode chemistry
                </p>
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-2 font-bold uppercase tracking-wider text-gray-500">
                        Element
                      </th>
                      <th className="text-right py-2 font-bold uppercase tracking-wider text-gray-500">
                        Deep 7
                      </th>
                      <th className="text-right py-2 font-bold uppercase tracking-wider text-gray-500">
                        Deep 10
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      ["Iron (Fe)", "0.07 max", "0.10 max"],
                      ["Silicon (Si)", "0.10 max", "0.10 max"],
                      ["Copper (Cu)", "0.003 max", "0.006 max"],
                      ["Zinc (Zn)", "4.75 - 5.25", "3.00 - 6.00"],
                      ["Indium (In)", "0.015 - 0.025", "0.010 - 0.020"],
                      ["Titanium (Ti)", "0.025 max", "0.025 max"],
                      ["Cadmium (Cd)", "Part of others", "Part of others"],
                      ["Others (each)", "0.02 max", "0.02 max"],
                      ["Aluminum (Al)", "Remainder", "Remainder"],
                    ].map(([el, t1, t2]) => (
                      <tr key={el}>
                        <td className="py-2 text-gray-600">{el}</td>
                        <td className="py-2 text-right text-gray-700 font-medium tabular-nums">
                          {t1}
                        </td>
                        <td className="py-2 text-right text-gray-700 font-medium tabular-nums">
                          {t2}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
                <Ship
                  size={40}
                  strokeWidth={1.5}
                  className="mb-4 text-gray-700"
                />
                <h3 className="text-base font-bold text-gray-900 mb-2 uppercase">
                  Marine & Offshore
                </h3>
                <p className="text-sm text-gray-600">
                  Ships, oil platforms, port facilities, and offshore structures
                  requiring robust corrosion protection.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-left">
                <Layers
                  size={40}
                  strokeWidth={1.5}
                  className="mb-4 text-gray-700"
                />
                <h3 className="text-base font-bold text-gray-900 mb-2 uppercase">
                  Pipelines
                </h3>
                <p className="text-sm text-gray-600">
                  Underground and subsea pipelines transporting oil, gas, and
                  water across long distances.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-left">
                <Factory
                  size={40}
                  strokeWidth={1.5}
                  className="mb-4 text-gray-700"
                />
                <h3 className="text-base font-bold text-gray-900 mb-2 uppercase">
                  Storage Tanks
                </h3>
                <p className="text-sm text-gray-600">
                  Water storage tanks, industrial vessels, and containment
                  systems requiring internal protection.
                </p>
              </div>
            </div>

            {/* Right column — 3 cards */}
            <div className="flex flex-col gap-6 flex-1">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-left">
                <Droplet
                  size={40}
                  strokeWidth={1.5}
                  className="mb-4 text-gray-700"
                />
                <h3 className="text-base font-bold text-gray-900 mb-2 uppercase">
                  Water Infrastructure
                </h3>
                <p className="text-sm text-gray-600">
                  Municipal water systems, cooling towers, and heat exchangers
                  in various industries.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-left">
                <Zap
                  size={40}
                  strokeWidth={1.5}
                  className="mb-4 text-gray-700"
                />
                <h3 className="text-base font-bold text-gray-900 mb-2 uppercase">
                  Power Generation
                </h3>
                <p className="text-sm text-gray-600">
                  Power plants, cooling systems, and electrical infrastructure
                  requiring corrosion management.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-left">
                <Shield
                  size={40}
                  strokeWidth={1.5}
                  className="mb-4 text-gray-700"
                />
                <h3 className="text-base font-bold text-gray-900 mb-2 uppercase">
                  Industrial Facilities
                </h3>
                <p className="text-sm text-gray-600">
                  Chemical plants, refineries, and manufacturing facilities with
                  critical infrastructure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Six Product Families Section */}
      <section className="bg-gray-50 py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto space-y-14">
          {/* Header */}
          <div className="flex flex-col lg:flex-row items-start gap-10">
            <div className="flex-1 space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary-blue/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary-blue">
                • Product Families
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                Six Product Families.
                <br />
                One Manufacturer.
              </h2>
            </div>
            <div className="flex-1 flex items-center">
              <p className="text-sm text-gray-500 leading-relaxed">
                All standard configurations are shown in our catalog. Houston
                Anodes also manufactures to exact customer specifications — any
                weight, any cross-section, any core configuration. Contact our
                engineering team to optimize an anode for your project.
              </p>
            </div>
          </div>

          {/* Grid — Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Family 01 — Platform & Structural */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 flex flex-col">
              <div className="flex items-center justify-between px-5 pt-5">
                <span className="inline-block rounded bg-gray-900 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                  Platforms
                </span>
                <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-gray-400">
                  Family 01
                </span>
              </div>
              <div className="relative w-full h-36 bg-gray-50 mt-3">
                <Image
                  src="/images/anodes/platform.webp"
                  alt="Platform Anode"
                  fill
                  className="object-contain p-5"
                />
              </div>
              <div className="px-5 py-4 flex flex-col gap-4 flex-1">
                <div>
                  <h3 className="text-base font-extrabold text-gray-900 leading-snug">
                    Platform & Structural Anodes
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed mt-1">
                    Cast in low-iron, high-purity aluminum alloys. Manufactured
                    in a wide variety of configurations for new construction or
                    retrofitting. Custom trapezoidal cross-sections available.
                  </p>
                </div>

                {/* Configurations */}
                <div className="space-y-1">
                  <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-primary-blue">
                    Configurations
                  </p>
                  <ul className="space-y-0.5">
                    {[
                      "90° Core — Type A & B",
                      "45° Core — Type A & B",
                      "Straight Core — Type A & B",
                    ].map((c) => (
                      <li
                        key={c}
                        className="text-xs text-gray-600 flex items-start gap-1.5"
                      >
                        <span className="text-primary-blue mt-0.5">–</span>
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Weight + Materials row */}
                <div className="grid grid-cols-2 gap-2 border-t border-gray-100 pt-3">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-gray-400 mb-0.5">
                      Weight Range
                    </p>
                    <p className="text-xs font-semibold text-gray-700">
                      5 – 2,100 lbs
                    </p>
                  </div>
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-gray-400 mb-0.5">
                      Core Pipe
                    </p>
                    <p className="text-xs font-semibold text-gray-700">
                      2″ – 4″ SCH. 80
                    </p>
                  </div>
                </div>

                {/* Key Applications */}
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-gray-400 mb-1">
                    Key Applications
                  </p>
                  <p className="text-xs text-gray-600">
                    Offshore platforms, structural members, new construction &
                    retrofit
                  </p>
                </div>

                <div className="flex gap-1.5 mt-auto pt-1">
                  <span className="rounded px-2 py-0.5 text-[10px] font-bold bg-primary-blue text-white uppercase">
                    Al
                  </span>
                  <span className="rounded px-2 py-0.5 text-[10px] font-bold bg-gray-500 text-white uppercase">
                    Zn
                  </span>
                  <span className="rounded px-2 py-0.5 text-[10px] font-bold bg-navy text-white uppercase">
                    Custom
                  </span>
                </div>
              </div>
            </div>

            {/* Family 02 — Pipeline Bracelet */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 flex flex-col">
              <div className="flex items-center justify-between px-5 pt-5">
                <span className="inline-block rounded bg-gray-900 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                  Bracelets
                </span>
                <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-gray-400">
                  Family 02
                </span>
              </div>
              <div className="relative w-full h-36 bg-gray-50 mt-3">
                <Image
                  src="/images/anodes/pipeline.webp"
                  alt="Bracelet Anode"
                  fill
                  className="object-contain p-5"
                />
              </div>
              <div className="px-5 py-4 flex flex-col gap-4 flex-1">
                <div>
                  <h3 className="text-base font-extrabold text-gray-900 leading-snug">
                    Pipeline Bracelet Anodes
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed mt-1">
                    Manufactured in a wide variety of diameters using an
                    extensive inventory of water-cooled molds. Available in
                    square and tapered profiles with weld-on or bolt-on
                    mounting.
                  </p>
                </div>

                <div className="space-y-1">
                  <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-primary-blue">
                    Configurations
                  </p>
                  <ul className="space-y-0.5">
                    {[
                      "Square Weld-on",
                      "Square Bolt-on",
                      "Tapered Weld-on",
                      "Tapered Bolt-on",
                    ].map((c) => (
                      <li
                        key={c}
                        className="text-xs text-gray-600 flex items-start gap-1.5"
                      >
                        <span className="text-primary-blue mt-0.5">–</span>
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-2 border-t border-gray-100 pt-3">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-gray-400 mb-0.5">
                      Diameter Range
                    </p>
                    <p className="text-xs font-semibold text-gray-700">
                      1/2″ – 48″
                    </p>
                  </div>
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-gray-400 mb-0.5">
                      Custom Sizes
                    </p>
                    <p className="text-xs font-semibold text-gray-700">
                      Any weight & diameter
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-gray-400 mb-1">
                    Key Applications
                  </p>
                  <p className="text-xs text-gray-600">
                    Subsea pipelines, Gulf of Mexico, offshore pipelines
                  </p>
                </div>

                <div className="flex gap-1.5 mt-auto pt-1">
                  <span className="rounded px-2 py-0.5 text-[10px] font-bold bg-primary-blue text-white uppercase">
                    Al
                  </span>
                  <span className="rounded px-2 py-0.5 text-[10px] font-bold bg-gray-500 text-white uppercase">
                    Zn
                  </span>
                  <span className="rounded px-2 py-0.5 text-[10px] font-bold bg-navy text-white uppercase">
                    Custom
                  </span>
                </div>
              </div>
            </div>

            {/* Family 03 — Pier, Piling & Ballast */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 flex flex-col">
              <div className="flex items-center justify-between px-5 pt-5">
                <span className="inline-block rounded bg-gray-900 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                  Pier & Piling
                </span>
                <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-gray-400">
                  Family 03
                </span>
              </div>
              <div className="relative w-full h-36 bg-gray-50 mt-3">
                <Image
                  src="/images/anodes/pier.webp"
                  alt="Pier & Piling Anode"
                  fill
                  className="object-contain p-5"
                />
              </div>
              <div className="px-5 py-4 flex flex-col gap-4 flex-1">
                <div>
                  <h3 className="text-base font-extrabold text-gray-900 leading-snug">
                    Pier, Piling & Ballast Anodes
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed mt-1">
                    Core length standard per size; holes may be drilled for
                    bolt-on applications. Suitable for piers, jetties, and any
                    piling or ballast application.
                  </p>
                </div>

                <div className="space-y-1">
                  <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-primary-blue">
                    Configurations
                  </p>
                  <ul className="space-y-0.5">
                    {[
                      "Trapezoidal Flush Core",
                      "Stand-off Core — Type A & B",
                      "Rod Core",
                      "Rod Stand-off Core",
                    ].map((c) => (
                      <li
                        key={c}
                        className="text-xs text-gray-600 flex items-start gap-1.5"
                      >
                        <span className="text-primary-blue mt-0.5">–</span>
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-2 border-t border-gray-100 pt-3">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-gray-400 mb-0.5">
                      Weight Range
                    </p>
                    <p className="text-xs font-semibold text-gray-700">
                      0.5 – 2,100 lbs (std)
                    </p>
                  </div>
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-gray-400 mb-0.5">
                      Mounting
                    </p>
                    <p className="text-xs font-semibold text-gray-700">
                      Weld-on · Bolt-on
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-gray-400 mb-1">
                    Key Applications
                  </p>
                  <p className="text-xs text-gray-600">
                    Piers, jetties, pilings, ballast, harbor structures
                  </p>
                </div>

                <div className="flex gap-1.5 mt-auto pt-1">
                  <span className="rounded px-2 py-0.5 text-[10px] font-bold bg-primary-blue text-white uppercase">
                    Al
                  </span>
                  <span className="rounded px-2 py-0.5 text-[10px] font-bold bg-gray-500 text-white uppercase">
                    Zn
                  </span>
                  <span className="rounded px-2 py-0.5 text-[10px] font-bold bg-navy text-white uppercase">
                    Custom
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Grid — Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Family 04 — Tank & Vessel */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 flex flex-col">
              <div className="flex items-center justify-between px-5 pt-5">
                <span className="inline-block rounded bg-gray-900 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                  Tanks & Vessels
                </span>
                <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-gray-400">
                  Family 04
                </span>
              </div>
              <div className="relative w-full h-36 bg-gray-50 mt-3">
                <Image
                  src="/images/anodes/tank.webp"
                  alt="Tank & Vessel Anode"
                  fill
                  className="object-contain p-5"
                />
              </div>
              <div className="px-5 py-4 flex flex-col gap-4 flex-1">
                <div>
                  <h3 className="text-base font-extrabold text-gray-900 leading-snug">
                    Tank & Vessel Anodes
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed mt-1">
                    Heater Treater anodes available with Red/Blue caps and nuts
                    on request. Houston Anodes can cast for any tank bottom or
                    vessel interior to exact specifications.
                  </p>
                </div>

                <div className="space-y-1">
                  <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-primary-blue">
                    Configurations
                  </p>
                  <ul className="space-y-0.5">
                    {[
                      "Heater Treater",
                      "Heater Treater Eyebolt",
                      "Bowling Ball",
                      "Drum",
                    ].map((c) => (
                      <li
                        key={c}
                        className="text-xs text-gray-600 flex items-start gap-1.5"
                      >
                        <span className="text-primary-blue mt-0.5">–</span>
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-2 border-t border-gray-100 pt-3">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-gray-400 mb-0.5">
                      Weight Range
                    </p>
                    <p className="text-xs font-semibold text-gray-700">
                      8.5 – 46 lbs (std)
                    </p>
                  </div>
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-gray-400 mb-0.5">
                      Core Type
                    </p>
                    <p className="text-xs font-semibold text-gray-700">
                      ¾″ Rod
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-gray-400 mb-1">
                    Key Applications
                  </p>
                  <p className="text-xs text-gray-600">
                    Tank bottoms, vessel interiors, heater treaters, pressure
                    vessels
                  </p>
                </div>

                <div className="flex gap-1.5 mt-auto pt-1">
                  <span className="rounded px-2 py-0.5 text-[10px] font-bold bg-primary-blue text-white uppercase">
                    Al
                  </span>
                  <span className="rounded px-2 py-0.5 text-[10px] font-bold bg-gray-500 text-white uppercase">
                    Zn
                  </span>
                  <span className="rounded px-2 py-0.5 text-[10px] font-bold bg-navy text-white uppercase">
                    Custom
                  </span>
                </div>
              </div>
            </div>

            {/* Family 05 — Hull Anodes */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 flex flex-col">
              <div className="flex items-center justify-between px-5 pt-5">
                <span className="inline-block rounded bg-gray-900 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                  Hulls
                </span>
                <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-gray-400">
                  Family 05
                </span>
              </div>
              <div className="relative w-full h-36 bg-gray-50 mt-3">
                <Image
                  src="/images/anodes/hull.webp"
                  alt="Hull Anode"
                  fill
                  className="object-contain p-5"
                />
                <p className="absolute bottom-3 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  Hull Anode Photo
                </p>
              </div>
              <div className="px-5 py-4 flex flex-col gap-4 flex-1">
                <div>
                  <h3 className="text-base font-extrabold text-gray-900 leading-snug">
                    Hull Anodes
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed mt-1">
                    Manufactured in zinc alloy to MIL-A-18001-K specification.
                    Operates at 95% nominal efficiency in seawater. Resists
                    formation of hard, dense corrosion byproducts.
                  </p>
                </div>

                <div className="space-y-1">
                  <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-primary-blue">
                    Configurations
                  </p>
                  <ul className="space-y-0.5">
                    {[
                      "Trapezoidal Hull",
                      "Trapezoidal Hull Cast-in Core",
                      "Hull Tapered",
                      "Tapered Trapezoidal",
                      "Teardrop",
                    ].map((c) => (
                      <li
                        key={c}
                        className="text-xs text-gray-600 flex items-start gap-1.5"
                      >
                        <span className="text-primary-blue mt-0.5">–</span>
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-2 border-t border-gray-100 pt-3">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-gray-400 mb-0.5">
                      Weight Range
                    </p>
                    <p className="text-xs font-semibold text-gray-700">
                      23 – 85 lbs (std)
                    </p>
                  </div>
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-gray-400 mb-0.5">
                      Mil-Spec
                    </p>
                    <p className="text-xs font-semibold text-gray-700">
                      MIL-A-18001-K
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-gray-400 mb-1">
                    Key Applications
                  </p>
                  <p className="text-xs text-gray-600">
                    Ship hulls, ballast tanks, sea chests, marine vessels
                  </p>
                </div>

                <div className="flex gap-1.5 mt-auto pt-1">
                  <span className="rounded px-2 py-0.5 text-[10px] font-bold bg-primary-blue text-white uppercase">
                    Al
                  </span>

                  <span className="rounded px-2 py-0.5 text-[10px] font-bold bg-gray-500 text-white uppercase">
                    Zn
                  </span>
                  <span className="rounded px-2 py-0.5 text-[10px] font-bold bg-navy text-white uppercase">Custom</span>
                </div>
              </div>
            </div>

            {/* Family 06 — Custom Engineered (highlighted) */}
            <div className="rounded-2xl overflow-hidden shadow-sm border-2 border-primary-blue/30 bg-light-blue/30 flex flex-col">
              <div className="flex items-center justify-between px-5 pt-5">
                <span className="inline-block rounded bg-primary-blue px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                  Custom
                </span>
                <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-primary-blue/50">
                  Family 06
                </span>
              </div>
              <div className="relative w-full h-36 bg-primary-blue/5 mt-3">
                <Image
                  src="/images/anodes/custom.webp"
                  alt="Custom Anode"
                  fill
                  className="object-contain p-5"
                />
              </div>
              <div className="px-5 py-4 flex flex-col gap-4 flex-1">
                <div>
                  <h3 className="text-base font-extrabold text-gray-900 leading-snug">
                    Custom Engineered Anodes
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed mt-1">
                    Houston Anodes manufactures anodes of almost any shape and
                    size. With an extensive inventory of water-cooled molds and
                    in-house mold manufacturing capability, no geometry is out
                    of reach.
                  </p>
                </div>

                <div className="space-y-1">
                  <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-primary-blue">
                    Configurations
                  </p>
                  <ul className="space-y-0.5">
                    {["Clamp", "Mat", "Link", "Any geometry on request"].map(
                      (c) => (
                        <li
                          key={c}
                          className="text-xs text-gray-600 flex items-start gap-1.5"
                        >
                          <span className="text-primary-blue mt-0.5">–</span>
                          {c}
                        </li>
                      ),
                    )}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-2 border-t border-primary-blue/10 pt-3">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-gray-400 mb-0.5">
                      Weight
                    </p>
                    <p className="text-xs font-semibold text-gray-700">
                      Any weight & size
                    </p>
                  </div>
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-gray-400 mb-0.5">
                      Geometry
                    </p>
                    <p className="text-xs font-semibold text-gray-700">
                      Provide drawing spec
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-gray-400 mb-1">
                    Key Applications
                  </p>
                  <p className="text-xs text-gray-600">
                    Mission-critical & specialized infrastructure projects
                  </p>
                </div>

                <div className="flex gap-1.5 mt-auto pt-1">
                  <span className="rounded px-2 py-0.5 text-[10px] font-bold bg-primary-blue text-white uppercase">
                    Al
                  </span>
                  <span className="rounded px-2 py-0.5 text-[10px] font-bold bg-gray-500 text-white uppercase">
                    Zn
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Every Configuration at a Glance — Summary Table */}
          <div className="space-y-8 pt-4">
            <div className="text-center space-y-3 max-w-xl mx-auto">
              <h3 className="text-3xl font-extrabold text-gray-900">
                Every Configuration at a Glance
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Standard configurations are shown in our full product catalog.
                Every size and weight shown can also be manufactured in custom
                dimensions. Download the catalog or contact our team for full
                dimensional data.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full min-w-[700px] text-sm">
                <thead>
                  <tr className="bg-navy text-white">
                    {[
                      "Product Family",
                      "Configurations",
                      "Weight / Size Range",
                      "Materials",
                      "Key Applications",
                    ].map((h) => (
                      <th
                        key={h}
                        className="px-5 py-4 text-left text-[10px] font-bold uppercase tracking-widest"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 bg-white">
                  {[
                    {
                      family: "Platform Anodes",
                      configs: [
                        "90° Core — Type A & B",
                        "45° Core — Type A & B",
                        "Straight Core — Type A & B",
                      ],
                      range: "5 – 2,100 lbs",
                      materials: "Al · Zn",
                      apps: "Offshore platforms, structural members, new construction & retrofit",
                    },
                    {
                      family: "Bracelet Anodes",
                      configs: [
                        "Square Weld-on",
                        "Square Bolt-on",
                        "Tapered Weld-on",
                        "Tapered Bolt-on",
                      ],
                      range: "1/2″ – 48″ diameter",
                      materials: "Al · Zn",
                      apps: "Subsea pipelines, Gulf of Mexico, offshore pipelines",
                    },
                    {
                      family: "Pier, Piling & Ballast",
                      configs: [
                        "Trapezoidal Flush Core",
                        "Stand-off Core — Type A & B",
                        "Rod Core",
                        "Rod Stand-off Core",
                      ],
                      range: "0.5 – 2,100 lbs (standard)",
                      materials: "Al · Zn",
                      apps: "Piers, jetties, pilings, ballast, harbor structures",
                    },
                    {
                      family: "Tanks & Vessels",
                      configs: [
                        "Heater Treater",
                        "Heater Treater Eyebolt",
                        "Bowling Ball",
                        "Drum",
                      ],
                      range: "8.5 – 46 lbs (standard)",
                      materials: "Al · Zn",
                      apps: "Tank bottoms, vessel interiors, heater treaters, pressure vessels",
                    },
                    {
                      family: "Hull Anodes",
                      configs: [
                        "Trapezoidal Hull",
                        "Trapezoidal Hull Cast-in Core",
                        "Hull Tapered",
                        "Tapered Trapezoidal",
                        "Teardrop",
                      ],
                      range: "23 – 85 lbs (standard)",
                      materials: "Al · Zn",
                      apps: "Ship hulls, ballast tanks, sea chests, marine vessels",
                    },
                    {
                      family: "Custom Anodes",
                      configs: [
                        "Clamp",
                        "Mat",
                        "Link",
                        "Any geometry on request",
                      ],
                      range: "Any weight & size",
                      materials: "Al · Zn",
                      apps: "Mission-critical & specialized infrastructure projects",
                    },
                  ].map(({ family, configs, range, materials, apps }, i) => (
                    <tr
                      key={family}
                      className={i % 2 === 1 ? "bg-gray-50/60" : ""}
                    >
                      <td className="px-5 py-4 font-semibold text-primary-blue align-top whitespace-nowrap">
                        {family}
                      </td>
                      <td className="px-5 py-4 align-top">
                        <ul className="space-y-0.5">
                          {configs.map((c) => (
                            <li key={c} className="text-gray-600">
                              {c}
                            </li>
                          ))}
                        </ul>
                      </td>
                      <td className="px-5 py-4 align-top text-gray-700 whitespace-nowrap">
                        {range}
                      </td>
                      <td className="px-5 py-4 align-top text-gray-700 whitespace-nowrap">
                        {materials}
                      </td>
                      <td className="px-5 py-4 align-top text-gray-600">
                        {apps}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Excellence - Similar to "The Houston Commitment" */}
      <section className="animate-gradient-bg py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-blue mb-4">
            Our Standards
          </p>
          <h2 className="text-2xl font-bold tracking-widest text-gray-400 uppercase mb-16">
            The Houston Advantage
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 text-3xl md:text-4xl lg:text-5xl font-black uppercase">
            {/* Top Left */}
            <div className="pb-12 border-b border-gray-700 md:border-r md:border-gray-700 md:pr-8 flex items-center justify-center md:justify-end text-center md:text-right">
              <span className="gradient-text">
                PRECISE
                <br /> COMPOSITION
              </span>
            </div>

            {/* Top Right */}
            <div className="py-12 md:py-0 md:pb-12 border-b border-gray-700 md:pl-8 flex items-center justify-center md:justify-start text-center md:text-left">
              <span className="gradient-text">
                MAXIMUM
                <br /> EFFICIENCY
              </span>
            </div>

            {/* Bottom Left */}
            <div className="py-12 md:pt-12 md:pb-0 md:border-r border-gray-700 md:pr-8 flex items-center justify-center md:justify-end text-center md:text-right">
              <span className="gradient-text">
                CERTIFIED
                <br /> QUALITY
              </span>
            </div>

            {/* Bottom Right */}
            <div className="pt-12 md:pl-8 flex items-center justify-center md:justify-start text-center md:text-left border-t border-gray-700 md:border-t-0">
              <span className="gradient-text">
                PROVEN
                <br /> PERFORMANCE
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Engineering — If You Can Draw It */}
      <section className="relative bg-navy overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-24 flex flex-col lg:flex-row gap-16 items-stretch">
          {/* Left — copy + steps */}
          <div className="flex-1 space-y-10 z-10">
            <div className="space-y-5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-blue">
                Custom Engineering
              </p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                If You Can Draw It,
                <br />
                We Can Cast It.
              </h2>
              <p className="text-sm text-text-on-dark/70 leading-relaxed max-w-sm">
                Houston Anodes can manufacture anodes of almost any shape and
                size required. With our extensive inventory of water-cooled
                molds — and the capability to manufacture our own molds in-house
                — we offer competitive prices on custom geometries that no
                standard catalog supplier can match.
              </p>
            </div>

            {/* Steps */}
            <div className="space-y-3">
              {[
                {
                  icon: (
                    <svg
                      className="w-5 h-5 text-white/70"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12h6m-6 4h6m-6-8h6M5 5h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"
                      />
                    </svg>
                  ),
                  title: "Submit a Drawing or Spec Sheet",
                  body: "Provide detailed drawing, anode dimensions, desired weight, and chemical composition specification.",
                },
                {
                  icon: (
                    <svg
                      className="w-5 h-5 text-white/70"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Z"
                      />
                    </svg>
                  ),
                  title: "Specify Metal & Composition",
                  body: "Aluminum or zinc alloy. Any chemical composition. Our lab verifies conformance before production begins.",
                },
                {
                  icon: (
                    <svg
                      className="w-5 h-5 text-white/70"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                      />
                    </svg>
                  ),
                  title: "Fast Lead Times",
                  body: "2–4 week standard lead times. 650-ton monthly production capacity. In-house mold manufacturing eliminates supplier delays.",
                },
              ].map(({ icon, title, body }) => (
                <div
                  key={title}
                  className="flex gap-4 rounded-xl border border-white/10 bg-navy-light/60 px-5 py-4"
                >
                  <div className="mt-0.5 shrink-0">{icon}</div>
                  <div>
                    <p className="text-sm font-bold text-white mb-0.5">
                      {title}
                    </p>
                    <p className="text-xs text-white/50 leading-relaxed">
                      {body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — 2×2 custom type cards */}
          <div className="flex-1 flex items-center justify-center z-10">
            <div className="grid grid-cols-2 gap-8 w-full max-w-xl">
              {[
                { img: "/images/anodes/1.webp" },
                { img: "/images/anodes/2.webp" },
                { img: "/images/anodes/3.webp" },
                { img: "/images/anodes/4.webp" },
              ].map(({ img }) => (
                <div
                  key={img}
                  className="rounded-2xl border border-white/10 overflow-hidden flex flex-col justify-center items-center bg-transparent shadow-xl"
                >
                  <div className="relative w-full aspect-[1/1] min-h-[200px] max-h-[260px]">
                    <Image src={img} alt="" fill className="object-cover" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Large watermark text */}
          <p className="pointer-events-none absolute bottom-0 right-0 text-[10rem] md:text-[14rem] font-black uppercase text-white/[0.03] leading-none select-none -mb-4">
            CUSTOM
          </p>
        </div>
      </section>

      {/* Request Catalog CTA */}
      <section className="bg-gray-50 py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-lg">
            <h3 className="text-2xl font-extrabold text-gray-900">
              Request Our Full Product Catalog
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Complete dimensional data, SKU tables, and weight specifications
              for all six product families. Or contact our engineering team
              directly to discuss your project requirements.
            </p>
          </div>
          <CatalogCTA />
        </div>
      </section>
    </div>
  );
}
