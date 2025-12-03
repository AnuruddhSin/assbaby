import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import { useAuth } from "../hooks/useAuth";
import { api } from "../utils/apiClient";

const CheckoutPage = () => {
  const { items, subtotal, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: user?.name || "",
    email: user?.email || "",
    address: "",
    phone: ""
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const submitOrder = async (e) => {
    e.preventDefault();
    if (!user) {
      alert("Please login to place a demo order.");
      return;
    }
    try {
      setLoading(true);
      const orderItems = items.map((i) => ({
        product: i._id,
        qty: i.qty,
        price: i.price
      }));
      const token = user.token;

      const res = await api.post(
        "/orders",
        {
          orderItems,
          shippingInfo: form,
          totalPrice: subtotal
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setResult(res.data);
      clearCart();
    } catch (error) {
      console.error(error);
      alert("Failed to place demo order.");
    } finally {
      setLoading(false);
    }
  };

  if (result) {
    return (
      <div className="max-w-md mx-auto px-4 pt-10 pb-10 text-center">
        <h1 className="text-2xl font-bold mb-3">Order placed (demo) 🎉</h1>
        <p className="text-sm text-gray-600">
          This is a simulated checkout – no real payment happened.
        </p>
        <button
          onClick={() => navigate("/products")}
          className="mt-4 px-4 py-2 rounded-full bg-primary text-white text-sm"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="max-w-md mx-auto px-4 pt-10 pb-10 text-center">
        <p className="text-sm text-gray-600">Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto px-4 pt-8 pb-10">
      <h1 className="text-2xl font-bold mb-4">Checkout (Demo Only)</h1>
      <form onSubmit={submitOrder} className="bg-white rounded-2xl p-4 shadow-sm">
        <div className="space-y-3 text-sm">
          <div>
            <label className="block mb-1">Name</label>
            <input
              name="name"
              className="w-full px-3 py-2 border rounded-xl text-sm"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block mb-1">Email</label>
            <input
              name="email"
              type="email"
              className="w-full px-3 py-2 border rounded-xl text-sm"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block mb-1">Address</label>
            <textarea
              name="address"
              className="w-full px-3 py-2 border rounded-xl text-sm"
              value={form.address}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block mb-1">Phone</label>
            <input
              name="phone"
              className="w-full px-3 py-2 border rounded-xl text-sm"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <p className="mt-3 text-xs text-gray-500">
          This is a simulated checkout. No real payments or shipments.
        </p>
        <button
          disabled={loading}
          type="submit"
          className="mt-4 w-full px-4 py-2 rounded-full bg-primary text-white text-sm disabled:opacity-60"
        >
          {loading ? "Placing demo order..." : "Place Demo Order"}
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;
