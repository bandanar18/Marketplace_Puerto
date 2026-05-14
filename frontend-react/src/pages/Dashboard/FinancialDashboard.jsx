import { useState, useEffect } from 'react';
import AppLayout from '../../layouts/AppLayout/AppLayout';
import { DollarSign, ArrowUpRight, ArrowDownRight, Clock } from 'lucide-react';

export default function FinancialDashboard() {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPayments = async () => {
      const token = localStorage.getItem('token');
      try {
        // Fetch pending payments for validation (if operator)
        const response = await fetch(`${import.meta.env.VITE_API_URL}/payments/pending`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        const data = await response.json();
        setPayments(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchPayments();
  }, []);

  const totalEarnings = payments
    .filter(p => p.status === 'APPROVED')
    .reduce((sum, p) => sum + parseFloat(p.amount), 0);

  const pendingPayments = payments
    .filter(p => p.status === 'PAYMENT_PENDING_VALIDATION')
    .length;

  return (
    <AppLayout>
      <div className="container" style={{ padding: '40px 0' }}>
        <h1 style={{ marginBottom: '32px' }}>Resumen Financiero</h1>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', marginBottom: '48px' }}>
          <div className="stat-card" style={{ background: 'white', padding: '24px', borderRadius: '24px', boxShadow: 'var(--shadow-subtle)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
              <span style={{ fontSize: '14px', fontWeight: '600', color: 'var(--color-slate)' }}>Total Facturado</span>
              <DollarSign size={20} color="var(--color-rausch-coral)" />
            </div>
            <div style={{ fontSize: '32px', fontWeight: '700' }}>${totalEarnings.toFixed(2)}</div>
            <div style={{ fontSize: '12px', color: '#1e7e34', marginTop: '8px', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <ArrowUpRight size={14} /> +12.5% este mes
            </div>
          </div>

          <div className="stat-card" style={{ background: 'white', padding: '24px', borderRadius: '24px', boxShadow: 'var(--shadow-subtle)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
              <span style={{ fontSize: '14px', fontWeight: '600', color: 'var(--color-slate)' }}>Pagos por Validar</span>
              <Clock size={20} color="#b7791f" />
            </div>
            <div style={{ fontSize: '32px', fontWeight: '700' }}>{pendingPayments}</div>
            <p style={{ margin: '8px 0 0 0', fontSize: '12px', color: 'var(--color-stone)' }}>Requieren tu atención</p>
          </div>
        </div>

        <h2 style={{ marginBottom: '24px' }}>Historial de Pagos</h2>
        <div style={{ background: 'white', borderRadius: '24px', overflow: 'hidden', boxShadow: 'var(--shadow-subtle)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead style={{ background: '#f7f7f7' }}>
              <tr>
                <th style={{ textAlign: 'left', padding: '16px 24px', fontSize: '14px' }}>Referencia</th>
                <th style={{ textAlign: 'left', padding: '16px 24px', fontSize: '14px' }}>Cliente</th>
                <th style={{ textAlign: 'left', padding: '16px 24px', fontSize: '14px' }}>Monto</th>
                <th style={{ textAlign: 'left', padding: '16px 24px', fontSize: '14px' }}>Estado</th>
                <th style={{ textAlign: 'right', padding: '16px 24px', fontSize: '14px' }}>Acción</th>
              </tr>
            </thead>
            <tbody>
              {payments.map(payment => (
                <tr key={payment.id} style={{ borderTop: '1px solid #eee' }}>
                  <td style={{ padding: '16px 24px' }}>#{payment.referenceNumber}</td>
                  <td style={{ padding: '16px 24px' }}>{payment.reportedBy.name}</td>
                  <td style={{ padding: '16px 24px', fontWeight: '600' }}>${payment.amount} {payment.currency?.code}</td>
                  <td style={{ padding: '16px 24px' }}>
                    <span style={{ 
                      padding: '4px 8px', borderRadius: '8px', fontSize: '12px', fontWeight: '700',
                      backgroundColor: payment.status === 'PAYMENT_PENDING_VALIDATION' ? '#fff8e6' : payment.status === 'APPROVED' ? '#e6f4ea' : '#fdecea',
                      color: payment.status === 'PAYMENT_PENDING_VALIDATION' ? '#b7791f' : payment.status === 'APPROVED' ? '#1e7e34' : '#c53030'
                    }}>
                      {payment.status}
                    </span>
                  </td>
                  <td style={{ padding: '16px 24px', textAlign: 'right' }}>
                    {payment.status === 'PAYMENT_PENDING_VALIDATION' && (
                      <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                        <button 
                          className="btn btn-primary" 
                          style={{ fontSize: '11px', padding: '6px 12px' }}
                          onClick={async () => {
                            const token = localStorage.getItem('token');
                            await fetch(`${import.meta.env.VITE_API_URL}/payments/${payment.id}/validate`, {
                              method: 'PUT',
                              headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                              body: JSON.stringify({ status: 'APPROVED' })
                            });
                            window.location.reload();
                          }}
                        >
                          Aprobar
                        </button>
                        <button 
                          className="btn btn-secondary" 
                          style={{ fontSize: '11px', padding: '6px 12px' }}
                          onClick={async () => {
                            const reason = prompt('Motivo del rechazo:');
                            if (!reason) return;
                            const token = localStorage.getItem('token');
                            await fetch(`${import.meta.env.VITE_API_URL}/payments/${payment.id}/validate`, {
                              method: 'PUT',
                              headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                              body: JSON.stringify({ status: 'REJECTED', notes: reason })
                            });
                            window.location.reload();
                          }}
                        >
                          Rechazar
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AppLayout>
  );
}
