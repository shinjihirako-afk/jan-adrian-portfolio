/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",

  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        sm: "2rem",
        lg: "3rem",
        xl: "4rem",
        "2xl": "5rem",
      },
    },

    extend: {
      /*
       * Font System
       * display: headings / hero text
       * body: normal UI text
       * mono: code-like labels
       */
      fontFamily: {
        display: ['"Syne"', "ui-sans-serif", "system-ui", "sans-serif"],
        body: ['"DM Sans"', "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "SFMono-Regular", "monospace"],
      },

      /*
       * Color System
       * brand is your main green accent.
       * dark is your custom neutral/dark palette.
       */
      colors: {
        brand: {
          50: "#eefff7",
          100: "#d7ffee",
          200: "#b2ffde",
          300: "#76ffc2",
          400: "#33f49e",
          500: "#09dc7c",
          600: "#00b863",
          700: "#009151",
          800: "#057243",
          900: "#065d38",
          950: "#013420",
        },

        dark: {
          50: "#f6f6f7",
          100: "#e1e3e8",
          200: "#c3c7d1",
          300: "#9da4b5",
          400: "#767e96",
          500: "#5c647c",
          600: "#494f66",
          700: "#3d4154",
          800: "#353848",
          900: "#16181f",
          950: "#0e0f15",
        },
      },

      /*
       * Premium Backgrounds
       * Useful for hero sections, cards, and glassmorphism layouts.
       */
      backgroundImage: {
        "hero-grid":
          "linear-gradient(to right, rgba(16,185,129,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(16,185,129,0.08) 1px, transparent 1px)",

        "hero-radial":
          "radial-gradient(circle at top left, rgba(16,185,129,0.18), transparent 34%), radial-gradient(circle at 85% 20%, rgba(20,184,166,0.14), transparent 28%), radial-gradient(circle at 50% 100%, rgba(16,185,129,0.12), transparent 32%)",

        "brand-gradient":
          "linear-gradient(135deg, #09dc7c 0%, #00b863 45%, #14b8a6 100%)",

        "dark-gradient":
          "linear-gradient(135deg, #16181f 0%, #0e0f15 100%)",
      },

      /*
       * Box Shadows
       * More premium card, glow, and button shadows.
       */
      boxShadow: {
        glow: "0 0 20px rgba(9, 220, 124, 0.3)",
        "glow-lg": "0 0 40px rgba(9, 220, 124, 0.22)",
        "glow-xl": "0 0 80px rgba(9, 220, 124, 0.18)",

        card: "0 4px 24px rgba(15, 23, 42, 0.08)",
        "card-md": "0 16px 50px rgba(15, 23, 42, 0.10)",
        "card-lg": "0 30px 100px rgba(15, 23, 42, 0.14)",

        "card-dark": "0 24px 80px rgba(0, 0, 0, 0.42)",

        button: "0 18px 50px rgba(9, 220, 124, 0.28)",
        "button-hover": "0 24px 70px rgba(9, 220, 124, 0.38)",
      },

      /*
       * Border Radius
       * Extra-large radius helps create Apple/SaaS-style cards.
       */
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },

      /*
       * Timing Functions
       * smoother UI motion.
       */
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
      },

      /*
       * Animations
       */
      animation: {
        "fade-in": "fadeIn 0.6s ease-out both",
        "fade-in-up": "fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both",
        "slide-up": "slideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
        "slide-in-right":
          "slideInRight 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",

        float: "float 5s ease-in-out infinite",
        blob: "blob 9s ease-in-out infinite",
        "scroll-dot": "scrollDot 1.6s ease-in-out infinite",

        "pulse-slow": "pulse 3s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
      },

      keyframes: {
        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },

        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(24px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },

        slideUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },

        slideInRight: {
          "0%": {
            opacity: "0",
            transform: "translateX(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },

        float: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-14px)",
          },
        },

        blob: {
          "0%, 100%": {
            transform: "translate(0, 0) scale(1)",
          },
          "33%": {
            transform: "translate(24px, -32px) scale(1.08)",
          },
          "66%": {
            transform: "translate(-20px, 24px) scale(0.96)",
          },
        },

        scrollDot: {
          "0%": {
            transform: "translateY(0)",
            opacity: "1",
          },
          "60%": {
            transform: "translateY(14px)",
            opacity: "0.3",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
      },

      /*
       * Animation Delays
       * Use like: delay-300, delay-700, delay-1000
       * For animation delay specifically, arbitrary classes are still best:
       * [animation-delay:300ms]
       */
      transitionDelay: {
        300: "300ms",
        500: "500ms",
        700: "700ms",
        1000: "1000ms",
        2000: "2000ms",
        4000: "4000ms",
      },

      /*
       * Background Size
       * Useful for grid textures.
       */
      backgroundSize: {
        grid: "44px 44px",
      },
    },
  },

  plugins: [],
};
``