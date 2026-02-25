const CERTIFICATIONS = [
  {
    title: "ISO 9001:2015",
    description: "Quality Management System – DNV",
  },
  {
    title: "NACE SP-0387, SP-0492",
    description: "Cathodic Protection Standards",
  },
  {
    title: "DNV RP B401",
    description: "Submarine Pipeline Systems",
  },
  {
    title: "ISO 15589-2:2012",
    description: "Cathodic Protection of Pipelines",
  },
  {
    title: "NORSOK M-503",
    description: "Cathodic Protection",
  },
  {
    title: "Ørsted-Approved Supplier",
    description: "World's largest offshore wind operator",
  },
  {
    title: "FMC Global-Approved Supplier",
    description: "Approved supplier for FMC Global",
  },
] as const;

export default function CertificationsSection() {
  return (
    <section className="bg-gray-50 py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section heading */}
        <h2 className="text-center text-3xl font-bold uppercase tracking-tight text-gray-800 sm:text-4xl mb-4 lg:mb-6">
          Certifications & Standards
        </h2>
        <p className="text-center text-text-secondary mb-16 lg:mb-20 max-w-3xl mx-auto">
          Certified and approved to meet the highest industry standards for cathodic protection and quality management.
        </p>

        {/* Cards grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {CERTIFICATIONS.map(({ title, description }) => (
            <div
              key={title}
              className="flex flex-col w-full overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg"
            >
              {/* Icon/Badge area */}
              <div className="flex h-32 items-center justify-center bg-gradient-to-br from-navy to-navy-light">
                <svg className="h-16 w-16 text-white opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>

              {/* Card content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-navy mb-2">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
