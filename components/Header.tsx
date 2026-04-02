"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement | null>(null);
  const [indicator, setIndicator] = useState<{ left: number; width: number } | null>(null);
  const [hoverIndicator, setHoverIndicator] = useState<{ left: number; width: number } | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const isAnodes = pathname?.startsWith("/anodes");

  const links = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "Anodes", href: "/anodes" },
    { label: "Services", href: "/services" },
    { label: "Contact Us", href: "/contact-us" },
  ];

  useEffect(() => {
    function updateIndicator() {
      const nav = navRef.current;
      if (!nav) return setIndicator(null);
      const anchors = Array.from(nav.querySelectorAll('a')) as HTMLAnchorElement[];
      const active = anchors.find((a) => {
        const href = (a.getAttribute('href') || '').replace(/\/?$/, '');
        const path = (pathname || '').replace(/\/?$/, '');
        return href === path || (href !== '' && path.startsWith(href));
      });
      if (!active) return setIndicator(null);
      const navRect = nav.getBoundingClientRect();
      const rect = active.getBoundingClientRect();
      setIndicator({ left: rect.left - navRect.left, width: rect.width });
    }

    updateIndicator();
    window.addEventListener('resize', updateIndicator);
    return () => window.removeEventListener('resize', updateIndicator);
  }, [pathname]);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 10);
    }

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function handleHover(el: HTMLElement | null) {
    const nav = navRef.current;
    if (!nav || !el) return setHoverIndicator(null);
    const navRect = nav.getBoundingClientRect();
    const rect = el.getBoundingClientRect();
    setHoverIndicator({ left: rect.left - navRect.left, width: rect.width });
  }

  function clearHover() {
    setHoverIndicator(null);
  }

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-2 md:px-12 ${
        isAnodes ? 'bg-navy' : scrolled ? 'bg-navy/90 shadow-xl' : 'bg-white/10'
      } backdrop-blur-lg transition-colors duration-300 text-white`}
    >
      <Link href="/" className="flex items-center">
        <Image
          src="/images/ha.webp"
          alt="Houston Anodes"
          width={160}
          height={48}
          sizes="(max-width: 768px) 120px, 160px"
          className="h-12 w-auto object-contain"
          priority
        />
      </Link>

      {/* Enlaces de escritorio */}
      <div className="hidden space-x-8 text-lg font-bold text-[#e7e7e7] md:flex h-full">
        {links.map((l) => {
          const isActive = pathname === l.href || (l.href !== "/" && pathname?.startsWith(l.href));
          return (
            <a
              key={l.href}
              href={l.href}
              aria-current={isActive ? "page" : undefined}
              onMouseEnter={(e) => handleHover(e.currentTarget as HTMLElement)}
              onMouseLeave={clearHover}
              className={`flex items-center h-full transition-colors ${isActive ? "text-white font-extrabold" : "hover:text-white"}`}>
              {l.label}
            </a>
          );
        })}
      </div>

      {/* Menú móvil */}
      <button aria-label="Burger Menu" className="text-white md:hidden">
        <Menu size={24} />
      </button>
      {/* Indicator positioned relative to nav bottom */}
      {indicator && (
        <span
          aria-hidden="true"
          style={{ left: indicator.left, width: indicator.width }}
          className="pointer-events-none absolute bottom-0 h-[3px] bg-primary-blue"
        />
      )}
      {hoverIndicator && (
        <span
          aria-hidden="true"
          style={{ left: hoverIndicator.left, width: hoverIndicator.width }}
          className="pointer-events-none absolute bottom-0 h-[3px] bg-primary-blue opacity-60"
        />
      )}
    </nav>
  );
}

// compute indicator after component defined: use effect placed earlier
