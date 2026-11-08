import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Citizen Charter | Department of Mathematics - Kurigram Government College",
  description: "Citizen charter and public service delivery commitments of the Department of Mathematics at Kurigram Government College.",
};

const charterServices = [
  {
    service: "Admission & Enrolment Verification",
    time: "2 Working Days",
    requiredDocs: "Admission Confirmation Slip, SSC & HSC Marksheets",
    fee: "Free of cost",
  },
  {
    service: "Issuance of Testimonial / Character Certificate",
    time: "3 Working Days",
    requiredDocs: "Application approved by Head of Dept, Registration Card copy, Clearance Slip",
    fee: "As per college treasury fee",
  },
  {
    service: "In-course & Examination Clearance",
    time: "1 Working Day",
    requiredDocs: "Admit Card, Attendance Record verification",
    fee: "Free of cost",
  },
  {
    service: "Seminar Library Membership & Book Issue",
    time: "Same Day",
    requiredDocs: "Department Student ID Card, Library Slip",
    fee: "Free of cost",
  },
  {
    service: "Academic Recommendation Letter for Higher Studies",
    time: "5 Working Days",
    requiredDocs: "CV, Transcript Copy, Research Plan statement",
    fee: "Free of cost",
  },
];

export default function CitizenCharterPage() {
  return (
    <main className="min-h-0 flex-1 bg-white">
      {/* Breadcrumb */}
      <div className="border-b border-[#E5EAEF] bg-white">
        <div className="mx-auto w-[calc(100%-40px)] max-w-[1140px] py-3 text-xs font-semibold text-[#53646C]">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5">
            <Link href="/" className="text-[#164A7A] transition hover:text-[#2E8B57]">Home</Link>
            <span className="text-[#8FA5B8]">&gt;</span>
            <span className="text-[#263238]" aria-current="page">Citizen Charter</span>
          </nav>
        </div>
      </div>

      <div className="mx-auto w-[calc(100%-40px)] max-w-[1140px] py-10 sm:py-14">
        {/* Header */}
        <div className="mb-10">
          <h1 className="flex items-center gap-3 text-2xl font-extrabold text-[#164A7A] sm:text-3xl">
            <span className="h-7 w-1 shrink-0 rounded-full bg-[#D9A441]" aria-hidden="true" />
            সিটিজেন চার্টার (Citizen Charter)
          </h1>
          <p className="mt-2 text-sm text-[#53646C] sm:text-base">
            Department of Mathematics, Kurigram Government College - Service Delivery Standards &amp; Commitments
          </p>
        </div>

        {/* Services Table */}
        <div className="overflow-x-auto rounded-xl border border-[#E5EAEF] bg-white shadow-sm">
          <table className="w-full min-w-[640px] text-left text-xs sm:text-sm">
            <thead className="bg-[#164A7A] text-white">
              <tr>
                <th className="px-5 py-3.5 font-bold">সেবা / Service</th>
                <th className="px-5 py-3.5 font-bold">প্রয়োজনীয় সময় / Timeframe</th>
                <th className="px-5 py-3.5 font-bold">প্রয়োজনীয় কাগজপত্র / Required Documents</th>
                <th className="px-5 py-3.5 font-bold">ফি / Fee</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E5EAEF] text-[#263238]">
              {charterServices.map((item) => (
                <tr key={item.service} className="transition hover:bg-[#F4F8FB]">
                  <td className="px-5 py-4 font-semibold text-[#164A7A]">{item.service}</td>
                  <td className="px-5 py-4 font-medium text-[#2E8B57]">{item.time}</td>
                  <td className="px-5 py-4 text-[#53646C]">{item.requiredDocs}</td>
                  <td className="px-5 py-4 font-medium">{item.fee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Grievance Redressal */}
        <div className="mt-10 rounded-xl border border-[#D9A441]/30 bg-[#FFFDF8] p-6 sm:p-8">
          <h2 className="text-base font-bold text-[#164A7A] sm:text-lg">অভিযোগ ও প্রতিকার (Grievance Redressal)</h2>
          <p className="mt-2 text-xs leading-relaxed text-[#53646C] sm:text-sm">
            If you experience any delay or difficulty in receiving any of the above services, please contact the Head of the Department directly or write to:{" "}
            <a href="mailto:head.math@kgc.ac.bd" className="font-bold text-[#164A7A] underline">head.math@kgc.ac.bd</a>.
          </p>
        </div>
      </div>
    </main>
  );
}
