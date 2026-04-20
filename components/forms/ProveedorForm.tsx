// components/forms/ProveedorForm.tsx
"use client";

import FormField from "./FormField";
import { useContactForm } from "./useContactForm";
import { CONTACT } from "@/lib/constants";

export default function ProveedorForm() {
  const { fields, errors, status, setValue, submit } = useContactForm({
    type: "proveedor",
    requiredFields: ["nombre", "empresa", "email", "telefono", "tipo_insumo", "ubicacion"],
  });

  if (status === "success") {
    return (
      <div className="rounded-xl bg-green-50 border border-green-200 p-8 text-center">
        <p className="text-lg font-semibold text-green-800">Solicitud enviada</p>
        <p className="mt-2 text-green-700">Revisaremos tu informacion y te contactaremos.</p>
      </div>
    );
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); submit(); }} className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <FormField label="Empresa" name="empresa" required value={fields.empresa || ""} onChange={(v) => setValue("empresa", v)} error={errors.empresa} />
        <FormField label="Nombre de contacto" name="nombre" required value={fields.nombre || ""} onChange={(v) => setValue("nombre", v)} error={errors.nombre} />
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <FormField label="Email" name="email" type="email" required value={fields.email || ""} onChange={(v) => setValue("email", v)} error={errors.email} />
        <FormField label="Telefono" name="telefono" type="tel" required value={fields.telefono || ""} onChange={(v) => setValue("telefono", v)} error={errors.telefono} />
      </div>
      <FormField label="Tipo de insumo" name="tipo_insumo" required value={fields.tipo_insumo || ""} onChange={(v) => setValue("tipo_insumo", v)} error={errors.tipo_insumo} placeholder="Ej: Lacteos, empaques, chocolate..." />
      <FormField label="Ubicacion" name="ubicacion" required value={fields.ubicacion || ""} onChange={(v) => setValue("ubicacion", v)} error={errors.ubicacion} />
      <FormField label="Mensaje" name="mensaje" value={fields.mensaje || ""} onChange={(v) => setValue("mensaje", v)} rows={4} maxLength={1000} />

      {status === "error" && (
        <p className="text-sm text-red-500">Error al enviar. <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="underline">Contactanos por WhatsApp</a>.</p>
      )}

      <button type="submit" disabled={status === "loading"} className="w-full rounded-lg bg-accent-gold px-6 py-3 font-semibold text-bg-dark transition-colors hover:bg-accent-caramel disabled:opacity-60">
        {status === "loading" ? "Enviando..." : "Enviar solicitud"}
      </button>
    </form>
  );
}
