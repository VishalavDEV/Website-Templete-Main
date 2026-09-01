import React, { useState } from 'react';
import { Card } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';
import { Input } from '../../../components/ui/Input';
import { useToast } from '../../../app/providers/ToastProvider';
import { useNavigate } from 'react-router-dom';
import { KeyRound, Mail, CheckCircle } from 'lucide-react';

export default function ForgotPasswordPage() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [stage, setStage] = useState<'email' | 'success'>('email');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStage('success');
    toast.success('Security password reset instructions sent!');
  };

  return (
    <div className="max-w-md mx-auto min-h-[400px] flex items-center select-none pt-6 pb-8">
      {stage === 'email' ? (
        <Card title="Reset security password" subtitle="Verify identity to unlock key chains.">
          <form onSubmit={handleSubmit} className="space-y-4 pt-2">
            <div>
              <label className="text-[10px] font-bold text-muted-foreground uppercase block mb-1">Corporate Email</label>
              <Input type="email" placeholder="name@corporation.com" required />
            </div>
            <Button variant="primary" size="sm" type="submit" className="w-full">Send Verification link</Button>
          </form>
        </Card>
      ) : (
        <div className="flex flex-col items-center justify-center p-8 border border-border bg-card rounded-2xl shadow-sm text-center w-full animate-in fade-in duration-200">
          <div className="h-12 w-12 rounded-full bg-success/15 text-success flex items-center justify-center mb-4">
            <CheckCircle className="h-6 w-6" />
          </div>
          <h3 className="text-sm font-extrabold text-foreground">Verification Sent</h3>
          <p className="text-xs text-muted-foreground mt-2 max-w-xs leading-relaxed">
            We have spooled a secure reset link to your email address. Check spam filter files.
          </p>
          <Button variant="outline" size="sm" className="mt-6 w-full" onClick={() => navigate('/auth/login')}>Back to Login</Button>
        </div>
      )}
    </div>
  );
}
