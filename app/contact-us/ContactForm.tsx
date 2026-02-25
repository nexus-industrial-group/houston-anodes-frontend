"use client";

import React, { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const data = new FormData(form);
    // TODO: replace with real API call
    console.log('Contact form submitted:', Object.fromEntries(data.entries()));
    setTimeout(() => {
      setStatus('sent');
      form.reset();
    }, 400);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input name="name" type="text" required className="mt-1 block w-full rounded-md bg-gray-50 border-gray-200 shadow-sm focus:ring-2 focus:ring-indigo-300" />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input name="email" type="email" required className="mt-1 block w-full rounded-md bg-gray-50 border-gray-200 shadow-sm focus:ring-2 focus:ring-indigo-300" />
      </div>

      <div>
        {/* phone */}
        <label className="block text-sm font-medium text-gray-700">Phone</label>
        <input name="phone" type="tel" className="mt-1 block w-full rounded-md bg-gray-50 border-gray-200 shadow-sm focus:ring-2 focus:ring-indigo-300" />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Message</label>
        <textarea name="message" rows={6} required className="mt-1 block w-full rounded-md bg-gray-50 border-gray-200 shadow-sm focus:ring-2 focus:ring-indigo-300"></textarea>
      </div>

      <div>
        <button
          type="submit"
          disabled={status === 'sending'}
          className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-b from-gray-800 via-black to-gray-900 text-white rounded-md font-semibold hover:from-gray-700 hover:to-black shadow-lg border border-black/40 disabled:opacity-60"
        >
          {status === 'sent' ? 'Sent' : 'Send Message'}
        </button>
      </div>

      {status === 'sent' && <p className="text-sm text-green-600">Message sent (demo).</p>}
    </form>
  );
}
