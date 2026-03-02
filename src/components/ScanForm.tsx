import { motion } from "framer-motion";
import { Shield, Search, Zap } from "lucide-react";
import { useState } from "react";

const ScanForm = () => {
  const [url, setUrl] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [showLegal, setShowLegal] = useState(false);

  return (
    <section className="relative px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-2xl rounded-2xl border border-border bg-card p-8 shadow-2xl"
      >
        {/* Logo */}
        <div className="flex items-center gap-3 mb-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-red">
            <Shield className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">
              Vibe<span className="text-gradient-red">Scudo</span>
            </h2>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mb-6">
          Scansione di sicurezza non invasiva per web application create con sistemi di codifica basati su intelligenza artificiale
        </p>

        {/* URL input */}
        <div className="relative mb-4">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://example.com"
            className="w-full rounded-xl border border-border bg-background py-4 pl-12 pr-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          />
        </div>

        {/* Checkbox */}
        <div className="mb-4">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-1 h-4 w-4 rounded border-border bg-background accent-primary"
            />
            <span className="text-sm text-muted-foreground">
              Sono il proprietario del sito o ho ricevuto autorizzazione esplicita per effettuare questa scansione.
            </span>
          </label>
          <button
            onClick={() => setShowLegal(!showLegal)}
            className="mt-2 ml-7 text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
          >
            <span>{showLegal ? "▲" : "▼"}</span> Leggi l'informativa legale completa
          </button>
          {showLegal && (
            <p className="mt-2 ml-7 text-xs text-muted-foreground leading-relaxed">
              Utilizzando questo servizio, l'utente dichiara di avere titolo legale per effettuare la scansione del sito indicato. VibeScudo esegue esclusivamente richieste HTTP in sola lettura, senza alcuna modifica al sito target. Nessun dato sensibile viene memorizzato permanentemente.
            </p>
          )}
        </div>

        {/* CTA button */}
        <button
          disabled={!agreed || !url}
          className="w-full rounded-xl bg-gradient-red-dark py-4 text-lg font-semibold text-primary-foreground transition-all hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2 glow-red-sm"
        >
          <Zap className="h-5 w-5" />
          Scoprilo in 30 secondi — €9,90
        </button>
      </motion.div>
    </section>
  );
};

export default ScanForm;
