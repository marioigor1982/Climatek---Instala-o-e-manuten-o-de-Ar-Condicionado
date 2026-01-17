
import React from 'react';
import { Home, Building2, Droplets, Settings2, ShieldCheck, PenTool } from 'lucide-react';

const serviceList = [
  {
    icon: <Home className="w-10 h-10 text-blue-500" />,
    title: 'Instalação Residencial',
    desc: 'Instalamos aparelhos Split, Inverter e Janela na sua casa com total cuidado.'
  },
  {
    icon: <Building2 className="w-10 h-10 text-blue-500" />,
    title: 'Projetos Comerciais',
    desc: 'Climatização para empresas, galpões e lojas com dimensionamento térmico preciso.'
  },
  {
    icon: <Droplets className="w-10 h-10 text-blue-500" />,
    title: 'Limpeza e Higienização',
    desc: 'Remoção de fungos e bactérias para garantir um ar saudável e maior vida útil ao aparelho.'
  },
  {
    icon: <Settings2 className="w-10 h-10 text-blue-500" />,
    title: 'Manutenção Preventiva',
    desc: 'Visitas técnicas periódicas para evitar quebras inesperadas e reduzir consumo de energia.'
  },
  {
    icon: <PenTool className="w-10 h-10 text-blue-500" />,
    title: 'Reparos e Consertos',
    desc: 'Diagnóstico rápido e reparo em compressores, placas eletrônicas e vazamentos.'
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-blue-500" />,
    title: 'Troca de Peças',
    desc: 'Substituição por peças originais com garantia direto de fábrica.'
  }
];

const Services: React.FC = () => {
  return (
    <div className="container mx-auto px-6 md:px-12">
      <div className="text-center mb-16">
        <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">O que fazemos</h2>
        <h3 className="text-4xl md:text-5xl font-bold font-header text-blue-900">Nossos Serviços Especializados</h3>
        <div className="w-20 h-1.5 bg-blue-500 mx-auto mt-6 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {serviceList.map((service, index) => (
          <div 
            key={index}
            className="bg-white p-8 rounded-2xl shadow-sm border border-blue-100 hover:shadow-xl hover:border-blue-400 transition-all group"
          >
            <div className="mb-6 p-4 bg-sky-50 rounded-xl w-fit group-hover:scale-110 transition-transform">
              {service.icon}
            </div>
            <h4 className="text-xl font-bold text-blue-900 mb-4">{service.title}</h4>
            <p className="text-gray-600 leading-relaxed">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
      
      <div className="mt-16 bg-blue-900 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="relative z-10 text-center md:text-left">
          <h4 className="text-2xl md:text-3xl font-bold mb-4">Precisa de um orçamento urgente?</h4>
          <p className="text-blue-100 opacity-80 text-lg">Atendemos chamados de emergência para empresas e residências.</p>
        </div>
        <a 
          href="#contato" 
          className="mt-8 md:mt-0 relative z-10 bg-white text-blue-900 px-10 py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow-lg"
        >
          Falar com um Técnico
        </a>
      </div>
    </div>
  );
};

export default Services;
