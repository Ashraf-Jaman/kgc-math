"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#0C2B4B] text-white">
      {/* Main Footer Container */}
      <div className="mx-auto w-[calc(100%-40px)] max-w-[1180px] py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Column 1: Department Info & Contact */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <Image
                src="/fav-icon.png"
                alt="Kurigram Government College logo"
                width={50}
                height={50}
                className="h-[50px] w-[50px] shrink-0 object-contain"
              />
              <div>
                <h3 className="text-base font-extrabold leading-snug text-white">
                  Department of Mathematics
                </h3>
                <p className="text-xs font-medium text-[#BAC7D5]">
                  Kurigram Government College
                </p>
              </div>
            </div>

            <ul className="space-y-4 text-xs text-[#BAC7D5] sm:text-sm">
              <li className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#D9A441]">
                  <LocationPinIcon />
                </div>
                <span className="leading-snug">
                  College Road, Krishnapur, Kurigram Sadar, Kurigram-5600, Bangladesh
                </span>
              </li>

              <li className="flex items-center gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#D9A441]">
                  <MailIcon />
                </div>
                <a
                  href="mailto:math@kgc.ac.bd"
                  className="transition hover:text-[#D9A441]"
                >
                  math@kgc.ac.bd
                </a>
              </li>

              <li className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#D9A441]">
                  <PhoneIcon />
                </div>
                <div>
                  <a
                    href="tel:+8802589950123"
                    className="block font-medium text-white transition hover:text-[#D9A441]"
                  >
                    +880 25899 50123
                  </a>
                  <span className="text-xs text-[#8FA5B8]">
                    EIIN: 122331 | College Code: 3001
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-base font-bold text-white">Quick Links</h4>
            <div className="mb-5 mt-2 h-[2px] w-9 bg-[#D9A441]" />
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/"
                  className="group inline-flex items-center gap-2 text-[#BAC7D5] transition hover:text-[#D9A441]"
                >
                  <span className="text-xs text-[#D9A441] transition group-hover:translate-x-0.5">
                    &gt;
                  </span>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/people/faculty-members"
                  className="group inline-flex items-center gap-2 text-[#BAC7D5] transition hover:text-[#D9A441]"
                >
                  <span className="text-xs text-[#D9A441] transition group-hover:translate-x-0.5">
                    &gt;
                  </span>
                  <span>Faculty Members</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/notices"
                  className="group inline-flex items-center gap-2 text-[#BAC7D5] transition hover:text-[#D9A441]"
                >
                  <span className="text-xs text-[#D9A441] transition group-hover:translate-x-0.5">
                    &gt;
                  </span>
                  <span>Notices</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/academic-calendar"
                  className="group inline-flex items-center gap-2 text-[#BAC7D5] transition hover:text-[#D9A441]"
                >
                  <span className="text-xs text-[#D9A441] transition group-hover:translate-x-0.5">
                    &gt;
                  </span>
                  <span>Academic Calendar</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 text-[#BAC7D5] transition hover:text-[#D9A441]"
                >
                  <span className="text-xs text-[#D9A441] transition group-hover:translate-x-0.5">
                    &gt;
                  </span>
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Other Links */}
          <div>
            <h4 className="text-base font-bold text-white">Other Links</h4>
            <div className="mb-5 mt-2 h-[2px] w-9 bg-[#D9A441]" />
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/webmail"
                  className="group inline-flex items-center gap-2 text-[#BAC7D5] transition hover:text-[#D9A441]"
                >
                  <span className="text-xs text-[#D9A441] transition group-hover:translate-x-0.5">
                    &gt;
                  </span>
                  <span>Webmail</span>
                </Link>
              </li>
              <li>
                <a
                  href="https://kurigramgc.college.gov.bd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-[#BAC7D5] transition hover:text-[#D9A441]"
                >
                  <span className="text-xs text-[#D9A441] transition group-hover:translate-x-0.5">
                    &gt;
                  </span>
                  <span>KGC Official Portal</span>
                </a>
              </li>
              <li>
                <a
                  href="http://www.nu.ac.bd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-[#BAC7D5] transition hover:text-[#D9A441]"
                >
                  <span className="text-xs text-[#D9A441] transition group-hover:translate-x-0.5">
                    &gt;
                  </span>
                  <span>National University (NU)</span>
                </a>
              </li>
              <li>
                <Link
                  href="/citizen-charter"
                  className="group inline-flex items-center gap-2 text-[#BAC7D5] transition hover:text-[#D9A441]"
                >
                  <span className="text-xs text-[#D9A441] transition group-hover:translate-x-0.5">
                    &gt;
                  </span>
                  <span>Citizen Charter</span>
                </Link>
              </li>
              <li>
                <a
                  href="http://www.dshe.gov.bd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-[#BAC7D5] transition hover:text-[#D9A441]"
                >
                  <span className="text-xs text-[#D9A441] transition group-hover:translate-x-0.5">
                    &gt;
                  </span>
                  <span>DSHE</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Find Us on Map */}
          <div>
            <h4 className="text-base font-bold text-white">Find Us on Map</h4>
            <div className="mb-5 mt-2 h-[2px] w-9 bg-[#D9A441]" />
            <div className="relative h-[155px] w-full overflow-hidden rounded-lg border border-white/20 shadow-md">
              <iframe
                title="Kurigram Government College Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.516801946025!2d89.64369427610115!3d25.811802906209564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e2d7870a4a9099%3A0xc3cf9c98a587ce12!2sKurigram%20Government%20College!5e0!3m2!1sen!2sbd!4v1715000000000!5m2!1sen!2sbd"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href="https://maps.google.com/?q=Kurigram+Government+College"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-xs font-bold text-[#D9A441] transition hover:text-white"
            >
              <MapDirectionsIcon />
              <span>Get directions</span>
            </a>
          </div>
        </div>
      </div>

      {/* Sub-footer Bar */}
      <div className="border-t border-white/10 bg-[#081F37] py-5">
        <div className="mx-auto flex w-[calc(100%-40px)] max-w-[1180px] flex-col items-center justify-between gap-3 text-center text-xs text-[#BAC7D5] sm:flex-row sm:text-left">
          <p>© 2026 Department of Mathematics, Kurigram Government College. All Rights Reserved.</p>
          <p>
            Design, Development and Maintenance by{" "}
            <a
              href="https://ashraf-jaman.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-orange-400 underline-offset-4 transition-colors hover:text-orange-300 hover:underline"
            >
              Md Ashraf Jaman Hridoy
            </a>
          </p>
        </div>
      </div>

      {/* Floating Scroll to Top Button */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-[#D9A441] text-[#0C2B4B] shadow-xl transition-all duration-300 hover:scale-110 hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#D9A441]"
        >
          <ArrowUpIcon />
        </button>
      )}
    </footer>
  );
}

function LocationPinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 fill-none stroke-current"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MapDirectionsIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 fill-none stroke-current"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polygon points="3 11 22 2 13 21 11 13 3 11" />
    </svg>
  );
}

function ArrowUpIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 fill-none stroke-current"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="12" y1="19" x2="12" y2="5" />
      <polyline points="5 12 12 5 19 12" />
    </svg>
  );
}
