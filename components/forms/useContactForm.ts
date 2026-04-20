// components/forms/useContactForm.ts
"use client";

import { useState } from "react";
import { FormType } from "@/lib/types";

interface UseContactFormOptions {
  type: FormType;
  requiredFields: string[];
}

export function useContactForm({ type, requiredFields }: UseContactFormOptions) {
  const [fields, setFields] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const setValue = (name: string, value: string) => {
    setFields((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    for (const field of requiredFields) {
      if (!fields[field]?.trim()) {
        newErrors[field] = "Este campo es requerido";
      }
    }

    if (fields.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      newErrors.email = "Email no valido";
    }

    if (fields.telefono && !/^\+?[\d\s-]{7,15}$/.test(fields.telefono.replace(/\s/g, ""))) {
      newErrors.telefono = "Telefono no valido";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submit = async () => {
    if (!validate()) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type, ...fields }),
      });

      if (!res.ok) throw new Error("Error");

      setStatus("success");
      setFields({});
    } catch {
      setStatus("error");
    }
  };

  return { fields, errors, status, setValue, submit };
}
