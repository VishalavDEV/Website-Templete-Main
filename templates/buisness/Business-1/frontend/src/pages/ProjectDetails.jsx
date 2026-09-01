import { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { ArrowLeft, CheckCircle, HelpCircle, Layers, Quote, Cpu } from 'lucide-react';
import { apiService } from '../utils/api';
import './ProjectDetails.css';

// Custom Count-up numbers parser
function ScrollCounter({ valueString }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  
  // Extract number and suffix from string (e.g., "+140%" -> 140 and "+", "%")
  const match = valueString.match(/([\d.]+)/);
  const numberVal = match ? parseFloat(match[1]) : 0;
  const suffix = valueString.replace(match ? match[1] : "", "");
  
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    // If it's a decimal, keep 2 decimals, otherwise round
    if (valueString.includes('.')) {
      return latest.toFixed(2);
    }
    return Math.round(latest);
  });

  useEffect(() => {
    if (inView) {
      const controls = animate(count, numberVal, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, count, numberVal]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export default function ProjectDetails() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjectDetail = async () => {
      setLoading(true);
      try {
        const data = await apiService.getProjectById(id);
        setProject(data);
      } catch (err) {
        console.error("Failed fetching project details:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProjectDetail();
  }, [id]);

  if (loading) {
    return (
      <div className="project-details-page loading-box container">
        <div className="spinner"></div>
        <p>Loading case studies...</p>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="project-details-page error-box container text-center">
        <h2>Case Study Profile Not Found</h2>
        <p>The case study you are trying to access does not exist or has been archived.</p>
        <Link to="/projects" className="btn btn-primary">
          <ArrowLeft size={16} /> Back to Projects Showcase
        </Link>
      </div>
    );
  }

  return (
    <div className="project-details-page">
      {/* Background orbs */}
      <div className="glow-bg">
        <div className="glow-orb orb-1"></div>
        <div className="glow-orb orb-3"></div>
      </div>

      {/* Hero Banner */}
      <section className="case-hero-section section-padding">
        <div className="container">
          <Link to="/projects" className="back-link">
            <ArrowLeft size={14} /> Back to Projects Grid
          </Link>
          <div className="case-hero-content">
            <span className="case-badge">{project.category} Case Study</span>
            <h1>{project.title}</h1>
            <p className="lead-text">{project.description}</p>
          </div>
        </div>
      </section>

      {/* Metrics Row */}
      <section className="case-metrics-section">
        <div className="container">
          <div className="case-metrics-grid glass-card">
            {project.results.map((r, idx) => (
              <div className="metric-card" key={idx}>
                <h2><ScrollCounter valueString={r} /></h2>
                <p>Performance Metric</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Double Column Breakdown */}
      <section className="case-details-section section-padding">
        <div className="container details-grid">
          
          {/* Main Case Info */}
          <div className="case-info-flow">
            <div className="info-block">
              <div className="block-header">
                <HelpCircle size={24} className="block-icon alert" />
                <h2>The Challenge</h2>
              </div>
              <p>{project.clientChallenge}</p>
            </div>

            <div className="info-block">
              <div className="block-header">
                <Layers size={24} className="block-icon solution" />
                <h2>Our Business Solution</h2>
              </div>
              <p>{project.businessSolution}</p>
            </div>

            <div className="info-block">
              <div className="block-header">
                <Cpu size={24} className="block-icon process" />
                <h2>Implementation Process</h2>
              </div>
              <p>{project.implementationProcess}</p>
            </div>
          </div>

          {/* Sidebar Metadata */}
          <div className="case-sidebar-panel">
            <div className="sidebar-card glass-card">
              <h3>Project Stack</h3>
              <div className="sidebar-stack">
                {project.technologies.map((t, idx) => (
                  <span className="stack-tag" key={idx}>{t}</span>
                ))}
              </div>
            </div>

            {/* Testimonial Quote */}
            {project.clientTestimonial && (
              <div className="sidebar-quote-card glass-card">
                <Quote className="quote-mark-icon" size={32} />
                <p className="quote-text">"{project.clientTestimonial}"</p>
                <div className="quote-author">
                  <h4>{project.clientAuthor}</h4>
                  <p>{project.clientRole}</p>
                </div>
              </div>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}
