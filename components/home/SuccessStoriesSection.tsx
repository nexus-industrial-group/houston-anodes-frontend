import Image from "next/image";

const ROW_1 = [
  { name: "ExxonMobil",       logo: "/images/homepage/clients/exxon.webp",     glow: false },
  { name: "Shell",            logo: "/images/homepage/clients/shell.webp",     glow: true,  glowDelay: "1.2s"  },
  { name: "BP",               logo: "/images/homepage/clients/bp.webp",        glow: false },
  { name: "Chevron",          logo: "/images/homepage/clients/chevron.webp",   glow: false },
  { name: "PEMEX",            logo: "/images/homepage/clients/pemex.webp",     glow: true,  glowDelay: "4.5s"  },
  { name: "TechnipFMC",       logo: "/images/homepage/clients/tech.webp",      glow: false },
  { name: "Subsea 7",         logo: "/images/homepage/clients/subsea.webp",    glow: false },
  { name: "J. Ray McDermott", logo: "/images/homepage/clients/jr.webp",        glow: true,  glowDelay: "7.8s"  },
];
const ROW_2 = [
  { name: "Hess",             logo: "/images/homepage/clients/hess.webp",      glow: true,  glowDelay: "2.3s"  },
  { name: "Marathon",         logo: "/images/homepage/clients/marathon.webp",  glow: false },
  { name: "Williams",         logo: "/images/homepage/clients/williams.webp",  glow: false },
  { name: "Anadarko",         logo: "/images/homepage/clients/andrako.webp",   glow: true,  glowDelay: "5.9s"  },
  { name: "Oceaneering",      logo: "/images/homepage/clients/ocean.webp",     glow: false },
  { name: "Bredero Shaw",     logo: "/images/homepage/clients/bredero.webp",   glow: false },
  { name: "FloaTEC",          logo: "/images/homepage/clients/floa.webp",      glow: true,  glowDelay: "9.1s"  },
  { name: "Oil States",       logo: "/images/homepage/clients/oilstates.webp", glow: false },
];
const ROW_3 = [
  { name: "Sapura Energy",    logo: "/images/homepage/clients/sapura.webp",    glow: false },
  { name: "Ørsted",           logo: "/images/homepage/clients/orsted.webp",    glow: true,  glowDelay: "0.7s"  },
  { name: "Deepwater",        logo: "/images/homepage/clients/deepwater.webp", glow: false },
  { name: "Noble",            logo: "/images/homepage/clients/noble.webp",     glow: false },
  { name: "ATP Oil & Gas",    logo: "/images/homepage/clients/atp.webp",       glow: true,  glowDelay: "3.4s"  },
  { name: "LLOG",             logo: "/images/homepage/clients/llog.webp",      glow: false },
  { name: "Corrpro",          logo: "/images/homepage/clients/corrpro.webp",   glow: true,  glowDelay: "6.6s"  },
  { name: "U.S. Navy",        logo: "/images/homepage/clients/uss.webp",       glow: false },
];

const ROWS = [
  { items: ROW_1, duration: "22s", delay: "0s"   },
  { items: ROW_2, duration: "27s", delay: "-6s"  },
  { items: ROW_3, duration: "32s", delay: "-12s" },
];

export default function SuccessStoriesSection() {
  return (
    <section className="bg-white py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Top row: Header + image */}
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2">

          {/* Left — header & stats */}
          <div>
            {/* Header */}
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#006ce9]">
                Global Trust, Proven Results
              </p>
              <h2 className="mt-4 text-3xl font-extrabold uppercase leading-tight tracking-tight text-electric-blue sm:text-4xl">
                Trusted by Industry Leaders
              </h2>
              <div className="mt-3 h-1 w-16 bg-primary-blue" />
            </div>

            {/* Stat callout */}
            <div className="mt-10 inline-flex items-center gap-4 rounded-xl border border-gray-200 bg-gray-50 px-6 py-4">
              <span className="text-3xl font-extrabold text-primary-blue">1,000+</span>
              <span className="text-sm leading-snug text-gray-700">
                Projects completed worldwide<br />over a span of 50 years
              </span>
            </div>

            {/* Fact stats */}
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-gray-200 bg-gray-50 px-6 py-5">
                <p className="text-2xl font-extrabold text-primary-blue">50 Years of Consistency</p>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  Earned through uninterrupted delivery of compliant, documented, high-performance cathodic protection products since 1977.
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-gray-50 px-6 py-5">
                <p className="text-2xl font-extrabold text-primary-blue">Zero Product Claims</p>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  Zero product claims in 50 years of operation — a record built on individual anode documentation, heat analysis, and raw material verification on every order.
                </p>
              </div>
            </div>
          </div>

          {/* Right — image */}
          <div className="relative overflow-hidden rounded-xl h-80 lg:h-[30rem]">
            <Image
              src="/products/bracelet.webp"
              alt="Houston Anodes manufacturing"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Subtitle */}
        <p className="mt-10 max-w-3xl text-sm leading-relaxed text-gray-800">
          Houston Anodes currently protects critical structures throughout the world
          for valued clients including, among others:
        </p>

        {/* Client marquee rows */}
        <div className="mt-10 space-y-3 overflow-hidden">
          {ROWS.map((row, rowIndex) => (
            <div key={rowIndex} className="overflow-hidden">
              <div
                className="flex gap-3"
                style={{
                  width: "max-content",
                  animation: `marquee-ltr ${row.duration} linear ${row.delay} infinite`,
                }}
              >
                {[...row.items, ...row.items].map((item, i) => (
                  <div
                    key={`${item.name}-${i}`}
                    className="flex w-44 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-gray-50 px-4 py-4"
                    style={item.glow ? {
                      animation: `card-glow 4s ease-in-out ${item.glowDelay} infinite`,
                    } : undefined}
                  >
                    <Image
                      src={item.logo}
                      alt={item.name}
                      width={140}
                      height={48}
                      className="h-10 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
