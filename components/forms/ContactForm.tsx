// components/forms/ContactForm.tsx
"use client";

import FormField from "./FormField";
import { useContactForm } from "./useContactForm";
import { CONTACT } from "@/lib/constants";

export default function ContactForm() {
  const { fields, errors, status, setValue, submit } = useContactForm({
    type: "contacto",
    requiredFields: ["nombre", "email", "telefono"],
  });

  if (status === "success") {
    return (
      <div className="rounded-xl bg-green-50 border border-green-200 p-8 text-center">
        <p className="text-lg font-semibold text-green-800">Mensaje enviado</p>
        <p className="mt-2 text-green-700">Nos pondremos en contacto contigo pronto.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submit();
      }}
      className="space-y-5"
    >
      <FormField
        label="Nombre"
        name="nombre"
        required
        value={fields.nombre || ""}
        onChange={(v) => setValue("nombre", v)}
        error={errors.nombre}
      />
      <FormField
        label="Email"
        name="email"
        type="email"
        required
        value={fields.email || ""}
        onChange={(v) => setValue("email", v)}
        error={errors.email}
      />
      <FormField
        label="Telefono"
        name="telefono"
        type="tel"
        required
        value={fields.telefono || ""}
        onChange={(v) => setValue("telefono", v)}
        error={errors.telefono}
      />
      <FormField
        label="Mensaje"
        name="mensaje"
        value={fields.mensaje || ""}
        onChange={(v) => setValue("mensaje", v)}
        rows={4}
        maxLength={1000}
      />

      {status === "error" && (
        <p className="text-sm text-red-500">
          Error al enviar. Intentalo de nuevo o{" "}
          <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="underline">
            contactanos por WhatsApp
          </a>.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-lg bg-accent-gold px-6 py-3 font-semibold text-bg-dark transition-colors hover:bg-accent-caramel disabled:opacity-60"
      >
        {status === "loading" ? "Enviando..." : "Enviar mensaje"}
      </button>
    </form>
  );
}
