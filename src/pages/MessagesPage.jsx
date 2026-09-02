import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Send,
  Paperclip,
  Smile,
  Search,
  MoreVertical,
  Phone,
  Video,
  CheckCheck,
  ShieldCheck
} from 'lucide-react';

import SearchBar from '../components/common/SearchBar';
import Breadcrumb from '../components/common/Breadcrumb';
import { useApp } from '../context/AppContext';

export default function MessagesPage() {
  const { conversations, sendMessage, addToast } = useApp();
  const [activeConvId, setActiveConvId] = useState(conversations[0]?.id || 'CONV-1');
  const [inputMessage, setInputMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const activeConv = conversations.find(c => c.id === activeConvId) || conversations[0];

  const filteredConversations = conversations.filter(c =>
    c.user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.lastMessage.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;
    sendMessage(activeConvId, inputMessage);
    setInputMessage('');
  };

  const handleAttachment = () => {
    addToast('File picker simulated — image attachment ready', 'info');
  };

  const handleEmoji = () => {
    setInputMessage(prev => prev + ' 👍 ');
  };

  return (
    <div className="space-y-6">
      <Breadcrumb />

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Internal Communications & Support Chat
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Real-time messaging between administrators, engineering leads, and support desks
          </p>
        </div>
      </div>

      {/* CHAT CONTAINER */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[620px]">
        {/* LEFT PANEL: CONVERSATION LIST (4 Cols) */}
        <div className="lg:col-span-4 border-r border-slate-200 dark:border-slate-800 flex flex-col bg-slate-50/50 dark:bg-slate-900/50">
          <div className="p-4 border-b border-slate-200 dark:border-slate-800">
            <SearchBar
              value={searchTerm}
              onChange={setSearchTerm}
              placeholder="Search conversations..."
              className="w-full"
            />
          </div>

          <div className="flex-1 overflow-y-auto divide-y divide-slate-100 dark:divide-slate-800/60">
            {filteredConversations.map((conv) => {
              const isActive = conv.id === activeConvId;

              return (
                <div
                  key={conv.id}
                  onClick={() => setActiveConvId(conv.id)}
                  className={`p-4 flex items-start gap-3 cursor-pointer transition-colors relative ${
                    isActive
                      ? 'bg-white dark:bg-slate-800/90 border-l-4 border-brand-500 shadow-sm'
                      : 'hover:bg-slate-100/60 dark:hover:bg-slate-800/40'
                  }`}
                >
                  <div className="relative shrink-0">
                    <img
                      src={conv.user.avatar}
                      alt={conv.user.name}
                      className="w-11 h-11 rounded-full object-cover ring-2 ring-slate-200 dark:ring-slate-700"
                    />
                    {conv.user.online && (
                      <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white dark:border-slate-900 rounded-full" />
                    )}
                  </div>

                  <div className="flex-1 overflow-hidden">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate">
                        {conv.user.name}
                      </h4>
                      <span className="text-[10px] text-slate-400 shrink-0 ml-1">
                        {conv.timestamp}
                      </span>
                    </div>

                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">
                      {conv.lastMessage}
                    </p>
                  </div>

                  {conv.unread > 0 && (
                    <span className="px-2 py-0.5 text-[10px] font-bold bg-brand-500 text-white rounded-full shrink-0">
                      {conv.unread}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT PANEL: CHAT WINDOW (8 Cols) */}
        {activeConv ? (
          <div className="lg:col-span-8 flex flex-col h-full bg-white dark:bg-slate-900">
            {/* Chat Header */}
            <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50/30 dark:bg-slate-900/30">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img
                    src={activeConv.user.avatar}
                    alt={activeConv.user.name}
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-brand-500/20"
                  />
                  {activeConv.user.online && (
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full ring-2 ring-white dark:ring-slate-900" />
                  )}
                </div>

                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                      {activeConv.user.name}
                    </h3>
                    <ShieldCheck className="w-3.5 h-3.5 text-brand-500" />
                  </div>
                  <p className="text-xs text-slate-400">
                    {activeConv.user.role} • {activeConv.user.online ? 'Online now' : 'Offline'}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => addToast(`Calling ${activeConv.user.name}...`, 'info')}
                  className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                </button>
                <button
                  onClick={() => addToast(`Starting video session with ${activeConv.user.name}...`, 'info')}
                  className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  <Video className="w-4 h-4" />
                </button>
                <button className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Chat Messages Body */}
            <div className="flex-1 p-6 overflow-y-auto space-y-4 max-h-[460px] bg-slate-50/20 dark:bg-slate-950/20">
              {activeConv.messages.map((m) => {
                const isMe = m.sender === 'me';

                return (
                  <div
                    key={m.id}
                    className={`flex flex-col ${isMe ? 'items-end' : 'items-start'}`}
                  >
                    <div
                      className={`max-w-md px-4 py-3 rounded-2xl text-xs sm:text-sm shadow-sm ${
                        isMe
                          ? 'bg-brand-600 text-white rounded-br-none'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-bl-none border border-slate-200/60 dark:border-slate-700/60'
                      }`}
                    >
                      <p className="leading-relaxed">{m.text}</p>
                    </div>
                    <div className="flex items-center gap-1 mt-1 text-[10px] text-slate-400 px-1">
                      <span>{m.timestamp}</span>
                      {isMe && <CheckCheck className="w-3 h-3 text-brand-500" />}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Message Input Footer */}
            <form onSubmit={handleSend} className="p-4 border-t border-slate-200 dark:border-slate-800 flex items-center gap-3">
              <button
                type="button"
                onClick={handleAttachment}
                className="p-2.5 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                title="Attach file"
              >
                <Paperclip className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={handleEmoji}
                className="p-2.5 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                title="Add reaction"
              >
                <Smile className="w-4 h-4" />
              </button>

              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder={`Type a message to ${activeConv.user.name}...`}
                className="flex-1 px-4 py-2.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs sm:text-sm text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500"
              />

              <button
                type="submit"
                disabled={!inputMessage.trim()}
                className="p-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 disabled:opacity-40 text-white font-semibold shadow-md shadow-brand-500/20 transition-all shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        ) : (
          <div className="lg:col-span-8 flex items-center justify-center p-8 text-slate-400 text-sm">
            Select a conversation to start messaging.
          </div>
        )}
      </div>
    </div>
  );
}
