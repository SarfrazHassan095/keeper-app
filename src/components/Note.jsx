export default function Note({ id, title, content }) {
  return (
    <div className="relative py-1 px-2 md:p-3 rounded-lg bg-white shadow-lg w-60 float-left ">
      <button className="absolute right-3 top-3 opacity-50 cursor-pointer">
        ❌
      </button>
      <div className="text-md text-slate-800 font-semibold">{title}</div>
      <div className="text-sm font-light text-slate-600">{content}</div>
    </div>
  );
}
