import { Request, Response, Router } from "express";
import { DepartmentMessage } from "../models/DepartmentMessage.js";

const router = Router();

// GET all department messages
router.get("/", async (_req: Request, res: Response): Promise<void> => {
  try {
    const messages = await DepartmentMessage.find().sort({ order: 1 });
    res.json({ success: true, count: messages.length, data: messages });
  } catch (error) {
    console.error("GET /api/messages error:", error);
    res.status(500).json({ success: false, message: "Failed to retrieve department messages." });
  }
});

// POST new department message
router.post("/", async (req: Request, res: Response): Promise<void> => {
  try {
    const msg = await DepartmentMessage.create(req.body);
    res.status(201).json({ success: true, data: msg });
  } catch (error) {
    console.error("POST /api/messages error:", error);
    res.status(400).json({ success: false, message: "Failed to create message." });
  }
});

export default router;
