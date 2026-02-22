import { useFadeUp } from "@/hooks/useFadeUp";
import { MessageSquare, FileText, Code2, Rocket } from "lucide-react";

const steps = [
  { icon: MessageSquare, title: "Conversa Inicial", desc: "Entendo seu projeto e suas necessidades." },
  { icon: FileText, title: "Proposta Clara", desc: "Prazo, escopo e investimento definidos." },
  { icon: Code2, title: "Desenvolvimento", desc: "Construção com atualizações constantes." },
  { icon: Rocket, title: "Entrega e Suporte", desc: "Deploy + suporte pós-lançamento." },
];

const Process = () => {
  const ref = useFadeUp();

  return (
    <section id="processo" ref={ref} className="py-20 md:py-28 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-14 fade-up">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Processo simples</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Como Funciona</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <div key={s.title} className="fade-up text-center relative" style={{ transitionDelay: `${i * 0.12}s` }}>
              {/* Connector line (hidden on last & mobile) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/40 to-primary/10" />
              )}
              <div className="relative mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <s.icon className="text-primary" size={28} />
                <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
              </div>
              <h3 className="font-display font-semibold text-foreground mb-1">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
