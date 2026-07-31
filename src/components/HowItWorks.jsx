import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Enter Your Details",
    description:
      "Provide your body information, fitness details, and goals to create your personalized fitness profile.",
    icon: "👤",
  },
  {
    number: "02",
    title: "AI Analyzes Your Profile",
    description:
      "Formiq AI intelligently analyzes your body composition and predicts your body fat percentage.",
    icon: "🧠",
  },
  {
    number: "03",
    title: "Get Your Fitness Plan",
    description:
      "Receive AI-generated workout recommendations tailored to your goals and fitness level.",
    icon: "🏋️",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-24 bg-zinc-950 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(234,179,8,0.08),transparent_60%)]"></div>

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
            HOW IT WORKS
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white">
            How Formiq AI Works
          </h2>

          <p className="mt-5 text-lg text-gray-400 max-w-2xl mx-auto">
            Start your AI-powered fitness journey in just three simple steps.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="relative bg-zinc-900 border border-yellow-500/20 rounded-3xl p-8 transition-all duration-300 hover:border-yellow-400 hover:shadow-2xl hover:shadow-yellow-500/10"
            >
              {/* Step Number */}
              <div className="absolute top-5 right-6 text-5xl font-black text-yellow-500/10 select-none">
                {step.number}
              </div>

              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-yellow-500/15 border border-yellow-500/20 flex items-center justify-center text-4xl">
                {step.icon}
              </div>

              {/* Number */}
              <div className="mt-6 text-yellow-400 font-bold tracking-widest">
                STEP {step.number}
              </div>

              {/* Title */}
              <h3 className="mt-3 text-2xl font-bold text-white">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-gray-400 leading-7">
                {step.description}
              </p>

              {/* Bottom Accent */}
              <div className="mt-8 h-1 w-14 bg-yellow-500 rounded-full transition-all duration-300 hover:w-24"></div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}