import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import backgroundPvrArrival from '../assets/background-pvr-arrival.png';

export default function VallartaArrival() {
  const sectionRef = useRef(null);
  
  // Refs para nubes que van de IZQUIERDA a DERECHA (Tus nubes originales)
  const cloud1Ref = useRef(null);
  const cloud2Ref = useRef(null);

  // Refs para las 2 NUEVAS nubes que van de DERECHA a IZQUIERDA
  const cloud3Ref = useRef(null);
  const cloud4Ref = useRef(null);

  const textContainerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Animación de entrada limpia al aparecer la sección
      gsap.from(textContainerRef.current, {
        opacity: 0,
        y: 30,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.2
      });

      // 2. LOOPS INFINITOS DE LAS NUBES
      
      // [GRUPO A: Van hacia la derecha]
      // Nube 1: Alta y grande
      gsap.to(cloud1Ref.current, {
        x: '115vw',
        duration: 50,
        repeat: -1,
        ease: 'none',
        delay: -15
      });

      // Nube 2: Mediana y rápida
      gsap.to(cloud2Ref.current, {
        x: '115vw',
        duration: 38,
        repeat: -1,
        ease: 'none',
        delay: -5
      });

      // [GRUPO B: Las 2 nuevas nubes que van hacia la izquierda]
      // Nube 3: Intermedia en altura, va en reversa (de 0vW de regreso a -115vw)
      gsap.to(cloud3Ref.current, {
        x: '-115vw',
        duration: 45,
        repeat: -1,
        ease: 'none',
        delay: -10
      });

      // Nube 4: Más alta y sutil, también hacia la izquierda
      gsap.to(cloud4Ref.current, {
        x: '-115vw',
        duration: 55,
        repeat: -1,
        ease: 'none',
        delay: -2
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);
// ... (mantiene tus importaciones y lógica de GSAP igual)

  return (
    <section 
      ref={sectionRef}
      className="section-viewport bg-[#FAF9F6] flex items-center justify-center relative overflow-hidden border-t border-slate-200/60"
    >
      
    {/* CAPA DE FONDO */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <img 
          src={backgroundPvrArrival} // <--- Solo cambia esto
          alt="Puerto Vallarta aerial view" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* --- NUBES (TUS ORIGINALES SIN TOCAR) --- */}
      <div ref={cloud1Ref} className="absolute top-6 -left-[25%] z-20 opacity-80 pointer-events-none"><svg width="280" height="95" viewBox="0 0 200 80" fill="white"><path d="M10 60 L190 60 A20 20 0 0 0 170 40 A30 30 0 0 0 110 20 A25 25 0 0 0 60 30 A20 20 0 0 0 10 60 Z" /></svg></div>
      <div ref={cloud2Ref} className="absolute top-16 -left-[25%] z-20 opacity-70 pointer-events-none scale-75"><svg width="280" height="95" viewBox="0 0 200 80" fill="white"><path d="M10 60 L190 60 A20 20 0 0 0 170 40 A30 30 0 0 0 110 20 A25 25 0 0 0 60 30 A20 20 0 0 0 10 60 Z" /></svg></div>
      <div ref={cloud3Ref} className="absolute top-10 -right-[25%] z-20 opacity-75 pointer-events-none scale-90"><svg width="260" height="90" viewBox="0 0 200 80" fill="white"><path d="M10 60 L190 60 A20 20 0 0 0 170 40 A30 30 0 0 0 110 20 A25 25 0 0 0 60 30 A20 20 0 0 0 10 60 Z" /></svg></div>
      <div ref={cloud4Ref} className="absolute top-24 -right-[25%] z-20 opacity-60 pointer-events-none scale-50"><svg width="240" height="85" viewBox="0 0 200 80" fill="white"><path d="M10 60 L190 60 A20 20 0 0 0 170 40 A30 30 0 0 0 110 20 A25 25 0 0 0 60 30 A20 20 0 0 0 10 60 Z" /></svg></div>

      {/* CONTENIDO TEXTUAL (Adaptado para celular) */}
      <div 
        ref={textContainerRef}
        className="relative z-30 text-center max-w-2xl px-6 py-8 md:px-10 md:py-12 backdrop-blur-xl bg-white/20 rounded-3xl border border-white/30 shadow-[0_8px_32px_0_rgba(0,0,0,0.15)] mx-4 w-full"
      >
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-800 tracking-tight leading-tight mb-4">
          “Lo hicimos, amor.”
        </h2>

        <div className="w-16 h-[2px] bg-[#72D2C1] mx-auto mb-5"></div>

        <p className="text-base md:text-lg font-medium text-slate-700 italic leading-relaxed mb-4">
          “¿Te acuerdas cuando platicábamos de esto?<br />
          Hoy ya es una realidad 🥹”
        </p>

        <p className="text-xs md:text-sm font-bold uppercase tracking-wider text-[#115e59] bg-[#FAF9F6]/60 inline-block px-4 py-1.5 rounded-full mb-5 font-sans shadow-sm">
          “Nuestro hogar en la playa por 5 noches.”
        </p>

        <p className="text-sm md:text-lg font-bold text-slate-800 leading-snug">
          “Tengo demasiadas ganas de vivir estos días contigo ❤️”
        </p>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 z-30 px-2">
        <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#115e59] bg-[#FAF9F6]/90 px-4 py-2 rounded-full shadow-md animate-pulse block text-center">
          Desliza para nuestro hogar 🏠
        </span>
      </div>

    </section>
  );
}