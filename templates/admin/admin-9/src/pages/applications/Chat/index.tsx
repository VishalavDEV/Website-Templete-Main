/* src/pages/applications/Chat/index.tsx */
import React, { useState } from 'react';
import { Avatar } from '../../../components/ui/Avatar';
import { Button } from '../../../components/ui/Button';
import { Send, Search, Phone, Video, FileText, Image as ImageIcon } from 'lucide-react';
import { useToast } from '../../../app/providers/ToastProvider';

interface ChatMessage {
  sender: 'me' | 'other';
  text: string;
  time: string;
}

interface ChatContact {
  id: string;
  name: string;
  role: string;
  snippet: string;
  online: boolean;
  messages: ChatMessage[];
  attachments: { file: string; size: string }[];
}

export default function ChatPage() {
  const { toast } = useToast();
  const [msgText, setMsgText] = useState('');
  
  const [contacts, setContacts] = useState<ChatContact[]>([
    {
      id: 'c1',
      name: 'Diana Prince',
      role: 'Security Architect',
      snippet: 'MFA keys activated...',
      online: true,
      messages: [
        { sender: 'other', text: 'Did the staging DB Sync scripts complete audit?', time: '10:12 AM' },
        { sender: 'me', text: 'Yes, Vance Refrigerations databases are synced cleanly.', time: '10:15 AM' }
      ],
      attachments: [
        { file: 'service-task.pdf', size: '2MB' },
        { file: 'image-design.fig', size: '12MB' },
        { file: 'custom.js', size: '2MB' }
      ]
    },
    {
      id: 'c2',
      name: 'James Johnson',
      role: 'Operations Lead',
      snippet: 'Spooling backups...',
      online: true,
      messages: [
        { sender: 'other', text: 'Are the automatic midnight database backups active?', time: '09:30 AM' },
        { sender: 'me', text: 'Yes, backups are spooled to S3 archive buckets daily.', time: '09:35 AM' },
        { sender: 'other', text: 'Perfect, thank you for confirming.', time: '09:36 AM' }
      ],
      attachments: [
        { file: 'backup-log.txt', size: '140KB' },
        { file: 'database-schema.sql', size: '4.2MB' }
      ]
    },
    {
      id: 'c3',
      name: 'Sarah Connor',
      role: 'Systems Auditor',
      snippet: 'SSL renewal certificates...',
      online: false,
      messages: [
        { sender: 'other', text: 'Staging certificates are expiring in 3 days. Can you review?', time: 'Yesterday' },
        { sender: 'me', text: 'I will trigger the cert renewal scripts today.', time: 'Yesterday' }
      ],
      attachments: [
        { file: 'cert-request.csr', size: '4KB' },
        { file: 'staging-key.pem', size: '2KB' }
      ]
    },
    {
      id: 'c4',
      name: 'David Smith',
      role: 'DevOps Engineer',
      snippet: 'Staged log outputs...',
      online: true,
      messages: [
        { sender: 'other', text: 'Vite dev builds are compiling in under 2 seconds now with Rolldown.', time: 'Aug 18' },
        { sender: 'me', text: 'Excellent, the new bundle config is extremely fast.', time: 'Aug 18' }
      ],
      attachments: [
        { file: 'build-report.json', size: '1.5MB' }
      ]
    }
  ]);

  const [activeContactId, setActiveContactId] = useState('c1');

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const userParam = params.get('user');
    if (userParam) {
      const existing = contacts.find(c => c.name.toLowerCase() === userParam.toLowerCase());
      if (existing) {
        setActiveContactId(existing.id);
      } else {
        const newId = 'c_new_' + Date.now();
        const newContact: ChatContact = {
          id: newId,
          name: userParam,
          role: 'Team Colleague',
          snippet: 'Started chat from Contacts Directory',
          online: true,
          messages: [
            { sender: 'other', text: `Hi, I am ${userParam}. Let me know if you need staging updates!`, time: '10:00 AM' }
          ],
          attachments: [
            { file: 'shared-data.csv', size: '120KB' }
          ]
        };
        setContacts(prev => {
          const hasIt = prev.some(c => c.name.toLowerCase() === userParam.toLowerCase());
          if (hasIt) return prev;
          return [newContact, ...prev];
        });
        setActiveContactId(newId);
      }
    }
  }, []);

  const activeContact = contacts.find(c => c.id === activeContactId) || contacts[0];

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!msgText.trim()) return;

    const newMsg: ChatMessage = {
      sender: 'me',
      text: msgText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setContacts(prev => prev.map(c => {
      if (c.id === activeContactId) {
        return {
          ...c,
          snippet: msgText,
          messages: [...c.messages, newMsg]
        };
      }
      return c;
    }));

    setMsgText('');
    toast.success('Message dispatched.');
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('');
  };

  return (
    <div className="h-[calc(100vh-10rem)] flex border border-border bg-card rounded-xl overflow-hidden shadow-sm select-none">
      {/* Pane 1: Conversations List */}
      <div className="w-80 border-r border-border flex flex-col shrink-0">
        <div className="p-4 border-b border-border">
          <h2 className="text-sm font-extrabold text-foreground mb-3">Chat App</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input type="search" placeholder="Search chats..." className="w-full text-xs h-9 pl-9 pr-3 rounded-lg border border-border bg-muted/20 focus:outline-none" />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-2 space-y-1">
          {contacts.map((c) => (
            <button 
              key={c.id} 
              onClick={() => setActiveContactId(c.id)}
              className={`w-full flex items-center gap-3 p-3 rounded-lg text-left cursor-pointer transition-colors ${
                activeContact.id === c.id ? 'bg-primary/5 font-semibold text-primary' : 'hover:bg-accent/40'
              }`}
            >
              <Avatar name={c.name} size="sm" isOnline={c.online} />
              <div className="min-w-0 flex-1">
                <p className="text-xs font-bold text-foreground truncate">{c.name}</p>
                <p className="text-[10px] text-muted-foreground truncate">{c.snippet}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Pane 2: Conversation Viewport */}
      <div className="flex-1 flex flex-col bg-muted/5 justify-between">
        {/* Chat Header */}
        <div className="h-14 border-b border-border bg-card px-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <Avatar name={activeContact.name} size="sm" isOnline={activeContact.online} />
            <div>
              <p className="text-xs font-bold text-foreground">{activeContact.name}</p>
              <span className={`text-[9px] font-bold uppercase ${activeContact.online ? 'text-success' : 'text-muted-foreground'}`}>
                {activeContact.online ? 'Online' : 'Offline'}
              </span>
            </div>
          </div>
          <div className="flex gap-1">
            <Button size="icon" variant="outline" className="h-8 w-8"><Phone className="h-4 w-4" /></Button>
            <Button size="icon" variant="outline" className="h-8 w-8"><Video className="h-4 w-4" /></Button>
          </div>
        </div>

        {/* Message bubble tray */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          {activeContact.messages.map((m, idx) => {
            const isMe = m.sender === 'me';
            return (
              <div key={idx} className={`flex gap-3 max-w-sm ${isMe ? 'ml-auto flex-row-reverse' : ''}`}>
                <div className="h-8 w-8 rounded-full bg-primary/10 text-primary font-bold text-xs flex items-center justify-center shrink-0">
                  {isMe ? 'ME' : getInitials(activeContact.name)}
                </div>
                <div>
                  <div className={`p-3 rounded-xl text-xs leading-relaxed ${
                    isMe ? 'bg-primary text-primary-foreground font-medium' : 'bg-card border border-border text-foreground'
                  }`}>
                    {m.text}
                  </div>
                  <span className="text-[9px] text-muted-foreground mt-1 block text-right">{m.time}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Input box */}
        <form onSubmit={handleSend} className="p-4 border-t border-border bg-card flex gap-2 items-center shrink-0">
          <input 
            type="text" 
            placeholder="Type your message..." 
            value={msgText}
            onChange={(e) => setMsgText(e.target.value)}
            className="flex-1 h-10 border border-border rounded-lg bg-muted/10 px-3 text-xs focus:outline-none text-foreground" 
          />
          <Button size="icon" variant="primary" type="submit" className="h-10 w-10 shrink-0"><Send className="h-4.5 w-4.5" /></Button>
        </form>
      </div>

      {/* Pane 3: Profile & Media side drawer */}
      <div className="w-64 border-l border-border bg-card p-4 flex flex-col gap-6 shrink-0 overflow-y-auto">
        <div className="text-center flex flex-col items-center gap-2">
          <div className="h-14 w-14 rounded-full bg-primary/15 text-primary text-lg font-black flex items-center justify-center border border-primary/20">
            {getInitials(activeContact.name)}
          </div>
          <div>
            <h4 className="text-xs font-bold text-foreground">{activeContact.name}</h4>
            <p className="text-[9px] text-muted-foreground uppercase font-bold mt-0.5">{activeContact.role}</p>
          </div>
        </div>

        {/* Media Grid */}
        <div>
          <h5 className="text-[10px] font-bold text-muted-foreground uppercase mb-2.5">Shared Media</h5>
          <div className="grid grid-cols-3 gap-1.5">
            {Array.from({ length: 6 }).map((_, idx) => (
              <div key={idx} className="aspect-square bg-muted/30 border border-border/40 rounded-lg flex items-center justify-center">
                <ImageIcon className="h-4 w-4 text-muted-foreground/45" />
              </div>
            ))}
          </div>
        </div>

        {/* Attachments */}
        <div>
          <h5 className="text-[10px] font-bold text-muted-foreground uppercase mb-2">Shared Attachments</h5>
          <div className="space-y-2">
            {activeContact.attachments.map((att, idx) => (
              <div key={idx} className="flex items-center justify-between p-2 border border-border/80 bg-muted/5 rounded-lg text-[10px]">
                <span className="font-semibold text-foreground truncate max-w-[120px] flex items-center gap-1.5"><FileText className="h-3.5 w-3.5 text-primary shrink-0" /> {att.file}</span>
                <span className="text-muted-foreground font-bold shrink-0">{att.size}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
