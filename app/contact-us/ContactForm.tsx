"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    // TODO: replace with real API call
    console.log("Contact form submitted:", Object.fromEntries(data.entries()));
    setTimeout(() => {
      setStatus("sent");
      form.reset();
    }, 400);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            name="name"
            type="text"
            required
            className="mt-1 block w-full rounded-md bg-gray-50 border-gray-200 shadow-sm focus:ring-2 focus:ring-indigo-300"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            name="email"
            type="email"
            required
            className="mt-1 block w-full rounded-md bg-gray-50 border-gray-200 shadow-sm focus:ring-2 focus:ring-indigo-300"
          />
        </div>
      </div>

      {/* New technical / project fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Project Classification
          </label>
          <select
            name="projectClassification"
            className="mt-1 block w-full rounded-md bg-gray-50 border-gray-200 shadow-sm focus:ring-2 focus:ring-indigo-300"
          >
            <option>Offshore Platform</option>
            <option>Subsea Pipeline</option>
            <option>Offshore Wind</option>
            <option>Marine Vessel</option>
            <option>Storage Tank</option>
            <option>Onshore Pipeline</option>
            <option>Defense</option>
            <option>Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Operating Environment
          </label>
          <select
            name="operatingEnvironment"
            className="mt-1 block w-full rounded-md bg-gray-50 border-gray-200 shadow-sm focus:ring-2 focus:ring-indigo-300"
          >
            <option>Seawater</option>
            <option>Seabed Mud</option>
            <option>Freshwater</option>
            <option>High Resistivity Soil</option>
            <option>Produced Water</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Anode Alloy Requirement
          </label>
          <select
            name="anodeAlloy"
            className="mt-1 block w-full rounded-md bg-gray-50 border-gray-200 shadow-sm focus:ring-2 focus:ring-indigo-300"
          >
            <option>Aluminum</option>
            <option>Zinc</option>
            <option>Magnesium</option>
            <option>Custom Composition</option>
            <option>TBD</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Quantity Estimate
          </label>
          <div className="mt-1 flex gap-2">
            <input
              name="quantityEstimate"
              type="number"
              min={0}
              className="block w-2/3 rounded-md bg-gray-50 border-gray-200 shadow-sm focus:ring-2 focus:ring-indigo-300"
              placeholder="Units or Tons"
            />
            <select
              name="quantityUnits"
              className="w-1/3 rounded-md bg-gray-50 border-gray-200 shadow-sm focus:ring-2 focus:ring-indigo-300"
            >
              <option>Units</option>
              <option>Tons</option>
            </select>
          </div>
        </div>

        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Delivery Timeline
            </label>
            <div className="mt-1">
              <input
                name="requiredDeliveryDate"
                type="date"
                className="block w-full rounded-md bg-gray-50 border-gray-200 shadow-sm focus:ring-2 focus:ring-indigo-300"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Specification Details (drawings / CAD)
            </label>
            <input
              name="specFiles"
              type="file"
              multiple
              accept=".pdf,.zip,.dwg,.dxf,.step,.stp,.iges"
              className="mt-1 block w-full text-sm text-gray-700"
            />
            <p className="text-xs text-gray-500 mt-1">
              Attach design drawings, CAD files or archives.
            </p>
          </div>
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">
            Technical Questions or Special Requirements
          </label>
          <textarea
            name="technicalQuestions"
            rows={4}
            className="mt-1 block w-full rounded-md bg-gray-50 border-gray-200 shadow-sm focus:ring-2 focus:ring-indigo-300"
            placeholder="Any custom modifications, performance or integration requirements"
          ></textarea>
        </div>
      </div>

      <div>
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-b from-gray-800 via-black to-gray-900 text-white rounded-md font-semibold hover:from-gray-700 hover:to-black shadow-lg border border-black/40 disabled:opacity-60"
        >
          {status === "sent" ? "Sent" : "Send Message"}
        </button>
      </div>

      {status === "sent" && (
        <p className="text-sm text-green-600">Message sent (demo).</p>
      )}
    </form>
  );
}
