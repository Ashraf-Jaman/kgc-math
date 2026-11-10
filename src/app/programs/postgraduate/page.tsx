import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "স্নাতকোত্তর প্রোগ্রাম | গণিত বিভাগ - কুড়িগ্রাম সরকারি কলেজ",
  description:
    "কুড়িগ্রাম সরকারি কলেজে গণিতে এম.এসসি. স্নাতকোত্তর প্রোগ্রামের পাঠ্যক্রম, গবেষণা ক্ষেত্র ও ভর্তির তথ্য।",
};

const mastersCourses = [
  "উন্নত টপোলজি",
  "ডিফারেনশিয়াল জ্যামিতি ও টেনসর ক্যালকুলাস",
  "উন্নত ফ্লুইড ডাইনামিকস",
  "অপারেশনস রিসার্চ ও লিনিয়ার প্রোগ্রামিং",
  "MATLAB / Python সহ উন্নত সংখ্যিক বিশ্লেষণ",
  "ফাজি ম্যাথমেটিকস ও প্রয়োগ",
  "গাণিতিক পদ্ধতি ও ইন্টিগ্রাল সমীকরণ",
  "গ্রাফ থিওরি ও ডিসক্রিট স্ট্রাকচার",
  "প্রজেক্ট / থিসিস ও সমন্বিত ভাইভা-ভোস",
];

const careerPaths = [
  {
    title: "একাডেমিয়া ও শিক্ষকতা",
    text: "বিসিএস (সাধারণ শিক্ষা ক্যাডার), কলেজ প্রভাষক, বিশ্ববিদ্যালয় গবেষণা ও বিদ্যালয় শিক্ষকতা।",
  },
  {
    title: "সরকারি চাকরি ও ব্যাংকিং",
    text: "বাংলাদেশ ব্যাংক (এডি), সরকারি ও বেসরকারি বাণিজ্যিক ব্যাংক, বিসিএস প্রশাসন, পরিসংখ্যান ও পরিকল্পনা।",
  },
  {
    title: "ডেটা সায়েন্স ও প্রযুক্তি",
    text: "ডেটা অ্যানালিস্ট, ক্রিপ্টোগ্রাফি, অপারেশনস রিসার্চ, অ্যাকচুয়ারিয়াল সায়েন্স ও পরিসংখ্যানিক মডেলিং।",
  },
];

