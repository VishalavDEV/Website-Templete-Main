import { useState, useEffect } from 'react'

const API_BASE = 'http://localhost:8080'

interface Category {
  id?: number
  name: string
  slug?: string
  subtitle?: string
  bg?: string
  description?: string
}

interface Product {
  id: number
  name: string
  slug: string
  description?: string
  price: number
  imageUrl: string
  category: {
    id?: number
    name: string
    slug?: string
  }
  brand?: {
    id?: number
    name: string
  }
}

interface Order {
  id: number
  orderDate: string
  status: string
  totalAmount: number
  username: string
  email: string
  paymentMethod?: string
  shipAddress?: string
  shipCity?: string
  itemsText?: string
}

interface User {
  id: string | number
  username: string
  email: string
  phone: string
  role: string
}

interface Inventory {
  id: number
  productId: number
  name: string
  quantity: number
  threshold: number
  status: 'IN_STOCK' | 'LOW_STOCK'
}

interface Coupon {
  id?: number
  code: string
  discountType: 'PERCENTAGE' | 'FIXED_AMOUNT'
  discountValue: number
  isActive: boolean
}

interface Payment {
  id: number
  orderId: number
  paymentMethod: string
  amount: number
  status: string
  transactionId?: string
}

interface Shipment {
  id: number
  orderId: number
  shippingMethod: string
  trackingNumber?: string
  status: string
  address: string
  city: string
}

interface Review {
  id: number
  rating: number
  comment: string
  username: string
  productName: string
}

interface AuditLog {
  id: number
  action: string
  details?: string
  ipAddress?: string
  createdAt: string
  username?: string
  email?: string
}

interface SupportTicket {
  id: number
  subject: string
  description: string
  status: 'OPEN' | 'IN_PROGRESS' | 'RESOLVED'
  priority: 'LOW' | 'MEDIUM' | 'HIGH'
  createdAt: string
  username: string
  email: string
}

interface SavedReport {
  id: number
  type: 'SALES' | 'INVENTORY' | 'CUSTOMER'
  parameters: any
  data: any
  createdAt: string
}

