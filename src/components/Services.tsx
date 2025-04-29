
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AirVent } from "lucide-react";

const services = [
  {
    title: "Instalação de Ar-condicionado",
    description: "Instalação profissional de sistemas residenciais e comerciais com garantia de qualidade.",
    icon: AirVent
  },
  {
    title: "Manutenção Preventiva",
    description: "Programas de manutenção periódica para aumentar a vida útil dos equipamentos e reduzir consumo de energia.",
    icon: AirVent
  },
  {
    title: "Manutenção Corretiva",
    description: "Diagnóstico rápido e reparos eficientes para resolver problemas em seu sistema de refrigeração.",
    icon: AirVent
  },
  {
    title: "Projetos de Climatização",
    description: "Desenvolvimento de projetos completos de climatização para ambientes comerciais e industriais.",
    icon: AirVent
  },
  {
    title: "Higienização de Sistemas",
    description: "Limpeza especializada para melhorar a qualidade do ar e a eficiência do equipamento.",
    icon: AirVent
  },
  {
    title: "Automação de Climatização",
    description: "Soluções inteligentes para controle e economia de energia em sistemas de ar-condicionado.",
    icon: AirVent
  }
];

const Services = () => {
  return (
    <section id="servicos" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossos Serviços</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções completas em refrigeração e ar-condicionado para garantir o conforto térmico ideal para seu ambiente.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow duration-300 h-full">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-800">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
