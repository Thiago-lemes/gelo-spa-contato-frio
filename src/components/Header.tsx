
import { useState } from 'react';
import { Menu, X, AirVent } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur shadow-sm">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <AirVent className="h-8 w-8 text-blue-600" />
          <span className="text-xl font-bold text-blue-800">AirTech</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#inicio" className="text-gray-700 hover:text-blue-600 font-medium">Início</a>
          <a href="#servicos" className="text-gray-700 hover:text-blue-600 font-medium">Serviços</a>
          <a href="#cases" className="text-gray-700 hover:text-blue-600 font-medium">Cases</a>
          <a href="#contato" className="text-gray-700 hover:text-blue-600 font-medium">Contato</a>
        </nav>
        
        <Button className="hidden md:flex bg-blue-600 hover:bg-blue-700" asChild>
          <a href="#contato">Solicitar Orçamento</a>
        </Button>
        
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 z-50 bg-white flex flex-col items-center justify-center space-y-8 transition-transform duration-300 md:hidden",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <a 
          href="#inicio" 
          className="text-xl font-medium text-gray-800 hover:text-blue-600"
          onClick={() => setIsOpen(false)}
        >
          Início
        </a>
        <a 
          href="#servicos" 
          className="text-xl font-medium text-gray-800 hover:text-blue-600"
          onClick={() => setIsOpen(false)}
        >
          Serviços
        </a>
        <a 
          href="#cases" 
          className="text-xl font-medium text-gray-800 hover:text-blue-600"
          onClick={() => setIsOpen(false)}
        >
          Cases
        </a>
        <a 
          href="#contato" 
          className="text-xl font-medium text-gray-800 hover:text-blue-600"
          onClick={() => setIsOpen(false)}
        >
          Contato
        </a>
        <Button className="mt-4 bg-blue-600 hover:bg-blue-700" asChild onClick={() => setIsOpen(false)}>
          <a href="#contato">Solicitar Orçamento</a>
        </Button>
      </div>
    </header>
  );
};

export default Header;
