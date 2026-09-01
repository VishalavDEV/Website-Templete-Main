import React, { useState } from 'react';
import { Button } from '../../ui/Button';
import { Input } from '../../ui/Input';
import { Select } from '../../ui/Select';
import { useToast } from '../../../app/providers/ToastProvider';

export function BasicForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ username: '', email: '', role: 'editor' });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!formData.username) newErrors.username = 'Username is required.';
    if (!formData.email) newErrors.email = 'Email address is required.';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.error('Please correct form validation errors.');
    } else {
      setErrors({});
      toast.success('Basic profile form submitted successfully!');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md w-full bg-card p-5 border border-border rounded-xl shadow-sm">
      <h3 className="text-sm font-bold text-foreground mb-2">Corporate Profile form</h3>
      
      <div>
        <label className="text-xs font-bold text-muted-foreground mb-1 block">Full User Name</label>
        <Input 
          placeholder="e.g. John Doe"
          value={formData.username}
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
        />
        {errors.username && <p className="text-[10px] text-destructive mt-1 font-semibold">{errors.username}</p>}
      </div>

      <div>
        <label className="text-xs font-bold text-muted-foreground mb-1 block">Email address</label>
        <Input 
          type="email" 
          placeholder="name@corporation.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        {errors.email && <p className="text-[10px] text-destructive mt-1 font-semibold">{errors.email}</p>}
      </div>

      <div>
        <label className="text-xs font-bold text-muted-foreground mb-1 block">Assigned Role</label>
        <Select
          options={[
            { label: 'Administrator Manager', value: 'admin' },
            { label: 'Content Editor', value: 'editor' },
            { label: 'Database Viewer', value: 'viewer' }
          ]}
          value={formData.role}
          onChange={(val) => setFormData({ ...formData, role: val })}
        />
      </div>

      <div className="pt-2 flex justify-end gap-2">
        <Button variant="outline" size="sm" type="button" onClick={() => setFormData({ username: '', email: '', role: 'editor' })}>Reset</Button>
        <Button variant="primary" size="sm" type="submit">Save Settings</Button>
      </div>
    </form>
  );
}
