// seed/seedProjects.js

require("dotenv").config({ path: "./.env" });

const connectDB = require("../config/db");
const Project = require("../models/Project");

// Single Portfolio Project
const sampleProjects = [
  {
    title: "Personal Portfolio Website",

    description:
      "A modern full-stack portfolio website built using React, Express, and MongoDB with responsive design, smooth animations, dark mode support, and a working contact form.",

    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],

    liveDemo: "https://janadriang.vercel.app",

    github: "https://github.com/janadriang/portfolio",

    image: "",
  },
];

const seedDatabase = async () => {
  try {
    // Connect MongoDB
    await connectDB();

    console.log("✅ MongoDB Connected");

    // Remove old projects
    await Project.deleteMany();

    console.log("🗑️ Old projects removed");

    // Insert new project
    const inserted = await Project.insertMany(sampleProjects);

    console.log(
      `✅ Successfully seeded ${inserted.length} project`
    );

    process.exit(0);
  } catch (error) {
    console.error("❌ Seed Error:", error.message);

    process.exit(1);
  }
};

seedDatabase();