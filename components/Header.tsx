
import React, { useState } from 'react';
import { Menu, X, Wind } from 'lucide-react';

interface HeaderProps {
  scrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Nossos Serviços', href: '#servicos' },
    { name: 'Seção de fotos', href: '#fotos' },
    { name: 'Sobre nós', href: '#sobre' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className={`p-2 rounded-xl transition-all ${scrolled ? 'bg-blue-600 text-white' : 'bg-white/20 text-white backdrop-blur-md'}`}>
            <Wind className="w-6 h-6" />
          </div>
          <span className={`text-2xl font-bold font-header tracking-tight ${scrolled ? 'text-blue-900' : 'text-white'}`}>
            CLIMATEK
          </span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-semibold hover:text-blue-400 transition-colors ${
                scrolled ? 'text-blue-900' : 'text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className={`w-8 h-8 ${scrolled ? 'text-blue-900' : 'text-white'}`} />
          ) : (
            <Menu className={`w-8 h-8 ${scrolled ? 'text-blue-900' : 'text-white'}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-6 px-6 flex flex-col space-y-4 border-t border-gray-100">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-semibold text-blue-900 hover:text-blue-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;