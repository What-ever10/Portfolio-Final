import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import '../assets/styles/projects.css';

const projects = [
  {
    title: 'CodeSync ( An online collaborative code compiler)',
    description: 'A full-featured online code compiller with collaborative feature to work together with your friends as a team',
    tags: ['React', 'Node.js', 'MongoDB', 'Express,js', 'JudgeIO'],
    github: 'https://github.com/What-ever10/code-editor',
    live: 'https://willowy-cucurucho-e25468.netlify.app/'
  },
  {
    title: 'ThoughtScape (A Blogsite)',
    description: 'A responsive multi-page blog platform enabling users to create, manage, and explore blog posts with rich content and images. ',
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Appwrite'],
    github: 'https://github.com/What-ever10/Project'
  },
  {
    title: 'Financial Transaction System',
    description: ' An object-oriented banking system using polymorphic class hierarchy to support 3 account types (savings, checking, business) with virtual function-based behaviors.',
    tags: ['C++', 'OOPS'],
    github: 'https://github.com/What-ever10/Cppprojects'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">
            Here are some of my recent works
          </p>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="project-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, i) => (
                      <span key={i}>{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub /> Code
                  </a>

                  {/* ✅ Render "Live Demo" only if link exists */}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
              </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;