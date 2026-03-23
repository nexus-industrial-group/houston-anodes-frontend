import Image from "next/image";

const COMPARISON_ROWS = [
  {
    spec: "Indium Homogenization",
    gas: "Partial — inert pockets remain",
    houston: "100% at molecular level",
    gasBad: true,
  },
  {
    spec: "Contamination Risk",
    gas: "Hydrogen, carbon & iron present",
    houston: "Zero external contamination",
    gasBad: true,
  },
  {
    spec: "Lifetime Performance",
    gas: "59% useful material / 41% inert",
    houston: "100% useful material",
    gasBad: true,
  },
] as const;

const FEATURED_CERTS = [
  { label: "ISO 9001:2015",    border: "border-electric-blue",   text: "text-electric-blue"   },
  { label: "DNV RP B401",      border: "border-navy",            text: "text-navy"            },
  { label: "ISO 15589-2:2012", border: "border-navy",            text: "text-navy"            },
] as const;

const APPROVED_SUPPLIERS = [
  "Ørsted — World's largest offshore wind operator",
  "FMC Global — Approved supplier",
] as const;

export default function CertificationsSection() {
  return (
    <> 
    <section className="bg-gray-100 py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">

        {/* ── Section header ── */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-electric-blue">
            Our Process
          </p>
          <h2 className="mt-3 text-4xl font-extrabold uppercase leading-tight tracking-tight text-navy sm:text-5xl">
            How Houston Anodes Eliminates That Uncertainty
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-text-secondary">
            We use <strong className="font-semibold text-black">electromagnetic induction furnaces</strong>—not gas combustion.
            Instead of applying external heat, induction generates heat internally within the metal itself.
            No flame. No contamination. No manual stirring impurities.
          </p>
          <p className="mt-4 text-base leading-relaxed text-text-secondary">
            The electromagnetic field creates a continuous <em>'Figure 8'</em> motion in the molten alloy—
            the only process capable of incorporating indium homogeneously at a molecular level.
          </p>
        </div>

        {/* ── Result statement ── */}
        <div className="mx-auto mt-10 max-w-2xl">
          <div className="flex flex-wrap justify-center gap-6 text-center">
            {[
              { value: "100%", label: "Activation" },
              { value: "100%", label: "Electrochemical Capacity" },
              { value: "100%", label: "Predictable Performance" },
            ].map(({ value, label }) => (
              <div key={label} className="flex flex-col items-center">
                <span className="text-4xl font-black text-electric-blue">{value}</span>
                <span className="mt-1 text-sm font-medium uppercase tracking-wide text-text-secondary">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Comparison table (focal point) ── */}
        <div className="mt-16 overflow-hidden rounded-2xl border border-silver-light shadow-sm">
          {/* Table header */}
          <div className="grid grid-cols-3 bg-navy text-sm font-semibold uppercase tracking-wider text-white">
            <div className="px-6 py-4 text-white/60">Specification</div>
            <div className="border-l border-white/10 px-6 py-4">
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-electric-orange" />
                Gas-Made Anode
              </span>
            </div>
            <div className="border-l border-white/10 bg-electric-blue/20 px-6 py-4">
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-accent" />
                Houston Induction Anode
              </span>
            </div>
          </div>

          {/* Table rows */}
          {COMPARISON_ROWS.map(({ spec, gas, houston }, i) => (
            <div
              key={spec}
              className={`grid grid-cols-3 divide-x divide-silver-light text-sm ${i % 2 === 0 ? "bg-white" : "bg-blue-50/40"}`}
            >
              <div className="px-6 py-5 font-semibold text-navy">{spec}</div>
              <div className="px-6 py-5">
                <span className="inline-flex items-start gap-2 text-text-secondary">
                  <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-electric-orange" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  {gas}
                </span>
              </div>
              <div className="bg-light-blue/30 px-6 py-5">
                <span className="inline-flex items-start gap-2 font-medium text-navy">
                  <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-electric-blue" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  {houston}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>

    {/* ── Gas vs Induction comparison cards ── */}
    <section
      className="relative overflow-hidden py-24 lg:py-32"
      style={{ backgroundImage: "url('/images/homepage/gas_ind.webp')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/* Dark overlay to make text pop */}
      <div className="absolute inset-0 bg-black/80" />

      <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-14">
          <p className="font-extrabold text-sm uppercase tracking-widest text-electric-blue">
            Why It Matters
          </p>
          <h2 className="mt-3 text-3xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-4xl">
            Process Makes the Difference
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 font-extrabold">
          {/* Gas Furnace — Competitors */}
          <div className="rounded-2xl border border-electric-orange/90 bg-electric-orange/5 p-8 backdrop-blur-sm ">
            <div className="border-b border-electric-orange/20 pb-5 text-center">
              <p className="text-lg font-extrabold uppercase tracking-widest text-electric-blue">
                Gas Furnace
              </p>
              <p className=" font-extrabold mt-1 text-sm uppercase tracking-widest text-white/50">
                (Competitors)
              </p>
            </div>
            <ul className="mt-8 space-y-4">
              {[
                "Flame contamination (hydrogen/carbon)",
                "Manual stirring → heterogeneous mix",
                "Partial indium activation",
                "Porosity and bubbles",
                "Shorter anode life",
                "Inconsistent quality",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-base text-white/80">
                  <span className="mt-1.5 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-red-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Electromagnetic Induction — Houston Anodes */}
          <div className="rounded-2xl border border-electric-blue/60 bg-electric-blue/10 p-8 backdrop-blur-sm">
            <div className="border-b border-electric-blue/30 pb-5 text-center">
              <p className="text-lg font-extrabold uppercase tracking-widest text-electric-blue">
                Electromagnetic Induction
              </p>
              <p className=" font-extrabold mt-1 text-sm uppercase tracking-widest text-white/50">
                (Houston Anodes)
              </p>
            </div>
            <ul className="mt-8 space-y-4">
              {[
                "Zero contamination → emissions-free",
                "Automated stirring → 100% homogeneous",
                "Complete indium activation at molecular level",
                "Zero porosity, perfect density",
                "40% longer service life",
                "Identical results, batch after batch",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-base text-white/90">
                  <span className="mt-1.5 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-green-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/cert.webm" type="video/webm" />
      </video>
      <div className="absolute inset-0 bg-navy/10" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        {/* ── Certifications ── */}
        <div>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-electric-blue">
              Certifications & Standards
            </p>
            <h3 className="mt-3 text-3xl font-extrabold uppercase tracking-tight text-electric-blue sm:text-4xl">
              Built to the World's Highest Standards
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white">
              Certified and approved to meet the strictest industry requirements for cathodic protection, quality management, and offshore engineering.
            </p>
          </div>

          {/* ISO Certification image */}
          <div className="mt-12 flex justify-center">
            <Image
              src="/images/homepage/iso3.png"
              alt="ISO Certifications"
              width={200}
              height={200}
              className="object-contain filter invert brightness-200"
            />
          </div>

          {/* Approved suppliers strip */}
          <div className="mt-8 flex flex-col items-center gap-3 rounded-xl border border-silver-light bg-gray-50/20 px-8 py-5 sm:flex-row sm:justify-center sm:gap-10">
            <span className="text-xs font-bold uppercase tracking-widest text-electric-blue">Approved Supplier</span>
            {APPROVED_SUPPLIERS.map((s) => (
              <span key={s} className="flex items-center gap-2 text-sm font-medium text-white">
                <svg className="h-4 w-4 text-electric-blue" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
