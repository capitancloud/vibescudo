import HeroSection from "@/components/HeroSection";
import SecurityAreas from "@/components/SecurityAreas";
import StatsBar from "@/components/StatsBar";
import WhySection from "@/components/WhySection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const SCANNER_URL = "https://scanner.vibescudo.it/";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection scannerUrl={SCANNER_URL} />
      <SecurityAreas />
      <StatsBar />
      <WhySection />
      <PricingSection scannerUrl={SCANNER_URL} />
      <FAQSection />
      <Footer scannerUrl={SCANNER_URL} />
    </div>
  );
};

export default Index;
