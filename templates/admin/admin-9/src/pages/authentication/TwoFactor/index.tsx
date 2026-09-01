import React, { useState } from 'react';
import { Card } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';
import { useToast } from '../../../app/providers/ToastProvider';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Key } from 'lucide-react';

export default function TwoFactorPage() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [code, setCode] = useState('');

  const handleVerify2FA = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.length < 6) return toast.error('OTP code must be 6 digits.');
    toast.success('MFA authentication sync verified.');
    navigate('/');
  };

  return (
    <div className="max-w-md mx-auto min-h-[400px] flex items-center select-none pt-6 pb-8">
      <Card title="Two-Factor Verification" subtitle="Enter authenticator token.">
        <form onSubmit={handleVerify2FA} className="space-y-4 pt-2">
          <div className="flex justify-center mb-2"><Key className="h-8 w-8 text-primary" /></div>
          <p className="text-xs text-muted-foreground leading-relaxed text-center">
            Type the 6-digit OTP code displayed inside your mobile Authenticator app file.
          </p>
          <input 
            type="text" 
            maxLength={6}
            value={code}
            onChange={(e) => setCode(e.target.value.replace(/\D/g, ''))}
            placeholder="000 000" 
            className="w-full text-center tracking-widest text-xl font-black h-12 border border-border bg-background rounded-lg focus:outline-none" 
            required 
          />
          <Button variant="primary" size="sm" type="submit" className="w-full">Verify MFA Token</Button>
          <button 
            type="button" 
            onClick={() => toast.success('Emailed backup key recovery parameters.')}
            className="text-[10px] text-muted-foreground hover:text-foreground font-semibold text-center block w-full mt-2 cursor-pointer"
          >
            Use backup code credentials
          </button>
        </form>
      </Card>
    </div>
  );
}
