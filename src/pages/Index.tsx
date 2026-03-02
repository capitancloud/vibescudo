import HeroSection from "@/components/HeroSection";
import ScanForm from "@/components/ScanForm";
import SecurityAreas from "@/components/SecurityAreas";
import StatsBar from "@/components/StatsBar";
import WhySection from "@/components/WhySection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ScanForm />
      <SecurityAreas />
      <StatsBar />
      <WhySection />
      <PricingSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
