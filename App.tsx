
import React, { useState, useEffect } from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import Services from './components/Services.tsx';
import Gallery from './components/Gallery.tsx';
import About from './components/About.tsx';
import Footer from './components/Footer.tsx';
import WhatsAppButton from './components/WhatsAppButton.tsx';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen relative">
      <Header scrolled={scrolled} />
      
      <main className="flex-grow">
        <section id="inicio">
          <Hero />
        </section>

        <section id="servicos" className="py-20 bg-sky-50">
          <Services />
        </section>

        <section id="fotos" className="py-20 bg-white">
          <Gallery />
        </section>

        <section id="sobre" className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
          <About />
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;