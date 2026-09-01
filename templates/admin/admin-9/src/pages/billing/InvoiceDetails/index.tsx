import React from 'react';
import { Card } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';
import { Badge } from '../../../components/ui/Badge';
import { PageHeader } from '../../../components/common';
import { useToast } from '../../../app/providers/ToastProvider';
import { Printer, Download, ArrowLeft } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

export default function InvoiceDetailsPage() {
  const { id = 'INV-2026-002' } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();

  const invoice = {
    id,
    client: 'Wayne Enterprises',
    vat: 'VAT-EU88902A',
    address: '1007 Mountain Drive, Gotham City',
    date: '2026-08-18',
    dueDate: '2026-09-18',
    status: 'Overdue',
    items: [
      { desc: 'Staging DB Sync Node License', qty: 1, unit: '$3,500.00', total: '$3,500.00' },
      { desc: 'SSL Credentials Renewal Support', qty: 1, unit: '$700.00', total: '$700.00' }
    ],
    subtotal: '$4,200.00',
    tax: '$798.00 (19%)',
    grandTotal: '$4,998.00'
  };

  const handlePrint = () => {
    toast.info('Sending print job to network spooler...');
    window.print();
  };

  return (
    <div className="space-y-6 select-none max-w-3xl mx-auto">
      <div className="flex items-center gap-3">
        <Button variant="outline" size="sm" leftIcon={<ArrowLeft className="h-4 w-4" />} onClick={() => navigate('/apps/invoices')}>
          Back to Invoices
        </Button>
      </div>

      <PageHeader 
        title={`Invoice Preview: ${id}`} 
        subtitle="Customer details, mock breakdown lines, tax calculations, and operations timelines."
        actions={
          <>
            <Button variant="outline" size="sm" leftIcon={<Printer className="h-4 w-4" />} onClick={handlePrint}>Print</Button>
            <Button variant="primary" size="sm" leftIcon={<Download className="h-4 w-4" />} onClick={() => toast.success('Downloaded PDF invoice locally.')}>Download PDF</Button>
          </>
        }
      />

      {/* Invoice Details Layout */}
      <div className="grid gap-6 md:grid-cols-3">
        {/* Left core details preview */}
        <div className="md:col-span-2 space-y-6">
          <Card>
            <div className="p-4 space-y-6">
              {/* Header */}
              <div className="flex justify-between items-start border-b border-border/60 pb-4">
                <div>
                  <h3 className="text-sm font-extrabold text-foreground">{invoice.client}</h3>
                  <p className="text-[10px] text-muted-foreground mt-0.5">{invoice.address}</p>
                  <p className="text-[10px] text-muted-foreground">VAT: {invoice.vat}</p>
                </div>
                <div className="text-right">
                  <Badge variant="destructive">{invoice.status}</Badge>
                  <span className="text-[10px] text-muted-foreground block mt-1">Due: {invoice.dueDate}</span>
                </div>
              </div>

              {/* Items Table */}
              <table className="w-full text-xs text-left">
                <thead>
                  <tr className="border-b border-border/80 text-muted-foreground uppercase font-bold text-[9px]">
                    <th className="py-2">Description Topic</th>
                    <th className="py-2 text-center">Qty</th>
                    <th className="py-2 text-right">Unit Price</th>
                    <th className="py-2 text-right">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60 text-foreground/80 font-medium">
                  {invoice.items.map((item, idx) => (
                    <tr key={idx}>
                      <td className="py-2.5">{item.desc}</td>
                      <td className="py-2.5 text-center">{item.qty}</td>
                      <td className="py-2.5 text-right">{item.unit}</td>
                      <td className="py-2.5 text-right font-semibold text-foreground">{item.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Totals Summary */}
              <div className="border-t border-border/80 pt-4 flex flex-col items-end text-xs space-y-2">
                <div className="flex justify-between w-48 text-muted-foreground"><span>Subtotal:</span><span className="font-semibold text-foreground">{invoice.subtotal}</span></div>
                <div className="flex justify-between w-48 text-muted-foreground"><span>VAT Tax:</span><span className="font-semibold text-foreground">{invoice.tax}</span></div>
                <div className="flex justify-between w-48 border-t border-border pt-2 text-sm font-bold text-foreground"><span>Grand Total:</span><span className="text-primary">{invoice.grandTotal}</span></div>
              </div>
            </div>
          </Card>
        </div>

        {/* Right timeline details */}
        <Card title="Invoice Operations Timeline" subtitle="Trace transaction logs.">
          <div className="relative border-l border-border pl-4 ml-1 space-y-5 text-xs">
            {[
              { label: 'Invoice Generated', time: 'Aug 18, 10:00 AM' },
              { label: 'Sent to Customer (Email)', time: 'Aug 18, 10:15 AM' },
              { label: 'Payment Overdue Notice', time: 'Aug 19, 09:00 AM' }
            ].map((step, i) => (
              <div key={i} className="relative">
                <span className="absolute -left-[21px] top-1.5 h-2 w-2 rounded-full bg-primary"></span>
                <p className="font-bold text-foreground">{step.label}</p>
                <span className="text-[9px] text-muted-foreground">{step.time}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
