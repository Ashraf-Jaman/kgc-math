import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "আমাদের সম্পর্কে | গণিত বিভাগ - কুড়িগ্রাম সরকারি কলেজ",
  description:
    "কুড়িগ্রাম সরকারি কলেজের গণিত বিভাগের পটভূমি, ইতিহাস, লক্ষ্য ও উদ্দেশ্য সম্পর্কে জানুন।",
};

const quickFacts = [
  { label: "প্রতিষ্ঠাকাল", value: "১ জুলাই ১৯৬১" },
  { label: "জাতীয়করণ", value: "১ মার্চ ১৯৮০" },
  { label: "সম্মান কোর্স চালু", value: "১৯৯৭" },
  { label: "মাস্টার্স কোর্স চালু", value: "২০১৩" },
  { label: "EIIN", value: "১২২৩৩১" },
];

const goals = [
  {
    title: "মিশন",
    text: "গুণগত গণিত শিক্ষা প্রদান এবং শিক্ষার্থীদের মধ্যে বিশ্লেষণী ও যৌক্তিক চিন্তার দক্ষতা গড়ে তোলা।",
  },
  {
    title: "ভিশন",
    text: "উত্তরবঙ্গে গণিত শিক্ষা ও গবেষণার একটি আদর্শ কেন্দ্র হিসেবে প্রতিষ্ঠিত হওয়া।",
  },
  {
    title: "মূল্যবোধ",
    text: "একাডেমিক সততা, শৃঙ্খলা, সহমর্মিতা এবং জ্ঞানচর্চার প্রতি অবিচল অঙ্গীকার।",
  },
];

