import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, ChevronRight } from 'lucide-react';

const stages = [
  {
    id: 'before',
    label: '01',
    title: 'Before / Baseline',
    subtitle: 'The Catalyst for Change',
    desc: 'The original brand state was simple and generic. Unstructured serif letters with no clear positioning in a competitive digital space.',
    visual: () => (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', gap: '1.5rem' }}>
        <div style={{ border: '1px dashed rgba(17,17,17,0.3)', padding: '2.5rem 3.5rem', borderRadius: '4px', textAlign: 'center' }}>
          <div style={{ fontSize: '0.6rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '1rem', letterSpacing: '0.14em', textTransform: 'uppercase' }}>Old Brand — Times New Roman</div>
          <div style={{ fontFamily: 'serif', fontSize: '2.75rem', fontStyle: 'italic', textDecoration: 'line-through', color: 'var(--text-secondary)', opacity: 0.5 }}>aura skincare</div>
        </div>
        <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textAlign: 'center', maxWidth: '240px', lineHeight: '1.6' }}>
          Zero digital styling. No positioning strategy. Generic shelf presence.
        </p>
      </div>
    )
  },
  {
    id: 'strategy',
    label: '02',
    title: 'Brand Strategy',
    subtitle: 'Skincare as Ritual',
    desc: 'We redefined the brand around mindful skincare rituals — three core vectors: Organic Purity, Intentional Ritual, and Debossed Tactile luxury.',
    visual: () => (
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', padding: '2.5rem', gap: '1.5rem' }}>
        <div style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent-color)' }}>Brand Blueprint</div>
        {[
          { n: '01', t: 'Organic Purity', d: '100% organic formulations traceable to sourcing farms.' },
          { n: '02', t: 'Intentional Ritual', d: 'Repositioning daily hydration as a meditative experience.' },
          { n: '03', t: 'Debossed Tactility', d: 'Textured touchpoints that physically communicate quality.' }
        ].map(i => (
          <div key={i.n} style={{ borderLeft: '3px solid var(--text-primary)', paddingLeft: '1rem' }}>
            <div style={{ fontFamily: 'var(--font-headings)', fontSize: '1.1rem', fontWeight: 800 }}>{i.n} / {i.t}</div>
            <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>{i.d}</p>
          </div>
        ))}
      </div>
    )
  },
  {
    id: 'typography',
    label: '03',
    title: 'Typography System',
    subtitle: 'Refined & Custom Voice',
    desc: 'High-contrast character specimens based on Syne, optimized with optical kerning and strict layout for print packaging and ecommerce.',
    visual: () => (
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', padding: '2.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.68rem', fontWeight: 600, borderBottom: '1px solid var(--border-dark)', paddingBottom: '0.75rem', marginBottom: '2rem' }}>
          <span>SPECIMEN: SYNE BOLD</span>
          <span style={{ color: 'var(--accent-color)', fontFamily: 'monospace' }}>800 WEIGHT</span>
        </div>
        <div style={{ fontFamily: 'var(--font-headings)', fontSize: 'clamp(3rem, 5vw, 5.5rem)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 0.9, textAlign: 'center' }}>
          A U R A
        </div>
        <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-between', fontSize: '0.65rem', color: 'var(--text-secondary)', fontFamily: 'monospace' }}>
          <span>Kern: Optical</span><span>Track: -3%</span><span>Leading: 95%</span>
        </div>
      </div>
    )
  },
  {
    id: 'colors',
    label: '04',
    title: 'Color Palette',
    subtitle: 'Atmospheric Earth & Fire',
    desc: 'Earthy neutrals — Ivory Sand, Charcoal, Eucalyptus — represent organic formulations. Electric Orange adds modern vitality.',
    visual: () => (
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', padding: '2.5rem', gap: '1.75rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.875rem' }}>
          {[
            { name: 'Ivory Sand', hex: '#F5F3EF', bg: '#F5F3EF', border: true },
            { name: 'Charcoal', hex: '#111111', bg: '#111111' },
            { name: 'Eucalyptus', hex: '#8B9386', bg: '#8B9386' },
            { name: 'Electric', hex: '#FF5A1F', bg: '#FF5A1F' }
          ].map(c => (
            <div key={c.hex} style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
              <div style={{ height: '80px', backgroundColor: c.bg, border: c.border ? '1px solid rgba(17,17,17,0.15)' : 'none', borderRadius: '2px' }} />
              <span style={{ fontSize: '0.7rem', fontWeight: 600 }}>{c.name}</span>
              <span style={{ fontSize: '0.6rem', fontFamily: 'monospace', color: 'var(--text-secondary)' }}>{c.hex}</span>
            </div>
          ))}
        </div>
        <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: '1.55' }}>
          Neutral botanical hues form the foundation. Electric Orange disrupts traditional skincare aesthetics.
        </p>
      </div>
    )
  },
  {
    id: 'identity',
    label: '05',
    title: 'Visual Identity',
    subtitle: 'Coordinated Brand System',
    desc: 'Custom brandmarks, geometric alignments, and grid vectors bind product descriptions, volumes, and assets into a uniform layout.',
    visual: () => (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
        <div style={{ border: '1px solid var(--text-primary)', backgroundColor: '#fff', width: '240px', padding: '2.25rem 1.75rem', textAlign: 'left', boxShadow: '0 20px 60px rgba(0,0,0,0.08)', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '1rem', right: '1.5rem', fontSize: '0.65rem', fontWeight: 600, color: 'var(--accent-color)' }}>N° 402</div>
          <div style={{ fontFamily: 'var(--font-headings)', fontSize: '2.5rem', fontWeight: 800, lineHeight: 1 }}>AURA</div>
          <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--accent-color)', margin: '0.75rem 0' }} />
          <div style={{ fontSize: '0.58rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>Botanical Skin Rituals</div>
          <div style={{ marginTop: '2.25rem', display: 'flex', justifyContent: 'space-between', fontSize: '0.52rem', fontFamily: 'monospace', color: 'var(--text-secondary)' }}>
            <span>VOL: 100ML</span><span>EST: 2026</span>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'packaging',
    label: '06',
    title: 'Tactile Packaging',
    subtitle: 'Physical Brand Touchpoints',
    desc: 'Eco-conscious glass bottles with cotton wrap labels, debossed logos, and high-texture finishes that communicate quality on the shelf.',
    visual: () => (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', gap: '2.5rem' }}>
        {[{ sub: 'Radiance Fluid', vol: '100ML', h: 230, w: 135 }, { sub: 'Repair Serum', vol: '30ML', h: 175, w: 105 }].map((b, i) => (
          <div key={i} style={{ width: `${b.w}px`, height: `${b.h}px`, backgroundColor: '#fff', border: '1px solid var(--border-color)', boxShadow: '0 20px 50px rgba(17,17,17,0.07)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '1.5rem 1.25rem', borderRadius: '2px' }}>
            <div>
              <span style={{ fontSize: '0.48rem', letterSpacing: '0.1em', fontWeight: 700, textTransform: 'uppercase', color: 'var(--accent-color)' }}>Active Botanical</span>
              <div style={{ fontFamily: 'var(--font-headings)', fontSize: '1.3rem', fontWeight: 800, marginTop: '0.2rem' }}>AURA</div>
            </div>
            <div>
              <div style={{ width: '100%', height: '1px', backgroundColor: 'var(--border-color)', marginBottom: '0.5rem' }} />
              <div style={{ fontSize: '0.46rem', fontFamily: 'monospace', color: 'var(--text-secondary)' }}>{b.sub}</div>
              <div style={{ fontSize: '0.46rem', fontFamily: 'monospace', color: 'var(--text-secondary)' }}>{b.vol} / GLASS</div>
            </div>
          </div>
        ))}
      </div>
    )
  },
  {
    id: 'digital',
    label: '07',
    title: 'Digital Platform',
    subtitle: 'The Sensory Commerce Experience',
    desc: 'Immersive digital store with smooth transitions and high-fidelity checkout. Resulted in a 140% increase in DTC conversions after launch.',
    visual: () => (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '1.75rem' }}>
        <div style={{ flex: 1, border: '1px solid var(--border-dark)', backgroundColor: '#F5F3EF', borderRadius: '4px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          <div style={{ height: '22px', backgroundColor: 'rgba(17,17,17,0.03)', borderBottom: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: '0.3rem', paddingLeft: '0.75rem' }}>
            {['#FF5F56','#FFBD2E','#27C93F'].map(c => <div key={c} style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: c }} />)}
            <span style={{ fontSize: '0.5rem', color: 'var(--text-secondary)', marginLeft: '0.75rem', fontFamily: 'monospace' }}>aura.studio/shop</span>
          </div>
          <div style={{ flex: 1, padding: '1rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '0.6rem', fontWeight: 800 }}>AURA.</span>
              <span style={{ fontSize: '0.5rem', fontWeight: 600, color: 'var(--accent-color)' }}>BAG (1)</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '1rem', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '0.48rem', fontWeight: 600, color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Botanical Fluid</div>
                <div style={{ fontSize: '0.95rem', fontWeight: 800, lineHeight: 1.15, marginTop: '0.2rem' }}>A new ritual for skin.</div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.2rem', fontSize: '0.48rem', fontWeight: 600, backgroundColor: 'var(--text-primary)', color: '#fff', padding: '3px 7px', marginTop: '0.4rem', borderRadius: '2px' }}>
                  Shop Now <ArrowRight size={7} />
                </div>
              </div>
              <div style={{ width: '100%', height: '70px', backgroundColor: '#E5E2DD', border: '1px solid var(--border-color)', borderRadius: '2px' }} />
            </div>
            <div style={{ display: 'flex', gap: '1rem', fontSize: '0.48rem', fontFamily: 'monospace', color: 'var(--text-secondary)' }}>
              <span>+140% DTC</span><span>+87% Return</span><span>3.2x ROAS</span>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.75rem' }}>
          <CheckCircle2 size={13} style={{ color: 'var(--accent-color)', flexShrink: 0 }} />
          <span style={{ fontSize: '0.68rem', fontWeight: 600 }}>Campaign Launch — AURA: Radiance Repair</span>
        </div>
      </div>
    )
  }
];

export default function FeaturedCaseStudy() {
  const [active, setActive] = useState(0);
  const Visual = stages[active].visual;

  return (
    <section id="featured-case-study" className="section-padding" style={{ backgroundColor: '#F5F3EF', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">

        {/* Header */}
        <div style={{ marginBottom: '3rem', paddingBottom: '2rem', borderBottom: '1px solid var(--border-color)' }}>
          <span className="text-meta">Case Study — Rebrand</span>
          <h2 className="text-editorial-h2" style={{ marginTop: '0.5rem' }}>
            AURA<span style={{ color: 'var(--accent-color)' }}>.</span> — Brand Transformation
          </h2>
          <p style={{ marginTop: '0.75rem', fontSize: '1rem', color: 'var(--text-secondary)', maxWidth: '520px', lineHeight: '1.7' }}>
            Seven stages of strategy and craft — click each stage to see how the brand evolved.
          </p>
        </div>

        {/* Stage selector tabs */}
        <div style={{ display: 'flex', gap: '0', marginBottom: '0', borderBottom: '1px solid var(--border-color)' }}>
          {stages.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setActive(i)}
              style={{
                flex: 1,
                padding: '0.9rem 0.5rem',
                background: 'none',
                border: 'none',
                borderBottom: active === i ? '2px solid var(--accent-color)' : '2px solid transparent',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.2rem',
                transition: 'all 0.25s ease',
                marginBottom: '-1px'
              }}
            >
              <span style={{
                fontFamily: 'monospace',
                fontSize: '0.7rem',
                fontWeight: 700,
                color: active === i ? 'var(--accent-color)' : 'var(--text-secondary)',
                transition: 'color 0.25s ease'
              }}>
                {s.label}
              </span>
              <span style={{
                fontSize: '0.6rem',
                fontWeight: 600,
                color: active === i ? 'var(--text-primary)' : 'var(--text-secondary)',
                textAlign: 'center',
                lineHeight: 1.2,
                transition: 'color 0.25s ease',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                maxWidth: '90px'
              }}>
                {s.title.split('/')[0].trim()}
              </span>
            </button>
          ))}
        </div>

        {/* Main content: text left, visual right */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.1fr',
          height: '480px',
          border: '1px solid var(--border-color)',
          borderTop: 'none'
        }}>

          {/* Left: active stage text */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '3rem',
            borderRight: '1px solid var(--border-color)'
          }}>
            <span style={{ fontFamily: 'monospace', fontSize: '0.7rem', color: 'var(--accent-color)', fontWeight: 700, letterSpacing: '0.12em', display: 'block', marginBottom: '1.25rem' }}>
              Stage {stages[active].label}
            </span>
            <h3 style={{ fontFamily: 'var(--font-headings)', fontSize: 'clamp(1.5rem, 2.2vw, 2.25rem)', fontWeight: 800, marginBottom: '0.4rem', color: 'var(--text-primary)', lineHeight: 1.1, transition: 'all 0.3s ease' }}>
              {stages[active].title}
            </h3>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--accent-color)', marginBottom: '1.5rem' }}>
              {stages[active].subtitle}
            </h4>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.75', color: 'var(--text-secondary)', maxWidth: '360px' }}>
              {stages[active].desc}
            </p>

            {/* Stage navigation arrows */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '2.5rem' }}>
              <button
                onClick={() => setActive(i => Math.max(0, i - 1))}
                disabled={active === 0}
                style={{ width: '34px', height: '34px', border: '1px solid var(--border-color)', background: 'none', borderRadius: '50%', cursor: active === 0 ? 'not-allowed' : 'pointer', opacity: active === 0 ? 0.3 : 1, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s ease' }}
              >
                <ChevronRight size={14} style={{ transform: 'rotate(180deg)' }} />
              </button>
              <span style={{ fontSize: '0.7rem', fontFamily: 'monospace', color: 'var(--text-secondary)' }}>
                {active + 1} / {stages.length}
              </span>
              <button
                onClick={() => setActive(i => Math.min(stages.length - 1, i + 1))}
                disabled={active === stages.length - 1}
                style={{ width: '34px', height: '34px', border: '1px solid var(--border-color)', background: 'none', borderRadius: '50%', cursor: active === stages.length - 1 ? 'not-allowed' : 'pointer', opacity: active === stages.length - 1 ? 0.3 : 1, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s ease' }}
              >
                <ChevronRight size={14} />
              </button>
            </div>
          </div>

          {/* Right: visual for active stage */}
          <div style={{ backgroundColor: '#ECEAE4', position: 'relative', overflow: 'hidden' }}>
            <div key={active} className="stage-visual-enter" style={{ width: '100%', height: '100%' }}>
              <Visual />
            </div>
          </div>

        </div>

      </div>

      <style>{`
        .stage-visual-enter {
          animation: stageIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        @keyframes stageIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 800px) {
          #featured-case-study .container > div:last-child {
            grid-template-columns: 1fr !important;
            height: auto !important;
          }
          #featured-case-study .container > div:last-child > div:last-child {
            height: 320px;
          }
        }
      `}</style>
    </section>
  );
}
