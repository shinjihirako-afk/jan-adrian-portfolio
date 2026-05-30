// src/components/Contact.jsx
// Contact section — form with frontend validation and backend POST submission

import { useState } from 'react';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || '/api';

// Initial form state
const INITIAL_FORM = { name: '', email: '', message: '' };
const INITIAL_ERRORS = { name: '', email: '', message: '' };

// --- Frontend validation helper ---
function validateForm(values) {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = 'Name is required.';
  } else if (values.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters.';
  }

  if (!values.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(values.email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!values.message.trim()) {
    errors.message = 'Message is required.';
  } else if (values.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters.';
  }

  return errors;
}

// Individual form input with error message
function FormField({ label, id, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-1.5">
        {label} <span className="text-brand-500">*</span>
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-xs text-red-500 dark:text-red-400 flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
}

// Contact info card
function ContactInfoCard({ icon, title, value, href }) {
  const content = (
    <div className="flex items-center gap-3 p-4 rounded-xl bg-dark-50 dark:bg-dark-800/50 border border-dark-100 dark:border-dark-800 hover:border-brand-500/30 transition-colors">
      <div className="p-2 rounded-lg bg-brand-50 dark:bg-brand-950/30 text-brand-500 text-xl flex-shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-xs text-dark-400 dark:text-dark-500 font-medium uppercase tracking-wide">{title}</p>
        <p className="text-sm font-medium text-dark-700 dark:text-dark-300 mt-0.5">{value}</p>
      </div>
    </div>
  );

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer">{content}</a>
  ) : content;
}

export default function Contact() {
  const [form, setForm]       = useState(INITIAL_FORM);
  const [errors, setErrors]   = useState(INITIAL_ERRORS);
  const [status, setStatus]   = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [serverMsg, setServerMsg] = useState('');

  // Handle input changes and clear field-level errors on type
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Run frontend validation
    const validationErrors = validateForm(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Clear errors and start loading
    setErrors(INITIAL_ERRORS);
    setStatus('loading');

    try {
      const response = await axios.post(`${API_URL}/contact`, form);

      if (response.data.success) {
        setStatus('success');
        setServerMsg(response.data.message || 'Message sent successfully!');
        setForm(INITIAL_FORM); // Reset form on success
      } else {
        setStatus('error');
        setServerMsg(response.data.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setStatus('error');
      setServerMsg(
        err.response?.data?.message ||
        'Could not connect to the server. Please try again later.'
      );
    }
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-dark-950">
      <div className="section-container">

        {/* Section Header */}
        <div className="mb-14">
          <p className="text-xs font-mono text-brand-500 uppercase tracking-widest mb-2">
            04 / Contact
          </p>
          <h2 className="section-title title-underline">Get In Touch</h2>
          <p className="section-subtitle max-w-xl mt-4">
            Have a project in mind, a question, or just want to say hi? My inbox is always open.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* ── Left: Info + Social ── */}
          <div className="space-y-6">
            <p className="text-dark-600 dark:text-dark-400 text-base leading-relaxed">
              Whether you're looking to collaborate on a project, have an opportunity,
              or simply want to connect — I'd love to hear from you. I typically respond
              within 24 hours.
            </p>

            {/* Contact info cards */}
            <div className="space-y-3">
              <ContactInfoCard
                icon="📍"
                title="Location"
                value="Blk11b, Lot28, Mountain Heights, Subd, Caloocan City, Philippines"
              />
              <ContactInfoCard
                icon="📧"
                title="Email"
                value="janadriangregorio@gmail.com"
                href="mailto:janadriangregorio@gmail.com"
              />
              <ContactInfoCard
                icon="💼"
                title="LinkedIn"
                value="linkedin.com/in/janadrian"
                href="https://linkedin.com/in/janadrian"
              />
              <ContactInfoCard
                icon="🐙"
                title="GitHub"
                value="github.com/janadrian"
                href="https://github.com/janadrian"
              />
            </div>
          </div>

          {/* ── Right: Contact Form ── */}
          <div className="card p-6 sm:p-8">
            {/* Success message */}
            {status === 'success' && (
              <div className="mb-6 p-4 rounded-xl bg-brand-50 dark:bg-brand-950/20 border border-brand-200 dark:border-brand-800/50 flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-brand-500 mt-0.5 flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <p className="text-brand-700 dark:text-brand-400 text-sm font-medium">{serverMsg}</p>
              </div>
            )}

            {/* Error message */}
            {status === 'error' && (
              <div className="mb-6 p-4 rounded-xl bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800/40 flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                </svg>
                <p className="text-red-700 dark:text-red-400 text-sm">{serverMsg}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Name */}
              <FormField label="Your Name" id="name" error={errors.name}>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={`form-input ${errors.name ? 'border-red-400 focus:border-red-400 focus:ring-red-400/20' : ''}`}
                  disabled={status === 'loading'}
                />
              </FormField>

              {/* Email */}
              <FormField label="Email Address" id="email" error={errors.email}>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className={`form-input ${errors.email ? 'border-red-400 focus:border-red-400 focus:ring-red-400/20' : ''}`}
                  disabled={status === 'loading'}
                />
              </FormField>

              {/* Message */}
              <FormField label="Message" id="message" error={errors.message}>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Hi Jan Adrian! I'd love to connect about..."
                  rows={5}
                  className={`form-input resize-none ${errors.message ? 'border-red-400 focus:border-red-400 focus:ring-red-400/20' : ''}`}
                  disabled={status === 'loading'}
                />
              </FormField>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    {/* Spinner */}
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                    </svg>
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
