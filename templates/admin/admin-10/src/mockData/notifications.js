export const initialNotifications = [
  {
    id: "NOTIF-1",
    title: "New High-Value Order Received",
    message: "Alex Morgan placed an order #ORD-9482 for $599.98.",
    type: "order",
    timestamp: "10 minutes ago",
    read: false,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "NOTIF-2",
    title: "System Backup Completed",
    message: "Daily automated database snapshot completed in 4.2 seconds.",
    type: "system",
    timestamp: "45 minutes ago",
    read: false
  },
  {
    id: "NOTIF-3",
    title: "New Merchant Registration",
    message: "Lucas Vance submitted verification documents for techalpha.io.",
    type: "user",
    timestamp: "2 hours ago",
    read: true,
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "NOTIF-4",
    title: "Payout Transferred Successfully",
    message: "Stripe payout of $14,250.00 was disbursed to bank account ****9012.",
    type: "payment",
    timestamp: "5 hours ago",
    read: true
  },
  {
    id: "NOTIF-5",
    title: "Low Inventory Alert",
    message: "4K Curved Gaming Monitor stock reached threshold limit (12 units remaining).",
    type: "system",
    timestamp: "1 day ago",
    read: true
  }
];
