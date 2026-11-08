"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { NoticeItem, getNotices } from "@/lib/api";

export default function NoticesPage() {
  const [notices, setNotices] = useState<NoticeItem[]>([]);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getNotices({ category: filter !== "All" ? filter : undefined, search })
      .then((data) => {
        setNotices(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [filter, search]);

  return (
    <main className="min-h-0 flex-1 bg-[#F4F8FB]">
      {/* Breadcrumb */}
      <div className="border-b border-[#E5EAEF] bg-white">
        <div className="mx-auto w-[calc(100%-40px)] max-w-[1140px] py-3 text-xs font-semibold text-[#53646C]">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5">
            <Link href="/" className="text-[#164A7A] transition hover:text-[#2E8B57]">Home</Link>
            <span className="text-[#8FA5B8]">&gt;</span>
            <span className="text-[#263238]" aria-current="page">Notices</span>
          </nav>
        </div>
      </div>

      <div className="mx-auto w-[calc(100%-40px)] max-w-[1140px] py-10 sm:py-14">
        {/* Header */}
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h1 className="flex items-center gap-3 text-2xl font-extrabold text-[#164A7A] sm:text-3xl">
              <span className="h-7 w-1 shrink-0 rounded-full bg-[#D9A441]" aria-hidden="true" />
              Notice Board
            </h1>
            <p className="mt-2 text-sm text-[#53646C]">
              Official announcements, exam schedules, and circulars of the Department of Mathematics
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full max-w-xs">
            <input
              type="text"
              placeholder="Search notices..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg border border-[#D8E1EA] bg-white px-4 py-2 text-xs text-[#263238] placeholder-[#8FA5B8] shadow-xs focus:border-[#164A7A] focus:outline-none focus:ring-1 focus:ring-[#164A7A] sm:text-sm"
            />
          </div>
        </div>

        {/* Filter categories */}
        <div className="mb-6 flex flex-wrap gap-2">
          {["All", "Exam", "Admission", "General", "Scholarship"].map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setFilter(category)}
              className={`rounded-full px-4 py-1.5 text-xs font-bold transition ${
                filter === category
                  ? "bg-[#164A7A] text-white shadow-xs"
                  : "bg-white text-[#53646C] hover:bg-[#EAF1F8] hover:text-[#164A7A]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Notices list */}
        {loading ? (
          <div className="flex h-32 items-center justify-center text-sm font-semibold text-[#164A7A]">
            Loading notices...
          </div>
        ) : (
          <div className="space-y-4">
            {notices.length > 0 ? (
              notices.map((notice, idx) => (
                <div
                  key={notice._id || `${notice.month}-${notice.day}-${idx}`}
                  className="group flex flex-col gap-4 rounded-xl border border-[#E5EAF0] bg-white p-4 shadow-xs transition hover:border-[#2E8B57] hover:shadow-md sm:flex-row sm:items-center sm:p-5"
                >
                  {/* Date badge */}
                  <div className="flex h-[66px] w-[60px] shrink-0 flex-col overflow-hidden rounded-[9px] border border-[#D8E1EA] bg-white text-center shadow-xs">
                    <span className="flex h-6 items-center justify-center bg-[#164A7A] text-[10px] font-extrabold tracking-[0.12em] text-[#D9A441]">
                      {notice.month}
                    </span>
                    <span className="flex flex-1 items-center justify-center text-[24px] font-extrabold leading-none text-[#164A7A]">
                      {notice.day}
                    </span>
                    <span className="pb-1 text-[10px] font-medium tracking-wide text-[#53646C]">
                      {notice.year}
                    </span>
                  </div>

                  {/* Notice text */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="rounded bg-[#EAF1F8] px-2 py-0.5 text-[11px] font-bold text-[#164A7A]">
                        {notice.category}
                      </span>
                      <span className="text-xs text-[#8FA5B8]">Published: {notice.published}</span>
                    </div>
                    <h2 className="mt-2 text-base font-bold text-[#263238] transition group-hover:text-[#2E8B57] sm:text-lg">
                      {notice.title}
                    </h2>
                  </div>

                  {/* Download / View Button */}
                  <div className="shrink-0">
                    <span className="inline-flex items-center gap-1.5 rounded-lg border border-[#164A7A]/30 bg-[#F4F8FB] px-3.5 py-2 text-xs font-bold text-[#164A7A] transition group-hover:bg-[#2E8B57] group-hover:text-white">
                      <DownloadIcon />
                      <span>Download PDF</span>
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="rounded-xl border border-[#E5EAF0] bg-white p-12 text-center text-[#53646C]">
                No notices found matching your criteria.
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}
