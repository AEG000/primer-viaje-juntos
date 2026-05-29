import React, { useEffect, useRef } from 'react';

export default function NetflixIntroSandbox() {
  const containerRef = useRef(null);
  const initializedRef = useRef(false); // Evita el doble renderizado de React StrictMode

  useEffect(() => {
    if (!containerRef.current || initializedRef.current) return;

    try {
      // Marcar como inicializado para que la segunda ejecución de StrictMode no rompa nada
      initializedRef.current = true;

      containerRef.current.innerHTML = '';
      const shadow = containerRef.current.attachShadow({ mode: 'open' });

      const generateSpansMarkup = (count, prefix) => 
        Array.from({ length: count }, (_, i) => `<span class="${prefix}-${count - i}"></span>`).join('');

      const mainContainer = document.createElement('div');
      mainContainer.id = 'container';

      mainContainer.innerHTML = `
        <div class="netflixintro" data-letter="N">
          <div class="helper-1">
            <div class="effect-brush">${generateSpansMarkup(31, 'fur')}</div>
            <div class="effect-lumieres">${generateSpansMarkup(28, 'lamp')}</div>
          </div>
          <div class="helper-2">
            <div class="effect-brush">${generateSpansMarkup(31, 'fur')}</div>
          </div>
          <div class="helper-3">
            <div class="effect-brush">${generateSpansMarkup(31, 'fur')}</div>
          </div>
          <div class="helper-4">
            <div class="effect-brush">${generateSpansMarkup(31, 'fur')}</div>
          </div>
        </div>
      `;

      // CSS Limpio del CodePen original (Sin bordes fosforescentes de debug)
      const cssRules = [
        "#container { display: flex; flex-direction: column; justify-content: center; align-items: center; width: 100vw; height: 100vh; background-color: #000000; overflow: hidden; }",
        ".netflixintro { display: block; position: relative; width: 300px; height: 300px; overflow: hidden; animation: zoom-in 3.5s ease-in forwards; animation-delay: .5s; }",
        ".netflixintro::before { content: ''; position: absolute; display: block; background-color: #000000; width: 150%; height: 30%; left: -25%; bottom: -27%; border-radius: 50%; z-index: 5; }",
        "[class*='helper-'] { position: absolute; height: 100%; background-color: #e40913; }",
        ".helper-1 { width: 19.5%; left: 22.4%; top: 0; transform: rotate(180deg); animation: fading-lumieres-box 2s forwards .6s; }",
        ".helper-1 .effect-brush { animation: brush-moving 2.5s forwards 1.2s; }",
        ".helper-2 { width: 19.5%; left: 57.8%; top: 0; transform: rotate(180deg); overflow: hidden; }",
        ".helper-2 .effect-brush { animation: brush-moving 2s forwards .5s; }",
        ".helper-3 { width: 19%; height: 150%; left: 40.5%; top: -25%; transform: rotate(-19.5deg); box-shadow: 0px 0px 35px -12px rgba(0, 0, 0, .4); overflow: hidden; z-index: 2; }",
        ".helper-3 .effect-brush { animation: brush-moving 2s forwards .8s; }",
        ".helper-4 { width: 19.5%; left: 22.4%; top: 0; transform: rotate(180deg); opacity: 0; }",
        ".effect-brush { position: absolute; width: 100%; height: 300%; top: 0; overflow: hidden; z-index: 1; }",
        "[class*='fur-'] { display: block; position: absolute; bottom: 0; height: 100%; z-index: 3; }",
        ".fur-1 { left: 0%; width: 3.8%; background: linear-gradient(to bottom, #000 0%, transparent 81%); }",
        ".fur-2 { left: 3.8%; width: 2.8%; background: linear-gradient(to bottom, #000 0%, transparent 62%); }",
        ".fur-3 { left: 6.6%; width: 4.8%; background: linear-gradient(to bottom, #000 0%, transparent 100%); }",
        ".fur-4 { left: 11.4%; width: 4%; background: linear-gradient(to bottom, #000 0%, transparent 100%); }",
        ".fur-5 { left: 15.4%; width: 4%; background: linear-gradient(to bottom, #000 0%, transparent 86%); }",
        ".fur-6 { left: 19.4%; width: 2.5%; background: linear-gradient(to bottom, #000 0%, transparent 89%); }",
        ".fur-7 { left: 21.9%; width: 4%; background: linear-gradient(to bottom, #000 0%, transparent 100%); }",
        ".fur-8 { left: 25.9%; width: 2%; background: linear-gradient(to bottom, #000 0%, transparent 100%); }",
        ".fur-9 { left: 27.9%; width: 4%; background: linear-gradient(to bottom, #000 0%, transparent 95%); }",
        ".fur-10 { left: 31.9%; width: 3.5%; background: linear-gradient(to bottom, #000 0%, transparent 95%); }",
        ".fur-11 { left: 35.4%; width: 2%; background: linear-gradient(to bottom, #000 0%, transparent 95%); }",
        ".fur-12 { left: 37.4%; width: 2.6%; background: linear-gradient(to bottom, #000 0%, transparent 95%); }",
        ".fur-13 { left: 40%; width: 6%; background: linear-gradient(to bottom, #000 0%, transparent 100%); }",
        ".fur-14 { left: 46%; width: 2%; background: linear-gradient(to bottom, #000 0%, transparent 100%); }",
        ".fur-15 { left: 48%; width: 5.5%; background: linear-gradient(to bottom, #000 0%, transparent 100%); }",
        ".fur-16 { left: 53.5%; width: 3%; background: linear-gradient(to bottom, #000 0%, transparent 95%); }",
        ".fur-17 { left: 56.5%; width: 4.1%; background: linear-gradient(to bottom, #000 0%, transparent 100%); }",
        ".fur-18 { left: 60.6%; width: 2.4%; background: linear-gradient(to bottom, #000 0%, transparent 100%); }",
        ".fur-19 { left: 63%; width: 4%; background: linear-gradient(to bottom, #000 0%, transparent 100%); }",
        ".fur-20 { left: 67%; width: 1.5%; background: linear-gradient(to bottom, #000 0%, transparent 95%); }",
        ".fur-21 { left: 68.5%; width: 2.8%; background: linear-gradient(to bottom, #000 0%, transparent 100%); }",
        ".fur-22 { left: 71.3%; width: 2.3%; background: linear-gradient(to bottom, #000 0%, transparent 100%); }",
        ".fur-23 { left: 73.6%; width: 2.2%; background: linear-gradient(to bottom, #000 0%, transparent 92%); }",
        ".fur-24 { left: 75.8%; width: 1%; background: linear-gradient(to bottom, #000 0%, transparent 100%); }",
        ".fur-25 { left: 76.8%; width: 2.1%; background: linear-gradient(to bottom, #000 0%, transparent 100%); }",
        ".fur-26 { left: 78.9%; width: 4.1%; background: linear-gradient(to bottom, #000 0%, transparent 100%); }",
        ".fur-27 { left: 83%; width: 2.5%; background: linear-gradient(to bottom, #000 0%, transparent 21%); }",
        ".fur-28 { left: 85.5%; width: 4.5%; background: linear-gradient(to bottom, #000 0%, transparent 39%); }",
        ".fur-29 { left: 90%; width: 2.8%; background: linear-gradient(to bottom, #000 0%, transparent 30%); }",
        ".fur-30 { left: 92.8%; width: 3.5%; background: linear-gradient(to bottom, #000 0%, transparent 19%); }",
        ".fur-31 { left: 96.3%; width: 3.7%; background: linear-gradient(to bottom, #000 0%, transparent 37%); }",
        ".effect-lumieres { position: absolute; width: 100%; height: 100%; opacity: 0; animation: showing-lumieres 2s forwards 1.6s; z-index: 2; }",
        "[class*='lamp-'] { position: absolute; display: block; height: 100%; box-shadow: 0px 0px 10px 0px rgba(228, 9, 19, 0.75); background: var(--color); }",
        "[class*='lamp-']::before { position: absolute; content: ' '; display: block; width: 100%; height: 100%; background: var(--color); box-shadow: 0px 0px 10px 0px rgba(228, 9, 19, 0.75); }",
        ".lamp-1 { --color: #ff0100; left: 0.7%; width: 1%; animation: lumieres-moving-left 5s forwards; }",
        ".lamp-2 { --color: #ffde01; left: 2.2%; width: 1.4%; animation: lumieres-moving-right 5.2s forwards; }",
        ".lamp-3 { --color: #ff00cc; left: 5.8%; width: 2.1%; animation: lumieres-moving-left 4.8s forwards; }",
        ".lamp-4 { --color: #04fd8f; left: 10.1%; width: 2%; animation: lumieres-moving-right 5.5s forwards; }",
        ".lamp-5 { --color: #ff0100; left: 12.9%; width: 1.4%; animation: lumieres-moving-left 5s forwards; }",
        ".lamp-6 { --color: #ff9600; left: 15.3%; width: 2.8%; animation: lumieres-moving-right 4.9s forwards; }",
        ".lamp-7 { --color: #0084ff; left: 21.2%; width: 2.5%; animation: lumieres-moving-left 5.3s forwards; }",
        ".lamp-8 { --color: #f84006; left: 25%; width: 2.5%; animation: lumieres-moving-right 5.1s forwards; }",
        ".lamp-9 { --color: #ffc601; left: 30.5%; width: 3%; animation: lumieres-moving-left 5.4s forwards; }",
        ".lamp-10 { --color: #ff4800; left: 36.3%; width: 3%; animation: lumieres-moving-right 4.7s forwards; }",
        ".lamp-11 { --color: #fd0100; left: 41%; width: 2.2%; animation: lumieres-moving-left 5s forwards; }",
        ".lamp-12 { --color: #01ffff; left: 44.2%; width: 2.6%; animation: lumieres-moving-right 5.2s forwards; }",
        ".lamp-13 { --color: #ffc601; left: 51.7%; width: 0.5%; animation: lumieres-moving-left 4.6s forwards; }",
        ".lamp-14 { --color: #ffc601; left: 52.1%; width: 1.8%; animation: lumieres-moving-right 5s forwards; }",
        ".lamp-15 { --color: #0078fe; left: 53.8%; width: 2.3%; animation: lumieres-moving-left 5.1s forwards; }",
        ".lamp-16 { --color: #0080ff; left: 57.2%; width: 2%; animation: lumieres-moving-right 4.9s forwards; }",
        ".lamp-17 { --color: #ffae01; left: 62.3%; width: 2.9%; animation: lumieres-moving-left 5.3s forwards; }",
        ".lamp-18 { --color: #ff00bf; left: 65.8%; width: 1.7%; animation: lumieres-moving-right 5.2s forwards; }",
        ".lamp-19 { --color: #a601f4; left: 72.8%; width: 0.8%; animation: lumieres-moving-left 4.8s forwards; }",
        ".lamp-20 { --color: #f30b34; left: 74.3%; width: 2%; animation: lumieres-moving-right 5.1s forwards; }",
        ".lamp-21 { --color: #ff00bf; left: 79.8%; width: 2%; animation: lumieres-moving-left 5s forwards; }",
        ".lamp-22 { --color: #04fd8f; left: 78.2%; width: 2%; animation: lumieres-moving-right 4.7s forwards; }",
        ".lamp-23 { --color: #01ffff; left: 78.5%; width: 2%; animation: lumieres-moving-left 5.2s forwards; }",
        ".lamp-24 { --color: #a201ff; left: 85.3%; width: 1.1%; animation: lumieres-moving-right 5.3s forwards; }",
        ".lamp-25 { --color: #ec0014; left: 86.9%; width: 1.1%; animation: lumieres-moving-left 4.9s forwards; }",
        ".lamp-26 { --color: #0078fe; left: 88.8%; width: 2%; animation: lumieres-moving-right 5.1s forwards; }",
        ".lamp-27 { --color: #ff0036; left: 92.4%; width: 2.4%; animation: lumieres-moving-left 5.4s forwards; }",
        ".lamp-28 { --color: #06f98c; left: 96.2%; width: 2.1%; animation: lumieres-moving-right 5s forwards; }",
        "@keyframes brush-moving { 0% { transform: translateY(0); } 100% { transform: translateY(-100%); } }",
        "@keyframes lumieres-moving-right { 0% { transform: translate(0); } 40% { transform: translate(-10px) scaleX(1); } 50% { transform: translate(-60px); } 100% { transform: translate(-120px) scaleX(3); } }",
        "@keyframes lumieres-moving-left { 0% { transform: translate(0); } 40% { transform: translate(10px) scaleX(1); } 50% { transform: translate(60px); } 100% { transform: translate(120px) scaleX(3); } }",
        "@keyframes zoom-in { 0% { transform: scale(1); filter: blur(0px); } 100% { transform: scale(22); filter: blur(16px); opacity: 0; } }",
        "@keyframes showing-lumieres { 0% { opacity: 0; } 100% { opacity: 1; } }",
        "@keyframes fading-lumieres-box { 0% { background-color: rgba(228, 9, 19, 1); } 100% { background-color: rgba(228, 9, 19, 0); } }"
      ];

      const styleTag = document.createElement('style');
      styleTag.textContent = cssRules.join("\n");
      shadow.appendChild(styleTag);
      shadow.appendChild(mainContainer);
    } catch (err) {
      console.error("❌ CRÍTICO:", err);
    }
  }, []);

  return (
    <div 
      ref={containerRef} 
      style={{ 
        width: '100vw', 
        height: '100vh', 
        backgroundColor: '#000000', 
        margin: 0, 
        padding: 0,
        position: 'fixed',
        inset: 0,
        zIndex: 99999
      }} 
    />
  );
}