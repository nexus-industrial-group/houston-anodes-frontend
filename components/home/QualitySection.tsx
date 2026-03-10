import Link from "next/link";
import Image from "next/image";

export default function QualitySection() {
  return (
    <section className="relative overflow-hidden bg-white">

      {/* Anode image — rotated 45° CCW, pinned to top-right corner */}
      <div className="pointer-events-none absolute -right-1 -top-35 w-[1220px] origin-top-right rotate-[-35deg]">
        <Image
          src="/images/homepage/a3.webp"
          alt="Houston Anode"
          width={0}
          height={0}
          sizes="620px"
          className="h-auto w-full"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-lg py-20 lg:py-28">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-blue">
              How We Work
            </p>
            <h2 className="mt-4 text-3xl font-extrabold uppercase leading-tight tracking-tight text-black sm:text-4xl">
              Not a Commodity Supplier.
              <br />A Structural Partner.
            </h2>

            <div className="mt-6 space-y-4 text-sm leading-relaxed text-gray">
              <p>
                We&apos;re not a commodity supplier. We&apos;re a structural partner in
                your asset&apos;s long-term integrity.
              </p>
              <p>
                When you specify Houston Anodes, you&apos;re not just buying a
                product. You&apos;re buying certainty that your cathodic protection
                system works exactly as your engineers designed it.
              </p>
              <p>
                For energy companies, wind farm operators, and EPC contractors
                managing assets worth hundreds of millions — that certainty has
                a price. And it&apos;s worth every penny.
              </p>
            </div>

            <div className="mt-10">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 rounded-md bg-primary-blue px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-blue/90"
              >
                Ready to talk? Contact us.
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
    </section>
  );
}

