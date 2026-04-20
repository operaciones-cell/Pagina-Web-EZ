// components/forms/FormSelect.tsx
interface FormSelectProps {
  label: string;
  name: string;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  error?: string;
}

export default function FormSelect({
  label,
  name,
  required = false,
  value,
  onChange,
  options,
  error,
}: FormSelectProps) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-text-primary">
        {label}
        {required && <span className="text-red-400 ml-1">*</span>}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full rounded-lg border bg-white px-4 py-3 text-text-primary outline-none transition-colors focus:border-accent-gold focus:ring-1 focus:ring-accent-gold ${
          error ? "border-red-400" : "border-gray-200"
        }`}
      >
        <option value="">Seleccione...</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <p className="mt-1 text-sm text-red-400">{error}</p>}
    </div>
  );
}
