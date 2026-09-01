import React, { useState } from 'react';
import GlitchText from '../components/GlitchText';
import ChallengeCard from '../components/ChallengeCard';
import { Search, Filter, Cpu, Code, ShieldCheck, DollarSign, Activity, Leaf, Building, Globe } from 'lucide-react';

const Challenges = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('ALL');

  const categories = [
    'ALL',
    'AI & MACHINE LEARNING',
    'WEB & APP DEVELOPMENT',
    'CYBERSECURITY',
    'FINTECH',
    'HEALTHTECH',
    'SUSTAINABILITY',
    'SMART CITIES',
    'OPEN INNOVATION'
  ];

  const challengesList = [
    {
      id: 1,
      title: 'Autonomous LLM Agent Workflows',
      category: 'AI & MACHINE LEARNING',
      difficulty: 'HARD',
      prize: '₹75,000',
      participants: 34,
      description: 'Build multi-agent decision pipelines for complex enterprise operations using open-source models & vector search.',
      tags: ['PyTorch', 'LangChain', 'Python', 'VectorDB']
    },
    {
      id: 2,
      title: 'Next-Gen Scalable Web Applications',
      category: 'WEB & APP DEVELOPMENT',
      difficulty: 'MEDIUM',
      prize: '₹50,000',
      participants: 48,
      description: 'Create lightning-fast real-time collaborative web tools with offline sync and WebAssembly acceleration.',
      tags: ['React', 'TypeScript', 'WebSockets', 'Wasm']
    },
    {
      id: 3,
      title: 'Zero-Trust Cyber Authentication',
      category: 'CYBERSECURITY',
      difficulty: 'HARD',
      prize: '₹60,000',
      participants: 28,
      description: 'Develop cryptographic zero-knowledge proof auth gateways resistant to quantum & phishing attacks.',
      tags: ['Rust', 'ZK-Proofs', 'WebAssembly', 'Crypto']
    },
    {
      id: 4,
      title: 'Decentralized Micro-Payment Rails',
      category: 'FINTECH',
      difficulty: 'MEDIUM',
      prize: '₹50,000',
      participants: 41,
      description: 'Create ultra-fast sub-cent payment routing APIs for real-time digital creator subscriptions and streaming.',
      tags: ['Node.js', 'Solana', 'React', 'Web3']
    },
    {
      id: 5,
      title: 'Predictive Remote Patient Monitoring',
      category: 'HEALTHTECH',
      difficulty: 'HARD',
      prize: '₹55,000',
      participants: 25,
      description: 'Build IoT sensor streaming analysis tools detecting cardiac anomalies in real-time using edge ML models.',
      tags: ['TensorFlow', 'IoT', 'Python', 'Flutter']
    },
    {
      id: 6,
      title: 'Carbon Footprint Verification Protocol',
      category: 'SUSTAINABILITY',
      difficulty: 'MEDIUM',
      prize: '₹45,000',
      participants: 30,
      description: 'Create automated satellite and IoT sensor telemetry verification for supply chain green credits.',
      tags: ['GIS', 'Python', 'SmartContracts', 'Node']
    },
    {
      id: 7,
      title: 'Smart Traffic Flow Optimization',
      category: 'SMART CITIES',
      difficulty: 'MEDIUM',
      prize: '₹50,000',
      participants: 36,
      description: 'Build computer vision models optimizing emergency vehicle routing across urban traffic camera feeds.',
      tags: ['OpenCV', 'YOLO', 'C++', 'Python']
    },
    {
      id: 8,
      title: 'Wildcard Open Innovation Platform',
      category: 'OPEN INNOVATION',
      difficulty: 'EASY',
      prize: '₹40,000',
      participants: 52,
      description: 'Build anything impactful! Solve any real-world problem using your favorite tech stack and creative tools.',
      tags: ['Any Tech', 'Open Source', 'Hackers Choice']
    }
  ];

  const filteredChallenges = challengesList.filter((ch) => {
    const matchesSearch =
      ch.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ch.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ch.tags.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCategory = activeCategory === 'ALL' || ch.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div style={{ paddingTop: 'var(--nav-height)' }}>
      <section className="section-padding cyber-grid-bg" style={{ textAlign: 'center', borderBottom: '1px solid rgba(0, 255, 102, 0.2)' }}>
        <div className="container">
          <div className="badge-tag">● PROBLEM STATEMENTS</div>
          <GlitchText text="CHALLENGE TRACKS" tag="h1" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '0.75rem' }} />
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '1.1rem', color: '#94a3b8', maxWidth: '650px', margin: '0 auto' }}>
            Discover challenge tracks, problem requirements, difficulty tiers, and track cash bounties.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          {/* Controls: Search & Category Filters */}
          <div style={{ marginBottom: '3rem' }}>
            <div style={{ position: 'relative', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
              <Search size={18} color="#00ff66" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="text"
                placeholder="Search challenge or technology (e.g. PyTorch, Rust, IoT)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="cyber-input"
                style={{ paddingLeft: '2.75rem' }}
              />
            </div>

            <div style={{ display: 'flex', gap: '0.6rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    backgroundColor: activeCategory === cat ? '#00ff66' : 'rgba(10, 16, 12, 0.8)',
                    color: activeCategory === cat ? '#000' : '#cbd5e1',
                    border: `1px solid ${activeCategory === cat ? '#00ff66' : 'rgba(0, 255, 102, 0.2)'}`
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid of Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.75rem' }}>
            {filteredChallenges.map((challenge) => (
              <ChallengeCard key={challenge.id} challenge={challenge} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Challenges;
