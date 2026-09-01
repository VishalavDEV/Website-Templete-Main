// src/components/Certifications.jsx
import { certifications } from '../data/resumeData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Icons from './Icons';

function CertCard({ cert, index }) {
  const ref = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`t1-cert-card t1-fade-in t1-fade-in-delay-${Math.min(index + 1, 4)}`}
      aria-label={`Certification: ${cert.name} from ${cert.organization}`}
    >
      <div className="t1-cert-icon" aria-hidden="true">
        <span role="img">{cert.icon}</span>
      </div>
      <div>
        <h3 className="t1-cert-name">{cert.name}</h3>
        <div className="t1-cert-org">{cert.organization}</div>
        <div className="t1-cert-year">
          <span style={{ display: 'inline-flex', width: 12, height: 12 }}>{Icons.calendar}</span>
          Issued {cert.year}
        </div>
      </div>
    </div>
  );
}

export default function Certifications() {
  const headerRef = useScrollAnimation();

  return (
    <section id="certifications" className="t1-section" aria-label="Certifications and achievements">
      <div className="t1-container">
        <div ref={headerRef} className="t1-section-header t1-fade-in">
          <div className="t1-section-label">Credentials</div>
          <h2 className="t1-section-title">Certifications &amp; Achievements</h2>
          <p className="t1-section-subtitle">
            Continuous learning through industry-recognized certifications across full stack development, cloud, and data science.
          </p>
        </div>

        <div className="t1-certs-grid">
          {certifications.map((cert, index) => (
            <CertCard key={cert.id} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
