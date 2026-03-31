"use client";

import { faqConfig } from "@/lib/config/marketing";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export function Faq() {
  return (
    <section id="faq" className="py-20 md:py-28 border-y border-border bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Header */}
          <div className="lg:sticky lg:top-28">
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
              {faqConfig.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Handle objections before they happen. Use FAQs to answer the silent
              doubts holding people back.
            </p>
          </div>

          {/* Accordion */}
          <div>
            <Accordion>
              {faqConfig.items.map((item, i) => (
                <AccordionItem key={i} value={String(i)}>
                  <AccordionTrigger className="text-sm font-medium py-5 text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
