export default function HeroSection() {
  return (
    <section className="flex h-screen w-full items-center justify-center bg-gray-200">
      <div className="flex flex-col items-center justify-center w-full">
        <div className="w-full max-w-4xl h-64 bg-gray-300 rounded-lg flex items-center justify-center mb-8 border-2 border-gray-400">
          <span className="text-gray-400 text-xl font-semibold">Image Placeholder</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-700 uppercase tracking-wide text-center">Houston Anodes Website</h1>
      </div>
    </section>
  );
}
