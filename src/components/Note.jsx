export default function Note({ title, content }) {
  return (
    <div className="py-1 px-2 md:p-3 rounded-lg bg-white shadow-lg w-60 float-left ">
      <div className="text-md text-slate-800 font-semibold">{title}</div>
      <div className="text-sm font-light text-slate-600">{content}</div>
    </div>
  );
}
