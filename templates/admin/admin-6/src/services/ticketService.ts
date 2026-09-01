import { Ticket } from '../types';
import { INITIAL_TICKETS } from '../data/mockData';
import { getStorageData, setStorageData } from './storageService';

const TICKETS_KEY = 'app_tickets';

export const ticketService = {
  getTickets: (): Ticket[] => {
    return getStorageData<Ticket[]>(TICKETS_KEY, INITIAL_TICKETS);
  },

  getTicketById: (id: string): Ticket | undefined => {
    const tickets = ticketService.getTickets();
    return tickets.find((t) => t.id === id);
  },

  updateTicketStatus: (id: string, status: Ticket['status']): Ticket => {
    const tickets = ticketService.getTickets();
    let updatedTicket: Ticket | null = null;
    const updated = tickets.map((t) => {
      if (t.id === id) {
        updatedTicket = { ...t, status, updatedAt: new Date().toLocaleString() };
        return updatedTicket;
      }
      return t;
    });
    setStorageData(TICKETS_KEY, updated);
    if (!updatedTicket) throw new Error(`Ticket ${id} not found`);
    return updatedTicket;
  },

  createTicket: (data: Omit<Ticket, 'id' | 'ticketNumber' | 'createdAt' | 'updatedAt'>): Ticket => {
    const tickets = ticketService.getTickets();
    const newTicket: Ticket = {
      ...data,
      id: `tkt_${Math.random().toString(36).substring(2, 7)}`,
      ticketNumber: `TKT-${Math.floor(9000 + Math.random() * 1000)}`,
      createdAt: new Date().toLocaleString(),
      updatedAt: new Date().toLocaleString(),
    };
    const updated = [newTicket, ...tickets];
    setStorageData(TICKETS_KEY, updated);
    return newTicket;
  },
};
