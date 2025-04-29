
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section 
      id="inicio" 
      className="relative min-h-[80vh] flex items-center bg-gradient-to-r from-blue-900 to-blue-700 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-20 w-64 h-64 rounded-full bg-blue-200"></div>
        <div className="absolute bottom-10 right-20 w-80 h-80 rounded-full bg-blue-300"></div>
        <div className="absolute top-40 right-40 w-40 h-40 rounded-full bg-white"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Soluções completas em refrigeração e ar-condicionado
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Oferecemos serviços especializados de instalação, manutenção e reparo para ambientes 
            residenciais e comerciais com qualidade e eficiência.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-100" asChild>
              <a href="#servicos">Nossos Serviços</a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <a href="#contato">Fale Conosco</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
