import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import path from "path";

// Load env vars
dotenv.config();

import { connectDB } from "./db/connectDB.js";
import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import healthRoutes from "./routes/healthRoutes.js";
import { notFound, errorHandler } from "./middleware/errorHandler.js";

const app = express();

// Connect Database
await connectDB();

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));
app.use(cookieParser());

// ⭐ FIXED CORS ⭐
app.use(
  cors({
    origin: ["https://assbaby.onrender.com"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Static file serve
const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "server/uploads")));

// Root route
app.get("/", (_req, res) => {
  res.send("✅ BabyBliss API is running");
});

// API Routes
app.use("/api/health", healthRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/orders", orderRoutes);

// Error Middlewares (must be last)
app.use(notFound);
app.use(errorHandler);

// Start Render Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on PORT ${PORT}`));
