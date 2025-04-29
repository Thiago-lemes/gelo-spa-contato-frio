
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Dados de exemplo para os cases
const caseCategories = ["Todos", "Residencial", "Comercial", "Industrial"];

const caseStudies = [
  {
    id: 1,
    title: "Climatização de Escritório Corporativo",
    description: "Instalação de sistema VRF em escritório de 500m² com 12 ambientes independentes.",
    category: "Comercial",
    imageUrl: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=1740&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Sistema Multi-split para Residência",
    description: "Projeto e instalação de sistema multi-split para residência de alto padrão com 5 ambientes.",
    category: "Residencial",
    imageUrl: "https://images.unsplash.com/photo-1631083094028-01e31296899e?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Refrigeração para Restaurante",
    description: "Solução completa de refrigeração e climatização para restaurante, incluindo cozinha e área de clientes.",
    category: "Comercial",
    imageUrl: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=1932&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Centro de Processamento de Dados",
    description: "Sistema de precisão para controle de temperatura em CPD de empresa de tecnologia.",
    category: "Industrial",
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2068&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Apartamento Duplex",
    description: "Projeto personalizado para climatização eficiente em apartamento de 200m² com pé direito duplo.",
    category: "Residencial",
    imageUrl: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Linha de Produção Têxtil",
    description: "Sistema de ar-condicionado industrial para controle de temperatura e umidade em fábrica têxtil.",
    category: "Industrial",
    imageUrl: "https://images.unsplash.com/photo-1518792528501-352f829886dc?q=80&w=1170&auto=format&fit=crop",
  }
];

const CaseStudies = () => {
  const [activeTab, setActiveTab] = useState("Todos");
  
  const filteredCases = activeTab === "Todos" 
    ? caseStudies 
    : caseStudies.filter(cs => cs.category === activeTab);

  return (
    <section id="cases" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossos Cases</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça alguns dos nossos projetos realizados com excelência e total satisfação dos clientes.
          </p>
        </div>
        
        <Tabs defaultValue="Todos" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList>
              {caseCategories.map((category) => (
                <TabsTrigger key={category} value={category} className="px-6">
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          <TabsContent value={activeTab} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCases.map((caseItem) => (
                <Card key={caseItem.id} className="overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="aspect-video w-full overflow-hidden">
                    <img 
                      src={caseItem.imageUrl} 
                      alt={caseItem.title} 
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-2">
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        {caseItem.category}
                      </span>
                    </div>
                    <h3 className="font-semibold text-xl mb-2">{caseItem.title}</h3>
                    <p className="text-gray-600 mb-4">{caseItem.description}</p>
                    <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
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
