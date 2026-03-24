'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const images = [
  '/images/about-us/car1.webp',
  '/images/about-us/car2.webp',
  '/images/about-us/car3.webp',
  '/images/about-us/car4.webp',
  '/images/about-us/car5.webp',
];

export default function HistoryBgCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          className={`object-cover transition-opacity duration-1000 ${i === current ? 'opacity-100' : 'opacity-0'}`}
          aria-hidden
        />
      ))}
      {/* Overlay to keep content readable */}
      <div className="absolute inset-0 bg-gray-50/70" />
    </div>
  );
}
