// src/components/Projects.jsx
import { projects } from '../data/resumeData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Icons from './Icons';

function ProjectCard({ project, index }) {
  const ref = useScrollAnimation();

  return (
    <article
      ref={ref}
      className={`t1-project-card t1-fade-in t1-fade-in-delay-${Math.min(index + 1, 4)}`}
      aria-label={`Project: ${project.name}`}
    >
      {/* Image Placeholder */}
      <div
        className="t1-project-image-placeholder"
        style={{ background: `linear-gradient(135deg, ${project.color} 0%, #f1f5f9 100%)` }}
        aria-hidden="true"
      >
        <span className="t1-project-placeholder-icon" role="img" aria-label={project.name}>
          {project.icon}
        </span>
      </div>

      {/* Body */}
      <div className="t1-project-body">
        <h3 className="t1-project-name">{project.name}</h3>
        <p className="t1-project-description">{project.description}</p>

        <div className="t1-project-tech" aria-label={`Technologies: ${project.technologies.join(', ')}`}>
          {project.technologies.map((tech) => (
            <span key={tech} className="t1-project-tech-tag">{tech}</span>
          ))}
        </div>

        <div className="t1-project-actions">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="t1-project-btn t1-project-btn-outline"
            aria-label={`View ${project.name} on GitHub`}
            id={`t1-project-github-${project.id}`}
          >
            <span style={{ display: 'inline-flex', width: 14, height: 14 }}>{Icons.github}</span>
            GitHub
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="t1-project-btn t1-project-btn-primary"
            aria-label={`Live demo of ${project.name}`}
            id={`t1-project-demo-${project.id}`}
          >
            <span style={{ display: 'inline-flex', width: 14, height: 14 }}>{Icons.external}</span>
            Live Demo
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const headerRef = useScrollAnimation();

  return (
    <section id="projects" className="t1-section t1-section--alt" aria-label="Featured projects">
      <div className="t1-container">
        <div ref={headerRef} className="t1-section-header t1-fade-in">
          <div className="t1-section-label">My Work</div>
          <h2 className="t1-section-title">Featured Projects</h2>
        </div>

        <p className="t1-projects-intro">
          A selection of projects that showcase my technical skills and ability to build real-world products.
          Each project reflects my commitment to clean code, performance, and excellent user experience.
        </p>

        <div className="t1-projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
