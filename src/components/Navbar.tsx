import { Shield, Zap, Menu, X, BookOpen, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import TopBar from "./TopBar";

const SCANNER_URL = "https://scanner.vibescudo.it/";

const navLinks = [
  { label: "Come funziona", href: "#come-funziona" },
  { label: "Cosa analizziamo", href: "#analisi" },
  { label: "Prezzo", href: "#prezzo" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <TopBar />
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-[40px] sm:top-[48px] left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl"
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

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">{l.label}</a>
            ))}
            <Link to="/ebook" className="flex items-center gap-1.5 text-primary hover:text-primary/80 font-semibold transition-colors">
              <BookOpen className="h-3.5 w-3.5" />
              Ebook gratis
            </Link>
            <Link to="/deep-scan" className="flex items-center gap-1.5 text-primary hover:text-primary/80 font-semibold transition-colors">
              <Search className="h-3.5 w-3.5" />
              Deep Scan
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={SCANNER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-red px-4 sm:px-5 py-2 sm:py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 glow-red-sm"
            >
              <Zap className="h-4 w-4" />
              <span className="hidden sm:inline">Scansiona ora</span>
              <span className="sm:hidden">Scan</span>
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label="Menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl overflow-hidden"
            >
              <div className="px-4 py-4 flex flex-col gap-3">
                {navLinks.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2 border-b border-border/30"
                  >
                    {l.label}
                  </a>
                ))}
                <Link
                  to="/ebook"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 text-sm text-primary font-semibold py-2"
                >
                  <BookOpen className="h-4 w-4" />
                  Ebook gratuito
                </Link>
                <Link
                  to="/deep-scan"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 text-sm text-primary font-semibold py-2"
                >
                  <Search className="h-4 w-4" />
                  Deep Scan
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
