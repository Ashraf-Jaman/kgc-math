import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { connectDB } from "./config/db.js";
import { DepartmentMessage } from "./models/DepartmentMessage.js";
import { Faculty } from "./models/Faculty.js";
import { NewsEvent } from "./models/NewsEvent.js";
import { Notice } from "./models/Notice.js";
import { User } from "./models/User.js";

dotenv.config();

const defaultNotices = [
  {
    day: "17",
    month: "JUN",
    year: "2025",
    category: "General",
    title: "জুলাই আন্দোলনের তালিকা সংক্রান্ত বিজ্ঞপ্তি",
    published: "June 17, 2025",
    isPinned: true,
  },
  {
    day: "20",
    month: "JAN",
    year: "2025",
    category: "General",
    title: "গণশুনানি সংক্রান্ত নোটিশ",
    published: "January 20, 2025",
    isPinned: false,
  },
  {
    day: "10",
    month: "FEB",
    year: "2025",
    category: "Admission",
    title: "২০২৪-২০২৫ শিক্ষাবর্ষে ১ম বর্ষ স্নাতক (সম্মান) শ্রেণির ওরিয়েন্টেশন ও ক্লাস শুরুর বিজ্ঞপ্তি",
    published: "February 10, 2025",
    isPinned: true,
  },
  {
    day: "04",
    month: "MAR",
    year: "2025",
    category: "Exam",
    title: "মাস্টার্স শেষ পর্ব পরীক্ষা-২০২২ এর ফরম পূরণ ও ফি জমাদান সংক্রান্ত জরুরি নোটিশ",
    published: "March 04, 2025",
    isPinned: false,
  },
  {
    day: "28",
    month: "FEB",
    year: "2025",
    category: "Exam",
    title: "স্নাতক (সম্মান) ৩য় বর্ষ ইনকোর্স ও ব্যবহারিক পরীক্ষার সময়সূচি প্রকাশ",
    published: "February 28, 2025",
    isPinned: false,
  },
  {
    day: "15",
    month: "JAN",
    year: "2025",
    category: "Scholarship",
    title: "মেধা ও সাধারণ বৃত্তিপ্রাপ্ত শিক্ষার্থীদের তথ্য হালনাগাদকরণ সংক্রান্ত বিজ্ঞপ্তি",
    published: "January 15, 2025",
    isPinned: false,
  },
];

const defaultNews = [
  {
    title: "Mathematics Conference Dinner",
    category: "Academic Conference",
    date: "15 Mar 2025",
    image: "/news-conference-dinner.jpg",
    description: "The 3rd National Mathematics Conference Dinner 2025 was organized in honour of distinguished researchers and delegates.",
    isFeatured: true,
  },
  {
    title: "Call for submission of Abstract on the A F Mujibur Rahman - Bangladesh Mathematical Society 3rd National Mathematics Conference 2024",
    category: "Call for Papers",
    date: "05 Dec 2024",
    image: "/news-math-abstract.jpg",
    description: "We are pleased to inform you about the upcoming mathematics conference and call for abstracts across all mathematical branches.",
    isFeatured: false,
  },
  {
    title: "Freshers Reception of Postgraduate Students",
    category: "Departmental Event",
    date: "12 Jan 2025",
    image: "/news-freshers-reception.jpg",
    description: "A grand freshers reception was organized by the Department of Mathematics welcoming new scholars to higher studies.",
    isFeatured: false,
  },
];

const defaultMessages = [
  {
    name: "Md. Sajjadur Rahman",
    designation: "Associate Professor and Head",
    department: "Department of Mathematics, Kurigram Government College",
    image: "/faculty-head.jpg",
    message: "Welcome to the Department of Mathematics at Kurigram Government College. Our department is dedicated to providing quality education, fostering analytical problem-solving skills, and instilling a deep appreciation for mathematical sciences among our students.",
    order: 1,
  },
  {
    name: "Professor Md. Ataul Haque Khan Chowdhury",
    designation: "Principal",
    department: "Kurigram Government College",
    image: "/principal.jpg",
    message: "Kurigram Government College stands as a beacon of higher education and intellectual growth in northern Bangladesh. The Department of Mathematics plays an indispensable role in strengthening scientific temperament, logical inquiry, and academic brilliance across the campus.",
    order: 2,
  },
];

