import { Shield } from "lucide-react";
import { Link } from "react-router-dom";

interface FooterProps {
  scannerUrl: string;
}

const Footer = ({ scannerUrl }: FooterProps) => {
  return (
    <footer className="border-t border-border px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10">
          {/* Brand */}
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-red glow-red-sm">
                <Shield className="h-4.5 w-4.5 text-primary-foreground" />
              </div>
              <span className="font-display text-xl font-bold tracking-tight">
                Vibe<span className="text-gradient-red">Scudo</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Scansione di sicurezza non invasiva per web application create con sistemi di codifica basati su intelligenza artificiale.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-16">
            <div>
              <h4 className="font-semibold text-sm mb-4 text-foreground">Prodotto</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href={scannerUrl} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Scanner</a></li>
                <li><a href="#come-funziona" className="hover:text-foreground transition-colors">Come funziona</a></li>
                <li><a href="#analisi" className="hover:text-foreground transition-colors">Cosa analizziamo</a></li>
                <li><a href="#prezzo" className="hover:text-foreground transition-colors">Prezzo</a></li>
                <li><Link to="/ebook" className="hover:text-foreground transition-colors text-primary font-medium">📘 Ebook gratuito</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-4 text-foreground">Legale</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><Link to="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
                <li><Link to="/cookie-policy" className="hover:text-foreground transition-colors">Cookie Policy</Link></li>
                <li><Link to="/disclaimer" className="hover:text-foreground transition-colors">Disclaimer</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-4 text-foreground">Supporto</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href="#faq" className="hover:text-foreground transition-colors">FAQ</a></li>
                <li><a href="mailto:vibescudo@gmail.com" className="hover:text-foreground transition-colors">Contatti</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © 2025 VibeScudo. Tutti i diritti riservati.
          </p>
          <p className="text-xs text-muted-foreground">
            Made with 🛡️ in Italia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
