import { useEffect, useState } from "react";
import HeroBanner from "../components/HeroBanner";
import CategoryCarousel from "../components/CategoryCarousel";
import ProductCard from "../components/ProductCard";
import TestimonialSection from "../components/TestimonialSection";
import Loader from "../components/Loader";
import { api } from "../utils/apiClient";

const HomePage = () => {
  const [categories, setCategories] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        setLoading(true);
        const [catRes, prodRes] = await Promise.all([
          api.get("/categories"),
          api.get("/products")
        ]);
        setCategories(catRes.data);
        setFeatured(prodRes.data.slice(0, 8));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchHomeData();
  }, []);

  return (
    <>
      <HeroBanner />
      {loading ? (
        <Loader />
      ) : (
        <>
          <CategoryCarousel categories={categories} />
          <section className="max-w-6xl mx-auto px-4 mt-8">
            <h2 className="text-lg font-semibold mb-3">Featured Baby Essentials</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {featured.map((p) => (
                <ProductCard key={p._id} product={p} />
              ))}
            </div>
          </section>
        </>
      )}
      <TestimonialSection />
    </>
  );
};

export default HomePage;
