import { motion } from "framer-motion";

export default function AppScreens() {
  const screens = [
    {
      title: "Create Your Profile",
      description:
        "Enter your body details, fitness level, and goals to unlock a personalized AI fitness experience.",
      icon: "👤",
    },
    {
      title: "AI Body Analysis",
      description:
        "Receive intelligent body fat prediction and detailed fitness insights powered by AI.",
      icon: "🧠",
    },
    {
      title: "Personalized Plans",
      description:
        "Access AI-generated workout plans designed specifically for your fitness goals.",
      icon: "🏋️",
    },
  ];

  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(234,179,8,0.08),transparent_60%)]"></div>

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
            APP PREVIEW
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white">
            Explore Formiq AI
          </h2>

          <p className="mt-5 text-lg text-gray-400 max-w-3xl mx-auto">
            Experience a smarter way to understand your body, monitor your
            progress, and achieve your fitness goals with AI.
          </p>

        </motion.div>

        {/* Cards */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">

          {screens.map((screen, index) => (
            <motion.div
              key={screen.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="group bg-zinc-900 border border-yellow-500/20 rounded-3xl p-6 hover:border-yellow-400 hover:shadow-2xl hover:shadow-yellow-500/10 transition-all duration-300"
            >

              {/* Phone Mockup */}
              <div className="h-96 rounded-3xl bg-black border border-yellow-500/20 flex flex-col items-center justify-center group-hover:border-yellow-400 transition">

                <div className="w-20 h-20 rounded-full bg-yellow-500/15 border border-yellow-500/30 flex items-center justify-center text-5xl">
                  {screen.icon}
                </div>

                <p className="mt-6 text-yellow-400 font-semibold">
                  Formiq AI
                </p>

                <div className="mt-4 w-24 h-1 bg-yellow-500 rounded-full"></div>

              </div>

              {/* Content */}
              <h3 className="mt-7 text-2xl font-bold text-white group-hover:text-yellow-400 transition">
                {screen.title}
              </h3>

              <p className="mt-4 text-gray-400 leading-7">
                {screen.description}
              </p>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}