import { Category } from "../models/Category.js";

export const getCategories = async (_req, res) => {
  try {
    const categories = await Category.find({});
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
