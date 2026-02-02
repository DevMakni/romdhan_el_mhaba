import { motion } from "framer-motion";
import { Instagram, Facebook, Phone, Mail } from "lucide-react";
import tunivisionsLogo from "@/assets/tunivisions-logo.png";
import ramadanLogo from "@/assets/ramadan-logo.png";

const contactLinks = [
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/tounes_el_mhaba/",
    value: "@tounes_el_mhaba",
  },
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61572272355068&locale=fr_FR",
    value: "تونس المحبة",
  },
  {
    icon: Phone,
    label: "Téléphone",
    href: "tel:+21612345678",
    value: "+216 12 345 678",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:romdhanelmhaba2@gmail.com",
    value: "romdhanelmhaba2@gmail.com",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-midnight to-background" />
      <div className="absolute inset-0 geometric-pattern opacity-20" />

      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-cinzel text-3xl md:text-5xl font-bold text-gold-gradient mb-6">
            Restez Connecté
          </h2>
          <p className="font-cairo text-lg text-muted-foreground max-w-2xl mx-auto">
            Suivez-nous pour les dernières actualités et mises à jour sur Action Ramadhan El Mhaba
          </p>
        </motion.div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactLinks.map((contact, index) => (
            <motion.a
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-2xl border-gold-gradient bg-card hover:shadow-gold-glow transition-all duration-500 text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold/10 group-hover:bg-gold/20 mb-4 transition-colors duration-300">
                <contact.icon className="w-7 h-7 text-gold" />
              </div>
              
              <h3 className="font-cinzel text-lg font-semibold text-foreground mb-2">
                {contact.label}
              </h3>
              
              <p className="font-cairo text-muted-foreground group-hover:text-gold transition-colors duration-300">
                {contact.value}
              </p>
            </motion.a>
          ))}
        </div>

        {/* Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8 border-t border-gold/20"
        >
          <img
            src={tunivisionsLogo}
            alt="Tunivisions Foundation"
            className="h-10 md:h-12 opacity-80 hover:opacity-100 transition-opacity"
          />
          <div className="hidden sm:block w-px h-12 bg-gold/30" />
          <img
            src={ramadanLogo}
            alt="Ramadan Al Mahaba"
            className="h-16 md:h-20 opacity-80 hover:opacity-100 transition-opacity"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