const defaultFaculties = [
  {
    name: "Md. Sajjadur Rahman",
    designation: "Associate Professor",
    role: "Head of the Department",
    education: "B.Sc. (Honours), M.Sc. in Mathematics",
    specialization: "Fluid Dynamics, Differential Equations",
    email: "head.math@kgc.ac.bd",
    phone: "+880 1712-345678",
    image: "/faculty-head.jpg",
    order: 1,
  },
  {
    name: "Dr. A. K. M. Rezaul Karim",
    designation: "Assistant Professor",
    education: "B.Sc. (Honours), M.Sc., Ph.D. in Mathematics",
    specialization: "Numerical Analysis, Mathematical Modeling",
    email: "rezaul.math@kgc.ac.bd",
    phone: "+880 1713-987654",
    image: "/faculty-head.jpg",
    order: 2,
  },
  {
    name: "Md. Mostafizur Rahman",
    designation: "Assistant Professor",
    education: "B.Sc. (Honours), M.Sc. in Mathematics (RU)",
    specialization: "Abstract Algebra, Number Theory",
    email: "mostafiz.math@kgc.ac.bd",
    phone: "+880 1715-234567",
    image: "/faculty-head.jpg",
    order: 3,
  },
  {
    name: "Farhana Yasmin",
    designation: "Lecturer",
    education: "B.Sc. (Honours), M.Sc. in Mathematics (DU)",
    specialization: "Operations Research, Optimization",
    email: "farhana.math@kgc.ac.bd",
    phone: "+880 1718-876543",
    image: "/faculty-head.jpg",
    order: 4,
  },
  {
    name: "Md. Mahfuzur Rahman",
    designation: "Lecturer",
    education: "B.Sc. (Honours), M.Sc. in Applied Mathematics",
    specialization: "Complex Analysis, Graph Theory",
    email: "mahfuz.math@kgc.ac.bd",
    phone: "+880 1719-543210",
    image: "/faculty-head.jpg",
    order: 5,
  },
];

async function seed() {
  await connectDB();

  console.log("🌱 Seeding default departmental data into MongoDB Atlas...");

  // Seed Notices
  await Notice.deleteMany({});
  await Notice.insertMany(defaultNotices);
  console.log(`✅ Seeded ${defaultNotices.length} notices`);

  // Seed News
  await NewsEvent.deleteMany({});
  await NewsEvent.insertMany(defaultNews);
  console.log(`✅ Seeded ${defaultNews.length} news events`);

  // Seed Messages
  await DepartmentMessage.deleteMany({});
  await DepartmentMessage.insertMany(defaultMessages);
  console.log(`✅ Seeded ${defaultMessages.length} department messages`);

  // Seed Faculty
  await Faculty.deleteMany({});
  await Faculty.insertMany(defaultFaculties);
  console.log(`✅ Seeded ${defaultFaculties.length} faculty members`);

  // Seed Admin User
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash("Admin@12345", salt);
  await User.findOneAndUpdate(
    { email: "admin@kgc.ac.bd" },
    {
      name: "Department Administrator",
      email: "admin@kgc.ac.bd",
      password: hashedPassword,
      role: "admin",
      isVerified: true,
    },
    { upsert: true, new: true }
  );
  console.log("✅ Seeded default Admin user (admin@kgc.ac.bd / Admin@12345)");

  console.log("🎉 Seeding completed successfully!");
  await mongoose.disconnect();
}

seed().catch((err) => {
  console.error("Seeding error:", err);
  process.exit(1);
});
