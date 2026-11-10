"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getNotices } from "@/lib/api";

const initialNotices = [
  "3rd year 1st incourse result 25",
  "অনার্স ১ম বর্ষ ভর্তি সংক্রান্ত বিজ্ঞপ্তি ২০২৫",
  "মাস্টার্স শেষ পর্ব পরীক্ষার সময়সূচি প্রকাশিত",
  "জুলাই আন্দোলনের তালিকা সংক্রান্ত বিজ্ঞপ্তি",
  "৪র্থ বর্ষ টেস্ট পরীক্ষার রুটিন প্রকাশ",
  "গণিত অলিম্পিয়াড ও কর্মশালা নিবন্ধন চলছে",
];

export default function NewsTicker() {
  const [notices, setNotices] = useState<string[]>(initialNotices);

  useEffect(() => {
    getNotices({ limit: 8 }).then((data) => {
      if (data && data.length > 0) {
        setNotices(data.map((n) => n.title));
      }
    });
  }, []);

  return (
    <div className="relative z-30 w-full bg-[#166534] border-y border-[#0f4e27] shadow-sm overflow-hidden select-none">
      <div className="flex items-stretch h-10 sm:h-11">
        {/* Left Badge: LATEST NEWS (Hidden on Mobile) */}
        <div className="hidden sm:flex relative z-20 items-center gap-2 bg-[#0d4622] px-4 sm:px-6 shrink-0 shadow-[4px_0_12px_rgba(0,0,0,0.15)]">
          <span className="text-sm sm:text-base animate-pulse" aria-hidden="true">
            📢
          </span>
          <span className="text-[12px] sm:text-[13px] font-black tracking-wide text-white whitespace-nowrap">
            সর্বশেষ খবর
          </span>
        </div>

        {/* Marquee Ticker Track */}
        <div className="relative flex-1 overflow-hidden flex items-center">
          <div className="animate-news-marquee flex items-center gap-10 whitespace-nowrap will-change-transform">
            {/* First Set */}
            {notices.map((title, idx) => (
              <Link
                key={`a-${idx}`}
                href="/notices"
                className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-semibold text-white hover:text-[#FBBF24] transition-colors shrink-0"
              >
                <span className="text-sm" aria-hidden="true">🚀</span>
                <span>{title}</span>
              </Link>
            ))}
            {/* Duplicate Set for Seamless Infinite Loop */}
            {notices.map((title, idx) => (
              <Link
                key={`b-${idx}`}
                href="/notices"
                className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-semibold text-white hover:text-[#FBBF24] transition-colors shrink-0"
              >
                <span className="text-sm" aria-hidden="true">🚀</span>
                <span>{title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
