import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Office Staffs | Department of Mathematics - Kurigram Government College",
  description: "Administrative and support staff of the Department of Mathematics at Kurigram Government College.",
};

const staffs = [
  {
    name: "Md. Aminul Islam",
    designation: "Computer Operator & Office Assistant",
    room: "Room 204, Science Building",
    responsibilities: "Student Records, Examination Paper Management, Departmental Correspondence",
    phone: "+880 1716-112233",
    email: "office.math@kgc.ac.bd",
  },
  {
    name: "Sujit Kumar Roy",
    designation: "Laboratory Attendant",
    room: "Mathematics Computer Lab, 2nd Floor",
    responsibilities: "Computer Lab Maintenance, Practical Exam Support, Seminar Library Assistance",
    phone: "+880 1717-445566",
    email: "lab.math@kgc.ac.bd",
  },
  {
    name: "Md. Anowar Hossain",
    designation: "Office Peon (MLSS)",
    room: "Department Office, Room 201",
    responsibilities: "Office Dispatch, Classroom Support, Daily Logistics",
    phone: "+880 1718-778899",
    email: "anowar@kgc.ac.bd",
  },
];

export default function OfficeStaffsPage() {
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
            <span className="text-[#263238]" aria-current="page">Office Staffs</span>
          </nav>
        </div>
      </div>

      <div className="mx-auto w-[calc(100%-40px)] max-w-[1140px] py-10 sm:py-14">
        {/* Header */}
        <div className="mb-10">
          <h1 className="flex items-center gap-3 text-2xl font-extrabold text-[#164A7A] sm:text-3xl">
            <span className="h-7 w-1 shrink-0 rounded-full bg-[#D9A441]" aria-hidden="true" />
            Office &amp; Technical Staffs
          </h1>
          <p className="mt-2 text-sm text-[#53646C] sm:text-base">
            Administrative, laboratory, and support staff members of the Department of Mathematics
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {staffs.map((staff) => (
            <div
              key={staff.name}
              className="flex flex-col justify-between rounded-xl border border-[#E5EAEF] bg-white p-6 shadow-sm transition hover:border-[#164A7A] hover:shadow-md"
            >
              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#164A7A]/10 text-xl font-bold text-[#164A7A]">
                  {staff.name.charAt(4) || "S"}
                </div>
                <h2 className="mt-4 text-lg font-bold text-[#164A7A]">{staff.name}</h2>
                <p className="text-xs font-bold text-[#2E8B57]">{staff.designation}</p>

                <div className="mt-4 space-y-2 border-t border-[#F0F4F8] pt-4 text-xs text-[#53646C]">
                  <p>
                    <span className="font-semibold text-[#263238]">Office Location: </span>
                    {staff.room}
                  </p>
                  <p>
                    <span className="font-semibold text-[#263238]">Responsibilities: </span>
                    {staff.responsibilities}
                  </p>
                </div>
              </div>

              <div className="mt-6 border-t border-[#F0F4F8] pt-4 text-xs text-[#53646C]">
                <p>
                  <span className="font-semibold text-[#263238]">Phone: </span>
                  <a href={`tel:${staff.phone}`} className="text-[#164A7A] hover:underline">
                    {staff.phone}
                  </a>
                </p>
                <p className="mt-1">
                  <span className="font-semibold text-[#263238]">Email: </span>
                  <a href={`mailto:${staff.email}`} className="text-[#164A7A] hover:underline">
                    {staff.email}
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
