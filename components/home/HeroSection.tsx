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
      <div className="z-20 flex flex-col items-center w-full px-6">
        <h1 className="text-2xl font-extrabold uppercase leading-tight tracking-tight text-white text-center drop-shadow-lg sm:text-3xl md:text-4xl lg:text-5xl">
          Protecting Global Energy Infrastructure <br /> since 1977
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-white/90 text-center drop-shadow-md">
        </p>
      </div>
    </section>
  );
}
