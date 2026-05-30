// src/components/Projects.jsx
// Projects section — fetches projects from the backend API and displays them as cards

import { useState, useEffect } from 'react';
import axios from 'axios';

// Base URL for API requests
// In development: Vite's proxy forwards /api → http://localhost:5000
// In production: set VITE_API_URL to your deployed backend URL
const API_URL = import.meta.env.VITE_API_URL || '/api';

// External link icon SVG
const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
  </svg>
);

const GitHubIcon = () => (
  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

// Individual project card component
function ProjectCard({ project }) {
  const { title, description, technologies = [], liveDemo, github } = project;

  return (
    <div className="card p-6 flex flex-col gap-4 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group">
      {/* Card header */}
      <div className="flex items-start justify-between gap-3">
        <div className="p-2.5 rounded-lg bg-brand-50 dark:bg-brand-950/30 border border-brand-200 dark:border-brand-800/40">
          {/* Folder/code icon */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-brand-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
          </svg>
        </div>

        {/* GitHub and Live Demo links */}
        <div className="flex gap-2">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} GitHub repository`}
              className="p-1.5 rounded-md text-dark-400 dark:text-dark-500 hover:text-dark-900 dark:hover:text-white hover:bg-dark-100 dark:hover:bg-dark-800 transition-all"
            >
              <GitHubIcon />
            </a>
          )}
          {liveDemo && (
            <a
              href={liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} live demo`}
              className="p-1.5 rounded-md text-dark-400 dark:text-dark-500 hover:text-brand-500 hover:bg-dark-100 dark:hover:bg-dark-800 transition-all"
            >
              <ExternalLinkIcon />
            </a>
          )}
        </div>
      </div>

      {/* Project title */}
      <h3 className="font-display font-bold text-dark-900 dark:text-white text-lg group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
        {title}
      </h3>

      {/* Description */}
      <p className="text-dark-500 dark:text-dark-400 text-sm leading-relaxed flex-1">
        {description}
      </p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-dark-100 dark:border-dark-800">
        {technologies.map((tech) => (
          <span key={tech} className="tech-badge">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

// Skeleton loading card (shown while fetching)
function ProjectSkeleton() {
  return (
    <div className="card p-6 space-y-4 animate-pulse">
      <div className="flex justify-between">
        <div className="w-10 h-10 bg-dark-100 dark:bg-dark-800 rounded-lg" />
        <div className="flex gap-2">
          <div className="w-7 h-7 bg-dark-100 dark:bg-dark-800 rounded-md" />
          <div className="w-7 h-7 bg-dark-100 dark:bg-dark-800 rounded-md" />
        </div>
      </div>
      <div className="h-5 bg-dark-100 dark:bg-dark-800 rounded w-3/4" />
      <div className="space-y-2">
        <div className="h-3 bg-dark-100 dark:bg-dark-800 rounded w-full" />
        <div className="h-3 bg-dark-100 dark:bg-dark-800 rounded w-5/6" />
        <div className="h-3 bg-dark-100 dark:bg-dark-800 rounded w-4/6" />
      </div>
      <div className="flex gap-1.5 pt-2 border-t border-dark-100 dark:border-dark-800">
        {[1,2,3].map(i => (
          <div key={i} className="h-5 w-14 bg-dark-100 dark:bg-dark-800 rounded" />
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const [projects, setProjects] = useState([]);  // fetched projects
  const [loading, setLoading]   = useState(true); // loading state
  const [error, setError]       = useState(null); // error message

  // Fetch projects from the backend on component mount
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_URL}/projects`);

        // API returns { success: true, data: [...] }
        if (response.data.success) {
          setProjects(response.data.data);
        } else {
          setError('Failed to load projects.');
        }
      } catch (err) {
        console.error('Projects fetch error:', err);
        setError('Could not connect to the server. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="py-24 bg-dark-50 dark:bg-dark-950/50">
      <div className="section-container">

        {/* Section Header */}
        <div className="mb-14">
          <p className="text-xs font-mono text-brand-500 uppercase tracking-widest mb-2">
            03 / Projects
          </p>
          <h2 className="section-title title-underline">What I've Built</h2>
          <p className="section-subtitle max-w-xl mt-4">
            A collection of projects I've built while learning and practicing full-stack development.
          </p>
        </div>

        {/* Error State */}
        {error && !loading && (
          <div className="p-5 rounded-xl bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800/40 flex items-start gap-3 mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
            </svg>
            <p className="text-red-700 dark:text-red-400 text-sm">{error}</p>
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => <ProjectSkeleton key={i} />)
            : projects.map((project) => (
                <ProjectCard key={project._id} project={project} />
              ))
          }
        </div>

        {/* Empty state — no projects in DB */}
        {!loading && !error && projects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-4xl mb-4">🚀</p>
            <p className="text-dark-500 dark:text-dark-400 text-base">
              No projects yet. Run{' '}
              <code className="font-mono text-sm bg-dark-100 dark:bg-dark-800 px-2 py-0.5 rounded">
                npm run seed
              </code>{' '}
              in the backend folder to add sample projects.
            </p>
          </div>
        )}

        {/* GitHub CTA */}
        {!loading && projects.length > 0 && (
          <div className="mt-10 text-center">
            <a
              href="https://github.com/janadriang"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <GitHubIcon />
              View All on GitHub
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
