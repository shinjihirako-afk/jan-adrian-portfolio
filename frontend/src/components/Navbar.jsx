// src/components/Navbar.jsx
// Sticky responsive navigation bar with dark mode toggle and mobile hamburger menu

import { useState, useEffect } from 'react';

// Navigation links — each scrolls smoothly to a section
const NAV_LINKS = [
  { label: 'Home',     href: '#home' },
  { label: 'About',    href: '#about' },
  { label: 'Skills',   href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact' },
];

// SVG icons for dark/light toggle
const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
  </svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
  </svg>
);

export default function Navbar({ darkMode, toggleDarkMode }) {
  const [isOpen, setIsOpen]       = useState(false); // mobile menu open state
  const [scrolled, setScrolled]   = useState(false); // scroll shadow state
  const [activeLink, setActiveLink] = useState('#home');

  // Add shadow/backdrop-blur when user scrolls down
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track which section is currently in view for active link highlighting
  useEffect(() => {
    const sections = NAV_LINKS.map((link) => link.href.replace('#', ''));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Smooth scroll handler
  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-dark-950/90 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="section-container flex items-center justify-between h-16">
        {/* Logo / Brand */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="font-display font-bold text-xl text-dark-900 dark:text-white hover:text-brand-500 dark:hover:text-brand-400 transition-colors"
        >
          Jan<span className="text-brand-500">.</span>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-4 py-2 rounded-lg font-body font-medium text-sm transition-all duration-200 ${
                  activeLink === link.href
                    ? 'text-brand-500 bg-brand-50 dark:bg-brand-950/30'
                    : 'text-dark-600 dark:text-dark-300 hover:text-brand-500 dark:hover:text-brand-400 hover:bg-dark-50 dark:hover:bg-dark-800/50'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side: Dark Mode Toggle + Mobile Menu Button */}
        <div className="flex items-center gap-2">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            className="p-2 rounded-lg text-dark-500 dark:text-dark-400 hover:text-brand-500 dark:hover:text-brand-400
                       hover:bg-dark-50 dark:hover:bg-dark-800 transition-all duration-200"
          >
            {darkMode ? <SunIcon /> : <MoonIcon />}
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle mobile menu"
            className="md:hidden p-2 rounded-lg text-dark-500 dark:text-dark-400 hover:text-brand-500 hover:bg-dark-50 dark:hover:bg-dark-800 transition-all"
          >
            {isOpen ? (
              // Close (X) icon
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger icon
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 dark:bg-dark-950/95 backdrop-blur-md border-t border-dark-100 dark:border-dark-800 animate-fade-in">
          <ul className="section-container py-3 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`block px-4 py-2.5 rounded-lg font-body font-medium text-sm transition-all ${
                    activeLink === link.href
                      ? 'text-brand-500 bg-brand-50 dark:bg-brand-950/30'
                      : 'text-dark-700 dark:text-dark-300 hover:text-brand-500 hover:bg-dark-50 dark:hover:bg-dark-800'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
