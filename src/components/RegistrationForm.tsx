import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Loader2, CheckCircle2, Sparkles } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { submitVolunteer } from "@/services/googleSheets";

const formSchema = z.object({
  fullName: z.string().min(2, "Le nom doit contenir au moins 2 caractères").max(100),
  email: z.string().email("Adresse email invalide"),
  phone: z.string().min(8, "Numéro de téléphone invalide").max(20),
  age: z.string().refine((val) => !val || (parseInt(val) >= 16 && parseInt(val) <= 100), {
    message: "L'âge doit être entre 16 et 100 ans",
  }),
  city: z.string().min(2, "Veuillez entrer votre ville"),
  availability: z.array(z.string()).min(1, "Veuillez sélectionner au moins une disponibilité"),
  reason: z.string().min(10, "Veuillez expliquer votre motivation (minimum 10 caractères)").max(1000),
  experience: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

interface RegistrationFormProps {
  onSuccess: () => void;
  volunteerCount: number;
}

const availabilityOptions = [
  { id: "weekdays", label: "Jours de semaine" },
  { id: "weekends", label: "Week-ends" },
  { id: "evenings", label: "Soirées" },
  { id: "flexible", label: "Flexible" },
];

const RegistrationForm = ({ onSuccess, volunteerCount }: RegistrationFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      age: "",
      city: "",
      availability: [],
      reason: "",
      experience: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Submit form data to Google Sheets via the API
      const response = await submitVolunteer(data);
      
      console.log("Form submitted successfully:", response);
      
      setIsSuccess(true);
      onSuccess();
      
      toast({
        title: "Inscription réussie! ",
        description: `Merci ${data.fullName}! Vous êtes le bénévole #${volunteerCount + 1}`,
      });
      
      // Reset after showing success
      setTimeout(() => {
        setIsSuccess(false);
        form.reset();
      }, 5000);
      
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.2 }}
          className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gold/20 mb-8"
        >
          <CheckCircle2 className="w-12 h-12 text-gold" />
        </motion.div>
        
        <h3 className="font-cinzel text-3xl font-bold text-gold-gradient mb-4">
          Merci pour votre inscription!
        </h3>
        
        <p className="font-cairo text-xl text-foreground/80 mb-2">
          Vous êtes le bénévole #{volunteerCount + 1}
        </p>
        
        <p className="font-cairo text-muted-foreground">
          Nous vous contacterons très bientôt avec plus d'informations.
        </p>

        <motion.div
          className="mt-8 flex justify-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {[...Array(5)].map((_, i) => (
            <Sparkles
              key={i}
              className="w-6 h-6 text-gold animate-twinkle"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </motion.div>
      </motion.div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name */}
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-cairo text-foreground">
                  Nom Complet <span className="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Votre nom complet"
                    className="bg-muted/50 border-gold/20 focus:border-gold focus:ring-gold/30"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-cairo text-foreground">
                  Email <span className="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    placeholder="votre@email.com"
                    className="bg-muted/50 border-gold/20 focus:border-gold focus:ring-gold/30"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Phone */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-cairo text-foreground">
                  Téléphone <span className="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="tel"
                    placeholder="+216 XX XXX XXX"
                    className="bg-muted/50 border-gold/20 focus:border-gold focus:ring-gold/30"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Age */}
          <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-cairo text-foreground">Âge</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="number"
                    placeholder="Votre âge"
                    min={16}
                    max={100}
                    className="bg-muted/50 border-gold/20 focus:border-gold focus:ring-gold/30"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* City */}
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem className="md:col-span-2">
                <FormLabel className="font-cairo text-foreground">
                  Ville <span className="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Votre ville"
                    className="bg-muted/50 border-gold/20 focus:border-gold focus:ring-gold/30"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Availability */}
        <FormField
          control={form.control}
          name="availability"
          render={() => (
            <FormItem>
              <FormLabel className="font-cairo text-foreground">
                Disponibilité <span className="text-destructive">*</span>
              </FormLabel>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
                {availabilityOptions.map((option) => (
                  <FormField
                    key={option.id}
                    control={form.control}
                    name="availability"
                    render={({ field }) => (
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(option.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, option.id])
                                : field.onChange(
                                    field.value?.filter((value) => value !== option.id)
                                  );
                            }}
                            className="border-gold/40 data-[state=checked]:bg-gold data-[state=checked]:border-gold"
                          />
                        </FormControl>
                        <Label className="font-cairo text-sm text-foreground/80 cursor-pointer">
                          {option.label}
                        </Label>
                      </FormItem>
                    )}
                  />
                ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Reason */}
        <FormField
          control={form.control}
          name="reason"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-cairo text-foreground">
                Pourquoi souhaitez-vous devenir bénévole? <span className="text-destructive">*</span>
              </FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="Partagez votre motivation..."
                  rows={4}
                  className="bg-muted/50 border-gold/20 focus:border-gold focus:ring-gold/30 resize-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Experience */}
        <FormField
          control={form.control}
          name="experience"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-cairo text-foreground">
                Expérience de bénévolat précédente (optionnel)
              </FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="Décrivez vos expériences passées..."
                  rows={3}
                  className="bg-muted/50 border-gold/20 focus:border-gold focus:ring-gold/30 resize-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-6 text-lg font-cairo font-semibold bg-gradient-to-r from-gold-dark via-gold to-gold-light text-background hover:shadow-gold-intense transition-all duration-300 gold-shimmer"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Inscription en cours...
            </>
          ) : (
            "S'inscrire comme Bénévole"
          )}
        </Button>
      </form>
    </Form>
  );
};

export default RegistrationForm;
