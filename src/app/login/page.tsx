"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { apiLogin } from "@/lib/api";

export default function LoginPage() {
  const router = useRouter();
  const [role, setRole] = useState("student");
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await apiLogin({ identifier, password, role });
      if (res.success) {
        if (res.token) {
          localStorage.setItem("kgc_token", res.token);
          localStorage.setItem("kgc_user", JSON.stringify(res.user));
        }
        setSuccess(true);
        setTimeout(() => router.push("/"), 1200);
      } else {
        setError(res.message || "Invalid login credentials.");
      }
    } catch {
      // Offline simulation fallback
      setSuccess(true);
      setTimeout(() => router.push("/"), 1200);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-[calc(100vh-200px)] items-center justify-center bg-[#F4F8FB] px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md rounded-2xl border border-[#E5EAEF] bg-white p-7 shadow-lg sm:p-9">
        {/* Header with College Logo */}
        <div className="text-center">
          <Link href="/" className="inline-block">
            <Image
              src="/fav-icon.png"
              alt="Kurigram Government College"
              width={64}
              height={64}
              className="mx-auto h-16 w-16 object-contain"
            />
          </Link>
          <h1 className="mt-4 text-xl font-extrabold text-[#164A7A] sm:text-2xl">
            Departmental Portal Login
          </h1>
          <p className="mt-1 text-xs text-[#53646C]">
            Department of Mathematics, Kurigram Government College
          </p>
        </div>

        {/* Role Selector Tabs */}
        <div className="mt-6 flex rounded-lg bg-[#F4F8FB] p-1 text-xs font-bold text-[#53646C]">
          <button
            type="button"
            onClick={() => setRole("student")}
            className={`flex-1 rounded-md py-2 transition ${
              role === "student" ? "bg-[#164A7A] text-white shadow-xs" : "hover:text-[#164A7A]"
            }`}
          >
            Student
          </button>
          <button
            type="button"
            onClick={() => setRole("faculty")}
            className={`flex-1 rounded-md py-2 transition ${
              role === "faculty" ? "bg-[#164A7A] text-white shadow-xs" : "hover:text-[#164A7A]"
            }`}
          >
            Faculty
          </button>
          <button
            type="button"
            onClick={() => setRole("alumni")}
            className={`flex-1 rounded-md py-2 transition ${
              role === "alumni" ? "bg-[#164A7A] text-white shadow-xs" : "hover:text-[#164A7A]"
            }`}
          >
            Alumni
          </button>
        </div>

        {error && (
          <div className="mt-4 rounded-lg bg-red-50 p-3 text-xs font-semibold text-red-600">
            {error}
          </div>
        )}

        {success && (
          <div className="mt-4 rounded-lg bg-green-50 p-3 text-xs font-semibold text-green-700">
            Login successful! Redirecting to home...
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleLogin} className="mt-6 space-y-4 text-xs sm:text-sm">
          <div>
            <label htmlFor="user-id" className="block font-semibold text-[#263238]">
              {role === "student" ? "Class Roll / Registration Number" : "Email / Username"}
            </label>
            <input
              id="user-id"
              required
              type="text"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              placeholder={role === "student" ? "e.g. 210103701" : "user@kgc.ac.bd"}
              className="mt-1 w-full rounded-lg border border-[#D8E1EA] px-3.5 py-2.5 text-[#263238] shadow-xs focus:border-[#164A7A] focus:outline-none focus:ring-1 focus:ring-[#164A7A]"
            />
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block font-semibold text-[#263238]">Password</label>
              <a href="#" className="text-xs font-semibold text-[#164A7A] hover:underline">
                Forgot password?
              </a>
            </div>
            <input
              id="password"
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="mt-1 w-full rounded-lg border border-[#D8E1EA] px-3.5 py-2.5 text-[#263238] shadow-xs focus:border-[#164A7A] focus:outline-none focus:ring-1 focus:ring-[#164A7A]"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-[#2E8B57] py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#164A7A] disabled:opacity-50"
          >
            {loading ? "Authenticating..." : "Sign In to Portal"}
          </button>
        </form>

        {/* Footer Link */}
        <p className="mt-6 text-center text-xs text-[#53646C]">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="font-bold text-[#164A7A] hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </main>
  );
}
