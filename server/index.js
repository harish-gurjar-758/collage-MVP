import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./src/config/connectDB.js";

import userRoutes from "./src/Routes/userRoutes.js";
import departmentRoutes from "./src/Routes/department.routes.js";
import noticeCategoryRoutes from "./src/Routes/noticeCategory.routes.js";
import noticeRoutes from "./src/Routes/notice.routes.js";

dotenv.config();

const app = express();

// ===============================
// Core Middlewares
// ===============================

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// ===============================
// Database Connection
// ===============================
connectDB();

// ===============================
// Routes
// ===============================

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "🚀 Server Running",
  });
});

app.use("/api/auth", userRoutes);
app.use("/api/department", departmentRoutes);
app.use("/api/notice-category", noticeCategoryRoutes);
app.use("/api/notice", noticeRoutes);

// ===============================
// Global Error Handler
// ===============================
app.use((err, req, res, next) => {
  console.error("Error:", err.message);

  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Server Error",
  });
});

// ===============================
// Start Server
// ===============================

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});