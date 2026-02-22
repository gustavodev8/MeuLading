import { useFadeUp } from "@/hooks/useFadeUp";
import { Briefcase, Clock, ThumbsUp, Zap } from "lucide-react";

const stats = [
  { icon: Briefcase, value: "+30", label: "Projetos Entregues" },
  { icon: Clock, value: "3+", label: "Anos de Experiência" },
  { icon: ThumbsUp, value: "100%", label: "Clientes Satisfeitos" },
  { icon: Zap, value: "24h", label: "Tempo de Resposta" },
];

const Stats = () => {
  const ref = useFadeUp();

  return (
    <section ref={ref} className="py-12 bg-accent">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 fade-up">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <s.icon className="mx-auto mb-3 text-primary" size={28} />
              <p className="font-display text-3xl font-bold text-accent-foreground">{s.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
