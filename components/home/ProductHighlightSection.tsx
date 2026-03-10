const FAILURE_CARDS = [
  {
    eyebrow: "The Problem",
    title: "Made Inconsistently",
    description:
      "Most sacrificial anodes are manufactured with gas-fired furnaces that apply external flame heat—introducing hydrogen, carbon, and iron contamination directly into the alloy.",
    icon: (
      <svg className="h-6 w-6 text-primary-blue" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
  },
  {
    eyebrow: "The Cause",
    title: "Impure Alloy Structure",
    description:
      "Manual stirring leaves chemical impurities. Heterogeneous alloys form inert pockets that never activate. Indium sits dormant. Electrochemical capacity deteriorates long before deployment.",
    icon: (
      <svg className="h-6 w-6 text-primary-blue" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15M14.25 3.104c.251.023.501.05.75.082M19.8 15a2.25 2.25 0 01.45 1.317v1.358a2.25 2.25 0 01-1.95 2.23 48.424 48.424 0 01-10.2 0 2.25 2.25 0 01-1.95-2.23v-1.358a2.25 2.25 0 01.45-1.317l1.5-1.663M19.8 15l-1.5-1.663M5 14.5l-1.5 1.663M5 14.5l1.5-1.5" />
      </svg>
    ),
  },
  {
    eyebrow: "The Consequence",
    title: "Invisible Asset Failure",
    description:
      "You can't see this failure happening. Your anode corrodes slowly instead of predictably. Asset protection degrades silently—and when corrosion finally appears, your system never worked as designed.",
    icon: (
      <svg className="h-6 w-6 text-primary-blue" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
      </svg>
    ),
  },
];

export default function ProductHighlightSection() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-blue">
            Industry Problem
          </p>
          <h2 className="mt-4 text-4xl font-extrabold uppercase leading-tight tracking-tight text-electric-blue sm:text-5xl">
            The Hidden Cost of Anode Inconsistency
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-text-secondary">
            Corrosion doesn't wait. It happens continuously—24/7—wherever steel meets saltwater
            or oxygen-rich soil. Your cathodic protection system is designed to stop it.
            But only if your sacrificial anodes perform exactly as specified.
          </p>
        </div>

        {/* Diagnostic cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {FAILURE_CARDS.map(({ eyebrow, title, description, icon }) => (
            <div
              key={title}
              className="relative overflow-hidden border border-white/10 bg-navy-light p-8 transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Top accent bar */}
              <div className="absolute left-0 top-0 h-[3px] w-full bg-primary-blue" />

              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center bg-primary-blue/10">
                {icon}
              </div>

              <p className="mt-6 text-xs font-bold uppercase tracking-widest text-primary-blue">
                {eyebrow}
              </p>
              <h3 className="mt-2 text-xl font-bold text-white">{title}</h3>
              <p className="mt-3 text-base leading-relaxed text-text-on-dark/60">{description}</p>
            </div>
          ))}
        </div>

        {/* Silent failure warning strip */}
        <div className="mt-10 flex items-start gap-5 border border-red-500/20 bg-red-500/5 p-6">
          <div className="mt-0.5 flex-shrink-0">
            <svg className="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-red-400">
              Corrosion is already happening — right now.
            </p>
            <p className="mt-1 text-sm leading-relaxed text-text-secondary">
              Every hour an underperforming anode is in service, your asset is unprotected.
              Most operators don't discover the failure until the damage is irreversible.
            </p>
          </div>
          <a
            href="/anodes"
            className="ml-auto hidden flex-shrink-0 items-center gap-2 self-center bg-primary-blue px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 md:flex"
          >
            See Our Solution
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
