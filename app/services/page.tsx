import React from 'react';
import { Settings, Map, Search, Gauge } from 'lucide-react';
import Header from '../../components/Header';

export default function ServicesPage() {
  return (
    <div className="min-h-screen font-sans text-gray-800 bg-white">
      <Header />

      {/* Sección Hero */}
      <header className="relative flex items-center justify-center h-screen overflow-hidden">
        {/* Video de fondo */}
        <video
          className="absolute inset-0 object-cover w-full h-full object-center"
          src="/videos/services_video.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        >
          <source src="/videos/services_video.mp4" type="video/mp4" />
          Tu navegador no soporta la etiqueta de video.
        </video>
        {/* Superposición oscura sutil */}
        <div className="absolute inset-0 bg-black/30"></div>
        
        <div className="relative z-10 max-w-4xl px-4 mx-auto text-center mt-12">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl drop-shadow-lg">
            SERVICES, QUALITY <br className="hidden md:block" />& FOOTPRINT.
          </h1>
          {/* Divider 80% width and subtitle */}
          <div className="mt-3 flex justify-center">
            <div className="h-0.5 bg-white w-4/5 rounded-full opacity-90" aria-hidden="true"></div>
          </div>
          <p className="mt-4 font-bold tracking-tight text-3xl text-white">ENGINEERING & CONSULTING SERVICES</p>
        </div>
      </header>

      {/* Competencias Principales */}
      <section className="py-20 px-6 md:px-12 bg-white text-center">
        <h2 className="text-2xl font-bold tracking-widest text-gray-900 uppercase mb-12">
          Certified Coating Inspection & Supervision
        </h2>
        
        <div className="grid grid-cols-1 gap-6 max-w-6xl mx-auto md:grid-cols-2 lg:grid-cols-4">
          {/* Tarjeta 1 */}
          <div className="flex flex-col items-center p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
            <Settings size={48} strokeWidth={1.5} className="mb-6 text-gray-700" />
            <h3 className="mb-3 text-lg font-semibold leading-tight text-gray-900">
              Coating Design Review
            </h3>
            <p className="text-sm text-gray-600">
              Optimized specification and material selection.
            </p>
          </div>

          {/* Tarjeta 2 */}
          <div className="flex flex-col items-center p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
            <Map size={48} strokeWidth={1.5} className="mb-6 text-gray-700" />
            <h3 className="mb-3 text-lg font-semibold leading-tight text-gray-900">
              Surface Preparation Supervision
            </h3>
            <p className="text-sm text-gray-600">
              Surface preparation quality oversight.
            </p>
          </div>

          {/* Tarjeta 3 */}
          <div className="flex flex-col items-center p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
            <Search size={48} strokeWidth={1.5} className="mb-6 text-gray-700" />
            <h3 className="mb-3 text-lg font-semibold leading-tight text-gray-900">
              Coating Application Supervision
            </h3>
            <p className="text-sm text-gray-600">
              Application parameter inspection control.
            </p>
          </div>

          {/* Tarjeta 4 */}
          <div className="flex flex-col items-center p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
            <Gauge size={48} strokeWidth={1.5} className="mb-6 text-gray-700" />
            <h3 className="mb-3 text-lg font-semibold leading-tight text-gray-900">
              Post-Application Verification
            </h3>
            <p className="text-sm text-gray-600">
              Final inspection and compliance testing.
            </p>
          </div>
        </div>
      </section>

      {/* Laboratorios Móviles */}
      <section className="py-20 px-6 bg-gray-100 overflow-hidden relative">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-2xl font-bold tracking-widest text-gray-900 uppercase">
            Cathodic Protection System Diagnostics
          </h2>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 relative">
          
          {/* Textos Izquierda (Desktop) */}
          <div className="flex flex-col gap-12 text-left lg:text-right lg:w-1/4 z-10 order-2 lg:order-1">
            <div>
              <h4 className="font-bold text-gray-900 mb-1 flex items-center lg:justify-end gap-2">
                CIS-DCVG Inspection
              </h4>
              <p className="text-sm text-gray-600">Protection coverage and anode performance mapping.</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1 flex items-center lg:justify-end gap-2">
                CP Interference Diagnostics
              </h4>
              <p className="text-sm text-gray-600">Detection and mitigation of electrical interference.</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1 flex items-center lg:justify-end gap-2">
                ECDA Assessment
              </h4>
              <p className="text-sm text-gray-600">External corrosion risk assessment per NACE.</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1 flex items-center lg:justify-end gap-2">
                PCM Current Mapping
              </h4>
              <p className="text-sm text-gray-600">Current distribution verification across protected areas.</p>
            </div>
          </div>

          {/* Imagen Central */}
           <div className="w-full lg:w-2/4 flex justify-center order-1 lg:order-2">
             <img
               src="/images/services/chatgpt-flow.png"
               alt="Flow visualization (ChatGPT image)"
               className="max-w-full h-auto drop-shadow-2xl rounded-lg object-cover"
               style={{ mixBlendMode: 'multiply' }}
             />
           </div>

          {/* Textos Derecha (Desktop) */}
          <div className="flex flex-col gap-12 text-left lg:w-1/4 z-10 order-3">
             <div>
              <h4 className="font-bold text-gray-900 mb-1 flex items-center gap-2">
                Soil Resistivity Studies
              </h4>
              <p className="text-sm text-gray-600">Soil conductivity analysis for anode design.</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1 flex items-center gap-2">
                ACVG Pipeline Inspection:
              </h4>
              <p className="text-sm text-gray-600">Coating defect and corrosion detection survey.</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1 flex items-center gap-2">
                GPS Pipeline Location & Documentation
              </h4>
              <p className="text-sm text-gray-600">Precision mapping for compliance and management.</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1 flex items-center gap-2">
                Electrical Continuity & Interconnection Analysis
              </h4>
              <p className="text-sm text-gray-600">Identification of electrical continuity and grounding issues.</p>
            </div>
          </div>
        </div>
      </section>

      {/* El Compromiso */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold tracking-widest text-gray-500 uppercase mb-16">
            The Houston Commitment
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 uppercase">
            
            {/* Cuadrante Superior Izquierdo */}
            <div className="pb-12 border-b-2 border-gray-200 md:border-r-2 md:pr-8 flex items-center justify-center md:justify-end text-center md:text-right">
              Individual Verification
            </div>
            
            {/* Cuadrante Superior Derecho */}
            <div className="py-12 md:py-0 md:pb-12 border-b-2 border-gray-200 md:pl-8 flex items-center justify-center md:justify-start text-center md:text-left">
              Raw Material<br/> Integrity
            </div>
            
            {/* Cuadrante Inferior Izquierdo */}
            <div className="py-12 md:pt-12 md:pb-0 md:border-r-2 border-gray-200 md:pr-8 flex items-center justify-center md:justify-end text-center md:text-right">
              Chemical Analysis
            </div>
            
            {/* Cuadrante Inferior Derecho */}
            <div className="pt-12 md:pl-8 flex items-center justify-center md:justify-start text-center md:text-left border-t-2 md:border-t-0 border-gray-200 md:border-none">
              Process Control
            </div>
          </div>
        </div>
        <div className="max-w-3xl mx-auto text-center mt-16">
            <h2 className="text-xl font-bold tracking-widest text-gray-500 uppercase">
                The result: zero product failures in 40 years. Not luck.
              Consistency.
          </h2>
        </div>
      </section>
    </div>
  );
}
