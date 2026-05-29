import React, { useState, useEffect, useRef } from 'react';
import { catalogData } from '../data/catalogData';
// Añadimos Bell, Play, Info, X y Heart para cumplir con todo lo que usa la app y el modal
import { Search, Plus, Bell, Play, Info, X, Heart } from 'lucide-react'; 
import NetflixIntroSandbox from './NetflixIntroSandbox'; 
import GaleriaVertical from './GaleriaVertical';
import { fotosCitas, fotosViajes, fotosDetalles } from '../data/photosData';

export default function NetflixChiqui() {
  const [showIntro, setShowIntro] = useState(true);
  const [startAnim, setStartAnim] = useState(false);
  const [activeItem, setActiveItem] = useState(catalogData[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHeroCollapsed, setIsHeroCollapsed] = useState(false);
  const audioRef = useRef(null);

  // =========================================================
  // ESTADOS CENTRALIZADOS PARA EL MODAL GLOBAL DE FOTOS
  // =========================================================
  const [fotoSeleccionada, setFotoSeleccionada] = useState(null);
  const [filaActiva, setFilaActiva] = useState([]);

  const manejarAbrirFoto = (foto, fila) => {
    setFotoSeleccionada(foto);
    setFilaActiva(fila);
  };
  // =========================================================

  const sidebarEmojis = [
    { emoji: "❤️", label: "Nuestro Amor" },
    { emoji: "🐧", label: "Chiqui" },
    { emoji: "💎", label: "Nuestro Diamante" },
    { emoji: "🌹", label: "Detalles Juntos" },
    { emoji: "🏝️", label: "Vallarta 2026" },
    { emoji: "✈️", label: "Próximo Destino" }
  ];

  const frasesNuestras = [
    { frase: "I like it!", label: "Frase Favorita" },
    { frase: "Hoy, mañana y siempre", label: "Nuestra Promesa" },
    { frase: "120 mi amor", label: "Código Secreto" },
    { frase: "Unas papichugas?", label: "El Antojo" },
    { frase: "Benitooooou", label: "El Consentido" },
    { frase: "Dios te ayude", label: "Dicho Clásico" },
    { frase: "Si, No pasa nada!", label: "Actitud" },
    { frase: "Vamos por un Yakimeshi o que?", label: "Plan Perfecto" },
    { frase: "Te encantaaaa", label: "El pedo" }
  ];

  const iniciarExperiencia = () => {
    setStartAnim(true);
    if (audioRef.current) {
      audioRef.current.volume = 0.6;
      audioRef.current.play().catch((err) => console.log("Audio block:", err));
    }
    
    setTimeout(() => {
      setShowIntro(false);
    }, 4000);
  };

  // Efecto para encoger la tipografía del Hero (Título/Sinopsis) pasados unos segundos
  useEffect(() => {
    if (showIntro) return;
    setIsHeroCollapsed(false); 
    
    const timer = setTimeout(() => {
      setIsHeroCollapsed(true);
    }, 5000); 

    return () => clearTimeout(timer);
  }, [activeItem, showIntro]);

  // =========================================================
  // ESCUCHADOR INTELIGENTE UNIFICADO (FOTOS + HERO BANNER)
  // =========================================================
  useEffect(() => {
    if (showIntro) return;

    const handleKeyDown = (e) => {
      // CASO A: SI EL MODAL DE FOTOS ESTÁ ABIERTO
      if (fotoSeleccionada && filaActiva.length > 0) {
        const currentIndex = filaActiva.findIndex(item => item.id === fotoSeleccionada.id);
        
        if (e.key === 'ArrowRight') {
          const nextIndex = (currentIndex + 1) % filaActiva.length;
          setFotoSeleccionada(filaActiva[nextIndex]);
        } else if (e.key === 'ArrowLeft') {
          const prevIndex = (currentIndex - 1 + filaActiva.length) % filaActiva.length;
          setFotoSeleccionada(filaActiva[prevIndex]);
        } else if (e.key === 'Escape') {
          setFotoSeleccionada(null);
        }
        return; 
      }

      // CASO B: SI EL MODAL ESTÁ CERRADO, CONTROLA EL HERO PRINCIPAL
      const currentIndex = catalogData.findIndex(item => item.id === activeItem.id);
      if (e.key === 'ArrowRight') {
        const nextIndex = (currentIndex + 1) % catalogData.length;
        setActiveItem(catalogData[nextIndex]);
      } else if (e.key === 'ArrowLeft') {
        const prevIndex = (currentIndex - 1 + catalogData.length) % catalogData.length;
        setActiveItem(catalogData[prevIndex]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeItem, showIntro, fotoSeleccionada, filaActiva]);

  if (showIntro) {
    return (
      <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[9999] select-none overflow-hidden font-sans">
        <audio 
          ref={audioRef} 
          src="https://www.soundboard.com/mediafiles/mz/Mzg1ODMxNTM4NTgzMjc3_w_2f_2b_2fWdfMv0Y.mp3" 
          preload="auto"
        />

        {!startAnim ? (
          <div className="text-center space-y-6 animate-fade-in">
            <h1 className="text-[#E50914] text-5xl md:text-7xl font-black tracking-tighter mb-2 filter drop-shadow-[0_0_12px_rgba(229,9,20,0.4)]">
              CHIQUIFLIX
            </h1>
            <p className="text-zinc-400 text-sm md:text-base tracking-wide font-light">
              ¿Estás lista para nuestra cartelera especial?
            </p>
            <button 
              onClick={iniciarExperiencia}
              className="bg-[#E50914] hover:bg-red-700 text-white font-bold px-8 py-3 rounded text-base md:text-lg tracking-wider shadow-2xl transition transform hover:scale-105 active:scale-95 duration-200"
            >
              INICIAR SESIÓN
            </button>
          </div>
        ) : (
          <NetflixIntroSandbox />
        )}

        <style>{`
          .animate-fade-in { animation: fadeIn 0.8s ease-out forwards; }
          @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        `}</style>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#141414] text-white font-sans overflow-x-hidden relative select-none">
      {/* SIDEBAR */}
      <aside className="fixed left-0 top-0 bottom-0 w-12 md:w-16 bg-black z-50 flex flex-col items-center justify-center border-r border-white/5 shadow-2xl">
        <div className="flex flex-col items-center space-y-6 md:space-y-8 w-full">
          <div className="text-slate-400 hover:text-white transition cursor-pointer p-1 hover:scale-110">
            <Search size={18} className="md:w-5 md:h-5" />
          </div>
          {sidebarEmojis.map((item, index) => (
            <div key={index} className="relative group cursor-pointer w-full flex justify-center py-0.5">
              <span className="text-lg md:text-xl transform group-hover:scale-125 transition duration-200 block">
                {item.emoji}
              </span>
              <div className="absolute left-full ml-4 px-3 py-1.5 bg-[#181818] border border-zinc-700 text-xs font-medium text-white rounded opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap shadow-xl z-50">
                {item.label}
              </div>
            </div>
          ))}
          <div className="text-slate-400 hover:text-white transition cursor-pointer p-1 hover:scale-110">
            <Plus size={20} className="md:w-6 md:h-6" />
          </div>
        </div>
      </aside>

      {/* HEADER DE NAVEGACIÓN */}
      <header className="absolute top-0 left-12 md:left-16 right-0 h-20 bg-gradient-to-b from-black/90 via-black/40 to-transparent z-40 flex items-center justify-between px-6 md:px-12 pointer-events-none">
        <div className="flex items-center space-x-6 md:space-x-10 pointer-events-auto">
          <h1 className="text-[#E50914] font-black tracking-tighter text-2xl md:text-3xl filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            CHIQUIFLIX
          </h1>
          <nav className="hidden lg:flex space-x-6 text-sm font-light text-slate-300">
            <span className="text-white font-medium cursor-pointer">Inicio</span>
            <span className="hover:text-white transition cursor-pointer">Series</span>
            <span className="hover:text-white transition cursor-pointer">Películas</span>
            <span className="hover:text-white transition cursor-pointer">Novedades populares</span>
          </nav>
        </div>
        
        <div className="flex items-center space-x-4 pointer-events-auto">
          <button className="text-white relative p-1 hover:opacity-80 transition">
            <Bell size={20} />
            <span className="absolute top-0 right-0 bg-[#E50914] text-[9px] font-bold h-3.5 w-3.5 rounded-full flex items-center justify-center transform translate-x-1 -translate-y-0.5">
              4
            </span>
          </button>
          <div className="w-8 h-8 rounded bg-[#E50914] flex items-center justify-center font-bold text-xs shadow-md border border-white/10 text-white">
            M&A
          </div>
        </div>
      </header>

      {/* HERO BANNER PRINCIPAL */}
      <section className="relative h-[75vh] md:h-[80vh] w-full flex items-center overflow-hidden pl-16 md:pl-24 pr-6 md:pr-12">
        <div className="absolute inset-0 z-0 transition-all duration-700 ease-in-out">
          <img src={activeItem.bgImage} alt={activeItem.title} className="w-full h-full object-cover object-center filter brightness-[0.45]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#141414] via-[#141414]/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#141414]/10 to-[#141414]"></div>
        </div>

        <div className="absolute right-0 bottom-1/4 bg-zinc-900/40 backdrop-blur-sm border-l-4 border-zinc-400 py-1.5 pl-4 pr-10 text-xs font-semibold tracking-wide text-zinc-200 z-30 select-none">
          {activeItem.classification || "TV-MA"}
        </div>

        <div className="relative z-10 max-w-xl md:max-w-2xl mt-12 pl-4 md:pl-8 select-none">
          <span className="text-[#E50914] font-extrabold tracking-[0.3em] text-[10px] md:text-xs uppercase block mb-2 drop-shadow">{activeItem.subtitle}</span>
          
          <h2 className={`font-black tracking-tight drop-shadow-2xl text-white uppercase font-serif leading-none transition-all duration-700 ease-in-out ${
            isHeroCollapsed ? 'text-2xl md:text-3xl mb-2' : 'text-4xl md:text-6xl mb-4'
          }`}>
            {activeItem.title}
          </h2>
          
          <div className="flex items-center space-x-3 text-xs md:text-sm font-medium mb-3 text-slate-300 drop-shadow">
            <span className="text-green-400 font-bold">{activeItem.match}</span>
            <span>{activeItem.year}</span>
            <span className="border border-slate-500 px-1.5 py-0.5 rounded text-[10px] font-bold bg-black/40 text-white">{activeItem.classification || "TV-MA"}</span>
            <span>{activeItem.duration}</span>
          </div>

          <p className={`text-slate-200 leading-relaxed font-normal drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] max-w-lg transition-all duration-700 ease-in-out overflow-hidden ${
            isHeroCollapsed ? 'opacity-0 max-h-0 mb-4 scale-95 origin-left' : 'opacity-100 max-h-32 mb-6'
          }`}>
            {activeItem.desc}
          </p>

          {/* BOTONES DEL HERO (EL DE REPRODUCIR YA DISPARA LA ACCIÓN CORRECTAMENTE) */}
          <div className="flex items-center space-x-4 relative z-10">
            <button 
              onClick={() => setIsPlaying(true)} 
              className="bg-white text-black hover:bg-white/90 font-bold px-6 md:px-8 py-2 rounded flex items-center justify-center space-x-2 text-sm md:text-base transition active:scale-95 shadow-xl cursor-pointer"
            >
              <Play size={18} fill="black" className="text-black" />
              <span>Reproducir</span>
            </button>
            <button 
              className="bg-zinc-500/40 hover:bg-zinc-500/60 text-white font-bold px-6 md:px-8 py-2 rounded flex items-center justify-center space-x-2 text-sm md:text-base transition backdrop-blur-md shadow-xl"
            >
              <Info size={18} />
              <span>Más información</span>
            </button>
          </div>
        </div>
      </section>

      <style>{`.scrollbar-hidden::-webkit-scrollbar { display: none; } .scrollbar-hidden { -ms-overflow-style: none; scrollbar-width: none; }`}</style>

      {/* FILA 1: TOP 5 */}
      <section className="relative z-20 pl-12 md:pl-20 pr-4 pb-4 mt-4 md:-mt-20">
        <h3 className="text-base md:text-lg font-bold tracking-wide text-slate-200 mb-1 pl-4 drop-shadow-md">
          Las 5 series más vistas por nosotros esta semana
        </h3>
        <div className="flex space-x-4 md:space-x-6 overflow-x-auto py-2 px-4 scrollbar-hidden scroll-smooth">
          {catalogData.map((item, index) => {
            const isActive = item.id === activeItem.id;
            return (
              <div key={item.id} onClick={() => setActiveItem(item)} className="flex-none flex items-end relative w-56 h-36 md:w-72 md:h-44 cursor-pointer group">
                <span className="text-7xl md:text-[10rem] font-black leading-none tracking-tighter text-transparent select-none transition-all duration-300 absolute left-0 bottom-[-10px] md:bottom-[-20px] z-10" style={{ WebkitTextStroke: "2px rgba(128,128,128,0.3)", textShadow: isActive ? "0 0 20px rgba(229,9,20,0.3)" : "none" }}>{index + 1}</span>
                <div className={`w-36 h-24 md:w-52 md:h-32 rounded-md overflow-hidden relative ml-14 md:ml-20 transition-all duration-300 ease-out transform shadow-lg flex flex-col justify-end ${isActive ? 'scale-105 md:scale-110 border-2 border-white ring-4 ring-black/50 z-30 brightness-110 shadow-[0_12px_24px_rgba(0,0,0,0.9)]' : 'opacity-60 group-hover:opacity-90 scale-100 z-20'}`}>
                  <img src={item.bgImage} alt={item.title} className="w-full h-full object-cover absolute inset-0 z-0" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent z-10"></div>
                  <div className="absolute top-1.5 left-2 text-[8px] md:text-[9px] text-red-600 font-black bg-black/70 px-1.5 rounded-sm z-20">N</div>
                  
                  <div className="absolute bottom-5 left-3 right-3 z-20">
                    <p className="text-[9px] md:text-xs font-bold tracking-wide uppercase truncate drop-shadow">{item.title}</p>
                  </div>

                  <div className="w-full bg-[#E50914] py-0.5 text-center z-20 shadow-inner">
                    <span className="text-[8px] md:text-[9px] font-extrabold text-white tracking-wider block">
                      Recién agregado
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* FILA 2: FRASES */}
      <section className="relative z-20 pl-12 md:pl-20 pr-4 pb-20 mt-2">
        <h3 className="text-base md:text-lg font-bold tracking-wide text-slate-200 mb-2 pl-4 drop-shadow-md">Comedias románticas (Basadas en la vida real)</h3>
        <div className="flex space-x-4 md:space-x-6 overflow-x-auto py-2 px-4 scrollbar-hidden scroll-smooth">
          {frasesNuestras.map((item, idx) => (
            <div key={idx} className="flex-none w-48 h-28 md:w-60 md:h-32 rounded-lg p-5 md:p-6 bg-gradient-to-br from-zinc-900 to-black border border-white/10 flex flex-col justify-between shadow-xl hover:border-[#E50914] transition-all duration-300 transform hover:scale-105 cursor-default group">
              <div className="flex justify-between items-center w-full"><span className="text-[9px] uppercase tracking-widest font-bold text-[#E50914]">{item.label}</span><span className="text-xs opacity-40 group-hover:opacity-100 group-hover:text-[#E50914] transition duration-300">🍿</span></div>
              <p className="text-sm md:text-base font-serif italic text-white font-medium tracking-tight pr-2 leading-snug drop-shadow-md">"{item.frase}"</p>
              <div className="text-[10px] text-slate-400 flex items-center space-x-2"><span className="text-green-400 font-bold">100% Match</span><span>• Exclusivo</span></div>
            </div>
          ))}
        </div>
      </section>

      {/* LAS 3 FILAS DE FOTOS VERTICALES AL ESTILO NETFLIX */}
      <GaleriaVertical 
        tituloRow="Comedias románticas (Nuestros momentos favoritos)" 
        datosFotos={fotosCitas} 
        onFotoClick={manejarAbrirFoto}
      />

      <GaleriaVertical 
        tituloRow="Tesoros para ti: Aventuras y Escapes" 
        datosFotos={fotosViajes} 
        onFotoClick={manejarAbrirFoto}
      />

      <GaleriaVertical 
        tituloRow="Continuar viendo contenido de nuestro día a día" 
        datosFotos={fotosDetalles} 
        onFotoClick={manejarAbrirFoto}
      />
      {/* ========================================================================= */}
      {/* REPRODUCTOR DE VIDEO INTEGRADO (MAXIMIZADO Y EN NEGRO ABSOLUTO)           */}
      {/* ========================================================================= */}
      {isPlaying && (
        <div className="fixed inset-0 bg-black z-[999999] flex items-center justify-center p-0 animate-fade-in">
          {/* Botón de cerrar premium que flota limpio sobre el fondo negro */}
          <button 
            onClick={() => setIsPlaying(false)} 
            className="absolute top-6 right-6 text-zinc-400 hover:text-white transition bg-zinc-900/40 w-12 h-12 rounded-full flex items-center justify-center border border-white/5 z-50 shadow-2xl text-2xl font-light cursor-pointer"
          >
            ✕
          </button>
          
          {/* Contenedor expandido a max-w-6xl, sin bordes raros y fondo negro puro */}
          <div className="relative w-full max-w-6xl aspect-video bg-black z-10">
            
            {/* Contenedor del Iframe responsivo 16:9 */}
            <div className="relative z-10 w-full h-full">
            <iframe 
            src="https://player.vimeo.com/video/1196543815?autoplay=1&title=0&byline=0&portrait=0&transparent=0&dnt=1" 
            className="absolute top-0 left-0 w-full h-full"
            frameBorder="0" 
            allow="autoplay; fullscreen; picture-in-picture" 
            allowFullScreen
            title={activeItem.title}
            />
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL GLOBAL PREMIUM DE FOTOS                                             */}
      {/* ========================================================================= */}
      {fotoSeleccionada && (
        <div className="fixed inset-0 bg-black/85 flex items-center justify-center p-4 backdrop-blur-md animate-fade-in animate-slide-up" style={{ zIndex: 999999 }}>
          <div className="absolute inset-0 z-0" onClick={() => setFotoSeleccionada(null)}></div>

          <button 
            onClick={() => setFotoSeleccionada(null)} 
            className="absolute top-6 right-6 text-white hover:text-[#E50914] transition bg-zinc-900/60 w-12 h-12 rounded-full flex items-center justify-center border border-white/10 z-50 shadow-2xl cursor-pointer"
          >
            <X size={22} />
          </button>

          <div className="relative w-full max-w-sm md:max-w-md bg-[#181818] rounded-xl overflow-hidden shadow-2xl border border-zinc-800 flex flex-col z-10">
            <div className="relative w-full h-[55vh] md:h-[60vh] bg-black flex items-center justify-center">
              <img src={fotoSeleccionada.imageUrl} alt={fotoSeleccionada.title} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent z-10"></div>
            </div>

            <div className="p-6 relative z-20 bg-[#181818] flex-1">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <span className="text-xs font-bold text-green-400 block mb-1">{fotoSeleccionada.match}</span>
                  <h4 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight leading-none">
                    {fotoSeleccionada.title}
                  </h4>
                </div>
                <div className="flex space-x-2">
                  <button className="w-9 h-9 rounded-full bg-zinc-800 border border-zinc-600 flex items-center justify-center text-white hover:border-white transition">
                    <Heart size={16} fill="white" className="text-white" />
                  </button>
                </div>
              </div>
              <p className="text-zinc-300 text-xs md:text-sm leading-relaxed font-light">{fotoSeleccionada.desc}</p>
              <div className="mt-4 pt-3 border-t border-zinc-800 text-[10px] text-zinc-500 flex items-center space-x-2">
                <span className="border border-zinc-600 px-1 rounded text-zinc-400 font-bold">HD</span>
                <span>Original de Chiquiflix</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Estilos locales para las animaciones fluidas */}
      <style>{`
        .animate-slide-up { animation: slideUp 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        @keyframes slideUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
}