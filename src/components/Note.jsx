export default function Note() {
  return (
    <div className="py-1 px-2 md:p-3 rounded-lg bg-white shadow-lg">
      <div className="text-md text-slate-800 font-semibold">This is title</div>
      <div className="text-sm font-light text-slate-600">
        Here is some description of this note.
      </div>
    </div>
  );
}
