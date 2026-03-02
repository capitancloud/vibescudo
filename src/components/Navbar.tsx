import { Shield, Zap } from "lucide-react";
import { motion } from "framer-motion";
import TopBar from "./TopBar";

const SCANNER_URL = "https://scanner.vibescudo.it/";

const Navbar = () => {
  return (
    <>
      <TopBar />
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-[41px] left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl"
      >
        <div className="mx-auto max-w-6xl flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-red glow-red-sm">
              <Shield className="h-4.5 w-4.5 text-primary-foreground" />
            </div>
            <span className="font-display text-xl font-bold tracking-tight">
              Vibe<span className="text-gradient-red">Scudo</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#come-funziona" className="hover:text-foreground transition-colors">Come funziona</a>
            <a href="#analisi" className="hover:text-foreground transition-colors">Cosa analizziamo</a>
            <a href="#prezzo" className="hover:text-foreground transition-colors">Prezzo</a>
            <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
          </div>

          <a
            href={SCANNER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-red px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 glow-red-sm"
          >
            <Zap className="h-4 w-4" />
            <span className="hidden sm:inline">Scansiona ora</span>
            <span className="sm:hidden">Scan</span>
          </a>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
