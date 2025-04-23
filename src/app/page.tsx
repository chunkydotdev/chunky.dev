import FAQSection from "@/components/landing/FAQSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import FooterSection from "@/components/landing/FooterSection";
import HeroSection from "@/components/landing/HeroSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import OfferSection from "@/components/landing/OfferSection";
import ProofSection from "@/components/landing/ProofSection";
import SignupFormSection from "@/components/landing/SignupFormSection";

export default function Home() {
  return (
    <main className="relative min-h-screen font-sans">
      <div className="relative z-10 max-w-screen-xl mx-auto">
        <HeroSection />
        <OfferSection />
        <ProofSection />
        <HowItWorksSection />
        <SignupFormSection />
        <FAQSection />
        <FinalCTASection />
        <FooterSection />
      </div>
    </main>
  );
}
