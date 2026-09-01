/* src/pages/applications/Email/index.tsx */
import React, { useState } from 'react';
import { Card } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';
import { Badge } from '../../../components/ui/Badge';
import { useToast } from '../../../app/providers/ToastProvider';
import { Inbox, Send, Trash2, Edit, Search, Tag, Paperclip, X } from 'lucide-react';

interface MailItem {
  id: string;
  from: string;
  email: string;
  subject: string;
  body: string;
  date: string;
  unread: boolean;
  folder: 'Inbox' | 'Sent' | 'Drafts' | 'Trash';
}

export default function EmailPage() {
  const { toast } = useToast();
  const [activeFolder, setActiveFolder] = useState<'Inbox' | 'Sent' | 'Drafts' | 'Trash'>('Inbox');
  const [replyText, setReplyText] = useState('');
  
  // Compose modal states
  const [isComposeOpen, setIsComposeOpen] = useState(false);
  const [composeTo, setComposeTo] = useState('');
  const [composeSubject, setComposeSubject] = useState('');
  const [composeBody, setComposeBody] = useState('');

  const [allEmails, setAllEmails] = useState<MailItem[]>([
    // Inbox
    { id: 'm1', from: 'Sarah Johnson', email: 'sarah.j@company.com', subject: 'Q4 Marketing Campaign Review', date: 'Aug 19', body: 'The campaign is ready for staging validation. Check attachments.', unread: true, folder: 'Inbox' },
    { id: 'm2', from: 'Diana Prince', email: 'diana@company.com', subject: 'SSL credentials updated successfully', date: 'Aug 18', body: 'The credentials have been synced. Staging releases are completed.', unread: false, folder: 'Inbox' },
    { id: 'm3', from: 'Invoices Hub', email: 'team@company.com', subject: 'Invoice INV-2026-002 Staging Error', date: 'Aug 17', body: 'Please verify the VAT tax numbers.', unread: false, folder: 'Inbox' },
    
    // Sent
    { id: 's1', from: 'To: Diana Prince', email: 'diana@company.com', subject: 'Replied: SSL credentials updated', date: 'Aug 19', body: 'Great to hear that. I will configure the webhook pipeline triggers now.', unread: false, folder: 'Sent' },
    { id: 's2', from: 'To: Invoices Hub', email: 'team@company.com', subject: 'Re: Invoice INV-2026-002 Staging Error', date: 'Aug 18', body: 'I have attached the corrected Vance Refrigerations VAT tax certificate.', unread: false, folder: 'Sent' },

    // Drafts
    { id: 'd1', from: 'Draft: Wayne Staging', email: 'wayne@company.com', subject: 'Draft: Staging DB Sync script updates', date: 'Aug 18', body: 'This script auto-rotates primary SSH credentials on port 222.', unread: false, folder: 'Drafts' },
    { id: 'd2', from: 'Draft: Support Desk', email: 'support@company.com', subject: 'Draft: Diagnostics SLA SLA-009', date: 'Aug 17', body: 'Reply template for class-3 warning alerts logs.', unread: false, folder: 'Drafts' },

    // Trash
    { id: 't1', from: 'Spam Offer', email: 'spam@offers.com', subject: 'Special Promotion: Cloud Sync Server Discount', date: 'Aug 15', body: 'Get 50% discount on staging DB clusters configurations.', unread: false, folder: 'Trash' },
    { id: 't2', from: 'Newsletter', email: 'news@weekly.com', subject: 'Weekly Tech Insights newsletter #11', date: 'Aug 14', body: 'Top 10 tips for writing lightweight custom SVG charts.', unread: false, folder: 'Trash' }
  ]);

  const [selectedMail, setSelectedMail] = useState<MailItem | null>(null);

  const folders = [
    { name: 'Inbox', icon: <Inbox className="h-4 w-4" />, count: allEmails.filter(m => m.folder === 'Inbox' && m.unread).length },
    { name: 'Sent', icon: <Send className="h-4 w-4" />, count: 0 },
    { name: 'Drafts', icon: <Tag className="h-4 w-4" />, count: allEmails.filter(m => m.folder === 'Drafts').length },
    { name: 'Trash', icon: <Trash2 className="h-4 w-4" />, count: 0 }
  ] as const;

  const currentFolderEmails = allEmails.filter(m => m.folder === activeFolder);

  const handleSelectMail = (mail: MailItem) => {
    setSelectedMail(mail);
    if (mail.unread) {
      setAllEmails(prev => prev.map(m => m.id === mail.id ? { ...m, unread: false } : m));
    }
  };

  const handleFolderSelect = (folderName: 'Inbox' | 'Sent' | 'Drafts' | 'Trash') => {
    setActiveFolder(folderName);
    setSelectedMail(null);
  };

  const handleSendReply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!replyText.trim() || !selectedMail) return;
    toast.success(`Reply sent to ${selectedMail.from}!`);
    setReplyText('');
  };

  const handleSendCompose = (e: React.FormEvent) => {
    e.preventDefault();
    if (!composeTo.trim() || !composeSubject.trim() || !composeBody.trim()) return;

    const newMail: MailItem = {
      id: 'm_composed_' + Date.now(),
      from: `To: ${composeTo}`,
      email: composeTo,
      subject: composeSubject,
      body: composeBody,
      date: 'Today',
      unread: false,
      folder: 'Sent'
    };

    setAllEmails(prev => [newMail, ...prev]);
    setIsComposeOpen(false);
    
    // Clear compose fields
    setComposeTo('');
    setComposeSubject('');
    setComposeBody('');

    // Switch view to Sent to inspect the sent mail
    setActiveFolder('Sent');
    setSelectedMail(newMail);
    
    toast.success('Email composed and stored in Sent folder!');
  };

  return (
    <div className="h-[calc(100vh-10rem)] flex border border-border bg-card rounded-xl overflow-hidden shadow-sm select-none relative">
      {/* Pane 1: Mail Folder sidebar */}
      <div className="w-56 border-r border-border p-4 shrink-0 space-y-4">
        <Button 
          variant="primary" 
          className="w-full" 
          leftIcon={<Edit className="h-4.5 w-4.5" />} 
          onClick={() => setIsComposeOpen(true)}
        >
          Compose
        </Button>
        <div className="space-y-1">
          {folders.map((folder, i) => (
            <button 
              key={i} 
              onClick={() => handleFolderSelect(folder.name)}
              className={`w-full flex items-center justify-between p-2 text-xs font-semibold rounded-lg text-left cursor-pointer ${
                activeFolder === folder.name ? 'bg-primary/5 text-primary' : 'text-muted-foreground hover:bg-accent/40'
              }`}
            >
              <span className="flex items-center gap-2">{folder.icon} {folder.name}</span>
              {folder.count > 0 && <Badge variant="default">{folder.count}</Badge>}
            </button>
          ))}
        </div>
      </div>

      {/* Pane 2: Email list */}
      <div className="w-80 border-r border-border flex flex-col shrink-0">
        <div className="p-4 border-b border-border">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input type="search" placeholder="Search mail..." className="w-full text-xs h-9 pl-9 pr-3 rounded-lg border border-border bg-muted/20 focus:outline-none" />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto divide-y divide-border/60">
          {currentFolderEmails.map((mail) => (
            <button 
              key={mail.id} 
              onClick={() => handleSelectMail(mail)}
              className={`w-full text-left p-4 hover:bg-accent/15 transition-colors flex flex-col gap-1 cursor-pointer ${
                selectedMail?.id === mail.id ? 'bg-primary/5' : ''
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-foreground truncate max-w-[140px]">{mail.from}</span>
                <span className="text-[10px] text-muted-foreground">{mail.date}</span>
              </div>
              <p className="text-xs font-semibold text-foreground truncate flex items-center gap-1.5">
                {mail.unread && <span className="h-1.5 w-1.5 bg-primary rounded-full shrink-0"></span>}
                {mail.subject}
              </p>
              <p className="text-[10px] text-muted-foreground truncate">{mail.body}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Pane 3: Email reader preview */}
      <div className="flex-1 bg-muted/5 p-6 overflow-y-auto flex flex-col justify-between min-w-0">
        {selectedMail ? (
          <div className="flex flex-col h-full justify-between">
            <div className="space-y-6">
              <div className="border-b border-border/60 pb-4">
                <h3 className="text-base font-extrabold text-foreground">{selectedMail.subject}</h3>
                <div className="flex items-center justify-between mt-3 text-xs">
                  <p className="text-muted-foreground">From: <strong className="font-bold text-foreground">{selectedMail.from} ({selectedMail.email || 'team@company.com'})</strong></p>
                  <span className="text-[10px] text-muted-foreground font-semibold">{selectedMail.date}</span>
                </div>
              </div>
              
              <div className="text-xs leading-relaxed text-foreground/80 space-y-4">
                <p>Hello team,</p>
                <p>{selectedMail.body}</p>
              </div>
            </div>

            {/* Bottom reply compose box */}
            <form onSubmit={handleSendReply} className="border-t border-border/60 pt-4 mt-6 space-y-3 shrink-0">
              <textarea 
                placeholder={`Reply to ${selectedMail.from}...`} 
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                className="w-full text-xs min-h-[80px] border border-border bg-card px-3 py-2 rounded-lg focus:outline-none text-foreground"
                required
              ></textarea>
              <div className="flex justify-between items-center">
                <Button size="icon" variant="outline" className="h-8 w-8" type="button"><Paperclip className="h-4 w-4" /></Button>
                <Button variant="primary" size="sm" type="submit">Send Reply</Button>
              </div>
            </form>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full text-muted-foreground text-xs font-semibold">
            No mail item selected in folder.
          </div>
        )}
      </div>

      {/* Gmail-style Floating Compose Box */}
      {isComposeOpen && (
        <div className="absolute bottom-4 right-4 w-96 bg-card border border-border rounded-xl shadow-2xl z-50 flex flex-col overflow-hidden animate-in slide-in-from-bottom-6 duration-200">
          <div className="bg-primary px-4 py-3 flex items-center justify-between text-primary-foreground">
            <span className="text-xs font-bold">New Message</span>
            <button 
              onClick={() => setIsComposeOpen(false)}
              className="text-primary-foreground/80 hover:text-primary-foreground cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <form onSubmit={handleSendCompose} className="p-4 space-y-3">
            <div>
              <input 
                type="email" 
                placeholder="To" 
                value={composeTo}
                onChange={(e) => setComposeTo(e.target.value)}
                className="w-full text-xs border-b border-border py-1.5 focus:outline-none bg-transparent text-foreground"
                required
              />
            </div>
            <div>
              <input 
                type="text" 
                placeholder="Subject" 
                value={composeSubject}
                onChange={(e) => setComposeSubject(e.target.value)}
                className="w-full text-xs border-b border-border py-1.5 focus:outline-none bg-transparent text-foreground"
                required
              />
            </div>
            <div>
              <textarea 
                placeholder="Compose email..." 
                value={composeBody}
                onChange={(e) => setComposeBody(e.target.value)}
                className="w-full text-xs min-h-[140px] focus:outline-none py-1.5 bg-transparent resize-none text-foreground"
                required
              ></textarea>
            </div>
            <div className="flex justify-between items-center border-t border-border/40 pt-3">
              <Button variant="primary" size="sm" type="submit">Send</Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="h-8 w-8 text-muted-foreground hover:text-foreground"
                type="button"
                onClick={() => setIsComposeOpen(false)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
