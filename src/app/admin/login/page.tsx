"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { adminLogin, setToken } from "@/lib/admin";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await adminLogin(email.trim(), password);

      if (res.success && res.token) {
        // শুধু admin রোলের টোকেনই গ্রহণ করা হয়
        if (res.user?.role !== "admin") {
          setError("এই অ্যাকাউন্টের অ্যাডমিন পর্বোঘর নেই।");
          setLoading(false);
          return;
        }

        setToken(res.token);
        localStorage.setItem("kgc_user", JSON.stringify(res.user));
        router.push("/admin");
      } else {
        setError(res.message || "ইমেইল বা পাসওয়ার্ড সঠিক নয়।");
      }
    } catch {
      setError("সার্ভার সাময়িকভাবে বন্ধ থাকতে পারে। আবার চেষ্টা করুন।");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-[calc(100vh-200px)] items-center justify-center bg-[#F1F8F2] px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <div className="overflow-hidden rounded-2xl border border-[#DDE8DE] bg-white shadow-[0_16px_40px_rgb(22_101_52_/_14%)]">
          {/* সবুজ হেডার */}
          <div className="bg-[#14532d] px-6 py-7 text-center text-white">
            <Link href="/" className="inline-block">
              <Image
                src="/fav-icon.png"
                alt="কুড়িগ্রাম সরকারি কলেজ"
                width={56}
                height={56}
                className="mx-auto h-14 w-14 rounded-full object-contain ring-2 ring-white/30"
              />
            </Link>
            <h1 className="mt-3 text-xl font-extrabold sm:text-2xl">
              অ্যাডমিন প্যানেল
            </h1>
            <p className="mt-1 text-xs text-emerald-100 sm:text-sm">
              গণিত বিভাগ — কুড়িগ্রাম সরকারি কলেজ
            </p>
          </div>

          <div className="px-6 py-7 sm:px-8">
            {/* সতর্কতা */}
            <div className="flex items-start gap-2.5 rounded-lg border border-[#FBBF24]/40 bg-[#FFFBEB] p-3">
              <span className="mt-0.5 shrink-0 text-[#92400E]" aria-hidden="true">
                <LockIcon />
              </span>
              <p className="text-[11px] leading-relaxed text-[#92400E]">
                এই অংশটি শুধু বিভাগীয় প্রশাসকদের জন্য। অনুমতিহীন প্রবেশের
                চেষ্টা করলে তা নথিভুক্ত হবে।
              </p>
            </div>

            {error && (
              <div
                role="alert"
                className="mt-4 rounded-lg border border-red-200 bg-red-50 p-3 text-xs font-semibold text-red-600"
              >
                {error}
              </div>
            )}

            <form onSubmit={handleLogin} className="mt-5 space-y-4 text-xs sm:text-sm">
              <div>
                <label
                  htmlFor="admin-email"
                  className="block font-semibold text-[#263238]"
                >
                  অ্যাডমিন ইমেইল *
                </label>
                <div className="relative mt-1">
                  <span
                    className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#8FA5B8]"
                    aria-hidden="true"
                  >
                    <MailIcon />
                  </span>
                  <input
                    id="admin-email"
                    required
                    type="email"
                    autoComplete="username"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@kgc.ac.bd"
                    className="w-full rounded-lg border border-[#D8E1EA] bg-white py-2.5 pl-9 pr-3.5 text-[#263238] shadow-xs focus:border-[#166534] focus:outline-none focus:ring-1 focus:ring-[#166534]"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="admin-password"
                  className="block font-semibold text-[#263238]"
                >
                  পাসওয়ার্ড *
                </label>
                <div className="relative mt-1">
                  <span
                    className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#8FA5B8]"
                    aria-hidden="true"
                  >
                    <KeyIcon />
                  </span>
                  <input
                    id="admin-password"
                    required
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full rounded-lg border border-[#D8E1EA] bg-white py-2.5 pl-9 pr-10 text-[#263238] shadow-xs focus:border-[#166534] focus:outline-none focus:ring-1 focus:ring-[#166534]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    aria-label={
                      showPassword ? "পাসওয়ার্ড লুকান" : "পাসওয়ার্ড দেখান"
                    }
                    className="absolute right-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded text-[#8FA5B8] transition hover:bg-[#F1F5F1] hover:text-[#166534]"
                  >
                    {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#166534] py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#14532d] disabled:opacity-60"
              >
                {loading ? (
                  "যাচাই করা হচ্ছে..."
                ) : (
                  <>
                    <ShieldIcon />
                    অ্যাডমিন প্যানেলে প্রবেশ করুন
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 border-t border-[#EDF3EE] pt-5 text-center">
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#53646C] transition hover:text-[#166534]"
              >
                <ArrowLeftIcon />
                ওয়েবসাইটে ফিরে যান
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 fill-none stroke-current"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function KeyIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 fill-none stroke-current"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="7.5" cy="15.5" r="4.5" />
      <path d="m10.7 12.3 8.3-8.3" />
      <path d="m17 6 2.5 2.5" />
      <path d="m14.5 8.5 2 2" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 fill-none stroke-current"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M2.2 12S5.6 5.8 12 5.8 21.8 12 21.8 12 18.4 18.2 12 18.2 2.2 12 2.2 12Z" />
      <circle cx="12" cy="12" r="2.8" />
    </svg>
  );
}

function EyeOffIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 fill-none stroke-current"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M10.6 6.1A9.9 9.9 0 0 1 12 6c6.4 0 9.8 6 9.8 6a17 17 0 0 1-3 3.9" />
      <path d="M6.2 6.4A16.6 16.6 0 0 0 2.2 12S5.6 18 12 18a9.7 9.7 0 0 0 4.1-.9" />
      <path d="m3 3 18 18" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 fill-none stroke-current"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3 5 6v6c0 4.2 2.9 7.9 7 9 4.1-1.1 7-4.8 7-9V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 fill-none stroke-current"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="16" height="11" x="4" y="10" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </svg>
  );
}

function ArrowLeftIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 fill-none stroke-current"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M19 12H5" />
      <path d="m11 18-6-6 6-6" />
    </svg>
  );
}
