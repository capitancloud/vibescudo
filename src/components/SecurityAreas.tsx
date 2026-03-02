import { motion } from "framer-motion";
import { Lock, Globe, Eye, Code, FileWarning, Zap, Mail } from "lucide-react";

const areas = [
  {
    icon: Lock,
    title: "CONNESSIONE SICURA",
    color: "text-cyan-accent",
    borderColor: "border-cyan-accent/30",
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
    borderColor: "border-info/30",
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
    borderColor: "border-warning/30",
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
    borderColor: "border-purple-accent/30",
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
    borderColor: "border-pink-accent/30",
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
    borderColor: "border-orange-accent/30",
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
    borderColor: "border-yellow-accent/30",
    items: [
      "Verifica dei record SPF e DMARC per prevenire l'invio di email fraudolente dal dominio",
      "Verifica della presenza di security.txt con contatti per la segnalazione di vulnerabilità",
    ],
    count: 2,
  },
];

const SecurityAreas = () => {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-5 py-2 text-sm text-muted-foreground mb-6">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            Analisi automatica multi-livello
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Cosa analizziamo sul tuo sito
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Ogni scansione esegue <span className="font-bold text-foreground">21 controlli di sicurezza</span> distribuiti su 7 aree critiche, in meno di 30 secondi.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {areas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`rounded-xl border ${area.borderColor} bg-card p-6 card-hover`}
            >
              <div className="flex items-center gap-3 mb-4">
                <area.icon className={`h-5 w-5 ${area.color}`} />
                <h3 className={`text-sm font-bold tracking-wider ${area.color}`}>
                  {area.title}
                </h3>
              </div>
              <ul className="space-y-3 mb-4">
                {area.items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-muted-foreground">
                {area.count} controlli
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecurityAreas;
