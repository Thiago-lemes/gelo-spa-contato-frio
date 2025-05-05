
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Home, Building2, Factory, Building } from 'lucide-react';

const Areas = () => {
  const areas = [
    { 
      title: "Residencial", 
      icon: <Home className="w-10 h-10 text-blue-600" />,
      description: "Soluções de climatização para apartamentos, casas e condomínios residenciais.",
      services: ["Split", "Multi Split", "Ar-condicionado de Janela", "Cortinas de Ar", "Purificadores"]
    },
    { 
      title: "Comercial", 
      icon: <Building2 className="w-10 h-10 text-blue-600" />,
      description: "Projetos para escritórios, lojas, restaurantes e pequenos comércios.",
      services: ["VRF", "Split Cassete", "Split Piso-Teto", "Sistemas de Exaustão"]
    },
    { 
      title: "Industrial", 
      icon: <Factory className="w-10 h-10 text-blue-600" />,
      description: "Climatização industrial para fábricas, galpões e ambientes de grande porte.",
      services: ["Chillers", "Self-Contained", "Torres de Resfriamento", "Câmaras Frigoríficas"]
    },
    { 
      title: "Hospitalar", 
      icon: <Building className="w-10 h-10 text-blue-600" />,
      description: "Soluções especializadas para hospitais, clínicas e laboratórios.",
      services: ["Ar-condicionado com Filtragem HEPA", "Pressão Negativa/Positiva", "Controle de Umidade"]
    },
  ];

  return (
    <section id="areas" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-blue-600 font-semibold mb-2">ÁREAS DE ATUAÇÃO</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Onde Trabalhamos</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos soluções completas de refrigeração e ar-condicionado para diversos segmentos.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {areas.map((area, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="mb-3">{area.icon}</div>
                  <CardTitle>{area.title}</CardTitle>
                  <CardDescription>{area.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {area.services.map((service, idx) => (
                      <Badge key={idx} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 bg-white rounded-lg shadow-md p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h3 className="text-xl font-bold text-gray-800">Não encontrou seu segmento?</h3>
                <p className="text-gray-600 mt-2">
                  Entre em contato conosco para discutirmos uma solução personalizada para sua necessidade.
                </p>
              </div>
              <div>
                <a 
                  href="#contato" 
                  className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Fale Conosco
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Areas;
