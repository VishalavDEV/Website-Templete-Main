import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { ReportTemplate } from '../../data/initialData';
import { DateRangePicker, EmptyState, StatusBadge } from '../ui/GlobalComponents';
import { Sparkles, FileSpreadsheet, FileJson } from 'lucide-react';

export const Reports: React.FC = () => {
  const { reports, showToast, users } = useApp();

  const [startDate, setStartDate] = useState('2026-08-01');
  const [endDate, setEndDate] = useState('2026-08-24');
  const [reportType, setReportType] = useState('all');

  // Realistic browser download of CSV
  const handleDownloadCSV = (report: ReportTemplate) => {
    showToast('info', 'Compiling spreadsheet chunks...', 'Formatting telemetry models into tabular matrix.');

    setTimeout(() => {
      let csvContent = "data:text/csv;charset=utf-8,";
      
      if (report.type === 'Operational') {
        csvContent += "Node ID,Metric,Value,Status\n";
        csvContent += "gateway-01,CPU,42.4%,Optimal\n";
        csvContent += "gateway-02,Latency,18.5ms,Optimal\n";
        csvContent += "gateway-03,Disk Space,54.8%,Optimal\n";
      } else if (report.type === 'Financial') {
        csvContent += "Date,Transaction,Type,Category,Amount\n";
        csvContent += "2026-08-23,Vercel Enterprise,Expense,Cloud Compute,$3200\n";
        csvContent += "2026-08-22,Starlight License Tranche,Income,Software,$45000\n";
      } else {
        csvContent += "Name,Role,Status,Department\n";
        users.forEach(u => {
          csvContent += `"${u.name}","${u.role}","${u.status}","${u.department}"\n`;
        });
      }

      const encodedUri = encodeURI(csvContent);
      const link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", `${report.title.toLowerCase().replace(/\s+/g, '_')}_2026.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      showToast('success', 'Spreadsheet compiled & downloaded', `Tabular dataset successfully written to local disk.`);
    }, 1200);
  };

  // Realistic browser download of JSON
  const handleDownloadJSON = (report: ReportTemplate) => {
    showToast('info', 'Compiling JSON structures...', 'Serializing telemetry objects into JSON format.');

    setTimeout(() => {
      let dataToSerialize: any = {};
      if (report.type === 'Operational') {
        dataToSerialize = {
          reportId: report.id,
          timestamp: new Date().toISOString(),
          host: 'SPRINTADMIN-NODE-CLUSTER-01',
          telemetry: {
            cpuLoadPercent: 42.4,
            memoryAllocatedMb: 6140,
            networkLatencyMs: 18.5,
            edgeStatus: 'Optimal'
          }
        };
      } else if (report.type === 'Financial') {
        dataToSerialize = {
          currency: 'USD',
          tranches: [
            { id: 'tx-1', desc: 'Vercel Enterprise Subscription', type: 'Expense', amt: 3200 },
            { id: 'tx-2', desc: 'Starlight Defense Licensing', type: 'Income', amt: 45000 },
          ]
        };
      } else {
        dataToSerialize = {
          teamSize: users.length,
          operatorRegistry: users.map(u => ({ name: u.name, clearance: u.role, dept: u.department }))
        };
      }

      const jsonStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(dataToSerialize, null, 2));
      const link = document.createElement("a");
      link.setAttribute("href", jsonStr);
      link.setAttribute("download", `${report.title.toLowerCase().replace(/\s+/g, '_')}_2026.json`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      showToast('success', 'JSON dataset compiled', `Configuration files written successfully.`);
    }, 1000);
  };

  const filteredReports = reports.filter(r => reportType === 'all' || r.type === reportType);

  return (
    <div className="space-y-6">
      {/* Header Panel with Date picker */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border border-blue-100 bg-white p-5 rounded-xl shadow-xs">
        <div>
          <h2 className="text-lg font-extrabold tracking-tight text-slate-900 uppercase font-mono">
            Analytical Reports & Ledger Archives
          </h2>
          <p className="text-xs text-slate-500 font-mono mt-0.5">Generate real-time telemetry aggregates, ledger spreadsheets and download CSV/JSON payloads.</p>
        </div>
        <DateRangePicker startDate={startDate} endDate={endDate} onChange={(s, e) => { setStartDate(s); setEndDate(e); }} />
      </div>

      {/* Filter matrix tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-blue-100 pb-2">
        {['all', 'Operational', 'Financial', 'Performance', 'Audit'].map((tp) => (
          <button
            key={tp}
            onClick={() => setReportType(tp)}
            className={`px-4 py-1.5 text-xs font-bold font-mono rounded-lg cursor-pointer transition capitalize ${
              reportType === tp 
                ? 'bg-blue-600 text-white shadow-2xs' 
                : 'text-slate-600 hover:text-blue-700 hover:bg-blue-50/60'
            }`}
          >
            {tp === 'all' ? 'All Matrices' : `${tp} Logs`}
          </button>
        ))}
      </div>

      {/* Reports deck */}
      {filteredReports.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredReports.map((rp) => (
            <div 
              key={rp.id} 
              className="p-5 border border-blue-100 bg-white rounded-xl hover:shadow-sm hover:border-blue-300 transition flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start gap-2 mb-2">
                  <span className="text-[10px] font-bold text-blue-700 font-mono tracking-wider uppercase bg-blue-50 border border-blue-100 px-2 py-0.5 rounded">
                    {rp.type} LOGS
                  </span>
                  <StatusBadge status={rp.frequency} />
                </div>
                <h3 className="text-sm font-extrabold text-slate-900 uppercase leading-snug font-mono">{rp.title}</h3>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed min-h-[44px]">
                  {rp.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-blue-100 flex justify-between items-center text-[10px] font-mono text-slate-500">
                <div>
                  <span className="block">LAST COMPILED: {rp.lastGenerated}</span>
                  <span className="block mt-0.5">COMPILER: {rp.generatedBy}</span>
                </div>
                
                {/* Download links */}
                <div className="flex gap-2">
                  <button
                    onClick={() => handleDownloadCSV(rp)}
                    className="flex items-center gap-1 px-3 py-1.5 bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 rounded-lg text-xs font-bold text-slate-700 hover:text-blue-700 transition cursor-pointer font-mono"
                    title="Export to CSV"
                  >
                    <FileSpreadsheet className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                    CSV
                  </button>
                  <button
                    onClick={() => handleDownloadJSON(rp)}
                    className="flex items-center gap-1 px-3 py-1.5 bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 rounded-lg text-xs font-bold text-slate-700 hover:text-blue-700 transition cursor-pointer font-mono"
                    title="Export to JSON"
                  >
                    <FileJson className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                    JSON
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <EmptyState 
          title="No Report Matrices" 
          description="We couldn't retrieve any analytical files matching your current parameters."
          icon={<Sparkles className="h-10 w-10 text-blue-300" />}
        />
      )}
    </div>
  );
};
