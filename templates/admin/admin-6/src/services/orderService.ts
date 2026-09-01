import { Order, Invoice } from '../types';
import { INITIAL_ORDERS, INITIAL_INVOICES } from '../data/mockData';
import { getStorageData, setStorageData } from './storageService';

const ORDERS_KEY = 'app_orders';
const INVOICES_KEY = 'app_invoices';

export const orderService = {
  getOrders: (): Order[] => {
    return getStorageData<Order[]>(ORDERS_KEY, INITIAL_ORDERS);
  },

  getOrderById: (id: string): Order | undefined => {
    const orders = orderService.getOrders();
    return orders.find((o) => o.id === id);
  },

  createOrder: (data: Omit<Order, 'id' | 'orderNumber' | 'date'>): Order => {
    const orders = orderService.getOrders();
    const newOrder: Order = {
      ...data,
      id: `ord_${Math.random().toString(36).substring(2, 7)}`,
      orderNumber: `ORD-2026-${Math.floor(1000 + Math.random() * 9000)}`,
      date: new Date().toISOString().split('T')[0],
    };
    const updated = [newOrder, ...orders];
    setStorageData(ORDERS_KEY, updated);
    return newOrder;
  },

  updateOrderStatus: (id: string, status: Order['status'], paymentStatus?: Order['paymentStatus']): Order => {
    const orders = orderService.getOrders();
    let updatedOrder: Order | null = null;
    const updated = orders.map((o) => {
      if (o.id === id) {
        updatedOrder = {
          ...o,
          status,
          ...(paymentStatus ? { paymentStatus } : {}),
        };
        return updatedOrder;
      }
      return o;
    });
    setStorageData(ORDERS_KEY, updated);
    if (!updatedOrder) throw new Error(`Order with id ${id} not found`);
    return updatedOrder;
  },

  deleteOrder: (id: string): void => {
    const orders = orderService.getOrders();
    const updated = orders.filter((o) => o.id !== id);
    setStorageData(ORDERS_KEY, updated);
  },
};

export const invoiceService = {
  getInvoices: (): Invoice[] => {
    return getStorageData<Invoice[]>(INVOICES_KEY, INITIAL_INVOICES);
  },

  getInvoiceById: (id: string): Invoice | undefined => {
    const invoices = invoiceService.getInvoices();
    return invoices.find((i) => i.id === id);
  },

  markAsPaid: (id: string): Invoice => {
    const invoices = invoiceService.getInvoices();
    let updatedInv: Invoice | null = null;
    const updated = invoices.map((inv) => {
      if (inv.id === id) {
        updatedInv = { ...inv, status: 'Paid' };
        return updatedInv;
      }
      return inv;
    });
    setStorageData(INVOICES_KEY, updated);
    if (!updatedInv) throw new Error(`Invoice with id ${id} not found`);
    return updatedInv;
  },

  createInvoice: (data: Omit<Invoice, 'id' | 'invoiceNumber' | 'issueDate'>): Invoice => {
    const invoices = invoiceService.getInvoices();
    const newInvoice: Invoice = {
      ...data,
      id: `inv_${Math.random().toString(36).substring(2, 7)}`,
      invoiceNumber: `INV-2026-${Math.floor(1000 + Math.random() * 9000)}`,
      issueDate: new Date().toISOString().split('T')[0],
    };
    const updated = [newInvoice, ...invoices];
    setStorageData(INVOICES_KEY, updated);
    return newInvoice;
  },
};
