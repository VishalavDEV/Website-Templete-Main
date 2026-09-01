import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Globe, Sparkles, HeartPulse, BookOpen, Plane, Cpu, MapPin, Briefcase, DollarSign, X, Send } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import Stats from '../components/Stats';
import CTA from '../components/CTA';
import { openPositions, companyBenefits, hiringSteps } from '../data/careers';
import './Careers.css';

const benefitIconMap = {
  Globe: Globe,
  Sparkles: Sparkles,
  HeartPulse: HeartPulse,
  BookOpen: BookOpen,
  Plane: Plane,
  Cpu: Cpu
};

export default function Careers() {
  const [selectedDept, setSelectedDept] = useState('All');
  const [selectedJob, setSelectedJob] = useState(null);
  const [applicantForm, setApplicantForm] = useState({ name: '', email: '', resumeUrl: '', note: '' });
  const [submitted, setSubmitted] = useState(false);

  const departments = ['All', 'Engineering', 'Design', 'Strategy', 'Security'];

  const filteredJobs = openPositions.filter(
    (job) => selectedDept === 'All' || job.department === selectedDept
  );

  const handleApply = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSelectedJob(null);
      setSubmitted(false);
      setApplicantForm({ name: '', email: '', resumeUrl: '', note: '' });
    }, 2500);
  };

  return (
    <div className="careers-page">
      {/* 1. Page Header */}
      <PageHeader
        tag="JOIN THE PRACTICE"
        title="Do work that matters."
        subtitle="We're a global squad of distributed systems architects, applied AI researchers, and design visionaries building mission-critical technologies."
        breadcrumbs={[{ label: 'Careers' }]}
      />

      {/* 2. Why Join Us (Culture Narrative) */}
      <section className="careers-intro-section section">
        <div className="container">
          <div className="careers-intro-grid">
            <div className="careers-intro-text">
              <span className="section-tag">WHY NEXORA</span>
              <h2 className="careers-intro-title">High autonomy. Zero bureaucracy. Deep craftsmanship.</h2>
              <p className="careers-intro-p">
                At NEXORA, you won't get bogged down in endless layers of management or political maneuvering. We operate as small, high-density squads empowered to make architectural decisions and ship production-grade code that moves markets.
              </p>
              <p className="careers-intro-p">
                Whether you're training domain-adapted LLMs, orchestrating active-active multi-region Kubernetes clusters, or designing next-generation fintech interfaces, your work directly impacts millions of end users.
              </p>

              <div className="careers-kpi-row">
                <div className="career-kpi">
                  <span className="kpi-v">100%</span>
                  <span className="kpi-l">Remote-First Culture</span>
                </div>
                <div className="career-kpi">
                  <span className="kpi-v">$5,000</span>
                  <span className="kpi-l">Annual Tech Stipend</span>
                </div>
                <div className="career-kpi">
                  <span className="kpi-v">4.9/5</span>
                  <span className="kpi-l">Glassdoor Approval</span>
                </div>
              </div>
            </div>

            <div className="careers-intro-media">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"
                alt="NEXORA Team Retreat"
                className="careers-intro-img"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Comprehensive Benefits Grid */}
      <section className="careers-benefits-section section section-alt">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">COMPENSATION & PERKS</span>
            <h2 className="section-title">Built to support your best work.</h2>
            <p className="section-description">
              We offer comprehensive benefits designed to nurture your physical, mental, and professional health.
            </p>
          </div>

          <div className="benefits-grid">
            {companyBenefits.map((b, idx) => {
              const BIcon = benefitIconMap[b.icon] || Sparkles;
              return (
                <div key={idx} className="benefit-card">
                  <div className="benefit-icon-box">
                    <BIcon size={24} />
                  </div>
                  <h3 className="benefit-title">{b.title}</h3>
                  <p className="benefit-desc">{b.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Open Positions Directory */}
      <section className="open-positions-section section" id="open-roles">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">CURRENT OPENINGS</span>
            <h2 className="section-title">Explore Open Roles</h2>
            <p className="section-description">
              Find your next career chapter in engineering, product design, or enterprise strategy.
            </p>
          </div>

          {/* Department Filter Tabs */}
          <div className="job-filter-tabs">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`job-filter-btn ${selectedDept === dept ? 'active' : ''}`}
              >
                {dept}
              </button>
            ))}
          </div>

          {/* Job Listings List */}
          <div className="job-listings-list">
            {filteredJobs.map((job) => (
              <div key={job.id} className="job-card">
                <div className="job-card-main">
                  <div className="job-badge-row">
                    <span className="badge badge-brand">{job.department}</span>
                    <span className="job-type-pill">{job.type}</span>
                  </div>

                  <h3 className="job-title">{job.title}</h3>
                  <p className="job-description">{job.description}</p>

                  <div className="job-meta-row">
                    <span className="job-meta-item"><MapPin size={14} /> {job.location}</span>
                    <span className="job-meta-item"><Briefcase size={14} /> {job.experience}</span>
                    <span className="job-meta-item"><DollarSign size={14} /> {job.salary}</span>
                  </div>

                  {job.requirements && (
                    <div className="job-reqs-preview">
                      <span className="reqs-title">Key Profile Attributes:</span>
                      <ul className="reqs-list">
                        {job.requirements.map((r, i) => (
                          <li key={i}><CheckCircle2 size={14} className="req-check" /> {r}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="job-card-side">
                  <button
                    onClick={() => setSelectedJob(job)}
                    className="btn btn-primary btn-lg job-apply-btn"
                  >
                    <span>Apply Now</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Hiring Process Flow */}
      <section className="hiring-process-section section section-alt">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">WHAT TO EXPECT</span>
            <h2 className="section-title">Our Transparent Hiring Process</h2>
            <p className="section-description">
              Respect for your time is paramount. Our interview process is collaborative, practical, and completed within 2–3 weeks.
            </p>
          </div>

          <div className="hiring-steps-grid">
            {hiringSteps.map((step, idx) => (
              <div key={idx} className="hiring-step-card">
                <div className="step-header">
                  <span className="step-num">{step.step}</span>
                  <span className="step-duration">{step.duration}</span>
                </div>
                <h4 className="step-title">{step.title}</h4>
                <p className="step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Stats */}
      <Stats />

      {/* 7. CTA */}
      <CTA
        tag="SPONTANEOUS APPLICATION"
        title="Don't see your specific specialty?"
        description="We are always looking for exceptional engineers, researchers, and strategists. Send us your portfolio and GitHub profile."
        primaryButtonText="Submit General Application"
        primaryButtonLink="/contact"
      />

      {/* Application Modal */}
      {selectedJob && (
        <div className="apply-modal-backdrop" onClick={() => setSelectedJob(null)}>
          <div className="apply-modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedJob(null)}>
              <X size={20} />
            </button>

            <div className="modal-header">
              <span className="badge badge-brand">{selectedJob.department}</span>
              <h3 className="modal-job-title">{selectedJob.title}</h3>
              <p className="modal-job-meta">{selectedJob.location} • {selectedJob.salary}</p>
            </div>

            {submitted ? (
              <div className="apply-success-box">
                <CheckCircle2 size={48} className="success-check-icon" />
                <h3>Application Submitted!</h3>
                <p>Thank you for applying. Our talent lead will review your profile within 48 business hours.</p>
              </div>
            ) : (
              <form onSubmit={handleApply} className="apply-form">
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Elena Rostova"
                    value={applicantForm.name}
                    onChange={(e) => setApplicantForm({ ...applicantForm, name: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="elena@example.com"
                    value={applicantForm.email}
                    onChange={(e) => setApplicantForm({ ...applicantForm, email: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">LinkedIn or GitHub Profile URL *</label>
                  <input
                    type="url"
                    required
                    placeholder="https://linkedin.com/in/... or https://github.com/..."
                    value={applicantForm.resumeUrl}
                    onChange={(e) => setApplicantForm({ ...applicantForm, resumeUrl: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Why NEXORA? (Short Note)</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us what excites you about this role..."
                    value={applicantForm.note}
                    onChange={(e) => setApplicantForm({ ...applicantForm, note: e.target.value })}
                    className="form-textarea"
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                  <span>Submit Application</span>
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
