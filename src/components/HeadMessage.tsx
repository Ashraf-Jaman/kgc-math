"use client";

import Image from "next/image";

export default function HeadMessage() {
  return (
    <section
      className="py-12 sm:py-16 bg-[#F4F8FB]"
      aria-labelledby="head-message-heading"
    >
      <div className="mx-auto w-[calc(100%-32px)] max-w-[1140px]">
        {/* Section Header */}
        <div className="mb-8 flex items-center gap-3">
          <span className="h-7 w-1.5 rounded-full bg-[#166534]" aria-hidden="true" />
          <h2
            id="head-message-heading"
            className="text-2xl sm:text-3xl font-extrabold text-[#166534] tracking-tight"
          >
            বিভাগীয় প্রধানের বাণী
          </h2>
        </div>

        {/* Message Card Container */}
        <div className="overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-[0_10px_35px_rgba(22,101,52,0.08)]">
          <div className="flex flex-col md:flex-row items-center md:items-stretch">
            {/* Left: Head Photo & Credentials */}
            <div className="w-full md:w-[320px] lg:w-[360px] shrink-0 bg-gradient-to-b from-emerald-50/70 to-white p-6 sm:p-8 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-gray-100">
              <div className="relative h-44 w-44 sm:h-48 sm:w-48 overflow-hidden rounded-2xl ring-4 ring-emerald-600/20 shadow-lg">
                <Image
                  src="/faculty-head.jpg"
                  alt="মো. মশিউর রহমান - বিভাগীয় প্রধান"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 176px, 192px"
                />
              </div>

              <div className="mt-5 space-y-1">
                <h3 className="text-xl font-bold text-gray-900">
                  মো. মশিউর রহমান
                </h3>
                <p className="text-sm font-semibold text-[#166534]">
                  সহযোগী অধ্যাপক ও বিভাগীয় প্রধান
                </p>
                <p className="text-xs text-gray-500 font-medium">
                  গণিত বিভাগ, কুড়িগ্রাম সরকারি কলেজ
                </p>
              </div>
            </div>

            {/* Right: Message Content */}
            <div className="flex-1 p-6 sm:p-10 flex flex-col justify-between">
              <div>
                {/* Quote Icon */}
                <div className="text-emerald-700/20 text-5xl sm:text-6xl font-serif leading-none select-none mb-2" aria-hidden="true">
                  “
                </div>

                <div className="space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
                  <p className="font-medium text-gray-800 text-base sm:text-lg">
                    কুড়িগ্রাম সরকারি কলেজের ঐতিহ্যবাহী গণিত বিভাগে আপনাদের আন্তরিক স্বাগত জানাই।
                  </p>
                  <p>
                    গণিত কেবল একটি পাঠ্যবিষয় নয়; এটি যুক্তি, বিশ্লেষণ ও শৃঙ্খলাবোধ গঠনের এক শক্তিশালী মাধ্যম। আধুনিক বিজ্ঞান, তথ্যপ্রযুক্তি এবং গবেষণার প্রতিটি ক্ষেত্রে গণিতের ভূমিকা অপরিসীম। আমাদের মূল লক্ষ্য শিক্ষার্থীদের মধ্যে সৃজনশীল গাণিতিক চিন্তাভাবনা ও সমস্যা সমাধানের দক্ষতা গড়ে তোলা, যাতে তারা জাতীয় ও আন্তর্জাতিক পরিমণ্ডলে সাফল্যের সাথে নেতৃত্ব দিতে পারে।
                  </p>
                  <p>
                    সুশৃঙ্খল প্রাতিষ্ঠানিক পরিবেশ, অভিজ্ঞ শিক্ষকবৃন্দের নিয়মিত দিকনির্দেশনা এবং শিক্ষার্থীদের নিরলস অধ্যবসায়ের মাধ্যমে আমাদের বিভাগ প্রতিনিয়ত সাফল্যের নতুন মাইলফলক অর্জন করে চলেছে। আসুন, যুক্তি ও জ্ঞানের আলোয় আমরা সকলে মিলে এক আলোকিত ভবিষ্যৎ বিনির্মাণ করি।
                  </p>
                </div>
              </div>

              {/* Signoff (Right Aligned) */}
              <div className="mt-8 pt-5 border-t border-gray-100 flex justify-end text-right">
                <div>
                  <p className="text-base font-bold text-gray-900">মো. মশিউর রহমান</p>
                  <p className="text-xs sm:text-sm font-semibold text-[#166534]">বিভাগীয় প্রধান, গণিত বিভাগ</p>
                  <p className="text-xs text-gray-500">কুড়িগ্রাম সরকারি কলেজ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
