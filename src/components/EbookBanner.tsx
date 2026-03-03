import { motion } from "framer-motion";
import { BookOpen, ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";

const EbookBanner = () => {
  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Link
            to="/ebook"
            className="group block rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/10 via-card to-primary/5 p-6 sm:p-8 card-hover relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-[250px] h-[250px] rounded-full opacity-10 blur-[80px] bg-primary pointer-events-none" />
            
            <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-red glow-red-sm">
                <BookOpen className="h-7 w-7 text-primary-foreground" />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">Ebook gratuito</span>
                  <span className="rounded-full bg-primary px-2 py-0.5 text-[10px] font-bold text-primary-foreground">NUOVO</span>
                </div>
                <h3 className="font-display text-lg sm:text-xl font-bold mb-1">
                  Vibe Coding e Sicurezza: Playbook Operativo
                </h3>
                <p className="text-sm text-muted-foreground">
                  100+ pagine su vulnerabilità, best practice e pattern sicuri. Scaricalo gratis.
                </p>
              </div>
              
              <div className="inline-flex items-center gap-2 rounded-xl bg-gradient-red px-5 py-3 text-sm font-bold text-primary-foreground shrink-0 group-hover:opacity-90 transition-all">
                <Download className="h-4 w-4" />
                Scarica gratis
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default EbookBanner;
