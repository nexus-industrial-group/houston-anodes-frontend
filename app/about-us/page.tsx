import React from 'react';
import Header from '../../components/Header';

export default function AboutUsPage() {
  return (
    <div className="min-h-screen font-sans text-gray-800 bg-white">
      <Header />

      {/* Hero Section - Gallery Style */}
      <header className="relative flex items-center justify-center h-screen overflow-hidden bg-gray-100">
        {/* Main Image */}
        <div className="absolute inset-0 grid grid-cols-3 gap-1">
          <img 
            src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Industrial manufacturing" 
            className="object-cover w-full h-full"
          />
          <img 
            src="https://images.unsplash.com/photo-1581092918484-8313e1f6f53e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Metal fabrication" 
            className="object-cover w-full h-full"
          />
          <img 
            src="https://images.unsplash.com/photo-1565688534245-05d6b5be184a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Quality control" 
            className="object-cover w-full h-full"
          />
        </div>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="relative z-10 max-w-4xl px-6 mx-auto text-center mt-12">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl drop-shadow-lg leading-tight">
            A Legacy of Purity.<br />
            A Future of Protection.
          </h1>
          <p className="mt-6 text-lg text-white/90 drop-shadow-md max-w-2xl mx-auto">
            Founded in 1977, Houston Anodes has been at the forefront of cathodic protection technology for nearly five decades.
          </p>
        </div>
      </header>

      {/* Our Technology - Barrier Technology Section */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Centered Image */}
            <div className="flex justify-center">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1581092918484-8313e1f6f53e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Barrier Technology" 
                  className="rounded-2xl shadow-2xl w-full max-w-md object-cover"
                />
                <div className="absolute -bottom-4 -right-4 bg-electric-blue text-white px-6 py-3 rounded-lg shadow-xl">
                  <p className="font-bold text-sm uppercase">Advanced Protection</p>
                </div>
              </div>
            </div>

            {/* Text on the side */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-electric-blue mb-4">
                Our Technology
              </p>
              <h2 className="text-3xl font-extrabold uppercase leading-tight tracking-tight text-navy md:text-4xl lg:text-5xl mb-6">
                Barrier Technology
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our advanced barrier technology provides unparalleled corrosion protection through precisely engineered sacrificial anodes. Each anode is designed to create an effective electrochemical barrier that shields critical infrastructure from corrosive environments.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Using high-purity aluminum, zinc, and magnesium alloys, our barrier technology ensures optimal current distribution and extended service life, making it the preferred choice for demanding applications worldwide.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-electric-blue/10">
                    <svg className="h-4 w-4 text-electric-blue" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-700">Superior electrochemical performance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-electric-blue/10">
                    <svg className="h-4 w-4 text-electric-blue" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-700">Extended operational lifespan</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-electric-blue/10">
                    <svg className="h-4 w-4 text-electric-blue" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-700">Cost-effective protection solutions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline Section */}
      <section className="py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold tracking-widest text-gray-900 uppercase mb-4 text-center">
            Our History
          </h2>
          <p className="text-center text-text-secondary mb-16 max-w-2xl mx-auto">
            Nearly five decades of innovation, quality, and global expansion
          </p>
          
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 transform -translate-x-1/2"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-20 md:gap-y-16">
              {/* 1977 - Founded (Left) */}
              <div className="relative md:text-right">
                <div className="md:pr-12">
                  <div className="flex items-center md:justify-end mb-2">
                    <div className="w-3 h-3 bg-electric-blue rounded-full mr-3 md:mr-0 md:ml-3 md:order-2"></div>
                    <span className="text-xl font-bold text-gray-900">1977 - Founded</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Established Aluminum & Zinc Anode Manufacturing in Houston, Texas
                  </p>
                </div>
              </div>

              {/* 1980 - Global Reach (Right) */}
              <div className="relative">
                <div className="md:pl-12">
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 bg-electric-blue rounded-full mr-3"></div>
                    <span className="text-xl font-bold text-gray-900">1980 - Industry Growth</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Expanded operations focusing on aluminum industry advancements
                  </p>
                </div>
              </div>

              {/* 1986 - Quality & Innovation (Left) */}
              <div className="relative md:text-right">
                <div className="md:pr-12">
                  <div className="flex items-center md:justify-end mb-2">
                    <div className="w-3 h-3 bg-electric-blue rounded-full mr-3 md:mr-0 md:ml-3 md:order-2"></div>
                    <span className="text-xl font-bold text-gray-900">1986 - Quality & Innovation</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Pioneered quality innovation and corrosion protection technology
                  </p>
                </div>
              </div>

              {/* 1995 - Technology (Right) */}
              <div className="relative">
                <div className="md:pl-12">
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 bg-electric-blue rounded-full mr-3"></div>
                    <span className="text-xl font-bold text-gray-900">1995 - ISO Certification</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Achieved ISO 9001 certification for quality management systems
                  </p>
                </div>
              </div>

              {/* 2022 - Global Reach (Left) */}
              <div className="relative md:text-right">
                <div className="md:pr-12">
                  <div className="flex items-center md:justify-end mb-2">
                    <div className="w-3 h-3 bg-electric-blue rounded-full mr-3 md:mr-0 md:ml-3 md:order-2"></div>
                    <span className="text-xl font-bold text-gray-900">2022 - Global Reach</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Expanded international presence with 1000+ projects worldwide
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Two Images with Text in Middle Section */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            
            {/* Left Image */}
            <div className="h-96 lg:h-[500px]">
              <img 
                src="https://images.unsplash.com/photo-1565688534245-05d6b5be184a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Manufacturing process" 
                className="rounded-2xl shadow-xl w-full h-full object-cover"
              />
            </div>

            {/* Text in Middle */}
            <div className="px-4">
              <h2 className="text-3xl font-extrabold uppercase leading-tight tracking-tight text-navy md:text-4xl mb-6">
                Manufacturing Excellence
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our state-of-the-art manufacturing facilities utilize advanced induction furnace technology to produce high-purity anodes with precise chemical compositions.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Every step of our production process is carefully monitored and controlled to ensure consistent quality and performance, meeting the most stringent industry standards.
              </p>
            </div>

            {/* Right Image */}
            <div className="h-96 lg:h-[500px]">
              <img 
                src="https://images.unsplash.com/photo-1581092918484-8313e1f6f53e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Quality inspection" 
                className="rounded-2xl shadow-xl w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Quotes */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-br from-navy to-navy-light text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold tracking-widest uppercase mb-16 text-center">
            What Our Clients Say
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Quote 1 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <svg className="w-12 h-12 text-electric-blue mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
              <p className="text-lg leading-relaxed mb-6 italic">
                "Houston Anodes has been our trusted partner for over 15 years. Their commitment to quality and technical expertise is unmatched in the industry."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-electric-blue/20 rounded-full flex items-center justify-center">
                  <span className="text-electric-blue font-bold">JM</span>
                </div>
                <div>
                  <p className="font-bold">John Mitchell</p>
                  <p className="text-sm text-white/70">Engineering Director, Maritime Solutions Corp</p>
                </div>
              </div>
            </div>

            {/* Quote 2 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <svg className="w-12 h-12 text-electric-blue mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
              <p className="text-lg leading-relaxed mb-6 italic">
                "The performance and reliability of Houston Anodes products have significantly reduced our maintenance costs and extended the life of our offshore structures."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-electric-blue/20 rounded-full flex items-center justify-center">
                  <span className="text-electric-blue font-bold">SR</span>
                </div>
                <div>
                  <p className="font-bold">Sarah Rodriguez</p>
                  <p className="text-sm text-white/70">VP Operations, Global Energy Partners</p>
                </div>
              </div>
            </div>

            {/* Quote 3 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <svg className="w-12 h-12 text-electric-blue mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
              <p className="text-lg leading-relaxed mb-6 italic">
                "Houston Anodes delivers consistent quality and exceptional customer service. They understand our technical requirements and always exceed expectations."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-electric-blue/20 rounded-full flex items-center justify-center">
                  <span className="text-electric-blue font-bold">DK</span>
                </div>
                <div>
                  <p className="font-bold">David Kim</p>
                  <p className="text-sm text-white/70">Lead Engineer, Infrastructure Solutions Inc</p>
                </div>
              </div>
            </div>

            {/* Quote 4 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <svg className="w-12 h-12 text-electric-blue mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
              <p className="text-lg leading-relaxed mb-6 italic">
                "We've used Houston Anodes across multiple international projects. Their global reach and local expertise make them an invaluable partner."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-electric-blue/20 rounded-full flex items-center justify-center">
                  <span className="text-electric-blue font-bold">MT</span>
                </div>
                <div>
                  <p className="font-bold">Maria Torres</p>
                  <p className="text-sm text-white/70">Project Manager, Pacific Marine Systems</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scrolling Carousel Section - Laboratory Gallery */}
      <section className="py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold tracking-widest text-gray-900 uppercase mb-4 text-center">
            Our Facilities
          </h2>
          <p className="text-center text-text-secondary mb-12 max-w-2xl mx-auto">
            State-of-the-art equipment and quality control laboratories
          </p>
          
          {/* Horizontal Scrolling Gallery */}
          <div className="overflow-x-auto pb-4 scrollbar-hide">
            <div className="flex gap-6" style={{ width: 'max-content' }}>
              <div className="flex-shrink-0 w-80">
                <div className="h-64 rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Quality control lab" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="mt-4 text-lg font-bold text-gray-900">QB Bruker Spectrometer</h3>
                <p className="text-sm text-gray-600">Precision material analysis</p>
              </div>

              <div className="flex-shrink-0 w-80">
                <div className="h-64 rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1582719471137-c3967ffb1c42?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Laboratory" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="mt-4 text-lg font-bold text-gray-900">Quality Control Laboratory</h3>
                <p className="text-sm text-gray-600">State-of-the-art testing facility</p>
              </div>

              <div className="flex-shrink-0 w-80">
                <div className="h-64 rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Spectrometer" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="mt-4 text-lg font-bold text-gray-900">Precision Spectrometer</h3>
                <p className="text-sm text-gray-600">Advanced chemical analysis</p>
              </div>

              <div className="flex-shrink-0 w-80">
                <div className="h-64 rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1581092918484-8313e1f6f53e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Testing facility" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="mt-4 text-lg font-bold text-gray-900">Final Testing</h3>
                <p className="text-sm text-gray-600">Finished anodes inspection</p>
              </div>

              <div className="flex-shrink-0 w-80">
                <div className="h-64 rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1565688534245-05d6b5be184a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Manufacturing" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="mt-4 text-lg font-bold text-gray-900">Production Floor</h3>
                <p className="text-sm text-gray-600">Advanced manufacturing systems</p>
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-gray-500 mt-8">
            ← Scroll to view more →
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gray-900 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase tracking-wide">
            Partner With Houston Anodes
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Join industry leaders worldwide who trust Houston Anodes for superior corrosion protection solutions.
          </p>
          <a 
            href="/contact-us" 
            className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg font-bold uppercase tracking-wide hover:bg-gray-100 transition-colors"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
}
