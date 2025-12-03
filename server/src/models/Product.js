import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
    rating: { type: Number, default: 4.5 },
    numReviews: { type: Number, default: 0 }
  },
  { timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);
