import mongoose, { Document, Schema } from "mongoose";

export interface INotice extends Document {
  day: string;
  month: string;
  year: string;
  category: "General" | "Exam" | "Admission" | "Scholarship";
  title: string;
  published: string;
  fileUrl?: string;
  isPinned: boolean;
  createdAt: Date;
}

const NoticeSchema = new Schema<INotice>(
  {
    day: { type: String, required: true },
    month: { type: String, required: true },
    year: { type: String, required: true },
    category: {
      type: String,
      enum: ["General", "Exam", "Admission", "Scholarship"],
      default: "General",
    },
    title: { type: String, required: true, trim: true },
    published: { type: String, required: true },
    fileUrl: { type: String },
    isPinned: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const Notice = mongoose.model<INotice>("Notice", NoticeSchema);
