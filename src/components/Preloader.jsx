import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';

const EMOJIS = ['🌴', '🌊', '⛵', '☀️', '🏖️'];

export default function Preloader({ appState, setAppState, onStart }) {
  const [currentEmoji, setCurrentEmoji] = useState(0);

  // 1. Carrusel de emojis (Dinamismo mientras "carga")
  useEffect(() => {
    if (appState === 'started') return;

    const emojiInterval = setInterval(() => {
      setCurrentEmoji((prev) => (prev + 1) % EMOJIS.length);
    }, 800);

    // Simulamos un tiempo de carga de 2.5 segundos para generar expectativa
    const readyTimeout = setTimeout(() => {
      setAppState('ready');
    }, 2500);

    return () => {
      clearInterval(emojiInterval);
      clearTimeout(readyTimeout);
    };
  }, [appState, setAppState]);

  // 2. Animación de salida con GSAP
  const executeExitAnimation = () => {
    const tl = gsap.timeline({
      onComplete: onStart // Esto desmonta el preloader en App.jsx
    });

    // La tarjeta se encoge un poco y se va
    tl.to(".preloader-card", {
      scale: 0.9,
      opacity: 0,
      duration: 0.5,
      ease: "power2.in"
    })
    // El fondo crema se desvanece para revelar el Hero
    .to(".preloader-overlay", {
      opacity: 0,
      duration: 0.8,
      ease: "power1.out"
    }, "-=0.2");
  };

  return (
    <div className="preloader-overlay fixed inset-0 z-[100] flex items-center justify-center bg-[#FAF9F6]">
      <div className="preloader-card text-center px-6 max-w-md">
        
        {/* Emoji con pulso suave */}
        <div className="text-6xl mb-8 transition-all duration-500 transform scale-110">
          {EMOJIS[currentEmoji]}
        </div>

        <p className="text-xl md:text-2xl font-medium text-slate-700 italic tracking-wide mb-10 leading-relaxed">
          “Amorcito… estoy preparando algo especial para nosotros ❤️”
        </p>

        {/* El botón solo aparece cuando el estado es 'ready' */}
        {appState === 'ready' && (
          <button
            onClick={executeExitAnimation}
            className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-[#72D2C1] font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-[#115e59] shadow-lg animate-bounce"
          >
            Empezar nuestro viaje ✈️
          </button>
        )}
      </div>
    </div>
  );
}