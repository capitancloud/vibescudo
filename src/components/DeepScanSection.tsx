import { motion } from "framer-motion";
import { Search, ShieldCheck, Bug, Lock, FileWarning, ArrowRight, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const highlights = [
  { icon: Bug, label: "SQL Injection & XSS" },
  { icon: Lock, label: "Auth Bypass" },
  { icon: FileWarning, label: "Zero-day & Misconfig" },
  { icon: ShieldCheck, label: "Report + Remediation" },
];

const DeepScanSection = () => {
  return (
    <section className="px-4 py-20 sm:py-28 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-6xl relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary mb-6">
            <Search className="h-3.5 w-3.5" />
            Servizio Premium
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Vuoi andare ancora
            <span className="text-gradient-red"> più in profondità?</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            La nostra scansione automatica copre già <span className="text-foreground font-semibold">21 controlli di sicurezza</span> ed è perfetta per individuare le vulnerabilità più comuni. 
            Ma se la tua app gestisce dati sensibili o pagamenti, il <span className="text-foreground font-semibold">Deep Scan</span> aggiunge un livello extra: 
            simuliamo un attacco reale per scovare ciò che i tool automatici non vedono.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-xl border border-border bg-card p-5 text-center hover:border-primary/30 hover:shadow-[0_0_20px_hsl(0_72%_51%/0.1)] transition-all duration-300"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 mx-auto mb-3">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm font-semibold text-foreground">{item.label}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/10 via-card to-primary/5 p-6 sm:p-8"
        >
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
            <div className="flex-1 text-center sm:text-left">
              <div className="flex items-center gap-3 justify-center sm:justify-start mb-3">
                <span className="font-display text-3xl font-bold text-foreground">€197</span>
                <span className="text-muted-foreground text-sm">una tantum</span>
                <span className="rounded-full bg-primary px-2.5 py-0.5 text-[10px] font-bold text-primary-foreground">PRO</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Consulenza conoscitiva <span className="text-foreground font-semibold">gratuita e senza impegno</span>. 
                Paghi solo se decidi di procedere.
              </p>
            </div>

            <Link
              to="/deep-scan"
              className="group inline-flex items-center gap-2.5 rounded-xl bg-gradient-red px-6 py-3.5 text-sm font-bold text-primary-foreground hover:opacity-90 glow-red-sm transition-all shrink-0"
            >
              <Zap className="h-4 w-4" />
              Scopri il Deep Scan
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DeepScanSection;
