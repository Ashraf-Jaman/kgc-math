import WelcomeSection from "@/components/WelcomeSection";
import NoticeBoard from "@/components/NoticeBoard";
import NewsEvents from "@/components/NewsEvents";
import MessageFromDepartment from "@/components/MessageFromDepartment";

export default function Home() {
  return (
    <main className="min-h-0 flex-1">
      <WelcomeSection />
      <NoticeBoard />
      <NewsEvents />
      <MessageFromDepartment />
    </main>
  );
}
