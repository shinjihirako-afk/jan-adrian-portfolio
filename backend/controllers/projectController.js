// controllers/projectController.js
// Handles logic for project-related API endpoints

const Project = require('../models/Project');

/**
 * @desc    Get all projects
 * @route   GET /api/projects
 * @access  Public
 */
const getProjects = async (req, res) => {
  try {
    // Fetch all projects sorted by newest first
    const projects = await Project.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: projects.length,
      data: projects,
    });
  } catch (error) {
    console.error('Error fetching projects:', error.message);
    res.status(500).json({
      success: false,
      message: 'Server error. Could not fetch projects.',
    });
  }
};

/**
 * @desc    Get a single project by ID
 * @route   GET /api/projects/:id
 * @access  Public
 */
const getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Project not found.',
      });
    }

    res.status(200).json({
      success: true,
      data: project,
    });
  } catch (error) {
    console.error('Error fetching project:', error.message);
    res.status(500).json({
      success: false,
      message: 'Server error. Could not fetch project.',
    });
  }
};

module.exports = { getProjects, getProjectById };
