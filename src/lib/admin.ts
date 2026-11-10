// অ্যাডমিন প্যানেলের জন্য API হেল্পার

import { API_BASE_URL } from "./api";

const TOKEN_KEY = "kgc_token";

export const getToken = (): string | null =>
  typeof window === "undefined" ? null : localStorage.getItem(TOKEN_KEY);

export const setToken = (token: string): void => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const clearToken = (): void => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem("kgc_user");
};

export type AdminUser = {
  id?: string;
  name: string;
  email: string;
  role: string;
};

export const getStoredUser = (): AdminUser | null => {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem("kgc_user");
  if (!raw) return null;
  try {
    return JSON.parse(raw) as AdminUser;
  } catch {
    return null;
  }
};

/** অ্যাডমিন লগইন — শুধু admin রোল যাচাই হয় */
export async function adminLogin(email: string, password: string) {
  const res = await fetch(`${API_BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ identifier: email, password, role: "admin" }),
  });
  return res.json();
}

/** টোকেনসহ JSON রিকোয়েস্ট */
async function authRequest(path: string, init: RequestInit = {}) {
  const token = getToken();
  const res = await fetch(`${API_BASE_URL}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(init.headers ?? {}),
    },
  });
  return res.json();
}

/** ড্যাশবোর্ডের সারসংক্ষেপ */
export async function getAdminStats() {
  try {
    const [notices, news, faculties] = await Promise.all([
      authRequest("/notices"),
      authRequest("/news"),
      authRequest("/faculties"),
    ]);
    return {
      notices: notices.data?.length ?? 0,
      news: news.data?.length ?? 0,
      faculties: faculties.data?.length ?? 0,
    };
  } catch {
    return { notices: 0, news: 0, faculties: 0 };
  }
}

/** নতুন নোটিশ যোগ */
export async function createNotice(payload: Record<string, unknown>) {
  return authRequest("/notices", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

/** নোটিশ মুছুন */
export async function deleteNotice(id: string) {
  return authRequest(`/notices/${id}`, { method: "DELETE" });
}

/** নতুন সংবাদ/ইভেন্ট যোগ */
export async function createNews(payload: Record<string, unknown>) {
  return authRequest("/news", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

/** সংবাদ/ইভেন্ট মুছুন */
export async function deleteNews(id: string) {
  return authRequest(`/news/${id}`, { method: "DELETE" });
}

/** নতুন শিক্ষক যোগ */
export async function createFaculty(payload: Record<string, unknown>) {
  return authRequest("/faculties", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

/** শিক্ষক মুছুন */
export async function deleteFaculty(id: string) {
  return authRequest(`/faculties/${id}`, { method: "DELETE" });
}
