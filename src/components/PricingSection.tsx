import { motion } from "framer-motion";
import { Shield, Zap, Check } from "lucide-react";

const PricingSection = () => {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Un prezzo, zero sorprese
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Nessun abbonamento. Paghi solo quando vuoi fare una scansione.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mx-auto max-w-md rounded-2xl border border-primary/30 bg-card p-8 text-center glow-red-sm"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="h-6 w-6 text-primary" />
            <h3 className="text-xl font-bold">Scansione Completa</h3>
          </div>
          <div className="mb-6">
            <span className="font-mono-bold text-5xl text-foreground">€9,90</span>
            <span className="text-muted-foreground ml-2">/ scansione</span>
          </div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "21 controlli di sicurezza",
              "7 aree di analisi",
              "Report dettagliato con soluzioni",
              "Risultati in meno di 30 secondi",
              "Scansione 100% passiva e sicura",
              "Nessun dato memorizzato",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-secondary-foreground">
                <Check className="h-4 w-4 shrink-0 text-success" />
                {item}
              </li>
            ))}
          </ul>
          <button className="w-full rounded-xl bg-gradient-red py-4 text-lg font-semibold text-primary-foreground transition-all hover:opacity-90 flex items-center justify-center gap-2 glow-red-sm">
            <Zap className="h-5 w-5" />
            Scansiona ora
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
