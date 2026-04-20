// components/seo/Breadcrumbs.tsx
import Link from "next/link";
import SchemaOrg from "./SchemaOrg";
import { breadcrumbSchema } from "@/lib/seo";

interface BreadcrumbItem {
  name: string;
  href: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const allItems = [{ name: "Inicio", href: "/" }, ...items];

  return (
    <>
      <SchemaOrg data={breadcrumbSchema(allItems)} />
      <nav aria-label="Breadcrumb" className="py-4">
        <ol className="flex items-center gap-2 text-sm text-text-muted">
          {allItems.map((item, index) => (
            <li key={item.href} className="flex items-center gap-2">
              {index > 0 && <span aria-hidden="true">/</span>}
              {index === allItems.length - 1 ? (
                <span aria-current="page" className="text-text-primary">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-accent-gold transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
