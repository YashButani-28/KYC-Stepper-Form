export default function Input({
  label,
  placeholder,
  type = "text",
  value,
  ...props
}) {
  return (
    <>
      <label className="block text-gray-700 text-sm font-bold" htmlFor={label}>
        {label}
      </label>
      <input
        type={type}
        name={label}
        value={value}
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 "
        style={{ "margin-top": "8px" }}
        placeholder={placeholder}
        {...props}
      />
    </>
  );
}
