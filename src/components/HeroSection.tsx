import { motion } from "framer-motion";
import { Shield, Zap, ArrowRight } from "lucide-react";

interface HeroProps {
  scannerUrl: string;
}

const HeroSection = ({ scannerUrl }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-16 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full opacity-20 blur-[120px] bg-gradient-red pointer-events-none" />

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-5 py-2 text-sm text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          Progettato per app create con Cursor · Bolt · Lovable · Replit · v0
        </span>
      </motion.div>

      {/* Main headline */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-4xl sm:text-5xl md:text-7xl font-black text-center leading-tight max-w-5xl"
      >
        La tua Vibe App è già{" "}
        <span className="text-gradient-red">sotto attacco?</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.25 }}
        className="mt-6 text-lg sm:text-xl text-center max-w-2xl font-semibold text-primary"
      >
        L'89% delle app generate con l'AI viene pubblicato con vulnerabilità critiche — senza che nessuno se ne accorga.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.35 }}
        className="mt-4 text-base sm:text-lg text-center max-w-2xl text-muted-foreground"
      >
        L'AI scrive codice veloce, non codice sicuro. Scopri cosa ha lasciato esposto prima che lo scopra qualcun altro.
      </motion.p>

      {/* 30 sec badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.45 }}
        className="mt-8 flex items-center gap-4 rounded-xl border border-border bg-secondary px-6 py-4"
      >
        <span className="font-mono-bold text-4xl text-foreground">30 sec</span>
        <div className="text-sm text-muted-foreground leading-snug">
          <span className="font-semibold text-foreground">per toglierti ogni dubbio</span>
          <br />
          nessuna installazione · risultati immediati
        </div>
        <Zap className="h-6 w-6 text-warning" />
      </motion.div>

      {/* Trust badges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.55 }}
        className="mt-8 flex flex-wrap justify-center gap-3"
      >
        {[
          { text: "Scansione non invasiva — nessuna modifica al sito", color: "text-success" },
          { text: "Solo richieste HTTP in lettura, zero exploit", color: "text-info" },
          { text: "Nessun dato sensibile memorizzato", color: "text-purple-accent" },
        ].map((badge) => (
          <span
            key={badge.text}
            className={`inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2 text-sm ${badge.color}`}
          >
            <span className="text-success">✓</span>
            {badge.text}
          </span>
        ))}
      </motion.div>

      {/* CTA buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.65 }}
        className="mt-10 flex flex-col sm:flex-row items-center gap-4"
      >
        <a
          href={scannerUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-gradient-red px-8 py-4 text-lg font-semibold text-primary-foreground transition-all hover:opacity-90 glow-red-sm"
        >
          <Zap className="h-5 w-5" />
          Scansiona ora — €9,90
        </a>
        <a
          href={scannerUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-border bg-secondary px-6 py-4 text-sm text-muted-foreground hover:border-primary/40 transition-colors"
        >
          <Shield className="h-4 w-4" />
          Vedi un report di esempio
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
