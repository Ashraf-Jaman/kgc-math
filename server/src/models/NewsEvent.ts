import mongoose, { Document, Schema } from "mongoose";

export interface INewsEvent extends Document {
  title: string;
  category: string;
  date: string;
  image: string;
  description: string;
  isFeatured: boolean;
  createdAt: Date;
}

const NewsEventSchema = new Schema<INewsEvent>(
  {
    title: { type: String, required: true, trim: true },
    category: { type: String, default: "Event" },
    date: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    isFeatured: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const NewsEvent = mongoose.model<INewsEvent>("NewsEvent", NewsEventSchema);
