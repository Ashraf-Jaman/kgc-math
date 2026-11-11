"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// বিভাগের ফেসবুক পেজ ও গ্রুপ — প্রয়োজনে এই লিংকগুলো বদলে দিন
const FACEBOOK_PAGE_URL = "https://www.facebook.com/kurigramgc";
const FACEBOOK_GROUP_URL =
  "https://web.facebook.com/groups/3553127428304242/";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#14532d] text-white">
      {/* Main Footer Container */}
      <div className="mx-auto w-[calc(100%-40px)] max-w-[1180px] py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {/* Column 1: Department Info & Contact */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <Image
                src="/fav-icon.png"
                alt="কুড়িগ্রাম সরকারি কলেজ লোগো"
                width={50}
                height={50}
                className="h-[50px] w-[50px] shrink-0 object-contain"
              />
              <div>
                <h3 className="text-base font-extrabold leading-snug text-white">
                  গণিত বিভাগ
                </h3>
                <p className="text-xs font-medium text-[#D1FAE5]">
                  কুড়িগ্রাম সরকারি কলেজ
                </p>
              </div>
            </div>

            <ul className="space-y-4 text-xs text-[#D1FAE5] sm:text-sm">
              <li className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#FBBF24]">
                  <LocationPinIcon />
                </div>
                <span className="leading-snug">
                  কলেজ রোড, কৃষ্ণপুর, কুড়িগ্রাম সদর, কুড়িগ্রাম-৫৬০০, বাংলাদেশ
                </span>
              </li>

              <li className="flex items-center gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#FBBF24]">
                  <MailIcon />
                </div>
                <a
                  href="mailto:math@kgc.ac.bd"
                  className="transition hover:text-[#FBBF24]"
                >
                  math@kgc.ac.bd
                </a>
              </li>

              <li className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#FBBF24]">
                  <PhoneIcon />
                </div>
                <div>
                  <a
                    href="tel:+8802589950123"
                    className="block font-medium text-white transition hover:text-[#FBBF24]"
                  >
                    +৮৮০ ২৫৮৯৯ ৫০১২৩
                  </a>
                  <span className="text-xs text-[#A7F3D0]">
                    EIIN: 122331 | কলেজ কোড: 3001
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 2: Facebook */}
          <div>
            <h4 className="text-base font-bold text-white">আমাদের সাথে যুক্ত থাকুন</h4>
            <div className="mb-5 mt-2 h-[2px] w-9 bg-[#FBBF24]" />

            <p className="text-xs leading-relaxed text-[#D1FAE5] sm:text-sm">
              বিভাগের সর্বশেষ খবর, ইভেন্ট ও কার্যক্রমের ছবি ফেসবুক পেজে প্রকাশ করা হয়।
              নোটিশ ও আপডেট পেতে আমাদের পেজ ফলো করুন এবং গ্রুপে যোগ দিন।
            </p>

            <div className="mt-5 flex flex-wrap gap-2.5">
              <a
                href={FACEBOOK_PAGE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-lg bg-[#1877F2] px-4 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-[#0f5fc4]"
              >
                <FacebookIcon />
                <span>ফেসবুকে ফলো করুন</span>
              </a>

              <a
                href={FACEBOOK_GROUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-lg border border-white/25 bg-white/10 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-white/20"
              >
                <GroupIcon />
                <span>গ্রুপে যোগ দিন</span>
              </a>
            </div>

            <a
              href={FACEBOOK_PAGE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3 transition hover:bg-white/10"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1877F2] text-white">
                <FacebookIcon />
              </span>
              <span className="min-w-0">
                <span className="block truncate text-sm font-bold text-white">
                  গণিত বিভাগ, কুড়িগ্রাম সরকারি কলেজ
                </span>
                <span className="block text-xs text-[#A7F3D0]">
                  Facebook পেজ
                </span>
              </span>
            </a>

            <a
              href={FACEBOOK_GROUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2.5 flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3 transition hover:bg-white/10"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1877F2] text-white">
                <GroupIcon />
              </span>
              <span className="min-w-0">
                <span className="block truncate text-sm font-bold text-white">
                  গণিত বিভাগ — কমিউনিটি গ্রুপ
                </span>
                <span className="block text-xs text-[#A7F3D0]">
                  Facebook গ্রুপ
                </span>
              </span>
            </a>
          </div>

          {/* Column 3: Find Us on Map */}
          <div>
            <h4 className="text-base font-bold text-white">
              মানচিত্রে আমাদের অবস্থান
            </h4>
            <div className="mb-5 mt-2 h-[2px] w-9 bg-[#FBBF24]" />
            <div className="relative h-[155px] w-full overflow-hidden rounded-lg border border-white/20 shadow-md">
              <iframe
                title="কুড়িগ্রাম সরকারি কলেজ মানচিত্র"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.516801946025!2d89.64369427610115!3d25.811802906209564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e2d7870a4a9099%3A0xc3cf9c98a587ce12!2sKurigram%20Government%20College!5e0!3m2!1sen!2sbd!4v1715000000000!5m2!1sen!2sbd"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href="https://maps.google.com/?q=Kurigram+Government+College"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-xs font-bold text-[#FBBF24] transition hover:text-white"
            >
              <MapDirectionsIcon />
              <span>দিকনির্দেশনা দেখুন</span>
            </a>
          </div>
        </div>
      </div>

      {/* Sub-footer Bar */}
      <div className="border-t border-white/10 bg-[#0f3d22] py-5">
        <div className="mx-auto flex w-[calc(100%-40px)] max-w-[1180px] items-center justify-center text-center text-xs text-[#D1FAE5]">
          <p>
            ডিজাইন, ডেভেলপমেন্ট ও রক্ষণাবেক্ষণ —{" "}
            <a
              href="https://ashraf-jaman.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#FBBF24] underline-offset-4 transition-colors hover:text-white hover:underline"
            >
              Md Ashraf Jaman Hridoy
            </a>
          </p>
        </div>
      </div>

      {/* Floating Scroll to Top Button */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="উপরে যান"
          className="fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-[#FBBF24] text-[#14532d] shadow-xl transition-all duration-300 hover:scale-110 hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#FBBF24]"
        >
          <ArrowUpIcon />
        </button>
      )}
    </footer>
  );
}

function LocationPinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 fill-none stroke-current"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
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

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 fill-none stroke-current"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function GroupIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 fill-none stroke-current"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="9" cy="8" r="3.2" />
      <path d="M2.8 19v-1a5.2 5.2 0 0 1 5.2-5.2h2a5.2 5.2 0 0 1 5.2 5.2v1" />
      <circle cx="17.5" cy="9.5" r="2.6" />
      <path d="M18.5 14.2a4.6 4.6 0 0 1 2.7 4.1v.7" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.33V22c4.78-.76 8.43-4.92 8.43-9.94z" />
    </svg>
  );
}

function MapDirectionsIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 fill-none stroke-current"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polygon points="3 11 22 2 13 21 11 13 3 11" />
    </svg>
  );
}

function ArrowUpIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 fill-none stroke-current"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="12" y1="19" x2="12" y2="5" />
      <polyline points="5 12 12 5 19 12" />
    </svg>
  );
}
