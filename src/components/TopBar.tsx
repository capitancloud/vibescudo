import { BookOpen, Code2, Wrench, ExternalLink, Sparkles, Gift } from "lucide-react";

const resources = [
  { label: "Blog", href: "https://blog.vibescudo.it/", icon: BookOpen },
  { label: "Codice Sicuro", href: "https://codicesicuro.vibescudo.it/", icon: Code2 },
  { label: "Free Tools", href: "https://tools.vibescudo.it/", icon: Wrench },
];

const TopBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] border-b border-primary/20 bg-gradient-to-r from-primary/15 via-primary/10 to-primary/15 backdrop-blur-md">
      <div className="mx-auto max-w-6xl flex items-center justify-center px-4 py-2 gap-2 sm:gap-4">
        {/* Badge esortativo */}
        <span className="hidden lg:inline-flex items-center gap-1.5 rounded-full bg-primary/20 border border-primary/30 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary animate-pulse-slow mr-1">
          <Gift className="h-3 w-3" />
          Gratis per te
        </span>

        {resources.map((r) => (
          <a
            key={r.label}
            href={r.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs sm:text-sm font-semibold text-primary hover:bg-primary/20 hover:border-primary/50 hover:shadow-[0_0_15px_hsl(0_72%_51%/0.3)] transition-all duration-300"
          >
            <r.icon className="h-3.5 w-3.5" />
            {r.label}
            <ExternalLink className="h-3 w-3 opacity-50 group-hover:opacity-100 transition-opacity" />
          </a>
        ))}

        {/* Freccia lampeggiante */}
        <span className="hidden sm:inline-flex items-center gap-1 text-[11px] text-primary/70 font-medium animate-pulse">
          <Sparkles className="h-3 w-3" />
          Esplora!
        </span>
      </div>
    </div>
  );
};

export default TopBar;
