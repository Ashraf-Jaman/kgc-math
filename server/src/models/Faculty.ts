import mongoose, { Document, Schema } from "mongoose";

export interface IFaculty extends Document {
  name: string;
  designation: string;
  role?: string;
  education: string;
  specialization: string;
  email: string;
  phone: string;
  image: string;
  order: number;
}

const FacultySchema = new Schema<IFaculty>(
  {
    name: { type: String, required: true },
    designation: { type: String, required: true },
    role: { type: String },
    education: { type: String, required: true },
    specialization: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    image: { type: String, default: "/faculty-head.jpg" },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export const Faculty = mongoose.model<IFaculty>("Faculty", FacultySchema);
