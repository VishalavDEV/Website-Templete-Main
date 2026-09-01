import React from 'react';
import { Check } from 'lucide-react';

export function Stepper({ steps, currentStep }: { steps: string[]; currentStep: number }) {
  return (
    <div className="flex items-center justify-between w-full select-none">
      {steps.map((step, i) => {
        const stepNum = i + 1;
        const isCompleted = currentStep > stepNum;
        const isActive = currentStep === stepNum;

        return (
          <React.Fragment key={i}>
            <div className="flex flex-col items-center relative">
              <div className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-all ${
                isCompleted 
                  ? 'bg-primary border-primary text-primary-foreground shadow-sm'
                  : isActive
                  ? 'border-primary text-primary bg-card ring-2 ring-primary/20'
                  : 'border-border text-muted-foreground bg-card'
              }`}>
                {isCompleted ? <Check className="h-4.5 w-4.5" /> : stepNum}
              </div>
              <span className={`text-[10px] font-bold mt-2 whitespace-nowrap ${
                isActive ? 'text-primary' : 'text-muted-foreground'
              }`}>
                {step}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div className="flex-1 h-0.5 mx-2 bg-border relative -top-3">
                <div className="bg-primary h-full transition-all duration-300" style={{ width: isCompleted ? '100%' : '0%' }}></div>
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
