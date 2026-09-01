import React, { useState, Suspense, Component } from 'react';

// Error Boundary for template preview isolation
class TemplateErrorBoundary extends Component<
  { children: React.ReactNode; resetKey: string },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: { children: React.ReactNode; resetKey: string }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidUpdate(prevProps: { resetKey: string }) {
    if (prevProps.resetKey !== this.props.resetKey && this.state.hasError) {
      this.setState({ hasError: false, error: null });
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            padding: '24px',
            backgroundColor: '#090d16',
            color: '#f8fafc',
            fontFamily: 'system-ui, sans-serif',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              padding: '32px',
              maxWidth: '520px',
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '16px',
              border: '1px solid rgba(239, 68, 68, 0.3)',
            }}
          >
            <h2 style={{ color: '#ef4444', marginBottom: '12px', fontSize: '20px' }}>
              Template Render Notice
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '14px', marginBottom: '16px', lineHeight: 1.6 }}>
              {this.state.error?.message || 'An issue occurred while rendering this template.'}
            </p>
            <button
              onClick={() => this.setState({ hasError: false, error: null })}
              style={{
                padding: '8px 18px',
                background: '#6366f1',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 600,
              }}
            >
              Retry Render
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

// Lazy load template pages for style and script isolation
const ComingSoonHTM350 = React.lazy(() => import('./pages/coming-soon/ComingSoonHTM350'));
const ComingSoonAura9 = React.lazy(() => import('./pages/coming-soon/ComingSoonAura9'));
const ComingSoonAurelia = React.lazy(() => import('./pages/coming-soon/ComingSoonAurelia'));
const ComingSoonAuraSky = React.lazy(() => import('./pages/coming-soon/ComingSoonAuraSky'));
const ComingSoonBotanical = React.lazy(() => import('./pages/coming-soon/ComingSoonBotanical'));
const ComingSoonNovaX1 = React.lazy(() => import('./pages/coming-soon/ComingSoonNovaX1'));
const ComingSoonOrange16 = React.lazy(() => import('./pages/coming-soon/ComingSoonOrange16'));

const TEMPLATES = [
  { id: 'htm350', label: '🏍️ HTM 350 DUDE (360° Motorcycle)', component: ComingSoonHTM350 },
  { id: 'aura9', label: '⚡ Apex Neural (AURA 9)', component: ComingSoonAura9 },
  { id: 'orange16', label: '🍊 Orange 16', component: ComingSoonOrange16 },
  { id: 'aurelia', label: '✨ Aurelia', component: ComingSoonAurelia },
  { id: 'aurasky', label: '🌌 Aura Sky', component: ComingSoonAuraSky },
  { id: 'botanical', label: '🌿 Botanical', component: ComingSoonBotanical },
  { id: 'novax1', label: '🚀 Nova X1', component: ComingSoonNovaX1 },
];

export default function App() {
  const [selectedTemplate, setSelectedTemplate] = useState('htm350');

  const currentItem = TEMPLATES.find((t) => t.id === selectedTemplate) || TEMPLATES[0];
  const ComponentToRender = currentItem.component;

  return (
    <div style={{ minHeight: '100vh', position: 'relative', width: '100%' }}>
      {/* Top Floating Template Switcher Bar */}
      <nav
        style={{
          position: 'fixed',
          top: 14,
          right: 14,
          zIndex: 999999,
          background: 'rgba(15, 23, 42, 0.92)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.18)',
          padding: '8px 14px',
          borderRadius: '9999px',
          display: 'flex',
          gap: '8px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.45)',
          alignItems: 'center',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          flexWrap: 'wrap',
          maxWidth: 'calc(100vw - 28px)',
        }}
      >
        <span
          style={{
            color: '#94a3b8',
            fontSize: '12px',
            fontWeight: 700,
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            marginRight: '4px',
          }}
        >
          Templates:
        </span>
        {TEMPLATES.map((item) => {
          const isActive = selectedTemplate === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setSelectedTemplate(item.id)}
              style={{
                padding: '6px 14px',
                borderRadius: '9999px',
                fontSize: '12px',
                fontWeight: isActive ? 700 : 500,
                cursor: 'pointer',
                border: 'none',
                transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                background: isActive ? '#f97316' : 'rgba(255, 255, 255, 0.08)',
                color: isActive ? '#ffffff' : '#cbd5e1',
                boxShadow: isActive ? '0 0 16px rgba(249, 115, 22, 0.5)' : 'none',
              }}
            >
              {item.label}
            </button>
          );
        })}
      </nav>

      {/* Render Active Template with Lazy Loading & Boundary */}
      <TemplateErrorBoundary resetKey={selectedTemplate}>
        <Suspense
          fallback={
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                background: '#05070a',
                color: '#f8fafc',
                fontFamily: 'system-ui, sans-serif',
                fontSize: '16px',
                fontWeight: 600,
                letterSpacing: '0.05em',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  style={{
                    width: '20px',
                    height: '20px',
                    border: '2px solid rgba(255, 255, 255, 0.2)',
                    borderTopColor: '#f97316',
                    borderRadius: '50%',
                    animation: 'spin 0.8s linear infinite',
                  }}
                />
                Loading Template...
              </div>
            </div>
          }
        >
          <ComponentToRender />
        </Suspense>
      </TemplateErrorBoundary>
    </div>
  );
}
