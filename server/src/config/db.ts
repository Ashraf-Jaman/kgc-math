import mongoose from "mongoose";

export async function connectDB(uri?: string): Promise<void> {
  const mongoURI = uri || process.env.MONGODB_URI;

  if (!mongoURI || mongoURI.includes("<username>")) {
    console.warn("⚠️  MONGODB_URI is not set or contains placeholder credentials.");
    console.warn("ℹ️  Please update server/.env with your MongoDB Atlas connection string.");
    return;
  }

  try {
    const conn = await mongoose.connect(mongoURI);
    console.log(`✅ MongoDB Atlas Connected: ${conn.connection.host} / ${conn.connection.name}`);
  } catch (error) {
    console.error("❌ MongoDB Atlas Connection Error:", error);
  }
}
