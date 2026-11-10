"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const slides = [
  {
    id: 1,
    image: "/slider/1.webp",
    alt: "কুড়িগ্রাম সরকারি কলেজ ক্যাম্পাস ১",
  },
  {
    id: 2,
    image: "/slider/2.webp",
    alt: "কুড়িগ্রাম সরকারি কলেজ ক্যাম্পাস ২",
  },
  {
    id: 3,
    image: "/slider/3.webp",
    alt: "কুড়িগ্রাম সরকারি কলেজ ক্যাম্পাস ৩",
  },
  {
    id: 4,
    image: "/slider/4.webp",
    alt: "কুড়িগ্রাম সরকারি কলেজ ক্যাম্পাস ৪",
  },
  {
    id: 5,
    image: "/slider/5.jpg",
    alt: "কুড়িগ্রাম সরকারি কলেজ ক্যাম্পাস ৫",
  },
  {
    id: 6,
    image: "/slider/6.webp",
    alt: "কুড়িগ্রাম সরকারি কলেজ ক্যাম্পাস ৬",
  },
  {
    id: 7,
    image: "/slider/7.webp",
    alt: "কুড়িগ্রাম সরকারি কলেজ ক্যাম্পাস ৭",
  },
  {
    id: 8,
    image: "/slider/8.webp",
    alt: "কুড়িগ্রাম সরকারি কলেজ ক্যাম্পাস ৮",
  },
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const total = slides.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Autoplay slider fast and smooth (every 2.8 seconds)
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 2800);
    return () => clearInterval(timer);
  }, [isPlaying, nextSlide]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      aria-label="Kurigram Government College Image Slider"
      className="relative w-full overflow-hidden bg-gray-950 select-none group/slider"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slider Viewport with Silky Smooth Sliding Motion */}
      <div className="relative h-[260px] sm:h-[380px] md:h-[480px] lg:h-[560px] xl:h-[620px] w-full overflow-hidden">
        <div
          className="flex h-full w-full transition-transform duration-600 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className="relative h-full w-full shrink-0 overflow-hidden"
              aria-hidden={index !== currentIndex}
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={index === 0}
                className="object-cover object-center"
                sizes="100vw"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        type="button"
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm border border-white/20 transition-all duration-200 hover:bg-[#166534] hover:border-[#166534] hover:scale-110 active:scale-95 focus:outline-none"
      >
        <svg
          className="h-5 w-5 sm:h-6 sm:w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm border border-white/20 transition-all duration-200 hover:bg-[#166534] hover:border-[#166534] hover:scale-110 active:scale-95 focus:outline-none"
      >
        <svg
          className="h-5 w-5 sm:h-6 sm:w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 rounded-full bg-black/40 px-3.5 py-1.5 backdrop-blur-md border border-white/20">
        {slides.map((_, index) => {
          const isActive = index === currentIndex;
          return (
            <button
              key={index}
              type="button"
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none ${
                isActive
                  ? "w-7 bg-[#FBBF24]"
                  : "w-2.5 bg-white/60 hover:bg-white"
              }`}
            />
          );
        })}
      </div>
    </section>
  );
}
