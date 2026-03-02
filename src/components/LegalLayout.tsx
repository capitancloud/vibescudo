import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  children: React.ReactNode;
}

const LegalLayout = ({ title, children }: Props) => {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:py-24">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10"
        >
          <ArrowLeft className="h-4 w-4" />
          Torna alla home
        </Link>

        <h1 className="font-display text-3xl sm:text-4xl font-bold mb-10">{title}</h1>

        <div className="prose prose-invert prose-sm max-w-none [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-bold [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-2 [&_p]:text-muted-foreground [&_p]:leading-relaxed [&_p]:mb-4 [&_li]:text-muted-foreground [&_li]:leading-relaxed [&_ul]:space-y-1 [&_a]:text-primary [&_a]:underline [&_strong]:text-foreground">
          {children}
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-wrap gap-6 text-xs text-muted-foreground">
          <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
          <Link to="/cookie-policy" className="hover:text-primary transition-colors">Cookie Policy</Link>
          <Link to="/disclaimer" className="hover:text-primary transition-colors">Disclaimer</Link>
        </div>
      </div>
    </div>
  );
};

export default LegalLayout;
