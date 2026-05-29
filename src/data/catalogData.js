// src/data/catalogData.js

// 1. Importa tus portadas y recursos igual que hicimos hoy
import portadaHistoria from '../assets/background-hero.png';
import portadaMonterrey from '../assets/background-monterrey.png';
import portadaArrival from '../assets/background-pvr-arrival.png';
import portadaHotel from '../assets/background-hotel.png';
import portadaItinerario from '../assets/background-itinerario.jpg';

// Puedes importar videos locales aquí si los tienes en assets, 
// o usar rutas directas de la carpeta 'public' o URLs.
// Ejemplo: import videoMesesario from '../assets/video-1.mp4';

export const catalogData = [
  {
    id: 1,
    title: "NUESTRA HISTORIA",
    subtitle: "Original de Chiqui",
    category: "Tendencias Ahora",
    match: "99% Match",
    year: "2026",
    duration: "3 Temporadas",
    classification: "Amor Puro",
    desc: "Un recorrido inolvidable por los mejores momentos de nuestra vida juntos. Risas, retos y un amor que no para de crecer día con día.",
    bgImage: portadaHistoria,
    isVideo: false,
    videoUrl: "" // Si tienes video, pones la variable aquí
  },
  {
    id: 2,
    title: "EL DESPEGUE",
    subtitle: "Acción y Aventura",
    category: "Tendencias Ahora",
    match: "98% Match",
    year: "2026",
    duration: "1h 45m",
    classification: "TV-MA",
    desc: "Todo comenzó con la emoción de planear nuestro escape perfecto desde Monterrey. El inicio de una aventura que recordarás para siempre.",
    bgImage: portadaMonterrey,
    isVideo: false,
    videoUrl: ""
  },
  {
    id: 3,
    title: "VALLARTA DESDE EL AIRE",
    subtitle: "Documentales románticos",
    category: "Comedias Románticas",
    match: "95% Match",
    year: "2026",
    duration: "45m",
    classification: "Familia",
    desc: "La espectacular vista aérea de Puerto Vallarta que nos recibió con los brazos abiertos. El paraíso se queda corto al lado de tu sonrisa.",
    bgImage: portadaArrival,
    isVideo: false,
    videoUrl: ""
  },
  {
    id: 4,
    title: "NUESTRO SANTUARIO",
    subtitle: "Drama / Romance",
    category: "Comedias Románticas",
    match: "99% Match",
    year: "2026",
    duration: "1 Temporada",
    classification: "Premium",
    desc: "Check-in en la Master Suite del Gran Venetian. El lugar perfecto para desconectarnos del mundo entero y conectarnos tú y yo frente al mar.",
    bgImage: portadaHotel,
    isVideo: false,
    videoUrl: ""
  },
  {
    id: 5,
    title: "BAJO EL ATARDECER",
    subtitle: "Especiales de San Valentín",
    category: "Favoritos de Marce",
    match: "97% Match",
    year: "2026",
    duration: "2h 10m",
    classification: "Amor Puro",
    desc: "Cinco días perfectos resumidos en un brindis bajo la luz dorada del sol de Vallarta. El comienzo de muchísimos viajes más juntos.",
    bgImage: portadaItinerario,
    isVideo: false,
    videoUrl: ""
  }
];