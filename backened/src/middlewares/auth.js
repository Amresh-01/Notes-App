import jwt from "jsonwebtoken";
import User from "../models/user.model";

export const authenticate = async (Req, res, next) => {
  try {
    const authHeader = req.header("Authorization"); // "Bearer" = ek label jo batata hai ki yeh ek JWT token hai jo request ke saath carry ho raha hai.
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res
        .status(401)
        .json({ success: false, message: "No token provided." });
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(decoded.id).select("-password");
    if (!req.user) {
      return res
        .status(401)
        .json({ success: false, message: "User not found." });
    }

    // 5. Call next middleware/controller
    next();
  } catch (error) {
    console.error(error);
    res
      .status(401)
      .json({ success: false, message: "Invalid or expired token" });
  }
};
