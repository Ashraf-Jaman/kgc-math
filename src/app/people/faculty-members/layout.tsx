import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "শিক্ষকমণ্ডলী | গণিত বিভাগ - কুড়িগ্রাম সরকারি কলেজ",
  description:
    "কুড়িগ্রাম সরকারি কলেজ গণিত বিভাগের একাডেমিক শিক্ষকমণ্ডলীর পরিচিতি, শিক্ষাগত যোগ্যতা ও বিশেষত্ব।",
};

export default function FacultyMembersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
