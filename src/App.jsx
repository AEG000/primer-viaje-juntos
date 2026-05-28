import React, { useState } from 'react';
import Preloader from './components/Preloader';
import Hero from './sections/Hero';
import Monterrey from './sections/Monterrey';
import VallartaArrival from './sections/VallartaArrival';
import HotelSantuario from './sections/HotelSantuario';
import Itinerario from './sections/Itinerario';
import Confirmacion from './sections/Confirmacion'; // <-- Importación

export default function App() {
  const [appState, setAppState] = useState('loading');

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
          <Confirmacion /> {/* <-- Se mantiene el formato 100vh */}
        </div>
      )}

    </main>
  );
}