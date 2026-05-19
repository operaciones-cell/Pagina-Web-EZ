interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  placeholder?: string;
  rows?: number;
  maxLength?: number;
}

export default function FormField({
  label,
  name,
  type = "text",
  required = false,
  value,
  onChange,
  error,
  placeholder,
  rows,
  maxLength,
}: FormFieldProps) {
  const base =
    "w-full rounded-xl px-4 py-3 text-sm outline-none transition-all";
  const style = {
    backgroundColor: "rgba(251,249,244,0.06)",
    border: error ? "1px solid rgba(199,100,100,0.6)" : "1px solid rgba(199,168,75,0.2)",
    color: "#fbf9f4",
  };

  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-xs uppercase tracking-[0.16em]"
        style={{ color: "rgba(251,249,244,0.5)" }}
      >
        {label}
        {required && <span className="ml-1" style={{ color: "#c7a84b" }}>*</span>}
      </label>
      {rows ? (
        <textarea
          id={name}
          name={name}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={rows}
          maxLength={maxLength}
          className={`${base} resize-none`}
          style={style}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          maxLength={maxLength}
          className={base}
          style={style}
        />
      )}
      {error && (
        <p className="mt-1 text-xs" style={{ color: "rgba(199,100,100,0.9)" }}>
          {error}
        </p>
      )}
    </div>
  );
}
