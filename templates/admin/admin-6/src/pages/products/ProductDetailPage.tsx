import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Package, DollarSign, Tag, Building, Warehouse as WarehouseIcon, Star, Plus, ShieldCheck, AlertTriangle } from 'lucide-react';
import { PageHeader } from '../../components/common/PageHeader';
import { StatCard } from '../../components/common/StatCard';
import { DataTable, Column } from '../../components/common/DataTable';
import { Badge } from '../../components/common/Badge';
import { Modal } from '../../components/common/Modal';
import { FormInput } from '../../components/forms/FormInput';
import { productService } from '../../services/productService';
import { INITIAL_CATEGORIES, INITIAL_INVENTORY, INITIAL_WAREHOUSES, INITIAL_SUPPLIERS } from '../../data/mockData';
import { Category, InventoryItem, Warehouse, Supplier } from '../../types';
import { useToast } from '../../context/ToastContext';
import { storageService } from '../../services/storageService';

export const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = productService.getProductById(id || '');

  if (!product) {
    return (
      <div className="p-12 text-center">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white">Product Not Found</h2>
        <button onClick={() => navigate('/products')} className="mt-4 px-4 py-2 bg-brand-600 text-white font-semibold text-xs rounded-xl">Back to Products</button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <button onClick={() => navigate('/products')} className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500">
        <ArrowLeft className="w-4 h-4" /> Back to Products
      </button>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm flex flex-col md:flex-row gap-6">
        <img src={product.image} alt={product.name} className="w-48 h-48 rounded-2xl object-cover ring-2 ring-slate-100 dark:ring-slate-800" />
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-brand-600 dark:text-brand-400">SKU: {product.sku}</span>
              <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">{product.name}</h1>
            </div>
            <Badge variant={product.status === 'In Stock' ? 'success' : 'warning'}>{product.status}</Badge>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
            <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
              <span className="text-slate-400">Selling Price</span>
              <div className="text-base font-extrabold text-slate-900 dark:text-white mt-1">${product.price.toFixed(2)}</div>
            </div>
            <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
              <span className="text-slate-400">Cost Price</span>
              <div className="text-base font-extrabold text-slate-900 dark:text-white mt-1">${product.cost.toFixed(2)}</div>
            </div>
            <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
              <span className="text-slate-400">Stock Level</span>
              <div className="text-base font-extrabold text-slate-900 dark:text-white mt-1">{product.stock} units</div>
            </div>
            <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
              <span className="text-slate-400">Total Sales</span>
              <div className="text-base font-extrabold text-slate-900 dark:text-white mt-1">{product.salesCount} sold</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CategoriesPage: React.FC = () => {
  const { showToast } = useToast();
  const [categories, setCategories] = useState<Category[]>(() => storageService.get<Category[]>('app_categories', INITIAL_CATEGORIES));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleAddCategory = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    const newCat: Category = {
      id: `cat_${Date.now()}`,
      name,
      slug: name.toLowerCase().replace(/\s+/g, '-'),
      productCount: 0,
      description: description || 'Custom catalog product taxonomy.',
      status: 'Active',
    };
    const updated = [newCat, ...categories];
    setCategories(updated);
    storageService.set('app_categories', updated);
    showToast('Category Created', `Added product category ${name}`);
    setIsModalOpen(false);
    setName('');
    setDescription('');
  };

  const columns: Column<Category>[] = [
    { key: 'name', header: 'Category Name', sortable: true },
    { key: 'slug', header: 'URL Slug' },
    { key: 'description', header: 'Description Scope' },
    {
      key: 'productCount',
      header: 'Products Count',
      sortable: true,
      render: (c) => <span className="font-extrabold text-brand-600 dark:text-brand-400">{c.productCount} items</span>,
    },
    { key: 'status', header: 'Status', render: (c) => <Badge variant="success">{c.status}</Badge> },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        title="Product Categories"
        subtitle="Category taxonomy, product counts, description scope, and display hierarchy."
        actions={
          <button onClick={() => setIsModalOpen(true)} className="px-4 py-2 bg-brand-600 text-white font-semibold text-xs rounded-xl flex items-center gap-2">
            <Plus className="w-4 h-4" /> Add Category
          </button>
        }
      />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <StatCard title="Active Categories" value={categories.length.toString()} change={0} icon={Tag} />
        <StatCard title="Catalog Products Count" value="179" change={14.2} icon={Package} />
        <StatCard title="Top Selling Category" value="Security Software" change={22.5} icon={Star} />
      </div>

      <DataTable columns={columns} data={categories} keyExtractor={(c) => c.id} searchPlaceholder="Search categories..." />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Add Product Category">
        <form onSubmit={handleAddCategory} className="space-y-4">
          <FormInput label="Category Name" required value={name} onChange={(e) => setName(e.target.value)} />
          <FormInput label="Description Scope" required value={description} onChange={(e) => setDescription(e.target.value)} />
          <div className="flex justify-end gap-2 pt-2">
            <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-xs font-semibold text-slate-600">Cancel</button>
            <button type="submit" className="px-4 py-2 text-xs font-semibold text-white bg-brand-600 rounded-xl">Save Category</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export const InventoryPage: React.FC = () => {
  const { showToast } = useToast();
  const [inventory] = useState<InventoryItem[]>(INITIAL_INVENTORY);
  const [isAuditing, setIsAuditing] = useState(false);

  const handleRunAudit = () => {
    setIsAuditing(true);
    setTimeout(() => {
      setIsAuditing(false);
      showToast('Stock Audit Complete', 'Verified 1,048 inventory units across all warehouses. 100% stock accuracy confirmed.');
    }, 1500);
  };

  const columns: Column<InventoryItem>[] = [
    { key: 'productName', header: 'Product Item', sortable: true },
    { key: 'sku', header: 'SKU Code' },
    { key: 'warehouse', header: 'Warehouse Location', sortable: true },
    { key: 'location', header: 'Shelf Location' },
    { key: 'quantityOnHand', header: 'On Hand', sortable: true, render: (i) => <span className="font-extrabold text-slate-900 dark:text-white">{i.quantityOnHand}</span> },
    { key: 'available', header: 'Available Stock', sortable: true, render: (i) => <span className={`font-bold ${i.available <= i.reorderLevel ? 'text-rose-600' : 'text-emerald-600'}`}>{i.available} units</span> },
    { key: 'lastRestocked', header: 'Last Restocked' },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        title="Inventory Control & Stock Audit"
        subtitle="Live stock levels, warehouse allocation, reserved units, and automated reorder alerts."
        actions={
          <button onClick={handleRunAudit} disabled={isAuditing} className="px-4 py-2 bg-brand-600 text-white font-semibold text-xs rounded-xl flex items-center gap-2">
            <ShieldCheck className={`w-4 h-4 ${isAuditing ? 'animate-pulse text-amber-300' : ''}`} /> {isAuditing ? 'Auditing Stock...' : 'Run Stock Audit'}
          </button>
        }
      />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <StatCard title="Total Units On Hand" value="1,048" change={8.4} icon={Package} />
        <StatCard title="Low Stock Warnings" value="2" change={-50.0} trend="up" icon={AlertTriangle} />
        <StatCard title="Stock Valuation" value="$485,200" change={12.1} icon={DollarSign} />
      </div>

      <DataTable columns={columns} data={inventory} keyExtractor={(i) => i.id} searchPlaceholder="Search inventory stock..." />
    </div>
  );
};

export const WarehousesPage: React.FC = () => {
  const { showToast } = useToast();
  const [warehouses, setWarehouses] = useState<Warehouse[]>(() => storageService.get<Warehouse[]>('app_warehouses', INITIAL_WAREHOUSES));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [manager, setManager] = useState('');

  const handleAddWarehouse = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    const newWh: Warehouse = {
      id: `wh_${Date.now()}`,
      name,
      code: `WH-DEPOT-${Math.floor(10 + Math.random() * 90)}`,
      location,
      capacity: '50% Capacity (30,000 sq ft)',
      manager,
      status: 'Active',
    };
    const updated = [newWh, ...warehouses];
    setWarehouses(updated);
    storageService.set('app_warehouses', updated);
    showToast('Facility Added', `Registered warehouse ${name}`);
    setIsModalOpen(false);
    setName('');
    setLocation('');
  };

  const columns: Column<Warehouse>[] = [
    { key: 'name', header: 'Warehouse Facility', sortable: true },
    { key: 'code', header: 'Facility Code' },
    { key: 'location', header: 'Location' },
    { key: 'capacity', header: 'Capacity Utilization' },
    { key: 'manager', header: 'Facility Manager' },
    { key: 'status', header: 'Operational Status', render: (w) => <Badge variant={w.status === 'Active' ? 'success' : 'warning'}>{w.status}</Badge> },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        title="Fulfillment Warehouses"
        subtitle="Physical storage locations, square footage capacity utilization, and facility managers."
        actions={
          <button onClick={() => setIsModalOpen(true)} className="px-4 py-2 bg-brand-600 text-white font-semibold text-xs rounded-xl flex items-center gap-2">
            <Plus className="w-4 h-4" /> Add Facility
          </button>
        }
      />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <StatCard title="Active Storage Depots" value={warehouses.length.toString()} change={0} icon={WarehouseIcon} />
        <StatCard title="Total Storage Capacity" value="130,000 sq ft" change={10.0} icon={Building} />
        <StatCard title="Avg Capacity Utilization" value="62.3%" change={4.2} icon={Package} />
      </div>

      <DataTable columns={columns} data={warehouses} keyExtractor={(w) => w.id} searchPlaceholder="Search warehouses..." />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Register Warehouse Facility">
        <form onSubmit={handleAddWarehouse} className="space-y-4">
          <FormInput label="Facility Name" required value={name} onChange={(e) => setName(e.target.value)} />
          <FormInput label="Location (City, Country)" required value={location} onChange={(e) => setLocation(e.target.value)} />
          <FormInput label="Facility Manager Name" required value={manager} onChange={(e) => setManager(e.target.value)} />
          <div className="flex justify-end gap-2 pt-2">
            <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-xs font-semibold text-slate-600">Cancel</button>
            <button type="submit" className="px-4 py-2 text-xs font-semibold text-white bg-brand-600 rounded-xl">Save Facility</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export const SuppliersPage: React.FC = () => {
  const { showToast } = useToast();
  const [suppliers, setSuppliers] = useState<Supplier[]>(() => storageService.get<Supplier[]>('app_suppliers', INITIAL_SUPPLIERS));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('Hardware');

  const handleAddSupplier = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    const newSup: Supplier = {
      id: `sup_${Date.now()}`,
      name,
      contactPerson,
      email,
      phone,
      category,
      rating: 4.9,
      status: 'Active',
    };
    const updated = [newSup, ...suppliers];
    setSuppliers(updated);
    storageService.set('app_suppliers', updated);
    showToast('Supplier Added', `Registered vendor supplier ${name}`);
    setIsModalOpen(false);
    setName('');
    setEmail('');
  };

  const columns: Column<Supplier>[] = [
    { key: 'name', header: 'Supplier Vendor', sortable: true },
    { key: 'contactPerson', header: 'Contact Person' },
    { key: 'email', header: 'Email' },
    { key: 'category', header: 'Product Category', sortable: true },
    { key: 'rating', header: 'SLA Score', render: (s) => <span className="font-bold text-amber-500">★ {s.rating}</span> },
    { key: 'status', header: 'Vendor Status', render: (s) => <Badge variant="success">{s.status}</Badge> },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        title="Vendor Suppliers Directory"
        subtitle="Primary supplier directory, lead times, rating scores, and procurement contacts."
        actions={
          <button onClick={() => setIsModalOpen(true)} className="px-4 py-2 bg-brand-600 text-white font-semibold text-xs rounded-xl flex items-center gap-2">
            <Plus className="w-4 h-4" /> Add Supplier
          </button>
        }
      />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <StatCard title="Active Vendors" value={suppliers.length.toString()} change={0} icon={Building} />
        <StatCard title="Vendor Quality Score" value="4.8 / 5.0" change={2.1} icon={Star} />
        <StatCard title="On-Time Delivery Rate" value="98.4%" change={1.2} icon={ShieldCheck} />
      </div>

      <DataTable columns={columns} data={suppliers} keyExtractor={(s) => s.id} searchPlaceholder="Search suppliers..." />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Add Vendor Supplier">
        <form onSubmit={handleAddSupplier} className="space-y-4">
          <FormInput label="Supplier Vendor Name" required value={name} onChange={(e) => setName(e.target.value)} />
          <div className="grid grid-cols-2 gap-4">
            <FormInput label="Contact Person" required value={contactPerson} onChange={(e) => setContactPerson(e.target.value)} />
            <FormInput label="Category" required value={category} onChange={(e) => setCategory(e.target.value)} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <FormInput label="Email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
            <FormInput label="Phone" required value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
          <div className="flex justify-end gap-2 pt-2">
            <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-xs font-semibold text-slate-600">Cancel</button>
            <button type="submit" className="px-4 py-2 text-xs font-semibold text-white bg-brand-600 rounded-xl">Save Supplier</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
