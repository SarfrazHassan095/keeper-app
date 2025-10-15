export default function Input({ type, placeholder, value, onchange }) {
  return (
    <input
      className="w-full h-10 text-center px-2 rounded-md bg-sky-200 opacity-50 font-semibold focus:outline-sky-800 focus:outline-2"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onchange(e.target.value)}
    />
  );
}
