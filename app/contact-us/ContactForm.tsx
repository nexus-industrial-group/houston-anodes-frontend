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
          <label className="block text-sm font-medium text-black">
            Name
          </label>
          <input
            name="name"
            type="text"
            required
            className="w-full mb-3 p-2 border rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-black">
            Email
          </label>
          <input
            name="email"
            type="email"
            required
            className="w-full mb-3 p-2 border rounded"
          />
        </div>
      </div>

      {/* New technical / project fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-black">
            Project Classification
          </label>
          <select
            name="projectClassification"
            className="w-full mb-3 p-2 border rounded"
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
          <label className="block text-sm font-medium text-black">
            Operating Environment
          </label>
          <select
            name="operatingEnvironment"
            className="w-full mb-3 p-2 border rounded"
          >
            <option>Seawater</option>
            <option>Seabed Mud</option>
            <option>Freshwater</option>
            <option>High Resistivity Soil</option>
            <option>Produced Water</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-black">
            Anode Alloy Requirement
          </label>
          <select
            name="anodeAlloy"
            className="w-full mb-3 p-2 border rounded"
          >
            <option>Aluminum</option>
            <option>Zinc</option>
            <option>Custom Composition</option>
            <option>TBD</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-black">
            Quantity Estimate
          </label>
          <div className="mt-1 flex gap-2">
            <input
              name="quantityEstimate"
              type="number"
              min={0}
              className="w-2/3 p-2 border rounded"
              placeholder="Units or Tons"
            />
            <select
              name="quantityUnits"
              className="w-1/3 p-2 border rounded"
            >
              <option>Units</option>
              <option>Tons</option>
            </select>
          </div>
        </div>

        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-black">
              Delivery Timeline
            </label>
            <div className="mt-1">
              <input
                name="requiredDeliveryDate"
                type="date"
                className="w-full p-2 border rounded"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-black">
              Specification Details (drawings / CAD)
            </label>
            <input
              name="specFiles"
              type="file"
              multiple
              accept=".pdf,.zip,.dwg,.dxf,.step,.stp,.iges"
              className="w-full mb-3 p-2 text-sm text-gray-700 border rounded"
            />
            <p className="text-xs text-gray-500 mt-1">
              Attach design drawings, CAD files or archives.
            </p>
          </div>
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-black">
            Technical Questions or Special Requirements
          </label>
          <textarea
            name="technicalQuestions"
            rows={4}
            className="w-full mb-3 p-2 border rounded"
            placeholder="Any custom modifications, performance or integration requirements"
          ></textarea>
        </div>
      </div>

      <div>
        <button
          type="submit"
          disabled={status === "sending"}
          className="bg-navy text-white px-4 py-2 rounded font-semibold disabled:opacity-60"
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
