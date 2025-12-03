import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import path from "path";

// Load env vars
dotenv.config();

// Import local modules (you will create these)
import { connectDB } from "./db/connectDB.js";
import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import healthRoutes from "./routes/healthRoutes.js";
import { notFound, errorHandler } from "./middleware/errorHandler.js";

const app = express();

// Connect Database
connectDB();

// Middleware setup
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Static folder for images/icons/uploads
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "/client/dist"))); // if serving frontend from backend
app.use("/uploads", express.static(path.join(__dirname, "/server/uploads"))); // product images if uploaded

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

// Error handling middleware (must be last)
app.use(notFound);
app.use(errorHandler);

// Start server using Render provided PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server started on PORT: ${PORT}`));
