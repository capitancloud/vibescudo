import { motion } from "framer-motion";
import { Shield, Zap, Check, ArrowRight, Star } from "lucide-react";

interface PricingProps {
  scannerUrl: string;
}

const PricingSection = ({ scannerUrl }: PricingProps) => {
  return (
    <section className="px-4 py-24 relative" id="prezzo">
      <div className="absolute inset-0 bg-gradient-red-subtle opacity-20 pointer-events-none" />

      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Un prezzo, <span className="text-gradient-red">zero sorprese</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nessun abbonamento. Nessun impegno. Paghi solo quando vuoi una scansione.
            <br />
            <span className="text-foreground font-medium">Meno del costo di un pranzo</span> per proteggere il tuo business.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mx-auto max-w-lg rounded-3xl border border-primary/30 bg-card p-10 relative overflow-hidden"
        >
          {/* Glow effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[200px] rounded-full opacity-20 blur-[80px] bg-gradient-red pointer-events-none" />

          <div className="relative">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-red glow-red-sm">
                  <Shield className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold">Scansione Completa</h3>
                  <p className="text-sm text-muted-foreground">Pay-per-scan</p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                <Star className="h-3 w-3" />
                Più venduto
              </span>
            </div>

            {/* Price */}
            <div className="mb-8 text-center">
              <span className="font-mono-bold text-6xl sm:text-7xl text-foreground">€9<span className="text-4xl">,90</span></span>
              <span className="text-muted-foreground ml-2 text-lg">/ scansione</span>
            </div>

            {/* Features */}
            <ul className="space-y-4 mb-10">
              {[
                "21 controlli di sicurezza approfonditi",
                "7 aree di analisi coperte",
                "Report dettagliato con soluzioni pratiche",
                "Risultati in meno di 30 secondi",
                "Scansione 100% passiva e non invasiva",
                "Nessun dato sensibile memorizzato",
                "Nessun abbonamento — paghi solo quando vuoi",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <Check className="h-5 w-5 shrink-0 text-success mt-0.5" />
                  <span className="text-secondary-foreground">{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href={scannerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full rounded-2xl bg-gradient-red py-5 text-lg font-bold text-primary-foreground transition-all hover:opacity-90 flex items-center justify-center gap-3 glow-red"
            >
              <Zap className="h-5 w-5" />
              Scansiona ora — €9,90
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>

            <p className="mt-4 text-center text-xs text-muted-foreground">
              Pagamento sicuro con Stripe · Risultato immediato · Soddisfatto o rimborsato
            </p>
          </div>
        </motion.div>

        {/* Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 mx-auto max-w-3xl"
        >
          <h3 className="text-center font-display text-xl font-bold mb-8">Quanto costa <span className="text-gradient-red">non</span> farlo?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            {[
              { label: "Data breach medio per PMI", value: "€43.000", color: "text-primary" },
              { label: "Penale GDPR minima", value: "€10.000", color: "text-warning" },
              { label: "VibeScudo", value: "€9,90", color: "text-success" },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-border bg-card p-6">
                <div className={`font-mono-bold text-2xl ${item.color} mb-2`}>{item.value}</div>
                <div className="text-sm text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
