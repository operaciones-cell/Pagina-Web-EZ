// app/contacto/page.tsx
import type { Metadata } from "next";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import SchemaOrg from "@/components/seo/SchemaOrg";
import ContactForm from "@/components/forms/ContactForm";
import { CONTACT } from "@/lib/constants";
import { contactPageSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contacto | Eliana Zaia — Reposteria Premium",
  description: "Contacta a Eliana Zaia. Postres artesanales premium para supermercados y distribuidores en Colombia. WhatsApp, email o formulario.",
};

export default function ContactoPage() {
  return (
    <div className="bg-bg-warm min-h-screen pt-24">
      <SchemaOrg data={contactPageSchema()} />
      <div className="mx-auto max-w-3xl px-6 pb-16">
        <Breadcrumbs items={[{ name: "Contacto", href: "/contacto" }]} />

        <h1 className="font-heading text-4xl font-bold text-text-primary mt-4">
          Contacto
        </h1>
        <p className="mt-4 text-text-muted">
          Escribenos y te responderemos lo antes posible. Tambien puedes contactarnos directamente por WhatsApp.
        </p>

        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          <div className="space-y-6">
            <div>
              <h2 className="font-semibold text-text-primary">WhatsApp</h2>
              <a
                href={CONTACT.whatsappMessage}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-block text-accent-gold hover:text-accent-caramel transition-colors"
              >
                {CONTACT.phone}
              </a>
            </div>
            <div>
              <h2 className="font-semibold text-text-primary">Email</h2>
              <a
                href={`mailto:${CONTACT.email}`}
                className="mt-1 inline-block text-accent-gold hover:text-accent-caramel transition-colors"
              >
                {CONTACT.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
