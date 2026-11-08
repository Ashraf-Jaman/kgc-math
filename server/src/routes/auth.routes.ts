import bcrypt from "bcryptjs";
import { Request, Response, Router } from "express";
import jwt from "jsonwebtoken";
import { AuthRequest, authenticateJWT } from "../middlewares/auth.middleware.js";
import { validateBody } from "../middlewares/validate.middleware.js";
import { User } from "../models/User.js";
import { loginSchema, registerSchema } from "../schemas/auth.schema.js";
import { sendWelcomeEmail } from "../services/resend.service.js";

const router = Router();

// Register Route
router.post(
  "/register",
  validateBody(registerSchema),
  async (req: Request, res: Response): Promise<void> => {
    try {
      const { name, email, password, role, regNo, session, phone } = req.body;

      // Check existing user
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        res.status(409).json({
          success: false,
          message: "An account with this email already exists.",
        });
        return;
      }

      // Hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // Create user
      const newUser = await User.create({
        name,
        email,
        password: hashedPassword,
        role: role || "student",
        regNo,
        session,
        phone,
      });

      // Generate JWT
      const secret = process.env.JWT_SECRET || "default_jwt_secret";
      const token = jwt.sign(
        { id: newUser._id, email: newUser.email, role: newUser.role },
        secret,
        { expiresIn: "7d" }
      );

      // Send welcome email via Resend (async non-blocking)
      sendWelcomeEmail(email, name).catch((err) =>
        console.error("Welcome email failed:", err)
      );

      res.status(201).json({
        success: true,
        message: "Registration successful.",
        token,
        user: {
          id: newUser._id,
          name: newUser.name,
          email: newUser.email,
          role: newUser.role,
          regNo: newUser.regNo,
          session: newUser.session,
        },
      });
    } catch (error) {
      console.error("Register error:", error);
      res.status(500).json({
        success: false,
        message: "Internal server error during registration.",
      });
    }
  }
);

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
