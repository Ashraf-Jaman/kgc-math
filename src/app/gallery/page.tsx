"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type GalleryPhoto = {
  src: string;
  alt: string;
};

const photos: GalleryPhoto[] = [
  { src: "/slider/1.webp", alt: "কুড়িগ্রাম সরকারি কলেজ ক্যাম্পাস" },
  { src: "/slider/2.webp", alt: "কলেজের প্রশাসনিক ভবন" },
  { src: "/slider/3.webp", alt: "কলেজের একাডেমিক ভবন" },
  { src: "/slider/4.webp", alt: "ক্যাম্পাসের সবুজ চত্বর" },
  { src: "/slider/5.jpg", alt: "কলেজ ক্যাম্পাসের মূল ফটক" },
  { src: "/slider/6.webp", alt: "ক্যাম্পাসের শিক্ষার্থী পরিবেশ" },
  { src: "/slider/7.webp", alt: "ক্যাম্পাসের লাইব্রেরি এলাকা" },
  { src: "/slider/8.webp", alt: "ক্যাম্পাসের খেলার মাঠ" },
  {
    src: "/slider/science-show-2021-students.jpg",
    alt: "বিজ্ঞান শো ২০২০-২১ — বিভাগের শিক্ষার্থীদের দলীপ ছবি",
  },
  {
    src: "/slider/science-show-2021-prize.jpg",
    alt: "বিজ্ঞান শো ২০২০-২১ — পুরস্কার বিতরণ অনুষ্ঠান",
  },
  {
    src: "/slider/science-show-2021-winners.jpg",
    alt: "বিজ্ঞান শো ২০২০-২১ — বিজয়ী শিক্ষার্থীদের সঙ্গে বিভাগীয় শিক্ষক মহোদয়",
  },
];

export default function GalleryPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const activePhoto = activeIndex !== null ? photos[activeIndex] : null;

  const closeLightbox = () => setActiveIndex(null);

  const showNext = () => {
    setActiveIndex((index) => (index === null ? index : (index + 1) % photos.length));
  };

  const showPrev = () => {
    setActiveIndex((index) =>
      index === null ? index : (index - 1 + photos.length) % photos.length
    );
  };

  // কীবোর্ড নেভিগেশন ও স্ক্রল লক
  useEffect(() => {
    if (activeIndex === null) return;

    const handleKey = (event: KeyboardEvent) => {
      const total = photos.length;
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowRight") {
        setActiveIndex((index) => (index === null ? index : (index + 1) % total));
      }
      if (event.key === "ArrowLeft") {
        setActiveIndex((index) =>
          index === null ? index : (index - 1 + total) % total
        );
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [activeIndex]);

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
              গ্যালারি
            </span>
          </nav>
        </div>
      </div>

      <div className="mx-auto w-[calc(100%-40px)] max-w-[1140px] py-8 sm:py-12">
        {/* Header */}
        <div className="mb-6 flex flex-col justify-between gap-3 sm:mb-8 sm:flex-row sm:items-end">
          <div>
            <h1 className="flex items-center gap-3 text-2xl font-extrabold text-[#14532d] sm:text-3xl">
              <span
                className="h-7 w-1 shrink-0 rounded-full bg-[#FBBF24]"
                aria-hidden="true"
              />
              ফটো গ্যালারি
            </h1>
            <p className="mt-2 text-sm text-[#53646C] sm:text-base">
              কুড়িগ্রাম সরকারি কলেজ ক্যাম্পাস ও গণিত বিভাগের কার্যক্রমের মুহূর্ত
            </p>
          </div>
          <p className="text-xs font-semibold text-[#53646C] sm:text-sm">
            মোট ছবি:{" "}
            <span className="font-extrabold text-[#166534]">{photos.length}</span>
          </p>
        </div>

        {/* Photo Grid */}
        <section aria-labelledby="photo-gallery-heading">
          <h2 id="photo-gallery-heading" className="sr-only">
            ফটো গ্যালারি
          </h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
            {photos.map((photo, index) => (
              <button
                key={photo.src}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`বড় করে দেখুন: ${photo.alt}`}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-[#DDE8DE] bg-[#EAF1F6] text-left shadow-xs focus:outline-none focus:ring-2 focus:ring-[#166534]"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 transition duration-300 group-hover:opacity-100" />
                <span className="absolute inset-x-0 bottom-0 translate-y-2 p-3 text-[11px] font-semibold leading-snug text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:text-xs">
                  {photo.alt}
                </span>
              </button>
            ))}
          </div>
        </section>
      </div>

      {/* Lightbox */}
      {activePhoto && activeIndex !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={activePhoto.alt}
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="বন্ধ করুন"
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/25"
          >
            <CloseIcon />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPrev();
            }}
            aria-label="আগের ছবি"
            className="absolute left-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/25 sm:left-6 sm:h-12 sm:w-12"
          >
            <ChevronLeftIcon />
          </button>

          <div
            className="relative w-full max-w-4xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative aspect-[16/10] w-full">
              <Image
                src={activePhoto.src}
                alt={activePhoto.alt}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>
            <p className="mt-3 text-center text-sm font-semibold text-white">
              {activePhoto.alt}
            </p>
            <p className="mt-1 text-center text-xs text-white/60">
              {activeIndex + 1} / {photos.length}
            </p>
          </div>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label="পরের ছবি"
            className="absolute right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/25 sm:right-6 sm:h-12 sm:w-12"
          >
            <ChevronRightIcon />
          </button>
        </div>
      )}
    </main>
  );
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 fill-none stroke-current"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

function ChevronLeftIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 fill-none stroke-current"
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
      className="h-5 w-5 fill-none stroke-current"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}
