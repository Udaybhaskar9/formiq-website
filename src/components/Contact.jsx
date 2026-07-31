import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-black relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(234,179,8,0.08),transparent_60%)]"></div>

      <div className="relative max-w-6xl mx-auto px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 text-sm font-semibold">
            CONTACT US
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white">
            Let's Talk
          </h2>

          <p className="mt-5 text-lg text-gray-400">
            Questions, feedback, or partnership inquiries? We'd love to hear
            from you.
          </p>
        </motion.div>

        <div className="mt-16 grid lg:grid-cols-2 gap-10">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-zinc-900 border border-yellow-500/20 rounded-3xl p-8"
          >

            <h3 className="text-3xl font-bold text-white">
              Get in Touch
            </h3>

            <p className="mt-5 text-gray-400 leading-7">
              Whether you have questions, suggestions, or business inquiries,
              we're here to help you make the most of your Formiq AI experience.
            </p>

            <div className="mt-10 space-y-6">

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-yellow-500/15 flex items-center justify-center text-xl">
                  📧
                </div>

                <div>
                  <p className="text-gray-500 text-sm">Email</p>

                  <a
                    href="mailto:formiq082@gmail.com"
                    className="text-yellow-400 hover:text-yellow-300 transition"
                  >
                    formiq082@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-yellow-500/15 flex items-center justify-center text-xl">
                  📱
                </div>

                <div>
                  <p className="text-gray-500 text-sm">Phone</p>

                  <a
                    href="tel:+919059343879"
                    className="text-yellow-400 hover:text-yellow-300 transition"
                  >
                    +91 9059343879
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-yellow-500/15 flex items-center justify-center text-xl">
                  🌍
                </div>

                <div>
                  <p className="text-gray-500 text-sm">Location</p>

                  <p className="text-white">
                    Andhra Pradesh, India
                  </p>
                </div>
              </div>

            </div>

          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-zinc-900 border border-yellow-500/20 rounded-3xl p-8"
          >

            <h3 className="text-2xl font-bold text-white mb-6">
              Send a Message
            </h3>

            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-black border border-yellow-500/20 rounded-xl p-4 text-white placeholder-gray-500 focus:border-yellow-400 focus:outline-none mb-5"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-black border border-yellow-500/20 rounded-xl p-4 text-white placeholder-gray-500 focus:border-yellow-400 focus:outline-none mb-5"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full bg-black border border-yellow-500/20 rounded-xl p-4 text-white placeholder-gray-500 focus:border-yellow-400 focus:outline-none mb-6 resize-none"
            />

            <button
              className="w-full bg-yellow-500 text-black font-semibold py-4 rounded-xl hover:bg-yellow-400 hover:shadow-lg hover:shadow-yellow-500/20 transition-all duration-300"
            >
              Send Message
            </button>

            <p className="text-gray-500 text-sm text-center mt-4">
              EmailJS integration coming next.
            </p>

          </motion.div>

        </div>

      </div>
    </section>
  );
}