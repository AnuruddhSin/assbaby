import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

import { connectDB } from "./db/connectDB.js";
import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import healthRoutes from "./routes/healthRoutes.js";
import { notFound, errorHandler } from "./middleware/errorHandler.js";

const app = express();

// ⭐ MUST FREE PORT BIND FIRST ⭐
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server live on PORT ${PORT}`));

// Then connect DB
await connectDB();

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cookieParser());
app.use(cookieParser());

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Static Serve
const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "server/uploads")));

// Root
app.get("/", (_req, res) => {
  res.send("✅ BabyBliss API is running");
});

// API routes
app.use("/api/health", healthRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/orders", orderRoutes);

// Errors
app.use(notFound);
app.use(errorHandler);
