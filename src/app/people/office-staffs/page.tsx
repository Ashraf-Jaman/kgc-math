import type { Metadata } from "next";
import Link from "next/link";
import PersonCard from "@/components/PersonCard";

export const metadata: Metadata = {
  title: "অফিস স্টাফ | গণিত বিভাগ - কুড়িগ্রাম সরকারি কলেজ",
  description:
    "কুড়িগ্রাম সরকারি কলেজ গণিত বিভাগের প্রশাসনিক ও সহায়ক কর্মচারীদের তথ্য।",
};

const staffs = [
  {
    name: "Md. Aminul Islam",
    designation: "কম্পিউটার অপারেটর ও অফিস সহকারী",
    room: "কক্ষ ২০৪, বিজ্ঞান ভবন",
    responsibilities: "শিক্ষার্থী রেকর্ড, পরীক্ষার প্রশ্নপত্র ব্যবস্থাপনা, বিভাগীয় পত্রালাপ",
    phone: "+880 1716-112233",
    email: "office.math@kgc.ac.bd",
  },
  {
    name: "Sujit Kumar Roy",
    designation: "ল্যাবরেটরি অ্যাটেনডেন্ট",
    room: "গণিত কম্পিউটার ল্যাব, ২য় তলা",
    responsibilities: "কম্পিউটার ল্যাব রক্ষণাবেক্ষণ, ব্যবহারিক পরীক্ষা সহায়তা, সেমিনার লাইব্রেরি সহায়তা",
    phone: "+880 1717-445566",
    email: "lab.math@kgc.ac.bd",
  },
  {
    name: "Md. Anowar Hossain",
    designation: "অফিস পিয়ন (এমএলএসএস)",
    room: "বিভাগীয় অফিস, কক্ষ ২০১",
    responsibilities: "অফিস ডেসপ্যাচ, শ্রেণিকক্ষ সহায়তা, দৈনন্দিন লজিস্টিকস",
    phone: "+880 1718-778899",
    email: "anowar@kgc.ac.bd",
  },
];

export default function OfficeStaffsPage() {
  return (
    <main className="min-h-0 flex-1 bg-[#F1F8F2]">
      {/* Breadcrumb */}
      <div className="border-b border-[#E1EBE2] bg-white">
        <div className="mx-auto w-[calc(100%-40px)] max-w-[1140px] py-3 text-xs font-semibold text-[#53646C]">
          <nav aria-label="ব্রেডক্রাম্ব" className="flex items-center gap-1.5">
            <Link href="/" className="text-[#166534] transition hover:text-[#14532d]">
              হোম
            </Link>
            <span className="text-[#8FA5B8]">&gt;</span>
            <span className="text-[#53646C]">লোকবল</span>
            <span className="text-[#8FA5B8]">&gt;</span>
            <span className="text-[#263238]" aria-current="page">
              অফিস স্টাফ
            </span>
          </nav>
        </div>
      </div>

      <div className="mx-auto w-[calc(100%-40px)] max-w-[1140px] py-8 sm:py-12">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="flex items-center justify-center gap-3 text-2xl font-extrabold text-[#14532d] sm:text-3xl">
            <span
              className="h-7 w-1 shrink-0 rounded-full bg-[#FBBF24]"
              aria-hidden="true"
            />
            অফিস ও কারিগরি স্টাফ
          </h1>
          <p className="mt-2 text-sm text-[#53646C] sm:text-base">
            গণিত বিভাগের প্রশাসনিক, ল্যাবরেটরি ও সহায়ক কর্মী
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {staffs.map((staff, idx) => (
            <PersonCard
              key={staff.name}
              index={idx + 1}
              name={staff.name}
              designation={staff.designation}
              phone={staff.phone}
              email={staff.email}
              department="গণিত বিভাগ"
              details={[
                { label: "অফিসের অবস্থান", value: staff.room },
                { label: "দায়িত্ব", value: staff.responsibilities },
                { label: "ইমেইল", value: staff.email },
              ]}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
