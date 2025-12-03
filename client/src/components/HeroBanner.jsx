import { motion } from "framer-motion";
import NotificationButton from "./NotificationButton";

const HeroBanner = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 pt-8 pb-12 flex flex-col md:flex-row items-center gap-8">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="flex-1"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
          Welcome to{" "}
          <span className="text-primary">BabyBliss</span> – Everything for Your
          Little One
        </h1>
        <p className="mt-4 text-gray-600 max-w-md">
          Discover curated baby essentials – diapers, clothing, toys, skincare
          and more. Handpicked with love for tiny humans.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          
          <NotificationButton />
        </div>
        <p className="mt-3 text-xs text-gray-500">
          Demo-only store • No real payments • Built for learning.
        </p>
      </motion.div>

      <motion.div
        className="flex-1 flex justify-center"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-[2.5rem] bg-babyBlue shadow-xl overflow-hidden flex items-center justify-center">
          <span className="text-6xl">🍼</span>
          <motion.div
            className="absolute w-16 h-16 rounded-full bg-babyYellow top-6 left-6 flex items-center justify-center"
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            👶
          </motion.div>
          <motion.div
            className="absolute w-16 h-16 rounded-full bg-babyPink bottom-6 right-6 flex items-center justify-center"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, delay: 0.3 }}
          >
            🧸
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroBanner;
