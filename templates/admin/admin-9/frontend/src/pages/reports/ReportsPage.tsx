import React, { useState } from 'react';
import { ReportService } from '../../services/apiServices';
import { useToast } from '../../components/common/Toast';
import { Calendar, Download, BarChart2, CheckCircle2, TrendingUp, Archive, DollarSign } from 'lucide-react';

const ReportsPage: React.FC = () => {
  const { showToast } = useToast();
  const [reportType, setReportType] = useState('sales');
  
  // Default date ranges: last 30 days
  const [startDate, setStartDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() - 30);
    return d.toISOString().slice(0, 16);
  });
  const [endDate, setEndDate] = useState(() => {
    return new Date().toISOString().slice(0, 16);
  });

  const [loading, setLoading] = useState(false);
  const [reportData, setReportData] = useState<any>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Send parameters as ISO format
      const formattedStart = new Date(startDate).toISOString();
      const formattedEnd = new Date(endDate).toISOString();

      const data = await ReportService.generate({
        type: reportType,
        startDate: formattedStart,
        endDate: formattedEnd,
      });

      setReportData(data);
      showToast('Report compiled successfully!', 'success');
    } catch (err) {
      showToast('Failed to compile reports.', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleExport = async () => {
    try {
      showToast('Preparing report file download...', 'info');
      await ReportService.exportCsv(reportType);
    } catch (err) {
      showToast('Failed to download report file.', 'error');
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-800 tracking-tight">Reports Generation</h1>
          <p className="text-sm text-slate-500 font-medium">Compile metrics on revenue, stock, and customers, and export data spreadsheets</p>
        </div>
      </div>

      {/* Query Filter form */}
      <div className="bg-white p-6 rounded-2xl border border-slate-100 card-shadow">
        <form onSubmit={handleGenerate} className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Report Module</label>
            <select
              value={reportType}
              onChange={(e) => setReportType(e.target.value)}
              className="w-full px-3.5 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 bg-slate-50/50 font-semibold"
            >
              <option value="sales">Sales & Revenue</option>
              <option value="inventory">Products & Inventory</option>
              <option value="customers">Customers Activity</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Start Date</label>
            <input
              type="datetime-local"
              required
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full px-3.5 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 bg-slate-50/50 font-semibold"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase mb-1">End Date</label>
            <input
              type="datetime-local"
              required
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full px-3.5 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 bg-slate-50/50 font-semibold"
            />
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center items-center gap-2 py-2 px-4 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 rounded-xl transition-all shadow-sm shadow-indigo-100 hover:shadow-indigo-200 active:scale-95 cursor-pointer h-[38px]"
            >
              <BarChart2 className="h-4.5 w-4.5" />
              {loading ? 'Compiling...' : 'Compile Report'}
            </button>
          </div>
        </form>
      </div>

      {/* Report statistics display */}
      {reportData ? (
        <div className="space-y-6 animate-fade-in">
          {/* Card Headers */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="font-extrabold text-slate-800 text-base capitalize">{reportData.type} Report Output</h3>
            <button
              onClick={handleExport}
              className="inline-flex items-center gap-2 py-2 px-4 border border-slate-200 hover:border-indigo-500 hover:text-indigo-650 rounded-xl text-xs font-bold transition-all active:scale-95 bg-white shadow-sm"
            >
              <Download className="h-4 w-4" />
              Export CSV Spreadsheet
            </button>
          </div>

          {/* Dynamic Details based on report type */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {reportData.type === 'sales' && (
              <>
                <div className="bg-white p-6 rounded-2xl border border-slate-100 card-shadow flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-slate-400 uppercase">Gross Revenue</span>
                    <h3 className="text-2xl font-black text-slate-850">${reportData.totalRevenue.toLocaleString()}</h3>
                  </div>
                  <div className="p-3 bg-green-50 text-green-500 rounded-xl">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-100 card-shadow flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-slate-400 uppercase">Orders Volume</span>
                    <h3 className="text-2xl font-black text-slate-850">{reportData.totalOrders} purchases</h3>
                  </div>
                  <div className="p-3 bg-indigo-50 text-indigo-500 rounded-xl">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-100 card-shadow flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-slate-400 uppercase">Average Ticket Value</span>
                    <h3 className="text-2xl font-black text-slate-850">${reportData.averageOrderValue.toFixed(2)}</h3>
                  </div>
                  <div className="p-3 bg-purple-50 text-purple-500 rounded-xl">
                    <BarChart2 className="h-6 w-6" />
                  </div>
                </div>
              </>
            )}

            {(reportData.type === 'inventory' || reportData.type === 'products') && (
              <>
                <div className="bg-white p-6 rounded-2xl border border-slate-100 card-shadow flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-slate-400 uppercase">Total Catalog Items</span>
                    <h3 className="text-2xl font-black text-slate-850">{reportData.totalProducts} items</h3>
                  </div>
                  <div className="p-3 bg-indigo-50 text-indigo-500 rounded-xl">
                    <Archive className="h-6 w-6" />
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-100 card-shadow flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-slate-400 uppercase">In-Stock Products</span>
                    <h3 className="text-2xl font-black text-slate-850">{reportData.inStockCount} lines</h3>
                  </div>
                  <div className="p-3 bg-green-50 text-green-500 rounded-xl">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-100 card-shadow flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-slate-400 uppercase">Total stock count</span>
                    <h3 className="text-2xl font-black text-slate-850">{reportData.totalStockUnits} units</h3>
                  </div>
                  <div className="p-3 bg-amber-50 text-amber-500 rounded-xl">
                    <BarChart2 className="h-6 w-6" />
                  </div>
                </div>
              </>
            )}

            {reportData.type === 'customers' && (
              <>
                <div className="bg-white p-6 rounded-2xl border border-slate-100 card-shadow flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-slate-400 uppercase">Registered Customers</span>
                    <h3 className="text-2xl font-black text-slate-850">{reportData.totalCustomers} profiles</h3>
                  </div>
                  <div className="p-3 bg-indigo-50 text-indigo-500 rounded-xl">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-100 card-shadow flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-slate-400 uppercase">Active Accounts</span>
                    <h3 className="text-2xl font-black text-slate-850">{reportData.activeCustomers} users</h3>
                  </div>
                  <div className="p-3 bg-green-50 text-green-500 rounded-xl">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-100 card-shadow flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-slate-400 uppercase">Gross Lifetime Spending</span>
                    <h3 className="text-2xl font-black text-slate-850">${reportData.totalSpendingAccumulated.toLocaleString()}</h3>
                  </div>
                  <div className="p-3 bg-purple-50 text-purple-500 rounded-xl">
                    <DollarSign className="h-6 w-6" />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center p-12 bg-white border border-slate-100 rounded-2xl card-shadow text-center">
          <Calendar className="h-10 w-10 text-indigo-500 bg-indigo-50 p-2 rounded-xl mb-3 animate-pulse" />
          <h3 className="text-sm font-bold text-slate-800">No report generated</h3>
          <p className="text-xs text-slate-400 mt-1 max-w-xs leading-relaxed">
            Specify a report module and date range, then click compile to compute calculations.
          </p>
        </div>
      )}
    </div>
  );
};

export default ReportsPage;
