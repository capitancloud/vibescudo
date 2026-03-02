import { motion } from "framer-motion";
import { Shield } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      q: "La scansione può danneggiare il mio sito?",
      a: "Assolutamente no. VibeScudo utilizza esclusivamente richieste HTTP in sola lettura. Non modifica, non testa exploit e non invia payload. È come se un visitatore navigasse il tuo sito.",
    },
    {
      q: "Quali tipi di app possono essere scansionati?",
      a: "Qualsiasi web application pubblica: app create con Cursor, Bolt, Lovable, Replit, v0 o qualsiasi altro strumento. Se ha un URL pubblico, possiamo analizzarla.",
    },
    {
      q: "Cosa include il report?",
      a: "Un'analisi dettagliata di 21 controlli distribuiti su 7 aree critiche, con livello di rischio per ogni vulnerabilità trovata e consigli pratici per la risoluzione.",
    },
    {
      q: "I miei dati sono al sicuro?",
      a: "Non memorizziamo dati sensibili. I report sono disponibili solo per l'utente che ha effettuato la scansione e vengono eliminati dopo 30 giorni.",
    },
    {
      q: "Perché costa €9,90?",
      a: "Ogni scansione richiede risorse di calcolo per eseguire 21 controlli in tempo reale. Il prezzo copre i costi infrastrutturali mantenendo il servizio accessibile a tutti.",
    },
  ];

  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Domande frequenti
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.details
              key={faq.q}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group rounded-xl border border-border bg-card p-6 cursor-pointer card-hover"
            >
              <summary className="font-semibold text-foreground list-none flex items-center justify-between">
                {faq.q}
                <span className="text-muted-foreground group-open:rotate-45 transition-transform text-xl">+</span>
              </summary>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                {faq.a}
              </p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
