import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import Header from "../../components/Header";
import ContactForm from "./ContactForm";
import { Linkedin, Facebook, Instagram } from "lucide-react";

export default function ContactUsPage() {
  return (
    <div className="min-h-screen font-sans text-gray-800 bg-white">
      <Header />

      <header className="relative flex items-center justify-center min-h-screen overflow-hidden">
        <img
          src="images/contact-us/contact-us.webp"
          alt="Houston Anodes contact"
          className="absolute inset-0 object-cover w-full h-full object-center"
        />
        <div className="absolute inset-0 bg-black/35"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl drop-shadow-lg">
            TECHNICAL CONSULTATION <br />& QUOTATION
          </h1>
          <p className="mt-4 text-lg font-semibold text-white/90 w-3/4 mx-auto">
            Ready to specify Houston Anodes for your project?
          </p>
        </div>
      </header>

      <main className="py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-white  rounded-xl ">
            <ContactForm />
          </div>

          {/* Contact Info */}
          <aside className="">
            <div className="bg-gray-50 p-4 rounded-xl ">
              <h3 className="text-xl font-bold mb-6">Contact Info</h3>

              <div className="flex items-start gap-3 mb-4">
                <MapPin className="text-gray-700" />
                <div>
                  <div className="font-semibold">
                    Houston Anodes Foundry | Houston, TX. USA
                  </div>
                  <address className="not-italic text-sm text-gray-600">
                    6425 Cunningham Road,
                    <br />
                    Houston, TX 77041-4713
                  </address>
                </div>
              </div>

              <div className="flex items-center gap-3 mb-2">
                <Phone className="text-gray-700" />
                <div className="text-sm">Tel: +1 832.243.0700</div>
              </div>

              <div className="flex items-center gap-3 mb-2">
                <Phone className="text-gray-700" />
                <div className="text-sm">Fax: +1 832.243.0701</div>
              </div>

              <div className="flex items-center gap-3 mt-4">
                <Mail className="text-gray-700" />
                <div className="text-sm">
                  Email:{" "}
                  <a
                    href="mailto:anodes@houstonanodes.com"
                    className="text-indigo-700"
                  >
                    anodes@houstonanodes.com
                  </a>
                </div>
              </div>
              <div className="mt-4 flex space-x-4">
                <a
                  href="https://www.linkedin.com/company/houston-anodes/"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-700 hover:text-black transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://www.facebook.com/HoustonAnodes"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-700 hover:text-black transition-colors"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://www.instagram.com/houston_anodes"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-700 hover:text-black transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://x.com/HoustonAnodes"
                  aria-label="X"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-700 hover:text-black transition-colors"
                >
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <title>X</title>
                    <path d="M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              {/* Embedded Google Map */}
              <div className="mt-6">
                <div className="w-full h-64 rounded-lg overflow-hidden shadow">
                  <iframe
                    title="Houston Anodes Location"
                    width="100%"
                    height="100%"
                    className="border-0"
                    loading="lazy"
                    src="https://www.google.com/maps?q=6425%20Cunningham%20Road%20Houston%20TX%2077041-4713&output=embed"
                  ></iframe>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

export const metadata = {
  title: 'Contact Us',
};
