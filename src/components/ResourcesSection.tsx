import { motion } from "framer-motion";
import { BookOpen, Code2, Wrench, ArrowRight, ExternalLink, Newspaper, Shield, Zap } from "lucide-react";

const resources = [
  {
    icon: Newspaper,
    accent: "text-cyan-accent",
    accentBg: "bg-cyan-accent/10",
    borderColor: "border-cyan-accent/20",
    glowColor: "bg-cyan-accent",
    title: "Blog",
    subtitle: "Guide, analisi e novità",
    desc: "Articoli approfonditi sulla sicurezza delle web app, best practice per sviluppatori e analisi delle vulnerabilità più comuni nel codice generato da AI.",
    href: "https://blog.vibescudo.it/",
    cta: "Leggi il blog",
    highlights: ["Guide pratiche di sicurezza", "Analisi vulnerabilità reali", "News dal mondo cybersec"],
  },
  {
    icon: Code2,
    accent: "text-primary",
    accentBg: "bg-primary/10",
    borderColor: "border-primary/20",
    glowColor: "bg-primary",
    title: "Enciclopedia del Codice Sicuro",
    subtitle: "Il tuo riferimento definitivo",
    desc: "Una raccolta completa e strutturata di pattern sicuri, esempi di codice e anti-pattern da evitare. Tutto ciò che serve per scrivere codice a prova di attacco.",
    href: "https://codicesicuro.vibescudo.it/",
    cta: "Esplora l'enciclopedia",
    highlights: ["Pattern sicuri per ogni linguaggio", "Anti-pattern con spiegazioni", "Esempi copia-incolla"],
  },
  {
    icon: Wrench,
    accent: "text-warning",
    accentBg: "bg-warning/10",
    borderColor: "border-warning/20",
    glowColor: "bg-warning",
    title: "Free Tools",
    subtitle: "Strumenti gratuiti di analisi",
    desc: "Una suite di strumenti gratuiti per analizzare la sicurezza del tuo sito: SSL checker, DNS security, email security, JWT decoder, hash generator e molto altro.",
    href: "https://tools.vibescudo.it/",
    cta: "Usa i free tools",
    highlights: ["SSL & DNS checker", "JWT decoder & hash generator", "100% gratuiti, nessun login"],
  },
];

const ResourcesSection = () => {
  return (
    <section className="px-4 py-24 relative" id="risorse">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-accent/20 bg-cyan-accent/5 px-5 py-2.5 text-sm text-cyan-accent font-medium mb-6">
            <BookOpen className="h-4 w-4" />
            Risorse gratuite
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Impara, analizza,{" "}
            <span className="text-gradient-red">proteggiti</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            VibeScudo non è solo uno scanner. È un{" "}
            <span className="text-foreground font-medium">ecosistema completo</span> di risorse 
            per aiutarti a capire la sicurezza e a scrivere codice migliore.{" "}
            <span className="text-cyan-accent font-medium">Tutto gratuito</span>.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {resources.map((r, i) => (
            <motion.a
              key={r.title}
              href={r.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group rounded-2xl border ${r.borderColor} bg-card p-8 card-hover relative overflow-hidden block`}
            >
              <div className={`absolute top-0 right-0 w-[180px] h-[180px] rounded-full opacity-5 blur-[60px] ${r.glowColor} pointer-events-none`} />

              <div className="relative">
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${r.accentBg} mb-5 group-hover:scale-110 transition-transform`}>
                  <r.icon className={`h-7 w-7 ${r.accent}`} />
                </div>

                <h3 className="font-display text-xl font-bold mb-1">{r.title}</h3>
                <p className={`text-xs font-semibold tracking-wider uppercase ${r.accent} mb-4`}>{r.subtitle}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{r.desc}</p>

                <ul className="space-y-2 mb-6">
                  {r.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-xs text-secondary-foreground">
                      <Zap className={`h-3 w-3 shrink-0 ${r.accent}`} />
                      {h}
                    </li>
                  ))}
                </ul>

                <span className={`inline-flex items-center gap-2 text-sm font-semibold ${r.accent} group-hover:gap-3 transition-all`}>
                  {r.cta}
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
