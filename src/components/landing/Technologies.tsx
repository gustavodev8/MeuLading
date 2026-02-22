import { useFadeUp } from "@/hooks/useFadeUp";

const techs = [
  "Node.js",
  "JavaScript",
  "HTML/CSS",
  "PostgreSQL",
  "React",
  "Express",
  "API REST",
  "TypeScript",
];

const Technologies = () => {
  const ref = useFadeUp();

  return (
    <section id="tecnologias" ref={ref} className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-14 fade-up">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Stack</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Tecnologias</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3 fade-up">
          {techs.map((t) => (
            <span
              key={t}
              className="px-5 py-2.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
