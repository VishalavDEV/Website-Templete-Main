import React, { useState } from 'react';
import { 
  Footprints, 
  Droplets, 
  Moon, 
  Sparkles, 
  Send, 
  Upload, 
  ShoppingBag, 
  FolderLock, 
  ShieldAlert, 
  Bot,
  Smile,
  Edit2,
  CheckCircle2,
  ArrowUpRight
} from 'lucide-react';
import { NavigationTab, HealthMetrics } from '../../types';

interface HealthPlusRightSidebarProps {
  metrics: HealthMetrics;
  onNavigate: (tab: NavigationTab) => void;
  onOpenUploadReport: () => void;
  onOpenEmergency: () => void;
  onUpdateMetrics?: (newMetrics: HealthMetrics) => void;
}

export const HealthPlusRightSidebar: React.FC<HealthPlusRightSidebarProps> = ({
  metrics,
  onNavigate,
  onOpenUploadReport,
  onOpenEmergency,
  onUpdateMetrics,
}) => {
  const [aiMessage, setAiMessage] = useState('');
  const [chatLog, setChatLog] = useState<{ sender: 'user' | 'ai'; text: string }[]>([]);
  const [isAiReplying, setIsAiReplying] = useState(false);
  const [isEditingGoals, setIsEditingGoals] = useState(false);

  // Goal values
  const [stepGoal, setStepGoal] = useState(10000);
  const [waterGoal, setWaterGoal] = useState(8);
  const [waterCurrent, setWaterCurrent] = useState(6);
  const [sleepGoal, setSleepGoal] = useState(8.0);
  const [sleepCurrent, setSleepCurrent] = useState(6.2);
  const [meditationGoal, setMeditationGoal] = useState(20);
  const [meditationCurrent, setMeditationCurrent] = useState(10);

  const stepPercentage = Math.min(100, Math.round((metrics.steps / stepGoal) * 100));
  const waterPercentage = Math.min(100, Math.round((waterCurrent / waterGoal) * 100));
  const sleepPercentage = Math.min(100, Math.round((sleepCurrent / sleepGoal) * 100));
  const meditationPercentage = Math.min(100, Math.round((meditationCurrent / meditationGoal) * 100));

  const promptSuggestions = [
    "Help me understand my test report",
    "Find the right specialist for me",
    "Create a healthy daily routine",
    "Remind me to take my medicines",
  ];

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || aiMessage || '';
    if (!text.trim()) return;

    setChatLog(prev => [...prev, { sender: 'user', text }]);
    setAiMessage('');
    setIsAiReplying(true);

    setTimeout(() => {
      let reply = "I'm analyzing your health data and routine. Based on your current vitals (Heart rate 72 bpm, BP 120/80 mmHg), everything looks stable!";
      
      const lower = text.toLowerCase();
      if (lower.includes('report') || lower.includes('test')) {
        reply = "I've reviewed your latest Lipid Panel: your fasting glucose is optimal at 98 mg/dL and cholesterol indices are balanced. Would you like to upload a new report?";
      } else if (lower.includes('specialist') || lower.includes('doctor')) {
        reply = "For your routine review, Dr. Priya Sharma (General Physician) and Dr. Rohan Mehta (Cardiologist) are available this week. You can book an instant slot.";
      } else if (lower.includes('routine') || lower.includes('diet') || lower.includes('exercise')) {
        reply = "Here is your suggested daily routine: 20 mins morning mobility stretches, 2.5L water hydration, and a 10-min evening mindfulness session.";
      } else if (lower.includes('medicine') || lower.includes('medication') || lower.includes('remind')) {
        reply = "You have 2 scheduled medications: Multivitamin after breakfast, and Atorvastatin 10mg before bedtime. Reminders are active.";
      }

      setChatLog(prev => [...prev, { sender: 'ai', text: reply }]);
      setIsAiReplying(false);
    }, 800);
  };

  return (
    <div className="w-full lg:w-84 xl:w-90 flex-shrink-0 space-y-5">
      {/* 1. Today's Goals Card */}
      <div className="bg-white rounded-2xl p-5 border border-[#E2E8F0] shadow-xs">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-bold text-[#0F172A]">Today's Goals</h3>
          <button 
            id="edit-goals-toggle-btn"
            onClick={() => setIsEditingGoals(!isEditingGoals)}
            className="text-xs font-semibold text-[#00A884] hover:text-[#008f70] flex items-center space-x-1 cursor-pointer"
          >
            <span>{isEditingGoals ? 'Done' : 'Edit Goals'}</span>
          </button>
        </div>

        <div className="space-y-4">
          {/* Steps */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-full bg-[#ECFDF5] text-[#059669] flex items-center justify-center flex-shrink-0">
                  <Footprints className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-800 block">Steps</span>
                  <span className="text-[11px] text-slate-500 font-medium">
                    {metrics.steps.toLocaleString()} / {stepGoal.toLocaleString()} steps
                  </span>
                </div>
              </div>
              <span className="text-xs font-bold text-[#059669]">{stepPercentage}%</span>
            </div>
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#10B981] rounded-full transition-all duration-500"
                style={{ width: `${stepPercentage}%` }}
              />
            </div>
          </div>

          {/* Water */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-full bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center flex-shrink-0">
                  <Droplets className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-800 block">Water</span>
                  <span className="text-[11px] text-slate-500 font-medium">
                    {waterCurrent} / {waterGoal} glasses
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-1.5">
                {isEditingGoals && (
                  <button 
                    onClick={() => setWaterCurrent(prev => Math.min(prev + 1, 15))}
                    className="text-[10px] bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded cursor-pointer hover:bg-blue-200"
                  >
                    +1
                  </button>
                )}
                <span className="text-xs font-bold text-[#2563EB]">{waterPercentage}%</span>
              </div>
            </div>
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#3B82F6] rounded-full transition-all duration-500"
                style={{ width: `${waterPercentage}%` }}
              />
            </div>
          </div>

          {/* Sleep */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-full bg-[#F5F3FF] text-[#7C3AED] flex items-center justify-center flex-shrink-0">
                  <Moon className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-800 block">Sleep</span>
                  <span className="text-[11px] text-slate-500 font-medium">
                    {sleepCurrent} / {sleepGoal} hrs
                  </span>
                </div>
              </div>
              <span className="text-xs font-bold text-[#7C3AED]">{sleepPercentage}%</span>
            </div>
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#8B5CF6] rounded-full transition-all duration-500"
                style={{ width: `${sleepPercentage}%` }}
              />
            </div>
          </div>

          {/* Meditation */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-full bg-[#FFF7ED] text-[#EA580C] flex items-center justify-center flex-shrink-0">
                  <Smile className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-800 block">Meditation</span>
                  <span className="text-[11px] text-slate-500 font-medium">
                    {meditationCurrent} / {meditationGoal} mins
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-1.5">
                {isEditingGoals && (
                  <button 
                    onClick={() => setMeditationCurrent(prev => Math.min(prev + 5, 60))}
                    className="text-[10px] bg-orange-100 text-orange-700 px-1.5 py-0.5 rounded cursor-pointer hover:bg-orange-200"
                  >
                    +5m
                  </button>
                )}
                <span className="text-xs font-bold text-[#EA580C]">{meditationPercentage}%</span>
              </div>
            </div>
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#F97316] rounded-full transition-all duration-500"
                style={{ width: `${meditationPercentage}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* 2. AI Health Assistant Card */}
      <div className="bg-white rounded-2xl p-5 border border-[#E2E8F0] shadow-xs">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-1.5">
            <Sparkles className="w-4 h-4 text-[#7C3AED]" />
            <h3 className="text-sm font-bold text-[#0F172A]">AI Health Assistant</h3>
          </div>
          <span className="text-[10px] font-bold text-[#7C3AED] bg-[#F3E8FF] px-2 py-0.5 rounded-full">
            New
          </span>
        </div>

        <h4 className="text-sm font-bold text-[#0F172A] mb-1">
          How can I help with your health today?
        </h4>
        <p className="text-xs text-slate-500 mb-3">
          Ask me anything or try these
        </p>

        {/* Prompt Suggestions */}
        <div className="space-y-1.5 mb-4">
          {promptSuggestions.map((prompt) => (
            <button
              key={prompt}
              id={`ai-chip-${(prompt || '').slice(0, 10).replace(/\s+/g, '-').toLowerCase()}`}
              onClick={() => handleSendMessage(prompt)}
              className="w-full text-left text-xs font-medium text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200/80 px-3 py-2 rounded-xl transition-all flex items-center justify-between group cursor-pointer"
            >
              <span className="truncate">{prompt}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform flex-shrink-0 ml-1" />
            </button>
          ))}
        </div>

        {/* Chat History if any */}
        {chatLog.length > 0 && (
          <div className="max-h-40 overflow-y-auto space-y-2 mb-3 p-2 bg-slate-50 rounded-xl border border-slate-200/60 text-xs">
            {chatLog.map((msg, idx) => (
              <div 
                key={idx} 
                className={`p-2 rounded-lg ${
                  msg.sender === 'user' 
                    ? 'bg-[#E6F7F3] text-slate-800 ml-4 font-medium' 
                    : 'bg-white text-slate-700 mr-4 border border-slate-200'
                }`}
              >
                {msg.text}
              </div>
            ))}
            {isAiReplying && (
              <div className="text-[11px] text-slate-400 italic p-1 animate-pulse">
                Assistant is typing...
              </div>
            )}
          </div>
        )}

        {/* Message Input */}
        <div className="relative mb-2">
          <input
            id="ai-sidebar-message-input"
            type="text"
            value={aiMessage}
            onChange={(e) => setAiMessage(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Type your message..."
            className="w-full pl-3.5 pr-10 py-2.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/30 focus:border-[#3B82F6]"
          />
          <button
            id="ai-sidebar-send-btn"
            onClick={() => handleSendMessage()}
            className="absolute right-1.5 top-1.5 bottom-1.5 px-2.5 bg-[#3B82F6] hover:bg-[#2563EB] text-white rounded-lg flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Send message to AI assistant"
          >
            <Send className="w-3.5 h-3.5" />
          </button>
        </div>

        <p className="text-[10px] text-slate-400 text-center leading-tight">
          AI Assistant can make mistakes. Always consult a professional for medical advice.
        </p>
      </div>

      {/* 3. Quick Actions (4 Grid items) */}
      <div className="bg-white rounded-2xl p-5 border border-[#E2E8F0] shadow-xs">
        <h3 className="text-base font-bold text-[#0F172A] mb-3.5">Quick Actions</h3>
        <div className="grid grid-cols-2 gap-3">
          {/* Upload Reports */}
          <button
            id="quick-action-upload-reports"
            onClick={onOpenUploadReport}
            className="bg-[#E6F7F3] hover:bg-[#d5f3ec] border border-[#A7F3D0]/60 p-3 rounded-2xl flex flex-col items-center justify-center text-center transition-all cursor-pointer group"
          >
            <div className="w-8 h-8 rounded-full bg-[#00A884]/20 text-[#00A884] flex items-center justify-center mb-1.5 group-hover:scale-110 transition-transform">
              <Upload className="w-4 h-4" />
            </div>
            <span className="text-xs font-bold text-slate-800">Upload Reports</span>
          </button>

          {/* Order Medicines */}
          <button
            id="quick-action-order-medicines"
            onClick={() => onNavigate('pharmacy')}
            className="bg-[#F3E8FF] hover:bg-[#ebd5ff] border border-[#DDD6FE]/60 p-3 rounded-2xl flex flex-col items-center justify-center text-center transition-all cursor-pointer group"
          >
            <div className="w-8 h-8 rounded-full bg-[#7C3AED]/20 text-[#7C3AED] flex items-center justify-center mb-1.5 group-hover:scale-110 transition-transform">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <span className="text-xs font-bold text-slate-800">Order Medicines</span>
          </button>

          {/* Health Records */}
          <button
            id="quick-action-health-records"
            onClick={() => onNavigate('reports')}
            className="bg-[#FEF3C7] hover:bg-[#fde68a] border border-[#FDE68A]/60 p-3 rounded-2xl flex flex-col items-center justify-center text-center transition-all cursor-pointer group"
          >
            <div className="w-8 h-8 rounded-full bg-[#D97706]/20 text-[#D97706] flex items-center justify-center mb-1.5 group-hover:scale-110 transition-transform">
              <FolderLock className="w-4 h-4" />
            </div>
            <span className="text-xs font-bold text-slate-800">Health Records</span>
          </button>

          {/* Emergency Help */}
          <button
            id="quick-action-emergency-help"
            onClick={onOpenEmergency}
            className="bg-[#FEE2E2] hover:bg-[#fecaca] border border-[#FECDD3]/60 p-3 rounded-2xl flex flex-col items-center justify-center text-center transition-all cursor-pointer group"
          >
            <div className="w-8 h-8 rounded-full bg-[#E11D48]/20 text-[#E11D48] flex items-center justify-center mb-1.5 group-hover:scale-110 transition-transform">
              <ShieldAlert className="w-4 h-4" />
            </div>
            <span className="text-xs font-bold text-slate-800">Emergency Help</span>
          </button>
        </div>
      </div>
    </div>
  );
};
