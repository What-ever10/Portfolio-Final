import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaArrowDown } from 'react-icons/fa';
import { SiLeetcode, SiCodeforces } from 'react-icons/si';
import '../assets/styles/hero.css';

const Hero = () => {
  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/What-ever10?tab=repositories' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com/in/pratyush-kumar-p14s12' },
      { icon: <SiLeetcode />, url: 'https://leetcode.com/u/Pratyush_Kumar_1412/' },
    { icon: <SiCodeforces />, url: 'https://codeforces.com/profile/_tHe_Guy' }
  ];

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="hero-subtitle">Hi, I'm</h4>
            <h1 className="hero-title"> Pratyush Kumar</h1>
            <h2 className="hero-role">Full Stack Developer</h2>
            <p className="hero-description">
              I build exceptional digital experiences focused on performance, 
              accessibility, and responsive design.
            </p>
            
            <div className="hero-cta">
              <a href="#contact" className="btn btn-outline">Contact Me</a>
              <a href="#projects" className="btn btn-outline">View Work</a>
            </div>
          </motion.div>

          <div className="hero-social">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 + 0.5 }}
                whileHover={{ y: -5 }}
                aria-label={`Visit my ${link.url.includes('github') ? 'GitHub' : link.url.includes('linkedin') ? 'LinkedIn' : 'Twitter'} profile`}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>

        <motion.div
          className="hero-scroll"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <a href="#about" className="scroll-down" aria-label="Scroll down">
            <FaArrowDown />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;