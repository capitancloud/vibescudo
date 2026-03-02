import { motion } from "framer-motion";
import { XCircle, AlertTriangle, Skull, Bug, KeyRound, ServerCrash } from "lucide-react";

const problems = [
  {
    icon: KeyRound,
    title: "Chiavi API nel codice client",
    desc: "Stripe, OpenAI, Supabase — l'AI inserisce le chiavi direttamente nel frontend. Chiunque può vederle con gli strumenti sviluppatore del browser.",
    severity: "CRITICO",
  },
  {
    icon: XCircle,
    title: "Nessun header di sicurezza HTTP",
    desc: "CSP, HSTS, X-Frame-Options — quasi mai configurati. Il tuo sito è vulnerabile a XSS, clickjacking e data injection.",
    severity: "ALTO",
  },
  {
    icon: Bug,
    title: "File .env e .git esposti",
    desc: "Configurazioni, credenziali e interi repository accessibili pubblicamente. Un hacker ci mette 3 secondi a trovarli.",
    severity: "CRITICO",
  },
  {
    icon: ServerCrash,
    title: "Endpoint admin senza protezione",
    desc: "Pannelli di amministrazione, API di debug e route interne raggiungibili senza autenticazione.",
    severity: "ALTO",
  },
  {
    icon: Skull,
    title: "Cookie senza attributi di sicurezza",
    desc: "Sessioni utente intercettabili. Senza HttpOnly, Secure e SameSite i cookie sono un bersaglio facile.",
    severity: "MEDIO",
  },
  {
    icon: AlertTriangle,
    title: "Stack tecnologico visibile",
    desc: "Framework, versioni e CMS esposti negli header HTTP. Informazioni preziose per un attaccante che cerca exploit noti.",
    severity: "MEDIO",
  },
];

const ProblemSection = () => {
  return (
    <section className="px-4 py-24 relative" id="problemi">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-5 py-2.5 text-sm text-primary font-medium mb-6">
            <AlertTriangle className="h-4 w-4" />
            Perché è urgente
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Il codice AI è <span className="text-gradient-red">funzionale</span>,<br />
            ma <span className="text-gradient-red">non è sicuro</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Cursor, Bolt, Lovable, Replit — tutti generano app funzionanti in minuti. 
            Ma <span className="text-foreground font-medium">nessuno di loro pensa alla sicurezza</span>. 
            Ecco le vulnerabilità che troviamo nel <span className="text-primary font-semibold">89% dei casi</span>.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-card p-7 card-hover group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <p.icon className="h-5 w-5" />
                </div>
                <span className={`text-xs font-bold tracking-wider px-3 py-1 rounded-full ${
                  p.severity === "CRITICO" ? "bg-primary/10 text-primary" : 
                  p.severity === "ALTO" ? "bg-warning/10 text-warning" :
                  "bg-yellow-accent/10 text-yellow-accent"
                }`}>
                  {p.severity}
                </span>
              </div>
              <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Urgency callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center"
        >
          <p className="text-lg sm:text-xl font-semibold">
            <span className="text-primary">Ogni giorno</span> che passi senza controllare,{" "}
            <span className="text-foreground">qualcun altro potrebbe star leggendo i tuoi dati.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
