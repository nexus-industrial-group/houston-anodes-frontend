"use client";

import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line,
} from "react-simple-maps";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/land-110m.json";

const MARKERS = [
  { name: "North America", coords: [-98, 34] as [number, number] },
  { name: "South America", coords: [-47, -15] as [number, number] },
  { name: "Europe", coords: [10, 50] as [number, number] },
  { name: "Middle East", coords: [45, 25] as [number, number] },
  { name: "Asia Pacific", coords: [105, 22] as [number, number] },
  { name: "Africa", coords: [20, -1] as [number, number] },
  { name: "Guam", coords: [144, 13.44] as [number, number] },
];

const HOUSTON = MARKERS[0].coords;

export default function WorldMapSvg() {
  return (
    <ComposableMap
      projection="geoMercator"
      projectionConfig={{ scale: 160, center: [0, 20] }}
      width={1000}
      height={550}
      className="w-full h-auto"
    >
      <Geographies geography={GEO_URL}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#2191fb"
              stroke="#2191fb"
              strokeWidth={3}
              style={{
                default: { outline: "none" },
                hover: { fill: "#2191fb", outline: "none" },
                pressed: { fill: "#2191fb", outline: "none" },
              }}
            />
          ))
        }
      </Geographies>

      {/* Location markers */}
      {MARKERS.map(({ name, coords }, i) => (
        <Marker key={name} coordinates={coords}>
          {i === 0 ? (
            <>
              {/* Origin (Houston) retains pulse, dot and label */}
              <circle
                r={6}
                fill="#ffffff"
                opacity={0.25}
                className="animate-pulse"
                style={{ animationDelay: `${i * 0.3}s` }}
              />
              <circle r={4} fill="#0070f3" />
              <circle r={2} fill="#ffffff" />
              <text
                textAnchor="middle"
                y={-10}
                className="fill-white text-lg font-bold"
              >
                {name}
              </text>
            </>
          ) : (
            /* Non-source points: only a single dot in #f97316 */
            <>
              <circle r={4} fill="#f97316" />
              <text
                textAnchor="middle"
                y={-10}
                className="fill-[#f97316] text-lg font-bold"
              >
                {name}
              </text>
            </>
          )}
        </Marker>
      ))}
    </ComposableMap>
  );
}
