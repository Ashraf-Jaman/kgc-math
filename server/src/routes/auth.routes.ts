import bcrypt from "bcryptjs";
import { Request, Response, Router } from "express";
import jwt from "jsonwebtoken";
import { AuthRequest, authenticateJWT } from "../middlewares/auth.middleware.js";
import { validateBody } from "../middlewares/validate.middleware.js";
import { User } from "../models/User.js";
import { loginSchema } from "../schemas/auth.schema.js";

const router = Router();

// Login Route
router.post(
  "/login",
  validateBody(loginSchema),
  async (req: Request, res: Response): Promise<void> => {
    try {
      const { identifier, password, role } = req.body;

      // Find user by email or regNo
      const query: Record<string, unknown> = {
        $or: [{ email: identifier.toLowerCase() }, { regNo: identifier }],
      };
      if (role) {
        query.role = role;
      }

      const user = await User.findOne(query);
      if (!user) {
        res.status(401).json({
          success: false,
          message: "Invalid credentials. User not found.",
        });
        return;
      }

      // Verify password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        res.status(401).json({
          success: false,
          message: "Invalid credentials. Incorrect password.",
        });
        return;
      }

      // Generate JWT
      const secret = process.env.JWT_SECRET || "default_jwt_secret";
      const token = jwt.sign(
        { id: user._id, email: user.email, role: user.role },
        secret,
        { expiresIn: "7d" }
      );

      res.json({
        success: true,
        message: "Login successful.",
        token,
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
          regNo: user.regNo,
          session: user.session,
        },
      });
    } catch (error) {
      console.error("Login error:", error);
      res.status(500).json({
        success: false,
        message: "Internal server error during login.",
      });
    }
  }
);

// Get current user profile
router.get("/me", authenticateJWT, async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const user = await User.findById(req.user?.id).select("-password");
    if (!user) {
      res.status(404).json({ success: false, message: "User not found." });
      return;
    }
    res.json({ success: true, user });
  } catch (error) {
    console.error("Get /me error:", error);
    res.status(500).json({ success: false, message: "Failed to retrieve user profile." });
  }
});

export default router;
