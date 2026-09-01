import React, { useState } from 'react';
import { Card } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';
import { Input } from '../../../components/ui/Input';
import { Checkbox } from '../../../components/ui/Checkbox';
import { useToast } from '../../../app/providers/ToastProvider';
import { ShieldCheck, Mail, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [style, setStyle] = useState<'card' | 'split' | 'minimal'>('card');

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Mock authentication credentials validated!');
    navigate('/');
  };

  return (
    <div className="space-y-6 select-none max-w-4xl mx-auto pb-8">
      {/* Layout Selector */}
      <div className="flex justify-center gap-2 bg-card p-3 border border-border rounded-xl w-fit mx-auto shadow-sm text-xs font-semibold">
        {(['card', 'split', 'minimal'] as const).map((s) => (
          <button 
            key={s} 
            onClick={() => setStyle(s)} 
            className={`px-3 py-1.5 rounded capitalize cursor-pointer ${style === s ? 'bg-primary text-primary-foreground font-bold' : 'text-muted-foreground hover:bg-accent'}`}
          >
            {s} Layout
          </button>
        ))}
      </div>

      {style === 'card' && (
        <div className="flex justify-center min-h-[400px] items-center">
          <Card title="Portal Login Access" subtitle="Enter credentials to verify identity." className="max-w-md w-full shadow-lg border border-border">
            <form onSubmit={handleLoginSubmit} className="space-y-4 pt-2">
              <div>
                <label className="text-[10px] font-bold text-muted-foreground uppercase block mb-1">Email Address</label>
                <Input type="email" placeholder="name@corporation.com" required />
              </div>
              <div>
                <label className="text-[10px] font-bold text-muted-foreground uppercase block mb-1">Secret Password</label>
                <Input type="password" placeholder="••••••••••••••" required />
              </div>
              <div className="flex items-center justify-between text-xs">
                <label className="flex items-center gap-2 cursor-pointer text-muted-foreground"><Checkbox /> Remember device</label>
                <a onClick={() => navigate('/auth/forgot-password')} className="text-primary hover:underline cursor-pointer">Forgot Password?</a>
              </div>
              <Button variant="primary" size="sm" type="submit" className="w-full mt-2">Log In</Button>
            </form>
          </Card>
        </div>
      )}

      {style === 'split' && (
        <div className="flex border border-border bg-card rounded-2xl overflow-hidden min-h-[400px] shadow-sm">
          {/* Left panel branding */}
          <div className="w-1/2 bg-gradient-to-br from-primary/30 to-secondary/30 p-8 hidden md:flex flex-col justify-between select-none">
            <div className="flex items-center gap-2 text-primary font-black"><ShieldCheck className="h-6 w-6" /> <span>SECURITY</span></div>
            <div className="space-y-2">
              <h2 className="text-xl font-extrabold text-foreground">Catalog Staging Portal</h2>
              <p className="text-xs text-muted-foreground leading-relaxed">Enterprise authentication matrix validation.</p>
            </div>
            <p className="text-[10px] text-muted-foreground font-semibold">Catalog v1.4.0 • Mocked Staging Credentials</p>
          </div>

          {/* Right form */}
          <div className="flex-1 p-8 flex flex-col justify-center max-w-md mx-auto">
            <h3 className="text-sm font-extrabold text-foreground">Authenticate Staging Access</h3>
            <p className="text-[10px] text-muted-foreground mt-0.5 mb-6">Enter account email address.</p>
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <Input placeholder="name@corporation.com" type="email" required />
              <Input placeholder="••••••••" type="password" required />
              <Button variant="primary" size="sm" type="submit" className="w-full">Sign In</Button>
            </form>
          </div>
        </div>
      )}

      {style === 'minimal' && (
        <div className="max-w-xs mx-auto space-y-6 pt-12">
          <div className="text-center">
            <h3 className="text-base font-black text-foreground">Sign In</h3>
            <p className="text-xs text-muted-foreground mt-1">Staged minimal view</p>
          </div>
          <form onSubmit={handleLoginSubmit} className="space-y-3">
            <Input placeholder="Work Email" type="email" required />
            <Input placeholder="Password" type="password" required />
            <Button variant="primary" className="w-full" type="submit">Sign In</Button>
          </form>
        </div>
      )}
    </div>
  );
}
