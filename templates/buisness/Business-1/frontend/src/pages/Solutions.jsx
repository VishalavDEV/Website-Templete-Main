import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, Lightbulb, TrendingUp, CheckCircle, ArrowRight, ShieldAlert, Sparkles, Database } from 'lucide-react';
import './Solutions.css';

export default function Solutions() {
  const [activeSolution, setActiveSolution] = useState(0);
  const [activeStage, setActiveStage] = useState('problem'); // problem | solution | result

  const cases = [
    {
      title: "Finance & Retail Banking Transformation",
      industry: "Financial Services",
      problem: {
        title: "Legacy Friction & Customer Attrition",
        desc: "Traditional banks lose market share due to 5-second database lags and complex, non-biometric authentication portals. High user friction directly results in customer churn to agile startups.",
        icon: <ShieldAlert size={48} />,
        accent: "#ff4a5a"
      },
      solution: {
        title: "Serverless Mobile Banking Portal",
        desc: "We engineer a microservices-based, secure React Native banking portal connected to auto-scaling API pipelines. Authentication is handled by secure biometrics and instant transaction protocols.",
        icon: <Sparkles size={48} />,
        accent: "#00f2fe"
      },
      result: {
        title: "Exponential Engagement & Transaction Speed",
        desc: "Client banking portals record an average of +140% mobile user retention, with database transactions executing in under 1.2 seconds, backed by certified SOC2 safety layers.",
        icon: <CheckCircle size={48} />,
        accent: "#00ffaa"
      }
    },
    {
      title: "Global Supply Chain Logistics Sync",
      industry: "Supply Chain & Logistics",
      problem: {
        title: "Lagging Inventory Databases & Shipping Bottlenecks",
        desc: "A fast-growing commerce brand suffered from inventory synchronization delays. Warehouse counts lagged sales pages, causing overselling, stockouts, and logistics bottlenecks during peak sales hours.",
        icon: <AlertCircle size={48} />,
        accent: "#ff4a5a"
      },
      solution: {
        title: "Event-Driven Automation Middleware",
        desc: "We construct custom API gateways that sync inventory levels across Shopify networks, local ERPs, and regional distribution centers in under 500 milliseconds.",
        icon: <Database size={48} />,
        accent: "#00f2fe"
      },
      result: {
        title: "Zero Overselling & Faster Shipping",
        desc: "Overselling is reduced to zero. Order processing times are slashed by 35% without adding additional warehousing staff or hardware resources.",
        icon: <TrendingUp size={48} />,
        accent: "#00ffaa"
      }
    },
    {
      title: "AI-Powered B2B Target Marketing",
      industry: "SaaS & Digital Commerce",
      problem: {
        title: "Inefficient Lead Pipelines & High Churn Rates",
        desc: "Struggling SaaS brands wasted massive advertising budgets on cold leads. Churn risk went undetected until users cancelled subscriptions, lowering total company lifetime value.",
        icon: <ShieldAlert size={48} />,
        accent: "#ff4a5a"
      },
      solution: {
        title: "Predictive Analytics Machine Learning Pipeline",
        desc: "We build statistical classification models connected to Snowflake databases. Ad spending automatically re-allocates toward high-scoring target prospects, while churn risk triggers discount emails.",
        icon: <Lightbulb size={48} />,
        accent: "#00f2fe"
      },
      result: {
        title: "+45% Lead Conversions & Reduced Churn",
        desc: "Campaign conversion rates rise by 45%. Churn rates drop by an average of 22% within 60 days, significantly increasing SaaS valuation.",
        icon: <CheckCircle size={48} />,
        accent: "#00ffaa"
      }
    }
  ];

  const currentCase = cases[activeSolution];
  const currentStageInfo = currentCase[activeStage];

  const getStageColor = (stage) => {
    if (stage === 'problem') return 'var(--color-pink)';
    if (stage === 'solution') return 'var(--color-blue)';
    return 'var(--color-blue-dark)';
  };

  return (
    <div className="solutions-page">
      {/* Background orbs */}
      <div className="glow-bg">
        <div className="glow-orb orb-1"></div>
        <div className="glow-orb orb-2"></div>
      </div>

      {/* Header */}
      <section className="solutions-header section-padding">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-subtitle">CASE METRICS</span>
            <h1 className="large-headline">Problem Solving <br /><span className="text-gradient">Transformations</span></h1>
            <p className="lead-paragraph">
              See how we analyze business constraints, execute custom technical code, and deliver positive operational results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Interactive Flow Section */}
      <section className="solutions-flow-section section-padding">
        <div className="container">
          <div className="solutions-grid-layout">
            
            {/* Case Selection Panel */}
            <div className="solutions-selector-panel">
              <h3>Select Industry Scenario</h3>
              <div className="selector-list">
                {cases.map((c, idx) => (
                  <button
                    key={idx}
                    className={`selector-btn glass-card ${activeSolution === idx ? 'active' : ''}`}
                    onClick={() => {
                      setActiveSolution(idx);
                      setActiveStage('problem');
                    }}
                  >
                    <span>{c.industry}</span>
                    <h4>{c.title}</h4>
                  </button>
                ))}
              </div>
            </div>

            {/* Stages Flow Panel */}
            <div className="solutions-stage-panel glass-card">
              <div className="stage-controls">
                {['problem', 'solution', 'result'].map((stage) => (
                  <button
                    key={stage}
                    className={`stage-btn ${activeStage === stage ? 'active' : ''}`}
                    onClick={() => setActiveStage(stage)}
                    style={{
                      '--active-color': activeStage === stage ? getStageColor(stage) : 'transparent'
                    }}
                  >
                    {stage === 'problem' && <AlertCircle size={18} />}
                    {stage === 'solution' && <Lightbulb size={18} />}
                    {stage === 'result' && <TrendingUp size={18} />}
                    <span>{stage.toUpperCase()}</span>
                  </button>
                ))}
              </div>

              {/* Connected Roadmap Line */}
              <div className="stages-flow-line">
                <div
                  className="stages-progress"
                  style={{
                    width: activeStage === 'problem' ? '10%' : activeStage === 'solution' ? '50%' : '90%',
                    background: getStageColor(activeStage)
                  }}
                ></div>
              </div>

              {/* Animated Display Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeSolution}-${activeStage}`}
                  className="stage-display-box"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className="stage-display-icon-wrapper"
                    style={{
                      background: `rgba(${activeStage === 'problem' ? '255,74,90' : activeStage === 'solution' ? '0,242,254' : '0,255,170'}, 0.05)`,
                      border: `1px solid ${currentStageInfo.accent}`,
                      color: currentStageInfo.accent,
                      boxShadow: `0 0 20px rgba(${activeStage === 'problem' ? '255,74,90' : activeStage === 'solution' ? '0,242,254' : '0,255,170'}, 0.15)`
                    }}
                  >
                    {currentStageInfo.icon}
                  </div>

                  <div className="stage-display-text">
                    <span className="stage-badge" style={{ borderColor: currentStageInfo.accent, color: currentStageInfo.accent }}>
                      Stage: {activeStage.toUpperCase()}
                    </span>
                    <h2>{currentStageInfo.title}</h2>
                    <p>{currentStageInfo.desc}</p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Action Buttons to step through problem -> solution -> result */}
              <div className="stage-action-row">
                {activeStage === 'problem' && (
                  <button className="btn btn-secondary stage-action-btn" onClick={() => setActiveStage('solution')}>
                    Review Solution Architecture <ArrowRight size={16} />
                  </button>
                )}
                {activeStage === 'solution' && (
                  <button className="btn btn-secondary stage-action-btn" onClick={() => setActiveStage('result')}>
                    Verify Case Results <ArrowRight size={16} />
                  </button>
                )}
                {activeStage === 'result' && (
                  <button className="btn btn-primary stage-action-btn" onClick={() => {
                    const next = (activeSolution + 1) % cases.length;
                    setActiveSolution(next);
                    setActiveStage('problem');
                  }}>
                    Review Next Scenario <ArrowRight size={16} />
                  </button>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
