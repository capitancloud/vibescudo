import { BookOpen, Code2, Wrench, ExternalLink } from "lucide-react";

const resources = [
  { label: "Blog", href: "https://blog.vibescudo.it/", icon: BookOpen },
  { label: "Codice Sicuro", href: "https://codicesicuro.vibescudo.it/", icon: Code2 },
  { label: "Free Tools", href: "https://tools.vibescudo.it/", icon: Wrench },
];

const TopBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] border-b border-cyan-accent/10 bg-[hsl(0_0%_2%)]/90 backdrop-blur-md">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-4 py-1.5">
        <span className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground font-medium hidden sm:block">
          Risorse gratuite
        </span>
        <div className="flex items-center gap-1 sm:gap-4 mx-auto sm:mx-0">
          {resources.map((r) => (
            <a
              key={r.label}
              href={r.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md px-3 py-1 text-xs font-medium text-cyan-accent/80 hover:text-cyan-accent hover:bg-cyan-accent/5 transition-colors"
            >
              <r.icon className="h-3 w-3" />
              {r.label}
              <ExternalLink className="h-2.5 w-2.5 opacity-40" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
