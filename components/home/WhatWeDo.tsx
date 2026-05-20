"use client";
import React, { useState } from "react";
import Image from "next/image";
import DownloadForm from "../DownloadForm";
import { downloadFile } from "../../utils/downloadFile";

const CARDS = [
  {
    title: "Platform Anodes",
    description:
      "90° / 45° / straight core configurations for offshore jackets and structures. Types A & B available for welded installations. Typical weights from 5–1,650 lbs.",
    tags: ["Offshore", "Structural", "Jacket"],
    url: "/products/platform.webp",
  },
  {
    title: "Bracelet Anodes",
    description:
      "Pipeline bracelet anodes for subsea corrosion protection. Available in 10\"–30\" diameters with square or tapered designs. Weld-on and bolt-on options.",
    tags: ["Pipeline", "Subsea", "Offshore"],
    url: "/products/pipeline.webp",
  },
  {
    title: "Trapezoidal Anodes",
    description:
      "Trapezoidal flush or stand-off anodes used for piers, pilings, and marine ballast systems. Designed for long-term structural corrosion protection.",
    tags: ["Infrastructure", "Marine", "Piling"],
    url: "/products/trapezoidal.webp",
  },
  {
    title: "Bowling Ball Anodes",
    description:
      "Compact spherical anodes used inside tanks and vessels. Designed for internal corrosion protection in refining, chemical, and storage systems.",
    tags: ["Tank", "Internal Protection", "Industrial"],
    url: "/products/ball.webp",
  },
  {
    title: "Drum Anodes",
    description:
      "Drum-style sacrificial anodes for large vessels and storage tanks. Provides consistent current distribution for internal corrosion protection.",
    tags: ["Tank", "Vessel", "Industrial"],
    url: "/products/drum.webp",
  },
  {
    title: "Heater Treater Anodes",
    description:
      "Specialized anodes engineered for heater treaters in oil and gas production. Protects internal steel surfaces from corrosion in harsh environments.",
    tags: ["Oil & Gas", "Production", "Internal Protection"],
    url: "/products/heater.webp",
  },
];
function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-primary-blue/10 px-2 py-0.5 text-xs font-semibold text-[#1d65dc]">
      {children}
    </span>
  );
}

export default function WhatWeDo() {
  const [showDownloadForm, setShowDownloadForm] = useState(false);
  const [downloadTitle, setDownloadTitle] = useState<string | undefined>(undefined);
  const [downloadFileName, setDownloadFileName] = useState<string | undefined>(undefined);

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
    <section className="py-16 lg:py-20">
      {showDownloadForm && (
        <DownloadForm
          onClose={closeForm}
          title={downloadTitle ? `${downloadTitle} Download Form` : undefined}
          fileName={downloadFileName}
        />
      )}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#006ce9]">
            Product Portfolio
          </p>
          <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-electric-blue sm:text-5xl">
            Product Portfolio
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-text-secondary">
            Aluminum alloy anodes from 5 lbs to custom configurations. We also
            manufacture our own molds for complete production control.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {CARDS.map(({ title, description, tags, url }) => (
            <div
              key={title}
              className="flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
            >
              <div className="bg-white p-6 text-center text-sm text-slate-400">
                <div className="relative aspect-[4/3] w-full">
                  <Image src={url} alt={title} fill style={{ objectFit: "contain" }} />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-base font-extrabold text-gray-900">{title}</h3>
                <p className="mt-2 text-sm text-text-secondary">{description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={(e) => downloadFile(e, "Full Catalog", "07 - Catalog.pdf")}
            className="inline-flex items-center rounded-md bg-[#1963DF] px-6 py-3 text-sm font-semibold text-white shadow hover:bg-primary-blue/90 cursor-pointer"
          >
            <span>Download Full Catalog</span>
            <svg
              className="ml-3 h-5 w-5 flex-none"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
