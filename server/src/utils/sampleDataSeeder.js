import mongoose from "mongoose";
import { MONGO_URI } from "../config/config.js";
import { Category } from "../models/Category.js";
import { Product } from "../models/Product.js";

const run = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Mongo connected");

    await Category.deleteMany();
    await Product.deleteMany();

    const categories = await Category.insertMany([
      { name: "Diapers", slug: "diapers" },
      { name: "Clothing", slug: "clothing" },
      { name: "Toys", slug: "toys" },
      { name: "Skincare", slug: "skincare" },
      { name: "Feeding", slug: "feeding" }
    ]);

    const diapers = categories.find((c) => c.slug === "diapers")._id;
    const clothing = categories.find((c) => c.slug === "clothing")._id;
    const toys = categories.find((c) => c.slug === "toys")._id;

    await Product.insertMany([
      {
        name: "Ultra Soft Baby Diaper (Pack of 40)",
        slug: "ultra-soft-baby-diaper-40",
        description: "Gentle and absorbent diapers for day and night comfort.",
        price: 499,
        image: "/images/diaper1.png",
        category: diapers,
        rating: 4.7,
        numReviews: 120
      },
      {
        name: "Organic Cotton Baby Romper",
        slug: "organic-cotton-baby-romper",
        description: "Breathable, skin-friendly romper for newborns.",
        price: 699,
        image: "/images/romper1.png",
        category: clothing,
        rating: 4.8,
        numReviews: 85
      },
      {
        name: "Soft Plush Elephant Toy",
        slug: "soft-plush-elephant-toy",
        description: "Cuddly plush toy for 6+ months babies.",
        price: 399,
        image: "/images/toy1.png",
        category: toys,
        rating: 4.6,
        numReviews: 64
      }
      // add more as needed
    ]);

    console.log("Seed completed");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

run();
