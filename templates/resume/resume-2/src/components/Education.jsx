import { education } from "../data/data";
import { useInView } from "../hooks/useInView";
import "./Education.css";

export default function Education() {
  const [ref, visible] = useInView();
  return (
    <section id="education" className="section education" ref={ref}>
      <div className="container">
        <div className="section-header">
          <div className="section-label">Education &amp; Qualifications</div>
          <h2 className="section-title">Academic Background</h2>
          <p className="section-subtitle">
            Formal medical education and specialist qualifications from fictional Australian institutions.
          </p>
        </div>

        <div className={`edu__list${visible ? " edu__list--visible" : ""}`}>
          {education.map((item, i) => (
            <div
              key={item.id}
              className="edu__entry"
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div className="edu__period-col">
                <span className="edu__year-tag">{item.period}</span>
              </div>
              <div className="edu__content">
                <div className="edu__icon" aria-hidden="true">🎓</div>
                <div className="edu__body">
                  <h3 className="edu__degree">{item.degree}</h3>
                  <div className="edu__institution">{item.institution}</div>
                  <p className="edu__description">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
