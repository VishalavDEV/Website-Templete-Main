export interface InvoiceLineItem {
  desc: string;
  qty: number;
  unit: string;
  total: string;
}

export interface InvoiceItem {
  id: string;
  client: string;
  vat: string;
  address: string;
  date: string;
  dueDate: string;
  amount: string;
  status: 'Paid' | 'Pending' | 'Overdue';
  items: InvoiceLineItem[];
}

export const mockInvoices: InvoiceItem[] = [
  {
    id: 'INV-2026-001',
    client: 'Stark Industries',
    vat: 'VAT-US9901A',
    address: '10880 Wilshire Blvd, Los Angeles, CA',
    date: '2026-08-19',
    dueDate: '2026-09-19',
    amount: '$14,500.00',
    status: 'Paid',
    items: [
      { desc: 'Enterprise Database Sync Licenses', qty: 3, unit: '$4,500.00', total: '$13,500.00' },
      { desc: 'SSL Premium Credentials Support', qty: 1, unit: '$1,000.00', total: '$1,000.00' }
    ]
  },
  {
    id: 'INV-2026-002',
    client: 'Wayne Enterprises',
    vat: 'VAT-EU88902A',
    address: '1007 Mountain Drive, Gotham City',
    date: '2026-08-18',
    dueDate: '2026-09-18',
    amount: '$4,200.00',
    status: 'Overdue',
    items: [
      { desc: 'Staging DB Sync Node License', qty: 1, unit: '$3,500.00', total: '$3,500.00' },
      { desc: 'SSL Credentials Renewal Support', qty: 1, unit: '$700.00', total: '$700.00' }
    ]
  }
];
