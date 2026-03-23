import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src="/videos/main.webm"
          type="video/webm"
        />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* ISO Badge */}
      <div className="absolute bottom-6 right-6 z-20">
        <Image
          src="/images/homepage/iso.webp"
          alt="ISO Certification"
          width={200}
          height={200}
          className="object-contain"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase tracking-wide text-center drop-shadow-lg">
          Protecting Global Energy Infrastructure since 1977
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-white/90 text-center drop-shadow-md">
        </p>
      </div>
    </section>
  );
}
