export default function ProductHighlightSection() {
  return (
    <section className="relative bg-white py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Big zoom product image */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 shadow-2xl">
              <div className="flex h-full w-full items-center justify-center">
                {/* Anode silhouette with shadow - big zoom */}
                <svg
                  viewBox="0 0 400 200"
                  className="h-auto w-full scale-125 drop-shadow-2xl"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Main anode body */}
                  <path
                    d="M40,100 Q40,60 80,60 L320,60 Q360,60 370,85 L380,100 L370,115 Q360,140 320,140 L80,140 Q40,140 40,100Z"
                    fill="url(#productGradient)"
                    stroke="#6b7280"
                    strokeWidth="2"
                  />
                  {/* Mounting hole */}
                  <circle cx="340" cy="100" r="12" fill="#4b5563" stroke="#374151" strokeWidth="1" />
                  {/* Detail lines */}
                  <line x1="80" y1="70" x2="310" y2="70" stroke="#9ca3af" strokeWidth="1" opacity="0.5" />
                  <line x1="80" y1="130" x2="310" y2="130" stroke="#9ca3af" strokeWidth="1" opacity="0.5" />
                  
                  <defs>
                    <linearGradient id="productGradient" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#f3f4f6" />
                      <stop offset="30%" stopColor="#e5e7eb" />
                      <stop offset="70%" stopColor="#d1d5db" />
                      <stop offset="100%" stopColor="#9ca3af" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 rounded-xl bg-electric-blue px-6 py-4 shadow-xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-white">
                Made in USA
              </p>
            </div>
          </div>

          {/* Text content */}
          <div className="order-1 lg:order-2">
            <p className="text-sm font-semibold uppercase tracking-widest text-electric-blue">
              Premium Sacrificial Anodes
            </p>
            <h2 className="mt-4 text-4xl font-extrabold uppercase leading-tight tracking-tight text-navy sm:text-5xl lg:text-6xl">
              Engineered for Maximum Protection
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-text-secondary">
              Our anodes are precision-manufactured using high-purity aluminum, zinc, and magnesium alloys. Each product undergoes rigorous quality control to ensure optimal electrochemical performance and extended service life.
            </p>

            {/* Features list */}
            <ul className="mt-8 space-y-4">
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-electric-blue/10">
                  <svg className="h-4 w-4 text-electric-blue" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-gray-700">ISO 9001 certified manufacturing process</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-electric-blue/10">
                  <svg className="h-4 w-4 text-electric-blue" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-gray-700">Precise chemical composition and weight specifications</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-electric-blue/10">
                  <svg className="h-4 w-4 text-electric-blue" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-gray-700">Trusted by major oil & gas, marine, and infrastructure projects</span>
              </li>
            </ul>

            {/* CTA */}
            <div className="mt-10">
              <a
                href="/anodes"
                className="inline-flex items-center gap-2 rounded-md bg-navy px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-navy-light"
              >
                View Our Products
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
        </div>
      </div>
    </section>
  );
}
