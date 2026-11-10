"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const academicLinks = [
  { label: "স্নাতক (সম্মান)", href: "/programs/undergraduate" },
  { label: "স্নাতকোত্তর", href: "/programs/postgraduate" },
];

const moreLinks = [
  { label: "আমাদের সম্পর্কে", href: "/about-us" },
  { label: "শিক্ষকমণ্ডলী", href: "/people/faculty-members" },
  { label: "অফিস স্টাফ", href: "/people/office-staffs" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);

  const isActive = (href: string) =>
    href === "/" ? pathname === href : pathname.startsWith(href);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setOpenMobileDropdown(null);
  };

  const toggleMobileDropdown = (name: string) => {
    setOpenMobileDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <header className="sticky top-0 z-50 bg-[#166534] shadow-md">
      <div className="mx-auto flex h-[74px] sm:h-[80px] w-full max-w-[1240px] items-center justify-between px-3 sm:px-6 lg:px-8">
        {/* Left: Logo & Department Info (Left Aligned & in Bangla) */}
        <Link
          href="/"
          className="flex items-center gap-2.5 sm:gap-3 shrink-0 transition-opacity hover:opacity-95"
          aria-label="গণিত বিভাগ - কুড়িগ্রাম সরকারি কলেজ"
          onClick={closeMobileMenu}
        >
          <Image
            src="/Kurigram_Government_College_logo.jpg"
            alt="কুড়িগ্রাম সরকারি কলেজ লোগো"
            width={52}
            height={52}
            priority
            className="h-11 w-11 sm:h-12 sm:w-12 rounded-full object-contain ring-2 ring-white/30 shrink-0 bg-white shadow-sm"
          />
          <div className="flex flex-col text-left items-start justify-center">
            <span className="text-[14px] sm:text-[16px] font-extrabold tracking-tight text-white leading-[1.25]">
              গণিত বিভাগ
            </span>
            <span className="text-[11px] sm:text-[12px] font-medium text-emerald-100 leading-[1.2]">
              বিজ্ঞান ভবন (নিচ তলা)
            </span>
            <span className="text-[11px] sm:text-[12px] font-bold text-[#FBBF24] leading-[1.2]">
              কুড়িগ্রাম সরকারি কলেজ
            </span>
          </div>
        </Link>

        {/* Center/Right: Desktop Navigation Links (No box, Yellowish/Light-Green on Hover & Active) */}
        <nav className="hidden md:flex items-center gap-3 lg:gap-5" aria-label="প্রধান নেভিগেশন">
          <Link
            href="/"
            className={`px-2.5 py-1.5 text-[15px] font-semibold transition-colors duration-200 ${
              isActive("/") && pathname === "/"
                ? "text-[#FBBF24]"
                : "text-white hover:text-[#FBBF24]"
            }`}
          >
            হোম
          </Link>

          <Link
            href="/notices"
            className={`px-2.5 py-1.5 text-[15px] font-semibold transition-colors duration-200 ${
              isActive("/notices")
                ? "text-[#FBBF24]"
                : "text-white hover:text-[#FBBF24]"
            }`}
          >
            নোটিশ
          </Link>

          {/* Gallery */}
          <Link
            href="/gallery"
            className={`px-2.5 py-1.5 text-[15px] font-semibold transition-colors duration-200 ${
              isActive("/gallery")
                ? "text-[#FBBF24]"
                : "text-white hover:text-[#FBBF24]"
            }`}
          >
            গ্যালারি
          </Link>

          {/* Academic Dropdown */}
          <NavDropdown
            label="একাডেমিক"
            links={academicLinks}
            active={isActive("/programs")}
          />

          {/* More Dropdown */}
          <NavDropdown
            label="আরও"
            links={moreLinks}
            active={moreLinks.some((link) => pathname.startsWith(link.href))}
          />
        </nav>

        {/* Right: Login Button (Hover: Text White, BG Dark Green) */}
        <div className="hidden md:flex items-center ml-2">
          <Link
            href="/admin/login"
            className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-2 text-[15px] font-bold text-[#166534] shadow-sm transition-all duration-200 hover:bg-[#14532d] hover:text-white hover:ring-1 hover:ring-white/50 hover:shadow-md"
          >
            লগইন
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className="inline-flex md:hidden items-center justify-center p-2 rounded-md text-white hover:bg-[#14532d] transition"
          aria-expanded={mobileMenuOpen}
          aria-label="নেভিগেশন মেনু পরিবর্তন করুন"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          {mobileMenuOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#14532d] px-4 pt-3 pb-6 shadow-2xl">
          <div className="flex flex-col space-y-1">
            <Link
              href="/"
              onClick={closeMobileMenu}
              className={`rounded-md px-3 py-2.5 text-base font-semibold transition-colors ${
                isActive("/") && pathname === "/" ? "text-[#FBBF24]" : "text-white hover:text-[#FBBF24]"
              }`}
            >
              হোম
            </Link>

            <Link
              href="/notices"
              onClick={closeMobileMenu}
              className={`rounded-md px-3 py-2.5 text-base font-semibold transition-colors ${
                isActive("/notices") ? "text-[#FBBF24]" : "text-white hover:text-[#FBBF24]"
              }`}
            >
              নোটিশ
            </Link>

            {/* Mobile Gallery Link */}
            <Link
              href="/gallery"
              onClick={closeMobileMenu}
              className={`rounded-md px-3 py-2.5 text-base font-semibold transition-colors ${
                isActive("/gallery") ? "text-[#FBBF24]" : "text-white hover:text-[#FBBF24]"
              }`}
            >
              গ্যালারি
            </Link>

            {/* Mobile Academic Accordion */}
            <div>
              <button
                type="button"
                onClick={() => toggleMobileDropdown("academic")}
                className="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-base font-semibold text-white hover:text-[#FBBF24] transition-colors"
              >
                <span>একাডেমিক</span>
                <svg
                  className={`h-4 w-4 text-white/80 transition-transform duration-200 ${
                    openMobileDropdown === "academic" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openMobileDropdown === "academic" && (
                <div className="pl-4 space-y-1 py-1">
                  {academicLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeMobileMenu}
                      className="block rounded-md px-3 py-2 text-sm font-medium text-emerald-100 hover:text-[#FBBF24] transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile More Accordion */}
            <div>
              <button
                type="button"
                onClick={() => toggleMobileDropdown("more")}
                className="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-base font-semibold text-white hover:text-[#FBBF24] transition-colors"
              >
                <span>আরও</span>
                <svg
                  className={`h-4 w-4 text-white/80 transition-transform duration-200 ${
                    openMobileDropdown === "more" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openMobileDropdown === "more" && (
                <div className="pl-4 space-y-1 py-1">
                  {moreLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeMobileMenu}
                      className="block rounded-md px-3 py-2 text-sm font-medium text-emerald-100 hover:text-[#FBBF24] transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Login Button (No Icon, Hover Text White) */}
          <div className="mt-4 pt-4 border-t border-white/10">
            <Link
              href="/admin/login"
              onClick={closeMobileMenu}
              className="flex items-center justify-center rounded-lg bg-white px-5 py-2.5 text-center text-sm font-bold text-[#166534] shadow-sm transition-all duration-200 hover:bg-[#166534] hover:text-white hover:ring-1 hover:ring-white/50"
            >
              লগইন
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function NavDropdown({
  label,
  links,
  active,
}: {
  label: string;
  links: { label: string; href: string }[];
  active: boolean;
}) {
  return (
    <div className="group relative">
      {/* Dropdown Trigger - No box, color changes on hover/active */}
      <button
        type="button"
        className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 text-[15px] font-semibold transition-colors duration-200 ${
          active ? "text-[#FBBF24]" : "text-white hover:text-[#FBBF24]"
        }`}
      >
        <span>{label}</span>
        <svg
          className="h-3.5 w-3.5 transition-all duration-200 ease-out group-hover:rotate-180 group-hover:text-[#FBBF24]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Panel with Green Hover Effect on items */}
      <div className="invisible pointer-events-none absolute left-0 top-full z-50 pt-2 opacity-0 -translate-y-2 scale-95 transition-all duration-200 ease-out group-hover:visible group-hover:pointer-events-auto group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 group-focus-within:visible group-focus-within:pointer-events-auto group-focus-within:opacity-100 group-focus-within:translate-y-0 group-focus-within:scale-100">
        <div className="min-w-[200px] overflow-hidden rounded-xl border border-gray-100 bg-white p-1.5 shadow-[0_12px_32px_rgba(0,0,0,0.18)]">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-2 rounded-lg px-3.5 py-2.5 text-sm font-semibold text-gray-700 transition-all duration-150 hover:bg-[#166534] hover:text-white hover:pl-4.5"
            >
              <span>{link.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
