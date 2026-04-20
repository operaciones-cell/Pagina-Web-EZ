// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-bg-dark px-6">
      <div className="text-center">
        <p className="font-heading text-8xl font-bold text-accent-gold">404</p>
        <h1 className="mt-4 font-heading text-2xl font-bold text-text-light">
          Pagina no encontrada
        </h1>
        <p className="mt-2 text-text-muted">
          La pagina que buscas no existe o ha sido movida.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="rounded-full bg-accent-gold px-8 py-3 font-semibold text-bg-dark transition-colors hover:bg-accent-caramel"
          >
            Volver al inicio
          </Link>
          <Link
            href="/productos"
            className="text-accent-gold hover:text-accent-caramel transition-colors"
          >
            Ver nuestros productos &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
