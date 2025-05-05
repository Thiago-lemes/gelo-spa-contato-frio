
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

// Dados de exemplo para os cases
const caseCategories = ["Todos", "Residencial", "Comercial", "Industrial"];

const caseStudies = [
  {
    id: 1,
    title: "Climatização de Escritório Corporativo",
    description: "Instalação de sistema VRF em escritório de 500m² com 12 ambientes independentes, garantindo economia de energia e conforto térmico personalizado.",
    category: "Comercial",
    client: "TechCorp Solutions",
    imageUrl: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=1740&auto=format&fit=crop",
    tags: ["VRF", "Eficiência Energética", "Zoneamento"]
  },
  {
    id: 2,
    title: "Sistema Multi-split para Residência de Luxo",
    description: "Projeto e instalação de sistema multi-split para residência de alto padrão com 5 ambientes, integrado com sistema de automação residencial.",
    category: "Residencial",
    client: "Família Rodrigues",
    imageUrl: "https://images.unsplash.com/photo-1631083094028-01e31296899e?q=80&w=2070&auto=format&fit=crop",
    tags: ["Multi-Split", "Automação", "Design"]
  },
  {
    id: 3,
    title: "Refrigeração Completa para Restaurante Gourmet",
    description: "Solução integrada de refrigeração e climatização para restaurante premiado, incluindo cozinha industrial, adega climatizada e área de clientes.",
    category: "Comercial",
    client: "Sabor & Arte Restaurante",
    imageUrl: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=1932&auto=format&fit=crop",
    tags: ["Refrigeração Comercial", "Conforto Térmico", "Economia"]
  },
  {
    id: 4,
    title: "Centro de Processamento de Dados Tier III",
    description: "Sistema redundante de precisão para controle de temperatura em CPD de empresa de tecnologia, incluindo monitoramento 24/7 e alta disponibilidade.",
    category: "Industrial",
    client: "DataSecure",
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2068&auto=format&fit=crop",
    tags: ["Alta Precisão", "Redundância", "Monitoramento"]
  },
  {
    id: 5,
    title: "Apartamento Duplex com Sistema Inverter",
    description: "Projeto personalizado para climatização eficiente em apartamento de 200m² com pé direito duplo, utilizando tecnologia inverter para maior economia.",
    category: "Residencial",
    client: "Família Silva",
    imageUrl: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2070&auto=format&fit=crop",
    tags: ["Inverter", "Decoração", "Eficiência"]
  },
  {
    id: 6,
    title: "Controle de Temperatura e Umidade - Indústria Têxtil",
    description: "Sistema de ar-condicionado industrial para controle preciso de temperatura e umidade em fábrica têxtil, garantindo qualidade na produção.",
    category: "Industrial",
    client: "TextilTech Industrial",
    imageUrl: "https://images.unsplash.com/photo-1518792528501-352f829886dc?q=80&w=1170&auto=format&fit=crop",
    tags: ["Controle de Umidade", "Industrial", "Alta Performance"]
  }
];

const CaseStudies = () => {
  const [activeTab, setActiveTab] = useState("Todos");
  const [scrollPosition, setScrollPosition] = useState(0);
  
  const filteredCases = activeTab === "Todos" 
    ? caseStudies 
    : caseStudies.filter(cs => cs.category === activeTab);

  // Handle scroll for parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="cases" className="py-20 bg-white relative overflow-hidden">
      {/* Parallax background */}
      <div 
        className="absolute inset-0 bg-blue-50 opacity-50"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1527089876305-200e0b3a2cd8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${scrollPosition * 0.15}px)`,
          zIndex: 0
        }}
      />
      
      {/* Content overlay with slight transparency */}
      <div className="absolute inset-0 bg-white bg-opacity-90 z-10"></div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="text-center mb-12">
          <span className="inline-block text-blue-600 font-semibold mb-2 bg-blue-50 px-4 py-1 rounded-full">NOSSOS CASES</span>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Projetos Realizados com Excelência</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça alguns dos nossos projetos realizados com excelência e total satisfação dos clientes.
          </p>
        </div>
        
        <Tabs defaultValue="Todos" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList className="bg-gray-100">
              {caseCategories.map((category) => (
                <TabsTrigger key={category} value={category} className="px-6 data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          <TabsContent value={activeTab} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCases.map((caseItem) => (
                <Card 
                  key={caseItem.id} 
                  className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 group"
                  style={{
                    transform: `translateY(${scrollPosition * 0.02 * (caseItem.id % 3 + 1)}px)`,
                    transition: "transform 0.1s ease-out"
                  }}
                >
                  <div className="aspect-video w-full overflow-hidden">
                    <img 
                      src={caseItem.imageUrl} 
                      alt={caseItem.title} 
                      className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-3 flex justify-between items-center">
                      <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                        {caseItem.category}
                      </Badge>
                      <span className="text-sm text-gray-500">Cliente: {caseItem.client}</span>
                    </div>
                    <h3 className="font-bold text-xl mb-2 group-hover:text-blue-600 transition-colors">{caseItem.title}</h3>
                    <p className="text-gray-600 mb-4">{caseItem.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {caseItem.tags.map((tag, i) => (
                        <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50 w-full">
                      Ver Detalhes
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default CaseStudies;
