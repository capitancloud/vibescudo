import LegalLayout from "@/components/LegalLayout";

const EMAIL = "vibescudo@gmail.com";

const PrivacyPolicy = () => {
  return (
    <LegalLayout title="Privacy Policy">
      <p><em>Ultimo aggiornamento: febbraio 2026</em></p>

      <h2>1. Titolare del trattamento</h2>
      <p>
        Eugenio Carlo Fontana<br />
        Via Borgo Baldassarre Paoli 53 — 50022 Greve in Chianti (FI)<br />
        P.IVA 07097370485 — C.F. FNTGCR88B12A564Z<br />
        Email: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
      </p>

      <h2>2. Dati raccolti</h2>
      <p>VibeScudo raccoglie e tratta le seguenti categorie di dati personali:</p>
      <ul>
        <li><strong>Dati di registrazione:</strong> indirizzo email e password (cifrata) per la creazione dell'account.</li>
        <li><strong>Dati di utilizzo:</strong> URL sottoposti a scansione, data e ora delle scansioni, risultati dei report.</li>
        <li><strong>Dati di pagamento:</strong> gestiti integralmente da Stripe Inc.; VibeScudo non tratta né conserva dati di carte di credito.</li>
        <li><strong>Dati tecnici:</strong> indirizzo IP, browser, sistema operativo, raccolti automaticamente per finalità di sicurezza e di log.</li>
      </ul>

      <h2>3. Finalità e base giuridica del trattamento</h2>
      <ul>
        <li>Erogazione del servizio di scansione (esecuzione del contratto — art. 6.1.b GDPR).</li>
        <li>Gestione degli account utente e autenticazione (esecuzione del contratto).</li>
        <li>Elaborazione dei pagamenti tramite Stripe (esecuzione del contratto).</li>
        <li>Adempimento di obblighi legali e fiscali (obbligo legale — art. 6.1.c GDPR).</li>
        <li>Miglioramento del servizio e sicurezza della piattaforma (legittimo interesse — art. 6.1.f GDPR).</li>
      </ul>

      <h2>4. Conservazione dei dati</h2>
      <p>
        I dati degli account e i report di scansione sono conservati finché l'account è attivo. In caso di cancellazione dell'account, i dati vengono eliminati entro 30 giorni, salvo obbligo di conservazione legale. I log tecnici vengono conservati per un massimo di 12 mesi.
      </p>

      <h2>5. Comunicazione a terzi</h2>
      <p>I dati personali non vengono venduti né ceduti a terzi. Vengono condivisi esclusivamente con:</p>
      <ul>
        <li><strong>Supabase Inc.</strong> — archiviazione database e autenticazione (data processor).</li>
        <li><strong>Stripe Inc.</strong> — elaborazione pagamenti (data processor).</li>
        <li><strong>OpenAI, L.L.C.</strong> — generazione report di remediation AI (data processor).</li>
        <li><strong>Netlify Inc.</strong> — hosting dell'applicazione (data processor).</li>
      </ul>
      <p>Tutti i fornitori operano nel rispetto del GDPR e dispongono di adeguate garanzie contrattuali (DPA).</p>

      <h2>6. Diritti dell'interessato</h2>
      <p>L'utente ha il diritto di:</p>
      <ul>
        <li>accedere ai propri dati personali;</li>
        <li>richiederne la rettifica o la cancellazione;</li>
        <li>limitare o opporsi al trattamento;</li>
        <li>richiedere la portabilità dei dati;</li>
        <li>revocare il consenso in qualsiasi momento;</li>
        <li>proporre reclamo al Garante per la protezione dei dati personali (<a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer">www.garanteprivacy.it</a>).</li>
      </ul>
      <p>Per esercitare i propri diritti: <a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>

      <h2>7. Trasferimenti internazionali</h2>
      <p>
        Alcuni fornitori (Supabase, Stripe, OpenAI, Netlify) potrebbero trattare i dati al di fuori dello Spazio Economico Europeo. In tali casi, il trasferimento avviene nel rispetto delle garanzie previste dal GDPR (Clausole Contrattuali Standard o decisioni di adeguatezza).
      </p>

      <h2>8. Modifiche alla presente policy</h2>
      <p>
        Il Titolare si riserva di aggiornare la presente Privacy Policy. Le modifiche sostanziali saranno comunicate via email agli utenti registrati. L'utilizzo continuato del servizio dopo la pubblicazione delle modifiche costituisce accettazione delle stesse.
      </p>
    </LegalLayout>
  );
};

export default PrivacyPolicy;
