import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { 
  ChevronLeft, 
  ChevronRight, 
  Target, 
  Heart, 
  Building, 
  CheckCircle,
  Users,
  Award,
  TrendingUp,
  GraduationCap,
  Phone,
  Mail,
  Clock,
  MapPin,
  Instagram,
  Linkedin,
  Youtube,
  Play
} from "lucide-react";

// Import hero images
import heroServicos from "@/assets/hero-servicos-medicos.jpg";
import heroCursos from "@/assets/hero-cursos.jpg";
import heroHemodialise from "@/assets/hero-hemodialise.jpg";
import heroCaptacao from "@/assets/hero-captacao.jpg";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    consent: false
  });
  const { toast } = useToast();

  const heroSlides = [
    {
      id: 1,
      image: heroCursos,
      title: "Capacitação de Servidores em Plataformas Governamentais",
      subtitle: "Cursos especializados com instrutores experientes e certificação reconhecida",
      cta: "Conheça nossos cursos",
      link: "/cursos"
    },
    {
      id: 2,
      image: heroServicos,
      title: "Serviços de Gestão de Equipamentos de Saúde com Equipes Especializadas",
      subtitle: "Alocação e gestão de profissionais qualificados para sua instituição",
      cta: "Saiba mais",
      link: "/servicos#medicos"
    },
    {
      id: 3,
      image: heroCaptacao,
      title: "Assessoramento e Elaboração de Plano Diretor Municipal",
      subtitle: "Captação de recursos federais com total compliance e resultados comprovados",
      cta: "Saiba mais",
      link: "/servicos#captacao"
    },
    {
      id: 4,
      image: heroHemodialise,
      title: "Soluções completas em Clínicas de Hemodiálise",
      subtitle: "Desde o projeto técnico até a operação, com conformidade total às normas",
      cta: "Conheça",
      link: "/servicos#hemodialise"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consent) {
      toast({
        title: "Consentimento necessário",
        description: "É necessário aceitar os termos de privacidade.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Contato enviado!",
      description: "Nossa equipe entrará em contato em breve.",
    });
    
    setFormData({ name: "", email: "", phone: "", message: "", consent: false });
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/5518998080836?text=Olá! Gostaria de saber mais sobre os serviços da HME.", "_blank");
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Carousel */}
        <section className="relative h-screen overflow-hidden">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              <div className="hero-overlay absolute inset-0" />
              <div className="relative h-full flex items-center justify-center text-white">
                <div className="container text-center">
                  <h1 className="mb-6 animate-fade-in max-w-4xl mx-auto">
                    {slide.title}
                  </h1>
                  <p className="text-xl mb-8 max-w-2xl mx-auto animate-slide-up">
                    {slide.subtitle}
                  </p>
                  <Button size="lg" asChild className="animate-slide-up">
                    <Link to={slide.link}>{slide.cta}</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
          
          {/* Carousel Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
            aria-label="Slide anterior"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
            aria-label="Próximo slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? "bg-white" : "bg-white/50"
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section className="section-padding bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="mb-4">Nossos Serviços</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Três grandes frentes de atuação com soluções especializadas 
                para fortalecer sua instituição
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="card-hover">
                <CardContent className="p-8 text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-4">Captação de Recursos</h3>
                  <p className="text-muted-foreground mb-6">
                    Diagnóstico institucional, elaboração de projetos e captação 
                    de recursos federais com total compliance e transparência.
                  </p>
                  <Button variant="outline" asChild>
                    <Link to="/servicos#captacao">Saiba Mais</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardContent className="p-8 text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-4">Serviços Médicos</h3>
                  <p className="text-muted-foreground mb-6">
                    Alocação e gestão de equipes médicas especializadas, 
                    garantindo qualidade no atendimento e eficiência operacional.
                  </p>
                  <Button variant="outline" asChild>
                    <Link to="/servicos#medicos">Saiba Mais</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardContent className="p-8 text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Building className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-4">Clínicas de Hemodiálise</h3>
                  <p className="text-muted-foreground mb-6">
                    Soluções completas para implantação e gestão de clínicas, 
                    desde o projeto até a operação com normas da ANVISA.
                  </p>
                  <Button variant="outline" asChild>
                    <Link to="/servicos#hemodialise">Saiba Mais</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="section-padding bg-muted">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="mb-4">Missão, Visão e Valores</h2>
              <p className="text-lg text-muted-foreground">
                Os princípios que guiam nossa atuação há mais de 15 anos
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center p-8">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-4 text-primary">Missão</h3>
                <p>
                  Fortalecer instituições públicas e privadas por meio de soluções 
                  especializadas, sempre priorizando a <strong>legalidade</strong> e o 
                  <strong>bem-estar das pessoas</strong>.
                </p>
              </Card>

              <Card className="text-center p-8">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-4 text-primary">Visão</h3>
                <p>
                  Ser <strong>referência nacional</strong> em soluções para fortalecimento 
                  institucional, transformando realidades e impactando positivamente a sociedade.
                </p>
              </Card>

              <Card className="text-center p-8">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-4 text-primary">Valores</h3>
                <div className="space-y-2 font-telegraf text-sm">
                  <div><strong>Humanização</strong> • <strong>Respeito</strong></div>
                  <div><strong>Integridade</strong> • <strong>Ética</strong></div>
                  <div><strong>Inovação</strong> • <strong>Responsabilidade</strong></div>
                  <div><strong>Eficácia no cuidado de pessoas</strong></div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section className="section-padding bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="mb-4">Clientes que Confiam</h2>
              <p className="text-lg text-muted-foreground">
                Instituições de todo o Brasil que escolheram a HME
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              {/* Logo placeholders */}
              {[...Array(8)].map((_, i) => (
                <div 
                  key={i} 
                  className="h-20 bg-muted rounded-lg flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity"
                >
                  <span className="text-sm font-telegraf text-muted-foreground">
                    Cliente {i + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Courses CTA */}
        <section className="section-padding gradient-primary text-white">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="mb-4">Conheça nossos cursos</h2>
                <p className="text-xl mb-8">
                  Capacitação especializada em plataformas governamentais com 
                  instrutores experientes e certificação reconhecida no mercado.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" variant="secondary" asChild>
                    <Link to="/cursos">Conheça os Cursos</Link>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
                  >
                    Solicitar Proposta
                  </Button>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                  <CardContent className="p-6 text-center">
                    <GraduationCap className="h-12 w-12 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">14 Cursos</h3>
                    <p className="text-sm opacity-90">Especializados</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                  <CardContent className="p-6 text-center">
                    <Users className="h-12 w-12 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">500+</h3>
                    <p className="text-sm opacity-90">Capacitados</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                  <CardContent className="p-6 text-center">
                    <Award className="h-12 w-12 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Certificação</h3>
                    <p className="text-sm opacity-90">Reconhecida</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                  <CardContent className="p-6 text-center">
                    <CheckCircle className="h-12 w-12 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Resultados</h3>
                    <p className="text-sm opacity-90">Comprovados</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Performance Section */}
        <section className="section-padding bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="mb-4">Nossa Atuação</h2>
              <p className="text-lg text-muted-foreground">
                Vídeos e depoimentos sobre nosso trabalho
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="card-hover overflow-hidden">
                  <div className="relative aspect-video bg-muted">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center">
                        <Play className="h-8 w-8 text-primary ml-1" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">Vídeo {i + 1}</h3>
                    <p className="text-sm text-muted-foreground">
                      Conheça mais sobre nossos serviços e resultados alcançados
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Contact */}
        <section className="section-padding bg-muted">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="mb-4">Fale Conosco</h2>
              <p className="text-lg text-muted-foreground">
                Entre em contato através dos nossos canais
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card className="text-center p-6 card-hover">
                <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">E-mail</h3>
                <a 
                  href="mailto:solucoes@hmesaude.com.br" 
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  solucoes@hmesaude.com.br
                </a>
              </Card>

              <Card className="text-center p-6 card-hover">
                <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Telefone</h3>
                <a 
                  href="tel:+5518998080836" 
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  (18) 99808-0836
                </a>
              </Card>

              <Card className="text-center p-6 card-hover">
                <Clock className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Horário</h3>
                <p className="text-muted-foreground text-sm">
                  Seg. a Sex. das 8h às 18h
                </p>
              </Card>

              <Card className="text-center p-6 card-hover">
                <div className="flex justify-center gap-2 mb-4">
                  <Instagram className="h-6 w-6 text-primary" />
                  <Linkedin className="h-6 w-6 text-primary" />
                  <Youtube className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Redes Sociais</h3>
                <p className="text-muted-foreground text-sm">Siga-nos</p>
              </Card>
            </div>

            <div className="flex justify-center gap-4">
              <Button size="lg" onClick={handleWhatsApp} className="whatsapp-button">
                WhatsApp
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/fale-conosco">Fale Conosco</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Addresses & Contact Form */}
        <section className="section-padding bg-white">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Addresses */}
              <div>
                <h2 className="mb-8">Nossos Endereços</h2>
                
                <div className="space-y-6">
                  <Card className="card-hover">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                          <MapPin className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">Matriz</h3>
                          <p className="text-muted-foreground mb-3">
                            Rua Padre João Goetz, 501<br />
                            Presidente Prudente/SP - CEP: 19061-460
                          </p>
                          <Button size="sm" variant="outline" asChild>
                            <a 
                              href="https://maps.google.com/?q=Rua+Padre+João+Goetz,+501,+Presidente+Prudente" 
                              target="_blank" 
                              rel="noopener noreferrer"
                            >
                              Ver no mapa
                            </a>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="card-hover">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                          <MapPin className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">Filial Roraima</h3>
                          <p className="text-muted-foreground mb-3">
                            Av. Ville Roy, 5618, Sala 15<br />
                            Rorainópolis/RR - CEP: 69301-000
                          </p>
                          <Button size="sm" variant="outline" asChild>
                            <a 
                              href="https://maps.google.com/?q=Av+Ville+Roy,+5618,+Rorainópolis" 
                              target="_blank" 
                              rel="noopener noreferrer"
                            >
                              Ver no mapa
                            </a>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="card-hover">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                          <MapPin className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">Filial Rosana</h3>
                          <p className="text-muted-foreground mb-3">
                            Rua do Estádio, 619, Quadra 108<br />
                            Bairro Primavera, Rosana/SP - CEP: 19274-000
                          </p>
                          <Button size="sm" variant="outline" asChild>
                            <a 
                              href="https://maps.google.com/?q=Rua+do+Estádio,+619,+Rosana" 
                              target="_blank" 
                              rel="noopener noreferrer"
                            >
                              Ver no mapa
                            </a>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Contact Form */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="mb-6">Deixe seu contato</h2>
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Nome *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email">E-mail *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone">Telefone *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Mensagem</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                        rows={4}
                        placeholder="Como podemos ajudar?"
                      />
                    </div>
                    
                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="consent"
                        checked={formData.consent}
                        onCheckedChange={(checked) => setFormData(prev => ({ ...prev, consent: !!checked }))}
                      />
                      <Label htmlFor="consent" className="text-sm leading-relaxed">
                        Autorizo o uso dos meus dados conforme a Política de Privacidade *
                      </Label>
                    </div>
                    
                    <Button type="submit" size="lg" className="w-full">
                      Enviar Contato
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;