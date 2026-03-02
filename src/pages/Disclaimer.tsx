import LegalLayout from "@/components/LegalLayout";

const EMAIL = "vibescudo@gmail.com";

const Disclaimer = () => {
  return (
    <LegalLayout title="Disclaimer e Limitazione di Responsabilità">
      <p><em>Ultimo aggiornamento: febbraio 2026</em></p>
      <p>Leggere attentamente prima di utilizzare il servizio. L'utilizzo di VibeScudo implica l'accettazione integrale del presente disclaimer.</p>

      <h2>1. Natura del servizio</h2>
      <p>
        VibeScudo è uno strumento di analisi della sicurezza web a carattere <strong>informativo e diagnostico</strong>. Il servizio effettua scansioni non invasive e passive di URL pubblicamente accessibili al fine di identificare potenziali vulnerabilità, misconfigurazioni e pratiche di sicurezza carenti.
      </p>
      <p>
        I report generati hanno esclusivamente scopo orientativo e non costituiscono una consulenza di sicurezza professionale, un audit di penetration testing, né una certificazione di conformità a normative o standard (es. ISO 27001, GDPR, PCI-DSS).
      </p>

      <h2>2. Uso autorizzato — obbligo dell'utente</h2>
      <p>L'utente dichiara e garantisce, sotto la propria esclusiva responsabilità, che:</p>
      <ul>
        <li>è il <strong>proprietario</strong> del sito web oggetto di scansione, oppure</li>
        <li>dispone di <strong>autorizzazione scritta</strong> dal proprietario del sito a eseguire test di sicurezza.</li>
      </ul>
      <p>
        È severamente vietato utilizzare VibeScudo per scansionare siti web di terzi senza autorizzazione. Tale condotta può configurare reati informatici ai sensi dell'art. 615-ter e seguenti del Codice Penale italiano e delle normative equivalenti negli altri ordinamenti.
      </p>

      <h2>3. Esclusione di responsabilità</h2>
      <p>Eugenio Carlo Fontana, titolare di VibeScudo, <strong>non è responsabile</strong> per:</p>
      <ul>
        <li>danni diretti, indiretti, incidentali, consequenziali o punitivi derivanti dall'uso o dall'impossibilità di uso del servizio;</li>
        <li>scansioni effettuate su siti web senza il consenso del proprietario, e per tutte le conseguenze legali, civili e penali che ne derivano;</li>
        <li>decisioni operative, tecniche o legali prese dall'utente sulla base dei report generati dal servizio;</li>
        <li>imprecisioni, incompletezze o falsi negativi/positivi nei risultati della scansione;</li>
        <li>interruzioni del servizio, errori tecnici o perdita di dati;</li>
        <li>danni causati da vulnerabilità non rilevate dalla scansione.</li>
      </ul>

      <h2>4. Accuratezza dei risultati</h2>
      <p>
        I report di VibeScudo sono generati in modo automatizzato e possono contenere falsi positivi o omettere vulnerabilità presenti. L'utente è tenuto a verificare i risultati con un professionista della sicurezza informatica qualificato prima di intraprendere qualsiasi azione basata sui report.
      </p>
      <p>
        Il componente AI di remediation genera suggerimenti basati su modelli linguistici e non sostituisce una consulenza tecnica specializzata.
      </p>

      <h2>5. Indennizzo</h2>
      <p>L'utente si impegna a tenere indenne e manlevare Eugenio Carlo Fontana e VibeScudo da qualsiasi pretesa, reclamo, azione legale, danno, perdita o spesa (incluse le spese legali) derivanti da:</p>
      <ul>
        <li>violazione dei presenti termini da parte dell'utente;</li>
        <li>uso non autorizzato del servizio su siti web di terzi;</li>
        <li>violazione di leggi o regolamenti applicabili.</li>
      </ul>

      <h2>6. Limitazione del risarcimento</h2>
      <p>
        Nella misura massima consentita dalla legge applicabile, la responsabilità complessiva di VibeScudo nei confronti dell'utente non potrà in alcun caso superare l'importo pagato dall'utente per il singolo servizio che ha dato origine alla pretesa.
      </p>

      <h2>7. Legge applicabile e foro competente</h2>
      <p>
        Il presente disclaimer è regolato dalla legge italiana. Per qualsiasi controversia relativa al servizio è competente in via esclusiva il Foro di Firenze.
      </p>

      <h2>8. Contatti</h2>
      <p>
        Eugenio Carlo Fontana<br />
        Via Borgo Baldassarre Paoli 53 — 50022 Greve in Chianti (FI)<br />
        P.IVA 07097370485 — C.F. FNTGCR88B12A564Z<br />
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
      </p>
    </LegalLayout>
  );
};

export default Disclaimer;
