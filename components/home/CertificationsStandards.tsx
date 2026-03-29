import Image from "next/image";

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

export default function CertificationsStandards() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32 ">
      {/* Background video */}
      <div className="absolute inset-0 bg-slate-50" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        {/* ── Certifications ── */}
        <div>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-electric-blue">
              Certifications & Standards
            </p>
            <h3 className="mt-3 text-3xl font-extrabold uppercase tracking-tight text-electric-blue sm:text-4xl">
              Built to the World's Highest Standards
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray">
              Certified and approved to meet the strictest industry requirements for cathodic protection, quality management, and offshore engineering.
            </p>
          </div>

          {/* ISO Certification image */}
          <div className="mt-12 flex justify-center">
            <Image
              src="/images/homepage/iso3.png"
              alt="ISO Certifications"
              width={200}
              height={200}
              className="object-contain filter "
            />
          </div>

          {/* Certifications table */}
          <div className="mt-8 overflow-x-auto">
            <div className="max-h-48 overflow-y-auto">
              <table className="w-full table-auto border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-3 text-center text-xs font-bold uppercase tracking-widest text-electric-blue sticky top-0 z-10 bg-gray-100">Ceritifcation</th>
                    <th className="px-4 py-3 text-center text-xs font-bold uppercase tracking-widest text-electric-blue sticky top-0 z-10 bg-gray-100">Type</th>
                    <th className="px-4 py-3 text-center text-xs font-bold uppercase tracking-widest text-electric-blue sticky top-0 z-10 bg-gray-100">Issued by</th>
                  </tr>
                </thead>
                <tbody>
                  {APPROVED_SUPPLIERS.map((s) => (
                    <tr key={s.certification} className="border-t border-gray-200">
                      <td className="px-4 py-3 text-sm text-navy text-center">{s.certification}</td>
                      <td className="px-4 py-3 text-sm text-navy text-center">{s.type}</td>
                      <td className="px-4 py-3 text-sm text-navy text-center">{s.issuedBy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
