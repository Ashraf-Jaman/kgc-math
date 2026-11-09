"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

interface Slide {
  id: number;
  image: string;
  badge: string;
  title: string;
  highlight: string;
  subtitle: string;
  primaryBtnText: string;
  primaryBtnLink: string;
  secondaryBtnText: string;
  secondaryBtnLink: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: "/slider/campus-view.jpg",
    badge: "Welcome to KGC",
    title: "Department of",
    highlight: "Mathematics",
    subtitle:
      "Kurigram Government College — Inspiring logical thinking, research excellence, and academic leadership since 1961.",
    primaryBtnText: "Explore Programs",
    primaryBtnLink: "/programs/undergraduate",
    secondaryBtnText: "About Department",
    secondaryBtnLink: "/about-us",
  },
  {
    id: 2,
    image: "/slider/math-board.jpg",
    badge: "Excellence in Pure & Applied Math",
    title: "Empowering Minds Through",
    highlight: "Mathematical Science",
    subtitle:
      "From calculus and algebra to mathematical modeling and computational data analysis, explore world-class pedagogy.",
    primaryBtnText: "Faculty Members",
    primaryBtnLink: "/people/faculty-members",
    secondaryBtnText: "Notice Board",
    secondaryBtnLink: "/notices",
  },
  {
    id: 3,
    image: "/slider/students-study.jpg",
    badge: "Vibrant Academic Community",
    title: "Fostering Innovation &",
    highlight: "Collaborative Learning",
    subtitle:
      "Interactive seminars, problem-solving workshops, and supportive mentorship preparing students for global careers.",
    primaryBtnText: "Undergraduate Program",
    primaryBtnLink: "/programs/undergraduate",
    secondaryBtnText: "Alumni Network",
    secondaryBtnLink: "/alumni",
  },
  {
    id: 4,
    image: "/slider/campus-library.jpg",
    badge: "Knowledge & Resources",
    title: "Comprehensive Library &",
    highlight: "Research Facilities",
    subtitle:
      "Extensive collection of modern mathematical texts, national and international publications, and quiet research spaces.",
    primaryBtnText: "Academic Calendar",
    primaryBtnLink: "/academic-calendar",
    secondaryBtnText: "Contact Us",
    secondaryBtnLink: "/contact",
  },
  {
    id: 5,
    image: "/slider/college-hall.jpg",
    badge: "Heritage of North Bengal",
    title: "A Proud Tradition of",
    highlight: "Academic Achievement",
    subtitle:
      "Consistently cultivating top national graduates and researchers dedicated to national development and science.",
    primaryBtnText: "Postgraduate Program",
    primaryBtnLink: "/programs/postgraduate",
    secondaryBtnText: "Latest News & Events",
    secondaryBtnLink: "/news-events",
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

  // Autoplay
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
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
      aria-label="Image Carousel Slider"
      className="relative w-full overflow-hidden bg-slate-900 select-none"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Main Slider Container - Large prominent height */}
      <div className="relative h-[480px] sm:h-[540px] md:h-[620px] lg:h-[680px] w-full">
        {slides.map((slide, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={slide.id}
              aria-hidden={!isActive}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              {/* Background Image */}
              <div className="relative h-full w-full overflow-hidden">
                <Image
                  src={slide.image}
                  alt={`${slide.title} ${slide.highlight}`}
                  fill
                  priority={index === 0}
                  className={`object-cover transition-transform duration-[7000ms] ease-out ${
                    isActive ? "scale-105" : "scale-100"
                  }`}
                  sizes="100vw"
                />
                {/* Multi-layered dark gradient overlay for text readability & elegant aesthetic */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0d2a46]/95 via-[#0e355c]/75 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
                <div className="absolute inset-0 bg-[#164a7a]/25 mix-blend-multiply" />
              </div>

              {/* Slide Content */}
              <div className="absolute inset-0 flex items-center">
                <div className="mx-auto w-[calc(100%-40px)] max-w-[1180px] px-2 sm:px-4">
                  <div className="max-w-[760px] text-white">
                    {/* Badge */}
                    <div
                      className={`inline-flex items-center gap-2 rounded-full border border-[#D9A441]/50 bg-[#164A7A]/80 backdrop-blur-md px-4 py-1.5 text-xs sm:text-sm font-semibold text-[#FBE192] shadow-lg transition-all duration-700 delay-100 ${
                        isActive
                          ? "translate-y-0 opacity-100"
                          : "-translate-y-4 opacity-0"
                      }`}
                    >
                      <span className="h-2 w-2 rounded-full bg-[#D9A441] animate-pulse" />
                      <span>{slide.badge}</span>
                    </div>

                    {/* Headline */}
                    <h2
                      className={`mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] drop-shadow-md transition-all duration-700 delay-200 ${
                        isActive
                          ? "translate-y-0 opacity-100"
                          : "translate-y-6 opacity-0"
                      }`}
                    >
                      {slide.title}{" "}
                      <span className="text-[#D9A441] underline decoration-[#2E8B57] decoration-4 underline-offset-8">
                        {slide.highlight}
                      </span>
                    </h2>

                    {/* Subtitle */}
                    <p
                      className={`mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed max-w-[640px] drop-shadow transition-all duration-700 delay-300 ${
                        isActive
                          ? "translate-y-0 opacity-100"
                          : "translate-y-6 opacity-0"
                      }`}
                    >
                      {slide.subtitle}
                    </p>

                    {/* Action Buttons */}
                    <div
                      className={`mt-7 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4 transition-all duration-700 delay-500 ${
                        isActive
                          ? "translate-y-0 opacity-100"
                          : "translate-y-6 opacity-0"
                      }`}
                    >
                      <Link
                        href={slide.primaryBtnLink}
                        className="inline-flex items-center gap-2 rounded-lg bg-[#2E8B57] px-5 sm:px-6 py-3 text-sm sm:text-base font-bold text-white shadow-lg shadow-[#2E8B57]/30 transition hover:bg-[#236b43] hover:scale-105 active:scale-95"
                      >
                        {slide.primaryBtnText}
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                          />
                        </svg>
                      </Link>

                      <Link
                        href={slide.secondaryBtnLink}
                        className="inline-flex items-center gap-2 rounded-lg border-2 border-white/60 bg-white/10 backdrop-blur-md px-5 sm:px-6 py-[10px] text-sm sm:text-base font-bold text-white transition hover:bg-white hover:text-[#164A7A] hover:border-white hover:scale-105 active:scale-95"
                      >
                        {slide.secondaryBtnText}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows */}
      <button
        type="button"
        onClick={prevSlide}
        aria-label="Previous slide"
        className="group absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md border border-white/20 transition hover:bg-[#2E8B57] hover:border-transparent hover:scale-110 active:scale-95"
      >
        <svg
          className="h-6 w-6 transition-transform group-hover:-translate-x-0.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next slide"
        className="group absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md border border-white/20 transition hover:bg-[#2E8B57] hover:border-transparent hover:scale-110 active:scale-95"
      >
        <svg
          className="h-6 w-6 transition-transform group-hover:translate-x-0.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>

      {/* Bottom Bar: Indicators + Counter + Pause/Play toggle */}
      <div className="absolute bottom-5 sm:bottom-8 left-0 right-0 z-20">
        <div className="mx-auto flex w-[calc(100%-40px)] max-w-[1180px] items-center justify-between px-2 sm:px-4">
          {/* Indicators */}
          <div className="flex items-center gap-2 sm:gap-3 bg-black/30 backdrop-blur-md px-3 sm:px-4 py-2 rounded-full border border-white/10">
            {slides.map((slide, index) => {
              const active = index === currentIndex;
              return (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`h-2 sm:h-2.5 rounded-full transition-all duration-500 ${
                    active
                      ? "w-8 sm:w-10 bg-[#D9A441] shadow-[0_0_12px_#D9A441]"
                      : "w-2 sm:w-2.5 bg-white/50 hover:bg-white"
                  }`}
                />
              );
            })}
          </div>

          {/* Slide counter & Play/Pause */}
          <div className="flex items-center gap-3 bg-black/30 backdrop-blur-md px-3 sm:px-4 py-1.5 rounded-full border border-white/10 text-white text-xs sm:text-sm font-semibold">
            <span className="text-[#D9A441]">0{currentIndex + 1}</span>
            <span className="text-white/40">/</span>
            <span className="text-white/70">0{total}</span>

            <button
              type="button"
              onClick={() => setIsPlaying((p) => !p)}
              title={isPlaying ? "Pause autoplay" : "Start autoplay"}
              aria-label={isPlaying ? "Pause autoplay" : "Start autoplay"}
              className="ml-1 text-white/80 hover:text-white transition"
            >
              {isPlaying ? (
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              ) : (
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
