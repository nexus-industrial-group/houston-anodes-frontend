"use client";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[var(--primary)] text-sm text-gray-300 relative">
      {/* Borde metálico superior */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-gray-400 via-gray-100 to-gray-400"></div>
      
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h5 className="font-bold text-white mb-4">Resources</h5>
            <hr className="border-white my-2" />
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Houston Anodes Catalog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Overview of Houston Anodes</a></li>
              <li><a href="/about-us" className="hover:text-white transition-colors">About Houston Anodes</a></li>
            </ul>
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

            <div className="mt-6 pt-4 border-t border-gray-700">
              <h6 className="font-semibold text-white mb-2">Certified By:</h6>
              <p className="text-gray-300">ISO 9001 Certified</p>
            </div>
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
        
        <div className="pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2026 Houston Anodes, Inc.</p>
          <p className="mt-2 md:mt-0 font-semibold tracking-wider text-gray-400">Houston Anodes</p>
        </div>
      </div>
    </footer>
  );
}
