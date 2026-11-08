import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "News & Events | Department of Mathematics - Kurigram Government College",
  description: "Latest news, conferences, workshops, and departmental events of the Department of Mathematics at Kurigram Government College.",
};

const allNewsEvents = [
  {
    id: 1,
    title: "Mathematics Conference Dinner",
    category: "Academic Conference",
    date: "15 Mar 2025",
    image: "/news-conference-dinner.jpg",
    description:
      "The 3rd National Mathematics Conference Dinner 2025 was organized in honour of distinguished researchers, invited guests, faculty members, and student delegates. The dinner concluded a day of prolific paper presentations and academic discussions on modern applications of mathematical sciences.",
  },
  {
    id: 2,
    title: "Call for submission of Abstract on the A F Mujibur Rahman - Bangladesh Mathematical Society 3rd National Mathematics Conference 2024",
    category: "Call for Papers",
    date: "05 Dec 2024",
    image: "/news-math-abstract.jpg",
    description:
      "We are delighted to invite researchers, postgraduate scholars, and mathematicians to submit abstracts for the upcoming National Mathematics Conference. Tracks include Pure Mathematics, Fluid Mechanics, Mathematical Physics, Optimization, Computational Algebra, and Biomathematics.",
  },
  {
    id: 3,
    title: "Freshers Reception of Postgraduate Students",
    category: "Departmental Event",
    date: "12 Jan 2025",
    image: "/news-freshers-reception.jpg",
    description:
      "A grand freshers reception was warmly arranged by the Department of Mathematics welcoming the newly admitted Master's scholars. The Principal and faculty members delivered inspirational speeches advising students on academic excellence and research pathways.",
  },
];

export default function NewsEventsPage() {
  return (
    <main className="min-h-0 flex-1 bg-[#F4F8FB]">
      {/* Breadcrumb */}
      <div className="border-b border-[#E5EAEF] bg-white">
        <div className="mx-auto w-[calc(100%-40px)] max-w-[1140px] py-3 text-xs font-semibold text-[#53646C]">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5">
            <Link href="/" className="text-[#164A7A] transition hover:text-[#2E8B57]">Home</Link>
            <span className="text-[#8FA5B8]">&gt;</span>
            <span className="text-[#263238]" aria-current="page">News &amp; Events</span>
          </nav>
        </div>
      </div>

      <div className="mx-auto w-[calc(100%-40px)] max-w-[1140px] py-10 sm:py-14">
        {/* Header */}
        <div className="mb-10">
          <h1 className="flex items-center gap-3 text-2xl font-extrabold text-[#164A7A] sm:text-3xl">
            <span className="h-7 w-1 shrink-0 rounded-full bg-[#D9A441]" aria-hidden="true" />
            News and Events
          </h1>
          <p className="mt-2 text-sm text-[#53646C] sm:text-base">
            Recent updates, scholarly conferences, workshops, and student activities from the Department of Mathematics
          </p>
        </div>

        {/* News Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {allNewsEvents.map((item) => (
            <article
              key={item.id}
              className="group flex flex-col overflow-hidden rounded-xl border border-[#E5EAF0] bg-white shadow-xs transition duration-200 hover:-translate-y-1.5 hover:shadow-lg"
            >
              <div className="relative h-[220px] shrink-0 overflow-hidden bg-[#EAF1F6] sm:h-[250px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <div className="flex items-center justify-between text-xs font-semibold text-[#53646C]">
                    <span className="rounded bg-[#EAF1F8] px-2.5 py-0.5 text-[11px] font-bold text-[#164A7A]">
                      {item.category}
                    </span>
                    <span>{item.date}</span>
                  </div>

                  <h2 className="mt-3 text-base font-extrabold leading-snug text-[#263238] transition group-hover:text-[#2E8B57] sm:text-lg">
                    {item.title}
                  </h2>

                  <p className="mt-3 text-sm leading-relaxed text-[#53646C]">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 border-t border-[#F0F4F8] pt-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#164A7A] transition group-hover:text-[#2E8B57]">
                    <span>Read Details</span>
                    <ArrowIcon />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}
