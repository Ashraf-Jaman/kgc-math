import { Request, Response, Router } from "express";
import { authenticateJWT, requireAdmin } from "../middlewares/auth.middleware.js";
import { NewsEvent } from "../models/NewsEvent.js";

const router = Router();

// GET all news and events
router.get("/", async (req: Request, res: Response): Promise<void> => {
  try {
    const { limit } = req.query;
    const query = NewsEvent.find().sort({ createdAt: -1 });

    if (limit) {
      query.limit(Number(limit));
    }

    const newsList = await query.exec();
    res.json({ success: true, count: newsList.length, data: newsList });
  } catch (error) {
    console.error("GET /api/news error:", error);
    res.status(500).json({ success: false, message: "Failed to retrieve news and events." });
  }
});

// POST new news/event (admin only)
router.post(
  "/",
  authenticateJWT,
  requireAdmin,
  async (req: Request, res: Response): Promise<void> => {
    try {
      const item = await NewsEvent.create(req.body);
      res.status(201).json({ success: true, data: item });
    } catch (error) {
      console.error("POST /api/news error:", error);
      res.status(400).json({ success: false, message: "Failed to create news event." });
    }
  }
);

// DELETE a news/event (admin only)
router.delete(
  "/:id",
  authenticateJWT,
  requireAdmin,
  async (req: Request, res: Response): Promise<void> => {
    try {
      const item = await NewsEvent.findByIdAndDelete(req.params.id);
      if (!item) {
        res.status(404).json({ success: false, message: "News event not found." });
        return;
      }
      res.json({ success: true, message: "News event deleted." });
    } catch (error) {
      console.error("DELETE /api/news/:id error:", error);
      res.status(500).json({ success: false, message: "Failed to delete news event." });
    }
  }
);

export default router;
