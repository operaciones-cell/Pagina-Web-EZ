// components/forms/EmpleoForm.tsx
"use client";

import FormField from "./FormField";
import FormSelect from "./FormSelect";
import { useContactForm } from "./useContactForm";
import { CONTACT } from "@/lib/constants";

const areaOptions = [
  { value: "produccion", label: "Produccion" },
  { value: "ventas", label: "Ventas" },
  { value: "administracion", label: "Administracion" },
  { value: "logistica", label: "Logistica" },
  { value: "otro", label: "Otro" },
];

export default function EmpleoForm() {
  const { fields, errors, status, setValue, submit } = useContactForm({
    type: "empleo",
    requiredFields: ["nombre", "email", "telefono", "area"],
  });

  if (status === "success") {
    return (
      <div className="rounded-xl bg-green-50 border border-green-200 p-8 text-center">
        <p className="text-lg font-semibold text-green-800">Aplicacion enviada</p>
        <p className="mt-2 text-green-700">Gracias por tu interes. Te contactaremos si hay una posicion disponible.</p>
      </div>
    );
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); submit(); }} className="space-y-5">
      <FormField label="Nombre completo" name="nombre" required value={fields.nombre || ""} onChange={(v) => setValue("nombre", v)} error={errors.nombre} />
      <div className="grid gap-5 md:grid-cols-2">
        <FormField label="Email" name="email" type="email" required value={fields.email || ""} onChange={(v) => setValue("email", v)} error={errors.email} />
        <FormField label="Telefono" name="telefono" type="tel" required value={fields.telefono || ""} onChange={(v) => setValue("telefono", v)} error={errors.telefono} />
      </div>
      <FormSelect label="Area de interes" name="area" required value={fields.area || ""} onChange={(v) => setValue("area", v)} options={areaOptions} error={errors.area} />
      <FormField label="Experiencia breve" name="experiencia" value={fields.experiencia || ""} onChange={(v) => setValue("experiencia", v)} rows={3} maxLength={500} placeholder="Cuentanos brevemente sobre tu experiencia..." />
      <FormField label="Mensaje adicional" name="mensaje" value={fields.mensaje || ""} onChange={(v) => setValue("mensaje", v)} rows={3} maxLength={1000} />

      {status === "error" && (
        <p className="text-sm text-red-500">Error al enviar. <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="underline">Contactanos por WhatsApp</a>.</p>
      )}

      <button type="submit" disabled={status === "loading"} className="w-full rounded-lg bg-accent-gold px-6 py-3 font-semibold text-bg-dark transition-colors hover:bg-accent-caramel disabled:opacity-60">
        {status === "loading" ? "Enviando..." : "Enviar aplicacion"}
      </button>
    </form>
  );
}
