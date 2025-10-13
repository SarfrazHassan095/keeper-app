export default function Footer() {
  return (
    <footer className="h-10 w-full bg-slate-300 flex justify-center items-center">
      copyright © {new Date().getFullYear()}
    </footer>
  );
}
