import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Plus, Eye, Trash2, Package, DollarSign, Tag, AlertTriangle } from 'lucide-react';
import { PageHeader } from '../../components/common/PageHeader';
import { StatCard } from '../../components/common/StatCard';
import { DataTable, Column } from '../../components/common/DataTable';
import { Badge } from '../../components/common/Badge';
import { Modal } from '../../components/common/Modal';
import { ConfirmationDialog } from '../../components/common/ConfirmationDialog';
import { FormInput } from '../../components/forms/FormInput';
import { FormSelect } from '../../components/forms/FormSelect';
import { productService } from '../../services/productService';
import { Product } from '../../types';
import { useToast } from '../../context/ToastContext';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const PRODUCT_STOCK_DISTRIBUTION = [
  { category: 'Hardware', stock: 45, lowStock: 10 },
  { category: 'Software', stock: 999, lowStock: 50 },
  { category: 'Networking', stock: 4, lowStock: 10 },
  { category: 'Office Equipment', stock: 0, lowStock: 5 },
];

const productSchema = z.object({
  sku: z.string().min(3, 'SKU must be at least 3 characters'),
  name: z.string().min(2, 'Product name is required'),
  category: z.string().min(2, 'Category is required'),
  price: z.number().min(0.01, 'Price must be positive'),
  cost: z.number().min(0.01, 'Cost must be positive'),
  stock: z.number().min(0, 'Stock cannot be negative'),
  lowStockThreshold: z.number().min(1, 'Threshold must be at least 1'),
  supplier: z.string().min(2, 'Supplier name is required'),
  warehouse: z.string().min(2, 'Warehouse location is required'),
});

type ProductFormData = z.infer<typeof productSchema>;

