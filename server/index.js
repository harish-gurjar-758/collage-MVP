import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import morgan from "morgan";
import rateLimit from "express-rate-limit";

import connectDB from "./src/config/connectDB.js";

// Load environment variables
dotenv.config();

// Initialize Express App
const app = express();

// ===============================
// Security Middlewares
// ===============================

// Set security HTTP headers
app.use(helmet());

// Limit repeated requests (Basic DDoS protection)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP
});
app.use(limiter);

// ===============================
// Core Middlewares
// ===============================

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173", // frontend URL
    credentials: true,
  })
);

// Logger (development only)
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

// ===============================
// Connect Database
// ===============================
connectDB();

// ===============================
// Routes
// ===============================

// Health Check Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "🚀 Collage MVP Server Running Successfully",
  });
});

// Example Route Structure
// import authRoutes from "./src/routes/auth.routes.js";
// app.use("/api/auth", authRoutes);

// ===============================
// Global Error Handler
// ===============================
app.use((err, req, res, next) => {
  console.error("Global Error:", err.stack);
  res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
});

// ===============================
// Start Server
// ===============================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
