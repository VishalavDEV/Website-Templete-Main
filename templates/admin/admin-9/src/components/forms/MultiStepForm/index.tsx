import React, { useState } from 'react';
import { Button } from '../../ui/Button';
import { Input } from '../../ui/Input';
import { Checkbox } from '../../ui/Checkbox';
import { useToast } from '../../../app/providers/ToastProvider';

export function MultiStepForm() {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [fields, setFields] = useState({ companyName: '', employees: '', cloudAccess: false });

  const handleNext = () => setStep(s => Math.min(s + 1, 3));
  const handlePrev = () => setStep(s => Math.max(s - 1, 1));
  const handleFinish = () => {
    toast.success('MultiStep wizard complete! Core config registered.');
    setStep(1);
  };

  return (
    <div className="bg-card p-6 border border-border rounded-xl shadow-sm max-w-md w-full space-y-6 select-none">
      {/* Step Indicators */}
      <div className="flex items-center justify-between border-b border-border pb-4">
        {[1, 2, 3].map((num) => (
          <div key={num} className="flex items-center gap-2">
            <span className={`h-6 w-6 rounded-full flex items-center justify-center text-xs font-bold ${
              step === num ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
            }`}>
              {num}
            </span>
            <span className="text-[10px] font-bold text-muted-foreground uppercase hidden sm:inline">Step {num}</span>
          </div>
        ))}
      </div>

      <div className="min-h-36">
        {step === 1 && (
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-foreground">Step 1: Enterprise registration</h4>
            <Input 
              placeholder="e.g. Acme Corporation Ltd." 
              value={fields.companyName}
              onChange={(e) => setFields({ ...fields, companyName: e.target.value })}
            />
          </div>
        )}

        {step === 2 && (
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-foreground">Step 2: Workforce size</h4>
            <Input 
              placeholder="Number of global staff (e.g. 250)" 
              value={fields.employees}
              onChange={(e) => setFields({ ...fields, employees: e.target.value })}
            />
          </div>
        )}

        {step === 3 && (
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-foreground">Step 3: Access control</h4>
            <label className="flex items-center gap-2.5 text-xs text-foreground cursor-pointer">
              <Checkbox 
                checked={fields.cloudAccess}
                onChange={(e) => setFields({ ...fields, cloudAccess: e.target.checked })}
              />
              <span>Enable automatic cloud server syncing</span>
            </label>
          </div>
        )}
      </div>

      <div className="flex justify-between pt-4 border-t border-border">
        <Button variant="outline" size="sm" onClick={handlePrev} disabled={step === 1}>Previous</Button>
        {step < 3 ? (
          <Button variant="primary" size="sm" onClick={handleNext}>Next step</Button>
        ) : (
          <Button variant="success" size="sm" onClick={handleFinish}>Finish installation</Button>
        )}
      </div>
    </div>
  );
}
