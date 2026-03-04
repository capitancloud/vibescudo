import { motion, AnimatePresence } from "framer-motion";
import { Shield, Search, AlertTriangle, Lock, Code2, Bug, Database, Globe, ArrowLeft, ArrowRight, Zap, Target, Eye, Skull, ShieldAlert, Calendar, X, Clock, CheckCircle2, FileWarning, ServerCrash } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const vulnerabilities = [
  { icon: Database, title: "SQL Injection", desc: "Verifica approfondita di ogni endpoint per iniezione SQL, blind injection e second-order injection." },
  { icon: Code2, title: "Cross-Site Scripting (XSS)", desc: "Ricerca di stored, reflected e DOM-based XSS con payload avanzati e bypass dei filtri." },
  { icon: ShieldAlert, title: "Authentication Bypass", desc: "Test di logiche di autenticazione, session management, JWT manipulation e privilege escalation." },
  { icon: FileWarning, title: "IDOR & Broken Access", desc: "Accesso non autorizzato a risorse tramite manipolazione di ID, path traversal e broken access control." },
  { icon: ServerCrash, title: "SSRF & Remote Code Exec", desc: "Server-Side Request Forgery, remote code execution e command injection su ogni superficie d'attacco." },
  { icon: Globe, title: "CSRF, CORS & API Abuse", desc: "Cross-Site Request Forgery, misconfigurazioni CORS, rate limiting assente e API security." },
];

const differences = [
  { label: "Scansione Standard €9,90", points: ["21 controlli automatizzati", "Report PDF immediato", "Vulnerabilità note e comuni", "Risultato in 30 secondi", "Perfetta come primo check"], highlight: false },
  { label: "Deep Scan — €299", points: ["Test manuali + automatizzati", "Simulazione di attacco reale", "Vulnerabilità critiche e zero-day", "Report dettagliato con remediation", "Follow-up e supporto dedicato"], highlight: true },
];

