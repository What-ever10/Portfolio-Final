import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';
import { SiLeetcode, SiCodeforces } from 'react-icons/si';
import '../assets/styles/footer.css';

const Footer = () => {
  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/What-ever10' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com/in/pratyush-kumar-p14s12' },
      { icon: <SiLeetcode />, url: 'https://leetcode.com/u/Pratyush_Kumar_1412/' },
    { icon: <SiCodeforces />, url: 'https://codeforces.com/profile/_tHe_Guy' }
    
  ];

  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="footer-content"
        >
          <div className="footer-social">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                aria-label={`Visit my ${link.url.includes('github') ? 'GitHub' : link.url.includes('linkedin') ? 'LinkedIn' : 'Twitter'} profile`}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
          <p className="footer-text">
            Made with <FaHeart className="heart" /> by Pratyush Kumar
          </p>
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} All Rights Reserved
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;