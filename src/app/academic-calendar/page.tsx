import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Academic Calendar | Department of Mathematics - Kurigram Government College",
  description: "Academic calendar, term dates, examination schedules, and holidays for the Department of Mathematics at Kurigram Government College.",
};

const calendarEvents = [
  { term: "January 2025", event: "Commencement of 1st Year B.Sc. (Honours) classes & orientation program", type: "Academic" },
  { term: "February 2025", event: "National University 3rd Year Honours Form fill-up submission deadline", type: "Exam" },
  { term: "March 2025", event: "Departmental Mid-term & In-course Examinations (All Years)", type: "Exam" },
  { term: "April 2025", event: "Holy Ramadan, Shab-e-Qadr, and Eid-ul-Fitr vacations", type: "Holiday" },
  { term: "May 2025", event: "Masters Final Practical & Thesis defense presentation commencement", type: "Academic" },
  { term: "June 2025", event: "National Mathematics Day observation & Departmental Seminar", type: "Event" },
  { term: "July 2025", event: "Summer vacation and Eid-ul-Adha recess", type: "Holiday" },
  { term: "August 2025", event: "Publication of Year-end final examination schedules", type: "Exam" },
];

export default function AcademicCalendarPage() {
  return (
    <main className="min-h-0 flex-1 bg-white">
      {/* Breadcrumb */}
      <div className="border-b border-[#E5EAEF] bg-white">
        <div className="mx-auto w-[calc(100%-40px)] max-w-[1140px] py-3 text-xs font-semibold text-[#53646C]">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5">
            <Link href="/" className="text-[#164A7A] transition hover:text-[#2E8B57]">Home</Link>
            <span className="text-[#8FA5B8]">&gt;</span>
            <span className="text-[#263238]" aria-current="page">Academic Calendar</span>
          </nav>
        </div>
      </div>

      <div className="mx-auto w-[calc(100%-40px)] max-w-[1140px] py-10 sm:py-14">
        {/* Header */}
        <div className="mb-10">
          <h1 className="flex items-center gap-3 text-2xl font-extrabold text-[#164A7A] sm:text-3xl">
            <span className="h-7 w-1 shrink-0 rounded-full bg-[#D9A441]" aria-hidden="true" />
            Academic Calendar 2024–2025
          </h1>
          <p className="mt-2 text-sm text-[#53646C] sm:text-base">
            National University academic schedule, departmental examinations, and collegiate holidays
          </p>
        </div>

        {/* Calendar Timeline Table */}
        <div className="overflow-hidden rounded-xl border border-[#E5EAEF] bg-white shadow-sm">
          <div className="border-b border-[#E5EAEF] bg-[#164A7A] px-6 py-4 text-white">
            <h2 className="text-base font-bold sm:text-lg">Schedule of Key Academic Events</h2>
          </div>

          <div className="divide-y divide-[#E5EAEF]">
            {calendarEvents.map((item) => (
              <div
                key={item.term}
                className="flex flex-col justify-between gap-4 p-5 transition hover:bg-[#F4F8FB] sm:flex-row sm:items-center sm:px-6"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-28 shrink-0 items-center justify-center rounded-lg bg-[#EAF1F8] text-xs font-extrabold text-[#164A7A]">
                    {item.term}
                  </div>
                  <p className="text-sm font-semibold text-[#263238] sm:text-base">
                    {item.event}
                  </p>
                </div>

                <div className="shrink-0">
                  <span
                    className={`inline-block rounded-full px-3 py-1 text-xs font-bold ${
                      item.type === "Exam"
                        ? "bg-[#9E1B24]/10 text-[#9E1B24]"
                        : item.type === "Holiday"
                        ? "bg-[#D9A441]/20 text-[#8C6D3B]"
                        : "bg-[#2E8B57]/10 text-[#2E8B57]"
                    }`}
                  >
                    {item.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
