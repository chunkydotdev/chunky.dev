import FAQSection from "@/components/landing/FAQSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import FooterSection from "@/components/landing/FooterSection";
import HeroSection from "@/components/landing/HeroSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import OfferSection from "@/components/landing/OfferSection";
import ProofSection from "@/components/landing/ProofSection";
import SignedUp from "@/components/landing/SignedUp";
import SignupFormSection from "@/components/landing/SignupFormSection";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="relative min-h-screen font-sans">
      <div className="relative z-10 mx-auto">
        <HeroSection />
        <OfferSection />
        <ProofSection />
        <HowItWorksSection />
        <SignupFormSection />
        <FAQSection />
        <FinalCTASection />
        <FooterSection />
      </div>
      <Suspense>
        <SignedUp />
      </Suspense>
    </main>
  );
}
