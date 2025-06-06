import { Button } from "@/components/ui/button";
import { Phone, MessageSquare } from "lucide-react";
import { useState, useEffect } from "react";

const backgroundImages = [
  "https://blog.benzor.com.br/wp-content/uploads/2023/05/ventilacao-industrial-1024x684.png",
  "https://www.nepin.com.br/wp-content/uploads/2023/09/Refrigeracao-Industrial-Quais-sao-as-tendencias-para-o-futuro-do-setor.jpeg",
  "https://www.nepin.com.br/wp-content/uploads/2022/11/sistema-de-refrigeracao-industrial.jpg",
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-[90vh] flex items-center overflow-hidden"
    >
      {/* Background Images */}
      <div className="absolute inset-0 w-full h-full">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/75 to-blue-700/70"></div>
          </div>
        ))}
      </div>

      {/* Background Elements with reduced opacity */}
      <div className="absolute inset-0 opacity-10 z-[1]">
        <div className="absolute top-10 left-20 w-64 h-64 rounded-full bg-blue-200"></div>
        <div className="absolute bottom-10 right-20 w-80 h-80 rounded-full bg-blue-300"></div>
        <div className="absolute top-40 right-40 w-40 h-40 rounded-full bg-white"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-blue-300 font-medium mb-4 inline-block animate-fade-in">
            Especialistas em climatização
          </span>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Soluções completas em refrigeração e ar-condicionado
          </h1>
          <p
            className="text-xl text-blue-100 mb-8 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            Excelência no Controle de Temperatura, Umidade e Pureza do Ar.
          </p>
          <div
            className="flex flex-wrap justify-center gap-4 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <Button
              size="lg"
              className="bg-white text-blue-700 hover:bg-blue-100"
              asChild
            >
              <a href="#servicos">Conheça Nossos Serviços</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className=" text-blue-700 hover:bg-white/10"
              asChild
            >
              <a href="#contato" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Solicitar Orçamento
              </a>
            </Button>
            <Button
              size="lg"
              className="bg-green-500 text-white hover:bg-green-600"
              asChild
            >
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageSquare className="h-4 w-4" />
                Whatsapp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
