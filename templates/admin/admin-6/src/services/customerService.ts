import { Customer } from '../types';
import { INITIAL_CUSTOMERS } from '../data/mockData';
import { getStorageData, setStorageData } from './storageService';

const STORAGE_KEY = 'app_customers';

export const customerService = {
  getCustomers: (): Customer[] => {
    return getStorageData<Customer[]>(STORAGE_KEY, INITIAL_CUSTOMERS);
  },

  getCustomerById: (id: string): Customer | undefined => {
    const customers = customerService.getCustomers();
    return customers.find((c) => c.id === id);
  },

  createCustomer: (data: Omit<Customer, 'id' | 'createdAt' | 'totalSpent' | 'ordersCount' | 'lastOrderDate'>): Customer => {
    const customers = customerService.getCustomers();
    const newCustomer: Customer = {
      ...data,
      id: `cust_${Math.random().toString(36).substring(2, 7)}`,
      createdAt: new Date().toISOString().split('T')[0],
      totalSpent: 0,
      ordersCount: 0,
      lastOrderDate: 'N/A',
    };
    const updated = [newCustomer, ...customers];
    setStorageData(STORAGE_KEY, updated);
    return newCustomer;
  },

  updateCustomer: (id: string, data: Partial<Customer>): Customer => {
    const customers = customerService.getCustomers();
    let updatedCustomer: Customer | null = null;
    const updated = customers.map((c) => {
      if (c.id === id) {
        updatedCustomer = { ...c, ...data };
        return updatedCustomer;
      }
      return c;
    });
    setStorageData(STORAGE_KEY, updated);
    if (!updatedCustomer) throw new Error(`Customer with id ${id} not found`);
    return updatedCustomer;
  },

  deleteCustomer: (id: string): void => {
    const customers = customerService.getCustomers();
    const updated = customers.filter((c) => c.id !== id);
    setStorageData(STORAGE_KEY, updated);
  },
};
