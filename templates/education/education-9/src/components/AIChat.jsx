import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MOCK_RESPONSES = [
  "That's a great question! Did you know active recall improves memory retention by up to 150%? Try summarizing what you learned today.",
  "To build expertise in Full Stack development, we recommend combining React frontend structures with our Spring Boot Java APIs.",
  "For UI/UX design, focus on visual hierarchy, typography contrast, and keeping user cognitive load low.",
  "Consistency is key! Studying just 15 minutes a day can build a strong neural habit. Your 12-day streak is proof!",
  "Animations are not just for aesthetics—they guide user attention. Framer Motion and GSAP are perfect for this!"
];

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: '1', sender: 'ai', text: 'Hello! I am your Learning Assistant. Ask me anything about our courses, study tips, or streak systems!', time: 'Just now' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(scrollToBottom, 100);
    }
  }, [messages, isOpen]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMsg = {
      id: Date.now().toString(),
      sender: 'user',
      text: inputValue,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    const query = inputValue.toLowerCase();
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      let aiText = "";
      if (query.includes('react') || query.includes('animation') || query.includes('framer')) {
        aiText = "Framer Motion is a production-ready motion library for React. You can animate layouts with simple props like `initial`, `animate`, and `exit`! Check out our React Masterclass.";
      } else if (query.includes('streak') || query.includes('fire')) {
        aiText = "You have a 🔥 12-day learning streak! You can keep it going by scoring at least 80% on our interactive Quiz assessments.";
      } else if (query.includes('quiz') || query.includes('challenge')) {
        aiText = "Our assessments are gamified! Once completed, you'll earn points, badges (like Explorer or Master), and unlock certificates.";
      } else if (query.includes('math') || query.includes('algebra') || query.includes('calculus')) {
        aiText = "Linear algebra is the mathematical backbone of neural networks. Check out 'Linear Algebra in Motion' to visualize transformations.";
      } else if (query.includes('help') || query.includes('how')) {
        aiText = "I can guide you through the curriculum, give you hints for quizzes, or suggest courses based on your skill levels.";
      } else {
        aiText = MOCK_RESPONSES[Math.floor(Math.random() * MOCK_RESPONSES.length)];
      }

      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: aiText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 pointer-events-auto">
      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-gradient-to-tr from-sky-400 to-cyan-400 text-white flex items-center justify-center shadow-lg shadow-sky-200/50 relative overflow-hidden"
      >
        <span className="absolute inset-0 bg-white/20 hover:translate-y-full transition-transform duration-300" />
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <MessageSquare size={24} />
              <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-red-400 border-2 border-white animate-pulse" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="absolute bottom-16 right-0 w-80 sm:w-96 h-[480px] rounded-3xl border border-sky-100 bg-white/90 backdrop-blur-xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-sky-400 to-cyan-400 text-white flex items-center justify-between shadow-md">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-white/25 flex items-center justify-center">
                  <Bot size={20} className="text-white animate-bounce" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm leading-none flex items-center gap-1">
                    Motion AI Assistant <Sparkles size={12} className="text-yellow-200" />
                  </h3>
                  <span className="text-[10px] opacity-85">Online Tutor</span>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full hover:bg-white/10 text-white transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            {/* Message Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 font-outfit">
              {messages.map((msg) => {
                const isAI = msg.sender === 'ai';
                return (
                  <div 
                    key={msg.id}
                    className={`flex items-start gap-2 ${isAI ? 'justify-start' : 'justify-end'}`}
                  >
                    {isAI && (
                      <div className="w-7 h-7 rounded-full bg-sky-50 border border-sky-100 flex items-center justify-center flex-shrink-0 mt-1 shadow-sm">
                        <Bot size={14} className="text-sky-500" />
                      </div>
                    )}
                    <div className="max-w-[75%]">
                      <div 
                        className={`p-3 rounded-2xl text-sm leading-relaxed ${
                          isAI 
                            ? 'bg-sky-50/80 text-sky-900 rounded-tl-none border border-sky-100/50' 
                            : 'bg-gradient-to-r from-sky-400 to-cyan-400 text-white rounded-tr-none shadow-sm shadow-sky-200'
                        }`}
                      >
                        {msg.text}
                      </div>
                      <span className="text-[9px] text-gray-400 block mt-1 px-1">
                        {msg.time}
                      </span>
                    </div>
                    {!isAI && (
                      <div className="w-7 h-7 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0 mt-1 shadow-sm">
                        <User size={14} className="text-sky-600" />
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex items-start gap-2 justify-start">
                  <div className="w-7 h-7 rounded-full bg-sky-50 border border-sky-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <Bot size={14} className="text-sky-500" />
                  </div>
                  <div className="bg-sky-50/80 p-3 rounded-2xl rounded-tl-none border border-sky-100/50 flex gap-1 items-center mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <form onSubmit={handleSend} className="p-3 border-t border-sky-50 bg-white/50 flex items-center gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask me a question..."
                className="flex-1 px-4 py-2 text-sm rounded-full border border-sky-100 bg-white focus:outline-none focus:ring-2 focus:ring-sky-300 font-outfit"
              />
              <button
                type="submit"
                className="p-2 rounded-full bg-gradient-to-r from-sky-400 to-cyan-400 text-white shadow-md shadow-sky-100 hover:scale-105 active:scale-95 transition-all"
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
