import { motion } from "framer-motion";
import { Shield, Zap, ArrowRight, AlertTriangle } from "lucide-react";

interface HeroProps {
  scannerUrl: string;
}

const HeroSection = ({ scannerUrl }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-28 pb-20 overflow-hidden noise-bg">
      {/* Animated background blobs */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full opacity-25 blur-[150px] bg-gradient-red pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-[-100px] right-[-200px] w-[400px] h-[400px] rounded-full opacity-10 blur-[100px] bg-gradient-red pointer-events-none" />
      <div className="absolute top-[200px] left-[-150px] w-[300px] h-[300px] rounded-full opacity-8 blur-[80px] bg-gradient-red pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-5 py-2.5 text-sm text-primary font-medium">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            Progettato per app create con Cursor · Bolt · Lovable · Replit · v0
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-5xl sm:text-6xl md:text-8xl font-bold text-center leading-[1.05] max-w-5xl tracking-tight"
        >
          La tua Vibe App
          <br />
          è già <span className="text-gradient-red">sotto attacco?</span>
        </motion.h1>

        {/* Stat callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 inline-flex items-center gap-3 rounded-xl border border-warning/20 bg-warning/5 px-6 py-3"
        >
          <AlertTriangle className="h-5 w-5 text-warning shrink-0" />
          <span className="text-base sm:text-lg font-semibold">
            <span className="text-warning">L'89%</span> delle app AI viene pubblicato con{" "}
            <span className="text-foreground">vulnerabilità critiche</span>
          </span>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 text-lg sm:text-xl text-center max-w-2xl text-muted-foreground leading-relaxed"
        >
          L'AI scrive codice veloce, <span className="text-foreground font-medium">non codice sicuro</span>.
          Scopri cosa ha lasciato esposto nel tuo progetto prima che lo scopra qualcun altro.
        </motion.p>

        {/* 30 sec badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex items-center gap-5 rounded-2xl border border-border bg-card px-8 py-5"
        >
          <span className="font-mono-bold text-5xl text-foreground">30<span className="text-primary text-3xl">s</span></span>
          <div className="h-10 w-px bg-border" />
          <div className="text-sm text-muted-foreground leading-snug">
            <span className="font-semibold text-foreground text-base block">Per toglierti ogni dubbio</span>
            Nessuna installazione · Risultati immediati
          </div>
          <Zap className="h-7 w-7 text-warning animate-float" />
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href={scannerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-red px-10 py-5 text-lg font-bold text-primary-foreground transition-all hover:opacity-90 glow-red"
          >
            <Zap className="h-5 w-5" />
            Scopri le vulnerabilità — €9,90
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={scannerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl border border-border bg-card px-8 py-5 text-base text-secondary-foreground hover:border-primary/30 hover:bg-secondary transition-all"
          >
            <Shield className="h-5 w-5 text-primary" />
            Vedi un report di esempio
          </a>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          {[
            { text: "Scansione non invasiva", color: "text-success", border: "border-success/20", bg: "bg-success/5" },
            { text: "Zero exploit, solo lettura", color: "text-info", border: "border-info/20", bg: "bg-info/5" },
            { text: "Nessun dato memorizzato", color: "text-purple-accent", border: "border-purple-accent/20", bg: "bg-purple-accent/5" },
          ].map((badge) => (
            <span
              key={badge.text}
              className={`inline-flex items-center gap-2 rounded-full border ${badge.border} ${badge.bg} px-4 py-2 text-sm font-medium ${badge.color}`}
            >
              ✓ {badge.text}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
