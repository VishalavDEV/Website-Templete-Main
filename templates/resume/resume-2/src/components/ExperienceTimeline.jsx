import { experience } from "../data/data";
import { useInView } from "../hooks/useInView";
import "./ExperienceTimeline.css";

export default function ExperienceTimeline() {
  const [ref, visible] = useInView();
  return (
    <section id="experience" className="section section--gray experience" ref={ref}>
      <div className="container">
        <div className="section-header">
          <div className="section-label">Clinical Experience</div>
          <h2 className="section-title">Professional Career</h2>
          <p className="section-subtitle">
            A structured overview of clinical roles and professional contributions across
            leading fictional medical centres in Australia.
          </p>
        </div>

        <div className={`exp__timeline${visible ? " exp__timeline--visible" : ""}`}>
          {experience.map((item, i) => (
            <div
              key={item.id}
              className="exp__entry"
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div className="exp__left">
                <div className="exp__number">0{i + 1}</div>
                <div className="exp__period">{item.period}</div>
              </div>

              <div className="exp__connector" aria-hidden="true">
                <div className="exp__dot"></div>
                {i < experience.length - 1 && <div className="exp__line"></div>}
              </div>

              <div className="exp__card">
                {item.badge && (
                  <span className="exp__badge">{item.badge}</span>
                )}
                <div className="exp__role">{item.role}</div>
                <div className="exp__org">
                  <strong>{item.organisation}</strong>
                  <span className="exp__loc">— {item.location}</span>
                </div>
                <p className="exp__desc">{item.description}</p>
                <ul className="exp__responsibilities">
                  {item.responsibilities.map((r, j) => (
                    <li key={j} className="exp__responsibility">{r}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
