"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Linkedin, Facebook, Instagram } from "lucide-react";
import DownloadForm from "./DownloadForm";

export default function Footer() {
  const [showDownloadForm, setShowDownloadForm] = useState(false);
  const [downloadTitle, setDownloadTitle] = useState<string | undefined>(undefined);
  const [downloadFileName, setDownloadFileName] = useState<string | undefined>(undefined);
  const [downloadablesList, setDownloadablesList] = useState<string[]>([]);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const res = await fetch("/api/downloadables");
        if (!res.ok) return;
        const data = await res.json();
        setDownloadablesList(Array.isArray(data.files) ? data.files : []);
      } catch (err) {
        // ignore fetch errors
      }
    };
    fetchFiles();
  }, []);

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
    <footer className="bg-navy text-sm text-gray-300 relative">
      {showDownloadForm && (
        <DownloadForm
          onClose={closeForm}
          title={downloadTitle ? `${downloadTitle} Download Form` : undefined}
          fileName={downloadFileName}
        />
      )}
      {/* Borde metálico superior */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h5 className="font-bold text-white mb-4">Resources</h5>
            <hr className="border-white my-2" />
              <ul className="space-y-2">
                {downloadablesList.length > 0 ? (
                  downloadablesList.map((file) => {
                    const displayName = file
                      .replace(/^[0-9]+[\-_.\s]*/i, "")
                      .replace(/\.pdf$/i, "")
                      .replace(/[-_]+/g, " ")
                      .replace(/\s+/g, " ")
                      .trim();
                    return (
                      <li key={file}>
                        <a href="#" onClick={(e) => openForm(e, displayName, file)} className="hover:text-white transition-colors">{displayName}</a>
                      </li>
                    );
                  })
                ) : (
                  <li className="text-gray-400">Loading documents…</li>
                )}
              </ul>

              <div className="mt-6 pt-4 border-t border-gray-700 flex flex-col items-start">
                <div className="flex space-x-6">
                  <a href="https://www.linkedin.com/company/houston-anodes/" aria-label="LinkedIn" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white transition-colors">
                    <Linkedin size={20} />
                  </a>
                  <a href="https://www.facebook.com/HoustonAnodes" aria-label="Facebook" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white transition-colors">
                    <Facebook size={20} />
                  </a>
                  <a href="https://www.instagram.com/houston_anodes" aria-label="Instagram" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white transition-colors">
                    <Instagram size={20} />
                  </a>
                  <a href="https://x.com/HoustonAnodes" aria-label="X" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white transition-colors">
                    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" aria-hidden="true">
                      <title>X</title>
                      <path d="M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z" />
                    </svg>
                  </a>
                </div>
              </div>
          </div>

          <div>
            <h5 className="font-bold text-white mb-4">Contact Info</h5>
            <hr className="border-white my-2" />
            <ul className="space-y-2 text-gray-300">
              <li>
                <address className="not-italic">
                  6425 Cunningham Road<br />
                  Houston, TX 77041-4713
                </address>
              </li>
              <li><a href="mailto:anodes@houstonanodes.com" className="hover:text-white transition-colors">Email: anodes@houstonanodes.com</a></li>
              <li><a href="tel:+18322430700" className="hover:text-white transition-colors">Phone: 832.243.0700</a></li>
              <li>Fax: 832.243.0701</li>
              <li><a href="https://www.google.com/maps/place/Houston+Anodes+International/@29.877862,-95.577278,13z/data=!4m6!3m5!1s0x8640d074b0edb007:0x2bd0674da3abe576!8m2!3d29.861092!4d-95.582933!16s%2Fg%2F1th7yqwc?hl=en&entry=ttu&g_ep=EgoyMDI2MDMxNS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Map: View map</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-white mb-4">Anodes</h5>
            <hr className="border-white my-2" />
            <ul className="space-y-2">
              <li><a href="/anodes" className="hover:text-white transition-colors">Anodes</a></li>
              <li><a href="/anodes#zinc" className="hover:text-white transition-colors">Zinc Anodes</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-700 text-xs text-gray-500 grid grid-cols-1 md:grid-cols-3 items-center gap-4">
          <div className="text-center md:text-left">
            <p>© 2026 Houston Anodes, Inc.</p>
          </div>

          <div />

          <div className="mt-2 md:mt-0 flex justify-center md:justify-end">
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
          </div>
        </div>
      </div>
    </footer>
  );
}
