
import { useState, useEffect } from 'react';
import { Menu, X, AirVent, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled 
        ? "bg-white shadow-md py-2" 
        : "bg-white/95 backdrop-blur py-4"
    )}>
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <AirVent className={cn(
            "h-8 w-8 transition-colors",
            isScrolled ? "text-blue-700" : "text-blue-600"
          )} />
          <span className={cn(
            "text-xl font-bold transition-colors",
            isScrolled ? "text-blue-900" : "text-blue-800"
          )}>
            EasyCold
          </span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#inicio" className="text-gray-700 hover:text-blue-600 font-medium">Início</a>
          <a href="#servicos" className="text-gray-700 hover:text-blue-600 font-medium">Serviços</a>
          <a href="#cases" className="text-gray-700 hover:text-blue-600 font-medium">Cases</a>
          <a href="#contato" className="text-gray-700 hover:text-blue-600 font-medium">Contato</a>
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          <div className="hidden lg:flex items-center space-x-2">
            <div className="bg-blue-100 p-1 rounded-full">
              <Phone className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Atendimento</p>
              <p className="text-sm font-semibold text-blue-900">(11) 9555-5555</p>
            </div>
          </div>
          
          <Button className="bg-blue-600 hover:bg-blue-700" asChild>
            <a href="#contato">Solicitar Orçamento</a>
          </Button>
        </div>
        
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
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
