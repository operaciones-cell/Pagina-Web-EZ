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
      <div
        className="rounded-2xl p-8 text-center"
        style={{ backgroundColor: "rgba(199,168,75,0.1)", border: "1px solid rgba(199,168,75,0.25)" }}
      >
        <p className="text-lg" style={{ fontFamily: "'Noto Serif', serif", color: "#c7a84b" }}>
          Mensaje enviado
        </p>
        <p className="mt-2 text-sm" style={{ color: "rgba(251,249,244,0.6)" }}>
          Te respondemos en menos de 24 horas.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); submit(); }}
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
        label="Teléfono"
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
        <p className="text-sm" style={{ color: "#c7a84b" }}>
          Error al enviar. Intentalo de nuevo o{" "}
          <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer"
            className="underline">contactanos por WhatsApp</a>.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-full py-4 text-sm font-semibold transition-all hover:scale-[1.02] disabled:opacity-60"
        style={{ backgroundColor: "#c7a84b", color: "#00101f", boxShadow: "0 6px 24px rgba(199,168,75,0.25)" }}
      >
        {status === "loading" ? "Enviando..." : "Enviar mensaje"}
      </button>
    </form>
  );
}
