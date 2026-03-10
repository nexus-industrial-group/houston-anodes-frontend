"use client";

import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line,
} from "react-simple-maps";

const GEO_URL =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const MARKERS = [
  { name: "Houston, TX",   coords: [-95.37, 29.76] as [number, number] },
  { name: "Rio de Janeiro", coords: [-43.17, -22.91] as [number, number] },
  { name: "London",         coords: [-0.12, 51.51] as [number, number] },
  { name: "Lagos",          coords: [3.39, 6.45] as [number, number] },
  { name: "Dubai",          coords: [55.27, 25.2] as [number, number] },
  { name: "Singapore",      coords: [103.82, 1.35] as [number, number] },
  { name: "Jakarta",        coords: [106.85, -6.21] as [number, number] },
  { name: "Perth",          coords: [115.86, -31.95] as [number, number] },
];

const HOUSTON = MARKERS[0].coords;

export default function WorldMapSvg() {
  return (
    <ComposableMap
      projection="geoMercator"
      projectionConfig={{ scale: 180, center: [0, 25] }}
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
              fill="#002045"
              stroke="#005de9"
              strokeWidth={0.5}
              style={{
                default: { outline: "none" },
                hover: { fill: "#2191fb", outline: "none" },
                pressed: { outline: "none" },
              }}
            />
          ))
        }
      </Geographies>

      {/* Connection lines from Houston */}
      {MARKERS.slice(1).map(({ name, coords }) => (
        <Line
          key={name}
          from={HOUSTON}
          to={coords}
          stroke="#0070f3"
          strokeWidth={1}
          strokeOpacity={0.3}
          strokeLinecap="round"
        />
      ))}

      {/* Location markers */}
      {MARKERS.map(({ name, coords }, i) => (
        <Marker key={name} coordinates={coords}>
          {/* Pulse ring */}
          <circle
            r={6}
            fill="#0070f3"
            opacity={0.25}
            className="animate-pulse"
            style={{ animationDelay: `${i * 0.3}s` }}
          />
          {/* Dot */}
          <circle r={3} fill="#0070f3" />
          <circle r={1.5} fill="#ffffff" />
          {/* Label */}
          <text
            textAnchor="middle"
            y={-10}
            className="fill-gray text-[8px] font-semibold"
          >
            {name}
          </text>
        </Marker>
      ))}
    </ComposableMap>
  );
}
