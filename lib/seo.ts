// lib/seo.ts
import { CONTACT } from "./constants";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Eliana Zaia",
    alternateName: "Reposteria EZ",
    url: "https://eliana-zaia.com",
    email: CONTACT.email,
    telephone: CONTACT.phone,
    description: "Fabrica de postres artesanales premium desde 2010. Fusion de tradicion latina e italiana.",
    foundingDate: "2010",
    areaServed: {
      "@type": "Country",
      name: "Colombia",
    },
    sameAs: [],
  };
}

export function productSchema(product: {
  name: string;
  description: string;
  image: string;
  weight: string;
  category: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: `https://eliana-zaia.com${product.image}`,
    brand: {
      "@type": "Brand",
      name: "Eliana Zaia",
    },
    weight: {
      "@type": "QuantitativeValue",
      value: parseInt(product.weight) || 0,
      unitCode: "GRM",
    },
    category: product.category,
  };
}

export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://eliana-zaia.com${item.href}`,
    })),
  };
}

export function blogPostSchema(post: {
  title: string;
  description: string;
  slug: string;
  date: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    url: `https://eliana-zaia.com/blog/${post.slug}`,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: "Eliana Zaia",
    },
    publisher: {
      "@type": "Organization",
      name: "Eliana Zaia",
    },
    ...(post.image && { image: `https://eliana-zaia.com${post.image}` }),
  };
}

export function contactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contacto — Eliana Zaia",
    url: "https://eliana-zaia.com/contacto",
    mainEntity: {
      "@type": "Organization",
      name: "Eliana Zaia",
      email: CONTACT.email,
      telephone: CONTACT.phone,
    },
  };
}
