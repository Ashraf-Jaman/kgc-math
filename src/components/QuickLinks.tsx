import Link from "next/link";
import type { ReactNode } from "react";

type QuickLink = { label: string; href: string; external?: boolean };
type QuickLinkGroup = {
  title: string;
  icon: ReactNode;
  links: QuickLink[];
};

const groups: QuickLinkGroup[] = [
  {
    title: "আমাদের সম্পর্কে",
    icon: <BuildingIcon />,
    links: [
      { label: "আমাদের সম্পর্কে", href: "/about-us" },
      { label: "শিক্ষকমণ্ডলী", href: "/people/faculty-members" },
      { label: "অফিস ও কারিগরি স্টাফ", href: "/people/office-staffs" },
    ],
  },
  {
    title: "একাডেমিক তথ্য",
    icon: <CapIcon />,
    links: [
      { label: "স্নাতক (সম্মান)", href: "/programs/undergraduate" },
      { label: "স্নাতকোত্তর (এম.এসসি.)", href: "/programs/postgraduate" },
    ],
  },
  {
    title: "নোটিশ ও মিডিয়া",
    icon: <MegaphoneIcon />,
    links: [
      { label: "নোটিশ বোর্ড", href: "/notices" },
      { label: "ফটো গ্যালারি", href: "/gallery" },
      {
        label: "জাতীয় বিশ্ববিদ্যালয়",
        href: "http://www.nu.ac.bd/",
        external: true,
      },
    ],
  },
];

export default function QuickLinks() {
  return (
    <section
      className="bg-[#F1F8F2] px-3 pb-16 sm:px-5 sm:pb-20"
      aria-labelledby="quick-links-heading"
    >
      <div className="mx-auto w-full max-w-[1140px]">
        <div className="mb-6 flex items-center gap-3">
          <span
            className="h-6 w-1.5 shrink-0 rounded-full bg-[#FBBF24]"
            aria-hidden="true"
          />
          <h2
            id="quick-links-heading"
            className="text-xl font-extrabold text-[#14532d] sm:text-2xl"
          >
            প্রয়োজনীয় লিংক
          </h2>
        </div>

        <div className="grid gap-4 sm:gap-5 md:grid-cols-3">
          {groups.map((group) => (
            <div
              key={group.title}
              className="overflow-hidden rounded-xl border border-[#DDE8DE] bg-white shadow-[0_8px_24px_rgb(22_101_52_/_8%)]"
            >
              <div className="flex items-center gap-3 bg-[#166534] px-4 py-3 sm:px-5 sm:py-3.5">
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/15 text-[#FBBF24]"
                  aria-hidden="true"
                >
                  {group.icon}
                </span>
                <h3 className="text-sm font-extrabold text-white sm:text-base">
                  {group.title}
                </h3>
              </div>

              <ul className="space-y-2.5 px-4 py-4 sm:space-y-3 sm:px-5 sm:py-5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-2 text-[13px] font-medium leading-snug text-[#263238] transition hover:text-[#166534] sm:text-sm"
                      >
                        <CheckIcon />
                        <span className="min-w-0 break-words">{link.label}</span>
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="flex items-start gap-2 text-[13px] font-medium leading-snug text-[#263238] transition hover:text-[#166534] sm:text-sm"
                      >
                        <CheckIcon />
                        <span className="min-w-0 break-words hover:underline">
                          {link.label}
                        </span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <span
      className="mt-[1px] flex h-[15px] w-[15px] shrink-0 items-center justify-center rounded-[4px] bg-[#166534] text-white"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-[10px] w-[10px] fill-none stroke-current"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m5 13 4.5 4.5L19 6.5" />
      </svg>
    </span>
  );
}

function BuildingIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[18px] w-[18px] fill-none stroke-current"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 21h18" />
      <path d="M5 21V8.5L12 4l7 4.5V21" />
      <path d="M9.5 21v-5h5v5" />
      <path d="M9.5 10.5h1M13.5 10.5h1" />
    </svg>
  );
}

function CapIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[18px] w-[18px] fill-none stroke-current"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 8.5 12 4l9.5 4.5L12 13 2.5 8.5Z" />
      <path d="M6 10.6V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-5.4" />
      <path d="M21.5 8.5v5" />
    </svg>
  );
}

function MegaphoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[18px] w-[18px] fill-none stroke-current"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 11 18-5v12L3 14v-3Z" />
      <path d="M11.6 16.2 13 21H9l-1.5-6" />
      <path d="M3 11v3" />
    </svg>
  );
}
