import { expertise } from "../data/data";
import { useInView } from "../hooks/useInView";
import "./Expertise.css";

export default function Expertise() {
  const [ref, visible] = useInView();
  return (
    <section id="expertise" className="section expertise" ref={ref}>
      <div className="container">
        <div className="section-header">
          <div className="section-label">Areas of Expertise</div>
          <h2 className="section-title">Clinical &amp; Professional Expertise</h2>
          <p className="section-subtitle">
            Focused areas of professional practice developed across fourteen years of cardiovascular clinical work, research, and education.
          </p>
        </div>

        <div className={`expertise__grid${visible ? " expertise__grid--visible" : ""}`}>
          {expertise.map((item, i) => (
            <div
              key={item.id}
              className="expertise__card"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="expertise__card-icon" aria-hidden="true">{item.icon}</div>
              <h3 className="expertise__card-title">{item.title}</h3>
              <p className="expertise__card-desc">{item.description}</p>
              <div className="expertise__card-accent" aria-hidden="true"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
