import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SocialProof from "@/components/SocialProof";
import ProblemSection from "@/components/ProblemSection";
import HowItWorks from "@/components/HowItWorks";
import SecurityAreas from "@/components/SecurityAreas";
import TargetAudience from "@/components/TargetAudience";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const SCANNER_URL = "https://scanner.vibescudo.it/";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection scannerUrl={SCANNER_URL} />
      <SocialProof />
      <ProblemSection />
      <HowItWorks scannerUrl={SCANNER_URL} />
      <SecurityAreas />
      <TargetAudience />
      <PricingSection scannerUrl={SCANNER_URL} />
      <FAQSection />
      <FinalCTA scannerUrl={SCANNER_URL} />
      <Footer scannerUrl={SCANNER_URL} />
    </div>
  );
};

export default Index;
