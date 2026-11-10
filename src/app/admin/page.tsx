"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  clearToken,
  createFaculty,
  createNews,
  createNotice,
  deleteFaculty,
  deleteNews,
  deleteNotice,
  getAdminStats,
  getStoredUser,
  type AdminUser,
} from "@/lib/admin";
import { getFaculties, getNews, getNotices } from "@/lib/api";
import { toBanglaCategory, toBanglaDesignation } from "@/lib/bangla";

type Tab = "notices" | "news" | "faculty";

export default function AdminDashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<AdminUser | null>(null);
  const [authorized, setAuthorized] = useState<boolean | null>(null);
  const [tab, setTab] = useState<Tab>("notices");
  const [stats, setStats] = useState({ notices: 0, news: 0, faculties: 0 });

  const [notices, setNotices] = useState<Awaited<ReturnType<typeof getNotices>>>([]);
  const [news, setNews] = useState<Awaited<ReturnType<typeof getNews>>>([]);
  const [faculties, setFaculties] = useState<Awaited<ReturnType<typeof getFaculties>>>([]);

  const [noticeForm, setNoticeForm] = useState({
    day: "",
    month: "",
    year: "",
    category: "General",
    title: "",
    published: "",
  });
  const [newsForm, setNewsForm] = useState({
    title: "",
    category: "",
    date: "",
    image: "",
    description: "",
  });
  const [facultyForm, setFacultyForm] = useState({
    name: "",
    designation: "Lecturer",
    education: "",
    specialization: "",
    email: "",
    phone: "",
    image: "/faculty-head.jpg",
  });

  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);

  // অথেন্টিকেশন চেক
  useEffect(() => {
    let active = true;

    const checkAuth = async () => {
      // microtask-এ স্থানান্তর করে effect-বডির সরাসরি setState এড়ানো হয়
      await Promise.resolve();

      const stored = getStoredUser();
      if (!active) return;

      if (!stored || stored.role !== "admin") {
        setAuthorized(false);
        router.replace("/admin/login");
        return;
      }

      setUser(stored);
      setAuthorized(true);
    };

    checkAuth();

    return () => {
      active = false;
    };
  }, [router]);

  // ডেটা লোড
  useEffect(() => {
    if (!authorized) return;

    getNotices().then(setNotices);
    getNews().then(setNews);
    getFaculties().then(setFaculties);
    getAdminStats().then(setStats);
  }, [authorized]);

  const handleLogout = () => {
    clearToken();
    router.replace("/admin/login");
  };

  const runAction = async (
    action: () => Promise<{ success?: boolean; message?: string }>,
    successText: string,
    onSuccess?: () => void
  ) => {
    setBusy(true);
    setMessage("");
    try {
      const res = await action();
      if (res?.success) {
        setMessage(successText);
        onSuccess?.();
        getAdminStats().then(setStats);
        getNotices().then(setNotices);
        getNews().then(setNews);
        getFaculties().then(setFaculties);
        return true;
      }
      setMessage(res?.message || "কাজটি সম্পন্ন হয়নি।");
      return false;
    } catch {
      setMessage("সার্ভার সাময়িকভাবে বন্ধ থাকতে পারে।");
      return false;
    } finally {
      setBusy(false);
    }
  };

  /** ফর্মের প্রয়োজনীয় ঘরগুলো পূরণ হয়েছে কি না দেখা */
  const isFilled = (...values: string[]) => values.every((v) => v.trim().length > 0);

  /** ফর্ম পাঠানোর আগে যাচাই — শুধু সফল হলে ফর্ম রিসেট হবে */
  const submit = (
    valid: boolean,
    action: () => Promise<{ success?: boolean; message?: string }>,
    successText: string,
    reset?: () => void
  ) => {
    if (!valid) {
      setMessage("সব প্রয়োজনীয় ঘর পূরণ করুন।");
      return;
    }
    runAction(action, successText, reset);
  };

  if (authorized === null) {
    return (
      <main className="flex min-h-[60vh] items-center justify-center bg-[#F1F8F2] text-sm font-semibold text-[#166534]">
        যাচাই করা হচ্ছে...
      </main>
    );
  }

  if (authorized === false) {
    return null;
  }

  const tabs: { key: Tab; label: string; count: number }[] = [
    { key: "notices", label: "নোটিশ", count: stats.notices },
    { key: "news", label: "সংবাদ ও ইভেন্ট", count: stats.news },
    { key: "faculty", label: "শিক্ষকমণ্ডলী", count: stats.faculties },
  ];

  return (
    <main className="min-h-[calc(100vh-200px)] bg-[#F1F8F2]">
      {/* হেডার */}
      <header className="bg-[#14532d] text-white">
        <div className="mx-auto flex w-[calc(100%-40px)] max-w-[1140px] flex-wrap items-center justify-between gap-3 py-5">
          <div>
            <h1 className="text-lg font-extrabold sm:text-xl">অ্যাডমিন প্যানেল</h1>
            <p className="mt-0.5 text-[11px] text-emerald-100 sm:text-xs">
              গণিত বিভাগ, কুড়িগ্রাম সরকারি কলেজ
              {user ? ` — ${user.name}` : ""}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="rounded-lg border border-white/25 px-3.5 py-2 text-xs font-bold text-white transition hover:bg-white/10 sm:text-sm"
            >
              সাইট দেখুন
            </Link>
            <button
              type="button"
              onClick={handleLogout}
              className="rounded-lg bg-[#FBBF24] px-3.5 py-2 text-xs font-bold text-[#14532d] transition hover:bg-white sm:text-sm"
            >
              লগআউট
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto w-[calc(100%-40px)] max-w-[1140px] py-6 sm:py-8">
        {/* স্ট্যাটস */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4">
          {tabs.map((item) => (
            <button
              key={item.key}
              type="button"
              onClick={() => setTab(item.key)}
              className={`rounded-xl border p-4 text-left transition sm:p-5 ${
                tab === item.key
                  ? "border-[#166534] bg-[#166534] text-white shadow-md"
                  : "border-[#DDE8DE] bg-white text-[#263238] hover:border-[#166534]"
              }`}
            >
              <span
                className={`block text-[11px] font-semibold sm:text-xs ${
                  tab === item.key ? "text-emerald-100" : "text-[#6B7A70]"
                }`}
              >
                {item.label}
              </span>
              <span className="mt-1 block text-xl font-extrabold sm:text-2xl">
                {item.count}
              </span>
            </button>
          ))}
        </div>

        {message && (
          <div className="mt-4 rounded-lg border border-[#DDE8DE] bg-white p-3 text-xs font-semibold text-[#166534]">
            {message}
          </div>
        )}

        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          {/* তালিকা */}
          <section className="overflow-hidden rounded-xl border border-[#DDE8DE] bg-white shadow-sm">
            <div className="border-b border-[#EDF3EE] bg-[#166534] px-4 py-3 text-sm font-extrabold text-white">
              {tabs.find((t) => t.key === tab)?.label} — তালিকা
            </div>

            <div className="max-h-[520px] divide-y divide-[#EDF3EE] overflow-y-auto">
              {tab === "notices" &&
                notices.map((notice, idx) => (
                  <div
                    key={notice._id || idx}
                    className="flex items-start justify-between gap-3 px-4 py-3"
                  >
                    <div className="min-w-0">
                      <p className="text-[13px] font-bold text-[#263238]">
                        {notice.title}
                      </p>
                      <p className="mt-0.5 text-[11px] text-[#6B7A70]">
                        {notice.day} {notice.month} {notice.year} ·{" "}
                        {toBanglaCategory(notice.category)}
                      </p>
                    </div>
                    {notice._id && (
                      <button
                        type="button"
                        disabled={busy}
                        onClick={() =>
                          runAction(
                            () => deleteNotice(notice._id as string),
                            "নোটিশ মুছে ফেলা হয়েছে।"
                          )
                        }
                        className="shrink-0 rounded-md border border-red-200 px-2.5 py-1 text-[11px] font-bold text-red-600 transition hover:bg-red-50 disabled:opacity-50"
                      >
                        মুছুন
                      </button>
                    )}
                  </div>
                ))}

              {tab === "news" &&
                news.map((item, idx) => (
                  <div
                    key={item._id || idx}
                    className="flex items-start justify-between gap-3 px-4 py-3"
                  >
                    <div className="min-w-0">
                      <p className="text-[13px] font-bold text-[#263238]">
                        {item.title}
                      </p>
                      <p className="mt-0.5 text-[11px] text-[#6B7A70]">
                        {item.date}
                        {item.category ? ` · ${item.category}` : ""}
                      </p>
                    </div>
                    {item._id && (
                      <button
                        type="button"
                        disabled={busy}
                        onClick={() =>
                          runAction(
                            () => deleteNews(item._id as string),
                            "সংবাদ মুছে ফেলা হয়েছে।"
                          )
                        }
                        className="shrink-0 rounded-md border border-red-200 px-2.5 py-1 text-[11px] font-bold text-red-600 transition hover:bg-red-50 disabled:opacity-50"
                      >
                        মুছুন
                      </button>
                    )}
                  </div>
                ))}

              {tab === "faculty" &&
                faculties.map((faculty, idx) => (
                  <div
                    key={faculty._id || idx}
                    className="flex items-start justify-between gap-3 px-4 py-3"
                  >
                    <div className="min-w-0">
                      <p className="text-[13px] font-bold text-[#263238]">
                        {faculty.name}
                      </p>
                      <p className="mt-0.5 text-[11px] text-[#6B7A70]">
                        {toBanglaDesignation(faculty.designation)}
                      </p>
                    </div>
                    {faculty._id && (
                      <button
                        type="button"
                        disabled={busy}
                        onClick={() =>
                          runAction(
                            () => deleteFaculty(faculty._id as string),
                            "শিক্ষকের তথ্য মুছে ফেলা হয়েছে।"
                          )
                        }
                        className="shrink-0 rounded-md border border-red-200 px-2.5 py-1 text-[11px] font-bold text-red-600 transition hover:bg-red-50 disabled:opacity-50"
                      >
                        মুছুন
                      </button>
                    )}
                  </div>
                ))}

              {((tab === "notices" && notices.length === 0) ||
                (tab === "news" && news.length === 0) ||
                (tab === "faculty" && faculties.length === 0)) && (
                <p className="px-4 py-10 text-center text-xs text-[#6B7A70]">
                  কোনো তথ্য নেই।
                </p>
              )}
            </div>
          </section>

          {/* ফর্ম */}
          <section className="overflow-hidden rounded-xl border border-[#DDE8DE] bg-white shadow-sm">
            <div className="border-b border-[#EDF3EE] bg-[#166534] px-4 py-3 text-sm font-extrabold text-white">
              নতুন এন্ট্রি যোগ করুন
            </div>

            <div className="space-y-3 p-4 text-xs sm:text-sm">
              {tab === "notices" && (
                <>
                  <Field
                    label="শিরোনাম"
                    value={noticeForm.title}
                    onChange={(v) =>
                      setNoticeForm({ ...noticeForm, title: v })
                    }
                    placeholder="নোটিশের শিরোনাম"
                  />
                  <div className="grid grid-cols-3 gap-2">
                    <Field
                      label="দিন"
                      value={noticeForm.day}
                      onChange={(v) =>
                        setNoticeForm({ ...noticeForm, day: v })
                      }
                      placeholder="৩০"
                    />
                    <Field
                      label="মাস"
                      value={noticeForm.month}
                      onChange={(v) =>
                        setNoticeForm({ ...noticeForm, month: v })
                      }
                      placeholder="JUL"
                    />
                    <Field
                      label="বছর"
                      value={noticeForm.year}
                      onChange={(v) =>
                        setNoticeForm({ ...noticeForm, year: v })
                      }
                      placeholder="2025"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <Field
                      label="ক্যাটাগরি"
                      value={noticeForm.category}
                      onChange={(v) =>
                        setNoticeForm({ ...noticeForm, category: v })
                      }
                      placeholder="General"
                    />
                    <Field
                      label="প্রকাশের তারিখ"
                      value={noticeForm.published}
                      onChange={(v) =>
                        setNoticeForm({ ...noticeForm, published: v })
                      }
                      placeholder="July 30, 2025"
                    />
                  </div>
                  <SubmitButton
                    busy={busy}
                    onClick={() =>
                      submit(
                        isFilled(
                          noticeForm.title,
                          noticeForm.day,
                          noticeForm.month,
                          noticeForm.year,
                          noticeForm.category,
                          noticeForm.published
                        ),
                        () => createNotice(noticeForm),
                        "নতুন নোটিশ যোগ হয়েছে।",
                        () =>
                          setNoticeForm({
                            day: "",
                            month: "",
                            year: "",
                            category: "General",
                            title: "",
                            published: "",
                          })
                      )
                    }
                  />
                </>
              )}

              {tab === "news" && (
                <>
                  <Field
                    label="শিরোনাম"
                    value={newsForm.title}
                    onChange={(v) => setNewsForm({ ...newsForm, title: v })}
                    placeholder="সংবাদের শিরোনাম"
                  />
                  <div className="grid grid-cols-2 gap-2">
                    <Field
                      label="ক্যাটাগরি"
                      value={newsForm.category}
                      onChange={(v) =>
                        setNewsForm({ ...newsForm, category: v })
                      }
                      placeholder="Academic Event"
                    />
                    <Field
                      label="তারিখ"
                      value={newsForm.date}
                      onChange={(v) => setNewsForm({ ...newsForm, date: v })}
                      placeholder="12 Jan 2025"
                    />
                  </div>
                  <Field
                    label="ছবির পাথ"
                    value={newsForm.image}
                    onChange={(v) => setNewsForm({ ...newsForm, image: v })}
                    placeholder="/slider/1.webp"
                  />
                  <TextArea
                    label="বিবরণ"
                    value={newsForm.description}
                    onChange={(v) =>
                      setNewsForm({ ...newsForm, description: v })
                    }
                  />
                  <SubmitButton
                    busy={busy}
                    onClick={() =>
                      submit(
                        isFilled(
                          newsForm.title,
                          newsForm.date,
                          newsForm.image,
                          newsForm.description
                        ),
                        () => createNews(newsForm),
                        "নতুন সংবাদ যোগ হয়েছে।",
                        () =>
                          setNewsForm({
                            title: "",
                            category: "",
                            date: "",
                            image: "",
                            description: "",
                          })
                      )
                    }
                  />
                </>
              )}

              {tab === "faculty" && (
                <>
                  <Field
                    label="নাম"
                    value={facultyForm.name}
                    onChange={(v) =>
                      setFacultyForm({ ...facultyForm, name: v })
                    }
                    placeholder="শিক্ষকের নাম"
                  />
                  <Field
                    label="পদবি"
                    value={facultyForm.designation}
                    onChange={(v) =>
                      setFacultyForm({ ...facultyForm, designation: v })
                    }
                    placeholder="Lecturer"
                  />
                  <Field
                    label="শিক্ষাগত যোগ্যতা"
                    value={facultyForm.education}
                    onChange={(v) =>
                      setFacultyForm({ ...facultyForm, education: v })
                    }
                    placeholder="B.Sc. (Honours), M.Sc. in Mathematics"
                  />
                  <Field
                    label="বিশেষত্ব"
                    value={facultyForm.specialization}
                    onChange={(v) =>
                      setFacultyForm({ ...facultyForm, specialization: v })
                    }
                    placeholder="Algebra & Calculus"
                  />
                  <div className="grid grid-cols-2 gap-2">
                    <Field
                      label="ইমেইল"
                      value={facultyForm.email}
                      onChange={(v) =>
                        setFacultyForm({ ...facultyForm, email: v })
                      }
                      placeholder="name@kgc.ac.bd"
                    />
                    <Field
                      label="ফোন"
                      value={facultyForm.phone}
                      onChange={(v) =>
                        setFacultyForm({ ...facultyForm, phone: v })
                      }
                      placeholder="+880 17xx-xxxxxx"
                    />
                  </div>
                  <Field
                    label="ছবির পাথ"
                    value={facultyForm.image}
                    onChange={(v) =>
                      setFacultyForm({ ...facultyForm, image: v })
                    }
                    placeholder="/faculty-head.jpg"
                  />
                  <SubmitButton
                    busy={busy}
                    onClick={() =>
                      submit(
                        isFilled(
                          facultyForm.name,
                          facultyForm.designation,
                          facultyForm.education,
                          facultyForm.specialization,
                          facultyForm.email,
                          facultyForm.phone,
                          facultyForm.image
                        ),
                        () => createFaculty(facultyForm),
                        "নতুন শিক্ষকের তথ্য যোগ হয়েছে।",
                        () =>
                          setFacultyForm({
                            name: "",
                            designation: "Lecturer",
                            education: "",
                            specialization: "",
                            email: "",
                            phone: "",
                            image: "/faculty-head.jpg",
                          })
                      )
                    }
                  />
                </>
              )}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block font-semibold text-[#263238]">{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-1 w-full rounded-lg border border-[#D8E1EA] px-3 py-2 text-[#263238] shadow-xs focus:border-[#166534] focus:outline-none focus:ring-1 focus:ring-[#166534]"
      />
    </div>
  );
}

function TextArea({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <label className="block font-semibold text-[#263238]">{label}</label>
      <textarea
        rows={3}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full rounded-lg border border-[#D8E1EA] px-3 py-2 text-[#263238] shadow-xs focus:border-[#166534] focus:outline-none focus:ring-1 focus:ring-[#166534]"
      />
    </div>
  );
}

function SubmitButton({
  busy,
  onClick,
}: {
  busy: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      disabled={busy}
      onClick={onClick}
      className="w-full rounded-lg bg-[#166534] py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-[#14532d] disabled:opacity-60"
    >
      {busy ? "যাচাই করা হচ্ছে..." : "যোগ করুন"}
    </button>
  );
}
