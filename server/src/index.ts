import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express, { Request, Response } from "express";
import { connectDB } from "./config/db.js";
import authRoutes from "./routes/auth.routes.js";
import facultyRoutes from "./routes/faculty.routes.js";
import newsRoutes from "./routes/news.routes.js";
import noticeRoutes from "./routes/notice.routes.js";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:3000";

// Middlewares
app.use(
  cors({
    origin: [CLIENT_URL, "http://localhost:3000", "http://127.0.0.1:3000"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Health Check
app.get("/api/health", (_req: Request, res: Response) => {
  res.json({
    status: "ok",
    timestamp: new Date().toISOString(),
    service: "Kurigram Government College - Mathematics Department API",
  });
});

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/notices", noticeRoutes);
app.use("/api/news", newsRoutes);
app.use("/api/faculties", facultyRoutes);

// 404 Handler
app.use((_req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: "Endpoint not found.",
  });
});

// Initialize database and start listening
async function bootstrap() {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`🚀 Express server running on http://localhost:${PORT}`);
    console.log(`📡 API Endpoints ready at http://localhost:${PORT}/api`);
  });
}

bootstrap().catch((err) => {
  console.error("Failed to start server:", err);
});

export default app;
