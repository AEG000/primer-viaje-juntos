import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Confirmacion() {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.js-confirm-fade', {
        opacity: 0,
        y: 30,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power3.out'
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="section-viewport bg-black flex flex-col items-center justify-center text-center px-10 relative overflow-hidden"
    >
      {/* Fondo con overlay sutil */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-black to-black z-0"></div>

      <div className="relative z-10 max-w-2xl js-confirm-fade flex flex-col items-center">
        
        {/* Pingüinos y corazones - El toque especial */}
        <div className="text-5xl mb-8 animate-bounce">
          🐧❤️🐧
        </div>

        <h2 className="text-4xl md:text-5xl font-serif italic text-white mb-8">
          “Hecho con ❤️ por tu Guapito para la mejor compañera de viaje y de vida.”
        </h2>
        
        <p className="text-[#72D2C1] text-xl md:text-2xl italic font-light mb-8">
          “Gracias por hacer especial mi vida, te amo mi amor.”
        </p>

        <p className="text-white/60 text-lg italic mb-12">
          “El viaje todavía no empieza… y ya es uno de mis recuerdos favoritos contigo.”
        </p>

        <button 
          onClick={() => alert("¡Gracias mi amor, te amo hoy, mañana y siempre...120 mi amor! ❤️🐧")}
          className="px-10 py-4 border border-[#72D2C1] text-[#72D2C1] hover:bg-[#72D2C1] hover:text-black font-bold uppercase tracking-widest text-sm rounded-full transition-all hover:scale-105 active:scale-95"
        >
          Confirmar Nuestra Aventura
        </button>

        <div className="mt-16 text-slate-500 text-[10px] uppercase tracking-[0.3em]">
          Vallarta 2026 • Eternamente tú y yo • te amo muuuuuuucho
        </div>
      </div>
    </section>
  );
}