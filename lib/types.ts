// lib/types.ts
export interface Product {
  id: string;
  name: string;
  weight: string;
  category: "premium" | "clasico" | "gelatinas" | "snack";
  description: string;
  longDescription: string;
  image: string;
  packagingImage?: string;
  video?: string;
  featured: boolean;
  ingredients: string[];
  relatedProducts: string[];
  seo: {
    h1: string;
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
    seoContent: string;
    faq: Array<{ question: string; answer: string }>;
  };
}

export interface Ally {
  name: string;
  logo: string;
}

export interface GrupoEmpresa {
  name: string;
  description: string;
  logo?: string;
}

export type FormType = "contacto" | "b2b" | "maquila" | "distribucion" | "proveedor" | "empleo";

export interface ContactFormData {
  type: FormType;
  nombre: string;
  email: string;
  telefono: string;
  mensaje?: string;
  empresa?: string;
  cargo?: string;
  ciudad?: string;
  volumen?: string;
  tipo_insumo?: string;
  ubicacion?: string;
  area?: string;
  experiencia?: string;
}
