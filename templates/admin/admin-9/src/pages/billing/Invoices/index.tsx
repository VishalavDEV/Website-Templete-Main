/* src/pages/billing/Invoices/index.tsx */
import React, { useState, useMemo } from 'react';
import { Card } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';
import { Badge } from '../../../components/ui/Badge';
import { DataTable } from '../../../components/tables';
import { PageHeader } from '../../../components/common';
import { useToast } from '../../../app/providers/ToastProvider';
import { useNavigate } from 'react-router-dom';
import { 
  Search, Grid, List, Download, Eye, Plus, Calendar, FileText, 
  Trash2, Landmark, Calculator, Receipt, ArrowLeft
} from 'lucide-react';

interface InvoiceLineItem {
  desc: string;
  qty: number;
  unit: number; // Numeric unit price
}

interface InvoiceRecord {
  id: string;
  client: string;
  vat: string;
  address: string;
  date: string;
  dueDate: string;
  amount: string; // Grand total display
  status: 'Paid' | 'Pending' | 'Overdue';
  items: InvoiceLineItem[];
}

export default function InvoicesPage() {
  const { toast } = useToast();
  const navigate = useNavigate();
  
  // Workstation sub-module tabs: 'list' | 'create'
  const [activeTab, setActiveTab] = useState<'list' | 'create'>('list');

  // Toolbar state
  const [layoutMode, setLayoutMode] = useState<'table' | 'cards'>('table');
  const [filterStatus, setFilterStatus] = useState<'all' | 'Paid' | 'Pending' | 'Overdue'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Central invoices state
  const [invoices, setInvoices] = useState<InvoiceRecord[]>([
    { 
      id: 'INV-2026-001', 
      client: 'Stark Industries', 
      vat: 'VAT-US99021X',
      address: '10880 Wilshire Blvd, Los Angeles, CA',
      date: '2026-08-19', 
      dueDate: '2026-09-19',
      amount: '$14,500.00', 
      status: 'Paid',
      items: [
        { desc: 'Staging DB Sync Node License', qty: 2, unit: 5000 },
        { desc: 'Operations consulting service', qty: 9, unit: 500 }
      ]
    },
    { 
      id: 'INV-2026-002', 
      client: 'Wayne Enterprises', 
      vat: 'VAT-EU88902A',
      address: '1007 Mountain Drive, Gotham City',
      date: '2026-08-18', 
      dueDate: '2026-09-18',
      amount: '$4,998.00', 
      status: 'Overdue',
      items: [
        { desc: 'Staging DB Sync Node License', qty: 1, unit: 3500 },
        { desc: 'SSL Credentials Renewal Support', qty: 1, unit: 700 }
      ]
    },
    { 
      id: 'INV-2026-003', 
      client: 'Vance Refrigeration', 
      vat: 'VAT-US40023B',
      address: '1725 Slough Avenue, Scranton, PA',
      date: '2026-08-18', 
      dueDate: '2026-09-18',
      amount: '$850.00', 
      status: 'Paid',
      items: [
        { desc: 'Refrigeration unit service', qty: 1, unit: 850 }
      ]
    },
    { 
      id: 'INV-2026-004', 
      client: 'Oscorp Chemical', 
      vat: 'VAT-US11204C',
      address: 'Times Square, New York, NY',
      date: '2026-08-17', 
      dueDate: '2026-09-17',
      amount: '$950.00', 
      status: 'Paid',
      items: [
        { desc: 'Lab equipment staging audit', qty: 1, unit: 950 }
      ]
    },
    { 
      id: 'INV-2026-005', 
      client: 'Daily Bugle', 
      vat: 'VAT-US33201D',
      address: '39th Street, New York, NY',
      date: '2026-08-17', 
      dueDate: '2026-09-17',
      amount: '$1,100.00', 
      status: 'Pending',
      items: [
        { desc: 'Newspaper print workflow consulting', qty: 2, unit: 550 }
      ]
    }
  ]);

  // Form states for Create Invoice sub-module
  const [formClient, setFormClient] = useState('');
  const [formVat, setFormVat] = useState('VAT-US' + Math.floor(Math.random() * 90000 + 10000) + 'X');
  const [formAddress, setFormAddress] = useState('');
  const [formDate, setFormDate] = useState('2026-08-21');
  const [formDueDate, setFormDueDate] = useState('2026-09-21');
  const [formStatus, setFormStatus] = useState<'Paid' | 'Pending' | 'Overdue'>('Pending');
  const [formItems, setFormItems] = useState<InvoiceLineItem[]>([
    { desc: 'Staging Audit consulting', qty: 1, unit: 1200 }
  ]);

  // 1. Line Item Form triggers
  const handleAddItemRow = () => {
    setFormItems(prev => [...prev, { desc: '', qty: 1, unit: 0 }]);
  };

  const handleUpdateItemField = (index: number, key: keyof InvoiceLineItem, value: any) => {
    setFormItems(prev => prev.map((item, idx) => {
      if (idx === index) {
        return {
          ...item,
          [key]: key === 'desc' ? value : Number(value) || 0
        };
      }
      return item;
    }));
  };

  const handleRemoveItemRow = (index: number) => {
    if (formItems.length === 1) {
      toast.error('Invoice must contain at least 1 line item.');
      return;
    }
    setFormItems(prev => prev.filter((_, idx) => idx !== index));
  };

  // 2. Calculations
  const calculatedSubtotal = useMemo(() => {
    return formItems.reduce((acc, item) => acc + (item.qty * item.unit), 0);
  }, [formItems]);

  const calculatedTax = useMemo(() => {
    return Math.round(calculatedSubtotal * 0.19 * 100) / 100; // 19% standard VAT tax
  }, [calculatedSubtotal]);

  const calculatedGrandTotal = useMemo(() => {
    return calculatedSubtotal + calculatedTax;
  }, [calculatedSubtotal, calculatedTax]);

  // 3. Create Invoice Submit action
  const handleCreateInvoiceSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formClient.trim() || !formAddress.trim()) {
      toast.error('Billed Client and Address are required.');
      return;
    }

    const nextId = `INV-2026-${String(invoices.length + 1).padStart(3, '0')}`;
    const newInvoice: InvoiceRecord = {
      id: nextId,
      client: formClient,
      vat: formVat,
      address: formAddress,
      date: formDate,
      dueDate: formDueDate,
      amount: `$${calculatedGrandTotal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      status: formStatus,
      items: [...formItems]
    };

    setInvoices(prev => [newInvoice, ...prev]);
    setActiveTab('list');

    // Clear form states
    setFormClient('');
    setFormVat('VAT-US' + Math.floor(Math.random() * 90000 + 10000) + 'X');
    setFormAddress('');
    setFormDate('2026-08-21');
    setFormDueDate('2026-09-21');
    setFormStatus('Pending');
    setFormItems([{ desc: 'Staging Audit consulting', qty: 1, unit: 1200 }]);

    toast.success(`Invoice ${nextId} created successfully.`);
  };

  // 4. Filtering Invoices
  const filteredInvoices = useMemo(() => {
    return invoices.filter(inv => {
      // Status filter
      if (filterStatus !== 'all' && inv.status !== filterStatus) return false;

      // Search match
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesClient = inv.client.toLowerCase().includes(q);
        const matchesId = inv.id.toLowerCase().includes(q);
        if (!matchesClient && !matchesId) return false;
      }

      return true;
    });
  }, [invoices, filterStatus, searchQuery]);

  const columns = [
    { key: 'id', label: 'Invoice Code', isSortable: true },
    { key: 'client', label: 'Billed Client', isSortable: true },
    { key: 'date', label: 'Billing Date', isSortable: true },
    { key: 'amount', label: 'Amount Due', isSortable: true },
    { key: 'status', label: 'Payment Status', isSortable: true, render: (row: InvoiceRecord) => {
      const v = row.status === 'Paid' ? 'success' : row.status === 'Overdue' ? 'destructive' : 'warning';
      return <Badge variant={v}>{row.status}</Badge>;
    }},
    { key: 'action', label: '', render: (row: InvoiceRecord) => (
      <div className="flex gap-1.5 justify-end">
        <Button 
          size="sm" 
          variant="outline" 
          className="h-7 px-2 text-[10px]" 
          leftIcon={<Eye className="h-3.5 w-3.5" />} 
          onClick={() => navigate(`/apps/invoices/${row.id}`)}
        >
          Details
        </Button>
      </div>
    )}
  ];

  return (
    <div className="space-y-6 select-none relative pb-12">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-extrabold text-foreground tracking-tight">Invoices Manager</h1>
          <p className="text-xs text-muted-foreground mt-0.5">
            Review payments timelines, draft tax items layouts, and compile corporate billing invoices.
          </p>
        </div>
        {activeTab === 'list' ? (
          <Button 
            variant="primary" 
            size="sm" 
            leftIcon={<Plus className="h-4 w-4" />}
            onClick={() => setActiveTab('create')}
            className="h-8.5 text-xs shadow-sm"
          >
            Create Invoice
          </Button>
        ) : (
          <Button 
            variant="outline" 
            size="sm" 
            leftIcon={<ArrowLeft className="h-4 w-4" />}
            onClick={() => setActiveTab('list')}
            className="h-8.5 text-xs"
          >
            Back to List
          </Button>
        )}
      </div>

      {/* Main Tabs */}
      <div className="flex border-b border-border/80 gap-6 text-xs font-semibold pb-0">
        <button 
          onClick={() => setActiveTab('list')}
          className={`pb-3 border-b-2 px-1 cursor-pointer transition-all ${
            activeTab === 'list' ? 'border-primary text-primary font-bold' : 'border-transparent text-muted-foreground hover:text-foreground'
          }`}
        >
          Invoice List
        </button>
        <button 
          onClick={() => setActiveTab('create')}
          className={`pb-3 border-b-2 px-1 cursor-pointer transition-all ${
            activeTab === 'create' ? 'border-primary text-primary font-bold' : 'border-transparent text-muted-foreground hover:text-foreground'
          }`}
        >
          Create Invoice Form
        </button>
      </div>

      {/* Sub-module layouts */}
      {activeTab === 'create' ? (
        <form onSubmit={handleCreateInvoiceSubmit} className="space-y-6">
          <div className="grid gap-6 md:grid-cols-3">
            {/* Left panels form */}
            <div className="md:col-span-2 space-y-6">
              <Card title="Billing Details" subtitle="Input customer information and identifiers.">
                <div className="space-y-4 pt-2">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-bold text-muted-foreground uppercase block mb-1">Billed Client</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Stark Industries" 
                        value={formClient}
                        onChange={e => setFormClient(e.target.value)}
                        className="w-full text-xs h-9 border border-border bg-background px-3 rounded-lg text-foreground focus:outline-none"
                        required 
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-muted-foreground uppercase block mb-1">VAT Number</label>
                      <input 
                        type="text" 
                        placeholder="e.g. VAT-US99021X" 
                        value={formVat}
                        onChange={e => setFormVat(e.target.value)}
                        className="w-full text-xs h-9 border border-border bg-background px-3 rounded-lg text-foreground focus:outline-none"
                        required 
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-muted-foreground uppercase block mb-1">Billing Address</label>
                    <textarea 
                      placeholder="Enter billing address details..." 
                      value={formAddress}
                      onChange={e => setFormAddress(e.target.value)}
                      className="w-full text-xs min-h-[60px] border border-border bg-background px-3 py-2 rounded-lg text-foreground focus:outline-none"
                      required 
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="text-[10px] font-bold text-muted-foreground uppercase block mb-1">Billing Date</label>
                      <input 
                        type="date" 
                        value={formDate} 
                        onChange={e => setFormDate(e.target.value)}
                        className="w-full text-xs h-9 border border-border bg-background px-3 rounded-lg text-foreground focus:outline-none" 
                        required 
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-muted-foreground uppercase block mb-1">Due Date</label>
                      <input 
                        type="date" 
                        value={formDueDate} 
                        onChange={e => setFormDueDate(e.target.value)}
                        className="w-full text-xs h-9 border border-border bg-background px-3 rounded-lg text-foreground focus:outline-none" 
                        required 
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-muted-foreground uppercase block mb-1">Payment Status</label>
                      <select 
                        value={formStatus} 
                        onChange={e => setFormStatus(e.target.value as any)}
                        className="w-full text-xs h-9 border border-border bg-background px-2.5 rounded-lg text-foreground focus:outline-none font-semibold"
                      >
                        <option value="Pending">Pending</option>
                        <option value="Paid">Paid</option>
                        <option value="Overdue">Overdue</option>
                      </select>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Line Items compiler */}
              <Card 
                title="Invoice Line Items" 
                subtitle="Enter description breakdown, quantity factor, and unit prices."
              >
                <div className="pt-2">
                  <div className="flex justify-between items-center mb-4 pb-2 border-b border-border/40">
                    <span className="text-[10px] font-bold text-muted-foreground uppercase">Breakdown List</span>
                    <Button 
                      type="button" 
                      variant="outline" 
                      size="sm" 
                      className="h-8 text-xs"
                      leftIcon={<Plus className="h-3.5 w-3.5" />}
                      onClick={handleAddItemRow}
                    >
                      Add Item
                    </Button>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs text-left">
                      <thead>
                        <tr className="border-b border-border/80 text-muted-foreground uppercase font-bold text-[9px] tracking-wide">
                          <th className="py-2">Description</th>
                          <th className="py-2 w-20 text-center">Qty</th>
                          <th className="py-2 w-32 text-right">Unit Price</th>
                          <th className="py-2 w-28 text-right">Total</th>
                          <th className="py-2 w-12 text-center"></th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border/40 font-semibold text-foreground/80">
                        {formItems.map((item, idx) => (
                          <tr key={idx}>
                            <td className="py-2.5 pr-2">
                              <input 
                                type="text" 
                                placeholder="Item description detail..." 
                                value={item.desc}
                                onChange={e => handleUpdateItemField(idx, 'desc', e.target.value)}
                                className="w-full text-xs h-8 border border-border/50 bg-background px-2.5 rounded-md focus:outline-none text-foreground font-normal"
                                required
                              />
                            </td>
                            <td className="py-2.5 text-center px-1">
                              <input 
                                type="number" 
                                min="1" 
                                value={item.qty}
                                onChange={e => handleUpdateItemField(idx, 'qty', e.target.value)}
                                className="w-full text-xs h-8 border border-border/50 bg-background text-center rounded-md focus:outline-none text-foreground font-bold"
                                required
                              />
                            </td>
                            <td className="py-2.5 text-right px-1">
                              <input 
                                type="number" 
                                min="0" 
                                step="0.01" 
                                value={item.unit}
                                onChange={e => handleUpdateItemField(idx, 'unit', e.target.value)}
                                className="w-full text-xs h-8 border border-border/50 bg-background text-right pr-2.5 rounded-md focus:outline-none text-foreground font-bold"
                                required
                              />
                            </td>
                            <td className="py-2.5 text-right font-black text-foreground pr-2.5">
                              ${(item.qty * item.unit).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                            </td>
                            <td className="py-2.5 text-center">
                              <button 
                                type="button" 
                                onClick={() => handleRemoveItemRow(idx)}
                                className="p-1 rounded hover:bg-destructive/10 text-muted-foreground hover:text-destructive cursor-pointer border-none bg-transparent"
                              >
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </Card>
            </div>

            {/* Calculations summaries right panel */}
            <div className="space-y-6">
              <Card title="Calculations Summary" subtitle="Total pricing breakdown sync.">
                <div className="space-y-4 pt-2 text-xs font-semibold text-muted-foreground">
                  <div className="flex justify-between pb-2 border-b border-border/40">
                    <span>Subtotal:</span>
                    <span className="text-foreground font-black">${calculatedSubtotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-border/40">
                    <span>VAT Standard (19%):</span>
                    <span className="text-foreground font-black">${calculatedTax.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
                  </div>
                  <div className="flex justify-between pt-1 text-sm font-black text-foreground">
                    <span className="flex items-center gap-1.5"><Receipt className="h-4.5 w-4.5 text-primary" /> Grand Total:</span>
                    <span className="text-primary text-base">${calculatedGrandTotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
                  </div>
                  <div className="pt-4 border-t border-border/40 flex flex-col gap-2">
                    <Button variant="primary" size="sm" type="submit" className="w-full">Create Invoice</Button>
                    <Button variant="outline" size="sm" type="button" className="w-full" onClick={() => setActiveTab('list')}>Cancel</Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </form>
      ) : (
        <div className="space-y-6">
          {/* Toolbar */}
          <div className="flex flex-wrap items-center justify-between gap-4 bg-card p-3.5 border border-border rounded-xl shadow-sm">
            <div className="flex flex-wrap gap-1.5 flex-1 max-w-lg">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
                <input 
                  type="text" 
                  placeholder="Search invoices..." 
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="w-full text-xs h-8.5 pl-8 pr-3 border border-border bg-muted/10 rounded-lg focus:outline-none focus:border-primary text-foreground"
                />
              </div>

              {(['all', 'Paid', 'Pending', 'Overdue'] as const).map((s) => (
                <Button 
                  key={s} 
                  size="sm" 
                  className="h-8.5 text-xs"
                  variant={filterStatus === s ? 'primary' : 'outline'}
                  onClick={() => setFilterStatus(s)}
                >
                  <span className="capitalize">{s === 'all' ? 'All' : s}</span>
                </Button>
              ))}
            </div>
            <div className="flex gap-1 border border-border bg-card p-1 rounded-lg">
              <button onClick={() => setLayoutMode('table')} className={`p-1.5 rounded cursor-pointer border-none bg-transparent ${layoutMode === 'table' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:bg-accent/40'}`}><List className="h-4 w-4" /></button>
              <button onClick={() => setLayoutMode('cards')} className={`p-1.5 rounded cursor-pointer border-none bg-transparent ${layoutMode === 'cards' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:bg-accent/40'}`}><Grid className="h-4 w-4" /></button>
            </div>
          </div>

          {layoutMode === 'table' ? (
            <Card title="Invoices Queue Ledger" subtitle="Review line items and totals.">
              <DataTable 
                columns={columns as any} 
                data={filteredInvoices} 
                isSelectable 
                bulkActions={(selected: any[]) => (
                  <Button 
                    size="sm" 
                    variant="outline" 
                    leftIcon={<Download className="h-4 w-4" />}
                    onClick={() => toast.success(`Downloaded ${selected.length} invoices as ZIP bundle.`)}
                  >
                    Download Selected
                  </Button>
                )}
              />
            </Card>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredInvoices.map((inv, i) => (
                <Card key={i} title={inv.id}>
                  <div className="space-y-3.5 mt-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-foreground">{inv.client}</span>
                      <Badge variant={inv.status === 'Paid' ? 'success' : inv.status === 'Overdue' ? 'destructive' : 'warning'}>{inv.status}</Badge>
                    </div>
                    <div className="flex justify-between items-end border-t border-border/50 pt-3">
                      <div>
                        <span className="text-[9px] text-muted-foreground uppercase block font-bold">Total Due</span>
                        <span className="text-sm font-extrabold text-foreground">{inv.amount}</span>
                      </div>
                      <Button size="sm" variant="outline" className="h-7 px-2 text-[10px]" onClick={() => navigate(`/apps/invoices/${inv.id}`)}>Details →</Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}

          {/* Empty state invoices list */}
          {filteredInvoices.length === 0 && (
            <div className="bg-card border border-dashed border-border/80 rounded-xl p-12 text-center text-muted-foreground shadow-sm">
              <Landmark className="h-10 w-10 mx-auto text-muted-foreground/40 mb-2" />
              <span className="text-xs font-bold block">No invoices matches query parameters</span>
              <p className="text-[10px] text-muted-foreground/80 mt-1">
                Verify search letters or adjust filters status selectors.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
