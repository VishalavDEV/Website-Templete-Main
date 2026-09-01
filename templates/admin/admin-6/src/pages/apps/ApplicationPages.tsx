import React, { useState } from 'react';
import { PageHeader } from '../../components/common/PageHeader';
import { Badge } from '../../components/common/Badge';
import { Modal } from '../../components/common/Modal';
import { StatCard } from '../../components/common/StatCard';
import { DataTable, Column } from '../../components/common/DataTable';
import { FormInput } from '../../components/forms/FormInput';
import { INITIAL_TASKS } from '../../data/mockData';
import { TaskItem, ChatMessage, EmailMessage, FileItem } from '../../types';
import { useToast } from '../../context/ToastContext';
import { storageService } from '../../services/storageService';
import {
  Calendar as CalendarIcon,
  CheckSquare,
  Kanban,
  MessageSquare,
  Mail,
  Folder,
  Plus,
  Send,
  ArrowRight,
  ArrowLeft,
  Trash2,
  Paperclip,
  Download,
  FileText,
  ShieldCheck,
  Clock,
  User,
  CheckCircle2,
} from 'lucide-react';

interface CalendarEventItem {
  id: string;
  title: string;
  date: string;
  time: string;
  category: string;
  attendees: string;
}

const INITIAL_CALENDAR_EVENTS: CalendarEventItem[] = [
  { id: 'ev1', title: 'Q3 Executive Strategy Review', date: '2026-08-05', time: '10:00 AM', category: 'Strategy', attendees: 'Executive Leadership' },
  { id: 'ev2', title: 'Starlight Server Infrastructure Demo', date: '2026-08-12', time: '02:00 PM', category: 'Client Demo', attendees: 'Engineering & Sales' },
  { id: 'ev3', title: 'SOC2 Security Audit Alignment', date: '2026-08-18', time: '11:30 AM', category: 'Compliance', attendees: 'Tech Ops Team' },
  { id: 'ev4', title: 'Monthly Financial Closing Call', date: '2026-08-25', time: '09:00 AM', category: 'Finance', attendees: 'Finance & Accounting' },
  { id: 'ev5', title: 'CyberShield Pro Launch Retrospective', date: '2026-08-28', time: '03:30 PM', category: 'Product', attendees: 'Product & Marketing' },
];

const INITIAL_EMAILS: EmailMessage[] = [
  { id: '1', sender: 'Acme Procurement', senderEmail: 'procurement@acme.com', subject: 'Server Rack Order Confirmation #ORD-2026-8801', preview: 'We have received the invoice for Cloud Server Rack X9...', date: '10:14 AM', unread: true, starred: true, folder: 'Inbox' },
  { id: '2', sender: 'Starlight Engineering', senderEmail: 'tech@starlight.io', subject: 'Router Load Test Verification Report', preview: 'Attached is the performance telemetry benchmark report...', date: 'Yesterday', unread: false, starred: false, folder: 'Inbox' },
];

const INITIAL_FILES: FileItem[] = [
  { id: 'f1', name: 'Q3_Financial_Audit_Report.pdf', size: '4.2 MB', type: 'PDF', updatedAt: '2026-08-23', owner: 'Alexander Pierce' },
  { id: 'f2', name: 'Server_Rack_Architecture_Spec.docx', size: '12.8 MB', type: 'Document', updatedAt: '2026-08-22', owner: 'Eleanor Vance' },
  { id: 'f3', name: 'Client_Master_Roster_2026.xlsx', size: '8.4 MB', type: 'Spreadsheet', updatedAt: '2026-08-20', owner: 'David Vance' },
];

