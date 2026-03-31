import { Hero } from "@/components/marketing/hero";
import { LogoCloud } from "@/components/marketing/logo-cloud";
import { Features } from "@/components/marketing/features";
import { Stats } from "@/components/marketing/stats";
import { HowItWorks } from "@/components/marketing/how-it-works";
import { WhyChooseUs } from "@/components/marketing/why-choose-us";
import { Integrations } from "@/components/marketing/integrations";
import { SocialProof } from "@/components/marketing/social-proof";
import { Pricing } from "@/components/marketing/pricing";
import { Faq } from "@/components/marketing/faq";
import { CtaSection } from "@/components/marketing/cta-section";
import { Footer } from "@/components/marketing/footer";
import { Navbar2 } from "@/components/marketing/navbar2";

export default function Home() {
  return (
    <>
      <Navbar2 />
      <main>
        <Hero />
        <LogoCloud />
        <Features />
        <Stats />
        <HowItWorks />
        <WhyChooseUs />
        <Integrations />
        <SocialProof />
        <Pricing />
        <Faq />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
