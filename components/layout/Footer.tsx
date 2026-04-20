// components/layout/Footer.tsx
import Link from "next/link";
import { CONTACT, FOOTER_LINKS } from "@/lib/constants";
import SchemaOrg from "@/components/seo/SchemaOrg";
import { organizationSchema } from "@/lib/seo";

const footerSections = [
  { title: "Productos", links: FOOTER_LINKS.productos },
  { title: "Empresa", links: FOOTER_LINKS.empresa },
  { title: "Nosotros", links: FOOTER_LINKS.nosotros },
  { title: "Contacto", links: FOOTER_LINKS.contacto },
];

export default function Footer() {
  return (
    <footer className="bg-bg-dark border-t border-white/5">
      <SchemaOrg data={organizationSchema()} />
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link href="/" className="font-heading text-2xl font-bold text-text-light">
              Eliana Zaia
            </Link>
            <p className="mt-3 text-sm text-text-muted">
              Postres artesanales premium desde 2010.
              <br />
              Fusion de tradicion latina e italiana.
            </p>
          </div>

          {/* Link columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-light">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-text-muted transition-colors hover:text-accent-gold"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact row */}
        <div className="mt-12 flex flex-col items-center gap-4 border-t border-white/5 pt-8 text-sm text-text-muted md:flex-row md:justify-between">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <a
              href={`tel:${CONTACT.phone}`}
              className="transition-colors hover:text-accent-gold"
            >
              {CONTACT.phone}
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="transition-colors hover:text-accent-gold"
            >
              {CONTACT.email}
            </a>
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-accent-gold"
            >
              WhatsApp
            </a>
          </div>
          <p>Hecho con pasion en Colombia</p>
        </div>
      </div>
    </footer>
  );
}
