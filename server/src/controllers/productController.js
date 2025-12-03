import { Product } from "../models/Product.js";
import { Category } from "../models/Category.js";

export const getProducts = async (req, res) => {
  try {
    const { category, sort } = req.query;
    let query = {};

    if (category) {
      const categoryDoc = await Category.findOne({ slug: category });
      if (categoryDoc) query.category = categoryDoc._id;
    }

    let productsQuery = Product.find(query).populate("category");

    if (sort === "price-asc") productsQuery = productsQuery.sort({ price: 1 });
    if (sort === "price-desc") productsQuery = productsQuery.sort({ price: -1 });

    const products = await productsQuery;
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate("category");
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
