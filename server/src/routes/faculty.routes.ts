import { Request, Response, Router } from "express";
import { authenticateJWT, requireAdmin } from "../middlewares/auth.middleware.js";
import { Faculty } from "../models/Faculty.js";

const router = Router();

// GET all faculty members
router.get("/", async (_req: Request, res: Response): Promise<void> => {
  try {
    const faculties = await Faculty.find().sort({ order: 1 });
    res.json({ success: true, count: faculties.length, data: faculties });
  } catch (error) {
    console.error("GET /api/faculties error:", error);
    res.status(500).json({ success: false, message: "Failed to retrieve faculty members." });
  }
});

// POST new faculty member (admin only)
router.post(
  "/",
  authenticateJWT,
  requireAdmin,
  async (req: Request, res: Response): Promise<void> => {
    try {
      const faculty = await Faculty.create(req.body);
      res.status(201).json({ success: true, data: faculty });
    } catch (error) {
      console.error("POST /api/faculties error:", error);
      res.status(400).json({ success: false, message: "Failed to create faculty member." });
    }
  }
);

// DELETE a faculty member (admin only)
router.delete(
  "/:id",
  authenticateJWT,
  requireAdmin,
  async (req: Request, res: Response): Promise<void> => {
    try {
      const faculty = await Faculty.findByIdAndDelete(req.params.id);
      if (!faculty) {
        res.status(404).json({ success: false, message: "Faculty member not found." });
        return;
      }
      res.json({ success: true, message: "Faculty member deleted." });
    } catch (error) {
      console.error("DELETE /api/faculties/:id error:", error);
      res.status(500).json({ success: false, message: "Failed to delete faculty member." });
    }
  }
);

export default router;
