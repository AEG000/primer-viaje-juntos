import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Countdown from '../components/Countdown';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.to('.js-hero-title', {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power4.out',
        delay: 0.2
      });

      tl.to('.js-hero-fade', {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: 'power3.out'
      }, '-=0.6');

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      // Cambiamos px-20 por px-6 (móvil) y md:px-20 (desktop). 
      // Usamos text-center en móvil para que se vea bien, y text-left en pantallas grandes.
      className="section-viewport flex items-center justify-center md:justify-start px-6 md:px-20 relative text-center md:text-left"
    >

      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <img
          src="/src/assets/background-hero.png"
          alt="Coastal background"
          className="w-full h-full object-cover object-bottom"
        />
        {/* Overlay extra en móvil para asegurar que el texto sea legible sobre cualquier foto */}
        <div className="absolute inset-0 bg-black/20 md:hidden"></div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-4xl flex flex-col items-center md:items-start">

        <span className="js-hero-fade opacity-0 translate-y-6 text-xl md:text-3xl font-light italic text-[#115e59] tracking-wide mb-2 block font-serif">
          “Llevo años imaginando este viaje contigo.”
        </span>

        <h1 className="js-hero-title opacity-0 -translate-y-8 text-5xl md:text-7xl font-extrabold text-slate-800 tracking-tight leading-none mb-6">
          Vallarta <span className="text-[#72D2C1]">2026</span>
        </h1>

        {/* Línea decorativa responsiva */}
        <div className="w-full h-[2px] bg-slate-200 my-4 max-w-[200px] md:max-w-sm"></div>

        <div className="js-hero-fade opacity-0 translate-y-6 mt-2 w-full">
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-400 block mb-2">
            Tiempo restante para el despegue
          </span>
          {/* El componente Countdown debe ser responsivo por dentro (fuentes pequeñas) */}
          <div className="scale-90 md:scale-100">
            <Countdown />
          </div>
        </div>

        <p className="js-hero-fade opacity-0 translate-y-6 text-base md:text-lg font-medium text-slate-600 italic tracking-wide mt-8">
          “Y por fin… ya casi sucede ❤️”
        </p>

      </div>
    </section>
  );
}