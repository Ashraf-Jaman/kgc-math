import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "অ্যাডমিন প্যানেল | গণিত বিভাগ - কুড়িগ্রাম সরকারি কলেজ",
  // অ্যাডমিন পেজ কখনো সার্চ ইনডেক্সে যাওয়া উচিত নয়
  robots: { index: false, follow: false, nocache: true },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
