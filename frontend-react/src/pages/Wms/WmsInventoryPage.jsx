import { useState, useEffect } from 'react';
import AppLayout from '../../layouts/AppLayout/AppLayout';
import { Box, MapPin, Calendar, Database, Search, Lock } from 'lucide-react';

export default function WmsInventoryPage() {
  const [inventory, setInventory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const fetchInventory = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/wms/inventory/my`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        const data = await response.json();
        setInventory(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchInventory();
  }, []);

  const filteredItems = inventory.filter(item => 
    item.sku.toLowerCase().includes(filter.toLowerCase()) || 
    item.description.toLowerCase().includes(filter.toLowerCase())
  );

  if (loading) return <AppLayout><div className="container">Cargando inventario...</div></AppLayout>;

  return (
    <AppLayout>
      <div className="container" style={{ padding: '40px 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <Database size={32} color="var(--color-rausch-coral)" />
            <h1 style={{ margin: 0 }}>Mi Inventario (WMS)</h1>
          </div>
          
          <div style={{ position: 'relative', width: '300px' }}>
            <Search size={18} style={{ position: 'absolute', left: '12px', top: '12px', color: 'var(--color-slate)' }} />
            <input 
              type="text" 
              placeholder="Buscar por SKU o descripción..."
              style={{ width: '100%', padding: '10px 10px 10px 40px', borderRadius: '12px', border: '1px solid var(--color-mist)' }}
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
          </div>
        </div>

        <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead style={{ background: 'var(--color-fog)' }}>
              <tr>
                <th style={{ textAlign: 'left', padding: '16px 24px', fontSize: '13px', color: 'var(--color-slate)' }}>SKU / Ítem</th>
                <th style={{ textAlign: 'center', padding: '16px 24px', fontSize: '13px', color: 'var(--color-slate)' }}>Cantidad</th>
                <th style={{ textAlign: 'left', padding: '16px 24px', fontSize: '13px', color: 'var(--color-slate)' }}>Ubicación</th>
                <th style={{ textAlign: 'left', padding: '16px 24px', fontSize: '13px', color: 'var(--color-slate)' }}>Fecha Recepción</th>
                <th style={{ textAlign: 'center', padding: '16px 24px', fontSize: '13px', color: 'var(--color-slate)' }}>Estado</th>
              </tr>
            </thead>
            <tbody>
              {filteredItems.map(item => (
                <tr key={item.id} style={{ borderBottom: '1px solid var(--color-mist)', background: item.isBlocked ? '#fff8f8' : 'transparent' }}>
                  <td style={{ padding: '16px 24px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      {item.isBlocked && <Lock size={16} color="#d32f2f" />}
                      <div>
                        <div style={{ fontWeight: '700', color: item.isBlocked ? '#d32f2f' : 'var(--color-carbon)' }}>{item.sku}</div>
                        <div style={{ fontSize: '12px', color: 'var(--color-slate)' }}>{item.description}</div>
                      </div>
                    </div>
                  </td>
                  <td style={{ padding: '16px 24px', textAlign: 'center', fontWeight: '800' }}>
                    {item.quantity} {item.unit}
                  </td>
                  <td style={{ padding: '16px 24px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px' }}>
                      <MapPin size={14} color="var(--color-rausch-coral)" />
                      Rack {item.position.rack.code} - L{item.position.level} C{item.position.column}
                    </div>
                  </td>
                  <td style={{ padding: '16px 24px', fontSize: '14px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Calendar size={14} color="var(--color-slate)" />
                      {new Date(item.receivedAt).toLocaleDateString()}
                    </div>
                  </td>
                  <td style={{ padding: '16px 24px', textAlign: 'center' }}>
                    <span style={{ 
                      padding: '4px 10px', borderRadius: '8px', fontSize: '11px', fontWeight: '800',
                      background: item.isBlocked ? '#ffebee' : '#e8f5e9',
                      color: item.isBlocked ? '#d32f2f' : '#2e7d32'
                    }}>
                      {item.isBlocked ? 'PIGNORADO' : item.status}
                    </span>
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
