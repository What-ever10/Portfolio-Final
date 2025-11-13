import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import '../assets/styles/header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', path: 'home' },
    { name: 'About', path: 'about' },
    { name: 'Skills', path: 'skills' },
    { name: 'Projects', path: 'projects' },
    { name: 'Contact', path: 'contact' }
  ];

  return (
    <motion.header
      className={`header ${scrolled ? 'scrolled' : ''}`}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <RouterLink to="/" className="logo">
          <span>My Portfolio</span>
        </RouterLink>

        <nav className={`nav ${isOpen ? 'open' : ''}`}>
          <ul>
            {navLinks.map((link, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ScrollLink
                  to={link.path}
                  smooth={true}
                  duration={500}
                  offset={-80} // Adjust this if you have a fixed header height
                  onClick={() => setIsOpen(false)}
                  className={`nav-link ${scrolled ? 'scrolled-link' : ''}`}
                  style={{ cursor: 'pointer' }}
                >
                  {link.name}
                </ScrollLink>
              </motion.li>
            ))}
          </ul>
        </nav>

        <button 
            className={`menu-btn ${isOpen ? 'menu-btn-open' : ''}`} 
            onClick={toggleMenu} 
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </motion.header>
  );
};

export default Header;