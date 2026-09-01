export interface InvoiceLineItem {
  desc: string;
  qty: number;
  unit: string;
  total: string;
}

export interface InvoiceRecord {
  id: string;
  client: string;
  amount: string;
  status: 'Paid' | 'Pending' | 'Overdue';
  items: InvoiceLineItem[];
}