export const ProductsPage: React.FC = () => {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const [products, setProducts] = useState<Product[]>(() => productService.getProducts());
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [deletingProductId, setDeletingProductId] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
  });

  const refreshProducts = () => {
    setProducts(productService.getProducts());
  };

  const handleCreateProduct = (data: ProductFormData) => {
    const status = data.stock <= 0 ? 'Out of Stock' : data.stock <= data.lowStockThreshold ? 'Low Stock' : 'In Stock';
    const created = productService.createProduct({
      ...data,
      status,
      image: 'https://images.unsplash.com/photo-1526738549149-8e07eca6c147?w=300&auto=format&fit=crop&q=80',
    });
    refreshProducts();
    showToast('Product Created', `Added ${created.name} (${created.sku})`);
    setIsAddModalOpen(false);
    reset();
  };

  const handleDeleteProduct = () => {
    if (!deletingProductId) return;
    productService.deleteProduct(deletingProductId);
    refreshProducts();
    showToast('Product Removed', 'Product catalog item deleted.', 'warning');
    setDeletingProductId(null);
  };

  const columns: Column<Product>[] = [
    {
      key: 'name',
      header: 'Product Details',
      sortable: true,
      render: (p) => (
        <div className="flex items-center gap-3">
          <img src={p.image} alt={p.name} className="w-10 h-10 rounded-xl object-cover ring-1 ring-slate-200 dark:ring-slate-800" />
          <div>
            <div
              onClick={() => navigate(`/products/${p.id}`)}
              className="font-bold text-slate-900 dark:text-white hover:text-brand-600 cursor-pointer"
            >
              {p.name}
            </div>
            <div className="text-xs text-slate-400">SKU: {p.sku}</div>
          </div>
        </div>
      ),
    },
    { key: 'category', header: 'Category', sortable: true },
    {
      key: 'price',
      header: 'Unit Price',
      sortable: true,
      render: (p) => <span className="font-extrabold text-slate-900 dark:text-white">${p.price.toFixed(2)}</span>,
    },
    {
      key: 'stock',
      header: 'Stock Quantity',
      sortable: true,
      render: (p) => (
        <span className={`font-bold ${p.stock <= p.lowStockThreshold ? 'text-rose-600' : 'text-slate-900 dark:text-white'}`}>
          {p.stock} units
        </span>
      ),
    },
    {
      key: 'status',
      header: 'Availability',
      sortable: true,
      render: (p) => (
        <Badge
          variant={
            p.status === 'In Stock'
              ? 'success'
              : p.status === 'Low Stock'
              ? 'warning'
              : 'danger'
          }
        >
          {p.status}
        </Badge>
      ),
    },
    {
      key: 'actions',
      header: 'Actions',
      render: (p) => (
        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate(`/products/${p.id}`)}
            className="p-1.5 rounded-lg text-slate-500 hover:text-brand-600 hover:bg-brand-50"
            title="View Details"
          >
            <Eye className="w-4 h-4" />
          </button>
          <button
            onClick={() => setDeletingProductId(p.id)}
            className="p-1.5 rounded-lg text-slate-500 hover:text-rose-600 hover:bg-rose-50"
            title="Delete Product"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        title="Product Catalog Master"
        subtitle="Manage inventory items, pricing tiers, SKUs, and stock replenishment."
        actions={
          <button
            onClick={() => {
              reset();
              setIsAddModalOpen(true);
            }}
            className="px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white text-xs font-semibold rounded-xl shadow-md flex items-center gap-2"
          >
            <Plus className="w-4 h-4" /> Add Product
          </button>
        }
      />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <StatCard title="Total Catalog Items" value={products.length.toString()} change={14.2} icon={Package} />
        <StatCard title="In Stock Quantity" value="1,048 units" change={8.1} icon={Tag} />
        <StatCard title="Low Stock Warnings" value="2 items" change={-50.0} trend="up" icon={AlertTriangle} />
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
        <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4">Stock Distribution by Category</h3>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={PRODUCT_STOCK_DISTRIBUTION}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#33415515" />
              <XAxis dataKey="category" tick={{ fill: '#64748b' }} axisLine={false} />
              <YAxis tick={{ fill: '#64748b' }} axisLine={false} />
              <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderRadius: '12px', color: '#fff' }} />
              <Bar dataKey="stock" fill="#10b981" name="On-Hand Stock Units" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <DataTable
        columns={columns}
        data={products}
        keyExtractor={(p) => p.id}
        searchPlaceholder="Search products by SKU, name, category..."
        statusOptions={['In Stock', 'Low Stock', 'Out of Stock']}
      />

      <Modal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="Add New Catalog Product"
        footer={
          <>
            <button type="button" onClick={() => setIsAddModalOpen(false)} className="px-4 py-2 text-xs font-semibold text-slate-600">
              Cancel
            </button>
            <button type="submit" form="add-product-form" className="px-4 py-2 text-xs font-semibold text-white bg-brand-600 rounded-xl">
              Save Product
            </button>
          </>
        }
      >
        <form id="add-product-form" onSubmit={handleSubmit(handleCreateProduct)} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <FormInput label="SKU Code" required {...register('sku')} error={errors.sku?.message} />
            <FormInput label="Product Name" required {...register('name')} error={errors.name?.message} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <FormSelect
              label="Category"
              options={[
                { label: 'Hardware', value: 'Hardware' },
                { label: 'Software', value: 'Software' },
                { label: 'Networking', value: 'Networking' },
                { label: 'Office Equipment', value: 'Office Equipment' },
              ]}
              {...register('category')}
              error={errors.category?.message}
            />
            <FormInput label="Selling Price ($)" type="number" step="0.01" required {...register('price', { valueAsNumber: true })} error={errors.price?.message} />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <FormInput label="Cost Price ($)" type="number" step="0.01" required {...register('cost', { valueAsNumber: true })} error={errors.cost?.message} />
            <FormInput label="Initial Stock" type="number" required {...register('stock', { valueAsNumber: true })} error={errors.stock?.message} />
            <FormInput label="Low Stock Warning Threshold" type="number" required {...register('lowStockThreshold', { valueAsNumber: true })} error={errors.lowStockThreshold?.message} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <FormInput label="Primary Supplier" required {...register('supplier')} error={errors.supplier?.message} />
            <FormInput label="Warehouse Location" required {...register('warehouse')} error={errors.warehouse?.message} />
          </div>
        </form>
      </Modal>

      <ConfirmationDialog
        isOpen={!!deletingProductId}
        onClose={() => setDeletingProductId(null)}
        onConfirm={handleDeleteProduct}
        title="Delete Product"
        message="Are you sure you want to delete this product from the master catalog?"
      />
    </div>
  );
};
