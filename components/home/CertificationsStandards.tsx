'use client';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const APPROVED_SUPPLIERS = [
  { certification: "BP Approved Supplier", type: "Client Vendor Approval", issuedBy: "BP" },
  { certification: "Bruker-Quantron Magellan Q8", type: "Instrument Calibration Certificate +2", issuedBy: "Bruker Elementar GmbH (Germany) +1" },
  { certification: "DNV RP B401", type: "Technical Standard", issuedBy: "Det Norske Veritas" },
  { certification: "DNV Type Approved Product", type: "Product Type Approval", issuedBy: "DNV" },
  { certification: "FMC/TechnipFMC Approved Global Supplier", type: "Client Vendor Approval", issuedBy: "FMC Technologies / TechnipFMC" },
  { certification: "HSE Management System", type: "Internal Policy Compliance", issuedBy: "Self-declared / audited by clients" },
  { certification: "IQNet Certificate", type: "Quality Management Certification", issuedBy: "IQNet / DGS GmbH (Germany)" },
  { certification: "ISO 15589-2:2012", type: "Technical Standard", issuedBy: "ISO" },
  { certification: "ISO 17025 (ILAC-MRA)", type: "Laboratory Accreditation +1", issuedBy: "A2LA (American Association for Laboratory Accreditation) +1" },
  { certification: "ISO 9001:2008", type: "Quality Management Certification", issuedBy: "DNV-GL (prior)" },
  { certification: "ISO 9001:2015", type: "Quality Management Certification", issuedBy: "DNV (Det Norske Veritas)" },
  { certification: "NACE SP-0387", type: "Technical Standard +2", issuedBy: "NACE International" },
  { certification: "NACE SP-0492", type: "Technical Standard +2", issuedBy: "NACE International" },
  { certification: "NACE TM-0190", type: "Testing Protocol Standard +1", issuedBy: "NACE International" },
  { certification: "NORSOK M-503", type: "Technical Standard +1", issuedBy: "Norwegian Oil & Gas Association +1" },
  { certification: "PEMEX Preferred Supplier", type: "Client Vendor Approval +1", issuedBy: "PEMEX (Petróleos Mexicanos)" },
  { certification: "Ørsted Approved Supplier", type: "Client Vendor Approval +1", issuedBy: "Ørsted (via Smulders Group audit) +1" },
  { certification: "U.S. Navy Approved Supplier", type: "Government / Defense Approval", issuedBy: "United States Navy" },
] as const;

const CERT_ROW_1 = [
  { certification: "BP Approved Supplier", glow: false },
  { certification: "Bruker-Quantron Magellan Q8", glow: true, glowDelay: "1.5s" },
  { certification: "DNV RP B401", glow: false },
  { certification: "DNV Type Approved Product", glow: false },
  { certification: "FMC/TechnipFMC Approved Global Supplier", glow: true, glowDelay: "5.0s" },
  { certification: "HSE Management System", glow: false },
];
const CERT_ROW_2 = [
  { certification: "IQNet Certificate", glow: false },
  { certification: "ISO 15589-2:2012", glow: true, glowDelay: "2.0s" },
  { certification: "ISO 17025 (ILAC-MRA)", glow: false },
  { certification: "ISO 9001:2008", glow: false },
  { certification: "ISO 9001:2015", glow: true, glowDelay: "6.0s" },
  { certification: "NACE SP-0387", glow: false },
];
const CERT_ROW_3 = [
  { certification: "NACE SP-0492", glow: false },
  { certification: "NACE TM-0190", glow: true, glowDelay: "0.8s" },
  { certification: "NORSOK M-503", glow: false },
  { certification: "PEMEX Preferred Supplier", glow: false },
  { certification: "Ørsted Approved Supplier", glow: true, glowDelay: "4.0s" },
  { certification: "U.S. Navy Approved Supplier", glow: false },
];

const CERT_ROWS = [
  { items: CERT_ROW_1, duration: "22s", delay: "0s" },
  { items: CERT_ROW_2, duration: "27s", delay: "-6s" },
  { items: CERT_ROW_3, duration: "32s", delay: "-12s" },
];

const INFO_CARDS = [
  { title: "50 Years", description: "Operating History" },
  { title: "Zero Claims", description: "In service History" },
  { title: "35 Years", description: "U.S. Navy Supplier" },
  { title: "80%", description: "of PEMEX Anode Supply" },
  { title: "ISO 9001:2015", description: "Certified" },
  { title: "ISO 17025", description: "Lab Accredited" },
  { title: "Global Operations", description: "Worldwide projects & clients" },
  { title: "50 Years", description: "Operating History" },
] as const;

function StatIcon() {
  return (
    <svg
      className="h-10 w-10 text-primary-blue"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 12.5l2 2 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function CertificationsStandards() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32 ">
      {/* Background video */}
      <div className="absolute inset-0 bg-slate-50" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        {/* ── Certifications ── */}
        <div>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#006ce9]">
              Certifications & Standards
            </p>
            <h3 className="mt-3 text-3xl font-extrabold uppercase tracking-tight text-electric-blue sm:text-4xl">
              Built to the World's Highest Standards
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray">
              Certified and approved to meet the strictest industry requirements for cathodic protection, quality management, and offshore engineering.
            </p>
          </div>

          <div className="my-6">
            {/* Carousel that shows up to 4 info cards per slide */}
            <Carousel
              showThumbs={false}
              showStatus={false}
              infiniteLoop={true}
              autoPlay={true}
              interval={10000}
              transitionTime={600}
              emulateTouch={true}
              swipeable={true}
              showIndicators={true}
              showArrows={false}
              ariaLabel="Info cards carousel"
            >
              {/** Group INFO_CARDS into chunks of 4 and render each chunk as a slide */}
              {(() => {
                const chunks: (typeof INFO_CARDS[number])[][] = [];
                for (let i = 0; i < INFO_CARDS.length; i += 4) {
                  chunks.push(INFO_CARDS.slice(i, i + 4));
                }
                return chunks.map((group, gi) => (
                  <div key={gi} className="px-2 mb-12">
                    <div className="mx-auto grid grid-cols-2 gap-4 md:grid-cols-4 content-center ">
                      {group.map((c) => (
                        <div
                          key={c.title}
                          className="flex flex-col items-center gap-3 rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm"
                        >
                          <div className="mx-auto">
                            <StatIcon />
                          </div>
                          <h4 className="text-base font-extrabold text-electric-blue w-full truncate">{c.title}</h4>
                          <p className="text-sm text-text-secondary w-full truncate">{c.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ));
              })()}
            </Carousel>
          </div>

          {/* Certifications marquee rows (3 rows, scrolling left-to-right) */}
          <div className="mt-8 space-y-3 overflow-hidden">
            {CERT_ROWS.map((row, rowIndex) => (
              <div key={rowIndex} className="overflow-hidden">
                <div
                  className="flex gap-3"
                  style={{
                    width: "max-content",
                    animation: `marquee-ltr ${row.duration} linear ${row.delay} infinite`,
                  }}
                >
                  {[...row.items, ...row.items].map((item, i) => (
                    <div
                      key={`${item.certification}-${i}`}
                      className="flex shrink-0 items-center justify-center rounded-lg border border-gray-200 px-5 py-4 text-center text-sm font-medium text-gray-700 whitespace-nowrap"
                      style={item.glow ? {
                        animation: `card-glow 4s ease-in-out ${item.glowDelay} infinite`,
                      } : undefined}
                    >
                      {item.certification}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
