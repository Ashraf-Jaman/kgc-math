import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Faculty Members | Department of Mathematics - Kurigram Government College",
  description: "Distinguished faculty members and academic staff of the Department of Mathematics at Kurigram Government College.",
};

interface FacultyMember {
  name: string;
  designation: string;
  role?: string;
  education: string;
  specialization: string;
  email: string;
  phone: string;
  image: string;
}

const facultyList: FacultyMember[] = [
  {
    name: "Md. Sajjadur Rahman",
    designation: "Associate Professor",
    role: "Head of the Department",
    education: "B.Sc. (Honours), M.Sc. in Mathematics",
    specialization: "Fluid Dynamics, Differential Equations",
    email: "head.math@kgc.ac.bd",
    phone: "+880 1712-345678",
    image: "/faculty-head.jpg",
  },
  {
    name: "Dr. A. K. M. Rezaul Karim",
    designation: "Assistant Professor",
    education: "B.Sc. (Honours), M.Sc., Ph.D. in Mathematics",
    specialization: "Numerical Analysis, Mathematical Modeling",
    email: "rezaul.math@kgc.ac.bd",
    phone: "+880 1713-987654",
    image: "/faculty-head.jpg",
  },
  {
    name: "Md. Mostafizur Rahman",
    designation: "Assistant Professor",
    education: "B.Sc. (Honours), M.Sc. in Mathematics (RU)",
    specialization: "Abstract Algebra, Number Theory",
    email: "mostafiz.math@kgc.ac.bd",
    phone: "+880 1715-234567",
    image: "/faculty-head.jpg",
  },
  {
    name: "Farhana Yasmin",
    designation: "Lecturer",
    education: "B.Sc. (Honours), M.Sc. in Mathematics (DU)",
    specialization: "Operations Research, Optimization",
    email: "farhana.math@kgc.ac.bd",
    phone: "+880 1718-876543",
    image: "/faculty-head.jpg",
  },
  {
    name: "Md. Mahfuzur Rahman",
    designation: "Lecturer",
    education: "B.Sc. (Honours), M.Sc. in Applied Mathematics",
    specialization: "Complex Analysis, Graph Theory",
    email: "mahfuz.math@kgc.ac.bd",
    phone: "+880 1719-543210",
    image: "/faculty-head.jpg",
  },
];

export default function FacultyMembersPage() {
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

        {/* Head of the Department Highlight */}
        <div className="mb-10 overflow-hidden rounded-xl border-2 border-[#164A7A]/20 bg-[#F4F8FB] p-6 shadow-md sm:p-8">
          <span className="inline-block rounded-full bg-[#164A7A] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#D9A441]">
            Head of the Department
          </span>
          <div className="mt-6 flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:gap-8">
            <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-full border-4 border-white shadow-lg sm:h-36 sm:w-36">
              <Image
                src={facultyList[0].image}
                alt={facultyList[0].name}
                fill
                className="object-cover"
                sizes="144px"
                priority
              />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-xl font-extrabold text-[#164A7A] sm:text-2xl">{facultyList[0].name}</h2>
              <p className="text-sm font-bold text-[#8C6D3B] sm:text-base">{facultyList[0].designation}</p>
              <p className="mt-1 text-xs text-[#53646C] sm:text-sm">{facultyList[0].education}</p>

              <div className="mt-4 grid gap-2 border-t border-[#DCE4EC] pt-4 text-xs text-[#263238] sm:grid-cols-2 sm:text-sm">
                <div>
                  <span className="font-semibold text-[#164A7A]">Specialization: </span>
                  {facultyList[0].specialization}
                </div>
                <div>
                  <span className="font-semibold text-[#164A7A]">Email: </span>
                  <a href={`mailto:${facultyList[0].email}`} className="text-[#164A7A] hover:underline">
                    {facultyList[0].email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Faculty Members Grid */}
        <h2 className="mb-6 flex items-center gap-2.5 text-lg font-bold text-[#164A7A] sm:text-xl">
          <span className="h-5 w-1 rounded-full bg-[#9E1B24]" aria-hidden="true" />
          Academic Faculty
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {facultyList.slice(1).map((faculty) => (
            <div
              key={faculty.name}
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
      </div>
    </main>
  );
}
