import { useState, useEffect } from 'react';
import AppLayout from '../../layouts/AppLayout/AppLayout';
import { Plus, Edit2, Trash2, Package, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function MyServicesPage() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const fetchServices = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/services/my-services`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (response.ok) {
        setServices(await response.json());
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const filteredServices = services.filter(s => 
    s.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AppLayout>
      <div className="container" style={{ padding: '40px 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
          <div>
            <h1 style={{ fontSize: '28px', fontWeight: '800' }}>Mis Servicios</h1>
            <p style={{ color: 'var(--color-slate)' }}>Gestiona el catálogo de servicios de tu tienda.</p>
          </div>
          <button className="btn btn-primary" onClick={() => navigate('/store/services/new')}>
            <Plus size={18} style={{ marginRight: '8px' }} />
            Nuevo Servicio
          </button>
        </div>

        <div className="card" style={{ padding: '32px' }}>
          <div style={{ position: 'relative', marginBottom: '32px' }}>
            <Search size={18} style={{ position: 'absolute', left: '16px', top: '14px', color: 'var(--color-slate)' }} />
            <input 
              type="text" 
              placeholder="Buscar servicio por nombre..." 
              className="form-control"
              style={{ paddingLeft: '48px' }}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
            {filteredServices.map(service => (
              <div key={service.id} className="card" style={{ border: '1px solid var(--color-mist)', padding: '24px', position: 'relative' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <div style={{ padding: '8px', borderRadius: '12px', background: 'var(--color-fog)' }}>
                    <Package size={24} color="var(--color-rausch-coral)" />
                  </div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button className="btn-icon" style={{ padding: '8px' }}><Edit2 size={16} /></button>
                    <button className="btn-icon" style={{ padding: '8px', color: '#ff4d4f' }}><Trash2 size={16} /></button>
                  </div>
                </div>
                <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>{service.name}</h3>
                <p style={{ fontSize: '14px', color: 'var(--color-slate)', marginBottom: '16px', minHeight: '40px' }}>
                  {service.description}
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--color-mist)', paddingTop: '16px' }}>
                  <span style={{ fontWeight: '800', fontSize: '18px' }}>${service.basePrice}</span>
                  <span className={`status-pill ${service.status === 'active' ? 'paid' : 'pending'}`} style={{ fontSize: '10px' }}>
                    {service.status.toUpperCase()}
                  </span>
                </div>
              </div>
            ))}
            {filteredServices.length === 0 && !loading && (
              <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px' }}>
                <p style={{ color: 'var(--color-slate)' }}>No se encontraron servicios.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
