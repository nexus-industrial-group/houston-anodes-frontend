"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import DownloadForm from "./DownloadForm";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { downloadFile } from "@/utils/downloadFile";

export default function Header() {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement | null>(null);
  const [indicator, setIndicator] = useState<{ left: number; width: number } | null>(null);
  const [hoverIndicator, setHoverIndicator] = useState<{ left: number; width: number } | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isAnodes = pathname?.startsWith("/anodes");

  const [showDownloadForm, setShowDownloadForm] = useState(false);
  const [downloadTitle, setDownloadTitle] = useState<string | undefined>(undefined);
  const [downloadFileName, setDownloadFileName] = useState<string | undefined>(undefined);

  const links = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "Anodes", href: "/anodes" },
    { label: "Gallery", href: "/services" },
    { label: "Contact Us", href: "/contact-us" },
  ];

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 10);
    }

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const openForm = (e?: any, docTitle?: string, fileName?: string) => {
    e?.preventDefault();
    setDownloadTitle(docTitle);
    setDownloadFileName(fileName);
    setShowDownloadForm(true);
  };

  const closeForm = () => {
    setShowDownloadForm(false);
    setDownloadTitle(undefined);
    setDownloadFileName(undefined);
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-2 md:px-12 ${
          isAnodes ? 'bg-navy' : scrolled ? 'bg-navy/90 shadow-xl' : 'bg-white/10'
        } backdrop-blur-lg transition-colors duration-300 text-white`}
      >
        {showDownloadForm && (
          <DownloadForm onClose={closeForm} title={downloadTitle ? `${downloadTitle} Download Form` : undefined} fileName={downloadFileName} />
        )}

        {/* Logo — main logo always visible; ISO/INS only on desktop */}
        <Link href="/" className="flex items-center min-w-0">
          <Image
            src="/images/ha.webp"
            alt="Houston Anodes"
            width={230}
            height={69}
            sizes="(max-width: 768px) 130px, 230px"
            className="h-[50px] md:h-[69px] w-auto object-contain flex-shrink-0"
            priority
          />
          <Image
            src="/images/iso.png"
            alt="ISO Certification"
            width={250}
            height={89}
            sizes="250px"
            className="hidden md:block h-[89px] w-auto object-contain ml-6"
            priority
          />
          <Image
            src="/images/ins.webp"
            alt="INS Certification"
            width={230}
            height={69}
            sizes="230px"
            className="hidden md:block h-[69px] w-auto object-contain ml-6"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden space-x-8 text-lg font-bold text-[#e7e7e7] md:flex items-center">
          {links.map((l) => {
            const isActive = pathname === l.href || (l.href !== "/" && pathname?.startsWith(l.href));
            return (
              <a
                key={l.href}
                href={l.href}
                aria-current={isActive ? "page" : undefined}
                className={`flex items-center transition-colors ${isActive ? "text-white font-extrabold" : "hover:text-white"}`}>
                {l.label}
              </a>
            );
          })}
          <div className="flex items-center gap-3">
            <a
              href="#"
              onClick={(e) => downloadFile(e, "Catalog", "07 - Catalog.pdf")}
              className="inline-flex items-center gap-2 rounded-lg bg-primary-blue px-3 py-2 text-sm font-semibold text-white shadow-md hover:bg-primary-blue/90 transition-colors"
            >
              Download Catalog
            </a>
            <Image
              src="/images/made-in.png"
              alt="Made in"
              width={160}
              height={56}
              className="h-20 w-20 object-contain"
            />
          </div>
        </div>

        {/* Hamburger button */}
        <button
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          className="text-white md:hidden p-1"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
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

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile menu drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-4/5 max-w-xs bg-navy flex flex-col pt-20 pb-8 px-6 shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        {/* Nav links */}
        <nav className="flex flex-col gap-2">
          {links.map((l) => {
            const isActive = pathname === l.href || (l.href !== "/" && pathname?.startsWith(l.href));
            return (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileMenuOpen(false)}
                aria-current={isActive ? "page" : undefined}
                className={`text-lg py-3 border-b border-white/10 font-semibold transition-colors ${
                  isActive ? "text-white font-extrabold" : "text-[#e7e7e7] hover:text-white"
                }`}
              >
                {l.label}
              </a>
            );
          })}
        </nav>

        {/* Download Catalog */}
        <a
          href="#"
          onClick={(e) => { downloadFile(e, "Catalog", "07 - Catalog.pdf"); setMobileMenuOpen(false); }}
          className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-primary-blue px-4 py-3 text-sm font-semibold text-white shadow-md hover:bg-primary-blue/90 transition-colors"
        >
          Download Catalog
        </a>

        {/* Certification logos */}
        <div className="mt-auto flex items-center justify-center gap-4 pt-6">
          <Image
            src="/images/iso.png"
            alt="ISO Certification"
            width={200}
            height={72}
            className="h-[72px] w-auto object-contain"
          />
          <Image
            src="/images/ins.webp"
            alt="INS Certification"
            width={180}
            height={56}
            className="h-[56px] w-auto object-contain"
          />
        </div>
      </div>
    </>
  );
}

// compute indicator after component defined: use effect placed earlier
