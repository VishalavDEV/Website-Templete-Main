import { recognition } from "../data/data";
import { useInView } from "../hooks/useInView";
import "./Recognition.css";

export default function Recognition() {
  const [ref, visible] = useInView();
  return (
    <section className="section section--gray recognition" ref={ref}>
      <div className="container">
        <div className="recognition__inner">
          <div className="recognition__header">
            <div className="section-label">Recognition</div>
            <h2 className="section-title">Professional Recognition</h2>
            <p className="section-subtitle">
              Acknowledgements received from fictional healthcare and research organisations.
            </p>
            <div className="recognition__note">
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              Recognition and organisation names shown are fictional examples created for this template.
            </div>
          </div>

          <div className={`recognition__list${visible ? " recognition__list--visible" : ""}`}>
            {recognition.map((item, i) => (
              <div key={item.id} className="recognition__item" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="recognition__year">{item.year}</div>
                <div className="recognition__content">
                  <div className="recognition__award-icon" aria-hidden="true">🏅</div>
                  <div>
                    <div className="recognition__award">{item.award}</div>
                    <div className="recognition__org">{item.organisation}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
