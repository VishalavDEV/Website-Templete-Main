export const initialOrders = [
  {
    id: "#ORD-9482",
    customer: "Alex Morgan",
    customerEmail: "alex.morgan@nexus.io",
    customerPhone: "+1 (555) 234-5678",
    product: "Pro Studio Wireless Headphones",
    productQty: 2,
    date: "2026-09-02",
    amount: "$599.98",
    payment: "Credit Card (Visa ****4242)",
    status: "Completed",
    shippingAddress: "742 Evergreen Terrace, San Francisco, CA 94107",
    timeline: [
      { date: "2026-09-02 09:30 AM", status: "Order Placed", detail: "Order payment confirmed." },
      { date: "2026-09-02 11:45 AM", status: "Processing", detail: "Packed at Distribution Hub A." },
      { date: "2026-09-02 02:15 PM", status: "Shipped", detail: "In transit via FedEx Express #TRK9921." },
      { date: "2026-09-02 05:00 PM", status: "Completed", detail: "Delivered & signed by customer." }
    ]
  },
  {
    id: "#ORD-9481",
    customer: "Marcus Chen",
    customerEmail: "marcus.chen@nexus.io",
    customerPhone: "+1 (555) 876-5432",
    product: "4K Curved Gaming Monitor 34\"",
    productQty: 1,
    date: "2026-09-02",
    amount: "$799.00",
    payment: "PayPal",
    status: "Processing",
    shippingAddress: "1200 4th Ave, Suite 500, Seattle, WA 98101",
    timeline: [
      { date: "2026-09-02 10:15 AM", status: "Order Placed", detail: "Order payment authorized." },
      { date: "2026-09-02 01:20 PM", status: "Processing", detail: "Item picked and undergoing QA check." }
    ]
  },
  {
    id: "#ORD-9480",
    customer: "Sophia Rodriguez",
    customerEmail: "sophia.r@nexus.io",
    customerPhone: "+1 (555) 345-6789",
    product: "Smart Fitness Watch Ultra",
    productQty: 1,
    date: "2026-09-01",
    amount: "$249.99",
    payment: "Apple Pay",
    status: "Pending",
    shippingAddress: "350 5th Ave, New York, NY 10118",
    timeline: [
      { date: "2026-09-01 04:50 PM", status: "Pending", detail: "Awaiting bank verification." }
    ]
  },
  {
    id: "#ORD-9479",
    customer: "Emma Watson",
    customerEmail: "emma.w@designlabs.co",
    customerPhone: "+44 20 7946 0912",
    product: "Minimalist Leather Backpack",
    productQty: 1,
    date: "2026-09-01",
    amount: "$185.00",
    payment: "Credit Card (Mastercard ****8811)",
    status: "Completed",
    shippingAddress: "221B Baker Street, London NW1 6XE, UK",
    timeline: [
      { date: "2026-09-01 08:20 AM", status: "Order Placed", detail: "Order payment verified." },
      { date: "2026-09-01 10:00 AM", status: "Shipped", detail: "Handed to DHL Express." },
      { date: "2026-09-01 04:30 PM", status: "Completed", detail: "Delivered to front desk." }
    ]
  },
  {
    id: "#ORD-9478",
    customer: "David Kim",
    customerEmail: "david.kim@partner.com",
    customerPhone: "+1 (555) 901-2345",
    product: "Ergonomic Mesh Office Chair",
    productQty: 2,
    date: "2026-08-31",
    amount: "$840.00",
    payment: "Wire Transfer",
    status: "Cancelled",
    shippingAddress: "500 E 7th St, Austin, TX 78701",
    timeline: [
      { date: "2026-08-31 01:10 PM", status: "Order Placed", detail: "Order initiated." },
      { date: "2026-08-31 03:00 PM", status: "Cancelled", detail: "Cancelled due to out of stock stock alert." }
    ]
  },
  {
    id: "#ORD-9477",
    customer: "Aaliyah Patel",
    customerEmail: "aaliyah.p@clientcorp.com",
    customerPhone: "+1 (416) 555-0199",
    product: "Ultra Slim Mechanical Keyboard",
    productQty: 3,
    date: "2026-08-31",
    amount: "$448.50",
    payment: "Credit Card (Amex ****1004)",
    status: "Completed",
    shippingAddress: "100 King St W, Toronto, ON M5X 1A9, Canada",
    timeline: [
      { date: "2026-08-31 09:00 AM", status: "Completed", detail: "Delivered successfully." }
    ]
  },
  {
    id: "#ORD-9476",
    customer: "Liam O'Connor",
    customerEmail: "liam.oc@nexus.io",
    customerPhone: "+353 1 496 0123",
    product: "Performance Running Shoes",
    productQty: 1,
    date: "2026-08-30",
    amount: "$130.00",
    payment: "Apple Pay",
    status: "Processing",
    shippingAddress: "Grand Canal Dock, Dublin 2, Ireland",
    timeline: [
      { date: "2026-08-30 02:40 PM", status: "Processing", detail: "Customs declaration in progress." }
    ]
  }
];
