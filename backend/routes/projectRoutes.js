// routes/projectRoutes.js
// Defines API routes for project endpoints

const express = require('express');
const router = express.Router();
const { getProjects, getProjectById } = require('../controllers/projectController');

// GET /api/projects — fetch all projects
router.get('/', getProjects);

// GET /api/projects/:id — fetch a single project by ID
router.get('/:id', getProjectById);

module.exports = router;
