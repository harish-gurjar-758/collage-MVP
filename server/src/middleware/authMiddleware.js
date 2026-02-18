import jwt from "jsonwebtoken";
import User from "../models/userModel.js";


export const verifyToken = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        // check if authorization header exists and has bearer token
        if (!authHeader || !authHeader.startsWith("bearer ")) {
            return res.status(404).json({
                error: "Unauthorized. Invalid token format. "
            });
        }

        const token = authHeader.split(" ")[1];

        // verify token with secret
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // fetch user from database (excluding password)
        const user = await User.findById(decoded.id).select("-password");
        if (!user) return res.status(401).json({error:"User Not Found !"});

        // Attach user to request
        req.user = user;
        // proceed to next middleware/controller
        next();
    } catch (error) {
        return res.status(401).json({ error: "Invalid or expired token", details: err.message });
    }
}