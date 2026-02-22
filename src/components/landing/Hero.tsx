import { useFadeUp } from "@/hooks/useFadeUp";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const codeSnippet = `const projeto = {
  cliente: "Você",
  status: "em desenvolvimento",
  tech: ["React", "Node.js"],
  prazo: "dentro do combinado ✓"
};

buildSolution(projeto);
// → Solução entregue com sucesso 🚀`;

const Hero = () => {
  const ref = useFadeUp();

  return (
    <section ref={ref} className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5 -z-10" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div className="fade-up">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">
            Desenvolvedor Freelancer
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground mb-6">
            Transforme sua ideia em{" "}
            <span className="text-primary">solução digital</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg mb-8">
            Desenvolvedor especializado em criar soluções sob medida para empreendedores, MEIs e startups que querem crescer com tecnologia.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild variant="outline" size="lg" className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <a href="#servicos">Ver Serviços</a>
            </Button>
            <Button asChild size="lg" className="rounded-full gap-2">
              <a href="#contato">
                Falar Agora <ArrowRight size={18} />
              </a>
            </Button>
          </div>
        </div>

        {/* Right - code card */}
        <div className="fade-up hidden md:block" style={{ transitionDelay: "0.2s" }}>
          <div className="relative bg-green-dark rounded-2xl p-6 shadow-2xl shadow-primary/20 border border-primary/20">
            <div className="flex gap-2 mb-4">
              <span className="w-3 h-3 rounded-full bg-destructive/70" />
              <span className="w-3 h-3 rounded-full bg-primary/50" />
              <span className="w-3 h-3 rounded-full bg-primary" />
            </div>
            <pre className="text-sm font-mono text-primary/90 leading-relaxed overflow-x-auto">
              <code>{codeSnippet}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
