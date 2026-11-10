import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "স্নাতক প্রোগ্রাম | গণিত বিভাগ - কুড়িগ্রাম সরকারি কলেজ",
  description:
    "কুড়িগ্রাম সরকারি কলেজে গণিতে বি.এসসি. (সম্মান) প্রোগ্রামের পাঠ্যক্রম, ভর্তির যোগ্যতা ও কোর্স কাঠামো।",
};

const courses = [
  {
    year: "১ম বর্ষ",
    subjects: [
      "গণিতের মৌলিক বিষয়",
      "ক্যালকুলাস I",
      "লিনিয়ার অ্যালজেবরা",
      "অ্যানালিটিক্যাল ও ভেক্টর জ্যামিতি",
      "পদার্থবিজ্ঞান I ও রসায়ন I (নন-মেজর)",
    ],
  },
  {
    year: "২য় বর্ষ",
    subjects: [
      "ক্যালকুলাস II",
      "সাধারণ অন্তরক সমীকরণ",
      "ফোরট্রান প্রোগ্রামিং",
      "গণিতের ঐতিহাসিক বিকাশ",
      "পদার্থবিজ্ঞান II ও কম্পিউটার ফান্ডামেন্টালস",
    ],
  },
  {
    year: "৩য় বর্ষ",
    subjects: [
      "অ্যাবস্ট্রাক্ট অ্যালজেবরা",
      "রিয়েল অ্যানালাইসিস",
      "সংখ্যিক বিশ্লেষণ",
      "কমপ্লেক্স অ্যানালাইসিস",
      "মেকানিক্স",
      "ডিফারেনশিয়াল জ্যামিতি",
    ],
  },
  {
    year: "৪র্থ বর্ষ",
    subjects: [
      "টপোলজি ও ফাংশনাল অ্যানালাইসিস",
      "আংশিক অন্তরক সমীকরণ",
      "টেনসর অ্যানালাইসিস",
      "ফ্লুইড ডাইনামিকস",
      "অপারেশনস রিসার্চ",
      "গাণিতিক মডেলিং",
      "ভাইভা-ভোস",
    ],
  },
];

type AdmissionRequirement = {
  text: string;
  link?: { href: string; label: string };
};

const admissionRequirements: AdmissionRequirement[] = [
  { text: "প্রার্থীকে বিজ্ঞান বিষয়ে এসএসসি ও এইচএসসি উভয় পরীক্ষায় উত্তীর্ণ হতে হবে।" },
  { text: "এইচএসসি পর্যায়ে উচ্চতর গণিতে ন্যূনতম গ্রেড পয়েন্ট ৩.০ থাকতে হবে।" },
  {
    text: "জাতীয় বিশ্ববিদ্যালয়ের অনলাইন ভর্তি পোর্টালের মাধ্যমে কেন্দ্রীয়ভাবে আবেদন করতে হবে।",
    link: { href: "http://app1.nu.edu.bd", label: "app1.nu.edu.bd" },
  },
];

