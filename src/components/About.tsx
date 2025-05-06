import { Button } from "@/components/ui/button";
import { BadgeCheck, Clock, Award, ThumbsUp } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-blue-600 font-semibold mb-2">
              SOBRE NÓS
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Conheça a EasyCold
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Há mais de 15 anos oferecendo soluções completas em refrigeração,
              climatização e ventilação industrial com qualidade e compromisso.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800">
                Unindo as forças de grandes profissionais do setor do HVAC-R
                (Heating, Ventilation, Air Conditioning e Refrigeration) do
                Brasil
              </h3>

              <p className="text-gray-600">
                Desde 2010, a Easycold atua no mercado de{" "}
                <strong>
                  refrigeração, climatização e ventilação industrial
                </strong>
                , oferecendo soluções completas em projetos, instalações,
                manutenção e automação. Nascemos da fusão de três empresas com
                vasta experiência nos setores{" "}
                <strong>alimentício, hospitalar e de varejo</strong>, unindo
                expertises para entregar resultados de alto desempenho e
                confiabilidade. Nosso principal propósito é entregar soluções
                personalizadas, que atendam de forma precisa às necessidades de
                cada cliente. Para isso, investimos continuamente no
                aperfeiçoamento técnico da nossa equipe, garantindo que todos os
                projetos estejam em conformidade com as normas técnicas e de
                segurança mais exigentes do mercado. Com um corpo de engenharia
                altamente qualificado, a Easycold é referência nacional em
                sistemas HVAC-R. Atuamos com <strong>excelência</strong> no
                controle de temperatura, umidade, pureza e renovação do ar,
                atendendo desde processos industriais complexos até salas limpas
                com exigência máxima de controle de contaminantes. A automação é
                uma das nossas grandes aliadas. Por meio da integração
                inteligente dos sistemas, garantimos o controle preciso do ar
                interior, com monitoramento remoto e resultados ajustados ao
                grau de pureza necessário. Esse cuidado proporciona alta
                eficiência energética, segurança operacional e qualidade
                superior no produto final dos nossos clientes. Atendemos
                principalmente empresas dos segmentos alimentício, farmacêutico
                e hospitalar, sempre com foco em inovação, qualidade e
                compromisso com os resultados. Nossa equipe técnica é formada
                por profissionais{" "}
                <strong>experientes, certificados e preparados</strong> para
                oferecer soluções sob medida, agregando valor e performance aos
                processos dos nossos clientes.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <BadgeCheck className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700 font-medium">
                    Equipe Certificada
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700 font-medium">
                    Atendimento Rápido
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700 font-medium">
                    Garantia de Serviço
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <ThumbsUp className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700 font-medium">
                    Satisfação do Cliente
                  </span>
                </div>
              </div>

              <Button className="bg-blue-600 hover:bg-blue-700" asChild>
                <a href="#contato">Entre em Contato</a>
              </Button>
            </div>

            <div className="relative">
              <div className="bg-blue-100 rounded-lg p-4 absolute -top-4 -left-4 w-full h-full"></div>
              <img
                src="https://amsolucoesindustriais.com.br/wp-content/uploads/2023/01/climatizacao-industrial.jpg"
                alt="Equipe EasyCold"
                className="rounded-lg w-full h-auto relative shadow-lg object-cover"
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
