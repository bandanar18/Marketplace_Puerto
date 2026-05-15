import { useState, useEffect } from 'react';
import AppLayout from '../../layouts/AppLayout/AppLayout';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Shield, Globe, Users, TrendingUp, CreditCard, Settings, ClipboardList } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../Dashboard/Dashboard.css';

export default function AdminAnalyticsPage() {
  const [loading, setLoading] = useState(true);

  const data = [
    { name: 'Sem 1', gmv: 4000, commission: 200 },
    { name: 'Sem 2', gmv: 3000, commission: 150 },
    { name: 'Sem 3', gmv: 5000, commission: 250 },
    { name: 'Sem 4', gmv: 8000, commission: 400 },
  ];

  useEffect(() => {
    setTimeout(() => setLoading(false), 800);
  }, []);

  if (loading) return <AppLayout><div className="container">Cargando métricas globales...</div></AppLayout>;

  return (
    <AppLayout>
      <div className="container" style={{ padding: '40px 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <Shield size={32} color="var(--color-carbon)" />
            <h1 style={{ margin: 0 }}>Analítica Global</h1>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <Link to="/admin/audit" className="btn btn-secondary">
              <ClipboardList size={18} style={{ marginRight: '8px' }} />
              Auditoría
            </Link>
            <Link to="/admin/settings" className="btn btn-secondary">
              <Settings size={18} style={{ marginRight: '8px' }} />
              Configuración
            </Link>
          </div>
        </div>

        <div className="kpi-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
          gap: '24px',
          marginBottom: '40px' 
        }}>
          <div className="kpi-card card">
            <div className="kpi-icon" style={{ background: '#e3f2fd' }}><Globe color="#1976d2" /></div>
            <div className="kpi-data">
              <label>GMV Global</label>
              <h3>$124,500</h3>
            </div>
          </div>
          <div className="kpi-card card">
            <div className="kpi-icon" style={{ background: '#f3e5f5' }}><CreditCard color="#7b1fa2" /></div>
            <div className="kpi-data">
              <label>Comisiones Totales</label>
              <h3>$6,225</h3>
            </div>
          </div>
          <div className="kpi-card card">
            <div className="kpi-icon" style={{ background: '#e6f4ea' }}><Users color="#1e7e34" /></div>
            <div className="kpi-data">
              <label>Usuarios Activos</label>
              <h3>1,420</h3>
            </div>
          </div>
        </div>

        <div className="card" style={{ padding: '24px' }}>
          <h3 style={{ marginBottom: '24px' }}>Crecimiento de Plataforma</h3>
          <div style={{ width: '100%', height: '400px' }}>
            <ResponsiveContainer>
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorGmv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--color-rausch-coral)" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="var(--color-rausch-coral)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--color-mist)" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip />
                <Area type="monotone" dataKey="gmv" stroke="var(--color-rausch-coral)" fillOpacity={1} fill="url(#colorGmv)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
