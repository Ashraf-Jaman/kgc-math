import { Request, Response, Router } from "express";
import { authenticateJWT, requireAdmin } from "../middlewares/auth.middleware.js";
import { Notice } from "../models/Notice.js";

const router = Router();

// GET all notices (supports category and search query)
router.get("/", async (req: Request, res: Response): Promise<void> => {
  try {
    const { category, search, limit } = req.query;

    const filter: Record<string, unknown> = {};
    if (category && category !== "All") {
      filter.category = category;
    }
    if (search && typeof search === "string") {
      filter.title = { $regex: search, $options: "i" };
    }

    const query = Notice.find(filter).sort({ isPinned: -1, createdAt: -1 });
    if (limit) {
      query.limit(Number(limit));
    }

    const notices = await query.exec();
    res.json({ success: true, count: notices.length, data: notices });
  } catch (error) {
    console.error("GET /api/notices error:", error);
    res.status(500).json({ success: false, message: "Failed to retrieve notices." });
  }
});

// GET single notice by ID
router.get("/:id", async (req: Request, res: Response): Promise<void> => {
  try {
    const notice = await Notice.findById(req.params.id);
    if (!notice) {
      res.status(404).json({ success: false, message: "Notice not found." });
      return;
    }
    res.json({ success: true, data: notice });
  } catch (error) {
    console.error("GET /api/notices/:id error:", error);
    res.status(500).json({ success: false, message: "Failed to retrieve notice." });
  }
});

// POST new notice (admin only)
router.post(
  "/",
  authenticateJWT,
  requireAdmin,
  async (req: Request, res: Response): Promise<void> => {
    try {
      const notice = await Notice.create(req.body);
      res.status(201).json({ success: true, data: notice });
    } catch (error) {
      console.error("POST /api/notices error:", error);
      res.status(400).json({ success: false, message: "Failed to create notice." });
    }
  }
);

// DELETE a notice (admin only)
router.delete(
  "/:id",
  authenticateJWT,
  requireAdmin,
  async (req: Request, res: Response): Promise<void> => {
    try {
      const notice = await Notice.findByIdAndDelete(req.params.id);
      if (!notice) {
        res.status(404).json({ success: false, message: "Notice not found." });
        return;
      }
      res.json({ success: true, message: "Notice deleted." });
    } catch (error) {
      console.error("DELETE /api/notices/:id error:", error);
      res.status(500).json({ success: false, message: "Failed to delete notice." });
    }
  }
);

export default router;
