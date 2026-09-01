import React, { useEffect, useState } from 'react';
import { Product, ProductService, Category } from '../../services/apiServices';
import { useToast } from '../../components/common/Toast';
import DataTable from '../../components/common/DataTable';
import StatusBadge from '../../components/common/StatusBadge';
import Modal from '../../components/common/Modal';
import ConfirmationModal from '../../components/common/ConfirmationModal';
import { Plus, Edit2, Trash2, Tag, Layers, AlertCircle } from 'lucide-react';

const ProductManagementPage: React.FC = () => {
  const { showToast } = useToast();
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  // Filters state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  // Pagination details (backend matches Spring Data Pageable)
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  // Modals state
  const [formModalOpen, setFormModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Form fields
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0.0);
  const [discount, setDiscount] = useState(0.0);
  const [stock, setStock] = useState(0);
  const [status, setStatus] = useState('ACTIVE');
  const [imageUrl, setImageUrl] = useState('');
  const [categoryId, setCategoryId] = useState<number>(0);

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [currentPage, selectedCategory, searchQuery]);

  const fetchCategories = async () => {
    try {
      const data = await ProductService.getCategories();
      setCategories(data);
      if (data.length > 0) setCategoryId(data[0].id);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const params: any = {
        page: currentPage,
        size: 8,
        sortBy: 'id',
        direction: 'desc',
      };

      if (searchQuery.trim()) {
        params.search = searchQuery;
      }
      if (selectedCategory !== 'all') {
        params.categoryId = Number(selectedCategory);
      }

      const data = await ProductService.getAll(params);
      setProducts(data.content || []);
      setTotalPages(data.totalPages || 1);
    } catch (err) {
      showToast('Failed to retrieve products.', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleOpenAddModal = () => {
    setSelectedProduct(null);
    setName('');
    setDescription('');
    setPrice(0.0);
    setDiscount(0.0);
    setStock(0);
    setStatus('ACTIVE');
    setImageUrl('');
    if (categories.length > 0) setCategoryId(categories[0].id);
    setFormModalOpen(true);
  };

  const handleOpenEditModal = (prod: Product) => {
    setSelectedProduct(prod);
    setName(prod.name);
    setDescription(prod.description || '');
    setPrice(prod.price);
    setDiscount(prod.discount);
    setStock(prod.stock);
    setStatus(prod.status);
    setImageUrl(prod.imageUrl || '');
    setCategoryId(prod.category.id);
    setFormModalOpen(true);
  };

  const handleOpenDeleteModal = (prod: Product) => {
    setSelectedProduct(prod);
    setDeleteModalOpen(true);
  };

  const handleSaveProduct = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || price < 0 || stock < 0 || !categoryId) {
      showToast('Please validate your fields.', 'warning');
      return;
    }

    const payload = {
      name,
      description,
      price: Number(price),
      discount: Number(discount),
      stock: Number(stock),
      status,
      imageUrl,
      categoryId: Number(categoryId),
    };

    try {
      if (selectedProduct && selectedProduct.id) {
        await ProductService.update(selectedProduct.id, payload);
        showToast('Product updated successfully!', 'success');
      } else {
        await ProductService.create(payload);
        showToast('Product created successfully!', 'success');
      }
      setFormModalOpen(false);
      fetchProducts();
    } catch (err) {
      showToast('Failed to save product details.', 'error');
    }
  };

  const handleDeleteProduct = async () => {
    if (!selectedProduct || !selectedProduct.id) return;
    try {
      await ProductService.delete(selectedProduct.id);
      showToast('Product deleted successfully.', 'success');
      fetchProducts();
    } catch (err) {
      showToast('Failed to delete product.', 'error');
    }
  };

  const headers = [
    { key: 'product', label: 'Product' },
    { key: 'category', label: 'Category' },
    { key: 'price', label: 'Price' },
    { key: 'stock', label: 'Stock' },
    { key: 'status', label: 'Status' },
    { key: 'actions', label: 'Actions' },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-800 tracking-tight">Products Catalog</h1>
          <p className="text-sm text-slate-500 font-medium">Manage e-commerce inventory, pricing adjustments, and discounts</p>
        </div>
      </div>

      {/* Filter and Table Section */}
      <div className="space-y-4">
        {/* Category filtering row */}
        <div className="flex items-center gap-3 overflow-x-auto pb-2">
          <button
            onClick={() => {
              setSelectedCategory('all');
              setCurrentPage(0);
            }}
            className={`px-4 py-2 text-xs font-bold rounded-xl border transition-all whitespace-nowrap active:scale-95 ${
              selectedCategory === 'all'
                ? 'bg-indigo-600 border-indigo-600 text-white shadow-sm shadow-indigo-100'
                : 'bg-white border-slate-200 text-slate-650 hover:bg-slate-50'
            }`}
          >
            All Departments
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(String(cat.id));
                setCurrentPage(0);
              }}
              className={`px-4 py-2 text-xs font-bold rounded-xl border transition-all whitespace-nowrap active:scale-95 ${
                selectedCategory === String(cat.id)
                  ? 'bg-indigo-600 border-indigo-600 text-white shadow-sm shadow-indigo-100'
                  : 'bg-white border-slate-200 text-slate-650 hover:bg-slate-50'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <DataTable
          headers={headers}
          data={products}
          searchQuery={searchQuery}
          onSearchChange={(q) => {
            setSearchQuery(q);
            setCurrentPage(0);
          }}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          loading={loading}
          placeholder="Search products by title or description..."
          actions={
            <button
              onClick={handleOpenAddModal}
              className="flex items-center gap-2 py-2 px-4 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition-all shadow-sm shadow-indigo-100 hover:shadow-indigo-200 active:scale-95 cursor-pointer"
            >
              <Plus className="h-4 w-4" />
              Add Product
            </button>
          }
          renderRow={(prod: Product) => (
            <tr key={prod.id} className="border-b border-slate-100 text-sm font-semibold text-slate-700 hover:bg-slate-50/40 transition-colors">
              <td className="p-4">
                <div className="flex items-center gap-3">
                  <img
                    src={prod.imageUrl || 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400'}
                    alt="Product"
                    className="h-12 w-12 rounded-xl object-cover ring-2 ring-slate-100"
                  />
                  <div className="flex flex-col">
                    <span className="text-slate-800 text-sm font-bold truncate max-w-xs">{prod.name}</span>
                    <span className="text-slate-400 text-xs font-medium truncate max-w-xs">{prod.description || 'No description'}</span>
                  </div>
                </div>
              </td>
              <td className="p-4">
                <span className="inline-flex items-center gap-1 text-xs text-slate-550">
                  <Layers className="h-3.5 w-3.5 text-indigo-400" />
                  {prod.category.name}
                </span>
              </td>
              <td className="p-4">
                <div className="flex flex-col">
                  {prod.discount > 0 ? (
                    <>
                      <span className="text-slate-800 font-bold">${(prod.price * (1 - prod.discount / 100)).toFixed(2)}</span>
                      <span className="text-red-500 text-[10px] font-bold line-through">${prod.price.toFixed(2)} (-{prod.discount}%)</span>
                    </>
                  ) : (
                    <span className="text-slate-800 font-bold">${prod.price.toFixed(2)}</span>
                  )}
                </div>
              </td>
              <td className="p-4">
                <div className="flex items-center gap-2">
                  <span className={`font-bold ${prod.stock === 0 ? 'text-red-500' : prod.stock < 10 ? 'text-amber-500' : 'text-slate-700'}`}>
                    {prod.stock} units
                  </span>
                  {prod.stock < 10 && (
                    <span title="Low Stock Alert">
                      <AlertCircle className={`h-4.5 w-4.5 ${prod.stock === 0 ? 'text-red-500' : 'text-amber-500'} animate-pulse`} />
                    </span>
                  )}
                </div>
              </td>
              <td className="p-4">
                <StatusBadge status={prod.status} />
              </td>
              <td className="p-4">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleOpenEditModal(prod)}
                    className="p-1.5 border border-slate-200 hover:border-indigo-500 hover:bg-indigo-50 hover:text-indigo-600 text-slate-500 rounded-lg transition-all active:scale-90 bg-white"
                  >
                    <Edit2 className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => handleOpenDeleteModal(prod)}
                    className="p-1.5 border border-slate-200 hover:border-red-500 hover:bg-red-50 hover:text-red-600 text-slate-500 rounded-lg transition-all active:scale-90 bg-white"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </td>
            </tr>
          )}
        />
      </div>

      {/* Add/Edit Form Modal */}
      <Modal
        isOpen={formModalOpen}
        onClose={() => setFormModalOpen(false)}
        title={selectedProduct ? 'Modify Product Specifications' : 'Publish New Product'}
      >
        <form onSubmit={handleSaveProduct} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Product Title</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Wireless Smart Soundbar"
              className="w-full px-3.5 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 bg-slate-50/50"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              placeholder="Describe the product features, specs, and details..."
              className="w-full px-3.5 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 bg-slate-50/50"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Price ($)</label>
              <input
                type="number"
                step="0.01"
                required
                min="0"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                placeholder="299.99"
                className="w-full px-3.5 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 bg-slate-50/50"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Discount (%)</label>
              <input
                type="number"
                step="0.1"
                min="0"
                max="100"
                value={discount}
                onChange={(e) => setDiscount(Number(e.target.value))}
                placeholder="10.0"
                className="w-full px-3.5 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 bg-slate-50/50"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Stock Quantity</label>
              <input
                type="number"
                required
                min="0"
                value={stock}
                onChange={(e) => setStock(Number(e.target.value))}
                placeholder="50"
                className="w-full px-3.5 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 bg-slate-50/50"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Category</label>
              <select
                value={categoryId}
                onChange={(e) => setCategoryId(Number(e.target.value))}
                className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 bg-slate-50/50"
              >
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Product Status</label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 bg-slate-50/50"
              >
                <option value="ACTIVE">Active</option>
                <option value="OUT_OF_STOCK">Out Of Stock</option>
                <option value="DRAFT">Draft</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Image URL</label>
              <input
                type="text"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="https://images.unsplash.com/..."
                className="w-full px-3.5 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 bg-slate-50/50"
              />
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
            <button
              type="button"
              onClick={() => setFormModalOpen(false)}
              className="px-4 py-2 text-sm font-medium text-slate-650 bg-slate-50 hover:bg-slate-100 rounded-xl transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition-all shadow-sm shadow-indigo-100 active:scale-95"
            >
              Save Product
            </button>
          </div>
        </form>
      </Modal>

      {/* Delete confirmation modal */}
      <ConfirmationModal
        isOpen={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={handleDeleteProduct}
        title="Remove Product"
        message={`Are you sure you want to remove product "${selectedProduct?.name}"? All related inventory metrics will be cleared.`}
      />
    </div>
  );
};

export default ProductManagementPage;
