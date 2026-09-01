import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, Sparkles, ArrowRight, Activity } from 'lucide-react';

const MILESTONES = [
  {
    year: '1950',
    title: 'The Imitation Game',
    desc: 'Alan Turing proposes the fundamental question: "Can machines think?" introducing the Turing Test.',
    concept: 'Theoretical Foundations'
  },
  {
    year: '2012',
    title: 'Deep Learning Emerges',
    desc: 'AlexNet shatters ImageNet benchmarks using GPU acceleration, sparking the modern deep learning era.',
    concept: 'Neural Acceleration'
  },
  {
    year: '2017',
    title: 'Attention Is All You Need',
    desc: 'The Transformer architecture replaces recurrent connections with self-attention mechanisms.',
    concept: 'Scalable Architectures'
  },
  {
    year: '2022',
    title: 'Large-Scale Generative AI',
    desc: 'Instruction-tuned multimodal models bridge natural language reasoning with open-ended problem solving.',
    concept: 'Foundation Systems'
  },
  {
    year: '2026+',
    title: 'Agentic & Physical AGI',
    desc: 'Autonomous reasoning loops interact seamlessly with embodied robotics, tool use, and scientific discovery.',
    concept: 'Frontier Autonomy'
  }
];

export default function Interactive() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="container" style={{ paddingTop: '8rem', paddingBottom: '6rem', minHeight: '100vh' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginBottom: '4rem' }}>
        <span className="badge animate-pulse-glow" style={{ marginBottom: '1rem', display: 'inline-flex' }}>
          Interactive Timeline Experience
        </span>
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, lineHeight: 1.1, marginBottom: '1rem' }}>
          The Rise of Intelligence
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.7' }}>
          An interactive chronicle tracing how biological concepts of cognition transformed into silicon-based autonomous reasoning.
        </p>
      </div>

      {/* Interactive Timeline Stepper */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '0.75rem',
        flexWrap: 'wrap',
        marginBottom: '3rem'
      }}>
        {MILESTONES.map((m, idx) => (
          <button
            key={m.year}
            onClick={() => setActiveIndex(idx)}
            className={`btn-outline ${activeIndex === idx ? 'active' : ''}`}
            style={{
              padding: '0.6rem 1.2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.85rem'
            }}
          >
            <Activity size={14} style={{ color: activeIndex === idx ? 'var(--accent-cyan)' : 'var(--text-muted)' }} />
            {m.year}
          </button>
        ))}
      </div>

      {/* Main Showcase Panel */}
      <div className="card" style={{
        maxWidth: '850px',
        margin: '0 auto',
        padding: '3rem',
        background: 'linear-gradient(135deg, rgba(0, 229, 255, 0.05), rgba(139, 92, 246, 0.05))',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          fontSize: '4rem',
          fontFamily: 'var(--font-heading)',
          fontWeight: 800,
          color: 'var(--accent-cyan)',
          opacity: 0.25,
          position: 'absolute',
          top: '1rem',
          right: '2rem',
          pointerEvents: 'none'
        }}>
          {MILESTONES[activeIndex].year}
        </div>

        <span className="badge" style={{ marginBottom: '1.25rem' }}>
          {MILESTONES[activeIndex].concept}
        </span>

        <h2 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '2.25rem',
          fontWeight: 600,
          marginBottom: '1rem'
        }}>
          {MILESTONES[activeIndex].title}
        </h2>

        <p style={{
          color: 'var(--text-secondary)',
          fontSize: '1.1rem',
          lineHeight: '1.8',
          maxWidth: '620px',
          margin: '0 auto 2.5rem'
        }}>
          {MILESTONES[activeIndex].desc}
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <button 
            className="btn-cyan"
            onClick={() => setActiveIndex((activeIndex + 1) % MILESTONES.length)}
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
          >
            Next Era <ArrowRight size={15} />
          </button>
          <Link to="/" className="btn-outline">
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
