import Image from "next/image";
import Link from "next/link";

const homePhotos = [
  { src: "/slider/1.webp", alt: "কুড়িগ্রাম সরকারি কলেজ ক্যাম্পাস" },
  { src: "/slider/3.webp", alt: "কলেজের একাডেমিক ভবন" },
  { src: "/slider/5.jpg", alt: "কলেজ ক্যাম্পাসের মূল ফটক" },
  { src: "/slider/8.webp", alt: "ক্যাম্পাসের খেলার মাঠ" },
  {
    src: "/slider/science-show-2021-students.jpg",
    alt: "বিজ্ঞান শো ২০২০-২১ — বিভাগের শিক্ষার্থীদের দলীপ ছবি",
  },
  {
    src: "/slider/science-show-2021-prize.jpg",
    alt: "বিজ্ঞান শো ২০২০-২১ — পুরস্কার বিতরণ অনুষ্ঠান",
  },
];

export default function HomeGallery() {
  return (
    <section
      className="bg-[#F4F8FB] px-3 pb-16 sm:px-5 sm:pb-20"
      aria-labelledby="home-gallery-heading"
    >
      <div className="mx-auto w-full max-w-[1140px] overflow-hidden rounded-xl bg-white shadow-[0_12px_30px_rgb(22_101_52_/_10%)]">
        <div className="flex items-center gap-3 bg-[#166534] px-4 py-4 text-white sm:gap-4 sm:px-7 sm:py-5">
          <div
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-4 border-[#FBBF24]/30 bg-[#FBBF24] text-[#14532d] sm:h-12 sm:w-12"
            aria-hidden="true"
          >
            <CameraIcon />
          </div>
          <div>
            <h2 id="home-gallery-heading" className="text-lg font-extrabold sm:text-2xl">
              গ্যালারি
            </h2>
            <p className="mt-1 text-[11px] text-emerald-100 sm:text-sm">
              ক্যাম্পাস ও বিভাগীয় কার্যক্রমের কিছু মুহূর্ত
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 px-3 pb-4 pt-3 sm:grid-cols-3 sm:gap-5 sm:px-5 sm:pb-5 sm:pt-4 md:px-6 md:pb-6">
          {homePhotos.map((photo) => (
            <Link
              key={photo.src}
              href="/gallery"
              aria-label={`গ্যালারিতে দেখুন: ${photo.alt}`}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-[#E5EAF0] bg-[#EAF1F6] focus:outline-none focus:ring-2 focus:ring-[#166534]"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 transition duration-300 group-hover:opacity-100" />
              <span className="absolute inset-x-0 bottom-0 translate-y-2 p-2.5 text-[11px] font-semibold leading-snug text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:p-3 sm:text-xs">
                {photo.alt}
              </span>
            </Link>
          ))}
        </div>

        <div className="flex justify-center px-3 pb-5 md:pb-6">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 rounded-full border-2 border-[#166534] px-5 py-2.5 text-xs font-bold text-[#166534] transition hover:bg-[#14532d] hover:text-white sm:px-6 sm:text-sm"
          >
            সব ছবি দেখুন <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}

function CameraIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6 fill-none stroke-current"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3Z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 shrink-0 fill-none stroke-current"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}
