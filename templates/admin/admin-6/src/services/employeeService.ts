import { Employee, LeaveRequest, Ticket } from '../types';
import { INITIAL_EMPLOYEES, INITIAL_LEAVE_REQUESTS, INITIAL_TICKETS } from '../data/mockData';
import { getStorageData, setStorageData } from './storageService';

const EMPLOYEES_KEY = 'app_employees';
const LEAVES_KEY = 'app_leaves';
const TICKETS_KEY = 'app_tickets';

export const employeeService = {
  getEmployees: (): Employee[] => {
    return getStorageData<Employee[]>(EMPLOYEES_KEY, INITIAL_EMPLOYEES);
  },

  getEmployeeById: (id: string): Employee | undefined => {
    const employees = employeeService.getEmployees();
    return employees.find((e) => e.id === id);
  },

  createEmployee: (data: Omit<Employee, 'id' | 'employeeCode'>): Employee => {
    const employees = employeeService.getEmployees();
    const newEmployee: Employee = {
      ...data,
      id: `emp_${Math.random().toString(36).substring(2, 7)}`,
      employeeCode: `EMP-0${Math.floor(100 + Math.random() * 900)}`,
    };
    const updated = [newEmployee, ...employees];
    setStorageData(EMPLOYEES_KEY, updated);
    return newEmployee;
  },

  updateEmployee: (id: string, data: Partial<Employee>): Employee => {
    const employees = employeeService.getEmployees();
    let updatedEmp: Employee | null = null;
    const updated = employees.map((e) => {
      if (e.id === id) {
        updatedEmp = { ...e, ...data };
        return updatedEmp;
      }
      return e;
    });
    setStorageData(EMPLOYEES_KEY, updated);
    if (!updatedEmp) throw new Error(`Employee ${id} not found`);
    return updatedEmp;
  },

  deleteEmployee: (id: string): void => {
    const employees = employeeService.getEmployees();
    const updated = employees.filter((e) => e.id !== id);
    setStorageData(EMPLOYEES_KEY, updated);
  },

  getLeaveRequests: (): LeaveRequest[] => {
    return getStorageData<LeaveRequest[]>(LEAVES_KEY, INITIAL_LEAVE_REQUESTS);
  },

  updateLeaveStatus: (id: string, status: LeaveRequest['status']): LeaveRequest => {
    const leaves = employeeService.getLeaveRequests();
    let updatedLeave: LeaveRequest | null = null;
    const updated = leaves.map((l) => {
      if (l.id === id) {
        updatedLeave = { ...l, status };
        return updatedLeave;
      }
      return l;
    });
    setStorageData(LEAVES_KEY, updated);
    if (!updatedLeave) throw new Error(`Leave request ${id} not found`);
    return updatedLeave;
  },
};

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
