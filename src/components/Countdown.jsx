import React, { useState, useEffect } from 'react';

export default function Countdown() {
  const TARGET_DATE = new Date('2026-05-29T12:00:00').getTime();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = TARGET_DATE - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num) => String(num).padStart(2, '0');

  return (
    <div className="flex justify-start items-center gap-2 font-mono text-3xl md:text-4xl text-[#115e59] font-bold tracking-wider mt-4">
      
      {/* Bloque Días */}
      <div className="flex flex-col items-center min-w-[65px]">
        <span>{formatNumber(timeLeft.days)}</span>
        <span className="text-xs block text-slate-500 font-sans uppercase tracking-widest mt-1 text-center">Días</span>
      </div>

      <span className="text-slate-400 pb-5">:</span>

      {/* Bloque Horas */}
      <div className="flex flex-col items-center min-w-[65px]">
        <span>{formatNumber(timeLeft.hours)}</span>
        <span className="text-xs block text-slate-500 font-sans uppercase tracking-widest mt-1 text-center">Horas</span>
      </div>

      <span className="text-slate-400 pb-5">:</span>

      {/* Bloque Minutos */}
      <div className="flex flex-col items-center min-w-[65px]">
        <span>{formatNumber(timeLeft.minutes)}</span>
        <span className="text-xs block text-slate-500 font-sans uppercase tracking-widest mt-1 text-center">Minutos</span>
      </div>

      <span className="text-slate-400 pb-5">:</span>

      {/* Bloque Segundos */}
      <div className="flex flex-col items-center min-w-[65px]">
        <span className="text-[#72D2C1]">{formatNumber(timeLeft.seconds)}</span>
        <span className="text-xs block text-slate-500 font-sans uppercase tracking-widest mt-1 text-center">Segs</span>
      </div>

    </div>
  );
}