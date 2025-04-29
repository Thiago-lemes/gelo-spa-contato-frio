
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, AirVent, Settings, Briefcase, Home, Users } from "lucide-react";

const services = [
  {
    title: "Instalação de Ar-condicionado",
    description: "Instalação profissional de sistemas Split, Multi-Split, VRF e Cassete com garantia estendida de serviço.",
    icon: Home,
    features: ["Residencial", "Comercial", "Industrial"]
  },
  {
    title: "Manutenção Preventiva",
    description: "Programas de manutenção periódica com planos mensais, trimestrais e semestrais para evitar quebras e aumentar a vida útil.",
    icon: Settings,
    features: ["Limpeza de filtros", "Verificação de gás", "Limpeza de condensador"]
  },
  {
    title: "Manutenção Corretiva",
    description: "Equipe técnica especializada para resolver problemas com rapidez e eficiência, minimizando o tempo de inatividade.",
    icon: AirVent,
    features: ["Atendimento 24h", "Peças originais", "Garantia de serviço"]
  },
  {
    title: "Projetos de Climatização",
    description: "Desenvolvimento de projetos completos de HVAC personalizados para cada tipo de ambiente e necessidade.",
    icon: Briefcase,
    features: ["Análise térmica", "Dimensionamento", "Eficiência energética"]
  },
  {
    title: "Higienização de Sistemas",
    description: "Limpeza especializada de dutos e componentes para melhorar a qualidade do ar e prevenir doenças respiratórias.",
    icon: AirVent,
    features: ["Eliminação de fungos", "Sanitização", "Melhoria da qualidade do ar"]
  },
  {
    title: "Soluções para Empresas",
    description: "Contratos de manutenção para empresas com prioridade de atendimento e condições especiais.",
    icon: Users,
    features: ["Contratos personalizados", "Atendimento prioritário", "Gestão de múltiplas unidades"]
  }
];

const Services = () => {
  return (
    <section id="servicos" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block text-blue-600 font-semibold mb-2">NOSSOS SERVIÇOS</span>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Soluções Completas em Climatização</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos serviços profissionais e de alta qualidade para garantir o conforto térmico ideal para seu ambiente.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow duration-300 h-full group">
              <CardHeader className="pb-2 relative overflow-hidden">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <service.icon className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">{service.description}</CardDescription>
                <ul className="space-y-1">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <Check className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
