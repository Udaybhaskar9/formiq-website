import { motion } from "framer-motion";
import { Brain, Dumbbell, BarChart3, Target } from "lucide-react";

const features = [
  {
    title: "AI Body Fat Prediction",
    description:
      "Analyze your body details and receive an AI-powered body fat percentage prediction with intelligent accuracy.",
     icon:<Brain size={42} className="text-yellow-400" />
  },
  {
    title: "Personalized Workout Plans",
    description:
      "Generate workout routines tailored to your body profile, fitness level, and personal goals.",
    icon: <Dumbbell size={42} className="text-yellow-400" />
  },
  {
    title: "Fitness Profile Analysis",
    description:
      "Gain valuable insights into your body composition and overall fitness performance.",
    icon: <BarChart3 size={42} className="text-yellow-400" />
  },
  {
    title: "Goal-Based Recommendations",
    description:
      "Whether your goal is fat loss, muscle gain, or endurance, Formiq AI adapts to you.",
     icon: <Target size={42} className="text-yellow-400" />
  },
];

export default function Features() {
  return (
    <section
      id="features"
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
            AI FEATURES
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white">
            Powerful AI Fitness Features
          </h2>

          <p className="mt-5 text-gray-400 max-w-3xl mx-auto text-lg">
            Everything you need to analyze your body, understand your fitness,
            and achieve your goals using intelligent AI technology.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
              }}
              className="group bg-zinc-900 border border-yellow-500/20 rounded-3xl p-8 transition-all duration-300 hover:border-yellow-400 hover:shadow-2xl hover:shadow-yellow-500/10"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-yellow-500/15 border border-yellow-500/20 flex items-center justify-center text-4xl transition-all duration-300 group-hover:bg-yellow-500/25">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="mt-7 text-2xl font-bold text-white group-hover:text-yellow-400 transition">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-gray-400 leading-7">
                {feature.description}
              </p>

              {/* Bottom Accent */}
              <div className="mt-8 h-1 w-12 rounded-full bg-yellow-500 transition-all duration-300 group-hover:w-24"></div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}