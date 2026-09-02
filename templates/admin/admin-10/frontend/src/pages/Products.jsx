import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Plus,
  Edit2,
  Trash2,
  Package,
  Layers,
  DollarSign,
  Briefcase,
  AlertCircle
} from 'lucide-react';
import api from '../utils/api';
import Modal from '../components/Modal';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Search, Filters & Sorting
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [sortBy, setSortBy] = useState('');

  // CRUD Modal state
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Form parameters
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    stock: '',
    status: 'In Stock',
    image: 'accessories'
  });

  // Fetch products
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await api.get('/products');
      setProducts(res.data);
      setError(null);
    } catch (err) {
      console.error(err);
      setError('Failed to fetch product catalog.');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'price' || name === 'stock' ? Number(value) : value
    }));
  };

  const handleAddSubmit = async (e) => {
    e.preventDefault();
    try {
      // Determine status from stock
      let status = 'In Stock';
      if (formData.stock === 0) status = 'Out of Stock';
      else if (formData.stock < 10) status = 'Low Stock';
      
      const res = await api.post('/products', { ...formData, status });
      setProducts(prev => [...prev, res.data]);
      setShowAddModal(false);
      resetForm();
    } catch (err) {
      console.error('Failed to create product:', err);
    }
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      let status = 'In Stock';
      if (formData.stock === 0) status = 'Out of Stock';
      else if (formData.stock < 10) status = 'Low Stock';

      const res = await api.put(`/products/${selectedProduct.id}`, { ...formData, status });
      setProducts(prev => prev.map(p => p.id === selectedProduct.id ? res.data : p));
      setShowEditModal(false);
      resetForm();
    } catch (err) {
      console.error('Failed to update product:', err);
    }
  };

  const handleDeleteConfirm = async () => {
    try {
      await api.delete(`/products/${selectedProduct.id}`);
      setProducts(prev => prev.filter(p => p.id !== selectedProduct.id));
      setShowDeleteModal(false);
      setSelectedProduct(null);
    } catch (err) {
      console.error('Failed to delete product:', err);
    }
  };

  const openEditModal = (product) => {
    setSelectedProduct(product);
    setFormData({
      name: product.name,
      category: product.category,
      price: product.price,
      stock: product.stock,
      status: product.status,
      image: product.image
    });
    setShowEditModal(true);
  };

  const openDeleteModal = (product) => {
    setSelectedProduct(product);
    setShowDeleteModal(true);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      category: '',
      price: '',
      stock: '',
      status: 'In Stock',
      image: 'accessories'
    });
    setSelectedProduct(null);
  };

  // Filtered, Searched & Sorted Catalog
  const filteredProducts = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
                          p.category.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = categoryFilter === '' || p.category === categoryFilter;
    const matchesStatus = statusFilter === '' || p.status === statusFilter;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    if (sortBy === 'stock-asc') return a.stock - b.stock;
    if (sortBy === 'stock-desc') return b.stock - a.stock;
    return 0; // Default sorting (unsorted/initial)
  });

  const getStatusColor = (status) => {
    if (status === 'In Stock') return 'var(--success)';
    if (status === 'Low Stock') return 'var(--warning)';
    return 'var(--danger)'; // Out of Stock
  };

  // Unique categories for filtering
  const categories = [...new Set(products.map(p => p.category))];

  // Helper to get image emoji illustrations instead of broken URLs
  const getProductEmoji = (category) => {
    const cat = category.toLowerCase();
    if (cat.includes('bed')) return '🛌';
    if (cat.includes('kitchen') || cat.includes('cook')) return '☕';
    if (cat.includes('access') || cat.includes('purse')) return '👜';
    if (cat.includes('elect')) return '🎧';
    if (cat.includes('cloth') || cat.includes('hood')) return '👕';
    if (cat.includes('fit') || cat.includes('water')) return '🧴';
    return '📦';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}
    >
      {/* Page Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px' }}>
        <div>
          <h1 style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--text-main)' }}>Product Catalog</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Maintain stock, prices, categories, and inventory items.</p>
        </div>

        <button
          onClick={() => { resetForm(); setShowAddModal(true); }}
          className="btn-primary"
          style={{ padding: '10px 18px', fontSize: '0.85rem' }}
        >
          <Plus size={16} /> Add Catalog Item
        </button>
      </div>

      {/* Filters, Search & Sort Panel Card */}
      <div style={{
        backgroundColor: 'var(--bg-card)',
        border: '1.5px solid var(--border-color)',
        borderRadius: 'var(--border-radius-md)',
        padding: '20px',
        boxShadow: 'var(--shadow-sm)',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '15px',
        alignItems: 'center'
      }}>
        {/* Search */}
        <div style={{ position: 'relative', flexGrow: 1, minWidth: '220px' }}>
          <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          <input
            type="text"
            placeholder="Search by product name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ paddingLeft: '38px', height: '42px' }}
            className="form-input"
          />
        </div>

        {/* Category Filter */}
        <div style={{ minWidth: '150px' }}>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            style={{ height: '42px' }}
            className="form-select"
          >
            <option value="">All Categories</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        {/* Stock Status Filter */}
        <div style={{ minWidth: '150px' }}>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            style={{ height: '42px' }}
            className="form-select"
          >
            <option value="">All Stock Status</option>
            <option value="In Stock">In Stock</option>
            <option value="Low Stock">Low Stock</option>
            <option value="Out of Stock">Out of Stock</option>
          </select>
        </div>

        {/* Sorting Selection */}
        <div style={{ minWidth: '150px' }}>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            style={{ height: '42px' }}
            className="form-select"
          >
            <option value="">Sort by: Default</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="stock-asc">Stock: Low to High</option>
            <option value="stock-desc">Stock: High to Low</option>
          </select>
        </div>
      </div>

      {/* Grid of Product Cards */}
      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '50px 0' }}>
          <div style={{ width: '30px', height: '30px', border: '3px solid var(--border-color)', borderTopColor: 'var(--accent)', borderRadius: '50%' }} className="pulse-glow" />
        </div>
      ) : (
        <motion.div
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '24px'
          }}
        >
          <AnimatePresence>
            {sortedProducts.length === 0 ? (
              <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px', color: 'var(--text-muted)' }}>
                No catalog items matching filters.
              </div>
            ) : (
              sortedProducts.map((p, idx) => (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: Math.min(idx * 0.05, 0.4) }}
                  whileHover={{ y: -8, boxShadow: 'var(--shadow-md)' }}
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    border: '1.5px solid var(--border-color)',
                    borderRadius: 'var(--border-radius-md)',
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: 'var(--shadow-sm)',
                    position: 'relative',
                    cursor: 'pointer',
                  }}
                >
                  {/* Floating Action Overlay on Hover */}
                  <div style={{ display: 'flex', gap: '8px', position: 'absolute', top: '15px', right: '15px', zIndex: 10 }}>
                    <button
                      onClick={() => openEditModal(p)}
                      style={{
                        backgroundColor: '#FFFFFF',
                        border: '1px solid var(--border-color)',
                        padding: '6px',
                        borderRadius: '50%',
                        cursor: 'pointer',
                        color: 'var(--text-muted)',
                        boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
                        transition: 'var(--transition-smooth)'
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.transform = 'scale(1.1)'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.transform = 'none'; }}
                    >
                      <Edit2 size={14} />
                    </button>
                    <button
                      onClick={() => openDeleteModal(p)}
                      style={{
                        backgroundColor: '#FFFFFF',
                        border: '1px solid var(--border-color)',
                        padding: '6px',
                        borderRadius: '50%',
                        cursor: 'pointer',
                        color: 'var(--text-muted)',
                        boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
                        transition: 'var(--transition-smooth)'
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--danger)'; e.currentTarget.style.transform = 'scale(1.1)'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.transform = 'none'; }}
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>

                  {/* Product Illustration */}
                  <div style={{
                    height: '140px',
                    borderRadius: 'var(--border-radius-sm)',
                    backgroundColor: 'var(--bg-primary)',
                    border: '1px solid var(--border-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '4.5rem',
                    marginBottom: '15px',
                    userSelect: 'none'
                  }}>
                    {getProductEmoji(p.category)}
                  </div>

                  {/* Category label */}
                  <span style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    letterSpacing: '0.5px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    marginBottom: '6px'
                  }}>
                    <Layers size={11} /> {p.category}
                  </span>

                  {/* Product Name */}
                  <h4 style={{
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: 'var(--text-main)',
                    marginBottom: '12px',
                    lineHeight: 1.3
                  }}>{p.name}</h4>

                  {/* Pricing and Stock info */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: 'auto',
                    borderTop: '1px solid var(--bg-secondary)',
                    paddingTop: '12px'
                  }}>
                    <span style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-main)' }}>
                      ${p.price.toFixed(2)}
                    </span>

                    <div style={{ textAlign: 'right' }}>
                      <span style={{
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        color: getStatusColor(p.status),
                        display: 'block'
                      }}>{p.status}</span>
                      <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                        {p.stock} items left
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </motion.div>
      )}

      {/* ADD CATALOG MODAL */}
      <Modal isOpen={showAddModal} onClose={() => setShowAddModal(false)} title="Add Item to Catalog">
        <form onSubmit={handleAddSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>Product Name</label>
            <input type="text" name="name" required value={formData.name} onChange={handleInputChange} className="form-input" placeholder="e.g. Ergonomic Wooden Desk" />
          </div>
          <div>
            <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>Category</label>
            <input type="text" name="category" required value={formData.category} onChange={handleInputChange} className="form-input" placeholder="e.g. Office, Furniture, Electronics" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div>
              <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>Price ($)</label>
              <input type="number" step="0.01" min="0.01" name="price" required value={formData.price} onChange={handleInputChange} className="form-input" placeholder="149.99" />
            </div>
            <div>
              <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>Initial Stock Level</label>
              <input type="number" min="0" name="stock" required value={formData.stock} onChange={handleInputChange} className="form-input" placeholder="50" />
            </div>
          </div>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', marginTop: '15px' }}>
            <button type="button" onClick={() => setShowAddModal(false)} className="btn-secondary">Cancel</button>
            <button type="submit" className="btn-primary">Add Product</button>
          </div>
        </form>
      </Modal>

      {/* EDIT CATALOG MODAL */}
      <Modal isOpen={showEditModal} onClose={() => setShowEditModal(false)} title={`Update Catalog Details: ${selectedProduct?.id}`}>
        <form onSubmit={handleEditSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>Product Name</label>
            <input type="text" name="name" required value={formData.name} onChange={handleInputChange} className="form-input" />
          </div>
          <div>
            <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>Category</label>
            <input type="text" name="category" required value={formData.category} onChange={handleInputChange} className="form-input" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div>
              <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>Price ($)</label>
              <input type="number" step="0.01" name="price" required value={formData.price} onChange={handleInputChange} className="form-input" />
            </div>
            <div>
              <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>Stock Level</label>
              <input type="number" name="stock" required value={formData.stock} onChange={handleInputChange} className="form-input" />
            </div>
          </div>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', marginTop: '15px' }}>
            <button type="button" onClick={() => setShowEditModal(false)} className="btn-secondary">Cancel</button>
            <button type="submit" className="btn-primary">Update Product</button>
          </div>
        </form>
      </Modal>

      {/* DELETE CONFIRMATION MODAL */}
      <Modal isOpen={showDeleteModal} onClose={() => setShowDeleteModal(false)} title="Remove Product from Catalog">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center', textAlign: 'center' }}>
          <AlertCircle size={36} style={{ color: 'var(--danger)' }} />
          <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', fontWeight: 600 }}>
            Are you sure you want to delete product "{selectedProduct?.name}" ({selectedProduct?.id})?
          </p>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            This item will be permanently removed from all storefront panels and analytics lists.
          </p>
          <div style={{ display: 'flex', gap: '12px', width: '100%', justifyContent: 'center', marginTop: '15px' }}>
            <button onClick={() => setShowDeleteModal(false)} className="btn-secondary" style={{ flexGrow: 1 }}>Cancel</button>
            <button onClick={handleDeleteConfirm} className="btn-danger" style={{ flexGrow: 1 }}>Delete Item</button>
          </div>
        </div>
      </Modal>
    </motion.div>
  );
}
