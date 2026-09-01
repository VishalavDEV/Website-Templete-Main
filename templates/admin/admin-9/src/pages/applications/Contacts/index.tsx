/* src/pages/applications/Contacts/index.tsx */
import React, { useState } from 'react';
import { Card } from '../../../components/ui/Card';
import { Avatar } from '../../../components/ui/Avatar';
import { Button } from '../../../components/ui/Button';
import { Search, Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Contact {
  name: string;
  role: string;
  email: string;
  phone: string;
  location: string;
  teams: string[];
}

export default function ContactsPage() {
  const navigate = useNavigate();
  const [activeGroup, setActiveGroup] = useState<string>('My Contacts');
  
  const categories = ['My Contacts', 'Staging team', 'Operations team', 'Marketing team'];

  const directory: Contact[] = [
    { name: 'Diana Prince', role: 'Security Architect', email: 'diana@corp.com', phone: '+1 482-990-22', location: 'London, UK', teams: ['Staging team'] },
    { name: 'Ethan Hunt', role: 'Staging Auditor', email: 'ethan@corp.com', phone: '+1 255-882-99', location: 'Paris, FR', teams: ['Staging team'] },
    { name: 'Michelle Steele', role: 'Product Manager', email: 'michelle.steele@company.com', phone: '+1 202-555-0143', location: '100 Pine St, San Francisco, CA', teams: ['Marketing team'] },
    { name: 'James Johnson', role: 'Operations Lead', email: 'james.j@company.com', phone: '+1 202-555-0199', location: 'New York, US', teams: ['Operations team'] },
    { name: 'Sarah Connor', role: 'Systems Auditor', email: 'sarah.c@company.com', phone: '+1 202-555-0122', location: 'Los Angeles, US', teams: ['Staging team'] }
  ];

  const filteredContacts = directory.filter(contact => {
    if (activeGroup === 'My Contacts') return true;
    return contact.teams.includes(activeGroup);
  });

  const [selected, setSelected] = useState<Contact>(filteredContacts[0] || directory[0]);

  const handleGroupSelect = (group: string) => {
    setActiveGroup(group);
    const filtered = directory.filter(c => group === 'My Contacts' || c.teams.includes(group));
    if (filtered.length > 0) {
      setSelected(filtered[0]);
    }
  };

  const handleStartChat = () => {
    if (!selected) return;
    navigate(`/apps/chat?user=${encodeURIComponent(selected.name)}`);
  };

  return (
    <div className="h-[calc(100vh-10rem)] flex border border-border bg-card rounded-xl overflow-hidden shadow-sm select-none">
      {/* Pane 1: Category list */}
      <div className="w-56 border-r border-border p-4 shrink-0 space-y-4">
        <h2 className="text-sm font-extrabold text-foreground">Groups & Tags</h2>
        <div className="space-y-1">
          {categories.map((cat, idx) => (
            <button 
              key={idx} 
              onClick={() => handleGroupSelect(cat)}
              className={`w-full text-left p-2 text-xs font-semibold rounded-lg cursor-pointer transition-colors ${
                activeGroup === cat ? 'bg-primary/5 text-primary' : 'text-muted-foreground hover:bg-accent/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Pane 2: Contacts scroll list */}
      <div className="w-80 border-r border-border flex flex-col shrink-0">
        <div className="p-4 border-b border-border">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input type="search" placeholder="Search contacts..." className="w-full text-xs h-9 pl-9 pr-3 rounded-lg border border-border bg-muted/20 focus:outline-none" />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-2 space-y-1">
          {filteredContacts.map((contact, idx) => (
            <button 
              key={idx} 
              onClick={() => setSelected(contact)}
              className={`w-full flex items-center gap-3 p-3 rounded-lg text-left cursor-pointer transition-colors ${
                selected?.name === contact.name ? 'bg-primary/5 font-semibold text-primary' : 'hover:bg-accent/40'
              }`}
            >
              <Avatar name={contact.name} size="sm" isOnline={idx % 2 === 0} />
              <div className="min-w-0 flex-1">
                <p className="text-xs font-bold text-foreground truncate">{contact.name}</p>
                <p className="text-[10px] text-muted-foreground truncate">{contact.role}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Pane 3: Profile Detail panel */}
      <div className="flex-1 bg-muted/5 p-6 overflow-y-auto flex items-center justify-center">
        {selected ? (
          <Card className="shadow-sm border border-border max-w-sm w-full">
            <div className="flex flex-col items-center text-center p-4">
              <Avatar name={selected.name} size="lg" isOnline />
              <h3 className="text-sm font-extrabold text-foreground mt-3">{selected.name}</h3>
              <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider mt-0.5">{selected.role}</p>

              <div className="w-full border-t border-border/60 pt-4 mt-6 space-y-3.5 text-left text-xs">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="h-4.5 w-4.5 text-primary shrink-0" />
                  <span className="truncate">{selected.email}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="h-4.5 w-4.5 text-primary shrink-0" />
                  <span>{selected.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="h-4.5 w-4.5 text-primary shrink-0" />
                  <span>{selected.location}</span>
                </div>
              </div>

              <div className="flex gap-2 w-full mt-6">
                <Button variant="outline" className="flex-1 text-xs" leftIcon={<Mail className="h-4 w-4" />} onClick={() => navigate('/apps/email')}>Send Mail</Button>
                <Button variant="primary" className="flex-1 text-xs" leftIcon={<MessageSquare className="h-4 w-4" />} onClick={handleStartChat}>Start Chat</Button>
              </div>
            </div>
          </Card>
        ) : (
          <div className="text-xs text-muted-foreground">Select a contact in the folder.</div>
        )}
      </div>
    </div>
  );
}
