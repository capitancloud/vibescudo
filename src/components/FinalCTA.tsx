import { motion } from "framer-motion";
import { Zap, ArrowRight, Shield } from "lucide-react";

interface Props {
  scannerUrl: string;
}

const FinalCTA = ({ scannerUrl }: Props) => {
  return (
    <section className="px-4 py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-red-subtle opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full opacity-20 blur-[120px] bg-gradient-red pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative mx-auto max-w-3xl text-center"
      >
        <div className="flex justify-center mb-6">
          <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-red glow-red animate-float">
            <Shield className="h-8 w-8 text-primary-foreground" />
          </div>
        </div>

        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Non aspettare che sia<br />
          <span className="text-gradient-red">troppo tardi</span>
        </h2>

        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
          Ogni giorno la tua app è online senza un check di sicurezza è un giorno in cui qualcuno potrebbe trovarti prima.
          <span className="text-foreground font-medium"> 30 secondi. €9,90. La tua tranquillità.</span>
        </p>

        <a
          href={scannerUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-red px-12 py-6 text-xl font-bold text-primary-foreground transition-all hover:opacity-90 glow-red-lg"
        >
          <Zap className="h-6 w-6" />
          Scopri le vulnerabilità ora
          <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
        </a>

        <p className="mt-6 text-sm text-muted-foreground">
          Pagamento sicuro · Risultato immediato · Garanzia soddisfatto o rimborsato
        </p>
      </motion.div>
    </section>
  );
};

export default FinalCTA;
