export default function SustainabilitySection() {
  return (
    <section className="bg-light-gray py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:px-8">
        {/* Text content */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-text-secondary">
            Engineered in the USA
          </p>
          <h2 className="mt-4 text-3xl font-extrabold uppercase leading-tight tracking-tight text-navy sm:text-4xl lg:text-5xl">
            Superior Material Purity.
            <br />
            Unmatched Performance.
          </h2>

          {/* US Flag placeholder */}
          <div className="mt-8 flex items-center gap-1">
            <div className="flex flex-col">
              {[...Array(7)].map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 w-16 ${i % 2 === 0 ? "bg-red-600" : "bg-white"}`}
                />
              ))}
            </div>
            <div className="ml-0 flex h-[10.5px] w-6 items-center justify-center self-start bg-blue-800">
              <span className="text-[6px] text-white">★</span>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10">
            <a
              href="/sustainability"
              className="inline-flex items-center gap-2 rounded-md bg-electric-blue px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-electric-blue/90"
            >
              Learn More
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

        {/* Image placeholder — anode close-up */}
        <div className="relative flex items-center justify-center overflow-hidden rounded-lg">
          <div className="flex h-80 w-full items-center justify-center bg-gradient-to-br from-gray-300 via-silver to-gray-400 lg:h-[28rem]">
            {/* Anode shape silhouette */}
            <svg
              viewBox="0 0 400 120"
              className="h-auto w-3/4 drop-shadow-lg"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20,60 Q20,30 50,30 L350,30 Q380,30 390,50 L395,60 L390,70 Q380,90 350,90 L50,90 Q20,90 20,60Z"
                fill="url(#anodeGradient)"
                stroke="#9ca3af"
                strokeWidth="1"
              />
              <ellipse cx="370" cy="60" rx="8" ry="8" fill="#6b7280" />
              <defs>
                <linearGradient id="anodeGradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#e5e7eb" />
                  <stop offset="50%" stopColor="#d1d5db" />
                  <stop offset="100%" stopColor="#9ca3af" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
