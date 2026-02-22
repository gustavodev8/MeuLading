import { useFadeUp } from "@/hooks/useFadeUp";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";

const CtaSection = () => {
  const ref = useFadeUp();

  return (
    <section id="contato" ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-green-dark -z-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-green-dark via-green-medium/80 to-green-dark -z-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/15 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 md:px-8 text-center fade-up">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
          Pronto para tirar sua ideia do papel?
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
          Vamos conversar sobre o seu projeto. Sem compromisso, sem burocracia.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="rounded-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
            <a href="https://wa.me/5575998828532" target="_blank" rel="noopener noreferrer">
              Iniciar Projeto <ArrowRight size={18} />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full gap-2 border-white/30 text-white hover:bg-white/10"
          >
            <a href="https://github.com/gustavodev8" target="_blank" rel="noopener noreferrer">
              Ver Portfólio <ExternalLink size={18} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
