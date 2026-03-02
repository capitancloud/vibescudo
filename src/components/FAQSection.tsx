import { motion } from "framer-motion";

const FAQSection = () => {
  const faqs = [
    {
      q: "La scansione può danneggiare il mio sito?",
      a: "Assolutamente no. VibeScudo utilizza esclusivamente richieste HTTP in sola lettura. Non modifica nulla, non testa exploit, non invia payload malevoli. È come se un visitatore normale navigasse il tuo sito — ma con un occhio esperto.",
    },
    {
      q: "Quali tipi di app possono essere scansionati?",
      a: "Qualsiasi web application con un URL pubblico: app create con Cursor, Bolt, Lovable, Replit, v0, Next.js, React, Vue, WordPress, Shopify e qualsiasi altro stack. Se è raggiungibile via browser, possiamo analizzarla.",
    },
    {
      q: "Cosa include esattamente il report?",
      a: "Un'analisi dettagliata di 21 controlli distribuiti su 7 aree critiche. Per ogni vulnerabilità trovata vedrai: una descrizione chiara del problema, il livello di rischio (critico, alto, medio, basso), l'impatto potenziale e consigli pratici e actionable per risolvere il problema.",
    },
    {
      q: "I miei dati sono al sicuro?",
      a: "Certo. Non memorizziamo dati sensibili del tuo sito. I report sono disponibili solo per te e vengono eliminati dopo 30 giorni. Non accediamo mai al tuo codice sorgente — analizziamo solo ciò che è già pubblicamente visibile.",
    },
    {
      q: "Perché costa €9,90?",
      a: "Ogni scansione richiede risorse di calcolo significative per eseguire 21 controlli in tempo reale. Il prezzo copre i costi infrastrutturali mantenendo il servizio accessibile. Considerando che un penetration test professionale costa tra €5.000 e €50.000, €9,90 è un investimento minimo per la tranquillità.",
    },
    {
      q: "Devo essere il proprietario del sito?",
      a: "Sì, devi essere il proprietario del sito o avere l'autorizzazione esplicita del proprietario. Anche se la scansione è completamente passiva, rispettiamo la privacy e l'etica. Prima di ogni scan ti chiediamo di confermare la tua autorizzazione.",
    },
    {
      q: "Quanto tempo ci vuole per avere i risultati?",
      a: "Meno di 30 secondi. La scansione è completamente automatizzata e i risultati sono disponibili immediatamente al termine. Non devi aspettare ore o giorni come con i pentest tradizionali.",
    },
    {
      q: "Offrite rimborsi?",
      a: "Sì. Se per qualsiasi motivo non sei soddisfatto della scansione, contattaci entro 7 giorni e ti rimborseremo l'intero importo, senza domande.",
    },
  ];

  return (
    <section className="px-4 py-24" id="faq">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Domande frequenti
          </h2>
          <p className="text-lg text-muted-foreground">
            Tutto quello che devi sapere prima della tua prima scansione.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.details
              key={faq.q}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group rounded-2xl border border-border bg-card overflow-hidden card-hover"
            >
              <summary className="font-semibold text-foreground list-none flex items-center justify-between p-6 cursor-pointer select-none">
                <span className="pr-4">{faq.q}</span>
                <span className="text-muted-foreground group-open:rotate-45 transition-transform duration-300 text-2xl shrink-0">+</span>
              </summary>
              <div className="px-6 pb-6 -mt-1">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
