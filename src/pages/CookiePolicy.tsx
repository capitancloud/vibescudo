import LegalLayout from "@/components/LegalLayout";

const EMAIL = "vibescudo@gmail.com";

const CookiePolicy = () => {
  return (
    <LegalLayout title="Cookie Policy">
      <p><em>Ultimo aggiornamento: febbraio 2026</em></p>

      <h2>1. Cosa sono i cookie</h2>
      <p>
        I cookie sono piccoli file di testo che i siti web salvano sul dispositivo dell'utente durante la navigazione. Vengono utilizzati per far funzionare il sito correttamente, ricordare le preferenze dell'utente e raccogliere informazioni statistiche.
      </p>

      <h2>2. Cookie utilizzati da VibeScudo</h2>

      <h3>Cookie tecnici / di sessione (necessari)</h3>
      <p>
        Utilizzati per gestire la sessione di autenticazione dell'utente (forniti da Supabase). Senza questi cookie il login non funzionerebbe. Non richiedono il consenso dell'utente in quanto strettamente necessari all'erogazione del servizio (art. 122, comma 1, D.Lgs. 196/2003).
      </p>
      <ul>
        <li><code>sb-*</code> — cookie di sessione Supabase (autenticazione)</li>
      </ul>

      <h3>Cookie di terze parti — Stripe</h3>
      <p>
        Durante il processo di pagamento, Stripe (stripe.com) può impostare propri cookie per prevenire frodi e garantire la sicurezza della transazione. Si rimanda alla{" "}
        <a href="https://stripe.com/it/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy di Stripe</a>.
      </p>

      <h2>3. Cookie non utilizzati</h2>
      <p>
        VibeScudo <strong>non utilizza</strong> cookie di profilazione, cookie di tracciamento pubblicitario, né strumenti di analisi comportamentale (es. Google Analytics).
      </p>

      <h2>4. Gestione dei cookie</h2>
      <p>
        L'utente può controllare e cancellare i cookie tramite le impostazioni del proprio browser. La disabilitazione dei cookie tecnici potrebbe compromettere il corretto funzionamento del servizio (es. impossibilità di effettuare il login).
      </p>
      <p>
        Guide per i principali browser:{" "}
        <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Chrome</a>,{" "}
        <a href="https://support.mozilla.org/it/kb/protezione-antitracciamento-avanzata-firefox" target="_blank" rel="noopener noreferrer">Firefox</a>,{" "}
        <a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a>,{" "}
        <a href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">Edge</a>.
      </p>

      <h2>5. Contatti</h2>
      <p>Per qualsiasi domanda relativa all'uso dei cookie: <a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
    </LegalLayout>
  );
};

export default CookiePolicy;
