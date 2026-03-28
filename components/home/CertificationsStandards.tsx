import Image from "next/image";

const APPROVED_SUPPLIERS = [
  "Ørsted — World's largest offshore wind operator",
  "FMC Global — Approved supplier",
] as const;

export default function CertificationsStandards() {
  return (
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
  );
}
