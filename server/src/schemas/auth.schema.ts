import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  role: z.enum(["student", "faculty", "alumni", "admin"]).default("student"),
  regNo: z.string().optional(),
  session: z.string().optional(),
  phone: z.string().optional(),
});

export const loginSchema = z.object({
  identifier: z.string().min(1, "Class Roll, Registration number, or Email is required"),
  password: z.string().min(1, "Password is required"),
  role: z.enum(["student", "faculty", "alumni", "admin"]).optional(),
});

export type RegisterInput = z.infer<typeof registerSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
