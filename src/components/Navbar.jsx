import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const appLink = "https://sweet-mobile-pal.lovable.app";

  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-xl border-b border-yellow-500/20 shadow-lg">

      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#"
          className="text-2xl font-extrabold tracking-wide text-white transition duration-300"
        >
          Formiq <span className="text-yellow-400">AI</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 font-medium">

          <li>
            <a
              href="#features"
              className="text-gray-300 hover:text-yellow-400 transition duration-300"
            >
              Features
            </a>
          </li>

          <li>
            <a
              href="#how-it-works"
              className="text-gray-300 hover:text-yellow-400 transition duration-300"
            >
              How It Works
            </a>
          </li>

          <li>
            <a
              href="#dashboard"
              className="text-gray-300 hover:text-yellow-400 transition duration-300"
            >
              Dashboard
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="text-gray-300 hover:text-yellow-400 transition duration-300"
            >
              Contact
            </a>
          </li>

        </ul>

        {/* Get Started Button */}
        <a
          href={appLink}
          className="hidden md:block bg-yellow-500 text-black font-semibold px-6 py-2.5 rounded-xl hover:bg-yellow-400 hover:shadow-lg hover:shadow-yellow-500/30 transition-all duration-300"
        >
          Get Started
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-yellow-400"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-zinc-950 border-t border-yellow-500/20">

          <div className="flex flex-col px-8 py-6 space-y-5">

            <a
              href="#features"
              className="text-gray-300 hover:text-yellow-400 transition"
            >
              Features
            </a>

            <a
              href="#how-it-works"
              className="text-gray-300 hover:text-yellow-400 transition"
            >
              How It Works
            </a>

            <a
              href="#dashboard"
              className="text-gray-300 hover:text-yellow-400 transition"
            >
              Dashboard
            </a>

            <a
              href="#contact"
              className="text-gray-300 hover:text-yellow-400 transition"
            >
              Contact
            </a>

            <a
              href={appLink}
              className="inline-block bg-yellow-500 text-black text-center font-semibold px-6 py-3 rounded-xl hover:bg-yellow-400 transition-all duration-300"
            >
              Get Started
            </a>

          </div>

        </div>
      )}

    </nav>
  );
}