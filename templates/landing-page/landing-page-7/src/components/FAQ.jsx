import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import './FAQ.css';

export default function FAQ() {
  const [activeIdx, setActiveIdx] = useState(null);

  const toggleFaq = (idx) => {
    setActiveIdx(activeIdx === idx ? null : idx);
  };

  const faqData = [
    {
      q: 'What is Flowly AI?',
      a: 'Flowly AI is an intelligent operations workspace that combines tasks, docs, meetings, calendars, and automation into a unified platform. Powered by ambient artificial intelligence, it summarizes notes, auto-schedules events, and maintains your task backlog automatically.',
    },
    {
      q: 'Is there a free plan?',
      a: 'Yes, our Starter plan is completely free for individual users. It includes up to 3 active workspaces, basic AI assistant priorities, and 5 integrations.',
    },
    {
      q: 'Can I cancel my subscription anytime?',
      a: 'Absolutely. Subscriptions are billed on a monthly or annual cycle and can be cancelled at any time from your account settings. You will retain access until the current cycle expires.',
    },
    {
      q: 'Does Flowly integrate with other tools?',
      a: 'Yes. Flowly features native integrations with major platforms including Slack, Notion, Google Calendar, Jira, Figma, and GitHub, allowing you to sync data bidirectionally.',
    },
    {
      q: 'Is my data secure?',
      a: 'Security is our highest priority. All data transferred is encrypted using TLS 1.3 in transit and AES-256 at rest. We are SOC2 Type II compliant and never train our public AI models on your private workspace files.',
    },
  ];

  return (
    <section className="section-padding faq-section" id="resources">
      <div className="glow-blur faq-glow"></div>
      <div className="grid-bg"></div>

      <div className="container faq-container">
        
        {/* Section Header */}
        <div className="section-header reveal">
          <span className="section-badge">FAQ</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-desc">
            Find answers to commonly asked questions about Flowly AI plans, platform integrations, and security frameworks.
          </p>
        </div>

        {/* Accordion List */}
        <div className="faq-list">
          {faqData.map((faq, idx) => {
            const isActive = activeIdx === idx;
            
            return (
              <div
                key={idx}
                className={`faq-item ${isActive ? 'active' : ''} reveal`}
              >
                <button
                  className="faq-header"
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={isActive}
                >
                  <span className="faq-question">{faq.q}</span>
                  <div className="faq-icon-wrapper">
                    <Plus size={18} />
                  </div>
                </button>
                <div
                  className="faq-body"
                  style={{ maxHeight: isActive ? '200px' : '0px' }}
                >
                  <div className="faq-content">
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
