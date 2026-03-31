import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/homepage/home.jpg"
        alt="Houston Anodes background"
        fill
        priority
        className="absolute inset-0 object-cover"
      />

      {/* Dark overlay (in front of image, behind text) */}
      <div className="absolute inset-0 bg-black/60 z-10" aria-hidden="true" />


      {/* ISO Badge */}
      <div className="absolute bottom-6 right-6 z-30">
        <Image
          src="/images/homepage/iso.webp"
          alt="ISO Certification"
          width={200}
          height={200}
          className="object-contain"
        />
      </div>

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
