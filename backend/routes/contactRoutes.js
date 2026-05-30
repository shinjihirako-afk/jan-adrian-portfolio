// routes/contactRoutes.js
// Defines API routes for contact form endpoints

const express = require('express');
const router = express.Router();
const { submitContact } = require('../controllers/contactController');

// POST /api/contact — submit a contact form message
router.post('/', submitContact);

module.exports = router;
