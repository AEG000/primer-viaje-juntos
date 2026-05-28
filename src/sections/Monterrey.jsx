import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import backgroundMonterrey from '../assets/background-monterrey.png';

export default function Monterrey() {
  const [showModal, setShowModal] = useState(false);
  const containerRef = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.js-mty-fade', {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        delay: 0.3
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (showModal && modalRef.current) {
      gsap.fromTo(modalRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.7)' }
      );
    }
  }, [showModal]);

  return (
    <section 
      ref={containerRef}
      className="section-viewport bg-[#FAF9F6] flex flex-col justify-center px-6 md:px-20 border-t border-slate-200/60 relative z-10 overflow-hidden"
    >
    {/* BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <img 
          src={backgroundMonterrey} // <--- Solo cambia esto
          alt="Monterrey takeoff" 
          className="w-full h-full object-cover object-center opacity-40 md:opacity-100"
        />
      </div>

      <div className="relative z-10 max-w-2xl mb-10 text-center md:text-left">
        <h2 className="js-mty-fade text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight mb-4">
          “Mi amor… nos vamos ❤️”
        </h2>
        <p className="js-mty-fade text-base md:text-lg text-slate-600 font-medium italic leading-relaxed px-2 md:px-0">
          “Nos vamos juntitos en el avión. Próxima parada: nuestra primera gran aventura de playa.”
        </p>
      </div>

      {/* Tarjeta de Abordaje Responsiva */}
      <div className="js-mty-fade relative z-10 max-w-xl w-full bg-white border border-slate-200 rounded-2xl shadow-lg overflow-hidden font-sans mx-auto md:mx-0">
        <div className="bg-[#115e59] p-3 text-white flex justify-between items-center">
          <span className="font-bold tracking-widest text-[10px] uppercase text-[#72D2C1]">Vuelo de Ida</span>
          <span className="text-[10px] bg-[#72D2C1] text-teal-950 px-2 py-0.5 rounded font-bold">Confirmado</span>
        </div>
        
        {/* Aquí está el truco: flex-col en móvil, flex-row en escritorio */}
        <div className="p-6 md:p-8 flex flex-col md:flex-row justify-between items-center bg-gradient-to-r from-white to-slate-50 gap-4">
          <div className="text-center">
            <span className="block text-4xl md:text-5xl font-black text-slate-800">MTY</span>
            <span className="text-[10px] text-slate-400 uppercase tracking-widest">Monterrey</span>
          </div>
          
          {/* El avión rota según el dispositivo */}
          <div className="flex items-center rotate-90 md:rotate-0 my-2">
            <span className="text-xl">✈️</span>
          </div>

          <div className="text-center">
            <span className="block text-4xl md:text-5xl font-black text-[#72D2C1]">PVR</span>
            <span className="text-[10px] text-slate-400 uppercase tracking-widest">Puerto Vallarta</span>
          </div>
        </div>

        <div className="px-6 pb-6 md:px-8 md:pb-8 bg-white grid grid-cols-1 md:grid-cols-2 gap-4 text-xs border-t border-slate-100 pt-6">
          <div>
            <span className="block font-bold text-slate-400 uppercase mb-1">Fecha</span>
            <span className="font-semibold text-slate-700">29 Mayo 2026</span>
          </div>
          <div>
            <span className="block font-bold text-slate-400 uppercase mb-1">Hora</span>
            <span className="font-semibold text-slate-700">12:00 PM</span>
          </div>
        </div>

        <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-center md:justify-end">
          <button 
            onClick={() => setShowModal(true)}
            className="w-full md:w-auto bg-[#72D2C1] hover:bg-[#115e59] text-white px-8 py-3 rounded-xl text-[11px] font-bold uppercase tracking-widest transition-all shadow-sm"
          >
            Ver QR 📱
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div ref={modalRef} className="bg-white p-6 rounded-2xl max-w-xs w-full shadow-2xl text-center">
            <h3 className="font-bold text-lg mb-4">Pases de Abordar</h3>
            <div className="w-40 h-40 bg-slate-100 mx-auto rounded-xl flex items-center justify-center mb-6">
              <span className="text-4xl">📱❤️</span>
            </div>
            <button onClick={() => setShowModal(false)} className="w-full bg-slate-800 text-white py-3 rounded-xl text-xs font-bold uppercase tracking-widest">Cerrar</button>
          </div>
        </div>
      )}
    </section>
  );
}