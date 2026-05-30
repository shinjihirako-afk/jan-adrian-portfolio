// models/Project.js
// Mongoose schema and model for portfolio projects

const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
  {
    // Project title (e.g., "Weather App")
    title: {
      type: String,
      required: [true, 'Project title is required'],
      trim: true,
    },

    // Short description of the project
    description: {
      type: String,
      required: [true, 'Project description is required'],
      trim: true,
    },

    // Array of technologies used (e.g., ["React", "Node.js"])
    technologies: {
      type: [String],
      required: [true, 'Technologies are required'],
    },

    // URL to the live demo (optional)
    liveDemo: {
      type: String,
      trim: true,
      default: '',
    },

    // URL to the GitHub repository (optional)
    github: {
      type: String,
      trim: true,
      default: '',
    },

    // URL to the project image/screenshot (optional)
    image: {
      type: String,
      trim: true,
      default: '',
    },
  },
  {
    // Automatically adds createdAt and updatedAt fields
    timestamps: true,
  }
);

module.exports = mongoose.model('Project', projectSchema);
