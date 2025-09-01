import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  FileText, 
  Users, 
  Building, 
  CheckCircle, 
  Target, 
  Heart, 
  Settings,
  Award,
  TrendingUp,
  Shield
} from "lucide-react";

const Servicos = () => {
  const handleContactForm = () => {
    // Scroll to contact form or open contact page
    window.location.href = "/fale-conosco";
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="hero-overlay text-white section-padding">
          <div className="container text-center">
            <h1 className="mb-6 animate-fade-in">
              Soluções Especializadas para Sua Instituição
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto animate-slide-up">
              Oferecemos três grandes frentes de atuação com foco na excelência, 
              legalidade e resultados sustentáveis
            </p>
          </div>
        </section>

        {/* Services Tabs */}
        <section className="section-padding bg-white">
          <div className="container">
            <Tabs defaultValue="captacao" className="w-full">
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-12 h-auto">
                <TabsTrigger value="captacao" className="p-4 text-left">
                  <div className="flex items-center gap-3">
                    <Target className="h-6 w-6 text-primary" />
                    <div>
                      <div className="font-semibold">Captação de Recursos</div>
                      <div className="text-sm text-muted-foreground">Recursos Federais</div>
                    </div>
                  </div>
                </TabsTrigger>
                <TabsTrigger value="medicos" className="p-4 text-left">
                  <div className="flex items-center gap-3">
                    <Heart className="h-6 w-6 text-primary" />
                    <div>
                      <div className="font-semibold">Serviços Médicos</div>
                      <div className="text-sm text-muted-foreground">Equipes Especializadas</div>
                    </div>
                  </div>
                </TabsTrigger>
                <TabsTrigger value="hemodialise" className="p-4 text-left">
                  <div className="flex items-center gap-3">
                    <Building className="h-6 w-6 text-primary" />
                    <div>
                      <div className="font-semibold">Hemodiálise</div>
                      <div className="text-sm text-muted-foreground">Clínicas Completas</div>
                    </div>
                  </div>
                </TabsTrigger>
              </TabsList>

              {/* Captação de Recursos */}
              <TabsContent value="captacao" id="captacao">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                  <div>
                    <h2 className="mb-6">Captação de Recursos Federais</h2>
                    <p className="text-lg mb-6">
                      Oferecemos soluções completas para captação de recursos federais, 
                      desde o diagnóstico institucional até a prestação de contas, 
                      garantindo total compliance e maximização dos resultados.
                    </p>
                    
                    <div className="space-y-4 mb-8">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                        <div>
                          <h4 className="font-semibold mb-1">Diagnóstico Institucional</h4>
                          <p className="text-muted-foreground">
                            Análise completa da estrutura organizacional e identificação 
                            de oportunidades de captação
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                        <div>
                          <h4 className="font-semibold mb-1">Reorganização Administrativa</h4>
                          <p className="text-muted-foreground">
                            Adequação jurídica, administrativa e assistencial para 
                            atender aos requisitos dos editais
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                        <div>
                          <h4 className="font-semibold mb-1">Elaboração e Submissão</h4>
                          <p className="text-muted-foreground">
                            Desenvolvimento completo de projetos e submissão 
                            nas plataformas governamentais
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                        <div>
                          <h4 className="font-semibold mb-1">Execução e Prestação de Contas</h4>
                          <p className="text-muted-foreground">
                            Acompanhamento da execução e elaboração de 
                            prestações de contas técnica e financeira
                          </p>
                        </div>
                      </div>
                    </div>

                    <Button size="lg" onClick={handleContactForm}>
                      Solicitar Proposta
                    </Button>
                  </div>

                  <div className="space-y-6">
                    <Card className="card-hover">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                            <FileText className="h-6 w-6 text-primary" />
                          </div>
                          <h3>Plano Diretor Municipal</h3>
                        </div>
                        <p className="text-muted-foreground">
                          Assessoramento na elaboração de Planos Diretores Municipais 
                          e reorganização administrativa em OSCs
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="card-hover">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                            <TrendingUp className="h-6 w-6 text-primary" />
                          </div>
                          <h3>Resultados Comprovados</h3>
                        </div>
                        <p className="text-muted-foreground">
                          Mais de R$ 100 milhões em recursos captados para 
                          instituições em todo o Brasil
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="card-hover">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                            <Shield className="h-6 w-6 text-primary" />
                          </div>
                          <h3>Compliance Total</h3>
                        </div>
                        <p className="text-muted-foreground">
                          Todos os processos seguem rigorosamente as normas 
                          e regulamentações dos órgãos competentes
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              {/* Serviços Médicos */}
              <TabsContent value="medicos" id="medicos">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                  <div>
                    <h2 className="mb-6">Prestação de Serviços Médicos</h2>
                    <p className="text-lg mb-6">
                      Oferecemos alocação e gestão de equipes médicas especializadas, 
                      garantindo cobertura completa, qualidade no atendimento e 
                      eficiência operacional.
                    </p>
                    
                    <div className="space-y-4 mb-8">
                      <div className="flex items-start gap-3">
                        <Users className="h-6 w-6 text-primary mt-0.5" />
                        <div>
                          <h4 className="font-semibold mb-1">Equipes Multidisciplinares</h4>
                          <p className="text-muted-foreground">
                            Médicos, enfermeiros, técnicos, multiprofissionais e apoio administrativo
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Settings className="h-6 w-6 text-primary mt-0.5" />
                        <div>
                          <h4 className="font-semibold mb-1">Gestão Completa</h4>
                          <p className="text-muted-foreground">
                            Cobertura de escalas, contratos, gestão de pessoas e 
                            controle de indicadores de qualidade
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Award className="h-6 w-6 text-primary mt-0.5" />
                        <div>
                          <h4 className="font-semibold mb-1">Melhoria Contínua</h4>
                          <p className="text-muted-foreground">
                            Implementação de KPIs e processos de melhoria 
                            contínua da qualidade assistencial
                          </p>
                        </div>
                      </div>
                    </div>

                    <Button size="lg" onClick={handleContactForm}>
                      Solicitar Proposta
                    </Button>
                  </div>

                  <div className="space-y-6">
                    <Card className="bg-primary/5 border-primary/20">
                      <CardContent className="p-6">
                        <h3 className="text-primary mb-4">Case de Sucesso: Miracatu/SP</h3>
                        <p className="mb-4">
                          "A HME transformou nosso atendimento médico. Com equipes 
                          especializadas e gestão eficiente, conseguimos melhorar 
                          significativamente a qualidade do atendimento à população."
                        </p>
                        <div className="text-sm text-muted-foreground">
                          - Secretaria Municipal de Saúde de Miracatu/SP
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="card-hover">
                      <CardContent className="p-6">
                        <h3 className="mb-4">Especialidades Atendidas</h3>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div>• Clínica Médica</div>
                          <div>• Pediatria</div>
                          <div>• Ginecologia</div>
                          <div>• Cardiologia</div>
                          <div>• Ortopedia</div>
                          <div>• Oftalmologia</div>
                          <div>• Psiquiatria</div>
                          <div>• Neurologia</div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              {/* Hemodiálise */}
              <TabsContent value="hemodialise" id="hemodialise">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                  <div>
                    <h2 className="mb-6">Implantação e Gestão de Clínicas de Hemodiálise</h2>
                    <p className="text-lg mb-6">
                      Soluções completas para implantação e gestão de clínicas de hemodiálise, 
                      desde o projeto técnico até a operação, com total conformidade às 
                      normas da ANVISA e Ministério da Saúde.
                    </p>
                    
                    <div className="space-y-4 mb-8">
                      <div className="flex items-start gap-3">
                        <Building className="h-6 w-6 text-primary mt-0.5" />
                        <div>
                          <h4 className="font-semibold mb-1">Projeto Técnico e Arquitetônico</h4>
                          <p className="text-muted-foreground">
                            Desenvolvimento completo do projeto conforme normas técnicas
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Shield className="h-6 w-6 text-primary mt-0.5" />
                        <div>
                          <h4 className="font-semibold mb-1">Adequações ANVISA/MS</h4>
                          <p className="text-muted-foreground">
                            Conformidade total com regulamentações sanitárias
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Settings className="h-6 w-6 text-primary mt-0.5" />
                        <div>
                          <h4 className="font-semibold mb-1">Equipamentos e Tecnologia</h4>
                          <p className="text-muted-foreground">
                            Seleção e instalação de equipamentos de última geração
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Users className="h-6 w-6 text-primary mt-0.5" />
                        <div>
                          <h4 className="font-semibold mb-1">Equipe Especializada</h4>
                          <p className="text-muted-foreground">
                            Formação e gestão de equipe multidisciplinar em nefrologia
                          </p>
                        </div>
                      </div>
                    </div>

                    <Button size="lg" onClick={handleContactForm}>
                      Solicitar Proposta
                    </Button>
                  </div>

                  <div className="space-y-6">
                    <Card className="card-hover">
                      <CardContent className="p-6">
                        <h3 className="mb-4">Serviços Completos</h3>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            Gestão clínica e operacional
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            Regulação e autorização de procedimentos
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            Controle de indicadores de qualidade
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            Gestão de protocolos assistenciais
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            Treinamento contínuo de equipes
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="card-hover">
                      <CardContent className="p-6">
                        <h3 className="mb-4">Consultoria para Clínicas Existentes</h3>
                        <p className="text-muted-foreground mb-4">
                          Também oferecemos consultoria especializada para clínicas 
                          já em funcionamento (públicas, privadas ou filantrópicas):
                        </p>
                        <ul className="space-y-1 text-sm">
                          <li>• Otimização de processos</li>
                          <li>• Adequação de normas</li>
                          <li>• Melhoria de indicadores</li>
                          <li>• Capacitação de equipes</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding gradient-primary text-white">
          <div className="container text-center">
            <h2 className="mb-4">Precisa de uma solução personalizada?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Nossa equipe está pronta para desenvolver a solução ideal 
              para as necessidades específicas da sua instituição.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" onClick={handleContactForm}>
                Solicitar Proposta
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
                onClick={() => window.open("https://wa.me/5518998080836?text=Olá! Gostaria de solicitar uma proposta para os serviços da HME.", "_blank")}
              >
                WhatsApp
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Servicos;