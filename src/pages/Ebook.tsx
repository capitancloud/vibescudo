import { motion } from "framer-motion";
import { Shield, BookOpen, Download, CheckCircle2, Lock, Code2, Bug, AlertTriangle, Database, Globe, ArrowLeft, ArrowRight, Zap, FileText, Users, Star } from "lucide-react";
import { Link } from "react-router-dom";

const chapters = [
  {
    icon: Code2,
    title: "Cos'è il Vibe Coding",
    desc: "Come funziona, da dove nasce e perché la sicurezza è il tema centrale di questa rivoluzione.",
  },
  {
    icon: AlertTriangle,
    title: "Statistiche e rischi reali",
    desc: "L'80% delle app vibe-coded contiene vulnerabilità sfruttabili. I numeri che contano e i pattern di rischio.",
  },
  {
    icon: Shield,
    title: "Best practice di sicurezza",
    desc: "8 regole semplici per rendere sicuro il codice generato dall'AI: dal database alle API.",
  },
  {
    icon: Database,
    title: "Vulnerabilità critiche",
    desc: "RLS misconfiguration, API key exposure, SQL injection, authentication bypass e molto altro.",
  },
  {
    icon: Lock,
    title: "Vulnerabilità high-priority",
    desc: "XSS, CSRF, CORS, IDOR, brute force, credential stuffing, NoSQL injection e API security.",
  },
  {
    icon: Bug,
    title: "Vulnerabilità medium e checklist",
    desc: "Source map exposure, cookie insicuri, clickjacking, mixed content e una checklist operativa di 30 controlli.",
  },
];

const benefits = [
  "100+ pagine di contenuti pratici e actionable",
  "21 vulnerabilità analizzate in dettaglio con esempi reali",
  "Checklist di 30 controlli suddivisi in 6 categorie",
  "Pattern sicuri copia-incolla per ogni linguaggio",
  "Guide step-by-step per Firebase, Supabase e PostgreSQL",
  "Aggiornato con le ultime minacce del 2025",
];

const EBOOK_DOWNLOAD_URL = "#"; // Placeholder — verrà aggiornato

