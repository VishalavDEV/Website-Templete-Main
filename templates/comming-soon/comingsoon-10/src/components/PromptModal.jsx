import React, { useState } from 'react';
import { X, Copy, Check, Sparkles, Image, Type, Smartphone, Terminal, FileCode2 } from 'lucide-react';
import { specsData } from '../data/specsData';

export default function PromptModal({ onClose }) {
  const [activeTab, setActiveTab] = useState('prompt');
  const [copied, setCopied] = useState(false);

  const handleCopyPrompt = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(specsData.masterAIPrompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-dialog prompt-modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="flex-center gap-2">
            <Sparkles className="text-cyan" size={20} />
            <h3 className="modal-title">Design Specs & Master AI Prompt Studio</h3>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={18} />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="prompt-tabs-bar">
          <button
            className={`tab-item-btn ${activeTab === 'prompt' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('prompt')}
          >
            <Terminal size={15} />
            <span>Master AI Prompt</span>
          </button>
          <button
            className={`tab-item-btn ${activeTab === 'images' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('images')}
          >
            <Image size={15} />
            <span>Image Dimension Specs</span>
          </button>
          <button
            className={`tab-item-btn ${activeTab === 'typography' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('typography')}
          >
            <Type size={15} />
            <span>Typography System</span>
          </button>
          <button
            className={`tab-item-btn ${activeTab === 'responsive' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('responsive')}
          >
            <Smartphone size={15} />
            <span>Responsive Breakpoints</span>
          </button>
        </div>

        <div className="modal-body prompt-modal-body">
          {activeTab === 'prompt' && (
            <div className="prompt-tab-pane">
              <div className="prompt-actions-strip">
                <div className="prompt-intro-note">
                  <strong>Synthesized AI Prompt:</strong> Copy and use this unified prompt with Midjourney, DALL-E, or coding AI assistants to produce cohesive design variations.
                </div>
                <button className="copy-master-btn" onClick={handleCopyPrompt}>
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                  <span>{copied ? 'Copied to Clipboard!' : 'Copy Master Prompt'}</span>
                </button>
              </div>
              <pre className="prompt-code-block">
                <code>{specsData.masterAIPrompt}</code>
              </pre>
            </div>
          )}

          {activeTab === 'images' && (
            <div className="specs-tab-pane">
              <div className="specs-table-wrapper">
                <table className="specs-table">
                  <thead>
                    <tr>
                      <th>Image Asset Category</th>
                      <th>Dimensions & Ratio</th>
                      <th>Format & Max Size</th>
                      <th>Placement & Overlay</th>
                      <th>Alt Text Strategy</th>
                    </tr>
                  </thead>
                  <tbody>
                    {specsData.imageGuidelines.map((item, i) => (
                      <tr key={i}>
                        <td className="font-semibold text-white">{item.category}</td>
                        <td>
                          <span className="spec-badge-cyan">{item.dimensions}</span>
                          <span className="spec-sub">{item.aspectRatio}</span>
                        </td>
                        <td>
                          <div>{item.format}</div>
                          <span className="spec-size-badge">{item.maxFileSize}</span>
                        </td>
                        <td className="text-muted-sm">{item.placement}</td>
                        <td className="text-muted-sm italic">{item.altStrategy}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'typography' && (
            <div className="specs-tab-pane">
              <div className="typography-cards-grid">
                {specsData.typographyPairings.map((pair, idx) => (
                  <div key={idx} className="spec-card">
                    <h4 className="spec-card-title">{pair.variation}</h4>
                    <div className="spec-pair-row">
                      <span className="spec-row-label">Headline / Display:</span>
                      <span className="spec-row-val">{pair.displayFont}</span>
                    </div>
                    <div className="spec-pair-row">
                      <span className="spec-row-label">Body Text Family:</span>
                      <span className="spec-row-val">{pair.bodyFont}</span>
                    </div>
                    <div className="spec-pair-row">
                      <span className="spec-row-label">Countdown Monospace:</span>
                      <span className="spec-row-val">{pair.monospaceFont}</span>
                    </div>
                    <p className="spec-char-text">{pair.characteristics}</p>
                    <code className="spec-css-snippet">{pair.cssConfig}</code>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'responsive' && (
            <div className="specs-tab-pane">
              <div className="responsive-rules-grid">
                {specsData.responsiveBreakpoints.map((bp, idx) => (
                  <div key={idx} className="spec-card">
                    <div className="bp-header">
                      <span className="bp-device-badge">{bp.device}</span>
                      <span className="bp-range">{bp.range}</span>
                    </div>
                    <div className="bp-section">
                      <h5>Layout Hierarchy Strategy</h5>
                      <p>{bp.layoutStrategy}</p>
                    </div>
                    <div className="bp-section">
                      <h5>Image Sizing & Performance Rules</h5>
                      <p>{bp.imageBehavior}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
