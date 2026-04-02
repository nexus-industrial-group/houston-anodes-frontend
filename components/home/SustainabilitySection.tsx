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
    body: "Our quality system is certified ISO 9001:2015 by DNV. Our in-house laboratory holds ISO 17025 accreditation. We are an approved supplier to Ørsted, FMC Global, the U.S. Navy (35 years), and PEMEX (35 years, 80% of project supply) with no product failures or claims across 47 years of continuous operation.",
  },
];

export default function SustainabilitySection() {
  return (
    <section className="bg-navy py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* ── Top grid: What Changes + image placeholder ── */}
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">

          {/* Left — What Changes */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white">
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
              src="/products/bowling-ball-no-bg.webp"
              alt="Houston Anodes manufacturing"
              fill
              className="object-cover"
            />
          </div>
        </div>


      </div>
    </section>
  );
}
