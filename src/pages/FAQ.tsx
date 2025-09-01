import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";

const FAQ = () => {
  const faqCategories = [
    {
      title: "Sobre a HME",
      items: [
        {
          question: "Há quanto tempo a HME atua no mercado?",
          answer: "A HME Soluções e Saúde atua há mais de 15 anos no mercado, oferecendo soluções especializadas em gestão pública, serviços médicos e apoio ao terceiro setor."
        },
        {
          question: "Em quais regiões a HME possui atuação?",
          answer: "Atuamos em todo o território nacional, com sede em Presidente Prudente/SP e filiais em Rorainópolis/RR e Rosana/SP. Nossa equipe está preparada para atender clientes em qualquer região do Brasil."
        },
        {
          question: "Quais são os diferenciais da HME?",
          answer: "Nossos principais diferenciais são: mais de 15 anos de experiência, foco na legalidade e compliance, equipe especializada, resultados comprovados e atendimento personalizado para cada cliente."
        }
      ]
    },
    {
      title: "Captação de Recursos",
      items: [
        {
          question: "Como funciona o processo de captação de recursos federais?",
          answer: "Nosso processo inclui: diagnóstico institucional, reorganização administrativa (quando necessário), elaboração e submissão de projetos, acompanhamento da execução e prestação de contas técnica e financeira."
        },
        {
          question: "Quais tipos de recursos podem ser captados?",
          answer: "Trabalhamos com diversos tipos de recursos federais para saúde, educação, assistência social, infraestrutura e desenvolvimento urbano, através de emendas parlamentares, editais e convênios."
        },
        {
          question: "Qual é o prazo médio para aprovação de um projeto?",
          answer: "O prazo varia conforme o tipo de recurso e órgão responsável, podendo variar de 60 dias a 12 meses. Acompanhamos todo o processo e mantemos o cliente informado sobre o andamento."
        },
        {
          question: "A HME garante a aprovação dos projetos?",
          answer: "Não é possível garantir 100% de aprovação, pois depende de diversos fatores externos. No entanto, nossos projetos têm alto índice de aprovação devido à nossa experiência e metodologia consolidada."
        }
      ]
    },
    {
      title: "Serviços Médicos",
      items: [
        {
          question: "Quais especialidades médicas a HME fornece?",
          answer: "Fornecemos profissionais de diversas especialidades: clínica médica, pediatria, ginecologia, cardiologia, ortopedia, oftalmologia, psiquiatria, neurologia, entre outras."
        },
        {
          question: "Como é feita a seleção dos profissionais?",
          answer: "Todos os profissionais passam por rigoroso processo seletivo, incluindo análise curricular, entrevistas, comprovação de registros profissionais e referências. Priorizamos experiência e qualificação técnica."
        },
        {
          question: "A HME oferece cobertura de escalas?",
          answer: "Sim, oferecemos cobertura completa de escalas, incluindo plantões, férias, licenças e ausências, garantindo continuidade do atendimento médico."
        }
      ]
    },
    {
      title: "Clínicas de Hemodiálise",
      items: [
        {
          question: "A HME desenvolve projetos completos de hemodiálise?",
          answer: "Sim, oferecemos soluções completas desde o projeto técnico e arquitetônico até a operação da clínica, incluindo adequações às normas da ANVISA e Ministério da Saúde."
        },
        {
          question: "Vocês trabalham com clínicas já existentes?",
          answer: "Sim, também oferecemos consultoria para clínicas já em funcionamento, auxiliando na otimização de processos, adequação de normas e melhoria de indicadores."
        },
        {
          question: "Qual o prazo para implantação de uma clínica?",
          answer: "O prazo varia conforme a complexidade do projeto, mas em média leva de 12 a 18 meses, incluindo licenciamento, obras, instalação de equipamentos e treinamento de equipe."
        }
      ]
    },
    {
      title: "Cursos",
      items: [
        {
          question: "Os cursos da HME são presenciais ou online?",
          answer: "Oferecemos cursos nos formatos presencial e híbrido, adaptando-nos à necessidade de cada cliente e à especificidade do conteúdo."
        },
        {
          question: "É possível organizar turmas exclusivas?",
          answer: "Sim, organizamos turmas exclusivas para instituições que desejam capacitar sua equipe de forma personalizada, com conteúdo adaptado às suas necessidades específicas."
        },
        {
          question: "Os cursos fornecem certificado?",
          answer: "Sim, todos os nossos cursos fornecem certificado de conclusão, reconhecido no mercado e que comprova a capacitação do profissional."
        }
      ]
    },
    {
      title: "Contato e Propostas",
      items: [
        {
          question: "Como solicitar uma proposta?",
          answer: "Você pode solicitar uma proposta através do nosso site, WhatsApp, e-mail ou telefone. Nossa equipe entrará em contato em até 24 horas para entender suas necessidades."
        },
        {
          question: "As consultorias são cobradas?",
          answer: "A primeira consulta é gratuita. Após analisarmos suas necessidades, apresentamos uma proposta personalizada com valores e condições."
        },
        {
          question: "Qual o prazo para receber uma proposta?",
          answer: "Normalmente enviamos propostas em até 5 dias úteis após a primeira reunião, dependendo da complexidade do projeto solicitado."
        }
      ]
    }
  ];

  const handleWhatsApp = () => {
    window.open("https://wa.me/5518998080836?text=Olá! Tenho uma dúvida que não encontrei no FAQ.", "_blank");
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="hero-overlay text-white section-padding">
          <div className="container text-center">
            <h1 className="mb-6 animate-fade-in">
              Dúvidas Frequentes
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto animate-slide-up">
              Encontre respostas para as principais questões sobre nossos serviços
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              {faqCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-12">
                  <h2 className="mb-6 text-primary">{category.title}</h2>
                  
                  <Accordion type="single" collapsible className="space-y-4">
                    {category.items.map((item, itemIndex) => (
                      <AccordionItem 
                        key={`${categoryIndex}-${itemIndex}`} 
                        value={`${categoryIndex}-${itemIndex}`}
                      >
                        <Card className="card-hover">
                          <AccordionTrigger className="px-6 py-4 hover:no-underline">
                            <h3 className="text-left font-medium">{item.question}</h3>
                          </AccordionTrigger>
                          <AccordionContent>
                            <CardContent className="px-6 pb-4 pt-0">
                              <p className="text-muted-foreground">{item.answer}</p>
                            </CardContent>
                          </AccordionContent>
                        </Card>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="section-padding bg-muted">
          <div className="container">
            <Card className="max-w-2xl mx-auto text-center p-8">
              <MessageCircle className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="mb-4">Não encontrou sua resposta?</h2>
              <p className="text-muted-foreground mb-8">
                Nossa equipe está pronta para esclarecer qualquer dúvida específica 
                sobre nossos serviços. Entre em contato conosco!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" onClick={handleWhatsApp} className="whatsapp-button">
                  WhatsApp
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="/fale-conosco">Fale Conosco</a>
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;