export default function Footer() {
  return (
    <footer className="bg-black border-t border-yellow-500/20">

      <div className="max-w-7xl mx-auto px-8 py-16">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>

            <h2 className="text-3xl font-bold text-yellow-400">
              Formiq AI
            </h2>

            <p className="mt-5 text-gray-400 leading-7">
              AI-powered fitness analysis, intelligent body fat prediction,
              and personalized workout plans to help you achieve your goals
              faster.
            </p>

            <div className="flex gap-4 mt-8">

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-zinc-900 border border-yellow-500/20 flex items-center justify-center hover:bg-yellow-500 hover:text-black transition"
              >
                🌐
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-zinc-900 border border-yellow-500/20 flex items-center justify-center hover:bg-yellow-500 hover:text-black transition"
              >
                📷
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-zinc-900 border border-yellow-500/20 flex items-center justify-center hover:bg-yellow-500 hover:text-black transition"
              >
                💼
              </a>

            </div>

          </div>

          {/* Product */}
          <div>

            <h3 className="text-white text-xl font-semibold">
              Product
            </h3>

            <ul className="mt-6 space-y-3 text-gray-400">

              <li>
                <a href="#features" className="hover:text-yellow-400 transition">
                  AI Body Prediction
                </a>
              </li>

              <li>
                <a href="#dashboard" className="hover:text-yellow-400 transition">
                  Workout Plans
                </a>
              </li>

              <li>
                <a href="#dashboard" className="hover:text-yellow-400 transition">
                  Fitness Analysis
                </a>
              </li>

              <li>
                <a href="#dashboard" className="hover:text-yellow-400 transition">
                  Dashboard
                </a>
              </li>

            </ul>

          </div>

          {/* Company */}
          <div>

            <h3 className="text-white text-xl font-semibold">
              Company
            </h3>

            <ul className="mt-6 space-y-3 text-gray-400">

              <li>
                <a href="#" className="hover:text-yellow-400 transition">
                  About Us
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-yellow-400 transition">
                  Contact
                </a>
              </li>

              <li>
                <a href="#faq" className="hover:text-yellow-400 transition">
                  FAQ
                </a>
              </li>

              <li>
                <a href="mailto:formiq082@gmail.com" className="hover:text-yellow-400 transition">
                  Support
                </a>
              </li>

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-white text-xl font-semibold">
              Contact
            </h3>

            <div className="mt-6 space-y-4 text-gray-400">

              <p>
                📧{" "}
                <a
                  href="mailto:formiq082@gmail.com"
                  className="hover:text-yellow-400 transition"
                >
                  formiq082@gmail.com
                </a>
              </p>

              <p>
                📱{" "}
                <a
                  href="tel:+919059343879"
                  className="hover:text-yellow-400 transition"
                >
                  +91 9059343879
                </a>
              </p>

              <p>📍 Andhra Pradesh, India</p>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-14 pt-8 border-t border-yellow-500/20 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500 text-center">
            © 2026 <span className="text-yellow-400">Formiq AI</span>. All rights reserved.
          </p>

          <p className="text-gray-500 text-center">
            Built with <span className="text-red-500">❤️</span> for smarter fitness.
          </p>

        </div>

      </div>

    </footer>
  );
}