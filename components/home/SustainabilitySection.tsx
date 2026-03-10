import Image from "next/image";

const CHANGES = [
  {
    title: "Predictable Asset Life",
    body: "Your design assumptions hold. Cathodic protection works as engineered across the full asset lifespan.",
  },
  {
    title: "Lower Reserve Costs",
    body: "No mystery degradation. No need for excessive safety margins on anode sizing.",
  },
  {
    title: "Reduced Downtime Risk",
    body: "No mid-life corrosion surprises. Your asset protects when it matters.",
  },
  {
    title: "Regulatory Confidence",
    body: "DNV-certified manufacturing. Approved by Ørsted, FMC Global, and the energy industry's most demanding players.",
  },
];

const TRACK_RECORD = [
  "Zero product claims in 40 years of operation.",
  "Supplier of 80% of sacrificial anodes installed on PEMEX projects — over 35 years.",
  "Approved FMC Global Supplier. Ørsted-certified.",
  "Every anode individually weighed and documented before shipment.",
  "Every heat chemically analyzed. Electrochemical properties tested per NACE TM-0190.",
  "Raw materials verified against mill test reports. Specification compliance is not assumed — it is documented.",
  "Recent wins: Ocean Wind 1 (New Jersey), Revolution Wind (Rhode Island).",
];

export default function SustainabilitySection() {
  return (
    <section className="bg-navy py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* ── Top grid: What Changes + image placeholder ── */}
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">

          {/* Left — What Changes */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-blue">
              What Changes for You
            </p>
            <h2 className="mt-4 text-3xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-4xl">
              Engineering Results You Can Actually Rely On
            </h2>

            <ul className="mt-10 space-y-8">
              {CHANGES.map(({ title, body }) => (
                <li key={title} className="flex gap-4">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-blue/20">
                    <svg className="h-3 w-3 text-primary-blue" fill="currentColor" viewBox="0 0 12 12">
                      <path d="M10.28 2.28a.75.75 0 0 0-1.06 0L4.5 7 2.78 5.28a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.06 0l5.25-5.25a.75.75 0 0 0 0-1.06Z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-sm font-bold text-white">{title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-light-gray">{body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — image */}
          <div className="relative overflow-hidden rounded-xl h-80 lg:h-[26rem]">
            <Image
              src="/images/homepage/a1.webp"
              alt="Houston Anodes manufacturing"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="my-16 h-px w-full bg-white/10" />

        {/* ── Bottom: Track record ── */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">

          {/* Left — image */}
          <div className="relative overflow-hidden rounded-xl">
            <Image
              src="/images/homepage/a2.webp"
              alt="Houston Anodes quality assurance"
              width={0}
              height={0}
              sizes="100vw"
              className="h-auto w-full object-contain"
            />
          </div>

          {/* Right — stats */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-blue">
              Earned Through 47 Years of Consistency
            </p>

            <ul className="mt-8 space-y-4">
              {TRACK_RECORD.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-light-gray">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-blue" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
