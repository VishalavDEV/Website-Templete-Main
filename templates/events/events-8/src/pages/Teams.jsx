import React, { useState } from 'react';
import GlitchText from '../components/GlitchText';
import { Users, Search, PlusCircle, UserCheck, CheckCircle2, Shield, Code, Sparkles, Filter } from 'lucide-react';

const Teams = () => {
  const [activeTab, setActiveTab] = useState('FIND_TEAM');

  // Create Team Form State
  const [createData, setCreateData] = useState({
    teamName: '',
    captainName: '',
    email: '',
    college: '',
    teamSize: '3',
    skills: ''
  });
  const [createSuccess, setCreateSuccess] = useState(false);

  // Search State
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSkillFilter, setSelectedSkillFilter] = useState('ALL');

  const skillsList = ['ALL', 'React', 'Python', 'AI', 'UI/UX', 'Java', 'C++', 'Cybersecurity', 'Cloud', 'Robotics'];

  const availableTeams = [
    { id: 1, name: 'Neural Overlords', captain: 'Alex Rivera', college: 'IIT Madras', membersNeeded: 1, requiredSkills: ['AI', 'Python'], projectTrack: 'AI & Machine Learning' },
    { id: 2, name: 'Cyber Phantom', college: 'Anna University', captain: 'Priya Sharma', membersNeeded: 2, requiredSkills: ['Cybersecurity', 'C++'], projectTrack: 'Cybersecurity' },
    { id: 3, name: 'Quantum Coders', college: 'SRM Institute', captain: 'Rohan Gupta', membersNeeded: 1, requiredSkills: ['React', 'UI/UX'], projectTrack: 'Web & App Development' },
    { id: 4, name: 'RoboBytes', college: 'VIT Chennai', captain: 'Karthik Raja', membersNeeded: 2, requiredSkills: ['Robotics', 'C++'], projectTrack: 'Smart Cities' },
    { id: 5, name: 'Cloud Architects', college: 'SSN College', captain: 'Ananya Roy', membersNeeded: 1, requiredSkills: ['Cloud', 'Java'], projectTrack: 'FinTech' }
  ];

  const handleCreateSubmit = (e) => {
    e.preventDefault();
    setCreateSuccess(true);
    setTimeout(() => {
      setCreateSuccess(false);
      setCreateData({ teamName: '', captainName: '', email: '', college: '', teamSize: '3', skills: '' });
      setActiveTab('FIND_TEAM');
    }, 2500);
  };

  const filteredTeams = availableTeams.filter((t) => {
    const matchesSearch =
      t.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.college.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.captain.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesSkill = selectedSkillFilter === 'ALL' || t.requiredSkills.includes(selectedSkillFilter);

    return matchesSearch && matchesSkill;
  });

  return (
    <div style={{ paddingTop: 'var(--nav-height)' }}>
      {/* Page Hero */}
      <section className="section-padding cyber-grid-bg" style={{ textAlign: 'center', borderBottom: '1px solid rgba(0, 255, 102, 0.2)' }}>
        <div className="container">
          <div className="badge-tag">● HACKER MATCHMAKING</div>
          <GlitchText text="TEAMS & TEAMMATES" tag="h1" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '0.75rem' }} />
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '1.1rem', color: '#94a3b8', maxWidth: '650px', margin: '0 auto' }}>
            Form your 2-4 hacker team, search open teams recruiting skills, or find solo teammates to pair with.
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className="section-padding">
        <div className="container">
          {/* Navigation Tabs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => setActiveTab('FIND_TEAM')}
              className={`btn ${activeTab === 'FIND_TEAM' ? 'btn-primary' : 'btn-secondary'}`}
            >
              <Search size={16} /> FIND A TEAM
            </button>
            <button
              onClick={() => setActiveTab('CREATE_TEAM')}
              className={`btn ${activeTab === 'CREATE_TEAM' ? 'btn-primary' : 'btn-secondary'}`}
            >
              <PlusCircle size={16} /> CREATE A TEAM
            </button>
            <button
              onClick={() => setActiveTab('FIND_TEAMMATES')}
              className={`btn ${activeTab === 'FIND_TEAMMATES' ? 'btn-primary' : 'btn-secondary'}`}
            >
              <Users size={16} /> FIND TEAMMATES
            </button>
          </div>

          {/* TAB 1: FIND A TEAM */}
          {activeTab === 'FIND_TEAM' && (
            <div>
              {/* Search & Skill Filter Bar */}
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                <div style={{ position: 'relative', flex: 1, minWidth: '250px' }}>
                  <Search size={18} color="#00ff66" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
                  <input
                    type="text"
                    placeholder="Search teams by name, college, or captain..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="cyber-input"
                    style={{ paddingLeft: '2.75rem' }}
                  />
                </div>

                <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                  {skillsList.map((skill, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedSkillFilter(skill)}
                      style={{
                        padding: '0.4rem 0.85rem',
                        borderRadius: '20px',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.78rem',
                        cursor: 'pointer',
                        backgroundColor: selectedSkillFilter === skill ? '#00ff66' : 'rgba(10, 16, 12, 0.8)',
                        color: selectedSkillFilter === skill ? '#000' : '#cbd5e1',
                        border: `1px solid ${selectedSkillFilter === skill ? '#00ff66' : 'rgba(0, 255, 102, 0.2)'}`
                      }}
                    >
                      {skill}
                    </button>
                  ))}
                </div>
              </div>

              {/* List of Available Teams */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                {filteredTeams.map((team) => (
                  <div key={team.id} className="cyber-card" style={{ padding: '1.75rem', backgroundColor: 'rgba(10, 16, 12, 0.85)' }}>
                    <div className="cyber-corner-tl" />
                    <div className="cyber-corner-br" />

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                      <span className="badge-tag" style={{ margin: 0, fontSize: '0.75rem' }}>{team.projectTrack}</span>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#00ff66' }}>
                        NEED {team.membersNeeded} MEMBER{team.membersNeeded > 1 ? 'S' : ''}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '0.35rem' }}>{team.name}</h3>
                    <div style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '1rem', fontFamily: 'var(--font-mono)' }}>
                      Captain: {team.captain} | {team.college}
                    </div>

                    <div style={{ marginBottom: '1.25rem' }}>
                      <div style={{ fontSize: '0.78rem', color: '#64748b', fontFamily: 'var(--font-mono)', marginBottom: '0.35rem' }}>REQUIRED SKILLS:</div>
                      <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                        {team.requiredSkills.map((sk, idx) => (
                          <span key={idx} style={{ backgroundColor: 'rgba(0, 255, 102, 0.1)', border: '1px solid rgba(0, 255, 102, 0.3)', color: '#00ff66', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', padding: '0.2rem 0.55rem', borderRadius: '4px' }}>
                            #{sk}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button className="btn btn-outline" style={{ width: '100%', padding: '0.6rem' }} onClick={() => alert(`Join request sent to captain ${team.captain} of ${team.name}!`)}>
                      <UserCheck size={16} /> REQUEST TO JOIN TEAM
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: CREATE A TEAM FORM */}
          {activeTab === 'CREATE_TEAM' && (
            <div style={{ maxWidth: '650px', margin: '0 auto' }}>
              <div className="cyber-card" style={{ padding: '2.5rem', backgroundColor: 'rgba(10, 16, 12, 0.9)' }}>
                <h2 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '0.5rem', textAlign: 'center' }}>CREATE YOUR TEAM</h2>
                <p style={{ color: '#94a3b8', fontSize: '0.9rem', textAlign: 'center', fontFamily: 'var(--font-mono)', marginBottom: '2rem' }}>
                  Register your squad name and recruit remaining members.
                </p>

                {createSuccess ? (
                  <div style={{ textAlign: 'center', padding: '2rem' }}>
                    <CheckCircle2 size={54} color="#00ff66" style={{ margin: '0 auto 1rem auto' }} />
                    <h3 style={{ color: '#fff', fontSize: '1.4rem' }}>TEAM CREATED SUCCESSFULLY</h3>
                    <p style={{ color: '#94a3b8', fontFamily: 'var(--font-mono)', marginTop: '0.5rem' }}>
                      Your team is now live on the hacker matchmaking list!
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleCreateSubmit}>
                    <div style={{ marginBottom: '1.25rem' }}>
                      <label style={{ display: 'block', fontSize: '0.82rem', color: '#94a3b8', fontFamily: 'var(--font-mono)', marginBottom: '0.4rem' }}>
                        TEAM NAME:
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Cyber Titans"
                        value={createData.teamName}
                        onChange={(e) => setCreateData({ ...createData, teamName: e.target.value })}
                        className="cyber-input"
                        required
                      />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.25rem' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.82rem', color: '#94a3b8', fontFamily: 'var(--font-mono)', marginBottom: '0.4rem' }}>
                          CAPTAIN NAME:
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Rahul Sharma"
                          value={createData.captainName}
                          onChange={(e) => setCreateData({ ...createData, captainName: e.target.value })}
                          className="cyber-input"
                          required
                        />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.82rem', color: '#94a3b8', fontFamily: 'var(--font-mono)', marginBottom: '0.4rem' }}>
                          CAPTAIN EMAIL:
                        </label>
                        <input
                          type="email"
                          placeholder="rahul@college.edu"
                          value={createData.email}
                          onChange={(e) => setCreateData({ ...createData, email: e.target.value })}
                          className="cyber-input"
                          required
                        />
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.25rem' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.82rem', color: '#94a3b8', fontFamily: 'var(--font-mono)', marginBottom: '0.4rem' }}>
                          COLLEGE / INSTITUTION:
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Anna University"
                          value={createData.college}
                          onChange={(e) => setCreateData({ ...createData, college: e.target.value })}
                          className="cyber-input"
                          required
                        />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.82rem', color: '#94a3b8', fontFamily: 'var(--font-mono)', marginBottom: '0.4rem' }}>
                          TOTAL TEAM SIZE:
                        </label>
                        <select
                          value={createData.teamSize}
                          onChange={(e) => setCreateData({ ...createData, teamSize: e.target.value })}
                          className="cyber-input"
                        >
                          <option value="2">2 Members</option>
                          <option value="3">3 Members</option>
                          <option value="4">4 Members</option>
                        </select>
                      </div>
                    </div>

                    <div style={{ marginBottom: '1.75rem' }}>
                      <label style={{ display: 'block', fontSize: '0.82rem', color: '#94a3b8', fontFamily: 'var(--font-mono)', marginBottom: '0.4rem' }}>
                        REQUIRED TEAMMATE SKILLS:
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. React, Python, UI/UX Design"
                        value={createData.skills}
                        onChange={(e) => setCreateData({ ...createData, skills: e.target.value })}
                        className="cyber-input"
                        required
                      />
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '0.9rem' }}>
                      <PlusCircle size={18} /> CREATE TEAM & POST RECRUITMENT
                    </button>
                  </form>
                )}
              </div>
            </div>
          )}

          {/* TAB 3: FIND TEAMMATES SKILL CARDS */}
          {activeTab === 'FIND_TEAMMATES' && (
            <div>
              <div className="title-container">
                <h2 className="section-title text-gradient">LOOKING FOR TEAMMATES?</h2>
                <p className="section-subtitle">Browse solo developers by skill set and assemble your dream hackathon squad.</p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
                {['React', 'Python', 'AI', 'UI/UX', 'Java', 'C++', 'Cybersecurity', 'Cloud', 'Robotics'].map((skillName, idx) => (
                  <div key={idx} className="cyber-card" style={{ textAlign: 'center', padding: '1.75rem 1rem', backgroundColor: 'rgba(10, 16, 12, 0.85)' }}>
                    <div className="cyber-corner-tl" />
                    <div className="cyber-corner-br" />
                    <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'rgba(0, 255, 102, 0.1)', border: '1px solid #00ff66', color: '#00ff66', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
                      <Code size={22} />
                    </div>
                    <h3 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '0.25rem' }}>{skillName}</h3>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#00ff66', marginBottom: '1rem' }}>
                      {Math.floor(Math.random() * 25 + 15)} Solo Hackers Available
                    </div>
                    <button className="btn btn-outline" style={{ width: '100%', padding: '0.45rem', fontSize: '0.78rem' }} onClick={() => alert(`Viewing available ${skillName} hackers!`)}>
                      VIEW {skillName.toUpperCase()} HACKERS
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Teams;
