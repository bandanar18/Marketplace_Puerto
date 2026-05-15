import { useState, useEffect } from 'react';
import AppLayout from '../../layouts/AppLayout/AppLayout';
import { Shield, Search, Filter, Calendar, User, Activity, ChevronRight } from 'lucide-react';

export default function AuditLogPage() {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({ userId: '', action: '', entityType: '' });

  const fetchLogs = async () => {
    setLoading(true);
    const token = localStorage.getItem('token');
    try {
      const url = new URL(`${import.meta.env.VITE_API_URL}/audit/logs`);
      if (filters.userId) url.searchParams.append('userId', filters.userId);
      if (filters.action) url.searchParams.append('action', filters.action);
      if (filters.entityType) url.searchParams.append('entityType', filters.entityType);

      const response = await fetch(url, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await response.json();
      setLogs(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLogs();
  }, [filters]);

  return (
    <AppLayout>
      <div className="container" style={{ padding: '40px 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <Shield size={32} color="var(--color-rausch-coral)" />
              <h1 style={{ margin: 0 }}>Registro de Auditoría</h1>
            </div>
            <p style={{ color: 'var(--color-slate)' }}>Supervisión de actividad crítica y cambios en el sistema.</p>
          </div>
          
          <div style={{ display: 'flex', gap: '12px' }}>
            <div style={{ position: 'relative' }}>
              <Search size={16} style={{ position: 'absolute', left: '12px', top: '12px', color: 'var(--color-slate)' }} />
              <input 
                type="text" 
                placeholder="Filtrar por User ID..." 
                className="form-control"
                style={{ paddingLeft: '36px', width: '200px' }}
                onChange={e => setFilters({...filters, userId: e.target.value})}
              />
            </div>
            <select className="form-control" onChange={e => setFilters({...filters, action: e.target.value})}>
              <option value="">Todas las Acciones</option>
              <option value="WMS_RECEIVE_STOCK">Recepción WMS</option>
              <option value="WMS_DISPATCH">Despacho WMS</option>
              <option value="PAYMENT_VALIDATED">Validación Pago</option>
              <option value="ORDER_CREATED">Orden Creada</option>
            </select>
          </div>
        </div>

        <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead style={{ background: 'var(--color-fog)' }}>
              <tr>
                <th style={{ textAlign: 'left', padding: '16px 24px', fontSize: '13px', color: 'var(--color-slate)' }}>Acción</th>
                <th style={{ textAlign: 'left', padding: '16px 24px', fontSize: '13px', color: 'var(--color-slate)' }}>Usuario</th>
                <th style={{ textAlign: 'left', padding: '16px 24px', fontSize: '13px', color: 'var(--color-slate)' }}>Entidad</th>
                <th style={{ textAlign: 'left', padding: '16px 24px', fontSize: '13px', color: 'var(--color-slate)' }}>Fecha y Hora</th>
                <th style={{ textAlign: 'center', padding: '16px 24px', fontSize: '13px', color: 'var(--color-slate)' }}>Detalles</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr><td colSpan="5" style={{ padding: '40px', textAlign: 'center' }}>Cargando registros...</td></tr>
              ) : logs.map(log => (
                <tr key={log.id} style={{ borderBottom: '1px solid var(--color-mist)' }}>
                  <td style={{ padding: '16px 24px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{ padding: '8px', borderRadius: '8px', background: 'var(--color-fog)' }}>
                        <Activity size={16} color="var(--color-carbon)" />
                      </div>
                      <span style={{ fontWeight: '700', fontSize: '14px' }}>{log.action}</span>
                    </div>
                  </td>
                  <td style={{ padding: '16px 24px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px' }}>
                      <User size={14} color="var(--color-slate)" />
                      ID: {log.userId}
                    </div>
                  </td>
                  <td style={{ padding: '16px 24px' }}>
                    <div style={{ fontSize: '14px' }}>
                      <span style={{ color: 'var(--color-slate)' }}>{log.entityType}:</span> <strong>{log.entityId}</strong>
                    </div>
                  </td>
                  <td style={{ padding: '16px 24px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'var(--color-slate)' }}>
                      <Calendar size={14} />
                      {new Date(log.timestamp).toLocaleString()}
                    </div>
                  </td>
                  <td style={{ padding: '16px 24px', textAlign: 'center' }}>
                    <button className="btn btn-sm" style={{ background: 'var(--color-mist)', border: 'none' }} title={JSON.stringify(log.newValue)}>
                      <ChevronRight size={14} />
                    </button>
                  </td>
                </tr>
              ))}
              {!loading && logs.length === 0 && (
                <tr><td colSpan="5" style={{ padding: '40px', textAlign: 'center', color: 'var(--color-slate)' }}>No se encontraron registros de auditoría.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </AppLayout>
  );
}
