import { Request, Response, Router } from "express";
import { validateBody } from "../middlewares/validate.middleware.js";
import { ContactMessage } from "../models/ContactMessage.js";
import { contactSchema } from "../schemas/contact.schema.js";
import { sendContactNotification } from "../services/resend.service.js";

const router = Router();

// POST new contact inquiry
router.post(
  "/",
  validateBody(contactSchema),
  async (req: Request, res: Response): Promise<void> => {
    try {
      const { name, email, subject, message } = req.body;

      const newContact = await ContactMessage.create({
        name,
        email,
        subject,
        message,
      });

      // Send email notification to departmental admin via Resend
      sendContactNotification(name, email, subject, message).catch((err) =>
        console.error("Contact notification email failed:", err)
      );

      res.status(201).json({
        success: true,
        message: "Your inquiry has been submitted successfully.",
        data: newContact,
      });
    } catch (error) {
      console.error("POST /api/contact error:", error);
      res.status(500).json({
        success: false,
        message: "Failed to submit inquiry.",
      });
    }
  }
);

// GET all contact inquiries (admin only)
router.get("/", async (_req: Request, res: Response): Promise<void> => {
  try {
    const inquiries = await ContactMessage.find().sort({ createdAt: -1 });
    res.json({ success: true, count: inquiries.length, data: inquiries });
  } catch (error) {
    console.error("GET /api/contact error:", error);
    res.status(500).json({ success: false, message: "Failed to retrieve inquiries." });
  }
});

export default router;
