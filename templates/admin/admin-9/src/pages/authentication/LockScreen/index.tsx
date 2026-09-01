import React, { useState } from 'react';
import { Avatar } from '../../../components/ui/Avatar';
import { Button } from '../../../components/ui/Button';
import { Input } from '../../../components/ui/Input';
import { useToast } from '../../../app/providers/ToastProvider';
import { useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';

export default function LockScreenPage() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [psw, setPsw] = useState('');

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (!psw) return;
    toast.success('Session credentials unlocked successfully!');
    navigate('/');
  };

  return (
    <div className="max-w-md mx-auto min-h-[400px] flex items-center justify-center select-none pt-6 pb-8">
      <div className="flex flex-col items-center justify-center p-8 border border-border bg-card rounded-2xl shadow-sm text-center w-full max-w-sm">
        <Avatar name="Diana Prince" size="lg" isOnline />
        <h3 className="text-sm font-extrabold text-foreground mt-3">Diana Prince</h3>
        <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider mt-0.5">Session Locked</p>
        
        <form onSubmit={handleUnlock} className="space-y-4 w-full mt-6">
          <Input 
            type="password" 
            placeholder="Type password to unlock..."
            value={psw}
            onChange={(e) => setPsw(e.target.value)}
            required
          />
          <Button variant="primary" size="sm" type="submit" className="w-full" leftIcon={<Lock className="h-4 w-4" />}>
            Unlock session
          </Button>
        </form>

        <button 
          onClick={() => navigate('/auth/login')}
          className="text-[10px] text-primary hover:underline font-bold mt-4 cursor-pointer"
        >
          Sign in with another account
        </button>
      </div>
    </div>
  );
}
