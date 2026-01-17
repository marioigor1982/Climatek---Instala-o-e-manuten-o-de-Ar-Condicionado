
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle2, Wind } from 'lucide-react';

const slides = [
  {
    video: 'https://ik.imagekit.io/marioigor82/ar%20condicionado.mp4',
    title: 'Conforto Térmico para sua Casa',
    subtitle: 'Instalação profissional de ar condicionado residencial com garantia e eficiência.',
    bullets: ['Rápido', 'Limpo', 'Garantido'],
    tag: 'Residencial'
  },
  {
    video: 'https://ik.imagekit.io/marioigor82/media%20(1).mp4',
    title: 'Soluções Corporativas',
    subtitle: 'Projetos completos para empresas, escritórios e grandes ambientes comerciais.',
    bullets: ['Manutenção Preventiva', 'Alta Performance', 'Contratos PMOC'],
    tag: 'Empresarial'
  },
  {
    image: 'https://i.postimg.cc/HWSxRTLb/Your-paragraph-text.jpg',
    title: 'Tecnologia e Qualidade',
    subtitle: 'Equipamentos modernos e as melhores marcas do mercado para sua climatização.',
    bullets: ['Peças Originais', 'Alta Tecnologia', 'Eficiência Energética'],
    tag: 'Qualidade'
  },
  {
    video: 'https://ik.imagekit.io/marioigor82/ar%20condicionado.mp4',
    title: 'Limpeza e Higienização',
    subtitle: 'Ar puro de verdade. Eliminamos ácaros, fungos e bactérias do seu aparelho.',
    bullets: ['Saúde em dia', 'Economia de Energia', 'Eliminação de Odores'],
    tag: 'Manutenção'
  }
];

const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen min-h-[650px] w-full overflow-hidden bg-blue-950">
      {/* Background Media Layers */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div 
            key={`bg-${index}`}
            className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${
              index === current ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {slide.video ? (
              <video 
                autoPlay 
                muted 
                loop 
                playsInline 
                className="w-full h-full object-cover"
              >
                <source src={slide.video} type="video/mp4" />
              </video>
            ) : (
              <img 
                src={slide.image} 
                className="w-full h-full object-cover" 
                alt={slide.title}
              />
            )}
          </div>
        ))}
        
        {/* Overlays for contrast and "cold" feel */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/40 to-transparent"></div>
        <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay"></div>
      </div>

      {/* Content Slides */}
      <div className="relative z-10 h-full container mx-auto px-6 md:px-12 flex flex-col justify-center items-start text-white">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute transition-all duration-1000 ease-in-out transform ${
              index === current 
                ? 'opacity-100 translate-x-0 scale-100' 
                : 'opacity-0 -translate-x-12 scale-95 pointer-events-none'
            }`}
          >
            <div className="max-w-3xl">
              <div className="flex items-center space-x-2 mb-6">
                <span className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-widest shadow-lg flex items-center">
                  <Wind className="w-4 h-4 mr-2 animate-pulse" />
                  {slide.tag}
                </span>
                <span className="text-blue-200 text-sm font-semibold uppercase tracking-tighter opacity-70">
                  Climatek Soluções
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-header mb-6 leading-[1.1] drop-shadow-2xl">
                {slide.title.split(' ').map((word, i) => (
                  <span key={i} className={i % 2 !== 0 ? 'text-blue-400' : 'text-white'}>
                    {word}{' '}
                  </span>
                ))}
              </h1>
              
              <p className="text-xl md:text-2xl mb-10 text-blue-50 max-w-xl font-light leading-relaxed drop-shadow-md">
                {slide.subtitle}
              </p>
              
              {/* Flyer-style Bullet Points */}
              <div className="flex flex-wrap gap-4 mb-12">
                {slide.bullets.map((bullet, i) => (
                  <div 
                    key={i} 
                    className="flex items-center space-x-3 bg-white/10 backdrop-blur-xl px-5 py-3 rounded-2xl border border-white/20 shadow-xl hover:bg-white/20 transition-colors"
                  >
                    <div className="bg-blue-500 rounded-full p-1 shadow-inner">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-bold text-sm md:text-base tracking-wide">{bullet}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://wa.me/5511987654321"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-blue-400 transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(59,130,246,0.5)] text-center"
                >
                  CONTRATAR AGORA
                </a>
                <a 
                  href="#servicos" 
                  className="bg-white/10 backdrop-blur-md text-white border-2 border-white/30 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all text-center"
                >
                  Ver Nossos Serviços
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Decorative Snow/Frost Effect */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-900/50 to-transparent pointer-events-none"></div>

      {/* Slide Navigation Controls */}
      <div className="absolute bottom-12 right-6 md:right-12 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 z-20">
        <div className="flex space-x-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`transition-all duration-300 rounded-full ${
                i === current ? 'bg-blue-400 w-10 h-3' : 'bg-white/30 w-3 h-3 hover:bg-white/50'
              }`}
              aria-label={`Ir para slide ${i + 1}`}
            ></button>
          ))}
        </div>
        
        <div className="flex space-x-2">
          <button 
            onClick={prevSlide}
            className="bg-white/10 hover:bg-white/30 p-3 rounded-xl text-white backdrop-blur-md border border-white/10 transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={nextSlide}
            className="bg-white/10 hover:bg-white/30 p-3 rounded-xl text-white backdrop-blur-md border border-white/10 transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
