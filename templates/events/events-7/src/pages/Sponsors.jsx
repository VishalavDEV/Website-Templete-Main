import React from 'react';
import { SPONSORS_DATA } from '../data/sponsors';
import SponsorCard from '../components/SponsorCard';
import { Award, ShieldCheck, Heart } from 'lucide-react';

export default function Sponsors() {
  return (
    <div style={{ background: 'var(--bg-midnight)', minHeight: '100vh', paddingTop: '40px', paddingBottom: '90px' }}>
      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: '0 24px' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>PARTNERS & SUPPORTERS</div>
          <h1 className="font-display text-gradient-fire" style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}>
            POWERED BY PARTNERS
          </h1>
          <p style={{ color: 'var(--soft-grey)', maxWidth: '640px', margin: '16px auto 0 auto', fontSize: '1.05rem' }}>
            We thank our global sports, wellness, and community partners who make Vayora Runfest 2026 possible.
          </p>
        </div>

        {/* Title Partner */}
        <div style={{ marginBottom: '50px' }}>
          <h2 style={{ color: 'var(--bright-orange)', fontSize: '0.85rem', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px', textAlign: 'center' }}>
            TITLE PARTNER
          </h2>
          <SponsorCard sponsor={SPONSORS_DATA.titlePartner} tier="title" />
        </div>

        {/* Gold Partners */}
        <div style={{ marginBottom: '50px' }}>
          <h2 style={{ color: 'var(--bright-orange)', fontSize: '0.85rem', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px', textAlign: 'center' }}>
            GOLD PARTNERS
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            {SPONSORS_DATA.goldPartners.map((sp, idx) => (
              <SponsorCard key={idx} sponsor={sp} tier="gold" />
            ))}
          </div>
        </div>

        {/* Silver Partners */}
        <div style={{ marginBottom: '50px' }}>
          <h2 style={{ color: 'var(--bright-orange)', fontSize: '0.85rem', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px', textAlign: 'center' }}>
            SILVER PARTNERS
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
            {SPONSORS_DATA.silverPartners.map((sp, idx) => (
              <SponsorCard key={idx} sponsor={sp} tier="silver" />
            ))}
          </div>
        </div>

        {/* Community Partners */}
        <div>
          <h2 style={{ color: 'var(--bright-orange)', fontSize: '0.85rem', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px', textAlign: 'center' }}>
            COMMUNITY & RUNNING CLUBS
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '14px' }}>
            {SPONSORS_DATA.communityPartners.map((sp, idx) => (
              <div key={idx} className="glass-panel" style={{ padding: '16px', textAlign: 'center', fontSize: '0.85rem', fontWeight: 700, color: 'var(--warm-white)' }}>
                {sp.name}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
