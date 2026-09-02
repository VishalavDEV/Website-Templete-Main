export const initialConversations = [
  {
    id: "CONV-1",
    user: {
      id: "USR-1002",
      name: "Marcus Chen",
      role: "Lead Engineer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      online: true
    },
    lastMessage: "The API v2 endpoint migration is complete. Deploying staging build now.",
    unread: 2,
    timestamp: "10:42 AM",
    messages: [
      { id: "M1", sender: "contact", text: "Hey Admin, wanted to give a quick heads up on the cluster maintenance.", timestamp: "10:30 AM" },
      { id: "M2", sender: "me", text: "Great! Are we expecting any downtime during the DB index rebuild?", timestamp: "10:35 AM" },
      { id: "M3", sender: "contact", text: "No downtime, we enabled zero-downtime blue/green deployment.", timestamp: "10:40 AM" },
      { id: "M4", sender: "contact", text: "The API v2 endpoint migration is complete. Deploying staging build now.", timestamp: "10:42 AM" }
    ]
  },
  {
    id: "CONV-2",
    user: {
      id: "USR-1005",
      name: "Emma Watson",
      role: "UI/UX Designer",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
      online: true
    },
    lastMessage: "I updated Figma prototypes for dark mode contrast ratios.",
    unread: 0,
    timestamp: "Yesterday",
    messages: [
      { id: "M201", sender: "contact", text: "Hi! Did you review the new dashboard component designs?", timestamp: "Yesterday 03:15 PM" },
      { id: "M202", sender: "me", text: "Yes! The glassmorphism card shadows look super clean.", timestamp: "Yesterday 03:20 PM" },
      { id: "M203", sender: "contact", text: "I updated Figma prototypes for dark mode contrast ratios.", timestamp: "Yesterday 03:45 PM" }
    ]
  },
  {
    id: "CONV-3",
    user: {
      id: "USR-1003",
      name: "Sophia Rodriguez",
      role: "Product Manager",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      online: false
    },
    lastMessage: "Q3 Product roadmap document is ready for review.",
    unread: 0,
    timestamp: "Aug 31",
    messages: [
      { id: "M301", sender: "contact", text: "Q3 Product roadmap document is ready for review.", timestamp: "Aug 31 11:00 AM" },
      { id: "M302", sender: "me", text: "Thanks Sophia! I'll take a look before the All-Hands tomorrow.", timestamp: "Aug 31 11:15 AM" }
    ]
  },
  {
    id: "CONV-4",
    user: {
      id: "USR-1007",
      name: "Aaliyah Patel",
      role: "Billing Manager",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
      online: false
    },
    lastMessage: "Monthly invoice reconciliation report generated.",
    unread: 0,
    timestamp: "Aug 29",
    messages: [
      { id: "M401", sender: "contact", text: "Monthly invoice reconciliation report generated.", timestamp: "Aug 29 04:00 PM" }
    ]
  }
];
