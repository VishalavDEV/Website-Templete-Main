import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Shield, Award } from 'lucide-react';
import { GithubIcon, TwitterIcon, LinkedinIcon } from '../components/SocialIcons';
import { apiService } from '../utils/api';
import './Team.css';

export default function Team() {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const data = await apiService.getTeam();
        setTeam(data);
      } catch (err) {
        console.error("Failed fetching team details:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchTeam();
  }, []);

  return (
    <div className="team-page">
      {/* Background orbs */}
      <div className="glow-bg">
        <div className="glow-orb orb-1"></div>
        <div className="glow-orb orb-2"></div>
      </div>

      {/* Header */}
      <section className="team-header section-padding">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-subtitle">THE CORE TEAM</span>
            <h1 className="large-headline">Meet Our <span className="text-gradient">Architects</span></h1>
            <p className="lead-paragraph">
              A distributed team of ex-Stripe software developers, McKinsey strategy consultants, and award-winning designers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid Showcase */}
      <section className="team-grid-section section-padding">
        <div className="container">
          {loading ? (
            <div className="loading-spinner-box">
              <div className="spinner"></div>
              <p>Loading members...</p>
            </div>
          ) : (
            <div className="team-members-grid">
              {team.map((member, idx) => (
                <motion.div
                  className="team-member-card glass-card"
                  key={member.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                >
                  <div className="member-avatar-box">
                    {/* Visual Placeholder representing avatar/initials */}
                    <div className="avatar-placeholder">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    {/* Glowing Accent */}
                    <div className="avatar-glow"></div>
                  </div>

                  <div className="member-main-details">
                    <span className="member-dept">{member.department}</span>
                    <h3>{member.name}</h3>
                    <p className="member-role">{member.role}</p>
                  </div>

                  {/* Sliding Hover Info */}
                  <div className="member-hover-details">
                    <p className="member-bio">{member.bio}</p>
                    <div className="member-specialties">
                      {member.specialties.map((spec, sIdx) => (
                        <span className="specialty-badge" key={sIdx}>{spec}</span>
                      ))}
                    </div>
                    <div className="member-socials-row">
                      {member.socials.linkedin && (
                        <a href={member.socials.linkedin} target="_blank" rel="noreferrer" aria-label="Linkedin">
                          <LinkedinIcon size={18} />
                        </a>
                      )}
                      {member.socials.twitter && (
                        <a href={member.socials.twitter} target="_blank" rel="noreferrer" aria-label="Twitter">
                          <TwitterIcon size={18} />
                        </a>
                      )}
                      {member.socials.github && (
                        <a href={member.socials.github} target="_blank" rel="noreferrer" aria-label="Github">
                          <GithubIcon size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Hiring Banner */}
      <section className="team-hiring-section section-padding">
        <div className="container">
          <div className="hiring-banner-card glass-card text-center">
            <Users className="hiring-icon" size={40} />
            <h2>Looking to Build Future Solutions?</h2>
            <p>We are always hiring remote software engineers, cloud architects, and campaign managers. Check out our open roles.</p>
            <a href="#careers" className="btn btn-secondary">
              See Open Positions <Award size={16} style={{ marginLeft: '4px' }} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
