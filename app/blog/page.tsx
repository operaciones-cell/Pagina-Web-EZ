// app/blog/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Tendencias en reposteria, postres y la industria de alimentos",
  description: "Blog de Eliana Zaia: tendencias en reposteria, recetas, noticias de la industria de alimentos y novedades de nuestros postres artesanales.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-bg-warm pt-24">
      <div className="mx-auto max-w-4xl px-6 pb-16">
        <Breadcrumbs items={[{ name: "Blog", href: "/blog" }]} />

        <h1 className="font-heading text-4xl md:text-5xl font-bold text-text-primary mt-4">
          Blog
        </h1>
        <p className="mt-4 text-lg text-text-muted">
          Tendencias en reposteria, postres y la industria de alimentos.
        </p>

        {posts.length === 0 ? (
          <div className="mt-16 text-center">
            <p className="text-text-muted text-lg">Proximamente publicaremos contenido.</p>
            <Link href="/" className="mt-4 inline-block text-accent-gold hover:text-accent-caramel transition-colors">
              Volver al inicio &rarr;
            </Link>
          </div>
        ) : (
          <div className="mt-8 grid gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="text-xs font-medium uppercase tracking-wider text-accent-gold">
                  {post.category}
                </span>
                <h2 className="mt-2 font-heading text-xl font-semibold text-text-primary">
                  {post.title}
                </h2>
                <p className="mt-2 text-text-muted">{post.description}</p>
                <p className="mt-3 text-sm text-text-muted">{post.date}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
