import React from 'react';

export default function GaleriaVertical({ tituloRow = "Álbum de fotos", datosFotos = [], onFotoClick }) {
  return (
    <section className="relative z-20 pl-12 md:pl-20 pr-4 pb-12 select-none">
      <h3 className="text-base md:text-lg font-bold tracking-wide text-slate-200 mb-3 pl-4 drop-shadow-md">
        {tituloRow}
      </h3>

      {/* Contenedor con Scroll Horizontal */}
      <div className="flex space-x-4 md:space-x-5 overflow-x-auto py-3 px-4 scrollbar-hidden scroll-smooth">
        {datosFotos && datosFotos.map((photo) => (
          <div
            key={photo.id}
            onClick={() => onFotoClick(photo, datosFotos)} // Le pasa la foto y la fila entera al componente padre
            className="flex-none w-40 h-60 md:w-52 md:h-72 rounded-md overflow-hidden relative cursor-pointer group transition-all duration-300 ease-out transform hover:scale-105 hover:z-30 border border-white/5 shadow-[0_8px_16px_rgba(0,0,0,0.5)] hover:border-white/40"
          >
            <img 
              src={photo.imageUrl} 
              alt={photo.title} 
              className="w-full h-full object-cover absolute inset-0 z-0 group-hover:brightness-110 transition duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10 opacity-80 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute top-2 left-2.5 text-[9px] md:text-[10px] text-red-600 font-black bg-black/60 px-1.5 py-0.5 rounded-sm z-20 shadow-sm">
              N
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-3 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <span className="text-[7px] md:text-[8px] font-extrabold text-[#E50914] uppercase tracking-widest block mb-0.5">
                {photo.category}
              </span>
              <p className="text-[10px] md:text-xs font-bold text-white truncate drop-shadow mb-1">
                {photo.title}
              </p>
              <div className="flex items-center space-x-2 text-[8px] md:text-[9px] text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-green-400 font-bold">{photo.match}</span>
                <span>• Ver foto</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}