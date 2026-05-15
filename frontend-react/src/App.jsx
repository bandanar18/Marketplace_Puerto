import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import AppLayout from './layouts/AppLayout/AppLayout';
import ServiceResultCard from './components/ServiceResultCard/ServiceResultCard';
import LoginPage from './pages/Auth/LoginPage';
import RegisterPage from './pages/Auth/RegisterPage';
import AdminCatalogsPage from './pages/Admin/AdminCatalogsPage';
import StoreOnboarding from './pages/Store/StoreOnboarding';
import ServiceWizard from './pages/Store/ServiceWizard';
import ServiceDetailPage from './pages/Services/ServiceDetailPage';
import CustomerDashboard from './pages/Dashboard/CustomerDashboard';
import FinancialDashboard from './pages/Dashboard/FinancialDashboard';
import StoreProfilePage from './pages/Store/StoreProfilePage';
import StoreDashboard from './pages/Dashboard/StoreDashboard';
import OperatorDashboard from './pages/Dashboard/OperatorDashboard';
import AuditorDashboard from './pages/Dashboard/AuditorDashboard';
import OrderDetailPage from './pages/Orders/OrderDetailPage';
import MyServicesPage from './pages/Store/MyServicesPage';
import AuditLogPage from './pages/Admin/AuditLogPage';
import AdminSettingsPage from './pages/Admin/AdminSettingsPage';
import AdminAnalyticsPage from './pages/Admin/AdminAnalyticsPage';
import WmsInventoryPage from './pages/Wms/WmsInventoryPage';
import AgdDashboard from './pages/Agd/AgdDashboard';
import ReportsPage from './pages/Reports/ReportsPage';
import SupportPage from './pages/Support/SupportPage';
import ProfilePage from './pages/Profile/ProfilePage';
import ChatPage from './pages/Chat/ChatPage';
import ErrorBoundary from './components/Common/ErrorBoundary';
import './App.css';

import FilterSidebar from './components/Search/FilterSidebar';
import SearchMap from './components/Search/SearchMap';

function HomePage() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({});
  const [viewMode, setViewMode] = useState('split'); // 'list' or 'split'
  const [hoveredServiceId, setHoveredServiceId] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      setLoading(true);
      try {
        const url = new URL(`${import.meta.env.VITE_API_URL}/services`);
        if (searchQuery) url.searchParams.append('q', searchQuery);
        if (filters.portId) url.searchParams.append('portId', filters.portId);
        if (filters.categoryId) url.searchParams.append('categoryId', filters.categoryId);
        if (filters.minPrice) url.searchParams.append('minPrice', filters.minPrice);
        if (filters.maxPrice) url.searchParams.append('maxPrice', filters.maxPrice);
        
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch services');
        const data = await response.json();
        setServices(data);
      } catch (error) {
        console.error('Error fetching services:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, [searchQuery, filters]);

  return (
    <AppLayout onSearch={setSearchQuery}>
      <div className="container" style={{ padding: '32px 0' }}>
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
          <div className="hide-mobile" style={{ width: '280px', flexShrink: 0 }}>
            <FilterSidebar onFilterChange={setFilters} />
          </div>
          
          <div style={{ flex: 1, minWidth: '300px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
              <div>
                <h1 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '8px' }}>
                  {searchQuery ? `Resultados para "${searchQuery}"` : 'Explora servicios logísticos'}
                </h1>
                <p style={{ color: 'var(--color-slate)', fontSize: '14px' }}>
                  {services.length} servicios encontrados en esta zona
                </p>
              </div>
              <div className="view-toggle" style={{ display: 'flex', background: 'var(--color-fog)', borderRadius: '12px', padding: '4px' }}>
                <button 
                  onClick={() => setViewMode('list')}
                  style={{ 
                    padding: '8px 16px', border: 'none', borderRadius: '8px', cursor: 'pointer',
                    background: viewMode === 'list' ? '#fff' : 'transparent',
                    boxShadow: viewMode === 'list' ? '0 2px 4px rgba(0,0,0,0.1)' : 'none',
                    fontWeight: '600'
                  }}
                >Lista</button>
                <button 
                  onClick={() => setViewMode('split')}
                  style={{ 
                    padding: '8px 16px', border: 'none', borderRadius: '8px', cursor: 'pointer',
                    background: viewMode === 'split' ? '#fff' : 'transparent',
                    boxShadow: viewMode === 'split' ? '0 2px 4px rgba(0,0,0,0.1)' : 'none',
                    fontWeight: '600'
                  }}
                >Mapa</button>
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '24px' }}>
              <div style={{ flex: viewMode === 'split' ? '1' : '1' }}>
                {loading ? (
                  <div style={{ display: 'grid', gridTemplateColumns: `repeat(auto-fill, minmax(${viewMode === 'split' ? '240px' : '280px'}, 1fr))`, gap: '24px' }}>
                    {[1,2,3,4].map(i => (
                      <div key={i} style={{ height: '320px', background: 'var(--color-mist)', borderRadius: '20px', animation: 'pulse 1.5s infinite' }}></div>
                    ))}
                  </div>
                ) : services.length === 0 ? (
                  <div style={{ textAlign: 'center', padding: '80px 0' }}>
                    <h3 style={{ fontSize: '18px', color: 'var(--carbon)' }}>No encontramos lo que buscas</h3>
                    <p style={{ color: 'var(--color-slate)' }}>Prueba ajustando los filtros.</p>
                  </div>
                ) : (
                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: `repeat(auto-fill, minmax(${viewMode === 'split' ? '240px' : '280px'}, 1fr))`, 
                    gap: '24px' 
                  }}>
                    {services.map(service => (
                      <div 
                        key={service.id} 
                        onMouseEnter={() => setHoveredServiceId(service.id)}
                        onMouseLeave={() => setHoveredServiceId(null)}
                      >
                        <ServiceResultCard service={service} />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {viewMode === 'split' && (
                <div style={{ width: '40%', minWidth: '400px', height: 'calc(100vh - 200px)', position: 'sticky', top: '100px' }} className="hide-mobile">
                  <SearchMap services={services} hoveredServiceId={hoveredServiceId} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* ... existing routes ... */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/admin/catalogs" element={<AdminCatalogsPage />} />
        <Route path="/store/onboarding" element={<StoreOnboarding />} />
        <Route path="/store/services/new" element={<ServiceWizard />} />
        <Route path="/services/:id" element={<ServiceDetailPage />} />
        <Route path="/dashboard" element={<CustomerDashboard />} />
        <Route path="/finances" element={<FinancialDashboard />} />
        <Route path="/store/:id" element={<StoreProfilePage />} />
        <Route path="/store/dashboard" element={<StoreDashboard />} />
        <Route path="/store/my-services" element={<MyServicesPage />} />
        <Route path="/operator/dashboard" element={<OperatorDashboard />} />
        <Route path="/auditor/dashboard" element={<AuditorDashboard />} />
        <Route path="/orders/:id" element={<OrderDetailPage />} />
        <Route path="/admin/settings" element={<AdminSettingsPage />} />
        <Route path="/admin/audit" element={<AuditLogPage />} />
        <Route path="/admin/analytics" element={<AdminAnalyticsPage />} />
        <Route path="/wms/inventory" element={<WmsInventoryPage />} />
        <Route path="/agd/dashboard" element={<AgdDashboard />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/chat" element={<ChatPage />} />
        {/* Add more routes as needed */}
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
