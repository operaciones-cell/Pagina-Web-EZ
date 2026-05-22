import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { PRODUCTS, CONTACT } from "@/lib/constants";
import SchemaOrg from "@/components/seo/SchemaOrg";
import RelatedProducts from "@/components/products/RelatedProducts";
import { productSchema } from "@/lib/seo";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({ slug: product.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.id === slug);
  if (!product) return {};
  return {
    title: product.seo.metaTitle,
    description: product.seo.metaDescription,
    keywords: product.seo.keywords,
    openGraph: {
      title: product.seo.metaTitle,
      description: product.seo.metaDescription,
      type: "website",
      images: product.image ? [{ url: product.image }] : [],
    },
  };
}

const CATEGORY_LABELS: Record<string, string> = {
  premium: "Premium",
  clasico: "Clásico",
  gelatinas: "Gelatinas",
  snack: "Snack",
};

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.id === slug);
  if (!product) notFound();

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#fbf9f4" }}>
      <SchemaOrg data={productSchema(product)} />

      {/* Hero grid */}
      <div className="mx-auto max-w-6xl px-6 pb-20 pt-32 md:pt-40">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-start">

          {/* Imagen */}
          <div
            className="relative aspect-square overflow-hidden rounded-3xl"
            style={{ backgroundColor: "#f5f3ee" }}
          >
            {product.image ? (
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover animate-ken-burns-always"
                priority
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="text-2xl"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontStyle: "italic",
                    color: "#4a5560",
                  }}
                >
                  {product.name}
                </span>
              </div>
            )}
          </div>

          {/* Info */}
          <div className="flex flex-col lg:pt-4">
            {/* Breadcrumb */}
            <div className="mb-6 flex items-center gap-2 text-xs" style={{ color: "#4a5560" }}>
              <Link href="/productos" className="transition-colors hover:text-[#c7a84b]">
                Productos
              </Link>
              <span>/</span>
              <span style={{ color: "#c7a84b" }}>{product.name}</span>
            </div>

            {/* Categoría + peso */}
            <div className="mb-4 flex items-center gap-3">
              <span
                className="rounded-full px-3 py-1 text-xs uppercase tracking-[0.18em]"
                style={{ backgroundColor: "rgba(199,168,75,0.1)", color: "#c7a84b" }}
              >
                {CATEGORY_LABELS[product.category] ?? product.category}
              </span>
              <span className="text-xs" style={{ color: "#4a5560" }}>
                {product.weight}
              </span>
            </div>

            {/* Nombre */}
            <h1
              className="text-4xl leading-[1.1] md:text-5xl"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 400,
                letterSpacing: "-0.02em",
                color: "#00101f",
              }}
            >
              {product.name}
            </h1>

            {/* Descripción corta */}
            <p
              className="mt-4 text-base italic leading-relaxed"
              style={{ color: "#c7a84b", fontFamily: "'Cormorant Garamond', serif" }}
            >
              {product.description}
            </p>

            {/* Descripción larga */}
            <p
              className="mt-5 text-sm leading-relaxed md:text-base"
              style={{ color: "#4a5560" }}
            >
              {product.longDescription}
            </p>

            {/* Ingredientes */}
            <div
              className="mt-8 border-t pt-6"
              style={{ borderColor: "rgba(199,168,75,0.15)" }}
            >
              <p
                className="mb-3 text-xs uppercase tracking-[0.22em]"
                style={{ color: "#c7a84b" }}
              >
                Ingredientes
              </p>
              <div className="flex flex-wrap gap-2">
                {product.ingredients.map((ing) => (
                  <span
                    key={ing}
                    className="rounded-full px-3 py-1 text-xs"
                    style={{
                      backgroundColor: "rgba(0,16,31,0.05)",
                      color: "#4a5560",
                    }}
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </div>

            {/* Dónde comprar */}
            <div
              className="mt-6 border-t pt-6"
              style={{ borderColor: "rgba(199,168,75,0.15)" }}
            >
              <p
                className="mb-3 text-xs uppercase tracking-[0.22em]"
                style={{ color: "#c7a84b" }}
              >
                Dónde encontrarlo
              </p>
              <Link
                href="/donde-comprar"
                className="text-sm transition-colors hover:text-[#c7a84b]"
                style={{ color: "#4a5560" }}
              >
                Ver puntos de venta en Colombia →
              </Link>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={CONTACT.whatsappMessage}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-semibold transition-all hover:scale-[1.03]"
                style={{
                  backgroundColor: "#c7a84b",
                  color: "#00101f",
                  boxShadow: "0 6px 24px rgba(199,168,75,0.3)",
                }}
              >
                Pedir información
              </a>
              <Link
                href="/para-empresas"
                className="inline-flex items-center justify-center rounded-full border-2 px-8 py-4 text-sm font-semibold transition-all hover:scale-[1.03]"
                style={{ borderColor: "#c7a84b", color: "#00101f" }}
              >
                Para tu empresa
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Productos relacionados — midnight */}
      {product.relatedProducts.length > 0 && (
        <div
          className="px-6 py-16 md:py-20"
          style={{ backgroundColor: "#00101f" }}
        >
          <div className="mx-auto max-w-6xl">
            <p
              className="mb-3 text-xs uppercase tracking-[0.28em]"
              style={{ color: "#c7a84b" }}
            >
              También te puede gustar
            </p>
            <RelatedProducts slugs={product.relatedProducts} />
          </div>
        </div>
      )}
    </div>
  );
}
