import WorldMapSvg from "./WorldMapSvg";

const REGIONS = [
  "All Regions",
  "North America",
  "South America",
  "Europe",
  "Middle East",
  "Asia Pacific",
  "Africa",
] as const;

export default function GlobalPresenceSection() {
  return (
    <section className="relative overflow-hidden bg-white py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-center text-3xl font-bold uppercase tracking-tight text-electric-blue sm:text-4xl">
          Global Footprint
        </h2>

      </div>

      {/* Map — full bleed */}
      <div className="mt-12 max-w-6xl px-6 lg:px-8 mx-auto">
        <WorldMapSvg />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Stats & Filter */}
        <div className="mt-12 flex flex-col items-center justify-between gap-8 sm:flex-row sm:items-end">
          {/* Counter */}
          <div>
            <p className="text-5xl font-extrabold text-electric-orange sm:text-6xl">
              1000+
            </p>
            <p className="mt-1 text-sm font-semibold uppercase tracking-widest text-electric-orange">
              Projects Worldwide
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
