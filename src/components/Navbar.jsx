import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-[#D4AF37]/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 hover:scale-105 transition">
          <img
            src="/formiq.png"
            alt="Formiq AI"
            className="h-12 w-12"
          />

          <span className="text-2xl font-extrabold tracking-wide text-[#D4AF37]">
            Formiq AI
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-white hover:text-[#D4AF37] transition">
            Features
          </a>

          <a href="#how-it-works" className="text-white hover:text-[#D4AF37] transition">
            How It Works
          </a>

          <a href="#contact" className="text-white hover:text-[#D4AF37] transition">
            Contact
          </a>

          <a
            href="https://sweet-mobile-pal.lovable.app"
            className="px-6 py-3 rounded-xl bg-[#D4AF37] text-black font-semibold hover:bg-[#F5D76E] transition"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-[#D4AF37]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#111111] border-t border-[#D4AF37]/20">
          <div className="flex flex-col p-6 gap-5">
            <a href="#features" onClick={() => setMenuOpen(false)} className="text-white hover:text-[#D4AF37]">
              Features
            </a>

            <a href="#how-it-works" onClick={() => setMenuOpen(false)} className="text-white hover:text-[#D4AF37]">
              How It Works
            </a>

            <a href="#contact" onClick={() => setMenuOpen(false)} className="text-white hover:text-[#D4AF37]">
              Contact
            </a>

            <a
              href="https://sweet-mobile-pal.lovable.app"
              className="bg-[#D4AF37] text-black py-3 rounded-xl text-center font-semibold hover:bg-[#F5D76E]"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}