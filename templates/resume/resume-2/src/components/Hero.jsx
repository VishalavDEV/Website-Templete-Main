import { useEffect, useState } from "react";
import "./Hero.css";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setTimeout(() => setLoaded(true), 100); }, []);

  return (
    <section id="home" className="hero">
      <div className="hero__bg-decoration" aria-hidden="true">
        <div className="hero__circle hero__circle--1"></div>
        <div className="hero__circle hero__circle--2"></div>
        <div className="hero__grid-dots"></div>
      </div>

      <div className="container hero__inner">
        {/* Left Column */}
        <div className={`hero__content${loaded ? " hero__content--visible" : ""}`}>
          <div className="hero__label">
            <span className="hero__label-dot" aria-hidden="true"></span>
            Consultant Cardiologist
          </div>

          <h1 className="hero__heading">
            Dr. Maya<br />
            <span className="hero__heading-accent">Ellison</span>
          </h1>

          <p className="hero__specialty">
            Preventive Cardiology &amp;<br />Cardiovascular Medicine
          </p>

          <p className="hero__intro">
            Focused on advancing preventive cardiovascular care through clinical expertise,
            patient-centred approaches, and evidence-informed practice.
          </p>

          <div className="hero__actions">
            <a href="#" className="btn btn--primary hero__btn-cv" download>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Download Curriculum Vitae
            </a>
            <a href="#about" className="btn btn--outline hero__btn-profile"
              onClick={(e) => { e.preventDefault(); document.getElementById("about").scrollIntoView({ behavior: "smooth" }); }}>
              View Professional Profile
            </a>
          </div>

          <div className="hero__credentials">
            <div className="hero__cred">
              <span className="hero__cred-value">14+</span>
              <span className="hero__cred-label">Years Clinical Experience</span>
            </div>
            <div className="hero__cred-divider" aria-hidden="true"></div>
            <div className="hero__cred">
              <span className="hero__cred-value">&#10003;</span>
              <span className="hero__cred-label">Cardiovascular Specialist</span>
            </div>
            <div className="hero__cred-divider" aria-hidden="true"></div>
            <div className="hero__cred">
              <span className="hero__cred-value">&#10003;</span>
              <span className="hero__cred-label">Research &amp; Education</span>
            </div>
          </div>
        </div>

        {/* Right Column — Portrait */}
        <div className={`hero__portrait-col${loaded ? " hero__portrait-col--visible" : ""}`}>
          <div className="hero__portrait-wrapper">
            <div className="hero__portrait-bg" aria-hidden="true"></div>
            <div className="hero__portrait-frame">
              <img
                src="dr-maya-ellison.jpg"
                alt="Dr. Maya Ellison, Consultant Cardiologist"
                className="hero__portrait-img"
                loading="eager"
              />
            </div>

            {/* Floating Info Cards */}
            <div className="hero__float-card hero__float-card--exp">
              <span className="hero__float-label">Experience</span>
              <strong className="hero__float-value">14+ Years</strong>
            </div>
            <div className="hero__float-card hero__float-card--spec">
              <span className="hero__float-label">Specialisation</span>
              <strong className="hero__float-value">Preventive Cardiology</strong>
            </div>
            <div className="hero__float-card hero__float-card--focus">
              <span className="hero__float-label">Current Focus</span>
              <strong className="hero__float-value">Cardiovascular Research</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
