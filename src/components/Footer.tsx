import { Shield } from "lucide-react";

interface FooterProps {
  scannerUrl: string;
}

const Footer = ({ scannerUrl }: FooterProps) => {
  return (
    <footer className="border-t border-border px-4 py-12">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-red">
            <Shield className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="font-bold text-lg">
            Vibe<span className="text-gradient-red">Scudo</span>
          </span>
        </div>
        <p className="text-sm text-muted-foreground text-center">
          © 2025 VibeScudo. Scansione di sicurezza per web app generate con AI.
        </p>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
          <a href="#" className="hover:text-foreground transition-colors">Termini</a>
          <a href="#" className="hover:text-foreground transition-colors">Contatti</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
