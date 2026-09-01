import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { getProjectById } from '../services/api';
import CustomCursor from '../components/CustomCursor';

export default function ProjectDetails() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProject() {
      try {
        const data = await getProjectById(id);
        setProject(data);
      } catch (err) {
        console.error('Failed to load project detailed case study:', err);
      } finally {
        setLoading(false);
      }
    }
    loadProject();
  }, [id]);

  if (loading) {
    return (
      <div style={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'var(--color-bg-ivory)',
        fontFamily: 'var(--font-editorial)'
      }}>
        <h2 style={{ fontSize: '32px', fontStyle: 'italic', color: 'var(--color-forest)' }}>
          REVEALING CASE STUDY...
        </h2>
      </div>
    );
  }

  if (!project) {
    return (
      <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--color-bg-ivory)' }}>
        <h2 style={{ fontFamily: 'var(--font-editorial)', fontSize: '32px', color: 'var(--color-coral)' }}>
          CASE STUDY NOT FOUND
        </h2>
        <Link to="/" style={{ marginTop: '2rem', color: 'var(--color-forest)', textDecoration: 'none', borderBottom: '1px solid' }}>
          RETURN TO MAGAZINE INDEX
        </Link>
      </div>
    );
  }

  return (
    <>
      <CustomCursor />
      
      <article
        style={{
          minHeight: '100vh',
          backgroundColor: 'var(--color-bg-ivory)',
          color: 'var(--color-charcoal)',
          paddingBottom: '8rem',
        }}
      >
        {/* Top Back Navigation Bar */}
        <nav
          style={{
            padding: '2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px solid rgba(13, 44, 30, 0.08)',
            maxWidth: '1200px',
            margin: '0 auto',
            width: '100%',
          }}
        >
          <Link
            to="/"
            data-cursor="explore"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              textDecoration: 'none',
              color: 'var(--color-forest)',
              fontSize: '12px',
              fontWeight: '600',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            <ArrowLeft size={14} />
            <span>BACK TO MAGAZINE</span>
          </Link>
          <span style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.15em', color: 'var(--color-coral)' }}>
            PROJECT CASE STUDY {project.number}
          </span>
        </nav>

        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
          
          {/* COVER: Huge project title */}
          <header style={{ padding: '6rem 0 4rem 0', borderBottom: '1px solid rgba(13, 44, 30, 0.1)', textAlign: 'center' }}>
            <span style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '0.3em', color: 'var(--color-coral)', textTransform: 'uppercase', display: 'block', marginBottom: '1.5rem' }}>
              {project.category}
            </span>
            <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6.5rem)', fontWeight: '700', textTransform: 'uppercase', color: 'var(--color-forest)', lineHeight: 0.9 }}>
              {project.title}
            </h1>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', maxWidth: '600px', margin: '2rem auto 0 auto', opacity: 0.8, lineHeight: 1.6 }}>
              {project.description}
            </p>
          </header>

          {/* THE IDEA: Explain the problem */}
          <section style={{ padding: '4rem 0', borderBottom: '1px solid rgba(13, 44, 30, 0.08)' }} className="grid-editorial">
            <div style={{ gridColumn: 'span 4' }}>
              <h3 style={{ fontSize: '24px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--color-coral)' }}>
                THE IDEA
              </h3>
              <span style={{ fontSize: '11px', opacity: 0.5 }}>THE CORE CHALLENGE</span>
            </div>
            <div style={{ gridColumn: 'span 8', fontFamily: 'var(--font-editorial)', fontSize: '24px', lineHeight: 1.4, fontStyle: 'italic', color: 'var(--color-forest)' }}>
              "{project.idea}"
            </div>
          </section>

          {/* THE APPROACH: Explain how the project was developed */}
          <section style={{ padding: '4rem 0', borderBottom: '1px solid rgba(13, 44, 30, 0.08)' }} className="grid-editorial">
            <div style={{ gridColumn: 'span 4' }}>
              <h3 style={{ fontSize: '24px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--color-forest)' }}>
                THE APPROACH
              </h3>
              <span style={{ fontSize: '11px', opacity: 0.5 }}>DEVELOPMENT PROTOCOL</span>
            </div>
            <div style={{ gridColumn: 'span 8', fontFamily: 'var(--font-body)', fontSize: '15px', lineHeight: 1.7, opacity: 0.8 }}>
              {project.approach}
            </div>
          </section>

          {/* TECHNOLOGY: Display technology names as animated typography */}
          <section style={{ padding: '4rem 0', borderBottom: '1px solid rgba(13, 44, 30, 0.08)' }}>
            <h3 style={{ fontSize: '12px', fontWeight: '700', color: 'var(--color-coral)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '2rem', textAlign: 'center' }}>
              INTEGRATED TECHNOLOGY
            </h3>
            
            {/* Horizontal Moving Marquee for Tech */}
            <div className="marquee-container" style={{ border: '1px solid rgba(13, 44, 30, 0.1)', padding: '1.2rem 0', backgroundColor: 'var(--color-bg-paper)' }}>
              <div className="marquee-content" style={{ display: 'flex', gap: '3rem' }}>
                {[...project.technologies, ...project.technologies, ...project.technologies].map((tech, idx) => (
                  <span
                    key={`${tech}-${idx}`}
                    style={{
                      fontFamily: 'var(--font-editorial)',
                      fontSize: '32px',
                      fontWeight: '700',
                      color: 'var(--color-forest)',
                      textTransform: 'uppercase',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* RESULT: Show project screenshots/mockups */}
          <section style={{ padding: '4rem 0', borderBottom: '1px solid rgba(13, 44, 30, 0.08)' }}>
            <h3 style={{ fontSize: '24px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--color-forest)', marginBottom: '2.5rem', textAlign: 'center' }}>
              RESULT & TELEMETRY
            </h3>
            <div style={{ overflow: 'hidden', height: '450px', border: '1px solid var(--color-muted-beige)', backgroundColor: 'var(--color-forest)', marginBottom: '2rem' }}>
              <img
                src={project.imageUrl}
                alt={`${project.title} Mockup`}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', lineHeight: 1.6, opacity: 0.85, maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              {project.result}
            </p>
          </section>

          {/* LIVE EXPERIENCE: Button */}
          <section style={{ padding: '4rem 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
            <h3 style={{ fontFamily: 'var(--font-editorial)', fontSize: '28px', fontStyle: 'italic' }}>
              Ready to explore?
            </h3>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-editorial"
              data-cursor="explore"
              style={{
                padding: '1.2rem 3rem',
                borderColor: 'var(--color-coral)',
                color: 'var(--color-coral)',
                fontSize: '13px',
              }}
            >
              <ExternalLink size={14} />
              <span>EXPLORE PROJECT →</span>
            </a>
          </section>

        </div>
      </article>
    </>
  );
}
