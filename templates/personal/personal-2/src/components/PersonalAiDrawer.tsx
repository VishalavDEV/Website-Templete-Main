import { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Trash2, RefreshCw } from 'lucide-react';

interface PersonalAiDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  text: string;
  timestamp: string;
}

export default function PersonalAiDrawer({ isOpen, onClose }: PersonalAiDrawerProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      text: "Hello! I am Arjun Mehta's AI Assistant. I can answer questions about Arjun's AI projects, skills, background, work experience, or availability for collaborations. What would you like to know?",
      timestamp: 'Just now',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const suggestedQuestions = [
    "What projects has Arjun built?",
    "What is Arjun's primary tech stack?",
    "Is Arjun available for hire or projects?",
    "Explain NeuralDesk's system architecture",
    "Tell me about his experience at NextGen AI Labs",
  ];

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSend = async (questionText?: string) => {
    const textToSend = questionText || input.trim();
    if (!textToSend || isLoading) return;

    if (!questionText) setInput('');

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: textToSend }),
      });
      const data = await res.json();
      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        text: data.reply || "I'm ready to answer any questions about Arjun's AI research and applications.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch {
      // Fallback local responses
      let fallback = "Arjun Mehta is an AI Engineer & Full-Stack Developer based in Bengaluru, India. He builds production-grade ML pipelines, RAG systems, and modern web applications with Python, FastAPI, React, and PyTorch.";
      const lower = textToSend.toLowerCase();

      if (lower.includes('project') || lower.includes('build')) {
        fallback = "Arjun has built 4 flagship projects:\n1. **NeuralDesk**: AI-powered productivity workspace with RAG semantic search.\n2. **VisionGuard**: Real-time YOLOv8 edge monitoring pipeline.\n3. **StudyPilot**: Personalized AI learning assistant.\n4. **MarketLens**: AI-powered market intelligence dashboard.";
      } else if (lower.includes('tech') || lower.includes('stack') || lower.includes('skills')) {
        fallback = "Arjun's core stack includes Python, PyTorch, TensorFlow, LangChain, OpenAI APIs, React, Node.js, Express, Next.js, PostgreSQL, MongoDB, Docker, and AWS.";
      } else if (lower.includes('available') || lower.includes('hire') || lower.includes('contact')) {
        fallback = "Yes! Arjun is currently **● Open to AI Projects, Internships & Collaborations**. You can reach him directly at hello@arjunmehta.dev or via LinkedIn.";
      } else if (lower.includes('neuraldesk')) {
        fallback = "NeuralDesk is built with FastAPI and React, using hybrid RAG (dense embeddings + BM25 keyword matching) in PostgreSQL with pgvector.";
      }

      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        text: fallback,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: 'welcome',
        role: 'assistant',
        text: "Chat cleared. What else would you like to ask about Arjun Mehta?",
        timestamp: 'Just now',
      },
    ]);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 sm:inset-auto sm:bottom-6 sm:right-6 z-50 flex flex-col w-full sm:w-[420px] h-full sm:h-[580px] bg-white border border-slate-200 rounded-none sm:rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-4 duration-300 font-sans">
      
      {/* Header Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-50 border-b border-slate-200">
        <div className="flex items-center gap-2.5">
          <div className="relative w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-2xs">
            <Bot className="w-4 h-4" />
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white" />
          </div>
          <div>
            <h3 className="font-heading font-bold text-sm text-slate-900 flex items-center gap-1.5">
              <span>Arjun's AI Assistant</span>
            </h3>
            <p className="text-[10px] text-slate-500">Gemini 2.5 Powered • Live</p>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={handleClearChat}
            title="Clear Chat History"
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors"
          >
            <Trash2 className="w-4 h-4" />
          </button>
          <button
            onClick={onClose}
            aria-label="Close AI Chat"
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-900 hover:bg-slate-200/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Suggested Questions Pills */}
      <div className="p-2 bg-slate-100/70 border-b border-slate-200/80 overflow-x-auto flex gap-1.5 scrollbar-none">
        {suggestedQuestions.map((q, idx) => (
          <button
            key={idx}
            onClick={() => handleSend(q)}
            className="px-2.5 py-1 rounded-full bg-white border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 text-slate-600 hover:text-blue-600 text-[11px] font-medium whitespace-nowrap transition-colors"
          >
            {q}
          </button>
        ))}
      </div>

      {/* Messages List */}
      <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-50/50">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[85%] p-3 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                msg.role === 'user'
                  ? 'bg-blue-600 text-white rounded-br-xs shadow-2xs'
                  : 'bg-white border border-slate-200 text-slate-800 rounded-bl-xs shadow-2xs'
              }`}
            >
              <div className={`text-[10px] mb-1 font-medium ${msg.role === 'user' ? 'text-blue-200' : 'text-slate-400'}`}>
                {msg.role === 'user' ? 'You' : "Arjun AI"} • {msg.timestamp}
              </div>
              <div className="whitespace-pre-wrap">{msg.text}</div>
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start">
            <div className="p-3 rounded-2xl bg-white border border-slate-200 text-xs text-blue-600 flex items-center gap-2 shadow-2xs">
              <RefreshCw className="w-3.5 h-3.5 animate-spin" />
              <span>Thinking...</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Box */}
      <div className="p-3 bg-white border-t border-slate-200 flex items-center gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Ask anything about Arjun..."
          className="flex-1 px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all font-sans"
        />
        <button
          onClick={() => handleSend()}
          disabled={isLoading || !input.trim()}
          className="p-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all disabled:opacity-40 cursor-pointer shadow-2xs"
        >
          <Send className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}