export default function AboutUsPage() {
  return (
    <main className="min-h-0 flex-1 bg-white">
      {/* Breadcrumb */}
      <div className="border-b border-[#DDE8DE] bg-white">
        <div className="mx-auto w-[calc(100%-40px)] max-w-[1140px] py-3 text-xs font-semibold text-[#53646C]">
          <nav aria-label="ব্রেডক্রাম্ব" className="flex items-center gap-1.5">
            <Link href="/" className="text-[#14532d] transition hover:text-[#166534]">
              হোম
            </Link>
            <span className="text-[#8FA5B8]">&gt;</span>
            <span className="text-[#263238]" aria-current="page">
              আমাদের সম্পর্কে
            </span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <div className="border-b border-[#E1EBE2] bg-white px-4 py-10 sm:px-6 sm:py-14">
        <div className="mx-auto w-full max-w-[1140px]">
          <h1 className="flex items-center gap-3 text-2xl font-extrabold text-[#14532d] sm:text-3xl">
            <span className="h-7 w-1 shrink-0 rounded-full bg-[#FBBF24]" aria-hidden="true" />
            আমাদের সম্পর্কে
          </h1>
          <p className="mt-2 max-w-3xl text-sm text-[#53646C] sm:text-base">
            কুড়িগ্রাম সরকারি কলেজের গণিত বিভাগের ইতিহাস, ঐতিহ্য এবং শিক্ষা-অঙ্গীকার
          </p>

          {/* Quick Facts */}
          <dl className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {quickFacts.map((fact) => (
              <div
                key={fact.label}
                className="rounded-xl border border-[#DDE8DE] bg-[#F1F8F2] px-4 py-4 text-center shadow-xs"
              >
                <dt className="text-[11px] font-semibold text-[#53646C] sm:text-xs">
                  {fact.label}
                </dt>
                <dd className="mt-1 text-sm font-extrabold text-[#14532d] sm:text-base">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Background Section */}
      <section
        className="border-b border-[#E1EBE2] bg-[#F1F8F2] px-4 py-12 sm:px-6 sm:py-16 lg:py-20"
        aria-labelledby="background-heading"
      >
        <div className="mx-auto w-full max-w-[1140px]">
          <h2
            id="background-heading"
            className="flex items-center gap-3 text-2xl font-extrabold text-[#14532d] sm:text-3xl"
          >
            <span
              className="h-7 w-1 shrink-0 rounded-full bg-[#FBBF24]"
              aria-hidden="true"
            />
            পটভূমি
          </h2>

          <p className="mt-8 max-w-[1080px] text-justify text-sm font-normal leading-[1.9] text-[#263238] sm:text-[15px] sm:leading-[1.95]">
            কুড়িগ্রাম সরকারি কলেজের অন্যতম ভিত্তিস্বরূপ ও মর্যাদাপূর্ণ বিজ্ঞান বিভাগ হলো গণিত বিভাগ।
            বাংলাদেশের উত্তরাঞ্চলে গাণিতিক চিন্তা ও বৈজ্ঞানিক অনুসন্ধানকে এগিয়ে নিতে বিভাগটি
            জাতীয় বিশ্ববিদ্যালয়ের অধিভুক্তিতে বিস্তৃত একাডেমিক প্রোগ্রাম পরিচালনা করে।
            বিভাগটি বিশুদ্ধ, ফলিত ও কম্পিউটেশনাল গণিতজুড়ে সমৃদ্ধ ও কঠোর পাঠ্যক্রমের উপর
            গুরুত্ব দেয় এবং শিক্ষার্থীদের মধ্যে বিশ্লেষণী চিন্তা, যৌক্তিক বিশ্লেষণ ও সমস্যা
            সমাধানের দক্ষতা গড়ে তোলে। অভিজ্ঞ শিক্ষকমণ্ডলী এবং একাডেমিক উৎকর্ষের প্রতি
            অবিচল অঙ্গীকারের মাধ্যমে বিভাগটি তার স্নাতক ও স্নাতকোত্তর শিক্ষার্থীদের
            উচ্চশিক্ষা, গবেষণা, শিক্ষকতা এবং প্রতিযোগিতামূলক পেশাগত জীবনের জন্য প্রস্তুত করে।
          </p>
        </div>
      </section>

      {/* History Section */}
      <section
        className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:py-20"
        aria-labelledby="history-heading"
      >
        <div className="mx-auto w-full max-w-[1140px]">
          <h2
            id="history-heading"
            className="flex items-center gap-3 text-2xl font-extrabold text-[#14532d] sm:text-3xl"
          >
            <span
              className="h-7 w-1 shrink-0 rounded-full bg-[#FBBF24]"
              aria-hidden="true"
            />
            ইতিহাস
          </h2>

          <p className="mt-8 max-w-[1080px] text-justify text-sm font-normal leading-[1.9] text-[#263238] sm:text-[15px] sm:leading-[1.95]">
            ১৯৬১ সালের ১ জুলাই স্থানীয় শিক্ষাবিদ, সমাজসংস্কারক ও প্রশাসনিক ব্যক্তিত্বদের
            যৌথ উদ্যোগ ও দূরদর্শী নেতৃত্বে কুড়িগ্রাম কলেজ নামে এই প্রতিষ্ঠান যাত্রা শুরু করে।
            কুড়িগ্রাম অঞ্চলে উচ্চশিক্ষার আলো ছড়ানোর মহৎ লক্ষ্য নিয়ে প্রতিষ্ঠানটি প্রথমে
            কুড়িগ্রাম উচ্চ বিদ্যালয়ের ভবনে কার্যক্রম পরিচালনা করে এবং পরবর্তীতে স্থায়ী
            ক্যাম্পাসে স্থানান্তরিত হয়। ১৯৮০ সালের ১ মার্চ কলেজটি সরকারি করা হয় এবং
            সেখান থেকে এটি গণশিক্ষার একটি প্রধান কেন্দ্র হিসেবে প্রতিষ্ঠিত হয়।
            ১৯৯৭ সালে চার বছর মেয়াদি সম্মান ডিগ্রি প্রোগ্রাম চালু হওয়ার মাধ্যমে
            একাডেমিক পরিধি উল্লেখযোগ্যভাবে বিস্তৃত হয়। এরপর ২০১৩ সালে স্নাতকোত্তর
            (এম.এসসি.) প্রোগ্রাম চালু হয়, যার ফলে শিক্ষার্থীরা একই ক্যাম্পাসে
            উচ্চতর গণিত গবেষণার সুযোগ পাচ্ছেন। এরপর থেকে গণিত বিভাগ কলেজের
            বিজ্ঞান অনুষদের একটি মূল স্তম্ভ হিসেবে গড়ে উঠেছে এবং ধারাবাহিকভাবে
            প্রজন্মের পর প্রজন্ম শিক্ষার্থী গড়ে তুলে জাতীয় শিক্ষা ও উন্নয়নে গুরুত্বপূর্ণ
            অবদান রাখছে।
          </p>
        </div>
      </section>

      {/* Goals Section */}
      <section
        className="bg-[#F1F8F2] px-4 py-12 sm:px-6 sm:py-16 lg:py-20"
        aria-labelledby="goals-heading"
      >
        <div className="mx-auto w-full max-w-[1140px]">
          <h2
            id="goals-heading"
            className="flex items-center gap-3 text-2xl font-extrabold text-[#14532d] sm:text-3xl"
          >
            <span
              className="h-7 w-1 shrink-0 rounded-full bg-[#FBBF24]"
              aria-hidden="true"
            />
            লক্ষ্য ও উদ্দেশ্য
          </h2>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {goals.map((goal) => (
              <div
                key={goal.title}
                className="rounded-xl border border-[#DDE8DE] bg-white p-6 shadow-sm transition hover:border-[#14532d] hover:shadow-md"
              >
                <h3 className="text-base font-extrabold text-[#14532d] sm:text-lg">
                  {goal.title}
                </h3>
                <div className="mb-4 mt-2 h-[2px] w-9 bg-[#FBBF24]" />
                <p className="text-sm leading-relaxed text-[#53646C]">
                  {goal.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
