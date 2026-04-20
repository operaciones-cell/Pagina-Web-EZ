// app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import SchemaOrg from "@/components/seo/SchemaOrg";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { blogPostSchema } from "@/lib/seo";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <div className="min-h-screen bg-bg-warm pt-24">
      <SchemaOrg data={blogPostSchema(post)} />
      <article className="mx-auto max-w-3xl px-6 pb-16">
        <Breadcrumbs
          items={[
            { name: "Blog", href: "/blog" },
            { name: post.title, href: `/blog/${post.slug}` },
          ]}
        />

        <header className="mt-4">
          <span className="text-sm font-medium uppercase tracking-wider text-accent-gold">
            {post.category}
          </span>
          <h1 className="mt-2 font-heading text-3xl md:text-4xl font-bold text-text-primary">
            {post.title}
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-text-muted">
            <span>Equipo Eliana Zaia</span>
            <span>&middot;</span>
            <time>{post.date}</time>
          </div>
        </header>

        <div className="prose prose-lg mt-8 max-w-none">
          <MDXRemote source={post.content} />
        </div>

        <div className="mt-16 rounded-xl bg-white p-8 text-center shadow-sm">
          <p className="font-heading text-xl font-semibold text-text-primary">
            ¿Le interesa nuestro portafolio?
          </p>
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/productos" className="rounded-full bg-accent-gold px-6 py-2.5 font-semibold text-bg-dark transition-colors hover:bg-accent-caramel">
              Ver productos
            </Link>
            <Link href="/para-empresas" className="text-accent-gold hover:text-accent-caramel transition-colors">
              Para empresas &rarr;
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
