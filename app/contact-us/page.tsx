import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactForm from "./ContactForm";

export default function ContactUsPage() {
  return (
    <div className="min-h-screen font-sans text-gray-800 bg-white">
      <Header />

      <header className="relative flex items-center justify-center h-100 overflow-hidden">
        <img
          src="https://www.tomorrowsworldtoday.com/wp-content/uploads/2022/10/Image2-49.jpg"
          alt="Houston Anodes contact"
          className="absolute inset-0 object-cover w-full h-full object-center"
        />
        <div className="absolute inset-0 bg-black/35"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl drop-shadow-lg">
            Contact Houston Anodes
          </h1>
          <p className="mt-4 text-lg font-semibold text-white/90">
            We'd love to hear from you
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
            <div className="bg-gray-50 p-8 rounded-xl ">
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
            </div>

            <div >
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

      <Footer />
    </div>
  );
}
