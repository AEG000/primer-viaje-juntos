import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const planes = [
  { 
    dia: "Viernes 29", 
    titulo: "Llegada al Paraíso", 
    desc: "Check-in en nuestra suite y cena frente al mar.",
    frase: "Por fin estamos aquí, donde siempre soñamos estar juntos. ✨" 
  },
  { 
    dia: "Sábado 30", 
    titulo: "Mar y Aventuras", 
    desc: "Playa y tarde de alberca infinita.",
    frase: "Gracias mi amor por todo lo que has hecho por nosotros para llegar hasta aquí." 
  },
  { 
    dia: "Domingo 31", 
    titulo: "Caminar de tu Mano", 
    desc: "Exploración de Vallarta y un atardecer mágico.",
    frase: "Cualquier lugar es perfecto si es contigo. ❤️" 
  },
  { 
    dia: "Lunes 01", 
    titulo: "Nuestro Respiro", 
    desc: "Día de spa, lectura y jacuzzi privado.",
    frase: "Gracias por regalarnos este tiempo para nosotros dos." 
  },
  { 
    dia: "Martes 02", 
    titulo: "Bajo las Estrellas", 
    desc: "Cena de despedida para celebrar nuestra historia.",
    frase: "Este es solo el comienzo de muchos viajes más. Te amo." 
  }
];

export default function Itinerario() {
  const containerRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Animación de la línea del timeline
      gsap.from(lineRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          end: "bottom 80%",
          scrub: 1
        },
        scaleY: 0,
        transformOrigin: "top center",
        ease: "none"
      });

      // Animación de las tarjetas
      gsap.from('.js-timeline-node', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%"
        },
        opacity: 0,
        x: (i) => i % 2 === 0 ? -50 : 50,
        duration: 1,
        stagger: 0.3,
        ease: "power4.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);
// ... (mantiene tus imports, planes y useEffect exactamente iguales)

  return (
    <section ref={containerRef} className="relative min-h-screen py-20 px-6 md:px-20 overflow-hidden flex flex-col items-center">
      
      {/* FONDO */}
      <div className="absolute inset-0 z-0">
        <img src="/src/assets/background-itinerario.jpg" alt="Sunset" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 backdrop-blur-[1px]"></div>
      </div>

      {/* TITULO */}
      <div className="relative z-10 text-center mb-16">
        <h2 className="text-5xl md:text-8xl font-serif italic text-[#72D2C1] drop-shadow-lg tracking-tight">
          Nuestra Aventura
        </h2>
        <p className="text-white/80 font-light tracking-[0.2em] md:tracking-[0.4em] uppercase text-[10px] md:text-xs mt-4">
          Cinco días, mil recuerdos
        </p>
      </div>

      {/* TIMELINE */}
      <div className="relative z-10 w-full max-w-4xl">
        
        {/* Línea Central (Se desplaza a la izquierda en móvil) */}
        <div 
          ref={lineRef}
          className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#72D2C1] via-[#115e59] to-transparent"
        ></div>

        <div className="space-y-12 md:space-y-20">
          {planes.map((plan, index) => (
            <div 
              key={index} 
              className="js-timeline-node relative flex items-start w-full pl-12 md:pl-0 md:justify-between"
            >
              
              {/* Punto en el timeline */}
              <div className="absolute left-4 -translate-x-1/2 mt-4 w-3 h-3 md:w-4 md:h-4 rounded-full bg-white border-2 md:border-4 border-[#72D2C1] shadow-[0_0_15px_rgba(114,210,193,0.8)]"></div>

              {/* Contenido (Forzamos alineación a la izquierda en móvil) */}
              <div className="w-full md:w-[45%]">
                <div className="bg-white/10 backdrop-blur-xl p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/20 shadow-2xl relative">
                  
                  <span className="text-[#72D2C1] font-bold tracking-widest text-[10px] md:text-xs uppercase block mb-1">
                    {plan.dia}
                  </span>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    {plan.titulo}
                  </h3>
                  
                  <p className="text-slate-200 text-xs md:text-sm italic mb-4 leading-relaxed">
                    {plan.desc}
                  </p>

                  <div className="pt-3 border-t border-white/10">
                    <p className="text-[#72D2C1] font-serif italic text-sm md:text-lg leading-snug">
                      "{plan.frase}"
                    </p>
                  </div>
                </div>
              </div>

              {/* Espacio balanceador (Solo en escritorio) */}
              <div className="hidden md:block md:w-[45%]"></div>
              
            </div>
          ))}
        </div>
      </div>

      {/* FRASE FINAL */}
      <div className="relative z-10 mt-20 text-center px-4">
        <p className="text-white text-lg md:text-2xl font-serif italic opacity-80">
          Todo está listo para nosotros...
        </p>
      </div>

    </section>
  );
}