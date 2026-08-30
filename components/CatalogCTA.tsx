"use client";
import React from "react";
import Image from "next/image";
import { downloadFile } from "@/utils/downloadFile";

export default function CatalogCTA() {
  return (
    <>
      <div className="flex gap-3 shrink-0 items-center">
        <button
          onClick={(e) => downloadFile(e, "Catalog", "00 - Catalog.pdf")}
          className="inline-flex items-center gap-2 rounded-lg bg-primary-blue px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-primary-blue/90 transition-colors cursor-pointer"
        >
          Download Catalog
        </button>

        <Image
          src="/images/made-in.png"
          alt="Made in"
          width={160}
          height={56}
          className="h-14 w-auto object-contain"
        />

        <a
          href="/contact-us"
          className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
        >
          CONTACT US
        </a>
      </div>
    </>
  );
}
