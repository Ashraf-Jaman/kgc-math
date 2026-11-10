"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { NoticeItem, getNotices } from "@/lib/api";
import { banglaMonths, toBanglaNumber } from "@/lib/bangla";

export default function NoticeBoard() {
  const [notices, setNotices] = useState<NoticeItem[]>([]);

  useEffect(() => {
    getNotices({ limit: 4 }).then((data) => {
      if (data && data.length > 0) {
        setNotices(data);
      }
    });
  }, []);

  return (
    <section className="bg-[#F4F8FB] px-3 pb-16 pt-3 sm:px-5 sm:pb-20 sm:pt-4" aria-labelledby="notice-board-heading">
      <div className="mx-auto w-full max-w-[1140px] overflow-hidden rounded-xl bg-white shadow-[0_12px_30px_rgb(22_101_52_/_10%)]">
        <div className="flex items-center gap-3 bg-[#166534] px-4 py-4 text-white sm:gap-4 sm:px-7 sm:py-5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-4 border-[#FBBF24]/30 bg-[#FBBF24] text-[#14532d] sm:h-12 sm:w-12" aria-hidden="true">
            <MegaphoneIcon />
          </div>
          <div>
            <h2 id="notice-board-heading" className="text-lg font-extrabold sm:text-2xl">নোটিশ বোর্ড</h2>
            <p className="mt-1 text-[11px] text-emerald-100 sm:text-sm">বিভাগের সর্বশেষ ঘোষণা ও বিজ্ঞপ্তি</p>
          </div>
        </div>

        <div className="grid gap-3 px-3 pb-4 pt-3 sm:gap-5 sm:px-5 sm:pb-5 sm:pt-4 md:grid-cols-2 md:px-6 md:pb-6">
          {notices.map((notice, idx) => (
            <Link key={notice._id || `${notice.month}-${notice.day}-${idx}`} href="/notices" className="group flex min-h-[86px] items-center gap-3 rounded-lg border border-[#E5EAF0] bg-white px-3 py-3 transition hover:border-[#166534] hover:bg-[#F0FDF4] sm:min-h-[91px] sm:gap-4 sm:px-4">
              <div className="flex h-[66px] w-[56px] shrink-0 flex-col overflow-hidden rounded-[9px] border border-[#D8E1EA] bg-white text-center shadow-[0_3px_8px_rgb(22_101_52_/_10%)] sm:h-[68px] sm:w-[62px]">
                <span className="flex h-6 items-center justify-center bg-[#166534] text-[10px] font-extrabold tracking-[0.06em] text-[#FBBF24]">
                  {banglaMonths[notice.month?.toUpperCase()] ?? notice.month}
                </span>
                <span className="flex flex-1 items-center justify-center text-[25px] font-extrabold leading-none text-[#166534]">{toBanglaNumber(notice.day)}</span>
                <span className="pb-1 text-[10px] font-medium tracking-wide text-[#53646C]">{toBanglaNumber(notice.year)}</span>
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="line-clamp-2 break-words text-sm font-bold leading-5 text-[#263238] group-hover:text-[#166534] sm:text-lg sm:leading-6">{notice.title}</h3>
                <p className="mt-1 flex items-center gap-1 text-[10px] text-[#53646C] sm:gap-1.5 sm:text-sm"><ClockIcon /> প্রকাশিত: {notice.published}</p>
              </div>
              <ArrowIcon />
            </Link>
          ))}
        </div>

        <div className="flex justify-center px-3 pb-5 md:pb-6">
          <Link href="/notices" className="inline-flex items-center gap-2 rounded-full border-2 border-[#166534] px-5 py-2.5 text-xs font-bold text-[#166534] transition hover:bg-[#14532d] hover:text-white sm:px-6 sm:text-sm">
            সব নোটিশ দেখুন <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}

function MegaphoneIcon() {
  return <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 11 18-5v12L3 14v-3Z" /><path d="M11.6 16.2 13 21H9l-1.5-6" /><path d="M3 11v3" /></svg>;
}

function ClockIcon() {
  return <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>;
}

function ArrowIcon() {
  return <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></svg>;
}
