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
          src="https://videos.pexels.com/video-files/4686755/4686755-uhd_2560_1440_24fps.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase tracking-wide text-center drop-shadow-lg">
          Houston Anodes Website
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-white/90 text-center drop-shadow-md">
          Homepage
        </p>
      </div>
    </section>
  );
}
