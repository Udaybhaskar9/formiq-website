import { motion } from "framer-motion";

export default function Hero() {
  const appLink = "YOUR_APP_LINK";

  return (
    <section className="bg-black py-24 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(234,179,8,0.12),transparent_50%)]"></div>

      <div className="relative max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* Badge */}
          <span className="inline-block bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-semibold border border-yellow-500/30">
            🧠 AI-Powered Fitness Platform
          </span>

          {/* Heading */}
          <h1 className="mt-6 text-5xl lg:text-6xl font-bold text-white leading-tight">
            Transform Your
            <br />
            Fitness Journey With
            <span className="text-yellow-400"> AI</span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg text-gray-300 leading-8">
            Formiq AI analyzes your body profile, predicts your body fat
            percentage, and creates personalized workout plans designed
            around your fitness goals.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">

            <a
              href={appLink}
              className="bg-yellow-500 text-black font-semibold px-8 py-3 rounded-xl hover:bg-yellow-400 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/30"
            >
              Get Started
            </a>

            <a
              href="#features"
              className="border border-yellow-500/30 text-yellow-400 px-8 py-3 rounded-xl hover:bg-yellow-500 hover:text-black transition-all duration-300"
            >
              Learn More
            </a>

          </div>

          {/* Highlights */}
          <div className="mt-12 grid grid-cols-2 gap-5">

            {[
              {
                emoji: "📊",
                title: "Body Analysis",
                desc: "Understand your fitness level",
              },
              {
                emoji: "🤖",
                title: "AI Prediction",
                desc: "Predict body fat percentage",
              },
              {
                emoji: "🏋️",
                title: "Workout Plans",
                desc: "Personalized training routines",
              },
              {
                emoji: "⚡",
                title: "Smart Insights",
                desc: "AI fitness recommendations",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-zinc-900 border border-yellow-500/20 rounded-2xl p-5 hover:border-yellow-400 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/10"
              >
                <p className="font-semibold text-white text-lg">
                  {item.emoji} {item.title}
                </p>

                <p className="text-sm text-gray-400 mt-2">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>

        </motion.div>

        {/* Right Dashboard Preview */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <div className="w-full max-w-md bg-zinc-900 border border-yellow-500/20 rounded-3xl shadow-2xl shadow-yellow-500/10 p-7">

            <div className="flex justify-between items-center mb-6">

              <h2 className="text-xl font-bold text-white">
                Formiq AI Dashboard
              </h2>

              <span className="text-yellow-400 font-semibold">
                AI ✨
              </span>

            </div>

            <div className="space-y-5">

              {/* Body Fat Card */}
              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-5">

                <p className="text-gray-300">
                  Predicted Body Fat
                </p>

                <h3 className="text-5xl font-bold text-yellow-400 mt-2">
                  18.5%
                </h3>

              </div>

              {/* Workout */}
              <div className="bg-zinc-800 rounded-2xl p-5 border border-zinc-700">

                <p className="font-semibold text-white">
                  Personalized Workout
                </p>

                <p className="text-sm text-gray-400 mt-2">
                  AI-generated workout plan based on your body profile and
                  fitness goals.
                </p>

              </div>

              {/* Goal */}
              <div className="bg-zinc-800 rounded-2xl p-5 border border-zinc-700">

                <p className="font-semibold text-white">
                  Fitness Goal
                </p>

                <p className="text-sm text-gray-400 mt-2">
                  Fat Loss • Muscle Gain • Fitness Improvement
                </p>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}