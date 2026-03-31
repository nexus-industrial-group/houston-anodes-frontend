"use client";
import React, { useState } from "react";
import DownloadForm from "../DownloadForm";

const CARDS = [
  {
    title: "Platform Anodes",
    description:
      "90°/45°/straight core configurations. Types A & B for welded jacket applications. 180–1,250 lbs.",
    tags: ["Offshore", "Structural"],
  },
  {
    title: "Bracelet Anodes",
    description:
      "10\" - 30\" diameters. Square/tapered, weld-on/bolt-on. 22–265 lbs per unit, retrofit-ready.",
    tags: ["Pipeline", "Subsea"],
  },
  {
    title: "Pier, Piling & Ballast",
    description: "Trapezoidal flush, stand-off, and rod core configurations. Ballast protection systems.",
    tags: ["Infrastructure", "Marine"],
  },
  {
    title: "Tanks & Vessels",
    description:
      "Heater treater, eyebolt, bowling ball, drum. Internal vessel protection for refining and chemical.",
    tags: ["Onshore", "Industrial"],
  },
  {
    title: "Hull Anodes",
    description: "Zinc hull protection for marine equipment. Proven 35–year service life in many applications.",
    tags: ["Defense", "Marine"],
  },
  {
    title: "Custom & Wind",
    description: "Clamp, mat, link, offshore wind turbines. Any geometry manufactured to exact specification.",
    tags: ["Wind", "Custom"],
  },
];

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-primary-blue/10 px-2 py-0.5 text-xs font-semibold text-primary-blue">
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
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-blue">
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
          {CARDS.map(({ title, description, tags }) => (
            <div
              key={title}
              className="flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
            >
              <div className="h-40 bg-slate-100 p-6 text-center text-sm text-slate-400">
                [Image]
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
            onClick={(e) => openForm(e, "Full Catalog", "07 - Catalog.pdf")}
            className="inline-flex items-center rounded-md bg-primary-blue px-6 py-3 text-sm font-semibold text-white shadow hover:bg-primary-blue/90"
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
