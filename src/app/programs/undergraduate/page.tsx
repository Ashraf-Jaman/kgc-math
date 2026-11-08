import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Undergraduate Program | Department of Mathematics - Kurigram Government College",
  description: "B.Sc. (Honours) in Mathematics program curriculum, admission requirements, and course structure at Kurigram Government College.",
};

const courses = [
  { year: "1st Year", subjects: ["Fundamentals of Mathematics", "Calculus I", "Linear Algebra", "Analytical and Vector Geometry", "Physics I & Chemistry I (Non-Major)"] },
  { year: "2nd Year", subjects: ["Calculus II", "Ordinary Differential Equations", "Fortran Programming", "Historical Development of Mathematics", "Physics II & Computer Fundamentals"] },
  { year: "3rd Year", subjects: ["Abstract Algebra", "Real Analysis", "Numerical Analysis", "Complex Analysis", "Mechanics", "Differential Geometry"] },
  { year: "4th Year", subjects: ["Topology & Functional Analysis", "Partial Differential Equations", "Tensor Analysis", "Fluid Dynamics", "Operations Research", "Mathematical Modeling", "Viva-Voce"] },
];

export default function UndergraduatePage() {
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
            <span className="text-[#263238]" aria-current="page">Undergraduate</span>
          </nav>
        </div>
      </div>

      <div className="mx-auto w-[calc(100%-40px)] max-w-[1140px] py-10 sm:py-14">
        {/* Header */}
        <div className="mb-8">
          <h1 className="flex items-center gap-3 text-2xl font-extrabold text-[#164A7A] sm:text-3xl">
            <span className="h-7 w-1 shrink-0 rounded-full bg-[#D9A441]" aria-hidden="true" />
            Bachelor of Science (B.Sc. Honours) in Mathematics
          </h1>
          <p className="mt-3 text-sm text-[#53646C] sm:text-base">
            Affiliated with the National University, Bangladesh | Program Code: 3701 | Duration: 4 Years
          </p>
        </div>

        {/* Overview Card */}
        <div className="rounded-xl border border-[#E5EAEF] bg-[#F4F8FB] p-6 shadow-sm sm:p-8">
          <h2 className="text-lg font-bold text-[#164A7A] sm:text-xl">Program Overview</h2>
          <p className="mt-3 text-sm leading-relaxed text-[#263238] sm:text-[15px]">
            The 4-year B.Sc. (Honours) program in Mathematics at Kurigram Government College is designed to establish a solid foundation in both pure and applied mathematical sciences. The curriculum develops rigorous logical thinking, analytical abstraction, and mathematical problem-solving skills necessary for academia, scientific research, and professional careers in industry and public service.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 border-t border-[#E2E8F0] pt-6 sm:grid-cols-4">
            <div>
              <span className="block text-xs font-medium text-[#7E8B95]">Degree</span>
              <span className="font-bold text-[#164A7A]">B.Sc. (Honours)</span>
            </div>
            <div>
              <span className="block text-xs font-medium text-[#7E8B95]">Duration</span>
              <span className="font-bold text-[#164A7A]">4 Academic Years</span>
            </div>
            <div>
              <span className="block text-xs font-medium text-[#7E8B95]">Medium</span>
              <span className="font-bold text-[#164A7A]">English &amp; Bengali</span>
            </div>
            <div>
              <span className="block text-xs font-medium text-[#7E8B95]">Total Credits</span>
              <span className="font-bold text-[#164A7A]">128 Credits</span>
            </div>
          </div>
        </div>

        {/* Year-wise Curriculum */}
        <div className="mt-12">
          <h2 className="flex items-center gap-2.5 text-xl font-bold text-[#164A7A] sm:text-2xl">
            <span className="h-6 w-1 rounded-full bg-[#9E1B24]" aria-hidden="true" />
            Curriculum Structure
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {courses.map((item) => (
              <div key={item.year} className="rounded-xl border border-[#E5EAEF] bg-white p-6 shadow-sm transition hover:border-[#164A7A]">
                <div className="flex items-center justify-between border-b border-[#F0F4F8] pb-3">
                  <h3 className="text-lg font-bold text-[#164A7A]">{item.year}</h3>
                  <span className="rounded-full bg-[#164A7A]/10 px-3 py-1 text-xs font-bold text-[#164A7A]">32 Credits</span>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-[#263238]">
                  {item.subjects.map((subj) => (
                    <li key={subj} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#D9A441]" />
                      <span>{subj}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Admission Requirements */}
        <div className="mt-12 rounded-xl border border-[#D9A441]/30 bg-[#FFFDF8] p-6 sm:p-8">
          <h2 className="text-lg font-bold text-[#164A7A] sm:text-xl">Admission Requirements</h2>
          <p className="mt-2 text-sm text-[#53646C]">
            Admissions are conducted centrally by the National University based on combined SSC and HSC GPA scores.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-[#263238]">
            <li className="flex items-start gap-2">
              <span className="text-[#2E8B57]">✓</span>
              <span>Candidate must have passed SSC and HSC in Science background.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#2E8B57]">✓</span>
              <span>Minimum Grade Point 3.0 in Higher Mathematics at HSC level.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#2E8B57]">✓</span>
              <span>Online centralized application through the National University admission portal (<a href="http://app1.nu.edu.bd" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#164A7A] underline">app1.nu.edu.bd</a>).</span>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
