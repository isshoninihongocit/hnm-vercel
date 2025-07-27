import { Link } from "@remix-run/react";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, login, logout } = useAuth();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black text-white px-6 py-4 flex items-center justify-between font-hnm">
      <Link
        to="/"
        className="flex flex-col items-start group cursor-pointer select-none"
      >
        <img
          src="/hnmmainwhite.png"
          alt="Hikari no Matsuri Logo"
          className="w-12 h-12 object-contain transition-transform group-hover:scale-150"
        />
      </Link>
      <div className="flex gap-10 items-center text-2xl font-hnm uppercase">
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 bg-red-500 inline-block rounded-sm"></span>
          <Link to="/events" className="hover:text-red-500 transition">
            EVENTS
          </Link>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 bg-red-500 inline-block rounded-sm"></span>
          <Link to="/workshop" className="hover:text-red-500 transition">
            WORKSHOPS
          </Link>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 bg-red-500 inline-block rounded-sm"></span>
          <Link to="/fun" className="hover:text-red-500 transition">
              FUN EVENTS
          </Link>
        </div>
        <Link to="/registration" className="hover:text-red-500 transition">
          Register
        </Link>
        <Link to="/about" className="hover:text-red-500 transition">
          ABOUT
        </Link>
        <Link to="/delegates" className="hover:text-red-500 transition">
          JAPANESE DELEGATES
        </Link>
        <Link to="/sponsors" className="hover:text-red-500 transition">
          Sponsors
        </Link>
      </div>
      {user ? (
        <button
          onClick={logout}
          className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-full text-sm uppercase font-mono"
        >
          Logout ({user.name})
        </button>
      ) : (
        <button
          onClick={login}
          className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-full text-xl uppercase font-hnm"
        >
          Login
        </button>
      )}
    </nav>
  );
}
