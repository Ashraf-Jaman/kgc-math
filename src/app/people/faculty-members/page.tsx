"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FacultyItem, getFaculties } from "@/lib/api";

export default function FacultyMembersPage() {
  const [facultyList, setFacultyList] = useState<FacultyItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFaculties().then((data) => {
      setFacultyList(data);
      setLoading(false);
    });
  }, []);

  const head = facultyList[0];
  const otherFaculties = facultyList.slice(1);

  return (
    <main className="min-h-0 flex-1 bg-white">
      {/* Breadcrumb */}
      <div className="border-b border-[#E5EAEF] bg-white">
        <div className="mx-auto w-[calc(100%-40px)] max-w-[1140px] py-3 text-xs font-semibold text-[#53646C]">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5">
            <Link href="/" className="text-[#164A7A] transition hover:text-[#2E8B57]">Home</Link>
            <span className="text-[#8FA5B8]">&gt;</span>
            <span className="text-[#53646C]">People</span>
            <span className="text-[#8FA5B8]">&gt;</span>
            <span className="text-[#263238]" aria-current="page">Faculty Members</span>
          </nav>
        </div>
      </div>

      <div className="mx-auto w-[calc(100%-40px)] max-w-[1140px] py-10 sm:py-14">
        {/* Header */}
        <div className="mb-10">
          <h1 className="flex items-center gap-3 text-2xl font-extrabold text-[#164A7A] sm:text-3xl">
            <span className="h-7 w-1 shrink-0 rounded-full bg-[#D9A441]" aria-hidden="true" />
            Faculty Members
          </h1>
          <p className="mt-2 text-sm text-[#53646C] sm:text-base">
            Department of Mathematics, Kurigram Government College
          </p>
        </div>

        {loading ? (
          <div className="flex h-32 items-center justify-center text-sm font-semibold text-[#164A7A]">
            Loading faculty profiles...
          </div>
        ) : (
          <>
            {/* Head of the Department Highlight */}
            {head && (
              <div className="mb-10 overflow-hidden rounded-xl border-2 border-[#164A7A]/20 bg-[#F4F8FB] p-6 shadow-md sm:p-8">
                <span className="inline-block rounded-full bg-[#164A7A] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#D9A441]">
                  Head of the Department
                </span>
                <div className="mt-6 flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:gap-8">
                  <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-full border-4 border-white shadow-lg sm:h-36 sm:w-36">
                    <Image
                      src={head.image}
                      alt={head.name}
                      fill
                      className="object-cover"
                      sizes="144px"
                      priority
                    />
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h2 className="text-xl font-extrabold text-[#164A7A] sm:text-2xl">{head.name}</h2>
                    <p className="text-sm font-bold text-[#8C6D3B] sm:text-base">{head.designation}</p>
                    <p className="mt-1 text-xs text-[#53646C] sm:text-sm">{head.education}</p>

                    <div className="mt-4 grid gap-2 border-t border-[#DCE4EC] pt-4 text-xs text-[#263238] sm:grid-cols-2 sm:text-sm">
                      <div>
                        <span className="font-semibold text-[#164A7A]">Specialization: </span>
                        {head.specialization}
                      </div>
                      <div>
                        <span className="font-semibold text-[#164A7A]">Email: </span>
                        <a href={`mailto:${head.email}`} className="text-[#164A7A] hover:underline">
                          {head.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Other Faculty Members Grid */}
            <h2 className="mb-6 flex items-center gap-2.5 text-lg font-bold text-[#164A7A] sm:text-xl">
              <span className="h-5 w-1 rounded-full bg-[#9E1B24]" aria-hidden="true" />
              Academic Faculty
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
              {otherFaculties.map((faculty, idx) => (
                <div
                  key={faculty._id || `${faculty.name}-${idx}`}
                  className="flex flex-col gap-4 rounded-xl border border-[#E5EAEF] bg-white p-5 shadow-xs transition hover:border-[#2E8B57] hover:shadow-md sm:flex-row sm:items-center sm:gap-6"
                >
                  <div className="relative mx-auto h-24 w-24 shrink-0 overflow-hidden rounded-full border-2 border-[#E2E8F0] shadow-xs sm:mx-0">
                    <Image
                      src={faculty.image}
                      alt={faculty.name}
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-base font-extrabold text-[#164A7A] sm:text-lg">{faculty.name}</h3>
                    <p className="text-xs font-bold text-[#8C6D3B] sm:text-sm">{faculty.designation}</p>
                    <p className="mt-1 text-xs text-[#53646C]">{faculty.education}</p>
                    <p className="mt-1 text-xs text-[#263238]">
                      <span className="font-semibold text-[#164A7A]">Area: </span>
                      {faculty.specialization}
                    </p>
                    <div className="mt-2 text-xs text-[#53646C]">
                      <a href={`mailto:${faculty.email}`} className="text-[#164A7A] hover:underline">
                        {faculty.email}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
}
