import React from 'react';
import { Settings, Map, Search, Gauge } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function ServicesPage() {
  return (
    <div className="min-h-screen font-sans text-gray-800 bg-white">
      <Header />

      {/* Sección Hero */}
      <header className="relative flex items-center justify-center h-screen overflow-hidden">
        {/* Imagen de fondo (Placeholder aproximado a turbinas eólicas/trabajador) */}
        <img 
          src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Ingeniero en parque eólico" 
          className="absolute inset-0 object-cover w-full h-full object-center"
        />
        {/* Superposición oscura sutil */}
        <div className="absolute inset-0 bg-black/30"></div>
        
        <div className="relative z-10 max-w-4xl px-4 mx-auto text-center mt-12">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl drop-shadow-lg">
            PRECISION ENGINEERING.<br className="hidden md:block" /> CERTIFIED PROTECTION.
          </h1>
          {/* Divider 80% width and subtitle */}
          <div className="mt-3 flex justify-center">
            <div className="h-0.5 bg-white w-4/5 rounded-full opacity-90" aria-hidden="true"></div>
          </div>
          <p className="mt-4 font-bold tracking-tight text-3xl text-white">MEET OUR SERVICES</p>
        </div>
      </header>

      {/* Competencias Principales */}
      <section className="py-20 px-6 md:px-12 bg-white text-center">
        <h2 className="text-2xl font-bold tracking-widest text-gray-900 uppercase mb-12">
          Core Competencies
        </h2>
        
        <div className="grid grid-cols-1 gap-6 max-w-6xl mx-auto md:grid-cols-2 lg:grid-cols-4">
          {/* Tarjeta 1 */}
          <div className="flex flex-col items-center p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
            <Settings size={48} strokeWidth={1.5} className="mb-6 text-gray-700" />
            <h3 className="mb-3 text-lg font-semibold leading-tight text-gray-900">
              Cathodic Protection Design & Engineering
            </h3>
            <p className="text-sm text-gray-600">
              Customized solutions for optimal asset longevity.
            </p>
          </div>

          {/* Tarjeta 2 */}
          <div className="flex flex-col items-center p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
            <Map size={48} strokeWidth={1.5} className="mb-6 text-gray-700" />
            <h3 className="mb-3 text-lg font-semibold leading-tight text-gray-900">
              Cathodic Protection CP-1 to CP-4
            </h3>
            <p className="text-sm text-gray-600">
              NACE certified specialists for all levels.
            </p>
          </div>

          {/* Tarjeta 3 */}
          <div className="flex flex-col items-center p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
            <Search size={48} strokeWidth={1.5} className="mb-6 text-gray-700" />
            <h3 className="mb-3 text-lg font-semibold leading-tight text-gray-900">
              NACE Coating Inspector Level 1 & 2
            </h3>
            <p className="text-sm text-gray-600">
              Expert inspection and quality assurance.
            </p>
          </div>

          {/* Tarjeta 4 */}
          <div className="flex flex-col items-center p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
            <Gauge size={48} strokeWidth={1.5} className="mb-6 text-gray-700" />
            <h3 className="mb-3 text-lg font-semibold leading-tight text-gray-900">
              Specialist CP-4 Services
            </h3>
            <p className="text-sm text-gray-600">
              Advanced problem-solving and consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Laboratorios Móviles */}
      <section className="py-20 px-6 bg-gray-100 overflow-hidden relative">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-2xl font-bold tracking-widest text-gray-900 uppercase">
            Coating Inspection Services
          </h2>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 relative">
          
          {/* Textos Izquierda (Desktop) */}
          <div className="flex flex-col gap-12 text-left lg:text-right lg:w-1/4 z-10 order-2 lg:order-1">
            <div>
              <h4 className="font-bold text-gray-900 mb-1 flex items-center lg:justify-end gap-2">
                Certified Inspection
              </h4>
              <p className="text-sm text-gray-600">Professional coating evaluation and quality control.</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1 flex items-center lg:justify-end gap-2">
                Asset Protection
              </h4>
              <p className="text-sm text-gray-600">Protection for pipelines, tanks, marine, and industrial facilities.</p>
            </div>
          </div>

          {/* Imagen Central */}
          <div className="w-full lg:w-2/4 flex justify-center order-1 lg:order-2">
             <img 
                src="https://images.unsplash.com/photo-1516733968668-dbdce39c4651?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Vehículos de laboratorio móvil" 
                className="max-w-full h-auto drop-shadow-2xl rounded-lg object-cover"
                style={{ mixBlendMode: 'multiply' }}
             />
          </div>

          {/* Textos Derecha (Desktop) */}
          <div className="flex flex-col gap-12 text-left lg:w-1/4 z-10 order-3">
             <div>
              <h4 className="font-bold text-gray-900 mb-1 flex items-center gap-2">
                Advanced Field Technology
              </h4>
              <p className="text-sm text-gray-600">Mobile labs with modern testing equipment.</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1 flex items-center gap-2">
                NACE-certified Experts
              </h4>
              <p className="text-sm text-gray-600">Qualified corrosion control specialists.</p>
            </div>
          </div>
        </div>
      </section>

      {/* El Compromiso */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-xl font-bold tracking-widest text-gray-500 uppercase mb-16">
            The Houston Commitment
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 uppercase">
            
            {/* Cuadrante Superior Izquierdo */}
            <div className="pb-12 border-b-2 border-gray-200 md:border-r-2 md:pr-8 flex items-center justify-center md:justify-end text-center md:text-right">
              RIGHT CHEMICAL<br/> COMPOSITION
            </div>
            
            {/* Cuadrante Superior Derecho */}
            <div className="py-12 md:py-0 md:pb-12 border-b-2 border-gray-200 md:pl-8 flex items-center justify-center md:justify-start text-center md:text-left">
              ELECTROCHEMICAL<br/> PROPERTIES
            </div>
            
            {/* Cuadrante Inferior Izquierdo */}
            <div className="py-12 md:pt-12 md:pb-0 md:border-r-2 border-gray-200 md:pr-8 flex items-center justify-center md:justify-end text-center md:text-right">
              RIGHT WEIGHT
            </div>
            
            {/* Cuadrante Inferior Derecho */}
            <div className="pt-12 md:pl-8 flex items-center justify-center md:justify-start text-center md:text-left border-t-2 md:border-t-0 border-gray-200 md:border-none">
              RIGHT FIT
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
