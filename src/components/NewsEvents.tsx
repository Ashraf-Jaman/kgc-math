"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NewsItem, getNews } from "@/lib/api";

export default function NewsEvents() {
  const [events, setEvents] = useState<NewsItem[]>([]);

  useEffect(() => {
    getNews({ limit: 3 }).then((data) => {
      if (data && data.length > 0) {
        setEvents(data);
      }
    });
  }, []);

  return (
    <section className="bg-[#F4F8FB] px-3 pb-16 pt-2 sm:px-5 sm:pb-20" aria-labelledby="news-events-heading">
      <div className="mx-auto w-full max-w-[1140px]">
        <div className="mb-8 flex items-center justify-between gap-4 sm:mb-10">
          <h2 id="news-events-heading" className="flex items-center gap-3 text-2xl font-extrabold text-[#164A7A] sm:text-[28px]">
            <span className="h-7 w-1 rounded-full bg-[#D9A441]" aria-hidden="true" />
            News and Events
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event, idx) => (
            <article
              key={event._id || `${event.title}-${idx}`}
              className="group flex flex-col overflow-hidden rounded-xl border border-[#E5EAF0] bg-white shadow-[0_8px_20px_rgb(22_74_122_/_8%)] transition duration-200 hover:-translate-y-1.5 hover:shadow-[0_16px_32px_rgb(22_74_122_/_14%)]"
            >
              {/* Taller image banner */}
              <div className="relative h-[230px] shrink-0 overflow-hidden bg-[#EAF1F6] sm:h-[260px]">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Elongated content area */}
              <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                <div>
                  {/* Date badge */}
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#164A7A]">
                    <CalendarIcon />
                    <span>{event.date}</span>
                  </div>

                  <h3 className="mt-3 text-base font-extrabold leading-snug text-[#263238] transition group-hover:text-[#2E8B57] sm:text-lg">
                    {event.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-[#53646C]">
                    {event.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-1.5 border-t border-[#F0F4F8] pt-4 text-xs font-bold uppercase tracking-wider text-[#164A7A] transition group-hover:text-[#2E8B57]">
                  <span>Read Details</span>
                  <ArrowIcon />
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link href="/news-events" className="inline-flex items-center gap-2 rounded-full border-2 border-[#164A7A] px-6 py-2.5 text-sm font-bold text-[#164A7A] transition hover:bg-[#2E8B57] hover:text-white">
            View all <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}
