import { useState, useCallback, useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import VolunteerCounter from "@/components/VolunteerCounter";
import AboutSection from "@/components/AboutSection";
import RegistrationSection from "@/components/RegistrationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { getVolunteerCount } from "@/services/googleSheets";

const Index = () => {
  const [volunteerCount, setVolunteerCount] = useState(0);

  // Fetch volunteer count from Google Sheets on component mount
  useEffect(() => {
    const fetchCount = async () => {
      try {
        const count = await getVolunteerCount();
        setVolunteerCount(count);
      } catch (error) {
        console.error("Failed to fetch volunteer count:", error);
        setVolunteerCount(0);
      }
    };
    
    fetchCount();
  }, []);

  const handleRegistrationSuccess = useCallback(() => {
    setVolunteerCount((prev) => prev + 1);
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <VolunteerCounter count={volunteerCount} />
      <AboutSection />
      <RegistrationSection 
        onSuccess={handleRegistrationSuccess} 
        volunteerCount={volunteerCount} 
      />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
