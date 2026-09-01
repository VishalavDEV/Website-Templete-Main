import React, { useState, useRef, useEffect } from 'react';
import { 
  Stethoscope, X, Send, Bot, User, AlertCircle, 
  Calendar, Phone, Users, RotateCcw, Maximize2, Minimize2, 
  Check, ArrowRight, ShieldCheck, Activity
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteSettings } from '../../data/siteData';

interface Message {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
}

export const AIHealthAdvisorModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const initialMessage: Message = {
    id: 'init-1',
    sender: 'ai',
    text: `Hello! I am your AuraHealth Clinical AI Assistant.

Please describe your symptoms, health concerns, or medical questions below. I will provide preliminary clinical guidance, recommend the appropriate hospital department, and outline key questions for your physician.`,
    timestamp: 'Just now'
  };

  const [messages, setMessages] = useState<Message[]>([initialMessage]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, messages, loading]);

  const handleSend = async (queryText?: string) => {
    const textToSend = queryText || input;
    if (!textToSend.trim() || loading) return;

    const userMsg: Message = { 
      id: `user-${Date.now()}`,
      sender: 'user', 
      text: textToSend.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/gemini-consult', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          message: textToSend, 
          history: messages.map(m => ({ sender: m.sender, text: m.text }))
        })
      });

      const data = await response.json();
      const replyText = data.success 
        ? data.reply 
        : (data.error || 'Unable to retrieve clinical AI guidance right now. Please consult our front desk or schedule an appointment.');

      setMessages(prev => [
        ...prev, 
        { 
          id: `ai-${Date.now()}`,
          sender: 'ai', 
          text: replyText,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } catch (err) {
      console.error(err);
      setMessages(prev => [
        ...prev, 
        { 
          id: `ai-${Date.now()}`,
          sender: 'ai', 
          text: 'Network connection issue. Please check your internet connection or call our hospital support team directly.',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleClearChat = () => {
    setMessages([initialMessage]);
    setInput('');
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Helper to format AI response sections cleanly
  const renderFormattedAiMessage = (text: string) => {
    const lines = text.split('\n');
    return (
      <div className="space-y-2 text-slate-800 text-sm leading-relaxed">
        {lines.map((line, idx) => {
          const trimmed = line.trim();
          if (!trimmed) {
            return <div key={idx} className="h-1.5" />;
          }

          // Header lines like **1. Section Title** or #
          if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
            const headingText = trimmed.replace(/\*\*/g, '');
            return (
              <h5 key={idx} className="font-black text-slate-900 pt-1 text-sm flex items-center gap-1.5 text-blue-900">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                {headingText}
              </h5>
            );
          }

          // Bullet points
          if (trimmed.startsWith('•') || trimmed.startsWith('-') || trimmed.startsWith('* ')) {
            const bulletContent = trimmed.replace(/^[•\-\*]\s*/, '');
            return (
              <div key={idx} className="flex items-start gap-2 pl-1.5">
                <span className="text-blue-600 font-bold text-xs mt-1">•</span>
                <span className="text-slate-700">{bulletContent}</span>
              </div>
            );
          }

          // Bold inline text parsing
          if (trimmed.includes('**')) {
            const parts = trimmed.split(/(\*\*.*?\*\*)/g);
            return (
              <p key={idx} className="text-slate-700">
                {parts.map((part, pIdx) => {
                  if (part.startsWith('**') && part.endsWith('**')) {
                    return <strong key={pIdx} className="font-black text-slate-900">{part.slice(2, -2)}</strong>;
                  }
                  return part;
                })}
              </p>
            );
          }

          return (
            <p key={idx} className="text-slate-700">
              {trimmed}
            </p>
          );
        })}
      </div>
    );
  };

  return (
    <>
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-40 bg-slate-900 hover:bg-blue-600 text-white pl-4 pr-5 py-3.5 rounded-2xl shadow-xl shadow-slate-900/25 flex items-center gap-3 transition-all duration-300 hover:scale-105 group border border-slate-700/80 cursor-pointer"
          aria-label="Open AI Health Advisor"
        >
          <div className="relative w-9 h-9 rounded-xl bg-blue-600 group-hover:bg-white text-white group-hover:text-blue-600 flex items-center justify-center transition-colors shadow-sm">
            <Stethoscope className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-slate-900 animate-pulse"></span>
          </div>
          <div className="text-left">
            <div className="font-black text-xs tracking-wide uppercase text-blue-400 group-hover:text-blue-200">Clinical AI</div>
            <div className="font-bold text-sm text-white">Health Advisor</div>
          </div>
        </button>
      )}

      {/* Floating Modal / Drawer */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in duration-200"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsOpen(false);
          }}
        >
          <div 
            className={`bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl flex flex-col border border-slate-200 transition-all duration-300 w-full overflow-hidden ${
              isExpanded 
                ? 'max-w-4xl h-[92vh] sm:h-[88vh]' 
                : 'max-w-xl h-[85vh] sm:h-[750px]'
            }`}
          >
            {/* Top Navigation Bar & Header */}
            <div className="bg-slate-900 text-white p-4 sm:p-5 border-b border-slate-800 shrink-0">
              <div className="flex items-center justify-between gap-3 mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-inner shrink-0">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-black text-base text-white tracking-tight">Clinical AI Health Advisor</h3>
                      <span className="inline-flex items-center gap-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-bold px-2 py-0.5 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                        Online
                      </span>
                    </div>
                    <p className="text-xs text-slate-400">Direct symptoms guidance & department routing</p>
                  </div>
                </div>

                {/* Header Action Controls */}
                <div className="flex items-center gap-1">
                  <button
                    onClick={handleClearChat}
                    title="Reset Conversation"
                    className="w-8 h-8 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Clear chat"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    title={isExpanded ? "Collapse" : "Expand"}
                    className="hidden sm:flex w-8 h-8 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white items-center justify-center transition-colors cursor-pointer"
                    aria-label="Toggle size"
                  >
                    {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                  </button>

                  <button
                    onClick={() => setIsOpen(false)}
                    title="Close"
                    className="w-8 h-8 rounded-xl bg-slate-800 hover:bg-red-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Close modal"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Quick Navigation Shortcuts */}
              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-800/80 text-xs">
                <Link
                  to="/appointment"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-1.5 py-1.5 px-2 bg-slate-800/90 hover:bg-blue-600 text-slate-200 hover:text-white rounded-xl font-bold transition-all text-center"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span className="truncate">Book Visit</span>
                </Link>

                <Link
                  to="/doctors"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-1.5 py-1.5 px-2 bg-slate-800/90 hover:bg-blue-600 text-slate-200 hover:text-white rounded-xl font-bold transition-all text-center"
                >
                  <Users className="w-3.5 h-3.5" />
                  <span className="truncate">Find Doctor</span>
                </Link>

                <a
                  href={`tel:${siteSettings.emergencyPhone}`}
                  className="flex items-center justify-center gap-1.5 py-1.5 px-2 bg-red-950/60 hover:bg-red-600 border border-red-800/50 text-red-200 hover:text-white rounded-xl font-bold transition-all text-center"
                >
                  <Phone className="w-3.5 h-3.5 text-red-400 group-hover:text-white" />
                  <span className="truncate">Emergency</span>
                </a>
              </div>
            </div>

            {/* Medical Disclaimer Notice */}
            <div className="bg-blue-50/80 border-b border-blue-100 px-4 py-2 flex items-center gap-2 text-[11px] text-blue-900 font-medium shrink-0">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span className="truncate">AI guidance for triage assistance. For acute emergencies, call {siteSettings.emergencyPhone} immediately.</span>
            </div>

            {/* Conversation Stream */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 bg-slate-50">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.sender === 'ai' && (
                    <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                      <Bot className="w-4 h-4" />
                    </div>
                  )}

                  <div className={`flex flex-col max-w-[85%] sm:max-w-[80%] ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                    <div
                      className={`p-4 rounded-2xl shadow-xs ${
                        msg.sender === 'user'
                          ? 'bg-blue-600 text-white rounded-tr-xs'
                          : 'bg-white text-slate-800 border border-slate-200/90 rounded-tl-xs'
                      }`}
                    >
                      {msg.sender === 'user' ? (
                        <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                      ) : (
                        renderFormattedAiMessage(msg.text)
                      )}
                    </div>

                    <div className="flex items-center gap-2 mt-1 px-1 text-[10px] text-slate-400">
                      <span>{msg.timestamp}</span>
                      {msg.sender === 'ai' && (
                        <button
                          onClick={() => copyToClipboard(msg.text, msg.id)}
                          className="hover:text-blue-600 transition-colors font-medium cursor-pointer"
                        >
                          {copiedId === msg.id ? (
                            <span className="text-emerald-600 inline-flex items-center gap-0.5">
                              <Check className="w-3 h-3" /> Copied
                            </span>
                          ) : (
                            'Copy summary'
                          )}
                        </button>
                      )}
                    </div>
                  </div>

                  {msg.sender === 'user' && (
                    <div className="w-8 h-8 rounded-xl bg-slate-800 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                      <User className="w-4 h-4" />
                    </div>
                  )}
                </div>
              ))}

              {/* Loading Indicator */}
              {loading && (
                <div className="flex gap-3 items-start animate-in fade-in duration-200">
                  <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs rounded-tl-xs flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-blue-600 animate-bounce"></span>
                      <span className="w-2 h-2 rounded-full bg-blue-600 animate-bounce [animation-delay:0.15s]"></span>
                      <span className="w-2 h-2 rounded-full bg-blue-600 animate-bounce [animation-delay:0.3s]"></span>
                    </div>
                    <span className="text-xs text-slate-600 font-semibold">Reviewing clinical considerations...</span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Simplified & Clean Input Bar (No suggestions) */}
            <div className="p-3 sm:p-4 bg-white border-t border-slate-200 shrink-0">
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex items-center gap-2"
              >
                <div className="relative flex-1">
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your symptoms, condition, or question..."
                    disabled={loading}
                    className="w-full bg-slate-100 hover:bg-slate-50 focus:bg-white border border-slate-200 focus:border-blue-600 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none transition-all pr-10"
                  />
                  {input.trim() && (
                    <button
                      type="button"
                      onClick={() => setInput('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
                      aria-label="Clear input"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={loading || !input.trim()}
                  className="bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-white px-5 py-3 rounded-xl font-bold flex items-center justify-center transition-all shadow-md shadow-blue-600/20 active:scale-95 shrink-0 cursor-pointer"
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>

              {/* Bottom Micro Footer */}
              <div className="mt-2.5 flex items-center justify-between text-[11px] text-slate-500 px-1">
                <span>Press <kbd className="px-1.5 py-0.5 bg-slate-100 border border-slate-300 rounded font-mono text-[10px] text-slate-700 font-semibold">Enter</kbd> to consult</span>
                <Link
                  to="/appointment"
                  onClick={() => setIsOpen(false)}
                  className="text-blue-600 hover:text-blue-800 font-bold inline-flex items-center gap-1"
                >
                  <span>Book In-Person Consultation</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
