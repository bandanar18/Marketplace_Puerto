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
import OrderDetailPage from './pages/Orders/OrderDetailPage';
import CommissionConfigPage from './pages/Admin/CommissionConfigPage';
import AuditLogsPage from './pages/Admin/AuditLogsPage';
import './App.css';

import FilterSidebar from './components/Search/FilterSidebar';

function HomePage() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({});

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
        <div style={{ display: 'flex', gap: '40px' }}>
          <div className="hide-mobile" style={{ width: '280px', flexShrink: 0 }}>
            <FilterSidebar onFilterChange={setFilters} />
          </div>
          
          <div style={{ flex: 1 }}>
            <div style={{ marginBottom: '32px' }}>
              <h1 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '8px' }}>
                {searchQuery ? `Resultados para "${searchQuery}"` : 'Explora servicios logísticos'}
              </h1>
              <p style={{ color: 'var(--color-slate)', fontSize: '14px' }}>
                {services.length} servicios encontrados en esta zona
              </p>
            </div>
            
            {loading ? (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
                {[1,2,3,4].map(i => (
                  <div key={i} style={{ height: '320px', background: 'var(--color-mist)', borderRadius: '20px', animation: 'pulse 1.5s infinite' }}></div>
                ))}
              </div>
            ) : services.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '80px 0' }}>
                <h3 style={{ fontSize: '18px', color: 'var(--color-carbon)' }}>No encontramos lo que buscas</h3>
                <p style={{ color: 'var(--color-slate)' }}>Prueba ajustando los filtros o cambiando la búsqueda.</p>
              </div>
            ) : (
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
                gap: '24px' 
              }}>
                {services.map(service => (
                  <ServiceResultCard key={service.id} service={service} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
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
      <Route path="/orders/:id" element={<OrderDetailPage />} />
      <Route path="/admin/commissions" element={<CommissionConfigPage />} />
      <Route path="/admin/audit" element={<AuditLogsPage />} />
      {/* Add more routes as needed */}
    </Routes>
  );
}

export default App;
