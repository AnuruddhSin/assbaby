import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../utils/apiClient";
import Loader from "../components/Loader";
import { formatPrice } from "../utils/formatPrice";
import { useCart } from "../hooks/useCart";
import ProductCard from "../components/ProductCard";

const ProductDetailPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [recommended, setRecommended] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        setLoading(true);
        const res = await api.get(`/products/${id}`);
        setProduct(res.data);

        const list = await api.get("/products");
        setRecommended(
          list.data.filter((p) => p._id !== id).slice(0, 4)
        );
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    fetchDetail();
  }, [id]);

  if (loading || !product) return <Loader />;

  return (
    <div className="max-w-6xl mx-auto px-4 pt-6 pb-10 grid md:grid-cols-2 gap-8">
      <div className="bg-white rounded-3xl p-6 shadow-sm flex items-center justify-center">
        <span className="text-7xl">🍼</span>
      </div>
      <div>
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <p className="mt-2 text-sm text-gray-600">{product.description}</p>
        <p className="mt-4 text-xl font-extrabold text-primary">
          {formatPrice(product.price)}
        </p>
        <button
          onClick={() => addToCart(product)}
          className="mt-4 px-5 py-2 rounded-full bg-primary text-white text-sm"
        >
          Add to Cart
        </button>

        <div className="mt-6">
          <h2 className="text-sm font-semibold mb-2">Recommended for you</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {recommended.map((p) => (
              <ProductCard key={p._id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
