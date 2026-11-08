export default function WelcomeSection() {
  return (
    <section
      className="min-h-[462px] w-full overflow-hidden bg-gradient-to-br from-[#FFF2F2] via-[#FFF7F7] to-[#FFFCFC] px-5 py-[58px] max-[760px]:min-h-0 max-[760px]:px-4 max-[760px]:py-[42px] max-[430px]:py-[34px]"
      aria-labelledby="welcome-heading"
    >
      <div className="mx-auto w-full max-w-[1134px]">
        <h1
          id="welcome-heading"
          className="flex items-center gap-3 text-[36px] font-extrabold leading-[42px] text-[#080808] max-[760px]:text-[clamp(1.6rem,7vw,2rem)] max-[760px]:leading-[1.2]"
        >
          <span
            className="h-8 w-[5px] shrink-0 bg-[#AC1F25] max-[430px]:h-7 max-[430px]:w-1"
            aria-hidden="true"
          />
          Welcome
        </h1>
        <p className="mt-16 max-w-[1050px] text-[17px] font-medium leading-[1.9] text-[#263238] max-[760px]:mt-10 max-[760px]:text-[15px] max-[760px]:leading-[1.75] max-[430px]:mt-8 max-[430px]:text-sm">
          The Department of Mathematics at Kurigram Government College is
          dedicated to providing quality education and fostering academic
          excellence through comprehensive teaching and continuous learning. The
          department emphasizes the development of mathematical knowledge,
          analytical thinking, logical reasoning, and problem-solving abilities
          among students. With a structured academic curriculum and a commitment
          to effective teaching, it strives to create an engaging learning
          environment that encourages intellectual curiosity and academic
          growth. The department aims to equip students with a strong foundation
          in both theoretical and applied mathematics, preparing them for higher
          education, research, and diverse professional opportunities. Through
          its commitment to academic standards and the advancement of
          mathematical education, the department continues to contribute to the
          intellectual development of students and the broader academic
          community.
        </p>
      </div>
    </section>
  );
}
