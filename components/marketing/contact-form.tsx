"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { contactSchema, type ContactFormValues } from "@/lib/validations/contact";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(_data: ContactFormValues) {
    // Replace with your actual submission logic (API route, email service, etc.)
    await new Promise((resolve) => setTimeout(resolve, 600));
    toast.success("Message sent", {
      description: "We'll get back to you as soon as possible.",
    });
    reset();
  }

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: copy */}
          <div>
            <h2 className="font-heading text-2xl sm:text-3xl font-semibold tracking-tight mb-3">
              Get in touch
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-sm">
              Have a question or want to work together? Fill in the form and
              we&apos;ll reply as soon as we can.
            </p>
          </div>

          {/* Right: form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="flex flex-col gap-4"
          >
            {/* Name + Email row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="contact-name">Name</Label>
                <Input
                  id="contact-name"
                  placeholder="Your name"
                  aria-invalid={!!errors.name}
                  {...register("name")}
                />
                {errors.name && (
                  <p className="text-xs text-destructive">{errors.name.message}</p>
                )}
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="contact-email">Email</Label>
                <Input
                  id="contact-email"
                  type="email"
                  placeholder="you@example.com"
                  aria-invalid={!!errors.email}
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-xs text-destructive">{errors.email.message}</p>
                )}
              </div>
            </div>

            {/* Subject */}
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="contact-subject">Subject</Label>
              <Input
                id="contact-subject"
                placeholder="What is this about?"
                aria-invalid={!!errors.subject}
                {...register("subject")}
              />
              {errors.subject && (
                <p className="text-xs text-destructive">{errors.subject.message}</p>
              )}
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="contact-message">Message</Label>
              <Textarea
                id="contact-message"
                placeholder="Tell us more..."
                rows={5}
                aria-invalid={!!errors.message}
                {...register("message")}
              />
              {errors.message && (
                <p className="text-xs text-destructive">{errors.message.message}</p>
              )}
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="self-start"
              size="lg"
            >
              {isSubmitting ? "Sending…" : "Send message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
