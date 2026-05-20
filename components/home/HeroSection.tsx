import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video src="/videos/hp.webm" autoPlay loop muted className="absolute inset-0 w-full h-full object-cover "></video>

      {/* Content */}
      <div className="z-20 flex flex-col items-center w-full px-6">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white uppercase tracking-wide text-center drop-shadow-lg">
          Protecting Global Energy Infrastructure <br /> since 1977
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-white/90 text-center drop-shadow-md">
        </p>
      </div>
    </section>
  );
}
