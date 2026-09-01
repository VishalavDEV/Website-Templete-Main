import React, { useState } from 'react';
import { Card } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';
import { Badge } from '../../../components/ui/Badge';
import { Switch } from '../../../components/ui/Switch';
import { PageHeader } from '../../../components/common';
import { useToast } from '../../../app/providers/ToastProvider';
import { Check } from 'lucide-react';

export default function PricingPage() {
  const { toast } = useToast();
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    { name: 'Developer Plan', price: '$0', desc: 'Core visual placeholders templates for developer prototyping.', features: ['Full navigation templates', '15+ SVG chart layouts', 'Basic Table elements'], recommended: false },
    { name: 'Pro Plan', price: billingCycle === 'monthly' ? '$49' : '$39', desc: 'Enterprise staging workflows and advanced matrices.', features: ['Includes Developer plan', 'DataTables sort/filter components', 'Advanced repeatables FormSections', 'MFA security toggles'], recommended: true },
    { name: 'Enterprise Plan', price: 'Contact', desc: 'Custom database integrations and dedicated servers.', features: ['Includes Pro plan', 'Custom Slack/GitHub webhooks', 'Multi-tenant database sync rules', 'SLA support desk diagnostics'], recommended: false }
  ];

  const handleSubscribe = (plan: string) => {
    toast.success(`Staged subscription callback for ${plan} (${billingCycle})`);
  };

  return (
    <div className="space-y-8 select-none max-w-4xl mx-auto">
      <PageHeader title="Pricing Matrix Plans" subtitle="Select configuration options to mock monthly/yearly catalog pricing plans." />

      {/* Monthly/Yearly toggle */}
      <div className="flex items-center justify-center gap-3 bg-card p-3 border border-border rounded-xl w-fit mx-auto shadow-sm">
        <span className={`text-xs font-semibold ${billingCycle === 'monthly' ? 'text-primary' : 'text-muted-foreground'}`}>Monthly Billing</span>
        <Switch checked={billingCycle === 'yearly'} onChange={(e) => setBillingCycle(e.target.checked ? 'yearly' : 'monthly')} />
        <span className={`text-xs font-semibold flex items-center gap-1.5 ${billingCycle === 'yearly' ? 'text-primary' : 'text-muted-foreground'}`}>
          <span>Yearly Billing</span>
          <Badge variant="success">Save 20%</Badge>
        </span>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((plan, i) => (
          <div key={i} className={`bg-card border rounded-2xl p-6 shadow-sm flex flex-col justify-between relative ${
            plan.recommended ? 'border-primary shadow-md ring-1 ring-primary/20' : 'border-border'
          }`}>
            {plan.recommended && (
              <Badge variant="default" className="absolute -top-3 left-1/2 -translate-x-1/2">
                Recommended Plan
              </Badge>
            )}

            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-extrabold text-foreground">{plan.name}</h3>
                <p className="text-[10px] text-muted-foreground leading-relaxed mt-1">{plan.desc}</p>
              </div>

              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-black text-foreground">{plan.price}</span>
                {plan.price !== 'Contact' && (
                  <span className="text-xs text-muted-foreground">/{billingCycle === 'monthly' ? 'mo' : 'mo billed yearly'}</span>
                )}
              </div>

              <ul className="space-y-2 text-xs pt-4 border-t border-border/60">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-muted-foreground font-medium">
                    <Check className="h-4 w-4 text-success shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button 
              variant={plan.recommended ? 'primary' : 'outline'} 
              className="w-full mt-6"
              onClick={() => handleSubscribe(plan.name)}
            >
              {plan.price === 'Contact' ? 'Contact Sales' : 'Select Plan'}
            </Button>
          </div>
        ))}
      </div>

      {/* FAQ Section */}
      <Card title="Staging Billing FAQ" subtitle="Typical subscription queries answered.">
        <div className="grid gap-6 md:grid-cols-2 pt-2">
          <div>
            <h4 className="text-xs font-bold text-foreground">Can we change plans anytime?</h4>
            <p className="text-[10px] text-muted-foreground leading-relaxed mt-1">
              Yes, subscription settings support upgrade/downgrade rules, adjusting billed metrics instantly.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold text-foreground">Is there a free trial on Pro?</h4>
            <p className="text-[10px] text-muted-foreground leading-relaxed mt-1">
              We offer a 14-day mock developer sandbox testing trial before subscription renewals.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
