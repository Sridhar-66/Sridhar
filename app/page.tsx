import PolaroidBackground from "./components/PolaroidBackground";

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

  const stickers = [
    { text: "CMO @ Dari", rotate: "-rotate-6", bg: "bg-[#FFAE00]" },
    { text: "CSE '28", rotate: "rotate-3", bg: "bg-[#D6006B]" },
    { text: "IIM Vizag", rotate: "-rotate-2", bg: "bg-[#0B6E4F]" },
  ];

  return (
    <div className="relative flex flex-col flex-1 bg-[#120E1F] text-[#F6EEDD] overflow-x-hidden">
      <PolaroidBackground opacity={0.15} />

      {/* HERO */}
      <section className="relative border-b-4 border-[#F6EEDD] px-6 sm:px-12 pt-24 pb-24">
        {/* scattered stamp badges */}
        <div className="flex flex-wrap gap-3 mb-10">
          {stickers.map((s) => (
            <span
              key={s.text}
              className={`${s.bg} ${s.rotate} stamp-border text-[#120E1F] rounded-full px-4 py-1.5 font-display font-bold text-sm inline-block hover:rotate-0 transition-transform duration-300`}
            >
              {s.text}
            </span>
          ))}
        </div>

        <h1 className="hero-swing font-display font-extrabold leading-[0.85] tracking-tight text-[18vw] sm:text-[9rem] md:text-[11rem] text-[#F6EEDD] -ml-1">
          SRIDHAR
        </h1>

        <p className="font-accent text-2xl sm:text-3xl text-[#FFAE00] mt-4 -rotate-1">
          builds things that probably shouldn&apos;t work, but do.
        </p>

        <div className="mt-8 max-w-xl">
          <p className="text-lg sm:text-xl font-body leading-relaxed text-[#F6EEDD]/85">
            Co-founder at NxtStepEdu. B.Tech CSE student. Currently trying to
            make school ERPs less painful and internships actually mean
            something.
          </p>
        </div>
<div className="mt-10 flex flex-wrap gap-4">
  <a
    href="#life"
    className="rounded-full bg-[#E63E1F] text-[#F6EEDD] px-7 py-3.5 font-display font-bold border-3 border-[#F6EEDD] transition-transform hover:-rotate-2 hover:scale-105"
  >
    See what I&apos;m about
  </a>

  <a
    href="#contact"
    className="rounded-full bg-transparent text-[#F6EEDD] px-7 py-3.5 font-display font-bold stamp-border border-[#F6EEDD] transition-transform hover:rotate-2 hover:scale-105"
  >
    Say hi
  </a>
</div>

        {/* decorative shapes, truck-art style */}
        <div className="hidden md:block absolute top-20 right-16 w-28 h-28 rounded-full border-4 border-dashed border-[#FFAE00]" />
        <div className="hidden md:block absolute bottom-16 right-48 w-16 h-16 rotate-45 bg-[#D6006B]" />
      </section>

      {/* SIGNBOARD MARQUEE */}
      <div className="border-b-4 border-[#F6EEDD] signboard-track py-4 overflow-hidden -rotate-1 scale-105">
        <div className="flex whitespace-nowrap marquee-track font-display font-bold text-[#F6EEDD] text-xl">
          {Array(2).fill(null).map((_, i) => (
            <span key={i} className="flex items-center gap-8 pr-8">
              <span>EDTECH BUILDER</span>
              <span>◆</span>
              <span>CSE STUDENT</span>
              <span>◆</span>
              <span>NXTSTEPEDU CO-FOUNDER</span>
              <span>◆</span>
              <span>IIM VIZAG RESEARCH</span>
              <span>◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* ABOUT MY LIFE — collage, not a card grid */}
      <section id="life" className="px-6 sm:px-12 py-24 border-b-4 border-[#F6EEDD]">
        <h2 className="font-display font-extrabold text-4xl sm:text-5xl mb-2 -rotate-1 inline-block">
          About my life
        </h2>
        <p className="font-accent text-xl text-[#F6EEDD]/70 mb-14 max-w-md">
          the short, unfiltered version of what I do and why
        </p>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          <div className="md:col-span-4 rotate-1 rounded-tr-[3rem] rounded-bl-[3rem] bg-[#E63E1F] stamp-border p-8">
            <h3 className="font-display font-bold text-2xl mb-3 text-[#120E1F]">
              I&apos;m building NxtStepEdu
            </h3>
            <p className="text-[#120E1F]/90 leading-relaxed font-body">
              A mobile-first, cloud-based school management ERP. Schools run
              on paperwork and scattered spreadsheets — I&apos;m trying to fix
              that, one feature at a time.
            </p>
          </div>

          <div className="md:col-span-2 -rotate-2 rounded-full bg-[#120E1F] border-4 border-[#FFAE00] p-8 flex flex-col justify-center items-center text-center">
            <p className="font-display font-extrabold text-6xl text-[#FFAE00]">CSE</p>
            <p className="text-[#F6EEDD]/80 mt-2 font-body">
              B.Tech Computer Science, still in progress.
            </p>
          </div>

          <div className="md:col-span-2 rotate-2 rounded-3xl bg-[#FFAE00] stamp-border p-8">
            <h3 className="font-display font-bold text-2xl mb-3 text-[#120E1F]">LockedIn</h3>
            <p className="text-[#120E1F]/90 leading-relaxed font-body">
              Remote internships that are actually project-based — real work
              for engineering students, not busywork.
            </p>
          </div>

          <div className="md:col-span-4 -rotate-1 rounded-tl-[3rem] rounded-br-[3rem] bg-[#0B6E4F] stamp-border p-8">
            <h3 className="font-display font-bold text-2xl mb-3 text-[#F6EEDD]">
              Research at IIM Vizag
            </h3>
            <p className="text-[#F6EEDD]/90 leading-relaxed font-body">
              Alongside the startup, I&apos;m doing a research internship under
              Preeti Ma&apos;am — a different kind of building, but I like the
              balance of it.
            </p>
          </div>
        </div>
      </section>

      {/* JOURNEY — genuine timeline, stamped numbering */}
      <section className="px-6 sm:px-12 py-24 border-b-4 border-[#F6EEDD] relative">
        <h2 className="font-display font-extrabold text-4xl sm:text-5xl mb-14 rotate-1 inline-block">
          The journey so far
        </h2>

        <div className="flex flex-col gap-0 relative">
          <div className="absolute left-[27px] sm:left-[35px] top-4 bottom-4 border-l-4 border-dashed border-[#F6EEDD]/30 hidden sm:block" />
          {journey.map((item, i) => (
            <div
              key={item.title}
              className="flex gap-6 sm:gap-10 py-8 relative"
            >
              <div
                className={`font-display font-extrabold text-xl sm:text-2xl w-14 h-14 sm:w-16 sm:h-16 shrink-0 rounded-full flex items-center justify-center border-3 border-[#F6EEDD] z-10 ${
                  ["bg-[#E63E1F]", "bg-[#FFAE00] text-[#120E1F]", "bg-[#D6006B]", "bg-[#0B6E4F]"][i]
                } ${i % 2 === 0 ? "-rotate-6" : "rotate-6"}`}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="flex-1 pt-2">
                <p className="font-accent text-lg text-[#FFAE00] mb-1">
                  {item.year}
                </p>
                <h3 className="font-display font-bold text-2xl mb-2">
                  {item.title}
                </h3>
                <p className="text-[#F6EEDD]/75 max-w-xl leading-relaxed font-body">
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
        className="relative px-6 sm:px-12 py-28 bg-[#D6006B] flex-1 flex flex-col justify-center items-start overflow-hidden"
      >
        <div className="hidden md:block absolute -top-10 -left-10 w-40 h-40 rounded-full border-4 border-dashed border-[#F6EEDD]/40" />

        <h2 className="font-display font-extrabold text-5xl sm:text-7xl text-[#F6EEDD] leading-[0.9] mb-6 -rotate-2">
          Let&apos;s build
          <br />
          something.
        </h2>
        <p className="font-body text-[#F6EEDD]/85 text-lg max-w-md mb-8">
          Open to conversations about edtech, internships, research, or
          anything you think I&apos;d find interesting.
        </p>
        
          <a
  href="mailto:sridharraghumanda@gmail.com"
  className="rounded-full bg-[#FFAE00] text-[#120E1F] px-8 py-4 font-display font-extrabold border-4 border-[#120E1F] rotate-2 transition-transform hover:rotate-0 hover:scale-105"
>
  sridharraghumanda@gmail.com
</a>

        <div className="hidden md:block absolute bottom-10 right-16 w-20 h-20 rotate-45 bg-[#FFAE00] border-4 border-[#F6EEDD]" />
      </section>
    </div>
  );
}