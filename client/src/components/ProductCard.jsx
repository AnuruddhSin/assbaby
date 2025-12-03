import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { formatPrice } from "../utils/formatPrice";
import { useCart } from "../hooks/useCart";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <motion.div
      className="bg-white rounded-2xl shadow-sm p-3 flex flex-col"
      whileHover={{ y: -4, boxShadow: "0 12px 30px rgba(0,0,0,0.08)" }}
    >
      <Link to={`/products/${product._id}`} className="flex-1 flex flex-col">
        <div className="bg-babyBlue/40 rounded-xl h-40 flex items-center justify-center overflow-hidden">
          <span className="text-5xl">🍼</span>
        </div>
        <h3 className="mt-3 text-sm font-semibold text-gray-800 line-clamp-2">
          {product.name}
        </h3>
        <p className="mt-1 text-xs text-gray-500 line-clamp-2">
          {product.description}
        </p>
      </Link>
      <div className="mt-3 flex items-center justify-between">
        <span className="text-primary font-bold text-sm">
          {formatPrice(product.price)}
        </span>
        <button
          onClick={() => addToCart(product, 1)}
          className="px-3 py-1 text-xs rounded-full bg-primary text-white"
        >
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
