import React, { useState, useEffect, useRef } from 'react';
import { 
  Video, 
  VideoOff, 
  Mic, 
  MicOff, 
  PhoneOff, 
  MessageSquare, 
  FileText, 
  Heart, 
  Activity, 
  ShieldCheck, 
  Share2, 
  Maximize2, 
  Minimize2,
  Sparkles,
  Send,
  Download,
  CheckCircle2,
  Volume2,
  Camera,
  Wifi
} from 'lucide-react';
import { IncomingCall, Patient } from '../types';

interface VideoConsultationModalProps {
  call: IncomingCall;
  patient: Patient;
  onClose: () => void;
}

export const VideoConsultationModal: React.FC<VideoConsultationModalProps> = ({
  call,
  patient,
  onClose,
}) => {
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [activeTab, setActiveTab] = useState<'chat' | 'notes' | 'vitals'>('chat');
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [callEnded, setCallEnded] = useState(false);
  const [useRealCamera, setUseRealCamera] = useState(false);
  const [cameraError, setCameraError] = useState<string | null>(null);

  // Chat state
  const [messages, setMessages] = useState<Array<{ sender: string; text: string; time: string; isDoctor: boolean }>>([
    {
      sender: 'Dr. Sarah Jenkins',
      text: 'Good morning Eleanor! I have your latest 24-hr blood pressure telemetry on screen. How are you feeling today?',
      time: '10:30 AM',
      isDoctor: true,
    },
    {
      sender: 'Eleanor Vance',
      text: 'Hello Dr. Jenkins! Feeling much better after adjusting the morning dosage.',
      time: '10:31 AM',
      isDoctor: false,
    },
    {
      sender: 'Dr. Sarah Jenkins',
      text: 'Wonderful! Your resting BP of 118/76 mmHg is right in our optimal target range. Let’s review your Atorvastatin schedule.',
      time: '10:32 AM',
      isDoctor: true,
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  // Timer
  useEffect(() => {
    if (callEnded) return;
    const interval = setInterval(() => {
      setElapsedSeconds(prev => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [callEnded]);

  // Format elapsed time MM:SS
  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainder = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${remainder.toString().padStart(2, '0')}`;
  };

  // Real camera setup
  const toggleRealCamera = async () => {
    if (useRealCamera) {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
        streamRef.current = null;
      }
      setUseRealCamera(false);
    } else {
      try {
        setCameraError(null);
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
        setUseRealCamera(true);
      } catch (err) {
        console.warn('Camera access not granted or unavailable:', err);
        setCameraError('Camera access not available in this frame. Simulated HD patient view active.');
        setUseRealCamera(false);
      }
    }
  };

  // Clean up camera on unmount
  useEffect(() => {
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMsg = {
      sender: patient.name,
      text: inputMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isDoctor: false,
    };

    setMessages(prev => [...prev, userMsg]);
    const currentInput = inputMessage;
    setInputMessage('');

    // Simulated doctor response
    setTimeout(() => {
      let doctorReply = "That sounds great, Eleanor. I'll make a note in your electronic health record.";
      if (currentInput.toLowerCase().includes('refill') || currentInput.toLowerCase().includes('prescription')) {
        doctorReply = "I have approved a 90-day automatic refill for your Atorvastatin 20mg. Your pharmacy will receive the order shortly.";
      } else if (currentInput.toLowerCase().includes('pressure') || currentInput.toLowerCase().includes('heart')) {
        doctorReply = "Your resting heart rate of 72 bpm and BP readings are remarkably stable. Keep up the morning hydration!";
      }

      setMessages(prev => [
        ...prev,
        {
          sender: 'Dr. Sarah Jenkins',
          text: doctorReply,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          isDoctor: true,
        }
      ]);
    }, 1200);
  };

  return (
    <div 
      id="telehealth-video-call-modal"
      className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6"
    >
      <div className="bg-slate-900 text-white w-full max-w-6xl h-[90vh] max-h-[820px] rounded-3xl overflow-hidden shadow-2xl border border-slate-800 flex flex-col">
        {/* Top Call Navigation Bar */}
        <div className="bg-slate-900/90 border-b border-slate-800 px-4 sm:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center">
              <Video className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-sm sm:text-base text-white">{call.doctorName}</h3>
                <span className="bg-teal-500/20 text-teal-300 text-[10px] font-bold px-2 py-0.5 rounded-full border border-teal-500/30 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-ping" />
                  HD Encrypted
                </span>
              </div>
              <p className="text-[11px] text-slate-400">{call.specialty} • {call.clinic}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-700 text-xs font-mono text-teal-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{formatTime(elapsedSeconds)}</span>
            </div>
            <div className="hidden sm:flex items-center gap-1 text-[11px] text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
              <span>HIPAA Compliant Room: {call.roomCode}</span>
            </div>
          </div>
        </div>

        {/* Center Main Stage */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-4 p-4 overflow-hidden">
          {/* Doctor Video Canvas (Main Stage) */}
          <div className="lg:col-span-8 flex flex-col h-full relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-800/80">
            {!callEnded ? (
              <div className="relative w-full h-full flex items-center justify-center bg-radial from-slate-900 to-slate-950">
                {/* Doctor Simulated Stream Visual */}
                <div className="relative w-full h-full flex flex-col items-center justify-center p-4">
                  <img
                    src={call.doctorAvatar}
                    alt={call.doctorName}
                    className="w-32 h-32 sm:w-44 sm:h-44 rounded-full object-cover ring-4 ring-teal-500/40 shadow-2xl animate-pulse"
                  />
                  
                  {/* Doctor Speaking audio waveform simulation */}
                  <div className="mt-4 flex items-center gap-1.5 bg-slate-900/80 backdrop-blur-md px-4 py-2 rounded-full border border-teal-500/30">
                    <Volume2 className="w-4 h-4 text-teal-400 animate-bounce" />
                    <span className="text-xs font-semibold text-teal-200">Dr. Jenkins speaking...</span>
                    <div className="flex items-center gap-1 ml-2">
                      <span className="w-1 h-3 bg-teal-400 rounded-full animate-[pulse_1s_infinite]" />
                      <span className="w-1 h-5 bg-teal-300 rounded-full animate-[pulse_0.7s_infinite]" />
                      <span className="w-1 h-2 bg-teal-500 rounded-full animate-[pulse_1.2s_infinite]" />
                      <span className="w-1 h-4 bg-teal-400 rounded-full animate-[pulse_0.9s_infinite]" />
                    </div>
                  </div>

                  {/* Real-time speech caption pill */}
                  <div className="absolute bottom-16 sm:bottom-20 left-4 right-4 sm:left-12 sm:right-12 bg-slate-900/90 backdrop-blur-md border border-slate-700/80 text-center p-3 rounded-2xl shadow-xl">
                    <p className="text-xs sm:text-sm text-slate-200 font-medium">
                      "Eleanor, your blood pressure records of 118/76 are looking excellent. Let's keep the morning Atorvastatin 20mg as planned."
                    </p>
                  </div>
                </div>

                {/* Patient Picture-in-Picture Self Preview */}
                <div className="absolute top-4 right-4 w-32 sm:w-44 aspect-video rounded-xl bg-slate-800 border-2 border-teal-400/60 overflow-hidden shadow-2xl z-20 group">
                  {useRealCamera ? (
                    <video
                      ref={videoRef}
                      autoPlay
                      playsInline
                      muted
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full relative">
                      <img
                        src={patient.avatarUrl}
                        alt={patient.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-1.5">
                        <p className="text-[10px] font-bold text-white truncate">{patient.name} (You)</p>
                      </div>
                    </div>
                  )}

                  {/* Toggle camera source overlay on hover */}
                  <button
                    onClick={toggleRealCamera}
                    title="Toggle Live Webcam / Simulated Feed"
                    className="absolute top-1 right-1 p-1 bg-black/60 hover:bg-teal-600 rounded-md text-white opacity-0 group-hover:opacity-100 transition-opacity text-[9px] flex items-center gap-0.5"
                  >
                    <Camera className="w-2.5 h-2.5" />
                  </button>
                </div>

                {/* Patient Vitals Overlay HUD on bottom left */}
                <div className="absolute top-4 left-4 flex flex-col gap-2 z-20">
                  <div className="bg-slate-900/80 backdrop-blur-md border border-slate-700/80 px-3 py-1.5 rounded-xl flex items-center gap-2">
                    <Heart className="w-3.5 h-3.5 text-rose-400 animate-pulse" />
                    <div className="text-[11px]">
                      <span className="text-slate-400">Heart Rate: </span>
                      <strong className="text-white font-mono">72 bpm</strong>
                    </div>
                  </div>
                  <div className="bg-slate-900/80 backdrop-blur-md border border-slate-700/80 px-3 py-1.5 rounded-xl flex items-center gap-2">
                    <Activity className="w-3.5 h-3.5 text-teal-400" />
                    <div className="text-[11px]">
                      <span className="text-slate-400">Telemetry BP: </span>
                      <strong className="text-white font-mono">118/76</strong>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-slate-900">
                <div className="w-16 h-16 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center mb-4 ring-8 ring-teal-500/10">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-white">Consultation Completed</h4>
                <p className="text-xs text-slate-400 max-w-sm mt-1">
                  Session with {call.doctorName} ended. Duration: {formatTime(elapsedSeconds)}.
                </p>
                <div className="mt-6 p-4 bg-slate-800/80 rounded-2xl border border-slate-700 text-left w-full max-w-md space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Summary:</span>
                    <span className="text-teal-300 font-semibold">Prescription renewed</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Next Scheduled Visit:</span>
                    <span className="text-white font-semibold">Dec 1, 2026</span>
                  </div>
                </div>
                <div className="mt-6 flex gap-3">
                  <button
                    onClick={onClose}
                    className="px-6 py-2.5 bg-teal-600 hover:bg-teal-700 font-bold rounded-xl text-xs transition-colors cursor-pointer"
                  >
                    Return to Portal
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Sidebar: Chat / Clinical Notes / Vitals HUD */}
          <div className="lg:col-span-4 flex flex-col h-full bg-slate-950/60 rounded-2xl border border-slate-800 overflow-hidden">
            {/* Tabs Header */}
            <div className="flex border-b border-slate-800 bg-slate-900/50 p-1">
              <button
                onClick={() => setActiveTab('chat')}
                className={`flex-1 py-2 text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  activeTab === 'chat' 
                    ? 'bg-teal-500 text-white shadow-xs' 
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                <MessageSquare className="w-3.5 h-3.5" />
                Live Chat
              </button>
              <button
                onClick={() => setActiveTab('notes')}
                className={`flex-1 py-2 text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  activeTab === 'notes' 
                    ? 'bg-teal-500 text-white shadow-xs' 
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                Doctor Notes
              </button>
            </div>

            {/* Tab Content */}
            <div className="flex-1 p-3 overflow-y-auto">
              {activeTab === 'chat' && (
                <div className="flex flex-col h-full justify-between">
                  <div className="space-y-2.5 overflow-y-auto pr-1 max-h-[340px]">
                    {messages.map((msg, idx) => (
                      <div
                        key={idx}
                        className={`flex flex-col ${msg.isDoctor ? 'items-start' : 'items-end'}`}
                      >
                        <span className="text-[10px] text-slate-400 mb-0.5 px-1">{msg.sender} • {msg.time}</span>
                        <div
                          className={`p-2.5 rounded-2xl text-xs max-w-[85%] leading-relaxed ${
                            msg.isDoctor
                              ? 'bg-slate-800 text-slate-100 rounded-tl-xs border border-slate-700'
                              : 'bg-teal-600 text-white rounded-tr-xs shadow-xs'
                          }`}
                        >
                          {msg.text}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Input Form */}
                  <form onSubmit={handleSendMessage} className="mt-3 flex gap-2 pt-2 border-t border-slate-800">
                    <input
                      type="text"
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      placeholder="Type message to Dr. Jenkins..."
                      className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-500"
                    />
                    <button
                      type="submit"
                      className="p-2 bg-teal-500 hover:bg-teal-600 text-white rounded-xl text-xs transition-colors cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </form>
                </div>
              )}

              {activeTab === 'notes' && (
                <div className="space-y-3 text-xs">
                  <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-teal-300">Clinical Assessment</span>
                      <span className="text-[10px] text-slate-400">Dr. Sarah Jenkins</span>
                    </div>
                    <p className="text-slate-300 leading-relaxed text-[11px]">
                      Patient demonstrates good medication adherence. Systolic and diastolic BP remain well within target (&lt;120/80 mmHg). No orthostatic dizziness noted.
                    </p>
                  </div>

                  <div className="p-3 bg-teal-950/40 rounded-xl border border-teal-900/50 space-y-1.5">
                    <span className="font-bold text-teal-300">Prescription Refill Order</span>
                    <ul className="list-disc list-inside text-slate-300 text-[11px] space-y-1">
                      <li>Atorvastatin 20mg oral tablet - 90 day supply renewed</li>
                      <li>Metformin 500mg - Continue twice daily with meals</li>
                    </ul>
                  </div>

                  <button
                    onClick={() => alert("Summary and electronic prescription PDF downloaded to patient file.")}
                    className="w-full py-2 bg-slate-800 hover:bg-slate-700 text-teal-300 font-semibold rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer border border-slate-700"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Download Signed After-Care PDF
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Control Bar */}
        <div className="bg-slate-900 border-t border-slate-800 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMuted(!isMuted)}
              id="call-mute-toggle-btn"
              className={`p-3 rounded-2xl transition-all cursor-pointer ${
                isMuted 
                  ? 'bg-rose-500/20 text-rose-400 border border-rose-500/40' 
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
              }`}
              title={isMuted ? "Unmute Mic" : "Mute Mic"}
            >
              {isMuted ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
            </button>

            <button
              onClick={() => setIsVideoOff(!isVideoOff)}
              id="call-video-toggle-btn"
              className={`p-3 rounded-2xl transition-all cursor-pointer ${
                isVideoOff 
                  ? 'bg-rose-500/20 text-rose-400 border border-rose-500/40' 
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
              }`}
              title={isVideoOff ? "Turn Video On" : "Turn Video Off"}
            >
              {isVideoOff ? <VideoOff className="w-5 h-5" /> : <Video className="w-5 h-5" />}
            </button>

            <button
              onClick={toggleRealCamera}
              className={`hidden sm:flex items-center gap-1.5 px-3 py-2.5 rounded-2xl border text-xs font-semibold cursor-pointer transition-all ${
                useRealCamera 
                  ? 'bg-teal-500/20 border-teal-500/40 text-teal-300' 
                  : 'bg-slate-800 hover:bg-slate-700 border-slate-700 text-slate-300'
              }`}
            >
              <Camera className="w-4 h-4 text-teal-400" />
              <span>{useRealCamera ? 'Live Webcam Active' : 'Switch to Webcam'}</span>
            </button>
          </div>

          {/* End Call Button */}
          <div className="flex items-center gap-3">
            {!callEnded ? (
              <button
                onClick={() => setCallEnded(true)}
                id="end-call-btn"
                className="px-6 py-3 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-2xl text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-rose-600/30 transition-all active:scale-98 cursor-pointer"
              >
                <PhoneOff className="w-4 h-4" />
                <span>End Consultation</span>
              </button>
            ) : (
              <button
                onClick={onClose}
                className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-2xl text-xs sm:text-sm transition-all cursor-pointer"
              >
                Close Window
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
