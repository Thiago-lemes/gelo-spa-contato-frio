
import { Button } from '@/components/ui/button';
import { BadgeCheck, Clock, Award, ThumbsUp } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-blue-600 font-semibold mb-2">SOBRE NÓS</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Conheça a EasyCold</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Há mais de 10 anos oferecendo soluções completas em refrigeração e ar-condicionado 
              com qualidade e compromisso.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800">Nossa História</h3>
              <p className="text-gray-600">
                A EasyCold nasceu da paixão por proporcionar conforto térmico e bem-estar para pessoas e empresas. 
                Iniciamos com pequenos serviços de manutenção e hoje somos referência no mercado de refrigeração e climatização.
              </p>
              <p className="text-gray-600">
                Nossa equipe técnica é formada por profissionais altamente capacitados e 
                certificados, prontos para oferecer soluções personalizadas que atendam às necessidades específicas de cada cliente.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <BadgeCheck className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700 font-medium">Equipe Certificada</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700 font-medium">Atendimento Rápido</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700 font-medium">Garantia de Serviço</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ThumbsUp className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700 font-medium">Satisfação do Cliente</span>
                </div>
              </div>
              
              <Button className="bg-blue-600 hover:bg-blue-700" asChild>
                <a href="#contato">Entre em Contato</a>
              </Button>
            </div>
            
            <div className="relative">
              <div className="bg-blue-100 rounded-lg p-4 absolute -top-4 -left-4 w-full h-full"></div>
              <img 
                src="https://placehold.co/600x400/e2eeff/1e40af?text=Nossa+Equipe" 
                alt="Equipe EasyCold" 
                className="rounded-lg w-full h-auto relative shadow-lg"
              />
            </div>
          </div>
          
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600 mb-2">+500</p>
              <p className="text-gray-600">Projetos Concluídos</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600 mb-2">10+</p>
              <p className="text-gray-600">Anos de Experiência</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600 mb-2">98%</p>
              <p className="text-gray-600">Clientes Satisfeitos</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600 mb-2">24h</p>
              <p className="text-gray-600">Suporte Técnico</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
