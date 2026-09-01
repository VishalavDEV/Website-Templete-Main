import React from 'react';
import { Card } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';
import { Input } from '../../../components/ui/Input';
import { PageHeader } from '../../../components/common';
import { useToast } from '../../../app/providers/ToastProvider';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

export default function ContactPage() {
  const { toast } = useToast();

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message dispatched to Support Queue!');
  };

  return (
    <div className="space-y-6 select-none max-w-4xl mx-auto">
      <PageHeader title="Contact Operations" subtitle="Submit tickets, review office coordinate locations, and find secure support channels." />

      <div className="grid gap-6 md:grid-cols-2">
        {/* Left pane Contact Info */}
        <div className="space-y-6">
          <Card title="Secure Contact Info" subtitle="Direct department phone lines.">
            <div className="space-y-4 text-xs">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-4.5 w-4.5 text-primary shrink-0" />
                <span>ops-support@corporation.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="h-4.5 w-4.5 text-primary shrink-0" />
                <span>+1 482-990-22 (HQ desk)</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-4.5 w-4.5 text-primary shrink-0" />
                <span>100 Pine St, San Francisco, CA</span>
              </div>
            </div>
          </Card>

          {/* Map layout illustration */}
          <Card title="HQ Region Coordinate Map">
            <div className="aspect-[16/9] border border-border bg-muted/10 rounded-xl flex items-center justify-center relative overflow-hidden">
              <Globe className="h-20 w-20 text-primary/20 animate-pulse" />
              <div className="absolute top-1/3 left-1/4 h-2.5 w-2.5 rounded-full bg-primary animate-ping"></div>
              <div className="absolute top-1/3 left-1/4 h-2.5 w-2.5 rounded-full bg-primary"></div>
              <span className="absolute bottom-2 right-3 text-[9px] text-muted-foreground font-semibold">Active server cluster nodes</span>
            </div>
          </Card>
        </div>

        {/* Right pane Contact Form */}
        <Card title="Send Message" subtitle="Staged client inbox support request form.">
          <form onSubmit={handleSend} className="space-y-4">
            <div>
              <label className="text-xs font-bold text-muted-foreground block mb-1">Your Full Name</label>
              <Input placeholder="Jane Doe" required />
            </div>
            <div>
              <label className="text-xs font-bold text-muted-foreground block mb-1">Corporate Email Address</label>
              <Input type="email" placeholder="name@company.com" required />
            </div>
            <div>
              <label className="text-xs font-bold text-muted-foreground block mb-1">Your Message</label>
              <textarea placeholder="Describe staging or database inquiries..." className="w-full text-xs min-h-[100px] border border-border bg-background px-3 py-2 rounded-lg focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring text-foreground" required></textarea>
            </div>
            <Button variant="primary" size="sm" className="w-full" type="submit">Submit Request</Button>
          </form>
        </Card>
      </div>
    </div>
  );
}
