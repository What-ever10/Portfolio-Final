import { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { FaPaperPlane, FaCheck, FaExclamationTriangle } from 'react-icons/fa';
import '../assets/styles/contact.css';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: false
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: false });

    try {
      await axios.post(`${API_BASE_URL}/api/contact`, formData);
      setStatus({ submitting: false, success: true, error: false });
      setFormData({ name: '', email: '', message: '' });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setStatus({ submitting: false, success: false, error: false });
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus({ submitting: false, success: false, error: true });
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="contact-content"
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have a project in mind or want to connect? Feel free to reach out!
          </p>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="5"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={status.submitting}
              className="btn"
              aria-label="Send message"
            >
              {status.submitting ? (
                'Sending...'
              ) : (
                <>
                  <FaPaperPlane /> Send Message
                </>
              )}
            </button>

            {status.success && (
              <div className="status-message success">
                <FaCheck /> Message sent successfully!
              </div>
            )}
            {status.error && (
              <div className="status-message error">
                <FaExclamationTriangle /> Error sending message. Please try again.
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;