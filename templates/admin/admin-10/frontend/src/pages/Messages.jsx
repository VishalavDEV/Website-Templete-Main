import React, { useEffect, useState, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Send,
  Search,
  MessageCircle,
  MoreVertical,
  Check,
  CheckCheck,
  AlertCircle
} from 'lucide-react';
import api from '../utils/api';

export default function Messages({ triggerUpdateBadges }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryChatId = searchParams.get('chatId');

  const [conversations, setConversations] = useState([]);
  const [activeChatId, setActiveChatId] = useState(queryChatId || '');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [messagesLoading, setMessagesLoading] = useState(false);
  const [error, setError] = useState(null);

  // Search filter
  const [searchQuery, setSearchQuery] = useState('');
  
  // Message reply content
  const [replyText, setReplyText] = useState('');

  const chatBottomRef = useRef(null);

  // Fetch conversations list
  useEffect(() => {
    fetchConversations();
  }, []);

  // Sync activeChatId with URL query param
  useEffect(() => {
    if (queryChatId) {
      setActiveChatId(queryChatId);
    }
  }, [queryChatId]);

  // Load messages when activeChatId changes
  useEffect(() => {
    if (activeChatId) {
      fetchMessages(activeChatId);
      // Mark as read in backend
      markChatRead(activeChatId);
    }
  }, [activeChatId]);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    if (chatBottomRef.current) {
      chatBottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const fetchConversations = async () => {
    try {
      setLoading(true);
      const res = await api.get('/messages/conversations');
      setConversations(res.data);
      if (res.data.length > 0 && !activeChatId) {
        setActiveChatId(res.data[0].chatId);
      }
      setError(null);
    } catch (err) {
      console.error(err);
      setError('Failed to load conversations.');
    } finally {
      setLoading(false);
    }
  };

  const fetchMessages = async (chatId) => {
    try {
      setMessagesLoading(true);
      const res = await api.get(`/messages/chat/${chatId}`);
      setMessages(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setMessagesLoading(false);
    }
  };

  const markChatRead = async (chatId) => {
    try {
      await api.put(`/messages/chat/${chatId}/read`);
      // Update local unread counts
      setConversations(prev => prev.map(c => c.chatId === chatId ? { ...c, unreadCount: 0 } : c));
      if (triggerUpdateBadges) triggerUpdateBadges();
    } catch (err) {
      console.error(err);
    }
  };

  // Send message submit
  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!replyText.trim() || !activeChatId) return;

    const currentActiveChat = conversations.find(c => c.chatId === activeChatId);
    const senderName = "Admin";
    const avatar = "A";

    const payload = {
      senderName,
      avatar,
      content: replyText,
      chatId: activeChatId,
      isAdmin: true,
      read: true
    };

    try {
      const res = await api.post('/messages', payload);
      // Append to active message thread
      setMessages(prev => [...prev, res.data]);
      
      // Update last message in conversation list
      setConversations(prev => prev.map(c => c.chatId === activeChatId ? {
        ...c,
        lastMessage: res.data.content,
        timestamp: res.data.timestamp
      } : c));

      setReplyText('');
    } catch (err) {
      console.error('Failed to dispatch message:', err);
    }
  };

  // Filter conversations based on search query
  const filteredConversations = conversations.filter(c => 
    c.senderName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const activeChat = conversations.find(c => c.chatId === activeChatId);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      style={{
        display: 'grid',
        gridTemplateColumns: '320px 1fr',
        backgroundColor: 'var(--bg-card)',
        border: '1.5px solid var(--border-color)',
        borderRadius: 'var(--border-radius-lg)',
        boxShadow: 'var(--shadow-md)',
        height: 'calc(100vh - 170px)',
        overflow: 'hidden',
      }}
      className="messages-split-inbox"
    >
      {/* Left Pane: Conversations list */}
      <div style={{ borderRight: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', height: '100%' }}>
        {/* Search */}
        <div style={{ padding: '16px', borderBottom: '1px solid var(--border-color)' }}>
          <div style={{ position: 'relative' }}>
            <Search size={16} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <input
              type="text"
              placeholder="Search chat index..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ paddingLeft: '32px', height: '36px', fontSize: '0.82rem' }}
              className="form-input"
            />
          </div>
        </div>

        {/* List of chat threads */}
        <div style={{ flexGrow: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
          {loading ? (
            <div style={{ display: 'flex', justifyContent: 'center', padding: '30px' }}>
              <div style={{ width: '20px', height: '20px', border: '2px solid var(--border-color)', borderTopColor: 'var(--accent)', borderRadius: '50%' }} className="pulse-glow" />
            </div>
          ) : filteredConversations.length === 0 ? (
            <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.85rem', padding: '30px' }}>No conversations found</p>
          ) : (
            filteredConversations.map((conv) => {
              const isActive = conv.chatId === activeChatId;
              return (
                <div
                  key={conv.chatId}
                  onClick={() => {
                    setActiveChatId(conv.chatId);
                    setSearchParams({ chatId: conv.chatId });
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '16px',
                    cursor: 'pointer',
                    backgroundColor: isActive ? 'var(--accent-light)' : 'transparent',
                    borderLeft: isActive ? '4px solid var(--accent)' : '4px solid transparent',
                    borderBottom: '1px solid #FAF8F2',
                    transition: 'background-color 0.2s',
                  }}
                  onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.backgroundColor = 'var(--bg-primary)'; }}
                  onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.backgroundColor = 'transparent'; }}
                >
                  {/* Avatar */}
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    color: 'var(--text-main)',
                    flexShrink: 0,
                  }}>
                    {conv.avatar}
                  </div>

                  {/* Details snippet */}
                  <div style={{ flexGrow: 1, overflow: 'hidden' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                      <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-main)' }}>{conv.senderName}</span>
                      <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{conv.timestamp}</span>
                    </div>
                    <p style={{
                      fontSize: '0.78rem',
                      color: 'var(--text-muted)',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                      fontWeight: conv.unreadCount > 0 ? 600 : 400
                    }}>
                      {conv.lastMessage}
                    </p>
                  </div>

                  {/* Unread dot count */}
                  {conv.unreadCount > 0 && (
                    <span style={{
                      backgroundColor: 'var(--accent)',
                      color: 'var(--text-main)',
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      minWidth: '18px',
                      height: '18px',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '0 5px'
                    }}>
                      {conv.unreadCount}
                    </span>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Right Pane: Message discussion area */}
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: '#FAF8F2' }}>
        {activeChat ? (
          <>
            {/* Header info */}
            <div style={{
              padding: '16px 24px',
              borderBottom: '1px solid var(--border-color)',
              backgroundColor: 'white',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                }}>
                  {activeChat.avatar}
                </div>
                <div>
                  <h4 style={{ fontSize: '0.925rem', fontWeight: 700, color: 'var(--text-main)' }}>{activeChat.senderName}</h4>
                  <span style={{ fontSize: '0.72rem', color: 'var(--success)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--success)' }} />
                    Active discussion thread
                  </span>
                </div>
              </div>
              
              <button style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}>
                <MoreVertical size={18} />
              </button>
            </div>

            {/* Conversation Messages area */}
            <div style={{ flexGrow: 1, overflowY: 'auto', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {messagesLoading ? (
                <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
                  <div style={{ width: '20px', height: '20px', border: '2px solid var(--border-color)', borderTopColor: 'var(--accent)', borderRadius: '50%' }} className="pulse-glow" />
                </div>
              ) : (
                messages.map((msg, index) => {
                  const isMe = msg.isAdmin;
                  return (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25 }}
                      style={{
                        display: 'flex',
                        justifyContent: isMe ? 'flex-end' : 'flex-start',
                        width: '100%',
                      }}
                    >
                      <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: isMe ? 'flex-end' : 'flex-start',
                        maxWidth: '65%',
                        gap: '4px'
                      }}>
                        {/* Bubble */}
                        <div style={{
                          backgroundColor: isMe ? 'var(--primary)' : '#FFFFFF',
                          border: isMe ? 'none' : '1px solid var(--border-color)',
                          color: 'var(--text-main)',
                          padding: '12px 16px',
                          borderRadius: isMe 
                            ? '18px 18px 4px 18px' 
                            : '18px 18px 18px 4px',
                          fontSize: '0.88rem',
                          fontWeight: 500,
                          lineHeight: 1.45,
                          boxShadow: '0 2px 8px rgba(225, 218, 197, 0.1)',
                        }}>
                          {msg.content}
                        </div>
                        
                        {/* Timestamp detail */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                            {msg.timestamp}
                          </span>
                          {isMe && <CheckCheck size={12} style={{ color: 'var(--accent)' }} />}
                        </div>
                      </div>
                    </motion.div>
                  );
                })
              )}
              <div ref={chatBottomRef} />
            </div>

            {/* Message input composer box */}
            <form
              onSubmit={handleSendMessage}
              style={{
                padding: '16px 24px',
                backgroundColor: 'white',
                borderTop: '1px solid var(--border-color)',
                display: 'flex',
                gap: '12px',
                alignItems: 'center',
              }}
            >
              <input
                type="text"
                placeholder="Type reply message..."
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                style={{
                  flexGrow: 1,
                  height: '42px',
                  borderRadius: '24px',
                }}
                className="form-input"
              />
              <button
                type="submit"
                disabled={!replyText.trim()}
                className="btn-primary"
                style={{
                  height: '42px',
                  width: '42px',
                  borderRadius: '50%',
                  padding: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: replyText.trim() ? 1 : 0.6,
                  cursor: replyText.trim() ? 'pointer' : 'not-allowed',
                }}
              >
                <Send size={16} />
              </button>
            </form>
          </>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flexGrow: 1, gap: '16px', color: 'var(--text-muted)' }}>
            <MessageCircle size={48} style={{ color: 'var(--border-color)' }} />
            <p style={{ fontSize: '0.9rem' }}>Select an active discussion thread from the left.</p>
          </div>
        )}
      </div>
    </motion.div>
  );
}
