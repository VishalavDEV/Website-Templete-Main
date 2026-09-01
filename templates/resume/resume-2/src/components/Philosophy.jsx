import { useInView } from "../hooks/useInView";
import "./Philosophy.css";

export default function Philosophy() {
  const [ref, visible] = useInView();
  return (
    <section className="section--philosophy philosophy" ref={ref}>
      <div className="philosophy__bg" aria-hidden="true"></div>
      <div className={`container philosophy__inner${visible ? " philosophy__inner--visible" : ""}`}>
        <div className="philosophy__quote-mark" aria-hidden="true">&ldquo;</div>
        <blockquote className="philosophy__statement">
          Better healthcare begins with knowledge, collaboration, and a long-term commitment to prevention.
        </blockquote>
        <div className="philosophy__divider" aria-hidden="true"></div>
        <p className="philosophy__text">
          Throughout her career, Dr. Ellison has maintained a professional philosophy grounded in the belief that
          long-term cardiovascular wellbeing is best supported through proactive, evidence-informed approaches.
          She is committed to patient-centred practice — listening carefully, communicating clearly, and working
          collaboratively with multidisciplinary teams to support informed decision-making.
        </p>
        <p className="philosophy__text">
          Her interest in medical education reflects a conviction that knowledge-sharing within the healthcare
          profession is essential. By mentoring colleagues and contributing to research, she hopes to support
          the ongoing development of cardiovascular care in Australia and beyond.
        </p>
        <div className="philosophy__values">
          {["Prevention", "Education", "Collaboration", "Evidence-Informed Practice", "Human-Centred Care"].map((v) => (
            <span key={v} className="philosophy__value-tag">{v}</span>
          ))}
        </div>
        <div className="philosophy__disclaimer">
          This section does not constitute medical advice. Dr. Maya Ellison is a fictional character created for this CV template.
        </div>
      </div>
    </section>
  );
}