export const CalendarPage: React.FC = () => {
  const { showToast } = useToast();
  const [events, setEvents] = useState<CalendarEventItem[]>(INITIAL_CALENDAR_EVENTS);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newDate, setNewDate] = useState('2026-08-26');
  const [newTime, setNewTime] = useState('10:00 AM');
  const [newCategory, setNewCategory] = useState('General');

  const handleAddEvent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    const created: CalendarEventItem = {
      id: Math.random().toString(),
      title: newTitle,
      date: newDate,
      time: newTime,
      category: newCategory,
      attendees: 'Team Members',
    };
    setEvents((prev) => [...prev, created]);
    showToast('Event Scheduled', `Added "${created.title}" to August ${newDate.split('-')[2]}, 2026`);
    setIsAddModalOpen(false);
    setNewTitle('');
  };

  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);

  const columns: Column<CalendarEventItem>[] = [
    { key: 'title', header: 'Event Title', sortable: true },
    { key: 'date', header: 'Scheduled Date', sortable: true },
    { key: 'time', header: 'Time' },
    { key: 'category', header: 'Category', render: (ev) => <Badge variant="indigo">{ev.category}</Badge> },
    { key: 'attendees', header: 'Attendees' },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        title="Team Calendar & Event Scheduling"
        subtitle="Schedule executive meetings, product demos, sprint reviews, and deadline reminders."
        actions={
          <button onClick={() => setIsAddModalOpen(true)} className="px-4 py-2 bg-brand-600 text-white font-semibold text-xs rounded-xl flex items-center gap-2">
            <Plus className="w-4 h-4" /> Add Event
          </button>
        }
      />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <StatCard title="Scheduled Events" value={events.length.toString()} change={12.4} icon={CalendarIcon} />
        <StatCard title="Executive Strategy Calls" value="3 sessions" change={0} icon={User} />
        <StatCard title="Client Demos Scheduled" value="2 demos" change={50.0} icon={CheckCircle2} />
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <CalendarIcon className="w-6 h-6 text-brand-600" />
            <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">August 2026</h3>
          </div>
          <span className="text-xs font-semibold px-3 py-1 bg-brand-50 dark:bg-brand-950 text-brand-600 rounded-lg">
            31 Days • {events.length} Events Booked
          </span>
        </div>

        <div className="grid grid-cols-7 gap-2 mb-2 text-center text-xs font-bold text-slate-400 uppercase">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>

        <div className="grid grid-cols-7 gap-2">
          {Array.from({ length: 6 }, (_, i) => (
            <div key={`blank-${i}`} className="h-20 bg-slate-50/50 dark:bg-slate-800/20 rounded-xl p-2 opacity-30" />
          ))}

          {daysInMonth.map((day) => {
            const dayStr = `2026-08-${day < 10 ? '0' + day : day}`;
            const dayEvents = events.filter((e) => e.date === dayStr);

            return (
              <div
                key={day}
                className={`h-24 border rounded-xl p-2 flex flex-col justify-between transition-all ${
                  dayEvents.length > 0
                    ? 'border-brand-300 dark:border-brand-800 bg-brand-50/30 dark:bg-brand-950/30'
                    : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900'
                }`}
              >
                <div className="flex justify-between items-center text-xs font-bold text-slate-700 dark:text-slate-300">
                  <span>{day}</span>
                  {dayEvents.length > 0 && <span className="w-2 h-2 rounded-full bg-brand-600" />}
                </div>

                <div className="space-y-1 overflow-hidden">
                  {dayEvents.map((ev) => (
                    <div key={ev.id} className="text-[10px] bg-brand-600 text-white font-semibold px-1.5 py-0.5 rounded truncate" title={`${ev.time} - ${ev.title}`}>
                      {ev.title}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <DataTable columns={columns} data={events} keyExtractor={(ev) => ev.id} searchPlaceholder="Search scheduled events..." />

      <Modal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="Schedule New Team Event"
        footer={
          <>
            <button type="button" onClick={() => setIsAddModalOpen(false)} className="px-4 py-2 text-xs font-semibold text-slate-600">
              Cancel
            </button>
            <button type="submit" form="add-event-form" className="px-4 py-2 text-xs font-semibold text-white bg-brand-600 rounded-xl">
              Save Event
            </button>
          </>
        }
      >
        <form id="add-event-form" onSubmit={handleAddEvent} className="space-y-4">
          <FormInput label="Event Title" required value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
          <div className="grid grid-cols-2 gap-4">
            <FormInput label="Date" type="date" required value={newDate} onChange={(e) => setNewDate(e.target.value)} />
            <FormInput label="Time" type="text" required value={newTime} onChange={(e) => setNewTime(e.target.value)} />
          </div>
        </form>
      </Modal>
    </div>
  );
};

export const TasksPage: React.FC = () => {
  const { showToast } = useToast();
  const [tasks, setTasks] = useState<TaskItem[]>(INITIAL_TASKS);

  const toggleTaskStatus = (id: string) => {
    setTasks((prev) =>
      prev.map((t) => {
        if (t.id === id) {
          const nextStatus = t.status === 'Completed' ? 'Todo' : 'Completed';
          showToast('Task Updated', `Task status changed to ${nextStatus}`);
          return { ...t, status: nextStatus };
        }
        return t;
      })
    );
  };

  return (
    <div className="space-y-6">
      <PageHeader title="Task Manager" subtitle="Personal and team task tracking with priority flags and deadlines." />
      <div className="space-y-3">
        {tasks.map((task) => (
          <div key={task.id} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm flex items-center justify-between">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={task.status === 'Completed'}
                onChange={() => toggleTaskStatus(task.id)}
                className="w-4 h-4 accent-brand-600 rounded cursor-pointer"
              />
              <div>
                <h4 className={`text-sm font-bold ${task.status === 'Completed' ? 'line-through text-slate-400' : 'text-slate-900 dark:text-white'}`}>
                  {task.title}
                </h4>
                <p className="text-xs text-slate-500">{task.description} • Assignee: {task.assignee}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant={task.priority === 'High' ? 'danger' : 'info'} size="sm">
                {task.priority} Priority
              </Badge>
              <Badge variant={task.status === 'Completed' ? 'success' : 'warning'} size="sm">
                {task.status}
              </Badge>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const KanbanPage: React.FC = () => {
  const { showToast } = useToast();
  const [tasks, setTasks] = useState<TaskItem[]>([
    ...INITIAL_TASKS,
    { id: 'tsk_04', title: 'Deploy Quantum Router Firmware Update', description: 'Apply security patch v4.8 to all active Beta warehouse routers.', priority: 'High', status: 'Review', dueDate: '2026-08-27', assignee: 'Eleanor Vance', tags: ['Networking'] },
    { id: 'tsk_05', title: 'Design Q4 Marketing Landing Page', description: 'Create responsive mockups for end-of-year enterprise promotion.', priority: 'Medium', status: 'In Progress', dueDate: '2026-08-30', assignee: 'Sarah Jenkins', tags: ['Design'] },
    { id: 'tsk_06', title: 'Reconcile Q2 Sales Tax Receipts', description: 'Submit quarterly tax filings to California State Board.', priority: 'High', status: 'Completed', dueDate: '2026-08-15', assignee: 'Sophia Martinez', tags: ['Finance'] },
  ]);

  const moveTask = (id: string, newStatus: TaskItem['status']) => {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, status: newStatus } : t)));
    showToast('Kanban Updated', `Moved task to ${newStatus}`);
  };

  const columns: TaskItem['status'][] = ['Todo', 'In Progress', 'Review', 'Completed'];

  return (
    <div className="space-y-6">
      <PageHeader title="Interactive Kanban Board" subtitle="Move tasks across workflow columns (Todo, In Progress, Review, Completed)." />

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <StatCard title="Total Board Cards" value={tasks.length.toString()} change={14.2} icon={Kanban} />
        <StatCard title="In Progress Work" value={tasks.filter((t) => t.status === 'In Progress').length.toString()} change={0} icon={Clock} />
        <StatCard title="Under Review" value={tasks.filter((t) => t.status === 'Review').length.toString()} change={100.0} icon={ShieldCheck} />
        <StatCard title="Tasks Completed" value={tasks.filter((t) => t.status === 'Completed').length.toString()} change={25.0} icon={CheckCircle2} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {columns.map((col) => (
          <div key={col} className="bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-700 dark:text-slate-300">{col}</h4>
              <span className="px-2 py-0.5 text-xs font-bold bg-white dark:bg-slate-800 text-brand-600 rounded-full">
                {tasks.filter((t) => t.status === col).length}
              </span>
            </div>

            <div className="space-y-3 min-h-[350px]">
              {tasks
                .filter((t) => t.status === col)
                .map((task) => (
                  <div key={task.id} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm space-y-3">
                    <div className="flex justify-between items-start">
                      <h5 className="text-xs font-bold text-slate-900 dark:text-white">{task.title}</h5>
                      <Badge variant={task.priority === 'High' ? 'danger' : 'info'} size="sm">
                        {task.priority}
                      </Badge>
                    </div>
                    <p className="text-[11px] text-slate-500 line-clamp-2">{task.description}</p>
                    <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800">
                      <span className="text-[10px] font-semibold text-slate-400">{task.assignee}</span>
                      <div className="flex gap-1">
                        {col !== 'Todo' && (
                          <button
                            onClick={() => {
                              const prev = col === 'Completed' ? 'Review' : col === 'Review' ? 'In Progress' : 'Todo';
                              moveTask(task.id, prev);
                            }}
                            className="p-1 text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded hover:bg-slate-200"
                            title="Move back"
                          >
                            ←
                          </button>
                        )}
                        {col !== 'Completed' && (
                          <button
                            onClick={() => {
                              const next = col === 'Todo' ? 'In Progress' : col === 'In Progress' ? 'Review' : 'Completed';
                              moveTask(task.id, next);
                            }}
                            className="p-1 text-[10px] font-bold bg-brand-50 dark:bg-brand-950 text-brand-600 rounded hover:bg-brand-100"
                            title="Move forward"
                          >
                            Next →
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: '1', sender: 'Eleanor Vance', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80', content: 'Hey team, load tests on the server rack passed!', timestamp: '10:14 AM', isMe: false },
    { id: '2', sender: 'Alexander Pierce', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80', content: 'Awesome news Eleanor. Let us schedule client delivery.', timestamp: '10:16 AM', isMe: true },
  ]);

  const [inputMsg, setInputMsg] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMsg.trim()) return;
    setMessages((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        sender: 'Alexander Pierce',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80',
        content: inputMsg,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isMe: true,
      },
    ]);
    setInputMsg('');
  };

  return (
    <div className="space-y-6">
      <PageHeader title="Internal Live Chat" subtitle="Real-time encrypted team messaging and collaboration channel." />
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm h-[500px] flex flex-col overflow-hidden">
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 font-bold text-sm text-slate-900 dark:text-white"># general-leadership</div>
        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          {messages.map((m) => (
            <div key={m.id} className={`flex gap-3 ${m.isMe ? 'flex-row-reverse' : ''}`}>
              <img src={m.avatar} alt={m.sender} className="w-8 h-8 rounded-full object-cover shrink-0" />
              <div className={`max-w-md p-3 rounded-2xl text-xs ${m.isMe ? 'bg-brand-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white'}`}>
                <div className="font-semibold text-[10px] opacity-80 mb-1">{m.sender} • {m.timestamp}</div>
                <div>{m.content}</div>
              </div>
            </div>
          ))}
        </div>
        <form onSubmit={handleSend} className="p-4 border-t border-slate-200 dark:border-slate-800 flex gap-2">
          <input
            type="text"
            value={inputMsg}
            onChange={(e) => setInputMsg(e.target.value)}
            placeholder="Type message..."
            className="flex-1 px-4 py-2 text-xs bg-slate-50 dark:bg-slate-800 border rounded-xl"
          />
          <button type="submit" className="px-4 py-2 bg-brand-600 text-white font-semibold text-xs rounded-xl flex items-center gap-1">
            <Send className="w-3.5 h-3.5" /> Send
          </button>
        </form>
      </div>
    </div>
  );
};

export const EmailPage: React.FC = () => {
  const { showToast } = useToast();
  const [emails, setEmails] = useState<EmailMessage[]>(() => storageService.get<EmailMessage[]>('app_emails', INITIAL_EMAILS));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [recipient, setRecipient] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const handleComposeEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!recipient.trim() || !subject.trim()) return;
    const newMail: EmailMessage = {
      id: Math.random().toString(),
      sender: 'Me (Alexander Pierce)',
      senderEmail: recipient,
      subject,
      preview: body.slice(0, 60) + '...',
      date: 'Just now',
      unread: false,
      starred: false,
      folder: 'Sent',
    };
    const updated = [newMail, ...emails];
    setEmails(updated);
    storageService.set('app_emails', updated);
    showToast('Email Sent', `Sent message to ${recipient}`);
    setIsModalOpen(false);
    setRecipient('');
    setSubject('');
    setBody('');
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="Corporate Email Client"
        subtitle="Enterprise inbox, email composer, and message threads."
        actions={
          <button onClick={() => setIsModalOpen(true)} className="px-4 py-2 bg-brand-600 text-white font-semibold text-xs rounded-xl flex items-center gap-2">
            <Plus className="w-4 h-4" /> Compose Email
          </button>
        }
      />

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-3">
        {emails.map((e) => (
          <div key={e.id} className="p-4 border rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center justify-between">
            <div>
              <h4 className="text-xs font-bold text-slate-900 dark:text-white">{e.sender} ({e.senderEmail})</h4>
              <p className="text-xs font-semibold text-brand-600 mt-0.5">{e.subject}</p>
              <p className="text-[11px] text-slate-500 mt-1">{e.preview}</p>
            </div>
            <span className="text-[10px] text-slate-400">{e.date}</span>
          </div>
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Compose Corporate Message">
        <form onSubmit={handleComposeEmail} className="space-y-4">
          <FormInput label="Recipient Email" type="email" required value={recipient} onChange={(e) => setRecipient(e.target.value)} />
          <FormInput label="Subject Line" required value={subject} onChange={(e) => setSubject(e.target.value)} />
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Message Body</label>
            <textarea required value={body} onChange={(e) => setBody(e.target.value)} rows={4} className="w-full px-3 py-2 text-xs border rounded-xl bg-slate-50 dark:bg-slate-800" />
          </div>
          <div className="flex justify-end gap-2 pt-2">
            <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-xs font-semibold text-slate-600">Cancel</button>
            <button type="submit" className="px-4 py-2 text-xs font-semibold text-white bg-brand-600 rounded-xl">Send Email</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export const FileManagerPage: React.FC = () => {
  const { showToast } = useToast();
  const [files] = useState<FileItem[]>(INITIAL_FILES);

  const columns: Column<FileItem>[] = [
    {
      key: 'name',
      header: 'File Name',
      sortable: true,
      render: (f) => (
        <div className="flex items-center gap-2">
          <FileText className="w-4 h-4 text-brand-600" />
          <span className="font-bold text-slate-900 dark:text-white">{f.name}</span>
        </div>
      ),
    },
    { key: 'size', header: 'File Size' },
    { key: 'type', header: 'Type', render: (f) => <Badge variant="info">{f.type}</Badge> },
    { key: 'owner', header: 'Uploaded By' },
    { key: 'updatedAt', header: 'Last Modified', sortable: true },
    {
      key: 'actions',
      header: 'Download',
      render: (f) => (
        <button onClick={() => showToast('Downloading File', `Downloading ${f.name}`)} className="p-1.5 rounded text-brand-600 hover:bg-brand-50">
          <Download className="w-4 h-4" />
        </button>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <PageHeader title="Cloud File Storage" subtitle="Secure document repository, contracts, assets, and spreadsheets." />
      <DataTable columns={columns} data={files} keyExtractor={(f) => f.id} searchPlaceholder="Search files..." />
    </div>
  );
};
