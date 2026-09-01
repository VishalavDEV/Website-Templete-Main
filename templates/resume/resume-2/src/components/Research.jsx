import { research, publications } from "../data/data";
import { useInView } from "../hooks/useInView";
import "./Research.css";

export default function Research() {
  const [ref, visible] = useInView();
  return (
    <section id="research" className="section section--gray research" ref={ref}>
      <div className="container">
        <div className="section-header">
          <div className="section-label">Research &amp; Academic Work</div>
          <h2 className="section-title">Research Initiatives &amp; Publications</h2>
          <p className="section-subtitle">
            Collaborative research projects and academic contributions focused on cardiovascular prevention and healthcare education.
          </p>
        </div>

        <div className={`research__inner${visible ? " research__inner--visible" : ""}`}>
          {/* Research Projects */}
          <div className="research__projects">
            <h3 className="research__sub-heading">Research Projects</h3>
            <div className="research__projects-list">
              {research.map((item, i) => (
                <div key={item.id} className="research__project-card" style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div className="research__project-header">
                    <span className="research__project-year">{item.year}</span>
                    <span className={`research__status research__status--${item.status.toLowerCase()}`}>
                      {item.status}
                    </span>
                  </div>
                  <h4 className="research__project-title">{item.title}</h4>
                  <p className="research__project-desc">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Publications */}
          <div className="research__publications">
            <h3 className="research__sub-heading">Selected Publications</h3>
            <div className="research__pub-list">
              {publications.map((pub, i) => (
                <div key={pub.id} className="research__pub-item" style={{ transitionDelay: `${(i + research.length) * 0.08}s` }}>
                  <div className="research__pub-meta">
                    <span className="research__pub-category">{pub.category}</span>
                    <span className="research__pub-year">{pub.year}</span>
                  </div>
                  <div className="research__pub-title">{pub.title}</div>
                  <div className="research__pub-journal">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
                    {pub.journal}
                  </div>
                </div>
              ))}
            </div>
            <div className="research__disclaimer">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              All research titles and publication references shown in this template are fictional demonstration content.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
