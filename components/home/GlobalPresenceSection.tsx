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
    <section className="relative overflow-hidden bg-navy py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-center text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">
          Global Footprint
        </h2>

        {/* Map */}
        <div className="mt-12 flex justify-center">
          <div className="w-full max-w-4xl">
            <WorldMapSvg />
          </div>
        </div>

        {/* Stats & Filter */}
        <div className="mt-12 flex flex-col items-center justify-between gap-8 sm:flex-row sm:items-end">
          {/* Counter */}
          <div>
            <p className="text-5xl font-extrabold text-white sm:text-6xl">
              1000+
            </p>
            <p className="mt-1 text-sm font-semibold uppercase tracking-widest text-text-on-dark/70">
              Projects Worldwide
            </p>
          </div>

          {/* Region filter */}
          <div className="w-full max-w-xs">
            <select
              className="w-full appearance-none rounded border border-white/20 bg-navy-light px-4 py-3 text-sm text-white outline-none transition-colors focus:border-electric-blue"
              defaultValue="All Regions"
              aria-label="Filter by region"
            >
              {REGIONS.map((region) => (
                <option key={region} value={region}>
                  {region}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </section>
  );
}
