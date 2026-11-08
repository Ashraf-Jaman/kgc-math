import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Department of Mathematics - Kurigram Government College",
  description:
    "Learn about the background and history of the Department of Mathematics at Kurigram Government College.",
};

export default function AboutUsPage() {
  return (
    <main className="min-h-0 flex-1 bg-white">
      {/* Breadcrumb Navigation */}
      <div className="border-b border-[#E5EAEF] bg-white">
        <div className="mx-auto w-[calc(100%-40px)] max-w-[1140px] py-3 text-xs font-semibold text-[#53646C]">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5">
            <Link
              href="/"
              className="text-[#164A7A] transition hover:text-[#2E8B57]"
            >
              Home
            </Link>
            <span className="text-[#8FA5B8]">&gt;</span>
            <span className="text-[#263238]" aria-current="page">
              About Us
            </span>
          </nav>
        </div>
      </div>

      {/* Background Section (with soft subtle tinted backdrop matching design) */}
      <section
        className="border-b border-[#F0EAEB] bg-[#FCF6F6] px-4 py-12 sm:px-6 sm:py-16 lg:py-20"
        aria-labelledby="background-heading"
      >
        <div className="mx-auto w-full max-w-[1140px]">
          <h1
            id="background-heading"
            className="flex items-center gap-3 text-2xl font-extrabold text-[#1A1A1A] sm:text-3xl"
          >
            <span
              className="h-7 w-1 shrink-0 rounded-full bg-[#9E1B24]"
              aria-hidden="true"
            />
            Background
          </h1>

          <p className="mt-8 max-w-[1080px] text-justify text-sm font-normal leading-[1.9] text-[#263238] sm:text-[15px] sm:leading-[1.95]">
            The Department of Mathematics at Kurigram Government College is one
            of the foundational and most prestigious science departments of this
            historic institution. Dedicated to advancing mathematical thinking
            and scientific inquiry in the northern region of Bangladesh, the
            department provides comprehensive academic programs under the
            affiliation of the National University. The department emphasizes a
            rich, rigorous curriculum spanning pure, applied, and computational
            mathematics, fostering analytical thinking, logical reasoning, and
            problem-solving abilities among students. With experienced faculty
            members and an enduring commitment to academic excellence, the
            department prepares its undergraduate and graduate scholars for
            higher education, research, educational leadership, and competitive
            professional careers across diverse sectors.
          </p>
        </div>
      </section>

      {/* History Section (with clean white backdrop) */}
      <section
        className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:py-20"
        aria-labelledby="history-heading"
      >
        <div className="mx-auto w-full max-w-[1140px]">
          <h2
            id="history-heading"
            className="flex items-center gap-3 text-2xl font-extrabold text-[#1A1A1A] sm:text-3xl"
          >
            <span
              className="h-7 w-1 shrink-0 rounded-full bg-[#9E1B24]"
              aria-hidden="true"
            />
            History
          </h2>

          <p className="mt-8 max-w-[1080px] text-justify text-sm font-normal leading-[1.9] text-[#263238] sm:text-[15px] sm:leading-[1.95]">
            Kurigram Government College was established on July 1, 1961,
            originally known as Kurigram College, through the visionary
            leadership and collective patronage of local educators, community
            reformers, and administrative pioneers. The institution began its
            noble mission to illuminate higher education in the Kurigram
            region, initially operating from the Kurigram High School premises
            under founding principal Prof. Kausar Ali before relocating to its
            permanent campus. On March 1, 1980, the college was officially
            nationalized by the government, becoming a premier seat of public
            learning. The academic scope expanded significantly in 1997 with the
            introduction of specialized 4-year Honours degree programs. Since
            then, the Department of Mathematics has grown into a cornerstone of
            the college&apos;s science faculty, consistently nurturing generations of
            scholars and contributing substantially to national education and
            development.
          </p>
        </div>
      </section>
    </main>
  );
}
