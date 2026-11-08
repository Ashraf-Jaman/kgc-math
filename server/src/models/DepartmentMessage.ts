import mongoose, { Document, Schema } from "mongoose";

export interface IDepartmentMessage extends Document {
  name: string;
  designation: string;
  department: string;
  image: string;
  message: string;
  order: number;
}

const DepartmentMessageSchema = new Schema<IDepartmentMessage>(
  {
    name: { type: String, required: true },
    designation: { type: String, required: true },
    department: { type: String, required: true },
    image: { type: String, required: true },
    message: { type: String, required: true },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export const DepartmentMessage = mongoose.model<IDepartmentMessage>(
  "DepartmentMessage",
  DepartmentMessageSchema
);
