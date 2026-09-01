import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Avatar } from '../../components/Common/Avatar';
import { Button } from '../../components/Common/Button';
import { MessageSquare, Hash, Send, Paperclip, Smile, Users, Search } from 'lucide-react';

export const ChatPage: React.FC = () => {
  const { chatChannels, chatMessages, sendChatMessage, currentUser, users } = useApp();

  const [activeChannelId, setActiveChannelId] = useState<string>(chatChannels[0]?.id || 'ch-1');
  const [inputText, setInputText] = useState('');

  const activeChannel = chatChannels.find(c => c.id === activeChannelId) || chatChannels[0];
  const activeMessages = chatMessages.filter(m => m.channelId === activeChannelId);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    sendChatMessage(activeChannelId, inputText.trim());
    setInputText('');
  };

  return (
    <div className="h-[calc(100vh-8.5rem)] flex bg-app-surface border border-app rounded-2xl overflow-hidden shadow-xs">
      {/* Channels Sidebar */}
      <div className="w-64 border-r border-app bg-sidebar flex flex-col justify-between shrink-0">
        <div className="p-4 border-b border-app font-bold text-xs text-app-primary flex items-center gap-2">
          <MessageSquare className="w-4 h-4 text-blue-400" />
          <span>Team Communications</span>
        </div>

        <div className="flex-1 overflow-y-auto p-3 space-y-4 text-xs">
          {/* Public Channels */}
          <div>
            <span className="px-2 text-[10px] font-bold text-app-muted uppercase tracking-wider block mb-1.5">
              Public Channels
            </span>
            <div className="space-y-0.5">
              {chatChannels.filter(c => c.type === 'channel').map(c => (
                <button
                  key={c.id}
                  onClick={() => setActiveChannelId(c.id)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl transition-colors cursor-pointer ${
                    activeChannelId === c.id
                      ? 'bg-blue-600/15 text-blue-400 font-bold border border-blue-500/20'
                      : 'text-app-secondary hover:bg-app-hover hover:text-app-primary'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Hash className="w-4 h-4 text-app-muted" />
                    <span>{c.name}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Project Rooms */}
          <div>
            <span className="px-2 text-[10px] font-bold text-app-muted uppercase tracking-wider block mb-1.5">
              Project Rooms
            </span>
            <div className="space-y-0.5">
              {chatChannels.filter(c => c.type === 'project').map(c => (
                <button
                  key={c.id}
                  onClick={() => setActiveChannelId(c.id)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl transition-colors cursor-pointer ${
                    activeChannelId === c.id
                      ? 'bg-blue-600/15 text-blue-400 font-bold border border-blue-500/20'
                      : 'text-app-secondary hover:bg-app-hover hover:text-app-primary'
                  }`}
                >
                  <div className="flex items-center gap-2 truncate">
                    <Hash className="w-4 h-4 text-purple-400" />
                    <span className="truncate">{c.name}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Direct Messages */}
          <div>
            <span className="px-2 text-[10px] font-bold text-app-muted uppercase tracking-wider block mb-1.5">
              Direct Messages
            </span>
            <div className="space-y-0.5">
              {users.slice(1, 5).map(u => (
                <div
                  key={u.id}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-app-secondary hover:bg-app-hover hover:text-app-primary cursor-pointer"
                >
                  <Avatar src={u.avatar} name={u.name} size="xs" status={u.status} />
                  <span className="truncate">{u.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Chat Thread Frame */}
      <div className="flex-1 flex flex-col justify-between bg-app-surface">
        {/* Active Channel Header */}
        <div className="h-14 px-5 border-b border-app flex items-center justify-between bg-app-secondary/20">
          <div className="flex items-center gap-2">
            <Hash className="w-4 h-4 text-blue-400" />
            <h2 className="text-sm font-bold text-app-primary">{activeChannel.name}</h2>
            <span className="text-xs text-app-muted border-l border-app pl-2 ml-2">
              {activeChannel.description}
            </span>
          </div>
        </div>

        {/* Chat Messages Feed */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {activeMessages.map(msg => {
            const isMe = msg.senderId === currentUser.id;
            return (
              <div key={msg.id} className={`flex items-start gap-3 text-xs ${isMe ? 'flex-row-reverse' : ''}`}>
                <Avatar src={msg.senderAvatar} name={msg.senderName} size="sm" />
                <div className={`max-w-md space-y-1 ${isMe ? 'items-end text-right' : ''}`}>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-app-primary">{msg.senderName}</span>
                    <span className="text-[10px] text-app-muted">{msg.timestamp}</span>
                  </div>
                  <div
                    className={`p-3.5 rounded-2xl leading-relaxed text-xs shadow-xs ${
                      isMe
                        ? 'bg-blue-600 text-white rounded-tr-none'
                        : 'bg-app-secondary border border-app text-app-primary rounded-tl-none'
                    }`}
                  >
                    {msg.content}
                  </div>
                  {msg.reactions && (
                    <div className="flex gap-1 mt-1">
                      {msg.reactions.map(r => (
                        <span key={r.emoji} className="px-2 py-0.5 rounded-full bg-app-secondary border border-app text-[10px]">
                          {r.emoji} {r.count}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Input Bar */}
        <form onSubmit={handleSend} className="p-4 border-t border-app bg-app-secondary/30 flex items-center gap-3">
          <input
            type="text"
            value={inputText}
            onChange={e => setInputText(e.target.value)}
            placeholder={`Message #${activeChannel.name}...`}
            className="flex-1 px-4 py-2.5 rounded-xl bg-app-secondary border border-app text-xs text-app-primary focus:outline-none focus:border-blue-500"
          />
          <Button type="submit" variant="primary" size="sm" icon={<Send className="w-4 h-4" />}>
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};
