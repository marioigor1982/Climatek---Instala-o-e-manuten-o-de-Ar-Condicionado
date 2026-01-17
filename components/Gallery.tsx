
import React from 'react';

const photos = [
  'https://plus.unsplash.com/premium_photo-1683134512538-7b390d0adc9e?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1682126012378-859ca7a9f4cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29uc2VydG8lMjBkZSUyMGFyJTIwY29uZGljaW9uYWRvfGVufDB8fDB8fHww',
  'https://plus.unsplash.com/premium_photo-1682126009570-3fe2399162f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29uc2VydG8lMjBkZSUyMGFyJTIwY29uZGljaW9uYWRvfGVufDB8fDB8fHww',
  'https://images.unsplash.com/photo-1718203862467-c33159fdc504?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1678766819262-cdc490bfd0d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGNvbnNlcnRvJTIwZGUlMjBhciUyMGNvbmRpY2lvbmFkb3xlbnwwfHwwfHx8MA%3D%3D',
  'https://media.istockphoto.com/id/2205544787/pt/foto/plumber-repairing-air-conditioner-using-screwdriver.webp?a=1&b=1&s=612x612&w=0&k=20&c=O9LOmpY9eMpSYlYWgYiSRRVuMQc6TrO-N3atXl0Km9o=',
];

const Gallery: React.FC = () => {
  return (
    <div className="container mx-auto px-6 md:px-12">
      <div className="text-center mb-16">
        <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Portfólio</h2>
        <h3 className="text-4xl md:text-5xl font-bold font-header text-blue-900">Nossa Galeria de Fotos</h3>
        <p className="mt-4 text-gray-500 max-w-2xl mx-auto">Confira alguns dos nossos projetos concluídos, desde instalações residenciais simples até complexos sistemas comerciais e manutenções detalhadas.</p>
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {photos.map((src, index) => (
          <div key={index} className="break-inside-avoid relative group overflow-hidden rounded-2xl shadow-md transition-all hover:shadow-2xl border border-blue-50">
            <img 
              src={src} 
              alt={`Projeto Climatek ${index + 1}`} 
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
              <span className="text-white font-bold border-2 border-white px-6 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform">Ver Detalhes</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
