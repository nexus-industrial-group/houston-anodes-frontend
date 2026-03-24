"use client";
import React from "react";

type Props = {
  onClose: () => void;
  title?: string;
  fileName?: string;
};

export default function DownloadForm({ onClose, title = "Download Form", fileName }: Props) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md relative">
        <div className="rounded-t-lg px-6 py-3 bg-navy">
          <h3
            className="text-md font-semibold text-white"
            
          >
            {title}
          </h3>
        </div>

        <button
          onClick={onClose}
          aria-label="Close download form"
          className="absolute top-3 right-3 text-gray-500 hover:text-white cursor-pointer"
        >
          ✕
        </button>

        <div className="p-6 text-[var(--color-primary-blue)]">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const target = fileName ? `/downloadables/${fileName}` : undefined;
              alert(`Thank you — the download for ${title ?? "this document"} will start shortly.`);
              if (target && typeof window !== "undefined") {
                window.open(target, "_blank", "noopener,noreferrer");
              }
              onClose();
            }}
          >
            <div className="flex gap-2">
              <div className="w-1/2">
                <label className="block text-sm mb-2" htmlFor="firstName">First name</label>
                <input id="firstName" name="firstName" type="text" placeholder="First name" className="w-full mb-3 p-2 border rounded" required />
              </div>
              <div className="w-1/2">
                <label className="block text-sm mb-2" htmlFor="lastName">Last name</label>
                <input id="lastName" name="lastName" type="text" placeholder="Last name" className="w-full mb-3 p-2 border rounded" required />
              </div>
            </div>

            <label className="block text-sm mb-2" htmlFor="email">Email</label>
            <input id="email" name="email" type="email" placeholder="name@example.com" className="w-full mb-3 p-2 border rounded" required />

            <label className="block text-sm mb-2" htmlFor="phone">Phone</label>
            <input id="phone" name="phone" type="tel" placeholder="e.g. +1 555 555 5555" className="w-full mb-3 p-2 border rounded" required />

            <label className="block text-sm mb-2" htmlFor="country">Country</label>
            <select id="country" name="country" defaultValue="" className="w-full mb-4 p-2 border rounded" required>
              <option value="" disabled>Select your country</option>
              <option>United States</option>
              <option>Spain</option>
              <option>Mexico</option>
              <option>Other</option>
            </select>

            <div className="flex justify-end">
              <button type="submit" className="bg-navy text-white px-4 py-2 rounded">
                Download
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
