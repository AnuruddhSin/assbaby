import { Order } from "../models/Order.js";

export const createOrder = async (req, res) => {
  const { orderItems, shippingInfo, totalPrice } = req.body;

  if (!orderItems || orderItems.length === 0) {
    return res.status(400).json({ message: "No order items" });
  }

  try {
    const order = await Order.create({
      user: req.user._id,
      orderItems,
      shippingInfo,
      totalPrice
    });

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
