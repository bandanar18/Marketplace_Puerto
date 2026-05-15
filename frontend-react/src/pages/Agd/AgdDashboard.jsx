import { useState, useEffect } from 'react';
import AppLayout from '../../layouts/AppLayout/AppLayout';
import { FileBadge, Landmark, Lock, Unlock, Calendar, DollarSign, AlertCircle } from 'lucide-react';

export default function AgdDashboard() {
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCerts = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/agd/certificates/my`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        const data = await response.json();
        setCertificates(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCerts();
  }, []);

  if (loading) return <AppLayout><div className="container">Cargando instrumentos financieros...</div></AppLayout>;

  return (
    <AppLayout>
      <div className="container" style={{ padding: '40px 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <Landmark size={32} color="var(--color-carbon)" />
            <h1 style={{ margin: 0 }}>Almacén General de Depósito (AGD)</h1>
          </div>
          <button className="btn btn-primary">Emitir Nuevo Certificado</button>
        </div>

        <div className="agd-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          {certificates.map(cert => (
            <div key={cert.id} className="card" style={{ padding: '24px', borderLeft: cert.status === 'PLEDGED' ? '6px solid #d32f2f' : '6px solid #2e7d32' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <FileBadge size={16} color="var(--color-rausch-coral)" />
                    <span style={{ fontSize: '12px', fontWeight: '800', color: 'var(--color-slate)' }}>{cert.folio}</span>
                  </div>
                  <h3 style={{ margin: 0 }}>Certificado de Depósito</h3>
                </div>
                <div style={{ 
                  padding: '6px 12px', borderRadius: '12px', fontSize: '11px', fontWeight: '800',
                  background: cert.status === 'PLEDGED' ? '#ffebee' : '#e8f5e9',
                  color: cert.status === 'PLEDGED' ? '#d32f2f' : '#2e7d32'
                }}>
                  {cert.status}
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
                <div className="info-item">
                  <DollarSign size={14} color="var(--color-slate)" />
                  <div>
                    <label style={{ display: 'block', fontSize: '10px', color: 'var(--color-slate)', textTransform: 'uppercase' }}>Valor Declarado</label>
                    <span style={{ fontWeight: '700' }}>${cert.declaredValue} {cert.currency}</span>
                  </div>
                </div>
                <div className="info-item">
                  <Calendar size={14} color="var(--color-slate)" />
                  <div>
                    <label style={{ display: 'block', fontSize: '10px', color: 'var(--color-slate)', textTransform: 'uppercase' }}>Vencimiento</label>
                    <span style={{ fontWeight: '700' }}>{new Date(cert.expiresAt).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>

              {cert.status === 'PLEDGED' ? (
                <div style={{ 
                  background: '#fff3e0', padding: '16px', borderRadius: '16px', 
                  display: 'flex', alignItems: 'center', gap: '12px',
                  border: '1px solid #ffe0b2'
                }}>
                  <Lock size={20} color="#ef6c00" />
                  <div style={{ fontSize: '13px', color: '#e65100', fontWeight: '600' }}>
                    Mercancía pignorada: Bloqueo de despacho activo.
                  </div>
                </div>
              ) : (
                <div style={{ 
                  background: '#e8f5e9', padding: '16px', borderRadius: '16px', 
                  display: 'flex', alignItems: 'center', gap: '12px'
                }}>
                  <Unlock size={20} color="#2e7d32" />
                  <div style={{ fontSize: '13px', color: '#1b5e20', fontWeight: '600' }}>
                    Libre de gravamen: Disponible para despacho.
                  </div>
                </div>
              )}

              <div style={{ marginTop: '24px', display: 'flex', gap: '12px' }}>
                <button className="btn btn-secondary" style={{ flex: 1, fontSize: '12px' }}>Ver PDF</button>
                {cert.status === 'ACTIVE' && (
                  <button className="btn btn-primary" style={{ flex: 2, fontSize: '12px' }}>Crear Bono de Prenda</button>
                )}
              </div>
            </div>
          ))}
          
          {certificates.length === 0 && (
            <div className="card" style={{ gridColumn: '1 / -1', padding: '60px', textAlign: 'center' }}>
              <AlertCircle size={48} color="var(--color-mist)" style={{ marginBottom: '16px' }} />
              <h3>No tienes instrumentos emitidos</h3>
              <p style={{ color: 'var(--color-slate)' }}>Los certificados de depósito te permiten pignorar tu mercancía para obtener financiamiento.</p>
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  );
}
