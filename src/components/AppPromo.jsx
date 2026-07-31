import { motion } from "framer-motion";

export default function AppPromo() {
  const appLink = "YOUR_APP_LINK";

  return (
    <section className="py-24 bg-black relative overflow-hidden">

      {/* Gold Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.10),transparent_65%)]"></div>

      <div className="relative max-w-7xl mx-auto px-8">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            <span className="inline-block bg-yellow-500/20 border border-yellow-500/30 text-yellow-400 px-4 py-2 rounded-full text-sm font-semibold">
              🚀 Start Your Fitness Journey
            </span>

            <h2 className="mt-6 text-5xl lg:text-6xl font-bold text-white leading-tight">
              Your AI
              <span className="text-yellow-400"> Fitness Coach </span>
              Starts Here
            </h2>

            <p className="mt-6 text-lg text-gray-400 leading-8">
              Formiq AI analyzes your body, predicts body fat percentage,
              and creates intelligent workout plans tailored to your
              personal goals.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href={appLink}
                className="bg-yellow-500 text-black px-8 py-4 rounded-xl font-semibold hover:bg-yellow-400 hover:shadow-xl hover:shadow-yellow-500/30 transition-all duration-300"
              >
                Get Started Free
              </a>

              <a
                href="#features"
                className="border border-yellow-500/30 text-yellow-400 px-8 py-4 rounded-xl hover:bg-yellow-500 hover:text-black transition-all duration-300"
              >
                Explore Features
              </a>

            </div>

          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-zinc-900 border border-yellow-500/20 rounded-3xl p-8 shadow-2xl shadow-yellow-500/10"
          >

            <h3 className="text-3xl font-bold text-white">
              Why Choose
              <span className="text-yellow-400"> Formiq AI?</span>
            </h3>

            <div className="mt-8 space-y-5">

              {[
                "🧠 AI Body Fat Prediction",
                "🏋️ Personalized Workout Plans",
                "📊 Smart Fitness Analysis",
                "🎯 Goal-Based Recommendations",
                "⚡ Instant AI Insights",
                "📈 Track Your Progress",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 bg-black border border-yellow-500/20 rounded-2xl p-4 hover:border-yellow-400 hover:translate-x-2 transition-all duration-300"
                >
                  <span className="text-white font-medium">
                    {item}
                  </span>
                </div>
              ))}

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}