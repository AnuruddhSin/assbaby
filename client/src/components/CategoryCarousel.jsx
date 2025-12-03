import { motion } from "framer-motion";

const CategoryCarousel = ({ categories }) => {
  return (
    <section className="max-w-6xl mx-auto px-4 mt-8">
      <h2 className="text-lg font-semibold mb-3">Shop by Category</h2>
      <div className="flex gap-3 overflow-x-auto pb-2">
        {categories.map((cat, idx) => (
          <motion.div
            key={cat._id || cat.slug}
            className="flex-shrink-0 px-3 py-2 rounded-full bg-white border text-xs whitespace-nowrap"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
          >
            {cat.name}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CategoryCarousel;
