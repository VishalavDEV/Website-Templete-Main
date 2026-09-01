import React, { useState } from 'react';
import { Button } from '../../ui/Button';
import { Input } from '../../ui/Input';
import { Switch } from '../../ui/Switch';
import { Plus, Trash2 } from 'lucide-react';
import { useToast } from '../../../app/providers/ToastProvider';

export function FormSections() {
  const { toast } = useToast();
  const [showBilling, setShowBilling] = useState(false);
  
  // Repeatable rows
  const [contacts, setContacts] = useState([{ name: '', email: '' }]);

  const addContact = () => {
    setContacts([...contacts, { name: '', email: '' }]);
  };

  const removeContact = (index: number) => {
    setContacts(contacts.filter((_, i) => i !== index));
  };

  const handleInputChange = (index: number, key: 'name' | 'email', val: string) => {
    const next = [...contacts];
    next[index][key] = val;
    setContacts(next);
  };

  return (
    <div className="bg-card p-6 border border-border rounded-xl shadow-sm w-full space-y-6 select-none">
      <h3 className="text-sm font-bold text-foreground">Advanced repeatables & conditionals</h3>
      
      {/* 1. Conditional Fields Switch */}
      <div className="pb-4 border-b border-border/60">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h4 className="text-xs font-bold text-foreground">Enable Custom Invoice Routing</h4>
            <p className="text-[10px] text-muted-foreground mt-0.5">Toggle optional billing setup parameters.</p>
          </div>
          <Switch checked={showBilling} onChange={(e) => setShowBilling(e.target.checked)} />
        </div>

        {showBilling && (
          <div className="pt-3 space-y-3 animate-in fade-in duration-200">
            <div>
              <label className="text-[10px] font-bold text-muted-foreground uppercase block mb-1">Company VAT Tax ID</label>
              <Input placeholder="VAT-EU99812A" />
            </div>
            <div>
              <label className="text-[10px] font-bold text-muted-foreground uppercase block mb-1">Alternative Billing Address</label>
              <Input placeholder="44 Wall St, New York" />
            </div>
          </div>
        )}
      </div>

      {/* 2. Repeatable Form Sections */}
      <div>
        <h4 className="text-xs font-bold text-foreground mb-2">Authorized Accounts Contacts</h4>
        <div className="space-y-3">
          {contacts.map((contact, index) => (
            <div key={index} className="flex gap-2 items-center">
              <Input 
                placeholder="Staff name" 
                value={contact.name} 
                onChange={(e) => handleInputChange(index, 'name', e.target.value)} 
                className="flex-1"
              />
              <Input 
                placeholder="Email address" 
                value={contact.email} 
                onChange={(e) => handleInputChange(index, 'email', e.target.value)} 
                className="flex-1"
              />
              {contacts.length > 1 && (
                <button 
                  onClick={() => removeContact(index)}
                  className="p-2 rounded hover:bg-destructive/10 text-destructive cursor-pointer shrink-0"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              )}
            </div>
          ))}
        </div>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={addContact} 
          className="mt-3" 
          leftIcon={<Plus className="h-4.5 w-4.5" />}
        >
          Add Contact
        </Button>
      </div>
    </div>
  );
}
