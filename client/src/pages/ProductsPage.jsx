import { useEffect, useState } from "react";
import { api } from "../utils/apiClient";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [categorySlug, setCategorySlug] = useState("");
  const [sort, setSort] = useState("");
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const params = {};
      if (categorySlug) params.category = categorySlug;
      if (sort) params.sort = sort;

      const res = await api.get("/products", { params });
      setProducts(res.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const init = async () => {
      try {
        const catRes = await api.get("/categories");
        setCategories(catRes.data);
      } catch (e) {
        console.error(e);
      }
    };
    init();
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [categorySlug, sort]);

  return (
    <div className="max-w-6xl mx-auto px-4 pt-6 pb-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
        <h1 className="text-2xl font-bold">All Baby Products</h1>
        <div className="flex gap-2 text-xs">
          <select
            value={categorySlug}
            onChange={(e) => setCategorySlug(e.target.value)}
            className="px-2 py-1 rounded-full border bg-white"
          >
            <option value="">All Categories</option>
            {categories.map((c) => (
              <option key={c._id} value={c.slug}>
                {c.name}
              </option>
            ))}
          </select>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="px-2 py-1 rounded-full border bg-white"
          >
            <option value="">Sort</option>
            <option value="price-asc">Price: Low to high</option>
            <option value="price-desc">Price: High to low</option>
          </select>
        </div>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((p) => (
            <ProductCard key={p._id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
