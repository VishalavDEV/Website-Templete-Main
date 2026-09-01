import React, { useEffect, useState, useRef } from 'react';
import { Message, Conversation, MessageService, UserService, User } from '../../services/apiServices';
import { useToast } from '../../components/common/Toast';
import { Send, Search, Plus, MessageSquare, ArrowLeft, Shield } from 'lucide-react';
import Modal from '../../components/common/Modal';

const ChatAppPage: React.FC = () => {
  const { showToast } = useToast();
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [activeConv, setActiveConv] = useState<Conversation | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  // New Chat modal state
  const [newChatModalOpen, setNewChatModalOpen] = useState(false);
  const [allUsers, setAllUsers] = useState<User[]>([]);

  // Inputs
  const [messageText, setMessageText] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const currentUser = JSON.parse(localStorage.getItem('user') || '{}');

  useEffect(() => {
    fetchConversations();
    fetchTeamUsers();
    
    // Setup background conversation poller (every 10s)
    const interval = setInterval(fetchConversations, 10000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (activeConv) {
      fetchMessages(activeConv.conversationId);
      // Auto poll current message thread (every 5s)
      const msgInterval = setInterval(() => {
        fetchMessages(activeConv.conversationId, false);
      }, 5000);
      return () => clearInterval(msgInterval);
    }
  }, [activeConv]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const fetchConversations = async () => {
    try {
      const data = await MessageService.getConversations();
      setConversations(data);
      // Automatically select first conversation if none selected
      if (data.length > 0 && !activeConv) {
        setActiveConv(data[0]);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchTeamUsers = async () => {
    try {
      const data = await UserService.getAll();
      setAllUsers(data.filter((u) => u.username !== currentUser.username));
    } catch (err) {
      console.error(err);
    }
  };

  const fetchMessages = async (cid: string, showLoader = true) => {
    try {
      const data = await MessageService.getMessages(cid);
      setMessages(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!messageText.trim() || !activeConv) return;

    const textToSend = messageText;
    setMessageText('');

    try {
      await MessageService.sendMessage(activeConv.otherUser.username, textToSend);
      // Immediately refresh messages
      fetchMessages(activeConv.conversationId, false);
      fetchConversations();
    } catch (err) {
      showToast('Failed to send message.', 'error');
    }
  };

  const handleStartNewChat = (user: User) => {
    // Generate conversation ID (smaller username first or similar formatting)
    // In our backend, it's min(currentUser.id, receiverUser.id) + "_" + max(currentUser.id, receiverUser.id)
    // We can simulate creating or selecting a conversation by calling sendMessage with empty message or just opening details
    const cid = ""; // backend resolves it on first message send
    
    const mockConv: Conversation = {
      conversationId: cid,
      otherUser: {
        id: user.id || 0,
        username: user.username,
        email: user.email,
        role: user.role,
        profileImage: user.profileImage,
      },
      lastMessageText: '',
      lastMessageTimestamp: new Date().toISOString(),
      unread: false,
    };

    setActiveConv(mockConv);
    setMessages([]);
    setNewChatModalOpen(false);
  };

  // Filter conversations
  const filteredConversations = conversations.filter((c) =>
    c.otherUser.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white rounded-2xl border border-slate-100 card-shadow h-[calc(100vh-140px)] flex overflow-hidden">
      {/* 1. Conversations Sidebar */}
      <div className={`w-full md:w-80 border-r border-slate-200 flex flex-col h-full bg-slate-50/10 ${
        activeConv ? 'hidden md:flex' : 'flex'
      }`}>
        <div className="p-4 border-b border-slate-200 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-extrabold text-slate-800 text-sm">Dashboard Chats</h3>
            <button
              onClick={() => setNewChatModalOpen(true)}
              className="p-1.5 bg-indigo-650 hover:bg-indigo-755 text-white rounded-xl shadow-sm hover:shadow active:scale-95 transition-all"
              title="Start New Conversation"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search chats..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all bg-white"
            />
          </div>
        </div>

        {/* List */}
        <div className="flex-1 overflow-y-auto p-2 space-y-1">
          {loading ? (
            Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="h-12 bg-slate-100/50 animate-pulse rounded-xl" />
            ))
          ) : filteredConversations.length === 0 ? (
            <div className="p-4 text-center text-xs text-slate-400">No conversations active</div>
          ) : (
            filteredConversations.map((c) => {
              const isSelected = activeConv?.otherUser.username === c.otherUser.username;
              return (
                <div
                  key={c.otherUser.username}
                  onClick={() => setActiveConv(c)}
                  className={`p-3 rounded-xl cursor-pointer flex items-center justify-between gap-3 transition-all duration-200 ${
                    isSelected
                      ? 'bg-indigo-50/70 text-indigo-700 font-bold'
                      : 'hover:bg-slate-50/75 text-slate-550'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <img
                      src={c.otherUser.profileImage || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150'}
                      alt="avatar"
                      className="h-10 w-10 rounded-xl object-cover ring-2 ring-slate-100"
                    />
                    <div className="min-w-0 flex flex-col gap-0.5">
                      <span className={`text-xs font-bold ${isSelected ? 'text-indigo-850' : 'text-slate-800'}`}>
                        {c.otherUser.username}
                      </span>
                      <span className="text-[10px] text-slate-400 truncate max-w-[120px] font-medium">
                        {c.lastMessageText || 'No messages yet'}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
                    <span className="text-[9px] text-slate-450 font-bold">
                      {new Date(c.lastMessageTimestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                    {c.unread && (
                      <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* 2. Active Chat Window */}
      <div className={`flex-1 flex flex-col h-full ${
        !activeConv ? 'hidden md:flex' : 'flex'
      }`}>
        {activeConv ? (
          <>
            {/* Top Bar info */}
            <div className="p-4 border-b border-slate-200 bg-slate-50/10 flex items-center gap-3.5 h-16 flex-shrink-0 justify-between">
              <div className="flex items-center gap-3">
                {/* Back button on mobile */}
                <button
                  onClick={() => setActiveConv(null)}
                  className="md:hidden p-1.5 hover:bg-slate-100 rounded-lg text-slate-500"
                >
                  <ArrowLeft className="h-4.5 w-4.5" />
                </button>
                <img
                  src={activeConv.otherUser.profileImage || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150'}
                  alt="Avatar"
                  className="h-10 w-10 rounded-xl object-cover ring-2 ring-slate-100"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-slate-800">{activeConv.otherUser.username}</span>
                  <span className="text-[10px] text-slate-400 font-semibold flex items-center gap-1">
                    <Shield className="h-3 w-3 text-indigo-400" />
                    {activeConv.otherUser.role.replace('ROLE_', '').toLowerCase()}
                  </span>
                </div>
              </div>
            </div>

            {/* Chat Messages Log */}
            <div className="flex-1 overflow-y-auto p-5 bg-slate-50/20 space-y-4">
              {messages.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center text-slate-400 gap-2 p-6">
                  <MessageSquare className="h-8 w-8 text-slate-300 animate-bounce" />
                  <p className="text-xs font-bold">Say hello to {activeConv.otherUser.username}!</p>
                  <p className="text-[10px] max-w-xs leading-relaxed">Send a message below to start your internal administrative discussion thread.</p>
                </div>
              ) : (
                messages.map((msg) => {
                  const isOwn = msg.sender.username === currentUser.username;
                  return (
                    <div
                      key={msg.id}
                      className={`flex ${isOwn ? 'justify-end' : 'justify-start'} animate-fade-in`}
                    >
                      <div
                        className={`max-w-xs sm:max-w-md px-4 py-2.5 rounded-2xl text-xs font-semibold leading-relaxed shadow-sm ${
                          isOwn
                            ? 'bg-indigo-600 text-white rounded-tr-none'
                            : 'bg-white text-slate-800 border border-slate-100 rounded-tl-none'
                        }`}
                      >
                        <p>{msg.messageText}</p>
                        <span className={`block text-[9px] mt-1 text-right font-medium ${
                          isOwn ? 'text-indigo-250' : 'text-slate-400'
                        }`}>
                          {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>
                    </div>
                  );
                })
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Message input */}
            <form onSubmit={handleSendMessage} className="p-4 border-t border-slate-200 bg-white flex items-center gap-3">
              <input
                type="text"
                placeholder="Type your message here..."
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                className="flex-1 px-4 py-2.5 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 bg-slate-50/50"
              />
              <button
                type="submit"
                disabled={!messageText.trim()}
                className="p-2.5 bg-indigo-650 hover:bg-indigo-755 disabled:opacity-40 text-white rounded-xl active:scale-95 transition-all shadow-md shadow-indigo-100 hover:shadow-indigo-200 cursor-pointer flex-shrink-0"
              >
                <Send className="h-4.5 w-4.5" />
              </button>
            </form>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-center text-slate-450 gap-2 p-12 bg-slate-50/5">
            <MessageSquare className="h-10 w-10 text-slate-300 animate-pulse" />
            <h3 className="text-sm font-bold text-slate-800">No active conversation</h3>
            <p className="text-xs text-slate-400 max-w-xs leading-relaxed">
              Select an existing thread from the left menu panel or create a new conversation to start chatting.
            </p>
          </div>
        )}
      </div>

      {/* Start New Chat Modal */}
      <Modal
        isOpen={newChatModalOpen}
        onClose={() => setNewChatModalOpen(false)}
        title="Start New Discussion"
      >
        <div className="max-h-64 overflow-y-auto space-y-2 p-1">
          {allUsers.length === 0 ? (
            <p className="text-xs text-slate-400 text-center py-6">No other staff members registered</p>
          ) : (
            allUsers.map((u) => (
              <div
                key={u.username}
                onClick={() => handleStartNewChat(u)}
                className="p-3 bg-slate-50 hover:bg-indigo-50 hover:text-indigo-600 rounded-xl cursor-pointer flex items-center gap-3 transition-all font-semibold text-xs"
              >
                <img
                  src={u.profileImage || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150'}
                  alt="Avatar"
                  className="h-9 w-9 rounded-xl object-cover ring-2 ring-white"
                />
                <div className="flex flex-col">
                  <span className="text-slate-850 font-bold">{u.username}</span>
                  <span className="text-slate-400 text-[10px] capitalize">{u.role.replace('ROLE_', '').toLowerCase()}</span>
                </div>
              </div>
            ))
          )}
        </div>
      </Modal>
    </div>
  );
};

export default ChatAppPage;
