import { motion } from "framer-motion";
import RegistrationForm from "./RegistrationForm";

interface RegistrationSectionProps {
  onSuccess: () => void;
  volunteerCount: number;
}

const RegistrationSection = ({ onSuccess, volunteerCount }: RegistrationSectionProps) => {
  return (
    <section id="registration" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-card-gradient" />
      <div className="absolute inset-0 geometric-pattern opacity-10" />

      <div className="relative z-10 container mx-auto px-4 max-w-3xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-cinzel text-3xl md:text-5xl font-bold text-gold-gradient mb-6">
            Inscrivez-vous
          </h2>
          <p className="font-cairo text-lg text-muted-foreground">
            Remplissez le formulaire ci-dessous pour rejoindre notre équipe de bénévoles
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="p-8 md:p-12 rounded-3xl border-gold-gradient bg-card shadow-gold-glow"
        >
          <RegistrationForm onSuccess={onSuccess} volunteerCount={volunteerCount} />
        </motion.div>
      </div>
    </section>
  );
};

export default RegistrationSection;
