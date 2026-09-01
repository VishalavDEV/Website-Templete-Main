// src/components/Education.jsx
import { education } from '../data/resumeData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Icons from './Icons';

function EduCard({ edu, index }) {
  const ref = useScrollAnimation();

  return (
    <article
      ref={ref}
      className={`t1-edu-card t1-fade-in t1-fade-in-delay-${Math.min(index + 1, 4)}`}
      aria-label={`${edu.degree} from ${edu.institution}`}
    >
      <div className="t1-edu-icon-row">
        <div className="t1-edu-icon" aria-hidden="true">
          {Icons.graduationCap}
        </div>
        <div className="t1-edu-duration">
          <span style={{ display: 'inline-flex', width: 13, height: 13 }}>{Icons.calendar}</span>
          {edu.duration}
        </div>
      </div>

      <h3 className="t1-edu-degree">{edu.degree}</h3>
      <div className="t1-edu-institution">{edu.institution}</div>
      <p className="t1-edu-detail">{edu.specialization}</p>
      <p className="t1-edu-detail" style={{ marginTop: 8 }}>{edu.description}</p>

      {edu.achievement && (
        <div className="t1-edu-achievement" aria-label={`Achievement: ${edu.achievement}`}>
          <span aria-hidden="true">🏆</span>
          {edu.achievement}
        </div>
      )}
    </article>
  );
}

export default function Education() {
  const headerRef = useScrollAnimation();

  return (
    <section id="education" className="t1-section t1-section--alt" aria-label="Education">
      <div className="t1-container">
        <div ref={headerRef} className="t1-section-header t1-fade-in">
          <div className="t1-section-label">Academic Background</div>
          <h2 className="t1-section-title">Education</h2>
          <p className="t1-section-subtitle">
            A strong academic foundation in computer science that drives my engineering approach and problem-solving mindset.
          </p>
        </div>

        <div className="t1-education-grid">
          {education.map((edu, index) => (
            <EduCard key={edu.id} edu={edu} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