export default function UndergraduatePage() {
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
            <span className="text-[#263238]" aria-current="page">স্নাতক</span>
          </nav>
        </div>
      </div>

      <div className="mx-auto w-[calc(100%-40px)] max-w-[1140px] py-10 sm:py-14">
        {/* Header */}
        <div className="mb-8">
          <h1 className="flex items-center gap-3 text-2xl font-extrabold text-[#14532d] sm:text-3xl">
            <span className="h-7 w-1 shrink-0 rounded-full bg-[#FBBF24]" aria-hidden="true" />
            বিজ্ঞান স্নাতক (বি.এসসি. সম্মান) — গণিত
          </h1>
          <p className="mt-3 text-sm text-[#53646C] sm:text-base">
            জাতীয় বিশ্ববিদ্যালয়, বাংলাদেশের অধিভুক্ত | প্রোগ্রাম কোড: ৩৭০১ | মেয়াদ: ৪ বছর
          </p>
        </div>

        {/* Overview Card */}
        <div className="rounded-xl border border-[#DDE8DE] bg-[#F1F8F2] p-6 shadow-sm sm:p-8">
          <h2 className="text-lg font-bold text-[#14532d] sm:text-xl">প্রোগ্রাম পরিচিতি</h2>
          <p className="mt-3 text-sm leading-relaxed text-[#263238] sm:text-[15px]">
            কুড়িগ্রাম সরকারি কলেজে চার বছর মেয়াদি বি.এসসি. (সম্মান) গণিত প্রোগ্রামটি
            বিশুদ্ধ ও ফলিত গণিতের শক্ত ভিত্তি গড়ে তোলার জন্য পরিকল্পিত। এই পাঠ্যক্রম
            শিক্ষার্থীদের কঠোর যৌক্তিক চিন্তা, বিশ্লেষণী বিমূর্তন এবং গাণিতিক সমস্যা
            সমাধানের দক্ষতা গড়ে তোলে — যা একাডেমিয়া, বৈজ্ঞানিক গবেষণা এবং শিল্প ও
            সরকারি চাকরির জন্য অপরিহার্য।
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 border-t border-[#DCE8DD] pt-6 sm:grid-cols-4">
            <div>
              <span className="block text-xs font-medium text-[#7B8A83]">ডিগ্রি</span>
              <span className="font-bold text-[#14532d]">বি.এসসি. (সম্মান)</span>
            </div>
            <div>
              <span className="block text-xs font-medium text-[#7B8A83]">মেয়াদ</span>
              <span className="font-bold text-[#14532d]">৪ একাডেমিক বছর</span>
            </div>
            <div>
              <span className="block text-xs font-medium text-[#7B8A83]">মাধ্যম</span>
              <span className="font-bold text-[#14532d]">ইংরেজি ও বাংলা</span>
            </div>
            <div>
              <span className="block text-xs font-medium text-[#7B8A83]">মোট ক্রেডিট</span>
              <span className="font-bold text-[#14532d]">১২৮ ক্রেডিট</span>
            </div>
          </div>
        </div>

        {/* Year-wise Curriculum */}
        <div className="mt-12">
          <h2 className="flex items-center gap-2.5 text-xl font-bold text-[#14532d] sm:text-2xl">
            <span className="h-6 w-1 rounded-full bg-[#FBBF24]" aria-hidden="true" />
            পাঠ্যক্রম কাঠামো
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {courses.map((item) => (
              <div key={item.year} className="rounded-xl border border-[#DDE8DE] bg-white p-6 shadow-sm transition hover:border-[#14532d]">
                <div className="flex items-center justify-between border-b border-[#EDF3EE] pb-3">
                  <h3 className="text-lg font-bold text-[#14532d]">{item.year}</h3>
                  <span className="rounded-full bg-[#14532d]/10 px-3 py-1 text-xs font-bold text-[#14532d]">৩২ ক্রেডিট</span>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-[#263238]">
                  {item.subjects.map((subj) => (
                    <li key={subj} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#FBBF24]" />
                      <span>{subj}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Admission Requirements */}
        <div className="mt-12 rounded-xl border border-[#FBBF24]/30 bg-[#FFFBEB] p-6 sm:p-8">
          <h2 className="text-lg font-bold text-[#14532d] sm:text-xl">ভর্তির যোগ্যতা</h2>
          <p className="mt-2 text-sm text-[#53646C]">
            এসএসসি ও এইচএসসির সম্মিলিত জিপিএর ভিত্তিতে জাতীয় বিশ্ববিদ্যালয় কেন্দ্রীয়ভাবে ভর্তি পরিচালনা করে।
          </p>
          <ul className="mt-4 space-y-2 text-sm text-[#263238]">
            {admissionRequirements.map((requirement) => (
              <li key={requirement.text} className="flex items-start gap-2">
                <span className="text-[#166534]">✓</span>
                <span>
                  {requirement.text}
                  {requirement.link && (
                    <>
                      {" "}
                      <a
                        href={requirement.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-[#14532d] underline"
                      >
                        {requirement.link.label}
                      </a>
                    </>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
