import { profile } from "../data/data";
import { useInView } from "../hooks/useInView";
import "./ProfessionalOverview.css";

export default function ProfessionalOverview() {
  const [ref, visible] = useInView();
  return (
    <section id="about" className="section section--gray about" ref={ref}>
      <div className="container">
        <div className={`about__inner${visible ? " about__inner--visible" : ""}`}>
          {/* Left */}
          <div className="about__left">
            <div className="section-label">Professional Overview</div>
            <blockquote className="about__statement">
              &ldquo;Combining clinical experience, research, and education to support
              better approaches to cardiovascular health.&rdquo;
            </blockquote>
            <div className="about__location-chip">
              <span className="about__location-icon" aria-hidden="true">📍</span>
              Melbourne, Australia
            </div>
          </div>

          {/* Right */}
          <div className="about__right">
            {profile.bio.map((para, i) => (
              <p key={i} className="about__bio-para">{para}</p>
            ))}

            <div className="about__details-grid">
              <div className="about__detail">
                <span className="about__detail-label">Location</span>
                <span className="about__detail-value">{profile.location}</span>
              </div>
              <div className="about__detail">
                <span className="about__detail-label">Experience</span>
                <span className="about__detail-value">{profile.experience} Years</span>
              </div>
              <div className="about__detail">
                <span className="about__detail-label">Languages</span>
                <span className="about__detail-value">{profile.languages}</span>
              </div>
              <div className="about__detail">
                <span className="about__detail-label">Availability</span>
                <span className="about__detail-value">{profile.availability}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
