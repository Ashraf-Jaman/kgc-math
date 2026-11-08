export default function Home() {
  return (
    <main className="min-h-0 flex-1 bg-[#F4F8FB]">
      <div className="mx-auto w-[calc(100%-40px)] max-w-[1180px] py-[90px] text-center max-[760px]:w-[calc(100%-28px)] max-[760px]:py-[60px] max-[430px]:w-[calc(100%-20px)]">
        <p className="mb-3 text-[0.85rem] font-extrabold uppercase tracking-[0.14em] text-[#2E8B57]">Kurigram Government College</p>
        <h1 className="mx-auto max-w-[720px] text-[clamp(2rem,5vw,3.8rem)] font-extrabold leading-[1.1] text-[#164A7A]">Welcome to the Department of Mathematics</h1>
        <p className="mx-auto mt-[22px] max-w-[570px] text-[1.1rem] leading-[1.7] text-[#53646C]">
          Explore our academic programs, faculty members, and departmental
          activities.
        </p>
      </div>
    </main>
  );
}
