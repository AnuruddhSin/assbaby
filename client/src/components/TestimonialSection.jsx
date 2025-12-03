import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Aarav’s Mom",
    text: "BabyBliss makes it so easy to find safe products for my little one!"
  },
  {
    name: "Mia’s Dad",
    text: "Love the clean design and curated baby essentials. Feels trustworthy."
  }
];

const TestimonialSection = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 mt-10">
      <h2 className="text-lg font-semibold mb-4">What Parents Say</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {testimonials.map((t, idx) => (
          <motion.div
            key={t.name}
            className="bg-white rounded-2xl p-4 shadow-sm"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <p className="text-sm text-gray-600">“{t.text}”</p>
            <p className="mt-2 text-xs font-semibold text-primary">{t.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
