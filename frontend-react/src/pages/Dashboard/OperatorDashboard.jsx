import { useState, useEffect } from 'react';
import AppLayout from '../../layouts/AppLayout/AppLayout';
import { ClipboardList, CreditCard, ShieldAlert, ChevronRight, Activity } from 'lucide-react';
import './Dashboard.css';

export default function OperatorDashboard() {
  const [metrics, setMetrics] = useState({ pendingPayments: 0, activeTrips: 0, pendingInspections: 0 });
  const [pendingPayments, setPendingPayments] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const token = localStorage.getItem('token');
    try {
      const [metricsRes, paymentsRes] = await Promise.all([
        fetch(`${import.meta.env.VITE_API_URL}/orders/operator-metrics`, {
          headers: { 'Authorization': `Bearer ${token}` }
        }),
        fetch(`${import.meta.env.VITE_API_URL}/payments/pending`, {
          headers: { 'Authorization': `Bearer ${token}` }
        })
      ]);

      if (metricsRes.status === 401 || paymentsRes.status === 401) {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.href = '/login';
        return;
      }

      const metricsData = await metricsRes.json();
      const paymentsData = await paymentsRes.json();
      setMetrics(metricsData);
      setPendingPayments(Array.isArray(paymentsData) ? paymentsData : []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleValidatePayment = async (paymentId, status) => {
    const token = localStorage.getItem('token');
    if (!window.confirm(`¿Estás seguro de ${status === 'APPROVED' ? 'APROBAR' : 'RECHAZAR'} este pago?`)) return;
    
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/payments/${paymentId}/validate`, {
        method: 'PUT',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` 
        },
        body: JSON.stringify({ status, notes: status === 'REJECTED' ? 'Pago rechazado por el operador.' : 'Validación exitosa.' })
      });
      if (res.ok) {
        fetchData();
      }
    } catch (err) {
      console.error(err);
    }
  };

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
              <label>Viajes en Tránsito</label>
              <h3>{metrics.activeTrips}</h3>
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
          <h3 style={{ marginBottom: '24px' }}>Cola de Trabajo Prioritaria (Pagos)</h3>
          <div className="task-list">
            {pendingPayments.map((payment, index) => (
              <div key={payment.id} className="task-item" style={{ 
                display: 'flex', alignItems: 'center', justifyContent: 'space-between', 
                padding: '20px', borderBottom: '1px solid var(--color-mist)' 
              }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <div style={{ width: '40px', height: '40px', background: 'var(--color-fog)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {index + 1}
                  </div>
                  <div>
                    <div style={{ fontWeight: '700' }}>Ref: {payment.referenceNumber} - ${payment.amount}</div>
                    <div style={{ fontSize: '12px', color: 'var(--color-slate)' }}>
                      Orden {payment.order?.orderNumber} • {payment.order?.client?.firstName} {payment.order?.client?.lastName}
                    </div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <button 
                    onClick={() => handleValidatePayment(payment.id, 'REJECTED')}
                    className="btn btn-secondary btn-sm" 
                    style={{ background: '#fff', border: '1px solid #d32f2f', color: '#d32f2f' }}
                  >
                    Rechazar
                  </button>
                  <button 
                    onClick={() => handleValidatePayment(payment.id, 'APPROVED')}
                    className="btn btn-primary btn-sm"
                  >
                    Aprobar Pago
                  </button>
                </div>
              </div>
            ))}
            {pendingPayments.length === 0 && (
              <div style={{ textAlign: 'center', padding: '40px', color: 'var(--color-slate)' }}>
                No hay pagos pendientes de validación.
              </div>
            )}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
