import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { PRODUCTS, ALLIES } from "@/lib/constants";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
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
      images: [{ url: product.image }],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.id === slug);

  if (!product) notFound();

  return (
    <div className="bg-bg-warm min-h-screen pt-24">
      <SchemaOrg data={productSchema(product)} />
      <div className="mx-auto max-w-7xl px-6 pb-16">
        <Breadcrumbs
          items={[
            { name: "Productos", href: "/productos" },
            { name: product.name, href: `/productos/${product.id}` },
          ]}
        />

        <div className="mt-8 grid gap-12 lg:grid-cols-2">
          {/* Image */}
          <div className="aspect-square rounded-xl bg-bg-cream flex items-center justify-center">
            <span className="text-text-muted text-lg">{product.name}</span>
          </div>

          {/* Info */}
          <div>
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-text-primary">
              {product.seo.h1}
            </h1>

            <div className="mt-4 flex items-center gap-4">
              <span className="rounded-full bg-accent-gold/10 px-4 py-1 text-sm font-medium text-accent-gold">
                {product.category}
              </span>
              <span className="text-text-muted">{product.weight}</span>
            </div>

            <p className="mt-6 text-lg text-text-muted leading-relaxed">
              {product.longDescription}
            </p>

            {/* Ingredients */}
            <div className="mt-8">
              <h2 className="font-semibold text-text-primary mb-3">Ingredientes principales</h2>
              <ul className="flex flex-wrap gap-2">
                {product.ingredients.map((ing) => (
                  <li
                    key={ing}
                    className="rounded-full bg-white px-3 py-1 text-sm text-text-muted"
                  >
                    {ing}
                  </li>
                ))}
              </ul>
            </div>

            {/* Where to buy */}
            <div className="mt-8">
              <h2 className="font-semibold text-text-primary mb-3">Donde comprarlo</h2>
              <div className="flex flex-wrap gap-4">
                {ALLIES.map((ally) => (
                  <div
                    key={ally.name}
                    className="flex h-12 w-24 items-center justify-center rounded bg-white px-2"
                  >
                    <span className="text-xs text-text-muted">{ally.name}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/donde-comprar"
                className="mt-3 inline-block text-sm text-accent-gold hover:text-accent-caramel transition-colors"
              >
                Ver todos los puntos de venta &rarr;
              </Link>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <Link
                href="/para-empresas"
                className="rounded-full bg-accent-gold px-8 py-3 font-semibold text-bg-dark transition-colors hover:bg-accent-caramel"
              >
                Solicitar como empresa
              </Link>
            </div>
          </div>
        </div>

        <RelatedProducts slugs={product.relatedProducts} />
      </div>
    </div>
  );
}
