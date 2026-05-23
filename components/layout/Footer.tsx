import Link from "next/link";
import { CONTACT, FOOTER_LINKS } from "@/lib/constants";
import SchemaOrg from "@/components/seo/SchemaOrg";
import { organizationSchema } from "@/lib/seo";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#00101f" }}>
      {/* Línea dorada separadora */}
      <div style={{ height: "1px", background: "linear-gradient(to right, transparent, rgba(199,168,75,0.6) 30%, rgba(199,168,75,0.6) 70%, transparent)" }} />
      <SchemaOrg data={organizationSchema()} />
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">

        {/* Top — marca + links */}
        <div className="grid gap-10 md:grid-cols-5">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link
              href="/"
              className="text-2xl"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, color: "#fbf9f4" }}
            >
              Eliana <em className="italic" style={{ color: "#c7a84b" }}>Zaia</em>
            </Link>
            <p
              className="mt-4 max-w-xs text-sm leading-relaxed"
              style={{ color: "rgba(251,249,244,0.5)" }}
            >
              Técnica italiana, dulzura latina.
              <br />
              Desde 1998, en cada mesa de Colombia.
            </p>
            <div className="mt-6 flex flex-col gap-2">
              <a
                href={CONTACT.whatsappMessage}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm transition-colors hover:text-[#c7a84b]"
                style={{ color: "rgba(251,249,244,0.5)" }}
              >
                WhatsApp — {CONTACT.phone}
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-sm transition-colors hover:text-[#c7a84b]"
                style={{ color: "rgba(251,249,244,0.5)" }}
              >
                {CONTACT.email}
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 md:col-span-3 md:grid-cols-3">
            {[
              { title: "Productos", links: FOOTER_LINKS.productos },
              { title: "Empresa", links: FOOTER_LINKS.empresa },
              { title: "Nosotros", links: FOOTER_LINKS.nosotros },
            ].map((section) => (
              <div key={section.title}>
                <h3
                  className="mb-4 text-xs uppercase tracking-[0.22em]"
                  style={{ color: "#c7a84b" }}
                >
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm transition-colors hover:text-[#c7a84b]"
                        style={{ color: "rgba(251,249,244,0.5)" }}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div
          className="mt-12 flex flex-col gap-3 border-t pt-8 md:flex-row md:items-center md:justify-between"
          style={{ borderColor: "rgba(199,168,75,0.12)" }}
        >
          <p className="text-xs" style={{ color: "rgba(251,249,244,0.3)" }}>
            © {new Date().getFullYear()} Eliana Zaia. Todos los derechos reservados.
          </p>
          <p className="text-xs" style={{ color: "rgba(251,249,244,0.3)" }}>
            Hecho con oficio en Zipaquirá, Colombia.
          </p>
        </div>
      </div>
    </footer>
  );
}
