import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";
import ClientProviders from "@/components/ui/ClientProviders";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Eliana Zaia — Reposteria Premium Artesanal",
    template: "%s | Eliana Zaia",
  },
  description:
    "Postres artesanales premium desde 2010. Fusion de tradicion latina e italiana. Proveedor de las principales cadenas de Colombia.",
  metadataBase: new URL("https://eliana-zaia.com"),
  openGraph: {
    type: "website",
    locale: "es_CO",
    siteName: "Eliana Zaia",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-CO">
      <body className="min-h-screen">
        <Navbar />
        <main id="main-content">
          <ClientProviders>{children}</ClientProviders>
        </main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
