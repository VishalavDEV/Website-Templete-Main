import React, { useState } from 'react';
import { Card } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';
import { useToast } from '../../../app/providers/ToastProvider';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Mail, CheckCircle } from 'lucide-react';

export default function EmailVerificationPage() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [code, setCode] = useState('');

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.length < 4) return toast.error('Verification code must be 4 digits.');
    toast.success('Email validated successfully! Redirecting...');
    navigate('/auth/login');
  };

  return (
    <div className="max-w-md mx-auto min-h-[400px] flex items-center select-none pt-6 pb-8">
      <Card title="Awaiting email verification" subtitle="Please verify code to sync access keys.">
        <form onSubmit={handleVerify} className="space-y-4 pt-2">
          <p className="text-xs text-muted-foreground leading-relaxed">
            Enter the 4-digit code spooled to your address inbox folders.
          </p>
          <input 
            type="text" 
            maxLength={4}
            value={code}
            onChange={(e) => setCode(e.target.value.replace(/\D/g, ''))}
            placeholder="e.g. 8890" 
            className="w-full text-center tracking-widest text-lg font-extrabold h-11 border border-border bg-background rounded-lg focus:outline-none" 
            required 
          />
          <Button variant="primary" size="sm" type="submit" className="w-full">Verify credentials</Button>
          <button 
            type="button" 
            onClick={() => toast.success('Verification code resent successfully.')}
            className="text-[10px] text-primary hover:underline font-bold text-center block w-full mt-2 cursor-pointer"
          >
            Resend verification email
          </button>
        </form>
      </Card>
    </div>
  );
}
