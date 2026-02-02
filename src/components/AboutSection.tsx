import { motion } from "framer-motion";
import { Heart, HandHeart, Sparkles, Target } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Générosité",
    description: "Collectez des fonds pour soutenir les familles dans le besoin pendant le mois sacré",
  },
  {
    icon: HandHeart,
    title: "Solidarité",
    description: "Créez des liens forts avec votre communauté en agissant ensemble pour le bien commun",
  },
  {
    icon: Sparkles,
    title: "Impact",
    description: "Votre engagement fait une différence réelle dans la vie de nombreuses personnes",
  },
  {
    icon: Target,
    title: "Mission",
    description: "Contribuez à une action caritative organisée et efficace pendant Ramadan",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-card-gradient" />
      
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
            Notre Mission
          </h2>
          <p className="font-cairo text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Action Ramadhan El Mhaba est une initiative caritative de la Fondation Tunivisions 
            visant à rassembler des bénévoles pour collecter des fonds et soutenir les familles 
            défavorisées pendant le mois sacré de Ramadan.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl border-gold-gradient bg-card hover:shadow-gold-glow transition-all duration-500"
            >
              {/* Icon */}
              <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gold/10 group-hover:bg-gold/20 transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-gold" />
              </div>

              {/* Content */}
              <h3 className="font-cinzel text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="font-cairo text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* What Volunteers Do */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <h3 className="font-cinzel text-2xl md:text-3xl font-bold text-foreground mb-8">
            Ce Que Vous Ferez
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              "Collecter des fonds dans votre communauté",
              "Sensibiliser à notre cause caritative",
              "Participer à la distribution d'aide",
            ].map((task, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="p-6 rounded-xl bg-muted/50 border border-gold/20"
              >
                <p className="font-cairo text-foreground/90">{task}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
