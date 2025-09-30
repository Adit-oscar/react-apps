import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-emerald-600 max-w-full h-auto py-3">
      <div className="max-w-[1200px] m-auto flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <div className="text-4xl">🎲</div>
          <p className="text-2xl text-white font-semibold">BUMDESMA HS</p>
        </a>
        <nav className="text-white flex gap-4 font-semibold text-lg tracking-widest uppercase">
          <a
            className="transition-all px-3 py-1 duration-700 rounded-sm hover:bg-white hover:text-emerald-700"
            href="#"
          >
            Product
          </a>
          <a
            className="transition-all px-3 py-1 duration-700 rounded-sm hover:bg-white hover:text-emerald-700"
            href="#"
          >
            Service
          </a>
          <a
            className="transition-all px-3 py-1 duration-700 rounded-sm hover:bg-white hover:text-emerald-700"
            href="#"
          >
            Contct Us
          </a>
          <Link
            className="transition-all px-3 py-1 duration-700 rounded-sm hover:bg-white hover:text-emerald-700"
            to="/login"
          >
            Sign Out
          </Link>
        </nav>
      </div>
    </header>
  );
}
