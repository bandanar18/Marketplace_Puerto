import { useState, useEffect } from 'react';
import AppLayout from '../../layouts/AppLayout/AppLayout';
import { ClipboardList, CreditCard, ShieldAlert, ChevronRight, Activity } from 'lucide-react';
import './Dashboard.css';

export default function OperatorDashboard() {
  const [metrics, setMetrics] = useState({ pendingPayments: 0, pendingInspections: 0, pendingGateOuts: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMetrics = async () => {
      const token = localStorage.getItem('token');
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/orders/operator-metrics`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        const data = await res.json();
        setMetrics(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchMetrics();
  }, []);

  if (loading) return <AppLayout><div className="container">Cargando tablero operativo...</div></AppLayout>;

  return (
    <AppLayout>
      <div className="container" style={{ padding: '40px 0' }}>
        <div style={{ marginBottom: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <h1 style={{ fontSize: '28px', fontWeight: '800' }}>Tablero Operativo</h1>
            <p style={{ color: 'var(--color-slate)' }}>Atención requerida para flujos críticos.</p>
          </div>
          <div style={{ padding: '8px 16px', background: 'var(--color-fog)', borderRadius: '12px', fontSize: '13px', fontWeight: '700' }}>
            <Activity size={14} style={{ marginRight: '8px' }} />
            Sistema Online
          </div>
        </div>

        <div className="kpi-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '24px',
          marginBottom: '40px' 
        }}>
          <div className="kpi-card card" style={{ borderLeft: '6px solid #ef6c00' }}>
            <div className="kpi-icon" style={{ background: '#fff3e0' }}><CreditCard color="#ef6c00" /></div>
            <div className="kpi-data">
              <label>Pagos por Validar</label>
              <h3>{metrics.pendingPayments}</h3>
            </div>
            <button className="btn-icon-link"><ChevronRight /></button>
          </div>

          <div className="kpi-card card" style={{ borderLeft: '6px solid #1976d2' }}>
            <div className="kpi-icon" style={{ background: '#e3f2fd' }}><ClipboardList color="#1976d2" /></div>
            <div className="kpi-data">
              <label>Inspecciones Pendientes</label>
              <h3>{metrics.pendingInspections}</h3>
            </div>
            <button className="btn-icon-link"><ChevronRight /></button>
          </div>

          <div className="kpi-card card" style={{ borderLeft: '6px solid #d32f2f' }}>
            <div className="kpi-icon" style={{ background: '#ffebee' }}><ShieldAlert color="#d32f2f" /></div>
            <div className="kpi-data">
              <label>Bloqueos AGD Activos</label>
              <h3>3</h3>
            </div>
            <button className="btn-icon-link"><ChevronRight /></button>
          </div>
        </div>

        <div className="card" style={{ padding: '32px' }}>
          <h3 style={{ marginBottom: '24px' }}>Cola de Trabajo Prioritaria</h3>
          <div className="task-list">
            <div className="task-item" style={{ 
              display: 'flex', alignItems: 'center', justifyContent: 'space-between', 
              padding: '20px', borderBottom: '1px solid var(--color-mist)' 
            }}>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <div style={{ width: '40px', height: '40px', background: 'var(--color-fog)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>1</div>
                <div>
                  <div style={{ fontWeight: '700' }}>Validar Comprobante #PAY-9921</div>
                  <div style={{ fontSize: '12px', color: 'var(--color-slate)' }}>Orden #ORD-2026-0042 • Hace 15 min</div>
                </div>
              </div>
              <button className="btn btn-primary btn-sm">Revisar Ahora</button>
            </div>
            
            <div className="task-item" style={{ 
              display: 'flex', alignItems: 'center', justifyContent: 'space-between', 
              padding: '20px', borderBottom: '1px solid var(--color-mist)' 
            }}>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <div style={{ width: '40px', height: '40px', background: 'var(--color-fog)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>2</div>
                <div>
                  <div style={{ fontWeight: '700' }}>Asignar Inspector para Gate-in</div>
                  <div style={{ fontSize: '12px', color: 'var(--color-slate)' }}>Terminal Puerto Norte • Hace 45 min</div>
                </div>
              </div>
              <button className="btn btn-primary btn-sm">Asignar</button>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
