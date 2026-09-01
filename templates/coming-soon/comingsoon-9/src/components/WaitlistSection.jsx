import React, { useState } from 'react';
import { Mail, ArrowRight, ShieldCheck, CheckCircle2, Copy, Check, Share2, Sparkles, Trophy, Users, MessageCircle, Send } from 'lucide-react';
import { TwitterIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';

export default function WaitlistSection({ currentPreset, lang = 'en', t }) {
  const [email, setEmail] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [selectedInterests, setSelectedInterests] = useState([currentPreset.segmentationOptions[0]]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [copied, setCopied] = useState(false);
  const [simulatedShares, setSimulatedShares] = useState(0);

  const toggleInterest = (tag) => {
    if (selectedInterests.includes(tag)) {
      if (selectedInterests.length > 1) {
        setSelectedInterests(selectedInterests.filter(t => t !== tag));
      }
    } else {
      setSelectedInterests([...selectedInterests, tag]);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    // Honeypot spam check
    if (honeypot) {
      console.warn('Bot detected via honeypot.');
      return;
    }

    // Email regex validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email.trim())) {
      setErrorMsg('Please provide a valid corporate or personal email address.');
      return;
    }

    setIsSubmitting(true);

    // Simulate fast server response
    setTimeout(() => {
      setIsSubmitting(false);
      const userRank = Math.floor(Math.random() * 80) + 120;
      const refCode = `${currentPreset.name.substring(0, 3).toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`;
      const refUrl = `https://${currentPreset.id}.launchpad.io/?ref=${refCode}`;

      setSubmittedData({
        email: email.trim(),
        rank: userRank,
        totalQueue: currentPreset.initialWaitlistCount + 1,
        refCode,
        refUrl,
        selectedInterests
      });

      // Fire celebratory confetti explosion
      try {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // Fallback gracefully
      }
    }, 650);
  };

  const handleCopyLink = () => {
    if (!submittedData?.refUrl) return;
    navigator.clipboard.writeText(submittedData.refUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const handleSimulateShare = (platform) => {
    setSimulatedShares(prev => prev + 1);
    const text = encodeURIComponent(`I just secured VIP spot #${submittedData.rank} for ${currentPreset.name}! Join the private beta: ${submittedData.refUrl}`);
    let shareLink = '#';

    if (platform === 'twitter') shareLink = `https://twitter.com/intent/tweet?text=${text}`;
    else if (platform === 'linkedin') shareLink = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(submittedData.refUrl)}`;
    else if (platform === 'whatsapp') shareLink = `https://api.whatsapp.com/send?text=${text}`;
    else if (platform === 'telegram') shareLink = `https://t.me/share/url?url=${encodeURIComponent(submittedData.refUrl)}&text=${text}`;

    window.open(shareLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <div style={{ margin: '36px 0 32px 0', width: '100%', maxWidth: '640px' }}>
      {!submittedData ? (
        <form onSubmit={handleFormSubmit} style={{ width: '100%' }}>
          {/* Interest Segmentation Selectors */}
          <div style={{ marginBottom: '16px' }}>
            <div style={{
              fontSize: '12px',
              fontWeight: 600,
              color: 'var(--text-secondary)',
              marginBottom: '8px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <Sparkles size={13} style={{ color: 'var(--accent-1)' }} />
              <span>{t.selectInterests}</span>
            </div>

            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px'
            }}>
              {currentPreset.segmentationOptions.map((opt, i) => {
                const isSelected = selectedInterests.includes(opt);
                return (
                  <button
                    type="button"
                    key={i}
                    onClick={() => toggleInterest(opt)}
                    className="glass-pill"
                    style={{
                      padding: '6px 14px',
                      fontSize: '12px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      background: isSelected ? 'var(--accent-gradient)' : 'var(--bg-pill)',
                      color: isSelected ? '#ffffff' : 'var(--text-secondary)',
                      borderColor: isSelected ? 'transparent' : 'var(--border-subtle)',
                      transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Hidden Honeypot Field for anti-spam */}
          <input
            type="text"
            name="hp_field"
            tabIndex={-1}
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            style={{ display: 'none' }}
            autoComplete="off"
          />

          {/* Email Input Bar */}
          <div className="glass-panel" style={{
            padding: '6px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'var(--bg-input)'
          }}>
            <div style={{ paddingLeft: '14px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center' }}>
              <Mail size={18} />
            </div>
            <input
              type="email"
              placeholder={t.enterEmail}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                flex: 1,
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-body)',
                fontSize: '14px',
                padding: '10px 4px'
              }}
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="glow-btn"
              style={{ padding: '12px 24px', fontSize: '14px', whiteSpace: 'nowrap' }}
            >
              {isSubmitting ? t.joiningWaitlist : (
                <>
                  <span>{t.notifyMe}</span>
                  <ArrowRight size={15} />
                </>
              )}
            </button>
          </div>

          {errorMsg && (
            <div style={{ color: '#f43f5e', fontSize: '13px', marginTop: '8px', fontWeight: 500 }}>
              {errorMsg}
            </div>
          )}

          {/* Trust and Anti-Spam Badge */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginTop: '12px',
            fontSize: '12px',
            color: 'var(--text-muted)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <ShieldCheck size={13} style={{ color: '#10b981' }} />
              <span>{t.spamProtection}</span>
            </div>
            <span>•</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <Users size={13} style={{ color: 'var(--accent-2)' }} />
              <span>{currentPreset.initialWaitlistCount.toLocaleString()}+ on waitlist</span>
            </div>
          </div>
        </form>
      ) : (
        /* Post-Registration Viral Referral Hub */
        <div className="glass-panel" style={{
          padding: '24px',
          background: 'var(--bg-card)',
          border: '1px solid var(--border-accent)',
          animation: 'floatSlow 8s ease-in-out infinite'
        }}>
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
            <CheckCircle2 size={24} style={{ color: '#10b981' }} />
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-primary)' }}>
                {t.joinedSuccess}
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                Confirmation & priority token dispatched to <strong style={{ color: 'var(--text-primary)' }}>{submittedData.email}</strong>
              </p>
            </div>
          </div>

          {/* Queue Rank Card */}
          <div style={{
            background: 'var(--bg-pill)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-sm)',
            padding: '14px 18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '20px'
          }}>
            <div>
              <div style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 600 }}>
                {t.queueRank}
              </div>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '28px',
                fontWeight: 800,
                color: 'var(--accent-1)'
              }}>
                #{Math.max(1, submittedData.rank - (simulatedShares * 50))}
              </div>
            </div>

            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 600 }}>
                Queue Momentum
              </div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: '#10b981' }}>
                Top 2.4% Priority
              </div>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                {submittedData.totalQueue.toLocaleString()} {t.peopleBehind}
              </div>
            </div>
          </div>

          {/* Viral Referral Box */}
          <div>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '10px' }}>
              {t.shareToMoveUp}
            </p>

            <div style={{
              display: 'flex',
              gap: '8px',
              marginBottom: '14px'
            }}>
              <input
                type="text"
                readOnly
                value={submittedData.refUrl}
                style={{
                  flex: 1,
                  background: 'var(--bg-input)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '10px 14px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  color: 'var(--text-accent)'
                }}
              />
              <button
                onClick={handleCopyLink}
                className="glass-panel"
                style={{
                  padding: '10px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  cursor: 'pointer',
                  fontSize: '13px',
                  fontWeight: 600,
                  color: 'var(--text-primary)'
                }}
              >
                {copied ? <Check size={14} style={{ color: '#10b981' }} /> : <Copy size={14} />}
                <span>{copied ? t.copied : t.copyLink}</span>
              </button>
            </div>

            {/* Social Share Buttons */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
              {[
                { icon: TwitterIcon, label: 'X (Twitter)', id: 'twitter', color: 'var(--text-primary)' },
                { icon: LinkedinIcon, label: 'LinkedIn', id: 'linkedin', color: '#0a66c2' },
                { icon: MessageCircle, label: 'WhatsApp', id: 'whatsapp', color: '#25d366' },
                { icon: Send, label: 'Telegram', id: 'telegram', color: '#229ed9' }
              ].map((plat) => (
                <button
                  key={plat.id}
                  onClick={() => handleSimulateShare(plat.id)}
                  className="glass-pill"
                  style={{
                    padding: '6px 12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '12px',
                    color: 'var(--text-secondary)',
                    cursor: 'pointer'
                  }}
                >
                  <plat.icon size={13} style={{ color: plat.color }} />
                  <span>{plat.label}</span>
                </button>
              ))}
            </div>

            {/* Referral Milestone Roadmap */}
            <div style={{
              borderTop: '1px solid var(--border-subtle)',
              paddingTop: '14px',
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '8px',
              textAlign: 'center'
            }}>
              <div style={{
                padding: '8px',
                borderRadius: '6px',
                background: simulatedShares >= 1 ? 'rgba(16, 185, 129, 0.15)' : 'var(--bg-pill)',
                border: `1px solid ${simulatedShares >= 1 ? '#10b981' : 'transparent'}`
              }}>
                <div style={{ fontSize: '11px', fontWeight: 700, color: simulatedShares >= 1 ? '#10b981' : 'var(--text-muted)' }}>
                  {t.rewardTier1}
                </div>
              </div>

              <div style={{
                padding: '8px',
                borderRadius: '6px',
                background: simulatedShares >= 3 ? 'rgba(16, 185, 129, 0.15)' : 'var(--bg-pill)',
                border: `1px solid ${simulatedShares >= 3 ? '#10b981' : 'transparent'}`
              }}>
                <div style={{ fontSize: '11px', fontWeight: 700, color: simulatedShares >= 3 ? '#10b981' : 'var(--text-muted)' }}>
                  {t.rewardTier2}
                </div>
              </div>

              <div style={{
                padding: '8px',
                borderRadius: '6px',
                background: simulatedShares >= 5 ? 'rgba(16, 185, 129, 0.15)' : 'var(--bg-pill)',
                border: `1px solid ${simulatedShares >= 5 ? '#10b981' : 'transparent'}`
              }}>
                <div style={{ fontSize: '11px', fontWeight: 700, color: simulatedShares >= 5 ? '#10b981' : 'var(--text-muted)' }}>
                  {t.rewardTier3}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
