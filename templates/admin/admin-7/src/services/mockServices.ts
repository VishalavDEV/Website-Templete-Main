import { 
  initialUsers, initialProjects, initialTasks, initialContacts, 
  initialTransactions, initialEmployees, initialLeaveRequests, 
  initialMessages, initialFiles, initialEvents, initialReports 
} from '../data/initialData';
import { User, Project, Task, Contact, Transaction, Employee, LeaveRequest, Message, FileItem, CalendarEvent, ReportTemplate } from '../data/initialData';

// Mock service layer for external simulation
export const mockServices = {
  getUsers: async (): Promise<User[]> => {
    const cached = localStorage.getItem('db_users');
    return cached ? JSON.parse(cached) : initialUsers;
  },
  
  createUser: async (user: Omit<User, 'id' | 'joinedDate'>): Promise<User> => {
    const users = await mockServices.getUsers();
    const newUser: User = {
      ...user,
      id: `usr-${Date.now()}`,
      joinedDate: new Date().toISOString().split('T')[0]
    };
    localStorage.setItem('db_users', JSON.stringify([...users, newUser]));
    return newUser;
  },

  updateUser: async (updatedUser: User): Promise<User> => {
    const users = await mockServices.getUsers();
    const index = users.findIndex(u => u.id === updatedUser.id);
    if (index !== -1) {
      users[index] = updatedUser;
      localStorage.setItem('db_users', JSON.stringify(users));
    }
    return updatedUser;
  },

  deleteUser: async (id: string): Promise<boolean> => {
    const users = await mockServices.getUsers();
    const filtered = users.filter(u => u.id !== id);
    localStorage.setItem('db_users', JSON.stringify(filtered));
    return true;
  },

  getProjects: async (): Promise<Project[]> => {
    const cached = localStorage.getItem('db_projects');
    return cached ? JSON.parse(cached) : initialProjects;
  },

  createProject: async (project: Omit<Project, 'id' | 'spent' | 'progress'>): Promise<Project> => {
    const projects = await mockServices.getProjects();
    const newProj: Project = {
      ...project,
      id: `proj-${Date.now()}`,
      spent: 0,
      progress: 0
    };
    localStorage.setItem('db_projects', JSON.stringify([...projects, newProj]));
    return newProj;
  },

  updateProject: async (updatedProj: Project): Promise<Project> => {
    const projects = await mockServices.getProjects();
    const index = projects.findIndex(p => p.id === updatedProj.id);
    if (index !== -1) {
      projects[index] = updatedProj;
      localStorage.setItem('db_projects', JSON.stringify(projects));
    }
    return updatedProj;
  },

  deleteProject: async (id: string): Promise<boolean> => {
    const projects = await mockServices.getProjects();
    const filtered = projects.filter(p => p.id !== id);
    localStorage.setItem('db_projects', JSON.stringify(filtered));
    return true;
  },

  getTasks: async (): Promise<Task[]> => {
    const cached = localStorage.getItem('db_tasks');
    return cached ? JSON.parse(cached) : initialTasks;
  },

  createTask: async (task: Omit<Task, 'id' | 'actualHours'>): Promise<Task> => {
    const tasks = await mockServices.getTasks();
    const newTask: Task = {
      ...task,
      id: `tsk-${Date.now()}`,
      actualHours: 0
    };
    localStorage.setItem('db_tasks', JSON.stringify([...tasks, newTask]));
    return newTask;
  },

  updateTask: async (updatedTask: Task): Promise<Task> => {
    const tasks = await mockServices.getTasks();
    const index = tasks.findIndex(t => t.id === updatedTask.id);
    if (index !== -1) {
      tasks[index] = updatedTask;
      localStorage.setItem('db_tasks', JSON.stringify(tasks));
    }
    return updatedTask;
  },

  deleteTask: async (id: string): Promise<boolean> => {
    const tasks = await mockServices.getTasks();
    const filtered = tasks.filter(t => t.id !== id);
    localStorage.setItem('db_tasks', JSON.stringify(filtered));
    return true;
  },

  getTransactions: async (): Promise<Transaction[]> => {
    const cached = localStorage.getItem('db_transactions');
    return cached ? JSON.parse(cached) : initialTransactions;
  },

  getActivities: async () => {
    return [
      { id: 'act-1', type: 'system', message: 'Core kernel memory compaction finished (recouped 240MB).', time: '10 min ago' },
      { id: 'act-2', type: 'user', message: 'Elena Rostova updated task "Write encryption at rest wrapper".', time: '25 min ago' },
      { id: 'act-3', type: 'user', message: 'Marcus Chen completed task "Legacy memory leak search".', time: '1 hr ago' },
      { id: 'act-4', type: 'system', message: 'Ingress routing tables updated: 42 gateway endpoints active.', time: '2 hr ago' },
      { id: 'act-5', type: 'user', message: 'Amira Patel created invoice record for Starlight Defense.', time: '4 hr ago' },
    ];
  },

  getNotifications: async () => {
    return [
      { id: 'nt-1', severity: 'critical', title: 'Latency surfeits', message: 'Node gateway-useast-02 exceeded 150ms latency.', time: '12m ago', read: false },
      { id: 'nt-2', severity: 'info', title: 'Vercel subscription renewed', message: 'Automatic charge of $3,200 succeeded.', time: '3h ago', read: true },
      { id: 'nt-3', severity: 'warning', title: 'Deployment pipeline delayed', message: 'Gateway expansion builds timed out in test runners.', time: '5h ago', read: false },
    ];
  }
};
