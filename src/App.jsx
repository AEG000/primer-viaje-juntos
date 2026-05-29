import React, { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import Hero from './sections/Hero';
import Monterrey from './sections/Monterrey';
import VallartaArrival from './sections/VallartaArrival';
import HotelSantuario from './sections/HotelSantuario';
import Itinerario from './sections/Itinerario';
import Confirmacion from './sections/Confirmacion';
import NetflixChiqui from './components/NetflixChiqui'; 
// 1. Importamos el nuevo componente Sandbox que creaste con el terreno de CodePen
import NetflixIntroSandbox from './components/NetflixIntroSandbox'; 

export default function App() {
  const [appState, setAppState] = useState('loading');
  // Nuevo estado para controlar si el intro cinemático ya terminó
  const [showNetflixIntro, setShowNetflixIntro] = useState(true);

  // Detecta en tiempo real si estás en la ruta secreta
  const esRutaNetflix = window.location.pathname === '/netflix';

  // Efecto para apagar el intro después de 4 segundos (3.5s animación + 0.5s delay del CodePen)
  useEffect(() => {
    if (esRutaNetflix) {
      const timer = setTimeout(() => {
        setShowNetflixIntro(false);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [esRutaNetflix]);

  // RUTA SECRETA: Si entras a /netflix, manejamos el intro y luego Chiquiflix directo
  if (esRutaNetflix) {
    if (showNetflixIntro) {
      // Muestra primero el terreno preparado con la animación fiel de Stylus
      return <NetflixIntroSandbox />;
    }
    // Una vez que pasan los 4s, se desmonta el sandbox y carga tu componente final sin interferencias
    return <NetflixChiqui />;
  }

  // FLUJO NORMAL: Si entran sin el /netflix, corre tu invitación de Vallarta como siempre
  const handleStartExperience = () => {
    setAppState('started');
  };

  return (
    <main className="relative w-full min-h-screen bg-[#FAF9F6] overflow-x-hidden">
      
      {appState !== 'started' && (
        <Preloader 
          appState={appState} 
          setAppState={setAppState} 
          onStart={handleStartExperience} 
        />
      )}

      {appState === 'started' && (
        <div className="fade-in-content">
          <Hero />
          <Monterrey />
          <VallartaArrival />
          <HotelSantuario />
          <Itinerario />
          <Confirmacion />
        </div>
      )}

    </main>
  );
}