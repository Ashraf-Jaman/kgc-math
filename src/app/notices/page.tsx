"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { NoticeItem, getNotices } from "@/lib/api";
import { toBanglaCategory } from "@/lib/bangla";

export default function NoticesPage() {
  const [notices, setNotices] = useState<NoticeItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeNotice, setActiveNotice] = useState<NoticeItem | null>(null);

  useEffect(() => {
    getNotices()
      .then((data) => setNotices(data))
      .catch(() => setNotices([]))
      .finally(() => setLoading(false));
  }, []);

  // মোডাল খোলা থাকলে Esc চাপে বন্ধ হবে ও স্ক্রল লক হবে
  useEffect(() => {
    if (!activeNotice) return;

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveNotice(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [activeNotice]);

  return (
    <main className="min-h-0 flex-1 bg-[#F1F8F2]">
      {/* Breadcrumb */}
      <div className="border-b border-[#E1EBE2] bg-white">
        <div className="mx-auto w-[calc(100%-40px)] max-w-[1140px] py-3 text-xs font-semibold text-[#53646C]">
          <nav aria-label="ব্রেডক্রাম্ব" className="flex items-center gap-1.5">
            <Link href="/" className="text-[#166534] transition hover:text-[#14532d]">
              হোম
            </Link>
            <span className="text-[#8FA5B8]">&gt;</span>
            <span className="text-[#263238]" aria-current="page">
              নোটিশ বোর্ড
            </span>
          </nav>
        </div>
      </div>

      <div className="mx-auto w-[calc(100%-40px)] max-w-[1140px] py-8 sm:py-10">
        <div className="overflow-hidden rounded-xl border border-[#DDE8DE] bg-white shadow-[0_8px_28px_rgb(22_101_52_/_10%)]">
          {/* Card Header */}
          <div className="flex items-center gap-3 bg-[#166534] px-5 py-4 text-white sm:gap-4 sm:px-6 sm:py-5">
            <MegaphoneIcon />
            <h1 className="text-lg font-extrabold sm:text-xl">সকল নোটিশ</h1>
          </div>

          {loading ? (
            <div className="flex h-40 items-center justify-center text-sm font-semibold text-[#166534]">
              নোটিশ লোড হচ্ছে...
            </div>
          ) : notices.length === 0 ? (
            <div className="px-6 py-16 text-center text-sm text-[#53646C]">
              এখন কোনো নোটিশ নেই। শীঘ্রই নতুন নোটিশ প্রকাশ করা হবে।
            </div>
          ) : (
            <div className="w-full">
              {/* টেবিল হেডার — মোবাইলে লুকানো */}
              <div className="hidden border-b border-[#E3E7E3] bg-[#F5F6F6] px-5 py-3.5 text-sm font-extrabold text-[#1F2937] sm:grid sm:grid-cols-[88px_1fr_140px] sm:gap-4">
                <span>তারিখ</span>
                <span>শিরোনাম</span>
                <span className="text-center">ডাউনলোড</span>
              </div>

              <ul>
                {notices.map((notice, idx) => (
                  <li
                    key={notice._id || `${notice.month}-${notice.day}-${idx}`}
                    className={`border-b border-[#EDEFED] transition-colors last:border-b-0 hover:bg-[#F0F8F1] ${
                      idx % 2 === 0 ? "bg-[#F4F5F5]" : "bg-white"
                    }`}
                  >
                    <div className="grid grid-cols-[56px_minmax(0,1fr)_auto] items-center gap-x-3 px-4 py-3.5 sm:grid-cols-[88px_minmax(0,1fr)_140px] sm:gap-x-4 sm:px-5">
                      {/* Date Badge */}
                      <div className="flex h-[56px] w-[56px] flex-col items-center justify-center rounded-md bg-[#166534] text-white sm:h-[58px] sm:w-[58px]">
                        <span className="text-[22px] font-extrabold leading-none">
                          {notice.day}
                        </span>
                        <span className="mt-1 text-[9px] font-semibold uppercase tracking-wide text-[#DCFCE7]">
                          {notice.month} -{notice.year}
                        </span>
                      </div>

                      {/* Title */}
                      <button
                        type="button"
                        onClick={() => setActiveNotice(notice)}
                        className="min-w-0 break-words text-left text-[13px] font-bold leading-snug text-[#1F2937] transition hover:text-[#166534] sm:text-[15px]"
                      >
                        {notice.title}
                      </button>

                      {/* Actions */}
                      <div className="flex items-center gap-2 justify-self-end sm:justify-self-auto sm:justify-center sm:gap-2.5">
                        <button
                          type="button"
                          onClick={() => setActiveNotice(notice)}
                          aria-label={`নোটিশ দেখুন: ${notice.title}`}
                          title="নোটিশ দেখুন"
                          className="flex h-8 w-8 items-center justify-center rounded-full border border-[#C7CDC7] text-[#4B5563] transition hover:border-[#166534] hover:bg-[#166534] hover:text-white sm:h-9 sm:w-9"
                        >
                          <EyeIcon />
                        </button>

                        {notice.fileUrl ? (
                          <a
                            href={notice.fileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`ডাউনলোড: ${notice.title}`}
                            title="ডাউনলোড"
                            className="flex h-8 w-8 items-center justify-center rounded-full border border-[#2563EB] text-[#2563EB] transition hover:bg-[#2563EB] hover:text-white sm:h-9 sm:w-9"
                          >
                            <DownloadIcon />
                          </a>
                        ) : (
                          <span
                            aria-disabled="true"
                            title="ফাইল সংযুক্ত নেই"
                            className="flex h-8 w-8 cursor-not-allowed items-center justify-center rounded-full border border-[#C7CDC7] text-[#A5AFA5] sm:h-9 sm:w-9"
                          >
                            <DownloadIcon />
                          </span>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Notice Details Modal */}
      {activeNotice && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="notice-modal-title"
          onClick={() => setActiveNotice(null)}
        >
          <div
            className="relative w-full max-w-lg overflow-hidden rounded-xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 bg-[#166534] px-5 py-4 text-white">
              <div>
                <span className="text-[11px] font-semibold text-emerald-100">
                  {toBanglaCategory(activeNotice.category)}
                </span>
                <h2 id="notice-modal-title" className="mt-1 text-base font-extrabold leading-snug sm:text-lg">
                  নোটিশের বিবরণ
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setActiveNotice(null)}
                aria-label="বন্ধ করুন"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/30"
              >
                <CloseIcon />
              </button>
            </div>

            <div className="px-5 py-5">
              <p className="text-sm font-bold leading-relaxed text-[#1F2937] sm:text-base">
                {activeNotice.title}
              </p>

              <dl className="mt-4 grid grid-cols-2 gap-3 border-t border-[#EDEFED] pt-4 text-xs sm:text-sm">
                <div>
                  <dt className="text-[#7B8A83]">প্রকাশের তারিখ</dt>
                  <dd className="mt-0.5 font-bold text-[#166534]">
                    {activeNotice.day} {activeNotice.month} {activeNotice.year}
                  </dd>
                </div>
                <div>
                  <dt className="text-[#7B8A83]">প্রকাশিত</dt>
                  <dd className="mt-0.5 font-bold text-[#263238]">
                    {activeNotice.published}
                  </dd>
                </div>
              </dl>

              <div className="mt-6 flex flex-wrap justify-end gap-2.5">
                <button
                  type="button"
                  onClick={() => setActiveNotice(null)}
                  className="rounded-lg border border-[#C7CDC7] px-4 py-2 text-xs font-bold text-[#53646C] transition hover:bg-[#F4F5F5] sm:text-sm"
                >
                  বন্ধ করুন
                </button>
                {activeNotice.fileUrl ? (
                  <a
                    href={activeNotice.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-[#166534] px-4 py-2 text-xs font-bold text-white transition hover:bg-[#14532d] sm:text-sm"
                  >
                    <DownloadIcon /> ডাউনলোড করুন
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 rounded-lg bg-[#EDEFED] px-4 py-2 text-xs font-bold text-[#8A968A] sm:text-sm">
                    ফাইল সংযুক্ত নেই
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

function MegaphoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6 shrink-0 fill-current"
      aria-hidden="true"
    >
      <path d="M3 10.5v3a1.5 1.5 0 0 0 1.5 1.5h1.2l1.6 4.2a1 1 0 0 0 .94.65h1.4a.85.85 0 0 0 .8-1.13l-1.3-3.72h.26l8.9 4.2a1 1 0 0 0 1.44-.9V4.7a1 1 0 0 0-1.44-.9L9.6 8.9H4.5A1.5 1.5 0 0 0 3 10.4Z" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[18px] w-[18px] fill-none stroke-current"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M2.2 12S5.6 5.8 12 5.8 21.8 12 21.8 12 18.4 18.2 12 18.2 2.2 12 2.2 12Z" />
      <circle cx="12" cy="12" r="2.8" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[18px] w-[18px] fill-none stroke-current"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 4v10" />
      <path d="m7.5 10 4.5 4.5 4.5-4.5" />
      <path d="M4.5 19.5h15" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 fill-none stroke-current"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}
