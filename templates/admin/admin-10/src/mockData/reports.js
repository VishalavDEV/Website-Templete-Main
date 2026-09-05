export const initialReports = [
  {
    id: "REP-01",
    title: "Executive Sales Summary",
    category: "Sales Report",
    period: "Monthly (Aug 2026)",
    size: "2.4 MB",
    downloads: 142,
    lastGenerated: "2026-09-01",
    status: "Ready",
    metrics: { revenue: "$84,320", growth: "+12.4%", topCategory: "Electronics" }
  },
  {
    id: "REP-02",
    title: "User Acquisition & Retention",
    category: "User Report",
    period: "Quarterly (Q2 2026)",
    size: "4.1 MB",
    downloads: 89,
    lastGenerated: "2026-08-28",
    status: "Ready",
    metrics: { newUsers: "3,450", retentionRate: "88.5%", churn: "1.2%" }
  },
  {
    id: "REP-03",
    title: "Financial Revenue Breakdown",
    category: "Revenue Report",
    period: "Year to Date 2026",
    size: "5.8 MB",
    downloads: 215,
    lastGenerated: "2026-09-02",
    status: "Ready",
    metrics: { grossRevenue: "$632,500", netProfit: "$189,750", margin: "30.0%" }
  },
  {
    id: "REP-04",
    title: "Inventory & Product Performance",
    category: "Product Report",
    period: "Weekly (Week 35)",
    size: "1.8 MB",
    downloads: 64,
    lastGenerated: "2026-08-30",
    status: "Ready",
    metrics: { topProduct: "Pro Headphones", outOfStock: 1, lowStock: 2 }
  },
  {
    id: "REP-05",
    title: "Fulfillment & Shipping Speed",
    category: "Order Report",
    period: "Monthly (Aug 2026)",
    size: "3.2 MB",
    downloads: 98,
    lastGenerated: "2026-09-01",
    status: "Ready",
    metrics: { totalOrders: "8,492", avgFulfillmentTime: "1.4 Days", returnRate: "0.8%" }
  }
];

export function downloadMockCSV(filename, rows) {
  const processRow = function (row) {
    let finalVal = '';
    for (let j = 0; j < row.length; j++) {
      let innerValue = row[j] === null ? '' : row[j].toString();
      if (row[j] instanceof Date) {
        innerValue = row[j].toLocaleString();
      }
      let result = innerValue.replace(/"/g, '""');
      if (result.search(/("|,|\n)/g) >= 0)
        result = '"' + result + '"';
      if (j > 0)
        finalVal += ',';
      finalVal += result;
    }
    return finalVal + '\n';
  };

  let csvFile = '';
  for (let i = 0; i < rows.length; i++) {
    csvFile += processRow(rows[i]);
  }

  const blob = new Blob([csvFile], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement("a");
  if (link.download !== undefined) {
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
