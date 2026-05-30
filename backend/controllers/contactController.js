// controllers/contactController.js
// Handles logic for contact form submissions

const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

/**
 * @desc    Submit a contact form message
 * @route   POST /api/contact
 * @access  Public
 */
const submitContact = async (req, res) => {
  const { name, email, message } = req.body;

  // --- Basic server-side validation ---
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: 'Please provide name, email, and message.',
    });
  }

  // Validate email format
  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: 'Please provide a valid email address.',
    });
  }

  // Validate message length
  if (message.trim().length < 10) {
    return res.status(400).json({
      success: false,
      message: 'Message must be at least 10 characters long.',
    });
  }

  try {
    // Save the contact message to MongoDB
    const newContact = await Contact.create({ name, email, message });

    // --- Optional: Send email notification via Nodemailer ---
    // Only runs if EMAIL_USER and EMAIL_PASS are set in .env
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS, // Use Gmail App Password, not regular password
          },
        });

        await transporter.sendMail({
          from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
          to: process.env.EMAIL_TO || process.env.EMAIL_USER,
          subject: `New Portfolio Message from ${name}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
            <hr>
            <small>Sent from your portfolio contact form.</small>
          `,
        });

        console.log('📧 Email notification sent successfully.');
      } catch (emailError) {
        // Don't fail the request if email fails — just log it
        console.error('Email send error (non-critical):', emailError.message);
      }
    }

    res.status(201).json({
      success: true,
      message: 'Message received! I will get back to you soon.',
      data: {
        id: newContact._id,
        name: newContact.name,
        email: newContact.email,
        createdAt: newContact.createdAt,
      },
    });
  } catch (error) {
    // Handle Mongoose validation errors
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((e) => e.message);
      return res.status(400).json({
        success: false,
        message: messages.join(', '),
      });
    }

    console.error('Error submitting contact:', error.message);
    res.status(500).json({
      success: false,
      message: 'Server error. Could not send message. Please try again.',
    });
  }
};

module.exports = { submitContact };
