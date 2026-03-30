import { Hero } from "@/components/marketing/hero";
import { ValueProposition } from "@/components/marketing/value-proposition";
import { Features } from "@/components/marketing/features";
import { Benefits } from "@/components/marketing/benefits";
import { SocialProof } from "@/components/marketing/social-proof";
import { CtaSection } from "@/components/marketing/cta-section";
import { Faq } from "@/components/marketing/faq";
import { ContactForm } from "@/components/marketing/contact-form";
import { Footer } from "@/components/marketing/footer";
import { Navbar2 } from "@/components/marketing/navbar2";

export default function Home() {
  return (
    <>
      <Navbar2 />
      <main>
        <Hero />
        <ValueProposition />
        <Features />
        <Benefits />
        <SocialProof />
        <CtaSection />
        <Faq />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
