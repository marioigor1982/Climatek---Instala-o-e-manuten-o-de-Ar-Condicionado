
import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Wind } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contato" className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-600 rounded-xl text-white">
                <Wind className="w-6 h-6" />
              </div>
              <span className="text-2xl font-bold font-header text-blue-900">CLIMATEK</span>
            </div>
            <p className="text-gray-500 leading-relaxed">
              Sua melhor escolha para instalação e manutenção de ar condicionado. Qualidade técnica e compromisso com o cliente.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-3 bg-sky-50 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 bg-sky-50 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 bg-sky-50 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.675a2.897 2.897 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.617a8.171 8.171 0 0 0 5.42 2.03V7.163a4.722 4.722 0 0 1-1.649-.477z"></path></svg>
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-lg font-bold text-blue-900 mb-6">Links Rápidos</h4>
            <ul className="space-y-4">
              <li><a href="#inicio" className="text-gray-500 hover:text-blue-600 transition-colors">Início</a></li>
              <li><a href="#servicos" className="text-gray-500 hover:text-blue-600 transition-colors">Serviços</a></li>
              <li><a href="#fotos" className="text-gray-500 hover:text-blue-600 transition-colors">Fotos</a></li>
              <li><a href="#sobre" className="text-gray-500 hover:text-blue-600 transition-colors">Sobre Nós</a></li>
            </ul>
          </div>

          {/* Contact Info Column */}
          <div id="contato-info">
            <h4 className="text-lg font-bold text-blue-900 mb-6">Fale Conosco</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 group">
                <Phone className="w-6 h-6 text-blue-500 mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <span className="block text-sm text-gray-400 font-semibold uppercase tracking-wider">Telefone</span>
                  <span className="text-gray-700 font-bold">(11) 98765-4321</span>
                </div>
              </li>
              <li className="flex items-start space-x-3 group">
                <Mail className="w-6 h-6 text-blue-500 mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <span className="block text-sm text-gray-400 font-semibold uppercase tracking-wider">E-mail</span>
                  <span className="text-gray-700 font-bold">contato@climatek.com.br</span>
                </div>
              </li>
              <li className="flex items-start space-x-3 group">
                <MapPin className="w-6 h-6 text-blue-500 mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <span className="block text-sm text-gray-400 font-semibold uppercase tracking-wider">Endereço</span>
                  <span className="text-gray-700 font-bold">Av. Paulista, 1234 - São Paulo, SP</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h4 className="text-lg font-bold text-blue-900 mb-6">Atendimento 24h</h4>
            <p className="text-gray-500 mb-6">Oferecemos suporte emergencial para empresas.</p>
            <div className="bg-sky-50 p-6 rounded-2xl border border-blue-100">
              <p className="text-blue-900 font-bold text-lg mb-2">Horário de Funcionamento</p>
              <p className="text-gray-600 text-sm">Seg - Sex: 08h às 18h</p>
              <p className="text-gray-600 text-sm">Sábado: 08h às 12h</p>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>© {currentYear} Climatek Soluções em Climatização. Todos os direitos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-blue-600">Privacidade</a>
            <a href="#" className="hover:text-blue-600">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
