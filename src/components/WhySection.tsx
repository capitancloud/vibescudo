import { motion } from "framer-motion";
import { Shield, CheckCircle, AlertTriangle, XCircle, Zap } from "lucide-react";

const WhySection = () => {
  const problems = [
    {
      icon: XCircle,
      title: "API key esposte nel codice client",
      desc: "L'AI spesso inserisce chiavi API direttamente nel frontend, rendendole visibili a chiunque.",
    },
    {
      icon: XCircle,
      title: "Nessun header di sicurezza",
      desc: "CSP, HSTS, X-Frame-Options — raramente configurati dalle app generate con AI.",
    },
    {
      icon: XCircle,
      title: "File sensibili accessibili",
      desc: ".env, .git, backup e configurazioni lasciate esposte senza protezione.",
    },
    {
      icon: XCircle,
      title: "Endpoint admin senza autenticazione",
      desc: "Pannelli di controllo e API di debug raggiungibili da chiunque conosca l'URL.",
    },
  ];

  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-5 py-2 text-sm text-muted-foreground mb-6">
            <AlertTriangle className="h-4 w-4 text-warning" />
            Perché è urgente
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            L'AI non pensa alla <span className="text-gradient-red">sicurezza</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ogni tool di vibe coding genera codice funzionale ma spesso lascia vulnerabilità critiche. Ecco cosa troviamo più frequentemente.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-4 rounded-xl border border-border bg-card p-6 card-hover"
            >
              <p.icon className="h-6 w-6 shrink-0 text-primary mt-0.5" />
              <div>
                <h3 className="font-semibold mb-1">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* How it works */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Come funziona
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Tre passaggi, zero complessità.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { step: "01", title: "Inserisci l'URL", desc: "Incolla l'indirizzo della tua web app. Nessuna installazione richiesta.", icon: "🔗" },
            { step: "02", title: "Scansione automatica", desc: "21 controlli di sicurezza vengono eseguiti in meno di 30 secondi.", icon: "⚡" },
            { step: "03", title: "Ricevi il report", desc: "Un report dettagliato con vulnerabilità trovate e consigli per risolverle.", icon: "📋" },
          ].map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="rounded-xl border border-border bg-card p-8 text-center card-hover"
            >
              <div className="text-4xl mb-4">{s.icon}</div>
              <div className="font-mono-bold text-primary text-sm mb-2">{s.step}</div>
              <h3 className="text-lg font-bold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
