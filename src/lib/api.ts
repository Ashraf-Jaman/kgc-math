export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export interface NoticeItem {
  _id?: string;
  day: string;
  month: string;
  year: string;
  category: string;
  title: string;
  published: string;
  fileUrl?: string;
}

export interface NewsItem {
  _id?: string;
  title: string;
  category?: string;
  date: string;
  image: string;
  description: string;
}

export interface DepartmentMessageItem {
  _id?: string;
  name: string;
  designation: string;
  department: string;
  image: string;
  message: string;
}

export interface FacultyItem {
  _id?: string;
  name: string;
  designation: string;
  role?: string;
  education: string;
  specialization: string;
  email: string;
  phone: string;
  image: string;
}

// Fallbacks in case the backend is offline/booting
const fallbackNotices: NoticeItem[] = [
  {
    day: "17",
    month: "JUN",
    year: "2025",
    category: "General",
    title: "জুলাই আন্দোলনের তালিকা সংক্রান্ত বিজ্ঞপ্তি",
    published: "June 17, 2025",
  },
  {
    day: "20",
    month: "JAN",
    year: "2025",
    category: "General",
    title: "গণশুনানি সংক্রান্ত নোটিশ",
    published: "January 20, 2025",
  },
  {
    day: "10",
    month: "FEB",
    year: "2025",
    category: "Admission",
    title: "২০২৪-২০২৫ শিক্ষাবর্ষে ১ম বর্ষ স্নাতক (সম্মান) শ্রেণির ওরিয়েন্টেশন ও ক্লাস শুরুর বিজ্ঞপ্তি",
    published: "February 10, 2025",
  },
  {
    day: "04",
    month: "MAR",
    year: "2025",
    category: "Exam",
    title: "মাস্টার্স শেষ পর্ব পরীক্ষা-২০২২ এর ফরম পূরণ ও ফি জমাদান সংক্রান্ত জরুরি নোটিশ",
    published: "March 04, 2025",
  },
];

const fallbackNews: NewsItem[] = [
  {
    title: "Mathematics Conference Dinner",
    category: "Academic Conference",
    date: "15 Mar 2025",
    image: "/news-conference-dinner.jpg",
    description: "3rd National Mathematics Conference Dinner 2025 organized with distinguished scholars and guests.",
  },
  {
    title: "Call for submission of Abstract on the A F Mujibur Rahman - Bangladesh Mathematical Society 3rd National Mathematics Conference 2024",
    category: "Call for Papers",
    date: "05 Dec 2024",
    image: "/news-math-abstract.jpg",
    description: "We are pleased to inform you about the upcoming mathematics conference and invitation for research paper submissions.",
  },
  {
    title: "Freshers Reception of Postgraduate Students",
    category: "Departmental Event",
    date: "12 Jan 2025",
    image: "/news-freshers-reception.jpg",
    description: "A grand freshers reception was organized by the Department of Mathematics welcoming the newly admitted scholars.",
  },
];

const fallbackMessages: DepartmentMessageItem[] = [
  {
    name: "Md. Moshiur Rahman",
    designation: "Associate Professor and Head",
    department: "Department of Mathematics, Kurigram Government College",
    image: "/faculty-head.jpg",
    message: "Welcome to the Department of Mathematics at Kurigram Government College. Our department is dedicated to providing quality education, fostering analytical problem-solving skills, and instilling a deep appreciation for mathematical sciences among our students.",
  },
  {
    name: "Md. Rashedul Islam",
    designation: "Lecturer",
    department: "Department of Mathematics, Kurigram Government College",
    image: "/lecturer.jpg",
    message: "Mathematics is the foundation of logical reasoning and scientific inquiry. In our department, we strive to create an engaging and supportive environment where students are inspired to explore mathematical problem solving and reach their highest potential.",
  },
];

