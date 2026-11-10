"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { toBanglaDesignation } from "@/lib/bangla";

type PersonDetail = { label: string; value: string };

type PersonCardProps = {
  index: number;
  name: string;
  designation: string;
  image?: string;
  phone?: string;
  email?: string;
  department?: string;
  badge?: string;
  details?: PersonDetail[];
};

export default function PersonCard({
  index,
  name,
  designation,
  image,
  phone,
  email,
  department = "গণিত বিভাগ",
  badge,
  details = [],
}: PersonCardProps) {
  const [open, setOpen] = useState(false);

  // মোডাল খোলা থাকলে স্ক্রল লক ও Esc দিয়ে বন্ধ
  useEffect(() => {
    if (!open) return;

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  return (
    <>
      <article className="relative flex flex-col overflow-hidden rounded-2xl border border-[#E3EAE3] bg-white shadow-[0_8px_24px_rgb(22_101_52_/_10%)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgb(22_101_52_/_16%)]">
        {/* সবুজ ব্যান্ড */}
        <div className="relative h-[80px] shrink-0 bg-[#166534]">
          {/* নম্বর ব্যাজ */}
          <span className="absolute left-4 top-4 z-30 flex h-7 w-7 items-center justify-center rounded-full bg-white/15 text-[11px] font-bold text-white">
            {index}
          </span>

          {/* বিভাগের পিল — ব্যান্ডের উপরে overlap */}
          <span className="absolute left-1/2 top-3 z-30 max-w-[70%] -translate-x-1/2 truncate rounded-full border border-[#E3EAE3] bg-white px-4 py-1.5 text-[11px] font-bold text-[#263238] shadow-sm sm:text-xs">
            {department}
          </span>
        </div>

        {/* ছবি — সবুজ ব্যান্ডের উপর overlap */}
        <div className="absolute left-1/2 top-[34px] z-20 -translate-x-1/2">
          <div className="relative h-[92px] w-[76px] overflow-hidden rounded-lg border-2 border-white bg-[#EAF3EA] shadow-md ring-2 ring-[#166534]/15">
            {image ? (
              <Image
                src={image}
                alt={name}
                fill
                className="object-cover"
                sizes="76px"
              />
            ) : (
              <span className="flex h-full w-full items-center justify-center bg-[#166534] text-xl font-extrabold text-white">
                {name.trim().charAt(0).toUpperCase()}
              </span>
            )}
          </div>
        </div>

        {/* কার্ড বডি */}
        <div className="flex flex-1 flex-col items-center px-4 pb-4 pt-[76px] text-center">
          <h3 className="text-[15px] font-extrabold leading-snug tracking-wide text-[#1F2937]">
            {name}
          </h3>
          <p className="mt-1 text-[13px] font-bold text-[#16A34A]">
            {toBanglaDesignation(designation)}
          </p>

          {badge && (
            <span className="mt-1.5 rounded-full bg-[#FEF3C7] px-2.5 py-0.5 text-[10px] font-bold text-[#92400E]">
              {badge}
            </span>
          )}

          <span className="mt-2.5 inline-block rounded-full bg-[#F1F5F1] px-3.5 py-1 text-[11px] font-semibold text-[#4B5563]">
            {department}
          </span>

          {phone && (
            <div className="mt-3 flex w-full items-center justify-between gap-2 rounded-lg border border-[#E3EAE3] bg-[#FAFCFA] px-3 py-2 text-[11px] sm:text-xs">
              <span className="flex shrink-0 items-center gap-1.5 font-medium text-[#6B7A70]">
                <PhoneIcon />
                মোবাইল
              </span>
              <a
                href={`tel:${phone.replace(/\s|-/g, "")}`}
                className="truncate font-bold text-[#1F2937] transition hover:text-[#166534]"
              >
                {phone}
              </a>
            </div>
          )}

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="mt-3 flex w-full items-center justify-center gap-1.5 border-t border-dashed border-[#DDE8DE] pt-3 text-[13px] font-bold text-[#16A34A] transition hover:text-[#14532d]"
          >
            প্রোফাইল দেখুন <ArrowIcon />
          </button>
        </div>
      </article>

      {/* প্রোফাইল মোডাল */}
      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="person-modal-title"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative bg-[#166534] px-5 pb-6 pt-5 text-white">
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="বন্ধ করুন"
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/30"
              >
                <CloseIcon />
              </button>

              <div className="flex items-center gap-4">
                <div className="relative h-[76px] w-[62px] shrink-0 overflow-hidden rounded-lg border-2 border-white bg-[#EAF3EA] shadow-md">
                  {image ? (
                    <Image
                      src={image}
                      alt={name}
                      fill
                      className="object-cover"
                      sizes="62px"
                    />
                  ) : (
                    <span className="flex h-full w-full items-center justify-center bg-[#14532d] text-xl font-extrabold text-white">
                      {name.trim().charAt(0).toUpperCase()}
                    </span>
                  )}
                </div>
                <div className="min-w-0">
                  <span className="inline-block rounded-full bg-white/15 px-2.5 py-0.5 text-[10px] font-bold text-[#FBBF24]">
                    {department}
                  </span>
                  <h2
                    id="person-modal-title"
                    className="mt-1.5 text-base font-extrabold leading-snug text-white"
                  >
                    {name}
                  </h2>
                  <p className="mt-0.5 text-xs font-bold text-[#D1FAE5]">
                    {toBanglaDesignation(designation)}
                  </p>
                </div>
              </div>
            </div>

            <div className="px-5 py-5">
              {details.length > 0 && (
                <dl className="space-y-2.5 border-b border-[#EDF3EE] pb-4">
                  {details.map((detail) => (
                    <div
                      key={detail.label}
                      className="flex flex-col gap-0.5 text-xs sm:flex-row sm:gap-3 sm:text-sm"
                    >
                      <dt className="shrink-0 font-semibold text-[#6B7A70] sm:w-28">
                        {detail.label}
                      </dt>
                      <dd className="min-w-0 break-words font-medium text-[#1F2937]">
                        {detail.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              )}

              <div className="mt-4 flex flex-wrap gap-2">
                {phone && (
                  <a
                    href={`tel:${phone.replace(/\s|-/g, "")}`}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-[#166534] px-4 py-2 text-xs font-bold text-white transition hover:bg-[#14532d] sm:text-sm"
                  >
                    <PhoneIcon /> মোবাইলে কল করুন
                  </a>
                )}
                {email && (
                  <a
                    href={`mailto:${email}`}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-[#166534] px-4 py-2 text-xs font-bold text-[#166534] transition hover:bg-[#166534] hover:text-white sm:text-sm"
                  >
                    <MailIcon /> ইমেইল
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
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
      <path d="M21 16.9v2.6a2 2 0 0 1-2.2 2 19.6 19.6 0 0 1-8.5-3 19.3 19.3 0 0 1-6-6 19.6 19.6 0 0 1-3-8.6A2 2 0 0 1 3.3 2h2.6a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L7 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.4c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.8 2Z" />
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

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 fill-none stroke-current"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
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
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}
