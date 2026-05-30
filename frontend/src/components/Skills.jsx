// src/components/Skills.jsx
// Skills section — displays technologies organized by category with icons and progress bars

// Skill data organized by category
const SKILL_CATEGORIES = [
  {
    category: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'HTML5',       level: 85, color: '#E34F26' },
      { name: 'CSS3',        level: 80, color: '#1572B6' },
      { name: 'JavaScript',  level: 75, color: '#F7DF1E' },
      { name: 'React',       level: 70, color: '#61DAFB' },
      { name: 'Tailwind CSS',level: 80, color: '#06B6D4' },
    ],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Node.js',     level: 65, color: '#339933' },
      { name: 'Express.js',  level: 65, color: '#000000' },
      { name: 'MongoDB',     level: 60, color: '#47A248' },
      { name: 'REST APIs',   level: 65, color: '#FF6C37' },
    ],
  },
  {
    category: 'Tools & Dev',
    icon: '🛠️',
    skills: [
      { name: 'Git',         level: 70, color: '#F05032' },
      { name: 'GitHub',      level: 70, color: '#181717' },
      { name: 'VS Code',     level: 85, color: '#007ACC' },
      { name: 'Vite',        level: 65, color: '#646CFF' },
    ],
  },
];

// Simple progress bar for each skill
function SkillBar({ name, level, color }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium text-dark-700 dark:text-dark-300">
          {name}
        </span>
        <span className="text-xs font-mono text-dark-400 dark:text-dark-500">
          {level}%
        </span>
      </div>
      {/* Progress bar track */}
      <div className="h-2 bg-dark-100 dark:bg-dark-800 rounded-full overflow-hidden">
        {/* Progress bar fill — width is set inline to use dynamic level value */}
        <div
          className="h-full rounded-full transition-all duration-700 ease-out"
          style={{
            width: `${level}%`,
            background: `linear-gradient(90deg, #09dc7c, ${color})`,
          }}
        />
      </div>
    </div>
  );
}

// Tech badge chips (additional technologies)
const EXTRA_SKILLS = [
  'Axios', 'Mongoose', 'Nodemailer', 'Vercel', 'Render',
  'Postman', 'npm', 'ESLint', 'Figma (basics)', 'Markdown',
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white dark:bg-dark-950">
      <div className="section-container">

        {/* Section Header */}
        <div className="mb-14">
          <p className="text-xs font-mono text-brand-500 uppercase tracking-widest mb-2">
            02 / Skills
          </p>
          <h2 className="section-title title-underline">Tech Stack</h2>
          <p className="section-subtitle max-w-xl mt-4">
            Technologies I've been working with and building projects in. Always learning new tools.
          </p>
        </div>

        {/* Skill Category Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {SKILL_CATEGORIES.map(({ category, icon, skills }) => (
            <div key={category} className="card p-6">
              {/* Card header */}
              <div className="flex items-center gap-2 mb-5">
                <span className="text-2xl">{icon}</span>
                <h3 className="font-display font-bold text-dark-900 dark:text-white">
                  {category}
                </h3>
              </div>

              {/* Skill bars */}
              <div className="space-y-4">
                {skills.map((skill) => (
                  <SkillBar key={skill.name} {...skill} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Technologies (badge chips) */}
        <div className="card p-6">
          <h3 className="font-display font-semibold text-dark-700 dark:text-dark-300 text-sm uppercase tracking-wide mb-4">
            Also familiar with
          </h3>
          <div className="flex flex-wrap gap-2">
            {EXTRA_SKILLS.map((skill) => (
              <span key={skill} className="tech-badge">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Currently learning callout */}
        <div className="mt-6 p-4 rounded-xl bg-brand-50 dark:bg-brand-950/20 border border-brand-200 dark:border-brand-800/50 flex items-start gap-3">
          <span className="text-xl mt-0.5">📚</span>
          <div>
            <p className="font-semibold text-dark-900 dark:text-white text-sm mb-0.5">
              Currently Learning
            </p>
            <p className="text-dark-500 dark:text-dark-400 text-sm">
              TypeScript, Next.js, Docker basics, and system design fundamentals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
