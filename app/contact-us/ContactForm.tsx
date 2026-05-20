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
