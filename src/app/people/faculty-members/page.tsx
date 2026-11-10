"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FacultyItem, getFaculties } from "@/lib/api";
import PersonCard from "@/components/PersonCard";

export default function FacultyMembersPage() {
  const [facultyList, setFacultyList] = useState<FacultyItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFaculties()
      .then((data) => setFacultyList(data))
      .catch(() => setFacultyList([]))
      .finally(() => setLoading(false));
  }, []);

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
            <span className="text-[#53646C]">লোকবল</span>
            <span className="text-[#8FA5B8]">&gt;</span>
            <span className="text-[#263238]" aria-current="page">
              শিক্ষকমণ্ডলী
            </span>
          </nav>
        </div>
      </div>

      <div className="mx-auto w-[calc(100%-40px)] max-w-[1140px] py-8 sm:py-12">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="flex items-center justify-center gap-3 text-2xl font-extrabold text-[#14532d] sm:text-3xl">
            <span
              className="h-7 w-1 shrink-0 rounded-full bg-[#FBBF24]"
              aria-hidden="true"
            />
            শিক্ষকমণ্ডলী
          </h1>
          <p className="mt-2 text-sm text-[#53646C] sm:text-base">
            গণিত বিভাগ, কুড়িগ্রাম সরকারি কলেজ
          </p>
        </div>

        {loading ? (
          <div className="flex h-64 items-center justify-center text-sm font-semibold text-[#166534]">
            শিক্ষক প্রোফাইল লোড হচ্ছে...
          </div>
        ) : facultyList.length === 0 ? (
          <div className="rounded-xl border border-[#DDE8DE] bg-white p-14 text-center text-sm text-[#53646C]">
            এখন কোনো শিক্ষকের তথ্য নেই।
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {facultyList.map((faculty, idx) => (
              <PersonCard
                key={faculty._id || `${faculty.name}-${idx}`}
                index={idx + 1}
                name={faculty.name}
                designation={faculty.designation}
                image={faculty.image}
                phone={faculty.phone}
                email={faculty.email}
                badge={
                  faculty.role?.toLowerCase().includes("head")
                    ? "বিভাগীয় প্রধান"
                    : undefined
                }
                department="গণিত বিভাগ"
                details={[
                  { label: "শিক্ষাগত যোগ্যতা", value: faculty.education },
                  { label: "বিশেষত্ব", value: faculty.specialization },
                  { label: "ইমেইল", value: faculty.email },
                ]}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
