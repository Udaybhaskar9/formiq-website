const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    review:
      "Formiq helped our team create customer feedback forms in minutes. It's incredibly easy to use.",
  },
  {
    name: "David Lee",
    role: "Startup Founder",
    review:
      "The AI form generation saved us hours of work. Highly recommended!",
  },
  {
    name: "Emily Brown",
    role: "Marketing Lead",
    review:
      "Clean interface, powerful analytics, and excellent user experience.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Loved by Teams
          </h2>
          <p className="mt-4 text-gray-600">
            See what our users have to say.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="bg-gray-50 rounded-2xl p-8 shadow hover:shadow-lg transition"
            >
              <p className="text-gray-600 italic">"{item.review}"</p>

              <div className="mt-6">
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}