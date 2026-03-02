import { motion } from "framer-motion";

const stats = [
  { value: "21", label: "controlli eseguiti" },
  { value: "7", label: "aree di sicurezza" },
  { value: "< 30s", label: "tempo medio" },
  { value: "100%", label: "passivo, zero rischi" },
];

const StatsBar = () => {
  return (
    <section className="px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-4xl"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-mono-bold text-3xl sm:text-4xl text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default StatsBar;
