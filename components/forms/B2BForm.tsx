// components/forms/B2BForm.tsx
"use client";

import FormField from "./FormField";
import FormSelect from "./FormSelect";
import { useContactForm } from "./useContactForm";
import { CONTACT } from "@/lib/constants";
import { FormType } from "@/lib/types";

const volumeOptions = [
  { value: "menos-500", label: "Menos de 500 uds/mes" },
  { value: "500-2000", label: "500 - 2,000 uds/mes" },
  { value: "2000-5000", label: "2,000 - 5,000 uds/mes" },
  { value: "mas-5000", label: "Mas de 5,000 uds/mes" },
];

export default function B2BForm({ type = "b2b" }: { type?: FormType }) {
  const { fields, errors, status, setValue, submit } = useContactForm({
    type,
    requiredFields: ["nombre", "empresa", "email", "telefono", "ciudad"],
  });

  if (status === "success") {
    return (
      <div className="rounded-xl bg-green-50 border border-green-200 p-8 text-center">
        <p className="text-lg font-semibold text-green-800">Solicitud enviada</p>
        <p className="mt-2 text-green-700">Nuestro equipo comercial se pondra en contacto contigo pronto.</p>
      </div>
    );
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); submit(); }} className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <FormField label="Nombre" name="nombre" required value={fields.nombre || ""} onChange={(v) => setValue("nombre", v)} error={errors.nombre} />
        <FormField label="Empresa" name="empresa" required value={fields.empresa || ""} onChange={(v) => setValue("empresa", v)} error={errors.empresa} />
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <FormField label="Cargo" name="cargo" value={fields.cargo || ""} onChange={(v) => setValue("cargo", v)} />
        <FormField label="Ciudad" name="ciudad" required value={fields.ciudad || ""} onChange={(v) => setValue("ciudad", v)} error={errors.ciudad} />
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <FormField label="Email" name="email" type="email" required value={fields.email || ""} onChange={(v) => setValue("email", v)} error={errors.email} />
        <FormField label="Telefono" name="telefono" type="tel" required value={fields.telefono || ""} onChange={(v) => setValue("telefono", v)} error={errors.telefono} />
      </div>
      <FormSelect label="Volumen estimado" name="volumen" value={fields.volumen || ""} onChange={(v) => setValue("volumen", v)} options={volumeOptions} />
      <FormField label="Mensaje" name="mensaje" value={fields.mensaje || ""} onChange={(v) => setValue("mensaje", v)} rows={4} maxLength={1000} />

      {status === "error" && (
        <p className="text-sm text-red-500">
          Error al enviar.{" "}
          <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="underline">Contactanos por WhatsApp</a>.
        </p>
      )}

      <button type="submit" disabled={status === "loading"} className="w-full rounded-lg bg-accent-gold px-6 py-3 font-semibold text-bg-dark transition-colors hover:bg-accent-caramel disabled:opacity-60">
        {status === "loading" ? "Enviando..." : "Enviar solicitud"}
      </button>
    </form>
  );
}
