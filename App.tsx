
import React, { useState, useEffect } from 'react';
import { Heart, ChevronRight } from 'lucide-react';
import FloatingHearts from './components/FloatingHearts';
import { AppState } from './types';
import confetti from 'canvas-confetti';

const App: React.FC = () => {
  const [state, setState] = useState<AppState>('INTRO');
  const [noButtonPos, setNoButtonPos] = useState({ top: 'auto', left: 'auto' });

  useEffect(() => {
    // Force instant scroll to top of the window
    window.scrollTo(0, 0);
    document.documentElement.scrollTo(0, 0);
    document.body.scrollTo(0, 0);
  }, [state]);

  const triggerConfetti = () => {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 35, spread: 360, ticks: 60, zIndex: 10000 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({ 
        ...defaults, 
        particleCount, 
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } 
      });
      confetti({ 
        ...defaults, 
        particleCount, 
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } 
      });
    }, 250);
  };

  const handleAccept = () => {
    setState('CELEBRATION');
    triggerConfetti();
  };

  const moveNoButton = () => {
    // Usando un rango más amplio para asegurar movimientos "largos" por toda la pantalla
    const x = Math.random() * 80 + 10; 
    const y = Math.random() * 80 + 10;
    setNoButtonPos({ top: `${y}%`, left: `${x}%` });
  };

  const btnClass = "px-10 py-4 bg-rose-600 text-white rounded-full font-semibold text-lg shadow-lg hover:bg-rose-700 transition-all duration-300 hover:shadow-xl active:scale-95 flex items-center gap-3 mx-auto";
  const btnSecondaryClass = "px-10 py-4 bg-rose-800 text-white rounded-full font-semibold text-lg shadow-lg hover:bg-rose-900 transition-all duration-300 hover:shadow-xl active:scale-95 flex items-center gap-3 mx-auto";

  return (
    <div className="min-h-screen w-full relative flex flex-col items-center p-6 py-24 overflow-x-hidden max-w-full">
      <FloatingHearts />

      <div className="relative z-10 w-full max-w-4xl space-y-32">
        
        {state === 'INTRO' && (
          <div key="intro" className="glass-premium rounded-[3rem] p-10 md:p-20 text-center animate-reveal-scale relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-full shadow-xl border border-rose-50">
              <Heart className="w-12 h-12 text-rose-500" fill="#f43f5e" />
            </div>
            
            {/* Se aumentó el margen superior (mt-12) para que el texto no quede pegado al icono */}
            <h1 className="text-3xl md:text-6xl font-elegant font-black text-rose-950 mt-12 mb-12 animate-reveal-up delay-100 uppercase tracking-tight leading-tight">
              HOLA MI NIÑA HERMOSA: <br/>
              <span className="text-rose-600 block mt-4 text-2xl md:text-4xl normal-case">HICE ESTE DETALLE PARA TI CON MUCHO AMOR💕</span>
            </h1>
            
            <div className="space-y-10 text-rose-900 leading-relaxed text-lg md:text-xl font-body font-semibold animate-reveal-up delay-200">
              <p>Quería decirte primeramente que te amo mucho y que eres la niña de mi corazón, lo que siento por ti no lo cambio por nada en el mundo.</p>
              <p>Sé que han pasado muchas cosas y sé que tal vez ahora te sientes un poco diferente, pero no quiero que dudes nunca de cuánto te amo mi dormilona.</p>
              <p>Tal vez no podamos pasar juntos como quisiéramos, pero el hecho de saber que en un día tan especial como el 14 de febrero te tendré conmigo me hace el hombre más feliz del mundo, así no te tenga de frente.</p>
              <p>Y si tú me lo permites quiero invitarte a que seas mi san Valentín, así estemos a la distancia quiero pasar el día hablando contigo o hacer una llamadita en la noche, así sean 5 minutos permíteme pasarlo contigo.</p>
            </div>

            <div className="flex justify-center mt-16 animate-reveal-up delay-300">
              <button onClick={() => setState('MEMORIES')} className={btnClass}>
                Nuestra historia...
              </button>
            </div>
          </div>
        )}

        {state === 'MEMORIES' && (
          <div key="memories" className="space-y-48 pb-60 animate-reveal-scale">
            <div className="flex flex-col items-center gap-16">
              <div className="image-card-premium w-full max-w-2xl">
                <img src="https://i.imgur.com/lTQjxL8.jpeg" className="w-full h-auto object-cover rounded-[1.5rem]" />
              </div>
              <div className="text-center max-w-3xl px-6">
                <p className="text-xl md:text-4xl font-elegant text-rose-950 leading-snug font-medium">
                  "Siempre tuve presente que te amaría mi niña, desde el dia que empezamos a conocernos, porque desde ese momento sabía que tu valías la pena y que eras la niña más hermosa que mis ojos habian visto, con ese corazón tan lindo que tienes."
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-16">
              <div className="image-card-premium w-full max-w-2xl">
                <img src="https://i.imgur.com/8mKFLhL.jpeg" className="w-full h-auto object-cover rounded-[1.5rem]" />
              </div>
              <div className="space-y-12 text-center max-w-3xl font-body text-lg md:text-xl text-rose-900 px-8 leading-relaxed font-semibold">
                <p>"A dia de hoy sigo aquí corazoncita, esforzándome por ti y por este gran amor que te tengo ❤️. Porque nunca mentí con todo lo que te dije, ni mucho menos con lo que siento por ti, nunca mentí con quererte en mi vida y esforzarme muchisimo por ti..."</p>
                <p className="font-bold text-rose-950 text-2xl md:text-4xl leading-tight">"...nunca te mentí cuando te prometí que nada malo volvería a pasar, porque todo lo que te digo es sincero y real y siempre te lo he demostrado mi amor."</p>
              </div>
            </div>

            <div className="flex justify-center">
              <button onClick={() => setState('RECOLLECTIONS')} className={btnSecondaryClass}>
                Mirar más recuerdos <ChevronRight size={20} />
              </button>
            </div>
          </div>
        )}

        {state === 'RECOLLECTIONS' && (
          <div key="recollections" className="space-y-48 pb-60 animate-reveal-scale">
            <div className="flex flex-col items-center gap-16">
              <div className="image-card-premium w-full max-w-2xl">
                <img src="https://i.imgur.com/9kXXORJ.jpeg" className="w-full h-auto object-cover rounded-[1.5rem]" />
              </div>
              <div className="text-center max-w-3xl space-y-10 px-6">
                <h3 className="text-3xl md:text-5xl font-elegant font-bold text-rose-950">¿Recuerdas este dibujito que te hice?</h3>
                <p className="text-lg md:text-xl text-rose-900 font-body leading-relaxed font-semibold">
                  Para mi el demostrarte cuanto te amo es lo más importante en mi vida, siempre quise demostrarte de muchas maneras lo que sentía por ti, en cada pequeño detalle, en cada pequeña palabra, en cada pequeña cosa trataba de demostrarte lo mucho que te amo, porque para mi es muy importante hacerte sentir amada.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-20">
              <div className="image-card-premium w-full max-w-4xl">
                <img src="https://i.imgur.com/C3StzkK.jpeg" className="w-full h-auto object-cover rounded-[1.5rem]" />
              </div>
              <div className="text-center space-y-16 w-full">
                <h4 className="text-4xl md:text-7xl font-elegant font-bold text-rose-950">9 de noviembre del 2025</h4>
                <p className="text-lg md:text-xl text-rose-900 font-body max-w-3xl mx-auto leading-relaxed font-semibold">
                  El dia que por fin nos veríamos. Recuerdo lo emocionados que estábamos por poder vernos, aunque me dejaste plantado jajaja.
                </p>
                <div className="w-full max-w-md mx-auto image-card-premium shadow-xl">
                  <img src="https://i.imgur.com/6cBiSBH.jpeg" className="w-full h-auto object-cover rounded-[1rem]" />
                </div>
                <div className="bg-white/90 p-12 md:p-16 rounded-[3rem] shadow-sm max-w-3xl mx-auto border border-rose-50">
                  <p className="text-xl md:text-3xl font-elegant text-rose-950 leading-tight font-medium">
                    "Pero valió la pena volver a ir y verte esos ojitos tan hermosos que tienes mi niña, aún recuerdo cuando te vi venir hacia mi, en esos momentos sentía que mi corazón se iba a salir, por fin estaba viendo a la niña que más amaba en este mundo, por fin te estaba viendo a ti 🥺."
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-16">
              <div className="image-card-premium w-full max-w-2xl">
                <img src="https://i.imgur.com/bD6h4Ut.jpeg" className="w-full h-auto object-cover rounded-[1.5rem]" />
              </div>
              <div className="text-center max-w-3xl px-8">
                <p className="text-xl md:text-3xl font-elegant text-rose-950 leading-relaxed font-medium">
                  Porque para mi el proceso de conocerte ha sido lo mejor que me ha pasado en la vida, me importa saber que te molesta, que te gusta o disgusta, cuales son tus cosas favoritas o lugares favoritos, porque para mi no eres ningún pasatiempo o momento, eres el amor de mi vida y la niña con la que quisiera estar por el resto de mi vida, y quiero dia a dia seguir escuchándote más y entendiéndote, porque te amo 💕
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <button onClick={() => setState('STRENGTH')} className={btnClass}>
                Superando todo... <ChevronRight size={20} />
              </button>
            </div>
          </div>
        )}

        {state === 'STRENGTH' && (
          <div key="strength" className="space-y-48 pb-60 animate-reveal-scale">
            <div className="flex flex-col items-center gap-16">
              <div className="image-card-premium w-full max-w-2xl">
                <img src="https://i.imgur.com/578mQPt.jpeg" className="w-full h-auto object-cover rounded-[1.5rem]" />
              </div>
              <div className="text-center max-w-3xl px-6">
                <p className="text-lg md:text-2xl text-rose-900 font-body leading-relaxed font-semibold">
                  Sé que muchas veces hemos pasado por momentos difíciles, circunstancias que han sido muy costosas para nosotros, quizá injustamente o a veces sin querer. Momentos donde quizá pensamos que nuestro amor acabaría ahí.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-16">
              <div className="image-card-premium w-full max-w-2xl">
                <img src="https://i.imgur.com/wNtylOE.jpeg" className="w-full h-auto object-cover rounded-[1.5rem]" />
              </div>
              <div className="text-center max-w-3xl px-6">
                <p className="text-lg md:text-2xl text-rose-900 font-body leading-relaxed font-semibold">
                  Pero sin importar que tan fuerte o grande fuera el problema o la circunstancia, nuestro amor siempre se mantuvo firme, siempre luchamos por lo que más queremos, porque lo que sentimos es tan grande y real que podemos contra todo lo que quiera apagar nuestro amor.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-16">
              <div className="image-card-premium w-full max-w-2xl">
                <img src="https://i.imgur.com/KWTpUsT.jpeg" className="w-full h-auto object-cover rounded-[1.5rem]" />
              </div>
              <div className="text-center max-w-3xl px-8">
                <p className="text-2xl md:text-4xl font-elegant text-rose-950 leading-tight font-bold">
                  como dices tu mi niña, estamos dispuestos a pasar de todo, pero solo si es juntos ❤️
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <button onClick={() => setState('SHARED_MOMENTS')} className={btnSecondaryClass}>
                Momentos hermosos... <ChevronRight size={20} />
              </button>
            </div>
          </div>
        )}

        {state === 'SHARED_MOMENTS' && (
          <div key="shared_moments" className="space-y-48 pb-60 animate-reveal-scale">
            <div className="flex flex-col items-center gap-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
                <div className="image-card-premium">
                  <img src="https://i.imgur.com/m3vl5Cs.jpeg" className="w-full h-auto object-cover rounded-[1.2rem]" />
                </div>
                <div className="image-card-premium">
                  <img src="https://i.imgur.com/w86Ymhs.jpeg" className="w-full h-auto object-cover rounded-[1.2rem]" />
                </div>
              </div>
              <div className="text-center max-w-4xl px-6 space-y-12">
                <p className="text-lg md:text-2xl text-rose-900 font-body leading-relaxed font-semibold">
                  sin importar todo lo que haya pasado, siempre hemos estado juntos, siempre hemos compartido momentos hermosos y felices, tu haz sido la niña que me ha llenado el corazon de alegría, y yo he sido el niño que siempre ha buscado hacerte sonreír.
                </p>
                <p className="text-3xl md:text-6xl font-elegant text-rose-950 font-bold tracking-tight">
                  Nuestro amor es y siempre será eterno 💕
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <button onClick={() => setState('LETTER')} className={btnClass}>
                De mi para ti... <ChevronRight size={20} />
              </button>
            </div>
          </div>
        )}

        {state === 'LETTER' && (
          <div key="letter" className="space-y-48 pb-60 animate-reveal-scale">
            <div className="flex flex-col items-center gap-16">
              <div className="image-card-premium w-full max-w-3xl">
                <img src="https://i.imgur.com/lkrILxB.jpeg" alt="Nicole" className="w-full h-auto object-cover rounded-[1.5rem]" />
              </div>
              
              <div className="glass-premium rounded-[3rem] p-10 md:p-20 max-w-4xl w-full border border-rose-50 shadow-xl">
                <h2 className="text-3xl md:text-5xl font-elegant font-black text-rose-950 mb-12 border-b-2 border-rose-100 pb-6 inline-block">
                  Nicole Solano Villegas
                </h2>
                
                <div className="space-y-10 text-rose-900 text-lg md:text-xl font-body leading-relaxed font-semibold text-left">
                  <p>Quiero que sepas que eres la niña más grandiosa que he conocido en toda mi vida, No hay palabras para explicar lo que tu me haces sentir, eres la niña con el corazón más hermoso y puro, siempre me ha enamorado tu forma de querer y amar, esa manera tan sincera de hacerlo sin miedo, quiero que sepas lo mucho que me gustas y lo mucho que te amo, eres la niña de mi ojos, la niña de mi corazón, la niña de mi vida entera, quiero pasar el resto de mis años junto a ti, poder envejecer a tu lado.</p>
                  
                  <p>Desde el fondo de mi corazón te escribo estas palabras mientras mi mente no para de pensar en ti, los dias pasan y yo sigo aquí viéndote como la niña más hermosa del planeta 🪐, permíteme seguir haciéndote la niña más feliz de todas mi cielo, poder seguir dándote ese amor que tanto mereces, permíteme seguir amándote.</p>
                  
                  <p>Me siento feliz de haber conocido a esa niña tan especial y encantadora, tan dulce y tan brillante, tan hermosa y tan perfecta ✨.</p>
                  
                  <p>Quiero quedarme toda la vida junto a ti mi amor, y cada día poder decirte lo mucho que te amo. Somos el uno para el otro y estoy seguro que estaremos juntos por el resto de la vida, porque nuestro amor es muy grande mi niña, eres la niña con el corazón más grande y valiente, por eso nuestra amor nunca acabará, por eso seremos tú y yo, por siempre y para siempre mi vida. Hasta que la muerte nos separe 💕</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <button onClick={() => setState('INVITATION')} className={btnClass}>
                Una última cosa... <Heart fill="currentColor" size={20} />
              </button>
            </div>
          </div>
        )}

        {state === 'INVITATION' && (
          <div key="invitation" className="glass-premium rounded-[3rem] p-12 md:p-24 text-center animate-reveal-scale flex flex-col justify-center min-h-[60vh] border-rose-50 relative">
            <h2 className="text-5xl md:text-7xl font-elegant font-black text-rose-600 mb-16 leading-tight">
              ¿Aceptas ser mi San Valentín?
            </h2>
            <div className="flex flex-col md:flex-row gap-12 justify-center items-center relative z-10 min-h-[250px] w-full">
              <button 
                onClick={handleAccept} 
                className="px-14 py-5 bg-rose-600 text-white rounded-full font-bold text-2xl shadow-lg hover:bg-rose-700 transition-all active:scale-95"
              >
                ¡SÍ, ACEPTO! ❤️
              </button>
              <button 
                onMouseEnter={moveNoButton} 
                onClick={moveNoButton} 
                style={{ 
                  position: noButtonPos.top === 'auto' ? 'relative' : 'absolute', 
                  top: noButtonPos.top, 
                  left: noButtonPos.left,
                  transition: 'all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)'
                }} 
                className="px-10 py-4 bg-white text-rose-600 border-2 border-rose-200 rounded-full font-semibold text-lg hover:bg-rose-50 shadow-sm whitespace-nowrap"
              >
                No...
              </button>
            </div>
          </div>
        )}

        {state === 'CELEBRATION' && (
          <div key="celebration" className="glass-premium rounded-[4rem] p-12 md:p-24 text-center animate-reveal-scale flex flex-col items-center justify-center min-h-[70vh]">
            <div className="space-y-12 max-w-3xl">
              <Heart className="w-20 h-20 text-rose-600 mx-auto animate-pulse" fill="#e11d48" />
              
              <p className="text-2xl md:text-4xl text-rose-950 font-elegant leading-relaxed font-bold">
                Muchas gracias por aceptar ser mi San Valentín mi niña, desde hoy en adelante siempre lo serás mi amor. Te amo!
              </p>
              
              <p className="text-3xl md:text-5xl text-rose-600 font-elegant font-black">
                Eres lo mejor que me ha pasado
              </p>
              
              <div className="w-24 h-px bg-rose-200 mx-auto"></div>
              
              <p className="text-2xl md:text-4xl text-rose-950 font-elegant font-bold">
                Te amo infinitamente, mi vida entera❤️
              </p>

              <div className="flex justify-center mt-16">
                <button onClick={() => setState('INTRO')} className="text-rose-400 font-bold text-lg flex items-center gap-4 hover:text-rose-600 transition-colors">
                  <ChevronRight size={24} className="rotate-180" /> Volver al inicio
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default App;