const fallbackFaculties: FacultyItem[] = [
  {
    name: "Md. Moshiur Rahman",
    designation: "Associate Professor",
    role: "Head of the Department",
    education: "B.Sc. (Honours), M.Sc. in Mathematics",
    specialization: "Fluid Dynamics, Differential Equations",
    email: "head.math@kgc.ac.bd",
    phone: "+880 1712-345678",
    image: "/faculty-head.jpg",
  },
  {
    name: "Dr. A. K. M. Rezaul Karim",
    designation: "Assistant Professor",
    education: "B.Sc. (Honours), M.Sc., Ph.D. in Mathematics",
    specialization: "Numerical Analysis, Mathematical Modeling",
    email: "rezaul.math@kgc.ac.bd",
    phone: "+880 1713-987654",
    image: "/faculty-head.jpg",
  },
  {
    name: "Md. Mostafizur Rahman",
    designation: "Assistant Professor",
    education: "B.Sc. (Honours), M.Sc. in Mathematics (RU)",
    specialization: "Abstract Algebra, Number Theory",
    email: "mostafiz.math@kgc.ac.bd",
    phone: "+880 1715-234567",
    image: "/faculty-head.jpg",
  },
  {
    name: "Md. Rashedul Islam",
    designation: "Lecturer",
    education: "B.Sc. (Honours), M.Sc. in Mathematics",
    specialization: "Pure Mathematics, Algebra & Calculus",
    email: "rashedul.math@kgc.ac.bd",
    phone: "+880 1718-876543",
    image: "/lecturer.jpg",
  },
  {
    name: "Farhana Yasmin",
    designation: "Lecturer",
    education: "B.Sc. (Honours), M.Sc. in Mathematics (DU)",
    specialization: "Operations Research, Optimization",
    email: "farhana.math@kgc.ac.bd",
    phone: "+880 1718-876543",
    image: "/faculty-head.jpg",
  },
  {
    name: "Md. Mahfuzur Rahman",
    designation: "Lecturer",
    education: "B.Sc. (Honours), M.Sc. in Applied Mathematics",
    specialization: "Complex Analysis, Graph Theory",
    email: "mahfuz.math@kgc.ac.bd",
    phone: "+880 1719-543210",
    image: "/faculty-head.jpg",
  },
];

// Fetch Notices from backend API
export async function getNotices(params?: { category?: string; search?: string; limit?: number }): Promise<NoticeItem[]> {
  try {
    const query = new URLSearchParams();
    if (params?.category) query.append("category", params.category);
    if (params?.search) query.append("search", params.search);
    if (params?.limit) query.append("limit", String(params.limit));

    const res = await fetch(`${API_BASE_URL}/notices?${query.toString()}`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error("API response error");
    const json = await res.json();
    return json.data || fallbackNotices;
  } catch {
    return fallbackNotices;
  }
}

// Fetch News & Events from backend API
export async function getNews(params?: { limit?: number }): Promise<NewsItem[]> {
  try {
    const query = new URLSearchParams();
    if (params?.limit) query.append("limit", String(params.limit));

    const res = await fetch(`${API_BASE_URL}/news?${query.toString()}`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error("API response error");
    const json = await res.json();
    return json.data || fallbackNews;
  } catch {
    return fallbackNews;
  }
}

// Fetch Department Messages from backend API
export async function getDepartmentMessages(): Promise<DepartmentMessageItem[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/messages`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error("API response error");
    const json = await res.json();
    return json.data || fallbackMessages;
  } catch {
    return fallbackMessages;
  }
}

// Fetch Faculties from backend API
export async function getFaculties(): Promise<FacultyItem[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/faculties`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error("API response error");
    const json = await res.json();
    return json.data || fallbackFaculties;
  } catch {
    return fallbackFaculties;
  }
}

// Submit Contact Inquiry to backend API
export async function sendContactInquiry(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  const res = await fetch(`${API_BASE_URL}/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

// User Authentication API
export async function apiRegister(data: Record<string, unknown>) {
  const res = await fetch(`${API_BASE_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function apiLogin(data: Record<string, unknown>) {
  const res = await fetch(`${API_BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}
