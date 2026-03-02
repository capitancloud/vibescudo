import { motion } from "framer-motion";
import { Lock, Globe, Eye, Code, FileWarning, Zap, Mail } from "lucide-react";

const areas = [
  {
    icon: Lock,
    title: "CONNESSIONE SICURA",
    color: "text-cyan-accent",
    borderColor: "border-cyan-accent/20",
    bgColor: "bg-cyan-accent/5",
    items: [
      "Verifica che tutto il traffico sia reindirizzato su HTTPS e non trasmesso in chiaro",
      "Analisi del certificato TLS: validità, scadenza, algoritmi crittografici e cipher suite",
    ],
    count: 2,
  },
  {
    icon: Globe,
    title: "PROTEZIONI DEL BROWSER",
    color: "text-info",
    borderColor: "border-info/20",
    bgColor: "bg-info/5",
    items: [
      "Controllo degli header HTTP di sicurezza: CSP, HSTS, X-Frame-Options, Permissions-Policy",
      "Verifica che le risposte HTTP non espongano versione del server o stack tecnologico",
      "Analisi della policy CORS: quali origini esterne possono leggere dati dell'applicazione",
      "Verifica degli attributi dei cookie di sessione: HttpOnly, Secure, SameSite",
    ],
    count: 4,
  },
  {
    icon: Eye,
    title: "COSA SA UN HACKER DI TE",
    color: "text-warning",
    borderColor: "border-warning/20",
    bgColor: "bg-warning/5",
    items: [
      "Identificazione di CMS, framework e versioni software rilevabili dalle risposte HTTP",
      "Rilevamento di WAF, CDN o sistemi di protezione perimetrale attivi sull'applicazione",
      "Mappatura degli endpoint di autenticazione, aree admin e pannelli di controllo esposti",
    ],
    count: 3,
  },
  {
    icon: Code,
    title: "CODICE & FILE DEL SITO",
    color: "text-purple-accent",
    borderColor: "border-purple-accent/20",
    bgColor: "bg-purple-accent/5",
    items: [
      "Inventario degli script JavaScript di terze parti e verifica dell'integrità tramite SRI",
      "Scansione dei bundle JS per chiavi API, token e credenziali esposte nel codice client",
      "Verifica degli attributi integrity e crossorigin sulle risorse caricate da CDN esterni",
    ],
    count: 3,
  },
  {
    icon: FileWarning,
    title: "FILE & DATI ESPOSTI",
    color: "text-pink-accent",
    borderColor: "border-pink-accent/20",
    bgColor: "bg-pink-accent/5",
    items: [
      "Ricerca di file .env, .git, backup e configurazioni accessibili senza autenticazione",
      "Verifica che le pagine di errore non rivelino stack trace, path o dettagli del codice",
      "Analisi dell'HTML per commenti con credenziali, note interne o percorsi riservati",
      "Lettura di robots.txt e sitemap per identificare percorsi sensibili dichiarati pubblicamente",
      "Ricerca di bucket S3, Google Cloud Storage o Azure Blob esposti per errore",
    ],
    count: 5,
  },
  {
    icon: Zap,
    title: "PORTE DI ACCESSO NASCOSTE",
    color: "text-orange-accent",
    borderColor: "border-orange-accent/20",
    bgColor: "bg-orange-accent/5",
    items: [
      "Verifica di endpoint di amministrazione, debug e monitoring accessibili senza autenticazione",
      "Test dell'endpoint GraphQL per introspezione pubblica e accesso non autenticato allo schema",
    ],
    count: 2,
  },
  {
    icon: Mail,
    title: "EMAIL & REPUTAZIONE",
    color: "text-yellow-accent",
    borderColor: "border-yellow-accent/20",
    bgColor: "bg-yellow-accent/5",
    items: [
      "Verifica dei record SPF e DMARC per prevenire l'invio di email fraudolente dal dominio",
      "Verifica della presenza di security.txt con contatti per la segnalazione di vulnerabilità",
    ],
    count: 2,
  },
];

const SecurityAreas = () => {
  return (
    <section className="px-4 py-24" id="analisi">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-5 py-2.5 text-sm text-primary font-medium mb-6">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            Analisi automatica multi-livello
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Cosa analizziamo sul tuo sito
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ogni scansione esegue <span className="font-bold text-foreground">21 controlli di sicurezza</span> distribuiti 
            su <span className="font-bold text-foreground">7 aree critiche</span>, in meno di 30 secondi. 
            Niente di invasivo, niente di pericoloso — solo analisi intelligente.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {areas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className={`rounded-2xl border ${area.borderColor} bg-card p-7 card-hover group`}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${area.bgColor} transition-colors`}>
                  <area.icon className={`h-5 w-5 ${area.color}`} />
                </div>
                <h3 className={`text-xs font-bold tracking-[0.15em] ${area.color}`}>
                  {area.title}
                </h3>
              </div>
              <ul className="space-y-3 mb-5">
                {area.items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                    <span className={`mt-1.5 h-1.5 w-1.5 rounded-full shrink-0 ${area.bgColor} border ${area.borderColor}`} />
                    {item}
                  </li>
                ))}
              </ul>
              <div className={`text-xs font-semibold ${area.color} opacity-60`}>
                {area.count} controlli
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "21", label: "controlli eseguiti" },
            { value: "7", label: "aree di sicurezza" },
            { value: "< 30s", label: "tempo medio" },
            { value: "100%", label: "passivo, zero rischi" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-mono-bold text-3xl sm:text-4xl text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SecurityAreas;
