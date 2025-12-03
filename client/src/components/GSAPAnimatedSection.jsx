import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const GSAPAnimatedSection = () => {
  const iconsRef = useRef([]);

  useEffect(() => {
    if (!iconsRef.current) return;
    gsap.fromTo(
      iconsRef.current,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out"
      }
    );
  }, []);

  const setRef = (el, index) => {
    iconsRef.current[index] = el;
  };

  return (
    <section className="max-w-6xl mx-auto px-4 mt-10">
      <h2 className="text-lg font-semibold mb-3">Why Parents Love BabyBliss</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 text-center text-2xl">
        {["🍼", "🧴", "🧸", "👶", "💤", "🩺"].map((icon, idx) => (
          <div
            key={icon}
            ref={(el) => setRef(el, idx)}
            className="bg-white rounded-2xl shadow-sm py-4"
          >
            {icon}
          </div>
        ))}
      </div>
    </section>
  );
};

export default GSAPAnimatedSection;
