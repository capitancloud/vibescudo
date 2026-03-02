import { motion } from "framer-motion";

const stats = [
  { value: "89%", desc: "delle app AI ha vulnerabilità" },
  { value: "4.7M", desc: "siti vibe-coded nel 2025" },
  { value: "12 sec", desc: "per trovare una falla esposta" },
  { value: "€0", desc: "investiti in sicurezza dalla maggior parte" },
];

const SocialProof = () => {
  return (
    <section className="relative px-4 py-16 border-y border-border/50">
      <div className="absolute inset-0 bg-gradient-red-subtle opacity-30 pointer-events-none" />
      <div className="relative mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.desc}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-mono-bold text-3xl sm:text-4xl text-gradient-red mb-2">{s.value}</div>
              <div className="text-sm text-muted-foreground">{s.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
