"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const IMAGES = [
  { src: "/images/anodes/zinc_main.webp", label: "Zinc Anode" },
  { src: "/images/anodes/zinc_carrusel/21%20TRAPEZOIDAL%20HULL%20.webp", label: "Trapezoidal Hull" },
  { src: "/images/anodes/zinc_carrusel/25%20TAPERED%20TRAPEZOIDAL%20%20(b).webp", label: "Tapered Trapezoidal" },
  { src: "/images/anodes/zinc_carrusel/26%20TEARDROP%20(b).webp", label: "Teardrop" },
  { src: "/images/anodes/zinc_carrusel/27%20CLAMP%20.webp", label: "Clamp" },
  { src: "/images/anodes/zinc_carrusel/28%20MAT%20.webp", label: "Mat" },
  { src: "/images/anodes/zinc_carrusel/29%20LINK%20(1%20UNIT).webp", label: "Link" },
];

export default function ZincCarousel() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % IMAGES.length), []);
  const prev = () => setCurrent((c) => (c - 1 + IMAGES.length) % IMAGES.length);

  useEffect(() => {
    const id = setInterval(next, 3500);
    return () => clearInterval(id);
  }, [next]);

  return (
    <div className="relative w-full h-56 bg-gray-50 flex flex-col items-center justify-center overflow-hidden">
      {/* Slides */}
      {IMAGES.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-500 ${i === current ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
          <Image
            src={img.src}
            alt={img.label}
            fill
            className="object-contain p-6"
          />
        </div>
      ))}

      {/* Prev / Next */}
      <button
        onClick={prev}
        aria-label="Previous"
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/70 hover:bg-white rounded-full w-7 h-7 flex items-center justify-center shadow text-gray-500 hover:text-navy transition-colors"
      >
        ‹
      </button>
      <button
        onClick={next}
        aria-label="Next"
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/70 hover:bg-white rounded-full w-7 h-7 flex items-center justify-center shadow text-gray-500 hover:text-navy transition-colors"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 flex gap-1.5 z-10">
        {IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
            className={`w-1.5 h-1.5 rounded-full transition-colors ${i === current ? "bg-primary-blue" : "bg-gray-300"}`}
          />
        ))}
      </div>

      <p className="absolute bottom-1 text-[10px] font-bold uppercase tracking-widest text-gray-400 z-10">
        Zinc Anode Photo
      </p>
    </div>
  );
}
