"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
  const [role, setRole] = useState("student");
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="flex min-h-[calc(100vh-200px)] items-center justify-center bg-[#F4F8FB] px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-lg rounded-2xl border border-[#E5EAEF] bg-white p-7 shadow-lg sm:p-9">
        {/* Header */}
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
            Create Department Account
          </h1>
          <p className="mt-1 text-xs text-[#53646C]">
            Department of Mathematics, Kurigram Government College
          </p>
        </div>

        {submitted ? (
          <div className="mt-8 rounded-xl bg-[#2E8B57]/10 p-6 text-center text-[#2E8B57]">
            <span className="text-3xl font-bold">✓</span>
            <h2 className="mt-2 text-base font-bold">Registration Successful!</h2>
            <p className="mt-1 text-xs text-[#53646C]">
              Your account application has been submitted to the departmental administrator. You will receive an activation email shortly.
            </p>
            <Link
              href="/login"
              className="mt-5 inline-block rounded-lg bg-[#2E8B57] px-5 py-2 text-xs font-bold text-white transition hover:bg-[#164A7A]"
            >
              Go to Login
            </Link>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="mt-6 space-y-4 text-xs sm:text-sm"
          >
            {/* Account Type */}
            <div>
              <label htmlFor="role-select" className="block font-semibold text-[#263238]">I am registering as *</label>
              <select
                id="role-select"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="mt-1 w-full rounded-lg border border-[#D8E1EA] bg-white px-3.5 py-2.5 text-[#263238] shadow-xs focus:border-[#164A7A] focus:outline-none focus:ring-1 focus:ring-[#164A7A]"
              >
                <option value="student">Current Student (B.Sc. / M.Sc.)</option>
                <option value="alumni">Alumnus / Former Graduate</option>
                <option value="faculty">Faculty Member / Academic Staff</option>
              </select>
            </div>

            {/* Full Name */}
            <div>
              <label htmlFor="full-name" className="block font-semibold text-[#263238]">Full Name (English) *</label>
              <input
                id="full-name"
                required
                type="text"
                placeholder="e.g. Md. Ashraful Islam"
                className="mt-1 w-full rounded-lg border border-[#D8E1EA] px-3.5 py-2.5 text-[#263238] shadow-xs focus:border-[#164A7A] focus:outline-none focus:ring-1 focus:ring-[#164A7A]"
              />
            </div>

            {/* Roll / Reg number or Session */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="reg-no" className="block font-semibold text-[#263238]">Class Roll / Reg No *</label>
                <input
                  id="reg-no"
                  required
                  type="text"
                  placeholder="e.g. 210103701"
                  className="mt-1 w-full rounded-lg border border-[#D8E1EA] px-3.5 py-2.5 text-[#263238] shadow-xs focus:border-[#164A7A] focus:outline-none focus:ring-1 focus:ring-[#164A7A]"
                />
              </div>
              <div>
                <label htmlFor="session" className="block font-semibold text-[#263238]">Academic Session *</label>
                <input
                  id="session"
                  required
                  type="text"
                  placeholder="e.g. 2021-2022"
                  className="mt-1 w-full rounded-lg border border-[#D8E1EA] px-3.5 py-2.5 text-[#263238] shadow-xs focus:border-[#164A7A] focus:outline-none focus:ring-1 focus:ring-[#164A7A]"
                />
              </div>
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="reg-email" className="block font-semibold text-[#263238]">Email Address *</label>
                <input
                  id="reg-email"
                  required
                  type="email"
                  placeholder="ashraful@example.com"
                  className="mt-1 w-full rounded-lg border border-[#D8E1EA] px-3.5 py-2.5 text-[#263238] shadow-xs focus:border-[#164A7A] focus:outline-none focus:ring-1 focus:ring-[#164A7A]"
                />
              </div>
              <div>
                <label htmlFor="reg-phone" className="block font-semibold text-[#263238]">Mobile Number *</label>
                <input
                  id="reg-phone"
                  required
                  type="tel"
                  placeholder="+880 1700-000000"
                  className="mt-1 w-full rounded-lg border border-[#D8E1EA] px-3.5 py-2.5 text-[#263238] shadow-xs focus:border-[#164A7A] focus:outline-none focus:ring-1 focus:ring-[#164A7A]"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label htmlFor="reg-password" className="block font-semibold text-[#263238]">Create Password *</label>
              <input
                id="reg-password"
                required
                type="password"
                placeholder="At least 6 characters"
                className="mt-1 w-full rounded-lg border border-[#D8E1EA] px-3.5 py-2.5 text-[#263238] shadow-xs focus:border-[#164A7A] focus:outline-none focus:ring-1 focus:ring-[#164A7A]"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-[#2E8B57] py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#164A7A]"
            >
              Complete Registration
            </button>
          </form>
        )}

        <p className="mt-6 text-center text-xs text-[#53646C]">
          Already have an account?{" "}
          <Link href="/login" className="font-bold text-[#164A7A] hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </main>
  );
}