export default function PostgraduatePage() {
  return (
    <main className="min-h-0 flex-1 bg-white">
      {/* Breadcrumb */}
      <div className="border-b border-[#DDE8DE] bg-white">
        <div className="mx-auto w-[calc(100%-40px)] max-w-[1140px] py-3 text-xs font-semibold text-[#53646C]">
          <nav aria-label="ব্রেডক্রাম্ব" className="flex items-center gap-1.5">
            <Link href="/" className="text-[#14532d] transition hover:text-[#166534]">হোম</Link>
            <span className="text-[#A7B5AB]">&gt;</span>
            <span className="text-[#53646C]">প্রোগ্রাম</span>
            <span className="text-[#A7B5AB]">&gt;</span>
            <span className="text-[#263238]" aria-current="page">স্নাতকোত্তর</span>
          </nav>
        </div>
      </div>

      <div className="mx-auto w-[calc(100%-40px)] max-w-[1140px] py-10 sm:py-14">
        {/* Header */}
        <div className="mb-8">
          <h1 className="flex items-center gap-3 text-2xl font-extrabold text-[#14532d] sm:text-3xl">
            <span className="h-7 w-1 shrink-0 rounded-full bg-[#FBBF24]" aria-hidden="true" />
            বিজ্ঞান স্নাতকোত্তর (এম.এসসি.) — গণিত
          </h1>
          <p className="mt-3 text-sm text-[#53646C] sm:text-base">
            জাতীয় বিশ্ববিদ্যালয়, বাংলাদেশের অধিভুক্ত | প্রোগ্রাম: মাস্টার অব সায়েন্স (ফাইনাল) | মেয়াদ: ১ বছর
          </p>
        </div>

        {/* Overview Card */}
        <div className="rounded-xl border border-[#DDE8DE] bg-[#F1F8F2] p-6 shadow-sm sm:p-8">
          <h2 className="text-lg font-bold text-[#14532d] sm:text-xl">প্রোগ্রাম পরিচিতি</h2>
          <p className="mt-3 text-sm leading-relaxed text-[#263238] sm:text-[15px]">
            কুড়িগ্রাম সরকারি কলেজে এম.এসসি. ইন ম্যাথমেটিকস প্রোগ্রামটি উন্নত বিশুদ্ধ ও
            ফলিত গণিতে বিশেষায়িত উচ্চশিক্ষা প্রদান করে। এর লক্ষ্য শিক্ষার্থীদের মধ্যে
            স্বাধীন গবেষণা সক্ষমতা, গভীর বিশ্লেষণী দক্ষতা ও কম্পিউটেশনাল জ্ঞান গড়ে তোলা —
            যা একাডেমিক শিক্ষকতা, উচ্চতর পিএইচডি গবেষণা এবং বিজ্ঞান ও প্রযুক্তি খাতে
            নেতৃত্ব প্রদানের জন্য প্রয়োজনীয়।
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 border-t border-[#DCE8DD] pt-6 sm:grid-cols-4">
            <div>
              <span className="block text-xs font-medium text-[#7B8A83]">ডিগ্রি</span>
              <span className="font-bold text-[#14532d]">এম.এসসি. ইন ম্যাথমেটিকস</span>
            </div>
            <div>
              <span className="block text-xs font-medium text-[#7B8A83]">মেয়াদ</span>
              <span className="font-bold text-[#14532d]">১ একাডেমিক বছর</span>
            </div>
            <div>
              <span className="block text-xs font-medium text-[#7B8A83]">যোগ্যতা</span>
              <span className="font-bold text-[#14532d]">বি.এসসি. (সম্মান) গণিত</span>
            </div>
            <div>
              <span className="block text-xs font-medium text-[#7B8A83]">মোট ক্রেডিট</span>
              <span className="font-bold text-[#14532d]">৩২ ক্রেডিট</span>
            </div>
          </div>
        </div>

        {/* Course Modules */}
        <div className="mt-12">
          <h2 className="flex items-center gap-2.5 text-xl font-bold text-[#14532d] sm:text-2xl">
            <span className="h-6 w-1 rounded-full bg-[#FBBF24]" aria-hidden="true" />
            বিশেষায়িত কোর্স ও গবেষণা মডিউল
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {mastersCourses.map((course, idx) => (
              <div key={course} className="flex items-center gap-3 rounded-lg border border-[#DDE8DE] bg-white p-4 shadow-sm transition hover:border-[#14532d] hover:bg-[#F0FDF4]">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#14532d] text-xs font-bold text-[#FBBF24]">
                  {idx + 1}
                </span>
                <span className="text-sm font-semibold text-[#263238]">{course}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Career Opportunities */}
        <div className="mt-12 rounded-xl border border-[#166534]/30 bg-[#F0FDF4] p-6 sm:p-8">
          <h2 className="text-lg font-bold text-[#14532d] sm:text-xl">ভবিষ্যৎ সম্ভাবনা ও ক্যারিয়ার</h2>
          <p className="mt-2 text-sm text-[#53646C]">
            কুড়িগ্রাম সরকারি কলেজ থেকে এম.এসসি. ইন ম্যাথমেটিকস ডিগ্রিধারীরা বিভিন্ন মর্যাদাপূর্ণ ক্ষেত্রে সফলতার সাথে কাজ করছেন:
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {careerPaths.map((path) => (
              <div key={path.title} className="rounded-lg bg-white p-4 shadow-xs">
                <h3 className="font-bold text-[#166534]">{path.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-[#53646C]">{path.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
