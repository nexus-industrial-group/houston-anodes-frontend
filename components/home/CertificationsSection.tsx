const CERTIFICATIONS = [
  {
    title: "Quality Control Lab",
    description: "State-of-the-art quality control lab material testing.",
  },
  {
    title: "ISO 9001 Certified",
    description: "Certified ISO 9001 quality management system.",
  },
  {
    title: "Precision Spectrometer",
    description: "Precision spectrometer screening and monitoring.",
  },
  {
    title: "Finished Anodes",
    description: "Finished anodes undergoing rigorous testing.",
  },
] as const;

export default function CertificationsSection() {
  return (
    <section className="bg-gray-50 py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section heading */}
        <h2 className="text-center text-3xl font-bold uppercase tracking-tight text-gray-800 sm:text-4xl mb-16 lg:mb-20">
          The Houston Standard
        </h2>

        {/* Cards grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {CERTIFICATIONS.map(({ title, description }) => (
            <div
              key={title}
              className="flex flex-col w-full overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg"
            >
              {/* Image placeholder */}
              <div className="flex h-56 items-center justify-center bg-gray-300">
                <span className="text-gray-500 text-sm font-medium">Image Placeholder</span>
              </div>

              {/* Card content */}
              <div className="p-6">
                <h3 className="text-base font-semibold text-gray-800 mb-2">
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
