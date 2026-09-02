import React, { useState, useEffect } from 'react';
import { 
  X, 
  Mic, 
  MicOff, 
  Video, 
  VideoOff, 
  PhoneOff, 
  MessageSquare, 
  Share2, 
  ShieldCheck, 
  FileText, 
  Pill, 
  Send,
  Sparkles,
  Heart
} from 'lucide-react';
import { Appointment } from '../../types';

interface VideoConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  appointment: Appointment | null;
  onConsultationCompleted?: (appointmentId: string, doctorNotes: string) => void;
}

export const VideoConsultationModal: React.FC<VideoConsultationModalProps> = ({
  isOpen,
  onClose,
  appointment,
  onConsultationCompleted,
}) => {
  const [micOn, setMicOn] = useState(true);
  const [cameraOn, setCameraOn] = useState(true);
  const [screenShare, setScreenShare] = useState(false);
  const [showChat, setShowChat] = useState(true);
  const [callDuration, setCallDuration] = useState(145); // seconds
  const [chatMessages, setChatMessages] = useState<{ sender: 'doc' | 'user'; text: string; time: string }[]>([
    { sender: 'doc', text: "Hello Alex! I've been reviewing your latest lipid panel and heart rate data. Overall your metabolic baseline is looking strong.", time: '3:31 PM' },
    { sender: 'user', text: "Hi Doctor! Thanks, I noticed my resting HR dropped to 72 bpm after adding the morning walks.", time: '3:32 PM' },
    { sender: 'doc', text: "That's fantastic. Let's aim to maintain 2.5L daily hydration and keep your soluble fiber around 25-30g daily.", time: '3:33 PM' },
  ]);
  const [inputMsg, setInputMsg] = useState('');
  const [doctorNotes, setDoctorNotes] = useState('Patient exhibits good cardiovascular responsiveness. Blood pressure 118/76 mmHg. Recommended continuing daily Zone-2 walking and Ubiquinol CoQ10 100mg.');
  const [prescriptionSent, setPrescriptionSent] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const interval = setInterval(() => {
      setCallDuration(prev => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen || !appointment) return null;

  const formatTimer = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainder = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${remainder.toString().padStart(2, '0')}`;
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMsg.trim()) return;

    setChatMessages(prev => [
      ...prev,
      { sender: 'user', text: inputMsg, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
    ]);
    setInputMsg('');

    // Simulated doctor response
    setTimeout(() => {
      setChatMessages(prev => [
        ...prev,
        { 
          sender: 'doc', 
          text: "Understood! I have updated your digital care plan and sent the electronic prescription directly to your Vitalis Pharmacy cart.", 
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
        }
      ]);
    }, 1200);
  };

  const handleEndCall = () => {
    if (onConsultationCompleted) {
      onConsultationCompleted(appointment.id, doctorNotes);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-5xl h-[88vh] bg-slate-900 rounded-3xl shadow-2xl border border-slate-800 flex flex-col overflow-hidden text-white">
        
        {/* Top Header Bar */}
        <div className="px-5 py-3.5 bg-slate-950/70 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-bold text-sm text-slate-100">{appointment.doctorName}</span>
                <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 rounded-full text-[10px] font-semibold border border-emerald-500/30 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> Encrypted HD Stream
                </span>
              </div>
              <p className="text-[11px] text-slate-400">{appointment.doctorSpecialty} • Stanford Health</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="px-3 py-1 bg-slate-800/80 rounded-full text-xs font-mono text-emerald-300 font-bold border border-slate-700">
              {formatTimer(callDuration)}
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Video Stage Area */}
        <div className="flex-1 flex flex-col lg:flex-row overflow-hidden relative">
          
          {/* Main Video Screen */}
          <div className="flex-1 relative bg-gradient-to-b from-slate-900 to-slate-950 flex items-center justify-center p-4">
            
            {/* Doctor Stream Mockup */}
            <div className="relative w-full h-full max-h-[500px] rounded-2xl overflow-hidden bg-slate-800 border border-slate-700 flex items-center justify-center">
              <img 
                src={appointment.doctorAvatar} 
                alt={appointment.doctorName}
                className="w-full h-full object-cover object-center filter brightness-95"
              />
              
              {/* Doctor Speaking Indicator */}
              <div className="absolute top-4 left-4 flex items-center space-x-2 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-700/60 text-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-semibold text-slate-200">{appointment.doctorName}</span>
                <span className="text-[10px] text-slate-400">Microphone Active</span>
              </div>

              {/* Vitals HUD overlay */}
              <div className="absolute bottom-4 left-4 hidden sm:flex items-center space-x-2 bg-slate-900/85 backdrop-blur-md p-2.5 rounded-xl border border-slate-700/60 text-xs">
                <div className="flex items-center space-x-1.5 text-rose-400 font-semibold px-2 py-1 bg-rose-500/10 rounded-lg">
                  <Heart className="w-3.5 h-3.5 animate-pulse" />
                  <span>72 BPM</span>
                </div>
                <div className="text-slate-300 font-medium px-2 py-1 bg-slate-800 rounded-lg">
                  BP: 118/76 mmHg
                </div>
                <div className="text-emerald-400 font-medium px-2 py-1 bg-emerald-500/10 rounded-lg">
                  SpO2: 99%
                </div>
              </div>

              {/* Patient Self-View PIP */}
              <div className="absolute bottom-4 right-4 w-36 h-28 sm:w-44 sm:h-32 bg-slate-900 rounded-xl overflow-hidden border-2 border-emerald-500/60 shadow-xl">
                {cameraOn ? (
                  <img 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80" 
                    alt="Self View" 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 text-[10px]">
                    <VideoOff className="w-6 h-6 mb-1 text-slate-500" />
                    <span>Camera Off</span>
                  </div>
                )}
                <div className="absolute bottom-1.5 left-1.5 text-[9px] bg-slate-950/80 px-1.5 py-0.5 rounded text-slate-300 font-medium">
                  You (Alex)
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar: In-Call Chat & Doctor Live Clinical Notes */}
          {showChat && (
            <div className="w-full lg:w-80 border-t lg:border-t-0 lg:border-l border-slate-800 bg-slate-950/90 flex flex-col h-64 lg:h-full">
              
              {/* Tabs */}
              <div className="p-3 border-b border-slate-800 flex items-center justify-between text-xs font-semibold text-slate-300">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <MessageSquare className="w-4 h-4" /> Live In-Call Notes & Chat
                </span>
                <span className="text-[10px] text-slate-500">Auto-saved</span>
              </div>

              {/* Chat Feed */}
              <div className="flex-1 overflow-y-auto p-3 space-y-2.5 text-xs">
                {chatMessages.map((msg, idx) => (
                  <div 
                    key={idx} 
                    className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                  >
                    <div className={`p-2.5 rounded-xl max-w-[90%] leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-emerald-600 text-white rounded-br-none'
                        : 'bg-slate-800 text-slate-200 rounded-bl-none border border-slate-700'
                    }`}>
                      {msg.text}
                    </div>
                    <span className="text-[9px] text-slate-500 mt-0.5 px-1">{msg.time}</span>
                  </div>
                ))}
              </div>

              {/* Doctor Notes Box */}
              <div className="p-3 border-t border-slate-800 bg-slate-900/60">
                <div className="flex items-center justify-between text-[11px] font-bold text-slate-300 mb-1">
                  <span className="flex items-center gap-1"><FileText className="w-3 h-3 text-amber-400" /> Care Summary</span>
                  {prescriptionSent ? (
                    <span className="text-[10px] text-emerald-400 font-semibold">Rx Transferred ✓</span>
                  ) : (
                    <button
                      onClick={() => setPrescriptionSent(true)}
                      className="text-[10px] text-emerald-400 hover:text-emerald-300 font-semibold cursor-pointer underline"
                    >
                      + Generate Rx
                    </button>
                  )}
                </div>
                <textarea 
                  value={doctorNotes}
                  onChange={(e) => setDoctorNotes(e.target.value)}
                  rows={2}
                  className="w-full p-2 bg-slate-950 border border-slate-700/80 rounded-lg text-[10px] text-slate-300 focus:outline-none"
                />
              </div>

              {/* Chat Input */}
              <form onSubmit={handleSendMessage} className="p-2.5 border-t border-slate-800 flex items-center space-x-1.5">
                <input 
                  type="text"
                  placeholder="Type a message or ask a question..."
                  value={inputMsg}
                  onChange={(e) => setInputMsg(e.target.value)}
                  className="flex-1 px-3 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                />
                <button
                  type="submit"
                  className="p-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          )}
        </div>

        {/* Bottom Call Controls Bar */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-2 text-xs text-slate-400 hidden sm:flex">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>AI Real-time Clinical Transcription Active</span>
          </div>

          <div className="flex items-center space-x-3 mx-auto sm:mx-0">
            {/* Mic Toggle */}
            <button
              onClick={() => setMicOn(!micOn)}
              className={`p-3 rounded-full transition-all cursor-pointer ${
                micOn ? 'bg-slate-800 text-white hover:bg-slate-700' : 'bg-rose-500 text-white'
              }`}
              title={micOn ? 'Mute Microphone' : 'Unmute Microphone'}
            >
              {micOn ? <Mic className="w-5 h-5" /> : <MicOff className="w-5 h-5" />}
            </button>

            {/* Camera Toggle */}
            <button
              onClick={() => setCameraOn(!cameraOn)}
              className={`p-3 rounded-full transition-all cursor-pointer ${
                cameraOn ? 'bg-slate-800 text-white hover:bg-slate-700' : 'bg-rose-500 text-white'
              }`}
              title={cameraOn ? 'Turn Off Camera' : 'Turn On Camera'}
            >
              {cameraOn ? <Video className="w-5 h-5" /> : <VideoOff className="w-5 h-5" />}
            </button>

            {/* Screen Share */}
            <button
              onClick={() => setScreenShare(!screenShare)}
              className={`p-3 rounded-full transition-all cursor-pointer ${
                screenShare ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
              title="Share Screen / Report"
            >
              <Share2 className="w-5 h-5" />
            </button>

            {/* Chat Drawer Toggle */}
            <button
              onClick={() => setShowChat(!showChat)}
              className={`p-3 rounded-full transition-all cursor-pointer ${
                showChat ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
              title="Toggle In-Call Notes & Chat"
            >
              <MessageSquare className="w-5 h-5" />
            </button>

            {/* End Call Button */}
            <button
              onClick={handleEndCall}
              className="px-5 py-3 bg-rose-600 hover:bg-rose-700 text-white rounded-full font-bold text-xs flex items-center space-x-2 shadow-lg shadow-rose-900/30 transition-all cursor-pointer"
            >
              <PhoneOff className="w-4 h-4" />
              <span>End Consultation</span>
            </button>
          </div>

          <div className="hidden sm:block text-xs text-slate-500 font-mono">
            Room ID: #VTL-994
          </div>
        </div>
      </div>
    </div>
  );
};
