import SidebarForm from '../components/SidebarForm';
import { contentData } from '../data/content';

/**
 * Admissions Page Component
 * Renders the application timeline and process along with an embedded lead form.
 */
export default function Admissions() {
  const { admissions } = contentData;

  const handleFormSubmit = (data) => {
    console.log('Enrollment request submitted on Admissions Page:', data);
  };

  return (
    <div className="admissions-page fade-in">
      {/* Banner */}
      <section className="page-banner">
        <div className="container">
          <span className="badge badge-gold">Admissions</span>
          <h1>Application Process</h1>
          <p className="banner-sub">Step-by-step guide to securing your seat at Apex Business College.</p>
        </div>
      </section>

      {/* Main Grid Content */}
      <section className="admissions-content section-padding">
        <div className="container">
          <div className="home-layout">
            
            {/* Timeline Column */}
            <div className="admissions-timeline-column">
              <div className="section-header" style={{ textAlign: 'left', margin: '0 0 var(--space-xl) 0' }}>
                <h2>Your Journey to Apex</h2>
                <p>{admissions.intro}</p>
              </div>

              {/* Timeline Items */}
              <div className="timeline">
                {admissions.timeline.map((item) => (
                  <div key={item.step} className="timeline-item fade-in">
                    <div className="timeline-step">{item.step}</div>
                    <div className="timeline-content">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form Column */}
            <div className="admissions-form-column">
              <div className="section-header" style={{ textAlign: 'left', margin: '0 0 var(--space-xl) 0' }}>
                <h2>Apply Online</h2>
                <p>Begin your application process by requesting program details below.</p>
              </div>
              <SidebarForm onSubmit={handleFormSubmit} />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
