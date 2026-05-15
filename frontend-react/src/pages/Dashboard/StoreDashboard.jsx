import { useState, useEffect } from 'react';
import AppLayout from '../../layouts/AppLayout/AppLayout';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Package, DollarSign, ArrowUpRight, FileText, List } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function StoreDashboard() {
  const [stats, setStats] = useState({ totalOrders: 0, totalGMV: 0, statusDistribution: {} });
  const [orders, setOrders] = useState([]);
  const [quotations, setQuotations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      try {
        const [ordersRes, statsRes, quotesRes] = await Promise.all([
          fetch(`${import.meta.env.VITE_API_URL}/orders/store-orders`, {
            headers: { 'Authorization': `Bearer ${token}` }
          }),
          fetch(`${import.meta.env.VITE_API_URL}/orders/stats`, {
            headers: { 'Authorization': `Bearer ${token}` }
          }),
          fetch(`${import.meta.env.VITE_API_URL}/quotations/store-requests`, {
            headers: { 'Authorization': `Bearer ${token}` }
          })
        ]);

        if (ordersRes.status === 401 || statsRes.status === 401 || quotesRes.status === 401) {
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          window.location.href = '/login';
          return;
        }

        const ordersData = await ordersRes.json();
        const statsData = await statsRes.json();
        const quotesData = await quotesRes.json();
        
        setOrders(Array.isArray(ordersData) ? ordersData : []);
        setQuotations(Array.isArray(quotesData) ? quotesData : []);
        setStats(statsData?.totalOrders !== undefined ? statsData : { totalOrders: 0, totalGMV: 0, statusDistribution: {} });
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const pieData = Object.keys(stats.statusDistribution).map(key => ({
    name: key,
    value: stats.statusDistribution[key]
  }));

  const COLORS = ['#FF5A5F', '#00A699', '#FC642D', '#484848', '#767676'];

  const chartData = [
    { name: 'Ene', income: 4000 },
    { name: 'Feb', income: 3000 },
    { name: 'Mar', income: 2000 },
    { name: 'Abr', income: stats.totalGMV || 0 }, // Simulated trend
  ];

  const handleExportCSV = async () => {
    const token = localStorage.getItem('token');
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/reports/orders/csv`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `reporte_ordenes_${new Date().toISOString().split('T')[0]}.csv`;
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch (err) {
      console.error('Error al exportar CSV:', err);
    }
  };

  if (loading) return <AppLayout><div className="container">Cargando dashboard...</div></AppLayout>;

  return (
    <AppLayout>
      <div className="container" style={{ padding: '40px 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
          <div>
            <h1 style={{ fontSize: '28px', fontWeight: '800', margin: 0 }}>Panel de Tienda</h1>
            <p style={{ color: 'var(--color-slate)', margin: 0 }}>Monitorea el rendimiento de tus operaciones logísticas.</p>
          </div>
          <Link to="/store/my-services" className="btn btn-secondary">
            <List size={18} style={{ marginRight: '8px' }} />
            Gestionar Mis Servicios
          </Link>
        </div>

        <div className="kpi-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
          gap: '24px',
          marginBottom: '40px' 
        }}>
          <div className="kpi-card card">
            <div className="kpi-icon" style={{ background: '#e6f4ea' }}><DollarSign color="#1e7e34" /></div>
            <div className="kpi-data">
              <label>Ingresos Totales (GMV)</label>
              <h3>${stats.totalGMV.toLocaleString()}</h3>
            </div>
            <div className="kpi-trend positive"><ArrowUpRight size={14} /> 12%</div>
          </div>

          <div className="kpi-card card">
            <div className="kpi-icon" style={{ background: '#e3f2fd' }}><Package color="#1976d2" /></div>
            <div className="kpi-data">
              <label>Órdenes Activas</label>
              <h3>{stats.totalOrders}</h3>
            </div>
          </div>

          <div className="kpi-card card">
            <div className="kpi-icon" style={{ background: '#fff3e0' }}><TrendingUp color="#ef6c00" /></div>
            <div className="kpi-data">
              <label>Tasa de Conversión</label>
              <h3>68%</h3>
            </div>
          </div>
        </div>

        <div className="charts-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: '2fr 1fr', 
          gap: '24px',
          marginBottom: '40px' 
        }}>
          <div className="card" style={{ padding: '24px' }}>
            <h3 style={{ marginBottom: '24px' }}>Ingresos Mensuales</h3>
            <div style={{ width: '100%', height: '300px' }}>
              <ResponsiveContainer>
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--color-mist)" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12}} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} 
                  />
                  <Bar dataKey="income" fill="var(--color-rausch-coral)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="card" style={{ padding: '24px' }}>
            <h3 style={{ marginBottom: '24px' }}>Distribución de Órdenes</h3>
            <div style={{ width: '100%', height: '300px' }}>
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={pieData}
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="card" style={{ padding: '24px', marginBottom: '40px' }}>
          <h3 style={{ marginBottom: '24px' }}>Solicitudes de Cotización Recientes</h3>
          <table className="dashboard-table">
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Cliente</th>
                <th>Servicio</th>
                <th>Estado</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              {quotations.map(quote => (
                <tr key={quote.id}>
                  <td>{new Date(quote.createdAt).toLocaleDateString()}</td>
                  <td>{quote.client?.firstName} {quote.client?.lastName}</td>
                  <td>{quote.service?.name}</td>
                  <td>
                    <span className={`status-pill ${quote.status.toLowerCase()}`}>
                      {quote.status}
                    </span>
                  </td>
                  <td>
                    <button className="link" style={{ background: 'none', border: 'none', padding: 0 }}>Responder</button>
                  </td>
                </tr>
              ))}
              {quotations.length === 0 && (
                <tr>
                  <td colSpan="5" style={{ textAlign: 'center', padding: '40px', color: 'var(--color-slate)' }}>
                    No hay solicitudes pendientes.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="card" style={{ padding: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <h3 style={{ margin: 0 }}>Órdenes Recientes</h3>
            <button onClick={handleExportCSV} className="btn btn-secondary">
              <FileText size={16} style={{ marginRight: '8px' }} />
              Exportar CSV
            </button>
          </div>
          
          <table className="dashboard-table">
            <thead>
              <tr>
                <th>Orden</th>
                <th>Cliente</th>
                <th>Servicio</th>
                <th>Monto</th>
                <th>Estado</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(order => (
                <tr key={order.id}>
                  <td style={{ fontWeight: '700' }}>{order.orderNumber}</td>
                  <td>{order.client?.firstName} {order.client?.lastName}</td>
                  <td>{order.service?.name}</td>
                  <td>${order.totalAmount}</td>
                  <td>
                    <span className={`status-pill ${order.state?.code.toLowerCase()}`}>
                      {order.state?.name}
                    </span>
                  </td>
                  <td>
                    <a href={`/orders/${order.id}`} className="link">Ver Detalle</a>
                  </td>
                </tr>
              ))}
              {orders.length === 0 && (
                <tr>
                  <td colSpan="6" style={{ textAlign: 'center', padding: '40px', color: 'var(--color-slate)' }}>
                    Aún no hay órdenes registradas.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </AppLayout>
  );
}
