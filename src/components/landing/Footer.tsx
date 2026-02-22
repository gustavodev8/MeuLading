import { Github, Linkedin, MessageCircle } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/gustavo", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/gustavo", label: "LinkedIn" },
  { icon: MessageCircle, href: "https://wa.me/5500000000000", label: "WhatsApp" },
];

const Footer = () => (
  <footer className="py-10 border-t border-border bg-background">
    <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
      <a href="#" className="font-display text-xl font-bold text-foreground">
        g<span className="text-primary">.</span>dev
      </a>

      <div className="flex items-center gap-4">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
          >
            <s.icon size={18} />
          </a>
        ))}
      </div>

      <p className="text-sm text-muted-foreground">© 2026 g.dev</p>
    </div>
  </footer>
);

export default Footer;
