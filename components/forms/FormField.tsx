// components/forms/FormField.tsx
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
  const baseClasses =
    "w-full rounded-lg border bg-white px-4 py-3 text-text-primary outline-none transition-colors focus:border-accent-gold focus:ring-1 focus:ring-accent-gold";
  const errorClasses = error ? "border-red-400" : "border-gray-200";

  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-text-primary">
        {label}
        {required && <span className="text-red-400 ml-1">*</span>}
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
          className={`${baseClasses} ${errorClasses} resize-none`}
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
          className={`${baseClasses} ${errorClasses}`}
        />
      )}
      {error && <p className="mt-1 text-sm text-red-400">{error}</p>}
    </div>
  );
}
