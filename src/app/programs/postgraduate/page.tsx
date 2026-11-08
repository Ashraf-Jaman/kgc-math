import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Postgraduate Program | Department of Mathematics - Kurigram Government College",
  description: "M.Sc. in Mathematics postgraduate program curriculum, research fields, and admission details at Kurigram Government College.",
};

const mastersCourses = [
  "Advanced Topology",
  "Differential Geometry & Tensor Calculus",
  "Advanced Fluid Dynamics",
  "Operations Research & Linear Programming",
  "Advanced Numerical Analysis with MATLAB / Python",
  "Fuzzy Mathematics & Applications",
  "Mathematical Methods & Integral Equations",
  "Graph Theory & Discrete Structures",
  "Project / Thesis & Comprehensive Viva-Voce",
];

export default function PostgraduatePage() {
  return (
    <main className="min-h-0 flex-1 bg-white">
      {/* Breadcrumb */}
      <div className="border-b border-[#E5EAEF] bg-white">
        <div className="mx-auto w-[calc(100%-40px)] max-w-[1140px] py-3 text-xs font-semibold text-[#53646C]">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5">
            <Link href="/" className="text-[#164A7A] transition hover:text-[#2E8B57]">Home</Link>
            <span className="text-[#8FA5B8]">&gt;</span>
            <span className="text-[#53646C]">Programs</span>
            <span className="text-[#8FA5B8]">&gt;</span>
            <span className="text-[#263238]" aria-current="page">Postgraduate</span>
          </nav>
        </div>
      </div>

      <div className="mx-auto w-[calc(100%-40px)] max-w-[1140px] py-10 sm:py-14">
        {/* Header */}
        <div className="mb-8">
          <h1 className="flex items-center gap-3 text-2xl font-extrabold text-[#164A7A] sm:text-3xl">
            <span className="h-7 w-1 shrink-0 rounded-full bg-[#D9A441]" aria-hidden="true" />
            Master of Science (M.Sc.) in Mathematics
          </h1>
          <p className="mt-3 text-sm text-[#53646C] sm:text-base">
            Affiliated with the National University, Bangladesh | Program: Master of Science (Final) | Duration: 1 Year
          </p>
        </div>

        {/* Overview Card */}
        <div className="rounded-xl border border-[#E5EAEF] bg-[#F4F8FB] p-6 shadow-sm sm:p-8">
          <h2 className="text-lg font-bold text-[#164A7A] sm:text-xl">Program Overview</h2>
          <p className="mt-3 text-sm leading-relaxed text-[#263238] sm:text-[15px]">
            The Master of Science (M.Sc.) in Mathematics at Kurigram Government College offers specialized higher education in advanced pure and applied mathematics. It aims to develop independent research capabilities, analytical depth, and computational expertise for academic teaching, advanced PhD research, and leadership in science and technology.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 border-t border-[#E2E8F0] pt-6 sm:grid-cols-4">
            <div>
              <span className="block text-xs font-medium text-[#7E8B95]">Degree</span>
              <span className="font-bold text-[#164A7A]">M.Sc. in Mathematics</span>
            </div>
            <div>
              <span className="block text-xs font-medium text-[#7E8B95]">Duration</span>
              <span className="font-bold text-[#164A7A]">1 Academic Year</span>
            </div>
            <div>
              <span className="block text-xs font-medium text-[#7E8B95]">Eligible Group</span>
              <span className="font-bold text-[#164A7A]">B.Sc. (Hons) in Math</span>
            </div>
            <div>
              <span className="block text-xs font-medium text-[#7E8B95]">Total Credits</span>
              <span className="font-bold text-[#164A7A]">32 Credits</span>
            </div>
          </div>
        </div>

        {/* Course Modules */}
        <div className="mt-12">
          <h2 className="flex items-center gap-2.5 text-xl font-bold text-[#164A7A] sm:text-2xl">
            <span className="h-6 w-1 rounded-full bg-[#9E1B24]" aria-hidden="true" />
            Specialized Courses &amp; Research Modules
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {mastersCourses.map((course, idx) => (
              <div key={course} className="flex items-center gap-3 rounded-lg border border-[#E5EAEF] bg-white p-4 shadow-sm transition hover:border-[#164A7A] hover:bg-[#F9FCFF]">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#164A7A] text-xs font-bold text-[#D9A441]">
                  {idx + 1}
                </span>
                <span className="text-sm font-semibold text-[#263238]">{course}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Career Opportunities */}
        <div className="mt-12 rounded-xl border border-[#2E8B57]/30 bg-[#F4FAF6] p-6 sm:p-8">
          <h2 className="text-lg font-bold text-[#164A7A] sm:text-xl">Future Pathways &amp; Career Prospects</h2>
          <p className="mt-2 text-sm text-[#53646C]">
            Graduates with an M.Sc. in Mathematics from Kurigram Government College excel across prestigious career domains:
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg bg-white p-4 shadow-xs">
              <h3 className="font-bold text-[#2E8B57]">Academia &amp; Teaching</h3>
              <p className="mt-1 text-xs text-[#53646C]">BCS (General Education Cadre), College Lecturers, University research, and school teaching.</p>
            </div>
            <div className="rounded-lg bg-white p-4 shadow-xs">
              <h3 className="font-bold text-[#2E8B57]">Public Service &amp; Banking</h3>
              <p className="mt-1 text-xs text-[#53646C]">Bangladesh Bank (AD), Public/Private Commercial Banks, BCS Administration, Statistics &amp; Planning.</p>
            </div>
            <div className="rounded-lg bg-white p-4 shadow-xs">
              <h3 className="font-bold text-[#2E8B57]">Data Science &amp; Tech</h3>
              <p className="mt-1 text-xs text-[#53646C]">Data Analyst, Cryptography, Operations Research, Actuarial Science, and Statistical Modelling.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
