import React, { useState } from 'react';
import { Card } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';
import { Input } from '../../../components/ui/Input';
import { Checkbox } from '../../../components/ui/Checkbox';
import { useToast } from '../../../app/providers/ToastProvider';
import { useNavigate } from 'react-router-dom';

export default function RegisterPage() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [fields, setFields] = useState({ name: '', email: '', psw: '', terms: false });

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 2) {
      setStep(2);
    } else {
      if (!fields.terms) return toast.error('Acknowledge user terms to continue.');
      toast.success('Registration pending email approval.');
      navigate('/auth/login');
    }
  };

  return (
    <div className="max-w-md mx-auto min-h-[400px] flex items-center select-none pt-6 pb-8">
      <Card title="Developer Registration" subtitle={`Step ${step} of 2`}>
        <form onSubmit={handleRegister} className="space-y-4 pt-2">
          {step === 1 ? (
            <>
              <div>
                <label className="text-[10px] font-bold text-muted-foreground uppercase block mb-1">Full Username</label>
                <Input value={fields.name} onChange={(e) => setFields({ ...fields, name: e.target.value })} required />
              </div>
              <div>
                <label className="text-[10px] font-bold text-muted-foreground uppercase block mb-1">Work Email</label>
                <Input type="email" value={fields.email} onChange={(e) => setFields({ ...fields, email: e.target.value })} required />
              </div>
              <Button variant="primary" size="sm" type="submit" className="w-full mt-2">Next Step →</Button>
            </>
          ) : (
            <>
              <div>
                <label className="text-[10px] font-bold text-muted-foreground uppercase block mb-1">Choose Account Password</label>
                <Input type="password" value={fields.psw} onChange={(e) => setFields({ ...fields, psw: e.target.value })} required />
              </div>
              <label className="flex items-start gap-2.5 text-xs text-muted-foreground cursor-pointer">
                <Checkbox checked={fields.terms} onChange={(e) => setFields({ ...fields, terms: e.target.checked })} />
                <span>I acknowledge staging user guidelines and security privacy policies.</span>
              </label>
              <div className="flex gap-2 pt-2">
                <Button variant="outline" size="sm" type="button" onClick={() => setStep(1)}>Back</Button>
                <Button variant="primary" size="sm" type="submit" className="flex-1">Finish Registration</Button>
              </div>
            </>
          )}
        </form>
      </Card>
    </div>
  );
}
