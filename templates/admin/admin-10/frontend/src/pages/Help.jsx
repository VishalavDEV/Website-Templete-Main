import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  HelpCircle,
  Mail,
  Phone,
  MessageSquare,
  ChevronDown,
  ChevronUp,
  FileText,
  LifeBuoy
} from 'lucide-react';

const faqData = [
  {
    category: 'general',
    question: 'How do I add a new platform administrator/operator?',
    answer: 'Navigate to the "Users" operator management page in the left sidebar navigation, click the "Add New Operator" button, fill in the name, email address, role (e.g. Admin, Editor, Moderator), and status, and click submit. The record will register instantly.'
  },
  {
    category: 'inventory',
    question: 'How does the product stock level threshold warning activate?',
    answer: 'The stock status is calculated automatically based on remaining items. If an item stock level is equal to 0, it switches status to "Out of Stock". If stock falls below 10 items, it automatically switches status to "Low Stock" and triggers a system warning notification alert.'
  },
  {
    category: 'orders',
    question: 'How can I progress an order lifecycle step from Pending to Delivered?',
    answer: 'Navigate to the "Orders" page, select the specific transaction row in the left table list, and use the "Lifecycle Operations" action buttons in the right details drawer pane. You can progress status sequentially: Pending → Approve & Process → Dispatch / Ship → Confirm Delivery.'
  },
  {
    category: 'reports',
    question: 'Can I export analytical metrics to spreadsheets/reports?',
    answer: 'Yes, go to the "Reports" panel in the sidebar, choose the report category (Sales, Users, Fulfillment, or profit statements), and click the "Download CSV" button in the upper right corner. The backend server will automatically construct and download the raw data log as a CSV spreadsheet file.'
  },
  {
    category: 'appearance',
    question: 'How do I toggle "Compact Mode" layout parameters?',
    answer: 'Go to the "Settings" page and look for the "Portal Appearance" section. Toggle the checkbox for "Compact Layout Mode" and save changes. The system will shrink paddings, margins, and row spacing to show maximum data density.'
  }
];

export default function Help() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Expanded FAQ items state map
  const [expandedFaq, setExpandedFaq] = useState({});

  const toggleFaq = (idx) => {
    setExpandedFaq(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const filteredFaqs = faqData.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(search.toLowerCase()) ||
                          faq.answer.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      style={{ display: 'flex', flexDirection: 'column', gap: '25px', maxWidth: '800px', margin: '0 auto' }}
    >
      {/* Page Header */}
      <div>
        <h1 style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--text-main)' }}>Support & Help Desk</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Find answers to common platform tasks, configuration guides, and contact channels.</p>
      </div>

      {/* Search FAQ */}
      <div style={{
        backgroundColor: 'var(--bg-card)',
        border: '1.5px solid var(--border-color)',
        borderRadius: 'var(--border-radius-md)',
        padding: '16px',
        boxShadow: 'var(--shadow-sm)',
        display: 'flex',
        alignItems: 'center',
        gap: '12px'
      }}>
        <div style={{ position: 'relative', width: '100%' }}>
          <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          <input
            type="text"
            placeholder="Search help questions, guidelines..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ paddingLeft: '38px', height: '42px' }}
            className="form-input"
          />
        </div>
      </div>

      {/* Split layout: Category tabs and expanding list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {/* Category Toggles */}
        <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '5px' }}>
          {[
            { key: 'all', label: 'All Questions' },
            { key: 'general', label: 'Operators' },
            { key: 'inventory', label: 'Inventory' },
            { key: 'orders', label: 'Orders' },
            { key: 'reports', label: 'Reports' },
          ].map(cat => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              style={{
                padding: '8px 16px',
                borderRadius: 'var(--border-radius-sm)',
                border: '1px solid var(--border-color)',
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: '0.82rem',
                backgroundColor: activeCategory === cat.key ? 'var(--primary)' : 'var(--bg-card)',
                color: 'var(--text-main)',
                transition: 'background-color 0.2s',
                whiteSpace: 'nowrap'
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Expandable cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {filteredFaqs.length === 0 ? (
            <div style={{
              backgroundColor: 'var(--bg-card)',
              border: '1.5px solid var(--border-color)',
              borderRadius: 'var(--border-radius-md)',
              padding: '30px',
              textAlign: 'center',
              color: 'var(--text-muted)'
            }}>
              No answers matching search phrase.
            </div>
          ) : (
            filteredFaqs.map((faq, idx) => {
              const isExpanded = expandedFaq[idx];
              return (
                <motion.div
                  key={idx}
                  layout
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    border: '1.5px solid var(--border-color)',
                    borderRadius: 'var(--border-radius-md)',
                    overflow: 'hidden',
                    boxShadow: 'var(--shadow-sm)',
                    cursor: 'pointer'
                  }}
                  onClick={() => toggleFaq(idx)}
                >
                  {/* Collapsed Header */}
                  <div style={{
                    padding: '16px 20px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: isExpanded ? 'var(--bg-primary)' : 'transparent',
                    transition: 'background-color 0.2s'
                  }}>
                    <h4 style={{
                      fontSize: '0.925rem',
                      fontWeight: 700,
                      color: 'var(--text-main)',
                      paddingRight: '15px'
                    }}>
                      {faq.question}
                    </h4>
                    <div>
                      {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </div>
                  </div>

                  {/* Expanded Content Panel */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <div style={{
                          padding: '20px',
                          borderTop: '1px solid var(--border-color)',
                          fontSize: '0.88rem',
                          color: 'var(--text-muted)',
                          lineHeight: 1.5,
                          backgroundColor: '#FFFFFF'
                        }}>
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })
          )}
        </div>
      </div>

      {/* Support contact info footer card */}
      <div style={{
        backgroundColor: 'var(--bg-card)',
        border: '1.5px solid var(--border-color)',
        borderRadius: 'var(--border-radius-lg)',
        padding: '24px',
        boxShadow: 'var(--shadow-sm)',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        marginTop: '20px'
      }}>
        <div>
          <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <LifeBuoy size={18} style={{ color: 'var(--accent)' }} /> Contact Help Desk Operators
          </h3>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '4px' }}>If you need immediate technical server assistance</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '15px'
        }}>
          {/* Email Support */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', border: '1px solid var(--border-color)', borderRadius: 'var(--border-radius-sm)', backgroundColor: 'var(--bg-primary)' }}>
            <Mail size={18} style={{ color: 'var(--accent)' }} />
            <div>
              <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', display: 'block', fontWeight: 600 }}>EMAIL SERVICES</span>
              <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-main)' }}>support@amelia.com</span>
            </div>
          </div>

          {/* Hotline */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', border: '1px solid var(--border-color)', borderRadius: 'var(--border-radius-sm)', backgroundColor: 'var(--bg-primary)' }}>
            <Phone size={18} style={{ color: 'var(--accent)' }} />
            <div>
              <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', display: 'block', fontWeight: 600 }}>HOTLINE LINE</span>
              <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-main)' }}>+1 (800) 555-AMELIA</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
