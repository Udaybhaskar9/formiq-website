import { motion } from "framer-motion";

export default function DashboardPreview() {
  return (
    <section
      id="dashboard"
      className="py-24 bg-black relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.08),transparent_65%)]"></div>

      <div className="relative max-w-7xl mx-auto px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 text-sm font-semibold">
            AI DASHBOARD
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white">
            Your AI Fitness Dashboard
          </h2>

          <p className="mt-5 text-lg text-gray-400 max-w-3xl mx-auto">
            Track your body analysis, AI predictions, workout plans, and
            progress in one powerful dashboard.
          </p>
        </motion.div>

        {/* Dashboard */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-zinc-900 border border-yellow-500/20 rounded-3xl p-8 shadow-2xl shadow-yellow-500/10"
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">

            <div>
              <h3 className="text-3xl font-bold text-white">
                Formiq AI Dashboard
              </h3>

              <p className="text-gray-400 mt-2">
                Personalized AI-powered fitness overview
              </p>
            </div>

            <span className="inline-flex items-center bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 px-5 py-2 rounded-full font-semibold">
              ● AI Active
            </span>

          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6 mt-10">

            <motion.div
              whileHover={{ y: -6 }}
              className="bg-zinc-800 border border-yellow-500/20 rounded-2xl p-6 hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-500/10 transition-all"
            >
              <p className="text-gray-400">
                Body Fat Prediction
              </p>

              <h4 className="text-5xl font-bold text-yellow-400 mt-3">
                18.5%
              </h4>

              <p className="text-sm text-gray-500 mt-3">
                AI Estimated
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -6 }}
              className="bg-zinc-800 border border-yellow-500/20 rounded-2xl p-6 hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-500/10 transition-all"
            >
              <p className="text-gray-400">
                Fitness Goal
              </p>

              <h4 className="text-3xl font-bold text-white mt-3">
                Fat Loss
              </h4>

              <p className="text-sm text-gray-500 mt-3">
                Personalized Goal
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -6 }}
              className="bg-zinc-800 border border-yellow-500/20 rounded-2xl p-6 hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-500/10 transition-all"
            >
              <p className="text-gray-400">
                Plan Status
              </p>

              <h4 className="text-3xl font-bold text-green-400 mt-3">
                Ready ✓
              </h4>

              <p className="text-sm text-gray-500 mt-3">
                Updated Today
              </p>
            </motion.div>

          </div>

          {/* Workout Plan */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-10 bg-zinc-800 border border-yellow-500/20 rounded-3xl p-8"
          >

            <div className="flex justify-between items-center mb-6">

              <h4 className="text-2xl font-bold text-white">
                Today's Workout 🏋️
              </h4>

              <span className="text-yellow-400 font-medium">
                AI Generated
              </span>

            </div>

            <div className="grid md:grid-cols-3 gap-5">

              <div className="bg-black border border-yellow-500/20 rounded-2xl p-5 hover:border-yellow-400 transition">
                <p className="font-semibold text-white">
                  💪 Strength
                </p>

                <p className="text-gray-400 mt-2">
                  Chest + Shoulders
                </p>
              </div>

              <div className="bg-black border border-yellow-500/20 rounded-2xl p-5 hover:border-yellow-400 transition">
                <p className="font-semibold text-white">
                  🏃 Cardio
                </p>

                <p className="text-gray-400 mt-2">
                  20 Minutes
                </p>
              </div>

              <div className="bg-black border border-yellow-500/20 rounded-2xl p-5 hover:border-yellow-400 transition">
                <p className="font-semibold text-white">
                  🧘 Recovery
                </p>

                <p className="text-gray-400 mt-2">
                  Stretching
                </p>
              </div>

            </div>

          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}