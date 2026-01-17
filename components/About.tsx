
import React from 'react';
import { Award, Users, Clock, ThumbsUp } from 'lucide-react';

const stats = [
  { icon: <Award className="w-8 h-8" />, label: 'Anos de Experiência', value: '10+' },
  { icon: <Users className="w-8 h-8" />, label: 'Clientes Felizes', value: '2.5k' },
  { icon: <Clock className="w-8 h-8" />, label: 'Atendimentos Rápidos', value: '24h' },
  { icon: <ThumbsUp className="w-8 h-8" />, label: 'Serviços Garantidos', value: '100%' },
];

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-6 md:px-12">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2 relative">
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
            <img 
              src="https://i.postimg.cc/HWSxRTLb/Your-paragraph-text.jpg" 
              alt="Sobre a Climatek" 
              className="w-full h-full object-cover"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-500 rounded-2xl -z-10 rotate-12"></div>
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-sky-400 rounded-full -z-10 blur-xl opacity-50"></div>
        </div>

        <div className="lg:w-1/2">
          <h2 className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-4">Nossa História</h2>
          <h3 className="text-4xl md:text-5xl font-bold font-header mb-8">Especialistas em Criar o Ambiente Perfeito</h3>
          <p className="text-blue-100 text-lg leading-relaxed mb-6 opacity-90">
            A Climatek nasceu da paixão por proporcionar conforto e bem-estar. Com mais de uma década no mercado, nos tornamos referência em soluções de climatização em toda a região.
          </p>
          <p className="text-blue-100 text-lg leading-relaxed mb-10 opacity-80">
            Nossa missão é oferecer serviços de alta qualidade, utilizando tecnologia de ponta e garantindo que cada cliente, seja ele uma residência familiar ou uma grande corporação, receba o melhor atendimento técnico possível.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="flex justify-center text-blue-400 mb-3">
                  {item.icon}
                </div>
                <div className="text-3xl font-bold mb-1">{item.value}</div>
                <div className="text-xs uppercase tracking-wider text-blue-300 font-semibold">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
