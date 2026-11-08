import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Alumni | Department of Mathematics - Kurigram Government College",
  description: "Kurigram Government College Mathematics Alumni Association, network, reunions, and graduate stories.",
};

export default function AlumniPage() {
  return (
    <main className="min-h-0 flex-1 bg-white">
      {/* Breadcrumb */}
      <div className="border-b border-[#E5EAEF] bg-white">
        <div className="mx-auto w-[calc(100%-40px)] max-w-[1140px] py-3 text-xs font-semibold text-[#53646C]">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5">
            <Link href="/" className="text-[#164A7A] transition hover:text-[#2E8B57]">Home</Link>
            <span className="text-[#8FA5B8]">&gt;</span>
            <span className="text-[#263238]" aria-current="page">Alumni</span>
          </nav>
        </div>
      </div>

      <div className="mx-auto w-[calc(100%-40px)] max-w-[1140px] py-10 sm:py-14">
        {/* Header */}
        <div className="mb-10">
          <h1 className="flex items-center gap-3 text-2xl font-extrabold text-[#164A7A] sm:text-3xl">
            <span className="h-7 w-1 shrink-0 rounded-full bg-[#D9A441]" aria-hidden="true" />
            Mathematics Alumni Association
          </h1>
          <p className="mt-2 text-sm text-[#53646C] sm:text-base">
            Connecting generations of mathematicians, educators, researchers, and professionals from Kurigram Government College
          </p>
        </div>

        {/* Hero Section */}
        <div className="rounded-xl border border-[#E5EAEF] bg-[#F4F8FB] p-6 shadow-sm sm:p-10">
          <div className="max-w-3xl">
            <span className="inline-block rounded-full bg-[#164A7A] px-3.5 py-1 text-xs font-bold text-white">
              KGC Math Alumni Network
            </span>
            <h2 className="mt-4 text-xl font-bold text-[#164A7A] sm:text-2xl">
              Stay Connected With Your Alma Mater
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#263238] sm:text-base">
              The Department of Mathematics Alumni Association serves as an enduring bridge between our former graduates and current students. Our alumni are contributing with distinction as civil servants, university professors, research scientists, bankers, and software engineers both in Bangladesh and across the world.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/register"
                className="rounded-lg bg-[#2E8B57] px-5 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-[#164A7A] sm:text-sm"
              >
                Register as an Alumnus
              </Link>
              <Link
                href="/contact"
                className="rounded-lg border border-[#164A7A] px-5 py-2.5 text-xs font-bold text-[#164A7A] transition hover:bg-[#164A7A] hover:text-white sm:text-sm"
              >
                Contact Alumni Office
              </Link>
            </div>
          </div>
        </div>

        {/* Alumni Objectives */}
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          <div className="rounded-xl border border-[#E5EAEF] bg-white p-6 shadow-xs">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#164A7A]/10 text-xl font-bold text-[#164A7A]">
              🎓
            </div>
            <h3 className="mt-4 text-base font-bold text-[#164A7A]">Student Mentorship</h3>
            <p className="mt-2 text-xs leading-relaxed text-[#53646C]">
              Guidance for current undergraduate and master&apos;s students on career paths, higher study scholarships, and competitive civil service exams.
            </p>
          </div>

          <div className="rounded-xl border border-[#E5EAEF] bg-white p-6 shadow-xs">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#2E8B57]/10 text-xl font-bold text-[#2E8B57]">
              🤝
            </div>
            <h3 className="mt-4 text-base font-bold text-[#164A7A]">Reunions &amp; Networking</h3>
            <p className="mt-2 text-xs leading-relaxed text-[#53646C]">
              Annual gatherings, symposiums, and celebratory reunions to rekindle memories and strengthen professional bonds.
            </p>
          </div>

          <div className="rounded-xl border border-[#E5EAEF] bg-white p-6 shadow-xs">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#D9A441]/10 text-xl font-bold text-[#D9A441]">
              🌟
            </div>
            <h3 className="mt-4 text-base font-bold text-[#164A7A]">Scholarship Support</h3>
            <p className="mt-2 text-xs leading-relaxed text-[#53646C]">
              Alumni-sponsored stipends and merit awards for economically underprivileged and exceptionally talented mathematics students.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
