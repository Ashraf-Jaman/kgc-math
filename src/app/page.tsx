import WelcomeSection from "@/components/WelcomeSection";
import NoticeBoard from "@/components/NoticeBoard";

export default function Home() {
  return (
    <main className="min-h-0 flex-1">
      <WelcomeSection />
      <NoticeBoard />
    </main>
  );
}
