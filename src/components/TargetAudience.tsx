import { motion } from "framer-motion";
import { Shield, Users, Building2, Rocket } from "lucide-react";

const audiences = [
  {
    icon: Rocket,
    title: "Indie hacker & solopreneur",
    desc: "Hai lanciato la tua app con Cursor o Lovable e vuoi assicurarti che sia sicura prima di mandarla ai tuoi utenti.",
    highlight: "Il tuo MVP merita di essere sicuro quanto funzionale.",
  },
  {
    icon: Users,
    title: "Freelancer & agenzie",
    desc: "Consegni progetti ai tuoi clienti e vuoi dimostrare che la sicurezza è una tua priorità. Un report VibeScudo è la prova.",
    highlight: "Aggiungi valore ai tuoi deliverable con un audit di sicurezza.",
  },
  {
    icon: Building2,
    title: "Startup & team di prodotto",
    desc: "State crescendo velocemente e la sicurezza non può essere un pensiero secondario. Ogni deploy merita un check.",
    highlight: "Integra la sicurezza nel tuo workflow senza rallentarlo.",
  },
  {
    icon: Shield,
    title: "CTO & technical lead",
    desc: "Il tuo team usa AI per accelerare lo sviluppo. Vuoi la certezza che non stia introducendo vulnerabilità nel codebase.",
    highlight: "Supervisione automatica senza micromanagement.",
  },
];

const TargetAudience = () => {
  return (
    <section className="px-4 py-24 relative">
      <div className="absolute inset-0 bg-gradient-red-subtle opacity-20 pointer-events-none" />
      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Pensato per chi <span className="text-gradient-red">costruisce con l'AI</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Non importa se sei un founder solo o un team di 50 persone. Se usi AI per scrivere codice, VibeScudo è per te.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {audiences.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-card p-8 card-hover"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-5">
                <a.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3">{a.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">{a.desc}</p>
              <p className="text-sm text-primary font-medium italic">"{a.highlight}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
