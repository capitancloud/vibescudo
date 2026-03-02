import { motion } from "framer-motion";
import { Search, Zap, FileText, ArrowRight } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Search,
    title: "Registrati e inserisci l'URL",
    desc: "Crea un account in pochi secondi, poi copia e incolla l'indirizzo della tua web app. Non serve installare nulla, non serve accesso al codice. Se ha un URL pubblico, possiamo analizzarla.",
    detail: "Supportiamo qualsiasi sito pubblico: React, Next.js, Vue, Svelte, WordPress, custom e molto altro.",
  },
  {
    step: "02",
    icon: Zap,
    title: "Scansione automatica",
    desc: "In meno di 30 secondi, il nostro engine esegue 21 controlli di sicurezza distribuiti su 7 aree critiche. Tutto in modo passivo e non invasivo.",
    detail: "Zero installazione. Zero configurazione. Zero rischi per il tuo sito.",
  },
  {
    step: "03",
    icon: FileText,
    title: "Ricevi due report professionali",
    desc: "Ricevi due documenti PDF: un report tecnico dettagliato con tutte le vulnerabilità trovate e i livelli di rischio, e un report di remediation generato da modelli AI avanzati con istruzioni step-by-step e codice pronto per risolvere ogni problema.",
    detail: "Due report complementari: la diagnosi completa + il piano d'azione personalizzato. Perfetti da condividere con il tuo team.",
  },
];

interface Props {
  scannerUrl: string;
}

const HowItWorks = ({ scannerUrl }: Props) => {
  return (
    <section className="px-4 py-24" id="come-funziona">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-5 py-2.5 text-sm text-muted-foreground font-medium mb-6">
            Semplice e veloce
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Come funziona
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tre passaggi, zero complessità. Dalla URL al report in mezzo minuto.
          </p>
        </motion.div>

        <div className="space-y-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="flex flex-col md:flex-row items-start gap-6 rounded-2xl border border-border bg-card p-8 card-hover"
            >
              <div className="flex items-center gap-5 shrink-0">
                <span className="font-mono-bold text-4xl text-primary/30">{s.step}</span>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <s.icon className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-2">{s.desc}</p>
                <p className="text-sm text-muted-foreground/70 italic">{s.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href={scannerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-red px-10 py-5 text-lg font-bold text-primary-foreground transition-all hover:opacity-90 glow-red"
          >
            <Zap className="h-5 w-5" />
            Provalo adesso
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
