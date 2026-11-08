"use client";

import Image from "next/image";
import { useState } from "react";

interface MessageItem {
  id: number;
  name: string;
  designation: string;
  department: string;
  image: string;
  message: string;
}

const messages: MessageItem[] = [
  {
    id: 1,
    name: "Md. Sajjadur Rahman",
    designation: "Associate Professor and Head",
    department: "Department of Mathematics, Kurigram Government College",
    image: "/faculty-head.jpg",
    message:
      "Welcome to the Department of Mathematics at Kurigram Government College. Our department is dedicated to providing quality education, fostering analytical problem-solving skills, and instilling a deep appreciation for mathematical sciences among our students. Through an updated academic curriculum, dedicated faculty mentorship, and interactive classroom learning, we strive to build a vibrant academic environment that prepares our undergraduate and postgraduate students for higher research, competitive examinations, and successful professional careers. We are committed to nurturing future scholars who will contribute meaningfully to our nation.",
  },
  {
    id: 2,
    name: "Professor Md. Ataul Haque Khan Chowdhury",
    designation: "Principal",
    department: "Kurigram Government College",
    image: "/principal.jpg",
    message:
      "Kurigram Government College stands as a beacon of higher education and intellectual growth in northern Bangladesh. The Department of Mathematics plays an indispensable role in strengthening scientific temperament, logical inquiry, and academic brilliance across the campus. We take pride in our qualified faculty and motivated students who continually demonstrate excellence in academic pursuits. We remain steadfast in our mission to empower every student with knowledge, integrity, and modern competencies for a brighter future.",
  },
];

export default function MessageFromDepartment() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevMessage = () => {
    setCurrentIndex((prev) => (prev === 0 ? messages.length - 1 : prev - 1));
  };

  const nextMessage = () => {
    setCurrentIndex((prev) => (prev === messages.length - 1 ? 0 : prev + 1));
  };

  const current = messages[currentIndex];

  return (
    <section
      className="bg-[#F4F8FB] px-3 pb-16 pt-2 sm:px-5 sm:pb-24"
      aria-labelledby="department-message-heading"
    >
      <div className="mx-auto w-full max-w-[1140px]">
        {/* Section Header */}
        <div className="mb-6 flex items-center justify-between gap-4 sm:mb-7">
          <h2
            id="department-message-heading"
            className="flex items-center gap-3 text-lg font-extrabold uppercase tracking-wide text-[#1A1A1A] sm:text-2xl"
          >
            <span
              className="h-6 w-[5px] rounded-full bg-[#9E1B24] sm:h-7"
              aria-hidden="true"
            />
            MESSAGE FROM THE DEPARTMENT
          </h2>

          {/* Carousel controls */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={prevMessage}
              aria-label="Previous message"
              className="flex h-8 w-8 items-center justify-center rounded bg-[#9E1B24] text-white shadow-sm transition hover:bg-[#7E151C] focus:outline-none focus:ring-2 focus:ring-[#9E1B24]/40 active:scale-95 sm:h-9 sm:w-9"
            >
              <ChevronLeftIcon />
            </button>
            <button
              type="button"
              onClick={nextMessage}
              aria-label="Next message"
              className="flex h-8 w-8 items-center justify-center rounded bg-[#9E1B24] text-white shadow-sm transition hover:bg-[#7E151C] focus:outline-none focus:ring-2 focus:ring-[#9E1B24]/40 active:scale-95 sm:h-9 sm:w-9"
            >
              <ChevronRightIcon />
            </button>
          </div>
        </div>

        {/* Message Card */}
        <div className="relative rounded-xl border border-[#E5EAEF] bg-white p-5 shadow-[0_4px_20px_rgb(22_74_122_/_6%)] sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Author info with avatar */}
            <div className="flex items-center gap-4">
              <div className="relative h-18 w-18 shrink-0 overflow-hidden rounded-full border-4 border-white shadow-md sm:h-20 sm:w-20">
                <Image
                  src={current.image}
                  alt={current.name}
                  fill
                  className="object-cover"
                  sizes="80px"
                  priority
                />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-[#1F2937] sm:text-lg">
                  {current.name}
                </h3>
                <p className="text-sm font-bold text-[#8C6D3B]">
                  {current.designation}
                </p>
                <p className="text-xs font-medium text-[#7E8B95] sm:text-sm">
                  {current.department}
                </p>
              </div>
            </div>

            {/* Decorative Quote Mark */}
            <div
              className="hidden select-none text-right text-5xl font-serif font-black text-[#D8DFE6] sm:block sm:text-6xl"
              aria-hidden="true"
            >
              <QuoteIcon />
            </div>
          </div>

          {/* Divider */}
          <div className="my-5 border-t border-[#EEF2F6]" />

          {/* Message Text */}
          <p className="text-sm italic leading-relaxed text-[#374151] sm:text-[15px] sm:leading-[1.85]">
            {current.message}
          </p>
        </div>
      </div>
    </section>
  );
}

function ChevronLeftIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 fill-none stroke-current"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 fill-none stroke-current"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

function QuoteIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-10 w-10 fill-[#D8DFE6]"
      aria-hidden="true"
    >
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  );
}
