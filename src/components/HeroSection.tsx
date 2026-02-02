import { motion } from "framer-motion";
import tunivisionsLogo from "@/assets/tunivisions-logo.png";
import ramadanLogo from "@/assets/ramadan-logo.png";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById("registration")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-hero-gradient">
      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 geometric-pattern opacity-30" />
      
      {/* Star Field */}
      <div className="absolute inset-0 star-field opacity-40" />
      
      {/* Floating Stars */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-star animate-twinkle"
          style={{
            left: `${15 + i * 15}%`,
            top: `${10 + (i % 3) * 20}%`,
            animationDelay: `${i * 0.5}s`,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Tunivisions Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <img
            src={tunivisionsLogo}
            alt="Tunivisions Foundation"
            className="h-12 md:h-16 mx-auto"
          />
        </motion.div>

        {/* Ramadan Logo - Hero Centerpiece */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-8 animate-float"
        >
          <img
            src={ramadanLogo}
            alt="رمضان المحبة - Ramadan Al Mahaba"
            className="h-48 md:h-72 lg:h-80 mx-auto drop-shadow-2xl"
          />
        </motion.div>

        {/* Headlines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-4 mb-10"
        >
          <h1 className="font-cinzel text-3xl md:text-5xl lg:text-6xl font-bold text-gold-gradient leading-tight">
            Rejoignez Notre Mission
          </h1>
          <p className="font-cairo text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
            Devenez bénévole pour Action Ramadhan El Mhaba et contribuez à apporter 
            espoir et soutien à ceux qui en ont le plus besoin
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          onClick={scrollToForm}
          className="group relative px-10 py-4 bg-gradient-to-r from-gold-dark via-gold to-gold-light rounded-full font-cairo font-semibold text-lg text-background overflow-hidden shadow-gold-glow hover:shadow-gold-intense transition-all duration-300 gold-shimmer"
        >
          <span className="relative z-10">Devenir Bénévole</span>
        </motion.button>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="cursor-pointer"
          onClick={scrollToForm}
        >
          <ChevronDown className="w-8 h-8 text-gold" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
