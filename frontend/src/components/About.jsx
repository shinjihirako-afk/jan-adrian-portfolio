// src/components/About.jsx
// About Me section — bio, highlights, and quick stats

// Stat card data
const STATS = [
  { value: '6+', label: 'Months Learning' },
  { value: '1', label: 'Projects Built' },
  { value: '5+', label: 'Technologies' },
  { value: '100%', label: 'Passion' },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-dark-50 dark:bg-dark-950/50">
      <div className="section-container">

        {/* Section Header */}
        <div className="mb-14">
          <p className="text-xs font-mono text-brand-500 uppercase tracking-widest mb-2">
            01 / About
          </p>
          <h2 className="section-title title-underline">About Me</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ── Left: Bio Text ── */}
          <div className="space-y-6">
            <p className="text-dark-600 dark:text-dark-300 text-base sm:text-lg leading-relaxed">
              Hey there! 👋 I'm{' '}
              <span className="font-semibold text-dark-900 dark:text-white">Jan Adrian Gregorio</span>,
              a student and aspiring full-stack developer based in{' '}
              <span className="font-semibold text-brand-600 dark:text-brand-400">Caloocan City, Philippines</span>.
            </p>

            <p className="text-dark-600 dark:text-dark-300 text-base leading-relaxed">
              I'm deeply passionate about web development and currently on a journey to master both
              the frontend and backend. I love building applications that are not just functional,
              but also clean, fast, and enjoyable to use.
            </p>

            <p className="text-dark-600 dark:text-dark-300 text-base leading-relaxed">
              My current focus is on the{' '}
              <span className="font-semibold text-dark-900 dark:text-white">MERN stack</span>{' '}
              (MongoDB, Express.js, React, Node.js), and I enjoy turning ideas into
              real, working web applications. Every project I build teaches me something new,
              and I embrace every challenge as an opportunity to grow.
            </p>

            <p className="text-dark-600 dark:text-dark-300 text-base leading-relaxed">
              When I'm not coding, I'm reading documentation 📖, watching tutorials 🎬,
              or exploring new tools and technologies to add to my developer toolkit.
            </p>

            {/* Download CV Button (placeholder) */}
            <a
              href="#"
              className="btn-primary inline-flex mt-2"
              onClick={(e) => e.preventDefault()}
              title="Resume coming soon!"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              Download Resume
            </a>
          </div>

          {/* ── Right: Stats + Highlights ── */}
          <div className="space-y-6">
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {STATS.map(({ value, label }) => (
                <div
                  key={label}
                  className="card p-5 text-center hover:-translate-y-1 transition-transform duration-200"
                >
                  <div className="font-display font-extrabold text-3xl gradient-text mb-1">
                    {value}
                  </div>
                  <div className="text-dark-500 dark:text-dark-400 text-sm font-medium">
                    {label}
                  </div>
                </div>
              ))}
            </div>

            {/* Highlights / Key interests */}
            <div className="card p-6 space-y-3">
              <h3 className="font-display font-semibold text-dark-900 dark:text-white text-sm uppercase tracking-wide">
                What I'm working on
              </h3>
              {[
                '🚀 Building full-stack apps with the MERN stack',
                '🎨 Designing clean and responsive UIs with Tailwind CSS',
                '🔧 Learning REST API design and backend architecture',
                '📦 Exploring deployment with Vercel and Render',
                '🌱 Contributing to open-source and building in public',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm text-dark-600 dark:text-dark-300">
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
