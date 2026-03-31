const SPEC_CARDS = [
  {
    title: "Right Specs",
    description: "Electromagnetic induction melting (not gas furnaces)",
    items: [
      "Proprietary aluminum alloys",
      "High-purity zinc",
      "Custom material formulations",
      "Any core configuration",
    ],
  },
  {
    title: "Right Weight",
    description: "Weight ranges from 5 lbs to custom configurations.",
    items: [
      "Light-duty (22 – 99 lbs)",
      "Medium-duty (100 – 400 lbs)",
      "Heavy-duty (401 – 1,650 lbs)",
      "Custom weights",
    ],
  },
  {
    title: "Right Fit",
    description: "Application-specific designs for any infrastructure.",
    items: [
      "Platforms",
      "Subsea Infrastructure",
      "Pipeline bracelets",
      "Pier/Piling and More+",
    ],
  },
];

function CheckIcon() {
  return (
    <svg
      className="h-5 w-5 flex-shrink-0 text-primary-blue"
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
  );
}

export default function ProductHighlightSection() {
  return (
    <section className="bg-slate-50 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-blue">
            Our Company 
          </p>
          <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-electric-blue sm:text-5xl">
            Zero Claims in 49 Years of Protecting Critical Infrastructure
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-text-secondary">
            We design, manufacture, and deliver high-quality aluminum and zinc sacrificial anodes using electromagnetic induction technology — producing anodes that last 40% longer than conventional alternatives
          </p>
        </div>

        {/* Spec cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {SPEC_CARDS.map(({ title, description, items }) => (
            <div
              key={title}
              className="flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-transform duration-300 hover:-translate-y-1"
            >
              <h3 className="text-base font-extrabold uppercase tracking-widest text-electric-blue">
                {title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-text-secondary">
                {description}
              </p>
              <ul className="mt-8 space-y-3">
                {items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-base text-gray-800">
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
