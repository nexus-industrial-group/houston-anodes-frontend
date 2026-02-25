"use client";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[var(--primary)] text-sm text-gray-300 relative">
      {/* Borde metálico superior */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-gray-400 via-gray-100 to-gray-400"></div>
      
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h5 className="font-bold text-white mb-4">Company</h5>
            <ul className="space-y-2">
              <li><a href="/about-us" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/services" className="hover:text-white transition-colors">Services</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-white mb-4">Products</h5>
            <ul className="space-y-2">
              <li><a href="/anodes" className="hover:text-white transition-colors">Anodes</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-white mb-4">Support</h5>
            <ul className="space-y-2">
              <li><a href="/contact-us" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-white mb-4">Resources</h5>
            <ul className="space-y-2">
              <li><a href="/services" className="hover:text-white transition-colors">Certifications</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2026 Houston Anodes, Inc.</p>
          <p className="mt-2 md:mt-0 font-semibold tracking-wider text-gray-400">Houston Anodes</p>
        </div>
      </div>
    </footer>
  );
}
