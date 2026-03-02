import { motion } from "framer-motion";
import { FileText, Bot, CheckCircle, Sparkles, ArrowRight, Download, BookOpen, Wrench } from "lucide-react";

interface Props {
  scannerUrl: string;
}

const ReportSection = ({ scannerUrl }: Props) => {
  return (
    <section className="px-4 py-24 relative">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-5 py-2.5 text-sm text-primary font-medium mb-6">
            <Download className="h-4 w-4" />
            Due report, zero ambiguità
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Non solo diagnosi.<br />
            <span className="text-gradient-red">Anche la cura.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Con ogni scansione ricevi <span className="text-foreground font-medium">due documenti PDF professionali</span>: 
            il report tecnico completo e un piano di remediation personalizzato generato da modelli AI avanzati. 
            Tutto ciò che serve per capire il problema <span className="text-foreground font-medium">e risolverlo</span>.
          </p>
        </motion.div>

        {/* Two report cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {/* Technical Report */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-cyan-accent/20 bg-card p-8 card-hover relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-[200px] h-[200px] rounded-full opacity-5 blur-[60px] bg-cyan-accent pointer-events-none" />
            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-accent/10">
                  <FileText className="h-7 w-7 text-cyan-accent" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold">Report Tecnico</h3>
                  <span className="text-xs font-semibold tracking-wider text-cyan-accent">PDF DETTAGLIATO</span>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                L'analisi completa e oggettiva del tuo sito. Ogni vulnerabilità documentata con precisione chirurgica: 
                cosa abbiamo trovato, dove si trova, quanto è grave e perché è un rischio.
              </p>

              <ul className="space-y-3">
                {[
                  "Risultato di tutti i 21 controlli con stato pass/fail",
                  "Livello di severità per ogni vulnerabilità (critico, alto, medio, basso)",
                  "Dettagli tecnici precisi: header mancanti, file esposti, endpoint vulnerabili",
                  "Evidence con screenshot e snippet delle risposte HTTP",
                  "Score complessivo di sicurezza del sito",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <CheckCircle className="h-4 w-4 shrink-0 text-cyan-accent mt-0.5" />
                    <span className="text-secondary-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* AI Remediation Report */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-primary/20 bg-card p-8 card-hover relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-[200px] h-[200px] rounded-full opacity-8 blur-[60px] bg-gradient-red pointer-events-none" />
            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                  <Bot className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold">Report di Remediation AI</h3>
                  <span className="text-xs font-semibold tracking-wider text-primary">GENERATO DA AI AVANZATA</span>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Un piano d'azione personalizzato generato da modelli AI di ultima generazione. 
                Non consigli generici: <span className="text-foreground font-medium">istruzioni specifiche per il tuo sito</span>, 
                con codice pronto da copiare e incollare.
              </p>

              <ul className="space-y-3">
                {[
                  "Guida passo-passo per risolvere ogni vulnerabilità trovata",
                  "Snippet di codice pronti all'uso per le fix più comuni",
                  "Prioritizzazione intelligente: cosa risolvere prima e perché",
                  "Spiegazioni chiare anche per chi non è un esperto di sicurezza",
                  "Consigli preventivi per evitare le stesse vulnerabilità in futuro",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <Sparkles className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                    <span className="text-secondary-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Why this approach */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-center mb-10">
            Perché <span className="text-gradient-red">due report</span> fanno la differenza
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: BookOpen,
                title: "Completezza totale",
                desc: "Diagnosi tecnica + piano d'azione. Non ti lasciamo solo con una lista di problemi: ti diciamo esattamente come risolverli.",
                color: "text-cyan-accent",
                bg: "bg-cyan-accent/10",
              },
              {
                icon: Sparkles,
                title: "Intelligenza contestuale",
                desc: "L'AI analizza i tuoi risultati specifici e genera consigli su misura, non risposte generiche copiate da un manuale.",
                color: "text-primary",
                bg: "bg-primary/10",
              },
              {
                icon: Wrench,
                title: "Actionable al 100%",
                desc: "Codice pronto, configurazioni da copiare, step precisi. Puoi iniziare a risolvere tutto in pochi minuti dalla lettura.",
                color: "text-warning",
                bg: "bg-warning/10",
              },
              {
                icon: Download,
                title: "PDF condivisibili",
                desc: "Documenti professionali da condividere con il tuo team, il tuo CTO o il tuo cliente. Perfetti come deliverable.",
                color: "text-success",
                bg: "bg-success/10",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-border bg-card p-7 card-hover text-center"
              >
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${item.bg} mx-auto mb-4`}>
                  <item.icon className={`h-6 w-6 ${item.color}`} />
                </div>
                <h4 className="font-semibold text-base mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Comparison callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center"
        >
          <p className="text-lg sm:text-xl font-semibold leading-relaxed max-w-3xl mx-auto">
            Un penetration test tradizionale costa <span className="text-primary">migliaia di euro</span> e settimane di attesa.
            <br />
            Con VibeScudo hai <span className="text-foreground">diagnosi + remediation in 30 secondi</span> a <span className="text-primary font-bold">€9,90</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ReportSection;
