import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden">
      {/* Image Background */}
      <Image
        src="/images/homepage/HA-HOME.webp"
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-black/50" />

      {/* Content */}
      <div className="z-20 w-full max-w-4xl px-6 mx-auto text-center">
        <h1 className="text-2xl font-extrabold uppercase leading-tight tracking-tight text-white drop-shadow-lg sm:text-3xl md:text-4xl lg:text-5xl">
          Protecting Global Energy Infrastructure
        </h1>
        <div className="mt-3 flex justify-center">
          <div
            className="h-0.5 bg-white w-4/5 rounded-full opacity-90"
            aria-hidden="true"
          ></div>
        </div>
        <p className="mt-4 font-bold uppercase tracking-tight text-xl md:text-2xl text-white/90 drop-shadow-md">
          since 1977
        </p>
      </div>
    </section>
  );
}
