"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FacultyItem, getFaculties } from "@/lib/api";
import { toBanglaDesignation, toBanglaNumber } from "@/lib/bangla";

const MAX_FACULTIES = 4;

export default function DepartmentalTeacher() {
  const [faculties, setFaculties] = useState<FacultyItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFaculties()
      .then((data) => {
        if (data && data.length > 0) {
          setFaculties(data.slice(0, MAX_FACULTIES));
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <section
      className="bg-[#F4F8FB] px-3 pb-16 pt-2 sm:px-5 sm:pb-20"
      aria-labelledby="departmental-teacher-heading"
    >
      <div className="mx-auto w-full max-w-[1140px] overflow-hidden rounded-xl bg-white shadow-[0_12px_30px_rgb(22_101_52_/_10%)]">
        {/* Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 bg-[#166534] px-4 py-3.5 text-white sm:px-6 sm:py-4">
          <div className="flex items-center gap-3">
            <span
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15 text-white sm:h-10 sm:w-10"
              aria-hidden="true"
            >
              <TeacherIcon />
            </span>
            <h2
              id="departmental-teacher-heading"
              className="text-base font-extrabold tracking-tight sm:text-xl"
            >
              বিভাগীয় শিক্ষকমণ্ডলী
            </h2>
          </div>

          <Link
            href="/people/faculty-members"
            className="group inline-flex items-center gap-1.5 text-xs font-bold text-[#FBBF24] transition-colors hover:text-white sm:text-sm"
          >
            <span>সকল শিক্ষক দেখুন</span>
            <ArrowIcon />
          </Link>
        </div>

        {/* Teacher Cards */}
        <div className="grid gap-4 p-3 sm:grid-cols-2 sm:p-5">
          {loading
            ? Array.from({ length: MAX_FACULTIES }).map((_, idx) => (
                <div
                  key={`skeleton-${idx}`}
                  className="flex items-stretch gap-4 rounded-xl border border-[#E5EAF0] bg-white p-3"
                >
                  <div className="h-[112px] w-[92px] shrink-0 animate-pulse rounded-lg bg-[#EAF1F6]" />
                  <div className="flex flex-1 flex-col justify-center gap-2">
                    <div className="h-3.5 w-3/4 animate-pulse rounded bg-[#EAF1F6]" />
                    <div className="h-3 w-1/2 animate-pulse rounded bg-[#EAF1F6]" />
                    <div className="h-3 w-2/5 animate-pulse rounded bg-[#EAF1F6]" />
                    <div className="h-5 w-2/3 animate-pulse rounded-full bg-[#EAF1F6]" />
                  </div>
                </div>
              ))
            : faculties.map((faculty, idx) => (
                <Link
                  key={faculty._id || `${faculty.name}-${idx}`}
                  href="/people/faculty-members"
                  className="group flex items-stretch gap-3 rounded-xl border border-[#E5EAF0] bg-white p-3 shadow-[0_4px_14px_rgb(22_101_52_/_8%)] transition duration-200 hover:-translate-y-0.5 hover:border-[#166534] hover:shadow-[0_10px_24px_rgb(22_101_52_/_14%)] sm:gap-4"
                >
                  <div className="relative h-[112px] w-[86px] shrink-0 overflow-hidden rounded-lg bg-[#EAF1F6] sm:w-[92px]">
                    <Image
                      src={faculty.image}
                      alt={faculty.name}
                      fill
                      className="object-cover object-top transition duration-300 group-hover:scale-105"
                      sizes="92px"
                    />
                  </div>

                  <div className="flex min-w-0 flex-1 flex-col justify-center gap-1 py-0.5">
                    <h3 className="truncate text-[13px] font-extrabold uppercase tracking-wide text-[#1F2937] sm:text-[15px]">
                      {faculty.name}
                    </h3>
                    <p className="text-xs font-bold text-[#166534] sm:text-sm">
                      {toBanglaDesignation(faculty.designation)}
                    </p>
                    {faculty.phone && (
                      <p className="flex items-center gap-1.5 text-[11px] font-semibold text-[#263238] sm:text-xs">
                        <WhatsAppIcon />
                        <span className="truncate">{toBanglaNumber(faculty.phone)}</span>
                      </p>
                    )}
                    <span className="mt-1 inline-flex w-fit items-center rounded-full bg-[#166534] px-3 py-1 text-[10px] font-bold text-white sm:text-[11px]">
                      গণিত বিভাগ
                    </span>
                  </div>
                </Link>
              ))}
        </div>
      </div>
    </section>
  );
}

function TeacherIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 fill-none stroke-current"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="13" rx="2" />
      <path d="M12 16v5" />
      <path d="M8.5 21h7" />
      <circle cx="9" cy="8" r="1.6" />
      <path d="M6.8 12.6c.4-1.5 1.3-2.2 2.2-2.2s1.8.7 2.2 2.2" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 shrink-0 fill-[#25D366]" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.05-.52-.099-.148-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5 fill-none stroke-current transition-transform duration-200 group-hover:translate-x-0.5"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}
