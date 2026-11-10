import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "গণিত বিভাগ | কুড়িগ্রাম সরকারি কলেজ",
  description:
    "কুড়িগ্রাম সরকারি কলেজের গণিত বিভাগের অফিসিয়াল ওয়েবসাইট — নোটিশ, গ্যালারি, শিক্ষকমণ্ডলী, প্রোগ্রাম ও একাডেমিক তথ্য।",
  icons: {
    icon: "/fav-icon.png",
    shortcut: "/fav-icon.png",
    apple: "/fav-icon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="bn"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
