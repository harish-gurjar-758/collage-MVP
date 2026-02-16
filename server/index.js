import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

// Load environment variables
dotenv.config();

// Initialize app
const app = express();

// Middleware
app.use(express.json()); // Parse JSON
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data
app.use(cookieParser()); // Parse cookies
app.use(
    cors({
        origin: "http://localhost:5173", // change to your frontend URL
        credentials: true,
    })
);

// Test Route
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Server is running successfully 🚀",
    });
});

// Define Port
const PORT = process.env.PORT || 5000;

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
