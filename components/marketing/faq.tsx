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
    <section id="faq" className="py-20 md:py-28 bg-muted/30 border-y border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="font-heading text-2xl sm:text-3xl font-semibold tracking-tight text-center mb-10">
          {faqConfig.title}
        </h2>

        <div className="max-w-2xl mx-auto">
          <Accordion>
            {faqConfig.items.map((item, i) => (
              <AccordionItem key={i} value={String(i)}>
                <AccordionTrigger className="text-sm font-medium py-4">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
