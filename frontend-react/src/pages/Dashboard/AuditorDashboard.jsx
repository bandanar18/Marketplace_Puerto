import { useState, useEffect } from 'react';
import AppLayout from '../../layouts/AppLayout/AppLayout';
import { ShieldCheck, AlertTriangle, UserPlus, Lock, Eye } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './Dashboard.css';

export default function AuditorDashboard() {
  const [loading, setLoading] = useState(true);

  const securityData = [
    { time: '00:00', events: 2 },
    { time: '04:00', events: 0 },
    { time: '08:00', events: 12 },
    { time: '12:00', events: 25 },
    { time: '16:00', events: 18 },
    { time: '20:00', events: 5 },
  ];

  useEffect(() => {
    setTimeout(() => setLoading(false), 800);
  }, []);

  if (loading) return <AppLayout><div className="container">Iniciando protocolo de auditoría...</div></AppLayout>;

  return (
    <AppLayout>
      <div className="container" style={{ padding: '40px 0' }}>
        <div style={{ marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
            <ShieldCheck size={28} color="var(--color-carbon)" />
            <h1 style={{ margin: 0, fontSize: '28px', fontWeight: '800' }}>Control de Auditoría</h1>
          </div>
          <p style={{ color: 'var(--color-slate)' }}>Supervisión de integridad y seguridad de la plataforma.</p>
        </div>

        <div className="kpi-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
          gap: '24px',
          marginBottom: '40px' 
        }}>
          <div className="kpi-card card">
            <div className="kpi-icon" style={{ background: '#ffebee' }}><AlertTriangle color="#d32f2f" /></div>
            <div className="kpi-data">
              <label>Eventos Críticos (24h)</label>
              <h3>14</h3>
            </div>
          </div>
          <div className="kpi-card card">
            <div className="kpi-icon" style={{ background: '#fff3e0' }}><Lock color="#ef6c00" /></div>
            <div className="kpi-data">
              <label>Bloqueos de Cuenta</label>
              <h3>2</h3>
            </div>
          </div>
          <div className="kpi-card card">
            <div className="kpi-icon" style={{ background: '#e3f2fd' }}><UserPlus color="#1976d2" /></div>
            <div className="kpi-data">
              <label>Nuevos Roles Asignados</label>
              <h3>5</h3>
            </div>
          </div>
        </div>

        <div className="charts-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr', 
          gap: '24px',
          marginBottom: '40px' 
        }}>
          <div className="card" style={{ padding: '24px' }}>
            <h3 style={{ marginBottom: '24px' }}>Actividad de Seguridad (Timeline)</h3>
            <div style={{ width: '100%', height: '250px' }}>
              <ResponsiveContainer>
                <LineChart data={securityData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--color-mist)" />
                  <XAxis dataKey="time" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip />
                  <Line type="monotone" dataKey="events" stroke="#d32f2f" strokeWidth={3} dot={{ fill: '#d32f2f' }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="card" style={{ padding: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <h3 style={{ margin: 0 }}>Alertas Recientes de Auditoría</h3>
            <button className="btn btn-secondary">Ver Todo el Log</button>
          </div>
          
          <table className="dashboard-table">
            <thead>
              <tr>
                <th>Severidad</th>
                <th>Acción</th>
                <th>Usuario</th>
                <th>Fecha</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span style={{ padding: '4px 8px', background: '#ffebee', color: '#d32f2f', borderRadius: '6px', fontSize: '10px', fontWeight: '800' }}>CRITICAL</span></td>
                <td><strong>Validación de Pago Forzada</strong></td>
                <td>admin_juan</td>
                <td>Hace 5 min</td>
                <td><button className="btn-icon-link"><Eye size={16} /></button></td>
              </tr>
              <tr>
                <td><span style={{ padding: '4px 8px', background: '#fff3e0', color: '#ef6c00', borderRadius: '6px', fontSize: '10px', fontWeight: '800' }}>HIGH</span></td>
                <td>Cambio de Comisión en Tienda</td>
                <td>admin_maria</td>
                <td>Hace 1 hora</td>
                <td><button className="btn-icon-link"><Eye size={16} /></button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </AppLayout>
  );
}
