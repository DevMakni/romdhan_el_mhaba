import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-8 overflow-hidden">
      <div className="absolute inset-0 bg-midnight" />
      
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="font-cairo text-sm text-muted-foreground text-center md:text-left">
            © {currentYear} Tunivisions Foundation. Tous droits réservés.
          </p>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="font-cairo">Fait avec</span>
            <Heart className="w-4 h-4 text-gold fill-gold" />
            <span className="font-cairo">pour la communauté</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
