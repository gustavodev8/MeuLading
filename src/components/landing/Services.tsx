import { useFadeUp } from "@/hooks/useFadeUp";
import { Badge } from "@/components/ui/badge";
import {
  Handshake,
  Globe,
  Server,
  Bot,
  ShoppingCart,
} from "lucide-react";

const services = [
  {
    icon: Handshake,
    title: "Coparticipação em SaaS",
    desc: "Desenvolvimento em parceria com participação nos lucros. Ideal para quem tem a ideia mas precisa de um sócio técnico.",
    featured: true,
  },
  {
    icon: Globe,
    title: "Sites para Empreendedores e MEIs",
    desc: "Landing pages e sites institucionais modernos que geram credibilidade e atraem clientes.",
    featured: false,
  },
  {
    icon: Server,
    title: "Sistemas Web Sob Medida",
    desc: "Sistemas completos com login, banco de dados e painel administrativo personalizados para seu negócio.",
    featured: false,
  },
  {
    icon: Bot,
    title: "Integração com IA",
    desc: "Chatbots, assistentes inteligentes e automações que otimizam processos e reduzem custos.",
    featured: false,
  },
  {
    icon: ShoppingCart,
    title: "E-commerce e Lojas Online",
    desc: "Lojas online com catálogo de produtos, pagamentos integrados e painel de gestão.",
    featured: false,
  },
];

const Services = () => {
  const ref = useFadeUp();

  return (
    <section id="servicos" ref={ref} className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-14 fade-up">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">O que eu faço</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Serviços</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`fade-up group relative bg-card rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 ${
                s.featured
                  ? "border-primary shadow-lg shadow-primary/10"
                  : "border-border hover:border-primary/40"
              }`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              {s.featured && (
                <Badge className="absolute -top-3 right-4 bg-primary text-primary-foreground">
                  Destaque
                </Badge>
              )}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                s.featured ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
              }`}>
                <s.icon size={24} />
              </div>
              <h3 className="font-display text-lg font-semibold text-card-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
