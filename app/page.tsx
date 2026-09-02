export default function Home() {
  const journey = [
    {
      year: "B.Tech CSE",
      title: "Started Computer Science",
      body: "Picked CSE because I wanted to build things that people actually use — not just study theory.",
    },
    {
      year: "NxtStepEdu",
      title: "Co-founded an edtech startup",
      body: "Building a mobile-first, cloud-based school management ERP — helping schools run smoother, digitally.",
    },
    {
      year: "LockedIn",
      title: "Launched a remote internship program",
      body: "Project-based remote internships for engineering students who want real work, not just a certificate.",
    },
    {
      year: "IIM Vizag",
      title: "Research internship",
      body: "Working under Preeti Ma'am on research — trading founder-mode for a bit of academic rigor.",
    },
  ];

  return (
    <div className="flex flex-col flex-1 bg-[#FFFCF5] text-[#14121F] overflow-x-hidden">

      {/* HERO */}
      <section className="relative border-b-4 border-[#14121F] px-6 sm:px-12 pt-20 pb-16">
        <div
          className="hero-badge inline-block -rotate-2 bg-[#FFD93D] border-4 border-[#14121F] rounded-full px-5 py-1.5 mb-8 font-display font-semibold text-sm"
        >
          currently building things that shouldn&apos;t work but do
        </div>

        <h1 className="font-display font-bold leading-[0.9] tracking-tight text-[15vw] sm:text-[8rem] md:text-[9rem]">
          Sridhar
        </h1>

        <div className="mt-6 max-w-xl">
          <p className="text-xl sm:text-2xl font-medium leading-snug">
            Co-founder at NxtStepEdu. B.Tech CSE student. Currently trying to
            make school ERPs less painful and internships actually mean
            something.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#life"
            className="rounded-full bg-[#14121F] text-[#FFFCF5] px-7 py-3.5 font-display font-semibold border-4 border-[#14121F] transition-transform hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#FF4D8D]"
          >
            See what I&apos;m about
          </a>
          <a
            href="#contact"
            className="rounded-full bg-[#FFFCF5] text-[#14121F] px-7 py-3.5 font-display font-semibold border-4 border-[#14121F] transition-transform hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#6C3CE9]"
          >
            Say hi
          </a>
        </div>

        {/* decorative shape */}
        <div className="hidden md:block absolute top-16 right-16 w-24 h-24 rounded-full bg-[#3DDC97] border-4 border-[#14121F]" />
        <div className="hidden md:block absolute bottom-10 right-40 w-14 h-14 rotate-45 bg-[#FF4D8D] border-4 border-[#14121F]" />
      </section>

      {/* MARQUEE */}
      <div className="border-b-4 border-[#14121F] bg-[#14121F] py-3 overflow-hidden">
        <div className="flex whitespace-nowrap marquee-track font-display font-semibold text-[#FFFCF5] text-lg">
          {Array(2).fill(null).map((_, i) => (
            <span key={i} className="flex items-center gap-6 pr-6">
              <span>EDTECH BUILDER</span>
              <span className="text-[#FFD93D]">✦</span>
              <span>CSE STUDENT</span>
              <span className="text-[#FF4D8D]">✦</span>
              <span>NXTSTEPEDU CO-FOUNDER</span>
              <span className="text-[#3DDC97]">✦</span>
              <span>IIM VIZAG RESEARCH</span>
              <span className="text-[#6C3CE9]">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ABOUT MY LIFE — bento grid */}
      <section id="life" className="px-6 sm:px-12 py-20 border-b-4 border-[#14121F]">
        <h2 className="font-display font-bold text-4xl sm:text-5xl mb-2">
          About my life
        </h2>
        <p className="text-lg text-[#14121F]/70 mb-12 max-w-md">
          The short, unfiltered version of what I do and why.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-5">
          <div className="md:col-span-4 rounded-3xl bg-[#FF4D8D] border-4 border-[#14121F] p-8">
            <h3 className="font-display font-bold text-2xl mb-3">
              I&apos;m building NxtStepEdu
            </h3>
            <p className="text-[#14121F]/90 leading-relaxed">
              A mobile-first, cloud-based school management ERP. Schools run
              on paperwork and scattered spreadsheets — I&apos;m trying to fix
              that, one feature at a time.
            </p>
          </div>

          <div className="md:col-span-2 rounded-3xl bg-[#14121F] border-4 border-[#14121F] p-8 flex flex-col justify-center">
            <p className="font-display font-bold text-5xl text-[#FFD93D]">CSE</p>
            <p className="text-[#FFFCF5]/80 mt-2">
              B.Tech Computer Science, still in progress.
            </p>
          </div>

          <div className="md:col-span-2 rounded-3xl bg-[#FFD93D] border-4 border-[#14121F] p-8">
            <h3 className="font-display font-bold text-2xl mb-3">LockedIn</h3>
            <p className="text-[#14121F]/90 leading-relaxed">
              Remote internships that are actually project-based — real
              work for engineering students, not busywork.
            </p>
          </div>

          <div className="md:col-span-4 rounded-3xl bg-[#3DDC97] border-4 border-[#14121F] p-8">
            <h3 className="font-display font-bold text-2xl mb-3">
              Research at IIM Vizag
            </h3>
            <p className="text-[#14121F]/90 leading-relaxed">
              Alongside the startup, I&apos;m doing a research internship under
              Preeti Ma&apos;am — a different kind of building, but I like the
              balance of it.
            </p>
          </div>
        </div>
      </section>

      {/* JOURNEY — timeline (genuinely sequential, numbering earns its place) */}
      <section className="px-6 sm:px-12 py-20 border-b-4 border-[#14121F]">
        <h2 className="font-display font-bold text-4xl sm:text-5xl mb-12">
          The journey so far
        </h2>

        <div className="flex flex-col gap-0">
          {journey.map((item, i) => (
            <div
              key={item.title}
              className="flex gap-6 sm:gap-10 py-8 border-t-4 border-[#14121F] first:border-t-0"
            >
              <div className="font-display font-bold text-3xl sm:text-4xl text-[#6C3CE9] w-10 sm:w-14 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="flex-1">
                <p className="font-display font-semibold text-sm text-[#FF4D8D] mb-1">
                  {item.year}
                </p>
                <h3 className="font-display font-bold text-2xl mb-2">
                  {item.title}
                </h3>
                <p className="text-[#14121F]/75 max-w-xl leading-relaxed">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="relative px-6 sm:px-12 py-24 bg-[#6C3CE9] flex-1 flex flex-col justify-center items-start"
      >
        <h2 className="font-display font-bold text-5xl sm:text-6xl text-[#FFFCF5] leading-[0.95] mb-6">
          Let&apos;s build
          <br />
          something.
        </h2>
        <p className="text-[#FFFCF5]/80 text-lg max-w-md mb-8">
          Open to conversations about edtech, internships, research, or
          anything you think I&apos;d find interesting.
        </p>
        <a
          href="mailto:you@example.com"
          className="rounded-full bg-[#FFD93D] text-[#14121F] px-8 py-4 font-display font-semibold border-4 border-[#14121F] transition-transform hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#14121F]"
        >
          you@example.com
        </a>

        <div className="hidden md:block absolute bottom-10 right-16 w-20 h-20 rounded-full bg-[#FF4D8D] border-4 border-[#FFFCF5]" />
      </section>
    </div>
  );
}