const Ebook = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10">
        {/* Nav minimal */}
        <div className="mx-auto max-w-6xl px-4 py-6">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Torna alla home
            </Link>
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-red glow-red-sm">
                <Shield className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-display text-lg font-bold tracking-tight">
                Vibe<span className="text-gradient-red">Scudo</span>
              </span>
            </div>
          </div>
        </div>

        {/* Hero */}
        <section className="px-4 pt-12 pb-20">
          <div className="mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left — Text */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary font-semibold mb-6">
                  <BookOpen className="h-4 w-4" />
                  Ebook gratuito — 100+ pagine
                </span>

                <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                  Vibe Coding e Sicurezza:{" "}
                  <span className="text-gradient-red">Playbook Operativo</span>
                </h1>
                <p className="font-display text-xl sm:text-2xl text-muted-foreground font-medium mb-6">
                  per Ridurre Bug e Vulnerabilità
                </p>

                <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg">
                  La guida definitiva per chi sviluppa con AI. Tutto ciò che devi sapere su 
                  vulnerabilità, best practice e pattern sicuri — in un unico documento pratico 
                  e actionable. <span className="text-foreground font-medium">Scaricalo gratis</span>.
                </p>

                {/* CTA */}
                <a
                  href={EBOOK_DOWNLOAD_URL}
                  className="group inline-flex items-center gap-3 rounded-xl bg-gradient-red px-8 py-4 text-lg font-bold text-primary-foreground transition-all hover:opacity-90 glow-red mb-4"
                >
                  <Download className="h-5 w-5 group-hover:animate-bounce" />
                  Scarica l'ebook gratuito
                </a>
                <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                  <Lock className="h-3 w-3" />
                  PDF gratuito • Nessuna carta di credito • Download immediato
                </p>
              </motion.div>

              {/* Right — Visual card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex justify-center"
              >
                <div className="relative">
                  {/* Ebook mockup */}
                  <div className="w-[280px] sm:w-[320px] rounded-2xl border border-primary/30 bg-card p-8 glow-red-lg relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
                    <div className="relative">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-red mb-6">
                        <Shield className="h-8 w-8 text-primary-foreground" />
                      </div>
                      <p className="text-xs text-primary font-bold uppercase tracking-widest mb-3">VibeScudo Ebook</p>
                      <h3 className="font-display text-lg font-bold leading-snug mb-2">
                        Vibe Coding e Sicurezza
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                        Playbook Operativo per Ridurre Bug e Vulnerabilità
                      </p>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground border-t border-border pt-4">
                        <span className="flex items-center gap-1"><FileText className="h-3 w-3" /> 100+ pagine</span>
                        <span className="flex items-center gap-1"><Zap className="h-3 w-3 text-primary" /> Gratuito</span>
                      </div>
                    </div>
                  </div>
                  {/* Floating badges */}
                  <div className="absolute -top-3 -right-3 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground animate-pulse-slow">
                    GRATIS
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Social proof strip */}
        <section className="px-4 py-8 border-y border-border/50">
          <div className="mx-auto max-w-4xl flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <span className="flex items-center gap-2"><FileText className="h-4 w-4 text-primary" /> 100+ pagine</span>
            <span className="flex items-center gap-2"><Bug className="h-4 w-4 text-primary" /> 21 vulnerabilità</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> 30 controlli di sicurezza</span>
            <span className="flex items-center gap-2"><Star className="h-4 w-4 text-primary" /> Aggiornato 2025</span>
          </div>
        </section>

        {/* Cosa troverai */}
        <section className="px-4 py-24">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
                Cosa troverai{" "}
                <span className="text-gradient-red">nell'ebook</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Ogni capitolo è pensato per essere pratico, con esempi di codice reali, 
                pattern sicuri e anti-pattern da evitare.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {chapters.map((ch, i) => (
                <motion.div
                  key={ch.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-2xl border border-border bg-card p-6 card-hover"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mb-4">
                    <ch.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-bold mb-2">{ch.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{ch.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefici + CTA */}
        <section className="px-4 py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/3 via-transparent to-transparent pointer-events-none" />
          <div className="mx-auto max-w-4xl relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-primary/20 bg-card p-8 sm:p-12"
            >
              <div className="text-center mb-10">
                <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
                  Perché{" "}
                  <span className="text-gradient-red">scaricarlo?</span>
                </h2>
                <p className="text-muted-foreground">Tutto il know-how di VibeScudo, condensato in un playbook operativo.</p>
              </div>

              <ul className="grid sm:grid-cols-2 gap-4 mb-10">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-secondary-foreground">{b}</span>
                  </li>
                ))}
              </ul>

              <div className="text-center">
                <a
                  href={EBOOK_DOWNLOAD_URL}
                  className="group inline-flex items-center gap-3 rounded-xl bg-gradient-red px-8 py-4 text-lg font-bold text-primary-foreground transition-all hover:opacity-90 glow-red"
                >
                  <Download className="h-5 w-5 group-hover:animate-bounce" />
                  Scarica ora — È gratuito
                </a>
                <p className="text-xs text-muted-foreground mt-3">
                  PDF di 100+ pagine • Download immediato • Nessun costo
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* A chi è rivolto */}
        <section className="px-4 py-24">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
                A chi è{" "}
                <span className="text-gradient-red">rivolto?</span>
              </h2>
              <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
                Che tu sia un vibe coder, un developer esperto o un fondatore non tecnico, 
                questo ebook ti darà gli strumenti per proteggere la tua app.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { icon: Zap, title: "Vibe Coder", desc: "Usi AI per generare codice? Impara a farlo in sicurezza." },
                { icon: Code2, title: "Developer", desc: "Approfondisci le vulnerabilità specifiche del codice AI-generated." },
                { icon: Users, title: "Founder / PM", desc: "Comprendi i rischi e cosa chiedere al tuo team tecnico." },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-2xl border border-border bg-card p-6"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mb-4 mx-auto">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-display font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Scanner */}
        <section className="px-4 py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent pointer-events-none" />
          <div className="mx-auto max-w-4xl relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-warning/20 bg-card p-8 sm:p-12 text-center relative overflow-hidden"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] rounded-full opacity-10 blur-[80px] bg-warning pointer-events-none" />
              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full border border-warning/20 bg-warning/10 px-4 py-2 text-sm text-warning font-semibold mb-6">
                  <Zap className="h-4 w-4" />
                  Passa all'azione
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
                  Hai letto la teoria?{" "}
                  <span className="text-gradient-red">Ora testa la tua app.</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed">
                  L'ebook ti insegna a riconoscere le vulnerabilità.{" "}
                  <span className="text-foreground font-medium">VibeScudo le trova per te in 30 secondi</span>.
                  21 controlli di sicurezza automatizzati sulla tua web app — senza installare nulla.
                </p>
                <div className="inline-flex items-center gap-3 rounded-xl border border-border bg-muted/50 px-6 py-3 mb-8">
                  <span className="font-mono-bold text-3xl text-foreground">30<span className="text-primary text-xl">s</span></span>
                  <div className="h-8 w-px bg-border" />
                  <div className="text-left text-sm">
                    <span className="font-semibold text-foreground block">Scansione completa</span>
                    <span className="text-muted-foreground">Solo €9,90 • Due report PDF inclusi</span>
                  </div>
                </div>
                <div>
                  <Link
                    to="/"
                    className="group inline-flex items-center gap-3 rounded-xl bg-gradient-red px-8 py-4 text-lg font-bold text-primary-foreground transition-all hover:opacity-90 glow-red"
                  >
                    <Shield className="h-5 w-5" />
                    Scansiona la tua app — €9,90
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <p className="text-xs text-muted-foreground mt-3">
                    Scansione non invasiva • Zero exploit • Risultati immediati
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer minimal */}
        <footer className="border-t border-border px-4 py-10">
          <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-red">
                <Shield className="h-3.5 w-3.5 text-primary-foreground" />
              </div>
              <span className="font-display text-sm font-bold">
                Vibe<span className="text-gradient-red">Scudo</span>
              </span>
            </div>
            <p className="text-xs text-muted-foreground">
              © 2025 VibeScudo. Tutti i diritti riservati.
            </p>
            <div className="flex gap-4 text-xs text-muted-foreground">
              <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy</Link>
              <Link to="/cookie-policy" className="hover:text-primary transition-colors">Cookie</Link>
              <Link to="/disclaimer" className="hover:text-primary transition-colors">Disclaimer</Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Ebook;
