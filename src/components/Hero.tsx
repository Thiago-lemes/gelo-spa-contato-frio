
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="inicio" 
      className="relative min-h-[90vh] flex items-center bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-20 w-64 h-64 rounded-full bg-blue-200"></div>
        <div className="absolute bottom-10 right-20 w-80 h-80 rounded-full bg-blue-300"></div>
        <div className="absolute top-40 right-40 w-40 h-40 rounded-full bg-white"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <span className="text-blue-300 font-medium mb-4 inline-block">Especialistas em climatização</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Soluções completas em refrigeração e ar-condicionado
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Há mais de 10 anos atendendo residências e empresas com qualidade, eficiência e garantia de satisfação.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-100" asChild>
                <a href="#servicos">Conheça Nossos Serviços</a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <a href="#contato" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Solicitar Orçamento
                </a>
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 lg:pl-12">
            <div className="bg-white p-8 rounded-lg shadow-xl">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Atendimento Rápido</h3>
              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Seu nome" 
                    className="w-full rounded-md border border-gray-300 p-3 text-gray-800"
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="Seu telefone" 
                    className="w-full rounded-md border border-gray-300 p-3 text-gray-800"
                  />
                </div>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                  Solicitar Ligação
                </Button>
                <p className="text-sm text-gray-500 text-center">
                  Retornaremos sua ligação em até 2 horas
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
