-- Seed Data for NEURA Dashboard

INSERT IGNORE INTO users (id, name, email, password, role, avatar) VALUES
(1, 'Admin User', 'admin@neura.tech', '$2a$10$e8wY8B0F2s8t5zQ2V6d1l.7J4u8wZ7zJ3n5K8x9L0m1P2Q3R4S5T6', 'ADMIN', 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80');

INSERT IGNORE INTO orders (id, customer_name, product_name, amount, status, created_date) VALUES
('#ORD-7821', 'Sarah Connor', 'Premium Dashboard Kit', 299.00, 'Completed', '2026-08-19'),
('#ORD-7820', 'Mike Chen', 'Cloud Storage Plan', 49.00, 'Processing', '2026-08-19'),
('#ORD-7819', 'Emily Park', 'Enterprise License', 599.00, 'Completed', '2026-08-18'),
('#ORD-7818', 'David Lee', 'Support Add-on', 129.00, 'Pending', '2026-08-18'),
('#ORD-7817', 'Lisa Wang', 'Analytics Module', 199.00, 'Cancelled', '2026-08-17');

INSERT IGNORE INTO products (id, rank_num, name, category, revenue, units_sold) VALUES
(1, 1, 'Premium Dashboard Kit', 'Software', '$34,200', 114),
(2, 2, 'Cloud Storage Plan', 'Infrastructure', '$24,500', 500),
(3, 3, 'Enterprise License', 'Software', '$17,970', 30),
(4, 4, 'Support Add-on', 'Services', '$5,160', 40),
(5, 5, 'Analytics Module', 'Software', '$3,980', 20);

INSERT IGNORE INTO tasks (id, title, status, due_date, priority) VALUES
(1, 'Review Q4 financial report', 'Completed', 'Yesterday', 'High'),
(2, 'Update team permissions', 'Completed', 'Yesterday', 'Medium'),
(3, 'Deploy v2.4.0 to production', 'Pending', 'Today', 'High'),
(4, 'Design new landing page', 'Pending', 'Tomorrow', 'Medium'),
(5, 'Prepare client presentation', 'Pending', 'Upcoming', 'Low');

INSERT IGNORE INTO activities (id, text, event_time, type) VALUES
(1, 'Order #ORD-7821 completed', '5 min ago', 'success'),
(2, 'New user Alex Thompson registered', '28 min ago', 'info'),
(3, 'Server storage reached 85%', '1 hour ago', 'warning'),
(4, 'Subscription renewed', '2 hours ago', 'success');

INSERT IGNORE INTO transactions (id, title, amount, tx_date, positive) VALUES
(1, 'Payment from Client', '+$2,400', 'Today, 14:20', true),
(2, 'Subscription Renewal', '+$99', 'Today, 11:05', true),
(3, 'Server Hosting', '-$380', 'Yesterday', false);

INSERT IGNORE INTO team_members (id, name, role, status, avatar) VALUES
(1, 'Sarah Connor', 'Lead Designer', 'Online', 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80'),
(2, 'Mike Chen', 'Senior Developer', 'Online', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80');
