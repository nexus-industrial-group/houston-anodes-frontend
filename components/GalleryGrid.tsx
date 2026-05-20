"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const TOTAL = 16;
const IMAGES = Array.from({ length: TOTAL }, (_, i) => ({
  src: `/images/services/g${i + 1}.webp`,
  alt: `Gallery image ${i + 1}`,
}));

export default function GalleryGrid() {
  const [selected, setSelected] = useState<number | null>(null);

  const close = useCallback(() => setSelected(null), []);
  const prev = useCallback(
    () => setSelected((s) => (s === null ? null : (s - 1 + TOTAL) % TOTAL)),
    []
  );
  const next = useCallback(
    () => setSelected((s) => (s === null ? null : (s + 1) % TOTAL)),
    []
  );

  // Keyboard navigation
  useEffect(() => {
    if (selected === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [selected, close, prev, next]);

  // Lock body scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = selected !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <>
      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {IMAGES.map((img, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className="relative aspect-square overflow-hidden rounded-xl group bg-gray-200 cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-blue"
            aria-label={`Open ${img.alt}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={close}
        >
          {/* Close */}
          <button
            className="absolute top-4 right-4 z-10 rounded-full bg-white/10 p-2 text-white hover:bg-white/25 transition-colors"
            onClick={close}
            aria-label="Close gallery"
          >
            <X size={22} />
          </button>

          {/* Counter */}
          <span className="absolute top-5 left-1/2 -translate-x-1/2 text-white/50 text-sm tabular-nums select-none">
            {selected + 1} / {TOTAL}
          </span>

          {/* Prev */}
          <button
            className="absolute left-3 md:left-6 z-10 rounded-full bg-white/10 p-2 md:p-3 text-white hover:bg-white/25 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous image"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Image */}
          <div
            className="relative w-[90vw] h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={IMAGES[selected].src}
              alt={IMAGES[selected].alt}
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Next */}
          <button
            className="absolute right-3 md:right-6 z-10 rounded-full bg-white/10 p-2 md:p-3 text-white hover:bg-white/25 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next image"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      )}
    </>
  );
}
