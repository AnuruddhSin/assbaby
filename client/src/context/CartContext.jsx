import { createContext, useState } from "react";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addToCart = (product, qty = 1) => {
    setItems((prev) => {
      const existing = prev.find((p) => p._id === product._id);
      if (existing) {
        return prev.map((p) =>
          p._id === product._id ? { ...p, qty: p.qty + qty } : p
        );
      }
      return [...prev, { ...product, qty }];
    });
  };

  const removeFromCart = (productId) => {
    setItems((prev) => prev.filter((p) => p._id !== productId));
  };

  const updateQty = (productId, qty) => {
    setItems((prev) =>
      prev.map((p) => (p._id === productId ? { ...p, qty } : p))
    );
  };

  const clearCart = () => setItems([]);

  const subtotal = items.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <CartContext.Provider
      value={{ items, addToCart, removeFromCart, updateQty, clearCart, subtotal }}
    >
      {children}
    </CartContext.Provider>
  );
};
