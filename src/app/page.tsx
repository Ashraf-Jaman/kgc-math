import type { Metadata } from "next";
import HeroCarousel from "@/components/HeroCarousel";
import NewsTicker from "@/components/NewsTicker";
import HeadMessage from "@/components/HeadMessage";
import DepartmentalTeacher from "@/components/DepartmentalTeacher";
import NoticeBoard from "@/components/NoticeBoard";
import HomeGallery from "@/components/HomeGallery";
import QuickLinks from "@/components/QuickLinks";

export const metadata: Metadata = {
  title: "গণিত বিভাগ | কুড়িগ্রাম সরকারি কলেজ",
  description:
    "কুড়িগ্রাম সরকারি কলেজের গণিত বিভাগ — নোটিশ বোর্ড, ফটো গ্যালারি, শিক্ষকমণ্ডলী, স্নাতক ও স্নাতকোত্তর প্রোগ্রাম এবং একাডেমিক তথ্য।",
};

export default function Home() {
  return (
    <main className="min-h-0 flex-1">
      <HeroCarousel />
      <NewsTicker />
      <HeadMessage />
      <NoticeBoard />
      <DepartmentalTeacher />
      <HomeGallery />
      <QuickLinks />
    </main>
  );
}
