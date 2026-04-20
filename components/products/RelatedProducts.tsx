import { PRODUCTS } from "@/lib/constants";
import { Product } from "@/lib/types";
import ProductCard from "./ProductCard";

export default function RelatedProducts({ slugs }: { slugs: string[] }) {
  const related = slugs
    .map((slug) => PRODUCTS.find((p) => p.id === slug))
    .filter((p): p is Product => Boolean(p));

  if (related.length === 0) return null;

  return (
    <section className="mt-16">
      <h2 className="font-heading text-2xl font-bold text-text-primary mb-6">
        Tambien te puede gustar
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {related.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
