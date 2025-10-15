export default function Button({ type, value }) {
  return (
    <button
      type={type}
      className="w-full h-10 rounded-md bg-sky-200 text-center text-black cursor-pointer active:bg-sky-600 active:text-white "
    >
      {value}
    </button>
  );
}
