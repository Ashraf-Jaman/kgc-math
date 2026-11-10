import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ফটো গ্যালারি | গণিত বিভাগ - কুড়িগ্রাম সরকারি কলেজ",
  description:
    "কুড়িগ্রাম সরকারি কলেজ ক্যাম্পাস ও গণিত বিভাগের কার্যক্রমের ছবির গ্যালারি।",
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
