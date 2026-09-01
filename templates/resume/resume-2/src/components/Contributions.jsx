import { contributions } from "../data/data";
import { useInView } from "../hooks/useInView";
import "./Contributions.css";

export default function Contributions() {
  const [ref, visible] = useInView();
  return (
    <section className="section contributions" ref={ref}>
      <div className="container">
        <div className="section-header">
          <div className="section-label">Professional Contributions</div>
          <h2 className="section-title">Beyond Clinical Practice</h2>
          <p className="section-subtitle">
            Engagement with the broader medical and academic community through education, speaking, and mentorship.
          </p>
        </div>
        <div className={`contrib__grid${visible ? " contrib__grid--visible" : ""}`}>
          {contributions.map((item, i) => (
            <div key={item.id} className="contrib__card" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="contrib__icon-wrap" aria-hidden="true">{item.icon}</div>
              <h3 className="contrib__title">{item.title}</h3>
              <p className="contrib__desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
