import { Request, Response, Router } from "express";
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

// POST new news/event
router.post("/", async (req: Request, res: Response): Promise<void> => {
  try {
    const item = await NewsEvent.create(req.body);
    res.status(201).json({ success: true, data: item });
  } catch (error) {
    console.error("POST /api/news error:", error);
    res.status(400).json({ success: false, message: "Failed to create news event." });
  }
});

export default router;
