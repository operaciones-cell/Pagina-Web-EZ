import { PRODUCTS } from "@/lib/constants";
import { Product } from "@/lib/types";
import ProductCard from "./ProductCard";

export default function RelatedProducts({ slugs }: { slugs: string[] }) {
  const related = slugs
    .map((slug) => PRODUCTS.find((p) => p.id === slug))
    .filter((p): p is Product => Boolean(p));

  if (related.length === 0) return null;

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
      {related.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
