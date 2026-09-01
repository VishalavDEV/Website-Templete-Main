import React, { useState } from 'react';
import { 
  Wind, Zap, Shield, Activity, Layers, Feather, 
  Cpu, Leaf, ChevronDown, CheckCircle2, ArrowUpRight 
} from 'lucide-react';

export const SpecsBreakdown = ({ product, activeColorway }) => {
  const [activeTab, setActiveTab] = useState('specs'); // 'specs' | 'anatomy' | 'sustainability'

  const getSpecIcon = (iconName) => {
    switch (iconName) {
      case 'Wind': return <Wind size={20} />;
      case 'Zap': return <Zap size={20} />;
      case 'Shield': return <Shield size={20} />;
      case 'Activity': return <Activity size={20} />;
      case 'Layers': return <Layers size={20} />;
      case 'Feather': return <Feather size={20} />;
      case 'Cpu': return <Cpu size={20} />;
      case 'Leaf': return <Leaf size={20} />;
      default: return <Zap size={20} />;
    }
  };

  return (
    <section id="technology" className="specs-breakdown-section">
      <div className="specs-container">
        
        {/* Section Header */}
        <div className="specs-section-header">
          <span className="badge-tag">
            <Layers size={14} /> PRECISION RACING ARCHITECTURE
          </span>
          <h2 className="specs-section-title">
            TECHNICAL SPECIFICATIONS & BIOMECHANICS
          </h2>
          <p className="specs-section-subtitle">
            Every millimeter computed for minimal drag, maximum rebound, and relentless structural integrity.
          </p>

          {/* Navigation Tabs */}
          <div className="specs-tabs-row glass-card">
            <button 
              className={`spec-tab-btn ${activeTab === 'specs' ? 'active' : ''}`}
              onClick={() => setActiveTab('specs')}
            >
              Lab Specifications Grid
            </button>
            <button 
              className={`spec-tab-btn ${activeTab === 'anatomy' ? 'active' : ''}`}
              onClick={() => setActiveTab('anatomy')}
            >
              Midsole & Carbon Anatomy
            </button>
            <button 
              className={`spec-tab-btn ${activeTab === 'sustainability' ? 'active' : ''}`}
              onClick={() => setActiveTab('sustainability')}
            >
              Circular Eco Materials
            </button>
          </div>
        </div>

        {/* Tab 1: Full Specifications Grid */}
        {activeTab === 'specs' && (
          <div className="specs-grid-layout">
            {product.specifications.map((spec, idx) => (
              <div key={idx} className="spec-card glass-card">
                <div className="spec-icon-box" style={{ color: activeColorway.primaryHex }}>
                  {getSpecIcon(spec.icon)}
                </div>
                <div className="spec-card-content">
                  <span className="spec-label-title">{spec.label}</span>
                  <span className="spec-value-text">{spec.value}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Midsole & Carbon Anatomy */}
        {activeTab === 'anatomy' && (
          <div className="anatomy-breakdown-grid">
            <div className="anatomy-text-col">
              <div className="anatomy-item glass-card">
                <div className="anatomy-num font-mono">01</div>
                <div>
                  <h4 className="anatomy-title">AeroKnit™ Single-Layer Monofilament</h4>
                  <p className="anatomy-desc">
                    Woven on 4-axis robotic looms with targeted tensile zones. Hydrophobic yarn eliminates water absorption in downpours.
                  </p>
                </div>
              </div>

              <div className="anatomy-item glass-card">
                <div className="anatomy-num font-mono">02</div>
                <div>
                  <h4 className="anatomy-title">Supercritical NitroFoam™ Dual Compound</h4>
                  <p className="anatomy-desc">
                    Nitrogen gas is infused at 300 bar into an elastomeric polymer, creating microscopic closed-cell structures with zero pack-down.
                  </p>
                </div>
              </div>

              <div className="anatomy-item glass-card">
                <div className="anatomy-num font-mono">03</div>
                <div>
                  <h4 className="anatomy-title">3D Carbon FlightPlate™ 3.0</h4>
                  <p className="anatomy-desc">
                    Spoon-curved carbon geometry acts as a mechanical lever, speeding up the gait cycle transition from heel strike to toe spring.
                  </p>
                </div>
              </div>
            </div>

            <div className="anatomy-visual-col glass-panel">
              <div className="anatomy-visual-header">
                <span className="font-mono">CROSS-SECTION ANATOMY EXPLODER</span>
                <span className="badge-pill-outline">39.5mm Legal Stack</span>
              </div>
              <img 
                src="/assets/images/shoe-outsole.jpg" 
                alt="Shoe Outsole and Midsole Architecture"
                className="anatomy-img"
              />
              <div className="anatomy-callout-footer">
                <span className="font-mono">EXPOSED CARBON WEAVE • LIQUIDTACK™ COMPOUND</span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Sustainability */}
        {activeTab === 'sustainability' && (
          <div className="sustainability-panel glass-card">
            <div className="sustain-metric-row">
              <div className="sustain-box">
                <div className="sustain-val font-mono" style={{ color: activeColorway.primaryHex }}>48%</div>
                <div className="sustain-lbl">Recycled & Bio-Polymers</div>
              </div>
              <div className="sustain-box">
                <div className="sustain-val font-mono" style={{ color: activeColorway.primaryHex }}>-34%</div>
                <div className="sustain-lbl">Carbon Footprint vs Batch 00</div>
              </div>
              <div className="sustain-box">
                <div className="sustain-val font-mono" style={{ color: activeColorway.primaryHex }}>100%</div>
                <div className="sustain-lbl">Zero-Waste Recycled Packaging</div>
              </div>
            </div>
            <p className="sustain-narrative">
              Every pair of AEROSTRIDE X-PRO utilizes recycled ocean-bound yarns in the collar and bio-fermented castor bean oil in the nitrogen foam matrix.
            </p>
          </div>
        )}

      </div>
    </section>
  );
};
