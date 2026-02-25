import Link from "next/link";

const NAV_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Anodes", href: "/anodes" },
  { label: "Services", href: "/services" },
] as const;

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo text */}
        <Link
          href="/"
          className="text-lg font-bold tracking-wide text-navy"
        >
          Houston Anodes
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-sm font-medium text-text-secondary transition-colors hover:text-navy"
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className="rounded-md bg-navy px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-navy-light"
            >
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="flex items-center justify-center rounded-md p-2 text-navy md:hidden"
          aria-label="Open navigation menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </nav>
    </header>
  );
}
