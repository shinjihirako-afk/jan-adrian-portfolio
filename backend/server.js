// server.js
// Main entry point for the Express backend server

require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

// --- Import Routes ---
const projectRoutes = require('./routes/projectRoutes');
const contactRoutes = require('./routes/contactRoutes');

// --- Initialize Express App ---
const app = express();

// --- Connect to MongoDB ---
connectDB();

// --- Middleware ---

// CORS: Allow requests from your frontend URL
const allowedOrigins = [
  process.env.FRONTEND_URL || 'http://localhost:5173',
  'https://janadriang.vercel.app', // Replace with your actual Vercel URL after deployment
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (e.g., Postman, curl) or from allowed origins
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  })
);

// Parse incoming JSON request bodies
app.use(express.json());

// Parse URL-encoded form data
app.use(express.urlencoded({ extended: false }));

// --- API Routes ---
app.use('/api/projects', projectRoutes);
app.use('/api/contact', contactRoutes);

// --- Health Check Route ---
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: "Jan Adrian's Portfolio API is running 🚀",
    version: '1.0.0',
  });
});

// --- 404 Handler (for undefined routes) ---
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.originalUrl} not found.`,
  });
});

// --- Global Error Handler ---
app.use((err, req, res, next) => {
  console.error('Server Error:', err.stack);
  res.status(500).json({
    success: false,
    message: err.message || 'Internal Server Error',
  });
});

// --- Start Server ---
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📡 API available at http://localhost:${PORT}`);
});
