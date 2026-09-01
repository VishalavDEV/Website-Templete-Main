import React, { useState, useRef, useEffect } from 'react';
import { Terminal, X, Minimize2, Maximize2, Send, Cpu } from 'lucide-react';

const TerminalWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [logs, setLogs] = useState([
    { type: 'sys', text: 'SYSTEM BOOT SEQUENCE INITIALIZED...' },
    { type: 'sys', text: 'CONNECTING TO NEXORA OVERNIGHT MESH NETWORK [OK]' },
    { type: 'info', text: 'LOCATION: NEXORA INNOVATION LAB, CHENNAI' },
    { type: 'info', text: 'HACKERS ONLINE: 512 / 500' },
    { type: 'success', text: 'EVENT STATUS: READY FOR LAUNCH ON 18 OCT 2026' },
    { type: 'prompt', text: 'Type "help" to see available terminal commands.' }
  ]);

  const endRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      endRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [logs, isOpen]);

  const handleCommandSubmit = (e) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    const newLogs = [...logs, { type: 'cmd', text: `> ${inputVal}` }];

    switch (cmd) {
      case 'help':
        newLogs.push(
          { type: 'info', text: 'AVAILABLE COMMANDS:' },
          { type: 'info', text: '  status    — Display live system status' },
          { type: 'info', text: '  hackers   — View current hacker registrations' },
          { type: 'info', text: '  prizes    — Display total prize breakdown' },
          { type: 'info', text: '  venue     — Get venue details & map info' },
          { type: 'info', text: '  clear     — Clear terminal history' }
        );
        break;
      case 'status':
        newLogs.push({ type: 'success', text: '[SYS_OK] All 24-hour hackathon modules operational.' });
        break;
      case 'hackers':
        newLogs.push({ type: 'info', text: '[ONLINE] 512 hackers registered across 128 teams.' });
        break;
      case 'prizes':
        newLogs.push({ type: 'success', text: '[REWARDS] 1st: ₹2,00,000 | 2nd: ₹1,00,000 | 3rd: ₹50,000 | Pool: ₹5,00,000+' });
        break;
      case 'venue':
        newLogs.push({ type: 'info', text: '[VENUE] Nexora Innovation Lab, Tech Campus, Chennai, TN - 600001' });
        break;
      case 'clear':
        setLogs([{ type: 'sys', text: 'TERMINAL CLEARED.' }]);
        setInputVal('');
        return;
      default:
        newLogs.push({ type: 'error', text: `Command not recognized: "${cmd}". Type "help" for command list.` });
        break;
    }

    setLogs(newLogs);
    setInputVal('');
  };

  return (
    <>
      {/* Floating Toggle Launcher Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          style={{
            position: 'fixed',
            bottom: '2rem',
            left: '2rem',
            backgroundColor: 'rgba(10, 14, 10, 0.9)',
            border: '1px solid #00ff66',
            color: '#00ff66',
            padding: '0.65rem 1.15rem',
            borderRadius: '6px',
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.85rem',
            cursor: 'pointer',
            boxShadow: '0 0 20px rgba(0, 255, 102, 0.25)',
            zIndex: 999
          }}
          className="interactive pulse-glow"
        >
          <Terminal size={18} />
          <span>TERMINAL.SH</span>
          <span style={{ width: '8px', height: '8px', backgroundColor: '#00ff66', borderRadius: '50%' }} />
        </button>
      )}

      {/* Terminal Window Box */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: '2rem',
            left: '2rem',
            width: isMinimized ? '320px' : '420px',
            maxWidth: 'calc(100vw - 4rem)',
            height: isMinimized ? '46px' : '300px',
            backgroundColor: 'rgba(5, 8, 6, 0.95)',
            border: '1px solid #00ff66',
            borderRadius: '8px',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.9), 0 0 25px rgba(0, 255, 102, 0.2)',
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            backdropFilter: 'blur(10px)',
            transition: 'height 0.3s ease, width 0.3s ease'
          }}
        >
          {/* Header Bar */}
          <div
            style={{
              padding: '0.6rem 1rem',
              backgroundColor: 'rgba(0, 255, 102, 0.1)',
              borderBottom: '1px solid rgba(0, 255, 102, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              color: '#00ff66'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Cpu size={16} />
              <span>nexora@afterdark-terminal:~</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer' }}
              >
                {isMinimized ? <Maximize2 size={14} /> : <Minimize2 size={14} />}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                style={{ background: 'none', border: 'none', color: '#ff0055', cursor: 'pointer' }}
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Terminal Body */}
          {!isMinimized && (
            <>
              <div
                style={{
                  flex: 1,
                  padding: '0.85rem',
                  overflowY: 'auto',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.35rem'
                }}
              >
                {logs.map((log, idx) => (
                  <div
                    key={idx}
                    style={{
                      color:
                        log.type === 'cmd'
                          ? '#ffffff'
                          : log.type === 'success'
                          ? '#00ff66'
                          : log.type === 'error'
                          ? '#ff0055'
                          : '#94a3b8',
                      lineHeight: '1.4'
                    }}
                  >
                    {log.text}
                  </div>
                ))}
                <div ref={endRef} />
              </div>

              {/* Input Command Line */}
              <form
                onSubmit={handleCommandSubmit}
                style={{
                  display: 'flex',
                  padding: '0.5rem',
                  borderTop: '1px solid rgba(0, 255, 102, 0.2)',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)'
                }}
              >
                <span style={{ color: '#00ff66', fontFamily: 'var(--font-mono)', marginRight: '0.5rem' }}>&gt;</span>
                <input
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  placeholder="enter command..."
                  style={{
                    flex: 1,
                    background: 'none',
                    border: 'none',
                    color: '#ffffff',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    outline: 'none'
                  }}
                />
                <button type="submit" style={{ background: 'none', border: 'none', color: '#00ff66', cursor: 'pointer' }}>
                  <Send size={14} />
                </button>
              </form>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default TerminalWidget;
