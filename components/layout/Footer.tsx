import Link from "next/link";

const FOOTER_COLUMNS = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about-us" },
      { label: "Services", href: "/services" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "Anodes", href: "/anodes" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact Us", href: "/contact-us" },
    ],
  },
] as const;

export default function Footer() {
  return (
    <>
      {/* Metallic divider */}
      <div className="h-3 bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 shadow-inner" />

      <footer className="bg-navy">
        <div className="mx-auto max-w-5xl px-16 pb-14 pt-20 lg:px-24">
          {/* Footer Columns */}
          <div className="grid grid-cols-3 justify-items-center gap-16 text-center">
            {FOOTER_COLUMNS.map(({ title, links }) => (
              <div key={title}>
                <h3 className="text-base font-bold uppercase tracking-wider text-white">
                  {title}
                </h3>
                <ul className="mt-6 space-y-4">
                  {links.map(({ label, href }) => (
                    <li key={label}>
                      <Link
                        href={href}
                        className="text-base text-text-on-dark/60 transition-colors hover:text-electric-blue"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 border-t border-white/10 pt-8 text-center">
            <p className="text-sm text-text-muted">
              &copy; 2021-{new Date().getFullYear()} Houston Anodes, Inc. &mdash; Houston Anodes
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
