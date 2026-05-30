// src/components/Hero.jsx

const techStack = ["React", "Node.js", "MongoDB", "Tailwind CSS"];

const profileStats = [
  {
    label: "Projects Built",
    value: "1",
    description: "Portfolio and practice projects",
  },
  {
    label: "Current Focus",
    value: "Full-Stack",
    description: "Frontend, backend, and UI systems",
  },
];

export default function Hero() {
  const scrollTo = (id) => {
    const element = document.getElementById(id);

    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#F8FFFC] pt-28 text-dark-950"
    >
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(9,220,124,0.16),transparent_32%),radial-gradient(circle_at_85%_15%,rgba(20,184,166,0.14),transparent_28%),radial-gradient(circle_at_50%_90%,rgba(9,220,124,0.10),transparent_35%)]" />

      {/* Subtle Grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #09dc7c 1px, transparent 1px), linear-gradient(to bottom, #09dc7c 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      {/* Soft Blobs */}
      <div className="pointer-events-none absolute -right-40 top-20 h-[460px] w-[460px] rounded-full bg-brand-300/25 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-10 h-[420px] w-[420px] rounded-full bg-brand-200/30 blur-3xl" />

      {/* Main Container */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-7rem)] max-w-7xl items-center px-6 py-16 sm:px-8 lg:px-12">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          {/* Left Content */}
          <div className="max-w-3xl">
            {/* Status Badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/80 px-4 py-2 text-sm font-bold text-brand-700 shadow-sm backdrop-blur-xl">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-70" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand-500" />
              </span>
              Available for opportunities
            </div>

            {/* Role */}
            <p className="mb-5 font-mono text-xs font-bold uppercase tracking-[0.28em] text-brand-700 sm:text-sm">
              Student &amp; Aspiring Full-Stack Developer
            </p>

            {/* Heading */}
            <h1 className="font-display text-5xl font-black leading-[0.95] tracking-[-0.055em] text-dark-950 sm:text-6xl md:text-7xl xl:text-8xl">
              Hi, I&apos;m{" "}
              <span className="block bg-gradient-to-r from-brand-500 via-brand-600 to-teal-500 bg-clip-text text-transparent">
                Jan Adrian
              </span>
              <span className="block text-dark-700">Gregorio</span>
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-2xl text-base leading-8 text-dark-500 sm:text-lg">
              I build clean, responsive, and modern web applications using{" "}
              <span className="font-bold text-dark-950">React</span>,{" "}
              <span className="font-bold text-dark-950">Node.js</span>,{" "}
              <span className="font-bold text-dark-950">MongoDB</span>, and{" "}
              <span className="font-bold text-dark-950">Tailwind CSS</span>. I
              focus on smooth user experiences, scalable interfaces, and
              meaningful digital products.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={() => scrollTo("projects")}
                className="group inline-flex items-center justify-center rounded-2xl bg-brand-600 px-7 py-4 text-sm font-black text-white shadow-[0_18px_50px_rgba(9,220,124,0.28)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:bg-brand-500 hover:shadow-[0_24px_70px_rgba(9,220,124,0.38)] focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
              >
                View Projects
                <svg
                  className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12.293 4.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1 0 1.414l-5 5a1 1 0 1 1-1.414-1.414L15.586 11H2a1 1 0 1 1 0-2h13.586l-3.293-3.293a1 1 0 0 1 0-1.414Z" />
                </svg>
              </button>

              <button
                type="button"
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center justify-center rounded-2xl border border-dark-100 bg-white/85 px-7 py-4 text-sm font-black text-dark-800 shadow-[0_14px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-brand-200 hover:bg-white hover:text-brand-700 hover:shadow-[0_20px_55px_rgba(15,23,42,0.12)] focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
              >
                Contact Me
              </button>
            </div>

            {/* Social Links */}
            <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-dark-400">
                Find me on
              </span>

              <div className="flex items-center gap-3">
                {/* GitHub */}
                <a
                  href="https://github.com/janadriang"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="group flex h-12 w-12 items-center justify-center rounded-2xl border border-dark-100 bg-white/85 text-dark-600 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-dark-950 hover:text-white hover:shadow-[0_18px_45px_rgba(15,23,42,0.18)] focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
                >
                  <svg
                    className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.37-12-12-12Z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="group flex h-12 w-12 items-center justify-center rounded-2xl border border-dark-100 bg-white/85 text-dark-600 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#0A66C2] hover:text-white hover:shadow-[0_18px_45px_rgba(10,102,194,0.24)] focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
                >
                  <svg
                    className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Developer Card */}
          <div className="relative mx-auto w-full max-w-xl lg:mx-0">
            {/* Floating Card */}
            <div className="absolute -left-4 top-12 z-20 hidden rounded-3xl border border-white/80 bg-white/85 px-5 py-4 shadow-[0_20px_60px_rgba(15,23,42,0.14)] backdrop-blur-2xl animate-float sm:block">
              <p className="text-xs font-bold text-dark-400">
                Currently Learning
              </p>
              <p className="mt-1 text-sm font-black text-dark-950">
                Backend Development 🚀
              </p>
            </div>

            {/* Floating Card */}
            <div className="absolute -right-2 bottom-24 z-20 hidden rounded-3xl border border-brand-200 bg-brand-50/90 px-5 py-4 shadow-[0_20px_60px_rgba(9,220,124,0.18)] backdrop-blur-2xl animate-float sm:block">
              <p className="text-xs font-bold text-brand-700">
                Current Focus
              </p>
              <p className="mt-1 text-sm font-black text-dark-950">
                Full-Stack Projects
              </p>
            </div>

            {/* Main Card */}
            <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/75 p-6 shadow-[0_30px_100px_rgba(15,23,42,0.14)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-brand-200 hover:bg-white/85 sm:p-8">
              <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-brand-400 to-transparent" />

              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-300/25 blur-3xl" />
              <div className="absolute -bottom-24 left-10 h-56 w-56 rounded-full bg-teal-300/20 blur-3xl" />

              <div className="relative z-10">
                <div className="mb-8 flex items-start justify-between gap-5">
                  <div>
                    <p className="font-mono text-xs font-bold uppercase tracking-[0.32em] text-dark-400">
                      Developer Profile
                    </p>

                    <h2 className="mt-4 max-w-sm font-display text-3xl font-black leading-tight tracking-[-0.04em] text-dark-950 sm:text-4xl">
                      Building modern{" "}
                      <span className="text-brand-600">digital</span>{" "}
                      experiences.
                    </h2>

                    <p className="mt-4 max-w-md text-sm leading-7 text-dark-500 sm:text-base">
                      Passionate about clean UI, scalable backend systems, and
                      useful web experiences that feel fast, smooth, and easy to
                      use.
                    </p>
                  </div>

                  <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-brand-200 bg-brand-50 text-2xl shadow-inner sm:flex">
                    ⚡
                  </div>
                </div>

                {/* Availability */}
                <div className="rounded-3xl border border-dark-100 bg-white/80 p-4 shadow-sm backdrop-blur-xl">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-bold text-dark-400">
                        Availability
                      </p>

                      <div className="mt-1 flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-brand-500 shadow-[0_0_18px_rgba(9,220,124,0.9)]" />
                        <p className="font-black text-brand-700">
                          Open to opportunities
                        </p>
                      </div>
                    </div>

                    <span className="rounded-2xl bg-brand-100 px-4 py-2 text-sm font-black text-brand-700">
                      Student Developer
                    </span>
                  </div>
                </div>

                {/* Stats */}
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {profileStats.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-3xl border border-dark-100 bg-white/80 p-5 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_18px_45px_rgba(15,23,42,0.1)]"
                    >
                      <h3 className="font-display text-3xl font-black tracking-tight text-dark-950">
                        {item.value}
                      </h3>

                      <p className="mt-1 text-sm font-black text-dark-700">
                        {item.label}
                      </p>

                      <p className="mt-2 text-sm leading-6 text-dark-400">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Learning Progress */}
                <div className="mt-5 rounded-3xl border border-dark-100 bg-white/80 p-5 shadow-sm backdrop-blur-xl">
                  <div className="mb-3 flex items-center justify-between">
                    <p className="text-sm font-black text-dark-800">
                      Learning Progress
                    </p>

                    <p className="text-sm font-black text-brand-600">72%</p>
                  </div>

                  <div className="h-2.5 overflow-hidden rounded-full bg-dark-100">
                    <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-brand-500 to-teal-400 shadow-[0_0_24px_rgba(9,220,124,0.45)]" />
                  </div>

                  <p className="mt-3 text-sm leading-6 text-dark-400">
                    Improving backend architecture, API design, database
                    workflows, and full-stack development practices.
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="mt-6">
                  <p className="mb-3 text-sm font-black text-dark-700">
                    Tech Stack
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-2xl border border-brand-200 bg-brand-50 px-4 py-2 text-sm font-black text-brand-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-300 hover:bg-brand-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mx-auto mt-8 hidden w-max items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-dark-300 lg:flex">
              <span className="h-px w-10 bg-dark-200" />
              Portfolio Preview
              <span className="h-px w-10 bg-dark-200" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        type="button"
        onClick={() => scrollTo("about")}
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-dark-400 transition-colors duration-300 hover:text-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 md:flex"
      >
        <span className="text-xs font-bold uppercase tracking-[0.3em]">
          Scroll
        </span>

        <span className="flex h-9 w-6 justify-center rounded-full border border-dark-200 bg-white/70 p-1 shadow-sm backdrop-blur-xl">
          <span className="h-2 w-1 rounded-full bg-brand-500 animate-bounce" />
        </span>
      </button>
    </section>
  );
}