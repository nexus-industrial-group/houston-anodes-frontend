export default function QualitySection() {
  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden">
      {/* Full-screen background placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-700 via-gray-800 to-slate-900">
        {/* Subtle grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-electric-blue">
          Quality Control
        </p>
        <h2 className="mt-4 text-4xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          Built to Protect.
          <br />
          Tested to Last.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-text-on-dark/80">
          Every anode undergoes rigorous quality assurance — from raw material
          analysis to final dimensional inspection — ensuring reliable cathodic
          protection for the world&apos;s most demanding environments.
        </p>
        <div className="mt-10">
          <a
            href="/quality"
            className="inline-flex items-center gap-2 rounded-md border border-white/30 px-8 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
          >
            Explore Quality
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Placeholder label */}
      <div className="absolute bottom-6 right-6 z-10">
        <span className="rounded bg-black/40 px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-white/50">
          Full-screen image placeholder
        </span>
      </div>
    </section>
  );
}
