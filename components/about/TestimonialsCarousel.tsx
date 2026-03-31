"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

const TESTIMONIALS = [
  {
    initials: "JM",
    logo: "/images/about-us/msco.webp",
    name: "John Mitchell",
    title: "Engineering Director, Maritime Solutions Corp",
    quote:
      "Houston Anodes has been our trusted partner for over 15 years. Their commitment to quality and technical expertise is unmatched in the industry.",
  },
  {
    initials: "SR",
    logo: "/images/about-us/gep.webp",
    name: "Sarah Rodriguez",
    title: "VP Operations, Global Energy Partners",
    quote:
      "The performance and reliability of Houston Anodes products have significantly reduced our maintenance costs and extended the life of our offshore structures.",
  },
  {
    initials: "DK",
    logo: "/images/about-us/isi.webp",
    name: "David Kim",
    title: "Lead Engineer, Infrastructure Solutions Inc",
    quote:
      "Houston Anodes delivers consistent quality and exceptional customer service. They understand our technical requirements and always exceed expectations.",
  },
  {
    initials: "MT",
    logo: "/images/about-us/pms.webp",
    name: "Maria Torres",
    title: "Project Manager, Pacific Marine Systems",
    quote:
      "We've used Houston Anodes across multiple international projects. Their global reach and local expertise make them an invaluable partner.",
  },
];

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("left");
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback(
    (next: number, dir: "left" | "right" = "left") => {
      if (animating) return;
      setDirection(dir);
      setAnimating(true);
      setTimeout(() => {
        setCurrent(next);
        setAnimating(false);
      }, 400);
    },
    [animating]
  );

  const goNext = useCallback(() => {
    goTo((current + 1) % TESTIMONIALS.length, "left");
  }, [current, goTo]);

  const goPrev = useCallback(() => {
    goTo((current - 1 + TESTIMONIALS.length) % TESTIMONIALS.length, "right");
  }, [current, goTo]);

  useEffect(() => {
    if (paused) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = setInterval(goNext, 4500);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused, goNext]);

  const t = TESTIMONIALS[current];

  return (
    <div
      className="flex flex-col items-center"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Card */}
      <div className="relative w-full max-w-2xl mx-auto overflow-hidden">
        <div
          className="transition-all duration-400"
          style={{
            opacity: animating ? 0 : 1,
            transform: animating
              ? `translateX(${direction === "left" ? "-40px" : "40px"})`
              : "translateX(0)",
            transition: "opacity 0.4s ease, transform 0.4s ease",
          }}
        >
          <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-10 flex flex-col items-center text-center">
            {/* Quote icon */}
            <svg
              className="w-10 h-10 text-electric-blue mb-6 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>

            {/* Quote text */}
            <p className="text-gray-700 text-lg leading-relaxed italic mb-8">
              &ldquo;{t.quote}&rdquo;
            </p>

            {/* Avatar + name */}
            <div className="flex flex-col items-center gap-3">
              <div className="relative w-24 h-14">
                <Image
                  src={t.logo}
                  alt={t.title}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="font-bold text-gray-900 text-base">{t.name}</p>
              <p className="text-sm text-gray-500">{t.title}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-6 mt-8">
        <button
          onClick={goPrev}
          aria-label="Previous testimonial"
          className="w-10 h-10 rounded-full border border-white/30 bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
        >
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > current ? "left" : "right")}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === current ? "bg-electric-blue scale-125" : "bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>

        <button
          onClick={goNext}
          aria-label="Next testimonial"
          className="w-10 h-10 rounded-full border border-white/30 bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
        >
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
