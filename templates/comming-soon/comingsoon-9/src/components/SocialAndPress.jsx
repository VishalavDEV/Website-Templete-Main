import React, { useState } from 'react';
import { ChevronDown, Send, HelpCircle, Award } from 'lucide-react';
import { TwitterIcon, LinkedinIcon, GithubIcon, DiscordIcon, YoutubeIcon } from './Icons';

export default function SocialAndPress({ currentPreset, lang = 'en', t }) {
  const [openFaqIdx, setOpenFaqIdx] = useState(0);

  const pressOutlets = [
    'TECHCRUNCH',
    'WIRED',
    'FORBES INNOVATION',
    'PRODUCT HUNT #1',
    'BLOOMBERG BETA',
    'MIT TECH REVIEW',
    'FAST COMPANY',
    'THE VERGE'
  ];

  return (
    <div style={{ margin: '60px 0 40px 0', width: '100%' }}>
      {/* Press Marquee */}
      <div style={{ marginBottom: '60px', overflow: 'hidden' }}>
        <div style={{
          textAlign: 'center',
          fontSize: '11px',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.12em',
          color: 'var(--text-muted)',
          marginBottom: '20px'
        }}>
          {t.pressTitle}
        </div>

        <div style={{
          position: 'relative',
          width: '100%',
          overflow: 'hidden',
          maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
        }}>
          <div className="marquee-track" style={{ display: 'flex', gap: '48px', alignItems: 'center' }}>
            {[...pressOutlets, ...pressOutlets].map((name, i) => (
              <span
                key={i}
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '16px',
                  fontWeight: 800,
                  letterSpacing: '0.06em',
                  color: 'var(--text-secondary)',
                  opacity: 0.7,
                  whiteSpace: 'nowrap'
                }}
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Accordion */}
      <div style={{ maxWidth: '780px', margin: '0 auto 60px auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <div className="glass-pill" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '4px 14px',
            fontSize: '12px',
            fontWeight: 700,
            color: 'var(--text-accent)',
            marginBottom: '8px'
          }}>
            <HelpCircle size={13} />
            <span>Frequently Asked Questions</span>
          </div>
          <h3 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--text-primary)' }}>
            Everything You Need to Know
          </h3>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {currentPreset.faqs.map((faq, idx) => {
            const isOpen = openFaqIdx === idx;
            return (
              <div
                key={idx}
                className="glass-panel"
                style={{
                  background: 'var(--bg-card)',
                  overflow: 'hidden',
                  transition: 'all 0.3s'
                }}
              >
                <button
                  onClick={() => setOpenFaqIdx(isOpen ? -1 : idx)}
                  style={{
                    width: '100%',
                    padding: '18px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: 'transparent',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '15px',
                    fontWeight: 700
                  }}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={18}
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.25s ease',
                      color: 'var(--accent-1)',
                      flexShrink: 0
                    }}
                  />
                </button>

                {isOpen && (
                  <div style={{
                    padding: '0 20px 18px 20px',
                    color: 'var(--text-secondary)',
                    fontSize: '14px',
                    lineHeight: 1.6,
                    borderTop: '1px solid var(--border-subtle)'
                  }}>
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Social Communities Bar */}
      <div className="glass-panel" style={{
        padding: '24px 32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '20px',
        background: 'var(--bg-card)'
      }}>
        <div>
          <div style={{ fontSize: '15px', fontWeight: 800, color: 'var(--text-primary)' }}>
            Join Our Global Early Access Community
          </div>
          <div style={{ fontSize: '13px', color: 'var(--text-secondary)', marginTop: '2px' }}>
            Get direct updates from the founders and weekly build logs.
          </div>
        </div>

        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {[
            { icon: TwitterIcon, href: 'https://twitter.com', label: 'Twitter / X' },
            { icon: DiscordIcon, href: 'https://discord.com', label: 'Discord' },
            { icon: GithubIcon, href: 'https://github.com', label: 'GitHub' },
            { icon: LinkedinIcon, href: 'https://linkedin.com', label: 'LinkedIn' },
            { icon: YoutubeIcon, href: 'https://youtube.com', label: 'YouTube' },
            { icon: Send, href: 'https://telegram.org', label: 'Telegram' }
          ].map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-pill"
              title={item.label}
              style={{
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-secondary)',
                transition: 'all 0.2s',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--text-primary)';
                e.currentTarget.style.borderColor = 'var(--border-accent)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-secondary)';
                e.currentTarget.style.borderColor = 'var(--border-subtle)';
              }}
            >
              <item.icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
