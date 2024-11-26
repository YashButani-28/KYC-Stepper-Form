export default function SelectInput({ label, ...props }) {
  return (
    <div className="w-full max-w-sm mb-6">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={label}
      >
        Choose {label}
      </label>
      <select
        name={label}
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        {...props}
      >
        <option value="Admin">Admin</option>
        <option value="User">User</option>
      </select>
    </div>
  );
}
