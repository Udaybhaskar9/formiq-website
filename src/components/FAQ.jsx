import { motion } from "framer-motion";
import { useState } from "react";

const questions = [
  {
    question: "What is Formiq AI?",
    answer:
      "Formiq AI is an AI-powered fitness platform that analyzes your body profile, predicts body fat percentage, and creates personalized workout recommendations.",
  },
  {
    question: "How does the body fat prediction work?",
    answer:
      "Our AI model analyzes your body measurements and profile to estimate body fat percentage and provide intelligent fitness insights.",
  },
  {
    question: "Does Formiq AI create workout plans?",
    answer:
      "Yes. Formiq AI generates personalized workout plans based on your fitness goals, body composition, and experience level.",
  },
  {
    question: "What information do I need to provide?",
    answer:
      "You'll enter your body measurements, fitness level, and personal goals so the AI can generate accurate recommendations.",
  },
  {
    question: "Who can use Formiq AI?",
    answer:
      "Anyone—from beginners to experienced fitness enthusiasts—can use Formiq AI to better understand their body and receive personalized guidance.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="py-24 bg-black relative overflow-hidden">

      {/* Gold Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(234,179,8,0.08),transparent_60%)]"></div>

      <div className="relative max-w-4xl mx-auto px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <span className="inline-block px-4 py-2 rounded-full bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 text-sm font-semibold">
            FAQ
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white">
            Frequently Asked Questions
          </h2>

          <p className="mt-5 text-lg text-gray-400">
            Everything you need to know about Formiq AI.
          </p>

        </motion.div>

        {/* FAQ Items */}
        <div className="mt-14 space-y-5">

          {questions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="bg-zinc-900 border border-yellow-500/20 rounded-2xl overflow-hidden hover:border-yellow-400 transition-all duration-300"
            >

              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="w-full flex justify-between items-center p-6 text-left"
              >

                <h3 className="text-lg md:text-xl font-semibold text-white">
                  {item.question}
                </h3>

                <div className="w-10 h-10 rounded-full bg-yellow-500/20 text-yellow-400 flex items-center justify-center text-2xl font-bold">
                  {open === index ? "−" : "+"}
                </div>

              </button>

              {open === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-6 pb-6">
                    <div className="border-t border-yellow-500/20 pt-5">
                      <p className="text-gray-400 leading-7">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}