import React from "react";
import { Settings, Map, Search, Gauge } from "lucide-react";
import Header from "../../components/Header";

export const metadata = {
  title: "Services",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen font-sans text-gray-800 bg-white">
      <Header />

      {/* Sección Hero */}
      <header className="relative flex items-center justify-center h-screen overflow-hidden">
        {/* Imagen de fondo */}
        <img
          className="absolute inset-0 object-cover w-full h-full object-center"
          src="/images/services/services.webp"
          alt="Servicios"
          aria-hidden="true"
        />
        {/* Superposición oscura sutil */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 max-w-4xl px-4 mx-auto text-center mt-12">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl drop-shadow-lg">
            SERVICES, QUALITY <br className="hidden md:block" />& FOOTPRINT
          </h1>
          {/* Divider 80% width and subtitle */}
          <div className="mt-3 flex justify-center">
            <div
              className="h-0.5 bg-white w-4/5 rounded-full opacity-90"
              aria-hidden="true"
            ></div>
          </div>
          <p className="mt-4 font-bold tracking-tight text-3xl text-white">
            ENGINEERING & CONSULTING SERVICES
          </p>
        </div>
      </header>

      {/* Competencias Principales */}
      <section className="py-20 px-6 md:px-12 bg-white text-center">
        <h2 className="text-2xl font-bold tracking-widest text-gray-900 uppercase mb-12">
          Certified Coating Inspection & Supervision
        </h2>

        <div className="grid grid-cols-1 gap-6 max-w-6xl mx-auto md:grid-cols-2 lg:grid-cols-4">
          {/* Tarjeta 1 */}
          <div className="flex flex-col items-center p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
            <Settings
              size={48}
              strokeWidth={2}
              className="mb-6 text-electric-blue"
            />
            <h3 className="mb-3 text-lg font-extrabold leading-tight text-electric-blue">
              Coating Design Review
            </h3>
            <p className="text-sm text-gray-600">
              Optimized specification and material selection.
            </p>
          </div>

          {/* Tarjeta 2 */}
          <div className="flex flex-col items-center p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
            <Map
              size={48}
              strokeWidth={2}
              className="mb-6 text-electric-blue"
            />
            <h3 className="mb-3 text-lg font-extrabold leading-tight text-electric-blue">
              Surface Preparation Supervision
            </h3>
            <p className="text-sm text-gray-600">
              Surface preparation quality oversight.
            </p>
          </div>

          {/* Tarjeta 3 */}
          <div className="flex flex-col items-center p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
            <Search
              size={48}
              strokeWidth={2}
              className="mb-6 text-electric-blue"
            />
            <h3 className="mb-3 text-lg font-extrabold leading-tight text-electric-blue">
              Coating Application Supervision
            </h3>
            <p className="text-sm text-gray-600">
              Application parameter inspection control.
            </p>
          </div>

          {/* Tarjeta 4 */}
          <div className="flex flex-col items-center p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
            <Gauge
              size={48}
              strokeWidth={2}
              className="mb-6 text-electric-blue"
            />
            <h3 className="mb-3 text-lg font-extrabold leading-tight text-electric-blue">
              Post-Application Verification
            </h3>
            <p className="text-sm text-gray-600">
              Final inspection and compliance testing.
            </p>
          </div>
        </div>
      </section>

      {/* Cathodic Protection System Diagnostics */}
      <section className="bg-navy py-20 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-blue mb-3">
              Field Services
            </p>
            <h2 className="text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl">
              Cathodic Protection System Diagnostics
            </h2>
            <div className="mt-3 h-1 w-16 bg-primary-blue" />
          </div>

          {/* Cards + image as background */}
          <div className="relative">
            {/* Background image layer */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <img
                src="/images/services/cp.webp"
                alt=""
                aria-hidden="true"
                className="w-3/4 h-auto object-contain opacity-10"
                style={{}}
              />
            </div>

            {/* Diagnostic cards grid */}
            <div className="relative z-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  n: "01",
                  title: "CIS-DCVG Inspection",
                  body: "Protection coverage and anode performance mapping.",
                },
                {
                  n: "02",
                  title: "CP Interference Diagnostics",
                  body: "Detection and mitigation of electrical interference.",
                },
                {
                  n: "03",
                  title: "ECDA Assessment",
                  body: "External corrosion risk assessment per NACE.",
                },
                {
                  n: "04",
                  title: "PCM Current Mapping",
                  body: "Current distribution verification across protected areas.",
                },
                {
                  n: "05",
                  title: "Soil Resistivity Studies",
                  body: "Soil conductivity analysis for anode design.",
                },
                {
                  n: "06",
                  title: "ACVG Pipeline Inspection",
                  body: "Coating defect and corrosion detection survey.",
                },
                {
                  n: "07",
                  title: "GPS Pipeline Location & Documentation",
                  body: "Precision mapping for compliance and management.",
                },
                {
                  n: "08",
                  title: "Electrical Continuity & Interconnection",
                  body: "Identification of continuity and grounding issues.",
                },
              ].map(({ n, title, body }) => (
                <div
                  key={n}
                  className="group rounded-xl border border-white/10 bg-navy/70 backdrop-blur-sm p-6 transition-colors hover:bg-white/10"
                >
                  <span className="text-3xl font-black text-primary-blue/40 group-hover:text-primary-blue/60 transition-colors leading-none">
                    {n}
                  </span>
                  <h4 className="mt-3 text-sm font-bold text-white leading-snug">
                    {title}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-white/60">
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* El Compromiso */}
      <section className="animate-gradient-bg py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-blue mb-4">
            Our Standards
          </p>
          <h2 className="text-2xl font-bold tracking-widest text-gray-400 uppercase mb-16">
            The Houston Commitment
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 text-3xl md:text-4xl lg:text-5xl font-black uppercase">
            {/* Cuadrante Superior Izquierdo */}
            <div className="pb-12 border-b border-gray-700 md:border-r md:border-gray-700 md:pr-8 flex items-center justify-center md:justify-end text-center md:text-right">
              <span className="gradient-text">Individual Verification</span>
            </div>

            {/* Cuadrante Superior Derecho */}
            <div className="py-12 md:py-0 md:pb-12 border-b border-gray-700 md:pl-8 flex items-center justify-center md:justify-start text-center md:text-left">
              <span className="gradient-text">
                Raw Material
                <br /> Integrity
              </span>
            </div>

            {/* Cuadrante Inferior Izquierdo */}
            <div className="py-12 md:pt-12 md:pb-0 md:border-r border-gray-700 md:pr-8 flex items-center justify-center md:justify-end text-center md:text-right">
              <span className="gradient-text">Chemical Analysis</span>
            </div>

            {/* Cuadrante Inferior Derecho */}
            <div className="pt-12 md:pl-8 flex items-center justify-center md:justify-start text-center md:text-left border-t border-gray-700 md:border-t-0">
              <span className="gradient-text">Process Control</span>
            </div>
          </div>
        </div>
        <div className="max-w-3xl mx-auto text-center mt-16">
          <p className="text-sm font-bold tracking-widest text-gray-400 uppercase">
            The result: zero product failures in 40 years. Not luck.
            Consistency.
          </p>
        </div>
      </section>

      <section id="aluminum-anodes" className="py-12 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-3 max-w-xl mx-auto mb-6">
            <h3 className="text-3xl font-extrabold text-gray-900">
              Aluminum Anodes
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Chemical composition, electrochemical properties, and physical
              data for our aluminum anodes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Chemical Composition */}
            <div className="rounded-2xl overflow-hidden border border-gray-200 bg-white p-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary-blue mb-3">
                Chemical Composition (% by weight)
              </p>
              <table className="w-full text-sm">
                <tbody className="divide-y divide-gray-100">
                  {[
                    ["Iron (Fe)", "0.09 max"],
                    ["Silicon (Si)", "0.08 - 0.12"],
                    ["Copper (Cu)", "0.006 max"],
                    ["Zinc (Zn)", "2.0 - 6.0"],
                    ["Indium (In)", "0.01 - 0.02"],
                    ["Cadmium (Cd)", "0.002 max"],
                    ["Others (each)", "0.02 max"],
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
                      Aluminum (Al)
                    </td>
                    <td className="py-2 text-right font-bold text-gray-900">
                      Remainder
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

                        {/* Recommended Applications (one-column) */}
            <div className="rounded-2xl overflow-hidden border border-gray-200 bg-white p-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary-blue mb-3">
                Recommended Applications
              </p>
              <table className="w-full text-sm">
                <tbody className="divide-y divide-gray-100 text-xs">
                  {[
                    [
                      "Offshore Structures (Platforms, Pipelines, FPS, FPSO, MODU, SPAR, Subsea Structure, Risers, Wind Turbine, etc)",
                      "Any Tropical Ocean < 600 fsw (180 Msw) with mean water temperature higher than 45 F (7C)",
                    ],
                    [
                      "Inshore Structures (Ports, Harbors, Jetties, Wind farms, Locks, Dams, Bridges, Piers etc.)",
                      "Any Body of water < 600 fsw (180 Msw) with mean water temperature higher than 45 F (7C), Chloride Ion Concentration > 12 ppt. Resistivity < 200 ohm-cm",
                    ],
                    ["Produced Water Vessels & Tanks", "Any produced brine < 140 F(60 C)(4)"],
                    ["Seawater Ballast Tanks", "Suitable for most seawater applications (5)"],
                  ].map(([k, v]) => (
                    <tr key={k}>
                      <td className="py-3">
                        <div className="flex flex-col">
                          <span className="text-gray-700 font-semibold">{k}</span>
                          <span className="mt-1 text-xs text-gray-600">{v}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Electrochemical */}
            <div className="rounded-2xl overflow-hidden border border-gray-200 bg-white p-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary-blue mb-3">
                Electrochemical
              </p>
              <div className="space-y-2 text-xs text-gray-700">
                {[
                  ["Open Circuit Potential", "(-) 1.15 V vs Cu/CuS04 sw."],
                  ["Closed Circuit Potential (1)", "(-) 1.05 V vs Ag/AgCl sw."],
                  ["Seawater Capacity @25C", "1150 A-Hr/lb. (2530 A-Hr/Kg.)"],
                  ["Seawater Capacity @5C", "Variable (2)"],
                  ["Seabed Mud Capacity (3)", "950 A-Hr/lb. (2090 A-hr/Kg.)"],
                  ["Seabed Mud Capacity @ 5C", "Variable (2)"],
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

            {/* Physical */}
            <div className="rounded-2xl overflow-hidden border border-gray-200 bg-white p-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary-blue mb-3">
                Physical
              </p>
              <table className="w-full text-sm">
                <tbody className="divide-y divide-gray-100">
                  {[
                    ["Alloy Density", "0.098 lb/in3 (2.91 gm/cm3)"],
                    ["Cost Ratio", "Normal Grade Al Sows"],
                    ["Raw Material & Convesion", "1.00"],
                  ].map(([k, v]) => (
                    <tr key={k}>
                      <td className="py-2 text-gray-600">{k}</td>
                      <td className="py-2 text-right text-gray-700 font-medium">
                        {v}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>


          </div>
        </div>
      </section>

      <section id="zinc-anodes" className="py-12 px-6 md:px-12 bg-white">
  <div className="max-w-6xl mx-auto">
    <div className="text-center space-y-3 max-w-xl mx-auto mb-6">
      <h3 className="text-3xl font-extrabold text-gray-900">
        Zinc Anodes
      </h3>
      <p className="text-sm text-gray-500 leading-relaxed">
        Chemical composition and electrochemical properties for our zinc anodes.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Chemical Composition */}
      <div className="rounded-2xl overflow-hidden border border-gray-200 bg-white p-6">
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary-blue mb-3">
          Zinc MIL-A-18001-K (%)
        </p>
        <table className="w-full text-sm">
          <tbody className="divide-y divide-gray-100">
            {[
              ["Iron (Fe)", "0.005 max"],
              ["Lead (Pb)", "0.006 max"],
              ["Copper", "0.005 max"],
              ["Cadmium (Cd)", "0.025 - 0.07"],
              ["Aluminum (Al)", "0.1 - 0.5"],
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

      {/* Electrochemical */}
      <div className="rounded-2xl overflow-hidden border border-gray-200 bg-white p-6">
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary-blue mb-3">
          Electrochemical Properties
        </p>
        <div className="space-y-2 text-xs text-gray-700">
          {[
            ["Open Circuit Potential", "-1.05 Volts (Ag/AgCl)"],
            ["Nominal Current Capacity", "780 amp-hr/kg"],
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
    </div>
  </div>
</section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gray-900 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase tracking-wide">
            Ready to Protect Your Assets?
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
