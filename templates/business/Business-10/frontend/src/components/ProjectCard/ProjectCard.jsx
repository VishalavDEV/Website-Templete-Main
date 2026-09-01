import { motion } from 'framer-motion';
import { ArrowUpRight, Tag } from 'lucide-react';
import './ProjectCard.css';

/**
 * Animated project/portfolio card.
 *
 * @param {Object} project  - project data object
 * @param {Function} onView - callback when "View Project" is clicked
 * @param {number} index    - for stagger animation
 */
const ProjectCard = ({ project, onView, index = 0 }) => {
  return (
    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      aria-label={`Project: ${project.title}`}
    >
      {/* Visual */}
      <div className="project-card__visual" aria-hidden="true">
        <div
          className="project-card__gradient"
          style={{ background: project.gradient }}
        />
        <div className="project-card__visual-overlay">
          <span className="project-card__category">
            <Tag size={11} />
            {project.category}
          </span>
        </div>

        {/* Hover reveal */}
        <motion.div
          className="project-card__hover-reveal"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <motion.button
            className="project-card__view-btn"
            onClick={() => onView && onView(project)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={`View project: ${project.title}`}
          >
            <ArrowUpRight size={18} />
            View Case Study
          </motion.button>
        </motion.div>
      </div>

      {/* Content */}
      <div className="project-card__content">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.description}</p>

        {/* Tech tags */}
        <div className="project-card__tags" aria-label="Technologies used">
          {project.technologies.slice(0, 4).map((tech) => (
            <span key={tech} className="project-card__tag">{tech}</span>
          ))}
          {project.technologies.length > 4 && (
            <span className="project-card__tag project-card__tag--more">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Results preview */}
        <div className="project-card__results">
          <span className="project-card__result">{project.results[0]}</span>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
