export interface OrderItem {
  id: string;
  customerName: string;
  date: string;
  amount: string;
  status: 'Completed' | 'Pending' | 'Cancelled';
  itemCount: number;
}

export const mockOrders: OrderItem[] = [
  { id: 'ORD-2026-001', customerName: 'Stark Industries', date: '2026-08-19', amount: '$14,500.00', status: 'Completed', itemCount: 3 },
  { id: 'ORD-2026-002', customerName: 'Wayne Enterprises', date: '2026-08-18', amount: '$4,200.00', status: 'Pending', itemCount: 1 },
  { id: 'ORD-2026-003', customerName: 'Vance Refrigeration', date: '2026-08-18', amount: '$850.00', status: 'Completed', itemCount: 2 }
];
