import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Cookie, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const COOKIE_KEY = "vibescudo_cookie_consent";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(COOKIE_KEY, "accepted");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-4 left-3 right-3 sm:left-4 sm:right-4 z-[70] mx-auto max-w-2xl rounded-2xl border border-border bg-card/95 backdrop-blur-xl p-4 sm:p-5 shadow-2xl"
        >
          <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
            <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
              <Cookie className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Utilizziamo solo <span className="text-foreground font-medium">cookie tecnici</span> necessari al funzionamento del sito. Nessun tracciamento, nessuna profilazione.{" "}
                <Link to="/cookie-policy" className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors">
                  Cookie Policy
                </Link>
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
              <button
                onClick={accept}
                className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-red px-4 py-2 text-xs sm:text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
              >
                Ho capito
              </button>
              <button
                onClick={accept}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                aria-label="Chiudi"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
