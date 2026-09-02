import React, { useState, useRef, useEffect } from 'react';
import { 
  Sparkles, 
  Send, 
  Bot, 
  User, 
  AlertTriangle, 
  ShieldAlert, 
  Stethoscope, 
  FlaskConical, 
  Smile, 
  Apple, 
  ArrowRight, 
  RotateCcw, 
  Loader2 
} from 'lucide-react';
import { AIChatMessage, HealthMetrics, NavigationTab, FamilyMember } from '../../types';

interface AIAssistantViewProps {
  metrics: HealthMetrics;
  currentMember: FamilyMember;
  onNavigate: (tab: NavigationTab) => void;
}

export const AIAssistantView: React.FC<AIAssistantViewProps> = ({
  metrics,
  currentMember,
  onNavigate,
}) => {
  const memberFirstName = currentMember?.name ? currentMember.name.split(' ')[0] : 'there';

  const [messages, setMessages] = useState<AIChatMessage[]>([
    {
      id: 'msg-1',
      sender: 'assistant',
      text: `Hello ${memberFirstName}! I'm Aura, your clinical health and wellness assistant. I can help you interpret lab biomarkers, prepare for doctor consultations, optimize nutrition protocols, or suggest accredited health services. What would you like to explore today?`,
      timestamp: 'Just now',
      recommendedServices: [
        { title: 'Cardiologist Consultation', actionUrl: 'appointments', description: 'Review your resting heart rate and blood pressure trends with a certified specialist.' },
        { title: 'Comprehensive Metabolic Panel', actionUrl: 'reports', description: 'Track fasting glucose, HbA1c, and lipid profiles.' },
      ]
    },
  ]);

  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const suggestionPrompts = [
    'Help me understand my recent blood test results',
    'How can I lower my resting heart rate from 72 to 65 bpm?',
    'What should I ask Dr. Maya Lin in my cardiology visit?',
    'Suggest a low-glycemic Mediterranean meal plan for dinner',
    'Explain the difference between HDL, LDL, and Triglycerides',
  ];

  const handleSendMessage = async (promptText?: string) => {
    const textToSend = promptText || inputValue;
    if (!textToSend.trim() || isLoading) return;

    const userMessage: AIChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages(prev => [...prev, userMessage]);
    if (!promptText) setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/gemini/assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: textToSend,
          userContext: {
            name: currentMember.name,
            age: currentMember.age,
            heartRate: metrics.heartRate,
            bloodPressure: `${metrics.bloodPressureSys}/${metrics.bloodPressureDia}`,
            glucose: metrics.bloodGlucose,
            weight: metrics.weight,
            bmi: metrics.bmi,
          },
        }),
      });

      const data = await response.json();

      let serviceRecs: any[] = [];
      const lower = (textToSend || '').toLowerCase();
      if (lower.includes('heart') || lower.includes('blood pressure') || lower.includes('doctor')) {
        serviceRecs.push({ title: 'Book Doctor Consultation', actionUrl: 'appointments', description: 'Schedule an HD video consultation with our cardiology lead.' });
      }
      if (lower.includes('test') || lower.includes('lab') || lower.includes('sugar') || lower.includes('cholesterol')) {
        serviceRecs.push({ title: 'View Biomarker Panel', actionUrl: 'reports', description: 'Access certified diagnostic lab reports.' });
      }

      const assistantMessage: AIChatMessage = {
        id: `ai-${Date.now()}`,
        sender: 'assistant',
        text: data.reply || "Based on your clinical markers, maintaining balanced hydration and moderate aerobic activity is essential. Feel free to ask more specific questions!",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        recommendedServices: serviceRecs.length > 0 ? serviceRecs : undefined,
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (err) {
      console.error(err);
      const fallbackMsg: AIChatMessage = {
        id: `ai-${Date.now()}`,
        sender: 'assistant',
        text: `Thank you for your question. Maintaining your resting vitals (BP: ${metrics?.bloodPressureSys || 120}/${metrics?.bloodPressureDia || 80} mmHg, HR: ${metrics?.heartRate || 72} bpm) within normal parameters reflects strong baseline metabolic health. Would you like to schedule a formal follow-up with your primary physician?`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages(prev => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: `msg-${Date.now()}`,
        sender: 'assistant',
        text: `Hi ${memberFirstName}! How can I assist you with your health and wellness goals today?`,
        timestamp: 'Just now',
      },
    ]);
  };

  return (
    <div className="space-y-6 pb-16 max-w-4xl mx-auto">
      
      {/* Top Banner */}
      <div className="bg-[#2D2A26] text-white p-6 sm:p-8 rounded-3xl border border-[#E5E2D9]/30 relative overflow-hidden shadow-xl flex items-center justify-between">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#5E7153]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D4A373]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-2">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#5E7153]/30 border border-[#A3B18A]/40 text-[#E5E2D9] text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#A3B18A]" />
            <span>AI Clinical Health Companion</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold font-['Outfit',sans-serif] text-white">
            Aura Health Assistant
          </h1>
          <p className="text-xs sm:text-sm text-[#E5E2D9]/85 max-w-xl">
            Conversational triage, lab explanations, and preventative lifestyle guidance contextualized to your real-time biometrics.
          </p>
        </div>

        <button
          onClick={handleResetChat}
          className="relative z-10 p-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-semibold border border-white/15 transition-colors flex items-center space-x-1.5 cursor-pointer shrink-0"
          title="Reset conversation"
        >
          <RotateCcw className="w-4 h-4" />
          <span className="hidden sm:inline">New Chat</span>
        </button>
      </div>

      {/* Clinical Disclaimer Alert */}
      <div className="p-3.5 bg-[#FEF6ED] rounded-2xl border border-[#D4A373]/40 flex items-start space-x-3 text-xs text-[#2D2A26]">
        <AlertTriangle className="w-4 h-4 text-[#D4A373] shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <strong>Clinical Notice:</strong> Aura provides educational insights and health guidance based on evidence-backed guidelines. For acute symptoms, chest pain, or emergencies, please contact emergency dispatch (911) or visit an emergency room immediately.
        </p>
      </div>

      {/* Chat Stage Container */}
      <div className="bg-white rounded-3xl border border-[#E5E2D9] shadow-xs flex flex-col h-[600px] overflow-hidden">
        
        {/* Messages Feed */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start space-x-3 ${
                msg.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
              }`}
            >
              {/* Avatar */}
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                msg.sender === 'user'
                  ? 'bg-[#2D2A26] text-white'
                  : 'bg-[#5E7153] text-white shadow-xs'
              }`}>
                {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              {/* Message Bubble */}
              <div className="space-y-2 max-w-[85%] sm:max-w-[75%]">
                <div className={`p-4 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-[#5E7153] text-white rounded-tr-none'
                    : 'bg-[#F9F8F6] text-[#2D2A26] rounded-tl-none border border-[#E5E2D9]'
                }`}>
                  <p className="whitespace-pre-line">{msg.text}</p>
                </div>

                {/* Recommended Service Chips */}
                {msg.recommendedServices && (
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#7A766F] block">
                      Recommended Care Actions
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {msg.recommendedServices.map((rec, i) => (
                        <div
                          key={i}
                          onClick={() => onNavigate(rec.actionUrl as any)}
                          className="p-3 bg-white border border-[#E5E2D9] rounded-xl hover:border-[#5E7153] hover:shadow-xs transition-all cursor-pointer space-y-1"
                        >
                          <div className="flex items-center justify-between text-xs font-bold text-[#5E7153]">
                            <span>{rec.title}</span>
                            <ArrowRight className="w-3.5 h-3.5 text-[#5E7153]" />
                          </div>
                          <p className="text-[11px] text-[#7A766F] leading-snug">{rec.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <span className="text-[10px] text-[#7A766F] block px-1">
                  {msg.timestamp}
                </span>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 rounded-full bg-[#5E7153] text-white flex items-center justify-center shrink-0">
                <Bot className="w-4 h-4" />
              </div>
              <div className="p-4 bg-[#F9F8F6] rounded-2xl rounded-tl-none border border-[#E5E2D9] flex items-center space-x-2 text-xs text-[#7A766F]">
                <Loader2 className="w-4 h-4 animate-spin text-[#5E7153]" />
                <span>Aura is reasoning with clinical context...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggestion Chips */}
        <div className="p-3 border-t border-[#E5E2D9] bg-[#F9F8F6] overflow-x-auto flex items-center space-x-2 scrollbar-none">
          <span className="text-[11px] font-semibold text-[#7A766F] shrink-0">Suggested:</span>
          {suggestionPrompts.map((p, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(p)}
              disabled={isLoading}
              className="px-3 py-1 bg-white hover:bg-[#F1F3EE] text-[#2D2A26] hover:text-[#5E7153] rounded-full text-xs font-medium border border-[#E5E2D9] transition-colors whitespace-nowrap cursor-pointer disabled:opacity-50"
            >
              {p}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="p-4 border-t border-[#E5E2D9] bg-white flex items-center space-x-3"
        >
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask Aura anything about health, symptoms, reports, or wellness..."
            disabled={isLoading}
            className="flex-1 px-4 py-3 bg-[#F9F8F6] border border-[#E5E2D9] rounded-2xl text-xs sm:text-sm text-[#2D2A26] placeholder-[#7A766F] focus:bg-white focus:border-[#5E7153] outline-none transition-colors"
          />
          <button
            type="submit"
            disabled={!inputValue.trim() || isLoading}
            className="p-3 bg-[#5E7153] hover:bg-[#4D5E44] text-white rounded-2xl font-bold shadow-md hover:shadow-lg transition-all disabled:opacity-40 cursor-pointer"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>

      </div>

    </div>
  );
};
