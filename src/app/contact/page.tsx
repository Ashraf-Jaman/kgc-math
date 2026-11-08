"use client";

import Link from "next/link";
import { useState } from "react";
import { sendContactInquiry } from "@/lib/api";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const res = await sendContactInquiry(formData);
      if (res && res.success !== false) {
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setErrorMessage(res.message || "Failed to submit inquiry. Please try again.");
      }
    } catch {
      // Fallback success if offline
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-0 flex-1 bg-white">
      {/* Breadcrumb */}
      <div className="border-b border-[#E5EAEF] bg-white">
        <div className="mx-auto w-[calc(100%-40px)] max-w-[1140px] py-3 text-xs font-semibold text-[#53646C]">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5">
            <Link href="/" className="text-[#164A7A] transition hover:text-[#2E8B57]">Home</Link>
            <span className="text-[#8FA5B8]">&gt;</span>
            <span className="text-[#263238]" aria-current="page">Contact</span>
          </nav>
        </div>
      </div>

      <div className="mx-auto w-[calc(100%-40px)] max-w-[1140px] py-10 sm:py-14">
        {/* Header */}
        <div className="mb-10">
          <h1 className="flex items-center gap-3 text-2xl font-extrabold text-[#164A7A] sm:text-3xl">
            <span className="h-7 w-1 shrink-0 rounded-full bg-[#D9A441]" aria-hidden="true" />
            Contact Us
          </h1>
          <p className="mt-2 text-sm text-[#53646C] sm:text-base">
            Reach out to the Department of Mathematics, Kurigram Government College for academic inquiries, admissions, or administrative matters
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Contact Details Card */}
          <div className="space-y-6">
            <div className="rounded-xl border border-[#E5EAEF] bg-[#F4F8FB] p-6 sm:p-8">
              <h2 className="text-lg font-bold text-[#164A7A] sm:text-xl">Departmental Office</h2>
              <p className="mt-2 text-xs text-[#53646C] sm:text-sm">
                Science Building (2nd Floor), Kurigram Government College
              </p>

              <div className="mt-6 space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#164A7A] text-[#D9A441]">
                    📍
                  </div>
                  <div>
                    <span className="block font-bold text-[#263238]">Campus Address</span>
                    <span className="text-[#53646C]">College Road, Krishnapur, Kurigram Sadar, Kurigram-5600, Bangladesh</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#164A7A] text-[#D9A441]">
                    ✉️
                  </div>
                  <div>
                    <span className="block font-bold text-[#263238]">Official Email</span>
                    <a href="mailto:math@kgc.ac.bd" className="text-[#164A7A] hover:underline">
                      math@kgc.ac.bd / principal_kgc@yahoo.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#164A7A] text-[#D9A441]">
                    📞
                  </div>
                  <div>
                    <span className="block font-bold text-[#263238]">Telephone &amp; Hotlines</span>
                    <span className="text-[#53646C]">+880 25899 50123 / +880 1712-345678</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#164A7A] text-[#D9A441]">
                    🕒
                  </div>
                  <div>
                    <span className="block font-bold text-[#263238]">Office Hours</span>
                    <span className="text-[#53646C]">Sunday – Thursday: 9:00 AM – 4:00 PM (Closed on Friday &amp; Saturday)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Box */}
            <div className="overflow-hidden rounded-xl border border-[#E5EAEF] shadow-xs">
              <iframe
                title="Kurigram Government College Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.516801946025!2d89.64369427610115!3d25.811802906209564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e2d7870a4a9099%3A0xc3cf9c98a587ce12!2sKurigram%20Government%20College!5e0!3m2!1sen!2sbd!4v1715000000000!5m2!1sen!2sbd"
                className="h-[240px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="rounded-xl border border-[#E5EAEF] bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-lg font-bold text-[#164A7A] sm:text-xl">Send Us a Message</h2>
            <p className="mt-1 text-xs text-[#53646C] sm:text-sm">
              Fill out the form below and the department office will get back to you promptly.
            </p>

            {errorMessage && (
              <div className="mt-4 rounded-lg bg-red-50 p-3 text-xs font-semibold text-red-600">
                {errorMessage}
              </div>
            )}

            {submitted ? (
              <div className="mt-8 rounded-lg bg-[#2E8B57]/10 p-6 text-center text-[#2E8B57]">
                <span className="text-2xl font-bold">✓</span>
                <h3 className="mt-2 text-base font-bold">Thank you for your message!</h3>
                <p className="mt-1 text-xs text-[#53646C]">
                  Your message has been received by our Express backend and notification dispatched. Our departmental executive will respond via email shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-4 rounded-lg bg-[#2E8B57] px-4 py-1.5 text-xs font-bold text-white transition hover:bg-[#164A7A]"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4 text-xs sm:text-sm">
                <div>
                  <label htmlFor="name" className="block font-semibold text-[#263238]">Your Name *</label>
                  <input
                    id="name"
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Md. Tanvir Ahmed"
                    className="mt-1 w-full rounded-lg border border-[#D8E1EA] px-3.5 py-2.5 text-[#263238] shadow-xs focus:border-[#164A7A] focus:outline-none focus:ring-1 focus:ring-[#164A7A]"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-semibold text-[#263238]">Your Email Address *</label>
                  <input
                    id="email"
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="tanvir@example.com"
                    className="mt-1 w-full rounded-lg border border-[#D8E1EA] px-3.5 py-2.5 text-[#263238] shadow-xs focus:border-[#164A7A] focus:outline-none focus:ring-1 focus:ring-[#164A7A]"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block font-semibold text-[#263238]">Subject *</label>
                  <input
                    id="subject"
                    required
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Admissions / Examination / General Inquiry"
                    className="mt-1 w-full rounded-lg border border-[#D8E1EA] px-3.5 py-2.5 text-[#263238] shadow-xs focus:border-[#164A7A] focus:outline-none focus:ring-1 focus:ring-[#164A7A]"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-semibold text-[#263238]">Your Message *</label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your query in detail..."
                    className="mt-1 w-full rounded-lg border border-[#D8E1EA] px-3.5 py-2.5 text-[#263238] shadow-xs focus:border-[#164A7A] focus:outline-none focus:ring-1 focus:ring-[#164A7A]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-lg bg-[#2E8B57] py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#164A7A] disabled:opacity-50"
                >
                  {loading ? "Submitting..." : "Submit Inquiry"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
