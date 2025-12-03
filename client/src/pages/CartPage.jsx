import { useNavigate } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import CartSummary from "../components/CartSummary";
import QuantitySelector from "../components/QuantitySelector";

const CartPage = () => {
  const { items, updateQty, removeFromCart, subtotal } = useCart();
  const navigate = useNavigate();

  const goCheckout = () => {
    if (items.length === 0) return;
    navigate("/checkout");
  };

  return (
    <div className="max-w-6xl mx-auto px-4 pt-6 pb-10 grid md:grid-cols-[2fr_1fr] gap-6">
      <div>
        <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
        {items.length === 0 ? (
          <p className="text-sm text-gray-600">Your cart is empty.</p>
        ) : (
          <div className="space-y-3">
            {items.map((item) => (
              <div
                key={item._id}
                className="bg-white rounded-2xl p-3 flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-babyBlue flex items-center justify-center">
                    <span className="text-2xl">🍼</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{item.name}</p>
                    <p className="text-xs text-gray-500">
                      ₹{item.price} x {item.qty}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <QuantitySelector
                    value={item.qty}
                    onChange={(val) => updateQty(item._id, val)}
                  />
                  <button
                    onClick={() => removeFromCart(item._id)}
                    className="text-xs text-red-500"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div>
        <CartSummary subtotal={subtotal} onCheckout={goCheckout} />
      </div>
    </div>
  );
};

export default CartPage;
