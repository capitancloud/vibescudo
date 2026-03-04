import { motion } from "framer-motion";
import { Scale, DatabaseZap, TrendingDown, Euro, ShieldAlert, Users, AlertOctagon, Timer } from "lucide-react";

const risks = [
  {
    icon: Scale,
    title: "Sanzioni GDPR fino a €20M",
    desc: "Se i dati dei tuoi utenti vengono esposti, il Garante Privacy può multarti fino al 4% del fatturato annuo o €20 milioni. Non importa se sei una startup: la legge vale per tutti.",
    stat: "€20M",
    statLabel: "multa massima GDPR",
    color: "text-primary",
    bg: "bg-primary/10",
    borderColor: "border-primary/20",
  },
  {
    icon: DatabaseZap,
    title: "Perdita totale dei dati",
    desc: "Database cancellati, backup inesistenti, ransomware. Il 60% delle piccole aziende che subisce una perdita di dati chiude entro 6 mesi. Non è una statistica: è una condanna.",
    stat: "60%",
    statLabel: "chiude entro 6 mesi",
    color: "text-warning",
    bg: "bg-warning/10",
    borderColor: "border-warning/20",
  },
  {
    icon: TrendingDown,
    title: "Reputazione distrutta",
    desc: "Un data breach finisce sui giornali, sui social, nelle recensioni. I tuoi clienti perdono fiducia. I prospect scelgono la concorrenza. Ricostruire la reputazione costa anni.",
    stat: "83%",
    statLabel: "perde clienti dopo un breach",
    color: "text-primary",
    bg: "bg-primary/10",
    borderColor: "border-primary/20",
  },
  {
    icon: Euro,
    title: "Costi di recovery astronomici",
    desc: "Incident response, forensics, notifiche agli utenti, consulenti legali, PR crisis management. Il costo medio di un data breach per una PMI europea è di €120.000.",
    stat: "€120K",
    statLabel: "costo medio breach PMI",
    color: "text-warning",
    bg: "bg-warning/10",
    borderColor: "border-warning/20",
  },
  {
    icon: Users,
    title: "Cause legali dei tuoi utenti",
    desc: "Gli utenti i cui dati vengono esposti possono farti causa individualmente o tramite class action. Avvocati, tribunali, risarcimenti: un incubo che può durare anni.",
    stat: "3-5 anni",
    statLabel: "durata media cause",
    color: "text-primary",
    bg: "bg-primary/10",
    borderColor: "border-primary/20",
  },
  {
    icon: Timer,
    title: "Downtime = fatturato perso",
    desc: "Ogni ora con il sito offline è fatturato che evapora. Se vendi online, un attacco DDoS o un defacement ti costa centinaia o migliaia di euro all'ora. Ogni singola ora.",
    stat: "€5.600",
    statLabel: "costo medio per minuto di downtime",
    color: "text-warning",
    bg: "bg-warning/10",
    borderColor: "border-warning/20",
  },
];

const RiskSection = () => {
  return (
    <section className="px-4 py-24 relative" id="rischi">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.03] blur-[120px] bg-primary" />
      </div>

      <div className="mx-auto max-w-6xl relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-5 py-2.5 text-sm text-primary font-semibold mb-6 animate-pulse">
            <AlertOctagon className="h-4 w-4" />
            Quello che rischi davvero
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
            "Tanto a me <span className="text-gradient-red">non succederà mai</span>"<br />
            <span className="text-muted-foreground text-2xl sm:text-3xl md:text-4xl font-medium">— Ultime parole famose.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Pensi che gli hacker attacchino solo le grandi aziende? <span className="text-foreground font-medium">Sbagliato.</span>{" "}
            Il <span className="text-primary font-semibold">43% degli attacchi</span> colpisce piccole imprese e progetti indipendenti.
            Perché? Perché sono i <span className="text-foreground font-medium">bersagli più facili</span>.
          </p>
        </motion.div>

        {/* Risk cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {risks.map((risk, i) => (
            <motion.div
              key={risk.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`rounded-2xl border ${risk.borderColor} bg-card p-7 card-hover group relative overflow-hidden`}
            >
              <div className="absolute top-0 right-0 w-[150px] h-[150px] rounded-full opacity-5 blur-[50px] bg-primary pointer-events-none" />
              
              <div className="relative">
                <div className="flex items-center justify-between mb-5">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${risk.bg} ${risk.color} group-hover:scale-110 transition-transform`}>
                    <risk.icon className="h-6 w-6" />
                  </div>
                  <div className="text-right">
                    <div className={`text-2xl font-display font-black ${risk.color}`}>{risk.stat}</div>
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium">{risk.statLabel}</div>
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-2">{risk.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{risk.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Horror scenario timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-2xl border border-primary/20 bg-card p-8 sm:p-10 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent pointer-events-none" />
          <div className="relative">
            <div className="flex items-center gap-3 mb-8">
              <ShieldAlert className="h-6 w-6 text-primary" />
              <h3 className="font-display text-xl sm:text-2xl font-bold">
                Anatomia di un attacco: <span className="text-gradient-red">cosa succede davvero</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  time: "Minuto 0",
                  title: "L'hacker trova la falla",
                  desc: "Un bot automatico scansiona il tuo sito e trova le chiavi API esposte o un endpoint non protetto.",
                  emoji: "🔍",
                },
                {
                  time: "Minuto 5",
                  title: "Accesso ai tuoi dati",
                  desc: "Con le credenziali rubate, l'attaccante accede al database. Email, password, dati di pagamento: tutto esposto.",
                  emoji: "💀",
                },
                {
                  time: "Ora 1",
                  title: "I dati sono in vendita",
                  desc: "I record dei tuoi utenti vengono messi in vendita sul dark web. Tu non sai ancora nulla.",
                  emoji: "🏴‍☠️",
                },
                {
                  time: "Giorno 1",
                  title: "Il disastro è completo",
                  desc: "Notifiche GDPR, email agli utenti, articoli sui media, recensioni negative. La tua reputazione è in macerie.",
                  emoji: "🔥",
                },
              ].map((step, i) => (
                <motion.div
                  key={step.time}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className="rounded-xl border border-border bg-background/50 p-5"
                >
                  <div className="text-3xl mb-3">{step.emoji}</div>
                  <span className="text-xs font-bold tracking-wider text-primary uppercase">{step.time}</span>
                  <h4 className="font-semibold text-sm mt-1 mb-2">{step.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Final scare CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 rounded-2xl border border-primary/30 bg-primary/5 p-8 text-center"
        >
          <p className="text-lg sm:text-xl font-semibold leading-relaxed max-w-3xl mx-auto">
            <span className="text-primary font-bold">€9,90 per uno scan</span> o <span className="text-foreground">€120.000 per un data breach</span>.
            <br />
            <span className="text-muted-foreground">La domanda non è "se" succederà. È </span>
            <span className="text-primary font-bold">"quando"</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default RiskSection;
