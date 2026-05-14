import { useState, useEffect } from 'react';
import AppLayout from '../../layouts/AppLayout/AppLayout';
import { Shield, Eye, Clock, User, Activity } from 'lucide-react';

export default function AuditLogsPage() {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedLog, setSelectedLog] = useState(null);

  useEffect(() => {
    const fetchLogs = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/audit/logs`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        const data = await response.json();
        setLogs(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchLogs();
  }, []);

  const getCriticalityColor = (level) => {
    switch (level) {
      case 'CRITICAL': return '#c53030';
      case 'HIGH': return '#b7791f';
      case 'MEDIUM': return '#3182ce';
      default: return '#718096';
    }
  };

  return (
    <AppLayout>
      <div className="container" style={{ padding: '40px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
          <Shield size={32} color="var(--color-carbon)" />
          <h1 style={{ margin: 0 }}>Registro de Auditoría</h1>
        </div>

        <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead style={{ background: 'var(--color-fog)' }}>
              <tr>
                <th style={{ textAlign: 'left', padding: '16px 24px', fontSize: '13px', color: 'var(--color-slate)' }}>Timestamp</th>
                <th style={{ textAlign: 'left', padding: '16px 24px', fontSize: '13px', color: 'var(--color-slate)' }}>Acción</th>
                <th style={{ textAlign: 'left', padding: '16px 24px', fontSize: '13px', color: 'var(--color-slate)' }}>Entidad</th>
                <th style={{ textAlign: 'left', padding: '16px 24px', fontSize: '13px', color: 'var(--color-slate)' }}>Usuario</th>
                <th style={{ textAlign: 'center', padding: '16px 24px', fontSize: '13px', color: 'var(--color-slate)' }}>Criticidad</th>
                <th style={{ textAlign: 'right', padding: '16px 24px', fontSize: '13px', color: 'var(--color-slate)' }}>Detalles</th>
              </tr>
            </thead>
            <tbody>
              {logs.map(log => (
                <tr key={log.id} style={{ borderBottom: '1px solid var(--color-mist)' }}>
                  <td style={{ padding: '16px 24px', fontSize: '14px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Clock size={14} color="var(--color-slate)" />
                      {new Date(log.timestamp).toLocaleString()}
                    </div>
                  </td>
                  <td style={{ padding: '16px 24px', fontSize: '14px', fontWeight: '700' }}>{log.action}</td>
                  <td style={{ padding: '16px 24px', fontSize: '14px' }}>
                    {log.entityType} <span style={{ color: 'var(--color-slate)' }}>#{log.entityId}</span>
                  </td>
                  <td style={{ padding: '16px 24px', fontSize: '14px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <User size={14} color="var(--color-slate)" />
                      ID: {log.userId} ({log.userRole})
                    </div>
                  </td>
                  <td style={{ padding: '16px 24px', textAlign: 'center' }}>
                    <span style={{ 
                      padding: '4px 8px', borderRadius: '8px', fontSize: '11px', fontWeight: '800',
                      background: `${getCriticalityColor(log.criticality)}20`,
                      color: getCriticalityColor(log.criticality)
                    }}>
                      {log.criticality}
                    </span>
                  </td>
                  <td style={{ padding: '16px 24px', textAlign: 'right' }}>
                    <button className="btn-icon" onClick={() => setSelectedLog(log)}>
                      <Eye size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {selectedLog && (
          <div className="modal-overlay" style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000
          }}>
            <div style={{ background: 'white', padding: '32px', borderRadius: '24px', width: '90%', maxWidth: '800px', maxHeight: '80vh', overflow: 'auto' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
                <h2>Detalle de Evento #{selectedLog.id}</h2>
                <button className="btn btn-secondary" onClick={() => setSelectedLog(null)}>Cerrar</button>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                <div>
                  <h4 style={{ marginBottom: '12px', color: 'var(--color-slate)' }}>Estado Previo</h4>
                  <pre style={{ background: 'var(--color-fog)', padding: '16px', borderRadius: '12px', fontSize: '12px', overflow: 'auto' }}>
                    {JSON.stringify(selectedLog.previousValue, null, 2)}
                  </pre>
                </div>
                <div>
                  <h4 style={{ marginBottom: '12px', color: 'var(--color-slate)' }}>Nuevo Estado</h4>
                  <pre style={{ background: '#e6f4ea', padding: '16px', borderRadius: '12px', fontSize: '12px', overflow: 'auto' }}>
                    {JSON.stringify(selectedLog.newValue, null, 2)}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </AppLayout>
  );
}
