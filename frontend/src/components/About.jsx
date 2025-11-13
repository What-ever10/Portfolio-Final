import { motion } from 'framer-motion';
import {
  FaReact, 
  FaJs, 
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from 'react-icons/fa';
import { SiMongodb, SiExpress, SiRedux, SiNextdotjs} from 'react-icons/si';
import '../assets/styles/about.css';

const About = () => {
  const skills = [
    'JavaScript', 'React', 'Node.js', 'Express', 'MongoDB',
    'HTML/CSS', 'Git', 'Responsive Design', 'REST APIs'
  ];

  // Floating tech icons data
  const techIcons = [
    { icon: <FaReact size={28} />, name: 'React', color: '#61DAFB' },
    { icon: <FaJs size={28} />, name: 'JavaScript', color: '#F7DF1E' },
    { icon: <FaHtml5 size={28} />, name: 'HTML5', color: '#E34F26' },
    { icon: <FaCss3Alt size={28} />, name: 'CSS3', color: '#1572B6' },
    { icon: <FaNodeJs size={28} />, name: 'Node.js', color: '#339933' },
    { icon: <SiMongodb size={28} />, name: 'MongoDB', color: '#47A248' },
    { icon: <SiExpress size={28} />, name: 'Express', color: '#000000' },
    { icon: <FaGitAlt size={28} />, name: 'Git', color: '#F05032' },
    { icon: <FaGithub size={28} />, name: 'GitHub', color: '#181717' },
    { icon: <SiRedux size={28} />, name: 'Redux', color: '#764ABC' },
    { icon: <SiNextdotjs size={28} />, name: 'Next.js', color: '#000000' }
  ];

  return (
    <section id="about" className="section about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="about-content"
        >
          <div className="about-text">
            <h2 className="section-title">About Me:</h2>
            <p>
              I'm a passionate full-stack developer with expertise in building
              modern web applications. With a strong foundation in JavaScript
              and its ecosystems, I create efficient, scalable, and user-friendly
              solutions.
            </p>
            <p>
              My journey in web development began 3 years ago, and since then
              I've worked on various projects ranging from small business websites
              to complex web applications.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or enjoying outdoor activities.
            </p>
          </div>
          
          {/* Profile Image with Floating Icons */}
          <div className="profile-image-container">
            <img 
              src="https://nafi.vercel.app/assets/pf-RCPm1g58.svg" 
              alt="Profile" 
              className="profile-image"
            />
            
            {/* Floating Tech Icons */}
            {techIcons.map((tech, index) => {
            const positions = [
              { top: '15%', left: '85%' },  // React
              { top: '85%', left: '85%' },  // JavaScript
              { top: '85%', left: '15%' },  // HTML
              { top: '15%', left: '15%' },  // CSS
              { top: '50%', left: '5%' },   // Node
              { top: '50%', left: '95%' },  // MongoDB
              { top: '5%', left: '50%' },   // Express
              { top: '95%', left: '50%' }   // Git
            ];
            
            return (
              <motion.div
                key={index}
                className="tech-icon"
                style={{
                  ...positions[index],
                  color: tech.color
                }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: [0, 5, 0, -5, 0],
                  y: [0, -8, 0, 8, 0],
                  rotate: [0, 3, -3, 0]
                }}
                transition={{
                  duration: 4 + index * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.01
                }}
              >
                {tech.icon}
                <span className="tooltip">{tech.name}</span>
              </motion.div>
            );
          })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="skills"
        >
          <h3 className="section-title">My Skills</h3>
          <div className="skills-list">
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                className="skill"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;