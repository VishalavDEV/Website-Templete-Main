import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Customer, CustomerService } from '../../services/apiServices';
import { useToast } from '../../components/common/Toast';
import DataTable from '../../components/common/DataTable';
import StatusBadge from '../../components/common/StatusBadge';
import { Eye, DollarSign } from 'lucide-react';

const CustomerManagementPage: React.FC = () => {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  // Pagination states
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchCustomers();
  }, [currentPage]);

  const fetchCustomers = async () => {
    try {
      setLoading(true);
      const params = {
        page: currentPage,
        size: 10,
        sortBy: 'name',
        direction: 'asc',
      };
      const data = await CustomerService.getAll(params);
      setCustomers(data.content || []);
      setTotalPages(data.totalPages || 1);
    } catch (err) {
      showToast('Failed to retrieve customer records.', 'error');
    } finally {
      setLoading(false);
    }
  };

  // Client-side search filtering
  const filteredCustomers = customers.filter((c) => {
    const query = searchQuery.toLowerCase();
    return c.name.toLowerCase().includes(query) || c.email.toLowerCase().includes(query);
  });

  const headers = [
    { key: 'customer', label: 'Customer' },
    { key: 'status', label: 'Status' },
    { key: 'orders', label: 'Orders' },
    { key: 'spending', label: 'Total Spending' },
    { key: 'lastOrder', label: 'Last Order Date' },
    { key: 'actions', label: 'Actions' },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-800 tracking-tight">Customers Profiles</h1>
          <p className="text-sm text-slate-500 font-medium">Analyze consumer lifetime values, order frequencies, and transaction history</p>
        </div>
      </div>

      {/* Customers list */}
      <DataTable
        headers={headers}
        data={filteredCustomers}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        loading={loading}
        placeholder="Filter by customer name or email..."
        renderRow={(cust: Customer) => (
          <tr key={cust.id} className="border-b border-slate-100 text-sm font-semibold text-slate-700 hover:bg-slate-55/40 transition-colors">
            <td className="p-4">
              <div className="flex items-center gap-3">
                <img
                  src={cust.profileImage || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'}
                  alt="Avatar"
                  className="h-10 w-10 rounded-xl object-cover ring-2 ring-slate-100"
                />
                <div className="flex flex-col">
                  <span className="text-slate-800 text-sm font-bold">{cust.name}</span>
                  <span className="text-slate-400 text-xs font-semibold">{cust.email}</span>
                </div>
              </div>
            </td>
            <td className="p-4">
              <StatusBadge status={cust.status} />
            </td>
            <td className="p-4 text-slate-700 font-bold">
              {cust.totalOrders} purchases
            </td>
            <td className="p-4">
              <span className="inline-flex items-center gap-1 text-slate-900 font-extrabold">
                <DollarSign className="h-4 w-4 text-green-500" />
                {cust.totalSpending.toFixed(2)}
              </span>
            </td>
            <td className="p-4 text-xs font-semibold text-slate-400">
              {cust.lastOrderDate ? new Date(cust.lastOrderDate).toLocaleDateString() : 'N/A'}
            </td>
            <td className="p-4">
              <button
                onClick={() => navigate(`/customers/${cust.id}`)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-slate-200 hover:border-indigo-500 hover:text-indigo-650 rounded-xl text-xs font-bold transition-all active:scale-95 bg-white"
              >
                <Eye className="h-4 w-4" />
                View Profile
              </button>
            </td>
          </tr>
        )}
      />
    </div>
  );
};

export default CustomerManagementPage;
