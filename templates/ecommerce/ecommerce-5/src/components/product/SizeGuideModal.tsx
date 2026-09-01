import React, { useState } from 'react';
import { X } from 'lucide-react';

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  gender: 'women' | 'men' | 'accessories';
}

export const SizeGuideModal: React.FC<SizeGuideModalProps> = ({ isOpen, onClose, gender }) => {
  const [tab, setTab] = useState<'women' | 'men'>(gender === 'men' ? 'men' : 'women');

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(23, 22, 20, 0.65)',
        backdropFilter: 'blur(8px)',
        zIndex: 350,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
      }}
      onClick={onClose}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '680px',
          backgroundColor: 'var(--bg-primary)',
          padding: '40px',
          borderRadius: '2px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
          }}
        >
          <X size={20} />
        </button>

        <h3
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '28px',
            textTransform: 'uppercase',
            marginBottom: '8px',
          }}
        >
          SIZE GUIDE & MEASUREMENTS
        </h3>
        <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '24px' }}>
          All measurements are taken flat in centimeters (cm).
        </p>

        {/* Tab selector */}
        <div style={{ display: 'flex', gap: '16px', marginBottom: '24px', borderBottom: '1px solid var(--border-light)' }}>
          <button
            onClick={() => setTab('women')}
            style={{
              paddingBottom: '12px',
              fontSize: '12px',
              letterSpacing: '0.12em',
              fontWeight: '600',
              textTransform: 'uppercase',
              color: tab === 'women' ? 'var(--text-primary)' : 'var(--text-muted)',
              borderBottom: tab === 'women' ? '2px solid var(--text-primary)' : 'none',
            }}
          >
            WOMEN
          </button>
          <button
            onClick={() => setTab('men')}
            style={{
              paddingBottom: '12px',
              fontSize: '12px',
              letterSpacing: '0.12em',
              fontWeight: '600',
              textTransform: 'uppercase',
              color: tab === 'men' ? 'var(--text-primary)' : 'var(--text-muted)',
              borderBottom: tab === 'men' ? '2px solid var(--text-primary)' : 'none',
            }}
          >
            MEN
          </button>
        </div>

        {/* Measurement Table */}
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border-medium)' }}>
                <th style={{ padding: '12px 8px', fontWeight: '600' }}>SIZE</th>
                <th style={{ padding: '12px 8px', fontWeight: '600' }}>CHEST (CM)</th>
                <th style={{ padding: '12px 8px', fontWeight: '600' }}>WAIST (CM)</th>
                <th style={{ padding: '12px 8px', fontWeight: '600' }}>HIP (CM)</th>
                <th style={{ padding: '12px 8px', fontWeight: '600' }}>LENGTH (CM)</th>
              </tr>
            </thead>
            <tbody>
              {tab === 'women' ? (
                <>
                  <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                    <td style={{ padding: '12px 8px', fontWeight: '600' }}>XS</td>
                    <td style={{ padding: '12px 8px' }}>80 - 84</td>
                    <td style={{ padding: '12px 8px' }}>62 - 66</td>
                    <td style={{ padding: '12px 8px' }}>88 - 92</td>
                    <td style={{ padding: '12px 8px' }}>68</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                    <td style={{ padding: '12px 8px', fontWeight: '600' }}>S</td>
                    <td style={{ padding: '12px 8px' }}>85 - 89</td>
                    <td style={{ padding: '12px 8px' }}>67 - 71</td>
                    <td style={{ padding: '12px 8px' }}>93 - 97</td>
                    <td style={{ padding: '12px 8px' }}>70</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                    <td style={{ padding: '12px 8px', fontWeight: '600' }}>M</td>
                    <td style={{ padding: '12px 8px' }}>90 - 94</td>
                    <td style={{ padding: '12px 8px' }}>72 - 76</td>
                    <td style={{ padding: '12px 8px' }}>98 - 102</td>
                    <td style={{ padding: '12px 8px' }}>72</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                    <td style={{ padding: '12px 8px', fontWeight: '600' }}>L</td>
                    <td style={{ padding: '12px 8px' }}>95 - 99</td>
                    <td style={{ padding: '12px 8px' }}>77 - 81</td>
                    <td style={{ padding: '12px 8px' }}>103 - 107</td>
                    <td style={{ padding: '12px 8px' }}>74</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                    <td style={{ padding: '12px 8px', fontWeight: '600' }}>XL</td>
                    <td style={{ padding: '12px 8px' }}>100 - 105</td>
                    <td style={{ padding: '12px 8px' }}>82 - 87</td>
                    <td style={{ padding: '12px 8px' }}>108 - 113</td>
                    <td style={{ padding: '12px 8px' }}>75</td>
                  </tr>
                </>
              ) : (
                <>
                  <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                    <td style={{ padding: '12px 8px', fontWeight: '600' }}>S</td>
                    <td style={{ padding: '12px 8px' }}>92 - 96</td>
                    <td style={{ padding: '12px 8px' }}>76 - 80</td>
                    <td style={{ padding: '12px 8px' }}>94 - 98</td>
                    <td style={{ padding: '12px 8px' }}>74</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                    <td style={{ padding: '12px 8px', fontWeight: '600' }}>M</td>
                    <td style={{ padding: '12px 8px' }}>97 - 101</td>
                    <td style={{ padding: '12px 8px' }}>81 - 85</td>
                    <td style={{ padding: '12px 8px' }}>99 - 103</td>
                    <td style={{ padding: '12px 8px' }}>76</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                    <td style={{ padding: '12px 8px', fontWeight: '600' }}>L</td>
                    <td style={{ padding: '12px 8px' }}>102 - 106</td>
                    <td style={{ padding: '12px 8px' }}>86 - 90</td>
                    <td style={{ padding: '12px 8px' }}>104 - 108</td>
                    <td style={{ padding: '12px 8px' }}>78</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                    <td style={{ padding: '12px 8px', fontWeight: '600' }}>XL</td>
                    <td style={{ padding: '12px 8px' }}>107 - 112</td>
                    <td style={{ padding: '12px 8px' }}>91 - 96</td>
                    <td style={{ padding: '12px 8px' }}>109 - 114</td>
                    <td style={{ padding: '12px 8px' }}>80</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                    <td style={{ padding: '12px 8px', fontWeight: '600' }}>XXL</td>
                    <td style={{ padding: '12px 8px' }}>113 - 118</td>
                    <td style={{ padding: '12px 8px' }}>97 - 102</td>
                    <td style={{ padding: '12px 8px' }}>115 - 120</td>
                    <td style={{ padding: '12px 8px' }}>82</td>
                  </tr>
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
