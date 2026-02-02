import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import { Users } from "lucide-react";

interface VolunteerCounterProps {
  count: number;
}

const AnimatedNumber = ({ value }: { value: number }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 2,
      ease: "easeOut",
    });

    const unsubscribe = rounded.on("change", (v) => setDisplayValue(v));

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [value, count, rounded]);

  return (
    <span className="counter-number text-7xl md:text-9xl lg:text-[12rem] font-bebas text-gold-gradient">
      {displayValue.toLocaleString()}
    </span>
  );
};

const VolunteerCounter = ({ count }: VolunteerCounterProps) => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-midnight to-background" />
      <div className="absolute inset-0 geometric-pattern opacity-20" />

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gold/10 border border-gold/30 mb-8 animate-pulse-gold"
          >
            <Users className="w-10 h-10 text-gold" />
          </motion.div>

          {/* Counter */}
          <div className="relative mb-6">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative inline-block"
            >
              <AnimatedNumber value={count} />
              
              {/* Glow Effect */}
              <div className="absolute inset-0 blur-3xl bg-gold/20 -z-10" />
            </motion.div>
          </div>

          {/* Label */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="font-cinzel text-2xl md:text-3xl text-foreground/90 tracking-wide"
          >
            Bénévoles Inscrits
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="font-cairo text-muted-foreground mt-4 max-w-md mx-auto"
          >
            Rejoignez notre communauté grandissante de bénévoles dévoués
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default VolunteerCounter;
