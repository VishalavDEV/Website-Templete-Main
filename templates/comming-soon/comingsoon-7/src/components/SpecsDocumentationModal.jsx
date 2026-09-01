import React, { useState } from 'react';
import { 
  FileText, Layout, Palette, Video, Cpu, 
  Layers, Clock, CheckCircle2, ChevronRight, X 
} from 'lucide-react';

export const SpecsDocumentationModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('wireframe');

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="specs-modal-container glass-panel" onClick={(e) => e.stopPropagation()}>
        
        {/* Modal Header */}
        <div className="specs-modal-header">
          <div className="specs-modal-title-wrap">
            <FileText size={22} className="modal-icon-glow" />
            <div>
              <h2 className="specs-modal-h2">AEROSTRIDE X-PRO • UI/UX DESIGN SYSTEM & ARCHITECTURE</h2>
              <span className="specs-modal-sub font-mono">Comprehensive Specification Deliverables • Version 1.0</span>
            </div>
          </div>
          <button className="modal-close-btn" onClick={onClose}>✕</button>
        </div>

        {/* Tab Navigation */}
        <div className="specs-doc-tabs">
          <button 
            className={`doc-tab-btn ${activeTab === 'wireframe' ? 'active' : ''}`}
            onClick={() => setActiveTab('wireframe')}
          >
            <Layout size={15} />
            <span>1. Wireframe & Section Hierarchy</span>
          </button>

          <button 
            className={`doc-tab-btn ${activeTab === 'tokens' ? 'active' : ''}`}
            onClick={() => setActiveTab('tokens')}
          >
            <Palette size={15} />
            <span>2. Color Palette & Typography</span>
          </button>

          <button 
            className={`doc-tab-btn ${activeTab === 'countdown' ? 'active' : ''}`}
            onClick={() => setActiveTab('countdown')}
          >
            <Clock size={15} />
            <span>3. Countdown & Image-Pairing</span>
          </button>

          <button 
            className={`doc-tab-btn ${activeTab === 'video-specs' ? 'active' : ''}`}
            onClick={() => setActiveTab('video-specs')}
          >
            <Video size={15} />
            <span>4. Video Model & Autoplay Rules</span>
          </button>

          <button 
            className={`doc-tab-btn ${activeTab === 'states' ? 'active' : ''}`}
            onClick={() => setActiveTab('states')}
          >
            <Cpu size={15} />
            <span>5. Interaction & Sync States</span>
          </button>

          <button 
            className={`doc-tab-btn ${activeTab === 'mapping' ? 'active' : ''}`}
            onClick={() => setActiveTab('mapping')}
          >
            <Layers size={15} />
            <span>6. Timestamp Content Mapping</span>
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="specs-modal-body">
          
          {/* TAB 1: Wireframe & Section Hierarchy */}
          {activeTab === 'wireframe' && (
            <div className="doc-section">
              <h3 className="doc-title">Section Hierarchy & Layout Blueprint</h3>
              <div className="doc-callout">
                The visual layout uses an asymmetric split-screen architecture on desktop (1280px+) with an OLED deep-dark background and collapses gracefully into a stacked single-column flow on tablet & mobile.
              </div>

              <div className="wireframe-diagram-box glass-card">
                <div className="wf-row wf-header">
                  <span>[01] Sticky Global Header</span>: Drop Announcement Bar + Logo + Nav Links + Spec Modal + Wishlist Counter + Cart Badge
                </div>
                <div className="wf-row wf-hero">
                  <span>[02] Hero Launch Stage</span>: Headline ("Engineered to Outrun Gravity") + 3 Key Metrics + Live Drop Countdown + Launch Colorway Preview
                </div>
                <div className="wf-row wf-split">
                  <div className="wf-col-6">
                    <span>[03A] Product Showcase</span>: 4-Angle Switcher + 2.5x Loupe Magnifier + Colorway Engine (Cyber Volt / Obsidian / Crimson)
                  </div>
                  <div className="wf-col-6">
                    <span>[03B] Purchase Engine</span>: Dynamic Pricing + Size Selector (US/UK/EU/CM) + Size Validation + 1-Click Buy + Perks
                  </div>
                </div>
                <div className="wf-row wf-video-zone">
                  <span>[04] Video-Content Pairing Zone (Dedicated Motion Lab)</span>:
                  <br />• <strong>Left 60%:</strong> 16:9 Running Back Perspective Player + 60fps Kinetic Vector Particle Canvas + Scrubber + Hotspots
                  <br />• <strong>Right 40%:</strong> Front-Facing Synchronized Telemetry Display Panel (Nitro Cell, Carbon Plate, Toe Spring, AeroKnit)
                </div>
                <div className="wf-row wf-specs">
                  <span>[05] Engineering Blueprint Grid</span>: 8 Technical Spec Cards + Midsole Cross-Section + Circular Eco Metrics
                </div>
                <div className="wf-row wf-reviews">
                  <span>[06] Verified Athlete Reports</span>: Scorecard Distribution (4.94/5) + Fit/Cushion Gauges + Review Submission Form
                </div>
                <div className="wf-row wf-footer">
                  <span>[07] Companion Kit & Footer</span>: Related Apparel + Newsletter + Warranty Guarantee + Sustainability Badges
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Color Palette & Typography */}
          {activeTab === 'tokens' && (
            <div className="doc-section">
              <h3 className="doc-title">Design Tokens: Color Palette & Typography</h3>
              
              <div className="token-swatches-grid">
                <div className="token-swatch-card" style={{ borderLeft: '4px solid #CCFF00' }}>
                  <div className="swatch-color-pill" style={{ background: '#CCFF00' }}></div>
                  <div className="swatch-info">
                    <strong>Cyber Volt (#CCFF00)</strong>
                    <span>Primary Accent: High-visibility twilight speed accent</span>
                  </div>
                </div>

                <div className="token-swatch-card" style={{ borderLeft: '4px solid #00F0FF' }}>
                  <div className="swatch-color-pill" style={{ background: '#00F0FF' }}></div>
                  <div className="swatch-info">
                    <strong>Pulse Cyan (#00F0FF)</strong>
                    <span>Secondary Accent: Nocturnal photoluminescent highlights</span>
                  </div>
                </div>

                <div className="token-swatch-card" style={{ borderLeft: '4px solid #FF3E1D' }}>
                  <div className="swatch-color-pill" style={{ background: '#FF3E1D' }}></div>
                  <div className="swatch-info">
                    <strong>Hyper Crimson (#FF3E1D)</strong>
                    <span>Tertiary Accent: Thermal reactive energy indicator</span>
                  </div>
                </div>

                <div className="token-swatch-card" style={{ borderLeft: '4px solid #07090E' }}>
                  <div className="swatch-color-pill" style={{ background: '#07090E' }}></div>
                  <div className="swatch-info">
                    <strong>Obsidian Black (#07090E)</strong>
                    <span>Background Base: Ultra-deep contrast OLED black</span>
                  </div>
                </div>
              </div>

              <h4 className="doc-sub-h4">Typography Hierarchy</h4>
              <div className="typography-spec-table glass-card">
                <div className="type-row">
                  <span className="type-role">Display / Hero Headings:</span>
                  <span className="type-val font-display">Outfit (800 / 900 Black)</span>
                </div>
                <div className="type-row">
                  <span className="type-role">Body Copy & UI Labels:</span>
                  <span className="type-val">Inter (400 Regular / 500 Medium / 600 SemiBold)</span>
                </div>
                <div className="type-row">
                  <span className="type-role">Telemetry & Timestamps:</span>
                  <span className="type-val font-mono">JetBrains Mono (500 / 700 Bold)</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Countdown & Image-Pairing Specs */}
          {activeTab === 'countdown' && (
            <div className="doc-section">
              <h3 className="doc-title">Countdown Timer & Image Pairing Specifications</h3>
              
              <div className="doc-specs-grid">
                <div className="doc-spec-box glass-card">
                  <h4>⚡ Live Countdown Timer Engine</h4>
                  <ul>
                    <li><strong>Refresh Frequency:</strong> 1,000ms interval with requestAnimationFrame sync</li>
                    <li><strong>Animation:</strong> 200ms cubic-bezier flash pulse on second decrement</li>
                    <li><strong>Stock Bar:</strong> Real-time batch allocation percentage with animated shimmer gradient</li>
                    <li><strong>Expiration Behavior:</strong> Transitions to "Batch 01 Sold Out - Join Waitlist" state</li>
                  </ul>
                </div>

                <div className="doc-spec-box glass-card">
                  <h4>🔍 2.5x Loupe Magnifier Engine</h4>
                  <ul>
                    <li><strong>Coordinate Mapping:</strong> Bounding client rect calculation with 0–100% clamping</li>
                    <li><strong>Lens Radius:</strong> 140px circular mask with radial crosshair and 280% zoom scale</li>
                    <li><strong>Colorway Sync:</strong> Instantly hot-swaps high-res assets when color variant is clicked</li>
                    <li><strong>Angle Cache:</strong> Preloads Lateral, In-Motion, Outsole, and Medial views</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: Video Model & Autoplay Rules */}
          {activeTab === 'video-specs' && (
            <div className="doc-section">
              <h3 className="doc-title">Video Model Specifications & Compression Guidelines</h3>
              
              <div className="doc-table-container glass-card">
                <table className="doc-table">
                  <thead>
                    <tr>
                      <th>Device Target</th>
                      <th>Aspect Ratio</th>
                      <th>Resolution / Bitrate</th>
                      <th>Autoplay Behavior</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Desktop (Widescreen)</strong></td>
                      <td>16:9 / 720p / 1080p</td>
                      <td>H.265 / AV1 @ 3.5 Mbps (60fps)</td>
                      <td>Autoplays muted on scroll-into-view (IntersectionObserver 50% threshold)</td>
                    </tr>
                    <tr>
                      <td><strong>Tablet</strong></td>
                      <td>16:9 / 720p</td>
                      <td>H.264 @ 2.2 Mbps (60fps)</td>
                      <td>Autoplays muted inline with low power mode fallback</td>
                    </tr>
                    <tr>
                      <td><strong>Mobile</strong></td>
                      <td>4:3 or 16:9 Adaptive</td>
                      <td>H.264 @ 1.4 Mbps (30/60fps)</td>
                      <td>Tap to play or scroll-triggered inline muted preview</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 5: Interaction & Sync States */}
          {activeTab === 'states' && (
            <div className="doc-section">
              <h3 className="doc-title">Interactive State Matrix</h3>

              <div className="states-grid">
                <div className="state-item-card glass-card">
                  <span className="state-badge">PLAYING</span>
                  <p>Running back video plays smoothly, kinetic canvas streams particle trails at runner heel strike, telemetry HUD updates pace.</p>
                </div>

                <div className="state-item-card glass-card">
                  <span className="state-badge">PAUSED</span>
                  <p>Particles drift to a gentle deceleration, pause icon flips to play, front display panel remains locked on active phase.</p>
                </div>

                <div className="state-item-card glass-card">
                  <span className="state-badge">BUFFERING / LOADING</span>
                  <p>Displays animated skeleton pulse with branded neon spinner and lightweight poster thumbnail fallback.</p>
                </div>

                <div className="state-item-card glass-card">
                  <span className="state-badge">CONTENT-SYNC-ACTIVE</span>
                  <p>As video crosses timestamp threshold, front display panel triggers a 300ms crossfade transition to the corresponding technical callout.</p>
                </div>

                <div className="state-item-card glass-card">
                  <span className="state-badge">SIZE VALIDATION ERROR</span>
                  <p>If user clicks "Add to Cart" without selecting a size, size box pulses with red glow and displays warning alert banner.</p>
                </div>

                <div className="state-item-card glass-card">
                  <span className="state-badge">ADD TO CART SUCCESS</span>
                  <p>Triggers dual celebration: button flips to green checkmark and canvas-confetti shoots across the screen.</p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 6: Timestamp Content Mapping */}
          {activeTab === 'mapping' && (
            <div className="doc-section">
              <h3 className="doc-title">Front Display Synchronized Content Mapping Table</h3>
              
              <div className="doc-table-container glass-card">
                <table className="doc-table">
                  <thead>
                    <tr>
                      <th>Timestamp</th>
                      <th>Biomechanical Phase</th>
                      <th>Video Perspective</th>
                      <th>Front Panel Technical Callout</th>
                      <th>Telemetry Metric</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-mono">00:00 - 03:49</td>
                      <td>Phase 1: Initial Strike & Shock Absorption</td>
                      <td>Rear 3/4 Running Back View</td>
                      <td><strong>NITRO-INFUSED HEEL CELL:</strong> 39.5mm supercritical foam absorbs 94% ground force</td>
                      <td className="font-mono" style={{ color: '#CCFF00' }}>-42% Joint Impact</td>
                    </tr>
                    <tr>
                      <td className="font-mono">03:50 - 06:99</td>
                      <td>Phase 2: Mid-Stance Stabilization</td>
                      <td>Lateral 3/4 High Speed Cam</td>
                      <td><strong>CARBON FLIGHTPLATE™ 3.0:</strong> Variable-stiffness 3D spoon geometry locks ankle axis</td>
                      <td className="font-mono" style={{ color: '#CCFF00' }}>3.2x Torsional Rigidity</td>
                    </tr>
                    <tr>
                      <td className="font-mono">07:00 - 10:49</td>
                      <td>Phase 3: Explosive Toe-Off Propulsion</td>
                      <td>Plantar Force Vector Cam</td>
                      <td><strong>KINETIC ENERGY LAUNCH:</strong> 12° toe-spring snaps forward at peak extension</td>
                      <td className="font-mono" style={{ color: '#CCFF00' }}>+8.6% Propulsion Boost</td>
                    </tr>
                    <tr>
                      <td className="font-mono">10:50 - 14:00</td>
                      <td>Phase 4: In-Flight Recovery & Airflow</td>
                      <td>Overhead Zero-Drag Streamline</td>
                      <td><strong>AEROKNIT™ 360 AIRFLOW:</strong> Micro-perforated monofilament wicks heat in 1.2s</td>
                      <td className="font-mono" style={{ color: '#CCFF00' }}>185g Featherweight</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="specs-modal-footer">
          <button className="btn-primary" onClick={onClose}>
            <span>Back to Live Product Experience</span>
          </button>
        </div>

      </div>
    </div>
  );
};
