import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function HotelSantuario() {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.js-hotel-fade', {
        opacity: 0,
        y: 20,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        delay: 0.3
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="section-viewport bg-black flex items-center justify-end relative overflow-hidden"
    >
      
      {/* CAPA DE FONDO: Imagen Full Viewport */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/src/assets/background-hotel.png" 
          alt="Gran Venetian Master Suite" 
          className="w-full h-full object-cover object-center "
        />
        {/* Degradado para dar contraste al texto izquierdo */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent z-10"></div>
      </div>

      {/* CONTENEDOR DE TEXTO: A la izquierda y con espacio para que no se corte */}
      <div className="relative z-20 w-full max-w-xl px-8 md:px-20 text-left">
        
        <div className="js-hotel-fade mb-8">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tighter leading-tight mb-6">
            Grand Venetian: <br/>
            <span className="italic font-serif font-light text-[#72D2C1]">nuestra villa de ensueño.</span>
          </h2>
          <p className="text-lg md:text-xl font-medium text-slate-100 italic tracking-wide leading-relaxed">
            “No solo un airbnb, sino el lugar donde escribiremos increibles capítulos de nuestra historia.”
          </p>
        </div>

        <div className="js-hotel-fade w-20 h-[2px] bg-[#72D2C1] mb-8"></div>

        {/* Tarjeta de detalles */}
        <div className="js-hotel-fade bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-xl mb-8">
          <div className="grid grid-cols-2 gap-4 mb-4 border-b border-white/10 pb-4">
            <div>
              <span className="block text-[10px] font-bold text-slate-300 uppercase tracking-widest">Check-in</span>
              <span className="text-sm font-semibold text-white">29 Mayo, 2026</span>
            </div>
            <div>
              <span className="block text-[10px] font-bold text-slate-300 uppercase tracking-widest">Check-out</span>
              <span className="text-sm font-semibold text-white">03 Junio, 2026</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {['Infinity Pools', 'Private Terrace', 'Jacuzzi', 'Ocean View'].map(tag => (
              <span key={tag} className="text-[10px] uppercase tracking-wider bg-white/20 text-white px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <p className="js-hotel-fade text-lg md:text-xl font-bold text-white tracking-wide">
          “Tengo demasiadas ganas de estrenar ese jacuzzi contigo ❤️”
        </p>
      </div>

    </section>
  );
}