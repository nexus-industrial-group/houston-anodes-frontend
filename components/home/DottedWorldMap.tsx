import DottedMap from "dotted-map";

const PINS = [
  { lat: 34,    lng: -98,    label: "North America"  },
  { lat: -15,   lng: -47,    label: "South America"  },
  { lat: 50,    lng: 10,     label: "Europe"         },
  { lat: 25,    lng: 45,     label: "Middle East"    },
  { lat: 22,    lng: 105,    label: "Asia Pacific"   },
  { lat: -1,    lng: 20,     label: "Africa"         },
];

export default function DottedWorldMap() {
  const map = new DottedMap({ height: 60, grid: "diagonal" });

  PINS.forEach(({ lat, lng }) =>
    map.addPin({
      lat,
      lng,
      svgOptions: { color: "#f97316", radius: 0.6 },
    })
  );

  const svgString = map.getSVG({
    radius: 0.20,
    color: "#2072fb",
    shape: "circle",
    backgroundColor: "transparent",
  });

  return (
    <div
      className="w-full"
      dangerouslySetInnerHTML={{ __html: svgString }}
    />
  );
}
