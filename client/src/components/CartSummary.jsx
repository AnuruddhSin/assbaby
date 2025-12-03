import { formatPrice } from "../utils/formatPrice";

const CartSummary = ({ subtotal, onCheckout }) => {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm">
      <div className="flex items-center justify-between text-sm">
        <span>Subtotal</span>
        <span className="font-semibold">{formatPrice(subtotal)}</span>
      </div>
      <p className="mt-1 text-[11px] text-gray-500">
        Shipping and taxes are simulated for this demo.
      </p>
      <button
        onClick={onCheckout}
        className="mt-3 w-full px-4 py-2 rounded-full bg-primary text-white text-sm"
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CartSummary;
