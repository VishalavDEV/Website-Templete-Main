import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Order, OrderService } from '../../services/apiServices';
import { useToast } from '../../components/common/Toast';
import DataTable from '../../components/common/DataTable';
import StatusBadge from '../../components/common/StatusBadge';
import { Eye, FileSearch } from 'lucide-react';

const OrderManagementPage: React.FC = () => {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  // Pagination states
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  // Sorting states
  const [sortBy, setSortBy] = useState('orderDate');
  const [direction, setDirection] = useState('desc');

  useEffect(() => {
    fetchOrders();
  }, [currentPage, searchQuery, sortBy, direction]);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const params: any = {
        page: currentPage,
        size: 10,
        sortBy,
        direction,
      };

      if (searchQuery.trim()) {
        params.search = searchQuery;
      }

      const data = await OrderService.getAll(params);
      setOrders(data.content || []);
      setTotalPages(data.totalPages || 1);
    } catch (err) {
      showToast('Failed to retrieve orders.', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleSort = (key: string) => {
    // Map column key to database field key
    let field = key;
    if (key === 'user') field = 'customer.name';
    if (key === 'date') field = 'orderDate';

    const isSame = sortBy === field;
    const nextDir = isSame && direction === 'desc' ? 'asc' : 'desc';
    setSortBy(field);
    setDirection(nextDir);
    setCurrentPage(0);
  };

  const headers = [
    { key: 'id', label: 'Order ID', sortable: true },
    { key: 'user', label: 'Customer', sortable: true },
    { key: 'date', label: 'Date', sortable: true },
    { key: 'amount', label: 'Amount', sortable: true },
    { key: 'paymentStatus', label: 'Payment Status' },
    { key: 'orderStatus', label: 'Order Status' },
    { key: 'actions', label: 'Actions' },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-800 tracking-tight">Orders Fulfillment</h1>
          <p className="text-sm text-slate-500 font-medium">Verify sales, track logistic shipments, and update order statuses</p>
        </div>
      </div>

      {/* Orders Table */}
      <DataTable
        headers={headers}
        data={orders}
        searchQuery={searchQuery}
        onSearchChange={(q) => {
          setSearchQuery(q);
          setCurrentPage(0);
        }}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        onSort={handleSort}
        loading={loading}
        placeholder="Filter by customer name or tracking number..."
        renderRow={(ord: Order) => (
          <tr key={ord.id} className="border-b border-slate-100 text-sm font-semibold text-slate-700 hover:bg-slate-55/40 transition-colors">
            <td className="p-4 text-indigo-600 font-bold">#{ord.id}</td>
            <td className="p-4">
              <div className="flex items-center gap-3">
                <img
                  src={ord.customer.profileImage || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150'}
                  alt="Customer"
                  className="h-9 w-9 rounded-xl object-cover ring-2 ring-slate-100"
                />
                <div className="flex flex-col">
                  <span className="text-slate-800 text-sm font-bold">{ord.customer.name}</span>
                  <span className="text-slate-400 text-xs font-semibold">{ord.customer.email}</span>
                </div>
              </div>
            </td>
            <td className="p-4 text-xs font-semibold text-slate-400">
              {new Date(ord.orderDate).toLocaleString()}
            </td>
            <td className="p-4 text-slate-850 font-bold">${ord.amount.toFixed(2)}</td>
            <td className="p-4">
              <StatusBadge status={ord.paymentStatus} />
            </td>
            <td className="p-4">
              <StatusBadge status={ord.orderStatus} />
            </td>
            <td className="p-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => navigate(`/orders/${ord.id}`)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-slate-200 hover:border-indigo-500 hover:text-indigo-650 rounded-xl text-xs font-bold transition-all active:scale-95 bg-white"
                >
                  <Eye className="h-4 w-4" />
                  View Details
                </button>
              </div>
            </td>
          </tr>
        )}
      />
    </div>
  );
};

export default OrderManagementPage;
