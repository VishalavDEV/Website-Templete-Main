import React, { useState } from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';
import { LinkedinIcon, TwitterIcon } from './SocialIcons';
import { teamMembers } from '../data/team';
import './Team.css';

export default function Team({
  limit,
  showHeader = true,
  showFilters = true,
  title = "Led by architects, researchers, and strategists.",
  subtitle = "Our multidisciplinary leadership team brings decades of experience scaling global cloud platforms, AI systems, and enterprise transformations."
}) {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Leadership', 'Engineering', 'Design', 'Strategy'];

  const filteredTeam = teamMembers
    .filter((member) => activeCategory === 'All' || member.department === activeCategory)
    .slice(0, limit || teamMembers.length);

  return (
    <section className="luxury-team-section section">
      <div className="container">
        {showHeader && (
          <div className="section-header text-center">
            <span className="section-tag">OUR PEOPLE</span>
            <h2 className="section-title">{title}</h2>
            <p className="section-description">{subtitle}</p>
          </div>
        )}

        {showFilters && (
          <div className="luxury-team-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`team-cat-pill ${activeCategory === cat ? 'is-active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        <div className="editorial-team-grid">
          {filteredTeam.map((member) => (
            <div key={member.id} className="editorial-team-card">
              <div className="editorial-portrait-frame">
                <img src={member.image} alt={member.name} className="editorial-portrait-img" loading="lazy" />
                <div className="editorial-portrait-gradient" />
                <div className="editorial-dept-badge">
                  <span>{member.department}</span>
                </div>
              </div>

              <div className="editorial-team-meta">
                <h4 className="ed-member-name">{member.name}</h4>
                <p className="ed-member-role">{member.role}</p>
                <p className="ed-member-bio">{member.bio}</p>

                {member.expertise && (
                  <div className="ed-member-tags">
                    {member.expertise.map((exp, i) => (
                      <span key={i} className="ed-tag">{exp}</span>
                    ))}
                  </div>
                )}

                <div className="ed-social-footer">
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="ed-soc-link" aria-label="LinkedIn">
                      <LinkedinIcon size={15} />
                    </a>
                  )}
                  {member.twitter && (
                    <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="ed-soc-link" aria-label="Twitter">
                      <TwitterIcon size={15} />
                    </a>
                  )}
                  {member.email && (
                    <a href={`mailto:${member.email}`} className="ed-soc-link" aria-label="Email">
                      <Mail size={15} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