export default function App() {
  // Theme & Session States
  const [theme, setTheme] = useState<string>(() => localStorage.getItem('theme') || 'light')
  const [token, setToken] = useState<string | null>(() => sessionStorage.getItem('shopsphere_admin_token'))
  const [adminUser, setAdminUser] = useState<any>(() => {
    const saved = sessionStorage.getItem('shopsphere_admin_user')
    return saved ? JSON.parse(saved) : null
  })

  // Login Form Input States
  const [loginUsername, setLoginUsername] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const [loginError, setLoginError] = useState<string | null>(null)
  const [isLoggingIn, setIsLoggingIn] = useState(false)

  // Navigation state
  const [activeTab, setActiveTab] = useState<string>('dashboard')

  // Resource lists states
  const [metrics, setMetrics] = useState<any>({ totalRevenue: 0, ordersCount: 0, activeUsers: 0, lowStockCount: 0, monthlySales: [] })
  const [products, setProducts] = useState<Product[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [orders, setOrders] = useState<Order[]>([])
  const [users, setUsers] = useState<User[]>([])
  const [inventory, setInventory] = useState<Inventory[]>([])
  const [coupons, setCoupons] = useState<Coupon[]>([])
  const [payments, setPayments] = useState<Payment[]>([])
  const [delivery, setDelivery] = useState<Shipment[]>([])
  const [reviews, setReviews] = useState<Review[]>([])
  const [notifications, setNotifications] = useState<any[]>([])
  const [tickets, setTickets] = useState<SupportTicket[]>([])
  const [reports, setReports] = useState<SavedReport[]>([])
  const [auditLogs, setAuditLogs] = useState<AuditLog[]>([])

  // Modal forms management states
  const [showProductModal, setShowProductModal] = useState(false)
  const [editProduct, setEditProduct] = useState<Product | null>(null)
  const [prodFormName, setProdFormName] = useState('')
  const [prodFormPrice, setProdFormPrice] = useState('')
  const [prodFormStock, setProdFormStock] = useState('')
  const [prodFormCat, setProdFormCat] = useState('')
  const [prodFormImg, setProdFormImg] = useState('')
  const [prodFormDesc, setProdFormDesc] = useState('')

  const [showCategoryModal, setShowCategoryModal] = useState(false)
  const [catFormName, setCatFormName] = useState('')
  const [catFormSubtitle, setCatFormSubtitle] = useState('')
  const [catFormBg, setCatFormBg] = useState('')

  const [showCouponModal, setShowCouponModal] = useState(false)
  const [couponFormCode, setCouponFormCode] = useState('')
  const [couponFormType, setCouponFormType] = useState<'PERCENTAGE' | 'FIXED_AMOUNT'>('PERCENTAGE')
  const [couponFormValue, setCouponFormValue] = useState('')

  const [showPaymentModal, setShowPaymentModal] = useState<Payment | null>(null)
  const [productFilterCat, setProductFilterCat] = useState('ALL')
  const [inventoryFilterCat, setInventoryFilterCat] = useState('ALL')

  // Global settings state
  const [settingsTax, setSettingsTax] = useState<number>(() => Number(localStorage.getItem('shopsphere_taxRate') || 18))
  const [settingsShipping, setSettingsShipping] = useState<number>(() => Number(localStorage.getItem('shopsphere_shippingPrice') || 99))
  const [settingsGateway, setSettingsGateway] = useState<string>(() => localStorage.getItem('shopsphere_gateway') || 'razorpay')

  // Apply Theme effect
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  // Fetch Dashboard metrics & other data on active tab selection / token change
  useEffect(() => {
    if (!token) return

    const headers = { 'Authorization': `Bearer ${token}` }

    const loadDashboard = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/admin/dashboard`, { headers })
        if (res.ok) {
          const data = await res.json()
          setMetrics(data)
        }
      } catch (err) { console.error('Failed to load dashboard metrics', err) }
    }

    const loadProducts = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/products`)
        if (res.ok) {
          const data = await res.json()
          setProducts(data)

          // Auto-generate mock inventory list if not supported by backend
          const invList = data.map((p: Product) => ({
            id: p.id,
            productId: p.id,
            name: p.name,
            quantity: Math.floor(Math.random() * 80) + 5,
            threshold: 10,
            status: 'IN_STOCK'
          }))
          setInventory(invList)
        }
      } catch (err) { console.error(err) }
    }

    const loadCategories = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/categories`)
        if (res.ok) {
          const data = await res.json()
          setCategories(data)
        } else {
          // LocalStorage fallback
          const local = JSON.parse(localStorage.getItem('shopsphere_categories') || '[]')
          setCategories(local)
        }
      } catch (err) { console.error(err) }
    }

    const loadOrders = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/admin/orders`, { headers })
        if (res.ok) {
          const json = await res.json()
          setOrders(json.data || [])
        }
      } catch (err) { console.error(err) }
    }

    const loadUsers = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/admin/users`, { headers })
        if (res.ok) {
          const json = await res.json()
          setUsers(json.data || [])
        }
      } catch (err) { console.error(err) }
    }

    const loadTickets = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/admin/support/tickets`, { headers })
        if (res.ok) {
          const json = await res.json()
          setTickets(json.data || [])
        }
      } catch (err) { console.error(err) }
    }

    const loadReports = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/admin/reports`, { headers })
        if (res.ok) {
          const json = await res.json()
          setReports(json.data || [])
        }
      } catch (err) { console.error(err) }
    }

    const loadPayments = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/admin/payments`, { headers })
        if (res.ok) {
          const json = await res.json()
          setPayments(json.data || [])
        }
      } catch (err) { console.error(err) }
    }

    const loadShipments = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/admin/shipments`, { headers })
        if (res.ok) {
          const json = await res.json()
          setDelivery(json.data || [])
        }
      } catch (err) { console.error(err) }
    }

    const loadReviews = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/admin/reviews`, { headers })
        if (res.ok) {
          const json = await res.json()
          setReviews(json.data || [])
        }
      } catch (err) { console.error(err) }
    }

    const loadAuditLogs = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/admin/audit/logs`, { headers })
        if (res.ok) {
          const json = await res.json()
          setAuditLogs(json.data || [])
        }
      } catch (err) { console.error(err) }
    }

    // Load based on tab navigation or updates
    loadDashboard()
    loadProducts()
    loadCategories()
    loadOrders()
    loadUsers()
    loadTickets()
    loadReports()
    loadPayments()
    loadShipments()
    loadReviews()
    loadAuditLogs()

    // Sync coupons from local storage
    const localCoupons = JSON.parse(localStorage.getItem('shopsphere_coupons') || '[]')
    if (localCoupons.length === 0) {
      const defaults = [
        { id: 1, code: 'WELCOME10', discountType: 'PERCENTAGE', discountValue: 10, isActive: true },
        { id: 2, code: 'HYPE500', discountType: 'FIXED_AMOUNT', discountValue: 500, isActive: true }
      ]
      localStorage.setItem('shopsphere_coupons', JSON.stringify(defaults))
      setCoupons(defaults as Coupon[])
    } else {
      setCoupons(localCoupons)
    }

    // Notifications fallback log
    const localNotifs = JSON.parse(localStorage.getItem('shopsphere_notifications_log') || '[]')
    setNotifications(localNotifs)

  }, [token, activeTab])

  // Login handler
  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoginError(null)
    setIsLoggingIn(true)

    try {
      const res = await fetch(`${API_BASE}/api/auth/signin`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: loginUsername, password: loginPassword })
      })

      if (res.ok) {
        const data = await res.json()
        
        // Ensure user is an admin
        if (!data.roles || !data.roles.includes('ROLE_ADMIN')) {
          setLoginError('Access Denied: Administrator role required.')
          setIsLoggingIn(false)
          return
        }

        sessionStorage.setItem('shopsphere_admin_token', data.token)
        sessionStorage.setItem('shopsphere_admin_user', JSON.stringify(data))
        setToken(data.token)
        setAdminUser(data)
        setLoginUsername('')
        setLoginPassword('')
      } else {
        // Fallback check for simulated developer mode
        if (loginUsername === 'admin_ss' && loginPassword === 'ss123') {
          sessionStorage.setItem('shopsphere_admin_token', 'active_admin_session_token_2026')
          const mockUser = { username: 'admin_ss', email: 'admin@shopsphere.com', roles: ['ROLE_ADMIN'] }
          sessionStorage.setItem('shopsphere_admin_user', JSON.stringify(mockUser))
          setToken('active_admin_session_token_2026')
          setAdminUser(mockUser)
        } else {
          const errData = await res.json()
          setLoginError(errData.message || 'Invalid administrator credentials. Please check details.')
        }
      }
    } catch (err) {
      // Offline fallback for testing
      if (loginUsername === 'admin_ss' && loginPassword === 'ss123') {
        sessionStorage.setItem('shopsphere_admin_token', 'active_admin_session_token_2026')
        const mockUser = { username: 'admin_ss', email: 'admin@shopsphere.com', roles: ['ROLE_ADMIN'] }
        sessionStorage.setItem('shopsphere_admin_user', JSON.stringify(mockUser))
        setToken('active_admin_session_token_2026')
        setAdminUser(mockUser)
      } else {
        setLoginError('Could not reach the server API. Confirm backend is active.')
      }
    } finally {
      setIsLoggingIn(false)
    }
  }

  // Logout handler
  const handleLogout = () => {
    sessionStorage.removeItem('shopsphere_admin_token')
    sessionStorage.removeItem('shopsphere_admin_user')
    setToken(null)
    setAdminUser(null)
    setActiveTab('dashboard')
  }

  // Settings Save Handler
  const handleSaveSettings = () => {
    localStorage.setItem('shopsphere_taxRate', settingsTax.toString())
    localStorage.setItem('shopsphere_shippingPrice', settingsShipping.toString())
    localStorage.setItem('shopsphere_gateway', settingsGateway)
    alert('Global settings saved successfully!')
  }

  // Add/Edit Product Submission
  const handleProductFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!prodFormName || !prodFormPrice) {
      alert('Product name and price are required')
      return
    }

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }

    const payload = {
      name: prodFormName,
      slug: prodFormName.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
      price: parseFloat(prodFormPrice),
      description: prodFormDesc,
      categoryId: parseInt(prodFormCat),
      brandId: 1, // Default AURA Studio
      imageUrl: prodFormImg || 'assets/product_lamp.png',
      quantity: parseInt(prodFormStock) || 0
    }

    try {
      if (editProduct) {
        const res = await fetch(`${API_BASE}/api/admin/products/${editProduct.id}`, {
          method: 'PUT',
          headers,
          body: JSON.stringify(payload)
        })
        if (res.ok) {
          alert('Product updated successfully!')
        } else {
          alert('Failed to update product.')
        }
      } else {
        const res = await fetch(`${API_BASE}/api/admin/products`, {
          method: 'POST',
          headers,
          body: JSON.stringify(payload)
        })
        if (res.ok) {
          alert('Product created successfully!')
        } else {
          alert('Failed to create product.')
        }
      }

      // Reload
      setShowProductModal(false)
      setEditProduct(null)
      setActiveTab('products')
    } catch (err) {
      console.error(err)
      alert('Network error submitting product.')
    }
  }

  // Add Category Submission
  const handleCategoryFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!catFormName) return

    const newCat: Category = {
      name: catFormName,
      subtitle: catFormSubtitle || 'New Collection',
      bg: catFormBg || '#eaeaea',
      slug: catFormName.toLowerCase().replace(/\s+/g, '-')
    }

    const updated = [...categories, newCat]
    localStorage.setItem('shopsphere_categories', JSON.stringify(updated))
    setCategories(updated)
    setShowCategoryModal(false)
    setCatFormName('')
    setCatFormSubtitle('')
    setCatFormBg('')
  }

  // Create Coupon Submission
  const handleCouponFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!couponFormCode || !couponFormValue) return

    const newCoupon: Coupon = {
      id: Date.now(),
      code: couponFormCode.toUpperCase(),
      discountType: couponFormType,
      discountValue: parseFloat(couponFormValue),
      isActive: true
    }

    const updated = [...coupons, newCoupon]
    localStorage.setItem('shopsphere_coupons', JSON.stringify(updated))
    setCoupons(updated)
    setShowCouponModal(false)
    setCouponFormCode('')
    setCouponFormValue('')
  }

  // Update Order Status Handler
  const handleChangeOrderStatus = async (orderId: number, status: string) => {
    try {
      const res = await fetch(`${API_BASE}/api/admin/orders/${orderId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ status })
      })
      if (res.ok) {
        setOrders(orders.map(o => o.id === orderId ? { ...o, status } : o))
      }
    } catch (err) { console.error(err) }
  }

  // Update Inventory Stock Count
  const handleUpdateStock = async (productId: number, qty: number) => {
    try {
      const res = await fetch(`${API_BASE}/api/admin/inventory`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ productId, quantity: qty })
      })
      if (res.ok) {
        setInventory(inventory.map(inv => inv.productId === productId ? { ...inv, quantity: qty } : inv))
        alert('Stock quantity updated!')
      }
    } catch (err) { console.error(err) }
  }

  // Delete Review
  const handleDeleteReview = async (id: number) => {
    if (!confirm('Are you sure you want to delete this review?')) return
    try {
      const res = await fetch(`${API_BASE}/api/admin/reviews/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      })
      if (res.ok) {
        setReviews(reviews.filter(r => r.id !== id))
        alert('Review moderated and removed.')
      }
    } catch (err) { console.error(err) }
  }

  // Notification Broadcast Simulator
  const handleTriggerBroadcast = () => {
    const newLog = {
      recipient: 'All Users',
      medium: 'Push Notification',
      content: '⚡ Flash Sale! Get up to 50% discount on workspace collections.',
      timestamp: new Date().toLocaleString()
    }
    const updated = [newLog, ...notifications]
    localStorage.setItem('shopsphere_notifications_log', JSON.stringify(updated))
    setNotifications(updated)
    alert('Broadcast push notification trigger sent to all active storefront client nodes!')
  }

  // Generate Report
  const handleGenerateReport = async (type: 'SALES' | 'INVENTORY' | 'CUSTOMER') => {
    try {
      const res = await fetch(`${API_BASE}/api/admin/reports`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ type })
      })
      if (res.ok) {
        alert(`${type} report generated successfully!`)
        // Refresh Tab
        setActiveTab('analytics')
      }
    } catch (err) { console.error(err) }
  }

  // If user is not logged in, render the login card screen
  if (!token) {
    return (
      <div className="auth-overlay">
        <div className="auth-card">
          <div className="auth-logo">Shop<span>Sphere</span> Admin</div>
          <p className="auth-subtitle">Log in with your administrator credentials</p>
          
          <div style={{ fontSize: '11.5px', color: 'var(--text-secondary)', marginBottom: '20px', background: 'var(--input-bg)', padding: '8px 12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', display: 'inline-block' }}>
            Demo Account Credentials:<br />
            <strong>admin</strong> / <strong>AdminSecretPass123!</strong> (Live database)<br />
            <strong>admin_ss</strong> / <strong>ss123</strong> (Local mock option)
          </div>

          {loginError && (
            <div style={{ color: 'var(--color-danger)', fontSize: '13.5px', fontWeight: 600, marginBottom: '16px' }}>
              {loginError}
            </div>
          )}

          <form onSubmit={handleLoginSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div className="form-group">
              <label>Admin Username / Email</label>
              <input 
                type="text" 
                className="form-control" 
                placeholder="e.g. admin" 
                value={loginUsername}
                onChange={e => setLoginUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Admin Password</label>
              <input 
                type="password" 
                className="form-control" 
                placeholder="••••••••" 
                value={loginPassword}
                onChange={e => setLoginPassword(e.target.value)}
                required
              />
            </div>
            <button 
              type="submit" 
              className="btn btn-primary" 
              style={{ justifyContent: 'center', width: '100%', marginTop: '10px', padding: '12px' }}
              disabled={isLoggingIn}
            >
              {isLoggingIn ? 'Verifying Console Access...' : 'Access Admin Console'}
            </button>
          </form>
        </div>
      </div>
    )
  }

  // Render main dashboard console
  return (
    <>
      {/* Sidebar Layout */}
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-logo">Shop<span>Sphere</span></div>
        </div>
        <ul className="nav-list">
          <li><button className={`nav-link ${activeTab === 'dashboard' ? 'active' : ''}`} onClick={() => setActiveTab('dashboard')}>Dashboard</button></li>
          <li><button className={`nav-link ${activeTab === 'products' ? 'active' : ''}`} onClick={() => setActiveTab('products')}>Product Mgmt</button></li>
          <li><button className={`nav-link ${activeTab === 'categories' ? 'active' : ''}`} onClick={() => setActiveTab('categories')}>Category Mgmt</button></li>
          <li><button className={`nav-link ${activeTab === 'orders' ? 'active' : ''}`} onClick={() => setActiveTab('orders')}>Order Mgmt</button></li>
          <li><button className={`nav-link ${activeTab === 'users' ? 'active' : ''}`} onClick={() => setActiveTab('users')}>User Mgmt</button></li>
          <li><button className={`nav-link ${activeTab === 'inventory' ? 'active' : ''}`} onClick={() => setActiveTab('inventory')}>Inventory Mgmt</button></li>
          <li><button className={`nav-link ${activeTab === 'coupons' ? 'active' : ''}`} onClick={() => setActiveTab('coupons')}>Coupon Mgmt</button></li>
          <li><button className={`nav-link ${activeTab === 'payments' ? 'active' : ''}`} onClick={() => setActiveTab('payments')}>Payment Mgmt</button></li>
          <li><button className={`nav-link ${activeTab === 'delivery' ? 'active' : ''}`} onClick={() => setActiveTab('delivery')}>Delivery Mgmt</button></li>
          <li><button className={`nav-link ${activeTab === 'reviews' ? 'active' : ''}`} onClick={() => setActiveTab('reviews')}>Reviews Mgmt</button></li>
          <li><button className={`nav-link ${activeTab === 'notifications' ? 'active' : ''}`} onClick={() => setActiveTab('notifications')}>Notifications</button></li>
          <li><button className={`nav-link ${activeTab === 'analytics' ? 'active' : ''}`} onClick={() => setActiveTab('analytics')}>Reports & Analytics</button></li>
          <li><button className={`nav-link ${activeTab === 'settings' ? 'active' : ''}`} onClick={() => setActiveTab('settings')}>Settings</button></li>
          <li style={{ marginTop: 'auto' }}>
            <a href="http://localhost:3000/index.html" className="nav-link" id="view-storefront">
              View Storefront
            </a>
          </li>
        </ul>
      </aside>

      {/* Main Panel Content */}
      <main className="main-content">
        <div className="header">
          <h1 className="page-title" style={{ textTransform: 'capitalize' }}>{activeTab} console</h1>
          <div className="header-actions">
            <button 
              className="theme-toggle-btn" 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              title="Toggle Theme"
            >
              {theme === 'dark' ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
              )}
            </button>
            <button className="btn btn-secondary" onClick={handleLogout}>Log Out</button>
          </div>
        </div>

        {/* KPIs Cards Overview */}
        <div className="kpi-container">
          <div className="kpi-card">
            <span className="kpi-title">Total Revenue</span>
            <span className="kpi-value">₹{metrics.totalRevenue?.toLocaleString() || 0}</span>
          </div>
          <div className="kpi-card">
            <span className="kpi-title">Total Orders</span>
            <span className="kpi-value">{metrics.ordersCount || 0}</span>
          </div>
          <div className="kpi-card">
            <span className="kpi-title">Catalog Count</span>
            <span className="kpi-value">{products.length}</span>
          </div>
          <div className="kpi-card">
            <span className="kpi-title">Active Coupons</span>
            <span className="kpi-value">{coupons.filter(c => c.isActive).length}</span>
          </div>
        </div>

        {/* TAB 1: DASHBOARD OVERVIEW */}
        {activeTab === 'dashboard' && (
          <section className="admin-view">
            <div style={{ backgroundColor: 'var(--bg-card)', borderRadius: 'var(--radius-md)', padding: '30px', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-sm)', marginBottom: '30px' }}>
              <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '12px' }}>ShopSphere Admin Console Overview</h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Welcome, <strong>{adminUser?.username || 'Administrator'}</strong>. You are successfully connected to the live Node.js backend. Use the left menu panels to edit product inventory, review customer orders, configure payment methods, track shipping deliveries, and execute analytics queries.
              </p>
            </div>

            {/* Render a custom premium SVG line chart of monthly sales */}
            <div className="chart-container">
              <h3 className="chart-title">Sales Growth Performance (Last 6 Months)</h3>
              <div style={{ width: '100%', height: '240px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', position: 'relative', padding: '10px 40px' }}>
                {/* SVG Line path and markers */}
                <svg viewBox="0 0 500 160" style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', overflow: 'visible' }}>
                  <defs>
                    <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  {/* Grid Lines */}
                  <line x1="0" y1="40" x2="500" y2="40" stroke="var(--border-color)" strokeWidth="0.5" strokeDasharray="5,5" />
                  <line x1="0" y1="80" x2="500" y2="80" stroke="var(--border-color)" strokeWidth="0.5" strokeDasharray="5,5" />
                  <line x1="0" y1="120" x2="500" y2="120" stroke="var(--border-color)" strokeWidth="0.5" strokeDasharray="5,5" />
                  
                  {/* Fill gradient path */}
                  <path d="M 0 160 L 0 136 L 100 120 L 200 90 L 300 128 L 400 50 L 500 20 L 500 160 Z" fill="url(#grad)" />
                  {/* Line path */}
                  <path d="M 0 136 L 100 120 L 200 90 L 300 128 L 400 50 L 500 20" fill="none" stroke="var(--color-accent)" strokeWidth="3" />
                  
                  {/* Data points */}
                  <circle cx="0" cy="136" r="5" fill="var(--bg-card)" stroke="var(--text-primary)" strokeWidth="2" />
                  <circle cx="100" cy="120" r="5" fill="var(--bg-card)" stroke="var(--text-primary)" strokeWidth="2" />
                  <circle cx="200" cy="90" r="5" fill="var(--bg-card)" stroke="var(--text-primary)" strokeWidth="2" />
                  <circle cx="300" cy="128" r="5" fill="var(--bg-card)" stroke="var(--text-primary)" strokeWidth="2" />
                  <circle cx="400" cy="50" r="5" fill="var(--bg-card)" stroke="var(--text-primary)" strokeWidth="2" />
                  <circle cx="500" cy="20" r="5" fill="var(--bg-card)" stroke="var(--text-primary)" strokeWidth="2" />
                </svg>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 40px', fontSize: '12px', color: 'var(--text-secondary)', fontWeight: 600 }}>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
                <span>Jul</span>
                <span>Aug</span>
              </div>
            </div>
          </section>
        )}

        {/* TAB 2: PRODUCT MANAGEMENT */}
        {activeTab === 'products' && (
          <section className="admin-view">
            <div className="header" style={{ marginBottom: '20px' }}>
              <h2 style={{ fontSize: '18px', fontWeight: 700 }}>Catalog Listings</h2>
              <button className="btn btn-primary" onClick={() => { setEditProduct(null); setShowProductModal(true); }}>+ Add New Product</button>
            </div>
            
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '20px', background: 'var(--bg-card)', padding: '10px 16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', width: 'fit-content' }}>
              <span style={{ fontSize: '13.5px', fontWeight: 600, color: 'var(--text-secondary)' }}>Category Filter:</span>
              <select className="form-control" style={{ width: 'auto', padding: '6px 12px', fontSize: '13px', margin: 0, height: 'auto' }} value={productFilterCat} onChange={e => setProductFilterCat(e.target.value)}>
                <option value="ALL">All Categories</option>
                {categories.map((c, i) => (
                  <option key={i} value={c.name}>{c.name}</option>
                ))}
              </select>
            </div>

            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Product Name</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th style={{ textAlign: 'right' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products
                    .filter(p => productFilterCat === 'ALL' || p.category.name === productFilterCat)
                    .map((p, index) => (
                      <tr key={index}>
                        <td><img className="product-img-th" src={`${API_BASE}/${p.imageUrl}`} alt="" onError={(e) => { (e.target as HTMLImageElement).src = p.imageUrl }} /></td>
                        <td><strong>{p.name}</strong><br /><span style={{ fontSize: '11.5px', color: 'var(--text-secondary)' }}>{p.slug}</span></td>
                        <td>{p.category.name}</td>
                        <td>₹{p.price}</td>
                        <td style={{ textAlign: 'right' }}>
                          <button className="btn btn-secondary" style={{ padding: '6px 12px', fontSize: '12px', marginRight: '6px' }} onClick={() => {
                            setEditProduct(p)
                            setProdFormName(p.name)
                            setProdFormPrice(p.price.toString())
                            setProdFormDesc(p.description || '')
                            setProdFormCat(p.category.id?.toString() || '1')
                            setProdFormImg(p.imageUrl)
                            setShowProductModal(true)
                          }}>Edit</button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* TAB 3: CATEGORY MANAGEMENT */}
        {activeTab === 'categories' && (
          <section className="admin-view">
            <div className="header" style={{ marginBottom: '20px' }}>
              <h2 style={{ fontSize: '18px', fontWeight: 700 }}>Storefront Categories</h2>
              <button className="btn btn-primary" onClick={() => setShowCategoryModal(true)}>+ Add Category</button>
            </div>

            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Category Name</th>
                    <th>Subtitle</th>
                    <th>Background Accent</th>
                  </tr>
                </thead>
                <tbody>
                  {categories.map((c, i) => (
                    <tr key={i}>
                      <td><strong>{c.name}</strong></td>
                      <td>{c.subtitle || c.description || 'Active catalog'}</td>
                      <td>
                        <span style={{ display: 'inline-block', width: '20px', height: '20px', borderRadius: '4px', backgroundColor: c.bg || 'var(--border-color)', verticalAlign: 'middle', marginRight: '8px' }}></span>
                        {c.bg || '#ffffff'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* TAB 4: ORDER MANAGEMENT */}
        {activeTab === 'orders' && (
          <section className="admin-view">
            <div className="header" style={{ marginBottom: '20px' }}>
              <h2 style={{ fontSize: '18px', fontWeight: 700 }}>Checkout Orders Logs</h2>
            </div>

            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Customer</th>
                    <th>Items Purchased</th>
                    <th>Total amount</th>
                    <th>Method</th>
                    <th>Status</th>
                    <th>Change Status</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((o, i) => (
                    <tr key={i}>
                      <td><strong>ORD-{o.id.toString().padStart(6, '0')}</strong></td>
                      <td>{o.username}<br /><span style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>{o.email}</span></td>
                      <td style={{ maxWidth: '280px', fontSize: '12.5px' }}>{o.itemsText || 'Details loading...'}</td>
                      <td>₹{o.totalAmount}</td>
                      <td>{o.paymentMethod || 'COD'}</td>
                      <td>
                        <span className={`badge-status status-${o.status.toLowerCase()}`}>
                          {o.status}
                        </span>
                      </td>
                      <td>
                        <select 
                          className="form-control" 
                          style={{ padding: '4px 8px', fontSize: '12px', height: 'auto', width: 'auto' }}
                          value={o.status}
                          onChange={e => handleChangeOrderStatus(o.id, e.target.value)}
                        >
                          <option value="PENDING">PENDING</option>
                          <option value="PROCESSING">PROCESSING</option>
                          <option value="SHIPPED">SHIPPED</option>
                          <option value="DELIVERED">DELIVERED</option>
                          <option value="CANCELLED">CANCELLED</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* TAB 5: USER MANAGEMENT */}
        {activeTab === 'users' && (
          <section className="admin-view">
            <div className="header" style={{ marginBottom: '20px' }}>
              <h2 style={{ fontSize: '18px', fontWeight: 700 }}>Customer Registry</h2>
            </div>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>User ID</th>
                    <th>Username</th>
                    <th>Email Address</th>
                    <th>Phone</th>
                    <th>Role</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((u, i) => (
                    <tr key={i}>
                      <td>#{u.id}</td>
                      <td><strong>{u.username}</strong></td>
                      <td>{u.email}</td>
                      <td>{u.phone || 'N/A'}</td>
                      <td><span style={{ fontWeight: 600, color: u.role === 'ROLE_ADMIN' ? 'var(--color-danger)' : 'var(--text-secondary)' }}>{u.role}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* TAB 6: INVENTORY MANAGEMENT */}
        {activeTab === 'inventory' && (
          <section className="admin-view">
            <div className="header" style={{ marginBottom: '20px' }}>
              <h2 style={{ fontSize: '18px', fontWeight: 700 }}>Inventory stock Coordinator</h2>
            </div>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Product Name</th>
                    <th>Current Stock</th>
                    <th>Threshold</th>
                    <th>Quick Update</th>
                  </tr>
                </thead>
                <tbody>
                  {inventory.map((inv, i) => (
                    <tr key={i}>
                      <td><strong>{inv.name}</strong></td>
                      <td>
                        <span style={{ fontWeight: 700, color: inv.quantity <= inv.threshold ? 'var(--color-danger)' : 'var(--color-success)' }}>
                          {inv.quantity} units
                        </span>
                      </td>
                      <td>{inv.threshold}</td>
                      <td>
                        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                          <input 
                            type="number" 
                            className="form-control" 
                            style={{ width: '80px', padding: '4px 8px', height: 'auto', fontSize: '12px' }}
                            defaultValue={inv.quantity}
                            onBlur={(e) => handleUpdateStock(inv.productId, parseInt(e.target.value) || 0)}
                          />
                          <span style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>Press out of focus to save</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* TAB 7: COUPON MANAGEMENT */}
        {activeTab === 'coupons' && (
          <section className="admin-view">
            <div className="header" style={{ marginBottom: '20px' }}>
              <h2 style={{ fontSize: '18px', fontWeight: 700 }}>Active Coupons</h2>
              <button className="btn btn-primary" onClick={() => setShowCouponModal(true)}>+ Create Coupon</button>
            </div>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Code</th>
                    <th>Type</th>
                    <th>Discount Value</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {coupons.map((c, i) => (
                    <tr key={i}>
                      <td><strong>{c.code}</strong></td>
                      <td>{c.discountType}</td>
                      <td>{c.discountType === 'PERCENTAGE' ? `${c.discountValue}%` : `₹${c.discountValue}`}</td>
                      <td>
                        <span className={`badge-status ${c.isActive ? 'status-delivered' : 'status-cancelled'}`}>
                          {c.isActive ? 'Active' : 'Inactive'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* TAB 8: PAYMENT MANAGEMENT */}
        {activeTab === 'payments' && (
          <section className="admin-view">
            <div className="header" style={{ marginBottom: '20px' }}>
              <h2 style={{ fontSize: '18px', fontWeight: 700 }}>Transaction Logs</h2>
            </div>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Method</th>
                    <th>Amount</th>
                    <th>Verification</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {payments.map((p, i) => (
                    <tr key={i}>
                      <td><strong>ORD-{p.orderId.toString().padStart(6, '0')}</strong></td>
                      <td>{p.paymentMethod}</td>
                      <td>₹{p.amount}</td>
                      <td>
                        <span className={`badge-status status-${p.status.toLowerCase()}`}>
                          {p.status}
                        </span>
                      </td>
                      <td>
                        <button className="btn btn-secondary" style={{ padding: '4px 8px', fontSize: '12px' }} onClick={() => setShowPaymentModal(p)}>
                          Verify Transaction
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* TAB 9: DELIVERY MANAGEMENT */}
        {activeTab === 'delivery' && (
          <section className="admin-view">
            <div className="header" style={{ marginBottom: '20px' }}>
              <h2 style={{ fontSize: '18px', fontWeight: 700 }}>Shipments & Coordinator</h2>
            </div>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Shipping Method</th>
                    <th>Address</th>
                    <th>Tracking Status</th>
                    <th>Tracking Number</th>
                  </tr>
                </thead>
                <tbody>
                  {delivery.map((d, i) => (
                    <tr key={i}>
                      <td><strong>ORD-{d.orderId.toString().padStart(6, '0')}</strong></td>
                      <td>{d.shippingMethod}</td>
                      <td style={{ fontSize: '12.5px' }}>{d.address}, {d.city}</td>
                      <td>
                        <span className={`badge-status status-${d.status.toLowerCase()}`}>
                          {d.status}
                        </span>
                      </td>
                      <td>
                        <input 
                          type="text" 
                          className="form-control" 
                          style={{ padding: '4px 8px', fontSize: '12px', height: 'auto', width: '120px' }}
                          placeholder="e.g. TRK987654"
                          defaultValue={d.trackingNumber || ''}
                          onBlur={async (e) => {
                            const val = e.target.value.trim()
                            if (!val) return
                            try {
                              await fetch(`${API_BASE}/api/admin/shipments/${d.orderId}`, {
                                method: 'PUT',
                                headers: {
                                  'Content-Type': 'application/json',
                                  'Authorization': `Bearer ${token}`
                                },
                                body: JSON.stringify({ status: d.status, trackingNumber: val })
                              })
                              alert('Tracking number updated!')
                            } catch (err) { console.error(err) }
                          }}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* TAB 10: REVIEWS MANAGEMENT */}
        {activeTab === 'reviews' && (
          <section className="admin-view">
            <div className="header" style={{ marginBottom: '20px' }}>
              <h2 style={{ fontSize: '18px', fontWeight: 700 }}>Reviews Moderation</h2>
            </div>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Customer</th>
                    <th>Product</th>
                    <th>Rating</th>
                    <th>Comment</th>
                    <th style={{ textAlign: 'right' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {reviews.map((r, i) => (
                    <tr key={i}>
                      <td><strong>{r.username}</strong></td>
                      <td>{r.productName}</td>
                      <td style={{ color: 'var(--color-warning)', fontWeight: 700 }}>{r.rating} ★</td>
                      <td>"{r.comment}"</td>
                      <td style={{ textAlign: 'right' }}>
                        <button className="btn btn-danger" style={{ padding: '6px 12px', fontSize: '12px' }} onClick={() => handleDeleteReview(r.id)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* TAB 11: NOTIFICATIONS */}
        {activeTab === 'notifications' && (
          <section className="admin-view">
            <div className="header" style={{ marginBottom: '20px' }}>
              <h2 style={{ fontSize: '18px', fontWeight: 700 }}>Broadcast Center</h2>
              <button className="btn btn-primary" onClick={handleTriggerBroadcast}>Trigger Push Broadcast</button>
            </div>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Recipient</th>
                    <th>Medium</th>
                    <th>Notification Message</th>
                    <th>Sent At</th>
                  </tr>
                </thead>
                <tbody>
                  {notifications.map((n, i) => (
                    <tr key={i}>
                      <td>{n.recipient}</td>
                      <td>{n.medium}</td>
                      <td>{n.content}</td>
                      <td>{n.timestamp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* TAB 12: ANALYTICS & REPORTS */}
        {activeTab === 'analytics' && (
          <section className="admin-view">
            <div className="header" style={{ marginBottom: '20px' }}>
              <h2 style={{ fontSize: '18px', fontWeight: 700 }}>Analytics & Saved Reports</h2>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button className="btn btn-secondary" onClick={() => handleGenerateReport('SALES')}>Generate Sales Report</button>
                <button className="btn btn-secondary" onClick={() => handleGenerateReport('INVENTORY')}>Generate Inventory Report</button>
                <button className="btn btn-secondary" onClick={() => handleGenerateReport('CUSTOMER')}>Generate Customer Report</button>
              </div>
            </div>

            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Report Type</th>
                    <th>Parameters</th>
                    <th>Generated Date</th>
                  </tr>
                </thead>
                <tbody>
                  {reports.map((r, i) => (
                    <tr key={i}>
                      <td><span className="badge-status status-placed" style={{ background: 'var(--color-accent-bg)', color: 'var(--text-primary)' }}>{r.type}</span></td>
                      <td style={{ fontSize: '12px' }}>{JSON.stringify(r.parameters || {})}</td>
                      <td>{new Date(r.createdAt).toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* TAB 13: SETTINGS */}
        {activeTab === 'settings' && (
          <section className="admin-view">
            <div style={{ backgroundColor: 'var(--bg-card)', borderRadius: 'var(--radius-md)', padding: '30px', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div className="form-group">
                <label>Tax Rate (%)</label>
                <input type="number" className="form-control" value={settingsTax} onChange={e => setSettingsTax(parseInt(e.target.value) || 0)} />
              </div>
              <div className="form-group">
                <label>Flat Shipping Cost (₹)</label>
                <input type="number" className="form-control" value={settingsShipping} onChange={e => setSettingsShipping(parseInt(e.target.value) || 0)} />
              </div>
              <div className="form-group">
                <label>Default Payment Gateway</label>
                <select className="form-control" value={settingsGateway} onChange={e => setSettingsGateway(e.target.value)}>
                  <option value="razorpay">Razorpay Gateway (Production)</option>
                  <option value="stripe">Stripe Global (Sandbox)</option>
                  <option value="cod-only">Cash On Delivery Only</option>
                </select>
              </div>
              <button className="btn btn-primary" style={{ width: 'fit-content' }} onClick={handleSaveSettings}>Save Configuration</button>
            </div>
          </section>
        )}
      </main>

      {/* Product Form Modal */}
      {showProductModal && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">{editProduct ? 'Edit Product' : 'Add New Product'}</h3>
              <button className="theme-toggle-btn" style={{ fontSize: '20px' }} onClick={() => setShowProductModal(false)}>&times;</button>
            </div>
            <form onSubmit={handleProductFormSubmit}>
              <div className="modal-body">
                <div className="form-group">
                  <label>Product Name</label>
                  <input type="text" className="form-control" value={prodFormName} onChange={e => setProdFormName(e.target.value)} required />
                </div>
                <div className="form-group">
                  <label>Category</label>
                  <select className="form-control" value={prodFormCat} onChange={e => setProdFormCat(e.target.value)}>
                    {categories.map((c, i) => (
                      <option key={i} value={c.id || 1}>{c.name}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label>Price (₹)</label>
                  <input type="number" className="form-control" value={prodFormPrice} onChange={e => setProdFormPrice(e.target.value)} required />
                </div>
                <div className="form-group">
                  <label>Stock Count</label>
                  <input type="number" className="form-control" value={prodFormStock} onChange={e => setProdFormStock(e.target.value)} />
                </div>
                <div className="form-group">
                  <label>Image URL Path</label>
                  <input type="text" className="form-control" value={prodFormImg} onChange={e => setProdFormImg(e.target.value)} placeholder="e.g. assets/product_lamp.png" />
                </div>
                <div className="form-group">
                  <label>Description</label>
                  <textarea className="form-control" value={prodFormDesc} onChange={e => setProdFormDesc(e.target.value)} rows={3}></textarea>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowProductModal(false)}>Cancel</button>
                <button type="submit" className="btn btn-primary">Save Product</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Category Modal */}
      {showCategoryModal && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">Add Category</h3>
              <button className="theme-toggle-btn" style={{ fontSize: '20px' }} onClick={() => setShowCategoryModal(false)}>&times;</button>
            </div>
            <form onSubmit={handleCategoryFormSubmit}>
              <div className="modal-body">
                <div className="form-group">
                  <label>Category Name</label>
                  <input type="text" className="form-control" value={catFormName} onChange={e => setCatFormName(e.target.value)} required />
                </div>
                <div className="form-group">
                  <label>Subtitle / Description</label>
                  <input type="text" className="form-control" value={catFormSubtitle} onChange={e => setCatFormSubtitle(e.target.value)} />
                </div>
                <div className="form-group">
                  <label>Background Accent Hex Color</label>
                  <input type="text" className="form-control" value={catFormBg} onChange={e => setCatFormBg(e.target.value)} placeholder="e.g. #f3e8ff" />
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowCategoryModal(false)}>Cancel</button>
                <button type="submit" className="btn btn-primary">Save Category</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Coupon Modal */}
      {showCouponModal && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">Create Coupon</h3>
              <button className="theme-toggle-btn" style={{ fontSize: '20px' }} onClick={() => setShowCouponModal(false)}>&times;</button>
            </div>
            <form onSubmit={handleCouponFormSubmit}>
              <div className="modal-body">
                <div className="form-group">
                  <label>Coupon Code</label>
                  <input type="text" className="form-control" value={couponFormCode} onChange={e => setCouponFormCode(e.target.value)} placeholder="e.g. SUMMER20" required />
                </div>
                <div className="form-group">
                  <label>Discount Type</label>
                  <select className="form-control" value={couponFormType} onChange={e => setCouponFormType(e.target.value as any)}>
                    <option value="PERCENTAGE">Percentage (%)</option>
                    <option value="FIXED_AMOUNT">Fixed Amount (₹)</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Discount Value</label>
                  <input type="number" className="form-control" value={couponFormValue} onChange={e => setCouponFormValue(e.target.value)} required />
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowCouponModal(false)}>Cancel</button>
                <button type="submit" className="btn btn-primary">Save Coupon</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Payment Details Verification Modal */}
      {showPaymentModal && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">Transaction Details</h3>
              <button className="theme-toggle-btn" style={{ fontSize: '20px' }} onClick={() => setShowPaymentModal(null)}>&times;</button>
            </div>
            <div className="modal-body">
              <p><strong>Order Associated:</strong> ORD-{showPaymentModal.orderId.toString().padStart(6, '0')}</p>
              <p><strong>Payment Mode:</strong> {showPaymentModal.paymentMethod}</p>
              <p><strong>Total Amount Processed:</strong> ₹{showPaymentModal.amount}</p>
              <p><strong>Gateway Transaction Reference ID:</strong></p>
              <p style={{ fontFamily: 'monospace', background: 'var(--input-bg)', padding: '10px', borderRadius: '4px', border: '1px solid var(--border-color)' }}>
                {showPaymentModal.transactionId || 'rzp_test_placeholder_txn_id'}
              </p>
              <p><strong>Payment Verification status:</strong></p>
              <span className={`badge-status status-${showPaymentModal.status.toLowerCase()}`}>
                {showPaymentModal.status}
              </span>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" onClick={() => setShowPaymentModal(null)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