const DeepScan = () => {
  const [showModal, setShowModal] = useState(false);

  const handleBookClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-accent/5 rounded-full blur-[120px]" />
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

        {/* Scanner CTA top banner — rimando alla scansione base */}
        <div className="px-4 pt-4 pb-0">
          <div className="mx-auto max-w-6xl">
            <Link
              to="/"
              className="group flex items-center justify-center gap-3 rounded-xl border border-primary/20 bg-primary/5 hover:bg-primary/10 px-5 py-3 transition-all"
            >
              <Zap className="h-4 w-4 text-primary shrink-0" />
              <span className="text-sm text-muted-foreground">
                <span className="text-foreground font-semibold">Inizia con una scansione rapida</span> — Solo €9,90, risultato in 30 secondi
              </span>
              <ArrowRight className="h-4 w-4 text-primary shrink-0 transition-transform group-hover:translate-x-1" />
            </Link>
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
                  <Skull className="h-4 w-4" />
                  Scansione Approfondita
                </span>

                <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                  Deep Scan:{" "}
                  <span className="text-gradient-red">Trova le vulnerabilità</span>{" "}
                  che gli altri non vedono
                </h1>

                <p className="text-muted-foreground leading-relaxed mb-6 max-w-lg text-lg">
                  La scansione standard rileva i problemi più comuni.{" "}
                  <span className="text-foreground font-semibold">Il Deep Scan simula un attacco reale</span>{" "}
                  per scovare SQL Injection, XSS, authentication bypass e vulnerabilità critiche 
                  che richiedono analisi manuale esperta.
                </p>

                {/* Prezzo in evidenza */}
                <div className="inline-flex items-center gap-4 rounded-2xl border border-primary/20 bg-card px-6 py-4 mb-6">
                  <div>
                    <span className="font-display text-4xl font-bold text-foreground">€299</span>
                    <span className="text-muted-foreground text-sm ml-1">una tantum</span>
                  </div>
                  <div className="h-10 w-px bg-border" />
                  <div className="text-left text-sm">
                    <span className="text-foreground font-semibold block">Scansione completa</span>
                    <span className="text-muted-foreground">Report + remediation inclusi</span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-8 border-l-2 border-primary/30 pl-4">
                  Per chi vuole portare la sicurezza della propria app al livello più alto. 
                  Un'analisi su misura, condotta da esperti, con report dettagliato e supporto alla remediation.
                </p>

                {/* CTA */}
                <button
                  onClick={handleBookClick}
                  className="group inline-flex items-center gap-3 rounded-xl bg-gradient-red px-8 py-4 text-lg font-bold text-primary-foreground transition-all hover:opacity-90 glow-red mb-4 cursor-pointer"
                >
                  <Calendar className="h-5 w-5" />
                  Prenota una consulenza gratuita
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 mt-2 text-xs">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-green-400 font-medium">
                    <CheckCircle2 className="h-3 w-3" />
                    Consulenza gratuita e senza impegno
                  </span>
                  <span className="text-muted-foreground">Paghi solo se decidi di procedere</span>
                </div>
              </motion.div>

              {/* Right — Visual */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex justify-center"
              >
                <div className="relative">
                  <div className="w-[280px] sm:w-[340px] rounded-2xl border border-primary/30 bg-card p-8 glow-red-lg relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
                    <div className="relative">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-red mb-6">
                        <Search className="h-8 w-8 text-primary-foreground" />
                      </div>
                      <p className="text-xs text-primary font-bold uppercase tracking-widest mb-3">VibeScudo Pro</p>
                      <h3 className="font-display text-lg font-bold leading-snug mb-2">
                        Deep Security Scan
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                        Scansione approfondita manuale + automatizzata sulla tua web app
                      </p>
                      <div className="space-y-2 text-xs text-muted-foreground border-t border-border pt-4">
                        <span className="flex items-center gap-2"><Target className="h-3 w-3 text-primary" /> Test manuali esperti</span>
                        <span className="flex items-center gap-2"><Eye className="h-3 w-3 text-primary" /> Analisi approfondita</span>
                        <span className="flex items-center gap-2"><Shield className="h-3 w-3 text-primary" /> Report + remediation</span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-3 -right-3 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground animate-pulse-slow">
                    PRO
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Cosa testiamo */}
        <section className="px-4 py-24">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
                Cosa cerchiamo nel{" "}
                <span className="text-gradient-red">Deep Scan</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Ogni vulnerabilità viene testata manualmente con tecniche di ethical hacking, 
                simulando un attacco reale sulla tua applicazione.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {vulnerabilities.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-2xl border border-border bg-card p-6 card-hover"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mb-4">
                    <v.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-bold mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Confronto Standard vs Deep */}
        <section className="px-4 py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/3 via-transparent to-transparent pointer-events-none" />
          <div className="mx-auto max-w-5xl relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
                Scansione Standard vs{" "}
                <span className="text-gradient-red">Deep Scan</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                La scansione a €9,90 è il punto di partenza perfetto. Il Deep Scan è il passo successivo 
                per chi vuole <span className="text-foreground font-medium">sicurezza di livello enterprise</span>.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {differences.map((d, i) => (
                <motion.div
                  key={d.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`rounded-2xl border p-8 ${
                    d.highlight
                      ? "border-primary/40 bg-card glow-red-sm"
                      : "border-border bg-card"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-6">
                    {d.highlight ? (
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-red">
                        <Search className="h-5 w-5 text-primary-foreground" />
                      </div>
                    ) : (
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted">
                        <Zap className="h-5 w-5 text-primary" />
                      </div>
                    )}
                    <h3 className="font-display text-lg font-bold">{d.label}</h3>
                    {d.highlight && (
                      <span className="ml-auto rounded-full bg-primary/20 border border-primary/30 px-2.5 py-0.5 text-[10px] font-bold text-primary uppercase">Avanzato</span>
                    )}
                  </div>
                  <ul className="space-y-3">
                    {d.points.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-sm">
                        <CheckCircle2 className={`h-5 w-5 shrink-0 mt-0.5 ${d.highlight ? "text-primary" : "text-muted-foreground"}`} />
                        <span className="text-secondary-foreground">{p}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-4 border-t border-border">
                    {d.highlight ? (
                      <button
                        onClick={handleBookClick}
                        className="w-full group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-red px-6 py-3 text-sm font-bold text-primary-foreground transition-all hover:opacity-90 cursor-pointer"
                      >
                        <Calendar className="h-4 w-4" />
                        Prenota consulenza gratuita
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </button>
                    ) : (
                      <Link
                        to="/"
                        className="w-full group inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-muted hover:bg-muted/80 px-6 py-3 text-sm font-semibold text-foreground transition-all"
                      >
                        <Zap className="h-4 w-4 text-primary" />
                        Scansiona ora — €9,90
                      </Link>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Perché Deep Scan */}
        <section className="px-4 py-24">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
                Per chi è il{" "}
                <span className="text-gradient-red">Deep Scan?</span>
              </h2>
              <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
                Il Deep Scan è pensato per chi ha già validato la propria app con la scansione standard 
                e vuole raggiungere un livello di sicurezza superiore.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { icon: AlertTriangle, title: "App con dati sensibili", desc: "E-commerce, fintech, healthcare — dove una breach ha conseguenze gravi." },
                { icon: Globe, title: "App in produzione", desc: "Già live con utenti reali? Serve un test serio prima che lo facciano gli hacker." },
                { icon: Bug, title: "Post scansione standard", desc: "Hai fatto lo scan a €9,90 e vuoi andare più a fondo? Questo è il next step." },
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

        {/* CTA finale */}
        <section className="px-4 py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent pointer-events-none" />
          <div className="mx-auto max-w-4xl relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-primary/20 bg-card p-8 sm:p-12 text-center relative overflow-hidden"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] rounded-full opacity-10 blur-[80px] bg-primary pointer-events-none" />
              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm text-primary font-semibold mb-6">
                  <Shield className="h-4 w-4" />
                  Sicurezza senza compromessi
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
                  Pronto a scoprire cosa si nasconde{" "}
                  <span className="text-gradient-red">nella tua app?</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
                  La consulenza è <span className="text-foreground font-bold">completamente gratuita e senza impegno</span>. Serve solo per capire 
                  le tue esigenze e spiegarti cosa analizziamo. Pagherai solo se decidi di procedere con il Deep Scan a <span className="text-foreground font-bold">€299</span>.
                </p>
                <button
                  onClick={handleBookClick}
                  className="group inline-flex items-center gap-3 rounded-xl bg-gradient-red px-8 py-4 text-lg font-bold text-primary-foreground transition-all hover:opacity-90 glow-red cursor-pointer"
                >
                  <Calendar className="h-5 w-5" />
                  Fissa la tua consulenza gratuita
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
                <p className="text-xs text-muted-foreground mt-4">
                  Zero costi • Zero impegno • Paghi solo se vuoi procedere
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Rimando scanner standard */}
        <section className="px-4 py-16">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-border bg-card p-8 text-center"
            >
              <Zap className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-display text-xl font-bold mb-2">Non sei ancora pronto per il Deep Scan?</h3>
              <p className="text-sm text-muted-foreground mb-6 max-w-lg mx-auto">
                Inizia con la scansione standard a €9,90. In 30 secondi avrai un report completo 
                con 21 controlli di sicurezza. È il modo migliore per iniziare.
              </p>
              <Link
                to="/"
                className="group inline-flex items-center gap-2 rounded-xl border border-primary/30 bg-primary/10 hover:bg-primary/20 px-6 py-3 text-sm font-semibold text-primary transition-all"
              >
                <Zap className="h-4 w-4" />
                Scansione rapida — €9,90
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Footer minimal */}
        <footer className="border-t border-border px-4 py-8">
          <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-red">
                <Shield className="h-3.5 w-3.5 text-primary-foreground" />
              </div>
              <span className="font-display text-sm font-bold">
                Vibe<span className="text-gradient-red">Scudo</span>
              </span>
            </div>
            <p className="text-xs text-muted-foreground">© 2025 VibeScudo. Tutti i diritti riservati.</p>
          </div>
        </footer>
      </div>

      {/* Modal calendario */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-sm px-4"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md rounded-2xl border border-primary/20 bg-card p-8 text-center relative"
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 mx-auto mb-5">
                <Clock className="h-8 w-8 text-primary" />
              </div>

              <h3 className="font-display text-xl font-bold mb-2">
                Calendario in arrivo!
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Il sistema di prenotazione sarà attivato a <span className="text-foreground font-semibold">brevissimo</span>. 
                Stiamo ultimando gli ultimi dettagli per offrirti la migliore esperienza possibile.
              </p>
              <p className="text-sm text-muted-foreground mb-6">
                Nel frattempo puoi contattarci a{" "}
                <a href="mailto:vibescudo@gmail.com" className="text-primary font-semibold hover:underline">
                  vibescudo@gmail.com
                </a>
              </p>

              <button
                onClick={() => setShowModal(false)}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-red px-6 py-3 text-sm font-bold text-primary-foreground hover:opacity-90 transition-all cursor-pointer"
              >
                Ho capito, grazie!
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DeepScan;
