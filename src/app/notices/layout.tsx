import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "নোটিশ বোর্ড | গণিত বিভাগ - কুড়িগ্রাম সরকারি কলেজ",
  description:
    "কুড়িগ্রাম সরকারি কলেজ গণিত বিভাগের সকল নোটিশ — পরীক্ষার সময়সূচি, ভর্তি বিজ্ঞপ্তি, সার্কুলার ও ফাইল ডাউনলোড।",
};

export default function NoticesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
